'use client';

import { useEffect, useRef, useState } from 'react';
import type { Lang } from '@/lib/lang';
import { speak } from '@/lib/speech';
import SpeakButton from '@/components/SpeakButton';
import { useT } from '@/lib/ui-lang';
import FeedbackBar from './FeedbackBar';

// One typed question (word, verb form, cloze): type → Check → see the answer →
// Next. A wrong answer can be waved through as a typo.
export default function TypeCard({
  label,
  prompt,
  sub,
  answer,
  check,
  speakText,
  speakPrompt = false,
  lang,
  placeholder,
  onResult,
}: {
  label: string;             // small caption, e.g. "Translate 🇩🇪 → 🇮🇹"
  prompt: React.ReactNode;   // the question
  sub?: string;              // extra context under the question
  answer: string;            // the correct answer, shown after checking
  check: (value: string) => { correct: boolean; accentHint?: string };
  speakText?: string;        // target-language text to read aloud
  speakPrompt?: boolean;     // the prompt itself is target language: offer 🔊 right away
  lang: Lang;
  placeholder?: string;
  onResult: (correct: boolean, userAnswer: string) => void;
}) {
  const [value, setValue] = useState('');
  const [result, setResult] = useState<{ correct: boolean; accentHint?: string } | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const t = useT();

  useEffect(() => { inputRef.current?.focus(); }, []);

  // Once the answer is shown, a *new* Enter press moves on. (Focusing the Next
  // button instead let the browser "click" it with the checking Enter.)
  useEffect(() => {
    if (!result) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && !e.repeat) {
        e.preventDefault();
        onResult(result.correct, value);
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
  }, [result, value, onResult]);

  function doCheck() {
    if (result) return;
    const r = check(value);
    setResult(r);
    if (speakText && !speakPrompt) speak(speakText, lang);
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider text-center">{label}</p>
      <div className="text-center space-y-1">
        <div className="font-display text-3xl text-gray-900 inline-flex items-center gap-2 flex-wrap justify-center">
          {prompt}
          {speakPrompt && speakText && <SpeakButton text={speakText} lang={lang} size="md" />}
        </div>
        {sub && <p className="text-sm text-gray-500">{sub}</p>}
      </div>

      {!result ? (
        <>
          <input
            ref={inputRef}
            type="text"
            value={value}
            onChange={e => setValue(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') doCheck(); }}
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck={false}
            placeholder={placeholder ?? '…'}
            className="w-full border-b-2 border-gray-300 focus:border-red-600 bg-transparent text-lg text-center py-1.5 outline-none transition-colors"
          />
          <button
            onClick={doCheck}
            className="w-full h-12 bg-red-700 hover:bg-red-800 text-white rounded-full font-semibold transition-colors"
          >
            {t('Check', 'Prüfen')}
          </button>
        </>
      ) : (
        <>
          <p
            className={`w-full border-b-2 text-lg text-center py-1.5 ${
              result.correct ? 'border-green-600 text-green-800' : 'border-red-400 text-red-700 line-through decoration-red-400'
            }`}
          >
            {value || '—'}
          </p>
          <FeedbackBar
            correct={result.correct}
            onNext={() => onResult(result.correct, value)}
            secondary={result.correct ? undefined : { label: t('It was a typo', 'War ein Tippfehler'), onClick: () => onResult(true, value) }}
          >
            <p className="text-lg font-semibold flex items-center gap-2">
              {answer}
              {speakText && !speakPrompt && <SpeakButton text={speakText} lang={lang} />}
            </p>
            {result.correct && result.accentHint && (
              <p className="text-sm text-gray-600 mt-0.5">
                {t('Tip: with accent →', 'Tipp: mit Akzent →')} <span className="font-semibold">{result.accentHint}</span>
              </p>
            )}
          </FeedbackBar>
        </>
      )}
    </div>
  );
}
