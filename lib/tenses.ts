import type { Lang } from './lang';

// Drillable tenses per language, in teaching order, with the CEFR level each
// belongs to. Kept apart from the (large) verb catalogs so pages can validate the
// per-device tense choice without loading a catalog.

export type ItTenseId =
  | 'presente'
  | 'passato_prossimo'
  | 'imperfetto'
  | 'futuro_semplice'
  | 'imperativo'
  | 'condizionale'
  | 'congiuntivo';

export type FrTenseId =
  | 'present'
  | 'passe_compose'
  | 'imparfait'
  | 'futur'
  | 'imperatif'
  | 'conditionnel'
  | 'subjonctif';

export type EsTenseId =
  | 'presente'
  | 'perfecto'
  | 'indefinido'
  | 'imperfecto'
  | 'futuro'
  | 'imperativo'
  | 'condicional'
  | 'subjuntivo';

export interface TenseInfo<Id extends string = string> {
  id: Id;
  label: string;
  level: 'A1' | 'A2' | 'B1';
}

export const IT_TENSES: TenseInfo<ItTenseId>[] = [
  { id: 'presente', label: 'Presente', level: 'A1' },
  { id: 'passato_prossimo', label: 'Passato prossimo', level: 'A2' },
  { id: 'imperfetto', label: 'Imperfetto', level: 'A2' },
  { id: 'futuro_semplice', label: 'Futuro semplice', level: 'A2' },
  { id: 'imperativo', label: 'Imperativo', level: 'A2' },
  { id: 'condizionale', label: 'Condizionale', level: 'B1' },
  { id: 'congiuntivo', label: 'Congiuntivo presente', level: 'B1' },
];

export const ES_TENSES: TenseInfo<EsTenseId>[] = [
  { id: 'presente', label: 'Presente', level: 'A1' },
  { id: 'perfecto', label: 'Pretérito perfecto', level: 'A2' },
  { id: 'indefinido', label: 'Pretérito indefinido', level: 'A2' },
  { id: 'imperfecto', label: 'Pretérito imperfecto', level: 'A2' },
  { id: 'futuro', label: 'Futuro simple', level: 'A2' },
  { id: 'imperativo', label: 'Imperativo', level: 'A2' },
  { id: 'condicional', label: 'Condicional', level: 'B1' },
  { id: 'subjuntivo', label: 'Subjuntivo presente', level: 'B1' },
];

export const FR_TENSES: TenseInfo<FrTenseId>[] = [
  { id: 'present', label: 'Présent', level: 'A1' },
  { id: 'passe_compose', label: 'Passé composé', level: 'A2' },
  { id: 'imparfait', label: 'Imparfait', level: 'A2' },
  { id: 'futur', label: 'Futur simple', level: 'A2' },
  { id: 'imperatif', label: 'Impératif', level: 'A2' },
  { id: 'conditionnel', label: 'Conditionnel', level: 'B1' },
  { id: 'subjonctif', label: 'Subjonctif présent', level: 'B1' },
];

export const TENSES_BY_LANG: Record<Lang, TenseInfo[]> = { it: IT_TENSES, es: ES_TENSES, fr: FR_TENSES };

// Default tenses for a learner who hasn't picked any: beginners start with the
// present only, everyone else with the core tenses of their language.
export function defaultTenses(lang: Lang, beginner: boolean): string[] {
  if (lang === 'fr') return beginner ? ['present'] : ['present', 'passe_compose', 'imparfait'];
  if (beginner) return ['presente'];
  return lang === 'it' ? ['presente', 'passato_prossimo', 'imperfetto'] : ['presente', 'indefinido', 'futuro'];
}

// Per-device tense choice for the verb drills, stored as "presente,imperfetto"
// ('' = the default for my level). Read by /konjugation and the daily round.
export const TENSE_STORAGE_KEY: Record<Lang, string> = {
  it: 'italienisch_verb_tenses',
  es: 'italienisch_verb_tenses_es',
  fr: 'italienisch_verb_tenses_fr',
};

function makeTenseValidator(lang: Lang) {
  const ids = new Set(TENSES_BY_LANG[lang].map(t => t.id));
  return (v: string): v is string => v === '' || v.split(',').every(t => ids.has(t));
}
export const TENSE_VALIDATORS: Record<Lang, (v: string) => v is string> = {
  it: makeTenseValidator('it'),
  es: makeTenseValidator('es'),
  fr: makeTenseValidator('fr'),
};

// The tenses this device drills (client only).
export function chosenTenses(lang: Lang, beginner: boolean): string[] {
  try {
    const v = localStorage.getItem(TENSE_STORAGE_KEY[lang]);
    if (v && TENSE_VALIDATORS[lang](v)) return v.split(',');
  } catch {}
  return defaultTenses(lang, beginner);
}
