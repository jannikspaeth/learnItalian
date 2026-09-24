// Shared word key: lowercase, leading article and parentheticals stripped, so
// "il libro", "libro" and "libro (m)" are the same word. Used for dedupe, the
// vocab DB key (norm_word) and the vocab-examples.json keys — keep it in sync with
// the copies in scripts/*.mjs.
//
// Italian elided articles (l', un') attach without a space ("l'acqua"), so they
// get their own branch. German articles are stripped too because the German side
// is the expected answer when quizzing Italian → German.
const ARTICLE_RE =
  /^(?:(?:il|lo|la|i|gli|le|un|uno|una|der|die|das|ein|eine|einen|einem|einer)\s+|(?:l|un)['’]\s*)/i;

export function normWord(s: string): string {
  return s
    .toLowerCase()
    .trim()
    .replace(ARTICLE_RE, '')
    .replace(/\s*\(.*?\)\s*/g, '')
    .trim();
}
