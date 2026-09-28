import type { Lang } from './lang';

// Static example sentences + present-tense conjugations for catalog words, keyed by
// the normalized target-language word (normWord in lib/norm.ts, same language).
// Shipped as static files in /public (one per language), fetched once and memoized
// so they stay out of the JS bundle. A word missing here simply shows no
// example/table — callers must handle undefined.

export interface VocabExample {
  text: string;          // short, natural sentence in the target language using the word
  de: string;            // German translation of that sentence
  conj?: string[];       // 6 present-tense forms (verbs only)
}

// The files name the sentence field after the language ("it" / "es" / "fr").
type RawExample = { de: string; conj?: string[] } & Partial<Record<Lang, string>>;

const FILES: Record<Lang, string> = {
  it: '/vocab-examples.json',
  es: '/vocab-examples-es.json',
  fr: '/vocab-examples-fr.json',
};

const cache = new Map<Lang, Promise<Map<string, VocabExample>>>();

export function loadExamples(lang: Lang): Promise<Map<string, VocabExample>> {
  let p = cache.get(lang);
  if (!p) {
    p = fetch(FILES[lang])
      .then(r => (r.ok ? r.json() : {}))
      .then((obj: Record<string, RawExample>) =>
        new Map(
          Object.entries(obj).map(([k, v]) => [k, { text: v[lang] ?? '', de: v.de, conj: v.conj }])
        )
      )
      .catch(() => new Map<string, VocabExample>());
    cache.set(lang, p);
  }
  return p;
}
