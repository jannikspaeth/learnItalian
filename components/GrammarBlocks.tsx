'use client';

import { Fragment } from 'react';
import { Lightbulb, TriangleAlert } from 'lucide-react';
import SpeakButton from '@/components/SpeakButton';
import type { Lang } from '@/lib/lang';
import type { GrammarTable } from '@/lib/grammar-lessons';

// Building blocks for grammar rules and lessons (exercise rule panel + /grammar lessons).
// Content strings may mark key words as **bold** and wrong forms as ~~struck~~;
// nothing else is parsed.

export function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*.+?\*\*|~~.+?~~)/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith('**') && p.endsWith('**') && p.length > 4 ? (
          <strong key={i} className="font-semibold text-gray-900">{p.slice(2, -2)}</strong>
        ) : p.startsWith('~~') && p.endsWith('~~') && p.length > 4 ? (
          <span key={i} className="line-through decoration-red-400 text-gray-500">{p.slice(2, -2)}</span>
        ) : (
          <Fragment key={i}>{p}</Fragment>
        ),
      )}
    </>
  );
}

export function RuleList({ points }: { points: readonly string[] }) {
  return (
    <ul className="space-y-1.5">
      {points.map((p, i) => (
        <li key={i} className="flex gap-2 text-sm text-gray-700 leading-relaxed">
          <span className="mt-[0.55rem] w-1.5 h-1.5 rounded-full bg-red-700/70 shrink-0" />
          <span><RichText text={p} /></span>
        </li>
      ))}
    </ul>
  );
}

export function NoteBox({ kind, text }: { kind: 'tip' | 'warn'; text: string }) {
  const tip = kind === 'tip';
  return (
    <div
      className={`flex gap-2.5 rounded-xl px-3 py-2.5 text-sm leading-relaxed ${
        tip ? 'bg-green-50 text-green-900 border border-green-100' : 'bg-amber-50 text-amber-900 border border-amber-100'
      }`}
    >
      {tip ? <Lightbulb className="w-4 h-4 mt-0.5 shrink-0 text-green-700" /> : <TriangleAlert className="w-4 h-4 mt-0.5 shrink-0 text-amber-600" />}
      <p>
        <span className="font-semibold">{tip ? 'Merke: ' : 'Achtung: '}</span>
        <RichText text={text} />
      </p>
    </div>
  );
}

export function TableBlock({ table }: { table: GrammarTable }) {
  // Without a header row (e.g. a plain grid of numbers) the first column is no label.
  const hasHead = table.head.some(h => h.trim());
  return (
    <div className="overflow-x-auto -mx-1 px-1">
      <table className="w-full text-sm border-collapse">
        {hasHead && (
          <thead>
            <tr>
              {table.head.map((h, i) => (
                <th key={i} className="text-left text-xs font-semibold text-gray-500 px-2.5 py-1.5 border-b border-gray-200 whitespace-nowrap">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {table.rows.map((row, r) => (
            <tr key={r} className="odd:bg-gray-50/70">
              {row.map((cell, c) => (
                <td
                  key={c}
                  className={`px-2.5 py-1.5 align-top ${c === 0 && hasHead ? 'text-gray-500 whitespace-nowrap' : 'text-gray-900'}`}
                >
                  <RichText text={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ExampleList({ examples, lang }: { examples: readonly { target: string; de: string }[]; lang: Lang }) {
  return (
    <div className="space-y-1.5">
      {examples.map((ex, i) => (
        <div key={i} className="flex items-start gap-2 bg-gray-50 rounded-lg px-3 py-2">
          <SpeakButton text={ex.target} lang={lang} className="shrink-0 -my-0.5" />
          <div className="min-w-0">
            <p className="font-semibold text-gray-900 text-sm">{ex.target}</p>
            <p className="text-gray-500 text-xs mt-0.5">{ex.de}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
