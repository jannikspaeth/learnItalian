import { buildPhrases, type PhrasePack } from '../phrases';
import { IT_PHRASES } from '../phrases/it';

const pack: PhrasePack = { situations: buildPhrases(IT_PHRASES) };
export default pack;
