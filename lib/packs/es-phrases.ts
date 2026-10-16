import { buildPhrases, type PhrasePack } from '../phrases';
import { ES_PHRASES } from '../phrases/es';

const pack: PhrasePack = { situations: buildPhrases(ES_PHRASES) };
export default pack;
