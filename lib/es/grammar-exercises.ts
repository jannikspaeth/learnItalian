import type { GrammarItem, GrammarTopic } from '../grammar-exercises';

// ─── Spanish grammar exercises ──────────────────────────────────────────────────
// Hand-written cloze sets covering the grammar of CEFR levels A1–B1, in the same
// format as the Italian ones (lib/grammar-exercises.ts): exactly one blank per
// item, `options` for multiple choice (must contain the answer), German hints,
// rules and examples. `lessonId` links to lib/es/grammar-lessons.ts.

const q = (
  before: string,
  answer: string,
  after: string,
  options: string[],
  hint: string,
  alternatives?: string[],
): GrammarItem => ({ before, answer, after, options, hint, alternatives });

const DEF = ['el', 'la', 'los', 'las'];
const INDEF = ['un', 'una', 'unos', 'unas'];
const SER_ESTAR = ['soy', 'estoy', 'es', 'está'];
const HAY = ['hay', 'está', 'están', 'es'];
const POR_PARA = ['por', 'para'];

export const ES_GRAMMAR_TOPICS: GrammarTopic[] = [
  // ══════════════════════════════ A1 ══════════════════════════════
  {
    id: 'articulos-definidos',
    icon: '🔤',
    title: 'Bestimmte Artikel (el, la, los, las)',
    level: 'A1',
    lessonId: 'artikel',
    instruction: 'Setze den passenden bestimmten Artikel ein.',
    explanation:
      'Männlich: el (Mehrzahl los), weiblich: la (Mehrzahl las). Wörter auf -o sind meist männlich, auf -a meist ' +
      'weiblich. Weiblich sind auch -ción, -dad, -tad, -tud. Ausnahmen: el día, el problema, el mapa, la mano, la foto. ' +
      'Vor betontem a-/ha- steht im Singular el, obwohl das Wort weiblich ist: el agua, el hambre.',
    examples: [
      { target: 'el libro · la casa', de: 'das Buch, das Haus' },
      { target: 'los amigos · las mesas', de: 'die Freunde, die Tische' },
      { target: 'el día · la mano · el agua', de: 'Ausnahmen: der Tag, die Hand, das Wasser' },
    ],
    items: [
      q('', 'el', ' libro', DEF, 'männlich, Singular → el'),
      q('', 'la', ' casa', DEF, 'weiblich, Singular → la'),
      q('', 'los', ' amigos', DEF, 'männlich, Mehrzahl → los'),
      q('', 'las', ' mesas', DEF, 'weiblich, Mehrzahl → las'),
      q('', 'el', ' día', DEF, 'Ausnahme: endet auf -a, ist aber männlich'),
      q('', 'la', ' mano', DEF, 'Ausnahme: endet auf -o, ist aber weiblich'),
      q('', 'el', ' problema', DEF, 'Wörter auf -ma (griechisch) sind männlich'),
      q('', 'la', ' ciudad', DEF, 'Wörter auf -dad sind weiblich'),
      q('', 'la', ' canción', DEF, 'Wörter auf -ción sind weiblich'),
      q('', 'el', ' agua', DEF, 'weiblich, aber betontes a- am Anfang → el im Singular'),
      q('', 'los', ' coches', DEF, 'el coche → Mehrzahl los'),
      q('', 'las', ' flores', DEF, 'la flor → Mehrzahl las'),
    ],
  },
  {
    id: 'articulos-indefinidos',
    icon: '🅰️',
    title: 'Unbestimmte Artikel (un, una, unos, unas)',
    level: 'A1',
    lessonId: 'artikel',
    instruction: 'Setze den passenden unbestimmten Artikel ein.',
    explanation:
      'Männlich: un, weiblich: una. In der Mehrzahl unos / unas („einige“). Das Geschlecht richtet sich nach dem ' +
      'Nomen – auch bei den Ausnahmen: un problema, un mapa, una moto (la moto).',
    examples: [
      { target: 'un perro · una farmacia', de: 'ein Hund, eine Apotheke' },
      { target: 'unos amigos · unas manzanas', de: 'einige Freunde, einige Äpfel' },
    ],
    items: [
      q('Tengo ', 'un', ' perro.', INDEF, 'el perro → un'),
      q('Busco ', 'una', ' farmacia.', INDEF, 'la farmacia → una'),
      q('Hay ', 'un', ' problema.', INDEF, 'el problema (männlich!) → un'),
      q('Compro ', 'unas', ' manzanas.', INDEF, 'las manzanas → unas'),
      q('Tengo ', 'unos', ' amigos en Madrid.', INDEF, 'los amigos → unos'),
      q('Es ', 'una', ' idea genial.', INDEF, 'la idea → una'),
      q('Quiero ', 'un', ' café con leche.', INDEF, 'el café → un'),
      q('Necesito ', 'un', ' mapa de la ciudad.', INDEF, 'el mapa (männlich!) → un'),
      q('Vivo en ', 'una', ' ciudad pequeña.', INDEF, 'la ciudad → una'),
      q('Tiene ', 'una', ' moto roja.', INDEF, 'la moto (Kurzform von motocicleta) → una'),
      q('Leo ', 'unos', ' libros interesantes.', INDEF, 'los libros → unos'),
      q('Hay ', 'unas', ' flores en la mesa.', INDEF, 'las flores → unas'),
    ],
  },
  {
    id: 'plural',
    icon: '👥',
    title: 'Mehrzahl der Nomen',
    level: 'A1',
    lessonId: 'artikel',
    instruction: 'Bilde die Mehrzahl.',
    explanation:
      'Auf Vokal: + -s (libro → libros). Auf Konsonant: + -es (ciudad → ciudades). -z wird zu -ces (lápiz → lápices). ' +
      'Der Akzent kann wegfallen oder dazukommen: canción → canciones, joven → jóvenes. ' +
      'Unbetontes -s bleibt gleich: el lunes → los lunes.',
    examples: [
      { target: 'el libro → los libros', de: 'Vokal + -s' },
      { target: 'la ciudad → las ciudades', de: 'Konsonant + -es' },
      { target: 'el lápiz → los lápices', de: '-z → -ces' },
    ],
    items: [
      q('un libro → dos ', 'libros', '', ['libros', 'libres', 'libroes', 'libro'], 'Vokal am Ende → + -s'),
      q('una ciudad → dos ', 'ciudades', '', ['ciudades', 'ciudads', 'ciudadas', 'ciudad'], 'Konsonant am Ende → + -es'),
      q('un lápiz → dos ', 'lápices', '', ['lápices', 'lápizes', 'lápizs', 'lápiz'], '-z → -ces'),
      q('una canción → dos ', 'canciones', '', ['canciones', 'cancións', 'cancionas', 'canción'], '+ -es, der Akzent fällt weg'),
      q('un hotel → dos ', 'hoteles', '', ['hoteles', 'hotels', 'hotelos', 'hotel'], 'Konsonant am Ende → + -es'),
      q('un sofá → dos ', 'sofás', '', ['sofás', 'sofáes', 'sofaes', 'sofá'], 'betonter Vokal -á → + -s'),
      q('el lunes → los ', 'lunes', '', ['lunes', 'luneses', 'lunesos', 'lune'], 'unbetontes -es am Ende → bleibt gleich'),
      q('una luz → dos ', 'luces', '', ['luces', 'luzes', 'luzs', 'luz'], '-z → -ces'),
      q('un árbol → dos ', 'árboles', '', ['árboles', 'árbols', 'arbolas', 'árbol'], 'Konsonant am Ende → + -es'),
      q('un joven → dos ', 'jóvenes', '', ['jóvenes', 'jovens', 'jóvens', 'joven'], '+ -es, jetzt mit Akzent: jó-ve-nes'),
      q('una mujer → dos ', 'mujeres', '', ['mujeres', 'mujers', 'mujeras', 'mujer'], 'Konsonant am Ende → + -es'),
      q('un país → dos ', 'países', '', ['países', 'paíss', 'paisos', 'país'], 'betontes -ís → + -es'),
    ],
  },
  {
    id: 'ser-estar',
    icon: '⚖️',
    title: 'ser oder estar?',
    level: 'A1',
    lessonId: 'ser-estar',
    instruction: 'Setze die richtige Form von ser oder estar ein.',
    explanation:
      'ser: Wer/was jemand ist – Identität, Herkunft, Beruf, Charakter, dauerhafte Eigenschaften, Uhrzeit, ' +
      'wann/wo ein Ereignis stattfindet. estar: Wo sich etwas befindet und wie es jemandem/etwas gerade geht ' +
      '(Zustand, Stimmung, Ergebnis). Merksatz: „Wie und wo, das ist estar.“',
    examples: [
      { target: 'Soy alemán. Es médica.', de: 'Ich bin Deutscher. Sie ist Ärztin. (ser)' },
      { target: 'Estoy cansado. Madrid está en España.', de: 'Ich bin müde. Madrid liegt in Spanien. (estar)' },
    ],
    items: [
      q('Yo ', 'soy', ' alemán.', SER_ESTAR, 'Herkunft → ser'),
      q('Madrid ', 'está', ' en España.', SER_ESTAR, 'Lage/Ort → estar'),
      q('Mi hermana ', 'es', ' médica.', SER_ESTAR, 'Beruf → ser'),
      q('Hoy ', 'estoy', ' cansado.', SER_ESTAR, 'momentaner Zustand → estar'),
      q('La sopa ', 'está', ' fría.', SER_ESTAR, 'Zustand im Moment → estar'),
      q('Nosotros ', 'somos', ' amigos.', ['somos', 'estamos', 'son', 'están'], 'Beziehung/Identität → ser'),
      q('¿Dónde ', 'están', ' los baños?', ['están', 'son', 'está', 'es'], 'Wo? → estar, Mehrzahl'),
      q('La fiesta ', 'es', ' el sábado.', SER_ESTAR, 'wann ein Ereignis stattfindet → ser'),
      q('¿Cómo ', 'estás', '?', ['estás', 'eres', 'está', 'es'], 'Befinden → estar'),
      q('Mi casa ', 'es', ' grande.', SER_ESTAR, 'dauerhafte Eigenschaft → ser'),
      q('', 'Son', ' las tres de la tarde.', ['Son', 'Están', 'Es', 'Está'], 'Uhrzeit → ser (Mehrzahl ab zwei Uhr)'),
      q('La puerta ', 'está', ' abierta.', SER_ESTAR, 'Zustand als Ergebnis → estar'),
    ],
  },
  {
    id: 'presente-regular',
    icon: '🔁',
    title: 'Präsens der regelmäßigen Verben',
    level: 'A1',
    lessonId: 'praesens',
    instruction: 'Konjugiere das Verb in Klammern im Präsens.',
    explanation:
      '-ar: -o, -as, -a, -amos, -áis, -an. -er: -o, -es, -e, -emos, -éis, -en. -ir: -o, -es, -e, -imos, -ís, -en. ' +
      'Das Subjektpronomen lässt man meist weg – die Endung zeigt die Person. usted/ustedes (Sie) werden wie ' +
      'él/ellos konjugiert.',
    examples: [
      { target: 'hablo · como · vivo', de: 'ich spreche, esse, wohne' },
      { target: 'hablamos · coméis · viven', de: 'wir sprechen, ihr esst, sie wohnen' },
    ],
    items: [
      q('Yo ', 'hablo', ' español. (hablar)', ['hablo', 'habla', 'hablas', 'hablar'], '-ar, yo → -o'),
      q('Tú ', 'vives', ' en Berlín. (vivir)', ['vives', 'vivas', 'vive', 'vivís'], '-ir, tú → -es'),
      q('Ella ', 'trabaja', ' en un banco. (trabajar)', ['trabaja', 'trabajas', 'trabajo', 'trabaje'], '-ar, ella → -a'),
      q('Nosotros ', 'comemos', ' paella. (comer)', ['comemos', 'comamos', 'coméis', 'comen'], '-er, nosotros → -emos'),
      q('Vosotros ', 'leéis', ' mucho. (leer)', ['leéis', 'leís', 'leen', 'leemos'], '-er, vosotros → -éis'),
      q('Ellos ', 'escriben', ' una carta. (escribir)', ['escriben', 'escribien', 'escriban', 'escribe'], '-ir, ellos → -en'),
      q('Yo ', 'bebo', ' agua. (beber)', ['bebo', 'bebe', 'bebes', 'beba'], '-er, yo → -o'),
      q('¿Vosotros ', 'habláis', ' inglés? (hablar)', ['habláis', 'hablás', 'habléis', 'hablan'], '-ar, vosotros → -áis'),
      q('Nosotros ', 'vivimos', ' en Madrid. (vivir)', ['vivimos', 'vivemos', 'vivamos', 'viven'], '-ir, nosotros → -imos'),
      q('Usted ', 'canta', ' muy bien. (cantar)', ['canta', 'cantas', 'canto', 'cante'], 'usted → wie él/ella'),
      q('Mis padres ', 'leen', ' el periódico. (leer)', ['leen', 'lean', 'leéis', 'lee'], '-er, ellos → -en'),
      q('Tú ', 'abres', ' la puerta. (abrir)', ['abres', 'abras', 'abre', 'abrís'], '-ir, tú → -es'),
    ],
  },
  {
    id: 'presente-irregular',
    icon: '🔀',
    title: 'Unregelmäßige Verben im Präsens',
    level: 'A1',
    lessonId: 'praesens',
    instruction: 'Konjugiere das Verb in Klammern im Präsens.',
    explanation:
      'Stammwechsel in allen Formen außer nosotros/vosotros: e → ie (querer: quiero), o → ue (poder: puedo), ' +
      'e → i (pedir: pido). Unregelmäßige yo-Form: tengo, hago, salgo, pongo, digo, conozco, sé. ' +
      'Ganz unregelmäßig: ir (voy, vas, va, vamos, vais, van), ser, estar.',
    examples: [
      { target: 'quiero · puedo · pido', de: 'ich will, kann, bestelle (Stammwechsel)' },
      { target: 'tengo · hago · salgo', de: 'ich habe, mache, gehe aus (yo-Form)' },
      { target: 'queremos · podemos', de: 'wir wollen, können (kein Stammwechsel)' },
    ],
    items: [
      q('Yo ', 'tengo', ' dos hermanos. (tener)', ['tengo', 'teno', 'tieno', 'tiene'], 'yo-Form mit -g-: tengo'),
      q('Tú ', 'tienes', ' razón. (tener)', ['tienes', 'tenes', 'tiene', 'tengas'], 'e → ie: tienes'),
      q('Nosotros ', 'vamos', ' al cine. (ir)', ['vamos', 'imos', 'vais', 'van'], 'ir: voy, vas, va, vamos …'),
      q('Yo ', 'hago', ' los deberes. (hacer)', ['hago', 'haco', 'hace', 'hazo'], 'yo-Form mit -g-: hago'),
      q('¿', 'Puedes', ' venir mañana? (poder, tú)', ['Puedes', 'Podes', 'Pueden', 'Podéis'], 'o → ue: puedes'),
      q('Ella ', 'quiere', ' un café. (querer)', ['quiere', 'quere', 'quieres', 'queremos'], 'e → ie: quiere'),
      q('Yo no ', 'sé', ' nada. (saber)', ['sé', 'sabo', 'sabe', 'sepo'], 'saber, yo → sé'),
      q('Yo ', 'salgo', ' de casa a las ocho. (salir)', ['salgo', 'salo', 'sale', 'salga'], 'yo-Form mit -g-: salgo'),
      q('Ellos ', 'vuelven', ' tarde. (volver)', ['vuelven', 'volven', 'vuelvan', 'volvemos'], 'o → ue: vuelven'),
      q('Yo ', 'digo', ' la verdad. (decir)', ['digo', 'dico', 'dice', 'decio'], 'decir, yo → digo'),
      q('Nosotros ', 'empezamos', ' a las siete. (empezar)', ['empezamos', 'empiezamos', 'empiezan', 'empecemos'], 'nosotros: kein Stammwechsel'),
      q('Yo ', 'conozco', ' a María. (conocer)', ['conozco', 'conoco', 'conoce', 'conozo'], '-cer, yo → -zco'),
    ],
  },
  {
    id: 'hay-estar',
    icon: '📍',
    title: 'hay oder está/están?',
    level: 'A1',
    instruction: 'Setze hay, está oder están ein.',
    explanation:
      'hay (es gibt) nennt, dass etwas existiert – mit un/una, Zahlen, Mengenwörtern oder ohne Artikel. ' +
      'hay hat nur diese eine Form. está/están sagt, wo sich etwas Bestimmtes befindet – mit el/la, ' +
      'Possessiv oder Namen.',
    examples: [
      { target: 'Hay un banco en la plaza.', de: 'Es gibt eine Bank auf dem Platz.' },
      { target: 'El banco está en la plaza.', de: 'Die Bank ist auf dem Platz.' },
    ],
    items: [
      q('En mi calle ', 'hay', ' un supermercado.', HAY, 'un … → es gibt → hay'),
      q('El supermercado ', 'está', ' al lado del banco.', HAY, 'el … → wo? → está'),
      q('¿', 'Hay', ' un banco por aquí?', ['Hay', 'Está', 'Están', 'Es'], 'un … → hay'),
      q('¿Dónde ', 'están', ' las llaves?', HAY, 'las … (Mehrzahl) → wo? → están'),
      q('En la mesa ', 'hay', ' dos libros.', HAY, 'Zahl + Nomen → hay'),
      q('Los libros ', 'están', ' en la mesa.', HAY, 'los … → wo? → están'),
      q('', 'Hay', ' mucha gente en la plaza.', ['Hay', 'Está', 'Están', 'Es'], 'Mengenwort → hay'),
      q('Mi casa ', 'está', ' cerca del centro.', HAY, 'mi … → wo? → está'),
      q('En la nevera no ', 'hay', ' leche.', HAY, 'ohne Artikel → hay'),
      q('La farmacia ', 'está', ' a la derecha.', HAY, 'la … → wo? → está'),
      q('¿Qué ', 'hay', ' en la caja?', HAY, 'Was gibt es …? → hay'),
      q('Tus gafas ', 'están', ' en el sofá.', HAY, 'tus … (Mehrzahl) → están'),
    ],
  },
  {
    id: 'gustar',
    icon: '❤️',
    title: 'gustar (me gusta / me gustan)',
    level: 'A1',
    instruction: 'Setze die passende Form oder das Pronomen ein.',
    explanation:
      'Bei gustar ist das, was gefällt, das Subjekt: Singular oder Infinitiv → gusta, Mehrzahl → gustan. ' +
      'Die Person steht als Pronomen davor: me, te, le, nos, os, les. Zur Betonung oder Klärung: a mí, a ti, ' +
      'a Pedro, a mis padres … Genauso: encantar, interesar, doler.',
    examples: [
      { target: 'Me gusta el chocolate.', de: 'Ich mag Schokolade.' },
      { target: 'Nos gustan los perros.', de: 'Wir mögen Hunde.' },
      { target: 'A Ana le gusta bailar.', de: 'Ana tanzt gern.' },
    ],
    items: [
      q('Me ', 'gusta', ' el chocolate.', ['gusta', 'gustan', 'gusto', 'gustas'], 'Singular → gusta'),
      q('Me ', 'gustan', ' los perros.', ['gustan', 'gusta', 'gusto', 'gustas'], 'Mehrzahl → gustan'),
      q('¿Te ', 'gusta', ' bailar?', ['gusta', 'gustan', 'gustas', 'gusto'], 'Infinitiv → gusta'),
      q('A mi hermano le ', 'gustan', ' las películas de terror.', ['gustan', 'gusta', 'gustas', 'gusto'], 'Mehrzahl → gustan'),
      q('A Pedro ', 'le', ' gusta el fútbol.', ['le', 'les', 'se', 'lo'], 'er → le'),
      q('A mis padres ', 'les', ' gusta viajar.', ['les', 'le', 'los', 'se'], 'sie (Mehrzahl) → les'),
      q('A nosotros ', 'nos', ' gusta la playa.', ['nos', 'os', 'les', 'me'], 'wir → nos'),
      q('¿A vosotros ', 'os', ' gusta el cine?', ['os', 'les', 'nos', 'te'], 'ihr → os'),
      q('A mí no me ', 'gusta', ' el café.', ['gusta', 'gustan', 'gusto', 'gustas'], 'el café (Singular) → gusta'),
      q('Me ', 'encantan', ' tus zapatos. (encantar)', ['encantan', 'encanta', 'encantas', 'encanto'], 'wie gustar: Mehrzahl → encantan'),
      q('A ellos les ', 'gusta', ' la música clásica.', ['gusta', 'gustan', 'gustas', 'gusto'], 'la música (Singular) → gusta'),
      q('¿Te ', 'gustan', ' estas flores?', ['gustan', 'gusta', 'gustas', 'gusto'], 'Mehrzahl → gustan'),
    ],
  },
  {
    id: 'posesivos',
    icon: '🫵',
    title: 'Possessivbegleiter (mi, tu, su …)',
    level: 'A1',
    lessonId: 'pronomen',
    instruction: 'Setze das passende Possessiv ein.',
    explanation:
      'Vor dem Nomen: mi(s), tu(s), su(s), nuestro/a(s), vuestro/a(s), su(s). Sie richten sich nach dem Besitz, ' +
      'nicht nach dem Besitzer: mis libros, nuestra casa. su/sus = sein, ihr und Ihr (usted). ' +
      'Nach ser steht die betonte Form: Es mío. Es suya.',
    examples: [
      { target: 'mi casa · mis amigos', de: 'mein Haus, meine Freunde' },
      { target: 'nuestra ciudad · vuestros hijos', de: 'unsere Stadt, eure Kinder' },
      { target: 'El libro es mío.', de: 'Das Buch gehört mir.' },
    ],
    items: [
      q('', 'Mi', ' casa es pequeña. (yo)', ['Mi', 'Mis', 'Mío', 'Tu'], 'ich, ein Besitz → mi'),
      q('¿Es ', 'tu', ' coche? (tú)', ['tu', 'tus', 'su', 'mi'], 'du, ein Besitz → tu (ohne Akzent!)'),
      q('', 'Sus', ' hermanos viven en Madrid. (él)', ['Sus', 'Su', 'Suyos', 'Tus'], 'er, mehrere → sus'),
      q('', 'Nuestra', ' casa tiene jardín. (nosotros)', ['Nuestra', 'Nuestro', 'Nuestras', 'Nuestros'], 'la casa → nuestra'),
      q('', 'Nuestros', ' padres son simpáticos. (nosotros)', ['Nuestros', 'Nuestras', 'Nuestro', 'Sus'], 'los padres → nuestros'),
      q('¿Dónde está ', 'vuestra', ' profesora? (vosotros)', ['vuestra', 'vuestro', 'vuestras', 'su'], 'la profesora → vuestra'),
      q('', 'Sus', ' hijos son pequeños. (ellos)', ['Sus', 'Su', 'Suyos', 'Tus'], 'sie, mehrere → sus'),
      q('', 'Mis', ' amigas son de Sevilla. (yo)', ['Mis', 'Mi', 'Mías', 'Tus'], 'ich, mehrere → mis'),
      q('¿Es este ', 'su', ' bolso? (usted)', ['su', 'tu', 'sus', 'suyo'], 'usted → su'),
      q('', 'Tus', ' libros están aquí. (tú)', ['Tus', 'Tu', 'Tuyos', 'Sus'], 'du, mehrere → tus'),
      q('Este libro es ', 'mío', '. (yo)', ['mío', 'mi', 'mía', 'míos'], 'nach ser → betonte Form: mío'),
      q('La culpa es ', 'suya', '. (ella)', ['suya', 'suyo', 'su', 'sus'], 'la culpa → betonte Form suya'),
    ],
  },
  {
    id: 'interrogativos',
    icon: '❓',
    title: 'Fragewörter (qué, quién, dónde …)',
    level: 'A1',
    instruction: 'Setze das passende Fragewort ein.',
    explanation:
      'qué (was), quién/quiénes (wer), dónde (wo), adónde (wohin), de dónde (woher), cuándo (wann), cómo (wie), ' +
      'cuánto/a/os/as (wie viel/e – angeglichen), por qué (warum; Antwort: porque), cuál/cuáles (welche/r aus ' +
      'einer Auswahl). Fragewörter tragen immer einen Akzent; Fragen beginnen mit ¿.',
    examples: [
      { target: '¿Cómo te llamas? ¿De dónde eres?', de: 'Wie heißt du? Woher kommst du?' },
      { target: '¿Por qué estudias español? – Porque …', de: 'Warum lernst du Spanisch? – Weil …' },
    ],
    items: [
      q('¿', 'Cómo', ' te llamas?', ['Cómo', 'Qué', 'Cuál', 'Quién'], 'wie? → cómo'),
      q('¿', 'Dónde', ' vives?', ['Dónde', 'Adónde', 'Cuándo', 'Cómo'], 'wo? → dónde'),
      q('¿', 'Cuántos', ' años tienes?', ['Cuántos', 'Cuántas', 'Cuánto', 'Qué'], 'los años → cuántos'),
      q('¿', 'Cuándo', ' es tu cumpleaños?', ['Cuándo', 'Dónde', 'Qué', 'Cuánto'], 'wann? → cuándo'),
      q('¿', 'Quién', ' es ese chico?', ['Quién', 'Qué', 'Cuál', 'Quiénes'], 'wer? (eine Person) → quién'),
      q('¿', 'Por qué', ' estudias español?', ['Por qué', 'Porque', 'Para qué', 'Qué'], 'warum? → por qué (getrennt, mit Akzent)'),
      q('¿', 'Adónde', ' vas? – Al cine.', ['Adónde', 'Dónde', 'De dónde', 'Cuándo'], 'wohin? → adónde', ['A dónde']),
      q('¿', 'De dónde', ' eres? – De Alemania.', ['De dónde', 'Dónde', 'Adónde', 'Cómo'], 'woher? → de dónde'),
      q('¿', 'Cuánto', ' cuesta el libro?', ['Cuánto', 'Cuántos', 'Qué', 'Cómo'], 'wie viel kostet …? → cuánto'),
      q('¿', 'Qué', ' haces el fin de semana?', ['Qué', 'Cuál', 'Cómo', 'Quién'], 'was? → qué'),
      q('¿', 'Cuál', ' de estos dos prefieres?', ['Cuál', 'Qué', 'Quién', 'Cuánto'], 'welcher (aus einer Auswahl)? → cuál'),
      q('¿', 'Cuántas', ' personas vienen a la fiesta?', ['Cuántas', 'Cuántos', 'Cuánto', 'Qué'], 'las personas → cuántas'),
    ],
  },
  {
    id: 'negacion',
    icon: '🚫',
    title: 'Verneinung (no, nada, nadie, nunca …)',
    level: 'A1',
    instruction: 'Setze das passende Verneinungswort ein.',
    explanation:
      'no steht vor dem Verb. Doppelte Verneinung ist im Spanischen normal: No tengo nada. No viene nadie. ' +
      'nada (nichts), nadie (niemand), nunca (nie), tampoco (auch nicht), ni … ni (weder … noch), ' +
      'ningún/ninguna (kein) – ninguno steht allein ohne Nomen. Steht das Wort vor dem Verb, entfällt no: Nunca como carne.',
    examples: [
      { target: 'No tengo nada. No viene nadie.', de: 'Ich habe nichts. Niemand kommt.' },
      { target: 'Nunca como carne. = No como carne nunca.', de: 'Ich esse nie Fleisch.' },
    ],
    items: [
      q('No tengo ', 'nada', '. (nichts)', ['nada', 'nadie', 'nunca', 'ningún'], 'nichts → nada'),
      q('No viene ', 'nadie', '. (niemand)', ['nadie', 'nada', 'nunca', 'ninguno'], 'niemand → nadie'),
      q('', 'Nunca', ' como carne. (nie)', ['Nunca', 'Nada', 'Nadie', 'Tampoco'], 'nie → nunca (vor dem Verb, ohne no)'),
      q('A mí ', 'tampoco', ' me gusta. (auch nicht)', ['tampoco', 'también', 'nunca', 'nada'], 'auch nicht → tampoco'),
      q('No tengo ', 'ningún', ' libro. (kein)', ['ningún', 'ninguno', 'ninguna', 'nada'], 'vor männlichem Nomen → ningún'),
      q('No hay ', 'ninguna', ' farmacia aquí. (keine)', ['ninguna', 'ningún', 'ninguno', 'nada'], 'la farmacia → ninguna'),
      q('Yo ', 'no', ' hablo francés. (nicht)', ['no', 'ni', 'nada', 'nunca'], 'nicht → no vor dem Verb'),
      q('No bebo café ', 'ni', ' té.', ['ni', 'o', 'y', 'no'], 'weder … noch → ni'),
      q('¿Hay alguien en casa? – No, no hay ', 'nadie', '.', ['nadie', 'nada', 'ninguno', 'nunca'], 'alguien → nadie'),
      q('¿Tienes algo para mí? – No, no tengo ', 'nada', '.', ['nada', 'nadie', 'nunca', 'ningún'], 'algo → nada'),
      q('No voy ', 'nunca', ' al gimnasio. (nie)', ['nunca', 'nada', 'nadie', 'ni'], 'nie → nunca (nach dem Verb mit no)'),
      q('¿Tienes algún libro de Borges? – No, no tengo ', 'ninguno', '.', ['ninguno', 'ningún', 'ninguna', 'nada'], 'ohne Nomen → ninguno'),
    ],
  },
  {
    id: 'adjetivos',
    icon: '🎨',
    title: 'Adjektive angleichen',
    level: 'A1',
    instruction: 'Setze das Adjektiv in der richtigen Form ein.',
    explanation:
      'Adjektive stehen meist nach dem Nomen und richten sich nach Geschlecht und Zahl: -o/-a/-os/-as. ' +
      'Auf -e oder Konsonant: gleich für beide Geschlechter (grande, azul), Mehrzahl -es; -z → -ces (felices). ' +
      'Nationalität auf Konsonant bekommt -a: alemán → alemana. bueno/malo verkürzen sich vor männlichem Nomen: buen, mal.',
    examples: [
      { target: 'una casa blanca · unos coches rojos', de: 'ein weißes Haus, einige rote Autos' },
      { target: 'un buen amigo · una mujer alemana', de: 'ein guter Freund, eine deutsche Frau' },
    ],
    items: [
      q('una casa ', 'blanca', ' (blanco)', ['blanca', 'blanco', 'blancas', 'blancos'], 'la casa → -a'),
      q('los coches ', 'rojos', ' (rojo)', ['rojos', 'rojo', 'rojas', 'roja'], 'männlich, Mehrzahl → -os'),
      q('una chica ', 'simpática', ' (simpático)', ['simpática', 'simpático', 'simpáticas', 'simpáticos'], 'weiblich → -a'),
      q('unos libros ', 'interesantes', ' (interesante)', ['interesantes', 'interesante', 'interesantos', 'interesantas'], 'auf -e → Mehrzahl + -s'),
      q('La ciudad es ', 'grande', '. (grande)', ['grande', 'granda', 'grandes', 'gran'], 'auf -e → für beide Geschlechter gleich'),
      q('las flores ', 'amarillas', ' (amarillo)', ['amarillas', 'amarillos', 'amarilla', 'amarillo'], 'weiblich, Mehrzahl → -as'),
      q('una mujer ', 'alemana', ' (alemán)', ['alemana', 'alemán', 'alemanes', 'alemanas'], 'Nationalität, weiblich → -a (ohne Akzent)'),
      q('unos niños ', 'felices', ' (feliz)', ['felices', 'felizes', 'feliz', 'felizs'], '-z → Mehrzahl -ces'),
      q('Es un ', 'buen', ' amigo. (bueno)', ['buen', 'bueno', 'buena', 'bien'], 'vor männlichem Nomen → buen'),
      q('Es una ', 'buena', ' idea. (bueno)', ['buena', 'buen', 'bueno', 'bien'], 'weiblich → buena'),
      q('Hace ', 'mal', ' tiempo. (malo)', ['mal', 'malo', 'mala', 'males'], 'vor männlichem Nomen → mal'),
      q('las chicas ', 'trabajadoras', ' (trabajador)', ['trabajadoras', 'trabajadores', 'trabajadora', 'trabajadors'], '-or → weiblich -ora, Mehrzahl -oras'),
    ],
  },
  {
    id: 'preposiciones',
    icon: '🧭',
    title: 'Präpositionen (a, en, de, con …)',
    level: 'A1',
    instruction: 'Setze die passende Präposition ein.',
    explanation:
      'a: Richtung, Uhrzeit, und vor Personen als Objekt (Veo a mi madre). en: Ort und Verkehrsmittel (en autobús). ' +
      'de: Herkunft, Besitz, Material. con: mit. de … a: von … bis. a + el = al, de + el = del ' +
      '(nicht bei el Salvador o. Ä. und nicht mit él).',
    examples: [
      { target: 'Voy a Madrid en tren.', de: 'Ich fahre mit dem Zug nach Madrid.' },
      { target: 'Vengo del trabajo y voy al cine.', de: 'Ich komme von der Arbeit und gehe ins Kino.' },
    ],
    items: [
      q('Voy ', 'a', ' Madrid.', ['a', 'en', 'de', 'por'], 'Richtung → a'),
      q('Vivo ', 'en', ' Barcelona.', ['en', 'a', 'de', 'con'], 'Ort → en'),
      q('Soy ', 'de', ' Alemania.', ['de', 'en', 'a', 'desde'], 'Herkunft → de'),
      q('Voy ', 'al', ' cine. (a + el)', ['al', 'a el', 'del', 'en el'], 'a + el = al'),
      q('Vengo ', 'del', ' supermercado. (de + el)', ['del', 'de el', 'al', 'desde'], 'de + el = del'),
      q('El libro está ', 'en', ' la mesa.', ['en', 'a', 'de', 'con'], 'auf/in → en'),
      q('Voy al trabajo ', 'en', ' autobús.', ['en', 'con', 'por', 'a'], 'Verkehrsmittel → en'),
      q('Trabajo de nueve ', 'a', ' cinco.', ['a', 'hasta', 'de', 'en'], 'de … a … = von … bis …'),
      q('Café ', 'con', ' leche, por favor.', ['con', 'de', 'en', 'a'], 'mit → con'),
      q('Veo ', 'a', ' mi madre.', ['a', 'de', 'en', 'con'], 'Person als Objekt → a (persönliches a)'),
      q('Es la casa ', 'de', ' Juan.', ['de', 'a', 'en', 'con'], 'Besitz → de'),
      q('Llego ', 'a', ' las ocho.', ['a', 'en', 'de', 'por'], 'Uhrzeit → a'),
    ],
  },

  // ══════════════════════════════ A2 ══════════════════════════════
  {
    id: 'demostrativos',
    icon: '👉',
    title: 'Demonstrativa (este, ese, aquel)',
    level: 'A2',
    instruction: 'Setze das passende Demonstrativum ein.',
    explanation:
      'este/esta/estos/estas: hier, nah beim Sprecher (auch: diese Woche, dieses Jahr). ese/esa/esos/esas: da, ' +
      'beim Gesprächspartner. aquel/aquella/aquellos/aquellas: dort, weit weg – auch zeitlich. ' +
      'Neutral (für Unbekanntes oder Sachverhalte): esto, eso, aquello.',
    examples: [
      { target: 'este libro · esa casa · aquellas montañas', de: 'dieses Buch (hier), das Haus (da), die Berge (dort)' },
      { target: '¿Qué es esto?', de: 'Was ist das?' },
    ],
    items: [
      q('', 'Este', ' libro de aquí es mío.', ['Este', 'Esta', 'Esto', 'Ese'], 'hier, el libro → este'),
      q('', 'Esa', ' casa de ahí es bonita.', ['Esa', 'Ese', 'Esta', 'Aquella'], 'da, la casa → esa'),
      q('', 'Aquellas', ' montañas de allí son altas.', ['Aquellas', 'Aquellos', 'Esas', 'Estas'], 'dort (weit), las montañas → aquellas'),
      q('¿Qué es ', 'esto', '? (hier, unbekannt)', ['esto', 'este', 'esta', 'eso'], 'neutral, hier → esto'),
      q('', 'Estos', ' chicos de aquí son mis primos.', ['Estos', 'Estas', 'Esos', 'Este'], 'hier, los chicos → estos'),
      q('Me gusta ', 'esa', ' camisa que llevas.', ['esa', 'ese', 'esta', 'aquella'], 'beim Gesprächspartner, la camisa → esa'),
      q('', 'Este', ' año voy a España.', ['Este', 'Ese', 'Aquel', 'Esto'], 'dieses Jahr → este año'),
      q('¿Te acuerdas de ', 'aquel', ' verano en Mallorca?', ['aquel', 'aquella', 'este', 'ese'], 'lange her, el verano → aquel'),
      q('¿', 'Esos', ' zapatos que llevas son nuevos?', ['Esos', 'Esas', 'Estos', 'Aquellos'], 'beim Gesprächspartner, los zapatos → esos'),
      q('¿Qué es ', 'eso', ' que tienes en la mano?', ['eso', 'ese', 'esa', 'aquello'], 'neutral, beim Gesprächspartner → eso'),
      q('', 'Esta', ' semana tengo mucho trabajo.', ['Esta', 'Este', 'Esa', 'Aquella'], 'diese Woche → esta semana'),
      q('', 'Estas', ' gafas de aquí son de María.', ['Estas', 'Estos', 'Esas', 'Esta'], 'hier, las gafas → estas'),
    ],
  },
  {
    id: 'reflexivos',
    icon: '🪞',
    title: 'Reflexive Verben (levantarse …)',
    level: 'A2',
    instruction: 'Setze das Reflexivpronomen oder die Verbform ein.',
    explanation:
      'Reflexivpronomen: me, te, se, nos, os, se – vor dem konjugierten Verb (me levanto). ' +
      'Beim Infinitiv, Gerundium und bejahten Imperativ hängt es hinten an: voy a ducharme, levántate. ' +
      'Viele Alltagsverben sind reflexiv: llamarse, levantarse, ducharse, acostarse, despertarse, vestirse.',
    examples: [
      { target: 'Me levanto a las siete.', de: 'Ich stehe um sieben auf.' },
      { target: 'Nos acostamos tarde.', de: 'Wir gehen spät ins Bett.' },
      { target: 'Voy a ducharme.', de: 'Ich gehe duschen.' },
    ],
    items: [
      q('Yo ', 'me', ' levanto a las siete.', ['me', 'te', 'se', 'nos'], 'yo → me'),
      q('¿Cómo ', 'te', ' llamas?', ['te', 'me', 'se', 'os'], 'tú → te'),
      q('Ella ', 'se', ' ducha por la mañana.', ['se', 'le', 'te', 'me'], 'ella → se'),
      q('Nosotros ', 'nos', ' acostamos tarde.', ['nos', 'os', 'se', 'me'], 'nosotros → nos'),
      q('¿Vosotros ', 'os', ' vestís rápido?', ['os', 'nos', 'se', 'te'], 'vosotros → os'),
      q('Los niños ', 'se', ' lavan las manos.', ['se', 'les', 'los', 'nos'], 'ellos → se'),
      q('Me ', 'llamo', ' Ana. (llamarse)', ['llamo', 'llama', 'llamas', 'llaman'], 'yo → llamo'),
      q('Nosotros nos ', 'encontramos', ' en el parque. (encontrarse)', ['encontramos', 'encuentramos', 'encuentran', 'encontráis'], 'nosotros: kein Stammwechsel'),
      q('Tú te ', 'despiertas', ' muy temprano. (despertarse)', ['despiertas', 'despertas', 'despierta', 'despiertes'], 'e → ie: despiertas'),
      q('Ellos se ', 'divierten', ' mucho. (divertirse)', ['divierten', 'diverten', 'divirten', 'divierte'], 'e → ie: divierten'),
      q('Voy a ', 'ducharme', ' ahora. (ducharse, yo)', ['ducharme', 'ducharse', 'me duchar', 'duchar'], 'beim Infinitiv hängt das Pronomen hinten an'),
      q('¿A qué hora ', 'te', ' acuestas?', ['te', 'se', 'me', 'os'], 'tú → te'),
    ],
  },
  {
    id: 'preterito-perfecto',
    icon: '✅',
    title: 'Pretérito perfecto (he hablado)',
    level: 'A2',
    instruction: 'Setze das Verb im pretérito perfecto ein.',
    explanation:
      'haber im Präsens (he, has, ha, hemos, habéis, han) + Partizip (-ado / -ido). Das Partizip bleibt immer ' +
      'gleich. Gebraucht für Vergangenes in einem noch andauernden Zeitraum (hoy, esta semana, este año, ya, ' +
      'todavía no, nunca). Unregelmäßig: hecho, dicho, visto, escrito, puesto, vuelto, abierto, roto, muerto.',
    examples: [
      { target: 'Hoy he trabajado mucho.', de: 'Heute habe ich viel gearbeitet.' },
      { target: '¿Has visto la película?', de: 'Hast du den Film gesehen?' },
    ],
    items: [
      q('Hoy ', 'he trabajado', ' mucho. (trabajar, yo)', ['he trabajado', 'ha trabajado', 'he trabajando', 'hay trabajado'], 'yo → he + -ado'),
      q('¿', 'Has visto', ' la película? (ver, tú)', ['Has visto', 'Has vido', 'Ha visto', 'Has veído'], 'ver → visto (unregelmäßig)'),
      q('Esta semana ', 'ha llovido', ' mucho. (llover)', ['ha llovido', 'ha llovado', 'han llovido', 'he llovido'], 'es → ha + -ido'),
      q('Nosotros ', 'hemos hecho', ' la cena. (hacer)', ['hemos hecho', 'hemos hacido', 'habemos hecho', 'han hecho'], 'hacer → hecho'),
      q('¿Vosotros ya ', 'habéis comido', '? (comer)', ['habéis comido', 'habéis comado', 'han comido', 'hemos comido'], 'vosotros → habéis + -ido'),
      q('Ellos ', 'han escrito', ' una carta. (escribir)', ['han escrito', 'han escribido', 'han escrita', 'ha escrito'], 'escribir → escrito'),
      q('Todavía no ', 'he leído', ' el libro. (leer, yo)', ['he leído', 'he leyendo', 'he lido', 'ha leído'], 'leer → leído (mit Akzent)'),
      q('¿Dónde ', 'has puesto', ' las llaves? (poner, tú)', ['has puesto', 'has ponido', 'has poniendo', 'has puesta'], 'poner → puesto'),
      q('Mi hermana ', 'ha vuelto', ' de viaje. (volver)', ['ha vuelto', 'ha volvido', 'ha vuelta', 'he vuelto'], 'volver → vuelto'),
      q('Nunca ', 'he estado', ' en México. (estar, yo)', ['he estado', 'he sido', 'ha estado', 'he estando'], 'estar → estado'),
      q('Alguien ', 'ha abierto', ' la ventana. (abrir)', ['ha abierto', 'ha abrido', 'ha abierta', 'han abierto'], 'abrir → abierto'),
      q('¿Qué te ', 'han dicho', '? (decir, ellos)', ['han dicho', 'han decido', 'han dicha', 'ha dicho'], 'decir → dicho'),
    ],
  },
  {
    id: 'preterito-indefinido',
    icon: '⏪',
    title: 'Pretérito indefinido (hablé, comí)',
    level: 'A2',
    instruction: 'Setze das Verb im pretérito indefinido ein.',
    explanation:
      'Für abgeschlossene Handlungen zu einem Zeitpunkt der Vergangenheit (ayer, el año pasado, en 2010). ' +
      '-ar: -é, -aste, -ó, -amos, -asteis, -aron. -er/-ir: -í, -iste, -ió, -imos, -isteis, -ieron. ' +
      'Unregelmäßig: ir/ser (fui, fue), hacer (hice, hizo), tener (tuve), estar (estuve), poder (pude), decir (dije).',
    examples: [
      { target: 'Ayer hablé con mi madre.', de: 'Gestern habe ich mit meiner Mutter gesprochen.' },
      { target: 'El verano pasado fuimos a Perú.', de: 'Letzten Sommer sind wir nach Peru gefahren.' },
    ],
    items: [
      q('Ayer ', 'hablé', ' con mi madre. (hablar, yo)', ['hablé', 'hablo', 'hablaba', 'hablí'], '-ar, yo → -é'),
      q('Anoche ', 'llegó', ' muy tarde. (llegar, ella)', ['llegó', 'llegué', 'llegaba', 'llegaron'], '-ar, ella → -ó'),
      q('¿', 'Recibiste', ' la carta? (recibir, tú)', ['Recibiste', 'Recibistes', 'Recibió', 'Recibías'], '-ir, tú → -iste'),
      q('El año pasado ', 'viajamos', ' a Perú. (viajar, nosotros)', ['viajamos', 'viajimos', 'viajábamos', 'viajaron'], '-ar, nosotros → -amos'),
      q('Ayer ', 'fui', ' al médico. (ir, yo)', ['fui', 'fue', 'iba', 'fuiste'], 'ir, yo → fui'),
      q('¿Qué ', 'hiciste', ' el fin de semana? (hacer, tú)', ['hiciste', 'haciste', 'hizo', 'hacías'], 'hacer → hic-'),
      q('Mi abuelo ', 'nació', ' en 1950. (nacer)', ['nació', 'nacó', 'nacía', 'nací'], '-er, él → -ió'),
      q('Nosotros ', 'tuvimos', ' que salir pronto. (tener)', ['tuvimos', 'tenimos', 'tuvemos', 'teníamos'], 'tener → tuv-'),
      q('¿Dónde ', 'estuvisteis', ' ayer? (estar, vosotros)', ['estuvisteis', 'estasteis', 'estuvistes', 'estabais'], 'estar → estuv-'),
      q('Ella no ', 'pudo', ' venir. (poder)', ['pudo', 'podó', 'puedo', 'podía'], 'poder → pud-'),
      q('Yo le ', 'dije', ' la verdad. (decir)', ['dije', 'decí', 'dijí', 'dijo'], 'decir → dij-'),
      q('Los niños ', 'durmieron', ' mucho. (dormir)', ['durmieron', 'dormieron', 'durmaron', 'dormían'], 'dormir, ellos → o → u: durmieron'),
    ],
  },
  {
    id: 'imperfecto',
    icon: '🕰️',
    title: 'Pretérito imperfecto (hablaba, comía)',
    level: 'A2',
    instruction: 'Setze das Verb im imperfecto ein.',
    explanation:
      'Für Gewohnheiten, Beschreibungen und Hintergrund in der Vergangenheit (antes, de niño, siempre, todos los días). ' +
      '-ar: -aba, -abas, -aba, -ábamos, -abais, -aban. -er/-ir: -ía, -ías, -ía, -íamos, -íais, -ían. ' +
      'Nur drei unregelmäßige Verben: ser (era), ir (iba), ver (veía).',
    examples: [
      { target: 'De niño vivía en el campo.', de: 'Als Kind wohnte ich auf dem Land.' },
      { target: 'Todos los veranos íbamos a la playa.', de: 'Jeden Sommer fuhren wir ans Meer.' },
    ],
    items: [
      q('De niño ', 'vivía', ' en el campo. (vivir, yo)', ['vivía', 'viví', 'vivo', 'vivaba'], '-ir, yo → -ía'),
      q('Antes ', 'jugábamos', ' mucho al fútbol. (jugar, nosotros)', ['jugábamos', 'jugamos', 'jugaremos', 'jugíamos'], '-ar, nosotros → -ábamos'),
      q('Mi abuela siempre ', 'contaba', ' historias. (contar)', ['contaba', 'contó', 'cuentaba', 'contía'], '-ar, ella → -aba (kein Stammwechsel!)'),
      q('Cuando ', 'era', ' pequeño, tenía un perro. (ser, yo)', ['era', 'fui', 'estaba', 'sería'], 'ser → era'),
      q('Todos los veranos ', 'íbamos', ' a la playa. (ir, nosotros)', ['íbamos', 'fuimos', 'vamos', 'iríamos'], 'ir → iba'),
      q('', 'Eran', ' las diez de la noche. (ser)', ['Eran', 'Fueron', 'Era', 'Estaban'], 'Uhrzeit in der Vergangenheit → eran'),
      q('Mis padres ', 'trabajaban', ' en un hotel. (trabajar)', ['trabajaban', 'trabajaron', 'trabajían', 'trabajan'], '-ar, ellos → -aban'),
      q('¿Qué ', 'querías', ' ser de niño? (querer, tú)', ['querías', 'quisiste', 'quierías', 'quieres'], '-er, tú → -ías'),
      q('Antes no ', 'bebía', ' café. (beber, yo)', ['bebía', 'bebí', 'bebaba', 'bebo'], '-er, yo → -ía'),
      q('Mientras ella ', 'cocinaba', ', él leía. (cocinar)', ['cocinaba', 'cocinó', 'cocinía', 'cocina'], 'Hintergrund → imperfecto, -aba'),
      q('Desde mi ventana ', 'veía', ' el mar. (ver, yo)', ['veía', 'vía', 'vi', 'veo'], 'ver → veía (unregelmäßig)'),
      q('Hacía frío y ', 'llovía', '. (llover)', ['llovía', 'llovió', 'llueve', 'lluvía'], 'Beschreibung → imperfecto'),
    ],
  },
  {
    id: 'futuro',
    icon: '🔮',
    title: 'Zukunft (ir a + Infinitiv, futuro simple)',
    level: 'A2',
    instruction: 'Setze die passende Zukunftsform ein.',
    explanation:
      'ir a + Infinitiv: Pläne und Absichten (Voy a estudiar). Futuro simple: Infinitiv + -é, -ás, -á, -emos, -éis, -án ' +
      '(hablaré, comeré). Unregelmäßige Stämme: tendr-, vendr-, pondr-, saldr-, podr-, sabr-, har-, dir-, querr-.',
    examples: [
      { target: 'Mañana voy a visitar a mi abuela.', de: 'Morgen besuche ich meine Oma.' },
      { target: 'El año que viene viajaremos a Chile.', de: 'Nächstes Jahr werden wir nach Chile reisen.' },
    ],
    items: [
      q('Mañana ', 'visitaré', ' a mi abuela. (visitar, yo)', ['visitaré', 'visitaría', 'visité', 'visitaba'], 'Infinitiv + -é'),
      q('El año que viene ', 'viajaremos', ' a Chile. (viajar, nosotros)', ['viajaremos', 'viajaríamos', 'viajamos', 'viajaron'], 'Infinitiv + -emos'),
      q('¿', 'Vendrás', ' a la fiesta? (venir, tú)', ['Vendrás', 'Venirás', 'Vendrías', 'Viniste'], 'venir → vendr-'),
      q('Creo que mañana ', 'lloverá', '. (llover)', ['lloverá', 'llovería', 'llueve', 'llovió'], 'Infinitiv + -á'),
      q('Ellos ', 'tendrán', ' tiempo el domingo. (tener)', ['tendrán', 'tenerán', 'tendrían', 'tenían'], 'tener → tendr-'),
      q('Te lo ', 'diré', ' más tarde. (decir, yo)', ['diré', 'deciré', 'diría', 'dije'], 'decir → dir-'),
      q('¿Qué ', 'haréis', ' en verano? (hacer, vosotros)', ['haréis', 'haceréis', 'haríais', 'hicisteis'], 'hacer → har-'),
      q('No ', 'podré', ' salir esta noche. (poder, yo)', ['podré', 'poderé', 'podría', 'pude'], 'poder → podr-'),
      q('Voy ', 'a', ' estudiar medicina.', ['a', 'de', 'que', 'en'], 'ir a + Infinitiv'),
      q('Mañana ', 'va', ' a llover. (ir)', ['va', 'voy', 'irá', 'vas'], 'es wird … → va a + Infinitiv'),
      q('¿Cuándo ', 'sabrás', ' los resultados? (saber, tú)', ['sabrás', 'saberás', 'sabrías', 'supiste'], 'saber → sabr-'),
      q('Nosotros ', 'pondremos', ' la mesa. (poner)', ['pondremos', 'poneremos', 'pondríamos', 'pusimos'], 'poner → pondr-'),
    ],
  },
  {
    id: 'pronombres-directos',
    icon: '🎯',
    title: 'Direkte Objektpronomen (lo, la, los, las)',
    level: 'A2',
    instruction: 'Setze das passende direkte Objektpronomen ein.',
    explanation:
      'me, te, lo/la, nos, os, los/las ersetzen das direkte Objekt (Akkusativ). lo = ihn/es, la = sie (eine), ' +
      'los/las = sie (mehrere). Sie stehen vor dem konjugierten Verb, beim Infinitiv und Gerundium auch hinten ' +
      'angehängt: Quiero verla / La quiero ver.',
    examples: [
      { target: '¿Ves a Juan? – Sí, lo veo.', de: 'Siehst du Juan? – Ja, ich sehe ihn.' },
      { target: 'Quiero ver la película. → Quiero verla.', de: 'Ich will den Film sehen. → Ich will ihn sehen.' },
    ],
    items: [
      q('¿Ves a Juan? – Sí, ', 'lo', ' veo.', ['lo', 'la', 'le', 'los'], 'Juan (männlich) → lo'),
      q('¿Tienes la llave? – Sí, ', 'la', ' tengo.', ['la', 'lo', 'le', 'las'], 'la llave → la'),
      q('¿Compras los tomates? – Sí, ', 'los', ' compro.', ['los', 'las', 'les', 'lo'], 'los tomates → los'),
      q('¿Conoces a mis hermanas? – No, no ', 'las', ' conozco.', ['las', 'los', 'les', 'la'], 'mis hermanas → las'),
      q('¿Me llamas mañana? – Sí, ', 'te', ' llamo.', ['te', 'me', 'lo', 'le'], 'dich → te'),
      q('¿Nos invitas? – Claro, ', 'os', ' invito.', ['os', 'nos', 'los', 'les'], 'euch → os'),
      q('Quiero ver la película. → Quiero ', 'verla', '.', ['verla', 'la ver', 'verlo', 'verle'], 'beim Infinitiv hinten angehängt'),
      q('¿Has leído el periódico? – Sí, ', 'lo', ' he leído.', ['lo', 'la', 'le', 'los'], 'el periódico → lo (vor haber)'),
      q('¿Traes el vino? – Sí, ', 'lo', ' traigo.', ['lo', 'la', 'le', 'los'], 'el vino → lo'),
      q('Estoy comiendo la manzana. → ', 'La', ' estoy comiendo.', ['La', 'Lo', 'Le', 'Las'], 'la manzana → la (vor estar)'),
      q('¿Quién escribió estas cartas? – ', 'Las', ' escribí yo.', ['Las', 'Los', 'Les', 'La'], 'estas cartas → las'),
      q('¿Me quieres? – Sí, ', 'te', ' quiero mucho.', ['te', 'me', 'la', 'lo'], 'dich → te'),
    ],
  },
  {
    id: 'pronombres-indirectos',
    icon: '🎁',
    title: 'Indirekte Objektpronomen (le, les …)',
    level: 'A2',
    instruction: 'Setze das passende indirekte Objektpronomen ein.',
    explanation:
      'me, te, le, nos, os, les ersetzen das indirekte Objekt (Dativ: wem?). le = ihm/ihr/Ihnen, les = ihnen/Ihnen. ' +
      'Im Spanischen steht das Pronomen oft zusätzlich zum Objekt: Le doy el libro a Ana. ' +
      'Typische Verben: dar, decir, escribir, regalar, preguntar, prestar, doler.',
    examples: [
      { target: 'Le doy el libro a Ana.', de: 'Ich gebe Ana das Buch.' },
      { target: '¿Les escribes a tus padres?', de: 'Schreibst du deinen Eltern?' },
    ],
    items: [
      q('', 'Le', ' doy el libro a Ana.', ['Le', 'La', 'Lo', 'Les'], 'a Ana (wem?) → le'),
      q('¿', 'Les', ' escribes a tus padres?', ['Les', 'Le', 'Los', 'Las'], 'a tus padres → les'),
      q('Mi madre ', 'me', ' regala un libro. (a mí)', ['me', 'te', 'le', 'se'], 'mir → me'),
      q('¿', 'Te', ' puedo hacer una pregunta? (a ti)', ['Te', 'Le', 'Me', 'Os'], 'dir → te'),
      q('El profesor ', 'nos', ' explica la gramática. (a nosotros)', ['nos', 'os', 'les', 'le'], 'uns → nos'),
      q('', 'Les', ' mando un mensaje a mis amigos.', ['Les', 'Le', 'Los', 'Se'], 'a mis amigos → les'),
      q('¿Qué ', 'te', ' pasa? (a ti)', ['te', 'le', 'se', 'me'], 'dir → te'),
      q('A Pedro ', 'le', ' duele la cabeza.', ['le', 'lo', 'se', 'les'], 'a Pedro → le'),
      q('¿', 'Le', ' traigo un café, señora?', ['Le', 'La', 'Te', 'Les'], 'Ihnen (usted) → le'),
      q('', 'Os', ' digo la verdad. (a vosotros)', ['Os', 'Nos', 'Les', 'Vos'], 'euch → os'),
      q('', 'Le', ' he comprado flores a mi abuela.', ['Le', 'La', 'Les', 'Lo'], 'a mi abuela → le'),
      q('Carlos ', 'me', ' presta su coche. (a mí)', ['me', 'le', 'te', 'se'], 'mir → me'),
    ],
  },
  {
    id: 'comparativos',
    icon: '📊',
    title: 'Vergleiche (más … que, tan … como)',
    level: 'A2',
    instruction: 'Setze das passende Wort ein.',
    explanation:
      'más/menos + Adjektiv + que (mehr/weniger … als). tan + Adjektiv + como (so … wie); tanto/a/os/as + Nomen + como. ' +
      'Unregelmäßig: mejor (besser), peor (schlechter), mayor (älter), menor (jünger). Superlativ: el/la más … ' +
      '(de). Vor Zahlen: más de. Sehr + Adjektiv: -ísimo (facilísimo).',
    examples: [
      { target: 'Madrid es más grande que Sevilla.', de: 'Madrid ist größer als Sevilla.' },
      { target: 'Pedro es tan alto como yo.', de: 'Pedro ist so groß wie ich.' },
      { target: 'Tu coche es mejor que el mío.', de: 'Dein Auto ist besser als meins.' },
    ],
    items: [
      q('Madrid es ', 'más', ' grande que Sevilla.', ['más', 'tan', 'muy', 'mucho'], 'größer als → más … que'),
      q('Mi hermano es ', 'tan', ' alto como yo.', ['tan', 'tanto', 'más', 'como'], 'so … wie → tan … como'),
      q('Este libro es ', 'menos', ' interesante que la película. (weniger)', ['menos', 'tan', 'más', 'poco'], 'weniger … als → menos … que'),
      q('Ana tiene ', 'tantos', ' libros como Pedro.', ['tantos', 'tan', 'tantas', 'más'], 'so viele + los libros → tantos'),
      q('Tu coche es ', 'mejor', ' que el mío. (gut)', ['mejor', 'más bueno', 'bueno', 'más mejor'], 'besser → mejor'),
      q('Hoy hace ', 'peor', ' tiempo que ayer. (schlecht)', ['peor', 'más malo', 'malo', 'más peor'], 'schlechter → peor'),
      q('Es el chico ', 'más', ' simpático de la clase. (der netteste)', ['más', 'muy', 'tan', 'mucho'], 'Superlativ → el más …'),
      q('Mi hermana es ', 'mayor', ' que yo. (älter)', ['mayor', 'más mayor', 'menor', 'vieja'], 'älter (Personen) → mayor'),
      q('Juan es ', 'menor', ' que su hermano. (jünger)', ['menor', 'mayor', 'más menor', 'pequeño'], 'jünger → menor', ['más joven']),
      q('Madrid es más grande ', 'que', ' Valencia.', ['que', 'como', 'de', 'tan'], 'als → que'),
      q('Tengo más ', 'de', ' cien libros.', ['de', 'que', 'como', 'a'], 'vor Zahlen → más de'),
      q('El examen fue ', 'facilísimo', '. (sehr leicht)', ['facilísimo', 'más fácil', 'tan fácil', 'facilito'], 'sehr + Adjektiv → -ísimo'),
    ],
  },
  {
    id: 'imperativo',
    icon: '📢',
    title: 'Imperativ (¡habla!, ¡hable!, ¡hablad!)',
    level: 'A2',
    instruction: 'Setze den bejahten Imperativ ein.',
    explanation:
      'tú: wie die 3. Person Singular Präsens (habla, come). Unregelmäßig: di, haz, ve, pon, sal, sé, ten, ven. ' +
      'usted/ustedes: Subjuntivo-Form (hable, coman). vosotros: Infinitiv -r → -d (hablad, comed). ' +
      'Pronomen hängen hinten an, oft mit Akzent: levántate, dímelo.',
    examples: [
      { target: '¡Habla más despacio! ¡Ven aquí!', de: 'Sprich langsamer! Komm her!' },
      { target: '¡Pase, por favor! ¡Sentaos!', de: 'Kommen Sie herein, bitte! Setzt euch!' },
    ],
    items: [
      q('¡', 'Cierra', ' la puerta, por favor! (cerrar, tú)', ['Cierra', 'Cerra', 'Cierre', 'Cierras'], 'tú → wie él: cierra'),
      q('¡', 'Ven', ' aquí! (venir, tú)', ['Ven', 'Viene', 'Vienes', 'Venga'], 'venir → ven (unregelmäßig)'),
      q('¡', 'Haz', ' los deberes! (hacer, tú)', ['Haz', 'Hace', 'Haga', 'Haced'], 'hacer → haz (unregelmäßig)'),
      q('¡', 'Hable', ' más despacio, por favor! (hablar, usted)', ['Hable', 'Habla', 'Hablad', 'Hablen'], 'usted → Subjuntivo: hable'),
      q('¡', 'Poned', ' la mesa, niños! (poner, vosotros)', ['Poned', 'Pongáis', 'Ponéis', 'Pon'], 'vosotros → Infinitiv -r → -d'),
      q('¡', 'Di', ' la verdad! (decir, tú)', ['Di', 'Dice', 'Dices', 'Diga'], 'decir → di (unregelmäßig)'),
      q('¡', 'Ve', ' a casa ya! (ir, tú)', ['Ve', 'Va', 'Vas', 'Id'], 'ir → ve (unregelmäßig)'),
      q('¡', 'Tomen', ' asiento, por favor! (tomar, ustedes)', ['Tomen', 'Toman', 'Tomad', 'Tome'], 'ustedes → Subjuntivo: tomen'),
      q('¡', 'Levántate', ' temprano! (levantarse, tú)', ['Levántate', 'Levanta te', 'Te levanta', 'Levántese'], 'Pronomen hängt an, Akzent: levántate'),
      q('¡', 'Bebed', ' agua! (beber, vosotros)', ['Bebed', 'Bebéis', 'Bebáis', 'Bebe'], 'vosotros → -d'),
      q('¡', 'Abra', ' el libro en la página diez! (abrir, usted)', ['Abra', 'Abre', 'Abrid', 'Abran'], 'usted → Subjuntivo: abra'),
      q('¡', 'Ten', ' paciencia! (tener, tú)', ['Ten', 'Tiene', 'Tenga', 'Tened'], 'tener → ten (unregelmäßig)'),
    ],
  },
  {
    id: 'estar-gerundio',
    icon: '⏳',
    title: 'Verlaufsform (estar + gerundio)',
    level: 'A2',
    instruction: 'Setze estar oder das Gerundium ein.',
    explanation:
      'estar + Gerundium beschreibt, was gerade passiert: Estoy comiendo. Gerundium: -ar → -ando, -er/-ir → -iendo. ' +
      'Nach Vokal wird -iendo zu -yendo (leyendo, oyendo). -ir-Verben mit Stammwechsel: e → i, o → u ' +
      '(diciendo, durmiendo). Auch mit seguir: Sigue lloviendo.',
    examples: [
      { target: 'Estoy comiendo.', de: 'Ich esse gerade.' },
      { target: 'Los niños están durmiendo.', de: 'Die Kinder schlafen gerade.' },
    ],
    items: [
      q('Ahora ', 'estoy', ' comiendo. (yo)', ['estoy', 'soy', 'estás', 'está'], 'yo → estoy'),
      q('¿Qué estás ', 'haciendo', '? (hacer)', ['haciendo', 'hacido', 'hacendo', 'hecho'], '-er → -iendo'),
      q('Los niños están ', 'jugando', ' en el parque. (jugar)', ['jugando', 'jugiendo', 'juegando', 'jugado'], '-ar → -ando'),
      q('Estamos ', 'viendo', ' la tele. (ver)', ['viendo', 'veyendo', 'visto', 'veiendo'], 'ver → viendo'),
      q('Ella está ', 'leyendo', ' un libro. (leer)', ['leyendo', 'leiendo', 'leendo', 'leído'], 'nach Vokal → -yendo'),
      q('¿Me estás ', 'escuchando', '? (escuchar)', ['escuchando', 'escuchiendo', 'escuchado', 'escucho'], '-ar → -ando'),
      q('El bebé está ', 'durmiendo', '. (dormir)', ['durmiendo', 'dormiendo', 'duermiendo', 'dormido'], 'dormir → o → u: durmiendo'),
      q('Está ', 'lloviendo', ' mucho. (llover)', ['lloviendo', 'lluviendo', 'llovando', 'llovido'], '-er → -iendo'),
      q('¿Qué me estás ', 'diciendo', '? (decir)', ['diciendo', 'deciendo', 'dicendo', 'dicho'], 'decir → e → i: diciendo'),
      q('Estoy ', 'aprendiendo', ' español. (aprender)', ['aprendiendo', 'aprendando', 'aprendido', 'aprendendo'], '-er → -iendo'),
      q('¿', 'Estáis', ' preparando la cena? (vosotros)', ['Estáis', 'Estás', 'Sois', 'Están'], 'vosotros → estáis'),
      q('Sigue ', 'viviendo', ' en Madrid. (vivir)', ['viviendo', 'vivendo', 'vivido', 'vivando'], 'seguir + Gerundium: -ir → -iendo'),
    ],
  },

  // ══════════════════════════════ B1 ══════════════════════════════
  {
    id: 'indefinido-imperfecto',
    icon: '🎬',
    title: 'Indefinido oder Imperfecto?',
    level: 'B1',
    instruction: 'Wähle die passende Vergangenheitsform.',
    explanation:
      'Indefinido: abgeschlossene, einmalige Handlungen und Ereignisse (ayer, de repente, en 2015) – die Handlung ' +
      '„im Vordergrund“. Imperfecto: Gewohnheiten, Beschreibungen, Uhrzeit, Umstände und laufende Handlungen ' +
      '– der „Hintergrund“. Mientras veía la tele, sonó el teléfono.',
    examples: [
      { target: 'Ayer fui al cine.', de: 'Gestern ging ich ins Kino. (einmalig)' },
      { target: 'De niño jugaba al fútbol.', de: 'Als Kind spielte ich Fußball. (Gewohnheit)' },
      { target: 'Mientras veía la tele, sonó el teléfono.', de: 'Während ich fernsah, klingelte das Telefon.' },
    ],
    items: [
      q('Ayer ', 'fui', ' al cine. (ir, yo)', ['fui', 'iba'], 'einmalig, gestern → indefinido'),
      q('Cuando era niño, ', 'jugaba', ' al fútbol todos los días. (jugar)', ['jugaba', 'jugué'], 'Gewohnheit → imperfecto'),
      q('Mientras ', 'veía', ' la tele, sonó el teléfono. (ver, yo)', ['veía', 'vi'], 'laufende Handlung (Hintergrund) → imperfecto'),
      q('El sábado pasado ', 'hubo', ' una fiesta. (haber)', ['hubo', 'había'], 'einmaliges Ereignis → indefinido'),
      q('', 'Eran', ' las once cuando llegué a casa. (ser)', ['Eran', 'Fueron'], 'Uhrzeit → imperfecto'),
      q('En 2015 nos ', 'mudamos', ' a Madrid. (mudarse)', ['mudamos', 'mudábamos'], 'Zeitpunkt, abgeschlossen → indefinido'),
      q('Antes ', 'vivía', ' en Hamburgo, pero ahora vivo en Berlín. (vivir, yo)', ['vivía', 'viví'], 'früherer Zustand → imperfecto'),
      q('De repente ', 'oí', ' un ruido. (oír, yo)', ['oí', 'oía'], 'de repente → indefinido'),
      q('La casa ', 'era', ' grande y tenía un jardín. (ser)', ['era', 'fue'], 'Beschreibung → imperfecto'),
      q('Ayer ', 'estudié', ' tres horas. (estudiar, yo)', ['estudié', 'estudiaba'], 'abgeschlossener Zeitraum → indefinido'),
      q('Siempre ', 'llegaba', ' tarde al colegio. (llegar, él)', ['llegaba', 'llegó'], 'siempre, Gewohnheit → imperfecto'),
      q('Cuando salí de casa, ', 'llovía', '. (llover)', ['llovía', 'llovió'], 'Umstand/Hintergrund → imperfecto'),
    ],
  },
  {
    id: 'por-para',
    icon: '↔️',
    title: 'por oder para?',
    level: 'B1',
    instruction: 'Setze por oder para ein.',
    explanation:
      'para: Ziel, Zweck (um … zu), Empfänger, Richtung, Frist, Meinung (para mí). ' +
      'por: Grund (wegen, dank), Weg/Ort (durch), Mittel (por teléfono), Preis/Tausch, Zeitraum, ' +
      'Häufigkeit (dos veces por semana), „zuliebe“.',
    examples: [
      { target: 'Este regalo es para ti.', de: 'Dieses Geschenk ist für dich. (Empfänger)' },
      { target: 'Gracias por la ayuda.', de: 'Danke für die Hilfe. (Grund)' },
    ],
    items: [
      q('Este regalo es ', 'para', ' ti.', POR_PARA, 'Empfänger → para'),
      q('Gracias ', 'por', ' la ayuda.', POR_PARA, 'Grund (Dank für) → por'),
      q('Salgo ', 'para', ' Madrid mañana.', POR_PARA, 'Richtung/Ziel → para'),
      q('Paseamos ', 'por', ' el parque.', POR_PARA, 'durch einen Ort → por'),
      q('Estudio ', 'para', ' ser médico.', POR_PARA, 'Zweck (um … zu) → para'),
      q('Te llamo ', 'por', ' teléfono.', POR_PARA, 'Mittel → por'),
      q('Pagué 20 euros ', 'por', ' el libro.', POR_PARA, 'Preis/Tausch → por'),
      q('', 'Para', ' mí, es la mejor película.', ['Para', 'Por'], 'Meinung → para mí'),
      q('Necesito el informe ', 'para', ' el lunes.', POR_PARA, 'Frist → para'),
      q('Lo hago ', 'por', ' ti. (dir zuliebe)', POR_PARA, 'zuliebe → por'),
      q('Voy al gimnasio dos veces ', 'por', ' semana.', POR_PARA, 'Häufigkeit → por'),
      q('El tren ', 'para', ' Sevilla sale a las diez.', POR_PARA, 'Richtung/Ziel → para'),
    ],
  },
  {
    id: 'condicional',
    icon: '🤔',
    title: 'Konditional (hablaría)',
    level: 'B1',
    instruction: 'Setze das Verb im condicional ein.',
    explanation:
      'Infinitiv + -ía, -ías, -ía, -íamos, -íais, -ían (hablaría, comería). Gleiche unregelmäßige Stämme wie im ' +
      'Futur: tendr-, vendr-, podr-, har-, dir-, sabr-, pondr-, saldr-. Gebraucht für Wünsche (me gustaría), ' +
      'höfliche Bitten (¿podrías …?), Ratschläge (yo que tú …) und Hypothesen.',
    examples: [
      { target: 'Me gustaría viajar a Japón.', de: 'Ich würde gern nach Japan reisen.' },
      { target: '¿Podrías cerrar la ventana?', de: 'Könntest du das Fenster schließen?' },
    ],
    items: [
      q('Me ', 'gustaría', ' viajar a Japón. (gustar)', ['gustaría', 'gustaba', 'gustará', 'gusta'], 'Wunsch → me gustaría'),
      q('¿', 'Podrías', ' cerrar la ventana? (poder, tú)', ['Podrías', 'Poderías', 'Pudiste', 'Podías'], 'höfliche Bitte, poder → podr-'),
      q('Yo en tu lugar no lo ', 'haría', '. (hacer)', ['haría', 'hacería', 'hice', 'hacía'], 'hacer → har-'),
      q('Me ', 'vendría', ' bien un café. (venir)', ['vendría', 'veniría', 'vendrá', 'venía'], 'venir → vendr-'),
      q('Con un trabajo mejor, ', 'ganaríamos', ' más dinero. (ganar, nosotros)', ['ganaríamos', 'ganaremos', 'ganábamos', 'ganamos'], 'Hypothese → -íamos'),
      q('¿Qué ', 'haríais', ' con un millón? (hacer, vosotros)', ['haríais', 'haceríais', 'haréis', 'hacíais'], 'hacer → har- + -íais'),
      q('Dijo que ', 'llamaría', ' más tarde. (llamar, él)', ['llamaría', 'llamará', 'llamaba', 'llamó'], 'Zukunft in der Vergangenheit → condicional'),
      q('¿', 'Tendría', ' usted un momento? (tener)', ['Tendría', 'Tenería', 'Tendrá', 'Tenía'], 'höflich, tener → tendr-'),
      q('Ellos ', 'deberían', ' estudiar más. (deber)', ['deberían', 'debrían', 'deberán', 'debían'], 'Ratschlag → deberían'),
      q('Yo no ', 'diría', ' eso. (decir)', ['diría', 'deciría', 'dirá', 'decía'], 'decir → dir-'),
      q('Nos ', 'encantaría', ' ir contigo. (encantar)', ['encantaría', 'encantará', 'encantaba', 'encanta'], 'Wunsch → -ía'),
      q('Sin coche, ¿cómo ', 'irías', ' al trabajo? (ir, tú)', ['irías', 'irás', 'ibas', 'fuiste'], 'Hypothese → ir + -ías'),
    ],
  },
  {
    id: 'subjuntivo',
    icon: '🌈',
    title: 'Subjuntivo presente (que hable)',
    level: 'B1',
    instruction: 'Setze das Verb im subjuntivo ein.',
    explanation:
      'Bildung: yo-Form Präsens ohne -o + vertauschte Endung: -ar → -e (hable), -er/-ir → -a (coma, tenga, haga). ' +
      'Unregelmäßig: ser (sea), ir (vaya), estar (esté), saber (sepa), haber (haya), dar (dé). ' +
      'Nach Wunsch, Bitte, Gefühl, Zweifel, Wertung + que (quiero que, espero que, es importante que), ' +
      'nach ojalá und bei cuando mit Zukunftsbezug.',
    examples: [
      { target: 'Quiero que vengas.', de: 'Ich will, dass du kommst.' },
      { target: 'Ojalá haga buen tiempo.', de: 'Hoffentlich ist schönes Wetter.' },
    ],
    items: [
      q('Quiero que ', 'vengas', ' conmigo. (venir, tú)', ['vengas', 'vienes', 'vendrás', 'venga'], 'Wunsch → subjuntivo, venir → veng-'),
      q('Espero que ', 'estéis', ' bien. (estar, vosotros)', ['estéis', 'estáis', 'estés', 'seáis'], 'Hoffnung → estar → estéis'),
      q('Es importante que ', 'bebamos', ' agua. (beber, nosotros)', ['bebamos', 'bebemos', 'bebimos', 'beban'], 'Wertung → subjuntivo, -er → -amos'),
      q('Ojalá ', 'haga', ' buen tiempo mañana. (hacer)', ['haga', 'hace', 'hará', 'hago'], 'ojalá → subjuntivo'),
      q('Te pido que no ', 'llegues', ' tarde. (llegar, tú)', ['llegues', 'llegas', 'llegaste', 'llegue'], 'Bitte → -ar → -es, g → gu'),
      q('Cuando ', 'vayas', ' a Madrid, llámame. (ir, tú)', ['vayas', 'vas', 'irás', 'vayes'], 'cuando + Zukunft → subjuntivo'),
      q('No creo que ', 'tenga', ' razón. (tener, él)', ['tenga', 'tiene', 'tendrá', 'tenía'], 'Zweifel → subjuntivo'),
      q('Mis padres quieren que ', 'estudie', ' medicina. (estudiar, yo)', ['estudie', 'estudio', 'estudia', 'estudiaré'], 'Wunsch → -ar → -e'),
      q('Es posible que ', 'llueva', ' mañana. (llover)', ['llueva', 'llueve', 'lloverá', 'llovía'], 'Möglichkeit → subjuntivo'),
      q('Busco a alguien que ', 'hable', ' alemán. (hablar)', ['hable', 'habla', 'hablará', 'hablaba'], 'unbekannte Person gesucht → subjuntivo'),
      q('Me alegro de que ', 'estés', ' aquí. (estar, tú)', ['estés', 'estás', 'eres', 'seas'], 'Gefühl → subjuntivo'),
      q('Dudo que ellos lo ', 'sepan', '. (saber)', ['sepan', 'saben', 'saban', 'sabrán'], 'Zweifel → saber → sepan'),
    ],
  },
  {
    id: 'subjuntivo-indicativo',
    icon: '🔍',
    title: 'Subjuntivo oder Indikativ?',
    level: 'B1',
    instruction: 'Wähle Indikativ oder Subjuntivo.',
    explanation:
      'Indikativ bei Tatsachen, Wissen und bejahter Meinung: creo que, pienso que, sé que, es obvio que. ' +
      'Subjuntivo bei verneinter Meinung (no creo que), Wunsch, Zweifel, Wertung (es necesario que). ' +
      'cuando: Gewohnheit → Indikativ, Zukunft → Subjuntivo.',
    examples: [
      { target: 'Creo que tienes razón.', de: 'Ich glaube, du hast recht. (Indikativ)' },
      { target: 'No creo que tengas razón.', de: 'Ich glaube nicht, dass du recht hast. (Subjuntivo)' },
    ],
    items: [
      q('Creo que ', 'tienes', ' razón. (tener, tú)', ['tienes', 'tengas'], 'bejahte Meinung → Indikativ'),
      q('No creo que ', 'tengas', ' razón. (tener, tú)', ['tengas', 'tienes'], 'verneinte Meinung → Subjuntivo'),
      q('Pienso que ', 'es', ' una buena idea. (ser)', ['es', 'sea'], 'bejahte Meinung → Indikativ'),
      q('No pienso que ', 'sea', ' una buena idea. (ser)', ['sea', 'es'], 'verneinte Meinung → Subjuntivo'),
      q('Sé que ', 'estás', ' cansado. (estar, tú)', ['estás', 'estés'], 'Wissen → Indikativ'),
      q('Es obvio que ', 'está', ' cansado. (estar, él)', ['está', 'esté'], 'Tatsache → Indikativ'),
      q('Es necesario que ', 'duermas', ' más. (dormir, tú)', ['duermas', 'duermes'], 'Wertung → Subjuntivo'),
      q('Cuando ', 'tengo', ' tiempo, leo. (tener, yo)', ['tengo', 'tenga'], 'cuando + Gewohnheit → Indikativ'),
      q('Cuando ', 'tenga', ' tiempo, leeré más. (tener, yo)', ['tenga', 'tengo'], 'cuando + Zukunft → Subjuntivo'),
      q('Aunque ', 'llueve', ', salimos. (llover – es regnet gerade)', ['llueve', 'llueva'], 'aunque + Tatsache → Indikativ'),
      q('Me parece que ', 'es', ' tarde. (ser)', ['es', 'sea'], 'bejahte Meinung → Indikativ'),
      q('No me parece que ', 'sea', ' tarde. (ser)', ['sea', 'es'], 'verneinte Meinung → Subjuntivo'),
    ],
  },
  {
    id: 'pronombres-combinados',
    icon: '🧩',
    title: 'Doppelte Pronomen (me lo, se lo)',
    level: 'B1',
    instruction: 'Setze die passenden Pronomen ein.',
    explanation:
      'Reihenfolge: indirekt vor direkt – me lo, te la, nos los, os las. le/les wird vor lo/la/los/las zu se: ' +
      'Se lo doy (a Ana). Beim Infinitiv und bejahten Imperativ hängen beide hinten an, oft mit Akzent: ' +
      'dámelo, explicármelo.',
    examples: [
      { target: '¿Me das el libro? – Sí, te lo doy.', de: 'Gibst du mir das Buch? – Ja, ich gebe es dir.' },
      { target: 'Le doy el regalo a Ana. → Se lo doy.', de: 'Ich gebe Ana das Geschenk. → Ich gebe es ihr.' },
    ],
    items: [
      q('¿Me das el libro? – Sí, ', 'te', ' lo doy.', ['te', 'se', 'le', 'me'], 'dir → te'),
      q('¿Le das el regalo a Ana? – Sí, ', 'se', ' lo doy.', ['se', 'le', 'la', 'lo'], 'le vor lo → se'),
      q('¿Nos explicas el problema? – Sí, ', 'os', ' lo explico.', ['os', 'nos', 'se', 'les'], 'euch → os'),
      q('¿Me prestas tu bici? – Sí, te ', 'la', ' presto.', ['la', 'lo', 'le', 'las'], 'la bici → la'),
      q('¿Les enviaste las cartas a tus padres? – Sí, se ', 'las', ' envié.', ['las', 'los', 'les', 'la'], 'las cartas → las'),
      q('¿Me dices la verdad? – Sí, ', 'te', ' la digo.', ['te', 'me', 'se', 'le'], 'dir → te'),
      q('¿Le compraste los zapatos a tu hijo? – Sí, ', 'se', ' los compré.', ['se', 'le', 'les', 'lo'], 'le vor los → se'),
      q('¡', 'Dámelo', '! (dar, tú + me + lo)', ['Dámelo', 'Dalome', 'Dame lo', 'Melo da'], 'Imperativ: Pronomen hinten, mit Akzent'),
      q('¿Quién te dio las flores? – Me ', 'las', ' dio Juan.', ['las', 'los', 'la', 'les'], 'las flores → las'),
      q('¿Puedes explicár', 'melo', '? (me + lo)', ['melo', 'lome', 'selo', 'telo'], 'indirekt vor direkt: me + lo'),
      q('¿Nos traes los platos? – Ahora ', 'os', ' los traigo.', ['os', 'nos', 'se', 'les'], 'euch → os'),
      q('A mi madre le regalé un libro. → ', 'Se lo', ' regalé.', ['Se lo', 'Le lo', 'Lo le', 'Se le'], 'le + lo → se lo'),
    ],
  },
  {
    id: 'relativos',
    icon: '🔗',
    title: 'Relativpronomen (que, quien, donde …)',
    level: 'B1',
    instruction: 'Setze das passende Relativpronomen ein.',
    explanation:
      'que: das häufigste (Personen und Sachen). Nach Präposition bei Personen: quien / el que / la que. ' +
      'donde: Ort. lo que: „das, was“ / „was“. cuyo/a/os/as: dessen, deren – richtet sich nach dem ' +
      'folgenden Nomen.',
    examples: [
      { target: 'El libro que leo es bueno.', de: 'Das Buch, das ich lese, ist gut.' },
      { target: 'No entiendo lo que dices.', de: 'Ich verstehe nicht, was du sagst.' },
    ],
    items: [
      q('El libro ', 'que', ' estoy leyendo es muy bueno.', ['que', 'quien', 'donde', 'cual'], 'Sache → que'),
      q('La ciudad ', 'donde', ' nací es pequeña.', ['donde', 'que', 'cuando', 'quien'], 'Ort → donde', ['en la que', 'en que']),
      q('La chica con ', 'quien', ' hablé es mi vecina.', ['quien', 'que', 'cual', 'donde'], 'Person nach Präposition → quien', ['la que', 'la cual']),
      q('No entiendo ', 'lo que', ' dices.', ['lo que', 'que', 'qué', 'el que'], 'das, was → lo que'),
      q('Ese es el chico ', 'cuyo', ' padre es médico.', ['cuyo', 'cuya', 'que', 'quien'], 'dessen + el padre → cuyo'),
      q('La mujer ', 'que', ' vive enfrente es profesora.', ['que', 'quien', 'donde', 'lo que'], 'Subjekt → que'),
      q('Es la razón por la ', 'que', ' vine.', ['que', 'quien', 'donde', 'lo que'], 'por la que = weshalb', ['cual']),
      q('', 'Lo que', ' más me gusta es la playa.', ['Lo que', 'Que', 'Qué', 'Cual'], 'Was mir … → lo que'),
      q('Los amigos ', 'que', ' invité no vinieron.', ['que', 'cuyos', 'donde', 'lo que'], 'Objekt → que', ['a quienes', 'a los que']),
      q('La casa ', 'cuyas', ' ventanas son azules es mía.', ['cuyas', 'cuyos', 'cuya', 'que'], 'deren + las ventanas → cuyas'),
      q('El día ', 'que', ' nos conocimos llovía.', ['que', 'donde', 'quien', 'lo que'], 'Zeitpunkt → que', ['en que', 'cuando', 'en el que']),
      q('Hay gente ', 'a la que', ' no le gusta el fútbol.', ['a la que', 'que', 'la que', 'donde'], 'gustar braucht a … → a la que', ['a quien']),
    ],
  },
  {
    id: 'si-condicional',
    icon: '🔀',
    title: 'Bedingungssätze (si …)',
    level: 'B1',
    instruction: 'Setze das Verb in der passenden Form ein.',
    explanation:
      'Reale Bedingung: si + Präsens → Präsens, Futur oder Imperativ (Si tengo tiempo, iré). ' +
      'Irreale Bedingung (Gegenwart): si + subjuntivo imperfecto (tuviera, fuera, estudiaras) → condicional ' +
      '(compraría). Nach si steht nie Futur oder Konditional.',
    examples: [
      { target: 'Si tengo tiempo, iré al cine.', de: 'Wenn ich Zeit habe, gehe ich ins Kino.' },
      { target: 'Si tuviera dinero, compraría una casa.', de: 'Wenn ich Geld hätte, würde ich ein Haus kaufen.' },
    ],
    items: [
      q('Si ', 'tengo', ' tiempo, iré al cine. (tener, yo)', ['tengo', 'tenga', 'tendré', 'tuviera'], 'real → si + Präsens'),
      q('Si llueve, nos ', 'quedaremos', ' en casa. (quedarse, nosotros)', ['quedaremos', 'quedaríamos', 'quedemos', 'quedáramos'], 'real → Futur (oder Präsens)', ['quedamos']),
      q('Si ', 'tuviera', ' dinero, compraría una casa. (tener, yo)', ['tuviera', 'tengo', 'tendría', 'tenga'], 'irreal → si + subjuntivo imperfecto', ['tuviese']),
      q('Si fuera rico, ', 'viajaría', ' por el mundo. (viajar, yo)', ['viajaría', 'viajaré', 'viajara', 'viajo'], 'irreal → condicional'),
      q('Si ', 'estás', ' cansado, descansa. (estar, tú)', ['estás', 'estés', 'estarás', 'estuvieras'], 'real + Imperativ → si + Präsens'),
      q('Si ', 'fuera', ' tú, no lo haría. (ser, yo)', ['fuera', 'era', 'sería', 'sea'], 'irreal → fuera', ['fuese']),
      q('Si me llamas, te ', 'ayudaré', '. (ayudar, yo)', ['ayudaré', 'ayudaría', 'ayude', 'ayudara'], 'real → Futur (oder Präsens)', ['ayudo']),
      q('Si ', 'estudiaras', ' más, aprobarías. (estudiar, tú)', ['estudiaras', 'estudias', 'estudiarías', 'estudies'], 'irreal → -aras', ['estudiases']),
      q('Si ella ', 'estuviera', ' aquí, estaría contenta. (estar)', ['estuviera', 'está', 'estaría', 'esté'], 'irreal → estuviera', ['estuviese']),
      q('Si hace buen tiempo, ', 'iremos', ' a la playa. (ir, nosotros)', ['iremos', 'iríamos', 'vayamos', 'fuéramos'], 'real → Futur (oder Präsens)', ['vamos']),
      q('¿Qué ', 'harías', ' si ganaras la lotería? (hacer, tú)', ['harías', 'harás', 'hicieras', 'haces'], 'irreal → condicional'),
      q('Si no ', 'trabajaras', ' tanto, dormirías mejor. (trabajar, tú)', ['trabajaras', 'trabajas', 'trabajarías', 'trabajes'], 'irreal → -aras', ['trabajases']),
    ],
  },
  {
    id: 'pluscuamperfecto',
    icon: '⏮️',
    title: 'Plusquamperfekt (había hablado)',
    level: 'B1',
    instruction: 'Setze das Verb im pluscuamperfecto ein.',
    explanation:
      'haber im Imperfecto (había, habías, había, habíamos, habíais, habían) + Partizip. Beschreibt, was vor ' +
      'einem anderen Zeitpunkt in der Vergangenheit schon geschehen war: Cuando llegué, la película ya había ' +
      'empezado. Unregelmäßige Partizipien wie im Perfekt (hecho, dicho, visto, roto, vuelto).',
    examples: [
      { target: 'Cuando llegué, ya habían salido.', de: 'Als ich ankam, waren sie schon gegangen.' },
      { target: 'Nunca había visto el mar.', de: 'Ich hatte nie das Meer gesehen.' },
    ],
    items: [
      q('Cuando llegué, la película ya ', 'había empezado', '. (empezar)', ['había empezado', 'ha empezado', 'empezó', 'habría empezado'], 'Vorvergangenheit → había + -ado'),
      q('Antes de 2019 nunca ', 'había estado', ' en Asia. (estar, yo)', ['había estado', 'he estado', 'estaba', 'hube estado'], 'yo → había'),
      q('Ellos ya ', 'habían salido', ' cuando llamamos. (salir)', ['habían salido', 'han salido', 'salían', 'habían salidos'], 'ellos → habían'),
      q('No sabía que tú ', 'habías vivido', ' en Italia. (vivir)', ['habías vivido', 'has vivido', 'vivías', 'había vivido'], 'tú → habías'),
      q('Nosotros ya ', 'habíamos hecho', ' la cena. (hacer)', ['habíamos hecho', 'habíamos hacido', 'hemos hecho', 'habíamos hecha'], 'hacer → hecho'),
      q('Me dijo que ', 'había leído', ' el libro. (leer, él)', ['había leído', 'ha leído', 'leía', 'habría leído'], 'leer → leído'),
      q('¿', 'Habíais', ' visto el mar antes del viaje? (vosotros)', ['Habíais', 'Habéis', 'Habíamos', 'Hubisteis'], 'vosotros → habíais'),
      q('Olvidé que ya te lo ', 'había dicho', '. (decir, yo)', ['había dicho', 'he dicho', 'había decido', 'dije'], 'decir → dicho'),
      q('Cuando volví, alguien ', 'había roto', ' la ventana. (romper)', ['había roto', 'había rompido', 'ha roto', 'rompía'], 'romper → roto'),
      q('Ya ', 'habían vuelto', ' antes de las diez. (volver, ellas)', ['habían vuelto', 'habían volvido', 'han vuelto', 'volvieron'], 'volver → vuelto'),
      q('Pensé que ', 'habías aprobado', ' el examen. (aprobar, tú)', ['habías aprobado', 'has aprobado', 'aprobaste', 'habías aprobada'], 'tú → habías + -ado'),
      q('Cuando llegamos, la tienda ya ', 'había cerrado', '. (cerrar)', ['había cerrado', 'ha cerrado', 'cerró', 'había cierrado'], 'Vorvergangenheit → había cerrado'),
    ],
  },
  {
    id: 'se-impersonal',
    icon: '👤',
    title: 'Unpersönliches se (se habla, se venden)',
    level: 'B1',
    instruction: 'Setze das Verb in der passenden Form ein.',
    explanation:
      'se + 3. Person drückt „man“ oder ein Passiv aus. Steht ein Nomen im Plural dabei, steht auch das Verb im ' +
      'Plural (se venden bicicletas); sonst Singular (se habla español, se come bien, se dice que …). ' +
      'Mit Infinitiv bleibt das Verb im Singular: No se puede fumar.',
    examples: [
      { target: 'Aquí se habla español.', de: 'Hier spricht man Spanisch.' },
      { target: 'Se venden bicicletas.', de: 'Fahrräder zu verkaufen.' },
    ],
    items: [
      q('Aquí se ', 'habla', ' español. (hablar)', ['habla', 'hablan', 'hablas', 'hablo'], 'Singular-Nomen → Singular'),
      q('En esta tienda se ', 'venden', ' bicicletas. (vender)', ['venden', 'vende', 'vendan', 'venda'], 'Plural-Nomen → Plural'),
      q('¿Cómo se ', 'dice', ' „Tisch“ en español? (decir)', ['dice', 'dicen', 'decía', 'diga'], 'man sagt → se dice'),
      q('Se ', 'alquila', ' piso. (alquilar)', ['alquila', 'alquilan', 'alquile', 'alquilas'], 'un piso (Singular) → Singular'),
      q('Se ', 'buscan', ' camareros. (buscar)', ['buscan', 'busca', 'busquen', 'buscas'], 'camareros (Plural) → Plural'),
      q('En España se ', 'cena', ' tarde. (cenar)', ['cena', 'cenan', 'cenas', 'cene'], 'ohne Nomen → Singular'),
      q('No se ', 'puede', ' fumar aquí. (poder)', ['puede', 'pueden', 'puedes', 'pode'], 'mit Infinitiv → Singular'),
      q('En verano se ', 'ven', ' muchos turistas. (ver)', ['ven', 've', 'vean', 'veen'], 'muchos turistas (Plural) → Plural'),
      q('¿Dónde se ', 'compran', ' los billetes? (comprar)', ['compran', 'compra', 'compren', 'compras'], 'los billetes (Plural) → Plural'),
      q('Se ', 'come', ' bien en este restaurante. (comer)', ['come', 'comen', 'coma', 'comes'], 'ohne Nomen → Singular'),
      q('Se ', 'dice', ' que va a llover. (decir)', ['dice', 'dicen', 'diga', 'decía'], 'se dice que … = man sagt, dass …'),
      q('Aquí se ', 'hacen', ' las cosas con calma. (hacer)', ['hacen', 'hace', 'hagan', 'haces'], 'las cosas (Plural) → Plural'),
    ],
  },
];
