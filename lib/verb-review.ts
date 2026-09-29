import type { ConjugationRecord } from './types';

// Spaced repetition for verbs (whole verb, all practised tenses at once). A
// flawless attempt moves the verb up a level; any mistake sends it back to level 1,
// due again tomorrow — so verbs you get wrong come back often, mastered ones rarely.

export const VERB_INTERVALS = [0, 1, 3, 7, 14, 30, 60]; // days, index = level
export const VERB_MAX_LEVEL = VERB_INTERVALS.length - 1;

const DAY = 86400000;

export function nextVerbReview(
  prevLevel: number | undefined,
  flawless: boolean,
  now: Date = new Date(),
): { level: number; nextReview: string } {
  const level = flawless ? Math.min(VERB_MAX_LEVEL, (prevLevel ?? 0) + 1) : 1;
  return { level, nextReview: new Date(now.getTime() + VERB_INTERVALS[level] * DAY).toISOString() };
}

// When a verb is due. Records from before verb review existed have no schedule:
// they come back a day after a failed attempt or a week after a flawless one.
export function verbDueDate(r: ConjugationRecord): number {
  if (r.nextReview) return new Date(r.nextReview).getTime();
  return new Date(r.lastAttempted).getTime() + (r.mastered ? 7 : 1) * DAY;
}

export function isVerbDue(r: ConjugationRecord, now: number = Date.now()): boolean {
  return verbDueDate(r) <= now;
}

// Due verbs, most overdue first.
export function dueVerbs(records: ConjugationRecord[], now: number = Date.now()): ConjugationRecord[] {
  return records.filter(r => isVerbDue(r, now)).sort((a, b) => verbDueDate(a) - verbDueDate(b));
}
