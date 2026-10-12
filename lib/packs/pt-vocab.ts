import { VOCAB_CATALOG } from '../pt/vocab-catalog';
import { STARTER_VOCAB } from '../pt/vocab-starter';
import type { VocabPack } from '../content';

const pack: VocabPack = {
  catalog: VOCAB_CATALOG.map(w => ({ de: w.de, target: w.pt, topic: w.topic })),
  starter: STARTER_VOCAB.map(w => ({ de: w.de, target: w.pt, topic: w.topic })),
  hasTopics: true,
};
export default pack;
