import type { ConjugationExercise } from './types';
import type { Lang } from './lang';
import { IT_CLOZE_TEMPLATES } from './verb-cloze-templates';
import { ES_CLOZE_TEMPLATES } from './es/verb-cloze-templates';
import { FR_CLOZE_TEMPLATES } from './fr/verb-cloze-templates';

// A fill-in-the-blank sentence for one specific (tense, person) of ANY verb —
// e.g. "Ieri ___ fino a tardi." (passato prossimo, io). `person` indexes the
// section's `pronouns`/`answers` arrays (0-5 for the six-person tenses, a
// shorter range for imperativo). The subject is only spelled out in `before`
// when the form alone wouldn't disambiguate it (congiuntivo/subjuntivo/
// subjonctif, and the imperfecto/imparfait/condicional/conditionnel forms that
// share an ending between two persons) — otherwise it's dropped, as is natural.
export interface ClozeTemplate {
  tense: string;
  person: number;
  before: string; // ends with a space (or is empty)
  after: string; // starts with a space or punctuation
}

export function pickClozeTemplate(templates: ClozeTemplate[], tense: string): ClozeTemplate | undefined {
  const matches = templates.filter(t => t.tense === tense);
  return matches.length ? matches[Math.floor(Math.random() * matches.length)] : undefined;
}

export const CLOZE_TEMPLATES_BY_LANG: Record<Lang, ClozeTemplate[]> = {
  it: IT_CLOZE_TEMPLATES,
  es: ES_CLOZE_TEMPLATES,
  fr: FR_CLOZE_TEMPLATES,
};

export interface VerbStep {
  verb: string;
  tense: string;
  tenseLabel: string;
  pronoun: string;
  answer: string;
  // Present ⇒ render as a cloze sentence (tense hidden, infinitive shown as a
  // hint); absent ⇒ the plain "pronoun ___" drill with the tense labelled.
  clozeBefore?: string;
  clozeAfter?: string;
}

function shuffleCopy<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Picks one tense/person to drill from a verb's sections, biased towards a
// pronoun the learner recently got wrong on that tense (`missedPronoun`), and
// — with probability `clozeChance` — wraps it in a cloze sentence instead of
// showing the bare pronoun. `forceCloze` keeps retrying different sections
// until one has a matching template (for a dedicated sentence-drill mode); it
// still falls back to the plain form if none of the verb's tenses have one.
export function pickVerbStep(
  ex: ConjugationExercise,
  templates: ClozeTemplate[],
  opts: { missedPronoun?: (tense: string) => string | undefined; clozeChance?: number; forceCloze?: boolean } = {},
): VerbStep {
  const { missedPronoun, clozeChance = 0.65, forceCloze = false } = opts;
  let section = ex.sections[Math.floor(Math.random() * ex.sections.length)];
  let pi = Math.floor(Math.random() * section.pronouns.length);
  for (const s of shuffleCopy(ex.sections)) {
    const miss = missedPronoun?.(s.tense);
    const at = miss ? s.pronouns.indexOf(miss) : -1;
    if (at >= 0) { section = s; pi = at; break; }
  }

  let template = (forceCloze || Math.random() < clozeChance) ? pickClozeTemplate(templates, section.tense) : undefined;
  if (!template && forceCloze) {
    for (const s of shuffleCopy(ex.sections)) {
      const t = pickClozeTemplate(templates, s.tense);
      if (t) { section = s; template = t; break; }
    }
  }
  if (template) pi = template.person;

  return {
    verb: ex.verb,
    tense: section.tense,
    tenseLabel: section.tenseName_de,
    pronoun: section.pronouns[pi],
    answer: section.answers[pi],
    clozeBefore: template?.before,
    clozeAfter: template?.after,
  };
}
