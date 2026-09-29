'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import {
  loadVocabStrict,
  getSentenceProgress,
  setSentenceProgress,
  recordExercise,
  recordMistakes,
} from '@/lib/storage';
import { sentenceMistake, dictationMistake } from '@/lib/mistakes';
import { DictationResult } from '@/lib/dictation';
import SpeakButton from '@/components/SpeakButton';
import DictationCard from '@/components/practice/DictationCard';
import { useT } from '@/lib/ui-lang';
import { VocabEntry, SentenceProgress } from '@/lib/types';
import { loadExamples, VocabExample } from '@/lib/vocab-examples';
import { Confidence, isDue, computeNewLevel, nextReviewDate } from '@/lib/srs';
import { useLearner } from '@/lib/use-profile';
import { normWord } from '@/lib/norm';
import { Lang, langInfo } from '@/lib/lang';
import { useQuizDirection, askTarget } from '@/lib/use-quiz-direction';
import QuizDirectionToggle from '@/components/QuizDirectionToggle';

type Tab = 'learn' | 'review' | 'dictation';
type Phase = 'idle' | 'active' | 'done';
const ROUND_SIZE = 15;
const DICTATION_SIZE = 10;
// Dictation needs sentences short enough to remember after one listen.
const DICTATION_MAX_WORDS = 12;
// Too few of your own words yet? Fill the dictation pool up with catalog sentences.
const DICTATION_MIN_POOL = 30;

interface Pair {
  key: string;
  text: string; // target-language sentence
  de: string;
}

interface SItem {
  key: string;
  askTarget: boolean;  // true ⇒ target-language sentence shown, translate into German
  source: string;      // sentence shown
  target: string;      // model translation
  text: string;        // the sentence in the language being learned (read aloud)
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function SaetzePage() {
  const { profile, lang, ready } = useLearner();
  const flag = langInfo(lang).flag;
  const t = useT();

  const [vocab, setVocab] = useState<VocabEntry[]>([]);
  const [examples, setExamples] = useState<Map<string, VocabExample>>(new Map());
  const [progress, setProgress] = useState<SentenceProgress[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);

  const [tab, setTab] = useState<Tab>('learn');
  const [phase, setPhase] = useState<Phase>('idle');
  const [items, setItems] = useState<SItem[]>([]);
  const [current, setCurrent] = useState(0);
  const [doneCount, setDoneCount] = useState(0);

  const saveChain = useRef<Promise<unknown>>(Promise.resolve());
  const [quizDir, setQuizDir] = useQuizDirection();
  // Dictation round (listen → type) and its score.
  const [dictItems, setDictItems] = useState<Pair[]>([]);
  const [dictPerfect, setDictPerfect] = useState(0);

  const refresh = useCallback(async () => {
    try {
      const [v, ex, p] = await Promise.all([loadVocabStrict(), loadExamples(lang), getSentenceProgress()]);
      setVocab(v);
      setExamples(ex);
      setProgress(p);
      setLoadError(false);
    } catch {
      setLoadError(true);
    }
    setLoaded(true);
  }, [lang]);
  useEffect(() => { refresh(); }, [refresh]);

  if (!ready || !profile) {
    return (
      <main className="md:ml-56 min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-400 text-sm">{t('Loading…', 'Lädt …')}</p>
      </main>
    );
  }

  // Pool = the user's vocab words that have an example sentence.
  const pool: Pair[] = [];
  const seenKeys = new Set<string>();
  for (const v of vocab) {
    const key = normWord(v.word, lang);
    if (seenKeys.has(key)) continue;
    const ex = examples.get(key);
    if (!ex || !ex.text || !ex.de) continue;
    seenKeys.add(key);
    pool.push({ key, text: ex.text, de: ex.de });
  }

  const progressMap = new Map(progress.map(p => [p.key, p]));
  const unseen = pool.filter(i => !progressMap.has(i.key));
  const dueItems = pool.filter(i => {
    const p = progressMap.get(i.key);
    return p && p.level < 5 && isDue(p.nextReview);
  });
  const known = progress.filter(p => p.level >= 5).length;

  // Dictation: sentences of your own words first, topped up from the catalog.
  const shortEnough = (p: Pair) => p.text.split(/\s+/).length <= DICTATION_MAX_WORDS;
  const dictPool = pool.filter(shortEnough);
  if (dictPool.length < DICTATION_MIN_POOL) {
    for (const [key, ex] of examples) {
      if (dictPool.length >= DICTATION_MIN_POOL) break;
      const p = { key, text: ex.text, de: ex.de };
      if (!ex.text || !ex.de || seenKeys.has(key) || !shortEnough(p)) continue;
      dictPool.push(p);
    }
  }

  function startDictation() {
    if (dictPool.length === 0) return;
    // Own words first (shuffled), so dictation reinforces what you're learning.
    const own = shuffle(dictPool.filter(p => seenKeys.has(p.key)));
    const rest = shuffle(dictPool.filter(p => !seenKeys.has(p.key)));
    setDictItems([...own, ...rest].slice(0, DICTATION_SIZE));
    setTab('dictation');
    setCurrent(0);
    setDoneCount(0);
    setDictPerfect(0);
    setPhase('active');
  }

  function finishDictation(item: Pair, typed: string, result: DictationResult) {
    if (!result.perfect) recordMistakes([dictationMistake({ key: item.key, text: item.text, de: item.de, userAnswer: typed })]);
    else setDictPerfect(n => n + 1);
    saveChain.current = saveChain.current
      .then(() => recordExercise('sentence', result.perfect ? 1 : 0, 1))
      .catch(() => {});
    setDoneCount(c => c + 1);
    if (current + 1 >= dictItems.length) setPhase('done');
    else setCurrent(c => c + 1);
  }

  function start(which: Tab) {
    const src = which === 'learn' ? unseen.slice(0, ROUND_SIZE) : shuffle(dueItems);
    if (src.length === 0) return;
    setTab(which);
    setItems(src.map(p => {
      return askTarget(quizDir)
        ? { key: p.key, askTarget: true, source: p.text, target: p.de, text: p.text }
        : { key: p.key, askTarget: false, source: p.de, target: p.text, text: p.text };
    }));
    setCurrent(0);
    setDoneCount(0);
    setPhase('active');
  }

  function reset() {
    setPhase('idle');
    setItems([]);
    setCurrent(0);
    setDoneCount(0);
  }

  async function rate(correct: boolean, conf: Confidence) {
    const item = items[current];
    const existing = progressMap.get(item.key);
    const curLevel = existing?.level ?? 1;
    const newLevel = computeNewLevel(curLevel, correct, conf);
    const row: SentenceProgress = {
      key: item.key,
      level: newLevel,
      nextReview: nextReviewDate(newLevel, correct, conf),
      lastReviewed: new Date().toISOString(),
      reviewCount: (existing?.reviewCount ?? 0) + 1,
    };
    const next = [...progress.filter(p => p.key !== item.key), row];
    setProgress(next);
    if (!correct) {
      recordMistakes([sentenceMistake({
        key: item.key, askTarget: item.askTarget, source: item.source, target: item.target, targetText: item.text,
      })]);
    }
    saveChain.current = saveChain.current
      .then(() => setSentenceProgress(next))
      .then(() => recordExercise('sentence', correct ? 1 : 0, 1))
      .catch(() => {});

    setDoneCount(c => c + 1);
    if (current + 1 >= items.length) setPhase('done');
    else setCurrent(c => c + 1);
  }

  return (
    <main className="md:ml-56 min-h-screen bg-gray-50 pb-24 md:pb-8">
      <div className="max-w-xl mx-auto p-5 space-y-5">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <span>✍️</span> {t('Sentences', 'Sätze')}
          </h1>
          <p className="text-gray-400 text-sm mt-0.5">
            {t(
              'Translate example sentences from words you’ve learned, or write down what you hear. Each one is worth 2 race points.',
              'Übersetze Beispielsätze zu deinen Wörtern oder schreib auf, was du hörst. Jeder Satz bringt 2 Punkte im Rennen.',
            )}
          </p>
        </div>

        {loadError && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-sm text-red-700 flex items-center justify-between gap-3">
            <span>⚠ {t('Couldn’t load your sentences.', 'Deine Sätze konnten nicht geladen werden.')}</span>
            <button onClick={() => refresh()} className="shrink-0 text-xs font-semibold underline">
              {t('Retry', 'Nochmal versuchen')}
            </button>
          </div>
        )}

        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm text-center">
            <p className="text-xl font-bold text-green-600">{known}</p>
            <p className="text-xs text-gray-400 mt-0.5">{t('Known', 'Gekonnt')}</p>
          </div>
          <div className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm text-center">
            <p className="text-xl font-bold text-amber-500">{dueItems.length}</p>
            <p className="text-xs text-gray-400 mt-0.5">{t('Due', 'Fällig')}</p>
          </div>
          <div className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm text-center">
            <p className="text-xl font-bold text-blue-500">{unseen.length}</p>
            <p className="text-xs text-gray-400 mt-0.5">{t('New', 'Neu')}</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 bg-gray-100 rounded-xl p-1">
          {(
            [
              ['learn', t('Learn', 'Lernen')],
              ['review', `${t('Review', 'Wiederholen')}${dueItems.length > 0 ? ` (${dueItems.length})` : ''}`],
              ['dictation', `🎧 ${t('Dictation', 'Diktat')}`],
            ] as [Tab, string][]
          ).map(([id, label]) => (
            <button
              key={id}
              onClick={() => { setTab(id); reset(); }}
              className={`flex-1 py-2 text-xs font-medium rounded-lg transition-colors ${
                tab === id ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {!loaded ? (
          <p className="text-gray-400 text-sm text-center py-6">{t('Loading…', 'Lädt …')}</p>
        ) : tab === 'dictation' ? (
          phase === 'active' && dictItems[current] ? (
            <DictationCard
              key={current}
              item={dictItems[current]}
              lang={lang}
              position={current + 1}
              total={dictItems.length}
              onDone={finishDictation}
            />
          ) : phase === 'done' ? (
            <div className="bg-white rounded-xl border border-gray-200 p-6 text-center space-y-3">
              <p className="text-4xl">🎧</p>
              <p className="font-semibold text-gray-900">{t('Dictation complete', 'Diktat geschafft')}</p>
              <p className="text-sm text-gray-500">
                {dictPerfect} / {doneCount} {t('without mistakes', 'fehlerfrei')} · +{doneCount * 2} {t('points', 'Punkte')}
              </p>
              <div className="flex gap-2 justify-center">
                <button
                  onClick={reset}
                  className="px-4 py-2.5 border border-gray-200 hover:bg-gray-50 text-gray-600 rounded-xl text-sm transition-colors"
                >
                  {t('Done', 'Fertig')}
                </button>
                <button
                  onClick={startDictation}
                  className="px-4 py-2.5 bg-red-700 hover:bg-red-800 text-white rounded-xl text-sm font-semibold transition-colors"
                >
                  {t('Again →', 'Nochmal →')}
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-3 text-center">
              <p className="text-sm text-gray-600">
                {t(
                  'Listen to a sentence and write down what you hear. Replay it as often as you like – also slowly 🐢.',
                  'Hör dir einen Satz an und schreib auf, was du hörst. Du kannst ihn beliebig oft abspielen – auch langsam 🐢.',
                )}
              </p>
              <p className="text-xs text-gray-400">
                {t('Accents and punctuation don’t count as mistakes. Turn your sound on.', 'Akzente und Satzzeichen zählen nicht als Fehler. Mach den Ton an.')}
              </p>
              <button
                onClick={startDictation}
                disabled={dictPool.length === 0}
                className="px-5 py-2.5 bg-red-700 hover:bg-red-800 disabled:bg-gray-200 disabled:text-gray-400 text-white rounded-xl text-sm font-semibold transition-colors"
              >
                {t('Start dictation →', 'Diktat starten →')}
              </button>
            </div>
          )
        ) : pool.length === 0 ? (
          <div className="bg-white rounded-xl border border-gray-200 p-6 text-center space-y-2">
            <p className="text-3xl">📖</p>
            <p className="font-semibold text-gray-900">{t('No sentences yet', 'Noch keine Sätze')}</p>
            <p className="text-sm text-gray-500">
              {t('Learn some vocabulary first — sentences appear for words you’re studying.', 'Lern zuerst ein paar Vokabeln – Sätze gibt es zu den Wörtern, die du lernst.')}
            </p>
          </div>
        ) : phase === 'active' ? (
          <SentenceCard
            key={current}
            item={items[current]}
            lang={lang}
            flag={flag}
            position={current + 1}
            total={items.length}
            onRate={rate}
          />
        ) : phase === 'done' ? (
          <div className="bg-white rounded-xl border border-gray-200 p-6 text-center space-y-3">
            <p className="text-4xl">🎉</p>
            <p className="font-semibold text-gray-900">{t('Session complete', 'Runde geschafft')}</p>
            <p className="text-sm text-gray-500">{doneCount} {t('sentences', 'Sätze')} · +{doneCount * 2} {t('points', 'Punkte')}</p>
            <button
              onClick={reset}
              className="px-4 py-2.5 border border-gray-200 hover:bg-gray-50 text-gray-600 rounded-xl text-sm transition-colors"
            >
              {t('Done', 'Fertig')}
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-4 text-center">
            {tab === 'learn' ? (
              unseen.length > 0 ? (
                <>
                  <p className="text-sm text-gray-600">
                    {t(`${unseen.length} new sentence${unseen.length === 1 ? '' : 's'} ready.`, `${unseen.length} neue${unseen.length === 1 ? 'r Satz' : ' Sätze'} bereit.`)}
                  </p>
                  <button
                    onClick={() => start('learn')}
                    className="px-5 py-2.5 bg-red-700 hover:bg-red-800 text-white rounded-xl text-sm font-semibold transition-colors"
                  >
                    {t('Start learning →', 'Lernen starten →')}
                  </button>
                  <div className="flex justify-center">
                    <QuizDirectionToggle value={quizDir} onChange={setQuizDir} flag={flag} />
                  </div>
                </>
              ) : (
                <p className="text-sm text-gray-500">{t('No new sentences. Learn more vocabulary to unlock more.', 'Keine neuen Sätze. Lern mehr Vokabeln, um weitere freizuschalten.')}</p>
              )
            ) : dueItems.length > 0 ? (
              <>
                <p className="text-sm text-gray-600">{t(`${dueItems.length} sentence(s) due for review.`, `${dueItems.length} Satz/Sätze zur Wiederholung fällig.`)}</p>
                <button
                  onClick={() => start('review')}
                  className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-sm font-semibold transition-colors"
                >
                  {t('Start review →', 'Wiederholung starten →')}
                </button>
                <div className="flex justify-center">
                  <QuizDirectionToggle value={quizDir} onChange={setQuizDir} flag={flag} />
                </div>
              </>
            ) : (
              <p className="text-sm text-gray-500">{t('Nothing due right now. Come back later! ✅', 'Gerade ist nichts fällig. Schau später wieder vorbei! ✅')}</p>
            )}
          </div>
        )}
      </div>
    </main>
  );
}

function SentenceCard({
  item,
  lang,
  flag,
  position,
  total,
  onRate,
}: {
  item: SItem;
  lang: Lang;
  flag: string;
  position: number;
  total: number;
  onRate: (correct: boolean, conf: Confidence) => void;
}) {
  const [typed, setTyped] = useState('');
  const [revealed, setRevealed] = useState(false);
  const t = useT();

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
      <div className="flex justify-between text-xs text-gray-400">
        <span>{t('Translate', 'Übersetze')} {item.askTarget ? `${flag} → 🇩🇪` : `🇩🇪 → ${flag}`}</span>
        <span className="tabular-nums">{position} / {total}</span>
      </div>

      <p className="text-lg font-semibold text-gray-900 flex items-start justify-between gap-2">
        <span>{item.source}</span>
        {item.askTarget && <SpeakButton text={item.text} lang={lang} size="md" />}
      </p>

      {!revealed ? (
        <>
          <textarea
            value={typed}
            onChange={e => setTyped(e.target.value)}
            rows={2}
            placeholder={t('Your translation (optional)…', 'Deine Übersetzung (optional) …')}
            className="w-full border border-gray-200 rounded-xl p-3 text-sm outline-none focus:border-red-400 transition-colors resize-none"
          />
          <button
            onClick={() => setRevealed(true)}
            className="w-full py-2.5 bg-gray-900 hover:bg-gray-800 text-white rounded-xl text-sm font-semibold transition-colors"
          >
            {t('Show answer', 'Lösung zeigen')}
          </button>
        </>
      ) : (
        <>
          {typed.trim() && (
            <p className="text-sm text-gray-400">
              {t('You:', 'Du:')} <span className="italic">{typed.trim()}</span>
            </p>
          )}
          <div className="rounded-xl bg-green-50 p-3">
            <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-0.5">{t('Answer', 'Lösung')}</p>
            <p className="text-base font-semibold text-gray-900 flex items-start justify-between gap-2">
              <span>{item.target}</span>
              {!item.askTarget && <SpeakButton text={item.text} lang={lang} />}
            </p>
          </div>
          <p className="text-xs text-gray-400 text-center">{t('How did you do?', 'Wie lief es?')}</p>
          <div className="grid grid-cols-4 gap-1.5">
            <button
              onClick={() => onRate(false, 'again')}
              className="py-2.5 rounded-xl text-sm font-semibold bg-red-100 text-red-700 hover:bg-red-200 transition-colors"
            >
              {t('Again', 'Nochmal')}
            </button>
            <button
              onClick={() => onRate(true, 'unsicher')}
              className="py-2.5 rounded-xl text-sm font-semibold bg-amber-100 text-amber-700 hover:bg-amber-200 transition-colors"
            >
              {t('Hard', 'Schwer')}
            </button>
            <button
              onClick={() => onRate(true, 'sicher')}
              className="py-2.5 rounded-xl text-sm font-semibold bg-green-100 text-green-700 hover:bg-green-200 transition-colors"
            >
              {t('Good', 'Gut')}
            </button>
            <button
              onClick={() => onRate(true, 'bekannt')}
              className="py-2.5 rounded-xl text-sm font-semibold bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors"
            >
              {t('Easy', 'Leicht')}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
