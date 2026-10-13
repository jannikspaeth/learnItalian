import { ConjugationExercise } from '../types';
import { PT_TENSES, PtTenseId } from '../tenses';
import { VERB_CATALOG as PT_VERB_CATALOG, CatalogVerb as PtCatalogVerb } from '../pt/verb-catalog';

// ─── Brazilian Portuguese verb catalog ───────────────────────────────────────────
// Reuses the European Portuguese rule engine (lib/pt/verb-catalog.ts) rather than
// re-deriving every form: the eu/ele-ela/nós/vocês/eles-elas forms are identical
// between the two variants — the only real difference is the 2nd person. European
// Portuguese addresses "tu" with its own distinct form (falas); Brazilian
// Portuguese addresses "você", which conjugates like a 3rd person throughout
// (fala, not falas) — including, distinctively, in the affirmative imperative:
// BR's "você" command is subjunctive-derived (fale!, coma!) the same way Italian
// "Lei" or Spanish "usted" are, unlike EP's "tu" (which oddly keeps an old
// indicative-based imperative: fala!, come!). So BR's imperativo isn't a remap of
// PT's imperativo — it's freshly built from the (remapped) conjuntivo six-tuple.

type Six = [string, string, string, string, string, string];
type Three = [string, string, string];

export interface CatalogVerb {
  infinitive: string;
  de: string;
  presente: Six;
  preterito_perfeito: Six;
  imperfeito: Six;
  futuro: Six;
  condicional: Six;
  conjuntivo: Six;
  imperativo?: Three; // você, nós, vocês — absent for modal verbs without a natural command form
  notes?: string;
}

export const PRONOUNS = ['eu', 'você', 'ele / ela', 'nós', 'vocês', 'eles / elas'] as const;
const CONJ_PRONOUNS = ['que eu', 'que você', 'que ele / ela', 'que nós', 'que vocês', 'que eles / elas'];
const IMPV_PRONOUNS = ['(você)', '(nós)', '(vocês)'];

export type TenseId = PtTenseId;
export const TENSES = PT_TENSES;
export const TENSE_IDS = new Set<string>(TENSES.map(t => t.id));

// "você" takes the ele/ela (3rd person) form everywhere.
function remap(six: Six): Six {
  return [six[0], six[2], six[2], six[3], six[4], six[5]];
}

function toBr(v: PtCatalogVerb): CatalogVerb {
  const conjuntivo = remap(v.conjuntivo);
  return {
    infinitive: v.infinitive,
    de: v.de,
    presente: remap(v.presente),
    preterito_perfeito: remap(v.preterito_perfeito),
    imperfeito: remap(v.imperfeito),
    futuro: remap(v.futuro),
    condicional: remap(v.condicional),
    conjuntivo,
    imperativo: v.imperativo ? [conjuntivo[2], conjuntivo[3], conjuntivo[4]] : undefined,
    notes: v.notes,
  };
}

export const VERB_CATALOG: CatalogVerb[] = PT_VERB_CATALOG.map(toBr);

const TENSE_NAMES: Record<TenseId, string> = {
  presente: 'Present (Presente)',
  preterito_perfeito: 'Perfect (Pretérito perfeito simples)',
  imperfeito: 'Imperfect (Pretérito imperfeito)',
  futuro: 'Future (Futuro simples)',
  imperativo: 'Imperative (Imperativo)',
  condicional: 'Conditional (Condicional)',
  conjuntivo: 'Subjunctive (Conjuntivo presente)',
};

function tenseSection(verb: CatalogVerb, t: TenseId) {
  const six = (answers: Six, notes?: string, pronouns: readonly string[] = PRONOUNS) => ({
    tense: t, tenseName_de: TENSE_NAMES[t], pronouns: [...pronouns], answers: [...answers], notes,
  });
  switch (t) {
    case 'presente': return six(verb.presente, verb.notes);
    case 'preterito_perfeito': return six(verb.preterito_perfeito);
    case 'imperfeito': return six(verb.imperfeito);
    case 'futuro': return six(verb.futuro);
    case 'condicional': return six(verb.condicional);
    case 'conjuntivo': return six(verb.conjuntivo, undefined, CONJ_PRONOUNS);
    case 'imperativo':
      return verb.imperativo
        ? { tense: t, tenseName_de: TENSE_NAMES[t], pronouns: [...IMPV_PRONOUNS], answers: [...verb.imperativo] }
        : null;
  }
}

export function verbToExercise(verb: CatalogVerb, tenses: TenseId[]): ConjugationExercise {
  const wanted = TENSES.map(t => t.id).filter(id => tenses.includes(id));
  let sections = wanted
    .map(t => tenseSection(verb, t))
    .filter((s): s is NonNullable<typeof s> => s !== null);
  if (sections.length === 0) sections = [tenseSection(verb, 'presente')!];
  const names = sections.map(s => TENSES.find(t => t.id === s.tense)!.label).join(', ');
  return {
    type: 'conjugation',
    title: `${verb.infinitive} – Conjugation`,
    verb: verb.infinitive,
    instruction: `Conjugate "${verb.infinitive}" (${verb.de}): ${names}.`,
    sections,
  };
}

export function pickNextVerb(knownVerbs: string[]): CatalogVerb {
  const known = new Set(knownVerbs.map(v => v.toLowerCase()));
  const unseen = VERB_CATALOG.filter(v => !known.has(v.infinitive.toLowerCase()));
  const pool = unseen.length > 0 ? unseen : VERB_CATALOG;
  return pool[Math.floor(Math.random() * Math.min(pool.length, 5))];
}

export function findVerb(infinitive: string): CatalogVerb | null {
  return VERB_CATALOG.find(v => v.infinitive.toLowerCase() === infinitive.toLowerCase()) ?? null;
}
