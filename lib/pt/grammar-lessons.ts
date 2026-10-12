import type { GrammarLesson } from '../grammar-lessons';

// ─── Portuguese (pt-PT) grammar lessons ─────────────────────────────────────────
// MVP: 11 short lessons for A1 and the start of A2, written in German. Each one
// is the "learn it" page for the cloze set in lib/pt/grammar-exercises.ts with
// the matching `lessonId`. European Portuguese throughout.

export const GRAMMAR_LESSONS: GrammarLesson[] = [
  // ══════════════════════════════ A1 ══════════════════════════════
  {
    id: 'artikel',
    icon: '🔤',
    title: 'Artikel & Plural (o, a, um, uma)',
    level: 'A1',
    intro: 'Zwei Geschlechter, vier bestimmte Artikel – und Artikel, die mit Präpositionen verschmelzen.',
    sections: [
      {
        heading: 'Bestimmt und unbestimmt',
        body: 'Bestimmt: o (m.), a (f.), os (m. Pl.), as (f. Pl.). Unbestimmt: um, uma, uns, umas. Anders als im Deutschen steht der Artikel oft auch vor Vornamen und Possessiven: o João, a minha casa.',
        examples: [
          { target: 'o livro / a mesa', de: 'das Buch / der Tisch' },
          { target: 'um amigo / uma amiga', de: 'ein Freund / eine Freundin' },
          { target: 'A Ana mora no Porto.', de: 'Ana wohnt in Porto.' },
        ],
      },
      {
        heading: 'Der Plural',
        body: 'Meist einfach -s: casa → casas. Nach -r, -z und -s: -es (mulher → mulheres). -m wird zu -ns (homem → homens), -l zu -is (animal → animais). Wörter auf -ão bilden den Plural meistens mit -ões, einige mit -ães oder -ãos – am besten mitlernen.',
        examples: [
          { target: 'a estação → as estações', de: 'der Bahnhof → die Bahnhöfe' },
          { target: 'o pão → os pães', de: 'das Brot → die Brote' },
          { target: 'a mão → as mãos', de: 'die Hand → die Hände' },
        ],
      },
      {
        heading: 'Verschmelzungen mit de, em und a',
        body: 'de + o/a/os/as = do, da, dos, das · em + o/a/os/as = no, na, nos, nas · a + o/a/os/as = ao, à, aos, às. Auch mit dem unbestimmten Artikel: em + um = num, em + uma = numa. Städte wie Lisboa haben keinen Artikel (de Lisboa), o Porto schon (do Porto).',
        examples: [
          { target: 'Sou do Porto, mas moro em Lisboa.', de: 'Ich bin aus Porto, wohne aber in Lissabon.' },
          { target: 'Vou ao mercado e depois à praia.', de: 'Ich gehe zum Markt und dann zum Strand.' },
          { target: 'Trabalho num hotel.', de: 'Ich arbeite in einem Hotel.' },
        ],
      },
    ],
  },
  {
    id: 'ser-estar-ter',
    icon: '⚖️',
    title: 'Ser, Estar & Ter (sein & haben)',
    level: 'A1',
    intro: 'Das Deutsche hat ein „sein“, das Portugiesische zwei – dazu ter für „haben“.',
    sections: [
      {
        heading: 'ser = sein (dauerhaft, Identität)',
        body: 'sou, és, é, somos, são (vocês/eles). Für Namen, Herkunft, Nationalität, Beruf, Charakter, Material, Uhrzeit und Datum.',
        examples: [
          { target: 'Sou o Paulo, sou alemão.', de: 'Ich bin Paulo, ich bin Deutscher.' },
          { target: 'A Rita é professora.', de: 'Rita ist Lehrerin.' },
          { target: 'São duas horas.', de: 'Es ist zwei Uhr.' },
        ],
      },
      {
        heading: 'estar = sein (Zustand, Ort)',
        body: 'estou, estás, está, estamos, estão. Für Zustände und Gefühle, die sich ändern können, und für den Ort von Personen und Dingen. In Portugal auch für die Verlaufsform: estar a + Infinitiv.',
        examples: [
          { target: 'Estou cansada.', de: 'Ich bin müde.' },
          { target: 'Onde está o meu telemóvel?', de: 'Wo ist mein Handy?' },
          { target: 'Estamos a jantar.', de: 'Wir sind gerade beim Abendessen.' },
        ],
      },
      {
        heading: 'ter = haben',
        body: 'tenho, tens, tem, temos, têm. Wie im Italienischen steht ter beim Alter und bei Hunger, Durst, Angst, Kälte usw. Achtung: tem (er hat) und têm (sie haben) unterscheiden sich nur durch den Zirkumflex.',
        examples: [
          { target: 'Tenho trinta anos.', de: 'Ich bin dreißig (wörtl.: habe 30 Jahre).' },
          { target: 'Tens fome? / Tenho sede.', de: 'Hast du Hunger? / Ich habe Durst.' },
        ],
      },
    ],
  },
  {
    id: 'praesens',
    icon: '⏺️',
    title: 'Präsens (presente do indicativo)',
    level: 'A1',
    intro: 'Drei Verbgruppen auf -ar, -er und -ir – mit fast gleichen Endungen.',
    sections: [
      {
        heading: 'Die regelmäßigen Endungen',
        body: 'falar: falo, falas, fala, falamos, falam · comer: como, comes, come, comemos, comem · partir: parto, partes, parte, partimos, partem. Das Subjektpronomen wird oft weggelassen, die Endung zeigt die Person.',
        examples: [
          { target: 'Falo um pouco de português.', de: 'Ich spreche ein bisschen Portugiesisch.' },
          { target: 'Comemos às oito.', de: 'Wir essen um acht.' },
          { target: 'Vives em Lisboa?', de: 'Wohnst du in Lissabon?' },
        ],
      },
      {
        heading: 'tu, você und vocês',
        body: 'tu (du) ist in Portugal die normale vertraute Anrede. Höflich spricht man mit o senhor / a senhora (oder você) – mit der Verbform der 3. Person Singular. Die Mehrzahl „ihr“ ist vocês und nimmt die Form der 3. Person Plural.',
        examples: [
          { target: 'Tu trabalhas aqui?', de: 'Arbeitest du hier?' },
          { target: 'O senhor trabalha aqui?', de: 'Arbeiten Sie hier?' },
          { target: 'Vocês trabalham aqui?', de: 'Arbeitet ihr hier?' },
        ],
      },
      {
        heading: 'Häufige unregelmäßige Verben',
        body: 'fazer: faço, fazes, faz, fazemos, fazem · querer: quero, queres, quer, queremos, querem · ir: vou, vais, vai, vamos, vão.',
        examples: [
          { target: 'O que fazes hoje?', de: 'Was machst du heute?' },
          { target: 'Quero um café, por favor.', de: 'Ich möchte einen Kaffee, bitte.' },
          { target: 'Vamos à praia?', de: 'Gehen wir an den Strand?' },
        ],
      },
    ],
  },
  {
    id: 'possessiv',
    icon: '👜',
    title: 'Possessivpronomen (meu, teu, seu …)',
    level: 'A1',
    intro: 'Das Possessiv passt sich dem Besitz an – nicht dem Besitzer.',
    sections: [
      {
        heading: 'Die Formen',
        body: 'meu/minha/meus/minhas (mein) · teu/tua/teus/tuas (dein) · seu/sua/seus/suas (Ihr, sein/ihr) · nosso/nossa/nossos/nossas (unser). Entscheidend ist das Geschlecht des Nomens: Auch ein Mann sagt „a minha casa“.',
        examples: [
          { target: 'o meu pai / a minha mãe', de: 'mein Vater / meine Mutter' },
          { target: 'os teus amigos / as tuas amigas', de: 'deine Freunde / deine Freundinnen' },
        ],
      },
      {
        heading: 'Mit Artikel',
        body: 'In Portugal steht vor dem Possessiv normalerweise der bestimmte Artikel – und der verschmilzt dann mit Präpositionen.',
        examples: [
          { target: 'A nossa casa é pequena.', de: 'Unser Haus ist klein.' },
          { target: 'Falo com o meu irmão.', de: 'Ich spreche mit meinem Bruder.' },
          { target: 'o carro da minha irmã', de: 'das Auto meiner Schwester' },
        ],
      },
      {
        heading: 'seu oder dele/dela?',
        body: 'seu/sua bezieht sich in Portugal vor allem auf die höfliche Anrede („Ihr“). Für „sein“ und „ihr“ sagt man meist dele, dela, deles, delas – nach dem Nomen. So ist auch klar, wem etwas gehört.',
        examples: [
          { target: 'O senhor tem o seu bilhete?', de: 'Haben Sie Ihre Fahrkarte?' },
          { target: 'o livro dele / o livro dela', de: 'sein Buch / ihr Buch' },
        ],
      },
    ],
  },
  {
    id: 'fragen',
    icon: '❓',
    title: 'Fragen & Verneinung',
    level: 'A1',
    intro: 'Fragewörter, Fragen ohne Umstellung und das kleine Wort não.',
    sections: [
      {
        heading: 'Die Fragewörter',
        body: 'que / o que (was), quem (wer), onde (wo), quando (wann), como (wie), quanto/quanta (wie viel), quantos/quantas (wie viele), qual (welche/r), porque (warum). Steht „warum“ allein oder am Satzende, schreibt man porquê.',
        examples: [
          { target: 'Como te chamas?', de: 'Wie heißt du?' },
          { target: 'Quantos anos tens?', de: 'Wie alt bist du?' },
          { target: '— Não posso. — Porquê?', de: '— Ich kann nicht. — Warum?' },
        ],
      },
      {
        heading: 'Fragen bilden',
        body: 'Ja/Nein-Fragen entstehen nur durch die Satzmelodie – die Wortstellung bleibt gleich. Sehr typisch für Portugal: „é que“ nach dem Fragewort.',
        examples: [
          { target: 'Falas inglês?', de: 'Sprichst du Englisch?' },
          { target: 'Onde é que moras?', de: 'Wo wohnst du?' },
          { target: 'O que é que queres?', de: 'Was willst du?' },
        ],
      },
      {
        heading: 'Verneinung und Antworten',
        body: 'não steht direkt vor dem Verb. Mit nada, ninguém, nunca gibt es eine doppelte Verneinung. Auf Ja/Nein-Fragen antwortet man oft einfach mit dem Verb statt mit „sim“.',
        examples: [
          { target: 'Não falo francês.', de: 'Ich spreche kein Französisch.' },
          { target: 'Não percebo nada.', de: 'Ich verstehe nichts.' },
          { target: '— Tens tempo? — Tenho.', de: '— Hast du Zeit? — Ja.' },
        ],
      },
    ],
  },
  {
    id: 'adjektive',
    icon: '🎨',
    title: 'Adjektive',
    level: 'A1',
    intro: 'Adjektive richten sich nach dem Nomen – und stehen meistens dahinter.',
    sections: [
      {
        heading: 'Angleichung',
        body: 'Adjektive auf -o haben vier Formen: novo, nova, novos, novas. Adjektive auf -e oder Konsonant (grande, feliz, fácil) haben nur Singular und Plural. Nationalitäten auf -ês bilden die weibliche Form mit -esa.',
        examples: [
          { target: 'um carro novo / uma casa nova', de: 'ein neues Auto / ein neues Haus' },
          { target: 'um homem feliz / uma mulher feliz', de: 'ein glücklicher Mann / eine glückliche Frau' },
          { target: 'o vinho português / a comida portuguesa', de: 'der portugiesische Wein / das portugiesische Essen' },
        ],
      },
      {
        heading: 'Der Plural',
        body: 'Wie bei den Nomen: meistens -s, nach Konsonant -es (feliz → felizes), -l wird zu -is (azul → azuis, fácil → fáceis), -ês wird zu -eses (português → portugueses).',
        examples: [
          { target: 'as camisas azuis', de: 'die blauen Hemden' },
          { target: 'Os exercícios são fáceis.', de: 'Die Übungen sind leicht.' },
        ],
      },
      {
        heading: 'Die Stellung',
        body: 'Normalerweise steht das Adjektiv hinter dem Nomen. Ein paar kurze, häufige Adjektive stehen oft davor: bom, mau, novo (im Sinn von „noch einmal“), grande (im Sinn von „bedeutend“).',
        examples: [
          { target: 'uma cidade bonita', de: 'eine schöne Stadt' },
          { target: 'um bom amigo', de: 'ein guter Freund' },
          { target: 'um grande escritor', de: 'ein großer (bedeutender) Schriftsteller' },
        ],
      },
    ],
  },

  // ══════════════════════════════ A2 ══════════════════════════════
  {
    id: 'preterito-perfeito',
    icon: '⏮️',
    title: 'Pretérito perfeito simples (Vergangenheit)',
    level: 'A2',
    intro: 'Die Erzählzeit des Portugiesischen – ein Wort, wo das Deutsche „habe gemacht“ sagt.',
    sections: [
      {
        heading: 'Die regelmäßigen Formen',
        body: 'falar: falei, falaste, falou, falámos, falaram · comer: comi, comeste, comeu, comemos, comeram · partir: parti, partiste, partiu, partimos, partiram. In Portugal unterscheidet der Akzent falámos (Vergangenheit) von falamos (Präsens).',
        examples: [
          { target: 'Ontem falei com a minha mãe.', de: 'Gestern habe ich mit meiner Mutter gesprochen.' },
          { target: 'Comemos bacalhau ao almoço.', de: 'Wir haben mittags Kabeljau gegessen.' },
          { target: 'O comboio partiu às oito.', de: 'Der Zug ist um acht abgefahren.' },
        ],
      },
      {
        heading: 'Wichtige Unregelmäßige',
        body: 'ser und ir haben dieselben Formen: fui, foste, foi, fomos, foram. fazer: fiz, fizeste, fez, fizemos, fizeram · ter: tive, tiveste, teve, tivemos, tiveram · estar: estive, estiveste, esteve, estivemos, estiveram.',
        examples: [
          { target: 'No sábado fomos ao cinema.', de: 'Am Samstag sind wir ins Kino gegangen.' },
          { target: 'O que fizeste nas férias?', de: 'Was hast du in den Ferien gemacht?' },
        ],
      },
      {
        heading: 'Achtung: kein „haben + Partizip“',
        body: 'Für eine abgeschlossene Handlung benutzt man immer das pretérito perfeito simples – auch im Gespräch. Die Form „tenho falado“ gibt es, sie bedeutet aber etwas anderes: etwas wiederholt sich bis heute („in letzter Zeit“).',
        examples: [
          { target: 'Hoje comprei pão.', de: 'Heute habe ich Brot gekauft.' },
          { target: 'Tenho estudado muito.', de: 'Ich lerne in letzter Zeit viel.' },
        ],
      },
    ],
  },
  {
    id: 'imperfeito',
    icon: '🕰️',
    title: 'Pretérito imperfeito',
    level: 'A2',
    intro: 'Die Vergangenheit für Gewohnheiten, Beschreibungen und den Hintergrund.',
    sections: [
      {
        heading: 'Die Formen',
        body: 'falar: falava, falavas, falava, falávamos, falavam · comer / partir: comia, comias, comia, comíamos, comiam. Nur vier Unregelmäßige: ser (era), ter (tinha), vir (vinha), pôr (punha).',
        examples: [
          { target: 'Antigamente vivíamos em Faro.', de: 'Früher wohnten wir in Faro.' },
          { target: 'O meu avô era pescador.', de: 'Mein Großvater war Fischer.' },
        ],
      },
      {
        heading: 'imperfeito oder perfeito?',
        body: 'imperfeito: was sich wiederholte, wie etwas war, was gerade lief. perfeito: was einmal passierte und abgeschlossen ist. Oft stehen beide in einem Satz: der Hintergrund im imperfeito, das Ereignis im perfeito.',
        examples: [
          { target: 'Todos os verões íamos ao Algarve.', de: 'Jeden Sommer fuhren wir an die Algarve.' },
          { target: 'No verão passado fomos ao Algarve.', de: 'Letzten Sommer sind wir an die Algarve gefahren.' },
          { target: 'Lia um livro quando o telefone tocou.', de: 'Ich las ein Buch, als das Telefon klingelte.' },
        ],
      },
      {
        heading: 'Höflich bitten',
        body: 'Im Alltag ersetzt das imperfeito oft den Konditional – vor allem beim Bestellen und Bitten.',
        examples: [
          { target: 'Queria um café, por favor.', de: 'Ich hätte gern einen Kaffee, bitte.' },
          { target: 'Podia ajudar-me?', de: 'Könnten Sie mir helfen?' },
        ],
      },
    ],
  },
  {
    id: 'futuro',
    icon: '⏭️',
    title: 'Futur (futuro simples & ir + Infinitiv)',
    level: 'A2',
    intro: 'Über die Zukunft spricht man auf drei Arten – im Alltag meistens mit ir.',
    sections: [
      {
        heading: 'futuro simples',
        body: 'An den ganzen Infinitiv werden die Endungen -ei, -ás, -á, -emos, -ão gehängt: falarei, comerás, partirá. Unregelmäßig sind nur fazer (farei), dizer (direi) und trazer (trarei). Die Form klingt eher schriftlich oder förmlich.',
        examples: [
          { target: 'Amanhã falarei com o diretor.', de: 'Morgen werde ich mit dem Direktor sprechen.' },
          { target: 'O que farás depois do curso?', de: 'Was wirst du nach dem Kurs machen?' },
        ],
      },
      {
        heading: 'ir + Infinitiv',
        body: 'Im Gespräch die übliche Form: vou, vais, vai, vamos, vão + Infinitiv – wie „gehen + Infinitiv“ im Englischen.',
        examples: [
          { target: 'Vou estudar esta noite.', de: 'Ich werde heute Abend lernen.' },
          { target: 'Vai chover.', de: 'Es wird regnen.' },
          { target: 'Vamos apanhar o autocarro.', de: 'Wir nehmen (gleich) den Bus.' },
        ],
      },
      {
        heading: 'Das Präsens für Pläne',
        body: 'Wie im Deutschen reicht für feste Pläne oft das Präsens mit einer Zeitangabe.',
        examples: [
          { target: 'Amanhã vou ao Porto.', de: 'Morgen fahre ich nach Porto.' },
          { target: 'O comboio parte às oito.', de: 'Der Zug fährt um acht ab.' },
        ],
      },
    ],
  },
  {
    id: 'imperativ',
    icon: '📣',
    title: 'Imperativ (Befehlsform)',
    level: 'A2',
    intro: 'Bitten und Aufforderungen an tu und vocês.',
    sections: [
      {
        heading: 'tu: wie die 3. Person Präsens',
        body: 'Der bejahte Imperativ für tu ist gleich der Form „er/sie“ im Präsens: fala!, come!, parte!. Einige Unregelmäßige: faz!, vai!, vem!, diz!',
        examples: [
          { target: 'Fala mais devagar, por favor!', de: 'Sprich bitte langsamer!' },
          { target: 'Come a sopa!', de: 'Iss die Suppe!' },
          { target: 'Vem cá!', de: 'Komm her!' },
        ],
      },
      {
        heading: 'vocês: Vokal tauschen',
        body: 'Für vocês nimmt man den Konjunktiv Präsens: Verben auf -ar bekommen -em, Verben auf -er/-ir bekommen -am. Unregelmäßig: façam, vão, venham, digam. Dieselben Formen im Singular (fale!, coma!) gelten für die höfliche Anrede o senhor / a senhora.',
        examples: [
          { target: 'Meninos, falem mais baixo!', de: 'Kinder, sprecht leiser!' },
          { target: 'Abram os livros na página dez.', de: 'Macht die Bücher auf Seite zehn auf.' },
          { target: 'Espere aqui, por favor.', de: 'Warten Sie bitte hier.' },
        ],
      },
      {
        heading: 'Verneint',
        body: 'Verneint wird auch für tu der Konjunktiv benutzt – also nicht „não fala!“, sondern „não fales!“. Das kommt in einer späteren Lektion genauer.',
        examples: [
          { target: 'Não fales tão alto!', de: 'Sprich nicht so laut!' },
          { target: 'Não comam isso!', de: 'Esst das nicht!' },
        ],
      },
    ],
  },
  {
    id: 'objektpronomen',
    icon: '🎯',
    title: 'Objektpronomen (o, a, lhe …)',
    level: 'A2',
    intro: 'Kleine Wörter für „ihn, sie, ihm, ihnen“ – damit man nichts doppelt sagen muss.',
    sections: [
      {
        heading: 'Direktes Objekt: o, a, os, as',
        body: 'Ersetzt das Akkusativobjekt (wen oder was?): o (ihn/es), a (sie/es), os, as (sie, Plural). Für „mich, dich, uns“: me, te, nos.',
        examples: [
          { target: 'O Pedro? Não o conheço.', de: 'Pedro? Den kenne ich nicht.' },
          { target: 'As chaves? Não as encontro.', de: 'Die Schlüssel? Ich finde sie nicht.' },
        ],
      },
      {
        heading: 'Indirektes Objekt: lhe, lhes',
        body: 'Ersetzt das Dativobjekt (wem?) – meist eine Person nach a: lhe (ihm/ihr, auch „Ihnen“), lhes (ihnen). Achtung: einige Verben sind anders als im Deutschen, z. B. telefonar a alguém (indirekt), aber ajudar alguém (direkt).',
        examples: [
          { target: 'Ainda não lhe telefonei.', de: 'Ich habe ihn/sie noch nicht angerufen.' },
          { target: 'Já lhes mostrei o caminho.', de: 'Ich habe ihnen schon den Weg gezeigt.' },
        ],
      },
      {
        heading: 'Vor oder hinter dem Verb?',
        body: 'Nach não, nunca, já, ainda, também, ninguém, nach Fragewörtern und nach que steht das Pronomen vor dem Verb – das üben wir hier. Im einfachen bejahten Hauptsatz hängt es in Portugal dagegen mit Bindestrich hinten dran: vejo-o, conheço-a, dou-te.',
        examples: [
          { target: 'Não o vejo.', de: 'Ich sehe ihn nicht.' },
          { target: 'Vejo-o todos os dias.', de: 'Ich sehe ihn jeden Tag.' },
        ],
      },
    ],
  },
];
