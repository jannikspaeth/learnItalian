// ─── Grundlagen (A1 grammar mini-lessons) ──────────────────────────────────────
// Short, readable first-steps lessons for true beginners (A1 profiles). Written in German
// (the learner's L1) and rendered on /grammar as collapsible cards. Keep each
// lesson tight: a one-line intro, a few sections, and concrete es→de examples.

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
    icon: '👤',
    title: 'Personalpronomen (ich, du, er …)',
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
    icon: '🔤',
    title: 'Nomen & Artikel (el / la)',
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
    icon: '⚖️',
    title: 'Ser vs. Estar (zweimal „sein")',
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
    icon: '🔁',
    title: 'Regelmäßige Verben im Präsens',
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
    icon: '🔢',
    title: 'Zahlen & nützliche Sätze',
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
];
