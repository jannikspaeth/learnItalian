'use client';

import { useEffect, useState } from 'react';
import type { Lang } from './lang';
import type { ReadingText } from './reading/types';

// Per-language learning content, loaded on demand (dynamic import) so each
// learner only downloads the catalogs of the language they practise.

export interface Word {
  de: string;
  target: string; // the word in the language being learned
  topic?: string; // lib/vocab-topics.ts id; absent for languages without topics
}

export interface VocabPack {
  catalog: Word[];  // full catalog, in learning order
  starter: Word[];  // ordered on-ramp for beginners (A1)
  hasTopics: boolean;
}

export interface VerbPack {
  verbs: { infinitive: string; presente: readonly string[] }[];
  pronouns: readonly string[];
}

// Every conjugated form per verb (tap-to-translate while reading).
export interface FormsPack {
  verbs: { infinitive: string; de: string; forms: string[] }[];
}

export interface ReadingPack {
  texts: ReadingText[];
}

const loaders = {
  vocab: {
    it: () => import('./packs/it-vocab').then(m => m.default),
    es: () => import('./packs/es-vocab').then(m => m.default),
    fr: () => import('./packs/fr-vocab').then(m => m.default),
  },
  verbs: {
    it: () => import('./packs/it-verbs').then(m => m.default),
    es: () => import('./packs/es-verbs').then(m => m.default),
    fr: () => import('./packs/fr-verbs').then(m => m.default),
  },
  forms: {
    it: () => import('./packs/it-forms').then(m => m.default),
    es: () => import('./packs/es-forms').then(m => m.default),
    fr: () => import('./packs/fr-forms').then(m => m.default),
  },
  reading: {
    it: () => import('./packs/it-reading').then(m => m.default),
    es: () => import('./packs/es-reading').then(m => m.default),
    fr: () => import('./packs/fr-reading').then(m => m.default),
  },
};

type Kind = keyof typeof loaders;
type PackOf<K extends Kind> = K extends 'vocab'
  ? VocabPack
  : K extends 'verbs'
    ? VerbPack
    : K extends 'forms'
      ? FormsPack
      : ReadingPack;

const cache = new Map<string, unknown>();

export function loadPack<K extends Kind>(kind: K, lang: Lang): Promise<PackOf<K>> {
  const key = `${kind}:${lang}`;
  if (!cache.has(key)) cache.set(key, loaders[kind][lang]());
  return cache.get(key) as Promise<PackOf<K>>;
}

// The pack for `lang`, or null while it loads.
export function usePack<K extends Kind>(kind: K, lang: Lang): PackOf<K> | null {
  const [state, setState] = useState<{ lang: Lang; pack: PackOf<K> } | null>(null);
  useEffect(() => {
    let alive = true;
    loadPack(kind, lang).then(pack => {
      if (alive) setState({ lang, pack });
    });
    return () => {
      alive = false;
    };
  }, [kind, lang]);
  return state?.lang === lang ? state.pack : null;
}

// Present-tense forms of a verb in the pack, if it is one.
export function presentOf(pack: VerbPack | null, word: string): readonly string[] | undefined {
  const w = word.trim().toLowerCase();
  return pack?.verbs.find(v => v.infinitive.toLowerCase() === w)?.presente;
}
