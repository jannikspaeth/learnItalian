import type { PhraseMap } from './index';

// Brazilian Portuguese wording for the situations in lib/phrases/canon.ts:
// "você" instead of "tu", gerund (estou aprendendo) instead of "estou a
// aprender", and the Brazilian everyday words (trem, ônibus, banheiro, café da
// manhã, celular).
export const BR_PHRASES: PhraseMap = {
  // Begrüßung & Abschied
  'greet-hello': ['Oi!', 'Olá!'],
  'greet-morning': ['Bom dia!', 'Bom dia'],
  'greet-evening': ['Boa noite!', 'Boa tarde!'],
  'greet-howareyou': ['Tudo bem?', 'Como vai?', 'Como você está?'],
  'greet-fine': ['Tudo bem, obrigado.', 'Tudo bem, obrigada.', 'Bem, obrigado.'],
  'greet-name': ['Meu nome é Jannik.', 'Eu me chamo Jannik.'],
  'greet-nicetomeet': ['Muito prazer!', 'Prazer em conhecer!'],
  'greet-wherefrom': ['Sou da Alemanha.', 'Eu venho da Alemanha.'],
  'greet-bye': ['Tchau!', 'Até mais!', 'Adeus!'],
  'greet-seeyou': ['Até mais tarde!', 'Até logo!'],

  // Höflichkeit & Nachfragen
  'pol-please': ['Por favor.', 'Por favor'],
  'pol-thanks': ['Muito obrigado!', 'Muito obrigada!'],
  'pol-welcome': ['De nada.', 'Imagina!'],
  'pol-sorry': ['Desculpa!', 'Desculpe!', 'Com licença!'],
  'pol-repeat': ['Pode repetir, por favor?', 'Você pode repetir, por favor?'],
  'pol-slower': ['Pode falar mais devagar?', 'Você pode falar mais devagar?'],
  'pol-notunderstood': ['Não entendi.', 'Eu não entendi.'],
  'pol-english': ['Você fala inglês?', 'Fala inglês?'],
  'pol-howtosay': ['Como se diz?', 'Como é que se diz?'],
  'pol-help': ['Você pode me ajudar?', 'Pode me ajudar?'],

  // Small Talk
  'small-job': ['O que você faz?', 'Você trabalha com o quê?'],
  'small-ilivein': ['Moro em Stuttgart.', 'Eu moro em Stuttgart.'],
  'small-stilllearning': ['Ainda estou aprendendo.', 'Eu ainda estou aprendendo.'],
  'small-howold': ['Quantos anos você tem?', 'Quantos anos tem?'],
  'small-weather': ['Hoje o tempo está bom.', 'Hoje está um tempo bom.'],
  'small-firsttime': ['É a primeira vez que venho aqui.', 'É minha primeira vez aqui.'],
  'small-holiday': ['Estou aqui de férias.', 'Vim de férias.'],
  'small-ilikeithere': ['Gosto muito daqui.', 'Estou gostando muito daqui.'],
  'small-andyou': ['E você?', 'E aí, você?'],
  'small-soon': ['A gente se vê em breve!', 'Até breve!'],

  // Restaurant & Café
  'rest-table': ['Uma mesa para dois, por favor.', 'Mesa para dois, por favor.'],
  'rest-menu': ['O menu, por favor.', 'O cardápio, por favor.'],
  'rest-iwouldlike': ['Eu queria um café.', 'Gostaria de um café.'],
  'rest-water': ['Um copo de água, por favor.', 'Uma água, por favor.'],
  'rest-recommend': ['O que você recomenda?', 'O que o senhor recomenda?'],
  'rest-vegetarian': ['Sou vegetariano.', 'Sou vegetariana.'],
  'rest-delicious': ['Estava muito gostoso!', 'Estava delicioso!'],
  'rest-bill': ['A conta, por favor.', 'Pode trazer a conta, por favor?'],
  'rest-card': ['Posso pagar com cartão?', 'Dá para pagar com cartão?'],
  'rest-toilet': ['Onde é o banheiro?', 'Onde fica o banheiro?'],

  // Einkaufen & Bezahlen
  'shop-howmuch': ['Quanto custa?', 'Quanto é?'],
  'shop-looking': ['Estou procurando um presente.', 'Procuro um presente.'],
  'shop-justlooking': ['Só estou olhando.', 'Estou só olhando.'],
  'shop-tryon': ['Posso experimentar?', 'Posso provar?'],
  'shop-toobig': ['É grande demais para mim.', 'Ficou grande em mim.'],
  'shop-takeit': ['Vou levar.', 'Eu levo este.'],
  'shop-cheaper': ['Tem algo mais barato?', 'Você tem algo mais barato?'],
  'shop-bag': ['Uma sacola, por favor.', 'Pode me dar uma sacola?'],
  'shop-receipt': ['A nota fiscal, por favor.', 'O recibo, por favor.'],
  'shop-open': ['Quando vocês abrem?', 'A que horas vocês abrem?'],

  // Unterwegs & Verkehr
  'way-station': ['Onde é a estação?', 'Onde fica a estação?'],
  'way-ticket': ['Uma passagem, por favor.', 'Queria uma passagem, por favor.'],
  'way-platform': ['De que plataforma sai o trem?', 'Em que plataforma sai o trem?'],
  'way-howlong': ['Quanto tempo dura a viagem?', 'Quanto dura a viagem?'],
  'way-nextbus': ['Quando chega o próximo ônibus?', 'A que horas chega o próximo ônibus?'],
  'way-righttrain': ['É esse o trem certo?', 'Esse é o trem certo?'],
  'way-getoff': ['Onde eu tenho que descer?', 'Onde devo descer?'],
  'way-tocentre': ['Como chego ao centro?', 'Como eu faço para chegar ao centro?'],
  'way-lost': ['Eu me perdi.', 'Estou perdido.', 'Estou perdida.'],
  'way-taxi': ['Você pode chamar um táxi para mim?', 'Pode chamar um táxi, por favor?'],

  // Hotel & Unterkunft
  'hotel-reservation': ['Tenho uma reserva.', 'Temos uma reserva.'],
  'hotel-free': ['Vocês têm um quarto livre?', 'Tem um quarto livre?'],
  'hotel-twonights': ['Para duas noites, por favor.', 'Duas noites, por favor.'],
  'hotel-breakfast': ['O café da manhã está incluído?', 'Está incluído o café da manhã?'],
  'hotel-wifi': ['Qual é a senha do wi-fi?', 'Qual a senha do wi-fi?'],
  'hotel-checkout': ['A que horas temos que deixar o quarto?', 'Quando temos que deixar o quarto?'],
  'hotel-key': ['A chave não funciona.', 'O cartão não funciona.'],
  'hotel-luggage': ['Podemos deixar a bagagem aqui?', 'Podemos deixar as malas aqui?'],
  'hotel-quieter': ['Tem um quarto mais tranquilo?', 'Vocês têm um quarto mais silencioso?'],
  'hotel-towels': ['Podemos ter toalhas limpas?', 'Pode trazer toalhas limpas?'],

  // Arzt & Apotheke
  'med-notwell': ['Não estou me sentindo bem.', 'Não me sinto bem.'],
  'med-headache': ['Minha cabeça está doendo.', 'Estou com dor de cabeça.'],
  'med-fever': ['Estou com febre.', 'Tenho febre.'],
  'med-doctor': ['Preciso de um médico.', 'Eu preciso de um médico.'],
  'med-pharmacy': ['Onde é a farmácia mais próxima?', 'Onde fica a farmácia mais perto?'],
  'med-something': ['Tem alguma coisa para dor de cabeça?', 'Você tem algo para dor de cabeça?'],
  'med-allergic': ['Sou alérgico à penicilina.', 'Sou alérgica à penicilina.'],
  'med-insurance': ['Aqui está meu cartão do plano de saúde.', 'Este é meu cartão do plano de saúde.'],
  'med-appointment': ['Eu queria marcar uma consulta.', 'Gostaria de marcar uma consulta.'],
  'med-better': ['Já estou melhor.', 'Já estou me sentindo melhor.'],

  // Telefon & Termine
  'phone-hello': ['Alô, é o Jannik.', 'Oi, aqui é o Jannik.'],
  'phone-speakto': ['Posso falar com o médico?', 'Eu poderia falar com o médico?'],
  'phone-wrongnumber': ['Acho que liguei para o número errado.', 'Liguei para o número errado.'],
  'phone-callback': ['Ligo mais tarde.', 'Eu ligo de novo mais tarde.'],
  'phone-makeappointment': ['Eu queria marcar um horário.', 'Gostaria de marcar um horário.'],
  'phone-whattime': ['Que horário é bom para você?', 'A que horas fica bom para você?'],
  'phone-tomorrowten': ['Amanhã às dez está bom.', 'Amanhã às dez fica bom para mim.'],
  'phone-badline': ['Estou te ouvindo mal.', 'Não estou ouvindo bem.'],
  'phone-moment': ['Um momento, por favor.', 'Só um momento, por favor.'],
  'phone-cancel': ['Preciso cancelar o horário.', 'Preciso desmarcar a consulta.'],

  // Probleme & Notfall
  'emg-help': ['Socorro!', 'Me ajuda!'],
  'emg-police': ['Chame a polícia!', 'Chama a polícia!'],
  'emg-accident': ['Houve um acidente.', 'Aconteceu um acidente.'],
  'emg-stolen': ['Roubaram minha bolsa.', 'Minha bolsa foi roubada.'],
  'emg-passport': ['Perdi meu passaporte.', 'Eu perdi o passaporte.'],
  'emg-ambulance': ['Precisamos de uma ambulância.', 'A gente precisa de uma ambulância.'],
  'emg-fire': ['Tem um incêndio!', 'Fogo!'],
  'emg-notmyfault': ['Não foi minha culpa.', 'A culpa não foi minha.'],
  'emg-embassy': ['Preciso ligar para a embaixada.', 'Eu tenho que ligar para a embaixada.'],
  'emg-car': ['Meu carro quebrou.', 'Meu carro está com problema.'],
};
