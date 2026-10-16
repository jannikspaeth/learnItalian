import type { PhraseMap } from './index';

// European Portuguese wording for the situations in lib/phrases/canon.ts
// (Brazilian wording lives in lib/phrases/br.ts — the two differ in more than
// spelling here: comboio/trem, pequeno-almoço/café da manhã, casa de banho/banheiro).
export const PT_PHRASES: PhraseMap = {
  // Begrüßung & Abschied
  'greet-hello': ['Olá!', 'Viva!'],
  'greet-morning': ['Bom dia!', 'Bom dia'],
  'greet-evening': ['Boa tarde!', 'Boa noite!'],
  'greet-howareyou': ['Como estás?', 'Como está?', 'Tudo bem?'],
  'greet-fine': ['Bem, obrigado.', 'Bem, obrigada.', 'Estou bem, obrigado.'],
  'greet-name': ['Chamo-me Jannik.', 'O meu nome é Jannik.'],
  'greet-nicetomeet': ['Muito prazer!', 'Prazer!'],
  'greet-wherefrom': ['Sou da Alemanha.', 'Venho da Alemanha.'],
  'greet-bye': ['Adeus!', 'Até à próxima!'],
  'greet-seeyou': ['Até logo!', 'Até breve!'],

  // Höflichkeit & Nachfragen
  'pol-please': ['Por favor.', 'Por favor'],
  'pol-thanks': ['Muito obrigado!', 'Muito obrigada!'],
  'pol-welcome': ['De nada.', 'Não tem de quê.'],
  'pol-sorry': ['Desculpe!', 'Desculpa!', 'Peço desculpa!'],
  'pol-repeat': ['Pode repetir, por favor?', 'Podes repetir, por favor?'],
  'pol-slower': ['Pode falar mais devagar?', 'Podes falar mais devagar?'],
  'pol-notunderstood': ['Não entendi.', 'Não compreendi.'],
  'pol-english': ['Fala inglês?', 'Falas inglês?'],
  'pol-howtosay': ['Como se diz?', 'Como é que se diz?'],
  'pol-help': ['Pode ajudar-me?', 'Podes ajudar-me?', 'Pode-me ajudar?'],

  // Small Talk
  'small-job': ['O que fazes?', 'O que é que fazes?', 'Em que trabalhas?'],
  'small-ilivein': ['Vivo em Stuttgart.', 'Moro em Stuttgart.'],
  'small-stilllearning': ['Ainda estou a aprender.', 'Estou ainda a aprender.'],
  'small-howold': ['Quantos anos tens?', 'Quantos anos tem?'],
  'small-weather': ['Hoje está bom tempo.', 'Hoje faz bom tempo.'],
  'small-firsttime': ['É a primeira vez que venho aqui.', 'É a minha primeira vez aqui.'],
  'small-holiday': ['Estou aqui de férias.', 'Vim de férias.'],
  'small-ilikeithere': ['Gosto muito daqui.', 'Gosto muito de estar aqui.'],
  'small-andyou': ['E tu?', 'E você?'],
  'small-soon': ['Vemo-nos em breve!', 'Até breve!'],

  // Restaurant & Café
  'rest-table': ['Uma mesa para dois, por favor.', 'Mesa para dois, por favor.'],
  'rest-menu': ['A ementa, por favor.', 'O menu, por favor.'],
  'rest-iwouldlike': ['Queria um café.', 'Gostaria de um café.'],
  'rest-water': ['Um copo de água, por favor.', 'Uma água, por favor.'],
  'rest-recommend': ['O que recomenda?', 'O que é que recomenda?'],
  'rest-vegetarian': ['Sou vegetariano.', 'Sou vegetariana.'],
  'rest-delicious': ['Estava muito bom!', 'Estava delicioso!'],
  'rest-bill': ['A conta, por favor.', 'Traz-nos a conta, por favor.'],
  'rest-card': ['Posso pagar com cartão?', 'Pode-se pagar com cartão?'],
  'rest-toilet': ['Onde é a casa de banho?', 'Onde fica a casa de banho?'],

  // Einkaufen & Bezahlen
  'shop-howmuch': ['Quanto custa?', 'Quanto é?'],
  'shop-looking': ['Procuro um presente.', 'Estou à procura de um presente.'],
  'shop-justlooking': ['Estou só a ver.', 'Estou apenas a ver.'],
  'shop-tryon': ['Posso experimentar?', 'Posso provar?'],
  'shop-toobig': ['É demasiado grande para mim.', 'Fica-me grande.'],
  'shop-takeit': ['Levo este.', 'Fico com este.'],
  'shop-cheaper': ['Tem algo mais barato?', 'Têm algo mais barato?'],
  'shop-bag': ['Um saco, por favor.', 'Pode dar-me um saco?'],
  'shop-receipt': ['O recibo, por favor.', 'A factura, por favor.'],
  'shop-open': ['Quando estão abertos?', 'A que horas abrem?'],

  // Unterwegs & Verkehr
  'way-station': ['Onde é a estação?', 'Onde fica a estação?'],
  'way-ticket': ['Um bilhete, por favor.', 'Queria um bilhete, por favor.'],
  'way-platform': ['De que linha parte o comboio?', 'Em que linha parte o comboio?'],
  'way-howlong': ['Quanto tempo dura a viagem?', 'Quanto dura a viagem?'],
  'way-nextbus': ['Quando chega o próximo autocarro?', 'A que horas chega o próximo autocarro?'],
  'way-righttrain': ['É este o comboio certo?', 'Este é o comboio certo?'],
  'way-getoff': ['Onde tenho de sair?', 'Onde é que tenho de sair?'],
  'way-tocentre': ['Como chego ao centro?', 'Como se chega ao centro?'],
  'way-lost': ['Perdi-me.', 'Estou perdido.', 'Estou perdida.'],
  'way-taxi': ['Pode chamar-me um táxi?', 'Pode chamar um táxi, por favor?'],

  // Hotel & Unterkunft
  'hotel-reservation': ['Tenho uma reserva.', 'Temos uma reserva.'],
  'hotel-free': ['Têm um quarto livre?', 'Tem um quarto livre?'],
  'hotel-twonights': ['Para duas noites, por favor.', 'Duas noites, por favor.'],
  'hotel-breakfast': ['O pequeno-almoço está incluído?', 'Está incluído o pequeno-almoço?'],
  'hotel-wifi': ['Qual é a palavra-passe do wi-fi?', 'Qual é a senha do wi-fi?'],
  'hotel-checkout': ['A que horas temos de deixar o quarto?', 'Quando temos de deixar o quarto?'],
  'hotel-key': ['A chave não funciona.', 'O cartão não funciona.'],
  'hotel-luggage': ['Podemos deixar a bagagem aqui?', 'Podemos deixar as malas aqui?'],
  'hotel-quieter': ['Tem um quarto mais tranquilo?', 'Têm um quarto mais tranquilo?'],
  'hotel-towels': ['Podemos ter toalhas limpas?', 'Pode trazer-nos toalhas limpas?'],

  // Arzt & Apotheke
  'med-notwell': ['Não me sinto bem.', 'Não estou bem.'],
  'med-headache': ['Dói-me a cabeça.', 'Tenho dores de cabeça.'],
  'med-fever': ['Tenho febre.', 'Estou com febre.'],
  'med-doctor': ['Preciso de um médico.', 'Necessito de um médico.'],
  'med-pharmacy': ['Onde é a farmácia mais próxima?', 'Onde fica a farmácia mais próxima?'],
  'med-something': ['Tem algo para as dores de cabeça?', 'Tem alguma coisa para as dores de cabeça?'],
  'med-allergic': ['Sou alérgico à penicilina.', 'Sou alérgica à penicilina.'],
  'med-insurance': ['Aqui está o meu cartão de saúde.', 'Este é o meu cartão de saúde.'],
  'med-appointment': ['Queria marcar uma consulta.', 'Gostaria de marcar uma consulta.'],
  'med-better': ['Já estou melhor.', 'Já me sinto melhor.'],

  // Telefon & Termine
  'phone-hello': ['Estou, é o Jannik.', 'Estou sim, é o Jannik.'],
  'phone-speakto': ['Posso falar com o médico?', 'Podia falar com o médico?'],
  'phone-wrongnumber': ['Creio que liguei para o número errado.', 'Liguei para o número errado.'],
  'phone-callback': ['Ligo mais tarde.', 'Volto a ligar mais tarde.'],
  'phone-makeappointment': ['Queria marcar uma hora.', 'Gostaria de marcar uma hora.'],
  'phone-whattime': ['A que horas lhe dá jeito?', 'A que horas é melhor para si?'],
  'phone-tomorrowten': ['Amanhã às dez está bem.', 'Amanhã às dez dá-me jeito.'],
  'phone-badline': ['Estou a ouvi-lo mal.', 'Não o ouço bem.'],
  'phone-moment': ['Um momento, por favor.', 'Só um momento, por favor.'],
  'phone-cancel': ['Tenho de cancelar a marcação.', 'Tenho de desmarcar a consulta.'],

  // Probleme & Notfall
  'emg-help': ['Socorro!', 'Ajuda!'],
  'emg-police': ['Chame a polícia!', 'Chamem a polícia!'],
  'emg-accident': ['Houve um acidente.', 'Aconteceu um acidente.'],
  'emg-stolen': ['Roubaram-me a mala.', 'A minha mala foi roubada.'],
  'emg-passport': ['Perdi o passaporte.', 'Perdi o meu passaporte.'],
  'emg-ambulance': ['Precisamos de uma ambulância.', 'É preciso uma ambulância.'],
  'emg-fire': ['Há um incêndio!', 'Fogo!'],
  'emg-notmyfault': ['Não foi culpa minha.', 'A culpa não foi minha.'],
  'emg-embassy': ['Tenho de ligar para a embaixada.', 'Preciso de ligar para a embaixada.'],
  'emg-car': ['O meu carro está avariado.', 'O meu carro avariou.'],
};
