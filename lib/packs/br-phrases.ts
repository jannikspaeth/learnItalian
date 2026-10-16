import { buildPhrases, type PhrasePack } from '../phrases';
import { BR_PHRASES } from '../phrases/br';

const pack: PhrasePack = { situations: buildPhrases(BR_PHRASES) };
export default pack;
