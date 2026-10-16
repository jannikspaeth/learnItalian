import type { Lang } from './lang';
import { normWord } from './norm';

// ─── Article / gender blitz ───────────────────────────────────────────────────
// Nouns in the catalogs carry their article ("il libro", "la casa", "o carro"),
// so the drill needs no content of its own: strip the article off and ask for it
// back. A fast tapping round — gender is the thing German speakers get wrong
// longest, and it is only ever learned by repetition.
//
// Elided articles (Italian/French l') are left out on purpose: "l'acqua" and
// "l'albero" look the same, so asking for "l'" would teach nothing about gender.

export const ARTICLES: Record<Lang, string[]> = {
  it: ['il', 'lo', 'la', 'i', 'gli', 'le'],
  es: ['el', 'la', 'los', 'las'],
  fr: ['le', 'la', 'les'],
  pt: ['o', 'a', 'os', 'as'],
  br: ['o', 'a', 'os', 'as'],
};

export const ROUND_SIZE = 20;

export interface ArticleItem {
  key: string;       // normWord of the noun (stable id for mistakes)
  noun: string;      // the noun as written, without its article
  article: string;   // the answer
  de: string;        // German meaning, shown small under the noun
  full: string;      // "il libro" — the solution and what gets read aloud
}

// One item from a catalog entry, or null when the word carries no article (verbs,
// adjectives, …) or is too ambiguous to ask (variants with "/", notes in
// brackets, an elided article).
export function articleItem(target: string, de: string, lang: Lang): ArticleItem | null {
  if (target.includes('/') || target.includes('(')) return null;
  const m = target.trim().match(/^(\p{L}+)\s+(\p{L}[\p{L}\s'’-]*)$/u);
  if (!m) return null;
  const [, art, noun] = m;
  if (!ARTICLES[lang].includes(art.toLowerCase())) return null;
  return {
    key: normWord(target, lang),
    noun,
    article: art.toLowerCase(),
    de,
    full: `${art.toLowerCase()} ${noun}`,
  };
}

export function articleItems(words: { de: string; target: string }[], lang: Lang): ArticleItem[] {
  const out: ArticleItem[] = [];
  const seen = new Set<string>();
  for (const w of words) {
    const item = articleItem(w.target, w.de, lang);
    if (!item || seen.has(item.key)) continue;
    seen.add(item.key);
    out.push(item);
  }
  return out;
}

// A round: `n` different nouns, those asked least recently first. `seen` holds the
// keys of the nouns of earlier rounds (this tab), so a session works through the
// pool instead of asking the same twenty words again.
export function pickArticleRound(pool: ArticleItem[], n: number, seen: Set<string>): ArticleItem[] {
  const fresh = pool.filter(i => !seen.has(i.key));
  const from = fresh.length >= n ? fresh : pool;
  if (fresh.length < n) seen.clear();
  const a = [...from];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  const chosen = a.slice(0, n);
  for (const i of chosen) seen.add(i.key);
  return chosen;
}

// How many of each article the pool holds — shown on the start screen so the
// learner can see the drill covers their whole vocabulary.
export function articleCounts(pool: ArticleItem[], lang: Lang): { article: string; n: number }[] {
  return ARTICLES[lang]
    .map(article => ({ article, n: pool.filter(i => i.article === article).length }))
    .filter(c => c.n > 0);
}
