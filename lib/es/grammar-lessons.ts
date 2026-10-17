// ─── Grundlagen (A1 grammar mini-lessons) ──────────────────────────────────────
// Short, readable first-steps lessons for true beginners (A1 profiles). Written in German
// (the learner's L1) and rendered on /grammar as collapsible cards. Keep each
// lesson tight: a one-line intro, a few sections, and concrete es→de examples.

import type { IconName } from '../icon-names';
export interface GrammarExample {
  target: string; // sentence in the target language
  de: string;
}

export interface GrammarSection {
  heading: string;
  body: string;
  examples?: GrammarExample[];
}

export interface GrammarLesson {
  id: string;
  icon: IconName;
  title: string;
  level?: 'A1' | 'A2' | 'B1'; // lessons without a level are listed as one group
  intro: string;
  sections: GrammarSection[];
}

export const GRAMMAR_LESSONS: GrammarLesson[] = [
  {
    id: 'aussprache',
    icon: 'speech',
    title: 'Aussprache & Alphabet',
    level: 'A1',
    intro: 'Gute Nachricht: Spanisch wird fast so gelesen, wie es geschrieben wird.',
    sections: [
      {
        heading: 'Die wichtigsten Regeln',
        body:
          'Die Vokale a, e, i, o, u klingen immer gleich – kurz und klar. Es gibt keine Umlaute. ' +
          'Das „h" ist immer stumm, und „ll" klingt wie ein deutsches „j".',
        examples: [
          { target: 'hola', de: 'das „h" bleibt stumm → „ola"' },
          { target: 'llamar', de: '„ll" wie „j" → „jamar"' },
          { target: 'gracias', de: '„c" vor i/e klingt wie „th"/„s"' },
        ],
      },
      {
        heading: 'ñ, j und das rollende r',
        body:
          'Das „ñ" klingt wie „nj" (wie in „Cognac"). Das „j" ist ein raues, gehauchtes „ch" wie in „Bach". ' +
          'Das „r" am Wortanfang oder als „rr" wird gerollt.',
        examples: [
          { target: 'español', de: '→ „espanjol"' },
          { target: 'trabajar', de: '„j" wie „ch" in „Bach"' },
          { target: 'perro', de: 'gerolltes „rr" (Hund)' },
        ],
      },
      {
        heading: 'Betonung',
        body:
          'Ein Akzent (´) zeigt immer, welche Silbe betont wird. Ohne Akzent gilt: endet das Wort auf einen ' +
          'Vokal, n oder s, wird die vorletzte Silbe betont.',
        examples: [
          { target: 'café', de: 'betont auf „fé"' },
          { target: 'gracias', de: 'betont auf „gra"' },
        ],
      },
    ],
  },
  {
    id: 'pronomen',
    icon: 'user',
    title: 'Personalpronomen (ich, du, er …)',
    level: 'A1',
    intro: 'Diese kleinen Wörter brauchst du, um über Personen zu sprechen.',
    sections: [
      {
        heading: 'Die Pronomen',
        body:
          'yo = ich · tú = du · él = er · ella = sie · usted = Sie (höflich) · ' +
          'nosotros = wir · vosotros = ihr · ellos/ellas = sie (Mehrzahl) · ustedes = Sie (Mehrzahl).',
        examples: [
          { target: 'yo soy Ana', de: 'ich bin Ana' },
          { target: 'tú eres mi amiga', de: 'du bist meine Freundin' },
        ],
      },
      {
        heading: 'Tipp: oft kann man sie weglassen',
        body:
          'Weil die Verbendung schon zeigt, wer gemeint ist, lässt man das Pronomen im Spanischen häufig weg. ' +
          '„Soy Ana" reicht völlig.',
        examples: [
          { target: 'soy de Alemania', de: '(ich) bin aus Deutschland' },
        ],
      },
    ],
  },
  {
    id: 'artikel',
    icon: 'letters',
    title: 'Nomen & Artikel (el / la)',
    level: 'A1',
    intro: 'Jedes Nomen ist männlich oder weiblich – lerne den Artikel immer mit.',
    sections: [
      {
        heading: 'Männlich oder weiblich',
        body:
          'el = der/das (männlich), la = die (weiblich). Faustregel: Wörter auf -o sind meist männlich, ' +
          'Wörter auf -a meist weiblich. Es gibt Ausnahmen – darum lernst du den Artikel immer mit dem Wort.',
        examples: [
          { target: 'el libro', de: 'das Buch (männlich)' },
          { target: 'la casa', de: 'das Haus (weiblich)' },
          { target: 'el día', de: 'der Tag (Ausnahme: -a, aber männlich)' },
        ],
      },
      {
        heading: 'Mehrzahl',
        body:
          'Aus el wird los, aus la wird las. Das Nomen bekommt ein -s (oder -es nach Konsonant).',
        examples: [
          { target: 'los libros', de: 'die Bücher' },
          { target: 'las casas', de: 'die Häuser' },
        ],
      },
      {
        heading: 'Ein / eine',
        body: 'un = ein (männlich), una = eine (weiblich).',
        examples: [
          { target: 'un amigo', de: 'ein Freund' },
          { target: 'una amiga', de: 'eine Freundin' },
        ],
      },
    ],
  },
  {
    id: 'ser-estar',
    icon: 'scale',
    title: 'Ser vs. Estar (zweimal „sein")',
    level: 'A1',
    intro: 'Spanisch hat zwei Wörter für „sein". Welches du nimmst, hängt von der Bedeutung ab.',
    sections: [
      {
        heading: 'ser = was dauerhaft ist',
        body: 'Identität, Herkunft, Beruf, Eigenschaften – Dinge, die sich nicht so schnell ändern.',
        examples: [
          { target: 'soy Ana', de: 'ich bin Ana (Identität)' },
          { target: 'soy de Alemania', de: 'ich bin aus Deutschland (Herkunft)' },
          { target: 'el coche es rojo', de: 'das Auto ist rot (Eigenschaft)' },
        ],
      },
      {
        heading: 'estar = Zustand & Ort',
        body: 'Gefühle, vorübergehende Zustände und wo sich etwas befindet.',
        examples: [
          { target: 'estoy bien', de: 'mir geht es gut (Zustand)' },
          { target: 'estoy cansada', de: 'ich bin müde (vorübergehend)' },
          { target: 'la casa está aquí', de: 'das Haus ist hier (Ort)' },
        ],
      },
      {
        heading: 'Merksatz',
        body: 'Wie du bist (Charakter) → ser. Wie es dir geht / wo du bist → estar.',
      },
    ],
  },
  {
    id: 'praesens',
    icon: 'repeat',
    title: 'Regelmäßige Verben im Präsens',
    level: 'A1',
    intro: 'Die meisten Verben enden auf -ar, -er oder -ir. Du tauschst einfach die Endung.',
    sections: [
      {
        heading: '-ar: hablar (sprechen)',
        body: 'hablo, hablas, habla, hablamos, habláis, hablan.',
        examples: [
          { target: 'yo hablo español', de: 'ich spreche Spanisch' },
          { target: 'ella habla mucho', de: 'sie spricht viel' },
        ],
      },
      {
        heading: '-er: comer (essen)',
        body: 'como, comes, come, comemos, coméis, comen.',
        examples: [
          { target: 'yo como pan', de: 'ich esse Brot' },
          { target: 'comemos juntos', de: 'wir essen zusammen' },
        ],
      },
      {
        heading: '-ir: vivir (leben/wohnen)',
        body: 'vivo, vives, vive, vivimos, vivís, viven.',
        examples: [
          { target: 'vivo en Berlín', de: 'ich wohne in Berlin' },
          { target: '¿dónde vives?', de: 'wo wohnst du?' },
        ],
      },
      {
        heading: 'Das Muster',
        body:
          'Die Endungen für „ich/du/er" sind: -ar → -o, -as, -a · -er → -o, -es, -e · -ir → -o, -es, -e. ' +
          'Übe sie auf der Seite „Verbs".',
      },
    ],
  },
  {
    id: 'zahlen',
    icon: 'hash',
    title: 'Zahlen & nützliche Sätze',
    level: 'A1',
    intro: 'Die ersten Zahlen und ein paar Sätze, mit denen du sofort loslegen kannst.',
    sections: [
      {
        heading: 'Zahlen 0–10',
        body: 'cero, uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez.',
      },
      {
        heading: 'Sich vorstellen',
        body: 'Ein paar Sätze für den Anfang:',
        examples: [
          { target: '¿Cómo te llamas?', de: 'Wie heißt du?' },
          { target: 'Me llamo Ana', de: 'Ich heiße Ana' },
          { target: 'Mucho gusto', de: 'Sehr erfreut' },
          { target: 'No entiendo', de: 'Ich verstehe nicht' },
          { target: '¿Hablas alemán?', de: 'Sprichst du Deutsch?' },
        ],
      },
    ],
  },
  {
    id: 'es-gibt',
    icon: 'pointer',
    title: 'Hay, dieses & jenes',
    level: 'A1',
    intro: 'Wie du sagst, dass es etwas gibt – und wie du auf Dinge zeigst.',
    sections: [
      {
        heading: 'hay = es gibt',
        body:
          'hay kommt von haber und hat nur diese eine Form – egal ob Einzahl oder Mehrzahl. Es steht vor ' +
          'unbestimmten Dingen: mit un/una, Zahlen, mucho/poco oder ganz ohne Artikel. Geht es darum, wo sich ' +
          'etwas Bestimmtes befindet (el/la, mi, ein Name), nimmst du estar (siehe „Ser & Estar").',
        examples: [
          { target: 'Hay un banco en la plaza.', de: 'Es gibt eine Bank auf dem Platz.' },
          { target: 'Hay dos libros en la mesa.', de: 'Auf dem Tisch liegen zwei Bücher.' },
          { target: 'El banco está en la plaza.', de: 'Die Bank ist auf dem Platz.' },
        ],
      },
      {
        heading: 'Dieser, der da, jener',
        body:
          'Spanisch hat drei Stufen der Entfernung: este/esta/estos/estas = dieser hier (bei mir), ' +
          'ese/esa/esos/esas = der da (bei dir, etwas weiter weg), aquel/aquella/aquellos/aquellas = jener dort ' +
          '(weit weg). Sie richten sich nach Geschlecht und Zahl des Nomens.',
        examples: [
          { target: 'este libro es mío', de: 'dieses Buch hier ist meins' },
          { target: '¿Cuánto cuesta esa camiseta?', de: 'Was kostet das T-Shirt da?' },
          { target: 'aquellas montañas', de: 'jene Berge dort' },
        ],
      },
      {
        heading: 'esto, eso, aquello',
        body:
          'Für Dinge ohne Namen oder ganze Sachverhalte gibt es neutrale Formen: esto (das hier), eso (das da), ' +
          'aquello (das dort). Sie stehen nie vor einem Nomen und enden immer auf -o.',
        examples: [
          { target: '¿Qué es esto?', de: 'Was ist das (hier)?' },
          { target: 'Eso no es verdad.', de: 'Das stimmt nicht.' },
        ],
      },
    ],
  },
  {
    id: 'possessiv',
    icon: 'pointer',
    title: 'Mi, tu, su …',
    level: 'A1',
    intro: 'Mein, dein, sein – im Spanischen einfacher, als du denkst.',
    sections: [
      {
        heading: 'Die Formen',
        body:
          'mi = mein · tu = dein · su = sein/ihr/Ihr · nuestro = unser · vuestro = euer · su = ihr (Mehrzahl)/Ihr. ' +
          'Achtung: tu (dein) hat keinen Akzent, tú (du) schon.',
        examples: [
          { target: 'mi hermano', de: 'mein Bruder' },
          { target: 'tu casa', de: 'dein Haus' },
          { target: 'nuestra familia', de: 'unsere Familie' },
        ],
      },
      {
        heading: 'Nur die Zahl zählt',
        body:
          'mi, tu und su richten sich nur nach der Zahl des Nomens: mi libro, mis libros, mis amigas. ' +
          'Nur nuestro und vuestro haben auch eine weibliche Form: nuestro/nuestra/nuestros/nuestras. ' +
          'Da su vieles heißen kann, sagt man zur Klärung auch el coche de ella (ihr Auto).',
        examples: [
          { target: 'mis padres', de: 'meine Eltern' },
          { target: 'sus hijos', de: 'seine/ihre/Ihre Kinder' },
          { target: 'vuestras maletas', de: 'eure Koffer' },
        ],
      },
      {
        heading: 'mío, tuyo, suyo',
        body:
          'Nach dem Verb oder dem Nomen stehen die betonten Formen: mío, tuyo, suyo, nuestro, vuestro, suyo – ' +
          'mit vier Endungen (-o/-a/-os/-as). Mit Artikel ersetzen sie das Nomen: el mío = meiner.',
        examples: [
          { target: 'Este bolso es mío.', de: 'Diese Tasche gehört mir.' },
          { target: 'un amigo mío', de: 'ein Freund von mir' },
          { target: 'Tu coche es rojo, el mío es azul.', de: 'Dein Auto ist rot, meins ist blau.' },
        ],
      },
    ],
  },
  {
    id: 'fragen',
    icon: 'question',
    title: 'Fragen & Verneinung',
    level: 'A1',
    intro: 'Fragen stellen, Nein sagen – und warum Spanisch doppelt verneint.',
    sections: [
      {
        heading: 'Fragewörter',
        body:
          'qué (was), quién/quiénes (wer), dónde (wo), adónde (wohin), cuándo (wann), cómo (wie), por qué (warum), ' +
          'cuánto/cuánta/cuántos/cuántas (wie viel/e), cuál (welche/r). Fragewörter tragen immer einen Akzent. ' +
          'Fragen werden mit ¿ eröffnet und mit ? geschlossen. Ja/Nein-Fragen erkennt man oft nur an der Satzmelodie.',
        examples: [
          { target: '¿Dónde vives?', de: 'Wo wohnst du?' },
          { target: '¿Cuántos años tienes?', de: 'Wie alt bist du?' },
          { target: '¿Hablas español?', de: 'Sprichst du Spanisch?' },
        ],
      },
      {
        heading: 'Verneinen mit no',
        body:
          'no steht direkt vor dem Verb – und vor Pronomen wie me, te, lo. „No" heißt zugleich „nein": ' +
          'auf eine Frage antwortest du also oft „No, no …". Achtung: ¿por qué? (warum) – porque (weil).',
        examples: [
          { target: 'No hablo alemán.', de: 'Ich spreche kein Deutsch.' },
          { target: 'No, no lo sé.', de: 'Nein, ich weiß es nicht.' },
        ],
      },
      {
        heading: 'Doppelte Verneinung ist Pflicht',
        body:
          'Mit nada (nichts), nadie (niemand), nunca (nie), ninguno (kein) und tampoco (auch nicht) bleibt das no ' +
          'vor dem Verb stehen – anders als im Deutschen ist das richtig und nötig. Steht das Verneinungswort ' +
          'am Satzanfang, fällt no weg.',
        examples: [
          { target: 'No veo nada.', de: 'Ich sehe nichts.' },
          { target: 'No viene nadie.', de: 'Niemand kommt.' },
          { target: 'Nunca como carne.', de: 'Ich esse nie Fleisch.' },
        ],
      },
    ],
  },
  {
    id: 'adjektive',
    icon: 'palette',
    title: 'Adjektive',
    level: 'A1',
    intro: 'Adjektive passen sich an – und stehen meistens hinter dem Nomen.',
    sections: [
      {
        heading: 'Angleichung',
        body:
          'Adjektive auf -o haben vier Formen: rojo, roja, rojos, rojas. Adjektive auf -e oder Konsonant ändern ' +
          'nur die Zahl: grande/grandes, azul/azules, fácil/fáciles. Herkunftsadjektive bekommen aber ein -a: ' +
          'alemán → alemana, español → española.',
        examples: [
          { target: 'un coche rojo', de: 'ein rotes Auto' },
          { target: 'las casas blancas', de: 'die weißen Häuser' },
          { target: 'una chica alemana', de: 'ein deutsches Mädchen' },
        ],
      },
      {
        heading: 'Hinter dem Nomen',
        body:
          'Anders als im Deutschen steht das Adjektiv normalerweise nach dem Nomen – besonders Farben, Formen ' +
          'und Herkunft. Mengenwörter wie mucho, poco, otro und Zahlen stehen davor.',
        examples: [
          { target: 'un libro interesante', de: 'ein interessantes Buch' },
          { target: 'mucha gente simpática', de: 'viele nette Leute' },
        ],
      },
      {
        heading: 'buen, mal, gran',
        body:
          'bueno, malo, primero und tercero dürfen vor dem Nomen stehen und verlieren dann vor männlichen ' +
          'Einzahl-Nomen das -o: un buen día, el primer piso. grande wird vor jedem Einzahl-Nomen zu gran – und ' +
          'heißt dann „großartig" statt „groß".',
        examples: [
          { target: 'un buen amigo', de: 'ein guter Freund' },
          { target: 'una gran ciudad', de: 'eine großartige Stadt' },
          { target: 'una ciudad grande', de: 'eine große Stadt' },
        ],
      },
    ],
  },
  {
    id: 'praepositionen',
    icon: 'compass',
    title: 'Präpositionen (a, de, en, con …)',
    level: 'A1',
    intro: 'Die kleinen Wörter, die Ort, Richtung und Zugehörigkeit ausdrücken.',
    sections: [
      {
        heading: 'a – Richtung, Uhrzeit und das persönliche a',
        body:
          'a heißt „nach/zu" (voy a Madrid) und steht bei der Uhrzeit (a las tres). Ist das direkte Objekt eine ' +
          'bestimmte Person, steht davor das „persönliche a" – im Deutschen gibt es dafür nichts. Bei Dingen ' +
          'fällt es weg.',
        examples: [
          { target: 'Vamos a la playa.', de: 'Wir gehen an den Strand.' },
          { target: 'Veo a María.', de: 'Ich sehe María.' },
          { target: 'Veo la casa.', de: 'Ich sehe das Haus.' },
        ],
      },
      {
        heading: 'de, en, con',
        body:
          'de = von, aus, Besitz und Material (soy de Berlín, el libro de Ana, de madera). en = in, an, auf – ' +
          'für Orte und Verkehrsmittel (en casa, en la mesa, en tren). con = mit; mit mir/dir heißt conmigo/contigo. ' +
          'Außerdem wichtig: sin (ohne), desde (seit, ab), hasta (bis), entre (zwischen).',
        examples: [
          { target: 'Estoy en casa.', de: 'Ich bin zu Hause.' },
          { target: '¿Vienes conmigo?', de: 'Kommst du mit mir?' },
          { target: 'un café sin azúcar', de: 'ein Kaffee ohne Zucker' },
        ],
      },
      {
        heading: 'al und del',
        body:
          'a + el wird zu al, de + el wird zu del. Das gilt nur für den Artikel el – nicht für la, los, las und ' +
          'nicht für él (er). Den Unterschied zwischen por und para lernst du in einer eigenen Lektion (B1).',
        examples: [
          { target: 'Voy al cine.', de: 'Ich gehe ins Kino.' },
          { target: 'la puerta del coche', de: 'die Tür des Autos' },
          { target: 'Hablo de él.', de: 'Ich spreche von ihm.' },
        ],
      },
    ],
  },
  {
    id: 'piacere',
    icon: 'heart',
    title: 'Gustar: das Verb, das anders funktioniert',
    level: 'A1',
    intro: 'Auf Spanisch magst du nichts – es gefällt dir.',
    sections: [
      {
        heading: 'Wörtlich: „gefallen"',
        body:
          'Me gusta el café heißt wörtlich „mir gefällt der Kaffee". Das, was gefällt, ist das Subjekt; die ' +
          'Person steht als Pronomen davor: me, te, le, nos, os, les. „Yo gusto" ist falsch.',
        examples: [
          { target: 'Me gusta el café.', de: 'Ich mag Kaffee.' },
          { target: '¿Te gusta Madrid?', de: 'Gefällt dir Madrid?' },
          { target: 'Nos gusta la playa.', de: 'Wir mögen den Strand.' },
        ],
      },
      {
        heading: 'gusta oder gustan?',
        body:
          'Die Verbform richtet sich nach dem, was gefällt – nicht nach der Person. Eine Sache oder ein Infinitiv → ' +
          'gusta; mehrere Dinge → gustan. Zur Betonung oder Klärung stellt man a mí, a ti, a Ana … davor.',
        examples: [
          { target: 'Me gustan los perros.', de: 'Ich mag Hunde.' },
          { target: 'Le gusta bailar.', de: 'Er/Sie tanzt gern.' },
          { target: 'A mí no me gusta, ¿y a ti?', de: 'Mir gefällt es nicht, und dir?' },
        ],
      },
      {
        heading: 'Verben, die genauso gehen',
        body:
          'encantar (sehr mögen, lieben – ohne „mucho"), interesar (interessieren), doler (wehtun), molestar ' +
          '(stören), faltar (fehlen). Bei Körperteilen steht der Artikel statt „mein".',
        examples: [
          { target: 'Me encanta esta canción.', de: 'Ich liebe dieses Lied.' },
          { target: 'Me duele la cabeza.', de: 'Mir tut der Kopf weh.' },
          { target: 'Me duelen los pies.', de: 'Mir tun die Füße weh.' },
        ],
      },
    ],
  },
  {
    id: 'reflexiv',
    icon: 'mirror',
    title: 'Reflexive Verben',
    level: 'A1',
    intro: 'Verben mit „sich" – die gibt es auch im Spanischen, oft sogar häufiger.',
    sections: [
      {
        heading: 'llamarse = heißen',
        body:
          'Das Reflexivpronomen steht vor dem Verb: me llamo, te llamas, se llama, nos llamamos, os llamáis, ' +
          'se llaman. Im Wörterbuch erkennst du diese Verben am -se: llamarse, levantarse.',
        examples: [
          { target: 'Me llamo Pablo.', de: 'Ich heiße Pablo.' },
          { target: '¿Cómo se llama tu hermana?', de: 'Wie heißt deine Schwester?' },
        ],
      },
      {
        heading: 'Der Tagesablauf',
        body:
          'Viele Alltagsverben sind reflexiv: despertarse (aufwachen), levantarse (aufstehen), ducharse (duschen), ' +
          'vestirse (sich anziehen), acostarse (ins Bett gehen), quedarse (bleiben). Bei Körperteilen steht der ' +
          'Artikel: me lavo las manos.',
        examples: [
          { target: 'Me levanto a las siete.', de: 'Ich stehe um sieben auf.' },
          { target: 'Nos acostamos tarde.', de: 'Wir gehen spät ins Bett.' },
          { target: 'Me lavo las manos.', de: 'Ich wasche mir die Hände.' },
        ],
      },
      {
        heading: 'Wo steht das Pronomen?',
        body:
          'Vor dem konjugierten Verb – oder angehängt an Infinitiv und Gerundium. Beides ist richtig. ' +
          'Beim Anhängen ans Gerundium kommt ein Akzent dazu.',
        examples: [
          { target: 'Me voy a duchar. / Voy a ducharme.', de: 'Ich gehe duschen.' },
          { target: 'Está vistiéndose.', de: 'Er/Sie zieht sich gerade an.' },
        ],
      },
    ],
  },
  {
    id: 'preterito-perfecto',
    icon: 'check',
    title: 'Pretérito perfecto (Perfekt)',
    level: 'A2',
    intro: 'Die Vergangenheit, die noch mit der Gegenwart zu tun hat.',
    sections: [
      {
        heading: 'Bildung: haber + Partizip',
        body:
          'he, has, ha, hemos, habéis, han + Partizip. -ar → -ado (hablado), -er/-ir → -ido (comido, vivido). ' +
          'Hilfsverb ist immer haber – nie ser oder estar. Das Partizip bleibt unverändert, und zwischen haber ' +
          'und Partizip steht nichts.',
        examples: [
          { target: 'He comido paella.', de: 'Ich habe Paella gegessen.' },
          { target: 'Ana ha ido al médico.', de: 'Ana ist zum Arzt gegangen.' },
          { target: 'Nunca he estado en Cuba.', de: 'Ich war noch nie in Kuba.' },
        ],
      },
      {
        heading: 'Unregelmäßige Partizipien',
        body:
          'hacer → hecho, decir → dicho, ver → visto, poner → puesto, escribir → escrito, abrir → abierto, ' +
          'volver → vuelto, romper → roto, morir → muerto. Regelmäßig, aber wichtig: ir → ido, ser → sido.',
        examples: [
          { target: '¿Qué has hecho hoy?', de: 'Was hast du heute gemacht?' },
          { target: 'Todavía no he visto la película.', de: 'Ich habe den Film noch nicht gesehen.' },
        ],
      },
      {
        heading: 'Wann?',
        body:
          'Für Vergangenes in einem Zeitraum, der noch läuft: hoy, esta mañana, esta semana, este año. ' +
          'Außerdem für Erfahrungen mit ya (schon), todavía no (noch nicht), alguna vez (jemals), nunca. ' +
          'In Lateinamerika nimmt man hier oft das Indefinido.',
        examples: [
          { target: 'Esta semana he trabajado mucho.', de: 'Diese Woche habe ich viel gearbeitet.' },
          { target: '¿Has estado alguna vez en España?', de: 'Warst du schon mal in Spanien?' },
        ],
      },
    ],
  },
  {
    id: 'preterito-indefinido',
    icon: 'calendar',
    title: 'Pretérito indefinido',
    level: 'A2',
    intro: 'Die Erzählzeit für abgeschlossene Ereignisse.',
    sections: [
      {
        heading: 'Regelmäßige Formen',
        body:
          'hablar: hablé, hablaste, habló, hablamos, hablasteis, hablaron. comer/vivir: comí, comiste, comió, ' +
          'comimos, comisteis, comieron. Der Akzent ist wichtig: hablo (ich spreche) – habló (er sprach). ' +
          'Bei -ar und -ir ist die wir-Form gleich wie im Präsens.',
        examples: [
          { target: 'Ayer hablé con mi madre.', de: 'Gestern habe ich mit meiner Mutter gesprochen.' },
          { target: 'Comimos en un restaurante.', de: 'Wir haben im Restaurant gegessen.' },
        ],
      },
      {
        heading: 'Die wichtigsten Unregelmäßigen',
        body:
          'ser und ir sind gleich: fui, fuiste, fue, fuimos, fuisteis, fueron. Mit eigenem Stamm und ohne ' +
          'Akzent (-e, -iste, -o, -imos, -isteis, -ieron): tener → tuve, estar → estuve, hacer → hice (hizo), ' +
          'poder → pude, poner → puse, querer → quise, venir → vine, saber → supe; decir → dije (dijeron). ' +
          'Außerdem: dar → di, dio · pedir → pidió · dormir → durmió.',
        examples: [
          { target: 'Fui a Sevilla.', de: 'Ich bin nach Sevilla gefahren.' },
          { target: 'Fue un día bonito.', de: 'Es war ein schöner Tag.' },
          { target: '¿Qué hiciste el fin de semana?', de: 'Was hast du am Wochenende gemacht?' },
        ],
      },
      {
        heading: 'Wann?',
        body:
          'Für einmalige, abgeschlossene Handlungen in einem vergangenen Zeitraum – oft mit ayer, anoche, el lunes, ' +
          'la semana pasada, el año pasado, en 2019, hace dos años. Auch für eine Abfolge von Ereignissen.',
        examples: [
          { target: 'El año pasado viajamos a México.', de: 'Letztes Jahr sind wir nach Mexiko gereist.' },
          { target: 'Llegué, cené y me acosté.', de: 'Ich kam an, aß zu Abend und ging ins Bett.' },
        ],
      },
    ],
  },
  {
    id: 'imperfecto',
    icon: 'clock',
    title: 'Imperfecto – und welche Vergangenheit wann?',
    level: 'A2',
    intro: 'Die Vergangenheit für Gewohnheiten und Hintergründe – und wie sie sich von den anderen beiden abgrenzt.',
    sections: [
      {
        heading: 'Bildung',
        body:
          '-ar: -aba, -abas, -aba, -ábamos, -abais, -aban (hablaba). -er/-ir: -ía, -ías, -ía, -íamos, -íais, -ían ' +
          '(comía, vivía). Nur drei Verben sind unregelmäßig: ser → era, ir → iba, ver → veía.',
        examples: [
          { target: 'De niño jugaba al fútbol.', de: 'Als Kind habe ich Fußball gespielt.' },
          { target: 'Mi abuela era muy alta.', de: 'Meine Großmutter war sehr groß.' },
        ],
      },
      {
        heading: 'Wofür?',
        body:
          'Für Gewohnheiten (siempre, todos los días, a menudo, de pequeño), Beschreibungen von Personen, Orten ' +
          'und Wetter, Uhrzeit und Alter in der Vergangenheit – und für den Hintergrund: was gerade lief, als ' +
          'etwas passierte.',
        examples: [
          { target: 'Todos los veranos íbamos a la playa.', de: 'Jeden Sommer fuhren wir an den Strand.' },
          { target: 'Hacía sol y eran las diez.', de: 'Die Sonne schien und es war zehn Uhr.' },
          { target: 'Leía cuando sonó el teléfono.', de: 'Ich las gerade, als das Telefon klingelte.' },
        ],
      },
      {
        heading: 'Drei Vergangenheiten im Vergleich',
        body:
          'Perfecto: abgeschlossen in einem Zeitraum, der noch andauert (hoy, esta semana, ya). Indefinido: ' +
          'abgeschlossen in einem vergangenen Zeitraum, das Ereignis selbst (ayer, en 2010, de repente). Imperfecto: ' +
          'Wiederholung, Zustand, Hintergrund – ohne Blick auf Anfang oder Ende (siempre, antes, mientras).',
        examples: [
          { target: 'Hoy he desayunado tarde.', de: 'Heute habe ich spät gefrühstückt.' },
          { target: 'Ayer desayuné tarde.', de: 'Gestern habe ich spät gefrühstückt.' },
          { target: 'Antes siempre desayunaba tarde.', de: 'Früher habe ich immer spät gefrühstückt.' },
        ],
      },
    ],
  },
  {
    id: 'futuro',
    icon: 'wand',
    title: 'Futuro simple & ir a + Infinitiv',
    level: 'A2',
    intro: 'Zwei Wege, über die Zukunft zu sprechen – einer davon ist kinderleicht.',
    sections: [
      {
        heading: 'ir a + Infinitiv',
        body:
          'Im Alltag sagt man meist voy, vas, va, vamos, vais, van + a + Infinitiv – für Pläne und das, was gleich ' +
          'passiert. Feste Termine stehen oft einfach im Präsens: Mañana trabajo.',
        examples: [
          { target: 'Voy a comer.', de: 'Ich werde (gleich) essen.' },
          { target: '¿Qué vas a hacer el sábado?', de: 'Was machst du am Samstag?' },
          { target: 'Va a llover.', de: 'Es wird gleich regnen.' },
        ],
      },
      {
        heading: 'Futuro simple',
        body:
          'Infinitiv + -é, -ás, -á, -emos, -éis, -án – für alle drei Gruppen gleich: hablaré, comerás, vivirá. ' +
          'Unregelmäßige Stämme: tener → tendr-, poner → pondr-, salir → saldr-, venir → vendr-, poder → podr-, ' +
          'saber → sabr-, querer → querr-, hacer → har-, decir → dir-.',
        examples: [
          { target: 'Mañana te llamaré.', de: 'Morgen rufe ich dich an.' },
          { target: 'Tendremos tiempo.', de: 'Wir werden Zeit haben.' },
          { target: '¿Qué harás en verano?', de: 'Was wirst du im Sommer machen?' },
        ],
      },
      {
        heading: 'Vermutungen',
        body:
          'Das Futuro steht für Vorhersagen und Versprechen – und, ganz typisch, für Vermutungen über die ' +
          'Gegenwart, wie das deutsche „wohl".',
        examples: [
          { target: '¿Dónde está Juan? – Estará en casa.', de: 'Wo ist Juan? – Er wird wohl zu Hause sein.' },
          { target: 'Serán las ocho.', de: 'Es wird wohl acht Uhr sein.' },
        ],
      },
    ],
  },
  {
    id: 'objektpronomen',
    icon: 'target',
    title: 'Objektpronomen (lo, la, le …)',
    level: 'A2',
    intro: 'Ihn, sie, es, ihm, ihr – kurze Wörter, die Wiederholungen sparen.',
    sections: [
      {
        heading: 'Direktes Objekt (wen? was?)',
        body:
          'me, te, lo/la, nos, os, los/las. lo steht für männliche Personen und Dinge (und für „es" im Sinne ' +
          'von „das"), la für weibliche. In Spanien hört man für männliche Personen auch le (le veo).',
        examples: [
          { target: '¿El libro? Lo tengo yo.', de: 'Das Buch? Das habe ich.' },
          { target: 'La llamo mañana.', de: 'Ich rufe sie morgen an.' },
          { target: 'No lo sé.', de: 'Ich weiß es nicht.' },
        ],
      },
      {
        heading: 'Indirektes Objekt (wem?)',
        body:
          'me, te, le, nos, os, les – nur in der 3. Person anders als beim direkten Objekt, und ohne männlich/weiblich. ' +
          'Oft steht das Pronomen zusätzlich zum genannten Objekt: Le doy el libro a Ana. Das ist normal und richtig.',
        examples: [
          { target: 'Le escribo un mensaje.', de: 'Ich schreibe ihm/ihr eine Nachricht.' },
          { target: 'Les doy el regalo a mis padres.', de: 'Ich gebe meinen Eltern das Geschenk.' },
        ],
      },
      {
        heading: 'Position',
        body:
          'Vor dem konjugierten Verb (auch vor no). An Infinitiv und Gerundium darf es angehängt werden, an den ' +
          'bejahten Imperativ muss es – oft mit Akzent, damit die Betonung bleibt.',
        examples: [
          { target: 'Lo voy a comprar. / Voy a comprarlo.', de: 'Ich werde es kaufen.' },
          { target: 'Estoy leyéndolo.', de: 'Ich lese es gerade.' },
          { target: '¡Cómpralo!', de: 'Kauf es!' },
        ],
      },
    ],
  },
  {
    id: 'imperativ',
    icon: 'megaphone',
    title: 'Imperativ',
    level: 'A2',
    intro: 'Bitten, Anweisungen und Tipps – die Befehlsform.',
    sections: [
      {
        heading: 'tú und vosotros',
        body:
          'tú: wie die er-Form im Präsens: habla, come, escribe. Unregelmäßig: decir → di, hacer → haz, ir → ve, ' +
          'poner → pon, salir → sal, ser → sé, tener → ten, venir → ven. vosotros: Infinitiv mit -d statt -r: ' +
          'hablad, comed, venid (vor -os fällt das d weg: sentaos).',
        examples: [
          { target: '¡Ven aquí!', de: 'Komm her!' },
          { target: 'Haz los deberes.', de: 'Mach die Hausaufgaben.' },
          { target: 'Escuchad.', de: 'Hört zu.' },
        ],
      },
      {
        heading: 'usted, ustedes, nosotros',
        body:
          'Diese Formen kommen aus dem Subjuntivo: -ar → -e, -er/-ir → -a. hable/hablen, coma/coman, ' +
          'venga/vengan. nosotros: hablemos (lasst uns sprechen) – aber vamos (lasst uns gehen).',
        examples: [
          { target: 'Pase, por favor.', de: 'Kommen Sie herein, bitte.' },
          { target: 'Abran los libros.', de: 'Öffnen Sie die Bücher.' },
        ],
      },
      {
        heading: 'Verneinter Imperativ',
        body:
          'Mit no nimmt man für alle Personen den Subjuntivo: no hables, no comas, no vengas, no habléis. ' +
          'Pronomen werden beim bejahten Imperativ angehängt, beim verneinten stehen sie davor. ' +
          'Mehr dazu in der Lektion „Subjuntivo presente".',
        examples: [
          { target: '¡No hables tan alto!', de: 'Sprich nicht so laut!' },
          { target: 'Siéntate. – No te sientes.', de: 'Setz dich. – Setz dich nicht.' },
        ],
      },
    ],
  },
  {
    id: 'vergleiche',
    icon: 'chart',
    title: 'Vergleiche & Superlativ',
    level: 'A2',
    intro: 'Größer, genauso groß, am größten.',
    sections: [
      {
        heading: 'más / menos … que',
        body:
          'más + Adjektiv + que (mehr … als), menos + Adjektiv + que (weniger … als). Vor Zahlen heißt „als" de: ' +
          'más de cien personas.',
        examples: [
          { target: 'Madrid es más grande que Sevilla.', de: 'Madrid ist größer als Sevilla.' },
          { target: 'El tren es menos caro que el avión.', de: 'Der Zug ist billiger als das Flugzeug.' },
          { target: 'Cuesta más de diez euros.', de: 'Es kostet mehr als zehn Euro.' },
        ],
      },
      {
        heading: 'tan … como',
        body:
          'Gleichheit: tan + Adjektiv/Adverb + como (so … wie). Mit Nomen: tanto/tanta/tantos/tantas + Nomen + como. ' +
          'Nach einem Verb: tanto como.',
        examples: [
          { target: 'Ana es tan alta como su padre.', de: 'Ana ist so groß wie ihr Vater.' },
          { target: 'No tengo tanto tiempo como tú.', de: 'Ich habe nicht so viel Zeit wie du.' },
        ],
      },
      {
        heading: 'Superlativ & Unregelmäßige',
        body:
          'el/la/los/las (+ Nomen) + más + Adjektiv + de: la ciudad más bonita de España („von", nicht „in"). ' +
          'Unregelmäßig: bueno/bien → mejor, malo/mal → peor, beim Alter mayor (älter) und menor (jünger). ' +
          '„Sehr" kann man auch mit -ísimo ausdrücken: carísimo.',
        examples: [
          { target: 'Es el mejor restaurante de la ciudad.', de: 'Das ist das beste Restaurant der Stadt.' },
          { target: 'Mi hermano mayor', de: 'Mein älterer Bruder' },
          { target: 'Hoy estoy peor.', de: 'Heute geht es mir schlechter.' },
        ],
      },
    ],
  },
  {
    id: 'gerundio',
    icon: 'hourglass',
    title: 'Estar + Gerundium (gerade tun)',
    level: 'A2',
    intro: 'Was gerade in diesem Moment passiert.',
    sections: [
      {
        heading: 'Bildung',
        body:
          'estar + Gerundium: -ar → -ando (hablando), -er/-ir → -iendo (comiendo, viviendo). Das Gerundium ' +
          'ändert sich nie.',
        examples: [
          { target: 'Estoy hablando por teléfono.', de: 'Ich telefoniere gerade.' },
          { target: '¿Qué estás haciendo?', de: 'Was machst du gerade?' },
        ],
      },
      {
        heading: 'Besondere Formen',
        body:
          'Steht vor -iendo ein Vokal, wird daraus -yendo: leer → leyendo, oír → oyendo, ir → yendo, ' +
          'traer → trayendo. -ir-Verben mit Stammwechsel: decir → diciendo, pedir → pidiendo, venir → viniendo, ' +
          'dormir → durmiendo. Außerdem: poder → pudiendo.',
        examples: [
          { target: 'Los niños están durmiendo.', de: 'Die Kinder schlafen gerade.' },
          { target: 'Estoy leyendo un libro.', de: 'Ich lese gerade ein Buch.' },
        ],
      },
      {
        heading: 'Wann – und wann nicht?',
        body:
          'Nur für das, was gerade abläuft – nicht für Pläne wie im Englischen (morgen: Mañana salgo). ' +
          'Praktisch: seguir + Gerundium (weiterhin tun) und llevar + Zeit + Gerundium (etwas seit … tun).',
        examples: [
          { target: 'Sigue lloviendo.', de: 'Es regnet immer noch.' },
          { target: 'Llevo dos años estudiando español.', de: 'Ich lerne seit zwei Jahren Spanisch.' },
        ],
      },
    ],
  },
  {
    id: 'por-para',
    icon: 'shuffle',
    title: 'Por vs. Para',
    level: 'B1',
    intro: 'Beides heißt oft „für" – aber der Blickwinkel ist ein anderer.',
    sections: [
      {
        heading: 'para – Ziel und Zweck',
        body:
          'para blickt nach vorn, auf ein Ziel: Zweck (para + Infinitiv = um zu), Empfänger (für wen?), ' +
          'Richtung (salir para Madrid), Frist (para el lunes = bis Montag), Meinung (para mí = meiner Meinung nach) ' +
          'und Vergleich (para su edad = für sein Alter).',
        examples: [
          { target: 'Estudio para aprobar el examen.', de: 'Ich lerne, um die Prüfung zu bestehen.' },
          { target: 'Este regalo es para ti.', de: 'Dieses Geschenk ist für dich.' },
          { target: 'Necesito el informe para el viernes.', de: 'Ich brauche den Bericht bis Freitag.' },
        ],
      },
      {
        heading: 'por – Grund, Weg und Mittel',
        body:
          'por blickt auf Ursache und Verlauf: Grund (wegen, aus), Mittel (por teléfono, por correo), Bewegung ' +
          'durch einen Ort (por el parque), ungefähre Zeit und Dauer (por la mañana, por dos semanas), Tausch ' +
          'und Preis (por diez euros), Stellvertretung (für dich, an deiner Stelle) und der Urheber im Passiv ' +
          '(escrito por Cervantes).',
        examples: [
          { target: 'Gracias por tu ayuda.', de: 'Danke für deine Hilfe.' },
          { target: 'Paseamos por el centro.', de: 'Wir bummeln durch die Innenstadt.' },
          { target: 'Lo compré por veinte euros.', de: 'Ich habe es für zwanzig Euro gekauft.' },
        ],
      },
      {
        heading: 'Der feine Unterschied',
        body:
          'Lo hago por ti = ich tue es deinetwegen / dir zuliebe. Lo hago para ti = ich mache es für dich (du ' +
          'bekommst es). Feste Wendungen: por favor, por fin (endlich), por eso (deshalb), por ejemplo, ' +
          'por supuesto (selbstverständlich), por cierto (übrigens) – und para siempre (für immer).',
        examples: [
          { target: 'Por fin es viernes.', de: 'Endlich ist Freitag.' },
          { target: 'Llovía, por eso nos quedamos en casa.', de: 'Es regnete, deshalb blieben wir zu Hause.' },
          { target: 'Te querré para siempre.', de: 'Ich werde dich für immer lieben.' },
        ],
      },
    ],
  },
  {
    id: 'condicional',
    icon: 'brain',
    title: 'Condicional (würde, hätte, könnte)',
    level: 'B1',
    intro: 'Die Form für Höflichkeit, Ratschläge und das, was wäre.',
    sections: [
      {
        heading: 'Bildung',
        body:
          'Infinitiv + -ía, -ías, -ía, -íamos, -íais, -ían – für alle Gruppen gleich: hablaría, comería, viviría. ' +
          'Unregelmäßige Stämme wie im Futuro: tendría, pondría, saldría, vendría, podría, sabría, querría, ' +
          'haría, diría, habría. Vorsicht: comería (würde essen) ≠ comía (aß).',
        examples: [
          { target: 'Me gustaría un café.', de: 'Ich hätte gern einen Kaffee.' },
          { target: '¿Podrías ayudarme?', de: 'Könntest du mir helfen?' },
        ],
      },
      {
        heading: 'Höflichkeit & Ratschläge',
        body:
          'Bitten klingen mit dem Condicional freundlicher: ¿Podría…?, ¿Le importaría…?, Querría… ' +
          'Ratschläge gibst du mit deberías (du solltest) oder yo que tú (an deiner Stelle) + Condicional.',
        examples: [
          { target: 'Deberías dormir más.', de: 'Du solltest mehr schlafen.' },
          { target: 'Yo que tú, iría al médico.', de: 'An deiner Stelle würde ich zum Arzt gehen.' },
        ],
      },
      {
        heading: 'Wünsche, Hypothesen, Zukunft in der Vergangenheit',
        body:
          'Für das, was unter anderen Umständen wäre (oft mit si-Satz, siehe „Bedingungssätze"), für Wünsche ' +
          'und für die Zukunft aus Sicht der Vergangenheit: Dijo que vendría. Außerdem für Vermutungen über ' +
          'die Vergangenheit: Serían las diez (es war wohl zehn).',
        examples: [
          { target: 'Con más tiempo, viajaría más.', de: 'Mit mehr Zeit würde ich mehr reisen.' },
          { target: 'Me dijo que llegaría tarde.', de: 'Er sagte mir, er würde spät kommen.' },
          { target: 'Serían las diez cuando llegó.', de: 'Es war wohl zehn Uhr, als er ankam.' },
        ],
      },
    ],
  },
  {
    id: 'subjuntivo',
    icon: 'thought',
    title: 'Subjuntivo presente',
    level: 'B1',
    intro: 'Die Möglichkeitsform für Wunsch, Gefühl, Zweifel – und alles, was (noch) nicht Tatsache ist.',
    sections: [
      {
        heading: 'Bildung',
        body:
          'Ausgangspunkt ist die ich-Form im Präsens, die Endung tauscht den Vokal: -ar → -e (hable, hables, hable, ' +
          'hablemos, habléis, hablen), -er/-ir → -a (coma, viva …). So vererben sich Unregelmäßigkeiten: tengo → ' +
          'tenga, hago → haga, digo → diga, conozco → conozca. Schreibänderungen: busque, llegue, empiece.',
        examples: [
          { target: 'Quiero que hables con él.', de: 'Ich will, dass du mit ihm sprichst.' },
          { target: 'Espero que tengas suerte.', de: 'Ich hoffe, du hast Glück.' },
        ],
      },
      {
        heading: 'Unregelmäßige Formen',
        body:
          'ser → sea, estar → esté, haber → haya, ir → vaya, saber → sepa, dar → dé. Stammwechsel bleibt: ' +
          'querer → quiera, poder → pueda; bei -ir-Verben auch in der wir-Form: pedir → pidamos, dormir → durmamos.',
      },
      {
        heading: 'Wann subjuntivo?',
        body:
          'Nach que bei Wunsch und Aufforderung (quiero que, espero que, te pido que, ojalá), Gefühl (me alegra que, ' +
          'siento que, me molesta que), Zweifel und Verneinung (dudo que, no creo que, no es verdad que) und ' +
          'Bewertung (es importante/necesario/posible que). Außerdem nach para que, antes de que, sin que – und ' +
          'nach cuando, wenn es um die Zukunft geht.',
        examples: [
          { target: 'Es importante que llegues a tiempo.', de: 'Es ist wichtig, dass du pünktlich kommst.' },
          { target: 'No creo que sea verdad.', de: 'Ich glaube nicht, dass es stimmt.' },
          { target: 'Cuando llegues, llámame.', de: 'Wenn du ankommst, ruf mich an.' },
        ],
      },
      {
        heading: 'Wann nicht?',
        body:
          'Bei Meinung und Gewissheit steht der Indikativ: creo que, pienso que, me parece que, sé que, es verdad ' +
          'que, estoy seguro de que – anders als im Italienischen (penso che + congiuntivo)! Erst verneint kippt es: ' +
          'no creo que + Subjuntivo. Bei gleichem Subjekt steht der Infinitiv: Quiero ir (nicht: quiero que yo vaya).',
        examples: [
          { target: 'Creo que tienes razón.', de: 'Ich glaube, du hast recht.' },
          { target: 'Dice que viene. – Dice que vengas.', de: 'Er sagt, dass er kommt. – Er sagt, du sollst kommen.' },
        ],
      },
    ],
  },
  {
    id: 'pronombres-combinados',
    icon: 'link',
    title: 'Doppelte Objektpronomen (me lo, se lo)',
    level: 'B1',
    intro: 'Wenn „es" und „ihm" zusammentreffen.',
    sections: [
      {
        heading: 'Reihenfolge: wem vor was',
        body:
          'Das indirekte Pronomen (wem?) steht vor dem direkten (wen/was?): me lo, te la, nos los, os las. ' +
          'Beide stehen zusammen vor dem konjugierten Verb – auch nach no.',
        examples: [
          { target: '¿El libro? Me lo da mañana.', de: 'Das Buch? Er gibt es mir morgen.' },
          { target: 'No te la puedo prestar.', de: 'Ich kann sie dir nicht leihen.' },
        ],
      },
      {
        heading: 'le/les wird zu se',
        body:
          'Treffen le oder les auf lo, la, los, las, wird aus le/les immer se: se lo digo – niemals „le lo". ' +
          'Weil se dann ihm, ihr, Ihnen oder ihnen heißen kann, klärt man oft mit a él, a ella, a usted, a Ana.',
        examples: [
          { target: 'Se lo digo.', de: 'Ich sage es ihm/ihr.' },
          { target: 'Se las doy a mis padres.', de: 'Ich gebe sie meinen Eltern.' },
          { target: 'Se lo explico a usted.', de: 'Ich erkläre es Ihnen.' },
        ],
      },
      {
        heading: 'Angehängt',
        body:
          'An Infinitiv und Gerundium darf, an den bejahten Imperativ muss das Paar angehängt werden – in derselben ' +
          'Reihenfolge und mit Akzent auf der ursprünglich betonten Silbe.',
        examples: [
          { target: '¡Dímelo!', de: 'Sag es mir!' },
          { target: 'Voy a dártelo. / Te lo voy a dar.', de: 'Ich werde es dir geben.' },
          { target: 'Estoy explicándoselo.', de: 'Ich erkläre es ihm gerade.' },
        ],
      },
    ],
  },
  {
    id: 'relativ',
    icon: 'puzzle',
    title: 'Relativpronomen (que, quien, donde)',
    level: 'B1',
    intro: 'Wie du Sätze mit „der, die, das, wo, was" verbindest.',
    sections: [
      {
        heading: 'que – für fast alles',
        body:
          'que ist das Standard-Relativpronomen für Personen und Dinge, Subjekt und Objekt, Einzahl und Mehrzahl. ' +
          'Anders als im Deutschen ändert es sich nie, und vor dem Relativsatz steht kein Komma.',
        examples: [
          { target: 'El chico que vive aquí es mi primo.', de: 'Der Junge, der hier wohnt, ist mein Cousin.' },
          { target: 'La película que vimos era aburrida.', de: 'Der Film, den wir gesehen haben, war langweilig.' },
        ],
      },
      {
        heading: 'Nach Präpositionen: el que, quien',
        body:
          'Nach einer Präposition nimmt man el que / la que / los que / las que (für Personen und Dinge) oder ' +
          'quien/quienes (nur für Personen). Die Präposition steht vorn, nicht am Ende wie im Englischen. ' +
          'Ohne Präposition sagt man für Personen einfach que: el hombre que vino (nicht: quien vino).',
        examples: [
          { target: 'La chica con quien hablé es médica.', de: 'Das Mädchen, mit dem ich gesprochen habe, ist Ärztin.' },
          { target: 'Es la casa en la que nací.', de: 'Das ist das Haus, in dem ich geboren wurde.' },
        ],
      },
      {
        heading: 'donde und lo que',
        body:
          'donde steht für Orte (= en el que). lo que bedeutet „das, was" und bezieht sich auf keine bestimmte ' +
          'Sache, sondern auf einen ganzen Inhalt: lo que dices, todo lo que sé. Achtung: ohne Akzent, ' +
          'anders als die Fragewörter dónde und qué.',
        examples: [
          { target: 'Es el pueblo donde viven mis abuelos.', de: 'Das ist das Dorf, wo meine Großeltern wohnen.' },
          { target: 'No entiendo lo que quieres.', de: 'Ich verstehe nicht, was du willst.' },
          { target: 'Lo que más me gusta es el mar.', de: 'Was mir am besten gefällt, ist das Meer.' },
        ],
      },
    ],
  },
  {
    id: 'bedingungssaetze',
    icon: 'repeat',
    title: 'Bedingungssätze mit si',
    level: 'B1',
    intro: 'Wenn … dann – real, unwahrscheinlich oder schon vorbei.',
    sections: [
      {
        heading: 'Reale Bedingung',
        body:
          'si + Präsens, im Hauptsatz Präsens, Futuro oder Imperativ. Nach si steht nie Futuro und nie ' +
          'Subjuntivo presente – auch wenn es um morgen geht: si mañana llueve (nicht: lloverá).',
        examples: [
          { target: 'Si llueve, me quedo en casa.', de: 'Wenn es regnet, bleibe ich zu Hause.' },
          { target: 'Si tienes tiempo, llámame.', de: 'Wenn du Zeit hast, ruf mich an.' },
          { target: 'Si estudias, aprobarás.', de: 'Wenn du lernst, wirst du bestehen.' },
        ],
      },
      {
        heading: 'Irreale Bedingung: Imperfecto de subjuntivo',
        body:
          'Für das, was nicht ist oder unwahrscheinlich ist: si + Imperfecto de subjuntivo, im Hauptsatz Condicional. ' +
          'Bildung: 3. Person Mehrzahl des Indefinido, -ron weg, dazu -ra, -ras, -ra, -ramos, -rais, -ran: ' +
          'hablaron → hablara, tuvieron → tuviera, fueron → fuera (ser und ir), hicieron → hiciera, ' +
          'pudieron → pudiera. Die wir-Form hat einen Akzent: habláramos. Gleichbedeutend gibt es Formen auf -se (hablase).',
        examples: [
          { target: 'Si tuviera dinero, viajaría por el mundo.', de: 'Wenn ich Geld hätte, würde ich um die Welt reisen.' },
          { target: 'Si fuera tú, no lo haría.', de: 'Wenn ich du wäre, würde ich es nicht tun.' },
        ],
      },
      {
        heading: 'Vorbei: hätte … gehabt',
        body:
          'Für Vergangenes, das nicht mehr zu ändern ist: si + hubiera + Partizip, im Hauptsatz habría + Partizip. ' +
          'Wichtig für alle Typen: Nach si steht nie der Condicional – „si tendría" ist falsch.',
        examples: [
          { target: 'Si lo hubiera sabido, habría venido.', de: 'Wenn ich es gewusst hätte, wäre ich gekommen.' },
          { target: 'Si hubiéramos salido antes, no habríamos perdido el tren.', de: 'Wären wir früher losgegangen, hätten wir den Zug nicht verpasst.' },
        ],
      },
    ],
  },
  {
    id: 'pluscuamperfecto',
    icon: 'back',
    title: 'Pluscuamperfecto (Plusquamperfekt)',
    level: 'B1',
    intro: 'Die Vorvergangenheit – was vor etwas anderem Vergangenem schon passiert war.',
    sections: [
      {
        heading: 'Bildung',
        body:
          'Imperfecto von haber + Partizip: había, habías, había, habíamos, habíais, habían + hablado/comido/vivido. ' +
          'Die unregelmäßigen Partizipien kennst du schon vom Perfecto: hecho, dicho, visto, puesto, escrito, vuelto.',
        examples: [
          { target: 'Ya había comido.', de: 'Ich hatte schon gegessen.' },
          { target: 'Nunca habíamos visto el mar.', de: 'Wir hatten noch nie das Meer gesehen.' },
        ],
      },
      {
        heading: 'Wann?',
        body:
          'Für eine Handlung, die vor einer anderen vergangenen Handlung abgeschlossen war – genau wie das deutsche ' +
          '„hatte/war … gemacht". Typische Begleiter: ya (schon), todavía no (noch nicht), nunca antes (noch nie), ' +
          'cuando (als).',
        examples: [
          { target: 'Cuando llegué, el tren ya había salido.', de: 'Als ich ankam, war der Zug schon abgefahren.' },
          { target: 'No fui al cine porque ya había visto la película.', de: 'Ich ging nicht ins Kino, weil ich den Film schon gesehen hatte.' },
        ],
      },
      {
        heading: 'In der indirekten Rede',
        body:
          'Wird ein Satz im Perfecto oder Indefinido aus der Vergangenheit wiedergegeben, wird daraus oft ' +
          'Pluscuamperfecto: „He perdido las llaves" → Dijo que había perdido las llaves.',
        examples: [
          { target: 'Me dijo que había terminado.', de: 'Er sagte mir, er sei fertig.' },
          { target: 'Pensé que te habías ido.', de: 'Ich dachte, du wärst gegangen.' },
        ],
      },
    ],
  },
  {
    id: 'si',
    icon: 'landmark',
    title: 'Se impersonal & Passiv',
    level: 'B1',
    intro: 'Wie man „man" sagt – und wie das Passiv im Spanischen funktioniert.',
    sections: [
      {
        heading: 'se = man',
        body:
          'se + Verb in der 3. Person Einzahl drückt aus, was man allgemein tut: se dice que (man sagt, dass), ' +
          'aquí se vive bien, ¿cómo se dice…? Bei Verben, die schon reflexiv sind, sagt man stattdessen uno: ' +
          'uno se acostumbra (man gewöhnt sich).',
        examples: [
          { target: '¿Cómo se dice „Hund" en español?', de: 'Wie sagt man „Hund" auf Spanisch?' },
          { target: 'Aquí se come muy bien.', de: 'Hier isst man sehr gut.' },
        ],
      },
      {
        heading: 'se-Passiv: Das Verb richtet sich nach der Sache',
        body:
          'Steht nach se eine Sache, ist sie das Subjekt – das Verb steht also in der Mehrzahl, wenn es um mehrere ' +
          'Dinge geht: se vende piso, aber se venden pisos. Das ist im Alltag die übliche Passivform.',
        examples: [
          { target: 'Se habla español.', de: 'Hier wird Spanisch gesprochen.' },
          { target: 'Se alquilan apartamentos.', de: 'Wohnungen zu vermieten.' },
          { target: 'Se busca camarero.', de: 'Kellner gesucht.' },
        ],
      },
      {
        heading: 'Passiv mit ser',
        body:
          'ser + Partizip, das sich in Geschlecht und Zahl anpasst; der Urheber kommt mit por. Diese Form ist eher ' +
          'schriftlich (Nachrichten, Geschichte). Gesprochen sagt man lieber se … oder die 3. Person Mehrzahl ' +
          'ohne Subjekt: Dicen que … (man sagt).',
        examples: [
          { target: 'La catedral fue construida en el siglo XV.', de: 'Die Kathedrale wurde im 15. Jahrhundert gebaut.' },
          { target: 'El libro fue escrito por García Márquez.', de: 'Das Buch wurde von García Márquez geschrieben.' },
        ],
      },
      {
        heading: 'wird oder ist?',
        body:
          'ser + Partizip beschreibt den Vorgang (wird gemacht), estar + Partizip das Ergebnis, den Zustand ' +
          '(ist gemacht) – wie im Deutschen „wird geschlossen" und „ist geschlossen".',
        examples: [
          { target: 'La tienda está cerrada.', de: 'Der Laden ist geschlossen.' },
          { target: 'La tienda fue cerrada por la policía.', de: 'Der Laden wurde von der Polizei geschlossen.' },
        ],
      },
    ],
  },
];
