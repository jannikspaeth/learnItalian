'use client';

import { useEffect, useRef, useState } from 'react';
import { compareDictation, DictationResult } from '@/lib/dictation';
import { speak, SLOW_RATE } from '@/lib/speech';
import type { Lang } from '@/lib/lang';
import { useT } from '@/lib/ui-lang';

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
        <span>🎧 {t('Write what you hear', 'Schreib auf, was du hörst')}</span>
        <span className="tabular-nums">{position} / {total}</span>
      </div>

      <div className="flex items-center justify-center gap-3 py-2">
        <button
          type="button"
          onClick={() => speak(item.text, lang)}
          className="h-14 px-5 rounded-2xl bg-red-700 hover:bg-red-800 text-white text-lg font-semibold transition-colors"
        >
          🔊 {t('Play', 'Abspielen')}
        </button>
        <button
          type="button"
          onClick={() => speak(item.text, lang, { rate: SLOW_RATE })}
          className="h-14 px-5 rounded-2xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-lg font-semibold transition-colors"
        >
          🐢 {t('Slow', 'Langsam')}
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
            className="w-full border border-gray-200 rounded-xl p-3 text-base outline-none focus:border-red-400 transition-colors resize-none"
          />
          <button
            onClick={check}
            className="w-full py-2.5 bg-gray-900 hover:bg-gray-800 text-white rounded-xl text-sm font-semibold transition-colors"
          >
            {t('Check', 'Prüfen')}
          </button>
        </>
      ) : (
        <>
          <div className={`rounded-xl p-3 ${result.perfect ? 'bg-green-50' : 'bg-amber-50'}`}>
            <p className={`text-sm font-bold ${result.perfect ? 'text-green-700' : 'text-amber-700'}`}>
              {result.perfect
                ? t('✓ Perfect', '✓ Perfekt')
                : t(`${result.correct} / ${result.total} words right`, `${result.correct} / ${result.total} Wörter richtig`)}
            </p>
            <p className="mt-2 leading-relaxed flex flex-wrap gap-x-1.5 gap-y-1">
              {result.words.map((w, i) =>
                w.status === 'ok' ? (
                  <span key={i} className="text-gray-900">{w.expected}</span>
                ) : w.status === 'accent' ? (
                  <span key={i} className="text-blue-700 underline decoration-dotted" title={`${t('You wrote', 'Du hast geschrieben')}: ${w.typed}`}>
                    {w.expected}
                  </span>
                ) : w.status === 'wrong' ? (
                  <span key={i}>
                    <span className="text-red-500 line-through">{w.typed}</span>{' '}
                    <span className="text-green-700 font-semibold">{w.expected}</span>
                  </span>
                ) : w.status === 'missing' ? (
                  <span key={i} className="text-green-700 font-semibold bg-green-100 rounded px-0.5">{w.expected}</span>
                ) : (
                  <span key={i} className="text-red-500 line-through">{w.typed}</span>
                ),
              )}
            </p>
            {result.words.some(w => w.status === 'accent') && (
              <p className="text-[11px] text-blue-600 mt-1.5">{t('Blue: right word, check the accent.', 'Blau: richtiges Wort, achte auf den Akzent.')}</p>
            )}
          </div>
          <div className="rounded-xl bg-gray-50 p-3 space-y-0.5">
            <p className="text-sm font-semibold text-gray-900">{item.text}</p>
            <p className="text-xs text-gray-500 italic">{item.de}</p>
          </div>
          <button
            onClick={() => onDone(item, typed, result)}
            className="w-full py-2.5 bg-red-700 hover:bg-red-800 text-white rounded-xl text-sm font-semibold transition-colors"
          >
            {t('Next →', 'Weiter →')}
          </button>
        </>
      )}
    </div>
  );
}
