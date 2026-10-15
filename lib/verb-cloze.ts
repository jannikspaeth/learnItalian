import type { ConjugationExercise } from './types';
import type { Lang } from './lang';
import { IT_CLOZE_TEMPLATES } from './verb-cloze-templates';
import { ES_CLOZE_TEMPLATES } from './es/verb-cloze-templates';
import { FR_CLOZE_TEMPLATES } from './fr/verb-cloze-templates';
import { PT_CLOZE_TEMPLATES } from './pt/verb-cloze-templates';
import { BR_CLOZE_TEMPLATES } from './br/verb-cloze-templates';

// A fill-in-the-blank sentence for one specific (tense, person) of ANY verb —
// e.g. "Ieri io ___ fino a tardi." (passato prossimo, io). `person` indexes the
// section's `pronouns`/`answers` arrays (0-5 for the six-person tenses, a
// shorter range for imperativo). Each tense has a dozen of them, covering every
// person, and `before` names the subject so only one form fits the gap; the
// imperative uses a vocative instead ("Ragazzi, ___ con calma!").
export interface ClozeTemplate {
  tense: string;
  person: number;
  before: string; // ends with a space (or is empty)
  after: string; // starts with a space or punctuation
}

export const CLOZE_TEMPLATES_BY_LANG: Record<Lang, ClozeTemplate[]> = {
  it: IT_CLOZE_TEMPLATES,
  es: ES_CLOZE_TEMPLATES,
  fr: FR_CLOZE_TEMPLATES,
  pt: PT_CLOZE_TEMPLATES,
  br: BR_CLOZE_TEMPLATES,
};

const key = (t: ClozeTemplate) => `${t.tense}|${t.person}|${t.before}`;

// The sentences shown lately (this tab, oldest first). Picking walks through a
// tense's whole set before any sentence can come round again, so a round never
// repeats itself and two rounds in a row look different.
const recent: string[] = [];
const RECENT_MAX = 150;

function markUsed(t: ClozeTemplate) {
  recent.push(key(t));
  if (recent.length > RECENT_MAX) recent.splice(0, recent.length - RECENT_MAX);
}

// The sentences of this tense that haven't been shown lately. Once they have
// all been used, forget everything but the last two, so the cycle starts over
// without repeating what just came up.
function freshPool(pool: ClozeTemplate[]): ClozeTemplate[] {
  const unseen = pool.filter(t => !recent.includes(key(t)));
  if (unseen.length) return unseen;

  const keys = new Set(pool.map(key));
  // Only one sentence to choose from: it has to come again.
  const keep = pool.length < 2 ? [] : recent.filter(k => keys.has(k)).slice(-Math.min(2, pool.length - 1));
  for (let i = recent.length - 1; i >= 0; i--) {
    if (keys.has(recent[i]) && !keep.includes(recent[i])) recent.splice(i, 1);
  }
  return pool.filter(t => !keep.includes(key(t)));
}

// One sentence for this tense: a person the learner just got wrong if that was
// asked for (`person`), else any — always one that hasn't come up lately.
export function pickClozeTemplate(
  templates: ClozeTemplate[],
  tense: string,
  person?: number,
): ClozeTemplate | undefined {
  const matches = templates.filter(t => t.tense === tense);
  if (!matches.length) return undefined;

  const wanted = person === undefined ? [] : matches.filter(t => t.person === person);
  const pool = freshPool(wanted.length ? wanted : matches);
  const picked = pool[Math.floor(Math.random() * pool.length)];
  markUsed(picked);
  return picked;
}

// French "je" swallows its vowel before one: the subject sits in the template
// and the form in the answer, so the elision only shows up once the sentence is
// put together ("je " + "ai dormi" → "j'ai dormi").
export function clozeLead(before: string, answer: string, lang: Lang): string {
  if (lang !== 'fr') return before;
  const form = answer.split(' / ')[0].trim();
  if (/(^|\s)[Jj]e $/.test(before) && /^[aeiouhéèêàâîôûy]/i.test(form)) {
    return before.replace(/([Jj])e $/, "$1'");
  }
  return before;
}

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
  let missed = false;
  for (const s of shuffleCopy(ex.sections)) {
    const miss = missedPronoun?.(s.tense);
    const at = miss ? s.pronouns.indexOf(miss) : -1;
    if (at >= 0) { section = s; pi = at; missed = true; break; }
  }

  // A missed pronoun keeps its person if the tense has a sentence for it.
  let template = (forceCloze || Math.random() < clozeChance)
    ? pickClozeTemplate(templates, section.tense, missed ? pi : undefined)
    : undefined;
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
