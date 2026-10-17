import type { WritingPack } from './types';

// Brazilian Portuguese writing practice. Where European Portuguese hangs the
// pronoun behind the verb, Brazilian puts it in front (Me chamo Jannik) — that
// contrast runs through the whole set, together with você instead of tu, the
// gerund (estou lendo) and the Brazilian everyday words (trem, ônibus, celular).
export const BR_WRITING: WritingPack = {
  order: [
    { id: 'o-01', de: 'Ich gebe dir das morgen.', answer: 'Eu te dou isso amanhã.', hint: 'Im brasilianischen Portugiesisch steht das Pronomen vor dem Verb: te dou.' },
    { id: 'o-02', de: 'Ich sehe ihn nie.', answer: 'Eu nunca vejo ele.', hint: 'Umgangssprachlich steht im Brasilianischen „ele" als Objekt.' },
    { id: 'o-03', de: 'Ich habe sie gestern gesehen.', answer: 'Eu a vi ontem.', alt: ['Ontem eu a vi.'], hint: 'Das Pronomen steht vor dem Verb – ohne Bindestrich.' },
    { id: 'o-04', de: 'Ich habe nichts gesagt.', answer: 'Eu não disse nada.', hint: 'Doppelte Verneinung: não vor dem Verb, nada danach.' },
    { id: 'o-05', de: 'Wir gehen nie ins Kino.', answer: 'A gente nunca vai ao cinema.', hint: '„a gente" heißt wir und steht in der 3. Person Singular: vai.' },
    { id: 'o-06', de: 'Ein schönes rotes Auto.', answer: 'Um bonito carro vermelho.', hint: 'bonito darf vor das Nomen, Farben stehen dahinter.' },
    { id: 'o-07', de: 'Das ist ein italienischer Freund.', answer: 'Esse é um amigo italiano.', hint: 'Herkunftsadjektive stehen hinter dem Nomen.' },
    { id: 'o-08', de: 'Wann kommt der Zug an?', answer: 'Quando o trem chega?', alt: ['Quando chega o trem?'], hint: 'Im Brasilianischen bleibt das Subjekt gern vor dem Verb.' },
    { id: 'o-09', de: 'Wie viel kostet dieses Buch?', answer: 'Quanto custa esse livro?', hint: 'quanto + Verb + Subjekt.' },
    { id: 'o-10', de: 'Mit wem gehst du ins Kino?', answer: 'Com quem você vai ao cinema?', hint: 'Die Präposition steht vorne: com quem.' },
    { id: 'o-11', de: 'Ich mag diese Schuhe.', answer: 'Eu gosto desses sapatos.', hint: 'gostar braucht immer de – de + esses wird zu desses.' },
    { id: 'o-12', de: 'Meine Schwester mag den Film nicht.', answer: 'Minha irmã não gosta do filme.', hint: 'Im Brasilianischen fällt der Artikel vor dem Possessiv meist weg: minha irmã.' },
    { id: 'o-13', de: 'Ich stehe jeden Tag um sieben auf.', answer: 'Eu me levanto todo dia às sete.', hint: 'Das Reflexivpronomen steht vor dem Verb: me levanto.' },
    { id: 'o-14', de: 'Sie ist gestern nach Rom gefahren.', answer: 'Ontem ela foi a Roma.', alt: ['Ela foi a Roma ontem.'], hint: 'Abgeschlossen: pretérito perfeito foi.' },
    { id: 'o-15', de: 'Ich habe ihm schon geschrieben.', answer: 'Eu já escrevi para ele.', hint: 'Statt lhe sagt man im Brasilianischen meist „para ele".' },
    { id: 'o-16', de: 'Ich habe immer gut gegessen.', answer: 'Eu sempre comi bem.', hint: 'sempre steht vor dem Verb.' },
    { id: 'o-17', de: 'Ich gehe oft dorthin.', answer: 'Eu vou lá muitas vezes.', hint: 'lá ersetzt den Ort und steht hinter dem Verb.' },
    { id: 'o-18', de: 'Die Suppe ist kalt.', answer: 'A sopa está fria.', hint: 'Ein Zustand, der sich ändern kann: estar.' },
    { id: 'o-19', de: 'Dieses Buch ist interessanter als jenes.', answer: 'Esse livro é mais interessante do que aquele.', hint: 'Steigerung mit mais … do que.' },
    { id: 'o-20', de: 'Ich hoffe, dass er morgen kommt.', answer: 'Espero que ele venha amanhã.', hint: 'Nach espero que steht der Conjuntivo: venha.' },
  ],

  transform: [
    { id: 't-01', task: 'Ins pretérito perfeito setzen', source: 'Eu como uma pizza.', answer: 'Eu comi uma pizza.', hint: 'comer → comi.' },
    { id: 't-02', task: 'Ins pretérito perfeito setzen', source: 'Eu vou ao mar.', answer: 'Eu fui ao mar.', hint: 'ir und ser haben dieselbe Form: fui.' },
    { id: 't-03', task: 'Ins imperfeito setzen', source: 'Todo verão eu vou ao mar.', answer: 'Todo verão eu ia ao mar.', hint: 'Gewohnheiten in der Vergangenheit: imperfeito.' },
    { id: 't-04', task: 'Mit ir + Infinitiv in die Zukunft setzen', source: 'Amanhã eu falo com ele.', answer: 'Amanhã eu vou falar com ele.', hint: 'Im Alltag sagt man „vou falar", nicht „falarei".' },
    { id: 't-05', task: 'Frag nach der Uhrzeit', source: 'O Pedro chega às oito.', answer: 'Que horas o Pedro chega?', alt: ['A que horas o Pedro chega?'], hint: 'Im Brasilianischen meist „que horas" ohne a.' },
    { id: 't-06', task: 'Verneine den Satz', source: 'Eu entendi.', answer: 'Eu não entendi.', hint: 'não steht direkt vor dem Verb.' },
    { id: 't-07', task: 'Ersetze das Objekt durch ein Pronomen', source: 'Eu compro o pão.', answer: 'Eu compro ele.', alt: ['Eu o compro.'], hint: 'Umgangssprachlich „ele", schriftlich „o" – beides zählt.' },
    { id: 't-08', task: 'Ersetze das Objekt durch ein Pronomen', source: 'Eu vejo a Maria.', answer: 'Eu a vejo.', alt: ['Eu vejo ela.'], hint: 'a Maria → a, vor dem Verb.' },
    { id: 't-09', task: 'Ersetze das Objekt durch ein Pronomen', source: 'Eu escrevo para meu irmão.', answer: 'Eu escrevo para ele.', hint: 'para meu irmão → para ele.' },
    { id: 't-10', task: 'Ersetze das Objekt durch ein Pronomen', source: 'Eu vi seus amigos.', answer: 'Eu os vi.', alt: ['Eu vi eles.'], hint: 'seus amigos → os, vor dem Verb.' },
    { id: 't-11', task: 'In den Plural setzen', source: 'O menino italiano é simpático.', answer: 'Os meninos italianos são simpáticos.', hint: 'Artikel, Nomen, Adjektiv und Verb gehen alle in den Plural.' },
    { id: 't-12', task: 'In die weibliche Form setzen', source: 'Meu amigo é alemão.', answer: 'Minha amiga é alemã.', hint: 'alemão → alemã.' },
    { id: 't-13', task: 'Höflich formulieren (o senhor)', source: 'Como você está?', answer: 'Como o senhor está?', hint: 'Sehr höflich: o senhor / a senhora.' },
    { id: 't-14', task: 'Höflich formulieren (o senhor)', source: 'Você pode me ajudar?', answer: 'O senhor pode me ajudar?', hint: 'você → o senhor, das Verb bleibt gleich.' },
    { id: 't-15', task: 'Als Imperativ formulieren', source: 'Você tem que ligar para o Pedro.', answer: 'Liga para o Pedro!', alt: ['Ligue para o Pedro!'], hint: 'Gesprochen „liga", geschrieben „ligue" – beides zählt.' },
    { id: 't-16', task: 'Höflicher formulieren', source: 'Eu quero um café.', answer: 'Eu queria um café.', hint: 'queria klingt höflich, quero fordernd.' },
    { id: 't-17', task: 'Mit „Espero que …" beginnen', source: 'É verdade.', answer: 'Espero que seja verdade.', hint: 'Nach espero que steht der Conjuntivo: seja.' },
    { id: 't-18', task: 'Ins pretérito perfeito setzen', source: 'Eu me levanto cedo.', answer: 'Eu me levantei cedo.', hint: 'Das Pronomen bleibt vor dem Verb: me levantei.' },
    { id: 't-19', task: 'Mit estar + Gerundium (gerade dabei sein)', source: 'Eu leio um livro.', answer: 'Eu estou lendo um livro.', hint: 'Im Brasilianischen das Gerundium: lendo (in Portugal: a ler).' },
    { id: 't-20', task: 'Unpersönlich mit se formulieren', source: 'As pessoas comem bem aqui.', answer: 'Se come bem aqui.', alt: ['Aqui se come bem.', 'Come-se bem aqui.'], hint: 'se + 3. Person Singular = „man"; im Brasilianischen steht se gern vorne.' },
  ],

  letters: [
    {
      id: 'l-01',
      icon: 'home',
      title: 'E-Mail an die Gastfamilie',
      intro: 'Du wohnst nächste Woche bei einer Familie in São Paulo und schreibst kurz vor der Ankunft.',
      text: `___ família Souza,
___ Jannik e chego na segunda-feira ___ São Paulo.
O avião ___ às sete da noite.
___ me buscar no aeroporto?
___ saber também se posso levar alguma coisa da Alemanha.
Muito ___ por tudo.
Um ___,
Jannik`,
      gaps: [
        { answer: 'Querida', hint: 'família ist weiblich: querida família.' },
        { answer: 'Me chamo', hint: 'Im Brasilianischen steht das Pronomen vorne: me chamo.' },
        { answer: 'a', hint: 'Bei Städten steht a: a São Paulo.' },
        { answer: 'chega', hint: '3. Person Singular von chegar.' },
        { answer: 'Vocês podem', hint: 'Höfliche Frage an mehrere: vocês podem …?' },
        { answer: 'Queria', hint: 'queria = ich möchte (höflich).' },
        { answer: 'obrigado', hint: 'muito obrigado = vielen Dank.' },
        { answer: 'abraço', hint: 'um abraço = herzliche Grüße (wörtlich: eine Umarmung).' },
      ],
      extra: ['sou', 'em'],
      de: `Liebe Familie Souza,
ich heiße Jannik und komme am Montag in São Paulo an.
Das Flugzeug kommt um sieben Uhr abends an.
Könnt ihr mich am Flughafen abholen?
Ich würde auch gern wissen, ob ich etwas aus Deutschland mitbringen kann.
Vielen Dank für alles.
Herzliche Grüße,
Jannik`,
    },
    {
      id: 'l-02',
      icon: 'smartphone',
      title: 'Nachricht an einen Freund',
      intro: 'Ihr wolltet euch heute Abend treffen, aber du schaffst es nicht und willst verschieben.',
      text: `Oi Pedro,
___, mas hoje à noite eu não ___ ir.
___ que trabalhar até tarde.
___ nos ver amanhã à noite?
___ der certo pra você, eu te ligo às seis.
Desculpa de ___!
Até ___,
Jannik`,
      gaps: [
        { answer: 'Desculpa', hint: 'desculpa = Entschuldigung (unter Freunden).' },
        { answer: 'posso', hint: '1. Person von poder.' },
        { answer: 'Tenho', hint: 'ter que = müssen.' },
        { answer: 'A gente pode', hint: '„a gente pode" = können wir, mit 3. Person Singular.' },
        { answer: 'Se', hint: 'se = wenn.' },
        { answer: 'novo', hint: 'de novo = nochmal.' },
        { answer: 'amanhã', hint: 'até amanhã = bis morgen.' },
      ],
      extra: ['sou', 'para'],
      de: `Hallo Pedro,
Entschuldigung, aber heute Abend kann ich nicht kommen.
Ich muss bis spät arbeiten.
Können wir uns morgen Abend sehen?
Wenn es dir passt, rufe ich dich um sechs an.
Nochmal Entschuldigung!
Bis morgen,
Jannik`,
    },
  ],

  free: {
    vorstellen: {
      blocks: [
        { target: 'Meu nome é …', de: 'Ich heiße …' },
        { target: 'Tenho … anos.', de: 'Ich bin … Jahre alt.' },
        { target: 'Sou da Alemanha e moro em …', de: 'Ich komme aus Deutschland und wohne in …' },
        { target: 'Trabalho como …', de: 'Ich arbeite als …' },
        { target: 'No tempo livre eu gosto de …', de: 'In der Freizeit mag ich …' },
        { target: 'Estou aprendendo português porque …', de: 'Ich lerne Portugiesisch, weil …' },
      ],
      model: 'Meu nome é Jannik e tenho trinta anos. Sou da Alemanha e moro em Stuttgart. Trabalho como programador numa empresa pequena. No tempo livre eu gosto de cozinhar e de andar de bicicleta. Estou aprendendo português porque viajo muito para o Brasil e quero conversar com as pessoas.',
      modelDe: 'Ich heiße Jannik und bin dreißig Jahre alt. Ich komme aus Deutschland und wohne in Stuttgart. Ich arbeite als Programmierer in einer kleinen Firma. In der Freizeit koche ich gern und fahre Rad. Ich lerne Portugiesisch, weil ich viel nach Brasilien reise und mit den Leuten sprechen möchte.',
    },
    tagesablauf: {
      blocks: [
        { target: 'Eu me levanto às …', de: 'Ich stehe um … auf.' },
        { target: 'Tomo café da manhã com …', de: 'Ich frühstücke …' },
        { target: 'Vou para o trabalho de …', de: 'Ich fahre mit … zur Arbeit.' },
        { target: 'Ao meio-dia …', de: 'Mittags …' },
        { target: 'À noite …', de: 'Abends …' },
        { target: 'Vou dormir por volta das …', de: 'Ich gehe gegen … ins Bett.' },
      ],
      model: 'Eu me levanto às seis e meia e tomo café da manhã com pão e café. Depois vou para o trabalho de bicicleta, demoro vinte minutos. Ao meio-dia almoço com os colegas. À noite eu cozinho e vejo uma série, ou ligo para um amigo. Normalmente vou dormir por volta das onze.',
      modelDe: 'Ich stehe um halb sieben auf und frühstücke Brot und Kaffee. Danach fahre ich mit dem Rad zur Arbeit, ich brauche zwanzig Minuten. Mittags esse ich mit den Kollegen. Abends koche ich und schaue eine Serie, oder ich rufe einen Freund an. Normalerweise gehe ich gegen elf ins Bett.',
    },
    zimmer: {
      blocks: [
        { target: 'Prezados senhores,', de: 'Sehr geehrte Damen und Herren,' },
        { target: 'Eu queria reservar um quarto de casal.', de: 'Ich möchte ein Doppelzimmer reservieren.' },
        { target: 'para duas noites, de … a …', de: 'für zwei Nächte, vom … bis zum …' },
        { target: 'O café da manhã está incluído?', de: 'Ist das Frühstück inklusive?' },
        { target: 'Fico no aguardo da resposta.', de: 'Ich warte auf Ihre Antwort.' },
        { target: 'Atenciosamente', de: 'Mit freundlichen Grüßen' },
      ],
      model: 'Prezados senhores, eu queria reservar um quarto de casal para duas noites, de 12 a 14 de maio. Somos duas pessoas e chegamos por volta das seis da noite. Queria saber se o café da manhã está incluído e se tem estacionamento perto do hotel. Fico no aguardo da resposta. Atenciosamente, Jannik Spath',
      modelDe: 'Sehr geehrte Damen und Herren, ich möchte ein Doppelzimmer für zwei Nächte reservieren, vom 12. bis zum 14. Mai. Wir sind zwei Personen und kommen gegen sechs Uhr abends an. Ich würde gern wissen, ob das Frühstück inklusive ist und ob es in der Nähe des Hotels einen Parkplatz gibt. Ich warte auf Ihre Antwort. Mit freundlichen Grüßen, Jannik Spath',
    },
    urlaub: {
      blocks: [
        { target: 'No ano passado eu fui para …', de: 'Letztes Jahr bin ich nach … gefahren.' },
        { target: 'com a minha família / com um amigo', de: 'mit meiner Familie / mit einem Freund' },
        { target: 'Ficamos … dias.', de: 'Wir sind … Tage geblieben.' },
        { target: 'Visitamos …', de: 'Wir haben … besichtigt.' },
        { target: 'Eu gostei muito.', de: 'Es hat mir sehr gefallen.' },
      ],
      model: 'No ano passado eu fui para o Rio de Janeiro com a minha namorada. Ficamos dez dias perto de Copacabana. Visitamos o Pão de Açúcar e fomos à praia quase todo dia. À noite a gente comia peixe num restaurante pequeno. Eu gostei muito, principalmente das pessoas.',
      modelDe: 'Letztes Jahr bin ich mit meiner Freundin nach Rio de Janeiro gefahren. Wir sind zehn Tage in der Nähe von Copacabana geblieben. Wir haben den Zuckerhut besichtigt und waren fast jeden Tag am Strand. Abends haben wir Fisch in einem kleinen Restaurant gegessen. Es hat mir sehr gefallen, vor allem die Leute.',
    },
    stadt: {
      blocks: [
        { target: 'Eu moro em …, no sul da Alemanha.', de: 'Ich wohne in …, im Süden Deutschlands.' },
        { target: 'Tem mais ou menos … habitantes.', de: 'Sie hat ungefähr … Einwohner.' },
        { target: 'No centro tem …', de: 'Im Zentrum gibt es …' },
        { target: 'Eu gosto principalmente de …', de: 'Mir gefällt vor allem …' },
        { target: 'Não gosto que …', de: 'Mir gefällt nicht, dass …' },
        { target: 'Vale a pena ver …', de: 'Es lohnt sich, … zu sehen.' },
      ],
      model: 'Eu moro em Stuttgart, no sul da Alemanha. Tem mais ou menos seiscentos mil habitantes e a cidade fica entre colinas. No centro tem uma praça bonita com o castelo e muitas lojas. Eu gosto principalmente do verde: em dez minutos você está na floresta. Não gosto que tenha tanto trânsito. Vale a pena ver o museu do automóvel.',
      modelDe: 'Ich wohne in Stuttgart, im Süden Deutschlands. Sie hat ungefähr sechshunderttausend Einwohner, und die Stadt liegt zwischen Hügeln. Im Zentrum gibt es einen schönen Platz mit dem Schloss und vielen Geschäften. Mir gefällt vor allem das Grün: In zehn Minuten bist du im Wald. Mir gefällt nicht, dass so viel Verkehr ist. Es lohnt sich, das Automuseum zu sehen.',
    },
    einladung: {
      blocks: [
        { target: 'Muito obrigado pelo convite!', de: 'Vielen Dank für die Einladung!' },
        { target: 'Eu vou com todo prazer.', de: 'Ich komme sehr gern.' },
        { target: 'Infelizmente não posso ir porque …', de: 'Leider kann ich nicht kommen, weil …' },
        { target: 'Que horas eu devo chegar?', de: 'Um wie viel Uhr soll ich kommen?' },
        { target: 'Posso levar alguma coisa?', de: 'Kann ich etwas mitbringen?' },
        { target: 'Até sábado!', de: 'Bis Samstag!' },
      ],
      model: 'Oi Ana, muito obrigado pelo convite! Eu vou com todo prazer no sábado à noite. Saio do trabalho às seis, então posso estar na sua casa por volta das oito. Que horas vocês querem jantar? E posso levar alguma coisa, uma sobremesa ou vinho? Me avisa. Até sábado!',
      modelDe: 'Hallo Ana, vielen Dank für die Einladung! Ich komme am Samstagabend sehr gern. Ich habe um sechs Feierabend, also kann ich gegen acht bei dir sein. Um wie viel Uhr wollt ihr essen? Und kann ich etwas mitbringen, einen Nachtisch oder Wein? Sag mir Bescheid. Bis Samstag!',
    },
  },
};
