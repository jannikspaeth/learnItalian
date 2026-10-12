import type { ClozeTemplate } from '../verb-cloze';

// European Portuguese cloze sentences, 3 per tense (person index into the
// 6-person tenses' `pronouns` — eu, tu, ele/ela, nós, vocês, eles/elas — or 0-2
// for imperativo: tu, nós, vocês). EP is a null-subject language, so the subject
// is dropped where the form is unambiguous and spelled out where eu and ele/ela
// share a form (imperfeito, condicional, conjuntivo).
export const PT_CLOZE_TEMPLATES: ClozeTemplate[] = [
  // presente
  { tense: 'presente', person: 0, before: 'Todos os dias ', after: ' às sete.' },
  { tense: 'presente', person: 3, before: 'Ao sábado, nós ', after: ' até tarde.' },
  { tense: 'presente', person: 5, before: 'Os meus amigos ', after: ' sempre juntos.' },
  // pretérito perfeito simples
  { tense: 'preterito_perfeito', person: 0, before: 'Ontem ', after: ' até tarde.' },
  { tense: 'preterito_perfeito', person: 2, before: 'No fim de semana passado, o Pedro ', after: ' com os amigos.' },
  { tense: 'preterito_perfeito', person: 3, before: 'Ontem à noite ', after: ' juntos.' },
  // pretérito imperfeito (eu/ele iguais → sujeito explícito)
  { tense: 'imperfeito', person: 0, before: 'Em criança, eu ', after: ' todos os dias.' },
  { tense: 'imperfeito', person: 2, before: 'Quando era jovem, o meu pai ', after: ' todos os fins de semana.' },
  { tense: 'imperfeito', person: 3, before: 'Antigamente, nós ', after: ' muitas vezes juntos.' },
  // futuro simples
  { tense: 'futuro', person: 0, before: 'Amanhã ', after: ' o dia todo.' },
  { tense: 'futuro', person: 3, before: 'No próximo mês ', after: ' juntos.' },
  { tense: 'futuro', person: 5, before: 'Em breve, os teus amigos ', after: ' aqui.' },
  // imperativo (tu, nós, vocês)
  { tense: 'imperativo', person: 0, before: 'Anda, ', after: ' já!' },
  { tense: 'imperativo', person: 1, before: 'Então, ', after: ' juntos!' },
  { tense: 'imperativo', person: 2, before: 'Meninos, ', after: ' com calma!' },
  // condicional (eu/ele iguais → sujeito explícito)
  { tense: 'condicional', person: 0, before: 'Com mais tempo, eu ', after: ' com muito gosto.' },
  { tense: 'condicional', person: 2, before: 'No teu lugar, a Ana ', after: ' de certeza.' },
  { tense: 'condicional', person: 3, before: 'Sem pressa, nós ', after: ' com calma.' },
  // conjuntivo presente (eu/ele iguais → sujeito explícito)
  { tense: 'conjuntivo', person: 0, before: 'A minha mãe quer que eu ', after: ' mais.' },
  { tense: 'conjuntivo', person: 2, before: 'Espero que o Pedro ', after: ' bem.' },
  { tense: 'conjuntivo', person: 4, before: 'É importante que vocês ', after: ' hoje.' },
];
