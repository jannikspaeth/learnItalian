'use client';

import { useState } from 'react';
import type { Lang } from '@/lib/lang';
import SpeakButton from '@/components/SpeakButton';
import { useT } from '@/lib/ui-lang';
import FeedbackBar from './FeedbackBar';

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
      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{label}</p>
      <p className="font-display text-2xl text-gray-900 flex items-start justify-between gap-2">
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
            className="w-full border border-gray-200 rounded-2xl p-3 text-base bg-gray-50 outline-none focus:border-red-400 transition-colors resize-none"
          />
          <button
            onClick={() => setRevealed(true)}
            className="w-full h-12 bg-red-700 hover:bg-red-800 text-white rounded-full font-semibold transition-colors"
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
          <FeedbackBar
            correct
            neutral
            title={t('How did you do?', 'Wie lief es?')}
            actions={
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  onClick={() => onResult(false, typed)}
                  className="h-12 rounded-full text-sm font-semibold border-2 border-red-300 text-red-800 hover:bg-red-50 transition-colors"
                >
                  {t('Not yet', 'Noch nicht')}
                </button>
                <button
                  onClick={() => onResult(true, typed)}
                  className="h-12 rounded-full text-sm font-semibold bg-green-700 text-white hover:bg-green-800 transition-colors"
                >
                  {t('Got it', 'Gewusst')}
                </button>
              </div>
            }
          >
            <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">{t('Answer', 'Lösung')}</p>
            <p className="text-lg font-semibold flex items-start justify-between gap-2">
              <span>{target}</span>
              {!speakSource && speakText && <SpeakButton text={speakText} lang={lang} />}
            </p>
          </FeedbackBar>
        </>
      )}
    </div>
  );
}
