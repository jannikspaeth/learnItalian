import { VOCAB_CATALOG } from '../es/vocab-catalog';
import { STARTER_VOCAB } from '../es/vocab-starter';
import type { VocabPack } from '../content';

// The Spanish catalog has no topics (yet).
const pack: VocabPack = {
  catalog: VOCAB_CATALOG.map(w => ({ de: w.de, target: w.es })),
  starter: STARTER_VOCAB.map(w => ({ de: w.de, target: w.es })),
  hasTopics: false,
};
export default pack;
