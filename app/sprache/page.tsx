'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useProfile } from '@/lib/use-profile';
import { LANGUAGES, Lang } from '@/lib/lang';
import { Level, levelFor } from '@/lib/profiles';
import { setProfileLevel } from '@/lib/storage';
import { useT } from '@/lib/ui-lang';
import UiLangToggle from '@/components/UiLangToggle';

const LEVELS: { id: Level; label: [string, string]; hint: [string, string] }[] = [
  {
    id: 'A1',
    label: ['Beginner (A1)', 'Anfänger (A1)'],
    hint: ['Start from zero: basic words first, present tense only.', 'Von null an: erst Grundwortschatz, nur Präsens.'],
  },
  {
    id: 'B1',
    label: ['Intermediate (B1)', 'Fortgeschritten (B1)'],
    hint: ['You know the basics: full vocabulary and more tenses.', 'Du kannst die Grundlagen: ganzer Wortschatz und mehr Zeitformen.'],
  },
];

// Second step after choosing a profile: which language to learn. Each language has
// its own level, progress and race; the level is asked the first time.
export default function SprachePage() {
  const { profile, lang: current, setLang, reloadProfile, ready } = useProfile();
  const router = useRouter();
  const [choosing, setChoosing] = useState<Lang | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const t = useT();

  useEffect(() => {
    if (ready && !profile) router.push('/profile');
  }, [ready, profile, router]);

  if (!ready || !profile) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-400 text-sm">{t('Loading…', 'Lädt …')}</p>
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
      setError(err ? t('Could not save the level. Please try again.', 'Das Niveau konnte nicht gespeichert werden. Bitte versuch es noch einmal.') : '');
      setSaving(false);
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6 pb-24 md:pb-6">
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center">
          <p className="text-4xl mb-3">🌍</p>
          <h1 className="text-3xl text-gray-900">{t('Hi', 'Hallo')} {profile.name}!</h1>
          <p className="text-sm text-gray-400 mt-1">{t('Which language do you want to learn?', 'Welche Sprache möchtest du lernen?')}</p>
        </div>

        <div className="space-y-3">
          {LANGUAGES.map(l => {
            const level = levelFor(profile, l.id);
            const lv = LEVELS.find(x => x.id === level);
            const levelLabel = lv ? t(lv.label[0], lv.label[1]) : undefined;
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
                    <span className="block font-bold text-gray-900 text-lg">{t(l.name, l.nameDe)}</span>
                    <span className="block text-sm text-gray-400 mt-0.5">
                      {levelLabel ?? t('Not started yet', 'Noch nicht begonnen')}
                    </span>
                  </span>
                  <span className="text-gray-300">→</span>
                </button>

                {open ? (
                  <div className="px-5 pb-5 space-y-2">
                    <p className="text-sm font-semibold text-gray-900">
                      {level ? t('Change your level', 'Niveau ändern') : t('What is your level?', 'Wie ist dein Niveau?')}
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
                        <span className="block font-semibold text-gray-900 text-sm">{t(x.label[0], x.label[1])}</span>
                        <span className="block text-xs text-gray-400 mt-0.5">{t(x.hint[0], x.hint[1])}</span>
                      </button>
                    ))}
                    {error && <p className="text-sm text-red-600">{error}</p>}
                    <button
                      onClick={() => setChoosing(null)}
                      className="w-full text-xs text-gray-400 hover:text-gray-600 pt-1"
                    >
                      {t('Cancel', 'Abbrechen')}
                    </button>
                  </div>
                ) : (
                  level && (
                    <div className="px-5 pb-3 -mt-2 text-right">
                      <button
                        onClick={() => { setError(''); setChoosing(l.id); }}
                        className="text-xs text-gray-400 hover:text-gray-600"
                      >
                        {t('Change level', 'Niveau ändern')}
                      </button>
                    </div>
                  )
                )}
              </div>
            );
          })}
        </div>

        <Link href="/profile" className="block text-center text-xs text-gray-400 hover:text-gray-600">
          ← {t('Switch profile', 'Profil wechseln')}
        </Link>
        <UiLangToggle />
      </div>
    </main>
  );
}
