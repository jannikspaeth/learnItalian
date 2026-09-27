import { VERB_CATALOG, PRONOUNS } from '../es/verb-catalog';
import type { VerbPack } from '../content';

const pack: VerbPack = {
  verbs: VERB_CATALOG.map(v => ({ infinitive: v.infinitive, presente: v.presente })),
  pronouns: PRONOUNS,
};
export default pack;
