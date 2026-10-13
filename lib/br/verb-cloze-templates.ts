import type { ClozeTemplate } from '../verb-cloze';

// Brazilian Portuguese cloze sentences, 3 per tense (person index into the
// 6-person tenses' `pronouns` — eu, você, ele/ela, nós, vocês, eles/elas — or
// 0-2 for imperativo: você, nós, vocês). Note: "você" conjugates like "ele/ela"
// in every tense in this engine (lib/br/verb-catalog.ts), so person 1 and
// person 2 always share the same answer — templates still name the subject
// explicitly either way, which is natural in spoken BR.
export const BR_CLOZE_TEMPLATES: ClozeTemplate[] = [
  // presente
  { tense: 'presente', person: 0, before: 'Todo dia ', after: ' às sete.' },
  { tense: 'presente', person: 3, before: 'No sábado, a gente ', after: ' até tarde.' },
  { tense: 'presente', person: 5, before: 'Meus amigos ', after: ' sempre juntos.' },
  // pretérito perfeito simples
  { tense: 'preterito_perfeito', person: 0, before: 'Ontem ', after: ' até tarde.' },
  { tense: 'preterito_perfeito', person: 2, before: 'No fim de semana passado, o Pedro ', after: ' com os amigos.' },
  { tense: 'preterito_perfeito', person: 3, before: 'Ontem à noite ', after: ' juntos.' },
  // pretérito imperfeito (eu/ele iguais → sujeito explícito)
  { tense: 'imperfeito', person: 0, before: 'Quando eu era criança, ', after: ' todo dia.' },
  { tense: 'imperfeito', person: 2, before: 'Quando era jovem, meu pai ', after: ' todo fim de semana.' },
  { tense: 'imperfeito', person: 3, before: 'Antigamente, a gente ', after: ' muitas vezes juntos.' },
  // futuro simples
  { tense: 'futuro', person: 0, before: 'Amanhã ', after: ' o dia todo.' },
  { tense: 'futuro', person: 3, before: 'No mês que vem, a gente ', after: ' juntos.' },
  { tense: 'futuro', person: 5, before: 'Em breve, seus amigos ', after: ' aqui.' },
  // imperativo (você, nós, vocês) — note: "você" here is subjunctive-derived (fale!), unlike EP's "tu" (fala!)
  { tense: 'imperativo', person: 0, before: 'Vamos lá, ', after: ' já!' },
  { tense: 'imperativo', person: 1, before: 'Então, ', after: ' juntos!' },
  { tense: 'imperativo', person: 2, before: 'Gente, ', after: ' com calma!' },
  // condicional (eu/ele iguais → sujeito explícito)
  { tense: 'condicional', person: 0, before: 'Com mais tempo, eu ', after: ' com todo gosto.' },
  { tense: 'condicional', person: 2, before: 'No seu lugar, a Ana ', after: ' na certa.' },
  { tense: 'condicional', person: 3, before: 'Sem pressa, a gente ', after: ' com calma.' },
  // conjuntivo presente (eu/ele iguais → sujeito explícito)
  { tense: 'conjuntivo', person: 0, before: 'Minha mãe quer que eu ', after: ' mais.' },
  { tense: 'conjuntivo', person: 2, before: 'Espero que o Pedro ', after: ' bem.' },
  { tense: 'conjuntivo', person: 4, before: 'É importante que vocês ', after: ' hoje.' },
];
