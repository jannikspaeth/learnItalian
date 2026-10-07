import type { Lang } from './lang';
import { normWord } from './norm';

// Answer checking shared by the flashcards, the daily round and mistake training.

// ─── Vocabulary (typed word, either direction) ───────────────────────────────────

// Every apostrophe-like character a keyboard may produce (' ’ ‘ ´ ` ʼ ′ ‛).
export const APOSTROPHES = /['’‘´`ʼ′‛]/g;

// Grading only: catalog phrases often include .?! … — ignore them when comparing.
// Apostrophes don't count at all: "l'acqua", "l’acqua", "l´ acqua", "lacqua" and
// "acqua" are all the same answer, as are "dell'anno" and "dellanno".
function answerKeys(s: string, lang: Lang): string[] {
  const unified = s.replace(APOSTROPHES, "'").replace(/\s*'\s*/g, "'");
  const clean = (x: string) =>
    x
      .replace(/'/g, '')
      .replace(/[^\p{L}\p{N}\s-]/gu, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  const keys = [clean(normWord(unified, lang)), clean(unified.toLowerCase().replace(/\s*\(.*?\)\s*/g, ''))];
  return [...new Set(keys)].filter(Boolean);
}

export function stripAccents(s: string): string {
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '');
}

// German keyboard substitutes: ä→ae, ö→oe, ü→ue, ß→ss (and accept the reverse).
function germanFold(s: string): string {
  return s
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss');
}

// A translation may list several acceptable answers separated by "/",
// e.g. "leben / wohnen" or "il ragazzo / la ragazza". Any one of them counts.
// Parentheticals are dropped first so a "/" inside them — e.g.
// "sein (Zustand/Ort)" — isn't mistaken for a variant separator.
function splitVariants(s: string): string[] {
  return s
    .replace(/\s*\(.*?\)\s*/g, ' ')
    .split('/')
    .map(v => v.trim())
    .filter(Boolean);
}

export function checkWordAnswer(
  user: string,
  correct: string,
  lang: Lang,
): { correct: boolean; accentHint?: string } {
  const us = answerKeys(user, lang);
  if (us.length === 0) return { correct: false };

  const variants = splitVariants(correct);

  // Exact match against any variant (articles/parentheticals/apostrophes ignored)
  for (const variant of variants) {
    if (answerKeys(variant, lang).some(c => us.includes(c))) return { correct: true };
  }

  // Tolerant exact match: accent-stripped (ä→a) or German-folded (ä→ae, ß→ss)
  const su = us.map(stripAccents);
  const fu = us.map(germanFold);
  for (const variant of variants) {
    for (const c of answerKeys(variant, lang)) {
      if (su.includes(stripAccents(c)) || fu.includes(germanFold(c))) {
        return { correct: true, accentHint: variant };
      }
    }
  }

  return { correct: false };
}

// ─── Grammar cloze (one blank) ────────────────────────────────────────────────────

// Lenient compare: case, spacing, apostrophes (any style, or left out) and accents
// don't matter, so "l’", "l'" and "l" match and "e" is accepted for "è" (the
// correct form is always shown after checking).
export function foldCloze(s: string): string {
  return stripAccents(
    s
      .trim()
      .toLowerCase()
      .replace(APOSTROPHES, '')
      .replace(/\s+/g, ' '),
  );
}

export function checkClozeAnswer(value: string, answer: string, alternatives: string[] = []): boolean {
  const v = foldCloze(value);
  if (!v) return false;
  return [answer, ...alternatives].some(a => foldCloze(a) === v);
}
