// ─── Grammar exercises ─────────────────────────────────────────────────────────
// Hand-written cloze sets, one per grammar topic, practised on /grammar. Together
// they cover the grammar of CEFR levels A1–B1. Each item has exactly one blank;
// `options` feed the multiple-choice mode and must contain the answer. Hints,
// rules and examples are German (the learner's L1). `lessonId` links to the
// matching Grundlagen lesson in lib/grammar-lessons.ts.

export type GrammarLevel = 'A1' | 'A2' | 'B1';
export const GRAMMAR_LEVELS: { id: GrammarLevel; label: string }[] = [
  { id: 'A1', label: 'A1 · Einstieg' },
  { id: 'A2', label: 'A2 · Grundlagen erweitern' },
  { id: 'B1', label: 'B1 · Selbstständig' },
];

export interface GrammarItem {
  before: string;
  answer: string;
  after: string;
  options: string[];
  alternatives?: string[]; // other accepted typed answers
  hint: string;
}

export interface GrammarTopic {
  id: string;
  icon: string;
  title: string;
  level: GrammarLevel;
  lessonId?: string;
  instruction: string;
  explanation: string;
  examples: { it: string; de: string }[];
  items: GrammarItem[];
}

const q = (
  before: string,
  answer: string,
  after: string,
  options: string[],
  hint: string,
  alternatives?: string[],
): GrammarItem => ({ before, answer, after, options, hint, alternatives });

const DEF = ['il', 'lo', 'la', "l'"];
const DEF_PL = ['i', 'gli', 'le', 'il'];
const INDEF = ['un', 'uno', 'una', "un'"];

export const GRAMMAR_TOPICS: GrammarTopic[] = [
  {
    id: 'articoli-determinativi',
    icon: '🔤',
    title: 'Bestimmte Artikel (il, lo, la …)',
    level: 'A1',
    lessonId: 'artikel',
    instruction: 'Setze den passenden bestimmten Artikel ein.',
    explanation:
      'Männlich: il (normal), lo (vor s + Konsonant, z, gn, ps), l\' (vor Vokal). Weiblich: la, l\' (vor Vokal). ' +
      'Mehrzahl: il → i, lo und l\' (männlich) → gli, la und l\' (weiblich) → le.',
    examples: [
      { it: "il libro · lo zaino · l'amico", de: "männlich: das Buch, der Rucksack, der Freund" },
      { it: "la casa · l'isola", de: "weiblich: das Haus, die Insel" },
      { it: "i libri · gli zaini · le case", de: "Mehrzahl" },
    ],
    items: [
      q('', 'il', ' libro', DEF, 'männlich, normaler Anfang → il'),
      q('', 'lo', ' studente', DEF, 'männlich, s + Konsonant → lo'),
      q('', 'la', ' casa', DEF, 'weiblich → la'),
      q('', "l'", ' amico', DEF, 'männlich, beginnt mit Vokal → l\''),
      q('', 'lo', ' zaino', DEF, 'männlich, beginnt mit z → lo'),
      q('', "l'", ' acqua', DEF, 'weiblich, beginnt mit Vokal → l\''),
      q('', 'la', ' ragazza', DEF, 'weiblich → la'),
      q('', 'lo', ' zio', DEF, 'männlich, beginnt mit z → lo'),
      q('', "l'", ' ospedale', DEF, 'männlich, beginnt mit Vokal → l\''),
      q('', 'lo', ' psicologo', DEF, 'männlich, beginnt mit ps → lo'),
      q('', 'i', ' ragazzi', DEF_PL, 'Mehrzahl von il ragazzo → i'),
      q('', 'gli', ' studenti', DEF_PL, 'Mehrzahl von lo studente → gli'),
      q('', 'le', ' amiche', DEF_PL, 'Mehrzahl von l\'amica (weiblich) → le'),
      q('', 'gli', ' amici', DEF_PL, 'Mehrzahl von l\'amico (männlich) → gli'),
      q('', 'le', ' case', DEF_PL, 'Mehrzahl von la casa → le'),
      q('', 'i', ' giorni', DEF_PL, 'Mehrzahl von il giorno → i'),
      q('', 'gli', ' gnocchi', DEF_PL, 'männlich, beginnt mit gn → gli'),
    ],
  },
  {
    id: 'articoli-indeterminativi',
    icon: '1️⃣',
    title: 'Unbestimmte Artikel (un, uno, una, un\')',
    level: 'A1',
    lessonId: 'artikel',
    instruction: 'Setze den passenden unbestimmten Artikel ein.',
    explanation:
      'Männlich: un (normal und vor Vokal!), uno (vor s + Konsonant, z, gn, ps). Weiblich: una, un\' (vor Vokal). ' +
      'Achtung: Nur weiblich bekommt einen Apostroph – un amico, aber un\'amica.',
    examples: [
      { it: "un libro · uno zaino · un amico", de: "ein Buch, ein Rucksack, ein Freund" },
      { it: "una casa · un'amica", de: "ein Haus, eine Freundin" },
    ],
    items: [
      q('', 'un', ' libro', INDEF, 'männlich → un'),
      q('', 'uno', ' studente', INDEF, 'männlich, s + Konsonant → uno'),
      q('', 'una', ' casa', INDEF, 'weiblich → una'),
      q('', "un'", ' amica', INDEF, 'weiblich vor Vokal → un\' (mit Apostroph)'),
      q('', 'un', ' amico', INDEF, 'männlich vor Vokal → un (ohne Apostroph)'),
      q('', 'uno', ' zaino', INDEF, 'männlich, beginnt mit z → uno'),
      q('', "un'", ' idea', INDEF, 'weiblich vor Vokal → un\''),
      q('', 'un', ' gelato', INDEF, 'männlich → un'),
      q('', 'uno', ' zio', INDEF, 'männlich, beginnt mit z → uno'),
      q('', "un'", ' ora', INDEF, 'weiblich vor Vokal → un\''),
      q('', 'una', ' bicicletta', INDEF, 'weiblich → una'),
      q('', 'un', ' ospedale', INDEF, 'männlich vor Vokal → un'),
      q('', 'uno', ' sport', INDEF, 'männlich, s + Konsonant → uno'),
      q('', "un'", ' isola', INDEF, 'weiblich vor Vokal → un\''),
      q('', 'uno', ' psicologo', INDEF, 'männlich, beginnt mit ps → uno'),
      q('', 'una', ' pizza', INDEF, 'weiblich → una'),
    ],
  },
  {
    id: 'plurale',
    icon: '👯',
    title: 'Mehrzahl der Nomen',
    level: 'A1',
    lessonId: 'artikel',
    instruction: 'Bilde die Mehrzahl.',
    explanation:
      'Regel: -o → -i, -a → -e, -e → -i. Wörter mit betonter Endung (città, caffè) und Fremdwörter (film, bar) ' +
      'bleiben gleich. Einige Wörter sind unregelmäßig: la mano → le mani, l\'uomo → gli uomini, ' +
      'l\'uovo → le uova, il braccio → le braccia.',
    examples: [
      { it: "il libro → i libri", de: "-o → -i" },
      { it: "la casa → le case", de: "-a → -e" },
      { it: "il fiore → i fiori", de: "-e → -i" },
      { it: "la città → le città", de: "betonte Endung bleibt" },
    ],
    items: [
      q('il libro → i ', 'libri', '', ['libri', 'libre', 'libro', 'libres'], '-o → -i'),
      q('la casa → le ', 'case', '', ['case', 'casi', 'casa', 'cases'], '-a → -e'),
      q('il fiore → i ', 'fiori', '', ['fiori', 'fiore', 'fiora', 'fiores'], '-e → -i'),
      q('la chiave → le ', 'chiavi', '', ['chiavi', 'chiave', 'chiava', 'chiaves'], '-e → -i (auch weiblich)'),
      q("l'amico → gli ", 'amici', '', ['amici', 'amichi', 'amice', 'amico'], '-co → -ci (Ausnahme zu -chi)'),
      q("l'amica → le ", 'amiche', '', ['amiche', 'amice', 'amici', 'amica'], '-ca → -che (h erhält den k-Laut)'),
      q('il ragazzo → i ', 'ragazzi', '', ['ragazzi', 'ragazze', 'ragazzo', 'ragazzos'], '-o → -i'),
      q('la città → le ', 'città', '', ['città', 'cittè', 'cittì', 'cittàs'], 'betonte Endung bleibt gleich'),
      q('il caffè → i ', 'caffè', '', ['caffè', 'caffi', 'caffès', 'caffe'], 'betonte Endung bleibt gleich'),
      q('lo studente → gli ', 'studenti', '', ['studenti', 'studente', 'studenta', 'studentes'], '-e → -i'),
      q('la mano → le ', 'mani', '', ['mani', 'mane', 'mano', 'manos'], 'unregelmäßig: la mano → le mani'),
      q("l'uomo → gli ", 'uomini', '', ['uomini', 'uomi', 'uome', 'uomo'], 'unregelmäßig: l\'uomo → gli uomini'),
      q('il braccio → le ', 'braccia', '', ['braccia', 'bracci', 'braccie', 'braccio'], 'unregelmäßig: il braccio → le braccia'),
      q("l'uovo → le ", 'uova', '', ['uova', 'uovi', 'uove', 'uovo'], 'unregelmäßig: l\'uovo → le uova'),
      q('il film → i ', 'film', '', ['film', 'filmi', 'filme', 'films'], 'Fremdwort bleibt gleich'),
      q('la lezione → le ', 'lezioni', '', ['lezioni', 'lezione', 'leziona', 'leziones'], '-e → -i (auch weiblich)'),
      q('il problema → i ', 'problemi', '', ['problemi', 'probleme', 'problema', 'problemas'], 'männlich auf -a → -i'),
    ],
  },
  {
    id: 'essere-avere',
    icon: '⚖️',
    title: 'essere oder avere',
    level: 'A1',
    lessonId: 'essere-avere',
    instruction: 'Setze die richtige Form von essere oder avere ein.',
    explanation:
      'essere: sono, sei, è, siamo, siete, sono. avere: ho, hai, ha, abbiamo, avete, hanno. ' +
      'Anders als im Deutschen sagt man „haben“ bei Alter (ho vent\'anni), Hunger, Durst, Angst, Kälte, Recht: ' +
      'ho fame, ho sete, ho paura, ho freddo, hai ragione.',
    examples: [
      { it: "Sono stanco.", de: "Ich bin müde." },
      { it: "Ho fame.", de: "Ich habe Hunger." },
      { it: "Ho vent'anni.", de: "Ich bin zwanzig." },
    ],
    items: [
      q('Io ', 'sono', ' stanco.', ['sono', 'ho', 'è', 'hai'], 'Zustand → essere, io → sono'),
      q('Tu ', 'hai', ' fame?', ['hai', 'sei', 'ha', 'è'], 'Hunger haben → avere, tu → hai'),
      q('Lei ', 'è', ' di Milano.', ['è', 'ha', 'sei', 'hai'], 'Herkunft → essere, lei → è'),
      q('Noi ', 'abbiamo', ' due figli.', ['abbiamo', 'siamo', 'avete', 'hanno'], 'besitzen → avere, noi → abbiamo'),
      q('Voi ', 'siete', ' italiani?', ['siete', 'avete', 'sono', 'siamo'], 'Nationalität → essere, voi → siete'),
      q('Loro ', 'sono', ' in vacanza.', ['sono', 'hanno', 'siete', 'è'], 'Zustand/Ort → essere, loro → sono'),
      q('Io ', 'ho', " vent'anni.", ['ho', 'sono', 'hai', 'è'], 'Alter → avere: ho vent\'anni'),
      q('Marco ', 'è', ' molto simpatico.', ['è', 'ha', 'sei', 'hai'], 'Eigenschaft → essere, lui → è'),
      q('Noi ', 'abbiamo', ' freddo.', ['abbiamo', 'siamo', 'hanno', 'avete'], 'mir ist kalt → avere freddo'),
      q('Tu ', 'sei', ' a casa stasera?', ['sei', 'hai', 'è', 'sono'], 'Ort → essere, tu → sei'),
      q('Loro ', 'hanno', ' una macchina nuova.', ['hanno', 'sono', 'ha', 'avete'], 'besitzen → avere, loro → hanno'),
      q('Voi ', 'avete', ' sete?', ['avete', 'siete', 'hanno', 'abbiamo'], 'Durst haben → avere, voi → avete'),
      q('La pizza ', 'è', ' buonissima.', ['è', 'ha', 'sono', 'hai'], 'Eigenschaft → essere, 3. Person → è'),
      q('Io ', 'ho', ' paura dei cani.', ['ho', 'sono', 'ha', 'hai'], 'Angst haben → avere paura'),
      q('Tu ', 'hai', ' ragione!', ['hai', 'sei', 'ha', 'è'], 'Recht haben → avere ragione'),
      q('Noi ', 'siamo', ' pronti.', ['siamo', 'abbiamo', 'siete', 'sono'], 'Zustand → essere, noi → siamo'),
    ],
  },
  {
    id: 'presente',
    icon: '🔁',
    title: 'Präsens der regelmäßigen Verben',
    level: 'A1',
    lessonId: 'praesens',
    instruction: 'Konjugiere das Verb in Klammern im Präsens.',
    explanation:
      '-are: -o, -i, -a, -iamo, -ate, -ano. -ere: -o, -i, -e, -iamo, -ete, -ono. -ire: -o, -i, -e, -iamo, -ite, -ono. ' +
      'Viele -ire-Verben schieben -isc- ein (capisco, finisci, preferisce, capiscono – nicht bei noi/voi). ' +
      'Bei -care/-gare kommt vor i ein h: cerchi, paghi.',
    examples: [
      { it: "parlo · prendo · dormo · capisco", de: "ich spreche, nehme, schlafe, verstehe" },
      { it: "parliamo · prendete · capiscono", de: "wir sprechen, ihr nehmt, sie verstehen" },
    ],
    items: [
      q('Io ', 'parlo', ' italiano. (parlare)', ['parlo', 'parla', 'parli', 'parlare'], '-are, io → -o'),
      q('Tu ', 'abiti', ' a Roma? (abitare)', ['abiti', 'abita', 'abito', 'abitate'], '-are, tu → -i'),
      q('Lei ', 'lavora', ' in banca. (lavorare)', ['lavora', 'lavori', 'lavoro', 'lavore'], '-are, lei → -a'),
      q('Noi ', 'mangiamo', ' la pizza. (mangiare)', ['mangiamo', 'mangiiamo', 'mangiate', 'mangiano'], '-are, noi → -iamo (nur ein i!)'),
      q('Voi ', 'prendete', ' il treno? (prendere)', ['prendete', 'prendate', 'prendono', 'prendite'], '-ere, voi → -ete'),
      q('Loro ', 'leggono', ' il giornale. (leggere)', ['leggono', 'leggano', 'leggiono', 'legge'], '-ere, loro → -ono'),
      q('Io ', 'dormo', ' poco. (dormire)', ['dormo', 'dormi', 'dorme', 'dormisco'], '-ire, io → -o'),
      q('Tu ', 'scrivi', ' una lettera. (scrivere)', ['scrivi', 'scrive', 'scriva', 'scrivo'], '-ere, tu → -i'),
      q('Lui ', 'apre', ' la finestra. (aprire)', ['apre', 'apra', 'apri', 'aprisce'], '-ire, lui → -e'),
      q('Noi ', 'partiamo', ' domani. (partire)', ['partiamo', 'partimo', 'partite', 'partono'], '-ire, noi → -iamo'),
      q('Voi ', 'sentite', ' la musica? (sentire)', ['sentite', 'sentete', 'sentate', 'sentono'], '-ire, voi → -ite'),
      q('Loro ', 'capiscono', ' tutto. (capire)', ['capiscono', 'capono', 'capiono', 'capiscano'], '-isc-Verb, loro → -iscono'),
      q('Io ', 'finisco', ' alle sei. (finire)', ['finisco', 'fino', 'finiso', 'finiscio'], '-isc-Verb, io → -isco'),
      q('Tu ', 'paghi', ' con la carta? (pagare)', ['paghi', 'pagi', 'paga', 'paghe'], '-gare: h vor i → paghi'),
      q('Noi ', 'cerchiamo', ' un albergo. (cercare)', ['cerchiamo', 'cerciamo', 'cercamo', 'cercate'], '-care: h vor i → cerchiamo'),
      q('Lei ', 'preferisce', ' il tè. (preferire)', ['preferisce', 'prefere', 'preferisci', 'preferiscie'], '-isc-Verb, lei → -isce'),
    ],
  },
  {
    id: 'preposizioni-articolate',
    icon: '📍',
    title: 'Präpositionen mit Artikel (al, del, nella …)',
    level: 'A1',
    instruction: 'Setze Präposition + Artikel zusammen ein.',
    explanation:
      'a, di, da, in, su verschmelzen mit dem bestimmten Artikel: a + il = al, di + la = della, da + l\' = dall\', ' +
      'in + il = nel (in → ne-), su + lo = sullo, a + gli = agli, di + i = dei, a + le = alle. ' +
      'Die Artikel-Regeln (il/lo/la/l\'/i/gli/le) gelten wie immer.',
    examples: [
      { it: "al mare · nella borsa · dal medico", de: "ans Meer, in der Tasche, zum Arzt" },
      { it: "sul tavolo · il libro del professore", de: "auf dem Tisch, das Buch des Lehrers" },
    ],
    items: [
      q('Il libro è ', 'sul', ' tavolo. (su + il)', ['sul', 'sullo', 'sulla', 'nel'], 'su + il = sul'),
      q('Vado ', 'al', ' mare. (a + il)', ['al', 'allo', 'alla', 'nel'], 'a + il = al'),
      q('Il gatto è ', 'nella', ' scatola. (in + la)', ['nella', 'nel', 'in la', 'alla'], 'in + la = nella'),
      q('Vengo ', 'dalla', ' stazione. (da + la)', ['dalla', 'della', 'dal', 'da la'], 'da + la = dalla'),
      q('Il colore ', 'del', ' cielo è azzurro. (di + il)', ['del', 'dello', 'dal', 'di il'], 'di + il = del'),
      q('Parlo ', 'agli', ' studenti. (a + gli)', ['agli', 'ai', 'alle', 'allo'], 'a + gli = agli'),
      q('Torno ', "dall'", ' ufficio alle sei. (da + l\')', ["dall'", "dell'", 'dal', "all'"], 'da + l\' = dall\''),
      q('Il nome ', 'della', ' ragazza è Giulia. (di + la)', ['della', 'dalla', 'del', 'di la'], 'di + la = della'),
      q('Andiamo ', 'allo', ' zoo. (a + lo)', ['allo', 'al', 'alla', 'agli'], 'a + lo = allo (vor z)'),
      q('Il bicchiere è ', "nell'", ' armadio. (in + l\')', ["nell'", 'nel', 'nello', "all'"], 'in + l\' = nell\''),
      q('Metto i libri ', 'sullo', ' scaffale. (su + lo)', ['sullo', 'sul', 'sulla', 'sugli'], 'su + lo = sullo (vor s + Konsonant)'),
      q('La casa ', 'dei', ' nonni è grande. (di + i)', ['dei', 'degli', 'delle', 'dai'], 'di + i = dei'),
      q('Vado ', 'dal', ' dentista. (da + il)', ['dal', 'del', 'al', 'da il'], 'da + il = dal (zu jemandem hin)'),
      q('I fiori sono ', 'sui', ' tavoli. (su + i)', ['sui', 'sugli', 'sul', 'sulle'], 'su + i = sui'),
      q('Il treno arriva ', 'alle', ' otto. (a + le)', ['alle', 'agli', 'ai', 'alla'], 'a + le = alle (Uhrzeit)'),
      q('Le chiavi sono ', 'nella', ' borsa. (in + la)', ['nella', 'nel', 'sulla', 'della'], 'in + la = nella'),
    ],
  },
  {
    id: 'possessivi',
    icon: '🫵',
    title: 'Possessivpronomen (mio, tuo, suo …)',
    level: 'A1',
    lessonId: 'pronomen',
    instruction: 'Setze das passende Possessivpronomen ein (mit oder ohne Artikel).',
    explanation:
      'Das Possessiv richtet sich nach dem Besitz, nicht nach dem Besitzer: il mio libro, la mia casa, i miei libri, ' +
      'le mie case. Normalerweise steht der Artikel davor. Ausnahme: Familienmitglieder im Singular ohne Artikel ' +
      '(mia madre, tuo fratello) – aber in der Mehrzahl mit Artikel (i miei genitori). „loro“ hat immer einen Artikel.',
    examples: [
      { it: "il mio libro · la mia casa", de: "mein Buch, mein Haus" },
      { it: "mia madre · i miei genitori", de: "meine Mutter, meine Eltern" },
    ],
    items: [
      q('Questa è ', 'la mia', ' macchina. (mein)', ['la mia', 'il mio', 'mia', 'le mie'], 'la macchina ist weiblich → la mia'),
      q('', 'Mia', ' madre è italiana. (meine)', ['Mia', 'La mia', 'Mio', 'Il mio'], 'Familie im Singular → ohne Artikel'),
      q('', 'I miei', ' libri sono sul tavolo. (meine)', ['I miei', 'Le mie', 'Miei', 'I mii'], 'i libri: männlich Mehrzahl → i miei'),
      q('Dove sono ', 'le tue', ' chiavi? (deine)', ['le tue', 'i tuoi', 'tue', 'la tua'], 'le chiavi: weiblich Mehrzahl → le tue'),
      q('', 'Tuo', ' fratello abita a Roma? (dein)', ['Tuo', 'Il tuo', 'Tua', 'La tua'], 'Familie im Singular → ohne Artikel'),
      q('Questo è ', 'il suo', ' cane. (sein)', ['il suo', 'la sua', 'suo', 'il sua'], 'il cane ist männlich → il suo'),
      q('', 'Le sue', ' sorelle sono simpatiche. (seine)', ['Le sue', 'Sue', 'I suoi', 'La sua'], 'Familie in der Mehrzahl → mit Artikel'),
      q('', 'La nostra', ' casa è grande. (unser)', ['La nostra', 'Il nostro', 'Nostra', 'Le nostre'], 'la casa ist weiblich → la nostra'),
      q('', 'I nostri', ' genitori sono in vacanza. (unsere)', ['I nostri', 'Nostri', 'Le nostre', 'Il nostro'], 'Eltern (Mehrzahl) → mit Artikel'),
      q("Com'è ", 'il vostro', ' appartamento? (euer)', ['il vostro', 'la vostra', 'vostro', 'i vostri'], 'l\'appartamento ist männlich → il vostro'),
      q('', 'Suo', ' padre lavora molto. (ihr)', ['Suo', 'Il suo', 'Sua', 'La sua'], 'Familie im Singular → ohne Artikel; padre → suo'),
      q('È ', 'il mio', ' amico Luca. (mein)', ['il mio', 'mio', 'la mia', 'il mia'], 'amico ist keine Familie → mit Artikel'),
      q('', 'Nostra', ' figlia studia a Bologna. (unsere)', ['Nostra', 'La nostra', 'Nostro', 'Il nostro'], 'Familie im Singular → ohne Artikel'),
      q('', 'I miei', ' nonni vivono in campagna. (meine)', ['I miei', 'Miei', 'Mie', 'Le mie'], 'Familie in der Mehrzahl → mit Artikel'),
      q('Signora, è ', 'la Sua', ' borsa? (Ihre, höflich)', ['la Sua', 'Sua', 'la tua', 'il Suo'], 'höflich: Sua (groß), la borsa → la Sua', ['la sua']),
      q('', 'La loro', ' casa è in centro. (ihr, Mehrzahl)', ['La loro', 'Loro', 'La sua', 'Le loro'], 'loro steht immer mit Artikel'),
    ],
  },
  {
    id: 'domande',
    icon: '❓',
    title: 'Fragewörter',
    level: 'A1',
    instruction: 'Setze das passende Fragewort ein.',
    explanation:
      'chi = wer · che cosa / cosa / che = was · come = wie · dove = wo · quando = wann · perché = warum · ' +
      'quanto / quanta / quanti / quante = wie viel(e) (richtet sich nach dem Nomen) · quale = welcher. ' +
      'Vor è wird quale zu qual – ohne Apostroph: Qual è …?',
    examples: [
      { it: "Come stai? Dove abiti?", de: "Wie geht es dir? Wo wohnst du?" },
      { it: "Qual è il tuo nome?", de: "Wie ist dein Name?" },
    ],
    items: [
      q('', 'Come', ' ti chiami?', ['Come', 'Dove', 'Chi', 'Quando'], 'wie heißt du → come'),
      q('', 'Dove', ' abiti?', ['Dove', 'Come', 'Quando', 'Chi'], 'wo → dove'),
      q('', 'Chi', ' è quella ragazza?', ['Chi', 'Che', 'Come', 'Quale'], 'wer → chi'),
      q('', 'Quando', ' parte il treno?', ['Quando', 'Quanto', 'Dove', 'Come'], 'wann → quando'),
      q('', 'Quanto', ' costa?', ['Quanto', 'Quando', 'Come', 'Quale'], 'wie viel → quanto'),
      q('', 'Perché', ' sei triste?', ['Perché', 'Come', 'Che cosa', 'Quando'], 'warum → perché', ['perche']),
      q('', 'Che cosa', ' fai stasera?', ['Che cosa', 'Chi', 'Come', 'Quale'], 'was → che cosa (auch: cosa)', ['cosa', 'che']),
      q('', 'Quanti', ' anni hai?', ['Quanti', 'Quante', 'Quanto', 'Quale'], 'anni: männlich Mehrzahl → quanti'),
      q('', 'Quale', ' libro preferisci?', ['Quale', 'Che cosa', 'Chi', 'Quanto'], 'welcher → quale', ['che']),
      q('Di ', 'dove', ' sei?', ['dove', 'chi', 'come', 'quando'], 'woher → di dove'),
      q('', 'Che', ' ore sono?', ['Che', 'Quale', 'Quanto', 'Come'], 'feste Wendung: Che ore sono? (Wie spät ist es?)'),
      q('', 'Quante', ' persone ci sono?', ['Quante', 'Quanti', 'Quanto', 'Quanta'], 'persone: weiblich Mehrzahl → quante'),
      q('Con ', 'chi', ' vai al cinema?', ['chi', 'che', 'cosa', 'quale'], 'mit wem → con chi'),
      q('A ', 'che', ' ora inizia il film?', ['che', 'quale', 'quanto', 'come'], 'um wie viel Uhr → a che ora'),
      q('', 'Qual', ' è il tuo numero?', ['Qual', "Qual'", 'Che', 'Come'], 'quale vor è → qual (ohne Apostroph)'),
      q('', 'Quanta', ' acqua bevi al giorno?', ['Quanta', 'Quanto', 'Quante', 'Quanti'], 'acqua: weiblich Einzahl → quanta'),
    ],
  },
  {
    id: 'negazione',
    icon: '🚫',
    title: 'Verneinung (non, mai, niente …)',
    level: 'A1',
    instruction: 'Setze das passende Wort für die Verneinung ein.',
    explanation:
      'non steht direkt vor dem Verb: Non parlo tedesco. Weitere Verneinungswörter stehen nach dem Verb, ' +
      'non bleibt trotzdem davor („doppelte Verneinung“): non … mai (nie), non … niente/nulla (nichts), ' +
      'non … nessuno (niemand), non … più (nicht mehr), non … ancora (noch nicht). „nein“ als Antwort heißt no.',
    examples: [
      { it: "Non parlo tedesco.", de: "Ich spreche kein Deutsch." },
      { it: "Non vado mai al cinema.", de: "Ich gehe nie ins Kino." },
      { it: "Non c'è nessuno.", de: "Es ist niemand da." },
    ],
    items: [
      q('Io ', 'non', ' parlo tedesco.', ['non', 'no', 'niente', 'mai'], 'nicht vor dem Verb → non'),
      q('«Vuoi un caffè?» – «', 'No', ', grazie.»', ['No', 'Non', 'Niente', 'Mai'], 'nein als Antwort → no'),
      q('Non vado ', 'mai', ' in discoteca.', ['mai', 'niente', 'nessuno', 'più'], 'nie → non … mai'),
      q('Non ho visto ', 'nessuno', '.', ['nessuno', 'niente', 'mai', 'non'], 'niemanden → non … nessuno'),
      q('Non capisco ', 'niente', '.', ['niente', 'nessuno', 'mai', 'no'], 'nichts → non … niente', ['nulla']),
      q('Non fumo ', 'più', '.', ['più', 'mai', 'ancora', 'niente'], 'nicht mehr → non … più'),
      q("Non c'è ", 'niente', ' nel frigo.', ['niente', 'nessuno', 'mai', 'non'], 'nichts → niente', ['nulla']),
      q('', 'Nessuno', ' lo sa.', ['Nessuno', 'Niente', 'Non', 'Mai'], 'niemand am Satzanfang → ohne non'),
      q('Non sono ', 'mai', ' stato a Napoli.', ['mai', 'più', 'ancora', 'niente'], 'noch nie → non … mai'),
      q('Non abito ', 'più', ' a Roma.', ['più', 'mai', 'ancora', 'nessuno'], 'nicht mehr → non … più'),
      q('Non conosco ', 'nessuno', ' qui.', ['nessuno', 'niente', 'mai', 'nessun'], 'niemanden → nessuno'),
      q('Non ho ', 'ancora', ' fatto i compiti.', ['ancora', 'più', 'mai', 'già'], 'noch nicht → non … ancora'),
      q('«Non mi piace il pesce.» – «', 'Neanche', ' a me!»', ['Neanche', 'Anche', 'No', 'Nessuno'], 'ich auch nicht → neanche'),
      q("Non c'è ", 'nessun', ' problema.', ['nessun', 'nessuno', 'niente', 'non'], 'kein (vor männlichem Nomen) → nessun'),
      q('Lui ', 'non', ' mangia mai la carne.', ['non', 'no', 'niente', 'nessuno'], 'non bleibt vor dem Verb, auch mit mai'),
      q('', 'Niente', ' è impossibile.', ['Niente', 'Nessuno', 'Non', 'Mai'], 'nichts am Satzanfang → ohne non'),
    ],
  },
  // ── A1 (Fortsetzung) ─────────────────────────────────────────────────────
  {
    id: 'aggettivi',
    icon: '✨',
    title: 'Adjektive: Angleichung',
    level: 'A1',
    instruction: 'Setze das Adjektiv in der passenden Form ein.',
    explanation:
      'Adjektive richten sich nach Geschlecht und Zahl des Nomens und stehen meist dahinter. Auf -o: rosso, rossa, ' +
      'rossi, rosse. Auf -e: grande (männlich und weiblich), grandi (Mehrzahl). -co/-go bekommen in der Mehrzahl oft ' +
      'ein h (stanchi, bianche). Farben wie blu, rosa, viola bleiben gleich. bello vor dem Nomen verändert sich wie ' +
      'der Artikel: un bel libro, un bell\'albero, i bei fiori.',
    examples: [
      { it: 'una macchina rossa · i libri nuovi', de: 'ein rotes Auto, die neuen Bücher' },
      { it: 'una casa grande · due case grandi', de: 'ein großes Haus, zwei große Häuser' },
      { it: 'un bel libro · una bella giornata', de: 'ein schönes Buch, ein schöner Tag' },
    ],
    items: [
      q('una macchina ', 'rossa', ' (rosso)', ['rossa', 'rosso', 'rosse', 'rossi'], 'weiblich Einzahl → -a'),
      q('i libri ', 'nuovi', ' (nuovo)', ['nuovi', 'nuovo', 'nuove', 'nuova'], 'männlich Mehrzahl → -i'),
      q('le ragazze ', 'simpatiche', ' (simpatico)', ['simpatiche', 'simpatici', 'simpatica', 'simpatice'], 'weiblich Mehrzahl, -ca → -che'),
      q('un ragazzo ', 'alto', ' (alto)', ['alto', 'alta', 'alti', 'alte'], 'männlich Einzahl → -o'),
      q('le scarpe ', 'nere', ' (nero)', ['nere', 'neri', 'nera', 'nero'], 'weiblich Mehrzahl → -e'),
      q('una donna ', 'intelligente', ' (intelligente)', ['intelligente', 'intelligenta', 'intelligenti', 'intelligento'], 'Adjektiv auf -e: Einzahl bleibt -e'),
      q('due case ', 'grandi', ' (grande)', ['grandi', 'grande', 'grandie', 'grando'], 'Adjektiv auf -e: Mehrzahl → -i'),
      q('gli amici ', 'tedeschi', ' (tedesco)', ['tedeschi', 'tedesci', 'tedesche', 'tedesco'], 'männlich Mehrzahl, -co → -chi'),
      q('i fiori ', 'gialli', ' (giallo)', ['gialli', 'gialle', 'giallo', 'gialla'], 'männlich Mehrzahl → -i'),
      q('le lezioni ', 'facili', ' (facile)', ['facili', 'facile', 'facila', 'facilie'], 'Adjektiv auf -e: Mehrzahl → -i'),
      q('i bambini ', 'stanchi', ' (stanco)', ['stanchi', 'stanci', 'stanche', 'stanco'], 'männlich Mehrzahl, -co → -chi'),
      q('una camicia ', 'blu', ' (blu)', ['blu', 'blua', 'blue', 'bla'], 'blu ist unveränderlich'),
      q('due magliette ', 'rosa', ' (rosa)', ['rosa', 'rose', 'rosi', 'rosse'], 'rosa ist unveränderlich'),
      q('un ', 'bel', ' libro (bello)', ['bel', 'bello', 'bella', 'bei'], 'bello vor Nomen wie il → bel'),
      q('Che ', 'bella', ' giornata! (bello)', ['bella', 'bello', 'bel', 'belle'], 'weiblich Einzahl → bella'),
      q('il vino ', 'italiano', ' (italiano)', ['italiano', 'italiana', 'italiani', 'italiane'], 'männlich Einzahl → -o'),
    ],
  },
  {
    id: 'ce-ci-sono',
    icon: '📦',
    title: "c'è / ci sono (es gibt)",
    level: 'A1',
    instruction: "Setze c'è oder ci sono ein.",
    explanation:
      "c'è (es gibt / es ist da) steht mit Einzahl, ci sono mit Mehrzahl. Verneinung: non c'è / non ci sono. " +
      "Frage einfach mit Satzmelodie: C'è un bar qui vicino?",
    examples: [
      { it: "C'è un bar qui vicino?", de: 'Gibt es hier in der Nähe eine Bar?' },
      { it: 'Ci sono molti turisti.', de: 'Es gibt viele Touristen.' },
      { it: "Non c'è pane.", de: 'Es gibt kein Brot.' },
    ],
    items: [
      q('', "C'è", ' un bar qui vicino?', ["C'è", 'Ci sono', 'È', 'Sono'], 'un bar: Einzahl → c\'è'),
      q('', 'Ci sono', ' molti turisti in piazza.', ['Ci sono', "C'è", 'Sono', 'È'], 'molti turisti: Mehrzahl → ci sono'),
      q('Nel frigo ', "c'è", ' il latte.', ["c'è", 'ci sono', 'è', 'sono'], 'il latte: Einzahl'),
      q('', 'Ci sono', " due bagni nell'appartamento.", ['Ci sono', "C'è", 'Sono', 'Hanno'], 'due bagni: Mehrzahl'),
      q('Non ', 'ci sono', ' problemi.', ['ci sono', "c'è", 'sono', 'è'], 'problemi: Mehrzahl'),
      q('Oggi non ', "c'è", ' nessuno in ufficio.', ["c'è", 'ci sono', 'è', 'sono'], 'nessuno: Einzahl'),
      q('In classe ', 'ci sono', ' venti studenti.', ['ci sono', "c'è", 'sono', 'è'], 'venti studenti: Mehrzahl'),
      q('', "C'è", ' una farmacia aperta?', ["C'è", 'Ci sono', 'È', 'Sono'], 'una farmacia: Einzahl'),
      q('Sul tavolo ', 'ci sono', ' le chiavi.', ['ci sono', "c'è", 'sono', 'è'], 'le chiavi: Mehrzahl'),
      q('', "C'è", ' tempo per un caffè?', ["C'è", 'Ci sono', 'È', 'Ha'], 'tempo: Einzahl'),
      q('A Roma ', 'ci sono', ' tante chiese.', ['ci sono', "c'è", 'sono', 'è'], 'tante chiese: Mehrzahl'),
      q('Non ', "c'è", ' pane.', ["c'è", 'ci sono', 'è', 'ha'], 'pane: Einzahl'),
      q('Scusi, ', 'ci sono', ' posti liberi?', ['ci sono', "c'è", 'sono', 'è'], 'posti: Mehrzahl'),
      q('In giardino ', "c'è", ' un albero grande.', ["c'è", 'ci sono', 'è', 'sono'], 'un albero: Einzahl'),
    ],
  },
  {
    id: 'piacere',
    icon: '❤️',
    title: 'mi piace / mi piacciono',
    level: 'A1',
    instruction: 'Setze die passende Form oder das passende Pronomen ein.',
    explanation:
      'piacere funktioniert umgekehrt als „mögen“: Das, was gefällt, ist das Subjekt. Einzahl oder Infinitiv → piace, ' +
      'Mehrzahl → piacciono. Wem es gefällt, sagt das Pronomen: mi (mir), ti (dir), gli (ihm), le (ihr), Le (Ihnen), ' +
      'ci (uns), vi (euch), gli (ihnen). Betont: a me, a te, a Marco. Im passato prossimo mit essere: mi è piaciuto/a.',
    examples: [
      { it: 'Mi piace la pizza.', de: 'Ich mag Pizza.' },
      { it: 'Ti piacciono gli spaghetti?', de: 'Magst du Spaghetti?' },
      { it: 'A Marco piace ballare. → Gli piace ballare.', de: 'Marco tanzt gern. → Er tanzt gern.' },
    ],
    items: [
      q('Mi ', 'piace', ' la pizza.', ['piace', 'piacciono', 'piaccio', 'piaci'], 'la pizza: Einzahl → piace'),
      q('Ti ', 'piacciono', ' gli spaghetti?', ['piacciono', 'piace', 'piaci', 'piacete'], 'gli spaghetti: Mehrzahl → piacciono'),
      q('Mi ', 'piace', ' ballare.', ['piace', 'piacciono', 'piaccio', 'piacere'], 'Infinitiv → piace'),
      q('', 'Ti', ' piace il calcio? (dir)', ['Ti', 'Mi', 'Gli', 'Le'], 'dir → ti'),
      q('Marco? ', 'Gli', ' piace il vino. (ihm)', ['Gli', 'Le', 'Lo', 'Li'], 'ihm → gli'),
      q('Giulia? ', 'Le', ' piacciono i gatti. (ihr)', ['Le', 'Gli', 'La', 'Li'], 'ihr → le'),
      q('', 'Ci', ' piace viaggiare. (uns)', ['Ci', 'Vi', 'Ne', 'Si'], 'uns → ci'),
      q('Non mi ', 'piacciono', ' i film horror.', ['piacciono', 'piace', 'piaccio', 'piacere'], 'i film: Mehrzahl'),
      q('Vi ', 'piace', ' la musica italiana?', ['piace', 'piacciono', 'piacete', 'piaci'], 'la musica: Einzahl'),
      q('Signora, ', 'Le', ' piace il caffè? (Ihnen)', ['Le', 'Ti', 'Gli', 'La'], 'höflich Ihnen → Le'),
      q('Mi ', 'piacciono', ' molto le tue scarpe.', ['piacciono', 'piace', 'piaci', 'piacerebbe'], 'le scarpe: Mehrzahl'),
      q('A me non ', 'piace', ' il pesce.', ['piace', 'piacciono', 'piaccio', 'piaci'], 'il pesce: Einzahl'),
      q('Ci ', 'piacciono', ' le vacanze al mare.', ['piacciono', 'piace', 'piacciamo', 'piacete'], 'le vacanze: Mehrzahl'),
      q('Mi è ', 'piaciuto', ' molto il film.', ['piaciuto', 'piaciuta', 'piaciuti', 'piacuto'], 'il film: männlich Einzahl → piaciuto'),
      q('Ti sono ', 'piaciute', ' le foto?', ['piaciute', 'piaciuti', 'piaciuto', 'piaciuta'], 'le foto: weiblich Mehrzahl → piaciute'),
    ],
  },
  {
    id: 'riflessivi',
    icon: '🪞',
    title: 'Reflexive Verben',
    level: 'A1',
    instruction: 'Setze das Reflexivpronomen oder die Verbform ein.',
    explanation:
      'Reflexive Verben haben ein Pronomen vor dem Verb: mi, ti, si, ci, vi, si – mi alzo, ti alzi, si alza, ' +
      'ci alziamo, vi alzate, si alzano. Im passato prossimo stehen sie immer mit essere, und das Partizip passt sich ' +
      'an: mi sono alzato/alzata, ci siamo divertiti.',
    examples: [
      { it: 'Mi alzo alle sette.', de: 'Ich stehe um sieben auf.' },
      { it: 'Come ti chiami?', de: 'Wie heißt du?' },
      { it: 'Ci siamo divertiti.', de: 'Wir haben uns amüsiert.' },
    ],
    items: [
      q('Io ', 'mi', ' alzo alle sette.', ['mi', 'ti', 'si', 'ci'], 'io → mi'),
      q('Tu ', 'ti', ' chiami Luca?', ['ti', 'mi', 'si', 'vi'], 'tu → ti'),
      q('Lei ', 'si', ' veste in fretta.', ['si', 'ti', 'ci', 'le'], 'lei → si'),
      q('Noi ', 'ci', ' divertiamo molto.', ['ci', 'vi', 'si', 'ne'], 'noi → ci'),
      q('Voi ', 'vi', ' svegliate presto?', ['vi', 'ci', 'si', 'ti'], 'voi → vi'),
      q('I bambini ', 'si', ' lavano le mani.', ['si', 'ci', 'vi', 'li'], 'loro → si'),
      q('Mi ', 'chiamo', ' Anna. (chiamarsi)', ['chiamo', 'chiami', 'chiama', 'chiamano'], 'io → -o'),
      q('Si ', 'sposano', ' a giugno. (sposarsi, loro)', ['sposano', 'sposa', 'sposiamo', 'sposate'], 'loro → -ano'),
      q('Ti ', 'annoi', ' spesso? (annoiarsi)', ['annoi', 'annoia', 'annoio', 'annoiamo'], 'tu → -i (nur ein i)'),
      q('Stamattina ', 'mi', ' sono svegliato tardi.', ['mi', 'ti', 'si', 'ci'], 'io → mi'),
      q('Ieri sera ci ', 'siamo', ' divertiti.', ['siamo', 'abbiamo', 'sono', 'avete'], 'reflexiv → essere'),
      q('Lei si è ', 'alzata', ' alle sei. (alzarsi)', ['alzata', 'alzato', 'alzati', 'alzate'], 'essere: weiblich Einzahl → -a'),
      q('Voi vi ', 'siete', ' riposati?', ['siete', 'avete', 'sono', 'siamo'], 'reflexiv → essere, voi → siete'),
      q('Non ', 'mi', ' ricordo il suo nome.', ['mi', 'ti', 'si', 'lo'], 'io → mi'),
      q('A che ora ', 'ti', ' svegli?', ['ti', 'si', 'mi', 'vi'], 'tu → ti'),
    ],
  },
  {
    id: 'verbi-irregolari',
    icon: '⚡',
    title: 'Unregelmäßige Verben im Präsens',
    level: 'A1',
    instruction: 'Konjugiere das Verb in Klammern im Präsens.',
    explanation:
      'Die häufigsten Verben sind unregelmäßig und müssen auswendig gelernt werden: andare (vado, vai, va, andiamo, ' +
      'andate, vanno), fare (faccio, fai, fa, facciamo, fate, fanno), venire (vengo, vieni, viene, veniamo, venite, ' +
      'vengono), volere (voglio, vuoi, vuole, vogliamo, volete, vogliono), potere (posso, puoi, può …), dovere (devo, ' +
      'devi, deve, dobbiamo …), sapere (so, sai, sa …), uscire (esco, esci, esce, usciamo, uscite, escono), dire (dico, ' +
      'dici, dice, diciamo, dite, dicono), stare (sto, stai, sta …), bere (bevo, bevi …).',
    examples: [
      { it: 'Vado al mare.', de: 'Ich fahre ans Meer.' },
      { it: 'Vuoi un caffè?', de: 'Willst du einen Kaffee?' },
      { it: 'Non so.', de: 'Ich weiß nicht.' },
    ],
    items: [
      q('Io ', 'vado', ' al cinema stasera. (andare)', ['vado', 'ando', 'vai', 'va'], 'andare, io → vado'),
      q('Noi ', 'facciamo', ' la spesa. (fare)', ['facciamo', 'fammo', 'fate', 'fanno'], 'fare, noi → facciamo'),
      q('Tu ', 'vieni', ' con noi? (venire)', ['vieni', 'veni', 'viene', 'vengi'], 'venire, tu → vieni'),
      q('Io ', 'voglio', ' un caffè. (volere)', ['voglio', 'volo', 'vuoi', 'vuolo'], 'volere, io → voglio'),
      q('', 'Posso', ' aprire la finestra? (potere, io)', ['Posso', 'Poto', 'Può', 'Possono'], 'potere, io → posso'),
      q('Noi ', 'dobbiamo', ' partire presto. (dovere)', ['dobbiamo', 'doviamo', 'devono', 'dovete'], 'dovere, noi → dobbiamo'),
      q('Lui non ', 'sa', ' niente. (sapere)', ['sa', 'sape', 'so', 'sai'], 'sapere, lui → sa'),
      q('Loro ', 'escono', ' stasera. (uscire)', ['escono', 'uscono', 'escano', 'usciono'], 'uscire, loro → escono'),
      q('Che cosa ', 'dici', '? (dire, tu)', ['dici', 'dii', 'dice', 'dite'], 'dire, tu → dici'),
      q('Come ', 'stai', '? (stare, tu)', ['stai', 'sti', 'sta', 'stanno'], 'stare, tu → stai'),
      q('Voi ', 'bevete', ' il vino? (bere)', ['bevete', 'berete', 'bete', 'bevite'], 'bere, voi → bevete'),
      q('Loro ', 'rimangono', ' a casa. (rimanere)', ['rimangono', 'rimanono', 'rimanano', 'rimanghono'], 'rimanere, loro → rimangono'),
      q('Tu ', 'vuoi', ' il latte? (volere)', ['vuoi', 'voli', 'vogli', 'vuole'], 'volere, tu → vuoi'),
      q('Io ', 'vengo', " dall'Italia. (venire)", ['vengo', 'veno', 'vieno', 'vengho'], 'venire, io → vengo'),
      q('Loro ', 'fanno', ' molto sport. (fare)', ['fanno', 'fano', 'facciono', 'fanni'], 'fare, loro → fanno'),
      q('Lei ', 'può', ' venire domani. (potere)', ['può', 'pote', 'puoi', 'possa'], 'potere, lei → può'),
    ],
  },
  {
    id: 'dimostrativi',
    icon: '👉',
    title: 'questo / quello',
    level: 'A1',
    instruction: 'Setze die passende Form von questo oder quello ein.',
    explanation:
      'questo (dieser hier): questo, questa, questi, queste – vor Vokal oft quest\'. quello (jener dort) verändert ' +
      'sich wie der bestimmte Artikel: quel libro (il), quello studente (lo), quell\'amico (l\'), quella casa (la), ' +
      'quei libri (i), quegli studenti (gli), quelle case (le).',
    examples: [
      { it: 'Questo libro è mio.', de: 'Dieses Buch gehört mir.' },
      { it: 'quel ragazzo · quello zaino · quell\'albero', de: 'jener Junge, jener Rucksack, jener Baum' },
      { it: 'quei fiori · quegli amici · quelle case', de: 'jene Blumen, Freunde, Häuser' },
    ],
    items: [
      q('', 'Questo', ' libro è mio. (dieses)', ['Questo', 'Questa', 'Questi', 'Queste'], 'il libro → questo'),
      q('', 'Questa', ' ragazza è mia sorella. (dieses)', ['Questa', 'Questo', 'Queste', 'Questi'], 'la ragazza → questa'),
      q('', 'Queste', ' scarpe sono nuove. (diese)', ['Queste', 'Questi', 'Questa', 'Questo'], 'le scarpe → queste'),
      q('', 'Quel', ' libro là è tuo? (jenes)', ['Quel', 'Quello', 'Quella', 'Quei'], 'il libro → quel'),
      q('', 'Quello', ' studente parla inglese. (jener)', ['Quello', 'Quel', "Quell'", 'Quegli'], 'lo studente → quello'),
      q('', 'Quella', ' casa è bellissima. (jenes)', ['Quella', 'Quel', 'Quello', 'Quelle'], 'la casa → quella'),
      q('', 'Quei', ' ragazzi sono simpatici. (jene)', ['Quei', 'Quegli', 'Quelle', 'Quelli'], 'i ragazzi → quei'),
      q('', 'Quegli', ' zaini sono pesanti. (jene)', ['Quegli', 'Quei', 'Quelle', 'Quelli'], 'gli zaini → quegli'),
      q('', "Quell'", ' amico è italiano. (jener)', ["Quell'", 'Quel', 'Quello', 'Quella'], "l'amico → quell'"),
      q('Vedi ', 'quelle', ' montagne? (jene)', ['quelle', 'quei', 'quegli', 'quella'], 'le montagne → quelle'),
      q('Mi piace ', 'questo', ' vestito rosso. (dieses)', ['questo', 'questa', 'quello', 'queste'], 'il vestito → questo'),
      q('', 'Quegli', ' gnocchi sono buonissimi. (jene)', ['Quegli', 'Quei', 'Quelli', 'Quelle'], 'gli gnocchi → quegli'),
      q('Non mi piace ', 'quel', ' film. (jener)', ['quel', 'quello', 'quella', 'quei'], 'il film → quel'),
      q('Chi sono ', 'quelle', ' persone? (jene)', ['quelle', 'quei', 'quegli', 'quella'], 'le persone → quelle'),
      q('', 'Questa', ' settimana sono stanco. (diese)', ['Questa', 'Questo', 'Quella', 'Queste'], 'la settimana → questa'),
    ],
  },
  // ── A2 ───────────────────────────────────────────────────────────────────
  {
    id: 'passato-prossimo',
    icon: '⏪',
    title: 'Passato prossimo (essere oder avere)',
    level: 'A2',
    instruction: 'Setze das Hilfsverb oder das Partizip ein.',
    explanation:
      'Passato prossimo = Hilfsverb (avere oder essere) + Partizip. Die meisten Verben nehmen avere: ho mangiato. ' +
      'Verben der Bewegung und Veränderung (andare, venire, arrivare, partire, uscire, restare, nascere …) und alle ' +
      'reflexiven Verben nehmen essere – dann richtet sich das Partizip nach dem Subjekt: sono andato/andata, ' +
      'siamo andati/andate. Unregelmäßige Partizipien: fatto, scritto, preso, letto, visto, detto, messo.',
    examples: [
      { it: "Ho mangiato una pizza.", de: "Ich habe eine Pizza gegessen." },
      { it: "Giulia è andata al mare.", de: "Giulia ist ans Meer gefahren." },
      { it: "Ci siamo divertiti.", de: "Wir haben uns amüsiert." },
    ],
    items: [
      q('Ieri Giulia ', 'è', ' andata al cinema.', ['è', 'ha', 'sono', 'hai'], 'andare → essere'),
      q('Noi ', 'abbiamo', ' mangiato una pizza.', ['abbiamo', 'siamo', 'avete', 'hanno'], 'mangiare → avere'),
      q('Marco ', 'è', ' arrivato tardi.', ['è', 'ha', 'sono', 'hai'], 'arrivare → essere'),
      q('Tu ', 'hai', ' visto il film?', ['hai', 'sei', 'ha', 'è'], 'vedere → avere'),
      q('Loro ', 'sono', ' partiti stamattina.', ['sono', 'hanno', 'siete', 'è'], 'partire → essere'),
      q('Io ', 'ho', ' dormito male.', ['ho', 'sono', 'ha', 'hai'], 'dormire → avere'),
      q('Lei ', 'è', ' nata a Napoli.', ['è', 'ha', 'sono', 'hai'], 'nascere → essere'),
      q('Voi ', 'avete', ' fatto i compiti?', ['avete', 'siete', 'hanno', 'abbiamo'], 'fare → avere'),
      q('Noi ', 'siamo', ' rimasti a casa.', ['siamo', 'abbiamo', 'siete', 'sono'], 'rimanere → essere'),
      q('Si ', 'è', ' svegliato alle sette.', ['è', 'ha', 'sono', 'hai'], 'reflexiv (svegliarsi) → essere'),
      q('Le ragazze sono ', 'andate', ' al mare. (andare)', ['andate', 'andati', 'andato', 'andata'], 'essere: Partizip passt sich an → weiblich Mehrzahl -e'),
      q('Mia madre è ', 'tornata', ' ieri. (tornare)', ['tornata', 'tornato', 'tornate', 'tornati'], 'essere: weiblich Einzahl → -a'),
      q('I bambini sono ', 'usciti', ' presto. (uscire)', ['usciti', 'uscito', 'uscite', 'uscita'], 'essere: männlich Mehrzahl → -i'),
      q('Ho ', 'scritto', ' una lettera. (scrivere)', ['scritto', 'scrivuto', 'scriverato', 'scritta'], 'unregelmäßig: scrivere → scritto'),
      q('Abbiamo ', 'preso', ' il treno. (prendere)', ['preso', 'prenduto', 'presi', 'prendato'], 'unregelmäßig: prendere → preso'),
      q('Hai ', 'letto', ' il libro? (leggere)', ['letto', 'leggiuto', 'leggito', 'letta'], 'unregelmäßig: leggere → letto'),
    ],
  },
  {
    id: 'preposizioni-semplici',
    icon: '🧭',
    title: 'Präpositionen: a, in, da, di, per, tra',
    level: 'A2',
    instruction: 'Setze die passende Präposition ein.',
    explanation:
      'a + Stadt (a Roma), in + Land/Region (in Italia, in Toscana), in + Verkehrsmittel (in treno, in macchina) – aber ' +
      'a piedi. da + Person = zu/bei jemandem (vado da Marco), da + Zeitangabe = seit (da due anni), da = von/aus ' +
      '(vengo da Roma). di = Herkunft/Besitz (sono di Berlino, il libro di Eco). per = für / Dauer (per tre ore). ' +
      'tra/fra = in (Zukunft: tra un\'ora) oder zwischen.',
    examples: [
      { it: 'Abito a Milano, in Italia.', de: 'Ich wohne in Mailand, in Italien.' },
      { it: 'Vado da Marco in bici.', de: 'Ich fahre mit dem Rad zu Marco.' },
      { it: 'Studio italiano da due anni.', de: 'Ich lerne seit zwei Jahren Italienisch.' },
    ],
    items: [
      q('Abito ', 'a', ' Milano.', ['a', 'in', 'da', 'di'], 'Stadt → a'),
      q('In estate vado ', 'in', ' Spagna.', ['in', 'a', 'da', 'di'], 'Land → in'),
      q('Sono ', 'di', ' Berlino. (Herkunft)', ['di', 'da', 'a', 'in'], 'Herkunft mit essere → di'),
      q('Vado al lavoro ', 'in', ' bicicletta.', ['in', 'con', 'a', 'per'], 'Verkehrsmittel → in'),
      q('Andiamo ', 'a', ' piedi.', ['a', 'in', 'con', 'da'], 'feste Wendung: a piedi'),
      q('Stasera vado ', 'da', ' Marco.', ['da', 'a', 'in', 'di'], 'zu einer Person → da'),
      q('Il treno parte ', 'tra', ' dieci minuti.', ['tra', 'in', 'per', 'da'], 'in (Zukunft) → tra/fra', ['fra']),
      q('Studio italiano ', 'da', ' due anni.', ['da', 'per', 'tra', 'di'], 'seit → da'),
      q('Ho lavorato ', 'per', ' tre ore.', ['per', 'da', 'tra', 'in'], 'Dauer (abgeschlossen) → per'),
      q('Questo regalo è ', 'per', ' te.', ['per', 'a', 'da', 'di'], 'für → per'),
      q('Vivo ', 'in', ' Toscana.', ['in', 'a', 'da', 'di'], 'Region → in'),
      q('Torno ', 'a', ' casa.', ['a', 'in', 'da', 'di'], 'feste Wendung: a casa'),
      q('Il libro è ', 'di', ' Umberto Eco.', ['di', 'da', 'a', 'per'], 'Urheber/Besitz → di'),
      q('Vengo ', 'da', ' Roma, ma sono di Napoli.', ['da', 'di', 'a', 'in'], 'woher (gerade) → da'),
      q('La farmacia è ', 'tra', ' la banca e il bar.', ['tra', 'da', 'per', 'in'], 'zwischen → tra/fra', ['fra']),
      q('Mia sorella lavora ', 'in', ' una banca.', ['in', 'a', 'da', 'di'], 'in einem Betrieb → in'),
    ],
  },
  {
    id: 'imperfetto',
    icon: '🕰️',
    title: 'Imperfetto',
    level: 'A2',
    instruction: 'Setze das Verb im imperfetto ein.',
    explanation:
      'Endungen: -are → -avo, -avi, -ava, -avamo, -avate, -avano; -ere → -evo, -evi, -eva …; -ire → -ivo, -ivi, -iva …. ' +
      'Fast alle Verben sind regelmäßig. Ausnahmen: essere (ero, eri, era, eravamo, eravate, erano), fare (facevo), ' +
      'dire (dicevo), bere (bevevo). Gebrauch: Gewohnheiten, Beschreibungen und Zustände in der Vergangenheit.',
    examples: [
      { it: 'Da bambino giocavo a calcio.', de: 'Als Kind habe ich Fußball gespielt.' },
      { it: 'Era tardi e pioveva.', de: 'Es war spät und es regnete.' },
    ],
    items: [
      q('Da bambino ', 'giocavo', ' a calcio. (giocare, io)', ['giocavo', 'giocava', 'giocai', 'giocevo'], '-are, io → -avo'),
      q('Quando ', 'ero', ' piccola, abitavo a Napoli. (essere)', ['ero', 'era', 'eri', 'sono'], 'essere, io → ero'),
      q('Mio nonno ', 'leggeva', ' il giornale ogni mattina. (leggere)', ['leggeva', 'leggiva', 'leggevo', 'legava'], '-ere, lui → -eva'),
      q('Noi ', 'andavamo', ' sempre al mare. (andare)', ['andavamo', 'andevamo', 'andavano', 'vadavamo'], '-are, noi → -avamo'),
      q('Che cosa ', 'facevi', ' ieri alle otto? (fare, tu)', ['facevi', 'favi', 'facevo', 'farevi'], 'fare → fac- + -evi'),
      q('Loro ', 'vivevano', ' in un piccolo appartamento. (vivere)', ['vivevano', 'vivavano', 'vivivano', 'vivevamo'], '-ere, loro → -evano'),
      q('Voi ', 'uscivate', ' spesso da giovani? (uscire)', ['uscivate', 'uscevate', 'escivate', 'uscivamo'], '-ire, voi → -ivate'),
      q('Fuori ', 'pioveva', ' e faceva freddo. (piovere)', ['pioveva', 'piovava', 'piove', 'piovevo'], '-ere, 3. Person → -eva'),
      q('Lui ', 'diceva', ' sempre la verità. (dire)', ['diceva', 'dirava', 'dicava', 'dicevo'], 'dire → dic- + -eva'),
      q('La casa ', 'aveva', ' un grande giardino. (avere)', ['aveva', 'avava', 'era', 'avevo'], 'avere, 3. Person → aveva'),
      q('Noi ', 'bevevamo', ' il tè ogni pomeriggio. (bere)', ['bevevamo', 'beravamo', 'bevamo', 'bevavamo'], 'bere → bev- + -evamo'),
      q('Tu ', 'suonavi', ' il pianoforte? (suonare)', ['suonavi', 'suonevi', 'suonava', 'suonivi'], '-are, tu → -avi'),
      q('I bambini ', 'giocavano', ' nel parco. (giocare)', ['giocavano', 'giocevano', 'giocavamo', 'giocano'], '-are, loro → -avano'),
      q('Io non ', 'potevo', ' dormire. (potere)', ['potevo', 'potavo', 'posso', 'poteva'], '-ere, io → -evo'),
      q('', 'Erano', ' le otto quando sono arrivato. (essere)', ['Erano', 'Era', 'Sono', 'Ero'], 'Uhrzeit (Mehrzahl) → erano'),
      q('Da giovane mia madre ', 'dormiva', ' poco. (dormire)', ['dormiva', 'dormeva', 'dormava', 'dormivo'], '-ire, lei → -iva'),
    ],
  },
  {
    id: 'imperfetto-passato',
    icon: '⚖️',
    title: 'Imperfetto oder passato prossimo?',
    level: 'A2',
    instruction: 'Wähle die passende Vergangenheitsform.',
    explanation:
      'passato prossimo: abgeschlossene, einmalige Handlung („was ist passiert?“) – Ieri ho visto un film. ' +
      'imperfetto: Gewohnheit, Beschreibung, Zustand oder eine laufende Handlung im Hintergrund („wie war es?“) – ' +
      'Da bambino andavo al mare. Era tardi. Mentre leggevo, è suonato il telefono. Signalwörter: ieri, una volta, ' +
      'improvvisamente → passato prossimo; sempre, ogni giorno, mentre, da bambino → imperfetto.',
    examples: [
      { it: 'Mentre cucinavo, è arrivata Anna.', de: 'Während ich kochte, kam Anna.' },
      { it: 'Ogni estate andavamo al mare, ma nel 2020 siamo rimasti a casa.', de: 'Jeden Sommer fuhren wir ans Meer, aber 2020 blieben wir zu Hause.' },
    ],
    items: [
      q('Da bambino ', 'andavo', ' ogni estate in Sicilia. (andare, io)', ['andavo', 'sono andato'], 'Gewohnheit → imperfetto'),
      q('Ieri ', 'ho visto', ' un film bellissimo. (vedere, io)', ['ho visto', 'vedevo'], 'einmalig, ieri → passato prossimo'),
      q('Mentre ', 'cucinavo', ', è suonato il telefono. (cucinare, io)', ['cucinavo', 'ho cucinato'], 'laufende Handlung (mentre) → imperfetto'),
      q('', 'Era', ' una bella giornata e c\'era il sole. (essere)', ['Era', 'È stata'], 'Beschreibung → imperfetto'),
      q("L'anno scorso ", 'siamo andati', ' a Roma per la prima volta. (andare, noi)', ['siamo andati', 'andavamo'], 'einmalig → passato prossimo', ['siamo andate']),
      q('Mia nonna ', 'faceva', ' sempre la pasta in casa. (fare)', ['faceva', 'ha fatto'], 'sempre → imperfetto'),
      q('Ieri sera ', 'sono tornato', ' tardi. (tornare, io)', ['sono tornato', 'tornavo'], 'einmalig → passato prossimo', ['sono tornata']),
      q('Quando ero piccola, ', 'avevo', ' paura del buio. (avere)', ['avevo', 'ho avuto'], 'Zustand in der Kindheit → imperfetto'),
      q('Improvvisamente ', 'è cominciato', ' a piovere. (cominciare)', ['è cominciato', 'cominciava'], 'improvvisamente → passato prossimo', ['ha cominciato']),
      q('Il ragazzo ', 'era', ' alto e biondo. (essere)', ['era', 'è stato'], 'Beschreibung → imperfetto'),
      q('Sabato scorso ', 'ho preparato', ' una torta. (preparare, io)', ['ho preparato', 'preparavo'], 'einmalig → passato prossimo'),
      q('Ogni mattina ', 'prendeva', ' il caffè al bar. (prendere, lui)', ['prendeva', 'ha preso'], 'ogni mattina → imperfetto'),
      q('Nel 2010 ', 'si è trasferita', ' in Germania. (trasferirsi, lei)', ['si è trasferita', 'si trasferiva'], 'einmaliges Ereignis → passato prossimo'),
      q('Non sono uscito perché ', 'stavo', ' male. (stare)', ['stavo', 'sono stato'], 'Zustand als Grund → imperfetto'),
      q('Due giorni fa ', 'ho incontrato', ' Marco in centro. (incontrare, io)', ['ho incontrato', 'incontravo'], 'einmalig → passato prossimo'),
      q('Mentre voi dormivate, noi ', 'pulivamo', ' la casa. (pulire)', ['pulivamo', 'abbiamo pulito'], 'zwei parallele Handlungen → imperfetto'),
    ],
  },
  {
    id: 'futuro',
    icon: '🔮',
    title: 'Futuro semplice',
    level: 'A2',
    instruction: 'Setze das Verb im Futur ein.',
    explanation:
      'Endungen -ò, -ai, -à, -emo, -ete, -anno an den Infinitivstamm; bei -are wird a zu e (parlare → parlerò). ' +
      '-care/-gare bekommen ein h (cercherò, pagherò), -ciare/-giare verlieren das i (mangerò, comincerò). ' +
      'Unregelmäßig: sarò, avrò, andrò, farò, verrò, vorrò, potrò, dovrò, saprò, vedrò, vivrò, berrò, rimarrò. ' +
      'Das Futur drückt auch Vermutungen aus: Saranno le otto (Es wird wohl acht sein).',
    examples: [
      { it: 'Domani andrò al mare.', de: 'Morgen werde ich ans Meer fahren.' },
      { it: 'Che ore sono? – Saranno le dieci.', de: 'Wie spät ist es? – Es wird wohl zehn sein.' },
    ],
    items: [
      q('Domani ', 'andrò', ' al mare. (andare, io)', ['andrò', 'anderò', 'andarò', 'andrei'], 'andare → andr-'),
      q("L'anno prossimo ", 'vivremo', ' in Italia. (vivere, noi)', ['vivremo', 'viveremo', 'vivramo', 'viviamo'], 'vivere → vivr-'),
      q('Quando ', 'tornerai', ' a casa? (tornare, tu)', ['tornerai', 'tornarai', 'tornerei', 'torni'], '-are → -er- + ai'),
      q('Domenica ', 'farà', ' bel tempo. (fare)', ['farà', 'farerà', 'fa', 'farebbe'], 'fare → far-'),
      q('Stasera ', 'verrete', ' a cena da noi? (venire, voi)', ['verrete', 'venirete', 'venerete', 'verreste'], 'venire → verr-'),
      q('Domani non ', 'avrò', ' tempo. (avere, io)', ['avrò', 'averò', 'avrei', 'ho'], 'avere → avr-'),
      q('Tra un anno ', 'sarà', ' medico. (essere, lei)', ['sarà', 'esserà', 'sarebbe', 'è'], 'essere → sar-'),
      q('', 'Prenderemo', ' il treno delle otto. (prendere, noi)', ['Prenderemo', 'Prendremo', 'Prenderemmo', 'Prendiamo'], '-ere → -er- + emo'),
      q('Ti ', 'chiamerò', ' appena arrivo. (chiamare, io)', ['chiamerò', 'chiamarò', 'chiamerei', 'chiamo'], '-are → -er- + ò'),
      q('Loro ', 'pagheranno', ' il pranzo. (pagare)', ['pagheranno', 'pageranno', 'pagaranno', 'pagherebbero'], '-gare → -gher-'),
      q('Il film ', 'comincerà', ' alle nove. (cominciare)', ['comincerà', 'cominciarà', 'comincierà', 'comincerebbe'], '-ciare → -cer- (ohne i)'),
      q('', 'Dovrai', ' restare a casa. (dovere, tu)', ['Dovrai', 'Doverai', 'Dovresti', 'Devi'], 'dovere → dovr-'),
      q('Non so che ore sono, ', 'saranno', ' le dieci. (essere – Vermutung)', ['saranno', 'sono', 'sarebbero', 'erano'], 'Vermutung → Futur'),
      q('Che cosa ', 'farai', ' da grande? (fare, tu)', ['farai', 'farerai', 'fai', 'faresti'], 'fare → far- + ai'),
      q('Domani ', 'vedrò', ' i miei nonni. (vedere, io)', ['vedrò', 'vederò', 'vedrei', 'vedo'], 'vedere → vedr-'),
      q('Vi ', 'dirò', ' tutto domani. (dire, io)', ['dirò', 'dicerò', 'direi', 'dico'], 'dire → dir-'),
    ],
  },
  {
    id: 'pronomi-diretti',
    icon: '🎯',
    title: 'Direkte Objektpronomen (lo, la, li, le)',
    level: 'A2',
    instruction: 'Setze das passende direkte Objektpronomen (oder Partizip) ein.',
    explanation:
      'mi (mich), ti (dich), lo (ihn/es), la (sie/es), La (Sie), ci (uns), vi (euch), li (sie, männlich Mz.), ' +
      'le (sie, weiblich Mz.). Sie stehen vor dem konjugierten Verb (Lo compro) und werden an den Infinitiv ' +
      'angehängt (Voglio comprarlo). lo/la vor h oder Vokal → l\' (L\'ho visto). Im passato prossimo passt sich das ' +
      'Partizip an lo/la/li/le an: La torta? L\'ho fatta. Le foto? Le ho viste.',
    examples: [
      { it: 'Il giornale? Lo compro ogni giorno.', de: 'Die Zeitung? Ich kaufe sie jeden Tag.' },
      { it: 'Le chiavi? Non le trovo.', de: 'Die Schlüssel? Ich finde sie nicht.' },
      { it: 'La pizza? L\'ho mangiata.', de: 'Die Pizza? Ich habe sie gegessen.' },
    ],
    items: [
      q('Compri il giornale? Sì, ', 'lo', ' compro.', ['lo', 'la', 'li', 'le'], 'il giornale (männlich) → lo'),
      q('Conosci Maria? Sì, ', 'la', ' conosco.', ['la', 'lo', 'le', 'gli'], 'Maria → la'),
      q('Dove sono le chiavi? Non ', 'le', ' trovo.', ['le', 'li', 'la', 'lo'], 'le chiavi (weiblich Mz.) → le'),
      q('Prendi gli spaghetti? Sì, ', 'li', ' prendo.', ['li', 'le', 'gli', 'lo'], 'gli spaghetti (männlich Mz.) → li'),
      q('Mi senti? Sì, ', 'ti', ' sento.', ['ti', 'mi', 'lo', 'la'], 'dich → ti'),
      q('Chi ', 'ci', ' chiama? (uns)', ['ci', 'vi', 'li', 'le'], 'uns → ci'),
      q('Signora, ', 'La', ' aspetto qui. (Sie)', ['La', 'Lo', 'Le', 'Ti'], 'höflich Sie → La'),
      q('Il film? ', "L'", 'ho già visto.', ["L'", 'Lo', 'La', 'Gli'], 'lo vor h → l\''),
      q("La torta? L'ho ", 'fatta', ' io. (fare)', ['fatta', 'fatto', 'fatti', 'fatte'], 'l\' = la → Partizip -a'),
      q('Le foto? Le ho ', 'viste', ' ieri. (vedere)', ['viste', 'visto', 'visti', 'vista'], 'le → Partizip -e'),
      q('Le scarpe? Voglio comprar', 'le', '.', ['le', 'li', 'la', 'lo'], 'an den Infinitiv angehängt'),
      q('Puoi aiutar', 'mi', '? (mich)', ['mi', 'ti', 'ci', 'vi'], 'an den Infinitiv angehängt'),
      q('', 'Vi', ' invito alla mia festa. (euch)', ['Vi', 'Ci', 'Li', 'Gli'], 'euch → vi'),
      q('I bambini? ', 'Li', ' porto a scuola alle otto.', ['Li', 'Le', 'Gli', 'Lo'], 'i bambini → li'),
      q('Non ', 'ti', ' capisco. (dich)', ['ti', 'te', 'ci', 'lo'], 'dich → ti'),
      q('Il caffè ', 'lo', ' bevo senza zucchero.', ['lo', 'la', 'gli', 'ne'], 'il caffè → lo'),
    ],
  },
  {
    id: 'pronomi-indiretti',
    icon: '📨',
    title: 'Indirekte Objektpronomen (gli, le …)',
    level: 'A2',
    instruction: 'Setze das passende indirekte Objektpronomen ein.',
    explanation:
      'mi (mir), ti (dir), gli (ihm), le (ihr), Le (Ihnen), ci (uns), vi (euch), gli (ihnen). Typisch bei Verben ' +
      'mit a + Person: dare, dire, scrivere, telefonare, regalare, rispondere, chiedere, piacere, servire. ' +
      'Telefono a Marco → Gli telefono. Beim Infinitiv angehängt: Devo telefonargli.',
    examples: [
      { it: 'Telefono a Marco. → Gli telefono.', de: 'Ich rufe Marco an. → Ich rufe ihn an.' },
      { it: 'Scrivo a Giulia. → Le scrivo.', de: 'Ich schreibe Giulia. → Ich schreibe ihr.' },
      { it: 'Mi dai una mano?', de: 'Hilfst du mir?' },
    ],
    items: [
      q('Telefono a Marco. → ', 'Gli', ' telefono.', ['Gli', 'Le', 'Lo', 'La'], 'ihm → gli'),
      q('Scrivo a Giulia. → ', 'Le', ' scrivo.', ['Le', 'Gli', 'La', 'Lo'], 'ihr → le'),
      q('', 'Mi', ' passi il sale? (mir)', ['Mi', 'Ti', 'Ci', 'Gli'], 'mir → mi'),
      q('', 'Ti', ' regalo un libro. (dir)', ['Ti', 'Mi', 'Te', 'Gli'], 'dir → ti'),
      q('Signor Rossi, ', 'Le', ' presento mia moglie. (Ihnen)', ['Le', 'Gli', 'La', 'Ti'], 'höflich Ihnen → Le'),
      q('', 'Ci', ' hanno detto la verità. (uns)', ['Ci', 'Vi', 'Ne', 'Gli'], 'uns → ci'),
      q('', 'Vi', ' mando le foto domani. (euch)', ['Vi', 'Ci', 'Li', 'Gli'], 'euch → vi'),
      q('I nonni? ', 'Gli', ' porto dei fiori. (ihnen)', ['Gli', 'Le', 'Li', 'Loro'], 'ihnen → gli'),
      q('Che cosa ', 'gli', ' hai detto? (ihm)', ['gli', 'le', 'lo', 'lui'], 'ihm → gli'),
      q('Anna? ', 'Le', ' piace la musica. (ihr)', ['Le', 'Gli', 'La', 'Lei'], 'ihr → le'),
      q('', 'Ti', ' serve aiuto? (dir)', ['Ti', 'Te', 'Mi', 'Si'], 'dir → ti'),
      q('Paolo? Non ', 'gli', ' piace il calcio.', ['gli', 'le', 'lo', 'li'], 'ihm → gli'),
      q('Puoi dar', 'mi', ' una mano? (mir)', ['mi', 'ti', 'me', 'ci'], 'an den Infinitiv angehängt'),
      q('Devo telefonar', 'le', ' subito. (ihr)', ['le', 'gli', 'la', 'lei'], 'an den Infinitiv angehängt'),
      q('', 'Gli', ' ho chiesto un favore. (ihm)', ['Gli', 'Le', 'Lo', 'Lui'], 'ihm → gli'),
      q('Mia madre ', 'mi', ' ha scritto una lettera. (mir)', ['mi', 'ti', 'me', 'si'], 'mir → mi'),
    ],
  },
  {
    id: 'comparativi',
    icon: '📊',
    title: 'Vergleich & Superlativ',
    level: 'A2',
    instruction: 'Setze das passende Wort ein.',
    explanation:
      'più/meno … di vor Nomen und Pronomen (Marco è più alto di Luca), più … che beim Vergleich von Adjektiven, ' +
      'Verben oder Mengen (È più facile parlare che scrivere). Gleichheit: tanto … quanto / così … come. ' +
      'Superlativ: il più alto (della classe), absolut mit -issimo (bellissimo). Unregelmäßig: buono → migliore, ' +
      'cattivo → peggiore, bene → meglio, male → peggio.',
    examples: [
      { it: 'Roma è più grande di Firenze.', de: 'Rom ist größer als Florenz.' },
      { it: 'Questo vino è migliore.', de: 'Dieser Wein ist besser.' },
      { it: 'È la città più bella d\'Italia.', de: 'Es ist die schönste Stadt Italiens.' },
    ],
    items: [
      q('Marco è più alto ', 'di', ' Luca.', ['di', 'che', 'come', 'del'], 'vor Namen → di'),
      q('Roma è più grande ', 'di', ' Firenze.', ['di', 'che', 'come', 'della'], 'vor Namen → di'),
      q('Oggi fa più caldo ', 'di', ' ieri.', ['di', 'che', 'come', 'del'], 'Vergleich zweier Zeitpunkte → di'),
      q('È più facile parlare ', 'che', ' scrivere.', ['che', 'di', 'come', 'del'], 'zwei Verben → che'),
      q('Ho più libri ', 'che', ' riviste.', ['che', 'di', 'delle', 'come'], 'zwei Mengen → che'),
      q('Questo vino è ', 'migliore', ' di quello. (besser)', ['migliore', 'meglio', 'più buono di', 'migliora'], 'buono → migliore (Adjektiv)', ['più buono']),
      q('Oggi stai ', 'meglio', '? (besser)', ['meglio', 'migliore', 'più bene', 'bene'], 'bene → meglio (Adverb)'),
      q('Il film è ', 'peggiore', ' del libro. (schlechter)', ['peggiore', 'peggio', 'più male', 'cattivo'], 'cattivo → peggiore (Adjektiv)', ['più cattivo']),
      q("È la città ", 'più', " bella d'Italia.", ['più', 'meno', 'molto', 'tanto'], 'Superlativ: la più …'),
      q('Questa pizza è ', 'buonissima', '! (sehr gut)', ['buonissima', 'buonissimo', 'più buona', 'molto buonissima'], 'absoluter Superlativ: -issima'),
      q('Lui è ', 'tanto', ' simpatico quanto suo fratello.', ['tanto', 'più', 'così', 'come'], 'tanto … quanto'),
      q('Sono ', 'meno', ' stanco di te. (weniger)', ['meno', 'più', 'tanto', 'poco'], 'weniger → meno'),
      q('È il ristorante più caro ', 'della', ' città.', ['della', 'di', 'che', 'in'], 'Superlativ + di + Artikel'),
      q('Oggi mi sento ', 'peggio', ' di ieri. (schlechter)', ['peggio', 'peggiore', 'più male', 'male'], 'male → peggio (Adverb)'),
      q("Il treno è più veloce ", "dell'", ' autobus.', ["dell'", 'del', 'di', 'che'], "di + l' → dell'"),
      q('Questo esercizio è ', 'facilissimo', '. (sehr leicht)', ['facilissimo', 'più facile', 'molto facilissimo', 'facilemente'], 'absoluter Superlativ: -issimo'),
    ],
  },
  {
    id: 'imperativo',
    icon: '📣',
    title: 'Imperativ',
    level: 'A2',
    instruction: 'Setze den Imperativ ein.',
    explanation:
      'tu: -are → -a (parla!), -ere/-ire → -i (prendi! dormi! finisci!). noi und voi = Präsens (andiamo! parlate!). ' +
      'Lei (höflich) = congiuntivo: parli, prenda, senta, venga. Verneint bei tu: non + Infinitiv (Non parlare!). ' +
      'Kurzformen: va\', fa\', da\', sta\', di\'; essere → sii, avere → abbi. Pronomen hängen an tu/noi/voi an ' +
      '(Dimmi! Alzati!), bei Lei stehen sie davor (Si sieda!).',
    examples: [
      { it: 'Parla piano! · Non parlare!', de: 'Sprich leise! · Sprich nicht!' },
      { it: 'Signora, entri pure!', de: 'Kommen Sie ruhig herein!' },
      { it: 'Alzati! · Si sieda!', de: 'Steh auf! · Setzen Sie sich!' },
    ],
    items: [
      q('', 'Parla', ' piano, per favore! (parlare, tu)', ['Parla', 'Parli', 'Parlate', 'Parlare'], '-are, tu → -a'),
      q('', 'Apri', ' la finestra! (aprire, tu)', ['Apri', 'Apra', 'Apre', 'Aprite'], '-ire, tu → -i'),
      q('Ragazzi, ', 'fate', ' attenzione! (fare, voi)', ['fate', "fa'", 'fanno', 'facete'], 'voi = Präsens'),
      q('Signora, ', 'entri', ' pure! (entrare, Lei)', ['entri', 'entra', 'entrate', 'entre'], 'Lei = congiuntivo: -are → -i'),
      q('Non ', 'piangere', '! (piangere, tu)', ['piangere', 'piangi', 'pianga', 'piangete'], 'verneint, tu → non + Infinitiv'),
      q('', 'Andiamo', ' al cinema stasera! (andare, noi)', ['Andiamo', 'Andate', 'Andiate', "Va'"], 'noi = Präsens'),
      q('', 'Vieni', ' qui, per favore! (venire, tu)', ['Vieni', 'Venga', 'Veni', 'Venite'], 'tu = Präsens-Form'),
      q('Mi ', 'scusi', ', dov\'è la stazione? (scusare, Lei)', ['scusi', 'scusa', 'scusate', 'scusare'], 'Lei = congiuntivo'),
      q('', "Di'", ' la verità! (dire, tu)', ["Di'", 'Dici', 'Dite', 'Dica'], "dire, tu → di'", ['Di', 'Dì']),
      q('', "Sta'", ' tranquillo! (stare, tu)', ["Sta'", 'Stia', 'State', 'Stare'], "stare, tu → sta' / stai", ['Stai', 'Sta']),
      q('Non ', 'tornate', ' tardi! (tornare, voi)', ['tornate', 'tornare', 'tornino', 'tornati'], 'verneint, voi → non + voi-Form'),
      q('', 'Aspetti', ' un attimo! (aspettare, Lei)', ['Aspetti', 'Aspetta', 'Aspettate', 'Aspettare'], 'Lei = congiuntivo'),
      q('', 'Sii', ' paziente! (essere, tu)', ['Sii', 'Sia', 'Sei', 'Siate'], 'essere, tu → sii'),
      q('', 'Chiudi', ' la porta! (chiudere, tu)', ['Chiudi', 'Chiuda', 'Chiude', 'Chiudete'], '-ere, tu → -i'),
      q('', 'Si sieda', ', prego. (sedersi, Lei)', ['Si sieda', 'Siediti', 'Sedetevi', 'Si siede'], 'Lei: Pronomen davor + congiuntivo'),
      q('', 'Alzati', '! È tardi. (alzarsi, tu)', ['Alzati', 'Ti alza', 'Si alzi', 'Alzatevi'], 'tu: Pronomen angehängt'),
    ],
  },
  {
    id: 'stare-gerundio',
    icon: '⏳',
    title: 'stare + Gerundium (gerade tun)',
    level: 'A2',
    instruction: 'Setze das Gerundium oder die Form von stare ein.',
    explanation:
      'stare + Gerundium = gerade dabei sein, etwas zu tun: Sto mangiando. Gerundium: -are → -ando (parlando), ' +
      '-ere/-ire → -endo (leggendo, dormendo). Unregelmäßig: fare → facendo, dire → dicendo, bere → bevendo. ' +
      'In der Vergangenheit mit dem imperfetto von stare: Stavo dormendo, quando hai chiamato.',
    examples: [
      { it: 'Sto preparando la cena.', de: 'Ich bereite gerade das Abendessen zu.' },
      { it: 'Cosa stai facendo?', de: 'Was machst du gerade?' },
    ],
    items: [
      q('Sto ', 'preparando', ' la cena. (preparare)', ['preparando', 'preparendo', 'preparato', 'preparare'], '-are → -ando'),
      q('Cosa stai ', 'facendo', '? (fare)', ['facendo', 'fando', 'fatto', 'farendo'], 'fare → facendo'),
      q('I bambini stanno ', 'dormendo', '. (dormire)', ['dormendo', 'dormando', 'dormito', 'dormindo'], '-ire → -endo'),
      q('Non disturbare, ', 'sto', ' studiando. (io)', ['sto', 'stai', 'sta', 'sono'], 'stare, io → sto'),
      q('Stiamo ', 'guardando', ' un film. (guardare)', ['guardando', 'guardendo', 'guardato', 'guardare'], '-are → -ando'),
      q('Lei sta ', 'parlando', ' al telefono. (parlare)', ['parlando', 'parlendo', 'parlato', 'parla'], '-are → -ando'),
      q('', 'Sta', ' piovendo. (stare)', ['Sta', 'Stanno', 'È', 'Sto'], 'Wetter, 3. Person → sta'),
      q('Che cosa stai ', 'leggendo', '? (leggere)', ['leggendo', 'leggando', 'letto', 'legendo'], '-ere → -endo'),
      q('Voi state ', 'uscendo', '? (uscire)', ['uscendo', 'uscando', 'uscito', 'escendo'], '-ire → -endo'),
      q('Loro ', 'stanno', ' mangiando. (stare)', ['stanno', 'stano', 'sono', 'stiamo'], 'stare, loro → stanno'),
      q('Ti sto ', 'dicendo', ' la verità. (dire)', ['dicendo', 'dirando', 'direndo', 'detto'], 'dire → dicendo'),
      q('Stavo ', 'bevendo', ' un caffè quando hai chiamato. (bere)', ['bevendo', 'berendo', 'beando', 'bevuto'], 'bere → bevendo'),
      q('Sto ', 'aspettando', ' il treno. (aspettare)', ['aspettando', 'aspettendo', 'aspettato', 'aspetto'], '-are → -ando'),
      q('Stai ', 'scrivendo', ' una lettera? (scrivere)', ['scrivendo', 'scrivando', 'scritto', 'scrivindo'], '-ere → -endo'),
      q('Stiamo ', 'cercando', ' una casa nuova. (cercare)', ['cercando', 'cerchendo', 'cercato', 'cercendo'], '-are → -ando'),
      q('Quando sei arrivato, ', 'stavamo', ' cenando. (stare, noi)', ['stavamo', 'stiamo', 'siamo stati', 'stavate'], 'Vergangenheit → imperfetto von stare'),
    ],
  },
  // ── B1 ───────────────────────────────────────────────────────────────────
  {
    id: 'condizionale',
    icon: '🤔',
    title: 'Condizionale presente',
    level: 'B1',
    instruction: 'Setze das Verb im condizionale ein.',
    explanation:
      'Futurstamm + -ei, -esti, -ebbe, -emmo, -este, -ebbero: parlerei, prenderei, dormirei; unregelmäßig wie im Futur: ' +
      'sarei, avrei, andrei, farei, verrei, vorrei, potrei, dovrei, saprei. Gebrauch: höfliche Bitte (Vorrei un caffè), ' +
      'Wunsch (Mi piacerebbe …), Ratschlag (Dovresti dormire di più), Vermutung (Secondo lui sarebbe tardi).',
    examples: [
      { it: 'Vorrei un caffè, per favore.', de: 'Ich hätte gern einen Kaffee, bitte.' },
      { it: 'Al tuo posto, parlerei con lui.', de: 'An deiner Stelle würde ich mit ihm reden.' },
      { it: 'Mi piacerebbe vivere al mare.', de: 'Ich würde gern am Meer leben.' },
    ],
    items: [
      q('', 'Vorrei', ' un caffè, per favore. (volere, io)', ['Vorrei', 'Voglio', 'Vorrò', 'Volerei'], 'volere → vorr- + ei'),
      q('', 'Potresti', ' aiutarmi? (potere, tu)', ['Potresti', 'Puoi', 'Poteresti', 'Potrai'], 'potere → potr- + esti'),
      q('Al tuo posto, ', 'parlerei', ' con lui. (parlare, io)', ['parlerei', 'parlarei', 'parlerò', 'parlassi'], '-are → -er- + ei'),
      q('Mi ', 'piacerebbe', ' vivere al mare. (piacere)', ['piacerebbe', 'piacerei', 'piace', 'piacesse'], 'Infinitiv als Subjekt → 3. Person'),
      q('', 'Dovresti', ' dormire di più. (dovere, tu)', ['Dovresti', 'Devi', 'Doveresti', 'Dovrai'], 'Ratschlag → condizionale'),
      q('Noi ', 'andremmo', ' volentieri in Italia. (andare)', ['andremmo', 'andremo', 'anderemmo', 'andiamo'], 'andare → andr- + emmo (Doppel-m!)'),
      q('', 'Sarebbe', ' bello andare al mare! (essere)', ['Sarebbe', 'Sarà', 'Fosse', 'È'], 'essere → sar- + ebbe'),
      q('Che cosa ', 'faresti', ' al mio posto? (fare, tu)', ['faresti', 'farai', 'fareste', 'facessi'], 'fare → far- + esti'),
      q('Loro ', 'vorrebbero', ' comprare una casa. (volere)', ['vorrebbero', 'vorrebbe', 'vogliono', 'vorranno'], 'volere, loro → vorrebbero'),
      q('Voi ', 'avreste', ' tempo domani? (avere)', ['avreste', 'avrete', 'avresti', 'avevate'], 'avere → avr- + este'),
      q('Non lo ', 'saprei', '. (sapere, io)', ['saprei', 'saperei', 'saprò', 'sapessi'], 'sapere → sapr- + ei'),
      q('Scusi, mi ', 'direbbe', " l'ora? (dire, Lei)", ['direbbe', 'dirà', 'dice', 'dicesse'], 'höfliche Bitte → condizionale'),
      q('Con più soldi ', 'gireremmo', ' il mondo. (girare, noi)', ['gireremmo', 'giraremmo', 'gireremo', 'girassimo'], '-are → -er- + emmo'),
      q('Mi ', 'porterebbe', " un bicchiere d'acqua? (portare, Lei)", ['porterebbe', 'porterà', 'portarebbe', 'portasse'], 'höfliche Bitte → condizionale'),
      q('Tu ', 'verresti', ' con noi? (venire)', ['verresti', 'verrai', 'veniresti', 'venissi'], 'venire → verr- + esti'),
      q('Secondo me, ', 'sarebbe', ' meglio partire presto. (essere)', ['sarebbe', 'sarà', 'fosse', 'è stato'], 'Einschätzung → condizionale'),
    ],
  },
  {
    id: 'congiuntivo',
    icon: '💭',
    title: 'Congiuntivo presente',
    level: 'B1',
    instruction: 'Setze das Verb im congiuntivo presente ein.',
    explanation:
      'Der congiuntivo steht nach Verben und Ausdrücken der Meinung, des Wunsches, des Gefühls oder des Zweifels ' +
      '(penso che, credo che, voglio che, spero che, ho paura che, è importante che, bisogna che) und nach benché, ' +
      'prima che, affinché. Formen: -are → -i (parli, parliamo, parliate, parlino), -ere/-ire → -a (prenda, dorma, ' +
      'finisca). Unregelmäßig: sia, abbia, vada, faccia, venga, possa, voglia, debba, sappia, dia, stia, dica, esca.',
    examples: [
      { it: 'Penso che sia vero.', de: 'Ich glaube, dass es wahr ist.' },
      { it: 'Voglio che tu venga.', de: 'Ich will, dass du kommst.' },
      { it: 'Benché piova, esco.', de: 'Obwohl es regnet, gehe ich raus.' },
    ],
    items: [
      q('Penso che Marco ', 'sia', ' a casa. (essere)', ['sia', 'è', 'fosse', 'sarà'], 'penso che → congiuntivo; essere → sia'),
      q('Credo che loro ', 'abbiano', ' ragione. (avere)', ['abbiano', 'hanno', 'abbino', 'avessero'], 'avere, loro → abbiano'),
      q('Voglio che tu ', 'venga', ' con me. (venire)', ['venga', 'vieni', 'venissi', 'veni'], 'Wunsch → congiuntivo; venire → venga'),
      q('Spero che voi ', 'stiate', ' bene. (stare)', ['stiate', 'state', 'stiano', 'stavate'], 'stare, voi → stiate'),
      q('È importante che tu ', 'dica', ' la verità. (dire)', ['dica', 'dici', 'dichi', 'dicessi'], 'dire → dica'),
      q('Non credo che lei ', 'sappia', ' guidare. (sapere)', ['sappia', 'sa', 'sapia', 'sapesse'], 'sapere → sappia'),
      q('Bisogna che noi ', 'partiamo', ' subito. (partire)', ['partiamo', 'partiate', 'partano', 'partissimo'], 'noi = Präsens-Form -iamo'),
      q('Mi sembra che il film ', 'cominci', ' alle nove. (cominciare)', ['cominci', 'comincia', 'cominca', 'cominciasse'], '-are → -i'),
      q('Ho paura che ', 'piova', '. (piovere)', ['piova', 'piove', 'piovi', 'pioveva'], 'Angst → congiuntivo; -ere → -a'),
      q('Benché ', 'sia', ' stanco, esco. (essere, io)', ['sia', 'sono', 'fossi', 'sarò'], 'benché → congiuntivo'),
      q('Aspetto che tu ', 'finisca', '. (finire)', ['finisca', 'finisci', 'fina', 'finissi'], '-isc-Verb → finisca'),
      q('Pensi che loro ', 'possano', ' venire? (potere)', ['possano', 'possono', 'potano', 'possino'], 'potere, loro → possano'),
      q('Vuole che io ', 'faccia', ' la spesa. (fare)', ['faccia', 'facci', 'fa', 'facessi'], 'fare → faccia'),
      q('Dubito che lui ', 'viva', ' ancora in Italia. (vivere)', ['viva', 'vive', 'vivi', 'vivesse'], 'Zweifel → congiuntivo; -ere → -a'),
      q('Prima che tu ', 'esca', ', chiamami. (uscire)', ['esca', 'esci', 'uscisca', 'uscissi'], 'prima che → congiuntivo; uscire → esca'),
      q('È meglio che voi ', 'prendiate', ' il treno. (prendere)', ['prendiate', 'prendete', 'prendano', 'prendeste'], 'voi → -iate'),
    ],
  },
  {
    id: 'congiuntivo-indicativo',
    icon: '🔀',
    title: 'Congiuntivo oder Indikativ?',
    level: 'B1',
    instruction: 'Wähle Indikativ oder congiuntivo.',
    explanation:
      'Indikativ bei Tatsachen und Gewissheit: so che, è vero che, sono sicuro che, vedo che, perché (weil), quando, ' +
      'se. Congiuntivo bei Meinung, Wunsch, Hoffnung, Gefühl oder Unsicherheit: penso/credo che, spero che, ' +
      'voglio che, non sono sicuro che, è possibile che, mi dispiace che, benché, prima che.',
    examples: [
      { it: 'So che vive a Roma. · Penso che viva a Roma.', de: 'Ich weiß, dass … · Ich glaube, dass er in Rom lebt.' },
      { it: 'Esco perché fa bel tempo. · Esco benché piova.', de: 'Ich gehe raus, weil … · obwohl es regnet.' },
    ],
    items: [
      q('So che Luca ', 'vive', ' in Germania. (vivere)', ['vive', 'viva'], 'so che (Gewissheit) → Indikativ'),
      q('Penso che Luca ', 'viva', ' in Germania. (vivere)', ['viva', 'vive'], 'penso che (Meinung) → congiuntivo'),
      q('È vero che ', 'è', ' sposata. (essere, lei)', ['è', 'sia'], 'è vero che → Indikativ'),
      q('Spero che domani ', 'faccia', ' bel tempo. (fare)', ['faccia', 'fa'], 'spero che → congiuntivo'),
      q('Sono sicuro che ', 'hai', ' ragione. (avere, tu)', ['hai', 'abbia'], 'sicuro → Indikativ'),
      q('Non sono sicuro che tu ', 'abbia', ' ragione. (avere)', ['abbia', 'hai'], 'nicht sicher → congiuntivo'),
      q('Esco perché ', 'fa', ' bel tempo. (fare)', ['fa', 'faccia'], 'perché (weil) → Indikativ'),
      q('Esco benché ', 'piova', '. (piovere)', ['piova', 'piove'], 'benché → congiuntivo'),
      q('È possibile che il treno ', 'sia', ' in ritardo. (essere)', ['sia', 'è'], 'è possibile che → congiuntivo'),
      q('Vedo che ', 'sei', ' stanco. (essere, tu)', ['sei', 'sia'], 'vedo che (Tatsache) → Indikativ'),
      q('Voglio che lui mi ', 'chiami', '. (chiamare)', ['chiami', 'chiama'], 'Wunsch → congiuntivo'),
      q('Credo che ', 'siano', ' le nove. (essere)', ['siano', 'sono'], 'credo che → congiuntivo'),
      q('Quando ', 'arrivo', ' a casa, ti telefono. (arrivare, io)', ['arrivo', 'arrivi'], 'quando → Indikativ'),
      q('È chiaro che non ', 'sa', ' niente. (sapere, lui)', ['sa', 'sappia'], 'è chiaro che → Indikativ'),
      q('Mi dispiace che tu non ', 'possa', ' venire. (potere)', ['possa', 'puoi'], 'Gefühl → congiuntivo'),
      q('Sai che domani ', 'parto', '? (partire, io)', ['parto', 'parta'], 'sai che → Indikativ'),
    ],
  },
  {
    id: 'pronomi-combinati',
    icon: '🔗',
    title: 'Kombinierte Pronomen (me lo, glielo …)',
    level: 'B1',
    instruction: 'Setze die kombinierten Pronomen ein.',
    explanation:
      'Indirektes + direktes Pronomen: mi → me, ti → te, ci → ce, vi → ve, dann lo/la/li/le/ne: me lo, te la, ' +
      'ce li, ve ne. gli, le und Le werden zu glie- und verschmelzen: glielo, gliela, glieli, gliele, gliene. ' +
      'Beim Infinitiv angehängt: Voglio dartelo, Puoi portarmele?',
    examples: [
      { it: 'Mi dai il libro? – Sì, te lo do.', de: 'Gibst du mir das Buch? – Ja, ich gebe es dir.' },
      { it: 'Dai il regalo a Marco? – Sì, glielo do.', de: 'Gibst du Marco das Geschenk? – Ja, ich gebe es ihm.' },
    ],
    items: [
      q('Mi dai il libro? Sì, ', 'te lo', ' do.', ['te lo', 'ti lo', 'me lo', 'glielo'], 'ti + lo → te lo'),
      q('Mi presti la macchina? Sì, ', 'te la', ' presto.', ['te la', 'ti la', 'me la', 'gliela'], 'ti + la → te la'),
      q('Dai il regalo a Marco? Sì, ', 'glielo', ' do.', ['glielo', 'gli lo', 'le lo', 'gliela'], 'gli + lo → glielo'),
      q('Scrivi la lettera a Giulia? Sì, ', 'gliela', ' scrivo.', ['gliela', 'le la', 'gliele', 'glielo'], 'le + la → gliela'),
      q('Ci porti i dolci? Sì, ', 've li', ' porto.', ['ve li', 'vi li', 'ce li', 'glieli'], 'vi + li → ve li'),
      q('Mi mandi le foto? Sì, ', 'te le', ' mando.', ['te le', 'ti le', 'me le', 'gliele'], 'ti + le → te le'),
      q('Chi ti ha dato questi fiori? ', 'Me li', ' ha dati Paolo.', ['Me li', 'Mi li', 'Te li', 'Glieli'], 'mi + li → me li'),
      q('Ci spieghi la regola? Sì, ', 've la', ' spiego.', ['ve la', 'vi la', 'ce la', 'gliela'], 'vi + la → ve la'),
      q('Mi compri il gelato? Sì, ', 'te lo', ' compro.', ['te lo', 'ti lo', 'me lo', 'glielo'], 'ti + lo → te lo'),
      q('Signora, Le porto il caffè? – Sì, ', 'me lo', ' porti, grazie.', ['me lo', 'mi lo', 'te lo', 'glielo'], 'mi + lo → me lo'),
      q('Mi dai delle mele? Sì, ', 'te ne', ' do tre.', ['te ne', 'ti ne', 'ne te', 'gliene'], 'ti + ne → te ne'),
      q('Chiedi il conto al cameriere? Sì, ', 'glielo', ' chiedo.', ['glielo', 'gli lo', 'lo gli', 'gliela'], 'gli + lo → glielo'),
      q('Il regalo per Anna? Voglio dar', 'glielo', ' domani.', ['glielo', 'gliela', 'le lo', 'lo le'], 'le + lo → glielo, angehängt'),
      q('Le chiavi? Puoi portar', 'mele', '?', ['mele', 'mile', 'tele', 'gliele'], 'mi + le → me le, angehängt: portarmele'),
      q('Ci presentate la vostra amica? Sì, ', 've la', ' presentiamo.', ['ve la', 'vi la', 'ce la', 'gliela'], 'vi + la → ve la'),
      q('Parli a tua madre dei problemi? Sì, ', 'gliene', ' parlo.', ['gliene', 'le ne', 'gli ne', 'glielo'], 'le + ne → gliene'),
    ],
  },
  {
    id: 'ci-ne',
    icon: '📌',
    title: 'Die Pronomen ci und ne',
    level: 'B1',
    instruction: 'Setze ci oder ne (oder die passende Form) ein.',
    explanation:
      'ci ersetzt einen Ort (Vado a Roma → Ci vado) oder a/su + Sache (Pensi al lavoro? – Ci penso sempre). ' +
      'ne ersetzt eine Menge oder einen Teil (Quante mele? – Ne compro tre) und di + Sache/Person (Parliamo del ' +
      'problema → Ne parliamo). Im passato prossimo passt sich das Partizip nach ne an die Menge an: Ne ho mangiate due ' +
      '(mele). Feste Wendungen: Non ne posso più, Ci vuole pazienza, Che ne pensi?',
    examples: [
      { it: 'Vai a Milano? – Sì, ci vado domani.', de: 'Fährst du nach Mailand? – Ja, ich fahre morgen hin.' },
      { it: 'Quanti figli hai? – Ne ho due.', de: 'Wie viele Kinder hast du? – Ich habe zwei.' },
      { it: 'Che ne pensi?', de: 'Was hältst du davon?' },
    ],
    items: [
      q('Vai a Milano domani? Sì, ', 'ci', ' vado.', ['ci', 'ne', 'lo', 'vi'], 'Ort → ci'),
      q('Quanti figli hai? ', 'Ne', ' ho due.', ['Ne', 'Ci', 'Li', 'Gli'], 'Menge → ne'),
      q('Pensi spesso al tuo lavoro? Sì, ', 'ci', ' penso sempre.', ['ci', 'ne', 'lo', 'gli'], 'pensare a → ci'),
      q('Vuoi del caffè? No, grazie, non ', 'ne', ' voglio.', ['ne', 'ci', 'lo', 'la'], 'Teilmenge → ne'),
      q('Sei mai stato a Venezia? Sì, ', 'ci', " sono stato l'anno scorso.", ['ci', 'ne', 'vi', 'lo'], 'Ort → ci'),
      q('Parliamo del problema? Sì, ', 'ne', ' parliamo domani.', ['ne', 'ci', 'lo', 'gli'], 'parlare di → ne'),
      q('Quante pizze prendete? ', 'Ne', ' prendiamo quattro.', ['Ne', 'Le', 'Ci', 'Li'], 'Menge → ne'),
      q('Credi ai fantasmi? No, non ', 'ci', ' credo.', ['ci', 'ne', 'li', 'gli'], 'credere a → ci'),
      q('Hai bisogno di aiuto? Sì, ', 'ne', ' ho bisogno.', ['ne', 'ci', 'lo', 'gli'], 'avere bisogno di → ne'),
      q('Vieni al cinema? No, non ', 'ci', ' vengo.', ['ci', 'ne', 'lo', 'vi'], 'Ort → ci'),
      q('Quanto zucchero metti? ', 'Ne', ' metto un cucchiaino.', ['Ne', 'Lo', 'Ci', 'Gli'], 'Menge → ne'),
      q('Da quanto tempo abiti qui? ', 'Ci', ' abito da tre anni.', ['Ci', 'Ne', 'Lo', 'Vi'], 'Ort (qui) → ci'),
      q('Che ', 'ne', ' pensi di questo film?', ['ne', 'ci', 'lo', 'gli'], 'pensare di → ne (Meinung)'),
      q('Quante mele hai mangiato? Ne ho ', 'mangiate', ' due. (mangiare)', ['mangiate', 'mangiato', 'mangiati', 'mangiata'], 'ne = mele → Partizip -e'),
      q('Basta! Non ', 'ne', ' posso più!', ['ne', 'ci', 'lo', 'mi'], 'feste Wendung: non ne posso più'),
      q('', 'Ci', ' vuole pazienza. (man braucht)', ['Ci', 'Ne', 'Si', 'Lo'], 'feste Wendung: ci vuole'),
    ],
  },
  {
    id: 'relativi',
    icon: '🔁',
    title: 'Relativpronomen (che, cui, chi)',
    level: 'B1',
    instruction: 'Setze das passende Relativpronomen ein.',
    explanation:
      'che = der/die/das (Subjekt oder Objekt, ohne Präposition): il libro che leggo. cui nach einer Präposition: ' +
      'la città in cui vivo, l\'amico a cui scrivo, il motivo per cui. il/la cui = dessen/deren: l\'uomo la cui figlia …. ' +
      'chi = wer / derjenige, der: Chi cerca trova. quello che / ciò che = das, was.',
    examples: [
      { it: 'Il libro che leggo è bello.', de: 'Das Buch, das ich lese, ist schön.' },
      { it: 'La città in cui vivo è piccola.', de: 'Die Stadt, in der ich lebe, ist klein.' },
      { it: 'Chi dorme non piglia pesci.', de: 'Wer schläft, fängt keine Fische.' },
    ],
    items: [
      q('Il ragazzo ', 'che', ' parla è mio fratello.', ['che', 'cui', 'chi', 'quale'], 'Subjekt ohne Präposition → che'),
      q('Il libro ', 'che', ' leggo è interessante.', ['che', 'cui', 'chi', 'quale'], 'Objekt ohne Präposition → che'),
      q('La città in ', 'cui', ' vivo è piccola.', ['cui', 'che', 'quale', 'chi'], 'nach Präposition → cui'),
      q("L'amica a ", 'cui', ' scrivo abita a Roma.', ['cui', 'che', 'chi', 'quale'], 'nach Präposition → cui'),
      q('Questo è il motivo per ', 'cui', ' sono qui.', ['cui', 'che', 'quale', 'chi'], 'per cui = weshalb'),
      q('', 'Chi', ' cerca trova.', ['Chi', 'Che', 'Cui', 'Quale'], 'wer (allgemein) → chi'),
      q('Non capisco quello ', 'che', ' dici.', ['che', 'cui', 'chi', 'quale'], 'quello che = das, was'),
      q('La ragazza con ', 'cui', ' esco si chiama Anna.', ['cui', 'che', 'chi', 'quale'], 'nach Präposition → cui'),
      q('Il film ', 'che', ' abbiamo visto era bello.', ['che', 'cui', 'chi', 'quale'], 'Objekt → che'),
      q('', 'Chi', ' arriva tardi non entra.', ['Chi', 'Che', 'Cui', 'Quale'], 'wer → chi'),
      q('La casa ', 'che', ' ho comprato è vecchia.', ['che', 'cui', 'chi', 'quale'], 'Objekt → che'),
      q('Il paese da ', 'cui', ' vengo è in montagna.', ['cui', 'che', 'chi', 'quale'], 'nach Präposition → cui'),
      q("L'uomo la ", 'cui', ' figlia studia con me è medico.', ['cui', 'che', 'quale', 'chi'], 'la cui = dessen'),
      q('Ecco il collega di ', 'cui', ' ti ho parlato.', ['cui', 'che', 'chi', 'quale'], 'nach Präposition → cui'),
      q('Fai ', 'quello che', ' vuoi. (was)', ['quello che', 'che', 'cui', 'chi'], 'das, was → quello che', ['ciò che', 'quel che']),
      q('È una persona su ', 'cui', ' puoi contare.', ['cui', 'che', 'chi', 'quale'], 'nach Präposition → cui'),
    ],
  },
  {
    id: 'trapassato',
    icon: '⏮️',
    title: 'Trapassato prossimo (Plusquamperfekt)',
    level: 'B1',
    instruction: 'Setze das Hilfsverb oder das Partizip ein.',
    explanation:
      'Vorvergangenheit: imperfetto von avere oder essere + Partizip (avevo mangiato, ero andato/a). Sie beschreibt ' +
      'eine Handlung, die vor einer anderen vergangenen Handlung abgeschlossen war: Quando sono arrivato, il film era ' +
      'già cominciato. Die Wahl des Hilfsverbs und die Angleichung sind wie im passato prossimo.',
    examples: [
      { it: 'Quando sono arrivato, il treno era già partito.', de: 'Als ich ankam, war der Zug schon abgefahren.' },
      { it: 'Non avevo fame perché avevo già mangiato.', de: 'Ich hatte keinen Hunger, weil ich schon gegessen hatte.' },
    ],
    items: [
      q('Quando sono arrivato, il treno ', 'era', ' già partito.', ['era', 'è', 'aveva', 'ha'], 'partire → essere, imperfetto'),
      q('Non avevo fame perché ', 'avevo', ' già mangiato.', ['avevo', 'ho', 'ero', 'avrei'], 'mangiare → avere, imperfetto'),
      q('Lei ', 'era', ' già uscita quando ho chiamato.', ['era', 'aveva', 'è', 'ha'], 'uscire → essere'),
      q('Noi ', 'avevamo', ' già visto quel film.', ['avevamo', 'eravamo', 'abbiamo', 'avremmo'], 'vedere → avere'),
      q('Erano stanchi perché ', 'avevano', ' lavorato tutto il giorno.', ['avevano', 'erano', 'hanno', 'avessero'], 'lavorare → avere'),
      q('Mi ha detto che ', 'aveva', ' perso le chiavi. (lui)', ['aveva', 'era', 'ha', 'avrebbe'], 'perdere → avere'),
      q('Quando siamo arrivati, la festa ', 'era', ' già finita.', ['era', 'aveva', 'è', 'ha'], 'finire (Ende) → essere'),
      q('Tu ', 'avevi', ' già letto il libro?', ['avevi', 'eri', 'hai', 'avresti'], 'leggere → avere'),
      q('Voi ', 'eravate', ' già partiti?', ['eravate', 'avevate', 'siete', 'sareste'], 'partire → essere'),
      q("Ero felice perché avevo ", 'superato', " l'esame. (superare)", ['superato', 'superata', 'superando', 'superavo'], 'avere → Partizip unverändert'),
      q('Non sapevo che vi eravate ', 'sposati', '. (sposarsi)', ['sposati', 'sposato', 'sposata', 'sposate'], 'essere: Mehrzahl → -i'),
      q('Avevo ', 'preparato', ' la cena, ma nessuno è venuto. (preparare)', ['preparato', 'preparata', 'preparavo', 'preparando'], 'avere → Partizip auf -o'),
      q('Sapevo che tu ', 'eri', ' già tornata.', ['eri', 'avevi', 'sei', 'fossi'], 'tornare → essere'),
      q("Quando l'ho conosciuto, ", 'aveva', ' già vissuto a Parigi.', ['aveva', 'era', 'ha', 'avrebbe'], 'vivere → avere'),
      q('La lezione ', 'era', ' già cominciata.', ['era', 'aveva', 'è', 'ha'], 'cominciare (anfangen) → essere'),
      q('Mi hanno raccontato cosa ', 'avevano', ' fatto in vacanza.', ['avevano', 'erano', 'hanno', 'avessero'], 'fare → avere'),
    ],
  },
  {
    id: 'periodo-ipotetico',
    icon: '🔀',
    title: 'Bedingungssätze mit se',
    level: 'B1',
    instruction: 'Setze die passende Verbform ein.',
    explanation:
      'Realer Fall: se + Präsens → Präsens/Futur (Se piove, resto a casa). Möglicher/unwirklicher Fall: ' +
      'se + congiuntivo imperfetto → condizionale (Se avessi tempo, verrei). Congiuntivo imperfetto: -are → -assi, ' +
      '-assi, -asse, -assimo, -aste, -assero; -ere → -essi …; -ire → -issi …; essere → fossi, fossi, fosse, fossimo, ' +
      'foste, fossero; fare → facessi; dare → dessi; stare → stessi. Nie condizionale direkt nach se!',
    examples: [
      { it: 'Se piove, resto a casa.', de: 'Wenn es regnet, bleibe ich zu Hause.' },
      { it: 'Se avessi tempo, verrei con te.', de: 'Wenn ich Zeit hätte, würde ich mitkommen.' },
      { it: 'Se fossi ricco, comprerei una casa al mare.', de: 'Wenn ich reich wäre, würde ich ein Haus am Meer kaufen.' },
    ],
    items: [
      q('Se piove, ', 'resto', ' a casa. (restare, io)', ['resto', 'resterei', 'restassi', 'restavo'], 'realer Fall → Präsens', ['resterò']),
      q('Se ', 'avessi', ' tempo, verrei con te. (avere, io)', ['avessi', 'avrei', 'ho', 'abbia'], 'se + congiuntivo imperfetto'),
      q('Se fossi ricco, ', 'comprerei', ' una casa al mare. (comprare, io)', ['comprerei', 'compro', 'comprassi', 'comprerò'], 'Hauptsatz → condizionale'),
      q('Se ', 'vivessi', ' in Italia, parlerei italiano ogni giorno. (vivere, io)', ['vivessi', 'vivrei', 'vivo', 'viva'], 'se + congiuntivo imperfetto'),
      q('Se ', 'fa', ' bel tempo, andiamo al mare. (fare)', ['fa', 'facesse', 'farebbe', 'faccia'], 'realer Fall → Präsens'),
      q('Se tu ', 'fossi', ' più attento, non sbaglieresti. (essere)', ['fossi', 'saresti', 'sia', 'eri'], 'essere → fossi'),
      q('Cosa faresti se ', 'vincessi', ' la lotteria? (vincere, tu)', ['vincessi', 'vinceresti', 'vinci', 'vinca'], 'se + congiuntivo imperfetto'),
      q('Se mi chiami, ti ', 'aiuto', '. (aiutare, io)', ['aiuto', 'aiuterei', 'aiutassi', 'aiuti'], 'realer Fall → Präsens/Futur', ['aiuterò']),
      q('Se ', 'sapessi', ' la risposta, te la direi. (sapere, io)', ['sapessi', 'saprei', 'so', 'sappia'], 'se + congiuntivo imperfetto'),
      q('Se ', 'partiste', ' prima, prendereste il treno. (partire, voi)', ['partiste', 'partireste', 'partite', 'partiate'], 'congiuntivo imperfetto, voi → -iste'),
      q('Se avessimo soldi, ', 'andremmo', ' in vacanza. (andare, noi)', ['andremmo', 'andassimo', 'andiamo', 'andremo'], 'Hauptsatz → condizionale'),
      q('Se ', 'sei', ' stanco, vai a letto. (essere, tu)', ['sei', 'fossi', 'saresti', 'sia'], 'realer Fall → Präsens'),
      q('Se loro ', 'fossero', ' qui, sarebbero felici. (essere)', ['fossero', 'sarebbero', 'sono', 'siano'], 'essere, loro → fossero'),
      q('Se potessi, ', 'dormirei', ' tutto il giorno. (dormire, io)', ['dormirei', 'dormissi', 'dormo', 'dormirò'], 'Hauptsatz → condizionale'),
      q('Se ', 'studiassi', ' di più, avresti meno problemi. (studiare, tu)', ['studiassi', 'studieresti', 'studi', 'studiavi'], '-are → -assi'),
      q('Se ', 'avessi', ' la macchina, ti accompagnerei. (avere, io)', ['avessi', 'avrei', 'ho', 'abbia'], 'se + congiuntivo imperfetto'),
    ],
  },
  {
    id: 'si-passivo',
    icon: '🏛️',
    title: 'si impersonale & Passiv',
    level: 'B1',
    instruction: 'Setze die passende Form ein.',
    explanation:
      'si + 3. Person = „man“: In Italia si mangia bene. Steht ein Nomen in der Mehrzahl dabei, steht auch das Verb ' +
      'in der Mehrzahl: Si vendono case. Passiv: essere + Partizip, angeglichen an das Subjekt: La casa è stata ' +
      'costruita nel 1900. In einfachen Zeiten geht auch venire: Il libro viene letto da molti. Der Handelnde steht ' +
      'mit da.',
    examples: [
      { it: 'Come si dice «Hund» in italiano?', de: 'Wie sagt man „Hund“ auf Italienisch?' },
      { it: 'Qui si vendono biglietti.', de: 'Hier werden Fahrkarten verkauft.' },
      { it: 'La casa è stata costruita nel 1900.', de: 'Das Haus wurde 1900 gebaut.' },
    ],
    items: [
      q('In Italia ', 'si', ' mangia bene.', ['si', 'ci', 'se', 'lo'], 'man → si'),
      q('Come ', 'si', ' dice «Hund» in italiano?', ['si', 'ci', 'se', 'ne'], 'man → si'),
      q('Qui si ', 'vendono', ' case. (vendere)', ['vendono', 'vende', 'venduto', 'vendiamo'], 'Mehrzahl-Nomen → Verb in der Mehrzahl'),
      q('Qui non si ', 'può', ' fumare. (potere)', ['può', 'possono', 'potere', 'posso'], 'si + Infinitiv → Einzahl'),
      q('In questo ristorante si ', 'mangia', ' molto bene. (mangiare)', ['mangia', 'mangiano', 'mangiamo', 'mangiato'], 'si + 3. Person Einzahl'),
      q('In Svizzera si ', 'parlano', ' quattro lingue. (parlare)', ['parlano', 'parla', 'parlate', 'parlato'], 'quattro lingue: Mehrzahl'),
      q('La casa è stata ', 'costruita', ' nel 1900. (costruire)', ['costruita', 'costruito', 'costruite', 'costruiti'], 'Passiv: Angleichung an la casa'),
      q('Il libro ', 'è stato', ' scritto da Umberto Eco.', ['è stato', 'ha stato', 'è', 'ha'], 'Passiv (Vergangenheit): è stato + Partizip'),
      q('Le lettere sono state ', 'spedite', ' ieri. (spedire)', ['spedite', 'spediti', 'spedito', 'spedita'], 'Angleichung an le lettere'),
      q('La finestra ', 'viene', ' aperta ogni mattina. (venire)', ['viene', 'vengono', 'è venuta', 'vene'], 'Passiv mit venire (Präsens)'),
      q("L'America ", 'è stata', ' scoperta nel 1492.', ['è stata', 'è stato', 'ha stata', 'era'], 'weiblich → è stata'),
      q('I biglietti ', 'vengono', ' venduti online.', ['vengono', 'viene', 'venuti', 'vanno'], 'Mehrzahl → vengono', ['sono']),
      q('Il ladro è stato ', 'arrestato', ' dalla polizia. (arrestare)', ['arrestato', 'arrestata', 'arrestati', 'arrestando'], 'Angleichung an il ladro'),
      q('Si ', 'dice', ' che gli italiani parlino con le mani. (dire)', ['dice', 'dicono', 'dica', 'detto'], 'si dice = man sagt'),
      q('Da qui si ', 'vede', ' il mare. (vedere)', ['vede', 'vedono', 'vedi', 'visto'], 'il mare: Einzahl'),
      q('Quando si è stanchi, si ', 'dorme', ' male. (dormire)', ['dorme', 'dormono', 'dormi', 'dormito'], 'si + 3. Person Einzahl'),
    ],
  },
];

export function findGrammarTopic(id: string): GrammarTopic | undefined {
  return GRAMMAR_TOPICS.find(t => t.id === id);
}
