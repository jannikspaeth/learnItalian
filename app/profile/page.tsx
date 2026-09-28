'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { MAX_NAME_LENGTH, Profile, levelFor, mergeProfiles } from '@/lib/profiles';
import { LANGUAGES } from '@/lib/lang';
import { useProfile } from '@/lib/use-profile';
import { useStars } from '@/lib/use-stars';
import { formatStars } from '@/lib/race';
import { createProfile, deleteProfile, getProfiles } from '@/lib/storage';

export default function ProfilePage() {
  const { profile: active, setProfile, clearProfile } = useProfile();
  const stars = useStars();
  const router = useRouter();
  const [profiles, setProfiles] = useState<Profile[]>(() => mergeProfiles([]));
  const [adding, setAdding] = useState(false);
  const [name, setName] = useState('');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  // Manage mode shows a delete button per profile; deleting needs a second confirm.
  const [managing, setManaging] = useState(false);
  const [confirming, setConfirming] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState('');

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

  async function remove(id: string) {
    if (deleting) return;
    setDeleting(true);
    setDeleteError('');
    try {
      setProfiles(await deleteProfile(id));
      if (active?.id === id) clearProfile();
      setConfirming(null);
    } catch (err) {
      setDeleteError(err instanceof Error ? err.message : 'Could not delete the profile.');
    } finally {
      setDeleting(false);
    }
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
          {profiles.map(p => {
            const info = (
              <>
                <p className="font-bold text-gray-900 text-lg">{p.name + formatStars(stars[p.id] ?? 0)}</p>
                <p className="text-sm text-gray-400 mt-0.5">
                  {LANGUAGES.filter(l => levelFor(p, l.id))
                    .map(l => `${l.flag} ${levelFor(p, l.id)}`)
                    .join(' · ') || 'New learner'}
                </p>
              </>
            );
            if (!managing) {
              return (
                <button
                  key={p.id}
                  onClick={() => select(p.id)}
                  className="w-full bg-white border-2 border-gray-100 hover:border-red-300 rounded-2xl p-5 text-left transition-colors shadow-sm hover:shadow-md"
                >
                  {info}
                </button>
              );
            }
            return (
              <div key={p.id} className="bg-white border-2 border-gray-100 rounded-2xl p-5 shadow-sm space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0">{info}</div>
                  {confirming !== p.id && (
                    <button
                      onClick={() => { setConfirming(p.id); setDeleteError(''); }}
                      className="shrink-0 text-sm font-medium px-3 py-1.5 rounded-lg bg-red-50 text-red-700 hover:bg-red-100"
                    >
                      🗑 Delete
                    </button>
                  )}
                </div>
                {confirming === p.id && (
                  <div className="rounded-xl bg-red-50 border border-red-100 p-3 space-y-2">
                    <p className="text-sm text-red-800">
                      Delete <strong>{p.name}</strong> and all progress in every language? This can&apos;t be undone.
                    </p>
                    {deleteError && <p className="text-sm text-red-600">{deleteError}</p>}
                    <div className="flex gap-2">
                      <button
                        onClick={() => setConfirming(null)}
                        disabled={deleting}
                        className="flex-1 rounded-lg py-1.5 text-sm font-semibold text-gray-600 bg-white hover:bg-gray-100"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => remove(p.id)}
                        disabled={deleting}
                        className="flex-1 rounded-lg py-1.5 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 disabled:opacity-50"
                      >
                        {deleting ? 'Deleting…' : 'Delete for good'}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

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

        <button
          onClick={() => { setManaging(m => !m); setConfirming(null); setDeleteError(''); }}
          className="block mx-auto text-xs text-gray-400 hover:text-gray-600"
        >
          {managing ? 'Done' : 'Manage profiles'}
        </button>
      </div>
    </main>
  );
}
