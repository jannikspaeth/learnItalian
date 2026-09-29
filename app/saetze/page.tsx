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
        <p className="text-gray-400 text-sm">Loading…</p>
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
            <span>✍️</span> Sentences
          </h1>
          <p className="text-gray-400 text-sm mt-0.5">
            Translate example sentences from words you&apos;ve learned, or write down what you hear. Each one is worth 2 race points.
          </p>
        </div>

        {loadError && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-sm text-red-700 flex items-center justify-between gap-3">
            <span>⚠ Couldn&apos;t load your sentences.</span>
            <button onClick={() => refresh()} className="shrink-0 text-xs font-semibold underline">
              Retry
            </button>
          </div>
        )}

        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm text-center">
            <p className="text-xl font-bold text-green-600">{known}</p>
            <p className="text-xs text-gray-400 mt-0.5">Known</p>
          </div>
          <div className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm text-center">
            <p className="text-xl font-bold text-amber-500">{dueItems.length}</p>
            <p className="text-xs text-gray-400 mt-0.5">Due</p>
          </div>
          <div className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm text-center">
            <p className="text-xl font-bold text-blue-500">{unseen.length}</p>
            <p className="text-xs text-gray-400 mt-0.5">New</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 bg-gray-100 rounded-xl p-1">
          {(
            [
              ['learn', 'Learn'],
              ['review', dueItems.length > 0 ? `Review (${dueItems.length})` : 'Review'],
              ['dictation', '🎧 Dictation'],
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
          <p className="text-gray-400 text-sm text-center py-6">Loading…</p>
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
              <p className="font-semibold text-gray-900">Dictation complete</p>
              <p className="text-sm text-gray-500">
                {dictPerfect} / {doneCount} without mistakes · +{doneCount * 2} points
              </p>
              <div className="flex gap-2 justify-center">
                <button
                  onClick={reset}
                  className="px-4 py-2.5 border border-gray-200 hover:bg-gray-50 text-gray-600 rounded-xl text-sm transition-colors"
                >
                  Done
                </button>
                <button
                  onClick={startDictation}
                  className="px-4 py-2.5 bg-red-700 hover:bg-red-800 text-white rounded-xl text-sm font-semibold transition-colors"
                >
                  Again →
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-3 text-center">
              <p className="text-sm text-gray-600">
                Listen to a sentence and write down what you hear. Replay it as often as you like – also slowly 🐢.
              </p>
              <p className="text-xs text-gray-400">
                Accents and punctuation don&apos;t count as mistakes. Turn your sound on.
              </p>
              <button
                onClick={startDictation}
                disabled={dictPool.length === 0}
                className="px-5 py-2.5 bg-red-700 hover:bg-red-800 disabled:bg-gray-200 disabled:text-gray-400 text-white rounded-xl text-sm font-semibold transition-colors"
              >
                Start dictation →
              </button>
            </div>
          )
        ) : pool.length === 0 ? (
          <div className="bg-white rounded-xl border border-gray-200 p-6 text-center space-y-2">
            <p className="text-3xl">📖</p>
            <p className="font-semibold text-gray-900">No sentences yet</p>
            <p className="text-sm text-gray-500">
              Learn some vocabulary first — sentences appear for words you&apos;re studying.
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
            <p className="font-semibold text-gray-900">Session complete</p>
            <p className="text-sm text-gray-500">{doneCount} sentences · +{doneCount * 2} points</p>
            <button
              onClick={reset}
              className="px-4 py-2.5 border border-gray-200 hover:bg-gray-50 text-gray-600 rounded-xl text-sm transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-4 text-center">
            {tab === 'learn' ? (
              unseen.length > 0 ? (
                <>
                  <p className="text-sm text-gray-600">
                    {unseen.length} new sentence{unseen.length === 1 ? '' : 's'} ready.
                  </p>
                  <button
                    onClick={() => start('learn')}
                    className="px-5 py-2.5 bg-red-700 hover:bg-red-800 text-white rounded-xl text-sm font-semibold transition-colors"
                  >
                    Start learning →
                  </button>
                  <div className="flex justify-center">
                    <QuizDirectionToggle value={quizDir} onChange={setQuizDir} flag={flag} />
                  </div>
                </>
              ) : (
                <p className="text-sm text-gray-500">No new sentences. Learn more vocabulary to unlock more.</p>
              )
            ) : dueItems.length > 0 ? (
              <>
                <p className="text-sm text-gray-600">{dueItems.length} sentence(s) due for review.</p>
                <button
                  onClick={() => start('review')}
                  className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-sm font-semibold transition-colors"
                >
                  Start review →
                </button>
                <div className="flex justify-center">
                  <QuizDirectionToggle value={quizDir} onChange={setQuizDir} flag={flag} />
                </div>
              </>
            ) : (
              <p className="text-sm text-gray-500">Nothing due right now. Come back later! ✅</p>
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

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
      <div className="flex justify-between text-xs text-gray-400">
        <span>Translate {item.askTarget ? `${flag} → 🇩🇪` : `🇩🇪 → ${flag}`}</span>
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
            placeholder="Your translation (optional)…"
            className="w-full border border-gray-200 rounded-xl p-3 text-sm outline-none focus:border-red-400 transition-colors resize-none"
          />
          <button
            onClick={() => setRevealed(true)}
            className="w-full py-2.5 bg-gray-900 hover:bg-gray-800 text-white rounded-xl text-sm font-semibold transition-colors"
          >
            Show answer
          </button>
        </>
      ) : (
        <>
          {typed.trim() && (
            <p className="text-sm text-gray-400">
              You: <span className="italic">{typed.trim()}</span>
            </p>
          )}
          <div className="rounded-xl bg-green-50 p-3">
            <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-0.5">Answer</p>
            <p className="text-base font-semibold text-gray-900 flex items-start justify-between gap-2">
              <span>{item.target}</span>
              {!item.askTarget && <SpeakButton text={item.text} lang={lang} />}
            </p>
          </div>
          <p className="text-xs text-gray-400 text-center">How did you do?</p>
          <div className="grid grid-cols-4 gap-1.5">
            <button
              onClick={() => onRate(false, 'again')}
              className="py-2.5 rounded-xl text-sm font-semibold bg-red-100 text-red-700 hover:bg-red-200 transition-colors"
            >
              Again
            </button>
            <button
              onClick={() => onRate(true, 'unsicher')}
              className="py-2.5 rounded-xl text-sm font-semibold bg-amber-100 text-amber-700 hover:bg-amber-200 transition-colors"
            >
              Hard
            </button>
            <button
              onClick={() => onRate(true, 'sicher')}
              className="py-2.5 rounded-xl text-sm font-semibold bg-green-100 text-green-700 hover:bg-green-200 transition-colors"
            >
              Good
            </button>
            <button
              onClick={() => onRate(true, 'bekannt')}
              className="py-2.5 rounded-xl text-sm font-semibold bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors"
            >
              Easy
            </button>
          </div>
        </>
      )}
    </div>
  );
}
