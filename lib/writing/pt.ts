import type { WritingPack } from './types';

// European Portuguese writing practice. The centre of gravity is clitic
// placement: enclisis by default (Chamo-me …), proclisis after negation, nunca
// and question words (Não me levanto …) — the one thing that tells EP and BR
// apart in every second sentence. Plus gostar de, ser/estar and estar a + inf.
export const PT_WRITING: WritingPack = {
  order: [
    { id: 'o-01', de: 'Ich gebe dir das morgen.', answer: 'Dou-te isso amanhã.', hint: 'Enklise: Das Pronomen hängt mit Bindestrich hinten am Verb.' },
    { id: 'o-02', de: 'Ich sehe ihn nie.', answer: 'Nunca o vejo.', hint: 'Nach nunca rutscht das Pronomen vor das Verb (Proklise).' },
    { id: 'o-03', de: 'Ich habe sie gestern am Bahnhof gesehen.', answer: 'Vi-a ontem na estação.', alt: ['Ontem vi-a na estação.'], hint: 'Ohne Verneinung bleibt es bei der Enklise: vi-a.' },
    { id: 'o-04', de: 'Ich habe nichts gesagt.', answer: 'Não disse nada.', hint: 'Doppelte Verneinung: não vor dem Verb, nada danach.' },
    { id: 'o-05', de: 'Wir gehen nie ins Kino.', answer: 'Nunca vamos ao cinema.', hint: 'nunca kann allein verneinen, dann fällt não weg.' },
    { id: 'o-06', de: 'Ein schönes rotes Auto.', answer: 'Um bonito carro vermelho.', hint: 'bonito darf vor das Nomen, Farben stehen dahinter.' },
    { id: 'o-07', de: 'Das ist ein italienischer Freund.', answer: 'Este é um amigo italiano.', hint: 'Herkunftsadjektive stehen hinter dem Nomen.' },
    { id: 'o-08', de: 'Wann kommt der Zug an?', answer: 'Quando chega o comboio?', hint: 'Fragewort, Verb, Subjekt.' },
    { id: 'o-09', de: 'Wie viel kostet dieses Buch?', answer: 'Quanto custa este livro?', hint: 'quanto + Verb + Subjekt.' },
    { id: 'o-10', de: 'Mit wem gehst du ins Kino?', answer: 'Com quem vais ao cinema?', hint: 'Die Präposition steht vorne: com quem.' },
    { id: 'o-11', de: 'Ich mag diese Schuhe.', answer: 'Gosto destes sapatos.', hint: 'gostar braucht immer de – de + estes wird zu destes.' },
    { id: 'o-12', de: 'Meine Schwester mag den Film nicht.', answer: 'A minha irmã não gosta do filme.', hint: 'Im europäischen Portugiesisch steht der Artikel vor dem Possessiv: a minha irmã.' },
    { id: 'o-13', de: 'Ich stehe jeden Tag um sieben auf.', answer: 'Levanto-me todos os dias às sete.', hint: 'Enklise auch beim Reflexivpronomen: levanto-me.' },
    { id: 'o-14', de: 'Sie ist gestern nach Rom gefahren.', answer: 'Ontem foi a Roma.', alt: ['Foi a Roma ontem.'], hint: 'Abgeschlossen: pretérito perfeito foi.' },
    { id: 'o-15', de: 'Ich habe ihm schon geschrieben.', answer: 'Já lhe escrevi.', hint: 'Nach já steht das Pronomen vor dem Verb.' },
    { id: 'o-16', de: 'Ich habe immer gut gegessen.', answer: 'Comi sempre bem.', hint: 'sempre steht hinter dem Verb.' },
    { id: 'o-17', de: 'Ich gehe oft dorthin.', answer: 'Vou lá muitas vezes.', hint: 'lá ersetzt den Ort und steht hinter dem Verb.' },
    { id: 'o-18', de: 'Die Suppe ist kalt.', answer: 'A sopa está fria.', hint: 'Ein Zustand, der sich ändern kann: estar.' },
    { id: 'o-19', de: 'Dieses Buch ist interessanter als jenes.', answer: 'Este livro é mais interessante do que aquele.', hint: 'Steigerung mit mais … do que.' },
    { id: 'o-20', de: 'Ich hoffe, dass er morgen kommt.', answer: 'Espero que venha amanhã.', hint: 'Nach espero que steht der Conjuntivo: venha.' },
  ],

  transform: [
    { id: 't-01', task: 'Ins pretérito perfeito setzen', source: 'Como uma pizza.', answer: 'Comi uma pizza.', hint: 'comer → comi.' },
    { id: 't-02', task: 'Ins pretérito perfeito setzen', source: 'Vou ao mar.', answer: 'Fui ao mar.', hint: 'ir und ser haben dieselbe Form: fui.' },
    { id: 't-03', task: 'Ins imperfeito setzen', source: 'Todos os verões vou ao mar.', answer: 'Todos os verões ia ao mar.', hint: 'Gewohnheiten in der Vergangenheit: imperfeito.' },
    { id: 't-04', task: 'Ins futuro setzen', source: 'Amanhã falo com ele.', answer: 'Amanhã falarei com ele.', hint: 'falar → falarei.' },
    { id: 't-05', task: 'Frag nach der Uhrzeit', source: 'O Pedro chega às oito.', answer: 'A que horas chega o Pedro?', hint: 'a que horas + Verb + Subjekt.' },
    { id: 't-06', task: 'Verneine den Satz', source: 'Percebi.', answer: 'Não percebi.', hint: 'não steht direkt vor dem Verb.' },
    { id: 't-07', task: 'Ersetze das Objekt durch ein Pronomen', source: 'Compro o pão.', answer: 'Compro-o.', hint: 'o pão → -o, mit Bindestrich hinter das Verb.' },
    { id: 't-08', task: 'Ersetze das Objekt durch ein Pronomen', source: 'Vejo a Maria.', answer: 'Vejo-a.', hint: 'a Maria → -a.' },
    { id: 't-09', task: 'Ersetze das Objekt durch ein Pronomen', source: 'Escrevo ao meu irmão.', answer: 'Escrevo-lhe.', hint: 'Indirektes Objekt → -lhe.' },
    { id: 't-10', task: 'Ersetze das Objekt durch ein Pronomen', source: 'Não compro o pão.', answer: 'Não o compro.', hint: 'Nach não steht das Pronomen vor dem Verb – das ist der Unterschied zu Satz 7.' },
    { id: 't-11', task: 'In den Plural setzen', source: 'O rapaz italiano é simpático.', answer: 'Os rapazes italianos são simpáticos.', hint: 'rapaz → rapazes, und alles andere zieht mit.' },
    { id: 't-12', task: 'In die weibliche Form setzen', source: 'O meu amigo é alemão.', answer: 'A minha amiga é alemã.', hint: 'alemão → alemã.' },
    { id: 't-13', task: 'Höflich formulieren (você)', source: 'Como estás?', answer: 'Como está?', hint: 'Die Höflichkeitsform benutzt die 3. Person Singular.' },
    { id: 't-14', task: 'Höflich formulieren (você)', source: 'Podes ajudar-me?', answer: 'Pode ajudar-me?', hint: 'podes → pode.' },
    { id: 't-15', task: 'Als Imperativ (tu) formulieren', source: 'Tens de ligar ao Pedro.', answer: 'Liga ao Pedro!', hint: '-ar-Verben enden im Imperativ (tu) auf -a.' },
    { id: 't-16', task: 'Höflicher formulieren', source: 'Quero um café.', answer: 'Queria um café.', hint: 'queria klingt höflich, quero fordernd.' },
    { id: 't-17', task: 'Mit „Espero que …" beginnen', source: 'É verdade.', answer: 'Espero que seja verdade.', hint: 'Nach espero que steht der Conjuntivo: seja.' },
    { id: 't-18', task: 'Ins pretérito perfeito setzen', source: 'Levanto-me cedo.', answer: 'Levantei-me cedo.', hint: 'Das Pronomen bleibt hinten am Verb: levantei-me.' },
    { id: 't-19', task: 'Mit estar a + Infinitiv (gerade dabei sein)', source: 'Leio um livro.', answer: 'Estou a ler um livro.', hint: 'Im europäischen Portugiesisch: estar a + Infinitiv.' },
    { id: 't-20', task: 'Unpersönlich mit se formulieren', source: 'As pessoas comem bem aqui.', answer: 'Come-se bem aqui.', alt: ['Aqui come-se bem.'], hint: 'se + 3. Person Singular = „man".' },
  ],

  letters: [
    {
      id: 'l-01',
      icon: 'home',
      title: 'E-Mail an die Gastfamilie',
      intro: 'Du wohnst nächste Woche bei einer Familie in Lissabon und schreibst kurz vor der Ankunft.',
      text: `___ família Silva,
___ Jannik e chego na segunda-feira ___ Lisboa.
O comboio ___ às sete da tarde.
___ vir buscar-me à estação?
___ saber também se posso trazer alguma coisa da Alemanha.
Muito ___ por tudo.
Com os melhores ___,
Jannik`,
      gaps: [
        { answer: 'Cara', hint: 'família ist weiblich: cara família.' },
        { answer: 'Chamo-me', hint: 'Enklise: chamo-me … – so stellt man sich vor.' },
        { answer: 'a', hint: 'Bei Städten steht a: a Lisboa.' },
        { answer: 'chega', hint: '3. Person Singular von chegar.' },
        { answer: 'Podem', hint: 'Höfliche Frage an mehrere: podem …?' },
        { answer: 'Queria', hint: 'queria = ich möchte (höflich).' },
        { answer: 'obrigado', hint: 'muito obrigado = vielen Dank.' },
        { answer: 'cumprimentos', hint: 'com os melhores cumprimentos = mit freundlichen Grüßen.' },
      ],
      extra: ['sou', 'em'],
      de: `Liebe Familie Silva,
ich heiße Jannik und komme am Montag in Lissabon an.
Der Zug kommt um sieben Uhr abends an.
Können Sie mich am Bahnhof abholen?
Ich würde auch gern wissen, ob ich etwas aus Deutschland mitbringen kann.
Vielen Dank für alles.
Mit freundlichen Grüßen,
Jannik`,
    },
    {
      id: 'l-02',
      icon: 'smartphone',
      title: 'Nachricht an einen Freund',
      intro: 'Ihr wolltet euch heute Abend treffen, aber du schaffst es nicht und willst verschieben.',
      text: `Olá Pedro,
___, mas hoje à noite não ___ ir.
___ de trabalhar até tarde.
___ ver-nos amanhã à noite?
___ te der jeito, ligo-te às seis.
Desculpa ___ vez!
Até ___,
Jannik`,
      gaps: [
        { answer: 'Desculpa', hint: 'desculpa = Entschuldigung (an eine vertraute Person).' },
        { answer: 'posso', hint: '1. Person von poder.' },
        { answer: 'Tenho', hint: 'ter de = müssen.' },
        { answer: 'Podemos', hint: 'Vorschlag in der 1. Person Plural: podemos …?' },
        { answer: 'Se', hint: 'se = wenn.' },
        { answer: 'outra', hint: 'outra vez = nochmal.' },
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
        { target: 'Chamo-me …', de: 'Ich heiße …' },
        { target: 'Tenho … anos.', de: 'Ich bin … Jahre alt.' },
        { target: 'Sou da Alemanha e vivo em …', de: 'Ich komme aus Deutschland und wohne in …' },
        { target: 'Trabalho como …', de: 'Ich arbeite als …' },
        { target: 'Nos tempos livres gosto de …', de: 'In der Freizeit mag ich …' },
        { target: 'Aprendo português porque …', de: 'Ich lerne Portugiesisch, weil …' },
      ],
      model: 'Chamo-me Jannik e tenho trinta anos. Sou da Alemanha e vivo em Estugarda. Trabalho como programador numa empresa pequena. Nos tempos livres gosto de cozinhar e de andar de bicicleta. Aprendo português porque vou muitas vezes a Portugal e quero falar com as pessoas.',
      modelDe: 'Ich heiße Jannik und bin dreißig Jahre alt. Ich komme aus Deutschland und wohne in Stuttgart. Ich arbeite als Programmierer in einer kleinen Firma. In der Freizeit koche ich gern und fahre Rad. Ich lerne Portugiesisch, weil ich oft nach Portugal fahre und mit den Leuten sprechen möchte.',
    },
    tagesablauf: {
      blocks: [
        { target: 'Levanto-me às …', de: 'Ich stehe um … auf.' },
        { target: 'Tomo o pequeno-almoço com …', de: 'Ich frühstücke …' },
        { target: 'Vou para o trabalho de …', de: 'Ich fahre mit … zur Arbeit.' },
        { target: 'Ao meio-dia …', de: 'Mittags …' },
        { target: 'À noite …', de: 'Abends …' },
        { target: 'Vou para a cama por volta das …', de: 'Ich gehe gegen … ins Bett.' },
      ],
      model: 'Levanto-me às seis e meia e tomo o pequeno-almoço com um café e pão. Depois vou para o trabalho de bicicleta, demoro vinte minutos. Ao meio-dia como com os colegas. À noite cozinho e vejo uma série, ou ligo a um amigo. Normalmente vou para a cama por volta das onze.',
      modelDe: 'Ich stehe um halb sieben auf und frühstücke einen Kaffee und Brot. Danach fahre ich mit dem Rad zur Arbeit, ich brauche zwanzig Minuten. Mittags esse ich mit den Kollegen. Abends koche ich und schaue eine Serie, oder ich rufe einen Freund an. Normalerweise gehe ich gegen elf ins Bett.',
    },
    zimmer: {
      blocks: [
        { target: 'Exmos. Senhores,', de: 'Sehr geehrte Damen und Herren,' },
        { target: 'Queria reservar um quarto duplo.', de: 'Ich möchte ein Doppelzimmer reservieren.' },
        { target: 'para duas noites, de … a …', de: 'für zwei Nächte, vom … bis zum …' },
        { target: 'O pequeno-almoço está incluído?', de: 'Ist das Frühstück inklusive?' },
        { target: 'Fico a aguardar a vossa resposta.', de: 'Ich warte auf Ihre Antwort.' },
        { target: 'Com os melhores cumprimentos', de: 'Mit freundlichen Grüßen' },
      ],
      model: 'Exmos. Senhores, queria reservar um quarto duplo para duas noites, de 12 a 14 de maio. Somos duas pessoas e chegamos por volta das seis da tarde. Queria saber se o pequeno-almoço está incluído e se há estacionamento perto do hotel. Fico a aguardar a vossa resposta. Com os melhores cumprimentos, Jannik Spath',
      modelDe: 'Sehr geehrte Damen und Herren, ich möchte ein Doppelzimmer für zwei Nächte reservieren, vom 12. bis zum 14. Mai. Wir sind zwei Personen und kommen gegen sechs Uhr abends an. Ich würde gern wissen, ob das Frühstück inklusive ist und ob es in der Nähe des Hotels einen Parkplatz gibt. Ich warte auf Ihre Antwort. Mit freundlichen Grüßen, Jannik Spath',
    },
    urlaub: {
      blocks: [
        { target: 'No ano passado fui a …', de: 'Letztes Jahr bin ich nach … gefahren.' },
        { target: 'com a minha família / com um amigo', de: 'mit meiner Familie / mit einem Freund' },
        { target: 'Ficámos … dias.', de: 'Wir sind … Tage geblieben.' },
        { target: 'Visitámos …', de: 'Wir haben … besichtigt.' },
        { target: 'Gostei muito.', de: 'Es hat mir sehr gefallen.' },
      ],
      model: 'No ano passado fui ao Algarve com a minha namorada. Ficámos dez dias perto de Lagos. Visitámos as grutas e fomos à praia quase todos os dias. À noite comíamos peixe num restaurante pequeno. Gostei muito, sobretudo das pessoas.',
      modelDe: 'Letztes Jahr bin ich mit meiner Freundin an die Algarve gefahren. Wir sind zehn Tage in der Nähe von Lagos geblieben. Wir haben die Grotten besichtigt und waren fast jeden Tag am Strand. Abends haben wir Fisch in einem kleinen Restaurant gegessen. Es hat mir sehr gefallen, vor allem die Leute.',
    },
    stadt: {
      blocks: [
        { target: 'Vivo em …, no sul da Alemanha.', de: 'Ich wohne in …, im Süden Deutschlands.' },
        { target: 'Tem cerca de … habitantes.', de: 'Sie hat ungefähr … Einwohner.' },
        { target: 'No centro há …', de: 'Im Zentrum gibt es …' },
        { target: 'Gosto sobretudo de …', de: 'Mir gefällt vor allem …' },
        { target: 'Não gosto que …', de: 'Mir gefällt nicht, dass …' },
        { target: 'Vale a pena ver …', de: 'Es lohnt sich, … zu sehen.' },
      ],
      model: 'Vivo em Estugarda, no sul da Alemanha. Tem cerca de seiscentos mil habitantes e está rodeada de colinas. No centro há uma praça bonita com o castelo e muitas lojas. Gosto sobretudo do verde: em dez minutos estamos na floresta. Não gosto que haja tanto trânsito. Vale a pena ver o museu do automóvel.',
      modelDe: 'Ich wohne in Stuttgart, im Süden Deutschlands. Sie hat ungefähr sechshunderttausend Einwohner und ist von Hügeln umgeben. Im Zentrum gibt es einen schönen Platz mit dem Schloss und vielen Geschäften. Mir gefällt vor allem das Grün: In zehn Minuten sind wir im Wald. Mir gefällt nicht, dass so viel Verkehr ist. Es lohnt sich, das Automuseum zu sehen.',
    },
    einladung: {
      blocks: [
        { target: 'Muito obrigado pelo convite!', de: 'Vielen Dank für die Einladung!' },
        { target: 'Vou com muito gosto.', de: 'Ich komme sehr gern.' },
        { target: 'Infelizmente não posso ir porque …', de: 'Leider kann ich nicht kommen, weil …' },
        { target: 'A que horas devo chegar?', de: 'Um wie viel Uhr soll ich kommen?' },
        { target: 'Posso levar alguma coisa?', de: 'Kann ich etwas mitbringen?' },
        { target: 'Até sábado!', de: 'Bis Samstag!' },
      ],
      model: 'Olá Ana, muito obrigado pelo convite! Vou com muito gosto no sábado à noite. Saio do trabalho às seis, por isso posso estar em tua casa por volta das oito. A que horas querem jantar? E posso levar alguma coisa, uma sobremesa ou vinho? Diz-me qualquer coisa. Até sábado!',
      modelDe: 'Hallo Ana, vielen Dank für die Einladung! Ich komme am Samstagabend sehr gern. Ich habe um sechs Feierabend, also kann ich gegen acht bei dir sein. Um wie viel Uhr wollt ihr essen? Und kann ich etwas mitbringen, einen Nachtisch oder Wein? Sag mir Bescheid. Bis Samstag!',
    },
  },
};
