import type { Lang } from './lang';
import type { ConjugationExercise, ConjugationSection } from './types';

// ─── Short form for the compound tenses ───────────────────────────────────────
// Conjugating a compound tense through all six persons is mostly typing: "ho
// capito, hai capito, ha capito …" only ever asks two things — which auxiliary
// the verb takes and what its participle looks like. With the short form
// switched on (/konjugation), the table asks exactly those two.

// The one compound tense each language drills; the others are simple tenses.
export const COMPOUND_TENSE: Partial<Record<Lang, string>> = {
  it: 'passato_prossimo',
  es: 'perfecto',
  fr: 'passe_compose',
};

// Auxiliary forms → the infinitive the learner is asked for.
const AUXILIARIES: Partial<Record<Lang, Record<string, string>>> = {
  it: {
    ho: 'avere', hai: 'avere', ha: 'avere', abbiamo: 'avere', avete: 'avere', hanno: 'avere',
    sono: 'essere', sei: 'essere', è: 'essere', siamo: 'essere', siete: 'essere',
  },
  es: {
    he: 'haber', has: 'haber', ha: 'haber', hemos: 'haber', habéis: 'haber', han: 'haber',
  },
  fr: {
    ai: 'avoir', as: 'avoir', a: 'avoir', avons: 'avoir', avez: 'avoir', ont: 'avoir',
    suis: 'être', es: 'être', est: 'être', sommes: 'être', êtes: 'être', sont: 'être',
  },
};

// Reflexive forms carry their pronoun in front of the auxiliary ("mi sono
// alzato/a", "me suis levé(e)") — it isn't part of either answer.
const CLITICS: Partial<Record<Lang, string[]>> = {
  it: ['mi', 'ti', 'si', 'ci', 'vi'],
  es: ['me', 'te', 'se', 'nos', 'os'],
  fr: ['me', 't’', 'te', 'se', 'nous', 'vous'],
};

export interface VerbParts {
  aux: string;        // the auxiliary's infinitive: avere / essere / haber / avoir / être
  participle: string; // "capito", "andato/a", "allé(e)"
}

// Splits one finished form ("mi sono alzato/a") into the two things worth
// knowing. Returns null when the form doesn't look compound.
export function splitCompound(lang: Lang, form: string): VerbParts | null {
  const auxes = AUXILIARIES[lang];
  if (!auxes) return null;
  const words = form.trim().split(/\s+/);
  if (words[0] && CLITICS[lang]?.includes(words[0].toLowerCase())) words.shift();
  // French glues the elided pronoun to the auxiliary: s'est, t'es, m'a.
  else if (words[0]) words[0] = words[0].replace(/^[mts][''’]/i, '');
  const aux = auxes[(words[0] ?? '').toLowerCase()];
  if (!aux || words.length < 2) return null;
  return { aux, participle: words.slice(1).join(' ') };
}

export function isCompoundTense(lang: Lang, tense: string): boolean {
  return COMPOUND_TENSE[lang] === tense;
}

// The same section with two rows instead of six. Falls back to the original
// section whenever the forms can't be split (an unexpected auxiliary, say), so
// the learner always gets a workable table.
export function shortSection(
  lang: Lang,
  section: ConjugationSection,
  labels: { aux: string; participle: string },
): ConjugationSection {
  if (!isCompoundTense(lang, section.tense)) return section;
  // The 3rd person singular is the plainest form to read the parts off.
  const parts = splitCompound(lang, section.answers[2] ?? '') ?? splitCompound(lang, section.answers[0] ?? '');
  if (!parts) return section;
  return {
    ...section,
    pronouns: [labels.aux, labels.participle],
    answers: [parts.aux, parts.participle],
  };
}

export function shortenExercise(
  lang: Lang,
  exercise: ConjugationExercise,
  labels: { aux: string; participle: string },
): ConjugationExercise {
  return { ...exercise, sections: exercise.sections.map(s => shortSection(lang, s, labels)) };
}

// True when this exercise has a tense the short form would change — the toggle
// hides itself otherwise (Portuguese drills no compound tense at all).
export function hasCompoundTense(lang: Lang, tenses: string[]): boolean {
  const t = COMPOUND_TENSE[lang];
  return !!t && tenses.includes(t);
}
