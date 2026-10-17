import type { GrammarLesson } from '../grammar-lessons';

// ─── Brazilian Portuguese grammar lessons ───────────────────────────────────────
// Short lessons for A1 (A2/B1 are added later by other agents, same format),
// written in German. Each one is the "learn it" page for the cloze set in
// lib/br/grammar-exercises.ts with the matching `lessonId`. Standard spoken
// Brazilian Portuguese throughout — "você" (no "tu"), BR vocabulary and spelling.

export const GRAMMAR_LESSONS: GrammarLesson[] = [
  // ══════════════════════════════ A1 ══════════════════════════════
  {
    id: 'artikel',
    icon: 'letters',
    title: 'Artikel & Plural (o, a, um, uma)',
    level: 'A1',
    intro: 'Zwei Geschlechter, vier bestimmte Artikel – und Artikel, die mit Präpositionen verschmelzen.',
    sections: [
      {
        heading: 'Bestimmt und unbestimmt',
        body:
          'Bestimmt: o (m.), a (f.), os (m. Pl.), as (f. Pl.). Unbestimmt: um, uma, uns, umas. Wie im europäischen ' +
          'Portugiesisch steht der Artikel oft auch vor Vornamen: o Pedro, a Ana.',
        examples: [
          { target: 'o ônibus / a estação', de: 'der Bus / der Bahnhof' },
          { target: 'um amigo / uma amiga', de: 'ein Freund / eine Freundin' },
          { target: 'A Ana mora em Recife.', de: 'Ana wohnt in Recife.' },
        ],
      },
      {
        heading: 'Der Plural',
        body:
          'Meist einfach -s: casa → casas. Wörter auf -ão bilden den Plural am häufigsten mit -ões (a estação → ' +
          'as estações); seltener mit -ães oder -ãos (o pão → os pães) – das muss man mitlernen.',
        examples: [
          { target: 'a estação → as estações', de: 'der Bahnhof → die Bahnhöfe' },
          { target: 'o trem → os trens', de: 'der Zug → die Züge' },
          { target: 'o pão → os pães', de: 'das Brot → die Brote' },
        ],
      },
      {
        heading: 'Verschmelzungen mit de, em und a',
        body:
          'de + o/a/os/as = do, da, dos, das · em + o/a/os/as = no, na, nos, nas · a + o/a/os/as = ao, à, aos, às. ' +
          'Städte ohne Artikel wie São Paulo bleiben unverändert (de São Paulo); der Rio de Janeiro hat Artikel ' +
          '(no Rio de Janeiro).',
        examples: [
          { target: 'Moro no Rio de Janeiro.', de: 'Ich wohne in Rio de Janeiro.' },
          { target: 'Vou à praia no fim de semana.', de: 'Ich gehe am Wochenende zum Strand.' },
          { target: 'O celular do meu pai quebrou.', de: 'Das Handy meines Vaters ist kaputt gegangen.' },
        ],
      },
    ],
  },
  {
    id: 'ser-estar-ter',
    icon: 'scale',
    title: 'Ser, Estar & Ter (sein & haben)',
    level: 'A1',
    intro: 'Das Deutsche hat ein „sein", das Portugiesische zwei – dazu ter für „haben". Und ein wichtiger ' +
      'brasilianischer Sonderfall: „você".',
    sections: [
      {
        heading: 'ser = dauerhafte Identität',
        body:
          'sou (eu), é (você/ele/ela), somos (nós), são (vocês/eles). Für Namen, Herkunft, Nationalität, Beruf, ' +
          'Charakter, Uhrzeit und Datum.',
        examples: [
          { target: 'Sou brasileiro, de Salvador.', de: 'Ich bin Brasilianer, aus Salvador.' },
          { target: 'Você é muito gentil.', de: 'Du bist sehr freundlich.' },
          { target: 'Somos de São Paulo.', de: 'Wir sind aus São Paulo.' },
        ],
      },
      {
        heading: 'estar = Zustand und Ort',
        body: 'estou (eu), está (você/ele/ela), estamos (nós), estão (vocês/eles). Für momentane Zustände, Gefühle und den Ort von Personen/Dingen.',
        examples: [
          { target: 'Estou com fome.', de: 'Ich habe Hunger.' },
          { target: 'Onde está o banheiro?', de: 'Wo ist die Toilette?' },
          { target: 'Vocês estão cansados?', de: 'Seid ihr müde?' },
        ],
      },
      {
        heading: 'ter = haben, und die Regel für „você"',
        body:
          'tenho (eu), tem (você/ele/ela), temos (nós), têm (vocês/eles). Merken: „você" ist grammatisch eine ' +
          '3. Person und nimmt in JEDER Zeitform genau die Form von „ele/ela" — tem, nicht „tens" (das wäre die ' +
          'europäische „tu"-Form). Das gilt auch beim Präsens und, wie ihr später seht, sogar beim Imperativ.',
        examples: [
          { target: 'Tenho vinte anos.', de: 'Ich bin zwanzig Jahre alt.' },
          { target: 'Você tem um celular novo?', de: 'Hast du ein neues Handy?' },
          { target: 'Eles têm dois carros.', de: 'Sie haben zwei Autos.' },
        ],
      },
    ],
  },
  {
    id: 'praesens',
    icon: 'dot',
    title: 'Presente do indicativo',
    level: 'A1',
    intro: 'Drei Verbklassen, ein paar Endungen – und „você" läuft immer mit „ele/ela" mit.',
    sections: [
      {
        heading: '-ar, -er, -ir Verben',
        body:
          '-ar (falar): falo, fala, falamos, falam · -er (comer): como, come, comemos, comem · -ir (partir): ' +
          'parto, parte, partimos, partem. „você" und „ele/ela" teilen sich immer dieselbe Form, ebenso „vocês" ' +
          'und „eles/elas".',
        examples: [
          { target: 'Eu falo português e inglês.', de: 'Ich spreche Portugiesisch und Englisch.' },
          { target: 'Nós comemos peixe no almoço.', de: 'Wir essen Fisch zum Mittagessen.' },
          { target: 'Vocês partem amanhã?', de: 'Reist ihr morgen ab?' },
        ],
      },
      {
        heading: '„você" = die Form von ele/ela',
        body:
          'Weil es im brasilianischen Standard kein „tu" gibt, klingt „du" grammatisch genau wie „er/sie": você ' +
          'fala (nicht „você falas"), você mora, você quer. Diese Regel zieht sich durch alle Zeitformen in ' +
          'diesem Kurs.',
        examples: [
          { target: 'Você fala espanhol também?', de: 'Sprichst du auch Spanisch?' },
          { target: 'Você mora perto daqui?', de: 'Wohnst du hier in der Nähe?' },
        ],
      },
      {
        heading: 'Zwei häufige Ausnahmen: fazer, querer',
        body: 'fazer (eu faço, você faz, nós fazemos, vocês fazem) und querer (eu quero, você quer, nós queremos, vocês querem) sind nur in der eu-Form unregelmäßig.',
        examples: [
          { target: 'Eu faço o jantar hoje.', de: 'Ich mache heute das Abendessen.' },
          { target: 'O que você quer beber?', de: 'Was möchtest du trinken?' },
        ],
      },
    ],
  },
  {
    id: 'possessiv',
    icon: 'bag',
    title: 'Possessivpronomen (meu, minha, seu …)',
    level: 'A1',
    intro: 'Das Possessivpronomen richtet sich nach dem Besitz – und im brasilianischen Alltag kommt es meistens ohne Artikel.',
    sections: [
      {
        heading: 'Nach dem Besitz, nicht nach dem Besitzer',
        body: 'meu/minha/meus/minhas (mein), seu/sua/seus/suas (dein/Ihr, você), nosso/nossa (unser). Die Form richtet sich nach dem Nomen, das folgt.',
        examples: [
          { target: 'meu carro / minha casa', de: 'mein Auto / mein Haus' },
          { target: 'meus livros / minhas chaves', de: 'meine Bücher / meine Schlüssel' },
        ],
      },
      {
        heading: 'Im Alltag ohne Artikel',
        body:
          'Anders als europäisches Portugiesisch, das normalerweise den Artikel behält (o meu carro), lässt die ' +
          'gesprochene brasilianische Alltagssprache ihn meistens weg: meu carro, minha casa. Die Form mit ' +
          'Artikel ist weiterhin korrekt, wirkt aber förmlicher und wird seltener benutzt.',
        examples: [
          { target: 'Esta é minha casa.', de: 'Das ist mein Haus (alltäglich, ohne Artikel).' },
          { target: 'Esta é a minha casa.', de: 'Das ist mein Haus (korrekt, aber förmlicher).' },
        ],
      },
      {
        heading: 'dele / dela für „sein" und „ihr"',
        body: 'Weil „seu" mehrdeutig sein kann (dein, sein, ihr), sagt man zur Klarheit oft dele (von ihm) oder dela (von ihr) nach dem Nomen.',
        examples: [
          { target: 'A casa dele é grande.', de: 'Sein Haus ist groß.' },
          { target: 'A irmã dela mora em Fortaleza.', de: 'Ihre Schwester wohnt in Fortaleza.' },
        ],
      },
    ],
  },
  {
    id: 'fragen',
    icon: 'question',
    title: 'Fragewörter & Verneinung',
    level: 'A1',
    intro: 'Mit sieben Fragewörtern und einem kleinen „não" kommt man im Alltag sehr weit.',
    sections: [
      {
        heading: 'Die wichtigsten Fragewörter',
        body: 'o que (was), quem (wer), onde (wo), quando (wann), como (wie), quanto/quantos/quanta/quantas (wie viel/e).',
        examples: [
          { target: 'O que você está fazendo?', de: 'Was machst du gerade?' },
          { target: 'Onde fica o banheiro?', de: 'Wo ist die Toilette?' },
          { target: 'Quantos irmãos você tem?', de: 'Wie viele Geschwister hast du?' },
        ],
      },
      {
        heading: 'por que, porque, por quê, porquê',
        body: 'In der Frage, am Satzanfang, steht „por que" getrennt mit Akzent. In der Antwort steht „porque" zusammen und ohne Akzent.',
        examples: [
          { target: 'Por que você está triste?', de: 'Warum bist du traurig?' },
          { target: 'Estou triste porque perdi o celular.', de: 'Ich bin traurig, weil ich mein Handy verloren habe.' },
        ],
      },
      {
        heading: 'Verneinung mit não',
        body: 'não steht direkt vor dem Verb, egal welche Zeitform.',
        examples: [
          { target: 'Eu não entendo essa pergunta.', de: 'Ich verstehe diese Frage nicht.' },
          { target: 'Nós não temos tempo hoje.', de: 'Wir haben heute keine Zeit.' },
        ],
      },
    ],
  },
  {
    id: 'adjektive',
    icon: 'palette',
    title: 'Adjektive',
    level: 'A1',
    intro: 'Adjektive passen sich an Genus und Numerus an und stehen meistens nach dem Nomen.',
    sections: [
      {
        heading: 'Übereinstimmung',
        body: 'Die meisten Adjektive haben vier Formen: novo/nova/novos/novas. Adjektive auf -e sind für Maskulinum und Femininum gleich: grande, inteligente.',
        examples: [
          { target: 'O carro é novo.', de: 'Das Auto ist neu.' },
          { target: 'A casa é grande.', de: 'Das Haus ist groß.' },
        ],
      },
      {
        heading: 'Besondere Endungen',
        body: 'Adjektive auf -dor bilden das Femininum mit -dora (trabalhador → trabalhadora); Adjektive auf -il bilden den Plural mit -eis (difícil → difíceis).',
        examples: [
          { target: 'Ele é trabalhador, ela é trabalhadora.', de: 'Er ist fleißig, sie ist fleißig.' },
          { target: 'São questões muito difíceis.', de: 'Das sind sehr schwierige Fragen.' },
        ],
      },
      {
        heading: 'Position: meistens nach dem Nomen',
        body: 'Anders als im Deutschen steht das Adjektiv normalerweise NACH dem Nomen: uma bolsa vermelha (eine rote Tasche), nicht „uma vermelha bolsa".',
        examples: [
          { target: 'Comprei uma bolsa vermelha.', de: 'Ich habe eine rote Tasche gekauft.' },
          { target: 'Ela é uma mulher inteligente.', de: 'Sie ist eine intelligente Frau.' },
        ],
      },
    ],
  },
  {
    id: 'preterito-perfeito',
    icon: 'hourglass',
    title: 'Pretérito perfeito simples',
    level: 'A1',
    intro: 'Die normale Erzählzeit für abgeschlossene Handlungen in der Vergangenheit – und eine kleine BR-Besonderheit bei der Schreibung.',
    sections: [
      {
        heading: 'Bildung',
        body: '-ar (falar): falei, falou, falamos, falaram · -er (comer): comi, comeu, comemos, comeram · -ir (partir): parti, partiu, partimos, partiram.',
        examples: [
          { target: 'Ontem eu falei com minha mãe.', de: 'Gestern habe ich mit meiner Mutter gesprochen.' },
          { target: 'Você comeu alguma coisa?', de: 'Hast du etwas gegessen?' },
        ],
      },
      {
        heading: 'BR-Schreibung: ohne Akzent in der nós-Form',
        body:
          'Im brasilianischen Portugiesisch wird „nós moramos" (Vergangenheit) genauso geschrieben wie „nós ' +
          'moramos" (Gegenwart) – ohne den Akzent, den europäisches Portugiesisch zur Unterscheidung benutzt ' +
          '(morámos). Der Kontext macht klar, welche Zeit gemeint ist.',
        examples: [
          { target: 'Nós moramos em Recife por dois anos.', de: 'Wir haben zwei Jahre in Recife gewohnt.' },
        ],
      },
      {
        heading: 'Unregelmäßige Verben',
        body: 'fazer (fiz, fez, fizemos, fizeram), ir/ser (fui, foi, fomos, foram – beide Verben teilen sich diese Form!), ter (tive, teve, tivemos, tiveram).',
        examples: [
          { target: 'Eu fiz o almoço sozinho.', de: 'Ich habe das Mittagessen allein gemacht.' },
          { target: 'Você foi ao cinema no sábado?', de: 'Warst du am Samstag im Kino?' },
        ],
      },
    ],
  },
  {
    id: 'imperfeito',
    icon: 'clock',
    title: 'Pretérito imperfeito',
    level: 'A1',
    intro: 'Die Zeitform für Gewohnheiten und Hintergrundzustände in der Vergangenheit.',
    sections: [
      {
        heading: 'Bildung',
        body: '-ar (morar): morava, morava, morávamos, moravam · -er/-ir (comer, partir): comia/partia, comia/partia, comíamos/partíamos, comiam/partiam.',
        examples: [
          { target: 'Quando eu era criança, morava em Belo Horizonte.', de: 'Als ich Kind war, wohnte ich in Belo Horizonte.' },
          { target: 'Nós íamos à praia todo verão.', de: 'Wir fuhren jeden Sommer an den Strand.' },
        ],
      },
      {
        heading: 'Gewohnheit vs. abgeschlossene Handlung',
        body: 'imperfeito = regelmäßig/gewohnheitsmäßig oder gerade im Gange; pretérito perfeito = eine einzelne, abgeschlossene Handlung.',
        examples: [
          { target: 'Chovia muito quando eu saí de casa.', de: 'Es regnete stark, als ich aus dem Haus ging (Hintergrund + abgeschlossene Handlung).' },
        ],
      },
      {
        heading: 'Unregelmäßige Verben',
        body: 'ser (era, era, éramos, eram), ter (tinha, tinha, tínhamos, tinham) – beide mit eigenem Stamm statt der regelmäßigen Endung.',
        examples: [
          { target: 'Nós éramos muito amigos na escola.', de: 'Wir waren in der Schule sehr gute Freunde.' },
          { target: 'Ela tinha medo de cachorro.', de: 'Sie hatte Angst vor Hunden.' },
        ],
      },
    ],
  },
  {
    id: 'futuro',
    icon: 'wand',
    title: 'Futuro: ir + Infinitiv und futuro simples',
    level: 'A1',
    intro: 'Im gesprochenen Alltag gewinnt fast immer ir + Infinitiv – das futuro simples ist eher die geschriebene Variante.',
    sections: [
      {
        heading: 'ir + Infinitiv: die Alltagszukunft',
        body: 'vou/vai/vamos/vão + Infinitiv ist die ganz normale Art, über die Zukunft zu sprechen – noch gebräuchlicher als im Deutschen „ich werde …".',
        examples: [
          { target: 'Amanhã eu vou viajar para o Rio de Janeiro.', de: 'Morgen fahre ich nach Rio de Janeiro.' },
          { target: 'Nós vamos comer pizza no jantar.', de: 'Wir werden zum Abendessen Pizza essen.' },
        ],
      },
      {
        heading: 'futuro simples: die formellere Variante',
        body: 'Infinitiv + ei/á/á/emos/ão/ão: falarei, falará, falaremos, falarão. Man hört und liest es, aber im Gespräch ist ir + Infinitiv deutlich häufiger.',
        examples: [
          { target: 'No futuro, as pessoas viverão mais de cem anos.', de: 'In Zukunft werden die Menschen über hundert Jahre alt werden.' },
        ],
      },
      {
        heading: 'Unregelmäßige Stämme',
        body: 'Nur drei Verben haben einen eigenen Stamm im futuro simples: fazer → farei, dizer → direi, trazer → trarei.',
        examples: [
          { target: 'Eu farei o possível para ajudar.', de: 'Ich werde mein Bestes tun, um zu helfen.' },
          { target: 'Você dirá a verdade um dia.', de: 'Du wirst irgendwann die Wahrheit sagen.' },
        ],
      },
    ],
  },
  {
    id: 'imperativ',
    icon: 'megaphone',
    title: 'Imperativo',
    level: 'A1',
    intro: 'Der wichtigste Unterschied zum europäischen Portugiesisch: der Befehl an „você" kommt vom Konjunktiv, nicht vom Indikativ.',
    sections: [
      {
        heading: 'Woher die você-Form wirklich kommt',
        body:
          'Europäisches Portugiesisch bildet den Befehl an „tu" aus dem Indikativ (tu falas → fala!). Brasilianisches ' +
          'Portugiesisch hat kein „tu" in diesem Kurs und bildet den Befehl an „você" stattdessen aus dem Konjunktiv ' +
          '— genau der Form, die in „que você fale" steht, nur ohne „que você": Fale!, Coma!, Abra!',
        examples: [
          { target: 'que você fale → Fale!', de: 'dass du sprichst → Sprich!' },
          { target: 'Coma toda a comida, por favor.', de: 'Iss bitte alles auf.' },
        ],
      },
      {
        heading: 'Verneinter Imperativ: dieselbe Form',
        body: 'Der verneinte Befehl benutzt genau dieselbe Konjunktiv-Form, nur mit não davor.',
        examples: [
          { target: 'Não fale assim comigo!', de: 'Sprich nicht so mit mir!' },
          { target: 'Não coma isso, está estragado!', de: 'Iss das nicht, es ist verdorben!' },
        ],
      },
      {
        heading: 'nós und vocês',
        body: 'Auch der Befehl an „nós" (lasst uns …) und „vocês" kommt vom Konjunktiv: Vamos! (nós, von ir), Façam silêncio! (vocês, von fazer).',
        examples: [
          { target: 'Vamos embora agora!', de: 'Lasst uns jetzt gehen!' },
          { target: 'Façam silêncio, pessoal!', de: 'Seid leise, Leute!' },
        ],
      },
    ],
  },
  {
    id: 'objektpronomen',
    icon: 'link',
    title: 'Pronomes de objeto',
    level: 'A1',
    intro: 'Direkte und indirekte Objektpronomen – im brasilianischen Alltag praktisch immer VOR dem Verb.',
    sections: [
      {
        heading: 'Direkt und indirekt',
        body: 'Direkt (wen/was): me, te, o/a, nos, os/as. Indirekt (wem): me, te, lhe, nos, lhes.',
        examples: [
          { target: 'Eu te amo.', de: 'Ich liebe dich.' },
          { target: 'Vou lhe dar um presente.', de: 'Ich werde ihm/ihr ein Geschenk geben.' },
        ],
      },
      {
        heading: 'Fast immer vor dem Verb',
        body:
          'Anders als europäisches Portugiesisch, das das Pronomen oft an das Verb anhängt (dou-te), stellt ' +
          'gesprochenes brasilianisches Portugiesisch es fast immer davor: te dou, me ajudou, o vimos.',
        examples: [
          { target: 'Ela me ajudou muito ontem.', de: 'Sie hat mir gestern sehr geholfen.' },
          { target: 'Você pode me ajudar com isso?', de: 'Kannst du mir dabei helfen?' },
        ],
      },
      {
        heading: 'Umgangssprachlicher Hinweis',
        body:
          'Im sehr lockeren Alltag hört man statt des standardsprachlichen „Eu a vi" oft „Eu vi ela" – das ' +
          'Subjektpronomen anstelle des Objektpronomens. Das ist informell und nicht die Form, die man schreiben ' +
          'oder im Unterricht benutzen sollte, aber es lohnt sich, sie zu erkennen.',
        examples: [
          { target: 'Eu a vi no shopping.', de: 'Standard: Ich habe sie im Einkaufszentrum gesehen.' },
          { target: 'Eu vi ela no shopping.', de: 'Umgangssprachlich/informell, gleiche Bedeutung.' },
        ],
      },
    ],
  },

  // ══════════════════════════════ A2 ══════════════════════════════
  {
    id: 'comparativos',
    icon: 'ruler',
    title: 'Comparativos e superlativos',
    level: 'A2',
    intro: 'Vergleichen auf Portugiesisch: do que, quanto und vier Sonderformen, die man einfach mitlernen muss.',
    sections: [
      {
        heading: 'Überlegenheit und Unterlegenheit',
        body: 'mais + Adjektiv + do que (mehr … als) und menos + Adjektiv + do que (weniger … als).',
        examples: [
          { target: 'O Rio de Janeiro é mais bonito do que Brasília.', de: 'Rio de Janeiro ist schöner als Brasília.' },
          { target: 'Este celular é menos caro do que aquele.', de: 'Dieses Handy ist weniger teuer als jenes.' },
        ],
      },
      {
        heading: 'Gleichheit: tão … quanto',
        body:
          'Für Gleichheit sagt brasilianisches Portugiesisch tão + Adjektiv + quanto — nicht „tão … como", wie ' +
          'europäisches Portugiesisch es sagt.',
        examples: [
          { target: 'Ela é tão alta quanto o irmão.', de: 'Sie ist genauso groß wie ihr Bruder.' },
        ],
      },
      {
        heading: 'Superlativ und vier unregelmäßige Formen',
        body:
          'Superlativ: o/a + mais/menos + Adjektiv + de (o mais caro da cidade). Vier Adjektive haben ' +
          'unregelmäßige Vergleichsformen statt „mais + Adjektiv": bom → melhor, mau/má → pior, grande → maior, ' +
          'pequeno → menor.',
        examples: [
          { target: 'São Paulo é a maior cidade do Brasil.', de: 'São Paulo ist die größte Stadt Brasiliens.' },
          { target: 'Este livro é melhor do que o outro.', de: 'Dieses Buch ist besser als das andere.' },
        ],
      },
    ],
  },
  {
    id: 'preposicoes',
    icon: 'compass',
    title: 'Präpositionen (a, de, em, com, para, por)',
    level: 'A2',
    intro: 'Sechs kleine Wörter mit großer Wirkung — und ihre Verschmelzungen mit dem Artikel als Wiederholung.',
    sections: [
      {
        heading: 'em, de — Ort, Zeit, Herkunft',
        body: 'em = Ort/Zeit (em São Paulo, em 2020). de = Herkunft, Besitz oder Material (de Salvador, um copo de vidro).',
        examples: [
          { target: 'Moro em São Paulo há cinco anos.', de: 'Ich wohne seit fünf Jahren in São Paulo.' },
          { target: 'Ele é de Salvador.', de: 'Er ist aus Salvador.' },
        ],
      },
      {
        heading: 'com, para, por — Begleitung, Zweck, Grund',
        body:
          'com = Begleitung oder Mittel (com minha família). para = Zweck, Ziel, Empfänger oder Frist (presente ' +
          'para você, para sexta-feira). por = Grund, Ursache oder Tausch (por causa da chuva, troquei por uma moto).',
        examples: [
          { target: 'Este presente é para você.', de: 'Dieses Geschenk ist für dich.' },
          { target: 'Troquei meu carro antigo por uma moto.', de: 'Ich habe mein altes Auto gegen ein Motorrad getauscht.' },
        ],
      },
      {
        heading: 'Verschmelzungen (Wiederholung)',
        body: 'de+o/a = do/da, em+o/a = no/na, a+o/a = ao/à, por+o/a = pelo/pela.',
        examples: [
          { target: 'Passamos pela praia antes de ir para casa.', de: 'Wir sind am Strand vorbeigekommen, bevor wir nach Hause gingen.' },
          { target: 'O trem sai às oito horas.', de: 'Der Zug fährt um acht Uhr ab.' },
        ],
      },
    ],
  },
  {
    id: 'estar-gerundio',
    icon: 'steps',
    title: 'Estar + gerúndio',
    level: 'A2',
    intro: 'Die brasilianische Verlaufsform — genau wie das englische „-ing", ganz anders als europäisches Portugiesisch.',
    sections: [
      {
        heading: 'Das Gerúndio bilden',
        body: '-ar → -ando (falar → falando), -er → -endo (comer → comendo), -ir → -indo (partir → partindo).',
        examples: [
          { target: 'falando, comendo, partindo', de: 'sprechend, essend, abfahrend' },
        ],
      },
      {
        heading: 'estar + Gerúndio = die normale Verlaufsform',
        body:
          'Im brasilianischen Alltag sagt man für „gerade tun" ganz selbstverständlich estar + Gerúndio: estou ' +
          'fazendo, ele está comendo, nós estamos estudando — genau wie im Englischen „I am doing".',
        examples: [
          { target: 'Estou fazendo o jantar agora.', de: 'Ich mache gerade das Abendessen.' },
          { target: 'O que você está fazendo?', de: 'Was machst du gerade?' },
        ],
      },
      {
        heading: 'Unterschied zum europäischen Portugiesisch',
        body:
          'Europäisches Portugiesisch vermeidet das Gerúndio hier meistens und sagt stattdessen estar a + ' +
          'Infinitivo (estou a fazer). Im brasilianischen Standard, den dieser Kurs lehrt, ist estar + Gerúndio ' +
          'die dominante, alltägliche Form.',
        examples: [
          { target: 'Ele está comendo uma pizza enorme.', de: 'Er isst gerade eine riesige Pizza.' },
        ],
      },
    ],
  },
  {
    id: 'demonstrativos',
    icon: 'pointer',
    title: 'Demonstrativpronomen (este, esse, aquele)',
    level: 'A2',
    intro: 'Drei Entfernungsstufen statt zwei wie im Deutschen — plus neutrale Formen für Sachverhalte.',
    sections: [
      {
        heading: 'Drei Entfernungsstufen',
        body:
          'este/esta/estes/estas: nahe bei mir (der sprechenden Person). esse/essa/esses/essas: nahe bei dir (der ' +
          'angesprochenen Person). aquele/aquela/aqueles/aquelas: weit von uns beiden entfernt.',
        examples: [
          { target: 'Este livro aqui na minha mão é novo.', de: 'Dieses Buch hier in meiner Hand ist neu.' },
          { target: 'Essa camisa que você está vestindo é bonita.', de: 'Das Hemd, das du trägst, ist schön.' },
          { target: 'Aquele prédio ali, bem longe, é o mais alto da cidade.', de: 'Jenes Gebäude dort drüben ist das höchste der Stadt.' },
        ],
      },
      {
        heading: 'Die neutralen Formen isto, isso, aquilo',
        body: 'Sie ersetzen kein bestimmtes Nomen, sondern einen ganzen Sachverhalt oder etwas Unbenanntes, und folgen derselben Dreiteilung.',
        examples: [
          { target: 'O que é isso?', de: 'Was ist das (bei dir)?' },
          { target: 'Isto aqui é muito interessante!', de: 'Das hier ist sehr interessant!' },
        ],
      },
      {
        heading: 'Im Alltag: este und esse verschwimmen',
        body:
          'Im gesprochenen brasilianischen Alltag benutzen viele Leute „esse" für beides, este und esse, und ' +
          'verzichten auf die feine Unterscheidung. Hier wird trotzdem die saubere, standardsprachliche ' +
          'Dreiteilung geübt.',
        examples: [
          { target: 'Esse aqui é o meu celular. (Alltagssprache statt „este")', de: 'Das hier ist mein Handy.' },
        ],
      },
    ],
  },
  {
    id: 'tempo-ha-desde',
    icon: 'timer',
    title: 'Há, desde und durante',
    level: 'A2',
    intro: 'Drei kleine Wörter für Zeit – und ein há mit zwei ganz unterschiedlichen Bedeutungen.',
    sections: [
      {
        heading: 'há = „vor" und „es gibt"',
        body: 'Mit einer abgeschlossenen Handlung heißt há „vor": Cheguei há dois anos (Ich kam vor zwei Jahren an). há bedeutet außerdem „es gibt".',
        examples: [
          { target: 'Cheguei ao Brasil há dois anos.', de: 'Ich bin vor zwei Jahren in Brasilien angekommen.' },
          { target: 'Há um restaurante muito bom perto daqui.', de: 'Es gibt hier in der Nähe ein sehr gutes Restaurant.' },
        ],
      },
      {
        heading: 'há = „seit X Zeit" (andauernd) vs. desde = Startpunkt',
        body:
          'Mit dem Präsens und einer andauernden Handlung bedeutet há „seit X Zeit", ähnlich dem englischen ' +
          '„for": Moro aqui há dois anos. desde markiert dagegen den konkreten Startpunkt: desde 2015, desde que ' +
          '+ Satz.',
        examples: [
          { target: 'Moro em São Paulo há dois anos e ainda moro aqui.', de: 'Ich wohne seit zwei Jahren in São Paulo (und wohne immer noch hier).' },
          { target: 'Moro em São Paulo desde 2015.', de: 'Ich wohne seit 2015 in São Paulo.' },
        ],
      },
      {
        heading: 'durante = während/für die Dauer von',
        body: 'durante beschreibt eine begrenzte Zeitspanne, ohne unbedingt bis jetzt anzudauern.',
        examples: [
          { target: 'Viajamos durante três semanas pelo nordeste.', de: 'Wir sind drei Wochen lang durch den Nordosten gereist.' },
        ],
      },
    ],
  },

  // ══════════════════════════════ B1 ══════════════════════════════
  {
    id: 'condicional',
    icon: 'chat',
    title: 'Futuro do pretérito (condicional)',
    level: 'B1',
    intro: 'Die Höflichkeitsform der portugiesischen Verben – und das Tor zu Hypothesen.',
    sections: [
      {
        heading: 'Bildung',
        body:
          'Infinitiv + ia/ia/ia/íamos/iam/iam: falaria, comeria, partiria; nós falaríamos, falariam. Wie immer ' +
          'nimmt „você" die Form von „ele/ela".',
        examples: [
          { target: 'Nós iríamos à festa, mas estamos cansados.', de: 'Wir würden zur Party gehen, aber wir sind müde.' },
        ],
      },
      {
        heading: 'Höflichkeit',
        body: 'poderia (könnten Sie/könntest du) und gostaria de (ich möchte gerne) sind die zwei häufigsten höflichen Ausdrücke.',
        examples: [
          { target: 'Você poderia me ajudar com isso?', de: 'Könntest du mir dabei helfen?' },
          { target: 'Eu gostaria de um café, por favor.', de: 'Ich möchte gerne einen Kaffee, bitte.' },
        ],
      },
      {
        heading: 'Hypothesen und unregelmäßige Stämme',
        body:
          'In Hypothesen (se + imperfeito do subjuntivo, siehe später) steht das condicional im Hauptsatz: Se eu ' +
          'tivesse mais dinheiro, eu viajaria mais. Dieselben drei Verben, die im futuro simples einen eigenen ' +
          'Stamm haben, behalten ihn hier: fazer → faria, dizer → diria, trazer → traria.',
        examples: [
          { target: 'Se eu tivesse mais dinheiro, eu viajaria pelo mundo.', de: 'Wenn ich mehr Geld hätte, würde ich um die Welt reisen.' },
          { target: 'Eu faria qualquer coisa por você.', de: 'Ich würde alles für dich tun.' },
        ],
      },
    ],
  },
  {
    id: 'mais-que-perfeito',
    icon: 'back',
    title: 'Mais-que-perfeito',
    level: 'B1',
    intro: 'Die Vorvergangenheit: eine Handlung, die schon abgeschlossen war, bevor etwas anderes in der Vergangenheit passierte.',
    sections: [
      {
        heading: 'Bildung',
        body: 'tinha/tinha/tínhamos/tinham + Partizip. Das ist die alltägliche, zusammengesetzte Form.',
        examples: [
          { target: 'Quando eu cheguei, ele já tinha saído.', de: 'Als ich ankam, war er schon gegangen.' },
          { target: 'Nós já tínhamos comido quando ela chegou.', de: 'Wir hatten schon gegessen, als sie ankam.' },
        ],
      },
      {
        heading: 'Wann benutzt man es',
        body: 'Immer wenn es um zwei Vergangenheitshandlungen geht und eine davon schon vorher abgeschlossen war.',
        examples: [
          { target: 'Eu nunca tinha visto um lugar tão bonito.', de: 'Ich hatte noch nie einen so schönen Ort gesehen.' },
        ],
      },
      {
        heading: 'Die literarische Form',
        body:
          'Eine einfache (synthetische) Form existiert auch: falara, comera, partira. Sie ist korrekt, aber ' +
          'selten – man findet sie vor allem in literarischen Texten, im Alltag benutzt fast niemand sie.',
        examples: [
          { target: 'Ele falara a verdade antes de morrer. (literarisch, selten)', de: 'Er hatte die Wahrheit gesagt, bevor er starb.' },
        ],
      },
    ],
  },
  {
    id: 'voz-passiva',
    icon: 'refresh',
    title: 'Voz passiva',
    level: 'B1',
    intro: 'Wenn das Subjekt die Handlung erleidet statt sie auszuführen – plus eine typisch brasilianische Alternative.',
    sections: [
      {
        heading: 'Bildung und Übereinstimmung',
        body: 'ser + Partizip; das Partizip stimmt in Genus und Numerus mit dem Subjekt überein.',
        examples: [
          { target: 'O livro foi escrito por um autor famoso.', de: 'Das Buch wurde von einem berühmten Autor geschrieben.' },
          { target: 'As casas foram construídas em 2010.', de: 'Die Häuser wurden 2010 gebaut.' },
        ],
      },
      {
        heading: 'Aktiv vs. Passiv',
        body: 'Aktiv betont, wer handelt; Passiv betont, was geschieht.',
        examples: [
          { target: 'Machado de Assis escreveu o livro. (Aktiv)', de: 'Machado de Assis schrieb das Buch.' },
          { target: 'O livro foi escrito por Machado de Assis. (Passiv)', de: 'Das Buch wurde von Machado de Assis geschrieben.' },
        ],
      },
      {
        heading: 'Informelle Alternative: se und a gente',
        body:
          'Im Alltag ersetzt man das Passiv oft durch „se" + Verb oder „a gente" + aktivem Verb — weniger ' +
          'formell, aber sehr verbreitet.',
        examples: [
          { target: 'Fala-se muito português no Brasil.', de: 'In Brasilien wird viel Portugiesisch gesprochen.' },
          { target: 'A gente faz muito churrasco aqui.', de: 'Hier wird viel gegrillt (wörtlich: wir machen viel Grillfleisch).' },
        ],
      },
    ],
  },
  {
    id: 'discurso-indireto',
    icon: 'speech',
    title: 'Discurso indireto',
    level: 'B1',
    intro: 'Wenn man wiedergibt, was jemand gesagt hat, verschiebt sich die Zeitform.',
    sections: [
      {
        heading: 'Präsens → imperfeito',
        body: 'Was direkt im Präsens gesagt wurde, steht in der indirekten Rede im imperfeito.',
        examples: [
          { target: '"Estou cansado." → Ele disse que estava cansado.', de: '„Ich bin müde." → Er sagte, er sei müde.' },
        ],
      },
      {
        heading: 'ir + Infinitiv → ia + Infinitiv',
        body: 'Die nahe Zukunft mit vou verschiebt sich auf ia.',
        examples: [
          { target: '"Vou viajar amanhã." → Ela disse que ia viajar no dia seguinte.', de: '„Ich reise morgen." → Sie sagte, sie werde am nächsten Tag reisen.' },
        ],
      },
      {
        heading: 'Pretérito perfeito → mais-que-perfeito, und indirekte Fragen',
        body: 'Eine abgeschlossene Handlung verschiebt sich auf das mais-que-perfeito. Dieselbe Verschiebung gilt auch in indirekten Fragen.',
        examples: [
          { target: '"Comi tudo." → Ele disse que tinha comido tudo.', de: '„Ich habe alles gegessen." → Er sagte, er habe alles gegessen.' },
          { target: '"Onde você mora?" → Ele perguntou onde eu morava.', de: '„Wo wohnst du?" → Er fragte, wo ich wohne.' },
        ],
      },
    ],
  },
  {
    id: 'oracoes-condicionais',
    icon: 'shuffle',
    title: 'Orações condicionais com se',
    level: 'B1',
    intro: 'Zwei Welten: die reale Bedingung mit dem Präsens und die hypothetische mit dem imperfeito do subjuntivo.',
    sections: [
      {
        heading: 'Reale/allgemeine Bedingung',
        body: 'se + presente do indicativo → presente/futuro, für allgemeine Wahrheiten, Gewohnheiten und realistische Möglichkeiten.',
        examples: [
          { target: 'Se chove muito, as ruas ficam alagadas.', de: 'Wenn es stark regnet, stehen die Straßen unter Wasser.' },
          { target: 'Se eu tenho tempo livre, eu vou à praia.', de: 'Wenn ich Freizeit habe, gehe ich an den Strand.' },
        ],
      },
      {
        heading: 'Hypothetische/irreale Bedingung',
        body: 'se + imperfeito do subjuntivo → condicional, für etwas, das (noch) nicht wahr ist oder unwahrscheinlich ist.',
        examples: [
          { target: 'Se eu tivesse mais dinheiro, eu viajaria pelo mundo.', de: 'Wenn ich mehr Geld hätte, würde ich um die Welt reisen.' },
          { target: 'Se ela soubesse a verdade, ficaria muito triste.', de: 'Wenn sie die Wahrheit wüsste, wäre sie sehr traurig.' },
        ],
      },
      {
        heading: 'Das imperfeito do subjuntivo kurz vorgestellt',
        body:
          'Regelmäßig: -ar → -asse (falasse), -er → -esse (comesse), -ir → -isse (partisse). Wichtige ' +
          'Unregelmäßige: fosse (ser/ir), tivesse (ter), estivesse (estar), pudesse (poder), soubesse (saber). ' +
          'Eine eigene Lektion vertieft diese Zeitform später.',
        examples: [
          { target: 'Se nós falássemos mais português, aprenderíamos mais rápido.', de: 'Wenn wir mehr Portugiesisch sprechen würden, würden wir schneller lernen.' },
        ],
      },
    ],
  },
  {
    id: 'por-para',
    icon: 'swap',
    title: 'Por e para',
    level: 'B1',
    intro: 'Zwei Wörter für „für", aber mit klar unterschiedlichen Aufgaben.',
    sections: [
      {
        heading: 'para: Zweck, Ziel, Empfänger, Frist',
        body: 'para steht vor dem Grund, warum man etwas tut, vor dem Empfänger und vor einer Frist.',
        examples: [
          { target: 'Estudo português para viajar ao Brasil.', de: 'Ich lerne Portugiesisch, um nach Brasilien zu reisen.' },
          { target: 'Preciso terminar esse relatório para sexta-feira.', de: 'Ich muss diesen Bericht bis Freitag fertig haben.' },
        ],
      },
      {
        heading: 'por: Grund, Tausch, räumlich „durch"',
        body: 'por steht vor der Ursache einer Handlung, bei einem Tausch und räumlich für „durch/vorbei an".',
        examples: [
          { target: 'Fiquei em casa por causa da chuva.', de: 'Ich bin wegen des Regens zu Hause geblieben.' },
          { target: 'Troquei meu carro antigo por uma moto.', de: 'Ich habe mein altes Auto gegen ein Motorrad getauscht.' },
        ],
      },
      {
        heading: 'Feste Wendungen',
        body: 'por favor (bitte), por isso (deshalb), para sempre (für immer) — diese muss man einfach auswendig lernen.',
        examples: [
          { target: 'Por favor, me ajude com isso.', de: 'Bitte hilf mir dabei.' },
          { target: 'Vou te amar para sempre.', de: 'Ich werde dich für immer lieben.' },
        ],
      },
    ],
  },
  {
    id: 'pronomes-relativos',
    icon: 'knot',
    title: 'Pronomes relativos',
    level: 'B1',
    intro: 'Sätze verbinden: que als Allrounder, quem nach Präpositionen, cujo für „dessen/deren" und onde für den Ort.',
    sections: [
      {
        heading: 'que: der Allrounder',
        body: 'que bezieht sich auf Personen und Dinge, als Subjekt oder Objekt des Nebensatzes.',
        examples: [
          { target: 'O livro que comprei ontem é muito bom.', de: 'Das Buch, das ich gestern gekauft habe, ist sehr gut.' },
          { target: 'A mulher que mora ao lado é médica.', de: 'Die Frau, die nebenan wohnt, ist Ärztin.' },
        ],
      },
      {
        heading: 'quem: nur nach Präpositionen',
        body: 'quem bezieht sich auf Personen und steht immer nach einer Präposition wie com, para oder de.',
        examples: [
          { target: 'O amigo com quem eu viajei é muito legal.', de: 'Der Freund, mit dem ich gereist bin, ist sehr nett.' },
        ],
      },
      {
        heading: 'cujo/cuja und onde',
        body:
          'cujo/cuja bedeutet „dessen/deren" und stimmt mit dem NACHFOLGENDEN Nomen überein, nicht mit dem Wort ' +
          'davor. onde bezieht sich auf einen Ort.',
        examples: [
          { target: 'O escritor cujo livro ganhou o prêmio é brasileiro.', de: 'Der Schriftsteller, dessen Buch den Preis gewann, ist Brasilianer.' },
          { target: 'Essa é a cidade onde eu nasci.', de: 'Das ist die Stadt, wo ich geboren wurde.' },
        ],
      },
    ],
  },
  {
    id: 'subjuntivo',
    icon: 'thought',
    title: 'Subjuntivo presente',
    level: 'B1',
    intro: 'Die Möglichkeitsform für Wunsch, Meinung, Gefühl und Zweifel — und wann man stattdessen den Indikativ oder den Infinitiv braucht.',
    sections: [
      {
        heading: 'Bildung',
        body:
          '-ar-Verben → e/e/emos/em/em: fale, fale, falemos, falem. -er/-ir-Verben → a/a/amos/am/am: coma, coma, ' +
          'comamos, comam; parta, parta, partamos, partam. Grundregel: eu-Form des Präsens, -o weg, Endung dran — ' +
          'faço → faça, posso → possa, digo → diga.',
        examples: [
          { target: 'Quero que você fale mais devagar.', de: 'Ich möchte, dass du langsamer sprichst.' },
          { target: 'Talvez ele faça o trabalho hoje.', de: 'Vielleicht macht er die Arbeit heute.' },
        ],
      },
      {
        heading: 'Echte Ausnahmen',
        body:
          'Sechs Verben folgen NICHT der Regel „eu-Form minus -o": ser → seja, estar → esteja, dar → dê, querer → ' +
          'queira, haver → haja, ir → vá.',
        examples: [
          { target: 'Embora ela seja jovem, já tem muita experiência.', de: 'Obwohl sie jung ist, hat sie schon viel Erfahrung.' },
          { target: 'Quero que eles estejam aqui na hora certa.', de: 'Ich möchte, dass sie pünktlich hier sind.' },
        ],
      },
      {
        heading: 'Wann subjuntivo?',
        body:
          'Nach Wunsch, Meinung, Gefühl und Zweifel: quero que, espero que, é importante que, tenho medo que. Nach ' +
          'bestimmten Konjunktionen: para que, embora, a menos que, caso.',
        examples: [
          { target: 'Espero que vocês gostem da viagem.', de: 'Ich hoffe, dass euch die Reise gefällt.' },
          { target: 'A menos que você tenha outra ideia, vamos fazer assim.', de: 'Es sei denn, du hast eine andere Idee, machen wir es so.' },
        ],
      },
      {
        heading: 'Subjuntivo oder Indikativ?',
        body:
          'Wird etwas als Tatsache dargestellt (acho que, acredito que, sei que), steht der Indikativ. Wird Zweifel ' +
          'oder eine verneinte Meinung ausgedrückt (não acho que, não é verdade que, duvido que), steht der ' +
          'subjuntivo. Haben Haupt- und Nebensatz dasselbe Subjekt, benutzt man den Infinitiv statt „que + ' +
          'subjuntivo": quero saber (nicht „quero que eu saiba").',
        examples: [
          { target: 'Acho que ele tem razão.', de: 'Ich glaube, er hat recht.' },
          { target: 'Não acho que ele tenha razão.', de: 'Ich glaube nicht, dass er recht hat.' },
          { target: 'Quero saber a verdade.', de: 'Ich will die Wahrheit wissen.' },
        ],
      },
    ],
  },
  {
    id: 'subjuntivo-imperfeito',
    icon: 'sparkles',
    title: 'Imperfeito do subjuntivo',
    level: 'B1',
    intro: 'Die Form für Hypothesen und Irreales — „wenn ich reich wäre …".',
    sections: [
      {
        heading: 'Bildung',
        body:
          '3. Person Plural des pretérito perfeito, „-ram" weg, „-sse/-sse/-ssemos/-ssem/-ssem" dran: falaram → ' +
          'falasse, comeram → comesse, partiram → partisse.',
        examples: [
          { target: 'Se nós falássemos mais devagar, eles entenderiam melhor.', de: 'Wenn wir langsamer sprechen würden, würden sie uns besser verstehen.' },
        ],
      },
      {
        heading: 'Wichtige Unregelmäßige',
        body: 'foram → fosse (ser/ir), tiveram → tivesse (ter), puderam → pudesse (poder), souberam → soubesse (saber), quiseram → quisesse (querer), estiveram → estivesse (estar).',
        examples: [
          { target: 'Se eu fosse rico, viajaria o mundo todo.', de: 'Wenn ich reich wäre, würde ich die ganze Welt bereisen.' },
          { target: 'Se eles soubessem a verdade, ficariam chocados.', de: 'Wenn sie die Wahrheit wüssten, wären sie schockiert.' },
        ],
      },
      {
        heading: 'Hypothetische se-Sätze',
        body: 'se + imperfeito do subjuntivo → condicional, für etwas Unwahrscheinliches oder (noch) nicht Wahres.',
        examples: [
          { target: 'Se ela pudesse, ela ajudaria.', de: 'Wenn sie könnte, würde sie helfen.' },
        ],
      },
      {
        heading: 'In der indirekten Rede',
        body:
          'Stand die Originalaussage im subjuntivo presente, verschiebt sich das in der indirekten Rede auf das ' +
          'imperfeito do subjuntivo: „que eu venha" → „que eu viesse".',
        examples: [
          { target: 'Ele pediu que eu viesse mais cedo.', de: 'Er bat mich, früher zu kommen.' },
          { target: 'Ela queria que nós comêssemos tudo.', de: 'Sie wollte, dass wir alles aufessen.' },
        ],
      },
    ],
  },
  {
    id: 'futuro-subjuntivo',
    icon: 'forward',
    title: 'Futuro do subjuntivo',
    level: 'B1',
    intro: 'Eine Zeitform, die es im Deutschen nicht gibt – und die im Alltag ständig vorkommt, wenn man über die Zukunft spricht.',
    sections: [
      {
        heading: 'Bildung (regelmäßig)',
        body:
          'Derselbe Stamm wie beim imperfeito do subjuntivo, aber mit r-Endungen: falar, falar, falarmos, falarem, ' +
          'falarem. Bei regelmäßigen Verben sieht das identisch aus wie der persönliche Infinitiv.',
        examples: [
          { target: 'Se você precisar de ajuda, me avise.', de: 'Falls du Hilfe brauchst, sag mir Bescheid.' },
          { target: 'Quando nós chegarmos em casa, vamos jantar.', de: 'Wenn wir zu Hause ankommen, essen wir Abendbrot.' },
        ],
      },
      {
        heading: 'Unregelmäßige Stämme',
        body:
          'ser/ir → for, estar → estiver, ter → tiver, fazer → fizer, dizer → disser, poder → puder, querer → ' +
          'quiser, trazer → trouxer, vir → vier, pôr → puser, saber → souber, dar → der, haver → houver.',
        examples: [
          { target: 'Quando eu for ao Rio, te ligo.', de: 'Wenn ich (in Zukunft) nach Rio fahre, rufe ich dich an.' },
          { target: 'Assim que ele puder, vai te ligar.', de: 'Sobald er kann, wird er dich anrufen.' },
        ],
      },
      {
        heading: 'Wann benutzt man es',
        body: 'Nach quando, se, enquanto, assim que, logo que, wenn es um ein zukünftiges Ereignis geht.',
        examples: [
          { target: 'Logo que vocês fizerem a prova, me avisem.', de: 'Sobald ihr die Prüfung gemacht habt, sagt mir Bescheid.' },
        ],
      },
      {
        heading: 'Der klassische Fehler',
        body:
          'Deutsch und Englisch benutzen hier ganz einfach das Präsens („wenn ich fahre …"). Portugiesisch braucht ' +
          'den futuro do subjuntivo — und das auch im ganz normalen, alltäglichen gesprochenen Brasilianisch, ' +
          'nicht nur in formeller Sprache.',
        examples: [
          { target: 'Quando você vier ao Brasil, me avise.', de: 'Wenn du nach Brasilien kommst, sag mir Bescheid.' },
        ],
      },
    ],
  },
  {
    id: 'infinitivo-pessoal',
    icon: 'user',
    title: 'Infinitivo pessoal',
    level: 'B1',
    intro: 'Der Infinitiv bekommt manchmal Endungen – und bei „você" ist das anders als man denken könnte.',
    sections: [
      {
        heading: 'Bildung',
        body:
          'Der persönliche Infinitiv bekommt Endungen, wenn sein Subjekt vom Subjekt des Hauptsatzes abweicht: ' +
          'falar, falar, falarmos, falarem, falarem.',
        examples: [
          { target: 'Para nós conversarmos com calma, vamos sair para tomar um café.', de: 'Damit wir in Ruhe reden können, gehen wir einen Kaffee trinken.' },
        ],
      },
      {
        heading: 'Wann benutzt man ihn',
        body: 'Nach Präpositionen, wenn das Subjekt des Nebensatzes anders ist als im Hauptsatz: antes de, para, até, depois de, sem.',
        examples: [
          { target: 'Antes de eu saber a resposta, não posso decidir.', de: 'Bevor ich die Antwort weiß, kann ich nicht entscheiden.' },
          { target: 'É importante estudarmos todos os dias.', de: 'Es ist wichtig, dass wir jeden Tag lernen.' },
        ],
      },
      {
        heading: 'Der Fall „você" — ganz wichtig im BR',
        body:
          'Weil „você" grammatisch die 3. Person ist, nimmt der persönliche Infinitiv bei „você" die UNVERÄNDERTE ' +
          '3.-Person-Form „falar" — NICHT „falares" (das wäre die „tu"-Form, die es in diesem Kurs nicht gibt). ' +
          'Also: para você falar, niemals „para você falares".',
        examples: [
          { target: 'Para você falar com ele, basta ligar.', de: 'Damit du mit ihm sprichst, reicht es anzurufen.' },
          { target: 'É melhor você descansar um pouco antes da viagem.', de: 'Es ist besser, wenn du dich etwas ausruhst, bevor es losgeht.' },
        ],
      },
    ],
  },
  {
    id: 'pronomes-combinados',
    icon: 'puzzle',
    title: 'Pronomes combinados',
    level: 'B1',
    intro: 'Zwei Objektpronomen können zu einem Wort verschmelzen — aber in Brasilien hört man das so gut wie nie.',
    sections: [
      {
        heading: 'Die Kombinationen',
        body: 'me+o/a/os/as → mo/ma/mos/mas · te+o/a/os/as → to/ta/tos/tas · lhe(s)+o/a/os/as → lho/lha/lhos/lhas · nos+o/a/os/as → no-lo/no-la/no-los/no-las.',
        examples: [
          { target: 'Prometeram-me o carro, e finalmente mo deram.', de: '(literarisch) Sie versprachen mir das Auto und gaben es mir schließlich.' },
        ],
      },
      {
        heading: 'Ehrlich gesagt: kaum benutzt',
        body:
          'Im gesprochenen brasilianischen Portugiesisch werden diese Formen so gut wie NIE benutzt — noch seltener ' +
          'als im europäischen Portugiesisch. Man lernt sie zum Wiedererkennen (ältere oder sehr formelle/' +
          'literarische Texte), nicht zum aktiven Benutzen.',
        examples: [
          { target: 'Dei-lho no dia do aniversário dele.', de: '(literarisch, selten) Ich gab es ihm an seinem Geburtstag.' },
        ],
      },
      {
        heading: 'Wie man es im Alltag wirklich sagt',
        body:
          'Statt zu kombinieren, trennt man die Pronomen oder lässt das direkte Objektpronomen einfach weg: „ele me ' +
          'deu" statt „ele deu-mo"; „eu te empresto o carro" statt „empresto-to".',
        examples: [
          { target: 'Ele me deu o presente.', de: 'Er gab mir das Geschenk. (normal gesprochen, statt „deu-mo")' },
        ],
      },
    ],
  },
  {
    id: 'colocacao-pronominal',
    icon: 'target',
    title: 'Colocação pronominal: Brasilien vs. Portugal',
    level: 'B1',
    intro: 'Der wichtigste BR-spezifische Punkt in diesem Kapitel: Brasilien stellt das Pronomen fast immer VOR das Verb.',
    sections: [
      {
        heading: 'Próklise: der brasilianische Standard',
        body:
          'Im gesprochenen (und meist auch geschriebenen) Alltags-Brasilianisch steht das Objektpronomen fast immer ' +
          'VOR dem Verb — sogar am Satzanfang, was im geschriebenen europäischen Portugiesisch unüblich ist, in ' +
          'Brasilien aber völlig normal: Me chama de Ana, Te vejo depois, Nos vemos lá.',
        examples: [
          { target: 'Me chama de Ana.', de: 'Nenn mich Ana.' },
          { target: 'Te vejo depois!', de: 'Ich sehe dich später!' },
          { target: 'Ela me ajudou ontem.', de: 'Sie hat mir gestern geholfen.' },
        ],
      },
      {
        heading: 'Énklise: selten, eher formell/literarisch',
        body:
          'Die Nachstellung des Pronomens (mit Bindestrich, z. B. chamavam-me) ist in Brasilien möglich, aber vor ' +
          'allem eine Sache der formellen Schriftsprache. Im gesprochenen Brasilien ist sie viel seltener als im ' +
          'europäischen Portugiesisch, das sie standardmäßig benutzt.',
        examples: [
          { target: 'Chamavam-me de doutor, embora eu não fosse médico. (eher formell/literarisch)', de: 'Sie nannten mich Doktor, obwohl ich kein Arzt war.' },
        ],
      },
      {
        heading: 'Mesóklise: gibt es in Brasilien praktisch nicht',
        body:
          'Die Mesóklise (das Pronomen MITTEN im Verb, z. B. dir-lhe-ei, chamar-se-á) ist eine rein europäische ' +
          'Besonderheit beim futuro simples und condicional. Im brasilianischen Portugiesisch benutzt man stattdessen ' +
          'ganz normal die Próklise, auch in diesen Zeitformen.',
        examples: [
          { target: 'Eu lhe direi a verdade mais tarde.', de: 'Ich werde dir später die Wahrheit sagen. (BR: Próklise, nie „dir-lhe-ei")' },
        ],
      },
      {
        heading: 'Der direkte Vergleich',
        body:
          'Europäisches Portugiesisch: Standard ist Énklise (chamo-me, vejo-te), Próklise nur nach bestimmten ' +
          'Auslösern (Verneinung, Fragewörter, Konjunktionen), Mesóklise im Futur/Konditional. Brasilianisches ' +
          'Portugiesisch dieses Kurses: fast immer Próklise, auch am Satzanfang und im Futur — Énklise ist die ' +
          'Ausnahme, Mesóklise kommt praktisch nicht vor.',
        examples: [
          { target: 'BR: Me chama de Ana. / PT: Chama-me Ana.', de: 'Beide heißen „Nenn mich Ana", aber mit umgekehrter Pronomenstellung.' },
        ],
      },
    ],
  },
  {
    id: 'pronomes-indefinidos',
    icon: 'question',
    title: 'Pronomes indefinidos',
    level: 'B1',
    intro: 'Von „irgendein" bis „niemand" — manche passen sich an, manche bleiben immer gleich.',
    sections: [
      {
        heading: 'algum, nenhum, qualquer, cada, todo',
        body:
          'algum/nenhum/todo passen sich in Genus und Numerus an (alguma pergunta, nenhuma pessoa, todos os ' +
          'alunos). qualquer ändert nur die Zahl, nicht das Geschlecht (Plural: quaisquer). cada bleibt immer im ' +
          'Singular, unveränderlich.',
        examples: [
          { target: 'Qualquer aluno pode escolher o tema.', de: 'Jeder beliebige Schüler darf das Thema wählen.' },
          { target: 'Cada estudante recebeu um certificado.', de: 'Jeder Student hat ein Zertifikat erhalten.' },
        ],
      },
      {
        heading: 'algo, alguém, nada, ninguém — immer unveränderlich',
        body: 'algo und nada beziehen sich auf Sachen, alguém und ninguém auf Personen. Alle vier ändern sich nie.',
        examples: [
          { target: 'Alguém me avisou sobre a mudança de horário.', de: 'Jemand hat mich über die Zeitänderung informiert.' },
          { target: 'Não aconteceu nada de especial.', de: 'Es ist nichts Besonderes passiert.' },
        ],
      },
      {
        heading: 'outro und mesmo',
        body: 'Beide passen sich wie normale Adjektive an das Nomen an.',
        examples: [
          { target: 'Prefiro outro restaurante; este aqui é muito caro.', de: 'Ich mag lieber ein anderes Restaurant; dieses hier ist sehr teuer.' },
          { target: 'As mesmas pessoas sempre reclamam.', de: 'Die gleichen Leute beschweren sich immer.' },
        ],
      },
    ],
  },
  {
    id: 'adverbios',
    icon: 'zap',
    title: 'Advérbios em -mente',
    level: 'B1',
    intro: 'Aus Adjektiven werden Adverbien — mit einer einfachen Regel und zwei kleinen Fallstricken.',
    sections: [
      {
        heading: 'Bildung',
        body:
          '-mente wird an die feminine Form des Adjektivs gehängt: rápida → rapidamente, clara → claramente. ' +
          'Adjektive ohne eigene feminine Form (auf -e oder -l) ändern sich nicht: frequente → frequentemente, ' +
          'normal → normalmente.',
        examples: [
          { target: 'Ela fala muito rapidamente.', de: 'Sie spricht sehr schnell.' },
          { target: 'Ela viaja frequentemente a trabalho.', de: 'Sie reist häufig geschäftlich.' },
        ],
      },
      {
        heading: 'Vorsicht beim Akzent',
        body: 'Ein Akzent, den das Adjektiv trägt (wie bei fácil), fällt im Adverb weg: fácil → facilmente, nicht „fácilmente".',
        examples: [
          { target: 'Ele resolveu o problema facilmente.', de: 'Er löste das Problem leicht.' },
        ],
      },
      {
        heading: 'Zwei Adverbien hintereinander',
        body: 'Stehen zwei -mente-Adverbien direkt hintereinander, bekommt nur das letzte die Endung -mente.',
        examples: [
          { target: 'Ela resolveu o problema rápida e facilmente.', de: 'Sie löste das Problem schnell und einfach.' },
        ],
      },
      {
        heading: 'Position im Satz',
        body: 'Meistens steht das Adverb nach dem Verb oder am Satzanfang, oft mit Komma abgetrennt.',
        examples: [
          { target: 'Felizmente, ninguém se machucou no acidente.', de: 'Glücklicherweise wurde bei dem Unfall niemand verletzt.' },
        ],
      },
    ],
  },
  {
    id: 'verbos-pronominais',
    icon: 'mirror',
    title: 'Verbos pronominais',
    level: 'B1',
    intro: 'Reflexive Verben wie chamar-se und lembrar-se — und wie man das Pronomen im Brasilianischen stellt.',
    sections: [
      {
        heading: 'Typische pronominale Verben',
        body: 'chamar-se (heißen), levantar-se (aufstehen), queixar-se (sich beschweren), lembrar-se de (sich erinnern an), esquecer-se de (vergessen).',
        examples: [
          { target: 'Eu me chamo Pedro.', de: 'Ich heiße Pedro.' },
          { target: 'Ela sempre se esquece das chaves.', de: 'Sie vergisst immer ihre Schlüssel.' },
        ],
      },
      {
        heading: 'Stellung: Próklise, wie im ganzen BR-Standard',
        body:
          'Wie im vorigen Kapitel gezeigt, steht das Pronomen im brasilianischen Portugiesisch vor dem Verb: eu me ' +
          'chamo — NICHT „chamo-me", wie es europäisches Portugiesisch sagen würde.',
        examples: [
          { target: 'Nós nos queixamos do atendimento.', de: 'Wir haben uns über den Service beschwert.' },
        ],
      },
      {
        heading: 'Mit Modalverb oder Infinitiv',
        body: 'Auch vor einem Infinitiv steht das Pronomen im gesprochenen Brasilien meist davor.',
        examples: [
          { target: 'Preciso me levantar mais cedo amanhã.', de: 'Ich muss morgen früher aufstehen.' },
        ],
      },
    ],
  },
  {
    id: 'quantidade',
    icon: 'chart',
    title: 'Muito, pouco, bastante, demais',
    level: 'B1',
    intro: 'Mengenwörter, die mal Adjektiv und mal Adverb sind — mit unterschiedlichen Regeln.',
    sections: [
      {
        heading: 'Als Adjektiv: passt sich an',
        body: 'Vor einem Nomen passen sich muito, pouco und bastante in Genus und Numerus an: muitos amigos, pouca gente, muitas vezes.',
        examples: [
          { target: 'Tenho muitos amigos no Brasil.', de: 'Ich habe viele Freunde in Brasilien.' },
          { target: 'Há pouco tempo para terminar tudo.', de: 'Es gibt wenig Zeit, um alles zu beenden.' },
        ],
      },
      {
        heading: 'Als Adverb: unveränderlich',
        body: 'Vor einem Adjektiv oder nach einem Verb bleiben muito, pouco, bastante und demais immer gleich.',
        examples: [
          { target: 'Esse filme é muito interessante.', de: 'Dieser Film ist sehr interessant.' },
          { target: 'Ele comeu demais e ficou com dor de barriga.', de: 'Er hat zu viel gegessen und hatte Bauchschmerzen.' },
        ],
      },
      {
        heading: 'Kurze Wiederholung',
        body: 'algum und vários passen sich wie gewohnt an das Nomen an: algum dinheiro, vários amigos.',
        examples: [
          { target: 'Convidei vários amigos para a festa.', de: 'Ich habe mehrere Freunde zur Party eingeladen.' },
        ],
      },
    ],
  },
];
