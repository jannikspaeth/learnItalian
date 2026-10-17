import type { GrammarLesson } from '../grammar-lessons';

// ─── Portuguese (pt-PT) grammar lessons ─────────────────────────────────────────
// Short lessons for A1–B1, written in German. Each one
// is the "learn it" page for the cloze set in lib/pt/grammar-exercises.ts with
// the matching `lessonId`. European Portuguese throughout.

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
    icon: 'scale',
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
    icon: 'dot',
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
    icon: 'bag',
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
    icon: 'question',
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
    icon: 'palette',
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
    icon: 'back',
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
    icon: 'clock',
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
    icon: 'forward',
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
    icon: 'megaphone',
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
    icon: 'target',
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
  {
    id: 'comparativos',
    icon: 'ruler',
    title: 'Vergleiche (mais, menos, tão … como)',
    level: 'A2',
    intro: 'Größer, kleiner, genauso groß – und der/die/das Größte.',
    sections: [
      {
        heading: 'mais / menos … (do) que',
        body: 'Für „mehr“ oder „weniger“ steht mais bzw. menos vor dem Adjektiv, „als“ heißt do que (oder einfach que). Das funktioniert auch mit Nomen und Verben.',
        examples: [
          { target: 'O comboio é mais rápido do que o autocarro.', de: 'Der Zug ist schneller als der Bus.' },
          { target: 'No inverno há menos turistas do que no verão.', de: 'Im Winter gibt es weniger Touristen als im Sommer.' },
          { target: 'Ele trabalha mais do que eu.', de: 'Er arbeitet mehr als ich.' },
        ],
      },
      {
        heading: 'Gleichheit: tão … como, tanto … como',
        body: 'Vor Adjektiven und Adverbien: tão … como („so … wie“). Vor Nomen richtet sich tanto nach dem Nomen: tanto, tanta, tantos, tantas … como. Nach einem Verb: tanto como.',
        examples: [
          { target: 'A Ana é tão alta como a irmã.', de: 'Ana ist so groß wie ihre Schwester.' },
          { target: 'Tenho tantos livros como tu.', de: 'Ich habe so viele Bücher wie du.' },
          { target: 'Não como tanto como tu.', de: 'Ich esse nicht so viel wie du.' },
        ],
      },
      {
        heading: 'Superlativ und unregelmäßige Formen',
        body: 'Der Superlativ ist Artikel + mais/menos + Adjektiv, „von/in“ heißt de: a cidade mais bonita do país. Vier Adjektive haben eigene Formen: bom → melhor, mau → pior, grande → maior, pequeno → menor. In Portugal sagt man bei der Größe aber auch ganz normal mais pequeno. „Mais bom“ und „mais grande“ gibt es nicht.',
        examples: [
          { target: 'Este é o melhor restaurante da cidade.', de: 'Das ist das beste Restaurant der Stadt.' },
          { target: 'A tua casa é maior do que a minha.', de: 'Dein Haus ist größer als meins.' },
          { target: 'O Rui é o mais novo da família.', de: 'Rui ist der Jüngste der Familie.' },
        ],
      },
    ],
  },
  {
    id: 'preposicoes',
    icon: 'compass',
    title: 'Präpositionen (a, de, em, com, para, por)',
    level: 'A2',
    intro: 'Die kleinen Wörter für Ort, Richtung, Herkunft und Begleitung.',
    sections: [
      {
        heading: 'a, em, de: wohin, wo, woher',
        body: 'a = Richtung (vou a Lisboa), em = Ort (estou em Lisboa), de = Herkunft (sou de Lisboa). Für einen längeren Aufenthalt nimmt man statt a oft para: vou para Paris (ich ziehe nach Paris). Achtung: chegar a – man kommt „an“ etwas an, nicht „in“.',
        examples: [
          { target: 'Vou a Lisboa no sábado.', de: 'Ich fahre am Samstag nach Lissabon.' },
          { target: 'Moro em Coimbra.', de: 'Ich wohne in Coimbra.' },
          { target: 'Chegámos ao aeroporto às seis.', de: 'Wir sind um sechs am Flughafen angekommen.' },
        ],
      },
      {
        heading: 'com, de, para, por im Alltag',
        body: 'com = mit (Begleitung). Verkehrsmittel mit de: de comboio, de autocarro, de carro – aber a pé (zu Fuß). para = für / nach (Empfänger, Ziel). por = durch, über, für (Grund) – der Unterschied zwischen por und para kommt in einer eigenen B1-Lektion.',
        examples: [
          { target: 'Vou ao trabalho de autocarro.', de: 'Ich fahre mit dem Bus zur Arbeit.' },
          { target: 'Janto com os meus amigos.', de: 'Ich esse mit meinen Freunden zu Abend.' },
          { target: 'Este presente é para ti.', de: 'Dieses Geschenk ist für dich.' },
        ],
      },
      {
        heading: 'Wiederholung: die Verschmelzungen',
        body: 'a + o/a/os/as = ao, à, aos, às · de + o/a/os/as = do, da, dos, das · em + o/a/os/as = no, na, nos, nas · por + o/a/os/as = pelo, pela, pelos, pelas. Die Uhrzeit steht mit a + as: às oito.',
        examples: [
          { target: 'O telemóvel está na mesa.', de: 'Das Handy liegt auf dem Tisch.' },
          { target: 'É o carro do meu pai.', de: 'Das ist das Auto meines Vaters.' },
          { target: 'A aula começa às nove.', de: 'Der Unterricht beginnt um neun.' },
        ],
      },
    ],
  },
  {
    id: 'estar-a-infinitivo',
    icon: 'refresh',
    title: 'Verlaufsform (estar a + Infinitiv)',
    level: 'A2',
    intro: 'Was gerade passiert – so, wie man es in Portugal sagt.',
    sections: [
      {
        heading: 'Die Bildung',
        body: 'estar (estou, estás, está, estamos, estão) + a + Infinitiv. Das entspricht dem englischen „I am working“ oder dem deutschen „ich bin gerade am Arbeiten“. Das Verb nach a bleibt immer im Infinitiv.',
        examples: [
          { target: 'Estou a trabalhar.', de: 'Ich arbeite gerade.' },
          { target: 'O que estás a fazer?', de: 'Was machst du gerade?' },
          { target: 'Está a chover.', de: 'Es regnet (gerade).' },
        ],
      },
      {
        heading: 'Portugal vs. Brasilien',
        body: 'In Brasilien sagt man „estou trabalhando“ – mit dem Gerundium auf -ndo. In Portugal ist das im Alltag unüblich und klingt sofort brasilianisch. Merke dir: in Portugal immer estar a + Infinitiv, nie estar + -ndo.',
        examples: [
          { target: 'Estou a ler um livro. (PT)', de: 'Ich lese gerade ein Buch. (Portugal)' },
          { target: 'Estou lendo um livro. (BR)', de: 'Dasselbe auf Brasilianisch – in Portugal vermeiden.' },
        ],
      },
      {
        heading: 'Gerade eben, in der Vergangenheit',
        body: 'Mit dem imperfeito von estar (estava, estavas, estava, estávamos, estavam) beschreibt man, was gerade lief, als etwas anderes passierte. Das Ereignis selbst steht im pretérito perfeito.',
        examples: [
          { target: 'Quando ligaste, estava a tomar banho.', de: 'Als du angerufen hast, war ich gerade beim Duschen.' },
          { target: 'Estávamos a jantar quando a luz se foi.', de: 'Wir waren beim Abendessen, als der Strom ausfiel.' },
        ],
      },
    ],
  },
  {
    id: 'demonstrativos',
    icon: 'pointer',
    title: 'Demonstrativpronomen (este, esse, aquele)',
    level: 'A2',
    intro: 'Drei Entfernungen statt zwei: hier bei mir, da bei dir, dort drüben.',
    sections: [
      {
        heading: 'Die drei Stufen',
        body: 'este/esta/estes/estas: nah beim Sprecher (aqui). esse/essa/esses/essas: nah beim Angesprochenen (aí). aquele/aquela/aqueles/aquelas: weit weg von beiden (ali, lá). Wie Adjektive richten sie sich nach dem Nomen.',
        examples: [
          { target: 'Este livro aqui é meu.', de: 'Dieses Buch hier gehört mir.' },
          { target: 'Essa camisola é nova?', de: 'Ist der Pullover (den du anhast) neu?' },
          { target: 'Vês aquela casa lá em cima?', de: 'Siehst du das Haus da oben?' },
        ],
      },
      {
        heading: 'Neutral: isto, isso, aquilo',
        body: 'Für Dinge, die man nicht benennt oder nicht kennt, gibt es unveränderliche Formen: isto (das hier), isso (das da bei dir), aquilo (das dort). Sehr häufig: Isso mesmo! (Genau!), Isso é verdade.',
        examples: [
          { target: 'O que é isto?', de: 'Was ist das (hier)?' },
          { target: 'O que é isso que tens aí?', de: 'Was hast du da?' },
          { target: 'Aquilo ali é o castelo.', de: 'Das dort ist die Burg.' },
        ],
      },
      {
        heading: 'Mit de und em verschmolzen',
        body: 'de und em verschmelzen mit allen Formen: deste, desta, desse, daquele, disto … / neste, nessa, naquele, nisso … Zeitlich steht aquele oft für lange Vergangenes, este für die Gegenwart: este ano, naquele tempo.',
        examples: [
          { target: 'Moro nesta rua desde criança.', de: 'Ich wohne seit meiner Kindheit in dieser Straße.' },
          { target: 'Lembras-te daquele verão?', de: 'Erinnerst du dich an jenen Sommer?' },
          { target: 'Não penso nisso.', de: 'Daran denke ich nicht.' },
        ],
      },
    ],
  },
  {
    id: 'tempo-ha-desde',
    icon: 'hourglass',
    title: 'Zeitangaben (há, desde, durante)',
    level: 'A2',
    intro: '„Vor“, „seit“ und „während“ – drei kleine Wörter, die Deutsche oft verwechseln.',
    sections: [
      {
        heading: 'há = vor … / es gibt',
        body: 'há ist eine Form von haver. Mit Vergangenheit und einem Zeitraum heißt es „vor“: há três dias = vor drei Tagen. Allein heißt há „es gibt“ (siehe auch die Lektion Ser, Estar & Ter) – in Portugal sagt man dafür nicht „tem“.',
        examples: [
          { target: 'Cheguei há três dias.', de: 'Ich bin vor drei Tagen angekommen.' },
          { target: 'Há muitos turistas em Sintra.', de: 'Es gibt viele Touristen in Sintra.' },
        ],
      },
      {
        heading: '„seit“: há + Zeitraum, desde + Zeitpunkt',
        body: 'Dauert etwas noch an, steht wie im Deutschen das Präsens – nicht das Perfekt! Mit einem Zeitraum (zwei Jahre, eine Woche) nimmt man há, mit einem Zeitpunkt (2019, Januar, Kindheit) desde.',
        examples: [
          { target: 'Estudo português há dois anos.', de: 'Ich lerne seit zwei Jahren Portugiesisch.' },
          { target: 'Moro no Porto desde 2019.', de: 'Ich wohne seit 2019 in Porto.' },
          { target: 'Estamos à espera há meia hora.', de: 'Wir warten seit einer halben Stunde.' },
        ],
      },
      {
        heading: 'durante = während, … lang',
        body: 'durante nennt einen Zeitraum, in dem etwas passiert (ist) – abgeschlossen oder nicht. Es entspricht „während“ oder „… lang“.',
        examples: [
          { target: 'Dormi durante a viagem toda.', de: 'Ich habe die ganze Fahrt über geschlafen.' },
          { target: 'Choveu durante a tarde toda.', de: 'Es hat den ganzen Nachmittag geregnet.' },
        ],
      },
    ],
  },

  // ══════════════════════════════ B1 ══════════════════════════════
  {
    id: 'condicional',
    icon: 'brain',
    title: 'Konditional (condicional)',
    level: 'B1',
    intro: 'Die „würde“-Form: für höfliche Bitten, Wünsche und Gedankenspiele.',
    sections: [
      {
        heading: 'Bildung',
        body: 'Wie das Futur: an den ganzen Infinitiv werden Endungen gehängt – -ia, -ias, -ia, -íamos, -iam (vocês/eles). Dieselben drei Unregelmäßigen wie im Futur: fazer → faria, dizer → diria, trazer → traria.',
        examples: [
          { target: 'falaria, comerias, partiríamos', de: 'ich würde sprechen, du würdest essen, wir würden abreisen' },
          { target: 'Eu não diria isso.', de: 'Das würde ich nicht sagen.' },
        ],
      },
      {
        heading: 'Höflich bitten und wünschen',
        body: 'gostaria de … (ich würde gern …) und poderia …? (könnten Sie …?) sind besonders höflich. Im Alltag nimmt man in Portugal sehr oft das imperfeito statt des Konditionals: gostava de …, podia …? – beides ist richtig.',
        examples: [
          { target: 'Gostaria de reservar uma mesa para dois.', de: 'Ich würde gern einen Tisch für zwei reservieren.' },
          { target: 'Poderia fechar a janela, por favor?', de: 'Könnten Sie bitte das Fenster schließen?' },
          { target: 'Podia ajudar-me?', de: 'Könnten Sie mir helfen? (Alltag)' },
        ],
      },
      {
        heading: 'Hypothesen und Rat',
        body: 'Was unter anderen Umständen passieren würde: com mais tempo …, no teu lugar … (an deiner Stelle). Mit einem se-Satz wird daraus der irreale Bedingungssatz (siehe Lektion Orações condicionais).',
        examples: [
          { target: 'Com mais dinheiro, compraríamos uma casa.', de: 'Mit mehr Geld würden wir ein Haus kaufen.' },
          { target: 'No teu lugar, eu não diria nada.', de: 'An deiner Stelle würde ich nichts sagen.' },
        ],
      },
      {
        heading: 'Zukunft in der Vergangenheit',
        body: 'Wenn man aus der Vergangenheit auf etwas Späteres blickt, steht ebenfalls der Konditional – typisch nach disse que. Und: In der Schriftsprache rücken Objektpronomen in die Mitte der Form (ajudar-me-ia); im Gespräch weicht man lieber aufs imperfeito aus (ajudava-me).',
        examples: [
          { target: 'Disseste que chegarias às oito.', de: 'Du hast gesagt, du würdest um acht ankommen.' },
          { target: 'Ele disse que me ajudaria.', de: 'Er sagte, er würde mir helfen.' },
        ],
      },
    ],
  },
  {
    id: 'mais-que-perfeito',
    icon: 'rewind',
    title: 'Plusquamperfekt (mais-que-perfeito)',
    level: 'B1',
    intro: '„Ich hatte schon gegessen“ – was vor einem anderen Ereignis in der Vergangenheit geschah.',
    sections: [
      {
        heading: 'Bildung: tinha + Partizip',
        body: 'imperfeito von ter (tinha, tinhas, tinha, tínhamos, tinham) + Partizip. Das Partizip endet auf -ado (-ar) bzw. -ido (-er/-ir) und bleibt unverändert. Unregelmäßig: fazer → feito, dizer → dito, ver → visto, escrever → escrito, pôr → posto, abrir → aberto, vir → vindo.',
        examples: [
          { target: 'Eu tinha falado com ela.', de: 'Ich hatte mit ihr gesprochen.' },
          { target: 'Tu já tinhas feito os trabalhos?', de: 'Hattest du die Hausaufgaben schon gemacht?' },
        ],
      },
      {
        heading: 'Wann?',
        body: 'Wenn zwei Dinge in der Vergangenheit passiert sind und man betonen will, dass das eine vorher abgeschlossen war. Typische Begleiter: já (schon), ainda não (noch nicht), nunca (nie) … antes.',
        examples: [
          { target: 'Quando cheguei, o comboio já tinha partido.', de: 'Als ich ankam, war der Zug schon abgefahren.' },
          { target: 'Nunca tínhamos visto o mar.', de: 'Wir hatten nie das Meer gesehen.' },
          { target: 'Estava triste porque tinha perdido o telemóvel.', de: 'Sie war traurig, weil sie ihr Handy verloren hatte.' },
        ],
      },
      {
        heading: 'Die einfache Form (falara)',
        body: 'Es gibt auch eine einfache, einwortige Form: falara, comera, partira. Sie kommt fast nur in Literatur und gehobener Schriftsprache vor – zum Erkennen genügt es. Selbst benutzt man im Alltag immer tinha + Partizip.',
        examples: [
          { target: 'Ele já partira quando ela chegou. (literarisch)', de: 'Er war schon abgereist, als sie ankam.' },
          { target: 'Ele já tinha partido quando ela chegou. (Alltag)', de: 'Dasselbe – so sagt man es.' },
        ],
      },
    ],
  },
  {
    id: 'voz-passiva',
    icon: 'repeat',
    title: 'Passiv (voz passiva)',
    level: 'B1',
    intro: 'Nicht wer etwas tut, sondern was mit etwas geschieht.',
    sections: [
      {
        heading: 'Aktiv und Passiv',
        body: 'Im Aktiv steht der Handelnde im Mittelpunkt (O Pedro pintou a casa), im Passiv das, womit etwas geschieht (A casa foi pintada pelo Pedro). Das Objekt des Aktivsatzes wird zum Subjekt.',
        examples: [
          { target: 'O Pedro pintou a casa.', de: 'Pedro hat das Haus gestrichen.' },
          { target: 'A casa foi pintada pelo Pedro.', de: 'Das Haus wurde von Pedro gestrichen.' },
        ],
      },
      {
        heading: 'Bildung: ser + Partizip',
        body: 'Wo das Deutsche „werden“ nimmt, steht ser – in jeder Zeit: é feito, foi feito, era feito, será feito. Anders als im Perfekt mit ter richtet sich das Partizip hier nach dem Subjekt: escrito, escrita, escritos, escritas.',
        examples: [
          { target: 'A carta foi escrita pela Ana.', de: 'Der Brief wurde von Ana geschrieben.' },
          { target: 'Os bolos foram feitos pela minha avó.', de: 'Die Kuchen wurden von meiner Großmutter gebacken.' },
          { target: 'O hospital será construído no próximo ano.', de: 'Das Krankenhaus wird nächstes Jahr gebaut.' },
        ],
      },
      {
        heading: 'Der Handelnde: por',
        body: '„von“ heißt im Passiv por, verschmolzen mit dem Artikel pelo, pela, pelos, pelas. Ist der Handelnde unwichtig, lässt man ihn weg. Im Alltag sagt man statt des Passivs oft einfach se: Vendem-se casas (Häuser zu verkaufen).',
        examples: [
          { target: 'O ladrão foi preso pela polícia.', de: 'Der Dieb wurde von der Polizei festgenommen.' },
          { target: 'A ponte foi inaugurada em 1966.', de: 'Die Brücke wurde 1966 eingeweiht.' },
          { target: 'Aqui fala-se português.', de: 'Hier wird Portugiesisch gesprochen.' },
        ],
      },
    ],
  },
  {
    id: 'discurso-indireto',
    icon: 'speech',
    title: 'Indirekte Rede (discurso indireto)',
    level: 'B1',
    intro: 'Erzählen, was jemand gesagt hat – mit einer Zeitstufe zurück.',
    sections: [
      {
        heading: 'Die Zeitverschiebung',
        body: 'Steht das einleitende Verb in der Vergangenheit (disse que, contou que, perguntou se), rückt die Zeit des Gesagten eine Stufe zurück: presente → imperfeito, pretérito perfeito → mais-que-perfeito (tinha + Partizip), futuro → condicional, vou + Infinitiv → ia + Infinitiv. Das Deutsche nimmt dafür den Konjunktiv, das Portugiesische nicht.',
        examples: [
          { target: '„Estou cansado.“ → Disse que estava cansado.', de: '„Ich bin müde.“ → Er sagte, er sei müde.' },
          { target: '„Perdi o comboio.“ → Disse que tinha perdido o comboio.', de: '„Ich habe den Zug verpasst.“ → Er sagte, er habe ihn verpasst.' },
          { target: '„Chegarei às oito.“ → Disse que chegaria às oito.', de: '„Ich komme um acht.“ → Er sagte, er komme um acht.' },
        ],
      },
      {
        heading: 'Auch Zeit- und Ortsangaben ändern sich',
        body: 'Wer später erzählt, passt Wörter an: hoje → naquele dia, amanhã → no dia seguinte, ontem → no dia anterior, aqui → ali. Ebenso Personen und Possessive: eu → ele/ela, meu → seu/dele.',
        examples: [
          { target: '„Vou ligar amanhã.“ → Disse que ia ligar no dia seguinte.', de: '„Ich rufe morgen an.“ → Sie sagte, sie rufe am nächsten Tag an.' },
        ],
      },
      {
        heading: 'Fragen und Aufforderungen',
        body: 'Ja/Nein-Fragen werden mit se (ob) eingeleitet, Fragen mit Fragewort behalten es. Aufforderungen gibt man am einfachsten mit para + Infinitiv wieder.',
        examples: [
          { target: 'Perguntou-me se eu queria um café.', de: 'Er fragte mich, ob ich einen Kaffee wolle.' },
          { target: 'Perguntou onde ficava a estação.', de: 'Er fragte, wo der Bahnhof sei.' },
          { target: 'A mãe disse-me para fechar a porta.', de: 'Die Mutter sagte mir, ich solle die Tür schließen.' },
        ],
      },
      {
        heading: 'Wann keine Verschiebung?',
        body: 'Steht das einleitende Verb im Präsens (diz que), bleibt die Zeit gleich. Gilt das Gesagte noch heute, hört man im Gespräch auch das Präsens: Ela disse que mora em Faro. Die Verschiebung ist aber nie falsch.',
        examples: [
          { target: 'Ele diz que está cansado.', de: 'Er sagt, er sei müde.' },
        ],
      },
    ],
  },
  {
    id: 'oracoes-condicionais',
    icon: 'shuffle',
    title: 'Bedingungssätze (orações condicionais)',
    level: 'B1',
    intro: '„Wenn …, dann …“ – real oder nur gedacht.',
    sections: [
      {
        heading: 'Reale Bedingung: se + presente',
        body: 'Gilt die Bedingung jetzt oder immer, steht in beiden Teilen das Präsens (oder im Hauptsatz ein Imperativ). Für Bedingungen in der Zukunft benutzt das Portugiesische meist eine eigene Form, das futuro do conjuntivo (se tiveres tempo …) – die kommt in einer eigenen Lektion.',
        examples: [
          { target: 'Se tens fome, há sopa no frigorífico.', de: 'Wenn du Hunger hast, gibt es Suppe im Kühlschrank.' },
          { target: 'Se misturas azul e amarelo, tens verde.', de: 'Wenn man Blau und Gelb mischt, bekommt man Grün.' },
          { target: 'Se estás cansado, vai dormir.', de: 'Wenn du müde bist, geh schlafen.' },
        ],
      },
      {
        heading: 'Irreale Bedingung: se + imperfeito do conjuntivo → condicional',
        body: 'Ist die Bedingung nur gedacht oder unwahrscheinlich, steht im se-Satz das imperfeito do conjuntivo, im Hauptsatz der Konditional – wie im Deutschen „Wenn ich Zeit hätte, würde ich …“.',
        examples: [
          { target: 'Se eu tivesse mais tempo, aprenderia a tocar guitarra.', de: 'Wenn ich mehr Zeit hätte, würde ich Gitarre lernen.' },
          { target: 'Se tu falasses mais devagar, eu perceberia tudo.', de: 'Wenn du langsamer sprächest, würde ich alles verstehen.' },
          { target: 'Se eu fosse tu, não diria nada.', de: 'Wenn ich du wäre, würde ich nichts sagen.' },
        ],
      },
      {
        heading: 'Kurz: das imperfeito do conjuntivo',
        body: 'Man nimmt die 3. Person Plural des pretérito perfeito, streicht -ram und hängt -sse, -sses, -sse, -ssemos, -ssem an: falaram → falasse, comeram → comesse, partiram → partisse. Bei nós kommt ein Akzent dazu (falássemos, comêssemos). So werden auch die Unregelmäßigen regelmäßig: tiveram → tivesse, foram → fosse, fizeram → fizesse, souberam → soubesse.',
        examples: [
          { target: 'Se nós morássemos perto do mar …', de: 'Wenn wir am Meer wohnten …' },
          { target: 'Se eles soubessem a verdade, ficariam furiosos.', de: 'Wenn sie die Wahrheit wüssten, wären sie wütend.' },
        ],
      },
      {
        heading: 'Im Alltag',
        body: 'Im Gespräch ersetzt das imperfeito oft den Konditional im Hauptsatz: Se tivesse dinheiro, comprava uma casa. Der se-Satz behält aber immer das imperfeito do conjuntivo.',
        examples: [
          { target: 'Se fizesse sol, íamos à praia.', de: 'Wenn die Sonne schiene, würden wir an den Strand gehen.' },
        ],
      },
    ],
  },
  {
    id: 'por-para',
    icon: 'swap',
    title: 'Por oder para?',
    level: 'B1',
    intro: 'Zwei Präpositionen, die beide manchmal „für“ heißen – aber nie dasselbe.',
    sections: [
      {
        heading: 'para: wohin, wofür, für wen',
        body: 'para zeigt nach vorn: Ziel und Richtung, Zweck („um zu“), Empfänger, Frist und Meinung („für mich“).',
        examples: [
          { target: 'O comboio para o Porto parte às dez.', de: 'Der Zug nach Porto fährt um zehn.' },
          { target: 'Estudo português para falar com os meus amigos.', de: 'Ich lerne Portugiesisch, um mit meinen Freunden zu sprechen.' },
          { target: 'O trabalho é para sexta-feira.', de: 'Die Arbeit ist bis Freitag fällig.' },
          { target: 'Para mim, é demasiado caro.', de: 'Für mich ist es zu teuer.' },
        ],
      },
      {
        heading: 'por: warum, wodurch, wo entlang',
        body: 'por blickt auf Ursache und Weg: Grund (obrigado por …), Mittel (por telefone), Preis und Tausch, Weg („durch, über“), ungefähre Zeit (por volta das oito) und der Handelnde im Passiv. Mit dem Artikel: pelo, pela, pelos, pelas.',
        examples: [
          { target: 'Obrigado pela ajuda!', de: 'Danke für die Hilfe!' },
          { target: 'Comprei o casaco por trinta euros.', de: 'Ich habe die Jacke für dreißig Euro gekauft.' },
          { target: 'Passámos por Coimbra.', de: 'Wir sind durch Coimbra gefahren.' },
          { target: 'Demos um passeio pelo parque.', de: 'Wir sind durch den Park spaziert.' },
        ],
      },
      {
        heading: 'Feste Wendungen',
        body: 'Einige Ausdrücke lernt man am besten als Ganzes: por favor (bitte), por isso (deshalb), por causa de (wegen), por exemplo, por acaso (zufällig), pela primeira vez · para sempre (für immer), para já (vorerst).',
        examples: [
          { target: 'Estou cansado, por isso vou para casa.', de: 'Ich bin müde, deshalb gehe ich nach Hause.' },
          { target: 'Fiquei em casa por causa da chuva.', de: 'Ich bin wegen des Regens zu Hause geblieben.' },
          { target: 'Vou amar-te para sempre.', de: 'Ich werde dich für immer lieben.' },
        ],
      },
    ],
  },
  {
    id: 'pronomes-relativos',
    icon: 'link',
    title: 'Relativpronomen (que, quem, cujo, onde)',
    level: 'B1',
    intro: 'Sätze verbinden: der, die, das, dessen, wo.',
    sections: [
      {
        heading: 'que – für fast alles',
        body: 'que bezieht sich auf Personen und Dinge, im Singular und Plural, und ist unveränderlich. Es ersetzt der/die/das/welche und darf – anders als im Englischen – nie weggelassen werden.',
        examples: [
          { target: 'O livro que estou a ler é ótimo.', de: 'Das Buch, das ich lese, ist großartig.' },
          { target: 'O senhor que trabalha na receção é simpático.', de: 'Der Herr, der an der Rezeption arbeitet, ist nett.' },
        ],
      },
      {
        heading: 'quem – Personen nach Präposition',
        body: 'Steht vor dem Relativpronomen eine Präposition (com, de, a, para …) und geht es um eine Person, nimmt man quem. Die Präposition steht immer davor, nie am Satzende. Möglich ist auch o qual / a qual (com a qual), eher schriftlich.',
        examples: [
          { target: 'A senhora com quem falei é a diretora.', de: 'Die Frau, mit der ich gesprochen habe, ist die Direktorin.' },
          { target: 'O amigo de quem te falei chega hoje.', de: 'Der Freund, von dem ich dir erzählt habe, kommt heute an.' },
        ],
      },
      {
        heading: 'cujo – dessen, deren',
        body: 'cujo/cuja/cujos/cujas drückt Besitz aus und richtet sich nach dem Nomen, das folgt – nicht nach dem Besitzer. Danach steht kein Artikel. Im Gespräch wird es oft umgangen, in Texten ist es häufig.',
        examples: [
          { target: 'A rapariga cuja mãe é médica mora aqui.', de: 'Das Mädchen, dessen Mutter Ärztin ist, wohnt hier.' },
          { target: 'O vizinho cujo cão ladra mudou-se.', de: 'Der Nachbar, dessen Hund bellt, ist umgezogen.' },
          { target: 'o escritor cujos livros li', de: 'der Schriftsteller, dessen Bücher ich gelesen habe' },
        ],
      },
      {
        heading: 'onde – wo',
        body: 'Für Orte steht onde, gleichwertig mit em que. Mit Richtung: aonde (wohin) bzw. para onde.',
        examples: [
          { target: 'Esta é a cidade onde nasci.', de: 'Das ist die Stadt, in der ich geboren bin.' },
          { target: 'A casa em que vivemos é antiga.', de: 'Das Haus, in dem wir wohnen, ist alt.' },
        ],
      },
    ],
  },
  {
    id: 'conjuntivo',
    icon: 'thought',
    title: 'Conjuntivo presente',
    level: 'B1',
    intro: 'Die Möglichkeitsform für Wunsch, Gefühl, Zweifel und Bewertung.',
    sections: [
      {
        heading: 'Bildung',
        body: 'Man nimmt die eu-Form des Präsens, streicht das -o und hängt die „vertauschten“ Endungen an: -ar-Verben bekommen -e, -es, -e, -emos, -em; -er- und -ir-Verben -a, -as, -a, -amos, -am. Weil man von der eu-Form ausgeht, sind viele Unregelmäßige gar kein Problem: faço → faça, posso → possa, tenho → tenha, venho → venha, digo → diga, peço → peça. Achtung Schreibung: chegar → chegue, ficar → fique, começar → comece.',
        examples: [
          { target: 'falar → fale, fales, fale, falemos, falem', de: 'sprechen' },
          { target: 'comer → coma, comas, coma, comamos, comam', de: 'essen' },
          { target: 'fazer (faço) → faça, faças, faça, façamos, façam', de: 'machen' },
        ],
      },
      {
        heading: 'Echte Ausnahmen',
        body: 'Sechs Verben passen nicht ins Schema und müssen gelernt werden: ser → seja, estar → esteja, ir → vá, dar → dê (deem), saber → saiba, querer → queira, dazu haver → haja.',
        examples: [
          { target: 'Espero que esteja tudo bem.', de: 'Ich hoffe, alles ist in Ordnung.' },
          { target: 'Não quero que vás sozinho.', de: 'Ich will nicht, dass du allein gehst.' },
          { target: 'Talvez haja um problema.', de: 'Vielleicht gibt es ein Problem.' },
        ],
      },
      {
        heading: 'Wann conjuntivo?',
        body: 'Nach Ausdrücken von Wunsch und Aufforderung (quero que, peço que), Gefühl (espero que, tenho pena que, gosto que), Zweifel (duvido que, talvez) und Bewertung (é importante que, é bom que, é preciso que). Außerdem immer nach bestimmten Konjunktionen: para que (damit), embora (obwohl), antes que (bevor), a menos que (es sei denn), caso (falls), sem que (ohne dass).',
        examples: [
          { target: 'Quero que venhas comigo.', de: 'Ich will, dass du mitkommst.' },
          { target: 'É importante que cheguemos a horas.', de: 'Es ist wichtig, dass wir pünktlich ankommen.' },
          { target: 'Embora esteja frio, vamos à praia.', de: 'Obwohl es kalt ist, gehen wir an den Strand.' },
          { target: 'Falo devagar para que me percebas.', de: 'Ich spreche langsam, damit du mich verstehst.' },
        ],
      },
      {
        heading: 'Conjuntivo oder indicativo?',
        body: 'Gewissheit und Meinungen, die man als Tatsache hinstellt, stehen im indicativo: acho que, penso que, creio que, sei que, é verdade que, tenho a certeza de que. Werden sie verneint oder bezweifelt, kippt der Satz in den conjuntivo: não acho que, não creio que, não é verdade que. Und: ist das Subjekt in beiden Satzteilen dasselbe, braucht man gar keinen que-Satz – dann steht einfach der Infinitiv.',
        examples: [
          { target: 'Penso que ele tem razão.', de: 'Ich glaube, er hat recht.' },
          { target: 'Não penso que ele tenha razão.', de: 'Ich glaube nicht, dass er recht hat.' },
          { target: 'É verdade que a Ana vive em Lisboa. – Não é verdade que viva lá.', de: 'Es stimmt, dass Ana in Lissabon lebt. – Es stimmt nicht, dass sie dort lebt.' },
          { target: 'Quero sair. – Quero que tu saias.', de: 'Ich will gehen. – Ich will, dass du gehst.' },
        ],
      },
    ],
  },
  {
    id: 'conjuntivo-imperfeito',
    icon: 'fog',
    title: 'Imperfeito do conjuntivo',
    level: 'B1',
    intro: '„Wenn ich … wäre“ – und der conjuntivo in der Vergangenheit.',
    sections: [
      {
        heading: 'Bildung – ohne Ausnahmen',
        body: 'Ausgangspunkt ist die 3. Person Plural des pretérito perfeito. -ram fällt weg, dann kommen -sse, -sses, -sse, -ssemos, -ssem. Die nós-Form bekommt einen Akzent (falássemos, comêssemos, partíssemos, fôssemos). Weil die Unregelmäßigkeit schon im pretérito steckt, gibt es keine weiteren Ausnahmen.',
        examples: [
          { target: 'falaram → falasse · comeram → comesse · partiram → partisse', de: 'regelmäßig' },
          { target: 'foram → fosse · tiveram → tivesse · fizeram → fizesse', de: 'ser/ir, ter, fazer' },
          { target: 'puderam → pudesse · souberam → soubesse · quiseram → quisesse', de: 'poder, saber, querer' },
        ],
      },
      {
        heading: 'Irreale Wünsche und Bedingungen',
        body: 'Im irrealen se-Satz steht das imperfeito do conjuntivo, im Hauptsatz der Konditional oder – im Gespräch – das imperfeito (mehr dazu in der Lektion Bedingungssätze). Unerfüllbare Wünsche drückt man mit quem me dera (que) aus: „wenn doch nur …“.',
        examples: [
          { target: 'Se eu fosse rico, viajaria pelo mundo.', de: 'Wenn ich reich wäre, würde ich um die Welt reisen.' },
          { target: 'Quem me dera que fizesse sol!', de: 'Wenn doch nur die Sonne schiene!' },
          { target: 'Se ela quisesse, podia vir connosco.', de: 'Wenn sie wollte, könnte sie mitkommen.' },
        ],
      },
      {
        heading: 'conjuntivo in der Vergangenheit',
        body: 'Alles, was im Präsens den conjuntivo auslöst (quero que, é importante que, para que, embora …), verlangt das imperfeito do conjuntivo, sobald der Hauptsatz in der Vergangenheit oder im Konditional steht.',
        examples: [
          { target: 'Quero que estudes. → Queria que estudasses.', de: 'Ich will / wollte, dass du lernst.' },
          { target: 'Pedi-lhe que me trouxesse o livro.', de: 'Ich habe ihn gebeten, mir das Buch zu bringen.' },
          { target: 'Era bom que pudessem ficar.', de: 'Es wäre gut, wenn ihr bleiben könntet.' },
        ],
      },
      {
        heading: 'In der indirekten Rede',
        body: 'Wird ein Satz mit presente do conjuntivo in der Vergangenheit wiedergegeben, rückt er ins imperfeito do conjuntivo.',
        examples: [
          { target: '„Espero que venhas.“ → Ele disse que esperava que eu viesse.', de: '„Ich hoffe, du kommst.“ → Er sagte, er hoffe, dass ich komme.' },
        ],
      },
    ],
  },
  {
    id: 'futuro-conjuntivo',
    icon: 'wand',
    title: 'Futuro do conjuntivo',
    level: 'B1',
    intro: 'Eine Zeitform, die Spanisch und Italienisch im Alltag verloren haben – im Portugiesischen ist sie quicklebendig.',
    sections: [
      {
        heading: 'Wann?',
        body: 'Spricht man über etwas Zukünftiges nach quando, se, enquanto, assim que, logo que, sempre que, como, onde oder quem, steht das futuro do conjuntivo. Das ist der klassische Fehler deutscher Lerner: im Deutschen (und Englischen) steht hier das Präsens – „wenn ich nach Lissabon fahre“ –, auf Portugiesisch aber nicht „quando vou“, sondern „quando for“. Der Hauptsatz steht im Präsens, Futur oder Imperativ.',
        examples: [
          { target: 'Quando eu for a Lisboa, visito-te.', de: 'Wenn ich nach Lissabon fahre, besuche ich dich.' },
          { target: 'Se tiveres tempo, telefona-me.', de: 'Wenn du Zeit hast, ruf mich an.' },
          { target: 'Assim que souber a resposta, digo-te.', de: 'Sobald ich die Antwort weiß, sage ich es dir.' },
          { target: 'Faz como quiseres.', de: 'Mach, wie du willst.' },
        ],
      },
      {
        heading: 'Bildung',
        body: 'Wieder ist die 3. Person Plural des pretérito perfeito der Ausgangspunkt, diesmal fällt nur -am weg: falaram → falar. Endungen: –, -es, –, -mos, -em. Bei regelmäßigen Verben kommt dabei genau der Infinitiv heraus: falar, falares, falar, falarmos, falarem.',
        examples: [
          { target: 'falar, falares, falar, falarmos, falarem', de: 'regelmäßig (-ar)' },
          { target: 'comer, comeres, comer, comermos, comerem', de: 'regelmäßig (-er)' },
          { target: 'ser/ir: for, fores, for, formos, forem', de: 'unregelmäßig' },
        ],
      },
      {
        heading: 'Die Unregelmäßigen',
        body: 'Bei unregelmäßigen Verben sieht man die Form deutlich, weil sie vom Perfektstamm kommt: estar → estiver, ter → tiver, fazer → fizer, dizer → disser, poder → puder, querer → quiser, saber → souber, trazer → trouxer, vir → vier, pôr → puser, dar → der, haver → houver. Sehr häufig im Alltag: se der (wenn es klappt), se Deus quiser, quando puderes.',
        examples: [
          { target: 'Se der, passo por tua casa logo à noite.', de: 'Wenn es klappt, komme ich heute Abend bei dir vorbei.' },
          { target: 'Quando vieres a Lisboa, avisa-me.', de: 'Wenn du nach Lissabon kommst, sag Bescheid.' },
          { target: 'Enquanto estiver a chover, ficamos em casa.', de: 'Solange es regnet, bleiben wir zu Hause.' },
        ],
      },
      {
        heading: 'Achtung: Verwechslungsgefahr',
        body: 'Weil das futuro do conjuntivo regelmäßiger Verben genauso aussieht wie der persönliche Infinitiv (nächste Lektion), kann man die beiden nur am Satz erkennen – oder an unregelmäßigen Verben: quando fores (futuro do conjuntivo, „wenn du gehst“) gegenüber antes de ires (Infinitiv, „bevor du gehst“).',
        examples: [
          { target: 'Quando chegarmos, jantamos.', de: 'Wenn wir ankommen, essen wir zu Abend. (futuro do conjuntivo)' },
          { target: 'Antes de chegarmos, telefonamos.', de: 'Bevor wir ankommen, rufen wir an. (infinitivo pessoal)' },
        ],
      },
    ],
  },
  {
    id: 'infinitivo-pessoal',
    icon: 'user',
    title: 'Infinitivo pessoal',
    level: 'B1',
    intro: 'Ein Infinitiv mit Personalendungen – eine Besonderheit des Portugiesischen.',
    sections: [
      {
        heading: 'Die Formen',
        body: 'An den Infinitiv werden Endungen gehängt: eu –, tu -es, ele –, nós -mos, eles -em. Das gilt für alle Verben, auch unregelmäßige: ser → seres, ir → ires, ter → teres, fazer → fazeres.',
        examples: [
          { target: 'falar, falares, falar, falarmos, falarem', de: 'sprechen' },
          { target: 'ir, ires, ir, irmos, irem', de: 'gehen' },
        ],
      },
      {
        heading: 'Wann?',
        body: 'Wenn das Subjekt des Infinitivs ein anderes ist als das des Hauptsatzes oder ausdrücklich genannt wird – vor allem nach Präpositionen (antes de, depois de, para, por, sem, apesar de, até, ao) und nach unpersönlichen Ausdrücken (é importante, é melhor, é preciso). Wo das Deutsche einen dass-/bevor-/damit-Satz braucht, reicht im Portugiesischen der Infinitiv.',
        examples: [
          { target: 'Antes de saíres, fecha a janela.', de: 'Bevor du gehst, mach das Fenster zu.' },
          { target: 'O professor deu-nos um texto para lermos.', de: 'Der Lehrer hat uns einen Text zum Lesen gegeben.' },
          { target: 'É importante estudarmos todos os dias.', de: 'Es ist wichtig, dass wir jeden Tag lernen.' },
          { target: 'Obrigado por teres vindo!', de: 'Danke, dass du gekommen bist!' },
        ],
      },
      {
        heading: 'Wann nicht?',
        body: 'Ist das Subjekt dasselbe wie im Hauptsatz, nimmt man meist den einfachen Infinitiv: Vim aqui para falar contigo. Bei eu und ele/ela sieht man ohnehin keinen Unterschied.',
        examples: [
          { target: 'Eu vim aqui para falar contigo.', de: 'Ich bin hergekommen, um mit dir zu sprechen.' },
          { target: 'Vocês vieram aqui para falar comigo?', de: 'Seid ihr hergekommen, um mit mir zu sprechen?' },
        ],
      },
      {
        heading: 'Infinitiv oder futuro do conjuntivo?',
        body: 'Bei regelmäßigen Verben sehen beide gleich aus. Der Unterschied liegt in der Funktion: das futuro do conjuntivo steht nach quando/se/assim que und blickt in die Zukunft (WANN, unter welcher Bedingung). Der persönliche Infinitiv steht nach Präpositionen und sagt, WER handelt. Unregelmäßige Verben verraten es: é melhor ires (Infinitiv) – quando fores (futuro do conjuntivo).',
        examples: [
          { target: 'É melhor ires já.', de: 'Es ist besser, wenn du gleich gehst.' },
          { target: 'Quando fores ao Porto, prova a francesinha.', de: 'Wenn du nach Porto fährst, probier die Francesinha.' },
        ],
      },
    ],
  },
  {
    id: 'pronomes-combinados',
    icon: 'puzzle',
    title: 'Pronomes combinados (mo, to, lho)',
    level: 'B1',
    intro: '„Gib es mir“ – wenn zwei Objektpronomen aufeinandertreffen.',
    sections: [
      {
        heading: 'Die Verschmelzungen',
        body: 'Das indirekte Pronomen steht zuerst und verschmilzt mit o, a, os, as: me → mo, ma, mos, mas · te → to, ta, tos, tas · lhe und lhes → lho, lha, lhos, lhas · nos → no-lo, no-la … · vos → vo-lo, vo-la … Das direkte Pronomen richtet sich nach dem Ding: o livro → mo, a chave → ma.',
        examples: [
          { target: 'Esse livro é meu, dá-mo!', de: 'Das Buch gehört mir, gib es mir!' },
          { target: 'A chave? Não ta dou.', de: 'Der Schlüssel? Den gebe ich dir nicht.' },
          { target: 'O João pediu o carro e eu emprestei-lho.', de: 'João wollte das Auto, und ich habe es ihm geliehen.' },
        ],
      },
      {
        heading: 'Stellung',
        body: 'Die Verbindung verhält sich wie ein einzelnes Pronomen: nach dem Verb mit Bindestrich (empresta-ma), vor dem Verb nach não, Fragewörtern, que usw. (não mo deram, já to disse).',
        examples: [
          { target: 'Gosto dessa caneta. Empresta-ma?', de: 'Mir gefällt der Stift. Leihst du ihn mir?' },
          { target: 'Pedi o dinheiro, mas não mo deram.', de: 'Ich habe um das Geld gebeten, aber sie haben es mir nicht gegeben.' },
          { target: 'Já to disse mil vezes!', de: 'Das habe ich dir schon tausendmal gesagt!' },
        ],
      },
      {
        heading: 'Gesprochen oder geschrieben?',
        body: 'Ehrlich gesagt: mo, ma, to, ta und lho hört man in Portugal im Alltag durchaus, vor allem in kurzen Sätzen und festen Wendungen (dá-mo, já to disse, não lho digas). Viel häufiger lässt man im Gespräch aber das direkte Pronomen einfach weg: Emprestas-me? – Empresto-te. no-lo und vo-lo sind dagegen fast nur schriftlich oder sehr förmlich. Im Brasilianischen kommen die Verschmelzungen praktisch gar nicht vor.',
        examples: [
          { target: 'Emprestas-me o carro? – Empresto-te.', de: 'Leihst du mir das Auto? – Ich leihe es dir. (gesprochen, ohne o)' },
          { target: 'O diretor entregou-no-los ontem.', de: 'Der Direktor hat sie uns gestern übergeben. (schriftlich)' },
        ],
      },
    ],
  },
  {
    id: 'colocacao-pronominal',
    icon: 'pin',
    title: 'Stellung der Pronomen',
    level: 'B1',
    intro: 'Vor, nach oder sogar mitten im Verb – im europäischen Portugiesisch gibt es klare Regeln.',
    sections: [
      {
        heading: 'Ênclise – der Normalfall',
        body: 'Im einfachen Hauptsatz und beim Imperativ steht das Pronomen nach dem Verb, mit Bindestrich. Das ist der wichtigste Unterschied zum Brasilianischen (dort: te vejo). Auch ein Satz darf in Portugal nie mit einem Pronomen beginnen.',
        examples: [
          { target: 'Vejo-te amanhã.', de: 'Ich sehe dich morgen.' },
          { target: 'Dá-me isso, por favor.', de: 'Gib mir das bitte.' },
          { target: 'Comprei-o ontem.', de: 'Ich habe es gestern gekauft.' },
        ],
      },
      {
        heading: 'Próclise – wenn etwas das Pronomen nach vorn zieht',
        body: 'Bestimmte Wörter vor dem Verb ziehen das Pronomen davor: Verneinung (não, nunca, ninguém, nada), Fragewörter (quem, onde, porque …), Nebensätze mit que, quando, se, porque, Indefinita (alguém, tudo, todos) und einige Adverbien (já, também, ainda, só, sempre, wenn sie vor dem Verb stehen). Das gilt im Gespräch genauso wie in der Schrift.',
        examples: [
          { target: 'Não te vejo desde o verão.', de: 'Ich sehe dich seit dem Sommer nicht.' },
          { target: 'Quem te disse isso?', de: 'Wer hat dir das gesagt?' },
          { target: 'Acho que ele me telefonou.', de: 'Ich glaube, er hat mich angerufen.' },
          { target: 'Alguém me roubou a carteira!', de: 'Jemand hat mir die Brieftasche gestohlen!' },
          { target: 'Também me disseram isso.', de: 'Das hat man mir auch gesagt.' },
        ],
      },
      {
        heading: 'Mesóclise – förmlich und schriftlich',
        body: 'Im futuro und im condicional kann das Pronomen nicht hinten angehängt werden; es wandert zwischen Infinitiv und Endung: dar-te-ei, falar-lhe-ia. Das liest man in Zeitungen, Briefen und Literatur; gesprochen klingt es gehoben. Im Alltag weicht man aus: vou dar-te (oder vou-te dar), dava-te, oder man nimmt das Präsens.',
        examples: [
          { target: 'Dar-te-ei uma resposta amanhã.', de: 'Ich werde dir morgen eine Antwort geben. (förmlich)' },
          { target: 'Vou dar-te uma resposta amanhã.', de: 'Ich gebe dir morgen eine Antwort. (gesprochen)' },
          { target: 'Ajudar-te-ia com prazer.', de: 'Ich würde dir gern helfen. (förmlich)' },
        ],
      },
    ],
  },
  {
    id: 'pronomes-indefinidos',
    icon: 'question',
    title: 'Indefinitpronomen',
    level: 'B1',
    intro: 'Jemand, niemand, etwas, nichts, jeder, alle, andere.',
    sections: [
      {
        heading: 'Veränderlich',
        body: 'Diese richten sich in Geschlecht und Zahl nach dem Nomen: algum/alguma/alguns/algumas (irgendein, einige), nenhum/nenhuma (kein), todo/toda/todos/todas, outro/outra/outros/outras, mesmo/mesma/mesmos/mesmas. qualquer ändert nur die Zahl (Pl. quaisquer), cada bleibt immer gleich.',
        examples: [
          { target: 'Tens alguma pergunta?', de: 'Hast du eine Frage?' },
          { target: 'Não tenho nenhuma dúvida.', de: 'Ich habe keinen Zweifel.' },
          { target: 'Cada aluno recebe um livro.', de: 'Jeder Schüler bekommt ein Buch.' },
          { target: 'Elas usam sempre as mesmas roupas.', de: 'Sie tragen immer dieselben Kleider.' },
        ],
      },
      {
        heading: 'Unveränderlich',
        body: 'algo (etwas), alguém (jemand), nada (nichts), ninguém (niemand) stehen allein, ohne Nomen. Stehen nada und ninguém nach dem Verb, braucht man zusätzlich não davor – doppelte Verneinung ist hier Pflicht.',
        examples: [
          { target: 'Alguém telefonou para ti.', de: 'Jemand hat für dich angerufen.' },
          { target: 'Não vi ninguém. – Ninguém veio.', de: 'Ich habe niemanden gesehen. – Niemand ist gekommen.' },
          { target: 'Queres algo para beber?', de: 'Möchtest du etwas trinken?' },
        ],
      },
      {
        heading: 'todo – ganz oder alle?',
        body: 'Im europäischen Portugiesisch steht nach todo der Artikel: todo o dia = den ganzen Tag, toda a gente = alle Leute, todos os dias = jeden Tag. „Jeder“ im Sinn von „jeder einzelne“ heißt cada.',
        examples: [
          { target: 'Trabalhei todo o dia.', de: 'Ich habe den ganzen Tag gearbeitet.' },
          { target: 'Vou ao ginásio todos os dias.', de: 'Ich gehe jeden Tag ins Fitnessstudio.' },
          { target: 'Toda a gente gosta de férias.', de: 'Alle mögen Ferien.' },
        ],
      },
    ],
  },
  {
    id: 'adverbios',
    icon: 'steps',
    title: 'Adverbien auf -mente',
    level: 'B1',
    intro: 'Wie etwas geschieht: schnell, leicht, zum Glück.',
    sections: [
      {
        heading: 'Bildung',
        body: '-mente wird an die weibliche Form des Adjektivs gehängt: rápido → rápida → rapidamente, claro → claramente, perfeito → perfeitamente. Adjektive ohne eigene weibliche Form hängen es direkt an: fácil → facilmente, feliz → felizmente, simples → simplesmente. Ein Akzent auf dem Adjektiv fällt dabei weg.',
        examples: [
          { target: 'Ela fala português perfeitamente.', de: 'Sie spricht perfekt Portugiesisch.' },
          { target: 'Felizmente, ninguém se magoou.', de: 'Zum Glück hat sich niemand verletzt.' },
          { target: 'Fizemos o exercício facilmente.', de: 'Wir haben die Übung leicht geschafft.' },
        ],
      },
      {
        heading: 'Zwei Adverbien hintereinander',
        body: 'Werden zwei -mente-Adverbien mit e verbunden, bekommt nur das letzte die Endung, das erste bleibt in der weiblichen Form.',
        examples: [
          { target: 'Explicou tudo clara e pacientemente.', de: 'Er hat alles klar und geduldig erklärt.' },
          { target: 'Trabalhou rápida e eficientemente.', de: 'Sie hat schnell und effizient gearbeitet.' },
        ],
      },
      {
        heading: 'bem, mal und die Stellung',
        body: 'bom und mau haben eigene Adverbien: bem und mal. Adjektiv oder Adverb? Mit ser/estar beschreibt man das Nomen (o bolo está bom), mit anderen Verben die Handlung (ela canta bem). Adverbien stehen meist nach dem Verb; Satzadverbien wie felizmente, infelizmente, normalmente stehen oft am Satzanfang.',
        examples: [
          { target: 'Ela canta muito bem.', de: 'Sie singt sehr gut.' },
          { target: 'Este bolo está muito bom.', de: 'Dieser Kuchen ist sehr gut.' },
          { target: 'Normalmente, almoço ao meio-dia.', de: 'Normalerweise esse ich um zwölf zu Mittag.' },
        ],
      },
    ],
  },
  {
    id: 'verbos-pronominais',
    icon: 'mirror',
    title: 'Reflexive Verben',
    level: 'B1',
    intro: 'Sich nennen, aufstehen, erinnern, beschweren.',
    sections: [
      {
        heading: 'Die Pronomen',
        body: 'Reflexive Verben haben ein Pronomen, das zum Subjekt passt: me, te, se, nos, vos, se. Häufig: chamar-se, levantar-se, deitar-se, vestir-se, sentar-se, casar-se, queixar-se de, lembrar-se de, esquecer-se de, sentir-se. Manche sind im Deutschen nicht reflexiv: casar-se (heiraten).',
        examples: [
          { target: 'Chamo-me Pedro.', de: 'Ich heiße Pedro.' },
          { target: 'A Rita levanta-se às sete.', de: 'Rita steht um sieben auf.' },
          { target: 'Os meus pais casaram-se em 1990.', de: 'Meine Eltern haben 1990 geheiratet.' },
        ],
      },
      {
        heading: 'Stellung: wie bei allen Pronomen',
        body: 'Im Hauptsatz steht das Pronomen nach dem Verb (levanto-me), nach não, Fragewörtern, que, já usw. davor (não me lembro, como te chamas?). Beim verneinten Imperativ steht der conjuntivo mit vorgezogenem Pronomen: não te esqueças!',
        examples: [
          { target: 'Não me lembro do nome dele.', de: 'Ich erinnere mich nicht an seinen Namen.' },
          { target: 'Como te chamas?', de: 'Wie heißt du?' },
          { target: 'Não te esqueças de fechar a porta!', de: 'Vergiss nicht, die Tür zuzumachen!' },
        ],
      },
      {
        heading: 'Achtung bei nós',
        body: 'Folgt nos auf eine Verbform auf -mos, fällt das -s weg: deitamos + nos → deitamo-nos, levantámos + nos → levantámo-nos. Steht das Pronomen davor, bleibt alles normal: não nos deitamos.',
        examples: [
          { target: 'Deitamo-nos cedo.', de: 'Wir gehen früh ins Bett.' },
          { target: 'Ontem não nos deitámos cedo.', de: 'Gestern sind wir nicht früh ins Bett gegangen.' },
        ],
      },
    ],
  },
  {
    id: 'quantidade',
    icon: 'scale',
    title: 'Mengenwörter',
    level: 'B1',
    intro: 'muito, pouco, bastante, demasiado – mal angeglichen, mal unveränderlich.',
    sections: [
      {
        heading: 'Vor einem Nomen: angleichen',
        body: 'Vor einem Nomen sind muito, pouco, bastante, demasiado, vários und todo Adjektive und richten sich nach Geschlecht und Zahl: muita gente, muitos livros, pouca água, bastantes pessoas, demasiadas bolachas, várias cidades.',
        examples: [
          { target: 'Há muita gente na praia.', de: 'Am Strand sind viele Leute.' },
          { target: 'Comeste demasiadas bolachas!', de: 'Du hast zu viele Kekse gegessen!' },
          { target: 'Visitei várias cidades.', de: 'Ich habe mehrere Städte besucht.' },
        ],
      },
      {
        heading: 'Vor Adjektiv oder nach dem Verb: unveränderlich',
        body: 'Beschreiben sie ein Adjektiv, ein Adverb oder ein Verb, sind muito, pouco, bastante und demasiado Adverbien und bleiben in der Grundform – auch wenn das Nomen weiblich oder Plural ist.',
        examples: [
          { target: 'As malas são demasiado pesadas.', de: 'Die Koffer sind zu schwer.' },
          { target: 'Esta casa é muito bonita.', de: 'Dieses Haus ist sehr schön.' },
          { target: 'Ela trabalha bastante.', de: 'Sie arbeitet ziemlich viel.' },
        ],
      },
      {
        heading: 'Kurz wiederholt: algum, vários, todo',
        body: 'alguns/algumas = einige, vários/várias = mehrere, todo o/toda a = ganz, todos os/todas as = alle. Alle gleichen sich an.',
        examples: [
          { target: 'Tenho alguns amigos no Porto.', de: 'Ich habe einige Freunde in Porto.' },
          { target: 'Bebemos toda a garrafa.', de: 'Wir haben die ganze Flasche getrunken.' },
        ],
      },
    ],
  },
];
