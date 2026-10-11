import type { ClozeTemplate } from './verb-cloze';

// Italian cloze sentences, 3 per tense (person index into the 6-person
// tenses' `pronouns`, or 0-3 for imperativo: tu, Lei, noi, voi).
export const IT_CLOZE_TEMPLATES: ClozeTemplate[] = [
  // presente
  { tense: 'presente', person: 0, before: 'Ogni mattina ', after: ' alle sette.' },
  { tense: 'presente', person: 3, before: 'Il sabato, noi ', after: ' fino a tardi.' },
  { tense: 'presente', person: 5, before: 'I miei amici ', after: ' sempre insieme.' },
  // passato prossimo
  { tense: 'passato_prossimo', person: 0, before: 'Ieri ', after: ' fino a tardi.' },
  { tense: 'passato_prossimo', person: 2, before: 'Il weekend scorso, Marco ', after: ' con gli amici.' },
  { tense: 'passato_prossimo', person: 3, before: 'Ieri sera, noi ', after: ' insieme.' },
  // imperfetto
  { tense: 'imperfetto', person: 0, before: 'Da bambino, ', after: ' sempre volentieri.' },
  { tense: 'imperfetto', person: 2, before: 'Da giovane, mio padre ', after: ' ogni weekend.' },
  { tense: 'imperfetto', person: 3, before: 'Prima, noi ', after: ' spesso insieme.' },
  // futuro semplice
  { tense: 'futuro_semplice', person: 0, before: 'Domani ', after: ' tutto il giorno.' },
  { tense: 'futuro_semplice', person: 3, before: 'Il mese prossimo, noi ', after: ' insieme.' },
  { tense: 'futuro_semplice', person: 5, before: 'Presto, i tuoi amici ', after: ' qui.' },
  // imperativo (tu, Lei, noi, voi)
  { tense: 'imperativo', person: 0, before: 'Dai, ', after: ' subito!' },
  { tense: 'imperativo', person: 2, before: 'Allora, ', after: ' insieme!' },
  { tense: 'imperativo', person: 3, before: 'Ragazzi, ', after: ' con calma!' },
  // condizionale
  { tense: 'condizionale', person: 0, before: 'Con più tempo, ', after: ' molto volentieri.' },
  { tense: 'condizionale', person: 2, before: 'Al posto tuo, lui ', after: ' di sicuro.' },
  { tense: 'condizionale', person: 3, before: 'Senza fretta, noi ', after: ' con calma.' },
  // congiuntivo (io/tu/lui spesso identici → soggetto esplicito)
  { tense: 'congiuntivo', person: 0, before: 'Penso che io ', after: ' presto.' },
  { tense: 'congiuntivo', person: 1, before: 'Spero che tu ', after: ' presto.' },
  { tense: 'congiuntivo', person: 2, before: 'Credo che lui ', after: ' presto.' },
];
