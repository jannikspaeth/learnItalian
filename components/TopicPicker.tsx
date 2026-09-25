'use client';

import { useState } from 'react';
import { TOPICS, topicInfo } from '@/lib/vocab-topics';

export interface TopicProgress {
  seen: number;
  total: number;
}

// Collapsible topic chooser for the Learn tab: shows the current topic and, when
// opened, every topic with how many of its words have been seen.
export default function TopicPicker({
  value,
  onChange,
  progress,
}: {
  value: string; // topic id or 'all'
  onChange: (v: string) => void;
  progress: Record<string, TopicProgress>; // keyed by topic id, plus 'all'
}) {
  const [open, setOpen] = useState(false);
  const current = value === 'all' ? null : topicInfo(value);

  function pick(v: string) {
    onChange(v);
    setOpen(false);
  }

  function row(id: string, icon: string, label: string) {
    const p = progress[id] ?? { seen: 0, total: 0 };
    const pct = p.total > 0 ? Math.round((p.seen / p.total) * 100) : 0;
    const active = value === id;
    return (
      <button
        key={id}
        onClick={() => pick(id)}
        className={`text-left rounded-xl border px-3 py-2 transition-colors ${
          active ? 'border-red-400 bg-red-50' : 'border-gray-100 bg-white hover:bg-gray-50'
        }`}
      >
        <div className="flex items-center gap-2">
          <span className="text-base shrink-0">{icon}</span>
          <span className="text-sm font-medium text-gray-800 truncate">{label}</span>
        </div>
        <div className="mt-1.5 flex items-center gap-2">
          <div className="flex-1 h-1 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-green-500 rounded-full" style={{ width: `${pct}%` }} />
          </div>
          <span className="text-[11px] text-gray-400 tabular-nums shrink-0">
            {p.seen}/{p.total}
          </span>
        </div>
      </button>
    );
  }

  return (
    <div className="space-y-2">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between gap-2 rounded-xl border border-gray-200 px-3 py-2 text-sm hover:bg-gray-50 transition-colors"
      >
        <span className="flex items-center gap-2 min-w-0">
          <span className="text-gray-400 shrink-0">Topic</span>
          <span className="font-medium text-gray-800 truncate">
            {current ? `${current.icon} ${current.label}` : '📚 All topics'}
          </span>
        </span>
        <span className="text-gray-400 shrink-0">{open ? '▲' : '▼'}</span>
      </button>
      {open && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
          {row('all', '📚', 'All topics')}
          {TOPICS.map(t => row(t.id, t.icon, t.label))}
        </div>
      )}
    </div>
  );
}
