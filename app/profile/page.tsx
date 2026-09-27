'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { MAX_NAME_LENGTH, Profile, levelFor, mergeProfiles } from '@/lib/profiles';
import { LANGUAGES } from '@/lib/lang';
import { useProfile } from '@/lib/use-profile';
import { useStars } from '@/lib/use-stars';
import { formatStars } from '@/lib/race';
import { createProfile, getProfiles } from '@/lib/storage';

export default function ProfilePage() {
  const { setProfile } = useProfile();
  const stars = useStars();
  const router = useRouter();
  const [profiles, setProfiles] = useState<Profile[]>(() => mergeProfiles([]));
  const [adding, setAdding] = useState(false);
  const [name, setName] = useState('');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let alive = true;
    getProfiles().then(all => {
      if (alive) setProfiles(all);
    });
    return () => {
      alive = false;
    };
  }, []);

  // Next step: pick the language to learn.
  function select(id: string) {
    setProfile(id);
    router.push('/sprache');
  }

  async function create(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed || saving) return;
    setSaving(true);
    setError('');
    try {
      const profile = await createProfile(trimmed);
      select(profile.id);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not create profile.');
      setSaving(false);
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center">
          <p className="text-4xl mb-3">🌍</p>
          <h1 className="text-2xl font-bold text-gray-900">Who are you?</h1>
          <p className="text-sm text-gray-400 mt-1">Choose your profile to continue.</p>
        </div>
        <div className="space-y-3">
          {profiles.map(p => (
            <button
              key={p.id}
              onClick={() => select(p.id)}
              className="w-full bg-white border-2 border-gray-100 hover:border-red-300 rounded-2xl p-5 text-left transition-colors shadow-sm hover:shadow-md"
            >
              <p className="font-bold text-gray-900 text-lg">{p.name + formatStars(stars[p.id] ?? 0)}</p>
              <p className="text-sm text-gray-400 mt-0.5">
                {LANGUAGES.filter(l => levelFor(p, l.id))
                  .map(l => `${l.flag} ${levelFor(p, l.id)}`)
                  .join(' · ') || 'New learner'}
              </p>
            </button>
          ))}

          {adding ? (
            <form
              onSubmit={create}
              className="bg-white border-2 border-red-200 rounded-2xl p-5 space-y-3 shadow-sm"
            >
              <label htmlFor="new-profile-name" className="block font-semibold text-gray-900">
                New profile
              </label>
              <input
                id="new-profile-name"
                autoFocus
                value={name}
                onChange={e => setName(e.target.value)}
                maxLength={MAX_NAME_LENGTH}
                placeholder="Your name"
                className="w-full border border-gray-200 rounded-xl px-3 py-2 text-base focus:outline-none focus:border-red-300"
              />
              {error && <p className="text-sm text-red-600">{error}</p>}
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setAdding(false);
                    setName('');
                    setError('');
                  }}
                  className="flex-1 rounded-xl py-2 font-semibold text-gray-500 bg-gray-100 hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!name.trim() || saving}
                  className="flex-1 rounded-xl py-2 font-semibold text-white bg-red-500 hover:bg-red-600 disabled:opacity-50"
                >
                  {saving ? 'Creating…' : 'Create'}
                </button>
              </div>
            </form>
          ) : (
            <button
              onClick={() => setAdding(true)}
              className="w-full border-2 border-dashed border-gray-200 hover:border-red-300 rounded-2xl p-4 text-gray-500 hover:text-gray-700 font-semibold transition-colors"
            >
              + New profile
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
