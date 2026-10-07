'use client';

import { useEffect, useMemo, useState } from 'react';
import type { Lang } from '@/lib/lang';
import SpeakButton from '@/components/SpeakButton';
import FeedbackBar from './FeedbackBar';

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// One grammar cloze with answer options: tap an option → instant feedback → Next.
export default function ChoiceCard({
  label,
  before,
  after,
  answer,
  options,
  hint,
  lang,
  onResult,
}: {
  label: string;
  before: string;
  after: string;
  answer: string;
  options: string[];
  hint?: string;
  lang: Lang;
  onResult: (correct: boolean, userAnswer: string) => void;
}) {
  const shuffled = useMemo(() => shuffle(options), [options]);
  const [picked, setPicked] = useState<string | null>(null);
  const correct = picked === answer;

  // After picking, a new Enter press moves on (see TypeCard for why not autoFocus).
  useEffect(() => {
    if (picked === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && !e.repeat) {
        e.preventDefault();
        onResult(picked === answer, picked);
      }
    };
    // Register on the next tick: React runs this effect while the Enter that
    // checked the answer is still bubbling, so a listener added right away
    // would receive that same key press and skip the result.
    const t = setTimeout(() => window.addEventListener('keydown', onKey), 0);
    return () => {
      clearTimeout(t);
      window.removeEventListener('keydown', onKey);
    };
  }, [picked, answer, onResult]);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider text-center">{label}</p>
      <p className="text-lg text-gray-900 leading-relaxed text-center">
        {before}
        {picked ? (
          <span className={`font-bold ${correct ? 'text-green-700' : 'text-red-700'}`}>{answer}</span>
        ) : (
          <span className="font-semibold text-gray-400">＿＿</span>
        )}
        {after}
      </p>
      <div className="grid grid-cols-2 gap-2">
        {shuffled.map(opt => {
          const isAnswer = picked !== null && opt === answer;
          const isWrongPick = picked === opt && opt !== answer;
          return (
            <button
              key={opt}
              disabled={picked !== null}
              onClick={() => setPicked(opt)}
              className={`px-3 py-3 rounded-xl border-2 text-base font-medium transition-all ${
                isAnswer
                  ? 'border-green-500 bg-green-50 text-green-800'
                  : isWrongPick
                  ? 'border-red-400 bg-red-50 text-red-700'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50 disabled:hover:bg-white'
              }`}
            >
              {opt}
            </button>
          );
        })}
      </div>
      {picked !== null && (
        <FeedbackBar correct={correct} onNext={() => onResult(correct, picked)}>
          <p className="text-base flex items-center justify-between gap-2">
            <span>
              {before}<strong>{answer}</strong>{after}
              {hint && <span className="block text-sm text-gray-600 mt-0.5">{hint}</span>}
            </span>
            <SpeakButton text={`${before}${answer}${after}`} lang={lang} />
          </p>
        </FeedbackBar>
      )}
    </div>
  );
}
