import { NextRequest, NextResponse } from 'next/server';
import { dbConfigured, getRaceState, setRaceState, getAllRaceStats } from '@/lib/db';
import { berlinToday, berlinMonth, monthlyTotals, settleStars } from '@/lib/race';
import { isLang } from '@/lib/lang';

// Lightweight endpoint for app-wide ⭐ display (nav header, profile switcher) so those
// surfaces don't need the full race board. Self-heals month winners like /api/race.
// Stars are per language (?lang=it|es), like the race itself.
export async function GET(req: NextRequest) {
  const month = berlinMonth();
  const langParam = req.nextUrl.searchParams.get('lang');
  const lang = isLang(langParam) ? langParam : 'it';

  if (!dbConfigured()) {
    return NextResponse.json({ stars: {}, month });
  }

  try {
    const [state, profileStats] = await Promise.all([getRaceState(lang), getAllRaceStats(lang)]);
    const dailyMaps = Object.fromEntries(
      Object.entries(profileStats).map(([id, stats]) => [id, stats.daily])
    );
    const totals = monthlyTotals(dailyMaps, berlinToday());
    const changed = settleStars(state, totals, month);
    if (changed) await setRaceState(state, lang);
    return NextResponse.json({ stars: state.stars, month });
  } catch {
    return NextResponse.json({ stars: {}, month });
  }
}
