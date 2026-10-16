import { buildPhrases, type PhrasePack } from '../phrases';
import { PT_PHRASES } from '../phrases/pt';

const pack: PhrasePack = { situations: buildPhrases(PT_PHRASES) };
export default pack;
