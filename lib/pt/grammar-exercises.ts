// ─── Portuguese (pt-PT) grammar exercises ───────────────────────────────────────
// MVP: 11 hand-written cloze sets covering A1 and the start of A2, in the same
// format as the Italian, Spanish and French ones: exactly one blank per item,
// `options` for multiple choice (must contain the answer), German hints, rules
// and examples. European Portuguese throughout (tu / vocês, comboio, autocarro,
// telemóvel, pequeno-almoço). `lessonId` links to lib/pt/grammar-lessons.ts.

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
  icon: string;
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
    icon: '🔤',
    title: 'Artigos (o, a, um, uma)',
    level: 'A1',
    lessonId: 'artikel',
    instruction: 'Setze den richtigen Artikel, die richtige Verschmelzung oder die richtige Pluralform ein.',
    explanation:
      'Bestimmte Artikel: o, a, os, as. Unbestimmte: um, uma, uns, umas. Mit den Präpositionen de, em und a verschmelzen sie: de + o = do, em + a = na, a + a = à. Plural meist mit -s, Wörter auf -ão meistens mit -ões (a estação → as estações).',
    examples: [
      { target: 'Moro na Rua Augusta.', de: 'Ich wohne in der Rua Augusta.' },
      { target: 'O livro do João está na mesa.', de: 'Das Buch von João liegt auf dem Tisch.' },
      { target: 'Vou ao mercado e depois à praia.', de: 'Ich gehe zum Markt und dann zum Strand.' },
    ],
    items: [
      q('Eu sou ', 'do', ' Porto.', ['do', 'de', 'da', 'no'], 'de + o (o Porto hat einen Artikel)'),
      q('A minha irmã mora ', 'no', ' centro da cidade.', ['no', 'na', 'nos', 'do'], 'em + o (o centro)'),
      q('No sábado vamos ', 'à', ' praia.', ['à', 'ao', 'a', 'na'], 'a + a (a praia)'),
      q('O telemóvel ', 'da', ' Maria é novo.', ['da', 'do', 'de', 'na'], 'de + a (a Maria)'),
      q('Tenho ', 'uma', ' irmã e dois irmãos.', ['uma', 'um', 'a', 'umas'], 'unbestimmt, feminin Singular'),
      q('Onde estão ', 'as', ' chaves do carro?', ['as', 'os', 'a', 'umas'], 'bestimmt, feminin Plural (a chave)'),
      q('O autocarro chega ', 'às', ' oito horas.', ['às', 'as', 'aos', 'à'], 'a + as (Uhrzeit: as horas)'),
      q('Gosto muito ', 'dos', ' teus amigos.', ['dos', 'das', 'do', 'nos'], 'de + os (os amigos)'),
      q('Em Lisboa há duas ', 'estações', ' de comboio grandes.', ['estações', 'estaçãos', 'estaçães', 'estação'], 'Plural von a estação (-ão → -ões)'),
      q('Os turistas estão ', 'nos', ' Açores.', ['nos', 'nas', 'no', 'dos'], 'em + os (os Açores)'),
    ],
  },
  {
    id: 'ser-estar-ter',
    icon: '⚖️',
    title: 'Ser, Estar e Ter',
    level: 'A1',
    lessonId: 'ser-estar-ter',
    instruction: 'Setze die richtige Form von ser, estar oder ter ein.',
    explanation:
      'Wo das Deutsche nur „sein“ hat, unterscheidet das Portugiesische: ser für Identität und dauerhafte Eigenschaften (Herkunft, Beruf, Charakter), estar für Zustände und den Ort von Personen und Dingen. ter (haben) steht auch beim Alter, bei Hunger, Durst, Angst usw.',
    examples: [
      { target: 'Sou alemã, mas estou em Lisboa.', de: 'Ich bin Deutsche, aber ich bin in Lissabon.' },
      { target: 'O café está frio.', de: 'Der Kaffee ist kalt (geworden).' },
      { target: 'Tenho trinta anos e tenho fome.', de: 'Ich bin dreißig und habe Hunger.' },
    ],
    items: [
      q('Eu ', 'sou', ' alemão, de Hamburgo.', ['sou', 'estou', 'tenho', 'é'], 'ser, eu (Herkunft)'),
      q('Hoje ', 'estou', ' muito cansado.', ['estou', 'sou', 'tenho', 'está'], 'estar, eu (Zustand)'),
      q('A Ana ', 'tem', ' vinte e cinco anos.', ['tem', 'é', 'está', 'têm'], 'ter, ela (Alter)'),
      q('Onde ', 'está', ' o meu telemóvel?', ['está', 'é', 'tem', 'estão'], 'estar, Ort eines Gegenstands'),
      q('Lisboa ', 'é', ' a capital de Portugal.', ['é', 'está', 'tem', 'são'], 'ser (Identität)'),
      q('Nós ', 'temos', ' muita fome.', ['temos', 'estamos', 'somos', 'têm'], 'ter, nós (Hunger)'),
      q('Vocês ', 'são', ' muito simpáticos.', ['são', 'estão', 'têm', 'somos'], 'ser, vocês (Charakter)'),
      q('Cuidado, a sopa ', 'está', ' muito quente!', ['está', 'é', 'tem', 'estão'], 'estar (momentaner Zustand)'),
      q('Tu ', 'tens', ' irmãos?', ['tens', 'és', 'estás', 'tem'], 'ter, tu'),
      q('Os meus pais ', 'estão', ' em casa.', ['estão', 'são', 'têm', 'está'], 'estar, eles (Ort)'),
    ],
  },
  {
    id: 'presente',
    icon: '⏺️',
    title: 'Presente do indicativo',
    level: 'A1',
    lessonId: 'praesens',
    instruction: 'Setze das Verb im Präsens ein.',
    explanation:
      'Regelmäßige Verben: -ar → falo, falas, fala, falamos, falam · -er → como, comes, come, comemos, comem · -ir → parto, partes, parte, partimos, partem. vocês und eles teilen sich eine Form. Häufige unregelmäßige Verben: fazer (faço, fazes, faz …) und querer (quero, queres, quer …).',
    examples: [
      { target: 'Falo português e alemão.', de: 'Ich spreche Portugiesisch und Deutsch.' },
      { target: 'Vocês vivem em Coimbra?', de: 'Wohnt ihr in Coimbra?' },
      { target: 'O que fazes ao fim de semana?', de: 'Was machst du am Wochenende?' },
    ],
    items: [
      q('Eu ', 'falo', ' português e alemão.', ['falo', 'fala', 'falas', 'falamos'], 'falar, eu'),
      q('Tu ', 'moras', ' em Lisboa?', ['moras', 'mora', 'moro', 'moram'], 'morar, tu'),
      q('Nós ', 'comemos', ' peixe ao jantar.', ['comemos', 'comem', 'come', 'comes'], 'comer, nós'),
      q('Eles ', 'bebem', ' café todas as manhãs.', ['bebem', 'bebe', 'bebemos', 'bebes'], 'beber, eles'),
      q('A Maria ', 'abre', ' a janela.', ['abre', 'abro', 'abrem', 'abres'], 'abrir, ela'),
      q('Vocês ', 'partem', ' amanhã de manhã?', ['partem', 'parte', 'partimos', 'partes'], 'partir, vocês'),
      q('Nós ', 'vivemos', ' perto do mar.', ['vivemos', 'vivem', 'vive', 'vivo'], 'viver, nós'),
      q('Eu ', 'faço', ' o jantar hoje.', ['faço', 'faz', 'fazes', 'fazo'], 'fazer, eu (unregelmäßig)'),
      q('O que é que tu ', 'queres', ' beber?', ['queres', 'quer', 'quero', 'querem'], 'querer, tu'),
      q('O meu pai ', 'trabalha', ' num banco.', ['trabalha', 'trabalho', 'trabalham', 'trabalhas'], 'trabalhar, ele'),
    ],
  },
  {
    id: 'possessivos',
    icon: '👜',
    title: 'Possessivos (meu, teu, seu …)',
    level: 'A1',
    lessonId: 'possessiv',
    instruction: 'Setze das passende Possessivpronomen ein.',
    explanation:
      'Das Possessiv richtet sich nach dem Besitz, nicht nach dem Besitzer: o meu carro, a minha casa, os meus livros, as minhas chaves. In Portugal steht meistens der Artikel davor. Für „sein/ihr“ sagt man oft dele / dela nach dem Nomen: o carro dele.',
    examples: [
      { target: 'A minha mãe é professora.', de: 'Meine Mutter ist Lehrerin.' },
      { target: 'Onde estão os teus sapatos?', de: 'Wo sind deine Schuhe?' },
      { target: 'A casa dele é grande.', de: 'Sein Haus ist groß.' },
    ],
    items: [
      q('Esta é a ', 'minha', ' casa.', ['minha', 'meu', 'minhas', 'meus'], 'eu, a casa (feminin Singular)'),
      q('O ', 'meu', ' irmão vive no Porto.', ['meu', 'minha', 'meus', 'minhas'], 'eu, o irmão (maskulin Singular)'),
      q('Onde estão as ', 'tuas', ' chaves?', ['tuas', 'teus', 'tua', 'teu'], 'tu, as chaves (feminin Plural)'),
      q('Gosto muito do ', 'teu', ' casaco.', ['teu', 'tua', 'teus', 'tuas'], 'tu, o casaco (maskulin Singular)'),
      q('Os ', 'nossos', ' amigos chegam amanhã.', ['nossos', 'nossas', 'nosso', 'nossa'], 'nós, os amigos (maskulin Plural)'),
      q('A ', 'nossa', ' professora é muito simpática.', ['nossa', 'nosso', 'nossas', 'nossos'], 'nós, a professora (feminin Singular)'),
      q('As ', 'minhas', ' filhas estudam em Coimbra.', ['minhas', 'meus', 'minha', 'meu'], 'eu, as filhas (feminin Plural)'),
      q('O senhor tem o ', 'seu', ' bilhete?', ['seu', 'sua', 'seus', 'suas'], 'Sie (formell), o bilhete'),
      q('É o carro do Pedro? Sim, é o carro ', 'dele', '.', ['dele', 'dela', 'deles', 'seu'], 'sein (von ihm)'),
      q('A Ana vive com a irmã ', 'dela', ' em Faro.', ['dela', 'dele', 'delas', 'sua'], 'ihre (von ihr)'),
    ],
  },
  {
    id: 'perguntas-negacao',
    icon: '❓',
    title: 'Perguntas e negação',
    level: 'A1',
    lessonId: 'fragen',
    instruction: 'Setze das passende Fragewort oder die Verneinung ein.',
    explanation:
      'Fragewörter: que (was), quem (wer), onde (wo), quando (wann), como (wie), quanto/quantos (wie viel/viele), porque (warum). Allein oder am Satzende: porquê. Verneint wird mit não direkt vor dem Verb.',
    examples: [
      { target: 'Onde é que moras?', de: 'Wo wohnst du?' },
      { target: 'Quantos anos tens?', de: 'Wie alt bist du?' },
      { target: 'Não falo francês.', de: 'Ich spreche kein Französisch.' },
    ],
    items: [
      q('', 'Onde', ' moras?', ['Onde', 'Quando', 'Quem', 'Como'], 'wo?'),
      q('', 'Como', ' te chamas?', ['Como', 'Quem', 'Onde', 'Quanto'], 'wie?'),
      q('', 'Quanto', ' custa o bilhete de comboio?', ['Quanto', 'Quantos', 'Quando', 'Qual'], 'wie viel?'),
      q('', 'Quantos', ' anos tens?', ['Quantos', 'Quantas', 'Quanto', 'Quando'], 'wie viele? (os anos)'),
      q('', 'Quem', ' é aquele senhor?', ['Quem', 'Que', 'Qual', 'Onde'], 'wer?'),
      q('', 'Quando', ' chega o autocarro?', ['Quando', 'Quanto', 'Onde', 'Como'], 'wann?'),
      q('', 'Porque', ' estudas português?', ['Porque', 'Porquê', 'Quê', 'Como'], 'warum? (am Satzanfang)'),
      q('— Hoje não vou à festa. — ', 'Porquê', '?', ['Porquê', 'Porque', 'Quê', 'Quando'], 'warum? (allein stehend)'),
      q('Eu ', 'não', ' falo francês.', ['não', 'nada', 'nenhum', 'ninguém'], 'Verneinung vor dem Verb'),
      q('Desculpe, ', 'onde', ' fica a estação?', ['onde', 'quando', 'quem', 'como'], 'wo?'),
    ],
  },
  {
    id: 'adjetivos',
    icon: '🎨',
    title: 'Adjetivos',
    level: 'A1',
    lessonId: 'adjektive',
    instruction: 'Setze das Adjektiv in der passenden Form ein.',
    explanation:
      'Adjektive richten sich in Geschlecht und Zahl nach dem Nomen und stehen meistens dahinter: um carro novo, uma casa nova, carros novos. Adjektive auf -e oder Konsonant (grande, fácil, azul) haben keine eigene weibliche Form. Plural: -l → -is (azul → azuis, fácil → fáceis).',
    examples: [
      { target: 'uma cidade bonita', de: 'eine schöne Stadt' },
      { target: 'os vinhos portugueses', de: 'die portugiesischen Weine' },
      { target: 'As camisas são azuis.', de: 'Die Hemden sind blau.' },
    ],
    items: [
      q('Tenho um carro ', 'novo', '.', ['novo', 'nova', 'novos', 'novas'], 'o carro: maskulin Singular'),
      q('A Maria tem uma casa ', 'bonita', '.', ['bonita', 'bonito', 'bonitas', 'bonitos'], 'a casa: feminin Singular'),
      q('Os meus avós são muito ', 'simpáticos', '.', ['simpáticos', 'simpáticas', 'simpático', 'simpática'], 'os avós: maskulin Plural'),
      q('As ruas de Alfama são ', 'estreitas', '.', ['estreitas', 'estreitos', 'estreita', 'estreito'], 'as ruas: feminin Plural'),
      q('A Joana é ', 'portuguesa', '.', ['portuguesa', 'português', 'portugueses', 'portuguesas'], '-ês → -esa'),
      q('Gosto das camisas ', 'azuis', '.', ['azuis', 'azul', 'azules', 'azuls'], 'Plural von azul (-l → -is)'),
      q('Os exercícios de hoje são ', 'fáceis', '.', ['fáceis', 'fácil', 'fácils', 'fáceles'], 'Plural von fácil'),
      q('O Porto é uma cidade ', 'grande', '.', ['grande', 'granda', 'grandes', 'grando'], 'auf -e: gleich für m. und f.'),
      q('Os alunos estão ', 'contentes', ' com a nota.', ['contentes', 'contente', 'contentas', 'contentos'], 'Plural von contente'),
      q('Prefiro o vinho ', 'branco', '.', ['branco', 'branca', 'brancos', 'brancas'], 'o vinho: maskulin Singular'),
    ],
  },

  // ══════════════════════════════ A2 ══════════════════════════════
  {
    id: 'preterito-perfeito',
    icon: '⏮️',
    title: 'Pretérito perfeito simples',
    level: 'A2',
    lessonId: 'preterito-perfeito',
    instruction: 'Setze das Verb im pretérito perfeito simples ein.',
    explanation:
      'Die normale Erzählzeit für abgeschlossene Handlungen – ein einziges Wort: -ar → falei, falaste, falou, falámos, falaram · -er → comi, comeste, comeu, comemos, comeram · -ir → parti, partiste, partiu, partimos, partiram. Wichtige Unregelmäßige: ir/ser (fui, foi …), fazer (fiz, fez …), estar (estive, esteve …), ter (tive, teve …).',
    examples: [
      { target: 'Ontem falei com a minha mãe.', de: 'Gestern habe ich mit meiner Mutter gesprochen.' },
      { target: 'No sábado fomos ao cinema.', de: 'Am Samstag sind wir ins Kino gegangen.' },
      { target: 'O que fizeste nas férias?', de: 'Was hast du in den Ferien gemacht?' },
    ],
    items: [
      q('Ontem eu ', 'falei', ' com a minha mãe.', ['falei', 'falou', 'falava', 'falo'], 'falar, eu'),
      q('Tu ', 'comeste', ' o bolo todo?', ['comeste', 'comeu', 'comias', 'comestes'], 'comer, tu'),
      q('O Rui ', 'partiu', ' para Paris na segunda-feira.', ['partiu', 'parti', 'partia', 'partiram'], 'partir, ele'),
      q('Nós ', 'jantámos', ' num restaurante perto do rio.', ['jantámos', 'jantamos', 'jantaram', 'jantou'], 'jantar, nós (mit Akzent: ámos)'),
      q('Eles ', 'beberam', ' muito vinho na festa.', ['beberam', 'bebiam', 'beberão', 'bebemos'], 'beber, eles'),
      q('Ontem ', 'fui', ' ao cinema com a Ana.', ['fui', 'ia', 'vou', 'foi'], 'ir, eu (unregelmäßig)'),
      q('O que ', 'fizeste', ' no fim de semana?', ['fizeste', 'fazias', 'fez', 'fizeram'], 'fazer, tu (unregelmäßig)'),
      q('A Joana ', 'esteve', ' em Lisboa no ano passado.', ['esteve', 'estava', 'estive', 'está'], 'estar, ela (unregelmäßig)'),
      q('Vocês ', 'abriram', ' a loja às nove?', ['abriram', 'abriam', 'abrem', 'abriu'], 'abrir, vocês'),
      q('Hoje de manhã ', 'comprei', ' um bilhete de comboio.', ['comprei', 'comprou', 'comprava', 'compro'], 'comprar, eu'),
    ],
  },
  {
    id: 'imperfeito',
    icon: '🕰️',
    title: 'Pretérito imperfeito',
    level: 'A2',
    lessonId: 'imperfeito',
    instruction: 'Imperfeito oder pretérito perfeito? Setze die richtige Form ein.',
    explanation:
      'Das imperfeito beschreibt Gewohnheiten, Zustände und den Hintergrund in der Vergangenheit: -ar → falava, falavas, falava, falávamos, falavam · -er/-ir → comia, comias, comia, comíamos, comiam. Unregelmäßig: ser (era), ter (tinha), ir (ia). Einmalige, abgeschlossene Handlungen stehen im pretérito perfeito.',
    examples: [
      { target: 'Quando era pequena, ia à praia todos os dias.', de: 'Als ich klein war, ging ich jeden Tag an den Strand.' },
      { target: 'Lia um livro quando o telefone tocou.', de: 'Ich las ein Buch, als das Telefon klingelte.' },
    ],
    items: [
      q('Quando era pequeno, eu ', 'brincava', ' muito na rua.', ['brincava', 'brinquei', 'brinco', 'brincou'], 'Gewohnheit, eu (brincar)'),
      q('Antigamente, nós ', 'vivíamos', ' em Faro.', ['vivíamos', 'vivemos', 'viveram', 'vivia'], 'Zustand früher, nós (viver)'),
      q('Todos os verões, os meus pais ', 'iam', ' para o Algarve.', ['iam', 'foram', 'vão', 'ia'], 'Gewohnheit, eles (ir)'),
      q('A minha avó ', 'fazia', ' bolos aos domingos.', ['fazia', 'fez', 'faz', 'faziam'], 'Gewohnheit, ela (fazer)'),
      q('Tu ', 'eras', ' muito tímido em criança.', ['eras', 'foste', 'és', 'era'], 'Beschreibung, tu (ser)'),
      q('Eu ', 'lia', ' um livro quando o telefone tocou.', ['lia', 'li', 'leio', 'lias'], 'Hintergrund, eu (ler)'),
      q('Antes, o Pedro ', 'tinha', ' um cão.', ['tinha', 'teve', 'tem', 'tinham'], 'Zustand früher, ele (ter)'),
      q('', 'Eram', ' oito horas quando o comboio chegou.', ['Eram', 'Foram', 'São', 'Era'], 'Uhrzeit in der Vergangenheit (ser)'),
      q('Ontem à noite ', 'vi', ' um filme ótimo.', ['vi', 'via', 'vejo', 'viu'], 'einmalig, eu (ver) → perfeito'),
      q('No ano passado, ', 'visitámos', ' os Açores pela primeira vez.', ['visitámos', 'visitávamos', 'visitamos', 'visitavam'], 'einmalig, nós → perfeito'),
    ],
  },
  {
    id: 'futuro',
    icon: '⏭️',
    title: 'Futuro simples',
    level: 'A2',
    lessonId: 'futuro',
    instruction: 'Setze das Futur ein – futuro simples oder ir + Infinitiv.',
    explanation:
      'Futuro simples: Infinitiv + -ei, -ás, -á, -emos, -ão (falarei, comerás, partirá). fazer wird zu farei. Im Alltag sagt man meistens ir + Infinitiv: vou falar, vais comer, vamos partir.',
    examples: [
      { target: 'Amanhã falarei com o diretor.', de: 'Morgen werde ich mit dem Direktor sprechen.' },
      { target: 'Vamos apanhar o autocarro.', de: 'Wir nehmen gleich den Bus.' },
    ],
    items: [
      q('Amanhã ', 'falarei', ' com o diretor.', ['falarei', 'falará', 'falarás', 'falaremos'], 'falar, eu'),
      q('No verão, nós ', 'viajaremos', ' para Espanha.', ['viajaremos', 'viajarão', 'viajarei', 'viajamos'], 'viajar, nós'),
      q('Os convidados ', 'chegarão', ' às dez.', ['chegarão', 'chegaram', 'chegará', 'chegaremos'], 'chegar, eles'),
      q('Tu ', 'comerás', ' connosco no domingo?', ['comerás', 'comerá', 'comeras', 'comerei'], 'comer, tu'),
      q('O que ', 'farás', ' depois do curso?', ['farás', 'fazerás', 'fará', 'faremos'], 'fazer, tu (unregelmäßig)'),
      q('O comboio ', 'partirá', ' às oito horas.', ['partirá', 'partirão', 'partiu', 'partirei'], 'partir, ele'),
      q('Eu ', 'vou', ' estudar esta noite.', ['vou', 'vais', 'vai', 'vamos'], 'ir + Infinitiv, eu'),
      q('Vocês ', 'vão', ' jantar connosco?', ['vão', 'vai', 'vamos', 'vou'], 'ir + Infinitiv, vocês'),
      q('Olha as nuvens! ', 'Vai', ' chover.', ['Vai', 'Vou', 'Vão', 'Vais'], 'ir + Infinitiv, es (Wetter)'),
      q('Nós ', 'vamos', ' apanhar o autocarro das nove.', ['vamos', 'vão', 'vai', 'vou'], 'ir + Infinitiv, nós'),
    ],
  },
  {
    id: 'imperativo',
    icon: '📣',
    title: 'Imperativo',
    level: 'A2',
    lessonId: 'imperativ',
    instruction: 'Setze den Imperativ für tu oder vocês ein.',
    explanation:
      'tu (bejaht) = 3. Person Singular Präsens: fala!, come!, parte!. vocês = Konjunktiv Präsens, der Vokal wird getauscht: -ar → falem!, -er/-ir → comam!, partam!.',
    examples: [
      { target: 'Fala mais devagar, por favor!', de: 'Sprich bitte langsamer!' },
      { target: 'Meninos, abram os livros!', de: 'Kinder, macht die Bücher auf!' },
    ],
    items: [
      q('', 'Fala', ' mais devagar, por favor!', ['Fala', 'Falem', 'Falas', 'Fale'], 'falar, tu'),
      q('', 'Come', ' a sopa toda!', ['Come', 'Comes', 'Comam', 'Coma'], 'comer, tu'),
      q('', 'Abre', ' a janela, por favor.', ['Abre', 'Abres', 'Abram', 'Abra'], 'abrir, tu'),
      q('', 'Escreve', ' o teu nome aqui.', ['Escreve', 'Escrevas', 'Escrevem', 'Escrevam'], 'escrever, tu'),
      q('Rui, ', 'bebe', ' a tua água!', ['bebe', 'bebes', 'bebam', 'beba'], 'beber, tu'),
      q('Ana, ', 'parte', ' o bolo em oito fatias.', ['parte', 'partes', 'partam', 'parta'], 'partir, tu'),
      q('Meninos, ', 'falem', ' mais baixo!', ['falem', 'falam', 'fala', 'fale'], 'falar, vocês'),
      q('Crianças, ', 'comam', ' a fruta toda!', ['comam', 'comem', 'come', 'coma'], 'comer, vocês'),
      q('Alunos, ', 'abram', ' os livros na página dez.', ['abram', 'abrem', 'abre', 'abra'], 'abrir, vocês'),
      q('Por favor, ', 'esperem', ' aqui um momento.', ['esperem', 'esperam', 'espera', 'espere'], 'esperar, vocês'),
    ],
  },
  {
    id: 'objeto-pronomes',
    icon: '🎯',
    title: 'Pronomes de objeto (o, a, lhe …)',
    level: 'A2',
    lessonId: 'objektpronomen',
    instruction: 'Ersetze das Objekt durch das passende Pronomen.',
    explanation:
      'Direktes Objekt (wen/was?): o, a, os, as. Indirektes Objekt (wem?): lhe, lhes. Nach não, nunca, já, ainda, ninguém und Fragewörtern steht das Pronomen vor dem Verb: Não o conheço.',
    examples: [
      { target: 'O Pedro? Não o conheço.', de: 'Pedro? Den kenne ich nicht.' },
      { target: 'Ainda não lhe telefonei.', de: 'Ich habe ihn/sie noch nicht angerufen.' },
    ],
    items: [
      q('O Pedro? Não ', 'o', ' conheço.', ['o', 'a', 'lhe', 'os'], 'direkt, maskulin Singular (ihn)'),
      q('A Ana? Nunca ', 'a', ' vejo no café.', ['a', 'o', 'lhe', 'as'], 'direkt, feminin Singular (sie)'),
      q('Os livros? Já ', 'os', ' li todos.', ['os', 'as', 'lhes', 'o'], 'direkt, maskulin Plural'),
      q('As chaves? Não ', 'as', ' encontro.', ['as', 'os', 'lhes', 'a'], 'direkt, feminin Plural'),
      q('Este filme é ótimo. Já ', 'o', ' viste?', ['o', 'a', 'lhe', 'os'], 'direkt, o filme'),
      q('A carta? Ainda não ', 'a', ' escrevi.', ['a', 'o', 'lhe', 'as'], 'direkt, a carta'),
      q('A Joana pediu ajuda, mas ninguém ', 'a', ' ajudou.', ['a', 'lhe', 'o', 'as'], 'ajudar alguém: direkt'),
      q('O Rui faz anos. Ainda não ', 'lhe', ' dei o presente.', ['lhe', 'o', 'lhes', 'a'], 'indirekt, Singular (ihm)'),
      q('Os meus pais? Não ', 'lhes', ' telefono há uma semana.', ['lhes', 'os', 'lhe', 'as'], 'telefonar a alguém: indirekt, Plural'),
      q('Os turistas? Já ', 'lhes', ' mostrei o caminho.', ['lhes', 'os', 'lhe', 'as'], 'indirekt, Plural (ihnen)'),
    ],
  },
];
