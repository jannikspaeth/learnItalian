import type { ClozeTemplate } from '../verb-cloze';

// French cloze sentences, 3 per tense (person index into the 6-person tenses'
// `pronouns`, or 0-2 for impératif: tu, nous, vous).
export const FR_CLOZE_TEMPLATES: ClozeTemplate[] = [
  // présent
  { tense: 'present', person: 0, before: 'Tous les matins, ', after: ' à sept heures.' },
  { tense: 'present', person: 3, before: 'Le samedi, nous ', after: " jusqu'à tard." },
  { tense: 'present', person: 5, before: 'Mes amis ', after: ' toujours ensemble.' },
  // passé composé
  { tense: 'passe_compose', person: 0, before: 'Hier, ', after: " jusqu'à tard." },
  { tense: 'passe_compose', person: 2, before: 'Le week-end dernier, Marc ', after: ' avec des amis.' },
  { tense: 'passe_compose', person: 3, before: 'Hier soir, nous ', after: ' ensemble.' },
  // imparfait (je/tu identiques → sujet explicite)
  { tense: 'imparfait', person: 0, before: "Quand j'étais petit, je ", after: ' toujours avec plaisir.' },
  { tense: 'imparfait', person: 2, before: 'Avant, mon père ', after: ' chaque week-end.' },
  { tense: 'imparfait', person: 3, before: 'Avant, nous ', after: ' souvent ensemble.' },
  // futur simple
  { tense: 'futur', person: 0, before: 'Demain, ', after: ' toute la journée.' },
  { tense: 'futur', person: 3, before: 'Le mois prochain, nous ', after: ' ensemble.' },
  { tense: 'futur', person: 5, before: 'Bientôt, tes amis ', after: ' ici.' },
  // impératif (tu, nous, vous)
  { tense: 'imperatif', person: 0, before: 'Allez, ', after: ' tout de suite !' },
  { tense: 'imperatif', person: 1, before: 'Bon, ', after: ' ensemble !' },
  { tense: 'imperatif', person: 2, before: 'Les enfants, ', after: ' calmement !' },
  // conditionnel (je/tu identiques → sujet explicite)
  { tense: 'conditionnel', person: 0, before: 'Avec plus de temps, je ', after: ' avec plaisir.' },
  { tense: 'conditionnel', person: 2, before: 'À ta place, il ', after: ' sûrement.' },
  { tense: 'conditionnel', person: 3, before: 'Sans se presser, nous ', after: ' calmement.' },
  // subjonctif présent (je/il identiques → sujet explicite)
  { tense: 'subjonctif', person: 0, before: "J'espère que je ", after: ' bientôt.' },
  { tense: 'subjonctif', person: 1, before: 'Je veux que tu ', after: ' bientôt.' },
  { tense: 'subjonctif', person: 2, before: "Il faut qu'il ", after: ' bientôt.' },
];
