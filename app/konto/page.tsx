'use client';

import Link from 'next/link';
import { ChevronRight, Globe, Users } from 'lucide-react';
import { useLearner } from '@/lib/use-profile';
import { useStars } from '@/lib/use-stars';
import { formatStars } from '@/lib/race';
import { levelFor } from '@/lib/profiles';
import { langInfo } from '@/lib/lang';
import { useT } from '@/lib/ui-lang';
import { ACCOUNT } from '@/lib/sections';
import UiLangToggle from '@/components/UiLangToggle';

// "Profile" tab: who is learning what, plus settings, achievements and help.
export default function KontoPage() {
  const { profile, lang } = useLearner();
  const stars = useStars();
  const t = useT();
  if (!profile || !lang) return null;
  const info = langInfo(lang);
  const level = levelFor(profile, lang);

  const row = (href: string, label: string, Icon: React.ComponentType<{ className?: string }>, sub?: string) => (
    <Link key={href} href={href} className="flex items-center gap-3 px-4 py-3.5 hover:bg-gray-50 transition-colors">
      <Icon className="w-5 h-5 text-red-700 shrink-0" />
      <span className="flex-1 min-w-0">
        <span className="block text-[15px] text-gray-900">{label}</span>
        {sub && <span className="block text-xs text-gray-500">{sub}</span>}
      </span>
      <ChevronRight className="w-4 h-4 text-gray-400 shrink-0" />
    </Link>
  );

  return (
    <main className="md:ml-56 min-h-screen bg-gray-50 pb-24 md:pb-8">
      <div className="max-w-xl mx-auto p-5 space-y-5">
        <div className="flex items-center gap-4">
          <span className="w-16 h-16 rounded-full bg-red-700 text-white flex items-center justify-center font-display text-2xl">
            {profile.name.slice(0, 1).toUpperCase()}
          </span>
          <div className="min-w-0">
            <h1 className="text-3xl text-gray-900 truncate">
              {profile.name}
              {formatStars(stars[profile.id] ?? 0)}
            </h1>
            <p className="text-sm text-gray-500">
              {info.flag} {t(info.name, info.nameDe)}
              {level ? ` · ${t('Level', 'Niveau')} ${level}` : ''}
            </p>
          </div>
        </div>

        <section className="bg-white border border-gray-200 rounded-2xl divide-y divide-gray-100 overflow-hidden">
          {row('/sprache', t('Language & level', 'Sprache & Niveau'), Globe, `${t(info.name, info.nameDe)}${level ? ` · ${level}` : ''}`)}
          {row('/profile', t('Switch or manage profiles', 'Profil wechseln oder verwalten'), Users)}
        </section>

        <section className="bg-white border border-gray-200 rounded-2xl divide-y divide-gray-100 overflow-hidden">
          {ACCOUNT.map(a => row(a.href, t(a.label[0], a.label[1]), a.Icon))}
        </section>

        <section className="space-y-2">
          <p className="px-1 text-xs font-semibold uppercase tracking-wider text-gray-500">
            {t('App language', 'App-Sprache')}
          </p>
          <UiLangToggle />
        </section>
      </div>
    </main>
  );
}
