'use client';

import { useEffect, useRef, useState } from 'react';
import type { Lang } from '@/lib/lang';
import { speak } from '@/lib/speech';
import SpeakButton from '@/components/SpeakButton';
import { useT } from '@/lib/ui-lang';

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
      <p className="text-xs text-gray-400 uppercase tracking-wide text-center">{label}</p>
      <div className="text-center space-y-1">
        <div className="text-2xl font-bold text-gray-900 inline-flex items-center gap-2 flex-wrap justify-center">
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
            className="w-full py-3 bg-red-700 hover:bg-red-800 text-white rounded-xl font-semibold transition-colors"
          >
            {t('Check', 'Prüfen')}
          </button>
        </>
      ) : (
        <>
          <div className={`rounded-xl p-4 text-center ${result.correct ? 'bg-green-50' : 'bg-red-50'}`}>
            <p className={`text-lg font-bold ${result.correct ? 'text-green-700' : 'text-red-600'}`}>
              {result.correct ? t('✓ Correct', '✓ Richtig') : t('✗ Not quite', '✗ Nicht ganz')}
            </p>
            {!result.correct && (
              <p className="text-sm text-gray-600 mt-1">
                {t('Your answer:', 'Deine Antwort:')} <span className="line-through">{value || '—'}</span>
              </p>
            )}
            <p className="text-base font-semibold text-gray-900 mt-1 inline-flex items-center gap-2">
              {answer}
              {speakText && !speakPrompt && <SpeakButton text={speakText} lang={lang} />}
            </p>
            {result.correct && result.accentHint && (
              <p className="text-xs text-blue-600 mt-1">
                {t('Tip: with accent →', 'Tipp: mit Akzent →')} <span className="font-semibold">{result.accentHint}</span>
              </p>
            )}
          </div>
          <div className="flex gap-2">
            {!result.correct && (
              <button
                onClick={() => onResult(true, value)}
                className="px-4 py-3 rounded-xl text-sm font-semibold bg-amber-100 text-amber-800 hover:bg-amber-200 transition-colors"
              >
                {t('It was a typo', 'War ein Tippfehler')}
              </button>
            )}
            <button
              onClick={() => onResult(result.correct, value)}
              className="flex-1 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-semibold transition-colors"
            >
              {t('Next →', 'Weiter →')}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
