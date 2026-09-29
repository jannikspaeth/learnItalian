'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import {
  getExtras,
  updateExtras,
  loadVocabStrict,
  upsertVocabWord,
  getConjugationRecords,
  getGrammarRecords,
  getSentenceProgress,
  setSentenceProgress,
  recordExercise,
  recordMistakes,
} from '@/lib/storage';
import {
  ExerciseType,
  MistakeItem,
  MistakeKind,
  SentenceProgress,
  UserExtras,
  VocabEntry,
} from '@/lib/types';
import { useLearner } from '@/lib/use-profile';
import { usePack } from '@/lib/content';
import { langInfo, Lang } from '@/lib/lang';
import { loadExamples } from '@/lib/vocab-examples';
import { useQuizDirection, askTarget } from '@/lib/use-quiz-direction';
import { chosenTenses } from '@/lib/tenses';
import { getConjugationExercise } from '@/lib/conjugation-client';
import { TOPICS_BY_LANG } from '@/lib/grammar-by-lang';
import { berlinToday } from '@/lib/race';
import { checkWordAnswer, checkClozeAnswer } from '@/lib/answer-check';
import { conjugationMatches } from '@/lib/conjugation-match';
import { spokenForm } from '@/lib/speech';
import { Confidence, VOCAB_KNOWN_LEVEL, VOCAB_INTERVALS, computeNewLevel, nextReviewDate } from '@/lib/srs';
import {
  RoundStep,
  ROUND_PLAN,
  vocabSteps,
  pickRoundVerbs,
  grammarSteps,
  sentenceSteps,
} from '@/lib/daily-round';
import {
  MISTAKE_KINDS,
  MISTAKE_CLEAR_AFTER,
  kindInfo,
  pickTraining,
  applyTraining,
  removeMistake,
  vocabMistake,
  verbMistake,
  grammarMistake,
  sentenceMistake,
  dictationMistake,
} from '@/lib/mistakes';
import TypeCard from '@/components/practice/TypeCard';
import ChoiceCard from '@/components/practice/ChoiceCard';
import SelfCard from '@/components/practice/SelfCard';
import DictationCard from '@/components/practice/DictationCard';
import SpeakButton from '@/components/SpeakButton';
import { useT, useUiLang, tenseName } from '@/lib/ui-lang';

type Mode = 'home' | 'round' | 'mistakes' | 'list';

// Which race/stats bucket each step counts for.
const MISTAKE_TYPE: Record<MistakeKind, ExerciseType> = {
  vocab: 'vocabulary',
  verb: 'conjugation',
  grammar: 'grammar',
  sentence: 'sentence',
  dictation: 'sentence',
};
function exerciseType(step: RoundStep): ExerciseType {
  switch (step.kind) {
    case 'vocab': return 'vocabulary';
    case 'verb': return 'conjugation';
    case 'grammar': return 'grammar';
    case 'sentence':
    case 'dictation': return 'sentence';
    case 'mistake': return MISTAKE_TYPE[step.mistake.kind];
  }
}

const BLOCK_LABEL: Record<RoundStep['kind'], [string, string]> = {
  vocab: ['📖 Words', '📖 Wörter'],
  verb: ['🔤 Verbs', '🔤 Verben'],
  grammar: ['📘 Grammar', '📘 Grammatik'],
  sentence: ['✍️ Sentences', '✍️ Sätze'],
  dictation: ['🎧 Dictation', '🎧 Diktat'],
  mistake: ['🩹 My mistakes', '🩹 Meine Fehler'],
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function HeutePage() {
  const { profile, lang, beginner, ready } = useLearner();
  const info = langInfo(lang);
  const vocabPack = usePack('vocab', lang);
  const verbPack = usePack('verbs', lang);
  const [quizDir] = useQuizDirection();
  const t = useT();
  const [uiLang] = useUiLang();
  const block = (k: RoundStep['kind']) => t(...BLOCK_LABEL[k]);
  const langName = t(info.name, info.nameDe);

  const [extras, setExtras] = useState<UserExtras | null>(null);
  const [mode, setMode] = useState<Mode>('home');
  const [steps, setSteps] = useState<RoundStep[]>([]);
  const [idx, setIdx] = useState(0);
  const [finished, setFinished] = useState(false);
  const [building, setBuilding] = useState(false);
  const [error, setError] = useState('');
  const [tally, setTally] = useState<Partial<Record<RoundStep['kind'], { c: number; t: number }>>>({});
  const [filter, setFilter] = useState<MistakeKind | 'all'>('all');

  // Data the round writes back to (kept in refs: updated per answer, no re-render needed).
  const vocabRef = useRef<VocabEntry[]>([]);
  const sentenceRef = useRef<SentenceProgress[]>([]);
  const saveChain = useRef<Promise<unknown>>(Promise.resolve());
  // Activity for the race, sent in batches so half-credit types (verbs, grammar)
  // are rounded over a block rather than per item.
  const pending = useRef<Partial<Record<ExerciseType, { c: number; t: number }>>>({});

  const refreshExtras = useCallback(() => { getExtras().then(setExtras); }, []);
  useEffect(() => {
    if (!ready) return;
    let alive = true;
    getExtras().then(e => { if (alive) setExtras(e); });
    return () => { alive = false; };
  }, [ready]);

  const flushActivity = useCallback(() => {
    const batch = pending.current;
    pending.current = {};
    for (const [type, v] of Object.entries(batch) as [ExerciseType, { c: number; t: number }][]) {
      if (v.t > 0) saveChain.current = saveChain.current.then(() => recordExercise(type, v.c, v.t)).catch(() => {});
    }
  }, []);
  // Leaving the page mid-round still counts what was done.
  useEffect(() => () => flushActivity(), [flushActivity]);

  if (!ready || !profile || !vocabPack || !verbPack) {
    return (
      <main className="md:ml-56 min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-400 text-sm">{t('Loading…', 'Lädt …')}</p>
      </main>
    );
  }

  const today = berlinToday();
  const roundsToday = extras?.rounds[today] ?? 0;
  const mistakes = extras?.mistakes ?? [];
  const countByKind = (k: MistakeKind) => mistakes.filter(m => m.kind === k).length;

  // ── Building a round ──

  async function startRound() {
    setBuilding(true);
    setError('');
    try {
      const [vocab, examples, conj, grammar, sprog] = await Promise.all([
        loadVocabStrict(),
        loadExamples(lang),
        getConjugationRecords(),
        getGrammarRecords(),
        getSentenceProgress(),
      ]);
      vocabRef.current = vocab;
      sentenceRef.current = sprog;

      const words = vocabSteps(vocab, vocabPack!, beginner, lang, examples, () => askTarget(quizDir));
      const verbSteps = await buildVerbSteps(pickRoundVerbs(conj, verbPack!.verbs), conj);
      const gram = grammarSteps(TOPICS_BY_LANG[lang], grammar, beginner);
      const sent = sentenceSteps(vocab, examples, sprog, lang);
      begin('round', [...words, ...verbSteps, ...gram, ...sent]);
    } catch {
      setError(t('Could not load your progress. Check your connection and try again.', 'Dein Fortschritt konnte nicht geladen werden. Prüf deine Verbindung und versuch es noch einmal.'));
    } finally {
      setBuilding(false);
    }
  }

  // One form per verb: a form you got wrong last time if there is one, else a random one.
  async function buildVerbSteps(verbs: string[], records: Awaited<ReturnType<typeof getConjugationRecords>>): Promise<RoundStep[]> {
    const tenses = chosenTenses(lang, beginner);
    const exercises = await Promise.all(
      verbs.map(verb =>
        getConjugationExercise({ lang, verb, beginner, tenses }).catch(() => null),
      ),
    );
    const out: RoundStep[] = [];
    for (const ex of exercises) {
      if (!ex?.sections?.length) continue;
      const rec = records.find(r => r.verb === ex.verb);
      let section = ex.sections[Math.floor(Math.random() * ex.sections.length)];
      let pi = Math.floor(Math.random() * section.pronouns.length);
      for (const s of shuffle(ex.sections)) {
        const miss = rec?.sections.find(rs => rs.tense === s.tense)?.recentMistakes[0];
        const at = miss ? s.pronouns.indexOf(miss.pronoun) : -1;
        if (at >= 0) { section = s; pi = at; break; }
      }
      out.push({
        kind: 'verb',
        verb: ex.verb,
        tense: section.tense,
        tenseLabel: section.tenseName_de,
        pronoun: section.pronouns[pi],
        answer: section.answers[pi],
      });
    }
    return out;
  }

  function startMistakes() {
    const chosen = pickTraining(mistakes, filter);
    if (chosen.length === 0) return;
    begin('mistakes', chosen.map(m => ({ kind: 'mistake', mistake: m })));
  }

  function begin(m: Mode, s: RoundStep[]) {
    if (s.length === 0) return;
    pending.current = {};
    setSteps(s);
    setIdx(0);
    setTally({});
    setFinished(false);
    setMode(m);
  }

  function backHome() {
    flushActivity();
    setMode('home');
    setSteps([]);
    setFinished(false);
    refreshExtras();
  }

  // ── Answers ──

  function saveVocab(step: Extract<RoundStep, { kind: 'vocab' }>, correct: boolean) {
    const conf: Confidence = 'sicher';
    const newLevel = computeNewLevel(step.currentLevel, correct, conf, VOCAB_KNOWN_LEVEL);
    const nr = nextReviewDate(newLevel, correct, conf, { knownLevel: VOCAB_KNOWN_LEVEL, intervals: VOCAB_INTERVALS });
    const now = new Date().toISOString();
    const existing = vocabRef.current.find(v => (step.vocabId ? v.id === step.vocabId : false));
    const entry: VocabEntry = existing
      ? { ...existing, level: newLevel, nextReview: nr, lastReviewed: now, reviewCount: existing.reviewCount + 1 }
      : {
          id: crypto.randomUUID(),
          word: step.target,
          translation: step.de,
          example: step.example || undefined,
          level: newLevel,
          nextReview: nr,
          lastReviewed: now,
          addedAt: now,
          reviewCount: 1,
        };
    vocabRef.current = existing
      ? vocabRef.current.map(v => (v.id === entry.id ? entry : v))
      : [entry, ...vocabRef.current];
    saveChain.current = saveChain.current.then(() => upsertVocabWord(entry)).catch(() => setError(t('Some answers could not be saved.', 'Einige Antworten konnten nicht gespeichert werden.')));
  }

  function saveSentence(key: string, correct: boolean) {
    const conf: Confidence = correct ? 'sicher' : 'again';
    const prev = sentenceRef.current.find(p => p.key === key);
    const level = computeNewLevel(prev?.level ?? 1, correct, conf);
    const row: SentenceProgress = {
      key,
      level,
      nextReview: nextReviewDate(level, correct, conf),
      lastReviewed: new Date().toISOString(),
      reviewCount: (prev?.reviewCount ?? 0) + 1,
    };
    const next = [...sentenceRef.current.filter(p => p.key !== key), row];
    sentenceRef.current = next;
    saveChain.current = saveChain.current.then(() => setSentenceProgress(next)).catch(() => setError(t('Some answers could not be saved.', 'Einige Antworten konnten nicht gespeichert werden.')));
  }

  function handleResult(correct: boolean, userAnswer = '') {
    const step = steps[idx];
    switch (step.kind) {
      case 'vocab':
        saveVocab(step, correct);
        // Brand-new words aren't mistakes yet — you've never seen them.
        if (!correct && step.vocabId) {
          recordMistakes([vocabMistake({
            key: step.key, askTarget: step.askTarget, target: step.target, userAnswer,
            question: step.askTarget ? step.target : step.de,
            answer: step.askTarget ? step.de : step.target,
          })]);
        }
        break;
      case 'verb':
        if (!correct) recordMistakes([verbMistake({ ...step, userAnswer })]);
        break;
      case 'grammar':
        if (!correct) recordMistakes([grammarMistake({ topicId: step.topicId, ...step.item, userAnswer })]);
        break;
      case 'sentence':
        saveSentence(step.key, correct);
        if (!correct) {
          recordMistakes([sentenceMistake({ key: step.key, askTarget: false, source: step.de, target: step.text, targetText: step.text, userAnswer })]);
        }
        break;
      case 'dictation':
        if (!correct) recordMistakes([dictationMistake({ ...step, userAnswer })]);
        break;
      case 'mistake': {
        const id = step.mistake.id;
        setExtras(e => (e ? { ...e, mistakes: applyTraining(e.mistakes, id, correct, userAnswer) } : e));
        updateExtras(e => ({ ...e, mistakes: applyTraining(e.mistakes, id, correct, userAnswer) })).catch(() =>
          setError(t('Some answers could not be saved.', 'Einige Antworten konnten nicht gespeichert werden.')),
        );
        break;
      }
    }

    const type = exerciseType(step);
    const p = (pending.current[type] ??= { c: 0, t: 0 });
    p.t += 1;
    if (correct) p.c += 1;
    setTally(t => {
      const cur = t[step.kind] ?? { c: 0, t: 0 };
      return { ...t, [step.kind]: { c: cur.c + (correct ? 1 : 0), t: cur.t + 1 } };
    });

    const next = steps[idx + 1];
    if (!next || exerciseType(next) !== type) flushActivity();
    if (!next) {
      setFinished(true);
      if (mode === 'round') {
        setExtras(e => (e ? { ...e, rounds: { ...e.rounds, [today]: (e.rounds[today] ?? 0) + 1 } } : e));
        updateExtras(e => ({ ...e, rounds: { ...pruneRounds(e.rounds), [today]: (e.rounds[today] ?? 0) + 1 } })).catch(() => {});
      }
    } else {
      setIdx(i => i + 1);
    }
  }

  // ── Rendering ──

  function renderStep(step: RoundStep, key: number) {
    const flag = info.flag;
    switch (step.kind) {
      case 'vocab': {
        const answer = step.askTarget ? step.de : step.target;
        return (
          <TypeCard
            key={key}
            label={`${step.vocabId ? t('Review', 'Wiederholen') : t('New word', 'Neues Wort')} · ${t('Translate', 'Übersetze')} ${step.askTarget ? `${flag} → 🇩🇪` : `🇩🇪 → ${flag}`}`}
            prompt={step.askTarget ? step.target : step.de}
            answer={answer}
            check={v => checkWordAnswer(v, answer, lang)}
            speakText={step.target}
            speakPrompt={step.askTarget}
            lang={lang}
            placeholder={step.askTarget ? t('German…', 'Deutsch …') : `${langName} …`}
            onResult={handleResult}
          />
        );
      }
      case 'verb':
        return (
          <TypeCard
            key={key}
            label={`${t('Conjugate', 'Konjugiere')} · ${tenseName(step.tenseLabel, uiLang)}`}
            prompt={<span><span className="text-gray-400 font-medium">{step.pronoun}</span> ＿＿</span>}
            sub={step.verb}
            answer={step.answer}
            check={v => ({ correct: conjugationMatches(v, step.answer) })}
            speakText={spokenForm(step.pronoun, step.answer, lang)}
            lang={lang}
            onResult={handleResult}
          />
        );
      case 'grammar':
        return (
          <ChoiceCard
            key={key}
            label={`${t('Grammar', 'Grammatik')} · ${step.topicTitle}`}
            before={step.item.before}
            after={step.item.after}
            answer={step.item.answer}
            options={step.item.options}
            hint={step.item.hint}
            lang={lang}
            onResult={handleResult}
          />
        );
      case 'sentence':
        return (
          <SelfCard
            key={key}
            label={`${t('Translate', 'Übersetze')} 🇩🇪 → ${flag}`}
            source={step.de}
            target={step.text}
            speakText={step.text}
            lang={lang}
            onResult={handleResult}
          />
        );
      case 'dictation':
        return (
          <DictationCard
            key={key}
            item={step}
            lang={lang}
            position={idx + 1}
            total={steps.length}
            onDone={(_, typed, r) => handleResult(r.perfect, typed)}
          />
        );
      case 'mistake':
        return renderMistake(step.mistake, key, lang, flag);
    }
  }

  function renderMistake(m: MistakeItem, key: number, lang: Lang, flag: string) {
    const last = m.userAnswer ? `${t('Last time', 'Letztes Mal')}: ${m.userAnswer}` : undefined;
    switch (m.kind) {
      case 'vocab': {
        const toDe = m.hint === 'toDe';
        return (
          <TypeCard
            key={key}
            label={`${t('Translate', 'Übersetze')} ${toDe ? `${flag} → 🇩🇪` : `🇩🇪 → ${flag}`}`}
            prompt={m.prompt}
            sub={last}
            answer={m.answer}
            check={v => checkWordAnswer(v, m.answer, lang)}
            speakText={m.speak}
            speakPrompt={toDe}
            lang={lang}
            onResult={handleResult}
          />
        );
      }
      case 'verb':
        return (
          <TypeCard
            key={key}
            label={`${t('Conjugate', 'Konjugiere')} · ${tenseName(m.hint ?? '', uiLang)}`}
            prompt={<span><span className="text-gray-400 font-medium">{m.prompt}</span> ＿＿</span>}
            sub={last}
            answer={m.answer}
            check={v => ({ correct: conjugationMatches(v, m.answer) })}
            speakText={m.speak}
            lang={lang}
            onResult={handleResult}
          />
        );
      case 'grammar': {
        const [before, after = ''] = m.prompt.split('___');
        return m.options && m.options.length > 1 ? (
          <ChoiceCard
            key={key}
            label={t('Grammar', 'Grammatik')}
            before={before}
            after={after}
            answer={m.answer}
            options={m.options}
            hint={m.hint}
            lang={lang}
            onResult={handleResult}
          />
        ) : (
          <TypeCard
            key={key}
            label={t('Grammar · fill the gap', 'Grammatik · Lücke füllen')}
            prompt={<span className="text-lg font-medium">{before}＿＿{after}</span>}
            sub={m.hint}
            answer={m.answer}
            check={v => ({ correct: checkClozeAnswer(v, m.answer, m.alternatives) })}
            speakText={m.speak}
            lang={lang}
            onResult={handleResult}
          />
        );
      }
      case 'sentence': {
        const toDe = m.hint === 'toDe';
        return (
          <SelfCard
            key={key}
            label={`${t('Translate', 'Übersetze')} ${toDe ? `${flag} → 🇩🇪` : `🇩🇪 → ${flag}`}`}
            source={m.prompt}
            target={m.answer}
            speakText={m.speak}
            speakSource={toDe}
            lang={lang}
            onResult={handleResult}
          />
        );
      }
      case 'dictation':
        return (
          <DictationCard
            key={key}
            item={{ key: m.id, text: m.answer, de: m.prompt }}
            lang={lang}
            position={idx + 1}
            total={steps.length}
            onDone={(_, typed, r) => handleResult(r.perfect, typed)}
          />
        );
    }
  }

  const active = (mode === 'round' || mode === 'mistakes') && steps.length > 0;

  return (
    <main className="md:ml-56 min-h-screen bg-gray-50 pb-24 md:pb-8">
      <div className="max-w-xl mx-auto p-5 space-y-5">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <span>☀️</span> {t('Today', 'Heute')}
          </h1>
          <p className="text-gray-400 text-sm mt-0.5">
            {new Date().toLocaleDateString(uiLang === 'de' ? 'de-DE' : 'en-GB', { weekday: 'long', day: 'numeric', month: 'long' })} · {info.flag} {langName}
          </p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-sm text-red-700">⚠ {error}</div>
        )}

        {active && !finished && steps[idx] && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span className="font-medium text-gray-600">{block(steps[idx].kind)}</span>
              <div className="flex items-center gap-3">
                <span className="tabular-nums">{idx + 1} / {steps.length}</span>
                <button onClick={backHome} className="hover:text-gray-600 transition-colors">{t('Finish', 'Beenden')}</button>
              </div>
            </div>
            <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-red-600 rounded-full transition-all"
                style={{ width: `${Math.round((idx / steps.length) * 100)}%` }}
              />
            </div>
            {renderStep(steps[idx], idx)}
          </div>
        )}

        {active && finished && (
          <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center space-y-4">
            <p className="text-4xl">{mode === 'round' ? '🎉' : '💪'}</p>
            <p className="font-semibold text-gray-900">
              {mode === 'round' ? t("Today's round is done!", 'Die Tagesrunde ist geschafft!') : t('Mistake training done', 'Fehlertraining geschafft')}
            </p>
            <div className="space-y-1">
              {(Object.entries(tally) as [RoundStep['kind'], { c: number; t: number }][]).map(([k, v]) => (
                <p key={k} className="text-sm text-gray-500">
                  {block(k)}: <span className="font-semibold text-gray-800">{v.c} / {v.t}</span>
                </p>
              ))}
            </div>
            {mode === 'mistakes' && (
              <p className="text-xs text-gray-400">
                {t(
                  `A mistake disappears after you get it right ${MISTAKE_CLEAR_AFTER}× in a row.`,
                  `Ein Fehler verschwindet, wenn du ihn ${MISTAKE_CLEAR_AFTER}× hintereinander richtig hast.`,
                )}
              </p>
            )}
            <div className="flex gap-2 justify-center">
              <button
                onClick={backHome}
                className="px-4 py-2.5 border border-gray-200 hover:bg-gray-50 text-gray-600 rounded-xl text-sm transition-colors"
              >
                {t('Done', 'Fertig')}
              </button>
              {mistakes.length > 0 && (
                <button
                  onClick={() => { setFilter('all'); begin('mistakes', pickTraining(mistakes).map(m => ({ kind: 'mistake', mistake: m }))); }}
                  className="px-4 py-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-sm font-semibold transition-colors"
                >
                  {t('Practise mistakes', 'Fehler üben')} ({mistakes.length}) →
                </button>
              )}
            </div>
          </div>
        )}

        {mode === 'home' && (
          <>
            {/* Daily round */}
            <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="font-bold text-gray-900 text-lg">{t('Today’s round', 'Tagesrunde')}</h2>
                  <p className="text-sm text-gray-500 mt-0.5">
                    {t(
                      'A bit of everything, about 10 minutes – no need to decide what to practise.',
                      'Von allem etwas, etwa 10 Minuten – ohne zu überlegen, was du üben sollst.',
                    )}
                  </p>
                </div>
                {roundsToday > 0 && (
                  <span className="shrink-0 text-xs font-semibold px-2 py-1 rounded-lg bg-green-100 text-green-700">
                    ✓ {roundsToday > 1 ? `${roundsToday}×` : ''} {t('done', 'erledigt')}
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-1.5 text-xs">
                <span className="px-2 py-1 rounded-lg bg-gray-100 text-gray-600">📖 {ROUND_PLAN.vocab} {t('words', 'Wörter')}</span>
                <span className="px-2 py-1 rounded-lg bg-gray-100 text-gray-600">🔤 {ROUND_PLAN.verbs} {t('verb forms', 'Verbformen')}</span>
                <span className="px-2 py-1 rounded-lg bg-gray-100 text-gray-600">📘 {ROUND_PLAN.grammar} {t('grammar', 'Grammatik')}</span>
                <span className="px-2 py-1 rounded-lg bg-gray-100 text-gray-600">✍️ {ROUND_PLAN.sentences} {t('sentences', 'Sätze')}</span>
                <span className="px-2 py-1 rounded-lg bg-gray-100 text-gray-600">🎧 {ROUND_PLAN.dictation} {t('dictation', 'Diktat')}</span>
              </div>
              <p className="text-xs text-gray-400">
                {t(
                  'Reviews that are due come first, then new material. Everything counts for the race.',
                  'Zuerst kommt, was fällig ist, dann Neues. Alles zählt fürs Rennen.',
                )}
              </p>
              <button
                onClick={startRound}
                disabled={building}
                className="w-full py-3 bg-red-700 hover:bg-red-800 disabled:bg-gray-300 text-white rounded-xl font-semibold transition-colors"
              >
                {building
                  ? t('Putting your round together…', 'Deine Runde wird zusammengestellt …')
                  : roundsToday > 0
                    ? t('Another round →', 'Noch eine Runde →')
                    : t("Start today's round →", 'Tagesrunde starten →')}
              </button>
            </section>

            {/* My mistakes */}
            <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="font-bold text-gray-900 text-lg">🩹 {t('My mistakes', 'Meine Fehler')}</h2>
                  <p className="text-sm text-gray-500 mt-0.5">
                    {t(
                      `Everything you got wrong – words, verbs, grammar, sentences, dictation. Get it right ${MISTAKE_CLEAR_AFTER}× in a row and it disappears.`,
                      `Alles, was du falsch hattest – Wörter, Verben, Grammatik, Sätze, Diktat. Hast du es ${MISTAKE_CLEAR_AFTER}× hintereinander richtig, verschwindet es.`,
                    )}
                  </p>
                </div>
                <span className="shrink-0 text-2xl font-bold text-amber-500 tabular-nums">{extras ? mistakes.length : '…'}</span>
              </div>

              {mistakes.length === 0 ? (
                <p className="text-sm text-gray-400 text-center py-2">
                  {extras ? t('No mistakes collected – great! 🎉', 'Keine Fehler gesammelt – super! 🎉') : t('Loading…', 'Lädt …')}
                </p>
              ) : (
                <>
                  <div className="flex flex-wrap gap-1.5">
                    {[{ id: 'all' as const, icon: '🧩', label: 'All', labelDe: 'Alle' }, ...MISTAKE_KINDS].map(k => {
                      const n = k.id === 'all' ? mistakes.length : countByKind(k.id);
                      if (n === 0) return null;
                      return (
                        <button
                          key={k.id}
                          onClick={() => setFilter(k.id)}
                          className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                            filter === k.id ? 'bg-red-700 text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                          }`}
                        >
                          {k.icon} {t(k.label, k.labelDe)} <span className="opacity-70">{n}</span>
                        </button>
                      );
                    })}
                  </div>
                  <button
                    onClick={startMistakes}
                    className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-semibold transition-colors"
                  >
                    {t('Practise mistakes →', 'Fehler üben →')}
                  </button>
                  <button
                    onClick={() => setMode('list')}
                    className="w-full text-xs text-gray-400 hover:text-gray-600"
                  >
                    {t('Show all mistakes', 'Alle Fehler anzeigen')}
                  </button>
                </>
              )}
            </section>

            {/* More to do */}
            <section className="grid grid-cols-2 gap-3">
              <Link href="/lesen" className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 hover:bg-gray-50 transition-colors">
                <p className="text-2xl">📰</p>
                <p className="font-semibold text-gray-900 text-sm mt-1">{t('Reading', 'Lesen')}</p>
                <p className="text-xs text-gray-400">{t('Short stories with tap-to-translate', 'Kurze Geschichten, Wörter per Antippen übersetzen')}</p>
              </Link>
              <Link href="/saetze" className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 hover:bg-gray-50 transition-colors">
                <p className="text-2xl">🎧</p>
                <p className="font-semibold text-gray-900 text-sm mt-1">{t('Dictation', 'Diktat')}</p>
                <p className="text-xs text-gray-400">{t('Listen and write it down', 'Hören und aufschreiben')}</p>
              </Link>
            </section>
          </>
        )}

        {mode === 'list' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-gray-900">{t('All mistakes', 'Alle Fehler')} ({mistakes.length})</h2>
              <button onClick={() => setMode('home')} className="text-sm text-gray-500 hover:text-gray-800">← {t('Back', 'Zurück')}</button>
            </div>
            {mistakes.map(m => (
              <div key={m.id} className="bg-white rounded-xl border border-gray-100 p-3 flex items-start gap-3">
                <span className="text-lg shrink-0" title={t(kindInfo(m.kind).label, kindInfo(m.kind).labelDe)}>{kindInfo(m.kind).icon}</span>
                <div className="min-w-0 flex-1 text-sm">
                  <p className="text-gray-700">
                    {m.kind === 'verb' && <span className="text-gray-400">{tenseName(m.hint ?? '', uiLang)} · </span>}
                    {m.kind === 'grammar' ? m.prompt.replace('___', '＿') : m.prompt}
                  </p>
                  <p className="font-semibold text-green-700 flex items-center gap-2">
                    {m.answer}
                    {m.speak && <SpeakButton text={m.speak} lang={lang} />}
                  </p>
                  <p className="text-xs text-gray-400">
                    {m.wrong}× {t('wrong', 'falsch')}{m.userAnswer ? ` · ${t('last', 'zuletzt')}: „${m.userAnswer}“` : ''}
                    {m.right > 0 ? ` · ${m.right}/${MISTAKE_CLEAR_AFTER} ${t('right', 'richtig')}` : ''}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setExtras(e => (e ? { ...e, mistakes: removeMistake(e.mistakes, m.id) } : e));
                    updateExtras(e => ({ ...e, mistakes: removeMistake(e.mistakes, m.id) })).catch(() =>
                      setError(t('Could not remove the mistake.', 'Der Fehler konnte nicht entfernt werden.')),
                    );
                  }}
                  title={t('Remove', 'Entfernen')}
                  className="shrink-0 w-7 h-7 rounded-lg bg-gray-100 text-gray-400 hover:bg-red-100 hover:text-red-600 transition-colors"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

// Keep ~2 months of round history.
function pruneRounds(rounds: Record<string, number>): Record<string, number> {
  const cutoff = new Date(Date.now() - 60 * 86400000).toISOString().slice(0, 10);
  return Object.fromEntries(Object.entries(rounds).filter(([d]) => d >= cutoff));
}
