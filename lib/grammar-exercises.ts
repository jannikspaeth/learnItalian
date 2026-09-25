// ─── Grammar exercises ─────────────────────────────────────────────────────────
// Hand-written cloze sets, one per grammar topic, practised on /grammar. Each item
// has exactly one blank; `options` feed the multiple-choice mode and must contain
// the answer. Hints and explanations are German (the learner's L1). `level: 'B1'`
// topics stay locked for beginner (A1) profiles. `lessonId` links to the matching
// Grundlagen lesson in lib/grammar-lessons.ts.

import type { Level } from './profiles';

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
  level: Level;
  lessonId?: string;
  instruction: string;
  explanation: string;
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
  {
    id: 'passato-prossimo',
    icon: '⏪',
    title: 'Passato prossimo (essere oder avere)',
    level: 'B1',
    instruction: 'Setze das Hilfsverb oder das Partizip ein.',
    explanation:
      'Passato prossimo = Hilfsverb (avere oder essere) + Partizip. Die meisten Verben nehmen avere: ho mangiato. ' +
      'Verben der Bewegung und Veränderung (andare, venire, arrivare, partire, uscire, restare, nascere …) und alle ' +
      'reflexiven Verben nehmen essere – dann richtet sich das Partizip nach dem Subjekt: sono andato/andata, ' +
      'siamo andati/andate. Unregelmäßige Partizipien: fatto, scritto, preso, letto, visto, detto, messo.',
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
];

export function findGrammarTopic(id: string): GrammarTopic | undefined {
  return GRAMMAR_TOPICS.find(t => t.id === id);
}
