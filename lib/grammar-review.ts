import type { GrammarRecord } from './types';

// Spaced repetition for grammar topics. An attempt with at least 80% right moves the
// topic up a level (it comes back later and later); a weaker one sends it back to
// level 1, due again tomorrow.

export const GRAMMAR_INTERVALS = [0, 1, 3, 7, 14, 30, 60]; // days, index = level
export const GRAMMAR_MAX_LEVEL = GRAMMAR_INTERVALS.length - 1;
export const GRAMMAR_PASS = 0.8;

const DAY = 86400000;

export function nextGrammarReview(
  prevLevel: number | undefined,
  correct: number,
  total: number,
  now: Date = new Date(),
): { level: number; nextReview: string } {
  const passed = total > 0 && correct / total >= GRAMMAR_PASS;
  const level = passed ? Math.min(GRAMMAR_MAX_LEVEL, (prevLevel ?? 0) + 1) : 1;
  return { level, nextReview: new Date(now.getTime() + GRAMMAR_INTERVALS[level] * DAY).toISOString() };
}

// When a topic is due. Records from before grammar review existed have no schedule:
// they come back a day after a weak attempt or a week after a flawless one.
export function grammarDueDate(r: GrammarRecord): number {
  if (r.nextReview) return new Date(r.nextReview).getTime();
  return new Date(r.lastAttempted).getTime() + (r.mastered ? 7 : 1) * DAY;
}

export function isGrammarDue(r: GrammarRecord, now: number = Date.now()): boolean {
  return grammarDueDate(r) <= now;
}

// Due topics, most overdue first.
export function dueGrammar(records: GrammarRecord[], now: number = Date.now()): GrammarRecord[] {
  return records.filter(r => isGrammarDue(r, now)).sort((a, b) => grammarDueDate(a) - grammarDueDate(b));
}
