import { ConjugationExercise } from '../types';
import { PT_TENSES, PtTenseId } from '../tenses';

// ─── European Portuguese verb catalog (MVP) ──────────────────────────────────────
// Each verb is a short spec; the rule engine below derives all 7 tenses up to B1
// (presente, pretérito perfeito simples, pretérito imperfeito, futuro simples,
// imperativo, condicional, conjuntivo presente). Regular -ar/-er/-ir verbs need
// only the infinitive and meaning, including the orthographic spelling changes
// that keep pronunciation steady (-car→-qu-, -çar→-c-, -gar→-gu- before e;
// -cer→-ç-, -ger/-gir→-j- before a/o) and the productive e→i / o→u stem changes
// in the eu-form (preferir → prefiro, dormir → durmo). Irregular verbs get their
// real forms from IRREGULAR; everything not given there (conjuntivo, imperativo)
// is derived generically — see the rule-engine comments below for why that works.
//
// Modern spoken European Portuguese drops the archaic "vós"; "vocês" conjugates
// like "eles/elas" (3rd person) and gets its own pronoun row, matching how EP is
// actually taught and spoken today.

type Six = [string, string, string, string, string, string];
type Three = [string, string, string];

export interface CatalogVerb {
  infinitive: string;
  de: string;
  presente: Six;
  preterito_perfeito: Six;
  imperfeito: Six;
  futuro: Six;
  condicional: Six;
  conjuntivo: Six;
  imperativo?: Three; // tu, nós, vocês — absent for modal verbs without a natural command form
  notes?: string;
}

export const PRONOUNS = ['eu', 'tu', 'ele / ela', 'nós', 'vocês', 'eles / elas'] as const;
const CONJ_PRONOUNS = ['que eu', 'que tu', 'que ele / ela', 'que nós', 'que vocês', 'que eles / elas'];
const IMPV_PRONOUNS = ['(tu)', '(nós)', '(vocês)'];

export type TenseId = PtTenseId;
export const TENSES = PT_TENSES;
export const TENSE_IDS = new Set<string>(TENSES.map(t => t.id));

interface VerbSpec {
  i: string;         // infinitive
  de: string;
  ei1?: true;        // e→i stem change in the eu-form only (preferir → prefiro)
  ou1?: true;        // o→u stem change in the eu-form only (dormir → durmo)
  base?: string;     // conjugate like this IRREGULAR entry, keeping the prefix (desfazer → fazer)
  notes?: string;
}

// Only given where the form can't be derived generically (see build() below).
interface Irregular {
  pres: Six;
  pret: Six;             // pretérito perfeito simples
  impf?: Six;             // only where the stem isn't the regular one (ser, ter, vir, pôr, ver)
  futStem?: string;       // only the 3 verbs whose futuro/condicional stem isn't the infinitive
  conj?: Six;             // only the true exceptions to "conjuntivo = eu-form minus -o + endings"
  impv?: Three;           // only where it isn't [3rd-sg presente, 1st-pl conjuntivo, 3rd-pl conjuntivo]
  noImperativo?: true;
}

const IRREGULAR: Record<string, Irregular> = {
  ser: {
    pres: ['sou', 'és', 'é', 'somos', 'são', 'são'],
    pret: ['fui', 'foste', 'foi', 'fomos', 'foram', 'foram'],
    impf: ['era', 'eras', 'era', 'éramos', 'eram', 'eram'],
    conj: ['seja', 'sejas', 'seja', 'sejamos', 'sejam', 'sejam'],
    impv: ['sê', 'sejamos', 'sejam'],
  },
  estar: {
    pres: ['estou', 'estás', 'está', 'estamos', 'estão', 'estão'],
    pret: ['estive', 'estiveste', 'esteve', 'estivemos', 'estiveram', 'estiveram'],
    conj: ['esteja', 'estejas', 'esteja', 'estejamos', 'estejam', 'estejam'],
  },
  ter: {
    pres: ['tenho', 'tens', 'tem', 'temos', 'têm', 'têm'],
    pret: ['tive', 'tiveste', 'teve', 'tivemos', 'tiveram', 'tiveram'],
    impf: ['tinha', 'tinhas', 'tinha', 'tínhamos', 'tinham', 'tinham'],
  },
  haver: {
    pres: ['hei', 'hás', 'há', 'havemos', 'hão', 'hão'],
    pret: ['houve', 'houveste', 'houve', 'houvemos', 'houveram', 'houveram'],
    conj: ['haja', 'hajas', 'haja', 'hajamos', 'hajam', 'hajam'],
    noImperativo: true,
  },
  ir: {
    pres: ['vou', 'vais', 'vai', 'vamos', 'vão', 'vão'],
    pret: ['fui', 'foste', 'foi', 'fomos', 'foram', 'foram'],
    impf: ['ia', 'ias', 'ia', 'íamos', 'iam', 'iam'],
    conj: ['vá', 'vás', 'vá', 'vamos', 'vão', 'vão'],
  },
  fazer: {
    pres: ['faço', 'fazes', 'faz', 'fazemos', 'fazem', 'fazem'],
    pret: ['fiz', 'fizeste', 'fez', 'fizemos', 'fizeram', 'fizeram'],
    futStem: 'far',
  },
  dizer: {
    pres: ['digo', 'dizes', 'diz', 'dizemos', 'dizem', 'dizem'],
    pret: ['disse', 'disseste', 'disse', 'dissemos', 'disseram', 'disseram'],
    futStem: 'dir',
  },
  poder: {
    pres: ['posso', 'podes', 'pode', 'podemos', 'podem', 'podem'],
    pret: ['pude', 'pudeste', 'pôde', 'pudemos', 'puderam', 'puderam'],
    noImperativo: true,
  },
  querer: {
    pres: ['quero', 'queres', 'quer', 'queremos', 'querem', 'querem'],
    pret: ['quis', 'quiseste', 'quis', 'quisemos', 'quiseram', 'quiseram'],
    conj: ['queira', 'queiras', 'queira', 'queiramos', 'queiram', 'queiram'],
  },
  saber: {
    pres: ['sei', 'sabes', 'sabe', 'sabemos', 'sabem', 'sabem'],
    pret: ['soube', 'soubeste', 'soube', 'soubemos', 'souberam', 'souberam'],
    conj: ['saiba', 'saibas', 'saiba', 'saibamos', 'saibam', 'saibam'],
  },
  dar: {
    pres: ['dou', 'dás', 'dá', 'damos', 'dão', 'dão'],
    pret: ['dei', 'deste', 'deu', 'demos', 'deram', 'deram'],
    conj: ['dê', 'dês', 'dê', 'demos', 'deem', 'deem'],
  },
  ver: {
    pres: ['vejo', 'vês', 'vê', 'vemos', 'veem', 'veem'],
    pret: ['vi', 'viste', 'viu', 'vimos', 'viram', 'viram'],
    impf: ['via', 'vias', 'via', 'víamos', 'viam', 'viam'],
  },
  vir: {
    pres: ['venho', 'vens', 'vem', 'vimos', 'vêm', 'vêm'],
    pret: ['vim', 'vieste', 'veio', 'viemos', 'vieram', 'vieram'],
    impf: ['vinha', 'vinhas', 'vinha', 'vínhamos', 'vinham', 'vinham'],
  },
  pôr: {
    pres: ['ponho', 'pões', 'põe', 'pomos', 'põem', 'põem'],
    pret: ['pus', 'puseste', 'pôs', 'pusemos', 'puseram', 'puseram'],
    impf: ['punha', 'punhas', 'punha', 'púnhamos', 'punham', 'punham'],
    futStem: 'por', // the circumflex is only on the infinitive "pôr"; porei, not pôrei
  },
  trazer: {
    pres: ['trago', 'trazes', 'traz', 'trazemos', 'trazem', 'trazem'],
    pret: ['trouxe', 'trouxeste', 'trouxe', 'trouxemos', 'trouxeram', 'trouxeram'],
    futStem: 'trar',
  },
  ler: {
    pres: ['leio', 'lês', 'lê', 'lemos', 'leem', 'leem'],
    pret: ['li', 'leste', 'leu', 'lemos', 'leram', 'leram'],
  },
  ouvir: {
    pres: ['ouço', 'ouves', 'ouve', 'ouvimos', 'ouvem', 'ouvem'],
    pret: ['ouvi', 'ouviste', 'ouviu', 'ouvimos', 'ouviram', 'ouviram'],
  },
  pedir: {
    pres: ['peço', 'pedes', 'pede', 'pedimos', 'pedem', 'pedem'],
    pret: ['pedi', 'pediste', 'pediu', 'pedimos', 'pediram', 'pediram'],
  },
  seguir: {
    pres: ['sigo', 'segues', 'segue', 'seguimos', 'seguem', 'seguem'],
    pret: ['segui', 'seguiste', 'seguiu', 'seguimos', 'seguiram', 'seguiram'],
  },
  rir: {
    pres: ['rio', 'ris', 'ri', 'rimos', 'riem', 'riem'],
    pret: ['ri', 'riste', 'riu', 'rimos', 'riram', 'riram'],
  },
  sair: {
    pres: ['saio', 'sais', 'sai', 'saímos', 'saem', 'saem'],
    pret: ['saí', 'saíste', 'saiu', 'saímos', 'saíram', 'saíram'],
  },
  cair: {
    pres: ['caio', 'cais', 'cai', 'caímos', 'caem', 'caem'],
    pret: ['caí', 'caíste', 'caiu', 'caímos', 'caíram', 'caíram'],
  },
  crer: {
    pres: ['creio', 'crês', 'crê', 'cremos', 'creem', 'creem'],
    pret: ['cri', 'creste', 'creu', 'cremos', 'creram', 'creram'],
  },
  caber: {
    pres: ['caibo', 'cabes', 'cabe', 'cabemos', 'cabem', 'cabem'],
    pret: ['coube', 'coubeste', 'coube', 'coubemos', 'couberam', 'couberam'],
  },
  valer: {
    pres: ['valho', 'vales', 'vale', 'valemos', 'valem', 'valem'],
    pret: ['vali', 'valeste', 'valeu', 'valemos', 'valeram', 'valeram'],
  },
  medir: {
    pres: ['meço', 'medes', 'mede', 'medimos', 'medem', 'medem'],
    pret: ['medi', 'mediste', 'mediu', 'medimos', 'mediram', 'mediram'],
  },
  // "ter" compounds longer than one syllable need a written accent on the tu/ele
  // forms (obténs, obtém) that the bare monosyllabic "tens"/"tem" doesn't — so
  // these get their own full forms rather than a prefix over `ter`.
  obter: {
    pres: ['obtenho', 'obténs', 'obtém', 'obtemos', 'obtêm', 'obtêm'],
    pret: ['obtive', 'obtiveste', 'obteve', 'obtivemos', 'obtiveram', 'obtiveram'],
    impf: ['obtinha', 'obtinhas', 'obtinha', 'obtínhamos', 'obtinham', 'obtinham'],
  },
  manter: {
    pres: ['mantenho', 'manténs', 'mantém', 'mantemos', 'mantêm', 'mantêm'],
    pret: ['mantive', 'mantiveste', 'manteve', 'mantivemos', 'mantiveram', 'mantiveram'],
    impf: ['mantinha', 'mantinhas', 'mantinha', 'mantínhamos', 'mantinham', 'mantinham'],
  },
  conter: {
    pres: ['contenho', 'conténs', 'contém', 'contemos', 'contêm', 'contêm'],
    pret: ['contive', 'contiveste', 'conteve', 'contivemos', 'contiveram', 'contiveram'],
    impf: ['continha', 'continhas', 'continha', 'contínhamos', 'continham', 'continham'],
  },
};

// ─── Rule engine ─────────────────────────────────────────────────────────────────

type Cls = 'ar' | 'er' | 'ir';
function classOf(inf: string): Cls {
  if (inf.endsWith('ar')) return 'ar';
  if (inf.endsWith('er')) return 'er';
  return 'ir';
}

// -car→-qu-, -çar→-c-, -gar→-gu- before e (pretérito eu-form, whole conjuntivo of -ar verbs).
function beforeE(stem: string): string {
  if (stem.endsWith('c')) return stem.slice(0, -1) + 'qu';
  if (stem.endsWith('ç')) return stem.slice(0, -1) + 'c';
  if (stem.endsWith('g')) return stem + 'u';
  return stem;
}
// -cer→-ç-, -ger/-gir→-j- before o/a (presente eu-form of -er/-ir verbs; conjuntivo
// inherits it for free since it's derived from that same eu-form, see build()).
function beforeOA(stem: string): string {
  if (stem.endsWith('c')) return stem.slice(0, -1) + 'ç';
  if (stem.endsWith('g')) return stem.slice(0, -1) + 'j';
  return stem;
}
// Last e/o of the stem → i/u (preferir → prefir-, dormir → durm-), eu-form only.
const lastTo = (stem: string, from: string, to: string) =>
  stem.replace(new RegExp(`${from}(?=[^${from}]*$)`), to);

interface Resolved {
  pres: Six;
  pret: Six;
  impf?: Six;
  futStem: string;
  conj?: Six;
  impv?: Three;
  noImperativo?: true;
}

function resolve(spec: VerbSpec, inf: string): Resolved {
  if (spec.base && !inf.endsWith(spec.base)) throw new Error(`${inf}: base ${spec.base} is not a suffix`);
  const irr = IRREGULAR[spec.base ?? inf];
  if (irr) {
    const prefix = spec.base ? inf.slice(0, inf.length - spec.base.length) : '';
    const p = (x: string) => prefix + x;
    return {
      pres: irr.pres.map(p) as Six,
      pret: irr.pret.map(p) as Six,
      impf: irr.impf?.map(p) as Six | undefined,
      futStem: p(irr.futStem ?? (spec.base ?? inf)),
      conj: irr.conj?.map(p) as Six | undefined,
      impv: irr.impv?.map(p) as Three | undefined,
      noImperativo: irr.noImperativo,
    };
  }

  const cls = classOf(inf);
  const stem = inf.slice(0, -2);

  // Presente.
  let pres: Six;
  if (cls === 'ar') {
    pres = [stem + 'o', stem + 'as', stem + 'a', stem + 'amos', stem + 'am', stem + 'am'];
  } else {
    let euStem = stem;
    if (spec.ei1) euStem = lastTo(euStem, 'e', 'i');
    if (spec.ou1) euStem = lastTo(euStem, 'o', 'u');
    euStem = beforeOA(euStem);
    const endings = cls === 'er' ? ['o', 'es', 'e', 'emos', 'em', 'em'] : ['o', 'es', 'e', 'imos', 'em', 'em'];
    pres = [euStem + endings[0], stem + endings[1], stem + endings[2], stem + endings[3], stem + endings[4], stem + endings[5]] as Six;
  }

  // Pretérito perfeito simples.
  const pret: Six =
    cls === 'ar'
      ? [beforeE(stem) + 'ei', stem + 'aste', stem + 'ou', stem + 'ámos', stem + 'aram', stem + 'aram']
      : cls === 'er'
      ? [stem + 'i', stem + 'este', stem + 'eu', stem + 'emos', stem + 'eram', stem + 'eram']
      : [stem + 'i', stem + 'iste', stem + 'iu', stem + 'imos', stem + 'iram', stem + 'iram'];

  // Conjuntivo = eu-form of the presente minus the final "o", + the opposite-class
  // endings. True for every regular and most irregular verbs (faço→faça, posso→possa,
  // peço→peça …); the handful of real exceptions (ser, estar, dar, querer, haver, ir)
  // are given explicitly in IRREGULAR above.
  const conjStem = cls === 'ar' ? beforeE(stem) : pres[0].slice(0, -1);
  const conjEnd = cls === 'ar' ? ['e', 'es', 'e', 'emos', 'em', 'em'] : ['a', 'as', 'a', 'amos', 'am', 'am'];
  const conj = conjEnd.map(e => conjStem + e) as Six;

  return { pres, pret, futStem: inf, conj };
}

function build(spec: VerbSpec): CatalogVerb {
  const inf = spec.i;
  const r = resolve(spec, inf);
  const cls = classOf(inf);
  const stem = inf.slice(0, -2);

  const impfStem = cls === 'ar' ? stem : stem; // -cer/-ger/-gir are fine unadjusted before i (conhecia, dirigia)
  const impf: Six =
    r.impf ??
    (cls === 'ar'
      ? [impfStem + 'ava', impfStem + 'avas', impfStem + 'ava', impfStem + 'ávamos', impfStem + 'avam', impfStem + 'avam']
      : [impfStem + 'ia', impfStem + 'ias', impfStem + 'ia', impfStem + 'íamos', impfStem + 'iam', impfStem + 'iam']);

  const futEnd = ['ei', 'ás', 'á', 'emos', 'ão', 'ão'];
  const condEnd = ['ia', 'ias', 'ia', 'íamos', 'iam', 'iam'];
  const futuro = futEnd.map(e => r.futStem + e) as Six;
  const condicional = condEnd.map(e => r.futStem + e) as Six;

  // Conjuntivo = eu-form of the presente minus "o" + the opposite-class endings
  // (same rule as the regular path in resolve(), applied to whatever the real
  // eu-form turned out to be — this is why faço→faça, posso→possa, peço→peça …
  // all come out right without listing them individually above).
  const conjuntivo =
    r.conj ??
    (() => {
      const conjStem = cls === 'ar' ? beforeE(stem) : r.pres[0].slice(0, -1);
      const conjEnd = cls === 'ar' ? ['e', 'es', 'e', 'emos', 'em', 'em'] : ['a', 'as', 'a', 'amos', 'am', 'am'];
      return conjEnd.map(e => conjStem + e) as Six;
    })();

  let imperativo: Three | undefined;
  if (!r.noImperativo) {
    imperativo = r.impv ?? [r.pres[2], conjuntivo[3], conjuntivo[4]];
  }

  return {
    infinitive: inf,
    de: spec.de,
    presente: r.pres,
    preterito_perfeito: r.pret,
    imperfeito: impf,
    futuro,
    condicional,
    conjuntivo,
    imperativo,
    notes: spec.notes,
  };
}

const VERB_SPECS: VerbSpec[] = [
  // ── core irregulars ──
  { i: 'ser', de: 'sein (dauerhaft)' },
  { i: 'estar', de: 'sein (vorübergehend) / sich befinden' },
  { i: 'ter', de: 'haben' },
  { i: 'haver', de: 'es gibt (há) / haben (gehoben)' },
  { i: 'ir', de: 'gehen / fahren' },
  { i: 'fazer', de: 'machen / tun' },
  { i: 'poder', de: 'können' },
  { i: 'querer', de: 'wollen' },
  { i: 'dizer', de: 'sagen' },
  { i: 'saber', de: 'wissen / können (gelernt)' },
  { i: 'dar', de: 'geben' },
  { i: 'ver', de: 'sehen' },
  { i: 'vir', de: 'kommen' },
  { i: 'pôr', de: 'legen / stellen' },
  { i: 'trazer', de: 'bringen / mitbringen' },
  { i: 'ler', de: 'lesen' },
  { i: 'ouvir', de: 'hören' },
  { i: 'pedir', de: 'bitten um / bestellen' },
  { i: 'seguir', de: 'folgen / weitermachen' },
  { i: 'rir', de: 'lachen' },
  // ── -ar regulars ──
  { i: 'falar', de: 'sprechen', notes: 'Regelmäßig auf -ar: -o, -as, -a, -amos, -am, -am' },
  { i: 'gostar', de: 'mögen (gostar de)' },
  { i: 'morar', de: 'wohnen' },
  { i: 'trabalhar', de: 'arbeiten' },
  { i: 'comprar', de: 'kaufen' },
  { i: 'chegar', de: 'ankommen', notes: 'Pretérito: cheguei (gu vor e)' },
  { i: 'começar', de: 'anfangen', notes: 'Pretérito: comecei (c vor e)' },
  { i: 'ficar', de: 'bleiben / werden', notes: 'Pretérito: fiquei (qu vor e)' },
  { i: 'procurar', de: 'suchen' },
  { i: 'explicar', de: 'erklären', notes: 'Pretérito: expliquei' },
  { i: 'ganhar', de: 'gewinnen / verdienen' },
  { i: 'pagar', de: 'bezahlen', notes: 'Pretérito: paguei' },
  { i: 'ajudar', de: 'helfen' },
  { i: 'esperar', de: 'warten / hoffen' },
  { i: 'passar', de: 'vorbeigehen / verbringen' },
  { i: 'chamar', de: 'nennen / rufen (chamar-se = heißen)' },
  { i: 'levantar', de: 'aufheben (levantar-se = aufstehen)' },
  { i: 'encontrar', de: 'finden / treffen' },
  { i: 'entrar', de: 'eintreten / hineingehen' },
  { i: 'voltar', de: 'zurückkommen' },
  { i: 'jogar', de: 'spielen (Sport)', notes: 'Pretérito: joguei' },
  { i: 'cantar', de: 'singen' },
  { i: 'dançar', de: 'tanzen', notes: 'Pretérito: dancei (c vor e)' },
  { i: 'viajar', de: 'reisen' },
  { i: 'estudar', de: 'studieren / lernen' },
  { i: 'escutar', de: 'zuhören' },
  { i: 'olhar', de: 'schauen / ansehen' },
  { i: 'preparar', de: 'vorbereiten / zubereiten' },
  { i: 'convidar', de: 'einladen' },
  { i: 'apresentar', de: 'vorstellen / präsentieren' },
  { i: 'visitar', de: 'besuchen / besichtigen' },
  { i: 'andar', de: 'gehen / laufen' },
  { i: 'acabar', de: 'beenden / aufhören' },
  { i: 'continuar', de: 'weitermachen / fortsetzen' },
  { i: 'tentar', de: 'versuchen' },
  { i: 'deixar', de: 'lassen / verlassen' },
  { i: 'lembrar', de: 'erinnern (lembrar-se de = sich erinnern)' },
  { i: 'mudar', de: 'ändern / umziehen' },
  { i: 'pensar', de: 'denken' },
  { i: 'contar', de: 'erzählen / zählen' },
  { i: 'tratar', de: 'behandeln (tratar-se de = es geht um)' },
  { i: 'usar', de: 'benutzen / tragen (Kleidung)' },
  { i: 'acordar', de: 'aufwachen' },
  { i: 'lavar', de: 'waschen' },
  { i: 'fechar', de: 'schließen' },
  { i: 'cozinhar', de: 'kochen' },
  { i: 'limpar', de: 'putzen' },
  { i: 'perguntar', de: 'fragen' },
  { i: 'marcar', de: 'vereinbaren / markieren', notes: 'Pretérito: marquei' },
  { i: 'reservar', de: 'reservieren' },
  { i: 'telefonar', de: 'telefonieren / anrufen' },
  { i: 'comemorar', de: 'feiern' },
  { i: 'descansar', de: 'sich ausruhen' },
  { i: 'arrumar', de: 'aufräumen / herrichten' },
  { i: 'alugar', de: 'mieten / vermieten', notes: 'Pretérito: aluguei' },
  { i: 'gastar', de: 'ausgeben (Geld)' },
  { i: 'poupar', de: 'sparen' },
  // ── -er regulars ──
  { i: 'comer', de: 'essen', notes: 'Regelmäßig auf -er: -o, -es, -e, -emos, -em, -em' },
  { i: 'beber', de: 'trinken' },
  { i: 'vender', de: 'verkaufen' },
  { i: 'aprender', de: 'lernen' },
  { i: 'compreender', de: 'verstehen' },
  { i: 'correr', de: 'laufen / rennen' },
  { i: 'escrever', de: 'schreiben' },
  { i: 'receber', de: 'erhalten / empfangen' },
  { i: 'perder', de: 'verlieren / verpassen' },
  { i: 'viver', de: 'leben' },
  { i: 'conhecer', de: 'kennen / kennenlernen', notes: 'eu conheço (ç vor o/a)' },
  { i: 'parecer', de: 'scheinen / aussehen', notes: 'eu pareço' },
  { i: 'nascer', de: 'geboren werden', notes: 'eu nasço' },
  { i: 'crescer', de: 'wachsen', notes: 'eu cresço' },
  { i: 'esquecer', de: 'vergessen', notes: 'eu esqueço' },
  { i: 'proteger', de: 'schützen', notes: 'eu protejo (j vor o/a)' },
  { i: 'acontecer', de: 'passieren / geschehen', notes: 'acontece (meist 3. Person)' },
  { i: 'descer', de: 'hinuntergehen', notes: 'eu desço' },
  // ── -ir regulars (incl. e→i / o→u stem change) ──
  { i: 'partir', de: 'abfahren / abreisen', notes: 'Regelmäßig auf -ir: -o, -es, -e, -imos, -em, -em' },
  { i: 'abrir', de: 'öffnen' },
  { i: 'decidir', de: 'entscheiden' },
  { i: 'preferir', de: 'lieber mögen / bevorzugen', ei1: true, notes: 'eu prefiro' },
  { i: 'sentir', de: 'fühlen / spüren', ei1: true, notes: 'eu sinto' },
  { i: 'mentir', de: 'lügen', ei1: true, notes: 'eu minto' },
  { i: 'repetir', de: 'wiederholen', ei1: true, notes: 'eu repito' },
  { i: 'vestir', de: 'anziehen (Kleidung)', ei1: true, notes: 'eu visto' },
  { i: 'competir', de: 'konkurrieren / antreten', ei1: true, notes: 'eu compito' },
  { i: 'dormir', de: 'schlafen', ou1: true, notes: 'eu durmo' },
  { i: 'subir', de: 'hinaufgehen / einsteigen' },
  { i: 'descobrir', de: 'entdecken' },
  { i: 'dirigir', de: 'fahren (Auto) / leiten', notes: 'eu dirijo (j vor o/a)' },
  { i: 'fugir', de: 'fliehen', notes: 'eu fujo (g→j vor o/a)' },
  { i: 'cumprir', de: 'erfüllen / einhalten' },
  { i: 'existir', de: 'existieren' },
  { i: 'conseguir', de: 'schaffen / es hinbekommen', base: 'seguir', notes: 'eu consigo' },
  // ── pronominal / everyday verbs (reflexives drilled like normal -ar/-er/-ir) ──
  { i: 'casar', de: 'heiraten (casar-se com)' },
  { i: 'divertir', de: 'amüsieren (divertir-se = Spaß haben)', ei1: true },
  { i: 'sentar', de: 'setzen (sentar-se = sich setzen)' },
  // ── A2–B1 verbs ──
  { i: 'oferecer', de: 'anbieten / schenken', notes: 'eu ofereço' },
  { i: 'permitir', de: 'erlauben' },
  { i: 'construir', de: 'bauen' },
  { i: 'produzir', de: 'produzieren / herstellen' },
  { i: 'reduzir', de: 'reduzieren' },
  { i: 'conduzir', de: 'führen / fahren' },
  { i: 'traduzir', de: 'übersetzen' },
  { i: 'incluir', de: 'einschließen' },
  { i: 'discutir', de: 'diskutieren / streiten' },
  { i: 'imaginar', de: 'sich vorstellen' },
  { i: 'participar', de: 'teilnehmen' },
  { i: 'organizar', de: 'organisieren' },
  { i: 'resolver', de: 'lösen / entscheiden' },
  { i: 'desenvolver', de: 'entwickeln' },
  { i: 'melhorar', de: 'verbessern' },
  { i: 'mostrar', de: 'zeigen' },
  { i: 'significar', de: 'bedeuten' },
  // ── more -ar regulars ──
  { i: 'achar', de: 'finden / meinen' },
  { i: 'precisar', de: 'brauchen (precisar de)' },
  { i: 'atravessar', de: 'überqueren' },
  { i: 'apanhar', de: 'erwischen / aufheben / nehmen (Bus)' },
  { i: 'levar', de: 'mitnehmen / dauern (Zeit)' },
  { i: 'jantar', de: 'zu Abend essen' },
  { i: 'almoçar', de: 'zu Mittag essen', notes: 'Pretérito: almocei (c vor e)' },
  { i: 'tomar', de: 'nehmen / einnehmen' },
  { i: 'passear', de: 'spazieren gehen' },
  { i: 'chorar', de: 'weinen' },
  { i: 'acreditar', de: 'glauben' },
  { i: 'concordar', de: 'zustimmen' },
  { i: 'negar', de: 'verneinen / abstreiten', notes: 'Pretérito: neguei' },
  { i: 'apagar', de: 'löschen / ausschalten', notes: 'Pretérito: apaguei' },
  { i: 'pintar', de: 'malen / anstreichen' },
  { i: 'desenhar', de: 'zeichnen' },
  { i: 'voar', de: 'fliegen' },
  { i: 'nadar', de: 'schwimmen' },
  { i: 'pescar', de: 'fischen / angeln', notes: 'Pretérito: pesquei (qu vor e)' },
  { i: 'caçar', de: 'jagen', notes: 'Pretérito: cacei (c vor e)' },
  { i: 'rezar', de: 'beten' },
  { i: 'festejar', de: 'feiern' },
  { i: 'emprestar', de: 'leihen' },
  { i: 'emigrar', de: 'emigrieren / auswandern' },
  { i: 'nomear', de: 'ernennen / benennen' },
  { i: 'roubar', de: 'stehlen' },
  { i: 'queimar', de: 'verbrennen' },
  { i: 'molhar', de: 'nass machen' },
  { i: 'secar', de: 'trocknen', notes: 'Pretérito: sequei (qu vor e)' },
  { i: 'enganar', de: 'täuschen (enganar-se = sich irren)' },
  { i: 'aproveitar', de: 'nutzen / genießen' },
  { i: 'apoiar', de: 'unterstützen' },
  { i: 'colaborar', de: 'zusammenarbeiten' },
  { i: 'votar', de: 'wählen / abstimmen' },
  { i: 'aprovar', de: 'genehmigen / bestehen (Prüfung)' },
  { i: 'negociar', de: 'verhandeln' },
  { i: 'planear', de: 'planen' },
  { i: 'treinar', de: 'trainieren' },
  { i: 'salvar', de: 'retten / speichern' },
  { i: 'assinar', de: 'unterschreiben' },
  { i: 'recusar', de: 'ablehnen' },
  { i: 'aceitar', de: 'annehmen / akzeptieren' },
  { i: 'alcançar', de: 'erreichen', notes: 'Pretérito: alcancei (c vor e)' },
  { i: 'avisar', de: 'informieren / warnen' },
  { i: 'informar', de: 'informieren' },
  { i: 'confirmar', de: 'bestätigen' },
  { i: 'cancelar', de: 'stornieren / absagen' },
  { i: 'atrasar', de: 'verspäten / verzögern' },
  { i: 'acompanhar', de: 'begleiten' },
  { i: 'respeitar', de: 'respektieren' },
  { i: 'saudar', de: 'grüßen' },
  { i: 'abandonar', de: 'verlassen / aufgeben' },
  { i: 'adorar', de: 'lieben / sehr mögen' },
  { i: 'admirar', de: 'bewundern' },
  { i: 'agradar', de: 'gefallen' },
  { i: 'animar', de: 'aufmuntern (animar-se = Mut fassen)' },
  { i: 'apertar', de: 'drücken / festziehen' },
  { i: 'assustar', de: 'erschrecken' },
  { i: 'aumentar', de: 'erhöhen / steigen' },
  { i: 'beijar', de: 'küssen' },
  { i: 'cheirar', de: 'riechen' },
  { i: 'cumprimentar', de: 'begrüßen / gratulieren' },
  { i: 'demorar', de: 'lange dauern / sich verspäten' },
  { i: 'desculpar', de: 'entschuldigen' },
  { i: 'duvidar', de: 'zweifeln' },
  { i: 'empurrar', de: 'schieben' },
  { i: 'ensinar', de: 'unterrichten / beibringen' },
  { i: 'espantar', de: 'erschrecken / verwundern' },
  { i: 'estacionar', de: 'parken' },
  { i: 'estragar', de: 'kaputt machen / verderben', notes: 'Pretérito: estraguei' },
  { i: 'evitar', de: 'vermeiden' },
  { i: 'entregar', de: 'liefern / abgeben', notes: 'Pretérito: entreguei' },
  { i: 'guardar', de: 'aufbewahren / behalten' },
  { i: 'imitar', de: 'imitieren / nachmachen' },
  { i: 'incomodar', de: 'stören' },
  { i: 'indicar', de: 'zeigen / angeben', notes: 'Pretérito: indiquei (qu vor e)' },
  { i: 'juntar', de: 'zusammenbringen / sammeln' },
  { i: 'lutar', de: 'kämpfen' },
  { i: 'ocupar', de: 'besetzen / beschäftigen (ocupar-se de)' },
  { i: 'rodar', de: 'drehen / rotieren' },
  { i: 'separar', de: 'trennen' },
  { i: 'soltar', de: 'loslassen / befreien' },
  { i: 'sonhar', de: 'träumen' },
  { i: 'sujar', de: 'beschmutzen (sujar-se = sich schmutzig machen)' },
  { i: 'tirar', de: 'herausnehmen / ausziehen (Kleidung)' },
  // ── more -er regulars ──
  { i: 'acrescentar', de: 'hinzufügen' },
  { i: 'defender', de: 'verteidigen' },
  { i: 'depender', de: 'abhängen (depender de)' },
  { i: 'descrever', de: 'beschreiben' },
  { i: 'devolver', de: 'zurückgeben' },
  { i: 'envolver', de: 'einwickeln / verwickeln' },
  { i: 'entender', de: 'verstehen' },
  { i: 'merecer', de: 'verdienen (Lob etc.)', notes: 'eu mereço' },
  { i: 'morder', de: 'beißen' },
  { i: 'obter', de: 'erhalten / erreichen' },
  { i: 'manter', de: 'beibehalten' },
  { i: 'conter', de: 'enthalten' },
  { i: 'pertencer', de: 'gehören', notes: 'eu pertenço' },
  { i: 'preencher', de: 'ausfüllen' },
  { i: 'pretender', de: 'beabsichtigen / vorhaben' },
  { i: 'reconhecer', de: 'erkennen / anerkennen', notes: 'eu reconheço' },
  { i: 'suceder', de: 'passieren / nachfolgen' },
  { i: 'vencer', de: 'gewinnen / besiegen' },
  { i: 'converter', de: 'umwandeln / bekehren' },
  { i: 'satisfazer', de: 'zufriedenstellen', base: 'fazer' },
  { i: 'desfazer', de: 'rückgängig machen / auflösen', base: 'fazer' },
  { i: 'refazer', de: 'wiederholen / neu machen', base: 'fazer' },
  { i: 'prever', de: 'vorhersehen', base: 'ver' },
  { i: 'rever', de: 'wiedersehen / überarbeiten', base: 'ver' },
  { i: 'crer', de: 'glauben' },
  { i: 'caber', de: 'hineinpassen' },
  { i: 'valer', de: 'wert sein / gelten' },
  // ── more -ir regulars ──
  { i: 'unir', de: 'vereinen / verbinden' },
  { i: 'reunir', de: 'versammeln (reunir-se = sich treffen)' },
  { i: 'admitir', de: 'zugeben / zulassen' },
  { i: 'sair', de: 'hinausgehen / ausgehen' },
  { i: 'cair', de: 'fallen' },
  { i: 'medir', de: 'messen' },
  { i: 'exigir', de: 'verlangen / fordern', notes: 'eu exijo (g→j vor o/a)' },
  { i: 'concluir', de: 'abschließen / folgern' },
  { i: 'destruir', de: 'zerstören' },
  { i: 'possuir', de: 'besitzen' },
  { i: 'atingir', de: 'erreichen', notes: 'eu atinjo (g→j vor o/a)' },
  { i: 'corrigir', de: 'korrigieren', notes: 'eu corrijo (g→j vor o/a)' },
  { i: 'fingir', de: 'vortäuschen / so tun als ob', notes: 'eu finjo (g→j vor o/a)' },
  { i: 'surgir', de: 'auftauchen / entstehen', notes: 'eu surjo (g→j vor o/a)' },
  { i: 'conferir', de: 'überprüfen / vergleichen', ei1: true, notes: 'eu confiro' },
  { i: 'referir', de: 'erwähnen (referir-se a)', ei1: true, notes: 'eu refiro' },
  { i: 'sorrir', de: 'lächeln', base: 'rir' },
  { i: 'desistir', de: 'aufgeben' },
  { i: 'insistir', de: 'bestehen auf' },
  { i: 'assistir', de: 'beiwohnen / helfen (assistir a)' },
];

export const VERB_CATALOG: CatalogVerb[] = VERB_SPECS.map(build);

const TENSE_NAMES: Record<TenseId, string> = {
  presente: 'Present (Presente)',
  preterito_perfeito: 'Perfect (Pretérito perfeito simples)',
  imperfeito: 'Imperfect (Pretérito imperfeito)',
  futuro: 'Future (Futuro simples)',
  imperativo: 'Imperative (Imperativo)',
  condicional: 'Conditional (Condicional)',
  conjuntivo: 'Subjunctive (Conjuntivo presente)',
};

function tenseSection(verb: CatalogVerb, t: TenseId) {
  const six = (answers: Six, notes?: string, pronouns: readonly string[] = PRONOUNS) => ({
    tense: t, tenseName_de: TENSE_NAMES[t], pronouns: [...pronouns], answers: [...answers], notes,
  });
  switch (t) {
    case 'presente': return six(verb.presente, verb.notes);
    case 'preterito_perfeito': return six(verb.preterito_perfeito);
    case 'imperfeito': return six(verb.imperfeito);
    case 'futuro': return six(verb.futuro);
    case 'condicional': return six(verb.condicional);
    case 'conjuntivo': return six(verb.conjuntivo, undefined, CONJ_PRONOUNS);
    case 'imperativo':
      return verb.imperativo
        ? { tense: t, tenseName_de: TENSE_NAMES[t], pronouns: [...IMPV_PRONOUNS], answers: [...verb.imperativo] }
        : null;
  }
}

export function verbToExercise(verb: CatalogVerb, tenses: TenseId[]): ConjugationExercise {
  const wanted = TENSES.map(t => t.id).filter(id => tenses.includes(id));
  let sections = wanted
    .map(t => tenseSection(verb, t))
    .filter((s): s is NonNullable<typeof s> => s !== null);
  if (sections.length === 0) sections = [tenseSection(verb, 'presente')!];
  const names = sections.map(s => TENSES.find(t => t.id === s.tense)!.label).join(', ');
  return {
    type: 'conjugation',
    title: `${verb.infinitive} – Conjugation`,
    verb: verb.infinitive,
    instruction: `Conjugate "${verb.infinitive}" (${verb.de}): ${names}.`,
    sections,
  };
}

export function pickNextVerb(knownVerbs: string[]): CatalogVerb {
  const known = new Set(knownVerbs.map(v => v.toLowerCase()));
  const unseen = VERB_CATALOG.filter(v => !known.has(v.infinitive.toLowerCase()));
  const pool = unseen.length > 0 ? unseen : VERB_CATALOG;
  return pool[Math.floor(Math.random() * Math.min(pool.length, 5))];
}

export function findVerb(infinitive: string): CatalogVerb | null {
  return VERB_CATALOG.find(v => v.infinitive.toLowerCase() === infinitive.toLowerCase()) ?? null;
}
