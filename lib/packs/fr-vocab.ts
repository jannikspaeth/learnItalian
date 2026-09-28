import { VOCAB_CATALOG } from '../fr/vocab-catalog';
import { STARTER_VOCAB } from '../fr/vocab-starter';
import type { VocabPack } from '../content';

const pack: VocabPack = {
  catalog: VOCAB_CATALOG.map(w => ({ de: w.de, target: w.fr, topic: w.topic })),
  starter: STARTER_VOCAB.map(w => ({ de: w.de, target: w.fr, topic: w.topic })),
  hasTopics: true,
};
export default pack;
