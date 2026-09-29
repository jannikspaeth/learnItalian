'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useProfile } from '@/lib/use-profile';
import { LANGUAGES, Lang } from '@/lib/lang';
import { Level, levelFor } from '@/lib/profiles';
import { setProfileLevel } from '@/lib/storage';

const LEVELS: { id: Level; label: string; hint: string }[] = [
  { id: 'A1', label: 'Beginner (A1)', hint: 'Start from zero: basic words first, present tense only.' },
  { id: 'B1', label: 'Intermediate (B1)', hint: 'You know the basics: full vocabulary and more tenses.' },
];

// Second step after choosing a profile: which language to learn. Each language has
// its own level, progress and race; the level is asked the first time.
export default function SprachePage() {
  const { profile, lang: current, setLang, reloadProfile, ready } = useProfile();
  const router = useRouter();
  const [choosing, setChoosing] = useState<Lang | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (ready && !profile) router.push('/profile');
  }, [ready, profile, router]);

  if (!ready || !profile) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-400 text-sm">Loading…</p>
      </main>
    );
  }

  function start(l: Lang) {
    setLang(l);
    router.push('/heute');
  }

  function pick(l: Lang) {
    setError('');
    if (levelFor(profile, l)) start(l);
    else setChoosing(l);
  }

  async function chooseLevel(l: Lang, level: Level) {
    if (!profile || saving) return;
    setSaving(true);
    setError('');
    try {
      await setProfileLevel(profile.id, l, level);
      reloadProfile();
      start(l);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not save the level.');
      setSaving(false);
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center">
          <p className="text-4xl mb-3">🌍</p>
          <h1 className="text-2xl font-bold text-gray-900">Hi {profile.name}!</h1>
          <p className="text-sm text-gray-400 mt-1">Which language do you want to learn?</p>
        </div>

        <div className="space-y-3">
          {LANGUAGES.map(l => {
            const level = levelFor(profile, l.id);
            const levelLabel = LEVELS.find(x => x.id === level)?.label;
            const open = choosing === l.id;
            return (
              <div
                key={l.id}
                className={`bg-white border-2 rounded-2xl shadow-sm transition-colors ${
                  open ? 'border-red-200' : current === l.id ? 'border-red-100' : 'border-gray-100'
                }`}
              >
                <button
                  onClick={() => pick(l.id)}
                  disabled={saving}
                  className="w-full p-5 text-left flex items-center gap-4 rounded-2xl hover:bg-gray-50 transition-colors"
                >
                  <span className="text-4xl">{l.flag}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-bold text-gray-900 text-lg">{l.name}</span>
                    <span className="block text-sm text-gray-400 mt-0.5">
                      {levelLabel ?? 'Not started yet'}
                    </span>
                  </span>
                  <span className="text-gray-300">→</span>
                </button>

                {open ? (
                  <div className="px-5 pb-5 space-y-2">
                    <p className="text-sm font-semibold text-gray-900">
                      {level ? 'Change your level' : 'What is your level?'}
                    </p>
                    {LEVELS.map(x => (
                      <button
                        key={x.id}
                        onClick={() => chooseLevel(l.id, x.id)}
                        disabled={saving}
                        className={`w-full text-left rounded-xl border-2 p-3 transition-colors disabled:opacity-50 ${
                          level === x.id ? 'border-red-300 bg-red-50' : 'border-gray-100 hover:border-red-300'
                        }`}
                      >
                        <span className="block font-semibold text-gray-900 text-sm">{x.label}</span>
                        <span className="block text-xs text-gray-400 mt-0.5">{x.hint}</span>
                      </button>
                    ))}
                    {error && <p className="text-sm text-red-600">{error}</p>}
                    <button
                      onClick={() => setChoosing(null)}
                      className="w-full text-xs text-gray-400 hover:text-gray-600 pt-1"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  level && (
                    <div className="px-5 pb-3 -mt-2 text-right">
                      <button
                        onClick={() => { setError(''); setChoosing(l.id); }}
                        className="text-xs text-gray-400 hover:text-gray-600"
                      >
                        Change level
                      </button>
                    </div>
                  )
                )}
              </div>
            );
          })}
        </div>

        <Link href="/profile" className="block text-center text-xs text-gray-400 hover:text-gray-600">
          ← Switch profile
        </Link>
      </div>
    </main>
  );
}
