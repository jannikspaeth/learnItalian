import type { Lang } from './lang';

// Shared word key: lowercase, leading article and parentheticals stripped, so
// "il libro", "libro" and "libro (m)" are the same word. Used for dedupe, the
// vocab DB key (norm_word) and the vocab-examples*.json keys — keep it in sync with
// the copies in scripts/*.mjs.
//
// Elided articles (Italian l', un'; French l') attach without a space ("l'acqua",
// "l'eau"), so they get their own branch. German articles are stripped too because the German side
// is the expected answer when quizzing target → German.
const ARTICLE_RE: Record<Lang, RegExp> = {
  it: /^(?:(?:il|lo|la|i|gli|le|un|uno|una|der|die|das|ein|eine|einen|einem|einer)\s+|(?:l|un)['’]\s*)/i,
  es: /^(?:el|la|los|las|un|una|unos|unas|der|die|das|ein|eine|einen|einem|einer)\s+/i,
  fr: /^(?:(?:le|la|les|un|une|des|der|die|das|ein|eine|einen|einem|einer)\s+|l['’]\s*)/i,
};

export function normWord(s: string, lang: Lang = 'it'): string {
  return s
    .toLowerCase()
    .trim()
    .replace(ARTICLE_RE[lang], '')
    .replace(/\s*\(.*?\)\s*/g, '')
    .trim();
}
