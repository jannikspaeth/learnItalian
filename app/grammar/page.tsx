'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { GRAMMAR_LESSONS } from '@/lib/grammar-lessons';
import { GRAMMAR_TOPICS, GrammarTopic } from '@/lib/grammar-exercises';
import { getGrammarRecords, recordExercise } from '@/lib/storage';
import { GrammarRecord } from '@/lib/types';
import { useProfile } from '@/lib/use-profile';
import { isBeginner } from '@/lib/profiles';
import GrammarExercise from '@/components/exercises/GrammarExercise';

type Tab = 'exercises' | 'lessons';

export default function GrammarPage() {
  const { profile, ready } = useProfile();
  const router = useRouter();
  const [tab, setTab] = useState<Tab>('exercises');
  // First lesson open by default; the rest collapsed.
  const [open, setOpen] = useState<Set<string>>(new Set([GRAMMAR_LESSONS[0]?.id]));
  const [records, setRecords] = useState<GrammarRecord[]>([]);
  const [practicing, setPracticing] = useState<string | null>(null);
  const [showMistakes, setShowMistakes] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (ready && !profile) router.push('/profile');
  }, [ready, profile, router]);

  const refresh = useCallback(async () => setRecords(await getGrammarRecords()), []);
  useEffect(() => { refresh(); }, [refresh]);

  if (!ready || !profile) {
    return (
      <main className="md:ml-56 min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-400 text-sm">Loading…</p>
      </main>
    );
  }

  const beginner = isBeginner(profile);
  const recordOf = new Map(records.map(r => [r.id, r]));
  const unlocked = GRAMMAR_TOPICS.filter(t => !(beginner && t.level === 'B1'));
  const mastered = unlocked.filter(t => recordOf.get(t.id)?.mastered).length;
  const active = practicing ? GRAMMAR_TOPICS.find(t => t.id === practicing) : undefined;

  function toggle(set: Set<string>, update: (s: Set<string>) => void, id: string) {
    const next = new Set(set);
    if (next.has(id)) next.delete(id); else next.add(id);
    update(next);
  }

  function openLesson(id: string) {
    setPracticing(null);
    setTab('lessons');
    setOpen(prev => new Set(prev).add(id));
  }

  async function handleComplete(correct: number, total: number) {
    await recordExercise('grammar', correct, total).catch(() => {});
    await refresh();
  }

  function topicCard(t: GrammarTopic) {
    const rec = recordOf.get(t.id);
    const locked = beginner && t.level === 'B1';
    const pct = rec && rec.lastTotal > 0 ? Math.round((rec.lastCorrect / rec.lastTotal) * 100) : null;
    const lesson = t.lessonId ? GRAMMAR_LESSONS.find(l => l.id === t.lessonId) : undefined;
    return (
      <div
        key={t.id}
        className={`bg-white rounded-xl border shadow-sm p-4 space-y-3 ${locked ? 'border-gray-100 opacity-60' : 'border-gray-100'}`}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="font-semibold text-gray-900 flex items-center gap-2">
              <span>{t.icon}</span>
              <span>{t.title}</span>
            </p>
            <p className="text-xs text-gray-400 mt-0.5">
              {t.items.length} sentences
              {rec && ` · ${rec.totalAttempts}× practised`}
              {rec?.mastered && ' · ✓ mastered'}
            </p>
          </div>
          {locked ? (
            <span className="shrink-0 text-xs text-gray-400 px-2 py-1">🔒 after beginner level</span>
          ) : (
            <button
              onClick={() => setPracticing(t.id)}
              className="shrink-0 text-sm font-medium px-3 py-1.5 rounded-lg bg-red-50 text-red-700 hover:bg-red-100 transition-colors"
            >
              {rec ? 'Practise' : 'Start'}
            </button>
          )}
        </div>

        {pct !== null && (
          <div className="flex items-center gap-2">
            <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full ${pct === 100 ? 'bg-green-500' : pct >= 70 ? 'bg-amber-400' : 'bg-red-400'}`}
                style={{ width: `${pct}%` }}
              />
            </div>
            <span className="text-xs text-gray-400 tabular-nums">
              last {rec!.lastCorrect}/{rec!.lastTotal}
            </span>
          </div>
        )}

        <div className="flex items-center gap-3 text-xs">
          {lesson && (
            <button onClick={() => openLesson(lesson.id)} className="text-blue-600 hover:underline">
              📘 Lesson: {lesson.title}
            </button>
          )}
          {rec && rec.recentMistakes.length > 0 && (
            <button
              onClick={() => toggle(showMistakes, setShowMistakes, t.id)}
              className="text-red-600 hover:underline"
            >
              {showMistakes.has(t.id) ? 'Hide' : 'Show'} {rec.recentMistakes.length} mistake
              {rec.recentMistakes.length === 1 ? '' : 's'}
            </button>
          )}
        </div>

        {rec && showMistakes.has(t.id) && (
          <div className="space-y-1 pt-1">
            {rec.recentMistakes.map((m, i) => (
              <p key={i} className="text-xs text-gray-600">
                {m.prompt.replace('___', '＿')}{' '}
                <span className="text-red-400 line-through">{m.userAnswer || '–'}</span>{' '}
                <span className="text-green-700 font-medium">{m.correct}</span>
              </p>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <main className="md:ml-56 min-h-screen bg-gray-50 pb-24 md:pb-8">
      <div className="max-w-xl mx-auto p-5 space-y-5">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Grammar</h1>
          <p className="text-gray-400 text-sm mt-0.5">
            {tab === 'exercises'
              ? `${mastered} of ${unlocked.length} topics mastered`
              : 'Die ersten Schritte auf Italienisch – kurz erklärt.'}
          </p>
        </div>

        <div className="flex gap-1 bg-gray-100 rounded-xl p-1">
          {([
            ['exercises', 'Exercises'],
            ['lessons', 'Lessons'],
          ] as [Tab, string][]).map(([id, label]) => (
            <button
              key={id}
              onClick={() => { setTab(id); setPracticing(null); }}
              className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${
                tab === id ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* ===== EXERCISES ===== */}
        {tab === 'exercises' && (
          active ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-3">
                <h2 className="font-bold text-gray-900 flex items-center gap-2">
                  <span>{active.icon}</span> {active.title}
                </h2>
                <button
                  onClick={() => setPracticing(null)}
                  className="shrink-0 text-sm text-gray-500 hover:text-gray-800"
                >
                  ← All topics
                </button>
              </div>
              <GrammarExercise key={active.id} topic={active} onComplete={handleComplete} />
            </div>
          ) : (
            <div className="space-y-3">{GRAMMAR_TOPICS.map(topicCard)}</div>
          )
        )}

        {/* ===== LESSONS ===== */}
        {tab === 'lessons' &&
          GRAMMAR_LESSONS.map(lesson => {
            const isOpen = open.has(lesson.id);
            return (
              <section
                key={lesson.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggle(open, setOpen, lesson.id)}
                  className="w-full flex items-center justify-between gap-3 p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="flex items-center gap-2.5 min-w-0">
                    <span className="text-xl shrink-0">{lesson.icon}</span>
                    <span className="min-w-0">
                      <span className="block font-bold text-gray-900 text-base">{lesson.title}</span>
                      <span className="block text-xs text-gray-400 mt-0.5">{lesson.intro}</span>
                    </span>
                  </span>
                  <span className={`text-gray-300 transition-transform shrink-0 ${isOpen ? 'rotate-90' : ''}`}>
                    ▶
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 space-y-4 border-t border-gray-50 pt-4">
                    {lesson.sections.map((s, i) => (
                      <div key={i} className="space-y-2">
                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                          {s.heading}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{s.body}</p>
                        {s.examples && s.examples.length > 0 && (
                          <div className="space-y-1.5 pt-1">
                            {s.examples.map((ex, j) => (
                              <div
                                key={j}
                                className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 bg-gray-50 rounded-lg px-3 py-2"
                              >
                                <span className="font-semibold text-gray-900 text-sm">{ex.it}</span>
                                <span className="text-gray-300 text-sm">→</span>
                                <span className="text-gray-500 text-sm">{ex.de}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </section>
            );
          })}
      </div>
    </main>
  );
}
