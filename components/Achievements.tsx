'use client';

import { Badge, BADGE_CATEGORIES, CATEGORY_DE, badgeText, visibleBadges } from '@/lib/achievements';
import { useUiLang } from '@/lib/ui-lang';

function BadgeTile({ b, isNew }: { b: Badge; isNew: boolean }) {
  const [uiLang] = useUiLang();
  const text = badgeText(b, uiLang === 'de');
  const pct =
    b.progress && b.progress.need > 0
      ? Math.round((b.progress.have / b.progress.need) * 100)
      : b.unlocked
        ? 100
        : 0;
  return (
    <div
      className={`relative rounded-xl border p-3 ${
        b.unlocked ? 'border-amber-200 bg-amber-50' : 'border-gray-100 bg-gray-50'
      }`}
    >
      {isNew && (
        <span className="absolute -top-1.5 -right-1.5 text-[9px] font-bold bg-red-600 text-white px-1.5 py-0.5 rounded-full">
          {uiLang === 'de' ? 'NEU' : 'NEW'}
        </span>
      )}
      <div className="flex items-center gap-2">
        <span className={`text-xl ${b.unlocked ? '' : 'grayscale opacity-40'}`}>{b.icon}</span>
        <div className="min-w-0">
          <p className={`text-xs font-semibold truncate ${b.unlocked ? 'text-gray-900' : 'text-gray-500'}`}>
            {text.label}
          </p>
          <p className="text-[10px] text-gray-400 truncate">{text.desc}</p>
        </div>
      </div>
      {!b.unlocked && b.progress && b.progress.need > 1 && (
        <div className="mt-2 flex items-center gap-1.5">
          <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-amber-400 rounded-full" style={{ width: `${pct}%` }} />
          </div>
          <span className="text-[9px] text-gray-400 tabular-nums">
            {b.progress.have}/{b.progress.need}
          </span>
        </div>
      )}
    </div>
  );
}

export default function Achievements({
  badges,
  newIds,
}: {
  badges: Badge[];
  newIds: Set<string>;
}) {
  const cats = BADGE_CATEGORIES.filter(c => badges.some(b => b.category === c));
  const [uiLang] = useUiLang();
  const de = uiLang === 'de';
  return (
    <div className="space-y-5">
      {cats.map(cat => {
        const list = badges.filter(b => b.category === cat);
        const got = list.filter(b => b.unlocked).length;
        const visible = visibleBadges(list);
        return (
          <section key={cat} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-gray-900 text-base">{de ? CATEGORY_DE[cat] ?? cat : cat}</h2>
              <span className="text-xs text-gray-400 tabular-nums">{got} {de ? 'freigeschaltet' : 'unlocked'}</span>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {visible.map(b => (
                <BadgeTile key={b.id} b={b} isNew={b.unlocked && newIds.has(b.id)} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
