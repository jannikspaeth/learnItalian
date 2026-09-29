'use client';

import { useCallback, useSyncExternalStore } from 'react';

// Language of the app's own interface (buttons, instructions, help) — English or
// German, chosen per device. Learning content is unaffected. Strings are written
// inline in both languages: t('Start learning', 'Lernen starten').

export type UiLang = 'en' | 'de';

const KEY = 'italienisch_ui_lang';
const EVENT = 'italienisch-ui-lang-changed';

function read(): UiLang {
  try {
    return localStorage.getItem(KEY) === 'de' ? 'de' : 'en';
  } catch {
    return 'en';
  }
}

function subscribe(cb: () => void) {
  window.addEventListener(EVENT, cb);
  window.addEventListener('storage', cb);
  return () => {
    window.removeEventListener(EVENT, cb);
    window.removeEventListener('storage', cb);
  };
}

export function useUiLang(): [UiLang, (l: UiLang) => void] {
  const lang = useSyncExternalStore(subscribe, read, () => 'en' as UiLang);
  const set = useCallback((l: UiLang) => {
    try { localStorage.setItem(KEY, l); } catch {}
    window.dispatchEvent(new Event(EVENT));
  }, []);
  return [lang, set];
}

export type T = (en: string, de: string) => string;

// t('English', 'Deutsch') → the text in the chosen interface language.
export function useT(): T {
  const [lang] = useUiLang();
  return useCallback((en: string, de: string) => (lang === 'de' ? de : en), [lang]);
}

// Plural helper: n + singular/plural in both languages.
export function plural(t: T, n: number, en: [string, string], de: [string, string]): string {
  return t(`${n} ${n === 1 ? en[0] : en[1]}`, `${n} ${n === 1 ? de[0] : de[1]}`);
}

// Tense names come from the catalogs as "Present (Presente)" — translate the
// English part for the German interface (also inside stored hints like
// "andare · Present (Presente)").
const TENSE_DE: [RegExp, string][] = [
  [/\bPresent\b/g, 'Präsens'],
  [/\bPerfect\b/g, 'Perfekt'],
  [/\bPreterite\b/g, 'Präteritum'],
  [/\bImperfect\b/g, 'Imperfekt'],
  [/\bFuture\b/g, 'Futur'],
  [/\bImperative\b/g, 'Imperativ'],
  [/\bConditional\b/g, 'Konditional'],
  [/\bSubjunctive\b/g, 'Konjunktiv'],
];

export function tenseName(name: string, lang: UiLang): string {
  if (lang !== 'de') return name;
  return TENSE_DE.reduce((s, [re, de]) => s.replace(re, de), name);
}
