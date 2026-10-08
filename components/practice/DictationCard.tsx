'use client';

import { useEffect, useRef, useState } from 'react';
import { compareDictation, DictationResult } from '@/lib/dictation';
import { speak, SLOW_RATE } from '@/lib/speech';
import type { Lang } from '@/lib/lang';
import { useT } from '@/lib/ui-lang';
import { Volume2, Turtle, Headphones } from 'lucide-react';
import FeedbackBar from './FeedbackBar';

// ─── Dictation (listen → type) ─────────────────────────────────────────────────

export interface DictationItem {
  key: string;
  text: string; // sentence in the target language
  de: string;
}

export default function DictationCard({
  item,
  lang,
  position,
  total,
  onDone,
}: {
  item: DictationItem;
  lang: Lang;
  position: number;
  total: number;
  onDone: (item: DictationItem, typed: string, result: DictationResult) => void;
}) {
  const [typed, setTyped] = useState('');
  const t = useT();
  const [result, setResult] = useState<DictationResult | null>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Play the sentence as soon as the card appears.
  useEffect(() => {
    speak(item.text, lang);
    inputRef.current?.focus();
  }, [item.text, lang]);

  function check() {
    if (result) return;
    setResult(compareDictation(item.text, typed));
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
      <div className="flex justify-between text-xs text-gray-400">
        <span className="flex items-center gap-1.5 font-semibold uppercase tracking-wider text-gray-500"><Headphones className="w-4 h-4" /> {t('Write what you hear', 'Schreib auf, was du hörst')}</span>
        <span className="tabular-nums">{position} / {total}</span>
      </div>

      <div className="flex items-center justify-center gap-3 py-2">
        <button
          type="button"
          onClick={() => speak(item.text, lang)}
          className="h-14 px-6 rounded-full bg-red-700 hover:bg-red-800 text-white text-lg font-semibold transition-colors inline-flex items-center gap-2"
        >
          <Volume2 className="w-5 h-5" /> {t('Play', 'Abspielen')}
        </button>
        <button
          type="button"
          onClick={() => speak(item.text, lang, { rate: SLOW_RATE })}
          className="h-14 px-6 rounded-full bg-red-50 hover:bg-red-100 text-red-700 text-lg font-semibold transition-colors inline-flex items-center gap-2"
        >
          <Turtle className="w-5 h-5" /> {t('Slow', 'Langsam')}
        </button>
      </div>

      {!result ? (
        <>
          <textarea
            ref={inputRef}
            value={typed}
            onChange={e => setTyped(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); check(); }
            }}
            rows={2}
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck={false}
            placeholder={t('Type the sentence…', 'Schreib den Satz …')}
            className="w-full border border-gray-200 rounded-2xl p-3 text-base bg-gray-50 outline-none focus:border-red-400 transition-colors resize-none"
          />
          <button
            onClick={check}
            className="w-full h-12 bg-red-700 hover:bg-red-800 text-white rounded-full font-semibold transition-colors"
          >
            {t('Check', 'Prüfen')}
          </button>
        </>
      ) : (
        <>
          <div className="rounded-2xl bg-gray-50 p-3">
            <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">{t('What you wrote', 'Dein Text')}</p>
            <p className="mt-1 text-base leading-relaxed flex flex-wrap gap-x-1.5 gap-y-1">
              {result.words.map((w, i) =>
                w.status === 'ok' ? (
                  <span key={i} className="text-gray-900">{w.expected}</span>
                ) : w.status === 'accent' ? (
                  <span key={i} className="text-amber-800 underline decoration-dotted" title={`${t('You wrote', 'Du hast geschrieben')}: ${w.typed}`}>
                    {w.expected}
                  </span>
                ) : w.status === 'wrong' ? (
                  <span key={i}>
                    <span className="text-red-700 line-through">{w.typed}</span>{' '}
                    <span className="text-green-700 font-semibold">{w.expected}</span>
                  </span>
                ) : w.status === 'missing' ? (
                  <span key={i} className="text-green-700 font-semibold bg-green-100 rounded px-0.5">{w.expected}</span>
                ) : (
                  <span key={i} className="text-red-700 line-through">{w.typed}</span>
                ),
              )}
            </p>
            {result.words.some(w => w.status === 'accent') && (
              <p className="text-[11px] text-amber-800 mt-1.5">{t('Dotted: right word, check the accent.', 'Gepunktet: richtiges Wort, achte auf den Akzent.')}</p>
            )}
          </div>
          <FeedbackBar
            correct={result.perfect}
            title={result.perfect ? t('Perfect!', 'Perfekt!') : t(`${result.correct} of ${result.total} words right`, `${result.correct} von ${result.total} Wörtern richtig`)}
            onNext={() => onDone(item, typed, result)}
          >
            <p className="text-base font-semibold">{item.text}</p>
            <p className="text-sm text-gray-600 italic">{item.de}</p>
          </FeedbackBar>
        </>
      )}
    </div>
  );
}
