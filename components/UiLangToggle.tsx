'use client';

import { useUiLang } from '@/lib/ui-lang';

// 🇬🇧 English / 🇩🇪 Deutsch switch for the app's interface language.
export default function UiLangToggle({ className = '' }: { className?: string }) {
  const [lang, setLang] = useUiLang();
  return (
    <div className={`flex gap-1 bg-gray-100 rounded-xl p-1 ${className}`}>
      {([
        ['en', '🇬🇧 English'],
        ['de', '🇩🇪 Deutsch'],
      ] as const).map(([id, label]) => (
        <button
          key={id}
          type="button"
          onClick={() => setLang(id)}
          className={`flex-1 py-1.5 px-2 text-xs font-medium rounded-lg transition-colors ${
            lang === id ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
