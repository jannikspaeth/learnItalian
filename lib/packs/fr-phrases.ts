import { buildPhrases, type PhrasePack } from '../phrases';
import { FR_PHRASES } from '../phrases/fr';

const pack: PhrasePack = { situations: buildPhrases(FR_PHRASES) };
export default pack;
