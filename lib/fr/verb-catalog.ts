import { ConjugationExercise } from '../types';
import { FR_TENSES, FrTenseId } from '../tenses';

// ─── French verb catalog ────────────────────────────────────────────────────────
// Each verb is a short spec; the rule engine below derives every tense up to B1
// (présent, passé composé, imparfait, futur simple, impératif, conditionnel,
// subjonctif présent). Regular -er / -ir (2nd group, `g2`) / -re verbs need only
// the infinitive and meaning, including the -er spelling changes (mangeons,
// commençons, achète, appelle, préfère, paie). Irregular verbs take their real
// forms from IRREGULAR (directly, or via `base` for prefixed verbs such as
// comprendre → prendre). The ORDER of VERB_SPECS is the teaching order (it
// mirrors the Italian catalog).

type Six = [string, string, string, string, string, string];
type Three = [string, string, string];

export interface CatalogVerb {
  infinitive: string;
  de: string;
  presente: Six; // présent (named like the other catalogs; the vocab page reads it)
  passe: Six;
  imparfait: Six;
  futur: Six;
  conditionnel: Six;
  subjonctif: Six;
  imperatif?: Three; // tu, nous, vous — absent for pronominal, modal and impersonal verbs
  notes?: string;
}

export const PRONOUNS = ['je', 'tu', 'il / elle', 'nous', 'vous', 'ils / elles'] as const;
const SUBJ_PRONOUNS = ['que je', 'que tu', "qu'il / qu'elle", 'que nous', 'que vous', "qu'ils / qu'elles"];
const IMPV_PRONOUNS = ['(tu)', '(nous)', '(vous)'];

interface VerbSpec {
  i: string;       // infinitive; pronominal verbs as "se lever" / "s'habiller"
  de: string;
  etre?: true;     // passé composé with être (pronominal verbs always use être)
  g2?: true;       // 2nd group -ir (finir: nous finissons)
  base?: string;   // conjugate like this IRREGULAR entry, keeping the prefix
  notes?: string;  // shown with the present tense
}

interface Irregular {
  pres: Six;
  pp: string;
  fut: string;       // future/conditional stem: ser-, aur-, ir- …
  subj?: Six;        // only where it can't be derived from ils/nous
  impv?: Three;      // only where it can't be derived from the present
  impf?: string;     // imparfait stem where not from nous (être: ét-)
}

// Present of verbs like partir/sortir: the consonant before -ir drops in the singular.
function partirLike(inf: string): Irregular {
  const s = inf.slice(0, -2);            // part
  const short = s.slice(0, -1);          // par
  return { pres: [short + 's', short + 's', short + 't', s + 'ons', s + 'ez', s + 'ent'], pp: s + 'i', fut: inf };
}
// ouvrir/offrir/couvrir/souffrir: -er endings in the present, participle -ert.
function ouvrirLike(inf: string): Irregular {
  const s = inf.slice(0, -2);
  return { pres: [s + 'e', s + 'es', s + 'e', s + 'ons', s + 'ez', s + 'ent'], pp: s.slice(0, -1) + 'ert', fut: inf };
}
// conduire/construire/traduire …: stem + s, s, t, sons, sez, sent.
function uireLike(inf: string): Irregular {
  const s = inf.slice(0, -2);            // condui
  return { pres: [s + 's', s + 's', s + 't', s + 'sons', s + 'sez', s + 'sent'], pp: s + 't', fut: inf.slice(0, -1) };
}
// peindre/craindre/éteindre/rejoindre: -ns, -ns, -nt, -gnons …
function indreLike(inf: string): Irregular {
  const s = inf.slice(0, -4);            // pei
  return {
    pres: [s + 'ns', s + 'ns', s + 'nt', s + 'gnons', s + 'gnez', s + 'gnent'],
    pp: s + 'nt',
    fut: inf.slice(0, -1),
  };
}

const IRREGULAR: Record<string, Irregular> = {
  être: {
    pres: ['suis', 'es', 'est', 'sommes', 'êtes', 'sont'], pp: 'été', fut: 'ser', impf: 'ét',
    subj: ['sois', 'sois', 'soit', 'soyons', 'soyez', 'soient'], impv: ['sois', 'soyons', 'soyez'],
  },
  avoir: {
    pres: ['ai', 'as', 'a', 'avons', 'avez', 'ont'], pp: 'eu', fut: 'aur',
    subj: ['aie', 'aies', 'ait', 'ayons', 'ayez', 'aient'], impv: ['aie', 'ayons', 'ayez'],
  },
  aller: {
    pres: ['vais', 'vas', 'va', 'allons', 'allez', 'vont'], pp: 'allé', fut: 'ir',
    subj: ['aille', 'ailles', 'aille', 'allions', 'alliez', 'aillent'],
  },
  faire: {
    pres: ['fais', 'fais', 'fait', 'faisons', 'faites', 'font'], pp: 'fait', fut: 'fer',
    subj: ['fasse', 'fasses', 'fasse', 'fassions', 'fassiez', 'fassent'],
  },
  dire: { pres: ['dis', 'dis', 'dit', 'disons', 'dites', 'disent'], pp: 'dit', fut: 'dir' },
  interdire: {
    pres: ['interdis', 'interdis', 'interdit', 'interdisons', 'interdisez', 'interdisent'], pp: 'interdit', fut: 'interdir',
  },
  pouvoir: {
    pres: ['peux', 'peux', 'peut', 'pouvons', 'pouvez', 'peuvent'], pp: 'pu', fut: 'pourr',
    subj: ['puisse', 'puisses', 'puisse', 'puissions', 'puissiez', 'puissent'],
  },
  vouloir: {
    pres: ['veux', 'veux', 'veut', 'voulons', 'voulez', 'veulent'], pp: 'voulu', fut: 'voudr',
    subj: ['veuille', 'veuilles', 'veuille', 'voulions', 'vouliez', 'veuillent'], impv: ['veuille', 'veuillons', 'veuillez'],
  },
  devoir: { pres: ['dois', 'dois', 'doit', 'devons', 'devez', 'doivent'], pp: 'dû', fut: 'devr' },
  savoir: {
    pres: ['sais', 'sais', 'sait', 'savons', 'savez', 'savent'], pp: 'su', fut: 'saur',
    subj: ['sache', 'saches', 'sache', 'sachions', 'sachiez', 'sachent'], impv: ['sache', 'sachons', 'sachez'],
  },
  valoir: {
    pres: ['vaux', 'vaux', 'vaut', 'valons', 'valez', 'valent'], pp: 'valu', fut: 'vaudr',
    subj: ['vaille', 'vailles', 'vaille', 'valions', 'valiez', 'vaillent'],
  },
  voir: { pres: ['vois', 'vois', 'voit', 'voyons', 'voyez', 'voient'], pp: 'vu', fut: 'verr' },
  prévoir: { pres: ['prévois', 'prévois', 'prévoit', 'prévoyons', 'prévoyez', 'prévoient'], pp: 'prévu', fut: 'prévoir' },
  prendre: { pres: ['prends', 'prends', 'prend', 'prenons', 'prenez', 'prennent'], pp: 'pris', fut: 'prendr' },
  mettre: { pres: ['mets', 'mets', 'met', 'mettons', 'mettez', 'mettent'], pp: 'mis', fut: 'mettr' },
  venir: { pres: ['viens', 'viens', 'vient', 'venons', 'venez', 'viennent'], pp: 'venu', fut: 'viendr' },
  tenir: { pres: ['tiens', 'tiens', 'tient', 'tenons', 'tenez', 'tiennent'], pp: 'tenu', fut: 'tiendr' },
  courir: { pres: ['cours', 'cours', 'court', 'courons', 'courez', 'courent'], pp: 'couru', fut: 'courr' },
  mourir: { pres: ['meurs', 'meurs', 'meurt', 'mourons', 'mourez', 'meurent'], pp: 'mort', fut: 'mourr' },
  naître: { pres: ['nais', 'nais', 'naît', 'naissons', 'naissez', 'naissent'], pp: 'né', fut: 'naîtr' },
  vivre: { pres: ['vis', 'vis', 'vit', 'vivons', 'vivez', 'vivent'], pp: 'vécu', fut: 'vivr' },
  suivre: { pres: ['suis', 'suis', 'suit', 'suivons', 'suivez', 'suivent'], pp: 'suivi', fut: 'suivr' },
  lire: { pres: ['lis', 'lis', 'lit', 'lisons', 'lisez', 'lisent'], pp: 'lu', fut: 'lir' },
  boire: { pres: ['bois', 'bois', 'boit', 'buvons', 'buvez', 'boivent'], pp: 'bu', fut: 'boir' },
  croire: { pres: ['crois', 'crois', 'croit', 'croyons', 'croyez', 'croient'], pp: 'cru', fut: 'croir' },
  connaître: {
    pres: ['connais', 'connais', 'connaît', 'connaissons', 'connaissez', 'connaissent'], pp: 'connu', fut: 'connaîtr',
  },
  paraître: {
    pres: ['parais', 'parais', 'paraît', 'paraissons', 'paraissez', 'paraissent'], pp: 'paru', fut: 'paraîtr',
  },
  cevoir: { pres: ['çois', 'çois', 'çoit', 'cevons', 'cevez', 'çoivent'], pp: 'çu', fut: 'cevr' }, // recevoir, apercevoir
  crire: { pres: ['cris', 'cris', 'crit', 'crivons', 'crivez', 'crivent'], pp: 'crit', fut: 'crir' },   // écrire, décrire, inscrire
  rire: { pres: ['ris', 'ris', 'rit', 'rions', 'riez', 'rient'], pp: 'ri', fut: 'rir' },
  plaire: { pres: ['plais', 'plais', 'plaît', 'plaisons', 'plaisez', 'plaisent'], pp: 'plu', fut: 'plair' },
  taire: { pres: ['tais', 'tais', 'tait', 'taisons', 'taisez', 'taisent'], pp: 'tu', fut: 'tair' },
  vaincre: { pres: ['vaincs', 'vaincs', 'vainc', 'vainquons', 'vainquez', 'vainquent'], pp: 'vaincu', fut: 'vaincr' },
  battre: { pres: ['bats', 'bats', 'bat', 'battons', 'battez', 'battent'], pp: 'battu', fut: 'battr' },
  résoudre: { pres: ['résous', 'résous', 'résout', 'résolvons', 'résolvez', 'résolvent'], pp: 'résolu', fut: 'résoudr' },
  cueillir: { pres: ['cueille', 'cueilles', 'cueille', 'cueillons', 'cueillez', 'cueillent'], pp: 'cueilli', fut: 'cueiller' },
  fuir: { pres: ['fuis', 'fuis', 'fuit', 'fuyons', 'fuyez', 'fuient'], pp: 'fui', fut: 'fuir' },
  asseoir: { pres: ['assieds', 'assieds', 'assied', 'asseyons', 'asseyez', 'asseyent'], pp: 'assis', fut: 'assiér' },
  partir: partirLike('partir'),
  sortir: partirLike('sortir'),
  dormir: partirLike('dormir'),
  servir: partirLike('servir'),
  mentir: partirLike('mentir'),
  sentir: partirLike('sentir'),
};

// Future stems that the rules can't derive.
const FUTURE_OVERRIDE: Record<string, string> = { envoyer: 'enverr' };

// -eler/-eter verbs that double the consonant (appelle, jette) instead of taking è.
const DOUBLING = new Set(['appeler', 'rappeler', 'jeter', 'rejeter', 'épeler', 'projeter', 'renouveler', 'feuilleter']);

const VERB_SPECS: VerbSpec[] = [
  // ── the core verbs ──
  { i: 'être', de: 'sein', notes: 'Unregelmäßig: je suis, tu es, il est …' },
  { i: 'avoir', de: 'haben', notes: 'Unregelmäßig; vor Vokal: j\'ai' },
  { i: 'faire', de: 'machen / tun', notes: 'vous faites, ils font' },
  { i: 'aller', de: 'gehen / fahren', etre: true, notes: 'je vais, tu vas, il va, ils vont' },
  { i: 'venir', de: 'kommen', etre: true },
  { i: 'rester', de: 'bleiben', etre: true },
  { i: 'dire', de: 'sagen', notes: 'vous dites (nicht *disez)' },
  { i: 'donner', de: 'geben' },
  { i: 'pouvoir', de: 'können' },
  { i: 'vouloir', de: 'wollen' },
  { i: 'devoir', de: 'müssen / sollen' },
  { i: 'savoir', de: 'wissen / können (gelernt)' },
  { i: 'parler', de: 'sprechen', notes: 'Regelmäßig auf -er: -e, -es, -e, -ons, -ez, -ent' },
  { i: 'voir', de: 'sehen' },
  { i: 'prendre', de: 'nehmen', notes: 'nous prenons, ils prennent' },
  { i: 'mettre', de: 'legen / stellen / setzen' },
  { i: 'sentir', de: 'fühlen / riechen' },
  { i: 'comprendre', de: 'verstehen', base: 'prendre' },
  { i: 'finir', de: 'beenden / aufhören', g2: true, notes: '2. Gruppe: nous finissons, ils finissent' },
  { i: 'croire', de: 'glauben' },
  { i: 'penser', de: 'denken' },
  { i: 'trouver', de: 'finden' },
  { i: 'laisser', de: 'lassen / verlassen' },
  { i: 'appeler', de: 'rufen / anrufen', notes: 'j\'appelle, nous appelons' },
  { i: "s'appeler", de: 'heißen' },
  { i: 'arriver', de: 'ankommen', etre: true },
  { i: 'partir', de: 'abfahren / abreisen', etre: true },
  { i: 'rentrer', de: 'zurückkommen / nach Hause gehen', etre: true },
  { i: 'sortir', de: 'ausgehen / hinausgehen', etre: true },
  { i: 'entrer', de: 'hereinkommen / eintreten', etre: true },
  { i: 'se trouver', de: 'sich befinden' },
  { i: 'devenir', de: 'werden', etre: true, base: 'venir' },
  { i: 'manger', de: 'essen', notes: 'nous mangeons (e bleibt vor o)' },
  { i: 'boire', de: 'trinken' },
  { i: 'dormir', de: 'schlafen' },
  { i: 'travailler', de: 'arbeiten' },
  { i: 'étudier', de: 'studieren / lernen' },
  { i: 'habiter', de: 'wohnen' },
  { i: 'vivre', de: 'leben' },
  { i: 'lire', de: 'lesen' },
  { i: 'écrire', de: 'schreiben', base: 'crire' },
  { i: 'ouvrir', de: 'öffnen', notes: 'Endungen wie -er: j\'ouvre, tu ouvres' },
  { i: 'fermer', de: 'schließen' },
  { i: 'chercher', de: 'suchen' },
  { i: 'payer', de: 'bezahlen', notes: 'je paie oder je paye' },
  { i: 'acheter', de: 'kaufen', notes: 'j\'achète, nous achetons' },
  { i: 'vendre', de: 'verkaufen', notes: 'Regelmäßig auf -re: -s, -s, -, -ons, -ez, -ent' },
  { i: 'demander', de: 'fragen / bitten um' },
  { i: 'répondre', de: 'antworten' },
  { i: 'connaître', de: 'kennen / kennenlernen' },
  { i: 'attendre', de: 'warten' },
  { i: 'écouter', de: 'zuhören / hören' },
  { i: 'regarder', de: 'anschauen / schauen' },
  { i: 'jouer', de: 'spielen' },
  { i: 'commencer', de: 'anfangen', notes: 'nous commençons (ç vor o)' },
  { i: 'utiliser', de: 'benutzen' },
  { i: 'porter', de: 'tragen / bringen' },
  { i: 'plaire', de: 'gefallen' },
  { i: 'aider', de: 'helfen' },
  { i: 'aimer', de: 'lieben / mögen' },
  { i: 'changer', de: 'ändern / wechseln' },
  { i: 'courir', de: 'laufen / rennen' },
  { i: 'marcher', de: 'gehen / laufen' },
  { i: 'monter', de: 'hinaufgehen / einsteigen', etre: true },
  { i: 'descendre', de: 'hinuntergehen / aussteigen', etre: true },
  { i: 'tomber', de: 'fallen', etre: true },
  { i: 'naître', de: 'geboren werden', etre: true },
  { i: 'mourir', de: 'sterben', etre: true },
  { i: 'perdre', de: 'verlieren / verpassen' },
  { i: 'gagner', de: 'gewinnen / verdienen' },
  { i: 'décider', de: 'entscheiden' },
  { i: 'choisir', de: 'wählen / aussuchen', g2: true },
  { i: 'apprendre', de: 'lernen', base: 'prendre' },
  { i: 'enseigner', de: 'unterrichten / beibringen' },
  { i: 'rappeler', de: 'erinnern / zurückrufen' },
  { i: 'se souvenir', de: 'sich erinnern', base: 'venir' },
  { i: 'oublier', de: 'vergessen' },
  { i: 'préférer', de: 'bevorzugen / lieber mögen', notes: 'je préfère, nous préférons' },
  { i: 'envoyer', de: 'schicken', notes: 'j\'envoie; Futur: j\'enverrai' },
  { i: 'recevoir', de: 'erhalten / bekommen', base: 'cevoir' },
  { i: 'expliquer', de: 'erklären' },
  { i: 'sembler', de: 'scheinen' },
  { i: 'montrer', de: 'zeigen' },
  { i: 'suivre', de: 'folgen' },
  { i: 'servir', de: 'dienen / servieren' },
  { i: 'tenir', de: 'halten' },
  { i: 'offrir', de: 'anbieten / schenken' },
  { i: 'coûter', de: 'kosten' },
  { i: 'voyager', de: 'reisen' },
  { i: 'conduire', de: 'fahren (Auto) / führen' },
  { i: 'voler', de: 'fliegen / stehlen' },
  { i: 'nager', de: 'schwimmen' },
  { i: 'danser', de: 'tanzen' },
  { i: 'chanter', de: 'singen' },
  { i: 'sonner', de: 'klingeln / läuten' },
  { i: 'cuisiner', de: 'kochen' },
  { i: 'nettoyer', de: 'putzen', notes: 'je nettoie, nous nettoyons' },
  { i: 'laver', de: 'waschen' },
  // ── pronominal verbs (passé composé with être) ──
  { i: 'se laver', de: 'sich waschen' },
  { i: 'se lever', de: 'aufstehen', notes: 'je me lève, nous nous levons' },
  { i: 'se réveiller', de: 'aufwachen' },
  { i: "s'endormir", de: 'einschlafen', base: 'dormir' },
  { i: "s'habiller", de: 'sich anziehen' },
  { i: "s'asseoir", de: 'sich setzen', base: 'asseoir' },
  { i: "s'amuser", de: 'sich amüsieren / Spaß haben' },
  { i: 'se sentir', de: 'sich fühlen', base: 'sentir' },
  { i: "s'arrêter", de: 'anhalten / stehen bleiben' },
  { i: "s'inquiéter", de: 'sich Sorgen machen' },
  { i: 'se marier', de: 'heiraten' },
  { i: 'se fâcher', de: 'sich ärgern / wütend werden' },
  { i: "s'ennuyer", de: 'sich langweilen' },
  { i: 'se reposer', de: 'sich ausruhen' },
  { i: 'se dépêcher', de: 'sich beeilen' },
  { i: 'déménager', de: 'umziehen' },
  { i: "s'apercevoir", de: 'bemerken', base: 'cevoir' },
  { i: "s'occuper", de: 'sich kümmern (um)' },
  { i: 'se plaindre', de: 'sich beschweren' },
  { i: "s'habituer", de: 'sich gewöhnen' },
  { i: "s'approcher", de: 'sich nähern' },
  { i: "s'éloigner", de: 'sich entfernen' },
  { i: 'se cacher', de: 'sich verstecken' },
  // ── everyday actions ──
  { i: 'allumer', de: 'anmachen / einschalten' },
  { i: 'éteindre', de: 'ausmachen / ausschalten' },
  { i: 'cuire', de: 'kochen / garen' },
  { i: 'préparer', de: 'vorbereiten / zubereiten' },
  { i: 'commander', de: 'bestellen' },
  { i: 'réserver', de: 'reservieren / buchen' },
  { i: 'louer', de: 'mieten / vermieten' },
  { i: 'dépenser', de: 'ausgeben (Geld)' },
  { i: 'économiser', de: 'sparen' },
  { i: 'construire', de: 'bauen' },
  { i: 'remplir', de: 'füllen', g2: true },
  { i: 'casser', de: 'kaputt machen / brechen' },
  { i: 'réparer', de: 'reparieren' },
  { i: 'expédier', de: 'verschicken' },
  { i: 'téléphoner', de: 'telefonieren' },
  { i: 'fumer', de: 'rauchen' },
  { i: 'toucher', de: 'berühren' },
  { i: 'couper', de: 'schneiden' },
  { i: 'se tromper', de: 'sich irren' },
  { i: 'essayer', de: 'probieren / versuchen', notes: "j'essaie oder j'essaye" },
  { i: 'réussir', de: 'schaffen / gelingen', g2: true },
  { i: 'inviter', de: 'einladen' },
  { i: 'visiter', de: 'besichtigen' },
  { i: 'rencontrer', de: 'treffen' },
  { i: 'saluer', de: 'grüßen' },
  { i: 'embrasser', de: 'küssen / umarmen' },
  { i: 'rire', de: 'lachen' },
  { i: 'sourire', de: 'lächeln', base: 'rire' },
  { i: 'pleurer', de: 'weinen' },
  { i: 'espérer', de: 'hoffen' },
  { i: 'rêver', de: 'träumen' },
  { i: 'désirer', de: 'wünschen' },
  { i: 'détester', de: 'hassen' },
  { i: 'craindre', de: 'fürchten' },
  { i: 'souffrir', de: 'leiden' },
  { i: 'manquer', de: 'fehlen' },
  { i: 'grandir', de: 'wachsen', g2: true },
  { i: 'vieillir', de: 'alt werden', g2: true },
  { i: 'maigrir', de: 'abnehmen', g2: true },
  { i: 'grossir', de: 'zunehmen', g2: true },
  { i: 'guérir', de: 'heilen / gesund werden', g2: true },
  { i: 'disparaître', de: 'verschwinden', base: 'paraître' },
  { i: 'apparaître', de: 'erscheinen', etre: true, base: 'paraître' },
  { i: 'fuir', de: 'fliehen' },
  { i: 'passer', de: 'vorbeigehen / verbringen' },
  { i: 'tourner', de: 'drehen / abbiegen' },
  { i: 'traverser', de: 'überqueren' },
  { i: 'arrêter', de: 'anhalten / stoppen' },
  { i: 'continuer', de: 'weitermachen / fortsetzen' },
  { i: 'cesser', de: 'aufhören' },
  { i: 'promettre', de: 'versprechen', base: 'mettre' },
  { i: 'permettre', de: 'erlauben', base: 'mettre' },
  { i: 'admettre', de: 'zugeben', base: 'mettre' },
  { i: 'surprendre', de: 'überraschen', base: 'prendre' },
  { i: 'reprendre', de: 'wieder aufnehmen', base: 'prendre' },
  { i: 'décrire', de: 'beschreiben', base: 'crire' },
  { i: "s'inscrire", de: 'sich anmelden / einschreiben', base: 'crire' },
  { i: 'exiger', de: 'verlangen / fordern' },
  { i: 'obtenir', de: 'erhalten / erreichen', base: 'tenir' },
  { i: 'maintenir', de: 'beibehalten', base: 'tenir' },
  { i: 'soutenir', de: 'unterstützen / behaupten', base: 'tenir' },
  { i: 'contenir', de: 'enthalten', base: 'tenir' },
  { i: 'appartenir', de: 'gehören', base: 'tenir' },
  { i: 'intervenir', de: 'eingreifen', base: 'venir' },
  { i: 'proposer', de: 'vorschlagen' },
  { i: 'composer', de: 'zusammensetzen / komponieren' },
  { i: 'supposer', de: 'annehmen / vermuten' },
  { i: 'traduire', de: 'übersetzen' },
  { i: 'produire', de: 'herstellen / produzieren' },
  { i: 'mener', de: 'führen / leiten', notes: 'je mène, nous menons' },
  { i: 'réduire', de: 'reduzieren' },
  { i: 'introduire', de: 'einführen' },
  { i: 'cueillir', de: 'pflücken / sammeln' },
  { i: 'accueillir', de: 'empfangen / aufnehmen', base: 'cueillir' },
  { i: 'enlever', de: 'wegnehmen / ausziehen' },
  { i: 'bouger', de: 'bewegen' },
  { i: 'discuter', de: 'diskutieren' },
  { i: 'exprimer', de: 'ausdrücken' },
  { i: 'diviser', de: 'teilen' },
  { i: 'partager', de: 'teilen (mit anderen)' },
  { i: 'tuer', de: 'töten' },
  { i: 'cacher', de: 'verstecken' },
  { i: 'entendre', de: 'hören' },
  { i: 'prétendre', de: 'behaupten' },
  { i: 'corriger', de: 'korrigieren' },
  { i: 'élire', de: 'wählen (Wahl)', base: 'lire' },
  { i: 'diriger', de: 'leiten / dirigieren' },
  { i: 'protéger', de: 'schützen' },
  { i: 'détruire', de: 'zerstören' },
  { i: 'rejoindre', de: 'erreichen / sich anschließen' },
  { i: 'ajouter', de: 'hinzufügen' },
  { i: 'peindre', de: 'malen' },
  { i: 'pousser', de: 'schieben / drücken' },
  { i: 'serrer', de: 'drücken / festziehen' },
  { i: 'embaucher', de: 'einstellen' },
  { i: 'résoudre', de: 'lösen' },
  { i: 'convaincre', de: 'überzeugen', base: 'vaincre' },
  { i: 'parcourir', de: 'zurücklegen (Strecke)', base: 'courir' },
  { i: 'secourir', de: 'zu Hilfe kommen', base: 'courir' },
  { i: 'prévoir', de: 'vorhersehen' },
  { i: 'revoir', de: 'wiedersehen / überarbeiten', base: 'voir' },
  { i: 'exister', de: 'existieren' },
  { i: 'insister', de: 'bestehen auf' },
  { i: 'résister', de: 'widerstehen' },
  { i: 'assister', de: 'beiwohnen' },
  { i: 'valoir', de: 'wert sein / gelten' },
  { i: 'profiter', de: 'genießen / profitieren' },
  { i: 'se taire', de: 'schweigen', base: 'taire' },
  { i: 'couvrir', de: 'bedecken' },
  { i: 'découvrir', de: 'entdecken' },
  // ── A2–B1 verbs ──
  { i: 'accepter', de: 'annehmen / akzeptieren' },
  { i: 'accompagner', de: 'begleiten' },
  { i: 'affronter', de: 'sich stellen / angehen' },
  { i: 'agir', de: 'handeln', g2: true },
  { i: "s'entraîner", de: 'trainieren' },
  { i: 'lever', de: 'heben / erhöhen' },
  { i: 'annoncer', de: 'ankündigen' },
  { i: 'apprécier', de: 'schätzen' },
  { i: 'goûter', de: 'probieren (Essen)' },
  { i: 'attaquer', de: 'angreifen' },
  { i: 'augmenter', de: 'erhöhen / steigen' },
  { i: 'prévenir', de: 'benachrichtigen / warnen', base: 'venir' },
  { i: 'mouiller', de: 'nass machen' },
  { i: 'brûler', de: 'brennen / verbrennen' },
  { i: 'jeter', de: 'werfen / wegwerfen', notes: 'je jette, nous jetons' },
  { i: 'se calmer', de: 'sich beruhigen' },
  { i: 'causer', de: 'verursachen' },
  { i: 'célébrer', de: 'feiern' },
  { i: 'bavarder', de: 'plaudern' },
  { i: 'frapper', de: 'schlagen / klopfen' },
  { i: 'combattre', de: 'kämpfen', base: 'battre' },
  { i: 'confirmer', de: 'bestätigen' },
  { i: 'considérer', de: 'betrachten / berücksichtigen' },
  { i: 'conseiller', de: 'raten / empfehlen' },
  { i: 'compter', de: 'zählen' },
  { i: 'contrôler', de: 'kontrollieren / prüfen' },
  { i: 'copier', de: 'kopieren / abschreiben' },
  { i: 'créer', de: 'erschaffen / erstellen' },
  { i: 'soigner', de: 'pflegen / behandeln' },
  { i: 'déclarer', de: 'erklären / aussagen' },
  { i: 'défendre', de: 'verteidigen' },
  { i: 'démontrer', de: 'beweisen / zeigen' },
  { i: 'dessiner', de: 'zeichnen' },
  { i: 'déranger', de: 'stören' },
  { i: 'exagérer', de: 'übertreiben' },
  { i: 'éviter', de: 'vermeiden' },
  { i: 'fêter', de: 'feiern' },
  { i: 'signer', de: 'unterschreiben' },
  { i: 'fournir', de: 'liefern / bereitstellen', g2: true },
  { i: 'gérer', de: 'verwalten / managen' },
  { i: 'crier', de: 'schreien' },
  { i: 'imaginer', de: 'sich vorstellen' },
  { i: 'empêcher', de: 'verhindern' },
  { i: 'indiquer', de: 'zeigen / angeben' },
  { i: 'informer', de: 'informieren' },
  { i: 'insérer', de: 'einfügen' },
  { i: 'intéresser', de: 'interessieren' },
  { i: 'inventer', de: 'erfinden' },
  { i: 'lancer', de: 'werfen / starten' },
  { i: 'attacher', de: 'binden / festmachen' },
  { i: 'libérer', de: 'befreien' },
  { i: 'se disputer', de: 'streiten' },
  { i: 'mentir', de: 'lügen' },
  { i: 'mériter', de: 'verdienen (Lob etc.)' },
  { i: 'mesurer', de: 'messen' },
  { i: 'remarquer', de: 'bemerken' },
  { i: 'obliger', de: 'zwingen / verpflichten' },
  { i: 'occuper', de: 'besetzen / beschäftigen' },
  { i: 'offenser', de: 'beleidigen' },
  { i: 'organiser', de: 'organisieren' },
  { i: 'observer', de: 'beobachten' },
  { i: 'se garer', de: 'parken' },
  { i: 'participer', de: 'teilnehmen' },
  { i: 'pardonner', de: 'verzeihen' },
  { i: 'peser', de: 'wiegen' },
  { i: 'posséder', de: 'besitzen' },
  { i: 'prier', de: 'beten / bitten' },
  { i: 'présenter', de: 'vorstellen / präsentieren' },
  { i: 'prêter', de: 'leihen' },
  { i: 'interdire', de: 'verbieten' },
  { i: 'raconter', de: 'erzählen' },
  { i: 'représenter', de: 'darstellen / vertreten' },
  { i: 'réaliser', de: 'verwirklichen' },
  { i: 'rendre', de: 'zurückgeben / machen zu' },
  { i: 'respirer', de: 'atmen' },
  { i: 'reconnaître', de: 'erkennen / anerkennen', base: 'connaître' },
  { i: 'remercier', de: 'danken' },
  { i: 'risquer', de: 'riskieren' },
  { i: 'respecter', de: 'respektieren' },
  { i: 'sauver', de: 'retten' },
  { i: 'skier', de: 'Ski fahren' },
  { i: "s'excuser", de: 'sich entschuldigen' },
  { i: 'ranger', de: 'aufräumen / ordnen' },
  { i: 'souffler', de: 'blasen / pusten' },
  { i: 'supporter', de: 'ertragen' },
  { i: 'dépasser', de: 'überholen / überschreiten' },
  { i: 'déplacer', de: 'verschieben / verstellen' },
  { i: 'remplacer', de: 'ersetzen' },
  { i: 'gaspiller', de: 'verschwenden' },
  { i: 'imprimer', de: 'drucken' },
  { i: 'suggérer', de: 'vorschlagen' },
  { i: 'surmonter', de: 'überwinden' },
  { i: 'tirer', de: 'ziehen' },
  { i: 'trahir', de: 'verraten / betrügen', g2: true },
  { i: 'traiter', de: 'behandeln' },
  { i: 'unir', de: 'vereinen / verbinden', g2: true },
  { i: 'évaluer', de: 'bewerten' },
  { i: 'voter', de: 'wählen / abstimmen' },
];

// ─── Rule engine ─────────────────────────────────────────────────────────────────

const AVOIR_PRES: Six = ['ai', 'as', 'a', 'avons', 'avez', 'ont'];
const ETRE_PRES: Six = ['suis', 'es', 'est', 'sommes', 'êtes', 'sont'];
const REFLEXIVE: Six = ['me', 'te', 'se', 'nous', 'vous', 'se'];
// Verbs without a natural imperative (besides pronominal ones).
const NO_IMPERATIVE = new Set(['pouvoir', 'devoir', 'valoir']);

const startsWithVowel = (w: string) => /^[aeiouyàâäéèêëîïôöûùüh]/i.test(w);
// me/te/se elide before a vowel or mute h: m'habille, t'es, s'est.
function withPronoun(pron: string, word: string): string {
  return pron.length === 2 && startsWithVowel(word) ? `${pron[0]}'${word}` : `${pron} ${word}`;
}

// Regular -er present with the spelling changes.
function erPresent(inf: string): Six {
  const s = inf.slice(0, -2);
  const nous = s.endsWith('g') ? s + 'eons' : s.endsWith('c') ? s.slice(0, -1) + 'çons' : s + 'ons';
  let boot = s; // stem for je, tu, il, ils
  if (/(ay|oy|uy)$/.test(s)) boot = s.slice(0, -1) + 'i';               // paie, nettoie, ennuie
  else if (DOUBLING.has(inf)) boot = s + s.slice(-1);                     // appelle, jette
  else if (/é[^aeiouyàâäéèêëîïôöûùü]+$/.test(s)) boot = s.replace(/é([^aeiouyàâäéèêëîïôöûùü]+)$/, 'è$1'); // préfère
  else if (/e[^aeiouyàâäéèêëîïôöûùü]$/.test(s)) boot = s.replace(/e([^aeiouyàâäéèêëîïôöûùü])$/, 'è$1');     // achète, lève
  const forms: Six = [boot + 'e', boot + 'es', boot + 'e', nous, s + 'ez', boot + 'ent'];
  // -ayer verbs keep both spellings: je paie / je paye
  if (/ay$/.test(s)) return forms.map((f, i) => (i === 3 || i === 4 ? f : `${f} / ${s}${f.slice(boot.length)}`)) as Six;
  return forms;
}

function futureStem(inf: string): string | string[] {
  const s = inf.slice(0, -2);
  if (/(oy|uy)$/.test(s)) return s.slice(0, -1) + 'ier';                  // nettoierai
  if (/ay$/.test(s)) return [s.slice(0, -1) + 'ier', inf];                // paierai / payerai
  if (DOUBLING.has(inf)) return s + s.slice(-1) + 'er';                   // appellerai
  if (/e[^aeiouyàâäéèêëîïôöûùü]$/.test(s)) return s.replace(/e([^aeiouyàâäéèêëîïôöûùü])$/, 'è$1') + 'er'; // achèterai
  return inf;                                                             // préférerai
}

interface Resolved {
  pres: Six;
  pp: string;
  fut: string[]; // one or two accepted stems
  subj?: Six;
  impv?: Three;
  impf?: string;
  dropTuS: boolean; // imperative tu without -s (parle, ouvre, va)
}

// Whole families that follow one pattern.
function patternFor(inf: string): Irregular | undefined {
  if (inf.endsWith('indre')) return indreLike(inf);            // peindre, craindre, éteindre, rejoindre
  if (inf.endsWith('uire')) return uireLike(inf);              // conduire, construire, traduire, cuire
  if (/(vrir|frir)$/.test(inf)) return ouvrirLike(inf);        // ouvrir, offrir, couvrir, souffrir
  return undefined;
}

function resolve(spec: VerbSpec, inf: string): Resolved {
  if (spec.base && !inf.endsWith(spec.base)) throw new Error(`${inf}: base ${spec.base} is not a suffix`);
  const irr = IRREGULAR[spec.base ?? inf] ?? patternFor(inf);
  if (irr) {
    const prefix = spec.base ? inf.slice(0, inf.length - spec.base.length) : '';
    const p = (x: string) => prefix + x;
    return {
      pres: irr.pres.map(p) as Six,
      pp: p(irr.pp),
      fut: [p(irr.fut)],
      subj: irr.subj?.map(p) as Six | undefined,
      impv: irr.impv?.map(p) as Three | undefined,
      impf: irr.impf && p(irr.impf),
      dropTuS: /es$/.test(irr.pres[1]) || irr.pres[1] === 'vas',
    };
  }
  if (spec.g2) {
    const s = inf.slice(0, -2);
    return {
      pres: [s + 'is', s + 'is', s + 'it', s + 'issons', s + 'issez', s + 'issent'],
      pp: s + 'i', fut: [inf], dropTuS: false,
    };
  }
  if (inf.endsWith('re')) { // vendre, attendre, répondre …
    const s = inf.slice(0, -2);
    return { pres: [s + 's', s + 's', s, s + 'ons', s + 'ez', s + 'ent'], pp: s + 'u', fut: [s + 'r'], dropTuS: false };
  }
  // -er (the default)
  const fs = FUTURE_OVERRIDE[inf] ?? futureStem(inf);
  return { pres: erPresent(inf), pp: inf.slice(0, -2) + 'é', fut: Array.isArray(fs) ? fs : [fs], dropTuS: true };
}

const first = (f: string) => f.split(' / ')[0];

// Stem + ending, fixing -ger/-cer before i (mangeions → mangions, commençions → commencions).
function join(stem: string, ending: string): string {
  if (ending.startsWith('i') && stem.endsWith('ge')) return stem.slice(0, -1) + ending;
  if (ending.startsWith('i') && stem.endsWith('ç')) return stem.slice(0, -1) + 'c' + ending;
  return stem + ending;
}

function build(spec: VerbSpec): CatalogVerb {
  const pronominal = /^(se |s')/.test(spec.i);
  const inf = spec.i.replace(/^(se |s')/, '');
  const r = resolve(spec, inf);
  const reflexAt = (forms: Six): Six =>
    (pronominal ? forms.map((f, i) => f.split(' / ').map(v => withPronoun(REFLEXIVE[i], v)).join(' / ')) : forms) as Six;

  const nousStem = first(r.pres[3]).slice(0, -3); // parlons → parl
  const impfStem = r.impf ?? nousStem;
  const imparfait = ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'].map(e => join(impfStem, e)) as Six;

  const withStems = (endings: string[]) =>
    endings.map(e => r.fut.map(st => st + e).join(' / ')) as Six;
  const futur = withStems(['ai', 'as', 'a', 'ons', 'ez', 'ont']);
  const conditionnel = withStems(['ais', 'ais', 'ait', 'ions', 'iez', 'aient']);

  // je/tu/il/ils from the ils stem (prennent → prenn-), nous/vous from nous;
  // both spellings where the present has two (paie / paye).
  const ilsStems = r.pres[5].split(' / ').map(f => f.slice(0, -3));
  const fromIls = (e: string) => ilsStems.map(st => st + e).join(' / ');
  const subjonctif =
    r.subj ??
    ([fromIls('e'), fromIls('es'), fromIls('e'), join(nousStem, 'ions'), join(nousStem, 'iez'), fromIls('ent')] as Six);

  // Passé composé: avoir/être + participle; with être the participle agrees:
  // "suis allé(e)", "sommes allé(e)s" (both endings accepted when checking).
  const withEtre = spec.etre || pronominal;
  const plural = r.pp.endsWith('s') ? '(es)' : '(e)s'; // assis(es), allé(e)s
  const passe = (withEtre
    ? ETRE_PRES.map((a, i) => `${a} ${r.pp}${i < 3 ? '(e)' : plural}`)
    : AVOIR_PRES.map(a => `${a} ${r.pp}`)) as Six;

  let imperatif: Three | undefined;
  if (!pronominal && !NO_IMPERATIVE.has(inf)) {
    const tu = r.pres[1].split(' / ').map(f => (r.dropTuS && f.endsWith('s') ? f.slice(0, -1) : f)).join(' / ');
    imperatif = r.impv ?? [tu, first(r.pres[3]), first(r.pres[4])];
  }

  return {
    infinitive: spec.i,
    de: spec.de,
    presente: reflexAt(r.pres),
    passe: reflexAt(passe),
    imparfait: reflexAt(imparfait),
    futur: reflexAt(futur),
    conditionnel: reflexAt(conditionnel),
    subjonctif: reflexAt(subjonctif),
    imperatif,
    notes: spec.notes,
  };
}

export const VERB_CATALOG: CatalogVerb[] = VERB_SPECS.map(build);

const TENSE_NAMES: Record<FrTenseId, string> = {
  present: 'Present (Présent)',
  passe_compose: 'Perfect (Passé composé)',
  imparfait: 'Imperfect (Imparfait)',
  futur: 'Future (Futur simple)',
  imperatif: 'Imperative (Impératif)',
  conditionnel: 'Conditional (Conditionnel)',
  subjonctif: 'Subjunctive (Subjonctif présent)',
};

function tenseSection(verb: CatalogVerb, t: FrTenseId) {
  const six = (answers: Six, notes?: string, pronouns: readonly string[] = PRONOUNS) => ({
    tense: t, tenseName_de: TENSE_NAMES[t], pronouns: [...pronouns], answers: [...answers], notes,
  });
  switch (t) {
    case 'present': return six(verb.presente, verb.notes);
    case 'passe_compose': return six(verb.passe);
    case 'imparfait': return six(verb.imparfait);
    case 'futur': return six(verb.futur);
    case 'conditionnel': return six(verb.conditionnel);
    case 'subjonctif': return six(verb.subjonctif, undefined, SUBJ_PRONOUNS);
    case 'imperatif':
      return verb.imperatif
        ? { tense: t, tenseName_de: TENSE_NAMES[t], pronouns: [...IMPV_PRONOUNS], answers: [...verb.imperatif] }
        : null;
  }
}

export function verbToExercise(verb: CatalogVerb, tenses: FrTenseId[]): ConjugationExercise {
  const wanted = FR_TENSES.map(t => t.id).filter(id => tenses.includes(id));
  let sections = wanted
    .map(t => tenseSection(verb, t))
    .filter((s): s is NonNullable<typeof s> => s !== null);
  if (sections.length === 0) sections = [tenseSection(verb, 'present')!];
  const names = sections.map(s => FR_TENSES.find(t => t.id === s.tense)!.label).join(', ');
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
