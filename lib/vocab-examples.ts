// Static example sentences + present-tense conjugations for catalog words, keyed by
// the normalized Italian word (same key as normWord in lib/norm.ts). Shipped as a
// static file in /public, fetched once and memoized so it stays out of the JS bundle.
// A word missing here simply shows no example/table — callers must handle undefined.

export interface VocabExample {
  it: string;            // short, natural Italian sentence using the word
  de: string;            // German translation of that sentence
  conj?: string[];       // 6 present-tense forms (verbs only): io, tu, lui/lei, noi, voi, loro
}

let cache: Map<string, VocabExample> | null = null;
let inflight: Promise<Map<string, VocabExample>> | null = null;

export async function loadExamples(): Promise<Map<string, VocabExample>> {
  if (cache) return cache;
  if (inflight) return inflight;
  inflight = fetch('/vocab-examples.json')
    .then(r => (r.ok ? r.json() : {}))
    .then((obj: Record<string, VocabExample>) => {
      cache = new Map(Object.entries(obj));
      return cache;
    })
    .catch(() => {
      cache = new Map();
      return cache;
    });
  return inflight;
}
