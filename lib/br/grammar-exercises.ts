// ─── Brazilian Portuguese grammar exercises ─────────────────────────────────────
// Hand-written cloze sets covering A1 (this file currently only; A2/B1 are added
// later by other agents, same format), in the same shape as the Italian, Spanish,
// French and European-Portuguese ones: exactly one blank per item, `options` for
// multiple choice (must contain the answer), German hints, rules and examples.
// Standard spoken Brazilian Portuguese throughout — "você" (no "tu"), ônibus,
// trem, celular, geladeira, banheiro, café da manhã, BR spelling (dezesseis,
// recepção, contato). `lessonId` links to lib/br/grammar-lessons.ts.
//
// "você" conjugates exactly like "ele/ela" (3rd person) in every tense, including
// the imperative — see lib/br/verb-catalog.ts, which this content is written to
// match: BR's affirmative imperative for "você" is subjunctive-derived (fale!,
// coma!), not the indicative-based "tu"-imperative of European Portuguese
// (fala!, come!). The 'imperativo' topic below spells this out explicitly.

import type { IconName } from '../icon-names';
export type GrammarLevel = 'A1' | 'A2' | 'B1';

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
  icon: IconName;
  title: string;
  level: GrammarLevel;
  lessonId?: string;
  instruction: string;
  explanation: string;
  examples: { target: string; de: string }[];
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

export const GRAMMAR_TOPICS: GrammarTopic[] = [
  // ══════════════════════════════ A1 ══════════════════════════════
  {
    id: 'artigos',
    icon: 'letters',
    title: 'Artigos (o, a, um, uma)',
    level: 'A1',
    lessonId: 'artikel',
    instruction: 'Setze den richtigen Artikel, die richtige Verschmelzung oder die richtige Pluralform ein.',
    explanation:
      'Bestimmte Artikel: o, a, os, as. Unbestimmte: um, uma, uns, umas. Mit den Präpositionen de, em und a ' +
      'verschmelzen sie: de + o = do, em + a = na, a + a = à. Der Plural wird meist mit -s gebildet; Wörter auf ' +
      '-ão bilden ihn am häufigsten mit -ões (a estação → as estações).',
    examples: [
      { target: 'Moro no Rio de Janeiro.', de: 'Ich wohne in Rio de Janeiro.' },
      { target: 'O celular do meu pai quebrou.', de: 'Das Handy meines Vaters ist kaputt gegangen.' },
      { target: 'Vou pegar o ônibus e depois vou à praia.', de: 'Ich nehme den Bus und gehe dann zum Strand.' },
    ],
    items: [
      q('Eu moro ', 'no', ' Rio de Janeiro.', ['no', 'na', 'nos', 'do'], 'em + o (o Rio de Janeiro hat Artikel)'),
      q('A bolsa ', 'da', ' minha irmã é nova.', ['da', 'do', 'de', 'na'], 'de + a (a minha irmã)'),
      q('No fim de semana vamos ', 'à', ' praia.', ['à', 'ao', 'a', 'na'], 'a + a (a praia)'),
      q('O celular ', 'do', ' meu pai quebrou.', ['do', 'da', 'de', 'no'], 'de + o (o meu pai)'),
      q('Onde ficam ', 'os', ' banheiros?', ['os', 'as', 'o', 'a'], 'bestimmt, maskulin Plural (o banheiro)'),
      q('Tenho ', 'uma', ' irmã e dois irmãos.', ['uma', 'um', 'a', 'umas'], 'unbestimmt, feminin Singular'),
      q('Preciso pegar ', 'um', ' ônibus até o centro.', ['um', 'uma', 'o', 'uns'], 'unbestimmt, maskulin Singular'),
      q('Em São Paulo há muitas ', 'estações', ' de trem.', ['estações', 'estaçãos', 'estaçães', 'estação'], 'Plural von a estação (-ão → -ões, am häufigsten)'),
      q('Vou ', 'ao', ' banheiro rapidinho.', ['ao', 'à', 'no', 'a'], 'a + o (o banheiro)'),
      q('As chaves estão ', 'na', ' mesa da cozinha.', ['na', 'no', 'nas', 'da'], 'em + a (a mesa)'),
    ],
  },
  {
    id: 'ser-estar-ter',
    icon: 'scale',
    title: 'Ser, Estar e Ter',
    level: 'A1',
    lessonId: 'ser-estar-ter',
    instruction: 'Setze die richtige Form von ser, estar oder ter ein.',
    explanation:
      'ser steht für Identität und dauerhafte Eigenschaften (Herkunft, Beruf, Charakter), estar für Zustände ' +
      'und den Ort von Personen und Dingen. ter (haben) steht auch beim Alter, bei Hunger, Durst usw. Wichtig: ' +
      '„você" ist grammatisch eine 3. Person und nimmt überall genau die Form von „ele/ela" — é, está, tem, ' +
      'nicht „és/estás/tens" wie europäisches Portugiesisch mit „tu".',
    examples: [
      { target: 'Sou brasileiro, de Salvador.', de: 'Ich bin Brasilianer, aus Salvador.' },
      { target: 'Você está bem?', de: 'Geht es dir gut?' },
      { target: 'Tenho vinte anos e tenho fome.', de: 'Ich bin zwanzig und habe Hunger.' },
    ],
    items: [
      q('Eu ', 'sou', ' brasileiro, de Salvador.', ['sou', 'estou', 'tenho', 'é'], 'ser, eu (Herkunft)'),
      q('Você ', 'é', ' muito simpático.', ['é', 'está', 'tem', 'são'], 'ser, você = Form von ele/ela'),
      q('Hoje eu ', 'estou', ' muito cansado.', ['estou', 'sou', 'tenho', 'está'], 'estar, eu (Zustand)'),
      q('Você ', 'está', ' bem hoje?', ['está', 'é', 'tem', 'estão'], 'estar, você = Form von ele/ela'),
      q('A Ana ', 'tem', ' vinte e cinco anos.', ['tem', 'é', 'está', 'têm'], 'ter, ela (Alter)'),
      q('Você ', 'tem', ' um celular novo?', ['tem', 'tens', 'tenho', 'têm'], 'ter, você = Form von ele/ela (nicht „tens")'),
      q('Nós ', 'somos', ' de São Paulo.', ['somos', 'estamos', 'temos', 'são'], 'ser, nós'),
      q('Onde ', 'está', ' o meu celular?', ['está', 'é', 'tem', 'estão'], 'estar, Ort eines Gegenstands'),
      q('Vocês ', 'são', ' muito legais.', ['são', 'estão', 'têm', 'somos'], 'ser, vocês'),
      q('Nós ', 'temos', ' muita fome.', ['temos', 'estamos', 'somos', 'têm'], 'ter, nós (Hunger)'),
    ],
  },
  {
    id: 'presente',
    icon: 'dot',
    title: 'Presente do indicativo',
    level: 'A1',
    lessonId: 'praesens',
    instruction: 'Setze das Verb im Präsens ein.',
    explanation:
      'Regelmäßige Verben: -ar → falo, fala, falamos, falam · -er → como, come, comemos, comem · -ir → parto, ' +
      'parte, partimos, partem. „você" teilt sich die Form mit „ele/ela" (fala, nicht falas); „vocês" teilt sich ' +
      'die Form mit „eles/elas". Häufige unregelmäßige Verben: fazer (faço, faz, …) und querer (quero, quer, …).',
    examples: [
      { target: 'Eu falo português e inglês.', de: 'Ich spreche Portugiesisch und Englisch.' },
      { target: 'Você fala espanhol também?', de: 'Sprichst du auch Spanisch?' },
      { target: 'O que você faz no fim de semana?', de: 'Was machst du am Wochenende?' },
    ],
    items: [
      q('Eu ', 'falo', ' português e inglês.', ['falo', 'fala', 'falas', 'falamos'], 'falar, eu'),
      q('Você ', 'fala', ' espanhol também?', ['fala', 'falas', 'falo', 'falam'], 'falar, você = Form von ele/ela'),
      q('Nós ', 'comemos', ' peixe no almoço.', ['comemos', 'comem', 'come', 'comes'], 'comer, nós'),
      q('Eles ', 'bebem', ' café todas as manhãs.', ['bebem', 'bebe', 'bebemos', 'bebes'], 'beber, eles'),
      q('A Maria ', 'abre', ' a janela.', ['abre', 'abro', 'abrem', 'abres'], 'abrir, ela'),
      q('Vocês ', 'partem', ' amanhã de manhã?', ['partem', 'parte', 'partimos', 'partes'], 'partir, vocês'),
      q('Você ', 'mora', ' perto daqui?', ['mora', 'moras', 'moro', 'moram'], 'morar, você = Form von ele/ela'),
      q('Eu ', 'faço', ' o jantar hoje.', ['faço', 'faz', 'fazes', 'fazo'], 'fazer, eu (unregelmäßig)'),
      q('O que você ', 'quer', ' beber?', ['quer', 'queres', 'quero', 'querem'], 'querer, você = Form von ele/ela'),
      q('Meu pai ', 'trabalha', ' num banco.', ['trabalha', 'trabalho', 'trabalham', 'trabalhas'], 'trabalhar, ele'),
    ],
  },
  {
    id: 'possessivos',
    icon: 'bag',
    title: 'Possessivos (meu, minha, seu …)',
    level: 'A1',
    lessonId: 'possessiv',
    instruction: 'Setze das passende Possessivpronomen ein — im brasilianischen Alltag normalerweise ohne Artikel.',
    explanation:
      'Das Possessivpronomen richtet sich nach dem Besitz, nicht nach dem Besitzer: meu carro, minha casa, meus ' +
      'livros, minhas chaves. Anders als europäisches Portugiesisch (o meu carro, mit Artikel) lässt die ' +
      'gesprochene brasilianische Alltagssprache den Artikel meistens weg — meu carro statt o meu carro; die ' +
      'Form mit Artikel ist ebenfalls korrekt, wirkt aber förmlicher und wird seltener gesprochen. Für „sein/ihr" ' +
      'sagt man oft dele / dela nach dem Nomen.',
    examples: [
      { target: 'Esta é minha casa.', de: 'Das ist mein Haus.' },
      { target: 'Onde estão suas chaves?', de: 'Wo sind deine Schlüssel?' },
      { target: 'A casa dele é grande.', de: 'Sein Haus ist groß.' },
    ],
    items: [
      q('Esta é ', 'minha', ' casa.', ['minha', 'meu', 'minhas', 'meus'], 'eu, a casa (feminin Singular)'),
      q('', 'Meu', ' irmão mora em Salvador.', ['Meu', 'Minha', 'Meus', 'Minhas'], 'eu, o irmão (maskulin Singular)'),
      q('Onde estão ', 'suas', ' chaves?', ['suas', 'seus', 'sua', 'seu'], 'você, as chaves (feminin Plural)'),
      q('Gosto muito do ', 'seu', ' carro.', ['seu', 'sua', 'seus', 'suas'], 'você, o carro (maskulin Singular)'),
      q('', 'Nossos', ' amigos chegam hoje à noite.', ['Nossos', 'Nossas', 'Nosso', 'Nossa'], 'nós, os amigos (maskulin Plural)'),
      q('', 'Nossa', ' professora é muito paciente.', ['Nossa', 'Nosso', 'Nossas', 'Nossos'], 'nós, a professora (feminin Singular)'),
      q('', 'Minhas', ' filhas estudam em São Paulo.', ['Minhas', 'Meus', 'Minha', 'Meu'], 'eu, as filhas (feminin Plural)'),
      q('É o carro do Pedro? É, é o carro ', 'dele', '.', ['dele', 'dela', 'deles', 'seu'], '„sein" (von ihm), klarer als seu'),
      q('A Ana mora com a irmã ', 'dela', ' em Fortaleza.', ['dela', 'dele', 'delas', 'sua'], '„ihre" (von ihr)'),
      q('Qual é ', 'seu', ' número de celular?', ['seu', 'sua', 'seus', 'suas'], 'você, o número (ohne Artikel, Alltagssprache)'),
    ],
  },
  {
    id: 'perguntas-negacao',
    icon: 'question',
    title: 'Perguntas e negação',
    level: 'A1',
    lessonId: 'fragen',
    instruction: 'Setze das richtige Fragewort oder die Verneinung ein.',
    explanation:
      'Fragewörter: o que (was), quem (wer), onde (wo), quando (wann), como (wie), por que (warum, getrennt und ' +
      'mit Akzent, am Satzanfang), quanto/quantos/quanta/quantas (wie viel/e). Verneinung: não steht direkt vor ' +
      'dem Verb.',
    examples: [
      { target: 'O que você está fazendo?', de: 'Was machst du gerade?' },
      { target: 'Por que você está triste?', de: 'Warum bist du traurig?' },
      { target: 'Eu não entendo essa pergunta.', de: 'Ich verstehe diese Frage nicht.' },
    ],
    items: [
      q('', 'O que', ' você está fazendo?', ['O que', 'Quem', 'Onde', 'Quando'], '„was" — nach einer Sache fragen'),
      q('', 'Quem', ' é aquela mulher?', ['Quem', 'O que', 'Onde', 'Como'], '„wer" — nach einer Person fragen'),
      q('', 'Onde', ' fica o banheiro?', ['Onde', 'Quando', 'Como', 'Quanto'], '„wo"'),
      q('', 'Quando', ' você chega em casa?', ['Quando', 'Onde', 'Quem', 'Por que'], '„wann"'),
      q('', 'Como', ' você se chama?', ['Como', 'Quem', 'Onde', 'O que'], '„wie"'),
      q('', 'Por que', ' você está triste?', ['Por que', 'Por quê', 'Porque', 'Quando'], '„warum", getrennt + Akzent, am Satzanfang (porque, zusammen, steht in der Antwort)'),
      q('', 'Quanto', ' custa esse celular?', ['Quanto', 'Quantos', 'Quanta', 'Quantas'], 'feste Wendung „quanto custa" — unveränderlich'),
      q('Eu ', 'não', ' entendo essa pergunta.', ['não', 'nunca', 'nada', 'sem'], 'Verneinung direkt vor dem Verb'),
      q('Nós ', 'não', ' temos tempo hoje.', ['não', 'nunca', 'nem', 'sem'], 'Verneinung direkt vor dem Verb'),
      q('', 'Quantos', ' irmãos você tem?', ['Quantos', 'Quanto', 'Quanta', 'Quantas'], '„wie viele", maskulin Plural (irmãos)'),
    ],
  },
  {
    id: 'adjetivos',
    icon: 'palette',
    title: 'Adjetivos',
    level: 'A1',
    lessonId: 'adjektive',
    instruction: 'Setze das Adjektiv in der richtigen Form ein.',
    explanation:
      'Adjektive stehen meistens NACH dem Nomen und passen sich in Genus und Numerus an: novo/nova/novos/novas. ' +
      'Adjektive auf -e sind für Maskulinum und Femininum gleich (grande, inteligente); Adjektive auf -dor bilden ' +
      'das Femininum mit -dora; Adjektive auf -il bilden den Plural mit -eis (difícil → difíceis).',
    examples: [
      { target: 'O carro é novo.', de: 'Das Auto ist neu.' },
      { target: 'Ela é muito inteligente.', de: 'Sie ist sehr intelligent.' },
      { target: 'São questões muito difíceis.', de: 'Das sind sehr schwierige Fragen.' },
    ],
    items: [
      q('Ela é muito ', 'inteligente', '.', ['inteligente', 'inteligentes', 'inteligento', 'inteligenta'], 'Adjektiv auf -e: gleich für m./f.'),
      q('O carro é ', 'novo', '.', ['novo', 'nova', 'novos', 'novas'], 'maskulin Singular'),
      q('A casa é ', 'grande', '.', ['grande', 'grandes', 'grando', 'granda'], 'Adjektiv auf -e: gleich für m./f.'),
      q('Os meninos são ', 'altos', '.', ['altos', 'altas', 'alto', 'alta'], 'maskulin Plural'),
      q('As meninas são ', 'baixas', '.', ['baixas', 'baixos', 'baixa', 'baixo'], 'feminin Plural'),
      q('Ele é um homem ', 'trabalhador', '.', ['trabalhador', 'trabalhadora', 'trabalhadores', 'trabalhadoras'], 'maskulin Singular, Adjektiv auf -dor'),
      q('Ela é uma mulher muito ', 'trabalhadora', '.', ['trabalhadora', 'trabalhador', 'trabalhadoras', 'trabalhadores'], 'feminin Singular: -dor → -dora'),
      q('Esse é um problema ', 'difícil', '.', ['difícil', 'difíceis', 'difícila', 'dificulto'], 'Adjektiv auf -il, Singular'),
      q('São questões muito ', 'difíceis', '.', ['difíceis', 'difícil', 'dificultosas', 'difícila'], 'Plural von -il → -eis'),
      q('Comprei uma bolsa ', 'vermelha', '.', ['vermelha', 'vermelho', 'vermelhas', 'vermelhos'], 'feminin Singular, Adjektiv steht nach dem Nomen'),
    ],
  },
  {
    id: 'preterito-perfeito',
    icon: 'hourglass',
    title: 'Pretérito perfeito simples',
    level: 'A1',
    lessonId: 'preterito-perfeito',
    instruction: 'Setze das Verb im pretérito perfeito ein.',
    explanation:
      'Das pretérito perfeito ist die normale Erzählzeit für abgeschlossene Handlungen in der Vergangenheit: ' +
      'falei, comeu, partiram. Im brasilianischen Portugiesisch wird die nós-Form von -ar-Verben OHNE Akzent ' +
      'geschrieben (moramos), anders als im europäischen Portugiesisch (morámos), weil Gegenwart und ' +
      'Vergangenheit hier aus dem Kontext unterschieden werden.',
    examples: [
      { target: 'Ontem eu falei com minha mãe.', de: 'Gestern habe ich mit meiner Mutter gesprochen.' },
      { target: 'Nós moramos em Recife por dois anos.', de: 'Wir haben zwei Jahre in Recife gewohnt.' },
      { target: 'Você foi ao cinema no sábado?', de: 'Warst du am Samstag im Kino?' },
    ],
    items: [
      q('Ontem eu ', 'falei', ' com minha mãe.', ['falei', 'falou', 'falo', 'fala'], 'falar, eu, pretérito'),
      q('Você ', 'comeu', ' alguma coisa hoje de manhã?', ['comeu', 'comi', 'come', 'comia'], 'comer, você = Form von ele/ela'),
      q('Nós ', 'moramos', ' em Recife por dois anos.', ['moramos', 'morámos', 'moramo', 'morava'], 'morar, nós, pretérito (BR: ohne Akzent)'),
      q('Eles ', 'partiram', ' ontem à noite.', ['partiram', 'partem', 'partiu', 'partia'], 'partir, eles'),
      q('Ela ', 'chegou', ' tarde ao trabalho.', ['chegou', 'chego', 'chega', 'chegava'], 'chegar, ela'),
      q('Eu ', 'fiz', ' o almoço sozinho.', ['fiz', 'faz', 'fazia', 'fazi'], 'fazer, eu (unregelmäßig)'),
      q('Você ', 'foi', ' ao cinema no sábado?', ['foi', 'fui', 'vai', 'ia'], 'ir, você = Form von ele/ela (unregelmäßig)'),
      q('Nós ', 'tivemos', ' um problema com o carro.', ['tivemos', 'temos', 'tínhamos', 'teve'], 'ter, nós (unregelmäßig)'),
      q('Elas ', 'viajaram', ' para a Bahia no mês passado.', ['viajaram', 'viajam', 'viajavam', 'viajou'], 'viajar, elas'),
      q('Eu ', 'bebi', ' muita água depois do treino.', ['bebi', 'bebeu', 'bebe', 'bebia'], 'beber, eu'),
    ],
  },
  {
    id: 'imperfeito',
    icon: 'clock',
    title: 'Pretérito imperfeito',
    level: 'A1',
    lessonId: 'imperfeito',
    instruction: 'Setze das Verb im pretérito imperfeito ein.',
    explanation:
      'Das imperfeito beschreibt Gewohnheiten und Hintergrundzustände in der Vergangenheit: morava, comia, ' +
      'partia. Im Gegensatz zum pretérito perfeito (eine abgeschlossene Handlung) beschreibt das imperfeito, wie ' +
      'etwas regelmäßig war oder gerade im Gange war, als etwas anderes passierte.',
    examples: [
      { target: 'Quando eu era criança, morava em Belo Horizonte.', de: 'Als ich Kind war, wohnte ich in Belo Horizonte.' },
      { target: 'Nós íamos à praia todo verão.', de: 'Wir fuhren jeden Sommer an den Strand.' },
      { target: 'Chovia muito quando eu saí de casa.', de: 'Es regnete stark, als ich aus dem Haus ging.' },
    ],
    items: [
      q('Quando eu era criança, ', 'morava', ' em Belo Horizonte.', ['morava', 'morei', 'moro', 'morar'], 'morar, eu, imperfeito (Gewohnheit)'),
      q('Antigamente, você ', 'comia', ' carne todos os dias.', ['comia', 'comeu', 'come', 'comias'], 'comer, você = Form von ele/ela'),
      q('Nós ', 'íamos', ' à praia todo verão quando éramos pequenos.', ['íamos', 'fomos', 'vamos', 'ia'], 'ir, nós, imperfeito (unregelmäßig)'),
      q('Meus avós ', 'falavam', ' muito de política.', ['falavam', 'falaram', 'falam', 'falava'], 'falar, eles, imperfeito'),
      q('Ontem à tarde ', 'chovia', ' muito quando eu saí de casa.', ['chovia', 'choveu', 'chove', 'choveria'], 'Hintergrundhandlung: es regnete gerade'),
      q('Quando ela era pequena, ', 'tinha', ' medo de cachorro.', ['tinha', 'teve', 'tem', 'terá'], 'ter, ela, imperfeito (unregelmäßig)'),
      q('Nós ', 'éramos', ' muito amigos na escola.', ['éramos', 'fomos', 'somos', 'seremos'], 'ser, nós, imperfeito (unregelmäßig)'),
      q('Enquanto eu ', 'estudava', ', minha irmã assistia TV.', ['estudava', 'estudei', 'estudo', 'estudaria'], 'imperfeito: parallele Handlung'),
      q('Você ', 'trabalhava', ' naquela empresa há muito tempo.', ['trabalhava', 'trabalhou', 'trabalha', 'trabalhasse'], 'trabalhar, você = Form von ele/ela'),
      q('Todo domingo, meus pais ', 'visitavam', ' meus avós.', ['visitavam', 'visitaram', 'visitam', 'visitava'], 'visitar, eles, Gewohnheit'),
    ],
  },
  {
    id: 'futuro',
    icon: 'wand',
    title: 'Futuro: ir + infinitivo e futuro simples',
    level: 'A1',
    lessonId: 'futuro',
    instruction: 'Setze die Zukunftsform ein — meistens ir + Infinitiv, manchmal das futuro simples.',
    explanation:
      'Im gesprochenen brasilianischen Alltag wird die Zukunft fast immer mit ir + Infinitiv gebildet: vou falar, ' +
      'você vai comer, nós vamos viajar — das ist noch gebräuchlicher als im Deutschen „ich werde …". Das futuro ' +
      'simples (falarei, comerá, viverão) existiert auch, wirkt aber etwas formeller/schriftsprachlicher.',
    examples: [
      { target: 'Amanhã eu vou viajar para o Rio de Janeiro.', de: 'Morgen fahre ich nach Rio de Janeiro.' },
      { target: 'Nós vamos comer pizza no jantar.', de: 'Wir werden zum Abendessen Pizza essen.' },
      { target: 'No futuro, as pessoas viverão mais de cem anos.', de: 'In Zukunft werden die Menschen über hundert Jahre alt werden.' },
    ],
    items: [
      q('Amanhã eu ', 'vou viajar', ' para o Rio de Janeiro.', ['vou viajar', 'viajarei', 'vou viajo', 'viajou'], 'ir + Infinitiv, eu — die alltägliche Zukunft'),
      q('Você ', 'vai estudar', ' para a prova hoje à noite?', ['vai estudar', 'vai estuda', 'estudará', 'estudou'], 'ir + Infinitiv, você = Form von ele/ela'),
      q('Nós ', 'vamos comer', ' pizza no jantar.', ['vamos comer', 'vamos comemos', 'comeremos', 'comemos'], 'ir + Infinitiv, nós'),
      q('Eles ', 'vão chegar', ' mais tarde.', ['vão chegar', 'vão chega', 'chegarão', 'chegaram'], 'ir + Infinitiv, eles'),
      q('Eu ', 'vou ligar', ' para você mais tarde.', ['vou ligar', 'ligarei', 'vou ligo', 'ligou'], 'ir + Infinitiv, eu'),
      q('No futuro, as pessoas ', 'viverão', ' mais de cem anos.', ['viverão', 'vivem', 'viveram', 'vão viver'], 'viver, eles, futuro simples (eher schriftsprachlich)'),
      q('Eu ', 'farei', ' o possível para ajudar.', ['farei', 'faço', 'fiz', 'vou fazer'], 'fazer, futuro simples, eu (unregelmäßiger Stamm far-)'),
      q('Nós ', 'teremos', ' uma reunião importante na próxima semana.', ['teremos', 'temos', 'tivemos', 'vamos ter'], 'ter, futuro simples, nós'),
      q('Você ', 'dirá', ' a verdade um dia.', ['dirá', 'diz', 'disse', 'vai dizer'], 'dizer, futuro simples, você = Form von ele/ela (unregelmäßiger Stamm dir-)'),
      q('Essa decisão ', 'mudará', ' tudo.', ['mudará', 'muda', 'mudou', 'vai mudar'], 'mudar, futuro simples, ela'),
    ],
  },
  {
    id: 'imperativo',
    icon: 'megaphone',
    title: 'Imperativo',
    level: 'A1',
    lessonId: 'imperativ',
    instruction: 'Setze das Verb im Imperativ für „você" ein.',
    explanation:
      'Achtung, typisch brasilianisch: Der bejahte Imperativ für „você" kommt NICHT von der Indikativ-Form ' +
      '(fala, come, parte, wie beim „tu" im europäischen Portugiesisch), sondern vom Konjunktiv — genau die ' +
      'Form, die in „que você fale" steht, nur ohne „que você": Fale!, Coma!, Abra! Der verneinte Imperativ ' +
      'benutzt dieselbe Form: Não fale!, Não coma!',
    examples: [
      { target: 'Fale mais alto, por favor!', de: 'Sprich bitte lauter!' },
      { target: 'Não coma isso, está estragado!', de: 'Iss das nicht, es ist verdorben!' },
      { target: 'Vamos embora agora!', de: 'Lasst uns jetzt gehen!' },
    ],
    items: [
      q('', 'Fale', ' mais alto, por favor!', ['Fale', 'Fala', 'Falas', 'Falai'], 'Imperativ você: Konjunktiv-Form, nicht „fala"'),
      q('', 'Coma', ' toda a comida, por favor.', ['Coma', 'Come', 'Comes', 'Comei'], 'Imperativ você, comer'),
      q('', 'Abra', ' a porta, por favor.', ['Abra', 'Abre', 'Abres', 'Abri'], 'Imperativ você, abrir'),
      q('Não ', 'fale', ' assim comigo!', ['fale', 'fala', 'falas', 'falai'], 'verneinter Imperativ você: gleiche Form wie bejaht'),
      q('Não ', 'coma', ' isso, está estragado!', ['coma', 'come', 'comes', 'comei'], 'verneinter Imperativ você'),
      q('', 'Escute', ' com atenção, por favor!', ['Escute', 'Escuta', 'Escutas', 'Escutai'], 'Imperativ você, escutar'),
      q('', 'Vamos', ' embora agora!', ['Vamos', 'Vou', 'Vai', 'Iremos'], 'Imperativ nós: „lasst uns gehen"'),
      q('', 'Façam', ' silêncio, pessoal!', ['Façam', 'Fazem', 'Faz', 'Fazei'], 'Imperativ vocês, fazer (unregelmäßig, von „que vocês façam")'),
      q('', 'Durma', ' bem esta noite!', ['Durma', 'Dorme', 'Dormes', 'Dormi'], 'Imperativ você, dormir (o→u-Stammwechsel, von „durmo")'),
      q('', 'Tenha', ' um bom dia!', ['Tenha', 'Tem', 'Tens', 'Tende'], 'Imperativ você, ter (unregelmäßig, von „que você tenha")'),
    ],
  },
  {
    id: 'objeto-pronomes',
    icon: 'link',
    title: 'Pronomes de objeto',
    level: 'A1',
    lessonId: 'objektpronomen',
    instruction: 'Setze das richtige Objektpronomen (direkt oder indirekt) vor dem Verb ein.',
    explanation:
      'Direkte Objektpronomen: me, te, o/a, nos, os/as. Indirekte: me, te, lhe, nos, lhes. Im gesprochenen ' +
      'brasilianischen Portugiesisch steht das Pronomen fast immer VOR dem Verb (Eu te amo, Ela me ajudou) — ' +
      'anders als im europäischen Portugiesisch, das es oft nach dem Verb anhängt. Hinweis: Im sehr lockeren ' +
      'Alltags-BR hört man statt „Eu a vi" oft „Eu vi ela" (Subjektpronomen statt Objektpronomen) — das ist ' +
      'informell/nicht standardsprachlich; hier wird immer die Standardform geübt.',
    examples: [
      { target: 'Eu te amo.', de: 'Ich liebe dich.' },
      { target: 'Vou lhe dar um presente.', de: 'Ich werde ihm/ihr ein Geschenk geben.' },
      { target: 'Você pode me ajudar com isso?', de: 'Kannst du mir dabei helfen?' },
    ],
    items: [
      q('Eu ', 'te', ' amo.', ['te', 'lhe', 'o', 'a'], 'direktes Objekt „dich", vor dem Verb'),
      q('Ela ', 'me', ' ajudou muito ontem.', ['me', 'te', 'nos', 'lhe'], 'direktes Objekt „mich"'),
      q('Nós ', 'o', ' vimos no shopping.', ['o', 'lhe', 'a', 'os'], 'direktes Objekt „ihn" (maskulin)'),
      q('Eu ', 'a', ' conheço muito bem.', ['a', 'o', 'lhe', 'as'], 'direktes Objekt „sie" (feminin)'),
      q('Ele sempre ', 'me', ' liga de noite.', ['me', 'te', 'lhe', 'nos'], 'direktes Objekt „mich", vor dem Verb (typisch BR)'),
      q('Vou ', 'lhe', ' dar um presente no seu aniversário.', ['lhe', 'o', 'a', 'me'], 'indirektes Objekt „ihm/ihr" (dar a ele/ela)'),
      q('Eles sempre ', 'nos', ' convidam para as festas.', ['nos', 'os', 'lhes', 'vos'], 'direktes Objekt „uns"'),
      q('Eu ', 'lhes', ' expliquei a situação toda.', ['lhes', 'os', 'les', 'nos'], 'indirektes Objekt Plural „ihnen" (eher schriftsprachlich)'),
      q('Você pode ', 'me', ' ajudar com isso?', ['me', 'eu', 'mim', 'te'], 'direktes Objekt vor dem Infinitiv, typisch BR'),
      q('Ela ', 'o', ' chamou várias vezes, mas ele não respondeu.', ['o', 'lhe', 'a', 'lo'], 'direktes Objekt „ihn"'),
    ],
  },

  // ══════════════════════════════ A2 ══════════════════════════════
  {
    id: 'comparativos',
    icon: 'ruler',
    title: 'Comparativos e superlativos',
    level: 'A2',
    lessonId: 'comparativos',
    instruction: 'Setze die richtige Vergleichsform ein.',
    explanation:
      'Vergleich der Überlegenheit/Unterlegenheit: mais/menos + Adjektiv + do que. Gleichheit: tão + Adjektiv + ' +
      'quanto (brasilianisches Portugiesisch sagt „quanto", nicht „como" wie europäisches Portugiesisch). ' +
      'Superlativ: o/a + mais/menos + Adjektiv + de. Vier Adjektive haben unregelmäßige Vergleichsformen: ' +
      'bom → melhor, mau/má → pior, grande → maior, pequeno → menor (nicht „mais bom", „mais grande" usw.).',
    examples: [
      { target: 'O Rio de Janeiro é mais bonito do que Brasília.', de: 'Rio de Janeiro ist schöner als Brasília.' },
      { target: 'Ela é tão alta quanto o irmão.', de: 'Sie ist genauso groß wie ihr Bruder.' },
      { target: 'São Paulo é a maior cidade do Brasil.', de: 'São Paulo ist die größte Stadt Brasiliens.' },
    ],
    items: [
      q('O Rio de Janeiro é ', 'mais', ' bonito do que Brasília, na minha opinião.', ['mais', 'menos', 'tão', 'muito'], 'mais + Adjektiv + do que = Überlegenheit'),
      q('Este celular é ', 'menos', ' caro do que aquele.', ['menos', 'mais', 'tão', 'muito'], 'menos + Adjektiv + do que = Unterlegenheit'),
      q('Ela é ', 'tão', ' alta quanto o irmão.', ['tão', 'mais', 'menos', 'muito'], 'tão + Adjektiv + quanto = Gleichheit (BR: quanto, nicht como)'),
      q('Esse é o restaurante ', 'mais', ' caro da cidade.', ['mais', 'menos', 'tão', 'muito'], 'o/a + mais + Adjektiv + de = Superlativ'),
      q('Meu irmão é ', 'mais', ' velho do que eu.', ['mais', 'menos', 'tão', 'muito'], 'Überlegenheit'),
      q('Este livro é ', 'melhor', ' do que o outro.', ['melhor', 'mais bom', 'pior', 'mais mau'], 'bom → melhor (unregelmäßig), nicht „mais bom"'),
      q('A prova foi ', 'pior', ' do que eu esperava.', ['pior', 'mais má', 'melhor', 'mais boa'], 'mau/má → pior (unregelmäßig)'),
      q('São Paulo é ', 'maior', ' do que Belo Horizonte.', ['maior', 'mais grande', 'menor', 'mais pequena'], 'grande → maior (unregelmäßig)'),
      q('Meu quarto é ', 'menor', ' do que o seu.', ['menor', 'mais pequeno', 'maior', 'mais grande'], 'pequeno → menor (unregelmäßig)'),
    ],
  },
  {
    id: 'preposicoes',
    icon: 'compass',
    title: 'Preposições (a, de, em, com, para, por)',
    level: 'A2',
    lessonId: 'preposicoes',
    instruction: 'Setze die richtige Präposition oder Verschmelzung ein.',
    explanation:
      'em = Ort/Zeit (em São Paulo, em 2020), de = Herkunft/Besitz/Material (de Salvador, copo de vidro), com = ' +
      'Begleitung/Mittel (com minha família), para = Zweck/Empfänger/Frist (presente para você, para sexta-feira), ' +
      'por = Grund/Tausch/„durch" (por causa da chuva, troquei por uma moto, pela praia). Mit den Artikeln ' +
      'verschmelzen sie: de+o/a = do/da, em+o/a = no/na, a+o/a = ao/à, por+o/a = pelo/pela.',
    examples: [
      { target: 'Moro em São Paulo há cinco anos.', de: 'Ich wohne seit fünf Jahren in São Paulo.' },
      { target: 'Este presente é para você.', de: 'Dieses Geschenk ist für dich.' },
      { target: 'Troquei meu carro antigo por uma moto.', de: 'Ich habe mein altes Auto gegen ein Motorrad getauscht.' },
    ],
    items: [
      q('Moro ', 'em', ' São Paulo há cinco anos.', ['em', 'a', 'de', 'para'], 'em = Ort'),
      q('Este presente é ', 'para', ' você.', ['para', 'por', 'a', 'de'], 'para = Empfänger'),
      q('Ele é ', 'de', ' Salvador, na Bahia.', ['de', 'em', 'a', 'com'], 'de = Herkunft'),
      q('Vou viajar ', 'com', ' minha família nas férias.', ['com', 'para', 'por', 'de'], 'com = Begleitung'),
      q('Troquei meu celular antigo ', 'por', ' um novo.', ['por', 'para', 'de', 'com'], 'por = Tausch'),
      q('Passamos ', 'pela', ' praia antes de ir para casa.', ['pela', 'para a', 'na', 'da'], 'por + a = pela, „durch/vorbei an"'),
      q('Esse copo é ', 'de', ' vidro.', ['de', 'em', 'com', 'para'], 'de = Material'),
      q('O trem sai ', 'às', ' oito horas.', ['às', 'as', 'para as', 'em as'], 'a + as = às (Uhrzeit)'),
      q('Ela mora ', 'ao', ' lado da estação.', ['ao', 'no', 'do', 'pelo'], 'a + o = ao, feste Wendung „ao lado de"'),
    ],
  },
  {
    id: 'estar-gerundio',
    icon: 'steps',
    title: 'Estar + gerúndio',
    level: 'A2',
    lessonId: 'estar-gerundio',
    instruction: 'Setze das Verb im Gerúndio nach estar ein.',
    explanation:
      'Das Gerúndio wird gebildet mit -ar → -ando, -er → -endo, -ir → -indo (falando, comendo, partindo). estar + ' +
      'Gerúndio ist im brasilianischen Portugiesisch die ganz normale Verlaufsform — genau wie das englische ' +
      '„-ing": estou fazendo, ele está comendo. Das ist ein klarer Unterschied zu europäischem Portugiesisch, das ' +
      'hier meistens estar a + Infinitivo sagt (estou a fazer); das BR-Standard dieses Kurses ist immer estar + ' +
      'Gerúndio.',
    examples: [
      { target: 'Estou fazendo o jantar agora.', de: 'Ich mache gerade das Abendessen.' },
      { target: 'Ele está comendo uma pizza enorme.', de: 'Er isst gerade eine riesige Pizza.' },
      { target: 'O que você está fazendo?', de: 'Was machst du gerade?' },
    ],
    items: [
      q('Eu ', 'estou', ' fazendo o jantar agora.', ['estou', 'está', 'estamos', 'são'], 'estar, eu + Gerúndio'),
      q('Ele está ', 'comendo', ' uma pizza enorme.', ['comendo', 'comer', 'come', 'comeu'], 'comer → comendo (-er → -endo)'),
      q('Nós estamos ', 'estudando', ' português há seis meses.', ['estudando', 'estudar', 'estuda', 'estudado'], 'estudar → estudando (-ar → -ando)'),
      q('O que você está ', 'fazendo', ' agora?', ['fazendo', 'fazer', 'faz', 'feito'], 'fazer → fazendo'),
      q('Eles estão ', 'trabalhando', ' até tarde hoje.', ['trabalhando', 'trabalhar', 'trabalham', 'trabalhado'], 'trabalhar → trabalhando'),
      q('Ela está ', 'partindo', ' para o aeroporto agora.', ['partindo', 'partir', 'parte', 'partiu'], 'partir → partindo (-ir → -indo)'),
      q('Eu estou ', 'lendo', ' um livro muito interessante.', ['lendo', 'ler', 'lê', 'leu'], 'ler → lendo'),
      q('Estou ', 'esperando', ' o ônibus há vinte minutos.', ['esperando', 'esperar', 'espero', 'esperou'], 'esperar → esperando'),
    ],
  },
  {
    id: 'demonstrativos',
    icon: 'pointer',
    title: 'Demonstrativos (este, esse, aquele)',
    level: 'A2',
    lessonId: 'demonstrativos',
    instruction: 'Setze das richtige Demonstrativpronomen ein.',
    explanation:
      'este/esta/estes/estas: nahe bei der sprechenden Person. esse/essa/esses/essas: nahe bei der angesprochenen ' +
      'Person. aquele/aquela/aqueles/aquelas: weit von beiden entfernt. Die neutralen Formen isto/isso/aquilo ' +
      'ersetzen ein ganzes Nomen oder einen Sachverhalt. Im lockeren brasilianischen Alltag verschwimmen este und ' +
      'esse oft — viele benutzen „esse" für beides —, hier wird aber die saubere Dreiteilung geübt.',
    examples: [
      { target: 'Este livro aqui na minha mão é novo.', de: 'Dieses Buch hier in meiner Hand ist neu.' },
      { target: 'Essa camisa que você está vestindo é bonita.', de: 'Das Hemd, das du trägst, ist schön.' },
      { target: 'Aquele prédio ali, bem longe, é o mais alto da cidade.', de: 'Jenes Gebäude dort drüben ist das höchste der Stadt.' },
    ],
    items: [
      q('', 'Este', ' livro aqui na minha mão é novo.', ['Este', 'Esse', 'Aquele', 'Isso'], 'nahe der sprechenden Person'),
      q('', 'Essa', ' camisa que você está vestindo é bonita.', ['Essa', 'Esta', 'Aquela', 'Isso'], 'nahe der angesprochenen Person'),
      q('', 'Aquele', ' prédio ali, bem longe, é o mais alto da cidade.', ['Aquele', 'Esse', 'Este', 'Aquilo'], 'weit von beiden entfernt'),
      q('O que é ', 'isso', ' que você tem na mão?', ['isso', 'isto', 'aquilo', 'essa'], 'neutral, nahe der angesprochenen Person'),
      q('', 'Isto', ' aqui é muito interessante!', ['Isto', 'Isso', 'Aquilo', 'Esta'], 'neutral, nahe der sprechenden Person'),
      q('', 'Aquelas', ' montanhas no horizonte são lindas.', ['Aquelas', 'Essas', 'Estas', 'Aquilo'], 'weit entfernt, feminin Plural'),
      q('Você pode me dar ', 'essa', ' caneta que está na sua mesa?', ['essa', 'esta', 'aquela', 'isso'], 'nahe der angesprochenen Person'),
      q('', 'Estas', ' flores aqui são para você.', ['Estas', 'Essas', 'Aquelas', 'Isto'], 'nahe der sprechenden Person, feminin Plural'),
    ],
  },
  {
    id: 'tempo-ha-desde',
    icon: 'timer',
    title: 'Há, desde e durante',
    level: 'A2',
    lessonId: 'tempo-ha-desde',
    instruction: 'Setze há, desde oder durante (ggf. mit desde que) ein.',
    explanation:
      'há hat zwei Funktionen: mit einer abgeschlossenen Handlung heißt es „vor" (Cheguei há dois anos), mit dem ' +
      'Präsens und einer andauernden Handlung heißt es „seit X Zeit" (Moro aqui há dois anos = wohne seit zwei ' +
      'Jahren hier). há steht auch für „es gibt" (Há um restaurante bom aqui). desde markiert den Startpunkt ' +
      '(„seit") — desde 2015, desde que + Satz. durante bedeutet „während/für die Dauer von" einer begrenzten ' +
      'Zeitspanne: durante três semanas, durante a viagem.',
    examples: [
      { target: 'Cheguei ao Brasil há dois anos.', de: 'Ich bin vor zwei Jahren in Brasilien angekommen.' },
      { target: 'Moro em São Paulo desde 2015.', de: 'Ich wohne seit 2015 in São Paulo.' },
      { target: 'Viajamos durante três semanas pelo nordeste.', de: 'Wir sind drei Wochen lang durch den Nordosten gereist.' },
    ],
    items: [
      q('Cheguei ao Brasil ', 'há', ' dois anos.', ['há', 'desde', 'durante', 'em'], 'há + Zeitspanne = „vor" (abgeschlossene Handlung)'),
      q('', 'Há', ' um restaurante muito bom perto daqui.', ['Há', 'Desde', 'Durante', 'Está'], 'há = „es gibt" (existencial)'),
      q('Moro em São Paulo ', 'há', ' dois anos e ainda moro aqui.', ['há', 'desde', 'durante', 'em'], 'há + Zeitspanne mit Präsens = „seit X" (andauernd)'),
      q('Moro em São Paulo ', 'desde', ' 2015.', ['desde', 'há', 'durante', 'em'], 'desde + Zeitpunkt = „seit" (Startpunkt)'),
      q('Estudo português ', 'desde que', ' cheguei ao Brasil.', ['desde que', 'há que', 'durante que', 'por que'], 'desde que + Satz'),
      q('Viajamos ', 'durante', ' três semanas pelo nordeste.', ['durante', 'desde', 'há', 'por'], 'durante + Zeitspanne = „während/für die Dauer von"'),
      q('', 'Durante', ' a viagem, visitamos várias cidades históricas.', ['Durante', 'Desde', 'Há', 'Em'], 'durante + Substantiv'),
      q('Ela trabalha nessa empresa ', 'há', ' dez anos.', ['há', 'desde', 'durante', 'em'], 'há + Zeitspanne mit Präsens = andauernd bis jetzt'),
    ],
  },

  // ══════════════════════════════ B1 ══════════════════════════════
  {
    id: 'condicional',
    icon: 'chat',
    title: 'Futuro do pretérito (condicional)',
    level: 'B1',
    lessonId: 'condicional',
    instruction: 'Setze das Verb im condicional (futuro do pretérito) ein.',
    explanation:
      'Bildung: Infinitiv + ia/ia/ia/íamos/iam/iam (falaria, comeria, partiria); „você" nimmt wie immer die Form ' +
      'von „ele/ela". Das condicional wird vor allem für höfliche Bitten (Poderia me ajudar?), Wünsche (Eu ' +
      'gostaria de…) und Hypothesen benutzt. Dieselben drei Verben, die im futuro simples einen eigenen Stamm ' +
      'haben, behalten ihn auch hier: fazer → faria, dizer → diria, trazer → traria.',
    examples: [
      { target: 'Eu gostaria de um café, por favor.', de: 'Ich möchte gerne einen Kaffee, bitte.' },
      { target: 'Você poderia me ajudar com isso?', de: 'Könntest du mir dabei helfen?' },
      { target: 'Se eu tivesse mais dinheiro, eu viajaria mais.', de: 'Wenn ich mehr Geld hätte, würde ich mehr reisen.' },
    ],
    items: [
      q('Eu ', 'gostaria', ' de um café, por favor.', ['gostaria', 'gosto', 'gostei', 'gostava'], 'gostar, condicional, eu — höfliche Bitte/Wunsch'),
      q('Você ', 'poderia', ' me ajudar com isso?', ['poderia', 'pode', 'podia', 'poderá'], 'poder, condicional, você = Form von ele/ela'),
      q('Nós ', 'iríamos', ' à festa, mas estamos muito cansados.', ['iríamos', 'vamos', 'fomos', 'íamos'], 'ir, condicional, nós (unregelmäßig: ir-)'),
      q('Se eu tivesse mais dinheiro, eu ', 'viajaria', ' o mundo todo.', ['viajaria', 'viajo', 'viajei', 'viajava'], 'viajar, condicional, eu — Hypothese'),
      q('Ela disse que ', 'falaria', ' com o chefe sobre o problema.', ['falaria', 'fala', 'falou', 'falava'], 'falar, condicional, ela'),
      q('Eu ', 'faria', ' qualquer coisa por você.', ['faria', 'farei', 'faço', 'fiz'], 'fazer, condicional, eu (unregelmäßiger Stamm far-, wie im futuro simples)'),
      q('Você me ', 'diria', ' a verdade?', ['diria', 'dirá', 'diz', 'disse'], 'dizer, condicional, você = Form von ele/ela (Stamm dir-)'),
      q('Nós ', 'teríamos', ' mais tempo se não trabalhássemos tanto.', ['teríamos', 'temos', 'tivemos', 'teremos'], 'ter, condicional, nós (unregelmäßiger Stamm ter-)'),
      q('', 'Poderia', ' me dar uma informação, por favor?', ['Poderia', 'Pode', 'Podia', 'Poderá'], 'poder, condicional — höfliche Frage an einen Fremden'),
    ],
  },
  {
    id: 'mais-que-perfeito',
    icon: 'back',
    title: 'Mais-que-perfeito composto',
    level: 'B1',
    lessonId: 'mais-que-perfeito',
    instruction: 'Setze das Verb im mais-que-perfeito composto (tinha + Partizip) ein.',
    explanation:
      'Das mais-que-perfeito composto beschreibt eine Handlung, die schon abgeschlossen war, bevor eine andere ' +
      'Vergangenheitshandlung passierte: tinha falado, tinha comido, tinha partido. Es wird mit tinha/tinha/' +
      'tínhamos/tinham + Partizip gebildet — das ist die Form, die man im Alltag benutzt. Eine einfache (synthetische) ' +
      'Form (falara, comera, partira) existiert ebenfalls, ist aber selten und gehört zur gehobenen Schriftsprache.',
    examples: [
      { target: 'Quando eu cheguei, ele já tinha saído.', de: 'Als ich ankam, war er schon gegangen.' },
      { target: 'Nós já tínhamos comido quando ela chegou.', de: 'Wir hatten schon gegessen, als sie ankam.' },
      { target: 'Eu nunca tinha visto um lugar tão bonito.', de: 'Ich hatte noch nie einen so schönen Ort gesehen.' },
    ],
    items: [
      q('Quando eu cheguei, ele já ', 'tinha saído', '.', ['tinha saído', 'saiu', 'saía', 'tem saído'], 'tinha + Partizip = mais-que-perfeito'),
      q('Nós já ', 'tínhamos comido', ' quando ela chegou.', ['tínhamos comido', 'comemos', 'comíamos', 'temos comido'], 'tínhamos + Partizip, nós'),
      q('Eu nunca ', 'tinha visto', ' um lugar tão bonito antes daquela viagem.', ['tinha visto', 'vi', 'via', 'tenho visto'], 'tinha + Partizip (ver → visto, unregelmäßig)'),
      q('Eles já ', 'tinham feito', ' as malas quando o táxi chegou.', ['tinham feito', 'fizeram', 'faziam', 'têm feito'], 'tinham + Partizip (fazer → feito, unregelmäßig)'),
      q('Você já ', 'tinha falado', ' com ela antes da reunião?', ['tinha falado', 'falou', 'falava', 'tem falado'], 'tinha + Partizip, você = Form von ele/ela'),
      q('A loja já ', 'tinha fechado', ' quando chegamos.', ['tinha fechado', 'fechou', 'fechava', 'tem fechado'], 'tinha + Partizip'),
      q('Eu ', 'tinha estudado', ' muito, mas ainda estava nervoso com a prova.', ['tinha estudado', 'estudei', 'estudava', 'tenho estudado'], 'tinha + Partizip'),
      q('Nós ', 'tínhamos reservado', ' o hotel com bastante antecedência.', ['tínhamos reservado', 'reservamos', 'reservávamos', 'temos reservado'], 'tínhamos + Partizip, nós'),
    ],
  },
  {
    id: 'voz-passiva',
    icon: 'refresh',
    title: 'Voz passiva',
    level: 'B1',
    lessonId: 'voz-passiva',
    instruction: 'Setze das Verb im Passiv (ser + Partizip) oder in der informellen Alternative ein.',
    explanation:
      'Das Passiv wird mit ser + Partizip gebildet; das Partizip stimmt in Genus und Numerus mit dem Subjekt ' +
      'überein: o livro foi escrito, as casas foram construídas. Aktiv: Machado de Assis escreveu o livro. Im ' +
      'informellen brasilianischen Alltag ersetzt man das Passiv oft durch „se" (Fala-se português) oder „a ' +
      'gente" + aktivem Verb (A gente faz muito churrasco aqui) — weniger formell, aber sehr verbreitet.',
    examples: [
      { target: 'O livro foi escrito por um autor famoso.', de: 'Das Buch wurde von einem berühmten Autor geschrieben.' },
      { target: 'As casas foram construídas em 2010.', de: 'Die Häuser wurden 2010 gebaut.' },
      { target: 'Fala-se muito português no Brasil.', de: 'In Brasilien wird viel Portugiesisch gesprochen.' },
    ],
    items: [
      q('O livro ', 'foi escrito', ' por um autor famoso.', ['foi escrito', 'foi escrita', 'escreveu', 'foi escritos'], 'ser (pretérito) + Partizip, maskulin Singular (o livro)'),
      q('As casas ', 'foram construídas', ' em 2010.', ['foram construídas', 'foram construído', 'construíram', 'foi construída'], 'ser (Plural) + Partizip, feminin Plural (as casas)'),
      q('Esse quadro ', 'foi pintado', ' por um artista muito conhecido.', ['foi pintado', 'foi pintada', 'pintou', 'foram pintados'], 'ser + Partizip, maskulin Singular'),
      q('A carta ', 'foi escrita', ' há muitos anos.', ['foi escrita', 'foi escrito', 'escreveu', 'foram escritas'], 'ser + Partizip, feminin Singular'),
      q('Esses problemas ', 'serão resolvidos', ' em breve.', ['serão resolvidos', 'será resolvido', 'resolverão', 'são resolvido'], 'ser (futuro) + Partizip, maskulin Plural'),
      q('', 'Fala-se', ' muito português no Brasil.', ['Fala-se', 'Se fala', 'É falado', 'Falam'], 'Alternative mit „se" statt Passiv (sehr verbreitet)'),
      q('No fim de semana, ', 'a gente faz', ' muito churrasco aqui.', ['a gente faz', 'é feito', 'foi feito', 'se faria'], '„a gente" + aktives Verb = informelle Alternative zum Passiv'),
      q('Essa música ', 'foi composta', ' por um compositor brasileiro muito famoso.', ['foi composta', 'foi composto', 'compôs', 'foram compostas'], 'ser + Partizip, feminin Singular (compor → composto/composta, unregelmäßig)'),
    ],
  },
  {
    id: 'discurso-indireto',
    icon: 'speech',
    title: 'Discurso indireto',
    level: 'B1',
    lessonId: 'discurso-indireto',
    instruction: 'Setze das Verb in der korrekten Zeitform der indirekten Rede ein.',
    explanation:
      'Bei der indirekten Rede verschiebt sich die Zeit: Präsens → imperfeito (Estou cansado → disse que estava ' +
      'cansado), ir + Infinitiv im Präsens → ia + Infinitiv (Vou viajar → disse que ia viajar), pretérito ' +
      'perfeito → mais-que-perfeito (Comi tudo → disse que tinha comido tudo). Dieselbe Verschiebung gilt auch in ' +
      'indirekten Fragen (Onde você mora? → perguntou onde eu morava).',
    examples: [
      { target: 'Ele disse que estava cansado.', de: 'Er sagte, er sei müde (wörtlich: war müde).' },
      { target: 'Ela disse que ia viajar no dia seguinte.', de: 'Sie sagte, sie werde am nächsten Tag reisen.' },
      { target: 'Ele disse que já tinha comido tudo.', de: 'Er sagte, er habe schon alles gegessen.' },
    ],
    items: [
      q('Ele disse: "Estou cansado." → Ele disse que ', 'estava', ' cansado.', ['estava', 'está', 'esteve', 'seria'], 'Präsens → imperfeito in der indirekten Rede'),
      q('Ela disse: "Vou viajar amanhã." → Ela disse que ', 'ia', ' viajar no dia seguinte.', ['ia', 'vai', 'foi', 'iria'], 'ir (Präsens) → ia (imperfeito) + Infinitiv'),
      q('Ele disse: "Comi tudo." → Ele disse que ', 'tinha comido', ' tudo.', ['tinha comido', 'comeu', 'comia', 'tem comido'], 'pretérito perfeito → mais-que-perfeito'),
      q('Ela disse: "Eu quero ajudar." → Ela disse que ', 'queria', ' ajudar.', ['queria', 'quer', 'quis', 'quereria'], 'Präsens → imperfeito'),
      q('Eles disseram: "Estamos com fome." → Eles disseram que ', 'estavam', ' com fome.', ['estavam', 'estão', 'estiveram', 'seriam'], 'Präsens Plural → imperfeito Plural'),
      q('Ele perguntou: "Onde você mora?" → Ele perguntou onde eu ', 'morava', '.', ['morava', 'moro', 'morei', 'moraria'], 'Präsens → imperfeito, auch in indirekten Fragen'),
      q('Ela disse: "Vou ligar para você." → Ela disse que ', 'ia ligar', ' para mim.', ['ia ligar', 'vai ligar', 'ligou', 'ligaria'], 'ir + Infinitiv (Präsens) → ia + Infinitiv (imperfeito)'),
      q('Ele disse: "Já terminei o trabalho." → Ele disse que já ', 'tinha terminado', ' o trabalho.', ['tinha terminado', 'terminou', 'terminava', 'tem terminado'], 'pretérito perfeito → mais-que-perfeito'),
    ],
  },
  {
    id: 'oracoes-condicionais',
    icon: 'shuffle',
    title: 'Orações condicionais com se',
    level: 'B1',
    lessonId: 'oracoes-condicionais',
    instruction: 'Setze das Verb in der richtigen Form des Bedingungssatzes ein.',
    explanation:
      'Reale/allgemeine Bedingung: se + presente do indicativo → presente/futuro (Se chove muito, as ruas ficam ' +
      'alagadas). Hypothetische/irreale Bedingung: se + imperfeito do subjuntivo → condicional (Se eu tivesse ' +
      'mais dinheiro, eu viajaria mais). Das imperfeito do subjuntivo wird regelmäßig mit -asse/-esse/-isse ' +
      'gebildet (falasse, comesse, partisse); wichtige Unregelmäßige: fosse (ser/ir), tivesse (ter), estivesse ' +
      '(estar), pudesse (poder), soubesse (saber). Eine eigene Lektion vertieft das später.',
    examples: [
      { target: 'Se chove muito, as ruas ficam alagadas.', de: 'Wenn es stark regnet, stehen die Straßen unter Wasser.' },
      { target: 'Se eu tivesse mais dinheiro, eu viajaria pelo mundo.', de: 'Wenn ich mehr Geld hätte, würde ich um die Welt reisen.' },
      { target: 'Se ela soubesse a verdade, ficaria muito triste.', de: 'Wenn sie die Wahrheit wüsste, wäre sie sehr traurig.' },
    ],
    items: [
      q('Se ', 'chove', ' muito, as ruas ficam alagadas.', ['chove', 'chovesse', 'choveu', 'choveria'], 'reale/allgemeine Bedingung: se + presente'),
      q('Se eu ', 'tenho', ' tempo livre, eu vou à praia.', ['tenho', 'tivesse', 'tive', 'teria'], 'reale Bedingung: se + presente'),
      q('Se eu ', 'tivesse', ' mais dinheiro, eu viajaria pelo mundo.', ['tivesse', 'tenho', 'tive', 'terei'], 'hypothetisch: se + imperfeito do subjuntivo'),
      q('Se ela ', 'soubesse', ' a verdade, ficaria muito triste.', ['soubesse', 'sabe', 'sabia', 'saberia'], 'saber, imperfeito do subjuntivo (unregelmäßig)'),
      q('Se nós ', 'falássemos', ' mais português, aprenderíamos mais rápido.', ['falássemos', 'falamos', 'falávamos', 'falaríamos'], 'falar, imperfeito do subjuntivo, nós (-ar → -ássemos)'),
      q('Se você ', 'fosse', ' mais paciente, as coisas seriam mais fáceis.', ['fosse', 'é', 'era', 'seria'], 'ser, imperfeito do subjuntivo (unregelmäßig)'),
      q('Se eles ', 'estivessem', ' aqui, eles poderiam nos ajudar.', ['estivessem', 'estão', 'estavam', 'estariam'], 'estar, imperfeito do subjuntivo (unregelmäßig)'),
      q('Se eu ', 'pudesse', ', eu mudaria de emprego agora mesmo.', ['pudesse', 'posso', 'podia', 'poderia'], 'poder, imperfeito do subjuntivo (unregelmäßig)'),
      q('Se você ', 'estuda', ' todos os dias, você passa na prova.', ['estuda', 'estudasse', 'estudou', 'estudaria'], 'reale/allgemeine Bedingung: se + presente'),
    ],
  },
  {
    id: 'por-para',
    icon: 'swap',
    title: 'Por e para',
    level: 'B1',
    lessonId: 'por-para',
    instruction: 'Setze por oder para (oder eine feste Wendung damit) ein.',
    explanation:
      'para steht für Zweck/Ziel (estudo para viajar), Empfänger (presente para você) und Frist (para sexta-feira). ' +
      'por steht für Grund/Ursache (por causa da chuva), Tausch (troquei por uma moto) und räumlich „durch" ' +
      '(pela praia). Feste Wendungen: por favor, por isso („deshalb"), para sempre („für immer").',
    examples: [
      { target: 'Estudo português para viajar ao Brasil.', de: 'Ich lerne Portugiesisch, um nach Brasilien zu reisen.' },
      { target: 'Fiquei em casa por causa da chuva.', de: 'Ich bin wegen des Regens zu Hause geblieben.' },
      { target: 'Vou te amar para sempre.', de: 'Ich werde dich für immer lieben.' },
    ],
    items: [
      q('Este presente é ', 'para', ' você.', ['para', 'por', 'a', 'de'], 'para = Empfänger'),
      q('Estudo português ', 'para', ' viajar ao Brasil no ano que vem.', ['para', 'por', 'a', 'com'], 'para + Infinitiv = Zweck/Ziel'),
      q('Preciso terminar esse relatório ', 'para', ' sexta-feira.', ['para', 'por', 'em', 'a'], 'para = Frist/Deadline'),
      q('Fiquei em casa ', 'por', ' causa da chuva.', ['por', 'para', 'a', 'em'], 'por causa de = Grund/Ursache'),
      q('Viajamos ', 'pelo', ' Brasil inteiro durante as férias.', ['pelo', 'para o', 'ao', 'no'], 'por + o = pelo, „durch" (räumlich)'),
      q('Troquei meu carro antigo ', 'por', ' uma moto.', ['por', 'para', 'de', 'com'], 'por = Tausch'),
      q('', 'Por favor', ', me ajude com isso.', ['Por favor', 'Para favor', 'Por favores', 'Para favores'], 'feste Wendung: por favor'),
      q('Está muito frio hoje; ', 'por isso', ' eu vou ficar em casa.', ['por isso', 'para isso', 'por isto', 'pelo isso'], 'feste Wendung: por isso = „deshalb"'),
      q('Vou te amar ', 'para sempre', '.', ['para sempre', 'por sempre', 'para nunca', 'por nunca'], 'feste Wendung: para sempre = „für immer"'),
    ],
  },
  {
    id: 'pronomes-relativos',
    icon: 'knot',
    title: 'Pronomes relativos',
    level: 'B1',
    lessonId: 'pronomes-relativos',
    instruction: 'Setze das richtige Relativpronomen ein.',
    explanation:
      'que ist der Allrounder für Personen und Dinge, als Subjekt oder Objekt. quem steht nur nach einer ' +
      'Präposition und bezieht sich auf Personen (com quem, para quem). cujo/cuja bedeutet „dessen/deren" und ' +
      'stimmt mit dem NACHFOLGENDEN Nomen überein, nicht mit dem Bezugswort davor. onde bezieht sich auf einen Ort.',
    examples: [
      { target: 'O livro que comprei ontem é muito bom.', de: 'Das Buch, das ich gestern gekauft habe, ist sehr gut.' },
      { target: 'O amigo com quem eu viajei é muito legal.', de: 'Der Freund, mit dem ich gereist bin, ist sehr nett.' },
      { target: 'O escritor cujo livro ganhou o prêmio é brasileiro.', de: 'Der Schriftsteller, dessen Buch den Preis gewann, ist Brasilianer.' },
    ],
    items: [
      q('O livro ', 'que', ' comprei ontem é muito bom.', ['que', 'quem', 'cujo', 'onde'], 'que = Allrounder, bezieht sich auf Dinge'),
      q('A mulher ', 'que', ' mora ao lado é médica.', ['que', 'quem', 'cujo', 'onde'], 'que = Allrounder, auch für Personen als Subjekt'),
      q('O amigo com ', 'quem', ' eu viajei é muito legal.', ['quem', 'que', 'cujo', 'onde'], 'quem nach Präposition (com quem), für Personen'),
      q('Essa é a cidade ', 'onde', ' eu nasci.', ['onde', 'que', 'quem', 'cujo'], 'onde = Ort, „wo"'),
      q('O escritor ', 'cujo', ' livro ganhou o prêmio é brasileiro.', ['cujo', 'cuja', 'que', 'quem'], 'cujo stimmt mit dem folgenden Nomen überein (o livro)'),
      q('A autora ', 'cuja', ' história todos conhecem é muito famosa.', ['cuja', 'cujo', 'que', 'quem'], 'cuja stimmt mit dem folgenden Nomen überein (a história)'),
      q('A pessoa com ', 'quem', ' eu falei ontem é a nova gerente.', ['quem', 'que', 'cujo', 'onde'], 'quem nach Präposition'),
      q('Este é o restaurante ', 'onde', ' nós nos conhecemos.', ['onde', 'que', 'quem', 'cujo'], 'onde = Ort'),
    ],
  },
  {
    id: 'subjuntivo-presente',
    icon: 'thought',
    title: 'Subjuntivo presente',
    level: 'B1',
    lessonId: 'subjuntivo',
    instruction: 'Setze das Verb im subjuntivo presente ein.',
    explanation:
      'Bildung: -ar-Verben → e/e/emos/em/em (fale, fale, falemos, falem); -er/-ir-Verben → a/a/amos/am/am (coma, ' +
      'coma, comamos, comam). Die Grundregel: man nimmt die eu-Form des Präsens, streicht das -o und hängt die ' +
      'Endung an — faço → faça, posso → possa, digo → diga. Echte Ausnahmen, die NICHT dieser Regel folgen: ser → ' +
      'seja, estar → esteja, dar → dê, querer → queira, haver → haja, ir → vá. Der subjuntivo steht nach ' +
      'Wunsch/Meinung/Gefühl/Zweifel (quero que, espero que, é importante que) und nach bestimmten Konjunktionen ' +
      '(para que, embora, a menos que).',
    examples: [
      { target: 'Quero que você fale mais devagar.', de: 'Ich möchte, dass du langsamer sprichst.' },
      { target: 'Espero que vocês gostem da viagem.', de: 'Ich hoffe, dass euch die Reise gefällt.' },
      { target: 'Embora ela seja jovem, já tem muita experiência.', de: 'Obwohl sie jung ist, hat sie schon viel Erfahrung.' },
    ],
    items: [
      q('Quero que você ', 'fale', ' mais devagar.', ['fale', 'fala', 'falar', 'falou'], 'falar, subjuntivo presente, você = forma de ele/ela'),
      q('Espero que vocês ', 'gostem', ' da viagem.', ['gostem', 'gostam', 'gostar', 'gostaram'], 'gostar, subjuntivo presente, vocês'),
      q('É importante que nós ', 'cheguemos', ' na hora.', ['cheguemos', 'chegamos', 'chegar', 'chegaríamos'], 'chegar, subjuntivo presente, nós (g → gu antes de e, para manter o som)'),
      q('Talvez ele ', 'faça', ' o trabalho hoje.', ['faça', 'faz', 'fazer', 'fez'], 'fazer, subjuntivo presente: faço → faça'),
      q('Para que vocês ', 'entendam', ' melhor, vou explicar de novo.', ['entendam', 'entendem', 'entender', 'entenderam'], 'para que + subjuntivo presente; entender, vocês'),
      q('Embora ela ', 'seja', ' jovem, já tem muita experiência.', ['seja', 'é', 'será', 'foi'], 'embora + subjuntivo presente; ser é exceção: seja'),
      q('A menos que você ', 'tenha', ' outra ideia, vamos fazer assim.', ['tenha', 'tem', 'ter', 'teve'], 'a menos que + subjuntivo presente; ter, você = forma de ele/ela (tenho → tenha)'),
      q('Quero que eles ', 'estejam', ' aqui na hora certa.', ['estejam', 'estão', 'estar', 'estarão'], 'estar é exceção: esteja (não „estou" → „esta")'),
      q('Espero que você ', 'possa', ' vir à festa.', ['possa', 'pode', 'poder', 'pôde'], 'poder, subjuntivo presente: posso → possa'),
      q('Quero que vocês me ', 'deem', ' um desconto.', ['deem', 'dão', 'dar', 'deram'], 'dar é exceção: dê, deem'),
    ],
  },
  {
    id: 'subjuntivo-indicativo',
    icon: 'brain',
    title: 'Subjuntivo ou indicativo?',
    level: 'B1',
    lessonId: 'subjuntivo',
    instruction: 'Entscheide: Indikativ (Tatsache) oder subjuntivo (Zweifel/Meinung) — oder Infinitiv bei gleichem Subjekt?',
    explanation:
      'Nicht jeder Nebensatz mit „que" braucht den subjuntivo: Wird etwas als Tatsache/Gewissheit dargestellt ' +
      '(acho que, acredito que, sei que, tenho certeza de que), steht der Indikativ. Wird Zweifel oder eine ' +
      'verneinte Meinung ausgedrückt (não acho que, não é verdade que, duvido que), steht der subjuntivo. Haben ' +
      'Haupt- und Nebensatz dasselbe Subjekt, benutzt man statt „que + subjuntivo" einfach den Infinitiv: quero ' +
      'saber (nicht „quero que eu saiba").',
    examples: [
      { target: 'Acho que ele tem razão.', de: 'Ich glaube, er hat recht.' },
      { target: 'Não acho que ele tenha razão.', de: 'Ich glaube nicht, dass er recht hat.' },
      { target: 'Quero saber a verdade.', de: 'Ich will die Wahrheit wissen.' },
    ],
    items: [
      q('Acho que ele ', 'tem', ' razão.', ['tem', 'tenha', 'ter', 'teria'], 'acho que + Indikativ (Meinung als Tatsache dargestellt)'),
      q('Não acho que ele ', 'tenha', ' razão.', ['tenha', 'tem', 'ter', 'teria'], 'não acho que + subjuntivo (Zweifel/verneinte Meinung)'),
      q('Acredito que ela ', 'vem', ' à reunião.', ['vem', 'venha', 'vir', 'viesse'], 'acredito que + Indikativ'),
      q('Não é verdade que ele ', 'saiba', ' tudo.', ['saiba', 'sabe', 'saber', 'sabia'], 'não é verdade que + subjuntivo; saber: sei → saiba'),
      q('Tenho certeza de que ela ', 'está', ' certa.', ['está', 'esteja', 'estar', 'estaria'], 'tenho certeza de que + Indikativ (Gewissheit)'),
      q('Duvido que ele ', 'chegue', ' a tempo.', ['chegue', 'chega', 'chegar', 'chegou'], 'duvidar que + subjuntivo (Zweifel)'),
      q('Eu quero ', 'saber', ' a verdade.', ['saber', 'que eu saiba', 'saiba', 'sabia'], 'gleiches Subjekt in Haupt- und Nebensatz → Infinitiv statt „que eu saiba"'),
      q('É possível que ', 'chova', ' à noite.', ['chova', 'chove', 'chover', 'choveu'], 'é possível que + subjuntivo; chover ist unpersönlich'),
      q('Sei que ele ', 'trabalha', ' muito.', ['trabalha', 'trabalhe', 'trabalhar', 'trabalharia'], 'sei que + Indikativ (Gewissheit)'),
    ],
  },
  {
    id: 'subjuntivo-imperfeito',
    icon: 'sparkles',
    title: 'Imperfeito do subjuntivo',
    level: 'B1',
    lessonId: 'subjuntivo-imperfeito',
    instruction: 'Setze das Verb im imperfeito do subjuntivo ein.',
    explanation:
      'Bildung: 3. Person Plural des pretérito perfeito, „-ram" weg, „-sse/-sse/-ssemos/-ssem/-ssem" dran: ' +
      'falaram → falasse, foram → fosse, tiveram → tivesse, puderam → pudesse, souberam → soubesse, quiseram → ' +
      'quisesse. Benutzt für hypothetische/irreale se-Sätze (se eu fosse rico…) und in der indirekten Rede, wenn ' +
      'die Originalaussage im subjuntivo presente stand (que eu venha → que eu viesse).',
    examples: [
      { target: 'Se eu fosse rico, viajaria o mundo todo.', de: 'Wenn ich reich wäre, würde ich die ganze Welt bereisen.' },
      { target: 'Ela queria que nós comêssemos tudo.', de: 'Sie wollte, dass wir alles aufessen.' },
      { target: 'Ele pediu que eu viesse mais cedo.', de: 'Er bat mich, früher zu kommen.' },
    ],
    items: [
      q('Se eu ', 'fosse', ' rico, viajaria o mundo todo.', ['fosse', 'sou', 'seria', 'era'], 'ser, imperfeito do subjuntivo (3ª pl. pretérito: foram → fosse)'),
      q('Se nós ', 'tivéssemos', ' mais tempo, visitaríamos todos os museus.', ['tivéssemos', 'temos', 'teríamos', 'tínhamos'], 'ter, imperfeito do subjuntivo, nós (tiveram → tivesse + mos)'),
      q('Se ela ', 'pudesse', ', ela ajudaria.', ['pudesse', 'pode', 'poderia', 'podia'], 'poder, imperfeito do subjuntivo (puderam → pudesse)'),
      q('Se eles ', 'soubessem', ' a verdade, ficariam chocados.', ['soubessem', 'sabem', 'saberiam', 'sabiam'], 'saber, imperfeito do subjuntivo, eles (souberam → soubesse + m)'),
      q('Se você ', 'quisesse', ', poderíamos sair agora.', ['quisesse', 'quer', 'quereria', 'queria'], 'querer, imperfeito do subjuntivo, você = forma de ele/ela (quiseram → quisesse)'),
      q('Se nós ', 'falássemos', ' mais devagar, eles entenderiam melhor.', ['falássemos', 'falamos', 'falaríamos', 'falávamos'], 'falar, imperfeito do subjuntivo, nós (-ar → -ássemos)'),
      q('Ele pediu que eu ', 'viesse', ' mais cedo.', ['viesse', 'venho', 'viria', 'vinha'], 'discurso indireto: „que eu venha" → „que eu viesse"; vir (vieram → viesse)'),
      q('Ela queria que nós ', 'comêssemos', ' tudo.', ['comêssemos', 'comemos', 'comeríamos', 'comíamos'], 'comer, imperfeito do subjuntivo, nós (-er → -êssemos)'),
      q('Se eu ', 'estivesse', ' no seu lugar, eu não faria isso.', ['estivesse', 'estou', 'estaria', 'estava'], 'estar, imperfeito do subjuntivo (estiveram → estivesse)'),
    ],
  },
  {
    id: 'futuro-subjuntivo',
    icon: 'forward',
    title: 'Futuro do subjuntivo',
    level: 'B1',
    lessonId: 'futuro-subjuntivo',
    instruction: 'Setze das Verb im futuro do subjuntivo ein.',
    explanation:
      'Bildung: derselbe Stamm wie beim imperfeito do subjuntivo, aber mit r-Endungen: falar, falar, falarmos, ' +
      'falarem, falarem — für regelmäßige Verben sieht das genauso aus wie der persönliche Infinitiv. ' +
      'Unregelmäßig: ser/ir → for, estar → estiver, ter → tiver, fazer → fizer, dizer → disser, poder → puder, ' +
      'querer → quiser, trazer → trouxer, vir → vier, pôr → puser, saber → souber, dar → der, haver → houver. ' +
      'Benutzt nach quando, se, enquanto, assim que, logo que, wenn es um die Zukunft geht: quando eu for ao Rio ' +
      '(wenn ich [in Zukunft] nach Rio fahre). Klassischer Fehler: Deutsch und Englisch benutzen hier das ' +
      'Präsens — Portugiesisch braucht den futuro do subjuntivo, auch im ganz normalen gesprochenen Alltag.',
    examples: [
      { target: 'Quando eu for ao Rio, te ligo.', de: 'Wenn ich nach Rio fahre (in Zukunft), rufe ich dich an.' },
      { target: 'Se você precisar de ajuda, me avise.', de: 'Falls du Hilfe brauchst, sag mir Bescheid.' },
      { target: 'Assim que ele puder, vai te ligar.', de: 'Sobald er kann, wird er dich anrufen.' },
    ],
    items: [
      q('Quando eu ', 'for', ' ao Rio, te ligo.', ['for', 'vou', 'irei', 'ia'], 'quando + futuro do subjuntivo für die Zukunft; ir (for)'),
      q('Se você ', 'precisar', ' de ajuda, me avise.', ['precisar', 'precisa', 'precisará', 'precisaria'], 'futuro do subjuntivo, regelmäßig -ar: identisch mit dem Infinitiv'),
      q('Quando nós ', 'chegarmos', ' em casa, vamos jantar.', ['chegarmos', 'chegamos', 'chegaremos', 'chegávamos'], 'futuro do subjuntivo, nós: identisch mit dem persönlichen Infinitiv (chegarmos)'),
      q('Assim que ele ', 'puder', ', ele vai te ligar.', ['puder', 'pode', 'poderá', 'podia'], 'assim que + futuro do subjuntivo; poder (puder)'),
      q('Logo que vocês ', 'fizerem', ' a prova, me avisem.', ['fizerem', 'fazem', 'farão', 'faziam'], 'logo que + futuro do subjuntivo; fazer, vocês (fizerem)'),
      q('Enquanto você ', 'estiver', ' aqui, vamos aproveitar.', ['estiver', 'está', 'estará', 'estava'], 'enquanto + futuro do subjuntivo; estar (estiver)'),
      q('Se eu ', 'tiver', ' tempo amanhã, passo na sua casa.', ['tiver', 'tenho', 'terei', 'tinha'], 'futuro do subjuntivo; ter (tiver) — nicht mit dem Präsens „tenho" verwechseln'),
      q('Quando ela ', 'souber', ' a notícia, vai ficar feliz.', ['souber', 'sabe', 'saberá', 'sabia'], 'quando + futuro do subjuntivo; saber (souber)'),
      q('Se eles ', 'disserem', ' a verdade, tudo vai ficar bem.', ['disserem', 'dizem', 'dirão', 'diziam'], 'futuro do subjuntivo; dizer, eles (disserem)'),
      q('Quando você ', 'vier', ' ao Brasil, me avise.', ['vier', 'vem', 'virá', 'vinha'], 'vir (vier) — Deutsch/Englisch benutzen hier das Präsens, Portugiesisch den futuro do subjuntivo'),
    ],
  },
  {
    id: 'infinitivo-pessoal',
    icon: 'user',
    title: 'Infinitivo pessoal',
    level: 'B1',
    lessonId: 'infinitivo-pessoal',
    instruction: 'Setze das Verb im persönlichen Infinitiv (infinitivo pessoal) ein.',
    explanation:
      'Der persönliche Infinitiv bekommt Endungen, wenn sein Subjekt vom Subjekt des Hauptsatzes abweicht: ' +
      'falar, falar, falarmos, falarem, falarem. Wichtig fürs brasilianische Portugiesisch: Weil „você" ' +
      'grammatisch die 3. Person ist, nimmt der persönliche Infinitiv bei „você" die UNVERÄNDERTE 3.-Person-Form ' +
      '„falar" — NICHT „falares" (das wäre die „tu"-Form, die es in diesem Kurs nicht gibt). Also: para você ' +
      'falar, nicht „para você falares". Benutzt nach Präpositionen, wenn das Subjekt des Nebensatzes anders ist ' +
      'als im Hauptsatz: antes de eu saber, para nós conversarmos, é importante estudarmos.',
    examples: [
      { target: 'Antes de eu saber a resposta, não posso decidir.', de: 'Bevor ich die Antwort weiß, kann ich nicht entscheiden.' },
      { target: 'Para nós conversarmos com calma, vamos sair para tomar um café.', de: 'Damit wir in Ruhe reden können, gehen wir einen Kaffee trinken.' },
      { target: 'Para você falar com ele, basta ligar.', de: 'Damit du mit ihm sprichst, reicht es anzurufen.' },
    ],
    items: [
      q('Antes de eu ', 'saber', ' a resposta, não posso decidir.', ['saber', 'saiba', 'sei', 'souber'], 'infinitivo pessoal, eu: gleiche Form wie der einfache Infinitiv'),
      q('Para nós ', 'conversarmos', ' com calma, vamos sair para tomar um café.', ['conversarmos', 'conversamos', 'conversemos', 'conversaríamos'], 'infinitivo pessoal, nós: Infinitiv + -mos'),
      q('É importante ', 'estudarmos', ' todos os dias.', ['estudarmos', 'estudamos', 'estudemos', 'estudaríamos'], 'infinitivo pessoal, nós: estudar + -mos'),
      q('É melhor vocês ', 'trabalharem', ' juntos neste projeto.', ['trabalharem', 'trabalham', 'trabalhem', 'trabalhavam'], 'infinitivo pessoal, vocês: Infinitiv + -em'),
      q('Para você ', 'falar', ' com ele, basta ligar.', ['falar', 'falares', 'fale', 'fala'], 'infinitivo pessoal, você = unveränderte Form (wie ele/ela): „falar", NIE „falares"'),
      q('Até vocês ', 'chegarem', ', vou esperando aqui.', ['chegarem', 'chegam', 'cheguem', 'chegavam'], 'infinitivo pessoal, vocês: chegar + -em'),
      q('Depois de eles ', 'terminarem', ' o trabalho, vamos comemorar.', ['terminarem', 'terminam', 'terminem', 'terminavam'], 'infinitivo pessoal, eles: terminar + -em'),
      q('Comprei as passagens com antecedência para nós não ', 'perdermos', ' o voo.', ['perdermos', 'perdemos', 'percamos', 'perderíamos'], 'infinitivo pessoal, nós: perder + -mos'),
      q('É melhor você ', 'descansar', ' um pouco antes da viagem.', ['descansar', 'descansares', 'descanse', 'descansa'], 'infinitivo pessoal, você: unveränderte Form, wie bei ele/ela'),
    ],
  },
  {
    id: 'pronomes-combinados',
    icon: 'puzzle',
    title: 'Pronomes combinados',
    level: 'B1',
    lessonId: 'pronomes-combinados',
    instruction: 'Setze das richtige kombinierte Objektpronomen ein (nur zum Wiedererkennen).',
    explanation:
      'Direktes und indirektes Objektpronomen können sich zu einem Wort verbinden: me+o → mo, te+a → ta, lhe+o → ' +
      'lho, nos+a → no-la, lhes+os → lhos usw. Ehrlich gesagt: Im gesprochenen brasilianischen Portugiesisch ' +
      'werden diese Formen so gut wie NIE benutzt — noch seltener als im europäischen Portugiesisch. Man umgeht ' +
      'die Kombination einfach, indem man umformuliert oder das direkte Objektpronomen ganz weglässt (Ele me deu ' +
      'statt „ele deu-mo" oder Ähnlichem). Hier lernt ihr die Formen zum Wiedererkennen (ältere Texte, sehr ' +
      'formelle/literarische Sprache) — nicht zum aktiven Benutzen.',
    examples: [
      { target: 'Prometeram-me o carro, e finalmente mo deram.', de: '(literarisch) Sie versprachen mir das Auto und gaben es mir schließlich.' },
      { target: 'No dia a dia, dizemos: ele me deu o carro.', de: 'Im Alltag sagt man: Er gab mir das Auto.' },
      { target: 'Dei-lho no dia do aniversário dele.', de: '(literarisch) Ich gab es ihm an seinem Geburtstag.' },
    ],
    items: [
      q('Prometeram-me o carro, e finalmente ', 'mo', ' deram.', ['mo', 'ma', 'to', 'lho'], 'me + o = mo (literarisch/selten) — im gesprochenen BR: „me deram o carro"'),
      q('Já ', 'ta', ' disse ontem; não vou repetir a resposta.', ['ta', 'to', 'mo', 'lha'], 'te + a = ta (literarisch/selten) — normal gesprochen: „já te disse isso"'),
      q('Dei-', 'lho', ' no dia do aniversário dele.', ['lho', 'mo', 'to', 'no-lo'], 'lhe + o = lho (literarisch/selten) — normal gesprochen: „dei isso a ele"'),
      q('Emprestaram-', 'no-la', ' por uma semana.', ['no-la', 'no-lo', 'lha', 'ta'], 'nos + a = no-la (sehr selten, selbst in der Schriftsprache)'),
      q('No português falado do Brasil, evita-se a combinação: em vez de "deu-mo", dizemos que ele ', 'me', ' deu o carro.', ['me', 'mo', 'to', 'lho'], 'im gesprochenen BR trennt man die Pronomen, statt sie zu kombinieren'),
      q('Em vez de dizer "empresto-to", o normal no Brasil é: eu te ', 'empresto', ' o carro.', ['empresto', 'empresto-to', 'to', 'lho'], 'im gesprochenen BR verbindet sich das direkte Pronomen einfach nicht mit dem indirekten'),
      q('Pediram-me os documentos, e eu ', 'lhos', ' entreguei no mesmo dia.', ['lhos', 'lhas', 'no-los', 'tos'], 'lhes + os = lhos (literarisch/selten), nie in der gesprochenen Sprache'),
      q('Ela pediu-me o favor, e eu ', 'mo', ' concedi.', ['mo', 'ma', 'to', 'lho'], 'me + o = mo (literarisch/selten)'),
    ],
  },
  {
    id: 'colocacao-pronominal',
    icon: 'target',
    title: 'Colocação pronominal (BR vs. PT)',
    level: 'B1',
    lessonId: 'colocacao-pronominal',
    instruction: 'Setze das Objektpronomen an der im Brasilianischen üblichen Stelle (Próklise) ein.',
    explanation:
      'Der wichtigste Unterschied zum europäischen Portugiesisch in diesem ganzen Kapitel: Brasilianisches ' +
      'Portugiesisch setzt das Objektpronomen so gut wie immer VOR das Verb (Próklise) — auch am Satzanfang, was ' +
      'im geschriebenen europäischen Portugiesisch unüblich ist, im brasilianischen Alltag aber ganz normal: Me ' +
      'chama de Ana, Te vejo depois, Nos vemos lá. Die Nachstellung (Énklise, mit Bindestrich) ist in Brasilien ' +
      'vor allem eine Sache der formellen Schriftsprache und in der gesprochenen Sprache sehr selten. Die ' +
      'Mesóklise (Pronomen MITTEN im Verb, z. B. „dir-lhe-ei") kommt im brasilianischen Portugiesisch praktisch ' +
      'gar nicht vor — das ist eine rein europäische Besonderheit.',
    examples: [
      { target: 'Me chama de Ana.', de: 'Nenn mich Ana. (Pronomen vor dem Verb, auch am Satzanfang — typisch brasilianisch)' },
      { target: 'Te vejo depois!', de: 'Ich sehe dich später! (Próklise, Satzanfang)' },
      { target: 'Eu lhe direi a verdade mais tarde.', de: 'Ich werde dir später die Wahrheit sagen. (nie „dir-lhe-ei" — Mesóklise gibt es in Brasilien nicht)' },
    ],
    items: [
      q('', 'Me', ' chama de Ana, por favor.', ['Me', 'Te', 'Se', 'Nos'], 'Próklise am Satzanfang — Standard im gesprochenen Brasilien (anders als im europäischen Portugiesisch)'),
      q('', 'Te', ' vejo depois, então!', ['Te', 'Me', 'Se', 'Nos'], 'Próklise, Satzanfang: „Te vejo depois" ist in Brasilien ganz normal'),
      q('', 'Nos', ' vemos lá às oito.', ['Nos', 'Te', 'Me', 'Se'], 'Próklise, Satzanfang: „Nos vemos lá" ist brasilianischer Standard'),
      q('Eu ', 'te', ' amo muito.', ['te', 'o', 'lhe', 'se'], 'Próklise: das Pronomen steht vor dem Verb, auch nach dem Subjekt'),
      q('Ela ', 'me', ' ajudou ontem com a mudança.', ['me', 'o', 'lhe', 'se'], 'Próklise im BR: Pronomen vor dem Verb'),
      q('(eher formell/literarisch, selten im gesprochenen Brasilien) Chamavam-', 'me', ' de doutor, embora eu não fosse médico.', ['me', 'lhe', 'nos', 'te'], 'Énklise (Pronomen nach dem Verb) ist in der formellen Schrift möglich, aber im gesprochenen BR sehr selten: man sagt eher „me chamavam de doutor"'),
      q('No Brasil, o pronome fica antes do verbo mesmo no futuro simples: Eu ', 'lhe', ' direi a verdade mais tarde.', ['lhe', 'o', 'me', 'se'], 'Mesóklise (Pronomen MITTEN im Verb, wie in „dir-lhe-ei") gibt es im brasilianischen Portugiesisch nicht — auch im Futur steht die Próklise'),
      q('Ele não ', 'me', ' contou nada sobre o assunto.', ['me', 'o', 'lhe', 'se'], 'Próklise, verstärkt durch die Verneinung: não + Pronomen + Verb'),
      q('Espero que você ', 'me', ' ajude com isso.', ['me', 'o', 'lhe', 'se'], 'nach einer Konjunktion (que) ist die Próklise verpflichtend'),
      q('Nós ', 'nos', ' encontramos todo sábado no parque.', ['nos', 'se', 'me', 'te'], 'Próklise: Reflexivpronomen vor dem Verb, brasilianischer Standard'),
    ],
  },
  {
    id: 'pronomes-indefinidos',
    icon: 'question',
    title: 'Pronomes indefinidos',
    level: 'B1',
    lessonId: 'pronomes-indefinidos',
    instruction: 'Setze das richtige Indefinitpronomen ein.',
    explanation:
      'algum/nenhum/qualquer/cada/todo richten sich (meist) nach dem Nomen: alguma pergunta, nenhuma pessoa, ' +
      'todos os alunos. qualquer ändert nur die Zahl (Plural: quaisquer), nicht das Geschlecht; cada bleibt immer ' +
      'unverändert im Singular. algo, alguém, nada, ninguém sind unveränderlich: algo/nada für Sachen, ' +
      'alguém/ninguém für Personen. outro und mesmo passen sich wie normale Adjektive an: outro restaurante, as ' +
      'mesmas pessoas.',
    examples: [
      { target: 'Nenhuma pessoa pode entrar sem convite.', de: 'Niemand darf ohne Einladung hinein.' },
      { target: 'Alguém me avisou sobre a mudança de horário.', de: 'Jemand hat mich über die Zeitänderung informiert.' },
      { target: 'Qualquer aluno pode escolher o tema.', de: 'Jeder beliebige Schüler darf das Thema wählen.' },
    ],
    items: [
      q('', 'Nenhuma', ' pessoa pode entrar sem convite.', ['Nenhuma', 'Nenhum', 'Nenhuns', 'Ninguém'], 'nenhuma + feminines Nomen im Singular'),
      q('Você tem ', 'alguma', ' pergunta?', ['alguma', 'algum', 'algo', 'alguém'], 'algum/alguma stimmt mit dem Nomen überein (a pergunta)'),
      q('', 'Qualquer', ' aluno pode escolher o tema do trabalho.', ['Qualquer', 'Quaisquer', 'Cada', 'Todo'], 'qualquer ist im Geschlecht unveränderlich, hat nur einen Plural: quaisquer'),
      q('', 'Cada', ' estudante recebeu um certificado ao final do curso.', ['Cada', 'Todo', 'Todos', 'Qualquer'], 'cada ist unveränderlich und steht immer im Singular'),
      q('', 'Todos', ' os alunos passaram na prova.', ['Todos', 'Toda', 'Cada', 'Algum'], 'todo/toda/todos/todas stimmt in Genus und Numerus überein'),
      q('Não vi ', 'ninguém', ' no escritório hoje.', ['ninguém', 'nada', 'nenhum', 'algo'], 'ninguém ist unveränderlich, für Personen'),
      q('Não aconteceu ', 'nada', ' de especial no fim de semana.', ['nada', 'ninguém', 'nenhum', 'algum'], 'nada ist unveränderlich, für Sachen'),
      q('', 'Alguém', ' me avisou sobre a mudança de horário.', ['Alguém', 'Algo', 'Algum', 'Alguma'], 'alguém ist unveränderlich, für Personen'),
      q('Aconteceu ', 'algo', ' estranho ontem à noite.', ['algo', 'alguém', 'alguma', 'algum'], 'algo ist unveränderlich, für Sachen'),
      q('Prefiro ', 'outro', ' restaurante; este aqui é muito caro.', ['outro', 'outra', 'outros', 'outras'], 'outro stimmt mit dem Nomen überein (restaurante, maskulin Singular)'),
    ],
  },
  {
    id: 'adverbios',
    icon: 'zap',
    title: 'Advérbios em -mente',
    level: 'B1',
    lessonId: 'adverbios',
    instruction: 'Setze das Adverb auf -mente in der richtigen Form ein.',
    explanation:
      'Adverbien auf -mente werden aus der femininen Form des Adjektivs gebildet: rápida → rapidamente, clara → ' +
      'claramente. Adjektive ohne eigene feminine Form (auf -e oder -l) ändern sich nicht: frequente → ' +
      'frequentemente, normal → normalmente; ein Akzent wie bei fácil fällt dabei weg: facilmente. Stehen zwei ' +
      '-mente-Adverbien nacheinander, bekommt nur das letzte die Endung: rápida e facilmente. Das Adverb steht ' +
      'meistens nach dem Verb oder am Satzanfang (oft mit Komma): Felizmente, ninguém se machucou.',
    examples: [
      { target: 'Ela fala muito rapidamente.', de: 'Sie spricht sehr schnell.' },
      { target: 'Ela resolveu o problema rápida e facilmente.', de: 'Sie löste das Problem schnell und einfach.' },
      { target: 'Felizmente, ninguém se machucou no acidente.', de: 'Glücklicherweise wurde bei dem Unfall niemand verletzt.' },
    ],
    items: [
      q('Ela fala muito ', 'rapidamente', '.', ['rapidamente', 'rápido', 'rapidomente', 'rápidamente'], '-mente wird an die feminine Form des Adjektivs gehängt: rápida → rapidamente'),
      q('Ele resolveu o problema muito ', 'facilmente', '.', ['facilmente', 'fácil', 'facilemente', 'fácilmente'], 'fácil → facilmente (ohne Akzent im Adverb)'),
      q('Ela respondeu ', 'claramente', ' à pergunta.', ['claramente', 'clara', 'claromente', 'claramento'], 'claro → clara (feminin) → claramente'),
      q('Ela resolveu o problema rápida e ', 'facilmente', '.', ['facilmente', 'facilamente', 'fácilmente', 'facilomente'], 'bei zwei -mente-Adverbien hintereinander bekommt nur das letzte -mente: rápida e facilmente'),
      q('', 'Felizmente', ', ninguém se machucou no acidente.', ['Felizmente', 'Felizamente', 'Félizmente', 'Felicemente'], 'felizmente am Satzanfang, mit Komma abgetrennt'),
      q('', 'Normalmente', ' eu chego em casa às seis da tarde.', ['Normalmente', 'Normal', 'Normalemente', 'Normalamente'], 'normal → normalmente'),
      q('Ele dirige ', 'perigosamente', ' demais.', ['perigosamente', 'perigosa', 'perigosomente', 'perigoso'], 'perigoso → perigosa (feminin) → perigosamente'),
      q('O trem andava ', 'lentamente', ' pela montanha.', ['lentamente', 'lenta', 'lentomente', 'lentamento'], 'lento → lenta → lentamente'),
      q('Ela viaja ', 'frequentemente', ' a trabalho.', ['frequentemente', 'frequente', 'frequentamente', 'frequentomente'], 'Adjektive auf -e ändern sich nicht: frequente → frequentemente'),
      q('', 'Finalmente', ' chegamos ao hotel depois de uma viagem longa.', ['Finalmente', 'Finalemente', 'Finalamente', 'Final'], 'final → finalmente'),
    ],
  },
  {
    id: 'verbos-pronominais',
    icon: 'mirror',
    title: 'Verbos pronominais',
    level: 'B1',
    lessonId: 'verbos-pronominais',
    instruction: 'Setze das richtige Reflexivpronomen für das pronominale Verb ein.',
    explanation:
      'Pronominale/reflexive Verben wie chamar-se, levantar-se, queixar-se, lembrar-se de, esquecer-se de ' +
      'brauchen immer ein Pronomen, das zum Subjekt passt. Die Stellung folgt der normalen brasilianischen ' +
      'Próklise-Regel (siehe vorheriges Kapitel): eu me chamo — NICHT „chamo-me", wie es europäisches ' +
      'Portugiesisch sagen würde. Das gilt auch mit einem Modalverb oder Infinitiv: preciso me levantar.',
    examples: [
      { target: 'Eu me chamo Pedro.', de: 'Ich heiße Pedro.' },
      { target: 'Ela sempre se esquece das chaves.', de: 'Sie vergisst immer ihre Schlüssel.' },
      { target: 'Preciso me levantar mais cedo amanhã.', de: 'Ich muss morgen früher aufstehen.' },
    ],
    items: [
      q('Eu ', 'me', ' chamo Pedro.', ['me', 'chamo-', 'me chamo-', 'mim'], 'Próklise im BR: „eu me chamo", nicht „chamo-me" (europäisches Muster)'),
      q('Você ', 'se', ' levanta muito cedo todos os dias?', ['se', 'levanta-se', 'se levanta-', 'si'], 'Próklise: se + levanta'),
      q('Nós ', 'nos', ' queixamos do atendimento do restaurante.', ['nos', 'queixamo-nos', 'nos queixamos-', 'nosso'], 'queixar-se de = sich beschweren über; Próklise: nos + queixamos'),
      q('Eu não ', 'me', ' lembro do nome dele.', ['me', 'lembro-', 'me lembro-', 'mim'], 'lembrar-se de; Próklise, verstärkt durch die Verneinung'),
      q('Ela sempre ', 'se', ' esquece das chaves em casa.', ['se', 'esquece-se', 'se esquece-', 'si'], 'esquecer-se de; Próklise'),
      q('Vocês ', 'se', ' sentem bem hoje?', ['se', 'sentem-se', 'se sentem-', 'si'], 'sentir-se; Próklise'),
      q('Eles ', 'se', ' conheceram na faculdade há dez anos.', ['se', 'conheceram-se', 'se conheceram-', 'si'], 'conhecer-se; Próklise, auch im pretérito'),
      q('Ela ', 'se', ' chama Mariana, não é?', ['se', 'chama-se', 'se chama-', 'si'], 'chamar-se; brasilianischer Próklise-Standard'),
      q('Preciso ', 'me', ' levantar mais cedo amanhã.', ['me', 'levantar-me', 'levantarme', 'mim'], 'auch mit Infinitiv steht das Pronomen im gesprochenen BR meist davor'),
    ],
  },
  {
    id: 'quantidade',
    icon: 'chart',
    title: 'Muito, pouco, bastante, demais',
    level: 'B1',
    lessonId: 'quantidade',
    instruction: 'Setze muito/pouco/bastante/demais (oder algum/vários) in der richtigen Form ein.',
    explanation:
      'muito, pouco, bastante und demais können Adjektive oder Adverbien sein. Als Adjektiv (vor einem Nomen) ' +
      'passen sie sich an: muitos amigos, pouca gente, muitas vezes. Als Adverb (vor einem Adjektiv oder nach ' +
      'einem Verb) bleiben sie unveränderlich: muito interessante, pouco provável, comeu demais. Kurze ' +
      'Wiederholung: algum und vários passen sich wie gewohnt an das Nomen an (algum dinheiro, vários amigos).',
    examples: [
      { target: 'Tenho muitos amigos no Brasil.', de: 'Ich habe viele Freunde in Brasilien.' },
      { target: 'Esse filme é muito interessante.', de: 'Dieser Film ist sehr interessant.' },
      { target: 'Ele comeu demais e ficou com dor de barriga.', de: 'Er hat zu viel gegessen und hatte Bauchschmerzen.' },
    ],
    items: [
      q('Tenho ', 'muitos', ' amigos no Brasil.', ['muitos', 'muito', 'muita', 'muitas'], 'muito als Adjektiv stimmt mit dem Nomen überein (amigos, maskulin Plural)'),
      q('Esse filme é ', 'muito', ' interessante.', ['muito', 'muitos', 'muita', 'muitas'], 'muito als Adverb (vor einem Adjektiv) ist unveränderlich'),
      q('Há ', 'pouco', ' tempo para terminar tudo.', ['pouco', 'pouca', 'poucos', 'poucas'], 'pouco als Adjektiv stimmt mit tempo überein (maskulin Singular)'),
      q('É ', 'pouco', ' provável que chova hoje.', ['pouco', 'poucos', 'pouca', 'poucas'], 'pouco als Adverb ist unveränderlich'),
      q('Tem ', 'bastante', ' gente na festa hoje.', ['bastante', 'bastantes', 'bastanta', 'bastantas'], 'bastante bleibt in der Umgangssprache meist unverändert'),
      q('Ela está ', 'bastante', ' cansada hoje.', ['bastante', 'bastantes', 'bastanta', 'bastantas'], 'bastante als Adverb ist unveränderlich'),
      q('Ele comeu ', 'demais', ' e ficou com dor de barriga.', ['demais', 'demasiado', 'demasiada', 'demaisa'], 'demais als Adverb ist unveränderlich, steht nach dem Verb'),
      q('Tem gente ', 'demais', ' nessa fila; vamos voltar depois.', ['demais', 'demasiada', 'demasiadas', 'demaisa'], 'demais ist auch nach einem Nomen unveränderlich'),
      q('Tenho ', 'algum', ' dinheiro guardado para emergências.', ['algum', 'alguma', 'alguns', 'algo'], 'algum stimmt mit dem Nomen überein (dinheiro, maskulin Singular) — Wiederholung'),
      q('Convidei ', 'vários', ' amigos para a festa.', ['vários', 'várias', 'vário', 'varias'], 'vários stimmt mit amigos überein (maskulin Plural) — Wiederholung'),
    ],
  },
];
