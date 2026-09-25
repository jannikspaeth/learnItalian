// ─── Grundlagen (A1 grammar mini-lessons) ──────────────────────────────────────
// Short, readable first-steps lessons for true beginners (A1 profiles). Written in German
// (the learner's L1) and rendered on /grammar as collapsible cards. Keep each
// lesson tight: a one-line intro, a few sections, and concrete it→de examples.

export interface GrammarExample {
  it: string;
  de: string;
}

export interface GrammarSection {
  heading: string;
  body: string;
  examples?: GrammarExample[];
}

export interface GrammarLesson {
  id: string;
  icon: string;
  title: string;
  intro: string;
  sections: GrammarSection[];
}

export const GRAMMAR_LESSONS: GrammarLesson[] = [
  {
    id: 'aussprache',
    icon: '🗣️',
    title: 'Aussprache & Alphabet',
    intro: 'Gute Nachricht: Italienisch wird fast so gelesen, wie es geschrieben wird.',
    sections: [
      {
        heading: 'Die wichtigsten Regeln',
        body:
          'Die Vokale a, e, i, o, u klingen klar und immer ähnlich. Es gibt keine Umlaute. ' +
          'Das „h" ist immer stumm. Das „r" wird mit der Zungenspitze leicht gerollt.',
        examples: [
          { it: 'ho', de: 'das „h" bleibt stumm → „o" (ich habe)' },
          { it: 'Roma', de: 'gerolltes Zungen-„r"' },
        ],
      },
      {
        heading: 'c und g: hart oder weich',
        body:
          'Vor e und i werden c und g weich: „ce/ci" wie „tsche/tschi", „ge/gi" wie „dsche/dschi". ' +
          'Vor a, o, u sind sie hart wie im Deutschen. Ein „h" dazwischen macht sie wieder hart: che = „ke", ghi = „gi".',
        examples: [
          { it: 'ciao', de: '→ „tschao"' },
          { it: 'gelato', de: '→ „dschelato"' },
          { it: 'che', de: '→ „ke" (was / dass)' },
          { it: 'spaghetti', de: '→ „spagetti"' },
        ],
      },
      {
        heading: 'gli, gn und sc',
        body:
          '„gli" klingt wie „lj" (ähnlich wie in „Familie"), „gn" wie „nj" (wie in „Cognac"). ' +
          '„sc" vor e/i klingt wie „sch", sonst wie „sk".',
        examples: [
          { it: 'famiglia', de: '→ „familja" (Familie)' },
          { it: 'gnocchi', de: '→ „njokki"' },
          { it: 'scusa', de: '→ „skusa" (Entschuldigung)' },
          { it: 'pesce', de: '→ „pesche" (Fisch)' },
        ],
      },
      {
        heading: 'Doppelte Konsonanten & Betonung',
        body:
          'Doppelte Konsonanten werden hörbar länger gesprochen – das kann die Bedeutung ändern. ' +
          'Meist liegt die Betonung auf der vorletzten Silbe. Ein Akzent auf dem letzten Vokal zeigt, dass dort betont wird.',
        examples: [
          { it: 'nonno / nono', de: 'Großvater / neunter' },
          { it: 'città', de: 'betont auf „tà" (Stadt)' },
          { it: 'caffè', de: 'betont auf „fè"' },
        ],
      },
    ],
  },
  {
    id: 'pronomen',
    icon: '👤',
    title: 'Personalpronomen (ich, du, er …)',
    intro: 'Diese kleinen Wörter brauchst du, um über Personen zu sprechen.',
    sections: [
      {
        heading: 'Die Pronomen',
        body:
          'io = ich · tu = du · lui = er · lei = sie · Lei = Sie (höflich) · ' +
          'noi = wir · voi = ihr · loro = sie (Mehrzahl).',
        examples: [
          { it: 'io sono Anna', de: 'ich bin Anna' },
          { it: 'tu sei mia amica', de: 'du bist meine Freundin' },
        ],
      },
      {
        heading: 'Tipp: meistens lässt man sie weg',
        body:
          'Weil die Verbendung schon zeigt, wer gemeint ist, lässt man das Pronomen im Italienischen meistens weg. ' +
          '„Sono Anna" reicht völlig. Man benutzt es nur zur Betonung.',
        examples: [
          { it: 'sono tedesca', de: '(ich) bin Deutsche' },
          { it: 'parli italiano?', de: 'sprichst du Italienisch?' },
        ],
      },
      {
        heading: 'Höflich: Lei',
        body:
          'Wer siezt, benutzt „Lei" (groß oder klein geschrieben) mit der Verbform der 3. Person – wie „er/sie".',
        examples: [
          { it: 'Come sta?', de: 'Wie geht es Ihnen?' },
          { it: 'Lei è di qui?', de: 'Sind Sie von hier?' },
        ],
      },
    ],
  },
  {
    id: 'artikel',
    icon: '🔤',
    title: 'Nomen & Artikel (il / la)',
    intro: 'Jedes Nomen ist männlich oder weiblich – lerne den Artikel immer mit.',
    sections: [
      {
        heading: 'Männlich oder weiblich',
        body:
          'Faustregel: Wörter auf -o sind meist männlich, Wörter auf -a meist weiblich. ' +
          'Wörter auf -e können beides sein – darum lernst du den Artikel immer mit dem Wort.',
        examples: [
          { it: 'il libro', de: 'das Buch (männlich)' },
          { it: 'la casa', de: 'das Haus (weiblich)' },
          { it: 'il pane / la notte', de: 'das Brot (m) / die Nacht (f)' },
        ],
      },
      {
        heading: 'Die bestimmten Artikel',
        body:
          'Männlich: il (normal), lo (vor s+Konsonant, z, gn, ps, y), l\' (vor Vokal). ' +
          'Weiblich: la, l\' (vor Vokal).',
        examples: [
          { it: 'il ragazzo', de: 'der Junge' },
          { it: 'lo studente', de: 'der Student' },
          { it: "l'amico / l'amica", de: 'der Freund / die Freundin' },
          { it: 'la ragazza', de: 'das Mädchen' },
        ],
      },
      {
        heading: 'Mehrzahl',
        body:
          'Aus -o wird -i, aus -a wird -e, aus -e wird -i. ' +
          'Die Artikel: il → i, lo/l\' (m) → gli, la/l\' (f) → le.',
        examples: [
          { it: 'i libri', de: 'die Bücher' },
          { it: 'gli studenti', de: 'die Studenten' },
          { it: 'le case', de: 'die Häuser' },
        ],
      },
      {
        heading: 'Ein / eine',
        body: 'un = ein (männlich), uno vor s+Konsonant/z, una = eine (weiblich), un\' vor weiblichem Vokal.',
        examples: [
          { it: 'un amico', de: 'ein Freund' },
          { it: 'uno zaino', de: 'ein Rucksack' },
          { it: "un'amica", de: 'eine Freundin' },
        ],
      },
    ],
  },
  {
    id: 'essere-avere',
    icon: '⚖️',
    title: 'Essere & Avere (sein & haben)',
    intro: 'Die zwei wichtigsten Verben – beide unregelmäßig, beide überall.',
    sections: [
      {
        heading: 'essere = sein',
        body: 'sono, sei, è, siamo, siete, sono. Achtung: „è" (er/sie ist) hat einen Akzent, „e" ohne heißt „und".',
        examples: [
          { it: 'sono Anna', de: 'ich bin Anna' },
          { it: 'sono di Berlino', de: 'ich bin aus Berlin' },
          { it: 'la casa è grande', de: 'das Haus ist groß' },
        ],
      },
      {
        heading: 'avere = haben',
        body: 'ho, hai, ha, abbiamo, avete, hanno. Das „h" ist stumm: ho klingt wie „o".',
        examples: [
          { it: 'ho un fratello', de: 'ich habe einen Bruder' },
          { it: 'hai tempo?', de: 'hast du Zeit?' },
        ],
      },
      {
        heading: 'Anders als im Deutschen',
        body: 'Beim Alter und bei manchen Gefühlen sagt man „haben" statt „sein".',
        examples: [
          { it: 'ho vent\'anni', de: 'ich bin zwanzig (wörtl.: habe 20 Jahre)' },
          { it: 'ho fame / ho sete', de: 'ich habe Hunger / Durst' },
          { it: 'ho freddo', de: 'mir ist kalt' },
        ],
      },
    ],
  },
  {
    id: 'praesens',
    icon: '🔁',
    title: 'Regelmäßige Verben im Präsens',
    intro: 'Die meisten Verben enden auf -are, -ere oder -ire. Du tauschst einfach die Endung.',
    sections: [
      {
        heading: '-are: parlare (sprechen)',
        body: 'parlo, parli, parla, parliamo, parlate, parlano.',
        examples: [
          { it: 'parlo italiano', de: 'ich spreche Italienisch' },
          { it: 'lei parla molto', de: 'sie spricht viel' },
        ],
      },
      {
        heading: '-ere: prendere (nehmen)',
        body: 'prendo, prendi, prende, prendiamo, prendete, prendono.',
        examples: [
          { it: 'prendo un caffè', de: 'ich nehme einen Kaffee' },
          { it: 'prendiamo il treno', de: 'wir nehmen den Zug' },
        ],
      },
      {
        heading: '-ire: dormire (schlafen) und capire (verstehen)',
        body:
          'dormo, dormi, dorme, dormiamo, dormite, dormono. ' +
          'Viele -ire-Verben schieben „-isc-" ein: capisco, capisci, capisce, capiamo, capite, capiscono.',
        examples: [
          { it: 'dormo bene', de: 'ich schlafe gut' },
          { it: 'non capisco', de: 'ich verstehe nicht' },
        ],
      },
      {
        heading: 'Das Muster',
        body:
          'Die Endungen für „ich/du/er" sind bei allen drei Gruppen fast gleich: -o, -i, -a/-e. ' +
          '„wir" endet immer auf -iamo. Übe sie auf der Seite „Verbs".',
      },
    ],
  },
  {
    id: 'zahlen',
    icon: '🔢',
    title: 'Zahlen & nützliche Sätze',
    intro: 'Die ersten Zahlen und ein paar Sätze, mit denen du sofort loslegen kannst.',
    sections: [
      {
        heading: 'Zahlen 0–10',
        body: 'zero, uno, due, tre, quattro, cinque, sei, sette, otto, nove, dieci.',
      },
      {
        heading: 'Sich vorstellen',
        body: 'Ein paar Sätze für den Anfang:',
        examples: [
          { it: 'Come ti chiami?', de: 'Wie heißt du?' },
          { it: 'Mi chiamo Anna', de: 'Ich heiße Anna' },
          { it: 'Piacere!', de: 'Freut mich!' },
          { it: 'Non capisco', de: 'Ich verstehe nicht' },
          { it: 'Parli tedesco?', de: 'Sprichst du Deutsch?' },
          { it: 'Un caffè, per favore', de: 'Einen Kaffee, bitte' },
        ],
      },
    ],
  },
];
