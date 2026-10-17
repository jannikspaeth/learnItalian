import type { IconName } from '../icon-names';
import type { PhraseRecord } from '../types';
import { computeNewLevel, isDue, nextReviewDate } from '../srs';
import { SITUATIONS } from './canon';

export { SITUATIONS, PHRASE_COUNT } from './canon';

// A language's wording for the canonical phrase ids. A list means: the first
// entry is the one shown, the others are accepted too when typing.
export type PhraseMap = Record<string, string | string[]>;

export interface Phrase {
  id: string;
  de: string;
  target: string;
  alt: string[];
  note?: string;
  situationId: string;
  situation: [string, string]; // [English, German] label, for the context line
}

export interface Situation {
  id: string;
  icon: IconName;
  label: [string, string];
  phrases: Phrase[];
}

export interface PhrasePack {
  situations: Situation[];
}

// Canonical situations + one language's wording. Ids the language hasn't got are
// skipped rather than shown empty (`missingPhraseIds` catches them in review).
export function buildPhrases(map: PhraseMap): Situation[] {
  return SITUATIONS.map(s => ({
    id: s.id,
    icon: s.icon,
    label: s.label,
    phrases: s.phrases.flatMap(p => {
      const value = map[p.id];
      if (!value) return [];
      const [target, ...alt] = Array.isArray(value) ? value : [value];
      return [{ id: p.id, de: p.de, target, alt, note: p.note, situationId: s.id, situation: s.label }];
    }),
  })).filter(s => s.phrases.length > 0);
}

export function missingPhraseIds(map: PhraseMap): string[] {
  return SITUATIONS.flatMap(s => s.phrases.map(p => p.id)).filter(id => !map[id]);
}

export function allPhrases(situations: Situation[]): Phrase[] {
  return situations.flatMap(s => s.phrases);
}

// ─── Spaced repetition (levels 1–4 learning, 5 = known) ───────────────────────

export const PHRASE_KNOWN_LEVEL = 5;
export const PHRASE_INTERVALS = [0, 1, 3, 7, 21];
export const PHRASE_ROUND_SIZE = 10;

export function phraseIsKnown(rec?: PhraseRecord): boolean {
  return !!rec && rec.level >= PHRASE_KNOWN_LEVEL;
}

export function phraseIsDue(rec?: PhraseRecord): boolean {
  return !rec || (rec.level < PHRASE_KNOWN_LEVEL && isDue(rec.nextReview));
}

// The record after one answer: right moves a phase up (and sets the next date),
// wrong drops a phase and makes it due again.
export function advancePhrase(rec: PhraseRecord | undefined, correct: boolean): PhraseRecord {
  const level = computeNewLevel(rec?.level ?? 1, correct, 'sicher', PHRASE_KNOWN_LEVEL);
  return {
    level,
    nextReview: nextReviewDate(level, correct, 'sicher', {
      knownLevel: PHRASE_KNOWN_LEVEL,
      intervals: PHRASE_INTERVALS,
    }),
    lastReviewed: new Date().toISOString(),
    reviewCount: (rec?.reviewCount ?? 0) + 1,
  };
}

// A round: phrases that are due first (the ones practised longest ago), then
// ones never practised, in the order of the situations. One situation only when
// `situationId` is given.
export function pickPhraseRound(
  situations: Situation[],
  records: Record<string, PhraseRecord>,
  n = PHRASE_ROUND_SIZE,
  situationId?: string,
): Phrase[] {
  const pool = allPhrases(situations).filter(p => !situationId || p.situationId === situationId);
  const due = pool
    .filter(p => records[p.id] && phraseIsDue(records[p.id]))
    .sort((a, b) => (records[a.id].nextReview || '').localeCompare(records[b.id].nextReview || ''));
  const fresh = pool.filter(p => !records[p.id]);
  const known = pool.filter(p => phraseIsKnown(records[p.id]));
  // Nothing due and nothing new left: revise the known ones rather than stop.
  const chosen = [...due, ...fresh].slice(0, n);
  if (chosen.length < n) chosen.push(...shuffle(known).slice(0, n - chosen.length));
  return shuffle(chosen);
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// How far along a situation is, for the overview.
export function situationProgress(
  s: Situation,
  records: Record<string, PhraseRecord>,
): { known: number; started: number; total: number } {
  return {
    known: s.phrases.filter(p => phraseIsKnown(records[p.id])).length,
    started: s.phrases.filter(p => records[p.id]).length,
    total: s.phrases.length,
  };
}
