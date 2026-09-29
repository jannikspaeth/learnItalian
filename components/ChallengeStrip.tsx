'use client';

import { useT } from '@/lib/ui-lang';

// Compact gamified targets shown under the streak banner. All inputs are plain
// numbers; each line hides itself when it isn't meaningful yet.
export default function ChallengeStrip({
  todayCount,
  top5Threshold,
  top4Threshold,
  top3Threshold,
  top2Threshold,
  top1Threshold,
  personalBest,
  rank,
  yesterday,
}: {
  todayCount: number;
  top5Threshold: number | null; // 5th place all-time record count (null if < 5 records)
  top4Threshold: number | null;
  top3Threshold: number | null;
  top2Threshold: number | null;
  top1Threshold: number | null;
  personalBest: number;         // best PRIOR day (excludes today)
  rank: number | null;          // live position today among racers
  yesterday: number;
}) {
  const t = useT();
  const cards = (n: number) => (n === 1 ? t('1 card', '1 Karte') : t(`${n} cards`, `${n} Karten`));
  const lines: { icon: string; text?: string; achieved?: string; next?: string; done?: boolean }[] = [];


  const allTimeMilestones: { threshold: number; label: string; place: number }[] = [];
  if (top5Threshold != null) allTimeMilestones.push({ threshold: top5Threshold, label: t('the all-time top 5', 'den ewigen Top 5'), place: 5 });
  if (top4Threshold != null) allTimeMilestones.push({ threshold: top4Threshold, label: t('all-time 4th place', 'Platz 4 aller Zeiten'), place: 4 });
  if (top3Threshold != null) allTimeMilestones.push({ threshold: top3Threshold, label: t('all-time 3rd place', 'Platz 3 aller Zeiten'), place: 3 });
  if (top2Threshold != null) allTimeMilestones.push({ threshold: top2Threshold, label: t('all-time 2nd place', 'Platz 2 aller Zeiten'), place: 2 });
  if (top1Threshold != null) allTimeMilestones.push({ threshold: top1Threshold, label: t('all-time #1', 'Platz 1 aller Zeiten'), place: 1 });

  function congratsForPlace(place: number): string {
    if (place === 5) return t("Congrats, you're in the top 5!", 'Glückwunsch, du bist in den Top 5!');
    if (place === 1) return t('All-time #1 day!', 'Bester Tag aller Zeiten!');
    return t(`Congrats, top ${place}!`, `Glückwunsch, Top ${place}!`);
  }

  if (allTimeMilestones.length > 0) {
    const achieved = [...allTimeMilestones].reverse().find((m) => todayCount >= m.threshold);
    const next = allTimeMilestones.find((m) => todayCount < m.threshold);

    if (achieved && next) {
      const gap = next.threshold - todayCount;
      lines.push({
        icon: '🏅',
        achieved: congratsForPlace(achieved.place),
        next: t(`${cards(gap)} from ${next.label}`, `noch ${cards(gap)} bis ${next.label}`),
      });
    } else if (next) {
      const gap = next.threshold - todayCount;
      lines.push({
        icon: '🏅',
        text: t(`${cards(gap)} from ${next.label}`, `noch ${cards(gap)} bis ${next.label}`),
      });
    } else if (achieved) {
      lines.push({ icon: '🏅', text: congratsForPlace(achieved.place), done: true });
    }
  }

  if (personalBest > 0) {
    const gap = personalBest - todayCount;
    lines.push(
      gap > 0
        ? { icon: '⭐', text: t(`${cards(gap)} from your best (${personalBest})`, `noch ${cards(gap)} bis zu deinem Rekord (${personalBest})`) }
        : { icon: '⭐', text: t('New personal best!', 'Neuer persönlicher Rekord!'), done: true },
    );
  }

  if (rank != null) {
    if (todayCount === 0) lines.push({ icon: '🏎️', text: t('Do some cards to enter today’s ranking', 'Übe ein paar Karten, um heute in die Wertung zu kommen') });
    else if (rank === 1) lines.push({ icon: '👑', text: t('You’re #1 today!', 'Du bist heute die Nummer 1!'), done: true });
    else lines.push({ icon: '🏎️', text: t(`You’re #${rank} today`, `Du bist heute auf Platz ${rank}`) });
  }

  if (yesterday > 0) {
    const gap = yesterday - todayCount;
    lines.push(
      gap > 0
        ? { icon: '📈', text: t(`${cards(gap)} to beat yesterday (${yesterday})`, `noch ${cards(gap)}, um gestern zu schlagen (${yesterday})`) }
        : { icon: '📈', text: t('Beat yesterday!', 'Gestern übertroffen!'), done: true },
    );
  }

  if (lines.length === 0) return null;

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 space-y-1.5">
      <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide flex items-center gap-1">
        <span>🎯</span> {t('Challenges', 'Herausforderungen')}
      </p>
      {lines.map((l, i) => (
        <div key={i} className="flex items-center gap-2 text-sm">
          <span className="w-5 text-center">{l.icon}</span>
          {l.achieved != null ? (
            <span>
              <span className="font-semibold text-green-700">{l.achieved}</span>
              {l.next && <span className="text-gray-700"> — {l.next}</span>}
            </span>
          ) : (
            <span className={l.done ? 'font-semibold text-green-700' : 'text-gray-700'}>{l.text}</span>
          )}
        </div>
      ))}
    </div>
  );
}
