'use client';

import { useEffect, useRef, useState } from 'react';
import { Volume2 } from 'lucide-react';
import type { Lang } from '@/lib/lang';
import { speak } from '@/lib/speech';
import { useT } from '@/lib/ui-lang';
import { checkNumberAnswer, type NumberItem } from '@/lib/numbers';
import SpeakButton from '@/components/SpeakButton';
import FeedbackBar from './FeedbackBar';

// One number, clock time or date — asked in one of two ways:
//   listen → hear it, type the digits (numeric keypad, like a price or a platform)
//   read   → see the digits, pick the written form out of four
export default function NumberCard({
  item,
  lang,
  onResult,
}: {
  item: NumberItem;
  lang: Lang;
  onResult: (correct: boolean, userAnswer: string) => void;
}) {
  const t = useT();
  const [value, setValue] = useState('');
  const [picked, setPicked] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const listen = item.mode === 'listen';
  const correct = listen ? checkNumberAnswer(value, item) : picked === item.words;
  const done = listen ? checked : picked !== null;

  // Say it once when the card appears, and put the cursor in the input.
  useEffect(() => {
    if (listen) {
      speak(item.words, lang);
      inputRef.current?.focus();
    }
  }, [item.key, listen, item.words, lang]);

  // Once the answer is shown, a new Enter press moves on (see TypeCard).
  useEffect(() => {
    if (!done) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && !e.repeat) {
        e.preventDefault();
        onResult(correct, listen ? value : picked ?? '');
      }
    };
    const timer = setTimeout(() => window.addEventListener('keydown', onKey), 0);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', onKey);
    };
  }, [done, correct, listen, value, picked, onResult]);

  const placeholder = item.kind === 'time' ? '14:30' : item.kind === 'date' ? '12.3.' : '123';
  const label = listen
    ? t('Listen and write it in digits', 'Hören und in Zahlen schreiben')
    : item.kind === 'time'
      ? t('How do you say this time?', 'Wie sagt man diese Uhrzeit?')
      : item.kind === 'date'
        ? t('How do you say this date?', 'Wie sagt man dieses Datum?')
        : t('How is this number written?', 'Wie schreibt man diese Zahl?');

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider text-center">{label}</p>

      {listen ? (
        <>
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => speak(item.words, lang)}
              aria-label={t('Play again', 'Nochmal abspielen')}
              className="w-20 h-20 rounded-full bg-red-50 text-red-700 hover:bg-red-100 flex items-center justify-center transition-colors"
            >
              <Volume2 className="w-9 h-9" />
            </button>
          </div>
          {!checked ? (
            <>
              <input
                ref={inputRef}
                type="text"
                inputMode="numeric"
                value={value}
                onChange={e => setValue(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') setChecked(true); }}
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck={false}
                placeholder={placeholder}
                className="w-full border-b-2 border-gray-300 focus:border-red-600 bg-transparent text-2xl text-center py-1.5 outline-none transition-colors tabular-nums"
              />
              <button
                onClick={() => setChecked(true)}
                className="w-full h-12 bg-red-700 hover:bg-red-800 text-white rounded-full font-semibold transition-colors"
              >
                {t('Check', 'Prüfen')}
              </button>
            </>
          ) : (
            <p
              className={`w-full border-b-2 text-2xl text-center py-1.5 tabular-nums ${
                correct ? 'border-green-600 text-green-800' : 'border-red-400 text-red-700 line-through decoration-red-400'
              }`}
            >
              {value || '—'}
            </p>
          )}
        </>
      ) : (
        <>
          <p className="font-display text-4xl text-gray-900 text-center tabular-nums">{item.digits}</p>
          <div className="grid gap-2">
            {(item.options ?? []).map(opt => {
              const isAnswer = picked !== null && opt === item.words;
              const isWrongPick = picked === opt && opt !== item.words;
              return (
                <button
                  key={opt}
                  disabled={picked !== null}
                  onClick={() => setPicked(opt)}
                  className={`px-3 py-3 rounded-xl border-2 text-base font-medium transition-colors ${
                    isAnswer
                      ? 'border-green-500 bg-green-50 text-green-800'
                      : isWrongPick
                      ? 'border-red-400 bg-red-50 text-red-700'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50 disabled:hover:border-gray-200 disabled:hover:bg-white'
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </>
      )}

      {done && (
        <FeedbackBar
          correct={correct}
          onNext={() => onResult(correct, listen ? value : picked ?? '')}
        >
          <p className="text-lg font-semibold flex items-center gap-2 flex-wrap">
            <span className="tabular-nums">{item.digits}</span>
            <span className="text-gray-400">=</span>
            <span>{item.words}</span>
            <SpeakButton text={item.words} lang={lang} />
          </p>
        </FeedbackBar>
      )}
    </div>
  );
}
