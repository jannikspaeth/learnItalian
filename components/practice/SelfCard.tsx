'use client';

import { useState } from 'react';
import type { Lang } from '@/lib/lang';
import SpeakButton from '@/components/SpeakButton';
import { useT } from '@/lib/ui-lang';

// Translate a sentence, reveal the model answer, grade yourself.
export default function SelfCard({
  label,
  source,
  target,
  speakText,
  speakSource = false,
  lang,
  onResult,
}: {
  label: string;
  source: string;
  target: string;
  speakText?: string;     // target-language sentence
  speakSource?: boolean;  // the source is the target-language side
  lang: Lang;
  onResult: (correct: boolean, userAnswer: string) => void;
}) {
  const [typed, setTyped] = useState('');
  const [revealed, setRevealed] = useState(false);
  const t = useT();

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
      <p className="text-xs text-gray-400 uppercase tracking-wide">{label}</p>
      <p className="text-lg font-semibold text-gray-900 flex items-start justify-between gap-2">
        <span>{source}</span>
        {speakSource && speakText && <SpeakButton text={speakText} lang={lang} size="md" />}
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
              <span>{target}</span>
              {!speakSource && speakText && <SpeakButton text={speakText} lang={lang} />}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onResult(false, typed)}
              className="py-3 rounded-xl text-sm font-semibold bg-red-100 text-red-700 hover:bg-red-200 transition-colors"
            >
              {t('✗ Not yet', '✗ Noch nicht')}
            </button>
            <button
              onClick={() => onResult(true, typed)}
              className="py-3 rounded-xl text-sm font-semibold bg-green-100 text-green-700 hover:bg-green-200 transition-colors"
            >
              {t('✓ Got it', '✓ Gewusst')}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
