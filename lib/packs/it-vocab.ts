import { VOCAB_CATALOG } from '../vocab-catalog';
import { STARTER_VOCAB } from '../vocab-starter';
import type { VocabPack } from '../content';

const pack: VocabPack = {
  catalog: VOCAB_CATALOG.map(w => ({ de: w.de, target: w.it, topic: w.topic })),
  starter: STARTER_VOCAB.map(w => ({ de: w.de, target: w.it, topic: w.topic })),
  hasTopics: true,
};
export default pack;
