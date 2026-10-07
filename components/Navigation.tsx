'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sun, GraduationCap, Flag, User } from 'lucide-react';
import { useProfile } from '@/lib/use-profile';
import { useStars } from '@/lib/use-stars';
import { formatStars } from '@/lib/race';
import { langInfo } from '@/lib/lang';
import { useT } from '@/lib/ui-lang';
import UiLangToggle from '@/components/UiLangToggle';
import { PRACTICE, ACCOUNT } from '@/lib/sections';

// Mobile: four tabs. "Practise" is a hub of every exercise type, "Profile" holds
// language, level, achievements and help. Desktop: one sidebar with everything.
const tabs = [
  { href: '/heute', label: ['Today', 'Heute'], Icon: Sun, match: ['/heute'] },
  { href: '/ueben', label: ['Practise', 'Üben'], Icon: GraduationCap, match: ['/ueben', ...PRACTICE.map(p => p.href)] },
  { href: '/race', label: ['Race', 'Rennen'], Icon: Flag, match: ['/race'] },
  { href: '/konto', label: ['Profile', 'Profil'], Icon: User, match: ['/konto', '/profile', '/sprache', ...ACCOUNT.map(a => a.href)] },
] as const;

export default function Navigation() {
  const path = usePathname();
  const { profile, lang } = useProfile();
  const info = lang ? langInfo(lang) : null;
  const stars = useStars();
  const myStars = profile ? formatStars(stars[profile.id] ?? 0) : '';
  const t = useT();
  const langName = info ? t(info.name, info.nameDe) : '…';
  const on = (href: string) => path.startsWith(href);

  const sideLink = (href: string, label: string, Icon: React.ComponentType<{ className?: string }>) => (
    <Link
      key={href}
      href={href}
      className={`flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
        on(href) ? 'bg-red-50 text-red-700' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-800'
      }`}
    >
      <Icon className="w-[18px] h-[18px] shrink-0" />
      {label}
    </Link>
  );

  return (
    <>
      {/* ── Desktop sidebar ── */}
      <aside className="hidden md:flex flex-col fixed left-0 top-0 h-full w-56 bg-white border-r border-gray-200 z-50">
        <div className="p-5 border-b border-gray-200">
          <Link href="/sprache" title={t('Switch language', 'Sprache wechseln')} className="flex items-center gap-2.5">
            <span className="text-2xl">{info?.flag ?? '🌍'}</span>
            <div>
              <p className="font-display text-base text-gray-900 leading-none">
                {profile ? profile.name + myStars : t('Language Learning', 'Sprachen lernen')}
              </p>
              <p className="text-xs text-gray-400 mt-1">{t('German', 'Deutsch')} → {langName}</p>
            </div>
          </Link>
        </div>
        <nav className="flex-1 overflow-y-auto p-3 space-y-0.5">
          {sideLink('/heute', t('Today', 'Heute'), Sun)}
          <p className="px-3 pt-4 pb-1 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
            {t('Practise', 'Üben')}
          </p>
          {PRACTICE.map(p => sideLink(p.href, t(p.label[0], p.label[1]), p.Icon))}
          <p className="px-3 pt-4 pb-1 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
            {t('More', 'Mehr')}
          </p>
          {sideLink('/race', t('The Race', 'Das Rennen'), Flag)}
          {ACCOUNT.map(a => sideLink(a.href, t(a.label[0], a.label[1]), a.Icon))}
        </nav>
        <div className="p-4 border-t border-gray-200 space-y-2">
          <UiLangToggle />
          <Link href="/konto" className="block text-xs text-gray-500 hover:text-gray-800 text-center transition-colors">
            {t('Profile & settings', 'Profil & Einstellungen')}
          </Link>
        </div>
      </aside>

      {/* ── Mobile bottom bar ── */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur border-t border-gray-200 z-50 grid grid-cols-4 safe-area-inset-bottom">
        {tabs.map(({ href, label: [en, de], Icon, match }) => {
          const active = match.some(m => path.startsWith(m));
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center gap-1 pt-2.5 pb-2 text-[11px] transition-colors ${
                active ? 'text-red-700 font-semibold' : 'text-gray-500 font-medium'
              }`}
            >
              <Icon className="w-6 h-6" strokeWidth={active ? 2.25 : 1.75} />
              {t(en, de)}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
