'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { useLearner } from '@/lib/use-profile';
import { langInfo } from '@/lib/lang';
import { useT } from '@/lib/ui-lang';
import { PRACTICE } from '@/lib/sections';

// "Practise" hub: every exercise type as one tile.
export default function UebenPage() {
  const { lang } = useLearner();
  const t = useT();
  const info = lang ? langInfo(lang) : null;

  return (
    <main className="md:ml-56 min-h-screen bg-gray-50 pb-24 md:pb-8">
      <div className="max-w-xl mx-auto p-5 space-y-5">
        <div>
          <h1 className="text-3xl text-gray-900">{t('Practise', 'Üben')}</h1>
          <p className="text-gray-500 text-sm mt-1">
            {info ? `${info.flag} ${t(info.name, info.nameDe)} · ` : ''}
            {t('Pick what you want to work on', 'Such dir aus, was du üben möchtest')}
          </p>
        </div>
        <div className="space-y-3">
          {PRACTICE.map(({ href, label, hint, Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-4 bg-white border border-gray-200 rounded-2xl p-4 hover:border-red-200 hover:bg-red-50/40 transition-colors"
            >
              <span className="w-12 h-12 shrink-0 rounded-xl bg-red-50 text-red-700 flex items-center justify-center">
                <Icon className="w-6 h-6" />
              </span>
              <span className="flex-1 min-w-0">
                <span className="block font-display text-lg text-gray-900">{t(label[0], label[1])}</span>
                <span className="block text-sm text-gray-500">{t(hint[0], hint[1])}</span>
              </span>
              <ChevronRight className="w-5 h-5 text-gray-400 shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
