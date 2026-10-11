'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Timer, GraduationCap } from 'lucide-react';
import { useProfile } from '@/lib/use-profile';
import { usePack } from '@/lib/content';
import { isLang, Lang } from '@/lib/lang';
import { Level } from '@/lib/profiles';
import { setProfileLevel } from '@/lib/storage';
import { TOPICS_BY_LANG } from '@/lib/grammar-by-lang';
import { TENSES_BY_LANG, defaultTenses } from '@/lib/tenses';
import { getConjugationExercise } from '@/lib/conjugation-client';
import { grammarQuestions, vocabQuestions, scoreLevel, shuffle, TestQuestion } from '@/lib/placement-test';
import ChoiceCard from '@/components/practice/ChoiceCard';
import { useT } from '@/lib/ui-lang';

const TEST_SECONDS = 5 * 60;
const COUNTS = { vocabA1: 2, vocabB1: 2, grammarA1: 3, grammarB1: 3, verbA1: 2, verbB1: 2 };

type Phase = 'intro' | 'building' | 'running' | 'saving' | 'done' | 'error';

// Replaces manual A1/B1 self-assessment: a short, mixed-difficulty quiz (vocab,
// grammar, verb forms) under a 5-minute clock. Scored on B1-level accuracy —
// the A1 questions are a warm-up everyone gets right, so what decides the
// level is whether the harder ones land too.
export default function EinstufungstestPage() {
  const params = useParams<{ lang: string }>();
  const router = useRouter();
  const t = useT();
  const { profile, setLang, reloadProfile, ready: profileReady } = useProfile();
  const lang: Lang | null = isLang(params.lang) ? params.lang : null;
  const vocabPack = usePack('vocab', lang ?? 'it');
  const verbPack = usePack('verbs', lang ?? 'it');

  const [phase, setPhase] = useState<Phase>('intro');
  const [questions, setQuestions] = useState<TestQuestion[]>([]);
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<{ level: Level; correct: boolean }[]>([]);
  const [secondsLeft, setSecondsLeft] = useState(TEST_SECONDS);
  const [resultLevel, setResultLevel] = useState<Level | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (profileReady && !profile) router.push('/profile');
  }, [profileReady, profile, router]);

  useEffect(() => {
    if (lang === null) router.push('/sprache');
  }, [lang, router]);

  // Countdown while running; time's up ⇒ unanswered questions count as wrong.
  useEffect(() => {
    if (phase !== 'running') return;
    if (secondsLeft <= 0) {
      const rest = questions.slice(idx).map(q => ({ level: q.level, correct: false }));
      finishTest([...answers, ...rest]);
      return;
    }
    const id = setTimeout(() => setSecondsLeft(s => s - 1), 1000);
    return () => clearTimeout(id);
  }, [phase, secondsLeft]);

  async function buildVerbQuestions(level: Level, n: number): Promise<TestQuestion[]> {
    if (!lang || !verbPack) return [];
    const tenseId =
      level === 'A1'
        ? defaultTenses(lang, true)[0]
        : shuffle(TENSES_BY_LANG[lang].filter(x => x.level === 'B1')).map(x => x.id)[0];
    if (!tenseId) return [];
    const out: TestQuestion[] = [];
    for (const verb of shuffle(verbPack.verbs.map(v => v.infinitive))) {
      if (out.length >= n) break;
      try {
        const ex = await getConjugationExercise({ lang, verb, tenses: [tenseId] });
        const section = ex.sections[0];
        if (!section || section.tense !== tenseId) continue;
        const pi = Math.floor(Math.random() * section.pronouns.length);
        const answer = section.answers[pi];
        const distractors = shuffle([...new Set(section.answers.filter((a, i) => i !== pi && a !== answer))]).slice(0, 3);
        if (distractors.length < 2) continue;
        out.push({
          level,
          domain: 'verb',
          label: ['Verbs', 'Verben'],
          before: `${verb} — ${section.pronouns[pi]}: `,
          after: '',
          answer,
          options: shuffle([answer, ...distractors]),
        });
      } catch {
        // skip this verb, try the next
      }
    }
    return out;
  }

  async function startTest() {
    if (!lang || !vocabPack || !verbPack) return;
    setPhase('building');
    setError('');
    try {
      const topics = TOPICS_BY_LANG[lang];
      const starterWords = new Set(vocabPack.starter.map(w => w.target));
      const restCatalog = vocabPack.catalog.filter(w => !starterWords.has(w.target));
      const vocabA1 = vocabQuestions(vocabPack.starter, vocabPack.catalog, 'A1', COUNTS.vocabA1);
      const vocabB1 = vocabQuestions(
        restCatalog.length >= COUNTS.vocabB1 ? restCatalog : vocabPack.catalog,
        vocabPack.catalog,
        'B1',
        COUNTS.vocabB1,
      );
      const gramA1 = grammarQuestions(topics, 'A1', COUNTS.grammarA1);
      const gramB1 = grammarQuestions(topics, 'B1', COUNTS.grammarB1);
      const [verbA1, verbB1] = await Promise.all([
        buildVerbQuestions('A1', COUNTS.verbA1),
        buildVerbQuestions('B1', COUNTS.verbB1),
      ]);
      const all = shuffle([...vocabA1, ...vocabB1, ...gramA1, ...gramB1, ...verbA1, ...verbB1]);
      if (all.length === 0) {
        setError(t('Could not build the test. Please try again.', 'Der Test konnte nicht erstellt werden. Bitte versuch es noch einmal.'));
        setPhase('intro');
        return;
      }
      setQuestions(all);
      setIdx(0);
      setAnswers([]);
      setSecondsLeft(TEST_SECONDS);
      setPhase('running');
    } catch {
      setError(t('Could not build the test. Please try again.', 'Der Test konnte nicht erstellt werden. Bitte versuch es noch einmal.'));
      setPhase('intro');
    }
  }

  function handleAnswer(correct: boolean) {
    const q = questions[idx];
    const next = [...answers, { level: q.level, correct }];
    const nextIdx = idx + 1;
    if (nextIdx >= questions.length) {
      finishTest(next);
    } else {
      setAnswers(next);
      setIdx(nextIdx);
    }
  }

  function finishTest(finalAnswers: { level: Level; correct: boolean }[]) {
    const level = scoreLevel(finalAnswers);
    setResultLevel(level);
    setPhase('saving');
    save(level);
  }

  async function save(level: Level) {
    if (!profile || !lang) return;
    try {
      await setProfileLevel(profile.id, lang, level);
      reloadProfile();
      setPhase('done');
    } catch {
      setError(t('Could not save the level. Please try again.', 'Das Niveau konnte nicht gespeichert werden. Bitte versuch es noch einmal.'));
      setPhase('error');
    }
  }

  function start() {
    if (!lang) return;
    setLang(lang);
    router.push('/heute');
  }

  if (!profileReady || !profile || !lang) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-400 text-sm">{t('Loading…', 'Lädt …')}</p>
      </main>
    );
  }

  const mm = Math.floor(secondsLeft / 60);
  const ss = (secondsLeft % 60).toString().padStart(2, '0');

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6 pb-24 md:pb-6">
      <div className="w-full max-w-sm space-y-5">
        {phase === 'intro' && (
          <div className="text-center space-y-4">
            <GraduationCap className="w-10 h-10 text-red-700 mx-auto" />
            <h1 className="text-2xl text-gray-900">{t('Placement test', 'Einstufungstest')}</h1>
            <p className="text-sm text-gray-500">
              {t(
                'About 5 minutes of mixed questions — vocabulary, grammar and verb forms — to find your level.',
                'Rund 5 Minuten gemischte Fragen – Vokabeln, Grammatik und Verbformen –, um dein Niveau zu finden.',
              )}
            </p>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <button
              onClick={startTest}
              disabled={!vocabPack || !verbPack}
              className="w-full h-12 bg-red-700 hover:bg-red-800 disabled:opacity-50 text-white rounded-full font-semibold transition-colors"
            >
              {!vocabPack || !verbPack ? t('Loading…', 'Lädt …') : t('Start test →', 'Test starten →')}
            </button>
            <Link href="/sprache" className="block text-xs text-gray-400 hover:text-gray-600">
              ← {t('Back', 'Zurück')}
            </Link>
          </div>
        )}

        {phase === 'building' && (
          <p className="text-center text-sm text-gray-400 animate-pulse">{t('Preparing the test…', 'Test wird vorbereitet …')}</p>
        )}

        {phase === 'running' && questions[idx] && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-gray-400 font-medium">
              <span>{idx + 1}/{questions.length}</span>
              <span className="flex items-center gap-1 tabular-nums">
                <Timer className="w-3.5 h-3.5" /> {mm}:{ss}
              </span>
            </div>
            <ChoiceCard
              key={idx}
              label={t(questions[idx].label[0], questions[idx].label[1])}
              before={questions[idx].before}
              after={questions[idx].after}
              answer={questions[idx].answer}
              options={questions[idx].options}
              hint={questions[idx].hint}
              lang={lang}
              onResult={correct => handleAnswer(correct)}
            />
          </div>
        )}

        {phase === 'saving' && (
          <p className="text-center text-sm text-gray-400 animate-pulse">{t('Saving…', 'Wird gespeichert …')}</p>
        )}

        {phase === 'error' && (
          <div className="text-center space-y-3">
            <p className="text-sm text-red-600">{error}</p>
            <button
              onClick={() => resultLevel && save(resultLevel)}
              className="w-full h-12 bg-red-700 hover:bg-red-800 text-white rounded-full font-semibold transition-colors"
            >
              {t('Try again', 'Nochmal versuchen')}
            </button>
          </div>
        )}

        {phase === 'done' && resultLevel && (
          <div className="text-center space-y-4">
            <GraduationCap className="w-10 h-10 text-red-700 mx-auto" />
            <h1 className="text-2xl text-gray-900">
              {t('Your level:', 'Dein Niveau:')} {resultLevel === 'A1' ? t('Beginner (A1)', 'Anfänger (A1)') : t('Intermediate (B1)', 'Fortgeschritten (B1)')}
            </h1>
            <button
              onClick={start}
              className="w-full h-12 bg-red-700 hover:bg-red-800 text-white rounded-full font-semibold transition-colors"
            >
              {t("Let's go →", 'Los geht’s →')}
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
