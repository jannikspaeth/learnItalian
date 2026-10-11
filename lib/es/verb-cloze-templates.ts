import type { ClozeTemplate } from '../verb-cloze';

// Spanish cloze sentences, 3 per tense (person index into the 6-person
// tenses' `pronouns`, or 0-3 for imperativo: tú, usted, nosotros, vosotros).
export const ES_CLOZE_TEMPLATES: ClozeTemplate[] = [
  // presente
  { tense: 'presente', person: 0, before: 'Todos los días ', after: ' a las siete.' },
  { tense: 'presente', person: 3, before: 'Los sábados, nosotros ', after: ' hasta tarde.' },
  { tense: 'presente', person: 5, before: 'Mis amigos ', after: ' siempre juntos.' },
  // pretérito perfecto
  { tense: 'perfecto', person: 0, before: 'Hoy ', after: ' mucho.' },
  { tense: 'perfecto', person: 2, before: 'Esta semana, María ', after: ' con sus amigos.' },
  { tense: 'perfecto', person: 3, before: 'Esta mañana, nosotros ', after: ' juntos.' },
  // pretérito indefinido
  { tense: 'indefinido', person: 0, before: 'Ayer ', after: ' hasta tarde.' },
  { tense: 'indefinido', person: 2, before: 'El fin de semana pasado, Carlos ', after: ' con amigos.' },
  { tense: 'indefinido', person: 3, before: 'Anoche, nosotros ', after: ' juntos.' },
  // pretérito imperfecto (yo/él iguales → sujeto explícito)
  { tense: 'imperfecto', person: 0, before: 'De niño, yo ', after: ' siempre con ganas.' },
  { tense: 'imperfecto', person: 2, before: 'De joven, mi padre ', after: ' cada fin de semana.' },
  { tense: 'imperfecto', person: 3, before: 'Antes, nosotros ', after: ' a menudo juntos.' },
  // futuro simple
  { tense: 'futuro', person: 0, before: 'Mañana ', after: ' todo el día.' },
  { tense: 'futuro', person: 3, before: 'El mes que viene, nosotros ', after: ' juntos.' },
  { tense: 'futuro', person: 5, before: 'Pronto, tus amigos ', after: ' aquí.' },
  // imperativo (tú, usted, nosotros, vosotros)
  { tense: 'imperativo', person: 0, before: '¡Anda, ', after: ' ya!' },
  { tense: 'imperativo', person: 2, before: '¡Venga, ', after: ' juntos!' },
  { tense: 'imperativo', person: 3, before: '¡Chicos, ', after: ' con calma!' },
  // condicional (yo/él iguales → sujeto explícito)
  { tense: 'condicional', person: 0, before: 'Con más tiempo, yo ', after: ' con gusto.' },
  { tense: 'condicional', person: 2, before: 'En tu lugar, él ', after: ' seguro.' },
  { tense: 'condicional', person: 3, before: 'Sin prisa, nosotros ', after: ' con calma.' },
  // subjuntivo presente (yo/él iguales → sujeto explícito)
  { tense: 'subjuntivo', person: 0, before: 'Espero que yo ', after: ' pronto.' },
  { tense: 'subjuntivo', person: 1, before: 'Quiero que tú ', after: ' pronto.' },
  { tense: 'subjuntivo', person: 2, before: 'Ojalá que él ', after: ' pronto.' },
];
