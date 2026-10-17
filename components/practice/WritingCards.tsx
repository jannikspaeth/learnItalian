'use client';

import { useMemo, useState } from 'react';
import { RotateCcw } from 'lucide-react';
import type { Lang } from '@/lib/lang';
import { useT } from '@/lib/ui-lang';
import { checkPhraseAnswer } from '@/lib/answer-check';
import {
  LetterTask,
  OrderItem,
  TransformItem,
  checkOrder,
  checkTransform,
  chipsOf,
  letterBank,
  letterParts,
  shuffle,
} from '@/lib/writing';
import SpeakButton from '@/components/SpeakButton';
import FeedbackBar from './FeedbackBar';

// ── Word order: tap the chips into the right order ───────────────────────────
export function OrderCard({
  item,
  lang,
  onResult,
}: {
  item: OrderItem;
  lang: Lang;
  onResult: (correct: boolean, userAnswer: string) => void;
}) {
  const t = useT();
  const { chips, open, close } = useMemo(() => chipsOf(item), [item]);
  const order = useMemo(() => shuffle(chips.map((_, i) => i)), [chips]);
  const [laid, setLaid] = useState<number[]>([]);
  const [checked, setChecked] = useState(false);

  const sentence = laid.map(i => chips[i]).join(' ');
  const correct = checked && checkOrder(laid.map(i => chips[i]), item);
  const left = order.filter(i => !laid.includes(i));

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider text-center">
        {t('Put the sentence in order', 'Bring den Satz in die richtige Reihenfolge')}
      </p>
      <p className="font-display text-xl text-gray-900 text-center">{item.de}</p>

      {/* the line being built */}
      <div
        className={`min-h-16 rounded-xl border-2 border-dashed p-3 flex flex-wrap items-start gap-2 ${
          checked ? (correct ? 'border-green-400 bg-green-50' : 'border-red-300 bg-red-50') : 'border-gray-200'
        }`}
      >
        {open && laid.length > 0 && <span className="text-lg text-gray-500 leading-9">{open}</span>}
        {laid.length === 0 && (
          <span className="text-sm text-gray-400 leading-9">{t('Tap the words below', 'Tippe unten die Wörter an')}</span>
        )}
        {laid.map((i, pos) => (
          <button
            key={`${i}-${pos}`}
            disabled={checked}
            onClick={() => setLaid(l => l.filter((_, p) => p !== pos))}
            className="px-3 h-9 rounded-lg bg-gray-100 text-gray-900 text-base font-medium hover:bg-gray-200 transition-colors disabled:hover:bg-gray-100"
          >
            {chips[i]}
          </button>
        ))}
        {close && laid.length > 0 && <span className="text-lg text-gray-500 leading-9">{close}</span>}
      </div>

      {/* the chips still to place */}
      {!checked && (
        <div className="flex flex-wrap gap-2 justify-center">
          {left.map(i => (
            <button
              key={i}
              onClick={() => setLaid(l => [...l, i])}
              className="px-3 h-10 rounded-lg border-2 border-gray-200 bg-white text-gray-800 text-base font-medium hover:border-gray-300 hover:bg-gray-50 transition-colors"
            >
              {chips[i]}
            </button>
          ))}
        </div>
      )}

      {!checked ? (
        <div className="flex gap-2">
          <button
            onClick={() => setLaid([])}
            disabled={laid.length === 0}
            aria-label={t('Clear', 'Zurücksetzen')}
            className="w-12 h-12 shrink-0 rounded-full border-2 border-gray-300 text-gray-500 flex items-center justify-center hover:bg-gray-50 disabled:opacity-40 transition-colors"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
          <button
            onClick={() => setChecked(true)}
            disabled={left.length > 0}
            className="flex-1 h-12 bg-red-700 hover:bg-red-800 disabled:bg-gray-300 text-white rounded-full font-semibold transition-colors"
          >
            {t('Check', 'Prüfen')}
          </button>
        </div>
      ) : (
        <FeedbackBar correct={correct} onNext={() => onResult(correct, sentence)}>
          <p className="text-lg font-semibold flex items-center gap-2 flex-wrap">
            {item.answer}
            <SpeakButton text={item.answer} lang={lang} />
          </p>
          <p className="text-sm text-gray-700 mt-1">{item.hint}</p>
        </FeedbackBar>
      )}
    </div>
  );
}

// ── Rewrite one sentence following an instruction ────────────────────────────
export function TransformCard({
  item,
  lang,
  onResult,
}: {
  item: TransformItem;
  lang: Lang;
  onResult: (correct: boolean, userAnswer: string) => void;
}) {
  const t = useT();
  const [value, setValue] = useState('');
  const [checked, setChecked] = useState(false);
  const correct = checked && checkTransform(value, item);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider text-center">{item.task}</p>
      <p className="font-display text-2xl text-gray-900 text-center">{item.source}</p>

      {!checked ? (
        <>
          <input
            autoFocus
            type="text"
            value={value}
            onChange={e => setValue(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') setChecked(true); }}
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck={false}
            placeholder="…"
            className="w-full border-b-2 border-gray-300 focus:border-red-600 bg-transparent text-lg text-center py-1.5 outline-none transition-colors"
          />
          <button
            onClick={() => setChecked(true)}
            className="w-full h-12 bg-red-700 hover:bg-red-800 text-white rounded-full font-semibold transition-colors"
          >
            {t('Check', 'Prüfen')}
          </button>
        </>
      ) : (
        <>
          <p
            className={`w-full border-b-2 text-lg text-center py-1.5 ${
              correct ? 'border-green-600 text-green-800' : 'border-red-400 text-red-700 line-through decoration-red-400'
            }`}
          >
            {value || '—'}
          </p>
          <FeedbackBar
            correct={correct}
            onNext={() => onResult(correct, value)}
            secondary={correct ? undefined : { label: t('It was a typo', 'War ein Tippfehler'), onClick: () => onResult(true, value) }}
          >
            <p className="text-lg font-semibold flex items-center gap-2 flex-wrap">
              {item.answer}
              <SpeakButton text={item.answer} lang={lang} />
            </p>
            <p className="text-sm text-gray-700 mt-1">{item.hint}</p>
          </FeedbackBar>
        </>
      )}
    </div>
  );
}

// ── A short letter with gaps and a word bank ─────────────────────────────────
export function LetterCard({
  letter,
  lang,
  onDone,
}: {
  letter: LetterTask;
  lang: Lang;
  onDone: (correct: number, total: number, wrong: number[]) => void;
}) {
  const t = useT();
  const parts = useMemo(() => letterParts(letter), [letter]);
  const bank = useMemo(() => letterBank(letter), [letter]);
  const [filled, setFilled] = useState<(string | null)[]>(() => letter.gaps.map(() => null));
  const [checked, setChecked] = useState(false);

  // A word the bank holds twice stays available once after the first use.
  const remaining = (() => {
    const used = new Map<string, number>();
    for (const w of filled) if (w) used.set(w, (used.get(w) ?? 0) + 1);
    const out: string[] = [];
    for (const w of bank) {
      const n = used.get(w) ?? 0;
      if (n > 0) used.set(w, n - 1);
      else out.push(w);
    }
    return out;
  })();
  const results = letter.gaps.map((g, i) => checkPhraseAnswer(filled[i] ?? '', g.answer));
  const correct = results.filter(Boolean).length;
  const complete = filled.every(Boolean);

  function place(word: string) {
    if (checked) return;
    const next = [...filled];
    const slot = next.findIndex(v => v === null);
    if (slot === -1) return;
    next[slot] = word;
    setFilled(next);
  }

  function clear(i: number) {
    if (checked) return;
    const next = [...filled];
    next[i] = null;
    setFilled(next);
  }

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-3">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
          {letter.icon} {letter.title}
        </p>
        <p className="text-sm text-gray-500">{letter.intro}</p>
        <p className="text-gray-900 leading-9 whitespace-pre-wrap">
          {parts.map((part, i) => (
            <span key={i}>
              {part}
              {i < letter.gaps.length && (
                <button
                  onClick={() => clear(i)}
                  disabled={checked}
                  className={`inline-flex items-center justify-center min-w-20 px-2 h-8 mx-0.5 rounded-lg border-2 text-base font-medium align-middle transition-colors ${
                    checked
                      ? results[i]
                        ? 'border-green-500 bg-green-50 text-green-800'
                        : 'border-red-400 bg-red-50 text-red-700 line-through'
                      : filled[i]
                        ? 'border-gray-300 bg-gray-100 text-gray-900'
                        : 'border-dashed border-gray-300 text-gray-400'
                  }`}
                >
                  {filled[i] ?? '＿＿'}
                </button>
              )}
            </span>
          ))}
        </p>
      </div>

      {!checked ? (
        <>
          <div className="flex flex-wrap gap-2 justify-center">
            {remaining.map((w, i) => (
              <button
                key={`${w}-${i}`}
                onClick={() => place(w)}
                className="px-3 h-10 rounded-lg border-2 border-gray-200 bg-white text-gray-800 text-base font-medium hover:border-gray-300 hover:bg-gray-50 transition-colors"
              >
                {w}
              </button>
            ))}
          </div>
          <button
            onClick={() => setChecked(true)}
            disabled={!complete}
            className="w-full h-12 bg-red-700 hover:bg-red-800 disabled:bg-gray-300 text-white rounded-full font-semibold transition-colors"
          >
            {t('Check', 'Prüfen')}
          </button>
        </>
      ) : (
        <>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-2">
            <h3 className="text-sm font-bold text-gray-800">{t('The letter in German', 'Der Brief auf Deutsch')}</h3>
            <p className="text-sm text-gray-600 whitespace-pre-wrap">{letter.de}</p>
          </div>
          {results.some(r => !r) && (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-2">
              <h3 className="text-sm font-bold text-gray-800">{t('Have a look at these', 'Schau dir die hier an')}</h3>
              {letter.gaps.map((g, i) =>
                results[i] ? null : (
                  <p key={i} className="text-sm">
                    <span className="font-semibold text-green-700">{g.answer}</span>
                    {filled[i] && <span className="text-gray-400 line-through ml-2">{filled[i]}</span>}
                    <span className="block text-gray-500">{g.hint}</span>
                  </p>
                ),
              )}
            </div>
          )}
          <FeedbackBar
            correct={correct === letter.gaps.length}
            title={
              correct === letter.gaps.length
                ? t('The whole letter is right!', 'Der ganze Brief stimmt!')
                : t(`${correct} of ${letter.gaps.length} right`, `${correct} von ${letter.gaps.length} richtig`)
            }
            actions={
              <div className="flex gap-2 pt-1">
                <button
                  onClick={() => { setFilled(letter.gaps.map(() => null)); setChecked(false); }}
                  className="px-5 h-12 rounded-full border-2 border-gray-300 text-gray-700 text-sm font-semibold hover:bg-white/60 transition-colors"
                >
                  {t('Try again', 'Nochmal')}
                </button>
                <button
                  onClick={() => onDone(correct, letter.gaps.length, results.flatMap((r, i) => (r ? [] : [i])))}
                  className={`flex-1 h-12 rounded-full text-white font-semibold transition-colors ${
                    correct === letter.gaps.length ? 'bg-green-700 hover:bg-green-800' : 'bg-red-700 hover:bg-red-800'
                  }`}
                >
                  {t('Done', 'Fertig')}
                </button>
              </div>
            }
          >
            <SpeakButton
            text={parts.map((p, i) => p + (letter.gaps[i]?.answer ?? '')).join('')}
            lang={lang}
            label={t('Read aloud', 'Vorlesen')}
          />
          </FeedbackBar>
        </>
      )}
    </div>
  );
}
