import type { GrammarLesson } from '../grammar-lessons';

// ─── Grundlagen (A1 grammar mini-lessons, French) ────────────────────────────────
// Short, readable first-steps lessons for beginners, written in German and
// rendered on /grammar as collapsible cards. Same topics as the Italian lessons.

export const GRAMMAR_LESSONS: GrammarLesson[] = [
  {
    id: 'aussprache',
    icon: '🗣️',
    title: 'Aussprache & Alphabet',
    intro: 'Im Französischen schreibt man mehr, als man spricht – ein paar Regeln helfen enorm.',
    sections: [
      {
        heading: 'Stumme Endungen',
        body:
          'Die meisten Konsonanten am Wortende spricht man nicht: -s, -t, -d, -x, -z und das -e am Ende bleiben stumm. ' +
          'Ausnahmen merkt man sich mit „CaReFuL": c, r, f, l werden am Ende oft gesprochen. Das „h" ist immer stumm.',
        examples: [
          { target: 'petit', de: '→ „peti" (klein)' },
          { target: 'ils parlent', de: '→ „il parl" (sie sprechen)' },
          { target: 'le bac, la mer, le chef', de: 'c, r, f am Ende hörbar' },
        ],
      },
      {
        heading: 'Wichtige Laute',
        body:
          '„ou" klingt wie deutsches „u", „u" wie deutsches „ü", „oi" wie „ua", „eau/au" wie „o", „ch" wie „sch", ' +
          '„gn" wie „nj". Vor e und i klingen c wie „s" und g wie „sch" (weich).',
        examples: [
          { target: 'bonjour', de: '→ „bonschur"' },
          { target: 'tu', de: '→ „tü" (du)' },
          { target: 'moi, beau', de: '→ „mua", „bo"' },
          { target: 'montagne', de: '→ „montanj" (Berg)' },
        ],
      },
      {
        heading: 'Nasale',
        body:
          'Vokal + n oder m am Silbenende wird durch die Nase gesprochen, das n selbst hört man kaum: ' +
          'an/en, on, in/un. Folgt ein Vokal, ist der Laut nicht nasal.',
        examples: [
          { target: 'enfant', de: '→ nasal „aⁿfaⁿ" (Kind)' },
          { target: 'bon / bonne', de: 'nasal / nicht nasal (gut)' },
          { target: 'vin', de: '→ nasal „wäⁿ" (Wein)' },
        ],
      },
      {
        heading: 'Bindung & Akzente',
        body:
          'Ein stummer Endkonsonant wird vor einem Vokal oft mitgesprochen (liaison): les amis = „le-sami". ' +
          'Die Betonung liegt immer auf der letzten Silbe. Akzente zeigen die Aussprache (é geschlossen, è offen) ' +
          'oder unterscheiden Wörter: ou (oder) / où (wo).',
        examples: [
          { target: 'les amis', de: '→ „le-sami" (die Freunde)' },
          { target: 'café, père', de: '„é" geschlossen, „è" offen' },
          { target: 'ou / où', de: 'oder / wo' },
        ],
      },
    ],
  },
  {
    id: 'pronomen',
    icon: '👤',
    title: 'Personalpronomen (ich, du, er …)',
    intro: 'Im Französischen steht das Pronomen immer vor dem Verb – anders als im Italienischen.',
    sections: [
      {
        heading: 'Die Pronomen',
        body:
          'je = ich · tu = du · il = er · elle = sie · on = man/wir (Umgangssprache) · ' +
          'nous = wir · vous = ihr / Sie · ils = sie (männlich oder gemischt) · elles = sie (nur weiblich).',
        examples: [
          { target: 'je suis Anna', de: 'ich bin Anna' },
          { target: 'tu es mon amie', de: 'du bist meine Freundin' },
        ],
      },
      {
        heading: 'Nie weglassen – und je wird zu j\'',
        body:
          'Weil man viele Verbformen gleich ausspricht (parle, parles, parlent), braucht es immer das Pronomen. ' +
          'Vor Vokal oder stummem h wird je zu j\'.',
        examples: [
          { target: "j'aime, j'habite", de: 'ich liebe, ich wohne' },
          { target: 'on y va ?', de: 'gehen wir?' },
        ],
      },
      {
        heading: 'Höflich: vous',
        body: 'Wer siezt, benutzt „vous" mit der Verbform der 2. Person Plural – für eine oder mehrere Personen.',
        examples: [
          { target: 'Comment allez-vous ?', de: 'Wie geht es Ihnen?' },
          { target: 'Vous êtes d\'ici ?', de: 'Sind Sie von hier?' },
        ],
      },
    ],
  },
  {
    id: 'artikel',
    icon: '🔤',
    title: 'Nomen & Artikel (le / la)',
    intro: 'Jedes Nomen ist männlich oder weiblich – lerne den Artikel immer mit.',
    sections: [
      {
        heading: 'Bestimmte Artikel',
        body:
          'le (männlich), la (weiblich), vor Vokal oder stummem h beide: l\'. Mehrzahl immer les. ' +
          'Das Geschlecht lässt sich oft nicht erraten – darum steht der Artikel im Wortschatz immer dabei.',
        examples: [
          { target: 'le livre · la maison', de: 'das Buch · das Haus' },
          { target: "l'ami · l'école", de: 'der Freund · die Schule' },
          { target: 'les livres', de: 'die Bücher' },
        ],
      },
      {
        heading: 'Unbestimmte und Teilungsartikel',
        body:
          'un (männlich), une (weiblich), des (Mehrzahl). Für unbestimmte Mengen (Essen, Trinken) steht der ' +
          'Teilungsartikel du / de la / de l\': du pain, de l\'eau. Nach Verneinung wird daraus de: pas de pain.',
        examples: [
          { target: 'un café, une pomme', de: 'ein Kaffee, ein Apfel' },
          { target: 'du pain, de la confiture', de: 'Brot, Marmelade (etwas davon)' },
          { target: 'je ne mange pas de viande', de: 'ich esse kein Fleisch' },
        ],
      },
      {
        heading: 'Mehrzahl',
        body:
          'Meist + s, das man nicht hört – die Mehrzahl erkennt man am Artikel. -eau wird zu -eaux, -al oft zu -aux.',
        examples: [
          { target: 'la fleur → les fleurs', de: 'die Blume → die Blumen' },
          { target: 'le gâteau → les gâteaux', de: 'der Kuchen → die Kuchen' },
          { target: 'le journal → les journaux', de: 'die Zeitung → die Zeitungen' },
        ],
      },
    ],
  },
  {
    id: 'etre-avoir',
    icon: '⚖️',
    title: 'être & avoir',
    intro: 'Die zwei wichtigsten Verben – sie bilden auch das Perfekt.',
    sections: [
      {
        heading: 'être (sein)',
        body: 'je suis, tu es, il/elle est, nous sommes, vous êtes, ils/elles sont.',
        examples: [
          { target: 'Je suis allemand.', de: 'Ich bin Deutscher.' },
          { target: 'Nous sommes fatigués.', de: 'Wir sind müde.' },
        ],
      },
      {
        heading: 'avoir (haben)',
        body:
          "j'ai, tu as, il/elle a, nous avons, vous avez, ils/elles ont. Das Alter, Hunger, Durst, Angst … " +
          'drückt man mit avoir aus.',
        examples: [
          { target: "J'ai vingt ans.", de: 'Ich bin zwanzig Jahre alt.' },
          { target: "J'ai faim et j'ai soif.", de: 'Ich habe Hunger und Durst.' },
        ],
      },
      {
        heading: 'Es gibt: il y a',
        body: 'il y a bedeutet „es gibt" – für Einzahl und Mehrzahl gleich.',
        examples: [
          { target: 'Il y a un café ici.', de: 'Hier gibt es ein Café.' },
          { target: 'Il y a beaucoup de gens.', de: 'Es gibt viele Leute.' },
        ],
      },
    ],
  },
  {
    id: 'praesens',
    icon: '🔁',
    title: 'Präsens der Verben',
    intro: 'Die meisten Verben enden auf -er und sind regelmäßig.',
    sections: [
      {
        heading: 'Verben auf -er',
        body:
          'Stamm + -e, -es, -e, -ons, -ez, -ent. Gesprochen klingen je parle, tu parles, il parle und ils parlent gleich.',
        examples: [
          { target: 'je parle, nous parlons', de: 'ich spreche, wir sprechen' },
          { target: 'vous parlez, ils parlent', de: 'ihr sprecht, sie sprechen' },
        ],
      },
      {
        heading: 'Verben auf -ir (2. Gruppe) und -re',
        body:
          'Viele -ir-Verben schieben im Plural -iss- ein: je finis, nous finissons, ils finissent. ' +
          '-re-Verben: je vends, il vend, nous vendons, ils vendent.',
        examples: [
          { target: 'je choisis, nous choisissons', de: 'ich wähle, wir wählen' },
          { target: 'tu attends, ils attendent', de: 'du wartest, sie warten' },
        ],
      },
      {
        heading: 'Die wichtigsten unregelmäßigen',
        body:
          'aller (je vais, ils vont), faire (je fais, vous faites), prendre (je prends, ils prennent), ' +
          'venir (je viens), pouvoir (je peux), vouloir (je veux). Sie kommen so oft vor, dass man sie schnell kann.',
        examples: [
          { target: 'Je vais au cinéma.', de: 'Ich gehe ins Kino.' },
          { target: 'Qu\'est-ce que tu fais ?', de: 'Was machst du?' },
        ],
      },
    ],
  },
  {
    id: 'zahlen',
    icon: '🔢',
    title: 'Zahlen',
    intro: 'Bis 69 ganz regelmäßig – danach wird gerechnet.',
    sections: [
      {
        heading: '0 bis 20',
        body:
          'zéro, un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix, onze, douze, treize, quatorze, quinze, ' +
          'seize, dix-sept, dix-huit, dix-neuf, vingt.',
        examples: [{ target: 'J\'ai deux frères.', de: 'Ich habe zwei Brüder.' }],
      },
      {
        heading: 'Zehner bis 69',
        body:
          'vingt (20), trente (30), quarante (40), cinquante (50), soixante (60). Bei 21, 31 … steht „et un": vingt et un. ' +
          'Sonst mit Bindestrich: vingt-deux, trente-cinq.',
        examples: [{ target: 'vingt et un, quarante-trois', de: '21, 43' }],
      },
      {
        heading: '70 bis 99: rechnen',
        body:
          '70 = soixante-dix (60 + 10), 71 = soixante et onze, 80 = quatre-vingts (4 × 20), 81 = quatre-vingt-un, ' +
          '90 = quatre-vingt-dix (4 × 20 + 10). 100 = cent, 1000 = mille. In Belgien und der Schweiz sagt man ' +
          'auch septante (70) und nonante (90).',
        examples: [
          { target: 'soixante-quinze', de: '75 (60 + 15)' },
          { target: 'quatre-vingt-dix-neuf', de: '99 (4 × 20 + 19)' },
        ],
      },
    ],
  },
];
