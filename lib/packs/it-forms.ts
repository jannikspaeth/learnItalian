import { VERB_CATALOG, verbToExercise } from '../verb-catalog';
import { IT_TENSES } from '../tenses';
import type { FormsPack } from '../content';

// Every conjugated form of every catalog verb (for tap-to-translate in /lesen).
const ALL = IT_TENSES.map(t => t.id);
const pack: FormsPack = {
  verbs: VERB_CATALOG.map(v => ({
    infinitive: v.infinitive,
    de: v.de,
    forms: verbToExercise(v, ALL).sections.flatMap(s => s.answers),
  })),
};
export default pack;
