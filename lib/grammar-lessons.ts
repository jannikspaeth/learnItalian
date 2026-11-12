// ─── Grammar lessons ──────────────────────────────────────────────────────────
// Explanations from the first steps up to B1, written in German (the learner's L1)
// and rendered on /grammar as collapsible cards, grouped by level. Every section is
// built from blocks (see GrammarSection): a short body, bullet points, a table of
// forms, examples to listen to, and "Merke" / "Achtung" boxes. Keep sentences short
// and mark the key words with **bold**. Exercise sets link here via `lessonId`.

import type { IconName } from './icon-names';
export interface GrammarExample {
  target: string; // sentence in the target language
  de: string;
}

export interface GrammarTable {
  head: string[];
  rows: string[][]; // first cell of a row is its label (person, gender …)
}

// A section is built from optional blocks, rendered in this order:
// body → points → table → examples → tip → warn. Strings may mark **key words**
// and wrong forms as ~~struck~~.
export interface GrammarSection {
  heading: string;
  body?: string;
  points?: string[];        // short rules as a bullet list
  table?: GrammarTable;     // forms at a glance
  examples?: GrammarExample[];
  tip?: string;             // "Merke:" box — the one thing to remember
  warn?: string;            // "Achtung:" box — the typical mistake
}

export interface GrammarLesson {
  id: string;
  icon: IconName;
  title: string;
  level?: 'A1' | 'A2' | 'B1'; // lessons without a level are listed as one group
  intro: string;
  sections: GrammarSection[];
}

const PERSONS = ['io', 'tu', 'lui / lei / Lei', 'noi', 'voi', 'loro'];
// A conjugation table: one column per verb, one row per person.
const conj = (verbs: string[], ...forms: string[][]): GrammarTable => ({
  head: ['', ...verbs],
  rows: PERSONS.map((p, i) => [p, ...forms.map(f => f[i])]),
});

export const GRAMMAR_LESSONS: GrammarLesson[] = [
  // ════════════════════════════════ A1 ════════════════════════════════
  {
    id: "aussprache",
    icon: "speech",
    title: "Aussprache & Alphabet",
    level: "A1",
    intro: "Gute Nachricht: Italienisch wird fast immer so gesprochen, wie es geschrieben wird.",
    sections: [
      {
        heading: "Die Grundregeln",
        points: [
          "Die Vokale **a, e, i, o, u** klingen klar und kurz – nie wie ein deutsches „ei“ oder „au“",
          "Das **h** ist immer **stumm**: ho = „o“, hotel = „otel“",
          "Das **r** wird mit der Zungenspitze leicht **gerollt**",
          "**z** klingt wie „ts“ oder „ds“: pizza = „pitsa“, zero = „dsero“",
          "**s** zwischen Vokalen ist meist weich (casa), sonst scharf (sole)",
        ],
        examples: [
          { target: "ho", de: "„o“ – ich habe" },
          { target: "Roma", de: "mit gerolltem r" },
          { target: "pizza", de: "„pitsa“" },
        ],
      },
      {
        heading: "c und g: hart oder weich",
        body: "Ob c und g hart oder weich klingen, entscheidet der **Vokal danach**.",
        table: {
          head: ["", "vor a, o, u", "vor e, i", "mit h vor e, i"],
          rows: [
            ["c", "**hart** „k“: casa, cosa", "**weich** „tsch“: cena, ciao", "**hart** „k“: che, chi"],
            ["g", "**hart** „g“: gatto, gusto", "**weich** „dsch“: gelato, giro", "**hart** „g“: spaghetti, ghiaccio"],
          ],
        },
        examples: [
          { target: "ciao", de: "„tschao“" },
          { target: "gelato", de: "„dschelato“" },
          { target: "che", de: "„ke“ – was / dass" },
          { target: "spaghetti", de: "„spagetti“" },
        ],
        tip: "Ein **i** nach c/g vor einem anderen Vokal wird nicht gesprochen, es macht nur weich: ciao = „tschao“, giorno = „dschorno“.",
      },
      {
        heading: "gli, gn und sc",
        table: {
          head: ["Schreibung", "klingt wie", "Beispiel"],
          rows: [
            ["gli", "„lj“ wie in Familie", "figlio, famiglia"],
            ["gn", "„nj“ wie in Champagner", "gnocchi, bagno"],
            ["sce / sci", "„sch“", "pesce, sciare"],
            ["sca / sco / scu / sch", "„sk“", "scuola, schema"],
          ],
        },
        examples: [
          { target: "la famiglia", de: "die Familie" },
          { target: "gli gnocchi", de: "die Gnocchi" },
          { target: "il pesce", de: "der Fisch" },
          { target: "la scuola", de: "die Schule" },
        ],
      },
      {
        heading: "Doppelte Konsonanten & Betonung",
        points: [
          "**Doppelte Konsonanten** werden länger und kräftiger gesprochen – das ändert die Bedeutung",
          "Die meisten Wörter werden auf der **vorletzten Silbe** betont: a**mi**co, ra**gaz**za",
          "Ein **Akzent** am Wortende zeigt Betonung auf der letzten Silbe: città, caffè, perché",
        ],
        examples: [
          { target: "pala · palla", de: "Schaufel · Ball" },
          { target: "caro · carro", de: "lieb / teuer · Karren" },
          { target: "la città", de: "die Stadt – Betonung am Ende" },
        ],
        warn: "**è** (ist) und **e** (und) unterscheiden sich nur durch den Akzent – beim Schreiben nicht vergessen.",
      },
    ],
  },
  {
    id: "pronomen",
    icon: "user",
    title: "Personalpronomen (ich, du, er …)",
    level: "A1",
    intro: "Die Wörter für ich, du, er … – und warum man sie meistens weglässt.",
    sections: [
      {
        heading: "Die Pronomen",
        table: {
          head: ["", "Einzahl", "Mehrzahl"],
          rows: [
            ["1. Person", "**io** – ich", "**noi** – wir"],
            ["2. Person", "**tu** – du", "**voi** – ihr"],
            ["3. Person", "**lui** – er · **lei** – sie", "**loro** – sie"],
            ["höflich", "**Lei** – Sie", "**voi** – Sie (an mehrere)"],
          ],
        },
        tip: "**io** wird nur am Satzanfang großgeschrieben.",
      },
      {
        heading: "Meistens lässt man sie weg",
        body: "Die **Verbendung** zeigt schon, wer gemeint ist. Das Pronomen nimmt man nur zur **Betonung** oder zum **Gegensatz**.",
        examples: [
          { target: "Parlo italiano.", de: "Ich spreche Italienisch." },
          { target: "Abitiamo a Berlino.", de: "Wir wohnen in Berlin." },
          { target: "Io lavoro, tu dormi!", de: "Ich arbeite, (und) du schläfst!" },
        ],
        warn: "Ein Satz wie ~~Io sono Marco~~ ist nicht falsch, klingt aber betont. Normal ist: **Sono Marco.**",
      },
      {
        heading: "Höflich: Lei",
        points: [
          "Wen man siezt, spricht man mit **Lei** an – das Verb steht in der **3. Person Einzahl**, wie bei „er/sie“",
          "Das gilt für Männer und Frauen gleichermaßen",
          "Mehrere Personen spricht man einfach mit **voi** an",
        ],
        examples: [
          { target: "Come sta?", de: "Wie geht es Ihnen?" },
          { target: "Lei è di qui?", de: "Sind Sie von hier?" },
          { target: "Dove abitate?", de: "Wo wohnt ihr? / Wo wohnen Sie (mehrere)?" },
        ],
      },
    ],
  },
  {
    id: "artikel",
    icon: "letters",
    title: "Nomen & Artikel (il / la)",
    level: "A1",
    intro: "Jedes Nomen ist männlich oder weiblich – lerne den Artikel immer gleich mit.",
    sections: [
      {
        heading: "Männlich oder weiblich?",
        points: [
          "Auf **-o** meist **männlich**: il libro, il ragazzo",
          "Auf **-a** meist **weiblich**: la casa, la ragazza",
          "Auf **-e** kann beides sein: il fiore (m), la notte (f) – hier hilft nur Lernen",
        ],
        warn: "Ausnahmen: **la mano** (die Hand), **la radio**, **la foto** sind weiblich; **il problema**, **il sistema**, **il programma** sind männlich.",
      },
      {
        heading: "Der bestimmte Artikel (der, die, das)",
        body: "Welcher Artikel passt, hängt vom **Geschlecht** und vom **Anfang des Wortes** ab.",
        table: {
          head: ["", "Einzahl", "Mehrzahl", "wann?"],
          rows: [
            ["männlich", "**il** libro", "**i** libri", "normaler Konsonant"],
            ["männlich", "**lo** studente, **lo** zaino", "**gli** studenti", "s + Konsonant, z, gn, ps, y"],
            ["männlich", "**l'**amico", "**gli** amici", "Vokal"],
            ["weiblich", "**la** casa", "**le** case", "Konsonant"],
            ["weiblich", "**l'**isola", "**le** isole", "Vokal"],
          ],
        },
        tip: "Achte auf den **ersten Buchstaben**: lo **st**udente, aber il **t**reno.",
      },
      {
        heading: "Die Mehrzahl der Nomen",
        table: {
          head: ["Endung", "Einzahl", "Mehrzahl"],
          rows: [
            ["-o → -i", "il libro", "i libri"],
            ["-a → -e", "la casa", "le case"],
            ["-e → -i", "il fiore · la notte", "i fiori · le notti"],
            ["bleibt gleich", "la città · il film", "le città · i film"],
          ],
        },
        points: [
          "Gleich bleiben: Wörter mit **betonter Endung** (città, caffè) und **Fremdwörter** (bar, sport)",
          "Unregelmäßig: la mano → le **mani**, l'uomo → gli **uomini**, l'uovo → le **uova**",
        ],
      },
      {
        heading: "Der unbestimmte Artikel (ein, eine)",
        table: {
          head: ["", "Artikel", "Beispiel", "wann?"],
          rows: [
            ["männlich", "**un**", "un libro, un amico", "normal und vor Vokal"],
            ["männlich", "**uno**", "uno studente, uno zio", "s + Konsonant, z, gn, ps"],
            ["weiblich", "**una**", "una casa", "Konsonant"],
            ["weiblich", "**un'**", "un'amica", "Vokal"],
          ],
        },
        warn: "Nur weiblich mit Apostroph: **un amico** (m), aber **un'amica** (f).",
      },
    ],
  },
  {
    id: "essere-avere",
    icon: "scale",
    title: "Essere & Avere (sein & haben)",
    level: "A1",
    intro: "Die zwei wichtigsten Verben – beide unregelmäßig, beide überall.",
    sections: [
      {
        heading: "Die Formen",
        table: conj(["essere (sein)", "avere (haben)"],
          ["sono", "sei", "è", "siamo", "siete", "sono"],
          ["ho", "hai", "ha", "abbiamo", "avete", "hanno"]),
        tip: "**sono** heißt „ich bin“ **und** „sie sind“ – der Zusammenhang klärt es.",
        warn: "Das **h** bei ho, hai, ha, hanno wird nicht gesprochen. Es unterscheidet nur die Schreibung: **ha** (hat) – **a** (in, nach).",
      },
      {
        heading: "essere – wofür?",
        points: [
          "Herkunft und Nationalität: Sono **di** Berlino, Sono tedesco",
          "Beruf und Eigenschaft: È medico, È simpatica",
          "Zustand: Sono stanco",
          "Ort: Il bagno è qui",
        ],
        examples: [
          { target: "Sono di Monaco.", de: "Ich bin aus München." },
          { target: "Marco è molto simpatico.", de: "Marco ist sehr sympathisch." },
          { target: "Siamo in vacanza.", de: "Wir sind im Urlaub." },
        ],
      },
      {
        heading: "Anders als im Deutschen: avere",
        body: "Bei **Alter** und vielen **körperlichen Zuständen** sagt das Italienische „haben“.",
        table: {
          head: ["Italienisch", "wörtlich", "Deutsch"],
          rows: [
            ["ho vent'anni", "ich habe 20 Jahre", "ich bin 20"],
            ["ho fame / sete", "ich habe Hunger / Durst", "ich habe Hunger / Durst"],
            ["ho freddo / caldo", "ich habe Kälte / Wärme", "mir ist kalt / warm"],
            ["ho sonno", "ich habe Schlaf", "ich bin müde"],
            ["ho paura", "ich habe Angst", "ich habe Angst"],
            ["hai ragione", "du hast Recht", "du hast Recht"],
          ],
        },
        examples: [
          { target: "Quanti anni hai? – Ho trent'anni.", de: "Wie alt bist du? – Ich bin dreißig." },
          { target: "Ho freddo.", de: "Mir ist kalt." },
        ],
        warn: "Nicht ~~sono vent'anni~~ – richtig ist **ho** vent'anni.",
      },
    ],
  },
  {
    id: "praesens",
    icon: "repeat",
    title: "Regelmäßige Verben im Präsens",
    level: "A1",
    intro: "Die meisten Verben enden auf -are, -ere oder -ire. Du tauschst einfach die Endung.",
    sections: [
      {
        heading: "So funktioniert es",
        points: [
          "Infinitiv-Endung **-are / -ere / -ire** weg → **Stamm**: parl-are → parl-",
          "An den Stamm kommt die **Personalendung**",
          "Das Pronomen lässt man meist weg – die Endung zeigt die Person",
        ],
      },
      {
        heading: "Die drei Gruppen",
        table: conj(["parlare (sprechen)", "prendere (nehmen)", "dormire (schlafen)"],
          ["parl**o**", "parl**i**", "parl**a**", "parl**iamo**", "parl**ate**", "parl**ano**"],
          ["prend**o**", "prend**i**", "prend**e**", "prend**iamo**", "prend**ete**", "prend**ono**"],
          ["dorm**o**", "dorm**i**", "dorm**e**", "dorm**iamo**", "dorm**ite**", "dorm**ono**"]),
        tip: "**io -o**, **tu -i** und **noi -iamo** sind in allen drei Gruppen gleich. Bei voi steckt der Vokal des Infinitivs drin: parl**a**te, prend**e**te, dorm**i**te.",
      },
      {
        heading: "-ire mit -isc-",
        body: "Viele -ire-Verben schieben **-isc-** ein – aber **nicht bei noi und voi**. Dazu gehören capire, finire, preferire, pulire, spedire.",
        table: conj(["capire (verstehen)"],
          ["cap**isc**o", "cap**isc**i", "cap**isc**e", "capiamo", "capite", "cap**isc**ono"]),
        examples: [
          { target: "Non capisco.", de: "Ich verstehe nicht." },
          { target: "Preferisci il tè o il caffè?", de: "Magst du lieber Tee oder Kaffee?" },
        ],
      },
      {
        heading: "Kleine Schreibregeln",
        points: [
          "**-care / -gare**: vor i kommt ein **h**, damit der Laut hart bleibt – cerco, cer**ch**i, pa**gh**iamo",
          "**-iare**: kein doppeltes i – mangiare → tu mang**i**, noi mang**iamo**",
        ],
        examples: [
          { target: "Cerchi un hotel?", de: "Suchst du ein Hotel?" },
          { target: "Paghiamo noi.", de: "Wir zahlen." },
        ],
      },
      {
        heading: "Wann benutzt man das Präsens?",
        points: [
          "für das, was **jetzt** passiert: Leggo un libro",
          "für **Gewohnheiten**: Lavoro dalle nove alle cinque",
          "für die **nahe Zukunft**: Domani parto",
        ],
      },
    ],
  },
  {
    id: "zahlen",
    icon: "hash",
    title: "Zahlen, Uhrzeit & Datum",
    level: "A1",
    intro: "Zählen, die Uhrzeit sagen und ein Datum nennen – mit ein paar einfachen Mustern.",
    sections: [
      {
        heading: "Zahlen 0–20",
        table: {
          head: ["", "", "", ""],
          rows: [
            ["0 zero", "1 uno", "2 due", "3 tre"],
            ["4 quattro", "5 cinque", "6 sei", "7 sette"],
            ["8 otto", "9 nove", "10 dieci", "11 undici"],
            ["12 dodici", "13 tredici", "14 quattordici", "15 quindici"],
            ["16 sedici", "17 diciassette", "18 diciotto", "19 diciannove"],
            ["20 venti", "", "", ""],
          ],
        },
        examples: [{ target: "Ho due fratelli.", de: "Ich habe zwei Brüder." }],
      },
      {
        heading: "Zehner und große Zahlen",
        table: {
          head: ["", "", "", ""],
          rows: [
            ["20 venti", "30 trenta", "40 quaranta", "50 cinquanta"],
            ["60 sessanta", "70 settanta", "80 ottanta", "90 novanta"],
            ["100 cento", "200 duecento", "1000 mille", "2000 duemila"],
          ],
        },
        points: [
          "Zehner + Einer in **einem Wort**: venti**due**, trenta**cinque**",
          "Bei **uno** und **otto** fällt der Vokal des Zehners weg: vent**uno**, vent**otto**",
          "Endet die Zahl auf **tre**, bekommt sie einen Akzent: ventitr**é**",
          "1000 = **mille**, aber 2000 = due**mila**",
        ],
        examples: [
          { target: "quarantotto", de: "48" },
          { target: "centocinquanta euro", de: "150 Euro" },
          { target: "duemilaventisei", de: "2026" },
        ],
      },
      {
        heading: "Die Uhrzeit",
        points: [
          "Frage: **Che ore sono?** oder **Che ora è?**",
          "Antwort meist in der Mehrzahl: **Sono le** tre",
          "Einzahl nur bei **è l'una**, **è mezzogiorno**, **è mezzanotte**",
          "Viertel = **un quarto**, halb = **mezza**, vor = **meno**",
          "Um wie viel Uhr? = **A che ora?** → **alle** otto, **all'**una",
        ],
        examples: [
          { target: "Sono le tre e un quarto.", de: "Es ist Viertel nach drei." },
          { target: "Sono le otto e mezza.", de: "Es ist halb neun." },
          { target: "Sono le sei meno dieci.", de: "Es ist zehn vor sechs." },
          { target: "Il treno parte alle nove.", de: "Der Zug fährt um neun ab." },
        ],
        warn: "„halb neun“ ist auf Italienisch **le otto e mezza** – also „acht und halb“, nicht neun!",
      },
      {
        heading: "Wochentage, Monate & Datum",
        points: [
          "**lunedì, martedì, mercoledì, giovedì, venerdì, sabato, domenica** – klein geschrieben",
          "**gennaio, febbraio, marzo, aprile, maggio, giugno, luglio, agosto, settembre, ottobre, novembre, dicembre**",
          "Datum: Artikel + **Grundzahl**: il tre maggio – nur der Erste heißt **il primo**",
          "Mit Artikel heißt der Wochentag „jeden …“: **il** sabato = samstags",
        ],
        examples: [
          { target: "Oggi è il primo aprile.", de: "Heute ist der erste April." },
          { target: "Sono nato il 12 luglio.", de: "Ich bin am 12. Juli geboren." },
          { target: "Il sabato vado al mercato.", de: "Samstags gehe ich auf den Markt." },
        ],
      },
      {
        heading: "Sich vorstellen",
        examples: [
          { target: "Come ti chiami? – Mi chiamo Anna.", de: "Wie heißt du? – Ich heiße Anna." },
          { target: "Piacere!", de: "Freut mich!" },
          { target: "Di dove sei? – Sono di Amburgo.", de: "Woher kommst du? – Ich bin aus Hamburg." },
          { target: "Quanti anni hai?", de: "Wie alt bist du?" },
          { target: "Parli tedesco?", de: "Sprichst du Deutsch?" },
        ],
      },
    ],
  },
  {
    id: "es-gibt",
    icon: "pointer",
    title: "c'è / ci sono, questo & quello",
    level: "A1",
    intro: "Sagen, was es gibt – und auf Dinge zeigen.",
    sections: [
      {
        heading: "c'è und ci sono = es gibt",
        table: {
          head: ["", "bejaht", "verneint", "Frage"],
          rows: [
            ["Einzahl", "**c'è** un bar", "**non c'è** pane", "C'è un bar qui?"],
            ["Mehrzahl", "**ci sono** due bar", "**non ci sono** bar", "Ci sono bar qui?"],
          ],
        },
        examples: [
          { target: "C'è un bar qui vicino?", de: "Gibt es hier in der Nähe eine Bar?" },
          { target: "Ci sono molti turisti.", de: "Es gibt viele Touristen." },
          { target: "Non c'è nessuno.", de: "Es ist niemand da." },
        ],
        tip: "c'è heißt auch „ist da“: **C'è Marco?** – Ist Marco da?",
      },
      {
        heading: "questo = dieser (hier)",
        table: {
          head: ["", "Einzahl", "Mehrzahl"],
          rows: [
            ["männlich", "**questo** libro", "**questi** libri"],
            ["weiblich", "**questa** casa", "**queste** case"],
          ],
        },
        points: ["Vor Vokal oft verkürzt: **quest'**anno"],
        examples: [
          { target: "Questo libro è mio.", de: "Dieses Buch gehört mir." },
          { target: "Quest'anno vado in Sicilia.", de: "Dieses Jahr fahre ich nach Sizilien." },
        ],
      },
      {
        heading: "quello = jener (dort)",
        body: "Vor einem Nomen verändert sich quello **genau wie der bestimmte Artikel**.",
        table: {
          head: ["Artikel", "quello", "Beispiel"],
          rows: [
            ["il", "**quel**", "quel ragazzo"],
            ["lo", "**quello**", "quello zaino"],
            ["l'", "**quell'**", "quell'albero"],
            ["la", "**quella**", "quella casa"],
            ["i", "**quei**", "quei fiori"],
            ["gli", "**quegli**", "quegli amici"],
            ["le", "**quelle**", "quelle case"],
          ],
        },
        tip: "Ohne Nomen danach heißt es einfach **quello / quella / quelli / quelle**: Quale vuoi? – Quello.",
      },
    ],
  },
  {
    id: "adjektive",
    icon: "palette",
    title: "Adjektive",
    level: "A1",
    intro: "Adjektive passen sich dem Nomen an – und stehen meistens dahinter.",
    sections: [
      {
        heading: "Zwei Gruppen",
        table: {
          head: ["", "m. Einzahl", "f. Einzahl", "m. Mehrzahl", "f. Mehrzahl"],
          rows: [
            ["auf -o", "ross**o**", "ross**a**", "ross**i**", "ross**e**"],
            ["auf -e", "grand**e**", "grand**e**", "grand**i**", "grand**i**"],
          ],
        },
        examples: [
          { target: "un vestito rosso · una macchina rossa", de: "ein rotes Kleid, ein rotes Auto" },
          { target: "un uomo gentile · una donna gentile", de: "ein freundlicher Mann, eine freundliche Frau" },
        ],
        warn: "Adjektive auf -e haben **keine** eigene weibliche Form: una casa grand**e** (nicht ~~granda~~).",
      },
      {
        heading: "Wo steht das Adjektiv?",
        points: [
          "Meist **hinter** dem Nomen: un libro **interessante**",
          "Farben, Nationalitäten und Formen **immer hinter**: il vino **rosso**, la cucina **italiana**",
          "Einige kurze, häufige stehen oft **davor**: bello, buono, grande, piccolo, nuovo, vecchio",
        ],
        examples: [
          { target: "una piccola casa", de: "ein kleines Haus" },
          { target: "una giornata lunga", de: "ein langer Tag" },
        ],
      },
      {
        heading: "bello und buono vor dem Nomen",
        points: [
          "**bello** verändert sich davor wie der bestimmte Artikel (wie quello): un **bel** libro, un **bell'**albero, un **bello** zaino, i **bei** fiori, i **begli** occhi",
          "**buono** verändert sich davor wie un / uno: un **buon** vino, un **buono** stipendio, una **buona** idea",
        ],
        examples: [
          { target: "Che bel tempo!", de: "Was für schönes Wetter!" },
          { target: "Buon appetito!", de: "Guten Appetit!" },
        ],
      },
      {
        heading: "Besonderheiten",
        points: [
          "Unveränderlich: **blu, rosa, viola, beige**: le scarpe blu",
          "-co / -go bekommen oft ein **h**: bianco → bian**ch**i, lungo → lun**gh**e",
          "Passt ein Adjektiv zu einer gemischten Gruppe, nimmt man die **männliche** Mehrzahl: Marco e Anna sono stanch**i**",
        ],
      },
    ],
  },
  {
    id: "possessiv",
    icon: "home",
    title: "Possessivpronomen (mein, dein …)",
    level: "A1",
    intro: "Im Italienischen steht vor „mein“ meistens ein Artikel – il mio libro.",
    sections: [
      {
        heading: "Die Formen",
        table: {
          head: ["", "m. Einzahl", "f. Einzahl", "m. Mehrzahl", "f. Mehrzahl"],
          rows: [
            ["mein", "il **mio**", "la **mia**", "i **miei**", "le **mie**"],
            ["dein", "il **tuo**", "la **tua**", "i **tuoi**", "le **tue**"],
            ["sein / ihr / Ihr", "il **suo**", "la **sua**", "i **suoi**", "le **sue**"],
            ["unser", "il **nostro**", "la **nostra**", "i **nostri**", "le **nostre**"],
            ["euer", "il **vostro**", "la **vostra**", "i **vostri**", "le **vostre**"],
            ["ihr (Mz.)", "il **loro**", "la **loro**", "i **loro**", "le **loro**"],
          ],
        },
        tip: "Normalerweise steht der **Artikel davor**: il mio libro, la nostra casa.",
      },
      {
        heading: "Nach dem Besitz, nicht nach dem Besitzer",
        body: "Die Form richtet sich nach dem **Ding, das besessen wird** – nicht nach der Person.",
        examples: [
          { target: "Marco e la sua macchina", de: "Marco und sein Auto (macchina ist weiblich)" },
          { target: "Anna e il suo libro", de: "Anna und ihr Buch (libro ist männlich)" },
        ],
        warn: "**suo / sua** heißt „sein“ **und** „ihr“ – das Deutsche unterscheidet, das Italienische nicht.",
      },
      {
        heading: "Familie: ohne Artikel",
        points: [
          "Familienmitglieder im **Singular ohne Artikel**: **mia** madre, **tuo** fratello, **sua** moglie",
          "Im **Plural mit Artikel**: **i miei** genitori, **le mie** sorelle",
          "**loro** hat immer einen Artikel: **la loro** figlia",
          "Kosewörter und Ergänzungen mit Artikel: **la mia** mamma, **il mio** fratellino, **il mio** fratello maggiore",
        ],
        examples: [
          { target: "Mia sorella vive a Roma.", de: "Meine Schwester lebt in Rom." },
          { target: "I miei nonni sono simpatici.", de: "Meine Großeltern sind nett." },
        ],
      },
    ],
  },
  {
    id: "fragen",
    icon: "question",
    title: "Fragen & Verneinung",
    level: "A1",
    intro: "Fragen stellen ist leicht: gleiche Wortstellung, nur die Stimme geht nach oben.",
    sections: [
      {
        heading: "Ja/Nein-Fragen",
        body: "Die Wortstellung bleibt wie im Aussagesatz – nur die **Satzmelodie** steigt am Ende.",
        examples: [
          { target: "Parli italiano.", de: "Du sprichst Italienisch." },
          { target: "Parli italiano?", de: "Sprichst du Italienisch?" },
          { target: "Marco è a casa?", de: "Ist Marco zu Hause?" },
        ],
      },
      {
        heading: "Fragewörter",
        table: {
          head: ["Italienisch", "Deutsch", "Beispiel"],
          rows: [
            ["**chi**", "wer", "Chi è?"],
            ["**che cosa / cosa / che**", "was", "Cosa fai?"],
            ["**come**", "wie", "Come stai?"],
            ["**dove**", "wo / wohin", "Dove abiti?"],
            ["**di dove**", "woher", "Di dove sei?"],
            ["**quando**", "wann", "Quando parti?"],
            ["**perché**", "warum", "Perché ridi?"],
            ["**quanto / -a / -i / -e**", "wie viel(e)", "Quanti anni hai?"],
            ["**quale / quali**", "welche(r/s)", "Quale preferisci?"],
          ],
        },
        tip: "**perché** heißt auch „weil“: Perché studi? – **Perché** mi piace.",
        warn: "Vor è wird quale zu **qual** – ohne Apostroph: **Qual è** il tuo nome?",
      },
      {
        heading: "Verneinung mit non",
        body: "**non** steht direkt **vor dem Verb**. Pronomen bleiben zwischen non und Verb.",
        examples: [
          { target: "Non parlo tedesco.", de: "Ich spreche kein Deutsch." },
          { target: "Non lo so.", de: "Ich weiß es nicht." },
          { target: "No, grazie.", de: "Nein, danke." },
        ],
        tip: "„nein“ als Antwort ist **no**, „nicht“ vor dem Verb ist **non**.",
      },
      {
        heading: "Doppelte Verneinung",
        body: "Kommt ein weiteres Verneinungswort dazu, steht es **nach dem Verb** – und **non bleibt trotzdem davor**.",
        table: {
          head: ["", "Deutsch", "Beispiel"],
          rows: [
            ["non … **mai**", "nie", "Non vado mai al cinema."],
            ["non … **niente / nulla**", "nichts", "Non mangio niente."],
            ["non … **nessuno**", "niemand", "Non vedo nessuno."],
            ["non … **più**", "nicht mehr", "Non fumo più."],
            ["non … **ancora**", "noch nicht", "Non è ancora arrivato."],
          ],
        },
        warn: "Steht das Verneinungswort **am Satzanfang**, fällt non weg: **Nessuno** è venuto.",
      },
    ],
  },
  {
    id: "praepositionen",
    icon: "pin",
    title: "Präpositionen (a, di, in, da …)",
    level: "A1",
    intro: "Kleine Wörter, große Wirkung – und mit dem Artikel verschmelzen sie.",
    sections: [
      {
        heading: "Die wichtigsten",
        table: {
          head: ["", "Bedeutung", "Beispiel"],
          rows: [
            ["**di**", "von, aus (Herkunft, Besitz)", "il libro di Marco · sono di Roma"],
            ["**a**", "in, nach, an, um (Uhrzeit)", "a Milano · alle otto"],
            ["**da**", "von, seit, zu / bei (Person)", "vengo da casa · da Marco"],
            ["**in**", "in, nach (Land), mit (Verkehrsmittel)", "in Italia · in treno"],
            ["**con**", "mit", "con te"],
            ["**su**", "auf, über", "sul tavolo"],
            ["**per**", "für, durch, Dauer", "per te · per due ore"],
            ["**tra / fra**", "zwischen, in (Zeit)", "tra un'ora"],
          ],
        },
      },
      {
        heading: "Städte, Länder, Verkehrsmittel",
        points: [
          "Stadt → **a**: Abito **a** Milano, vado **a** Roma",
          "Land, Region, Insel (groß) → **in**: **in** Italia, **in** Toscana, **in** Sicilia",
          "Verkehrsmittel → **in**: **in** treno, **in** macchina, **in** bici – aber **a piedi**",
          "Zu einer Person → **da**: vado **da** Marco, **dal** medico",
          "Seit → **da** + Präsens: abito qui **da** tre anni",
        ],
        examples: [
          { target: "Abito a Milano, in Italia.", de: "Ich wohne in Mailand, in Italien." },
          { target: "Vado da Marco in bici.", de: "Ich fahre mit dem Rad zu Marco." },
          { target: "Studio italiano da due anni.", de: "Ich lerne seit zwei Jahren Italienisch." },
        ],
        warn: "„In Rom“ heißt **a Roma**, nicht ~~in Roma~~.",
      },
      {
        heading: "Mit Artikel verschmolzen",
        body: "a, di, da, in und su verschmelzen mit dem bestimmten Artikel zu einem Wort.",
        table: {
          head: ["", "il", "lo", "l'", "la", "i", "gli", "le"],
          rows: [
            ["**a**", "al", "allo", "all'", "alla", "ai", "agli", "alle"],
            ["**di**", "del", "dello", "dell'", "della", "dei", "degli", "delle"],
            ["**da**", "dal", "dallo", "dall'", "dalla", "dai", "dagli", "dalle"],
            ["**in**", "nel", "nello", "nell'", "nella", "nei", "negli", "nelle"],
            ["**su**", "sul", "sullo", "sull'", "sulla", "sui", "sugli", "sulle"],
          ],
        },
        examples: [
          { target: "al mare · nella borsa · dal medico", de: "ans Meer, in der Tasche, zum Arzt" },
          { target: "il libro del professore", de: "das Buch des Lehrers" },
        ],
        tip: "Muster: **in → ne-**, **di → de-**, der Rest bleibt; dann folgt der Artikel mit Doppel-l (al, allo, alla …).",
      },
      {
        heading: "Wann ohne Artikel?",
        points: [
          "Vor **Städten**: a Roma, di Napoli",
          "In festen Wendungen: **a casa**, **in centro**, **in ufficio**, **a scuola**, **in banca**, **in cucina**",
          "Vor **Familie im Singular** mit Possessiv: **da** mia madre",
        ],
        examples: [
          { target: "Stasera resto a casa.", de: "Heute Abend bleibe ich zu Hause." },
          { target: "Lavoro in ufficio.", de: "Ich arbeite im Büro." },
        ],
      },
    ],
  },
  {
    id: "unregelmaessig",
    icon: "zap",
    title: "Wichtige unregelmäßige Verben",
    level: "A1",
    intro: "Eine Handvoll Verben kommt ständig vor – und tanzt aus der Reihe.",
    sections: [
      {
        heading: "andare, fare, stare, dare",
        table: conj(["andare (gehen)", "fare (machen)", "stare (sein, bleiben)", "dare (geben)"],
          ["vado", "vai", "va", "andiamo", "andate", "vanno"],
          ["faccio", "fai", "fa", "facciamo", "fate", "fanno"],
          ["sto", "stai", "sta", "stiamo", "state", "stanno"],
          ["do", "dai", "dà", "diamo", "date", "danno"]),
        examples: [
          { target: "Vado al mare.", de: "Ich fahre ans Meer." },
          { target: "Come stai? – Sto bene.", de: "Wie geht's dir? – Mir geht's gut." },
          { target: "Che lavoro fai?", de: "Was machst du beruflich?" },
        ],
        tip: "Nach **andare** steht **a + Infinitiv**: Vado **a** mangiare.",
      },
      {
        heading: "Die Modalverben",
        table: conj(["volere (wollen)", "potere (können)", "dovere (müssen)"],
          ["voglio", "vuoi", "vuole", "vogliamo", "volete", "vogliono"],
          ["posso", "puoi", "può", "possiamo", "potete", "possono"],
          ["devo", "devi", "deve", "dobbiamo", "dovete", "devono"]),
        points: ["Danach folgt direkt der **Infinitiv** – ohne „zu“: Devo **lavorare**"],
        examples: [
          { target: "Vuoi un caffè?", de: "Willst du einen Kaffee?" },
          { target: "Posso entrare?", de: "Darf ich hereinkommen?" },
          { target: "Dobbiamo partire.", de: "Wir müssen los." },
        ],
      },
      {
        heading: "venire, uscire, dire, sapere, bere",
        table: conj(["venire", "uscire", "dire", "sapere", "bere"],
          ["vengo", "vieni", "viene", "veniamo", "venite", "vengono"],
          ["esco", "esci", "esce", "usciamo", "uscite", "escono"],
          ["dico", "dici", "dice", "diciamo", "dite", "dicono"],
          ["so", "sai", "sa", "sappiamo", "sapete", "sanno"],
          ["bevo", "bevi", "beve", "beviamo", "bevete", "bevono"]),
        examples: [
          { target: "Vieni con noi?", de: "Kommst du mit uns?" },
          { target: "Stasera esco con gli amici.", de: "Heute Abend gehe ich mit Freunden aus." },
          { target: "Non so.", de: "Ich weiß nicht." },
        ],
      },
      {
        heading: "sapere oder potere?",
        points: [
          "**sapere** + Infinitiv = etwas **gelernt haben**: So nuotare (ich kann schwimmen)",
          "**potere** = **möglich** oder **erlaubt** sein: Oggi non posso nuotare (heute kann ich nicht)",
          "**sapere** allein = wissen: Sai dov'è la stazione?",
        ],
        warn: "„Ich kann Italienisch“ heißt **Parlo italiano** oder So l'italiano – nicht ~~Posso italiano~~.",
      },
    ],
  },
  {
    id: "piacere",
    icon: "heart",
    title: "Mögen: mi piace",
    level: "A1",
    intro: "„Mir gefällt …“ – so drückt man im Italienischen aus, was man mag.",
    sections: [
      {
        heading: "Umgekehrt gedacht",
        body: "piacere heißt **gefallen**. Das, was gefällt, ist das Subjekt – deshalb richtet sich das Verb danach.",
        table: {
          head: ["was gefällt", "Verb", "Beispiel"],
          rows: [
            ["eine Sache", "**piace**", "Mi piace la pizza."],
            ["eine Tätigkeit", "**piace**", "Mi piace leggere."],
            ["mehrere Sachen", "**piacciono**", "Mi piacciono i gatti."],
          ],
        },
        tip: "Übersetze im Kopf mit „gefallen“: Mir **gefällt** die Pizza – mir **gefallen** die Katzen.",
      },
      {
        heading: "Wem gefällt es?",
        table: {
          head: ["", "kurz", "betont"],
          rows: [
            ["mir", "**mi** piace", "**a me** piace"],
            ["dir", "**ti** piace", "**a te** piace"],
            ["ihm", "**gli** piace", "**a lui** piace"],
            ["ihr", "**le** piace", "**a lei** piace"],
            ["Ihnen", "**Le** piace", "**a Lei** piace"],
            ["uns", "**ci** piace", "**a noi** piace"],
            ["euch", "**vi** piace", "**a voi** piace"],
            ["ihnen", "**gli** piace", "**a loro** piace"],
          ],
        },
        examples: [
          { target: "Ti piacciono gli spaghetti?", de: "Magst du Spaghetti?" },
          { target: "A Marco piace ballare. → Gli piace ballare.", de: "Marco tanzt gern. → Er tanzt gern." },
          { target: "A me piace il mare, a te?", de: "Ich mag das Meer, und du?" },
        ],
        warn: "Nicht beides zusammen: ~~A me mi piace~~ – entweder **Mi piace** oder **A me piace**.",
      },
      {
        heading: "Verneint, vergangen, höflich",
        points: [
          "Verneint: **Non** mi piace il caffè",
          "Vergangenheit mit **essere**, Partizip passt sich an: Mi è piaciut**o** il film, Mi è piaciut**a** la pizza",
          "Höflicher Wunsch: **Mi piacerebbe** … (Ich würde gern …)",
        ],
        examples: [
          { target: "Ti è piaciuta la festa?", de: "Hat dir das Fest gefallen?" },
          { target: "Mi piacerebbe visitare Napoli.", de: "Ich würde gern Neapel besuchen." },
        ],
      },
    ],
  },
  {
    id: "reflexiv",
    icon: "mirror",
    title: "Reflexive Verben",
    level: "A1",
    intro: "Verben mit „sich“ – im Italienischen deutlich häufiger als im Deutschen.",
    sections: [
      {
        heading: "Die Pronomen",
        body: "Am Infinitiv erkennt man sie an **-si**: alzarsi, chiamarsi. Beim Konjugieren steht das Pronomen **vor dem Verb**.",
        table: conj(["alzarsi (aufstehen)", "chiamarsi (heißen)"],
          ["**mi** alzo", "**ti** alzi", "**si** alza", "**ci** alziamo", "**vi** alzate", "**si** alzano"],
          ["**mi** chiamo", "**ti** chiami", "**si** chiama", "**ci** chiamiamo", "**vi** chiamate", "**si** chiamano"]),
        examples: [
          { target: "Mi alzo alle sette.", de: "Ich stehe um sieben auf." },
          { target: "Come ti chiami?", de: "Wie heißt du?" },
        ],
      },
      {
        heading: "Typische reflexive Verben",
        table: {
          head: ["Italienisch", "Deutsch"],
          rows: [
            ["svegliarsi", "aufwachen"],
            ["alzarsi", "aufstehen"],
            ["lavarsi", "sich waschen"],
            ["vestirsi", "sich anziehen"],
            ["divertirsi", "sich amüsieren, Spaß haben"],
            ["sentirsi", "sich fühlen"],
            ["riposarsi", "sich ausruhen"],
            ["sposarsi", "heiraten"],
            ["ricordarsi", "sich erinnern"],
          ],
        },
        tip: "Viele davon sind im Deutschen **nicht** reflexiv (aufwachen, heiraten) – lerne sie mit **-si**.",
      },
      {
        heading: "Mit Modalverb und in der Vergangenheit",
        points: [
          "Mit Modalverb: Pronomen **davor** oder **an den Infinitiv** – beides richtig: **Mi** devo alzare = Devo alzar**mi**",
          "Im passato prossimo **immer mit essere**",
          "Das Partizip passt sich ans Subjekt an: Anna si è alzat**a**, ci siamo divertit**i**",
        ],
        examples: [
          { target: "Domani devo alzarmi presto.", de: "Morgen muss ich früh aufstehen." },
          { target: "Ci siamo divertiti molto.", de: "Wir haben viel Spaß gehabt." },
        ],
        warn: "Nicht ~~mi ho lavato~~ – richtig ist **mi sono lavato / lavata**.",
      },
    ],
  },
  // ════════════════════════════════ A2 ════════════════════════════════
  {
    id: "passato-prossimo",
    icon: "rewind",
    title: "Passato prossimo (Perfekt)",
    level: "A2",
    intro: "Die wichtigste Vergangenheitsform – gebildet wie das deutsche Perfekt.",
    sections: [
      {
        heading: "Bildung",
        body: "**Hilfsverb** (avere oder essere) im Präsens + **Partizip**.",
        table: {
          head: ["Infinitiv", "Partizip", "Beispiel"],
          rows: [
            ["-are", "-**ato**", "parlare → parlato"],
            ["-ere", "-**uto**", "avere → avuto"],
            ["-ire", "-**ito**", "dormire → dormito"],
          ],
        },
        examples: [
          { target: "Ho mangiato una pizza.", de: "Ich habe eine Pizza gegessen." },
          { target: "Abbiamo dormito bene.", de: "Wir haben gut geschlafen." },
        ],
      },
      {
        heading: "avere oder essere?",
        points: [
          "Die **meisten** Verben nehmen **avere** – vor allem alle mit direktem Objekt (wen? was?)",
          "**essere** bei **Bewegung** von A nach B: andare, venire, arrivare, partire, uscire, entrare, tornare",
          "**essere** bei **Veränderung / Zustand**: nascere, morire, diventare, restare, rimanere, stare, essere",
          "**essere** bei **allen reflexiven** Verben: mi sono alzato",
          "**essere** bei piacere und bei Verben wie costare, succedere, durare",
        ],
        tip: "Mit **essere** passt sich das Partizip ans Subjekt an wie ein Adjektiv: Marco è andat**o** – Giulia è andat**a** – siamo andat**i** – le ragazze sono andat**e**.",
        examples: [
          { target: "Giulia è andata al mare.", de: "Giulia ist ans Meer gefahren." },
          { target: "I miei amici sono arrivati ieri.", de: "Meine Freunde sind gestern angekommen." },
        ],
        warn: "Nicht immer wie im Deutschen: „ich **bin** gelaufen“ = **ho** camminato, „es **hat** mir gefallen“ = mi **è** piaciuto. Lerne das Hilfsverb mit dem Verb.",
      },
      {
        heading: "Unregelmäßige Partizipien",
        table: {
          head: ["Infinitiv", "Partizip", "Infinitiv", "Partizip"],
          rows: [
            ["fare", "**fatto**", "essere", "**stato**"],
            ["dire", "**detto**", "venire", "**venuto**"],
            ["scrivere", "**scritto**", "leggere", "**letto**"],
            ["prendere", "**preso**", "mettere", "**messo**"],
            ["vedere", "**visto**", "aprire", "**aperto**"],
            ["bere", "**bevuto**", "chiudere", "**chiuso**"],
            ["rimanere", "**rimasto**", "nascere", "**nato**"],
            ["perdere", "**perso**", "scegliere", "**scelto**"],
          ],
        },
        examples: [
          { target: "Cosa hai fatto ieri?", de: "Was hast du gestern gemacht?" },
          { target: "Ho visto un bel film.", de: "Ich habe einen schönen Film gesehen." },
        ],
      },
      {
        heading: "Signalwörter",
        points: [
          "**ieri** (gestern), **l'altro ieri** (vorgestern), **stamattina** (heute Morgen)",
          "**la settimana scorsa**, **l'anno scorso** (letzte Woche, letztes Jahr)",
          "**un'ora fa**, **due giorni fa** (vor einer Stunde, vor zwei Tagen)",
          "**già** (schon) und **non … ancora** (noch nicht) stehen zwischen Hilfsverb und Partizip: Ho **già** mangiato",
        ],
        examples: [
          { target: "Sono arrivato due giorni fa.", de: "Ich bin vor zwei Tagen angekommen." },
          { target: "Non ho ancora finito.", de: "Ich bin noch nicht fertig." },
        ],
      },
    ],
  },
  {
    id: "imperfetto",
    icon: "film",
    title: "Imperfetto – und wann welche Vergangenheit?",
    level: "A2",
    intro: "Das Imperfetto erzählt, wie es war. Das Passato prossimo sagt, was passiert ist.",
    sections: [
      {
        heading: "Bildung",
        body: "Infinitiv ohne **-re** + **-vo, -vi, -va, -vamo, -vate, -vano**. Fast alle Verben sind regelmäßig.",
        table: conj(["parlare", "prendere", "dormire", "essere"],
          ["parla**vo**", "parla**vi**", "parla**va**", "parla**vamo**", "parla**vate**", "parla**vano**"],
          ["prende**vo**", "prende**vi**", "prende**va**", "prende**vamo**", "prende**vate**", "prende**vano**"],
          ["dormi**vo**", "dormi**vi**", "dormi**va**", "dormi**vamo**", "dormi**vate**", "dormi**vano**"],
          ["**ero**", "**eri**", "**era**", "**eravamo**", "**eravate**", "**erano**"]),
        points: ["Weitere Ausnahmen mit altem Stamm: fare → **facevo**, dire → **dicevo**, bere → **bevevo**"],
      },
      {
        heading: "Wofür das Imperfetto?",
        points: [
          "**Gewohnheiten** in der Vergangenheit: Da bambino **giocavo** a calcio",
          "**Beschreibungen** von Personen, Orten, Wetter: **Era** una bella giornata",
          "**Zustände** und Gefühle: **Ero** stanco, **avevo** fame",
          "**Laufende Handlungen** (Hintergrund): **Leggevo**, quando …",
          "Uhrzeit und Alter in der Vergangenheit: **Erano** le otto, **avevo** dieci anni",
        ],
        examples: [
          { target: "Da bambino giocavo a calcio.", de: "Als Kind habe ich (immer) Fußball gespielt." },
          { target: "Era tardi e pioveva.", de: "Es war spät und es regnete." },
        ],
      },
      {
        heading: "Imperfetto oder passato prossimo?",
        table: {
          head: ["passato prossimo", "imperfetto"],
          rows: [
            ["**was** ist passiert?", "**wie** war es?"],
            ["einmalig, abgeschlossen", "Gewohnheit, wiederholt"],
            ["Ereignis, Handlung", "Beschreibung, Zustand"],
            ["das plötzlich Eintretende", "der laufende Hintergrund"],
          ],
        },
        examples: [
          { target: "Mentre cucinavo, è arrivata Anna.", de: "Während ich kochte, kam Anna." },
          { target: "Ogni estate andavamo al mare, ma nel 2020 siamo rimasti a casa.", de: "Jeden Sommer fuhren wir ans Meer, aber 2020 blieben wir zu Hause." },
          { target: "Ieri ero stanco, quindi sono andato a letto presto.", de: "Gestern war ich müde, also bin ich früh ins Bett gegangen." },
        ],
        tip: "Stell dir einen Film vor: Das **imperfetto** malt die Kulisse, das **passato prossimo** treibt die Handlung voran.",
        warn: "Eine **abgeschlossene Zeitspanne** steht im passato prossimo, auch wenn sie lang war: **Ho vissuto** a Roma per dieci anni.",
      },
      {
        heading: "Signalwörter",
        table: {
          head: ["eher passato prossimo", "eher imperfetto"],
          rows: [
            ["ieri, l'anno scorso", "da bambino, da giovane"],
            ["una volta, quel giorno", "sempre, spesso, di solito"],
            ["all'improvviso, a un tratto", "ogni giorno, ogni estate"],
            ["per due ore (abgeschlossen)", "mentre (während)"],
          ],
        },
      },
    ],
  },
  {
    id: "futuro",
    icon: "wand",
    title: "Futuro semplice",
    level: "A2",
    intro: "Für Pläne, Versprechen und Vermutungen.",
    sections: [
      {
        heading: "Bildung",
        body: "Infinitiv ohne das letzte **-e** + **-ò, -ai, -à, -emo, -ete, -anno**. Bei -are wird das **a zu e**.",
        table: conj(["parlare", "prendere", "dormire"],
          ["parl**erò**", "parl**erai**", "parl**erà**", "parl**eremo**", "parl**erete**", "parl**eranno**"],
          ["prend**erò**", "prend**erai**", "prend**erà**", "prend**eremo**", "prend**erete**", "prend**eranno**"],
          ["dorm**irò**", "dorm**irai**", "dorm**irà**", "dorm**iremo**", "dorm**irete**", "dorm**iranno**"]),
        points: [
          "-care / -gare + **h**: cercherò, pagherò",
          "-ciare / -giare verlieren das **i**: mangerò, comincerò",
        ],
      },
      {
        heading: "Unregelmäßige Stämme",
        body: "Die Endungen bleiben gleich – nur der Stamm ist verkürzt oder verändert.",
        table: {
          head: ["Infinitiv", "Futur", "Infinitiv", "Futur"],
          rows: [
            ["essere", "**sarò**", "avere", "**avrò**"],
            ["andare", "**andrò**", "fare", "**farò**"],
            ["potere", "**potrò**", "dovere", "**dovrò**"],
            ["sapere", "**saprò**", "vedere", "**vedrò**"],
            ["vivere", "**vivrò**", "venire", "**verrò**"],
            ["volere", "**vorrò**", "rimanere", "**rimarrò**"],
            ["bere", "**berrò**", "dare / stare", "**darò / starò**"],
          ],
        },
        examples: [
          { target: "Domani andrò al mare.", de: "Morgen werde ich ans Meer fahren." },
          { target: "Sarà una bella giornata.", de: "Es wird ein schöner Tag." },
        ],
      },
      {
        heading: "Präsens für die Zukunft & Vermutungen",
        points: [
          "Für **feste Pläne** reicht oft das **Präsens**: Domani parto per Roma",
          "Das Futur drückt auch eine **Vermutung** aus: **Saranno** le otto (Es wird wohl acht sein)",
          "Nach **quando** und **se** steht für die Zukunft das Futur: Quando **arriverò**, ti chiamo",
        ],
        examples: [
          { target: "Che ore sono? – Saranno le dieci.", de: "Wie spät ist es? – Es wird wohl zehn sein." },
          { target: "Dov'è Marco? – Sarà a casa.", de: "Wo ist Marco? – Er wird wohl zu Hause sein." },
        ],
        warn: "Die Formen mit Akzent nicht vergessen: parler**ò**, parler**à** – ohne Akzent ist es ein anderes Wort.",
      },
    ],
  },
  {
    id: "objektpronomen",
    icon: "target",
    title: "Objektpronomen (lo, la, gli, le …)",
    level: "A2",
    intro: "Statt ein Nomen zu wiederholen, nimmt man ein kurzes Pronomen – und stellt es vor das Verb.",
    sections: [
      {
        heading: "Direkt (wen? was?) und indirekt (wem?)",
        table: {
          head: ["", "direkt – wen?", "indirekt – wem?"],
          rows: [
            ["ich", "**mi** – mich", "**mi** – mir"],
            ["du", "**ti** – dich", "**ti** – dir"],
            ["er", "**lo** – ihn / es", "**gli** – ihm"],
            ["sie", "**la** – sie / es", "**le** – ihr"],
            ["Sie", "**La** – Sie", "**Le** – Ihnen"],
            ["wir", "**ci** – uns", "**ci** – uns"],
            ["ihr", "**vi** – euch", "**vi** – euch"],
            ["sie (Mz.)", "**li** (m) / **le** (f) – sie", "**gli** – ihnen"],
          ],
        },
        tip: "Nur in der 3. Person unterscheiden sich die Formen – mi, ti, ci, vi sind immer gleich.",
      },
      {
        heading: "Direkte Pronomen",
        examples: [
          { target: "Il giornale? Lo compro ogni giorno.", de: "Die Zeitung? Ich kaufe sie jeden Tag." },
          { target: "Conosci Anna? – Sì, la conosco.", de: "Kennst du Anna? – Ja, ich kenne sie." },
          { target: "Le chiavi? Non le trovo.", de: "Die Schlüssel? Ich finde sie nicht." },
        ],
        warn: "Das Geschlecht richtet sich nach dem **italienischen** Wort: il giornale (m) → **lo**, auch wenn es auf Deutsch „sie“ (die Zeitung) ist.",
      },
      {
        heading: "Indirekte Pronomen",
        body: "Sie ersetzen **a + Person**. Typisch bei dare, dire, scrivere, telefonare, regalare, rispondere, chiedere, mandare.",
        examples: [
          { target: "Telefono a Marco. → Gli telefono.", de: "Ich rufe Marco an. → Ich rufe ihn an." },
          { target: "Scrivo a Giulia. → Le scrivo.", de: "Ich schreibe Giulia. → Ich schreibe ihr." },
          { target: "Mi dai una mano?", de: "Hilfst du mir?" },
        ],
        warn: "**telefonare a** und **rispondere a** sind indirekt – „ich rufe **ihn** an“ heißt **Gli** telefono.",
      },
      {
        heading: "Wo steht das Pronomen?",
        points: [
          "**Vor** dem konjugierten Verb: **Lo** compro",
          "Verneint: non + Pronomen + Verb: Non **lo** so",
          "Am **Infinitiv** angehängt (Infinitiv verliert das -e): Voglio comprar**lo**",
          "Mit Modalverb geht beides: **Lo** voglio comprare = Voglio comprar**lo**",
        ],
      },
      {
        heading: "Im passato prossimo",
        points: [
          "lo / la vor avere werden zu **l'**: **L'**ho visto",
          "Das Partizip passt sich an **lo, la, li, le** an",
        ],
        examples: [
          { target: "La pizza? L'ho mangiata.", de: "Die Pizza? Ich habe sie gegessen." },
          { target: "I libri? Li ho letti.", de: "Die Bücher? Ich habe sie gelesen." },
          { target: "Le foto? Le ho viste.", de: "Die Fotos? Ich habe sie gesehen." },
        ],
        tip: "Bei **indirekten** Pronomen ändert sich das Partizip nicht: Le ho scritt**o** (ich habe ihr geschrieben).",
      },
    ],
  },
  {
    id: "imperativ",
    icon: "megaphone",
    title: "Imperativ (Befehle & Bitten)",
    level: "A2",
    intro: "Aufforderungen, Anleitungen, Rezepte, Wegbeschreibungen.",
    sections: [
      {
        heading: "Die Formen",
        table: {
          head: ["", "parlare", "prendere", "dormire", "finire"],
          rows: [
            ["tu", "parl**a**!", "prend**i**!", "dorm**i**!", "fin**isci**!"],
            ["Lei", "parl**i**!", "prend**a**!", "dorm**a**!", "fin**isca**!"],
            ["noi", "parliamo!", "prendiamo!", "dormiamo!", "finiamo!"],
            ["voi", "parlate!", "prendete!", "dormite!", "finite!"],
          ],
        },
        points: [
          "**tu**: -are → **-a**, -ere / -ire → **-i**",
          "**noi / voi** = wie im Präsens",
          "**Lei** (höflich) = congiuntivo: die Vokale **tauschen** (parl**i**, prend**a**)",
        ],
        examples: [
          { target: "Parla piano, per favore!", de: "Sprich bitte leise!" },
          { target: "Signora, entri pure!", de: "Kommen Sie ruhig herein!" },
          { target: "Andiamo!", de: "Gehen wir!" },
        ],
      },
      {
        heading: "Verneinung",
        points: [
          "**tu**: **non + Infinitiv**: Non parlare! Non preoccuparti!",
          "Alle anderen: einfach **non** davor: Non parli! Non andate!",
        ],
        warn: "Nicht ~~Non parla!~~ für du – richtig ist **Non parlare!**",
      },
      {
        heading: "Unregelmäßige Formen",
        table: {
          head: ["", "tu", "Lei"],
          rows: [
            ["andare", "**va'** / vai", "**vada**"],
            ["fare", "**fa'** / fai", "**faccia**"],
            ["dare", "**da'** / dai", "**dia**"],
            ["stare", "**sta'** / stai", "**stia**"],
            ["dire", "**di'**", "**dica**"],
            ["venire", "vieni", "**venga**"],
            ["essere", "**sii**", "**sia**"],
            ["avere", "**abbi**", "**abbia**"],
          ],
        },
        examples: [
          { target: "Dica!", de: "Bitte? / Was darf es sein? (im Geschäft)" },
          { target: "Sii gentile!", de: "Sei nett!" },
        ],
      },
      {
        heading: "Pronomen beim Imperativ",
        points: [
          "Bei **tu, noi, voi** werden Pronomen **angehängt**: Alza**ti**! Dim**mi**! Prendia**lo**!",
          "Bei **Lei** stehen sie **davor**: **Si** sieda! **Mi** dica!",
          "Bei den Kurzformen va', fa', da', sta', di' **verdoppelt** sich der Anfang des Pronomens: da**mmi**, fa**llo**, di**mmi**",
        ],
        examples: [
          { target: "Alzati! · Si sieda!", de: "Steh auf! · Setzen Sie sich!" },
          { target: "Dammi il libro!", de: "Gib mir das Buch!" },
          { target: "Dimmi la verità!", de: "Sag mir die Wahrheit!" },
        ],
        tip: "Ausnahme: **gli** wird nicht verdoppelt: da**gli** il libro (gib ihm das Buch).",
      },
    ],
  },
  {
    id: "vergleiche",
    icon: "scale",
    title: "Vergleiche & Superlativ",
    level: "A2",
    intro: "größer als, so groß wie, am größten – und „sehr“ mit -issimo.",
    sections: [
      {
        heading: "Mehr oder weniger: più / meno",
        table: {
          head: ["", "Deutsch", "Beispiel"],
          rows: [
            ["**più** … **di**", "mehr … als / -er als", "Roma è più grande di Firenze."],
            ["**meno** … **di**", "weniger … als", "Il treno è meno caro dell'aereo."],
          ],
        },
        body: "**di** steht vor **Nomen, Namen und Pronomen** – und verschmilzt mit dem Artikel (dell'aereo).",
        examples: [
          { target: "Marco è più alto di me.", de: "Marco ist größer als ich." },
          { target: "Il treno è meno caro dell'aereo.", de: "Der Zug ist billiger als das Flugzeug." },
        ],
      },
      {
        heading: "più … che",
        body: "**che** statt di, wenn man nicht zwei Personen oder Dinge vergleicht, sondern:",
        points: [
          "zwei **Adjektive**: È più bello **che** utile",
          "zwei **Verben**: È più facile parlare **che** scrivere",
          "zwei **Mengen / Nomen** zum selben Subjekt: Bevo più tè **che** caffè",
          "vor **Präpositionen**: Fa più caldo a Roma **che** a Milano",
        ],
        tip: "Faustregel: Vergleich zweier **Personen/Dinge** → **di**. Alles andere → **che**.",
      },
      {
        heading: "Gleichheit",
        points: [
          "**(così) … come**: È alto **come** me",
          "**(tanto) … quanto**: È **tanto** simpatico **quanto** intelligente",
        ],
        examples: [{ target: "Anna è brava come sua sorella.", de: "Anna ist so gut wie ihre Schwester." }],
      },
      {
        heading: "Superlativ",
        points: [
          "**Relativ** (der/die/das …-ste): Artikel + **più** + Adjektiv (+ **di**): la città **più bella** d'Italia",
          "**Absolut** (sehr …): Adjektiv ohne Endung + **-issimo**: bell**issimo**, car**issima**, buon**issimi**",
          "Oder einfach **molto**: molto bello",
        ],
        examples: [
          { target: "È la città più bella d'Italia.", de: "Es ist die schönste Stadt Italiens." },
          { target: "Il film è bellissimo!", de: "Der Film ist wunderschön!" },
        ],
      },
      {
        heading: "Sonderformen",
        table: {
          head: ["", "Komparativ", "Superlativ"],
          rows: [
            ["buono (gut)", "**migliore** (besser)", "il migliore, ottimo"],
            ["cattivo (schlecht)", "**peggiore**", "il peggiore, pessimo"],
            ["bene (Adverb)", "**meglio**", "benissimo"],
            ["male (Adverb)", "**peggio**", "malissimo"],
          ],
        },
        examples: [
          { target: "Questo vino è migliore.", de: "Dieser Wein ist besser." },
          { target: "Oggi sto meglio.", de: "Heute geht es mir besser." },
        ],
        warn: "**migliore** beschreibt ein Nomen (ein besserer Wein), **meglio** ein Verb (es geht mir besser).",
      },
    ],
  },
  {
    id: "gerundio",
    icon: "hourglass",
    title: "stare + Gerundium (gerade tun)",
    level: "A2",
    intro: "Die Verlaufsform: Was passiert genau jetzt?",
    sections: [
      {
        heading: "Bildung",
        body: "**stare** im Präsens + **Gerundium**.",
        table: {
          head: ["Infinitiv", "Gerundium"],
          rows: [
            ["-are: parlare", "parl**ando**"],
            ["-ere: leggere", "legg**endo**"],
            ["-ire: dormire", "dorm**endo**"],
            ["fare · dire · bere", "**facendo** · **dicendo** · **bevendo**"],
          ],
        },
        examples: [
          { target: "Sto preparando la cena.", de: "Ich bereite gerade das Abendessen zu." },
          { target: "Cosa stai facendo?", de: "Was machst du gerade?" },
          { target: "Stanno dormendo.", de: "Sie schlafen gerade." },
        ],
        tip: "Nur für das, was **genau jetzt** läuft. Für Gewohnheiten nimmt man das normale Präsens: Leggo molto (ich lese viel).",
      },
      {
        heading: "In der Vergangenheit",
        body: "Mit dem **imperfetto** von stare: stavo, stavi, stava, stavamo, stavate, stavano + Gerundium.",
        examples: [
          { target: "Stavo dormendo, quando hai chiamato.", de: "Ich schlief gerade, als du angerufen hast." },
        ],
      },
      {
        heading: "Pronomen und stare per",
        points: [
          "Pronomen **vor stare** oder **am Gerundium**: **Lo** sto facendo = Sto facendo**lo**",
          "**stare per** + Infinitiv = **gleich** etwas tun: **Sto per** uscire (ich gehe gleich los)",
        ],
        examples: [
          { target: "Ti sto aspettando.", de: "Ich warte gerade auf dich." },
          { target: "Il treno sta per partire.", de: "Der Zug fährt gleich ab." },
        ],
      },
    ],
  },
  // ════════════════════════════════ B1 ════════════════════════════════
  {
    id: "condizionale",
    icon: "handshake",
    title: "Condizionale (würde, hätte, könnte)",
    level: "B1",
    intro: "Höflich bitten, Wünsche äußern, Ratschläge geben.",
    sections: [
      {
        heading: "Bildung",
        body: "Gleicher Stamm wie im **Futur** + **-ei, -esti, -ebbe, -emmo, -este, -ebbero**.",
        table: conj(["parlare", "prendere", "dormire"],
          ["parl**erei**", "parl**eresti**", "parl**erebbe**", "parl**eremmo**", "parl**ereste**", "parl**erebbero**"],
          ["prend**erei**", "prend**eresti**", "prend**erebbe**", "prend**eremmo**", "prend**ereste**", "prend**erebbero**"],
          ["dorm**irei**", "dorm**iresti**", "dorm**irebbe**", "dorm**iremmo**", "dorm**ireste**", "dorm**irebbero**"]),
        points: [
          "Unregelmäßig **wie im Futur**: sarei, avrei, andrei, farei, potrei, dovrei, saprei, vedrei, verrei, **vorrei**, berrei, rimarrei",
        ],
        warn: "**-emmo** (würden) mit Doppel-m, **-emo** (werden) mit einem: parler**emmo** ≠ parler**emo**.",
      },
      {
        heading: "Gebrauch",
        table: {
          head: ["wofür?", "Beispiel", "Deutsch"],
          rows: [
            ["höfliche Bitte", "**Vorrei** un caffè.", "Ich hätte gern einen Kaffee."],
            ["höfliche Frage", "**Potrebbe** aiutarmi?", "Könnten Sie mir helfen?"],
            ["Wunsch", "**Mi piacerebbe** viaggiare.", "Ich würde gern reisen."],
            ["Ratschlag", "**Dovresti** dormire di più.", "Du solltest mehr schlafen."],
            ["unsichere Nachricht", "Il ministro **sarebbe** malato.", "Der Minister soll krank sein."],
          ],
        },
        examples: [
          { target: "Vorrei un caffè, per favore.", de: "Ich hätte gern einen Kaffee, bitte." },
          { target: "Al tuo posto, parlerei con lui.", de: "An deiner Stelle würde ich mit ihm reden." },
        ],
        tip: "**Vorrei** ist höflicher als voglio – beim Bestellen immer vorrei.",
      },
      {
        heading: "Condizionale passato",
        body: "condizionale von **avere / essere** + **Partizip** = „hätte … / wäre …“ – für das, was **nicht passiert** ist.",
        examples: [
          { target: "Sarei venuto, ma ero malato.", de: "Ich wäre gekommen, aber ich war krank." },
          { target: "Avrei dovuto studiare di più.", de: "Ich hätte mehr lernen sollen." },
        ],
        tip: "Nach Ausdrücken wie **ha detto che** steht für die Zukunft aus Sicht der Vergangenheit der condizionale passato: Ha detto che **sarebbe venuto** (er sagte, er würde kommen).",
      },
    ],
  },
  {
    id: "congiuntivo",
    icon: "thought",
    title: "Congiuntivo presente",
    level: "B1",
    intro: "Die Möglichkeitsform für Meinung, Wunsch, Gefühl und Zweifel.",
    sections: [
      {
        heading: "Bildung",
        body: "Vom Präsens-Stamm aus – die Vokale **tauschen**: -are bekommt **-i**, -ere / -ire bekommen **-a**.",
        table: conj(["parlare", "prendere", "dormire", "finire"],
          ["parl**i**", "parl**i**", "parl**i**", "parl**iamo**", "parl**iate**", "parl**ino**"],
          ["prend**a**", "prend**a**", "prend**a**", "prend**iamo**", "prend**iate**", "prend**ano**"],
          ["dorm**a**", "dorm**a**", "dorm**a**", "dorm**iamo**", "dorm**iate**", "dorm**ano**"],
          ["fin**isca**", "fin**isca**", "fin**isca**", "fin**iamo**", "fin**iate**", "fin**iscano**"]),
        tip: "Die drei Singularformen sind gleich – deshalb nennt man oft das Subjekt: che **tu** parli.",
      },
      {
        heading: "Unregelmäßige Formen",
        table: {
          head: ["Infinitiv", "io / tu / lui", "noi", "loro"],
          rows: [
            ["essere", "**sia**", "siamo", "siano"],
            ["avere", "**abbia**", "abbiamo", "abbiano"],
            ["andare", "**vada**", "andiamo", "vadano"],
            ["fare", "**faccia**", "facciamo", "facciano"],
            ["venire", "**venga**", "veniamo", "vengano"],
            ["potere", "**possa**", "possiamo", "possano"],
            ["volere", "**voglia**", "vogliamo", "vogliano"],
            ["dovere", "**debba**", "dobbiamo", "debbano"],
            ["sapere", "**sappia**", "sappiamo", "sappiano"],
            ["dire", "**dica**", "diciamo", "dicano"],
            ["dare / stare", "**dia / stia**", "diamo / stiamo", "diano / stiano"],
          ],
        },
        tip: "Tipp: Nimm die **io-Form** des Präsens und tausche das -o: vad**o** → vad**a**, facci**o** → facci**a**, veng**o** → veng**a**.",
      },
      {
        heading: "Wann congiuntivo?",
        body: "Nach **che**, wenn der Hauptsatz etwas **Subjektives** ausdrückt:",
        table: {
          head: ["Gruppe", "Auslöser"],
          rows: [
            ["Meinung", "penso che, credo che, mi sembra che"],
            ["Wunsch / Wille", "voglio che, preferisco che, spero che"],
            ["Gefühl", "sono contento che, mi dispiace che, ho paura che"],
            ["Zweifel", "non so se, dubito che, non sono sicuro che"],
            ["unpersönlich", "è importante che, è possibile che, bisogna che"],
            ["Konjunktionen", "benché / sebbene (obwohl), prima che, affinché, a meno che"],
          ],
        },
        examples: [
          { target: "Penso che sia vero.", de: "Ich glaube, dass es wahr ist." },
          { target: "Voglio che tu venga.", de: "Ich will, dass du kommst." },
          { target: "Benché piova, esco.", de: "Obwohl es regnet, gehe ich raus." },
        ],
      },
      {
        heading: "Wann nicht?",
        points: [
          "Bei **Tatsachen und Gewissheit** → Indikativ: **so che**, **è vero che**, **sono sicuro che**, vedo che",
          "Nach **perché** (weil), **quando**, **dopo che** → Indikativ",
          "Bei **gleichem Subjekt** → **di + Infinitiv**: Penso **di** venire (nicht ~~penso che io venga~~)",
        ],
        examples: [
          { target: "So che vive a Roma. · Penso che viva a Roma.", de: "Ich weiß, dass … · Ich glaube, dass er in Rom lebt." },
          { target: "Spero di vederti presto.", de: "Ich hoffe, dich bald zu sehen." },
        ],
        warn: "Die Verneinung kann den Modus kippen: Sono sicuro che **è** … – **Non** sono sicuro che **sia** …",
      },
    ],
  },
  {
    id: "ci-ne",
    icon: "puzzle",
    title: "Die Pronomen ci und ne",
    level: "B1",
    intro: "Zwei kleine Wörter, die ganze Satzteile ersetzen.",
    sections: [
      {
        heading: "ci = dort, dahin, daran",
        points: [
          "ersetzt einen **Ort** (a / in / da + Ort): Vai a Roma? – Sì, **ci** vado",
          "ersetzt **a / su + Sache**: Pensi al lavoro? – **Ci** penso sempre",
          "Steht wie andere Pronomen **vor dem Verb** oder **am Infinitiv**: Devo andar**ci**",
        ],
        examples: [
          { target: "Vai a Milano? – Sì, ci vado domani.", de: "Fährst du nach Mailand? – Ja, ich fahre morgen hin." },
          { target: "Credi ai fantasmi? – No, non ci credo.", de: "Glaubst du an Gespenster? – Nein, daran glaube ich nicht." },
        ],
      },
      {
        heading: "ne = davon, darüber",
        points: [
          "ersetzt eine **Menge** oder einen **Teil**: Quante mele compri? – **Ne** compro tre",
          "ersetzt **di + Sache / Person**: Parliamo del problema? – Sì, **ne** parliamo",
          "Auch bei **niente / nessuno**: Non **ne** ho nessuno (ich habe keinen davon)",
        ],
        examples: [
          { target: "Quanti figli hai? – Ne ho due.", de: "Wie viele Kinder hast du? – Ich habe zwei." },
          { target: "Vuoi del vino? – Sì, ne prendo un po'.", de: "Willst du Wein? – Ja, ich nehme ein bisschen." },
        ],
        tip: "Bei Mengenangaben ist **ne Pflicht**, auch wenn das Deutsche nichts sagt: Ne ho due (ich habe zwei).",
        warn: "Im passato prossimo passt sich das Partizip an die Menge an: **Ne** ho mangiat**e** tre (mele).",
      },
      {
        heading: "Feste Wendungen",
        table: {
          head: ["Wendung", "Deutsch"],
          rows: [
            ["**Ci vuole** / **ci vogliono**", "man braucht, es dauert"],
            ["**Ci sono!**", "Ich hab's! / Ich bin dabei!"],
            ["**Non ce la faccio.**", "Ich schaffe es nicht."],
            ["**Che ne pensi?**", "Was hältst du davon?"],
            ["**Non ne posso più.**", "Ich kann nicht mehr."],
            ["**Me ne vado.**", "Ich gehe (weg)."],
          ],
        },
        examples: [
          { target: "Ci vogliono due ore.", de: "Man braucht zwei Stunden." },
          { target: "Non ne posso più!", de: "Ich kann nicht mehr!" },
        ],
      },
    ],
  },
  {
    id: "relativ",
    icon: "link",
    title: "Relativpronomen (che, cui, chi)",
    level: "B1",
    intro: "Sätze verbinden: der Mann, der … – die Stadt, in der …",
    sections: [
      {
        heading: "che",
        points: [
          "**che** = der, die, das, welche – für Personen und Dinge, Einzahl und Mehrzahl",
          "als **Subjekt** oder **direktes Objekt** – **ohne** Präposition",
          "Es verändert sich nie",
        ],
        examples: [
          { target: "Il libro che leggo è bello.", de: "Das Buch, das ich lese, ist schön." },
          { target: "La ragazza che parla è mia sorella.", de: "Das Mädchen, das spricht, ist meine Schwester." },
        ],
      },
      {
        heading: "cui nach Präpositionen",
        body: "Steht eine **Präposition** davor, heißt es **cui** – ebenfalls unveränderlich.",
        table: {
          head: ["", "Beispiel", "Deutsch"],
          rows: [
            ["in cui", "la città **in cui** vivo", "die Stadt, in der ich lebe"],
            ["a cui", "l'amico **a cui** scrivo", "der Freund, dem ich schreibe"],
            ["con cui", "la persona **con cui** lavoro", "die Person, mit der ich arbeite"],
            ["di cui", "il film **di cui** parlo", "der Film, von dem ich spreche"],
            ["per cui", "il motivo **per cui** …", "der Grund, weshalb …"],
          ],
        },
        points: ["**il / la / i / le cui** = dessen / deren: l'uomo **la cui** figlia … (der Mann, dessen Tochter …)"],
        tip: "Präposition davor → **cui**. Keine Präposition → **che**.",
        warn: "Nicht ~~in che~~ oder ~~con che~~ – nach Präpositionen immer **cui**.",
      },
      {
        heading: "chi und quello che",
        points: [
          "**chi** = wer / derjenige, der (ohne Bezugswort): **Chi** cerca trova",
          "**quello che / ciò che** = das, was: Fai **quello che** vuoi",
        ],
        examples: [
          { target: "Chi dorme non piglia pesci.", de: "Wer schläft, fängt keine Fische." },
          { target: "Non capisco quello che dici.", de: "Ich verstehe nicht, was du sagst." },
        ],
      },
    ],
  },
  {
    id: "pronomi-combinati",
    icon: "shuffle",
    title: "Doppelte Pronomen (me lo, glielo)",
    level: "B1",
    intro: "Wem? und was? in einem Rutsch: Ich gebe es dir → Te lo do.",
    sections: [
      {
        heading: "Die Regel",
        points: [
          "Reihenfolge: **indirekt** (wem?) **vor direkt** (was?)",
          "mi, ti, ci, vi werden vor lo / la / li / le / ne zu **me, te, ce, ve**",
          "Sie stehen **vor dem konjugierten Verb**, getrennt geschrieben: **Te lo** do",
        ],
        table: {
          head: ["", "lo", "la", "li", "le", "ne"],
          rows: [
            ["mi", "me lo", "me la", "me li", "me le", "me ne"],
            ["ti", "te lo", "te la", "te li", "te le", "te ne"],
            ["gli / le / Le", "**glielo**", "**gliela**", "**glieli**", "**gliele**", "**gliene**"],
            ["ci", "ce lo", "ce la", "ce li", "ce le", "ce ne"],
            ["vi", "ve lo", "ve la", "ve li", "ve le", "ve ne"],
          ],
        },
        examples: [
          { target: "Mi dai il libro? – Sì, te lo do.", de: "Gibst du mir das Buch? – Ja, ich gebe es dir." },
          { target: "Ci mandi le foto? – Sì, ve le mando.", de: "Schickst du uns die Fotos? – Ja, ich schicke sie euch." },
        ],
      },
      {
        heading: "gli, le, Le → glie-",
        points: [
          "gli (ihm / ihnen), le (ihr) und Le (Ihnen) werden alle zu **glie-**",
          "glie- wird mit dem zweiten Pronomen **zusammengeschrieben**: glielo, gliela …",
        ],
        examples: [
          { target: "Dai il regalo a Marco? – Sì, glielo do.", de: "Gibst du Marco das Geschenk? – Ja, ich gebe es ihm." },
          { target: "Dici la verità ad Anna? – Sì, gliela dico.", de: "Sagst du Anna die Wahrheit? – Ja, ich sage sie ihr." },
        ],
        tip: "**glielo** kann „es ihm“, „es ihr“, „es ihnen“ **und** „es Ihnen“ heißen – der Zusammenhang klärt es.",
      },
      {
        heading: "Angehängt und angeglichen",
        points: [
          "Am **Infinitiv** und **Imperativ** (tu / noi / voi) als ein Wort angehängt: Voglio dar**telo**, Da**mmelo**!",
          "Im **passato prossimo** passt sich das Partizip an lo / la / li / le an: Gliel'ho dat**a** (la chiave)",
        ],
        examples: [
          { target: "Puoi portarmele?", de: "Kannst du sie mir bringen?" },
          { target: "Le chiavi? Te le ho date ieri.", de: "Die Schlüssel? Ich habe sie dir gestern gegeben." },
        ],
      },
    ],
  },
  {
    id: "trapassato",
    icon: "back",
    title: "Trapassato prossimo (Plusquamperfekt)",
    level: "B1",
    intro: "Was schon vorher passiert war.",
    sections: [
      {
        heading: "Bildung",
        body: "**imperfetto** von avere / essere + **Partizip**. Hilfsverb und Angleichung wie im passato prossimo.",
        table: conj(["mangiare", "andare"],
          ["avevo mangiato", "avevi mangiato", "aveva mangiato", "avevamo mangiato", "avevate mangiato", "avevano mangiato"],
          ["ero andato/a", "eri andato/a", "era andato/a", "eravamo andati/e", "eravate andati/e", "erano andati/e"]),
      },
      {
        heading: "Gebrauch",
        body: "Für eine Handlung, die **vor einer anderen vergangenen Handlung** schon abgeschlossen war – genau wie das deutsche Plusquamperfekt.",
        examples: [
          { target: "Quando sono arrivato, il treno era già partito.", de: "Als ich ankam, war der Zug schon abgefahren." },
          { target: "Non avevo fame perché avevo già mangiato.", de: "Ich hatte keinen Hunger, weil ich schon gegessen hatte." },
          { target: "Mi ha detto che era stato in Sicilia.", de: "Er hat mir gesagt, dass er in Sizilien gewesen war." },
        ],
        tip: "Typische Begleiter: **già** (schon), **prima** (vorher), **non … ancora** (noch nicht).",
        warn: "Die **spätere** Handlung bleibt im passato prossimo oder imperfetto – nur die **frühere** steht im trapassato.",
      },
    ],
  },
  {
    id: "bedingungssaetze",
    icon: "repeat",
    title: "Bedingungssätze mit se",
    level: "B1",
    intro: "Wenn … dann: real, möglich oder nur gedacht.",
    sections: [
      {
        heading: "Die drei Typen",
        table: {
          head: ["Typ", "se-Satz", "Hauptsatz", "Beispiel"],
          rows: [
            ["real", "Präsens", "Präsens / Futur", "Se piove, resto a casa."],
            ["möglich", "**congiuntivo imperfetto**", "**condizionale**", "Se avessi tempo, verrei."],
            ["vorbei", "congiuntivo trapassato", "condizionale passato", "Se avessi saputo, sarei venuto."],
          ],
        },
      },
      {
        heading: "Realer Fall",
        body: "Die Bedingung **kann wirklich eintreten**: se + **Präsens** → Präsens oder Futur.",
        examples: [
          { target: "Se piove, resto a casa.", de: "Wenn es regnet, bleibe ich zu Hause." },
          { target: "Se hai tempo, ti chiamerò.", de: "Wenn du Zeit hast, rufe ich dich an." },
        ],
      },
      {
        heading: "Möglicher / unwirklicher Fall",
        body: "Die Bedingung ist **gedacht** oder **unwahrscheinlich**: se + **congiuntivo imperfetto** → **condizionale**.",
        examples: [
          { target: "Se avessi tempo, verrei con te.", de: "Wenn ich Zeit hätte, würde ich mitkommen." },
          { target: "Se fossi ricco, comprerei una casa al mare.", de: "Wenn ich reich wäre, würde ich ein Haus am Meer kaufen." },
          { target: "Cosa faresti se vincessi alla lotteria?", de: "Was würdest du tun, wenn du im Lotto gewinnen würdest?" },
        ],
        warn: "**Nie condizionale direkt nach se**: nicht ~~se avrei~~, sondern **se avessi**.",
      },
      {
        heading: "Congiuntivo imperfetto",
        body: "Infinitiv ohne **-re** + **-ssi, -ssi, -sse, -ssimo, -ste, -ssero**.",
        table: conj(["parlare", "avere", "dormire", "essere"],
          ["parla**ssi**", "parla**ssi**", "parla**sse**", "parla**ssimo**", "parla**ste**", "parla**ssero**"],
          ["ave**ssi**", "ave**ssi**", "ave**sse**", "ave**ssimo**", "ave**ste**", "ave**ssero**"],
          ["dormi**ssi**", "dormi**ssi**", "dormi**sse**", "dormi**ssimo**", "dormi**ste**", "dormi**ssero**"],
          ["**fossi**", "**fossi**", "**fosse**", "**fossimo**", "**foste**", "**fossero**"]),
        points: ["Weitere Ausnahmen: fare → **facessi**, dire → **dicessi**, bere → **bevessi**, dare → **dessi**, stare → **stessi**"],
        tip: "Merksatz: **se** + avessi / fossi … → **dann** + -rei.",
      },
    ],
  },
  {
    id: "si",
    icon: "users",
    title: "si impersonale & Passiv",
    level: "B1",
    intro: "„Man“ und „wird gemacht“ – zwei Wege, ohne handelnde Person zu sprechen.",
    sections: [
      {
        heading: "si = man",
        points: [
          "**si + Verb in der 3. Person**: In Italia **si mangia** bene",
          "Mit einem Nomen in der **Mehrzahl** steht auch das Verb in der Mehrzahl: **Si vendono** case",
          "Bei reflexiven Verben wird „man“ zu **ci si**: **Ci si** alza presto",
        ],
        examples: [
          { target: "Come si dice «Hund» in italiano?", de: "Wie sagt man „Hund“ auf Italienisch?" },
          { target: "Qui si parla italiano.", de: "Hier spricht man Italienisch." },
          { target: "Qui si vendono biglietti.", de: "Hier werden Fahrkarten verkauft." },
        ],
        tip: "**Come si dice …?** und **Come si scrive …?** sind die nützlichsten Fragen beim Lernen.",
      },
      {
        heading: "Das Passiv",
        points: [
          "**essere + Partizip** – das Partizip passt sich ans Subjekt an: La casa è costruit**a**",
          "Die **Zeit** zeigt essere: è costruita (wird gebaut), è stata costruita (wurde gebaut), sarà costruita (wird gebaut werden)",
          "In einfachen Zeiten geht auch **venire** statt essere: Il libro **viene** letto da molti",
          "Wer es tut, steht mit **da**: scritto **da** Eco, costruita **dai** Romani",
        ],
        examples: [
          { target: "La casa è stata costruita nel 1900.", de: "Das Haus wurde 1900 gebaut." },
          { target: "Il libro è stato scritto da Umberto Eco.", de: "Das Buch wurde von Umberto Eco geschrieben." },
          { target: "La cena viene servita alle otto.", de: "Das Abendessen wird um acht serviert." },
        ],
        warn: "„von“ beim Handelnden ist **da**, nicht di: scritto **da** Eco.",
      },
    ],
  },
];
