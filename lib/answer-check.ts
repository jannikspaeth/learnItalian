import type { Lang } from './lang';
import { normWord } from './norm';

// Answer checking shared by the flashcards, the daily round and mistake training.

// ─── Vocabulary (typed word, either direction) ───────────────────────────────────

// Grading only: catalog phrases often include .?! … — ignore them when comparing.
function answerNorm(s: string, lang: Lang): string {
  return normWord(s, lang)
    .replace(/[^\p{L}\p{N}\s-]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();
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
  const u = answerNorm(user, lang);
  if (u.length === 0) return { correct: false };

  const variants = splitVariants(correct);

  // Exact match against any variant (articles/parentheticals already stripped by norm)
  for (const variant of variants) {
    const c = answerNorm(variant, lang);
    if (c.length === 0) continue;
    if (u === c) return { correct: true };
  }

  // Tolerant exact match: accent-stripped (ä→a) or German-folded (ä→ae, ß→ss)
  const su = stripAccents(u);
  const fu = germanFold(u);
  for (const variant of variants) {
    const c = answerNorm(variant, lang);
    if (c.length === 0) continue;
    if (stripAccents(c) === su || germanFold(c) === fu) {
      return { correct: true, accentHint: variant };
    }
  }

  return { correct: false };
}

// ─── Grammar cloze (one blank) ────────────────────────────────────────────────────

// Lenient compare: case, spacing, apostrophe style (’ ´ `) and accents don't
// matter, so "l’" matches "l'" and "e" is accepted for "è" (the correct form is
// always shown after checking).
export function foldCloze(s: string): string {
  return stripAccents(
    s
      .trim()
      .toLowerCase()
      .replace(/[’´`]/g, "'")
      .replace(/\s+/g, ' '),
  );
}

export function checkClozeAnswer(value: string, answer: string, alternatives: string[] = []): boolean {
  const v = foldCloze(value);
  if (!v) return false;
  return [answer, ...alternatives].some(a => foldCloze(a) === v);
}
