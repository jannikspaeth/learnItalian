import { ConjugationExercise } from './types';

// ─── Italian verb catalog ───────────────────────────────────────────────────────
// Each verb is a short spec; the forms for presente, passato prossimo and futuro
// semplice are derived by the rule engine below. Regular verbs need only the
// infinitive and meaning. Irregular verbs get their real forms from IRREGULAR
// (either directly by infinitive, or via `base` for prefixed verbs such as
// ottenere → tenere). The ORDER of VERB_SPECS is the teaching order.

type Six = [string, string, string, string, string, string];

export interface CatalogVerb {
  infinitive: string;
  de: string;
  presente: Six;
  // Optional so present-only verbs stay possible (verbToExercise falls back).
  passato?: Six;
  futuro?: Six;
  notesPresente?: string;
  notesPassato?: string;
}

export const PRONOUNS = ['io', 'tu', 'lui / lei', 'noi', 'voi', 'loro'] as const;

interface VerbSpec {
  i: string;            // infinitive; reflexives end in -si (alzarsi)
  de: string;
  aux?: 'essere';       // default avere; reflexives always use essere
  isc?: true;           // -ire verb with -isc- in the present (finisco)
  pp?: string;          // irregular past participle
  base?: string;        // conjugate like this IRREGULAR entry, keeping the prefix
  notes?: string;       // shown with the present tense
  notesPassato?: string;
}

interface Irregular {
  pres?: Six;
  fut?: string;         // future stem, e.g. 'andr' → andrò
  pp?: string;
  aux?: 'essere';
}

const IRREGULAR: Record<string, Irregular> = {
  essere:   { pres: ['sono', 'sei', 'è', 'siamo', 'siete', 'sono'], fut: 'sar', pp: 'stato', aux: 'essere' },
  avere:    { pres: ['ho', 'hai', 'ha', 'abbiamo', 'avete', 'hanno'], fut: 'avr' },
  andare:   { pres: ['vado', 'vai', 'va', 'andiamo', 'andate', 'vanno'], fut: 'andr', aux: 'essere' },
  fare:     { pres: ['faccio', 'fai', 'fa', 'facciamo', 'fate', 'fanno'], fut: 'far', pp: 'fatto' },
  dare:     { pres: ['do', 'dai', 'dà', 'diamo', 'date', 'danno'], fut: 'dar' },
  stare:    { pres: ['sto', 'stai', 'sta', 'stiamo', 'state', 'stanno'], fut: 'star', aux: 'essere' },
  dire:     { pres: ['dico', 'dici', 'dice', 'diciamo', 'dite', 'dicono'], fut: 'dir', pp: 'detto' },
  venire:   { pres: ['vengo', 'vieni', 'viene', 'veniamo', 'venite', 'vengono'], fut: 'verr', pp: 'venuto', aux: 'essere' },
  volere:   { pres: ['voglio', 'vuoi', 'vuole', 'vogliamo', 'volete', 'vogliono'], fut: 'vorr' },
  potere:   { pres: ['posso', 'puoi', 'può', 'possiamo', 'potete', 'possono'], fut: 'potr' },
  dovere:   { pres: ['devo', 'devi', 'deve', 'dobbiamo', 'dovete', 'devono'], fut: 'dovr' },
  sapere:   { pres: ['so', 'sai', 'sa', 'sappiamo', 'sapete', 'sanno'], fut: 'sapr' },
  uscire:   { pres: ['esco', 'esci', 'esce', 'usciamo', 'uscite', 'escono'], aux: 'essere' },
  bere:     { pres: ['bevo', 'bevi', 'beve', 'beviamo', 'bevete', 'bevono'], fut: 'berr', pp: 'bevuto' },
  tenere:   { pres: ['tengo', 'tieni', 'tiene', 'teniamo', 'tenete', 'tengono'], fut: 'terr' },
  rimanere: { pres: ['rimango', 'rimani', 'rimane', 'rimaniamo', 'rimanete', 'rimangono'], fut: 'rimarr', pp: 'rimasto', aux: 'essere' },
  scegliere:{ pres: ['scelgo', 'scegli', 'sceglie', 'scegliamo', 'scegliete', 'scelgono'], pp: 'scelto' },
  togliere: { pres: ['tolgo', 'togli', 'toglie', 'togliamo', 'togliete', 'tolgono'], pp: 'tolto' },
  cogliere: { pres: ['colgo', 'cogli', 'coglie', 'cogliamo', 'cogliete', 'colgono'], pp: 'colto' },
  salire:   { pres: ['salgo', 'sali', 'sale', 'saliamo', 'salite', 'salgono'], aux: 'essere' },
  morire:   { pres: ['muoio', 'muori', 'muore', 'moriamo', 'morite', 'muoiono'], pp: 'morto', aux: 'essere' },
  sedere:   { pres: ['siedo', 'siedi', 'siede', 'sediamo', 'sedete', 'siedono'] },
  piacere:  { pres: ['piaccio', 'piaci', 'piace', 'piacciamo', 'piacete', 'piacciono'], aux: 'essere' },
  tacere:   { pres: ['taccio', 'taci', 'tace', 'tacciamo', 'tacete', 'tacciono'] },
  porre:    { pres: ['pongo', 'poni', 'pone', 'poniamo', 'ponete', 'pongono'], fut: 'porr', pp: 'posto' },
  durre:    { pres: ['duco', 'duci', 'duce', 'duciamo', 'ducete', 'ducono'], fut: 'durr', pp: 'dotto' },
  spegnere: { pres: ['spengo', 'spegni', 'spegne', 'spegniamo', 'spegnete', 'spengono'], pp: 'spento' },
  apparire: { pres: ['appaio', 'appari', 'appare', 'appariamo', 'apparite', 'appaiono'], pp: 'apparso', aux: 'essere' },
  riempire: { pres: ['riempio', 'riempi', 'riempie', 'riempiamo', 'riempite', 'riempiono'] },
  cuocere:  { pres: ['cuocio', 'cuoci', 'cuoce', 'cuociamo', 'cuocete', 'cuociono'], pp: 'cotto' },
  vedere:   { fut: 'vedr', pp: 'visto' },
  vivere:   { fut: 'vivr', pp: 'vissuto' },
  cadere:   { fut: 'cadr', aux: 'essere' },
  godere:   { fut: 'godr' },
  // Past-participle-only irregulars (also used as `base` for prefixed verbs).
  mettere:  { pp: 'messo' },
  prendere: { pp: 'preso' },
  scrivere: { pp: 'scritto' },
  leggere:  { pp: 'letto' },
  chiedere: { pp: 'chiesto' },
  rispondere: { pp: 'risposto' },
  chiudere: { pp: 'chiuso' },
  correre:  { pp: 'corso' },
  decidere: { pp: 'deciso' },
  perdere:  { pp: 'perso' },
  vincere:  { pp: 'vinto' },
  accendere:{ pp: 'acceso' },
  aprire:   { pp: 'aperto' },
  offrire:  { pp: 'offerto' },
  soffrire: { pp: 'sofferto' },
  coprire:  { pp: 'coperto' },
  rompere:  { pp: 'rotto' },
  muovere:  { pp: 'mosso' },
  scendere: { pp: 'sceso', aux: 'essere' },
  succedere:{ pp: 'successo', aux: 'essere' },
  discutere:{ pp: 'discusso' },
  esprimere:{ pp: 'espresso' },
  ridere:   { pp: 'riso' },
  dividere: { pp: 'diviso' },
  uccidere: { pp: 'ucciso' },
  spendere: { pp: 'speso' },
  tendere:  { pp: 'teso' },
  nascondere: { pp: 'nascosto' },
  nascere:  { pp: 'nato', aux: 'essere' },
  reggere:  { pp: 'retto' },   // correggere → corretto
  dirigere: { pp: 'diretto' },
  proteggere: { pp: 'protetto' },
  distruggere: { pp: 'distrutto' },
  giungere: { pp: 'giunto' },
  dipingere:{ pp: 'dipinto' },
  spingere: { pp: 'spinto' },
  piangere: { pp: 'pianto' },
  stringere:{ pp: 'stretto' },
  assumere: { pp: 'assunto' },
  risolvere:{ pp: 'risolto' },
  sistere:  { pp: 'sistito' }, // esistere, insistere, resistere, assistere
  accorgere:{ pp: 'accorto' },
  valere:   { pres: ['valgo', 'vali', 'vale', 'valiamo', 'valete', 'valgono'], fut: 'varr', pp: 'valso', aux: 'essere' },
  parere:   { fut: 'parr', pp: 'parso', aux: 'essere' },
};

// -iare verbs whose i is stressed keep it: tu scii / invii, futuro scierò.
const STRESSED_I = new Set(['sciare', 'inviare', 'spiare', 'avviare', 'riavviare']);

const AVERE: Six = ['ho', 'hai', 'ha', 'abbiamo', 'avete', 'hanno'];
const ESSERE: Six = ['sono', 'sei', 'è', 'siamo', 'siete', 'sono'];
const REFLEXIVE: Six = ['mi', 'ti', 'si', 'ci', 'vi', 'si'];

function regularPresent(inf: string, isc: boolean): Six {
  const stem = inf.slice(0, -3);
  const cls = inf.slice(-3);
  if (cls === 'are') {
    const hard = /[cg]$/.test(stem) ? 'h' : '';
    const endsI = stem.endsWith('i');
    const tu = endsI ? (STRESSED_I.has(inf) ? stem + 'i' : stem) : stem + hard + 'i';
    const noi = endsI ? stem + 'amo' : stem + hard + 'iamo';
    return [stem + 'o', tu, stem + 'a', noi, stem + 'ate', stem + 'ano'];
  }
  if (cls === 'ere') {
    return [stem + 'o', stem + 'i', stem + 'e', stem + 'iamo', stem + 'ete', stem + 'ono'];
  }
  if (isc) {
    return [stem + 'isco', stem + 'isci', stem + 'isce', stem + 'iamo', stem + 'ite', stem + 'iscono'];
  }
  return [stem + 'o', stem + 'i', stem + 'e', stem + 'iamo', stem + 'ite', stem + 'ono'];
}

function regularFutureStem(inf: string): string {
  const stem = inf.slice(0, -3);
  const cls = inf.slice(-3);
  if (cls === 'are') {
    if (/[cg]$/.test(stem)) return stem + 'her';
    if (/[cg]i$/.test(stem) && !STRESSED_I.has(inf)) return stem.slice(0, -1) + 'er';
    return stem + 'er';
  }
  return stem + (cls === 'ere' ? 'er' : 'ir');
}

function regularParticiple(inf: string): string {
  const stem = inf.slice(0, -3);
  const cls = inf.slice(-3);
  if (cls === 'are') return stem + 'ato';
  if (cls === 'ere') return stem + (stem.endsWith('c') ? 'iuto' : 'uto'); // conosciuto
  return stem + 'ito';
}

function future(stem: string): Six {
  return [stem + 'ò', stem + 'ai', stem + 'à', stem + 'emo', stem + 'ete', stem + 'anno'];
}

function withPrefix(prefix: string, forms: Six): Six {
  return forms.map(f => prefix + f) as Six;
}

function build(spec: VerbSpec): CatalogVerb {
  const reflexive = spec.i.endsWith('si');
  const inf = reflexive ? spec.i.slice(0, -2) + 'e' : spec.i; // alzarsi → alzare

  // Irregular data: explicit base (with prefix), else the verb itself.
  let irr: Irregular = {};
  let prefix = '';
  if (spec.base) {
    irr = IRREGULAR[spec.base] ?? {};
    prefix = inf.slice(0, inf.length - spec.base.length);
  } else if (IRREGULAR[inf]) {
    irr = IRREGULAR[inf];
  }

  let pres = irr.pres ? withPrefix(prefix, irr.pres) : regularPresent(inf, !!spec.isc);
  let fut = future(irr.fut ? prefix + irr.fut : regularFutureStem(inf));
  const pp = spec.pp ?? (irr.pp ? prefix + irr.pp : regularParticiple(inf));
  const essere = reflexive || spec.aux === 'essere' || (!spec.aux && irr.aux === 'essere');

  let passato: Six;
  if (essere) {
    const s = pp.slice(0, -1); // andato → andat
    const sg = s + 'o/a';
    const pl = s + 'i/e';
    passato = ESSERE.map((a, n) => `${a} ${n < 3 ? sg : pl}`) as Six;
  } else {
    passato = AVERE.map(a => `${a} ${pp}`) as Six;
  }

  if (reflexive) {
    pres = pres.map((f, n) => `${REFLEXIVE[n]} ${f}`) as Six;
    fut = fut.map((f, n) => `${REFLEXIVE[n]} ${f}`) as Six;
    passato = passato.map((f, n) => `${REFLEXIVE[n]} ${f}`) as Six;
  }

  return {
    infinitive: spec.i,
    de: spec.de,
    presente: pres,
    passato,
    futuro: fut,
    notesPresente: spec.notes,
    notesPassato: spec.notesPassato,
  };
}

const VERB_SPECS: VerbSpec[] = [
  // ── Die wichtigsten Verben ──────────────────────────────────────────────
  { i: 'essere', de: 'sein', notes: 'Irregular. Also the auxiliary for movement / change-of-state verbs.', notesPassato: 'With essere the participle agrees: sono stato / stata' },
  { i: 'avere', de: 'haben', notes: 'Irregular; the h is silent. Auxiliary for most verbs.' },
  { i: 'fare', de: 'machen / tun', notes: 'Irregular (from Latin facere).' },
  { i: 'andare', de: 'gehen / fahren', notes: 'Irregular: vado, vai, va — but andiamo, andate.', notesPassato: 'Movement verb → essere' },
  { i: 'venire', de: 'kommen', notes: 'Irregular: vengo, vieni, viene.' },
  { i: 'stare', de: 'sich befinden / bleiben', notes: 'Come stai? = Wie geht es dir?' },
  { i: 'dire', de: 'sagen', notes: 'Irregular (from Latin dicere).' },
  { i: 'dare', de: 'geben', notes: 'dà (he gives) has an accent to tell it apart from da (from).' },
  { i: 'potere', de: 'können', notes: 'Modal verb, followed by an infinitive.' },
  { i: 'volere', de: 'wollen', notes: 'Vorrei (conditional) = ich möchte.' },
  { i: 'dovere', de: 'müssen / sollen', notes: 'Modal verb: devo, but dobbiamo.' },
  { i: 'sapere', de: 'wissen / können (gelernt)', notes: 'so, sai, sa — sapere = know a fact / know how to.' },
  { i: 'parlare', de: 'sprechen', notes: 'Regular -are model verb.' },
  { i: 'vedere', de: 'sehen', notes: 'Regular present; irregular participle visto.' },
  { i: 'prendere', de: 'nehmen', notes: 'Regular present; participle preso.' },
  { i: 'mettere', de: 'legen / stellen / setzen', notes: 'Participle messo.' },
  { i: 'sentire', de: 'hören / fühlen', notes: 'Regular -ire model verb.' },
  { i: 'capire', de: 'verstehen', isc: true, notes: '-isc- verb: capisco, capisci, capisce, capiamo, capite, capiscono.' },
  { i: 'finire', de: 'beenden / aufhören', isc: true, notes: '-isc- verb like capire.' },
  { i: 'credere', de: 'glauben', notes: 'Regular -ere model verb.' },
  { i: 'pensare', de: 'denken' },
  { i: 'trovare', de: 'finden' },
  { i: 'lasciare', de: 'lassen / verlassen', notes: 'Future: lascerò (the i disappears).' },
  { i: 'chiamare', de: 'rufen / anrufen' },
  { i: 'chiamarsi', de: 'heißen', notes: 'Reflexive: mi chiamo = ich heiße.' },
  { i: 'arrivare', de: 'ankommen', aux: 'essere' },
  { i: 'partire', de: 'abfahren / abreisen', aux: 'essere' },
  { i: 'tornare', de: 'zurückkommen', aux: 'essere' },
  { i: 'uscire', de: 'ausgehen / hinausgehen', notes: 'Irregular: esco, esci, esce — but usciamo, uscite.' },
  { i: 'entrare', de: 'hereinkommen / eintreten', aux: 'essere' },
  { i: 'restare', de: 'bleiben', aux: 'essere' },
  { i: 'rimanere', de: 'bleiben', notes: 'Irregular: rimango, rimangono.' },
  { i: 'diventare', de: 'werden', aux: 'essere' },
  { i: 'mangiare', de: 'essen', notes: 'tu mangi, noi mangiamo (no double i). Future mangerò.' },
  { i: 'bere', de: 'trinken', notes: 'Irregular stem bev-: bevo, bevi …' },
  { i: 'dormire', de: 'schlafen' },
  { i: 'lavorare', de: 'arbeiten' },
  { i: 'studiare', de: 'studieren / lernen', notes: 'tu studi, noi studiamo.' },
  { i: 'abitare', de: 'wohnen' },
  { i: 'vivere', de: 'leben', notes: 'Participle vissuto; future vivrò.' },
  { i: 'leggere', de: 'lesen', notes: 'Participle letto.' },
  { i: 'scrivere', de: 'schreiben', notes: 'Participle scritto.' },
  { i: 'aprire', de: 'öffnen', notes: 'Participle aperto.' },
  { i: 'chiudere', de: 'schließen', notes: 'Participle chiuso.' },
  { i: 'cercare', de: 'suchen', notes: 'tu cerchi, noi cerchiamo — the h keeps the hard c sound.' },
  { i: 'pagare', de: 'bezahlen', notes: 'tu paghi, noi paghiamo — the h keeps the hard g sound.' },
  { i: 'comprare', de: 'kaufen' },
  { i: 'vendere', de: 'verkaufen' },
  { i: 'chiedere', de: 'fragen / bitten um', notes: 'Participle chiesto.' },
  { i: 'rispondere', de: 'antworten', notes: 'Participle risposto.' },
  { i: 'conoscere', de: 'kennen / kennenlernen', notes: 'conosco (hard c), conosci (soft c). Participle conosciuto.' },
  { i: 'aspettare', de: 'warten' },
  { i: 'ascoltare', de: 'zuhören / hören' },
  { i: 'guardare', de: 'anschauen / schauen' },
  { i: 'giocare', de: 'spielen', notes: 'tu giochi, noi giochiamo.' },
  { i: 'cominciare', de: 'anfangen', notes: 'Future comincerò.' },
  { i: 'usare', de: 'benutzen' },
  { i: 'portare', de: 'bringen / tragen' },
  { i: 'piacere', de: 'gefallen / mögen', notes: 'Mi piace la pizza = ich mag Pizza (literally: pizza pleases me).' },
  { i: 'aiutare', de: 'helfen' },
  { i: 'amare', de: 'lieben' },
  { i: 'cambiare', de: 'ändern / wechseln' },
  { i: 'correre', de: 'laufen / rennen', notes: 'Participle corso.' },
  { i: 'camminare', de: 'gehen / spazieren' },
  { i: 'salire', de: 'hinaufgehen / einsteigen', notes: 'Irregular: salgo, salgono.' },
  { i: 'scendere', de: 'hinuntergehen / aussteigen', notes: 'Participle sceso.' },
  { i: 'cadere', de: 'fallen', notes: 'Future cadrò.' },
  { i: 'nascere', de: 'geboren werden', notes: 'Participle nato: sono nato/a nel 2000.' },
  { i: 'morire', de: 'sterben', notes: 'Irregular: muoio, muori, muore.' },
  { i: 'perdere', de: 'verlieren / verpassen', notes: 'Participle perso.' },
  { i: 'vincere', de: 'gewinnen', notes: 'Participle vinto.' },
  { i: 'decidere', de: 'entscheiden', notes: 'Participle deciso.' },
  { i: 'scegliere', de: 'wählen / aussuchen', notes: 'Irregular: scelgo, scelgono.' },
  { i: 'imparare', de: 'lernen' },
  { i: 'insegnare', de: 'unterrichten / beibringen' },
  { i: 'ricordare', de: 'erinnern' },
  { i: 'ricordarsi', de: 'sich erinnern' },
  { i: 'dimenticare', de: 'vergessen', notes: 'tu dimentichi.' },
  { i: 'preferire', de: 'bevorzugen / lieber mögen', isc: true },
  { i: 'mandare', de: 'schicken' },
  { i: 'ricevere', de: 'erhalten / bekommen' },
  { i: 'spiegare', de: 'erklären', notes: 'tu spieghi.' },
  { i: 'sembrare', de: 'scheinen', aux: 'essere' },
  { i: 'mostrare', de: 'zeigen' },
  { i: 'seguire', de: 'folgen' },
  { i: 'servire', de: 'dienen / nützlich sein' },
  { i: 'tenere', de: 'halten', notes: 'Irregular: tengo, tieni, tiene.' },
  { i: 'offrire', de: 'anbieten', notes: 'Participle offerto.' },
  { i: 'costare', de: 'kosten', aux: 'essere' },
  { i: 'viaggiare', de: 'reisen', notes: 'Future viaggerò.' },
  { i: 'guidare', de: 'fahren (Auto) / lenken' },
  { i: 'volare', de: 'fliegen' },
  { i: 'nuotare', de: 'schwimmen' },
  { i: 'ballare', de: 'tanzen' },
  { i: 'cantare', de: 'singen' },
  { i: 'suonare', de: 'spielen (Instrument) / klingeln' },
  { i: 'cucinare', de: 'kochen' },
  { i: 'pulire', de: 'putzen', isc: true },
  { i: 'lavare', de: 'waschen' },
  { i: 'lavarsi', de: 'sich waschen' },
  { i: 'alzarsi', de: 'aufstehen', notes: 'Reflexive: mi alzo alle sette.' },
  { i: 'svegliarsi', de: 'aufwachen' },
  { i: 'addormentarsi', de: 'einschlafen' },
  { i: 'vestirsi', de: 'sich anziehen' },
  { i: 'sedersi', de: 'sich setzen', notes: 'Irregular: mi siedo, ti siedi — but ci sediamo.' },
  { i: 'divertirsi', de: 'sich amüsieren / Spaß haben' },
  { i: 'sentirsi', de: 'sich fühlen' },
  { i: 'fermarsi', de: 'anhalten / stehen bleiben' },
  { i: 'preoccuparsi', de: 'sich Sorgen machen' },
  { i: 'sposarsi', de: 'heiraten' },
  { i: 'innamorarsi', de: 'sich verlieben' },
  { i: 'arrabbiarsi', de: 'sich ärgern / wütend werden' },
  { i: 'annoiarsi', de: 'sich langweilen' },
  { i: 'riposarsi', de: 'sich ausruhen' },
  { i: 'sbrigarsi', de: 'sich beeilen' },
  { i: 'trasferirsi', de: 'umziehen', isc: true },
  { i: 'accorgersi', de: 'bemerken', base: 'accorgere', notes: 'mi accorgo; participle accorto.' },
  { i: 'mettersi', de: 'anziehen (Kleidung) / sich setzen' },
  { i: 'occuparsi', de: 'sich kümmern um' },
  { i: 'lamentarsi', de: 'sich beschweren' },
  { i: 'abituarsi', de: 'sich gewöhnen' },
  { i: 'avvicinarsi', de: 'sich nähern' },
  { i: 'allontanarsi', de: 'sich entfernen' },
  { i: 'nascondersi', de: 'sich verstecken', base: 'nascondere' },

  // ── Alltag ───────────────────────────────────────────────────────────────
  { i: 'accendere', de: 'anmachen / einschalten', notes: 'Participle acceso.' },
  { i: 'spegnere', de: 'ausmachen / ausschalten', notes: 'Irregular: spengo, spengono; participle spento.' },
  { i: 'cuocere', de: 'kochen / garen', notes: 'Participle cotto.' },
  { i: 'preparare', de: 'vorbereiten / zubereiten' },
  { i: 'ordinare', de: 'bestellen / ordnen' },
  { i: 'prenotare', de: 'reservieren / buchen' },
  { i: 'affittare', de: 'mieten / vermieten' },
  { i: 'spendere', de: 'ausgeben (Geld)', notes: 'Participle speso.' },
  { i: 'risparmiare', de: 'sparen' },
  { i: 'costruire', de: 'bauen', isc: true },
  { i: 'riempire', de: 'füllen', notes: 'Irregular: riempio, riempiono.' },
  { i: 'rompere', de: 'kaputt machen / brechen', notes: 'Participle rotto.' },
  { i: 'riparare', de: 'reparieren' },
  { i: 'spedire', de: 'verschicken', isc: true },
  { i: 'telefonare', de: 'telefonieren' },
  { i: 'fumare', de: 'rauchen' },
  { i: 'toccare', de: 'berühren', notes: 'tu tocchi.' },
  { i: 'tagliare', de: 'schneiden' },
  { i: 'sbagliare', de: 'sich irren / einen Fehler machen', notes: 'tu sbagli, noi sbagliamo.' },
  { i: 'provare', de: 'probieren / versuchen' },
  { i: 'riuscire', de: 'schaffen / gelingen', base: 'uscire', notes: 'Like uscire: riesco, riesci, riesce.' },
  { i: 'invitare', de: 'einladen' },
  { i: 'visitare', de: 'besuchen / besichtigen' },
  { i: 'incontrare', de: 'treffen' },
  { i: 'salutare', de: 'grüßen' },
  { i: 'baciare', de: 'küssen', notes: 'Future bacerò.' },
  { i: 'abbracciare', de: 'umarmen' },
  { i: 'ridere', de: 'lachen', notes: 'Participle riso.' },
  { i: 'sorridere', de: 'lächeln', base: 'ridere' },
  { i: 'piangere', de: 'weinen', notes: 'Participle pianto.' },
  { i: 'sperare', de: 'hoffen' },
  { i: 'sognare', de: 'träumen' },
  { i: 'desiderare', de: 'wünschen' },
  { i: 'odiare', de: 'hassen' },
  { i: 'temere', de: 'fürchten' },
  { i: 'soffrire', de: 'leiden', notes: 'Participle sofferto.' },
  { i: 'mancare', de: 'fehlen', aux: 'essere', notes: 'Mi manchi = du fehlst mir.' },
  { i: 'crescere', de: 'wachsen', aux: 'essere', notes: 'Participle cresciuto.' },
  { i: 'invecchiare', de: 'alt werden', aux: 'essere' },
  { i: 'dimagrire', de: 'abnehmen', isc: true, aux: 'essere' },
  { i: 'ingrassare', de: 'zunehmen', aux: 'essere' },
  { i: 'guarire', de: 'heilen / gesund werden', isc: true, aux: 'essere' },
  { i: 'sparire', de: 'verschwinden', isc: true, aux: 'essere' },
  { i: 'apparire', de: 'erscheinen', notes: 'Irregular: appaio, appaiono; participle apparso.' },
  { i: 'scappare', de: 'fliehen / abhauen', aux: 'essere' },
  { i: 'fuggire', de: 'fliehen', aux: 'essere' },
  { i: 'passare', de: 'vorbeigehen / verbringen' },
  { i: 'girare', de: 'drehen / abbiegen' },
  { i: 'attraversare', de: 'überqueren' },
  { i: 'fermare', de: 'anhalten / stoppen' },
  { i: 'continuare', de: 'weitermachen / fortsetzen' },
  { i: 'smettere', de: 'aufhören', base: 'mettere' },
  { i: 'promettere', de: 'versprechen', base: 'mettere' },
  { i: 'permettere', de: 'erlauben', base: 'mettere' },
  { i: 'ammettere', de: 'zugeben', base: 'mettere' },
  { i: 'comprendere', de: 'verstehen / umfassen', base: 'prendere' },
  { i: 'sorprendere', de: 'überraschen', base: 'prendere' },
  { i: 'riprendere', de: 'wieder aufnehmen', base: 'prendere' },
  { i: 'descrivere', de: 'beschreiben', base: 'scrivere' },
  { i: 'iscriversi', de: 'sich anmelden / einschreiben', base: 'scrivere' },
  { i: 'richiedere', de: 'verlangen / beantragen', base: 'chiedere' },
  { i: 'ottenere', de: 'erhalten / erreichen', base: 'tenere' },
  { i: 'mantenere', de: 'erhalten / beibehalten', base: 'tenere' },
  { i: 'sostenere', de: 'unterstützen / behaupten', base: 'tenere' },
  { i: 'contenere', de: 'enthalten', base: 'tenere' },
  { i: 'appartenere', de: 'gehören', base: 'tenere', aux: 'essere' },
  { i: 'intervenire', de: 'eingreifen', base: 'venire' },
  { i: 'proporre', de: 'vorschlagen', base: 'porre' },
  { i: 'comporre', de: 'zusammensetzen / komponieren', base: 'porre' },
  { i: 'supporre', de: 'annehmen / vermuten', base: 'porre' },
  { i: 'tradurre', de: 'übersetzen', base: 'durre', notes: 'traduco, traduci; participle tradotto; future tradurrò.' },
  { i: 'produrre', de: 'herstellen / produzieren', base: 'durre' },
  { i: 'condurre', de: 'führen / leiten', base: 'durre' },
  { i: 'ridurre', de: 'reduzieren', base: 'durre' },
  { i: 'introdurre', de: 'einführen', base: 'durre' },
  { i: 'raccogliere', de: 'sammeln / pflücken', base: 'cogliere' },
  { i: 'accogliere', de: 'empfangen / aufnehmen', base: 'cogliere' },
  { i: 'togliere', de: 'wegnehmen / ausziehen', notes: 'Irregular: tolgo, tolgono; participle tolto.' },
  { i: 'muovere', de: 'bewegen', notes: 'Participle mosso.' },
  { i: 'promuovere', de: 'fördern / befördern', base: 'muovere' },
  { i: 'discutere', de: 'diskutieren', notes: 'Participle discusso.' },
  { i: 'esprimere', de: 'ausdrücken', notes: 'Participle espresso.' },
  { i: 'dividere', de: 'teilen', notes: 'Participle diviso.' },
  { i: 'condividere', de: 'teilen (mit anderen)', base: 'dividere' },
  { i: 'uccidere', de: 'töten', notes: 'Participle ucciso.' },
  { i: 'nascondere', de: 'verstecken', notes: 'Participle nascosto.' },
  { i: 'attendere', de: 'warten / erwarten', base: 'tendere' },
  { i: 'intendere', de: 'beabsichtigen / meinen', base: 'tendere' },
  { i: 'pretendere', de: 'verlangen', base: 'tendere' },
  { i: 'correggere', de: 'korrigieren', base: 'reggere' },
  { i: 'eleggere', de: 'wählen (Wahl)', base: 'leggere' },
  { i: 'dirigere', de: 'leiten / dirigieren', notes: 'Participle diretto.' },
  { i: 'proteggere', de: 'schützen', notes: 'Participle protetto.' },
  { i: 'distruggere', de: 'zerstören', notes: 'Participle distrutto.' },
  { i: 'raggiungere', de: 'erreichen', base: 'giungere' },
  { i: 'aggiungere', de: 'hinzufügen', base: 'giungere' },
  { i: 'dipingere', de: 'malen', notes: 'Participle dipinto.' },
  { i: 'spingere', de: 'schieben / drücken', notes: 'Participle spinto.' },
  { i: 'stringere', de: 'drücken / festziehen', notes: 'Participle stretto.' },
  { i: 'assumere', de: 'einstellen / übernehmen', notes: 'Participle assunto.' },
  { i: 'risolvere', de: 'lösen', notes: 'Participle risolto.' },
  { i: 'convincere', de: 'überzeugen', base: 'vincere' },
  { i: 'percorrere', de: 'zurücklegen (Strecke)', base: 'correre' },
  { i: 'trascorrere', de: 'verbringen (Zeit)', base: 'correre' },
  { i: 'soccorrere', de: 'zu Hilfe kommen', base: 'correre' },
  { i: 'prevedere', de: 'vorhersehen', base: 'vedere' },
  { i: 'rivedere', de: 'wiedersehen / überarbeiten', base: 'vedere' },
  { i: 'esistere', de: 'existieren', base: 'sistere', aux: 'essere' },
  { i: 'insistere', de: 'bestehen auf', base: 'sistere' },
  { i: 'resistere', de: 'widerstehen', base: 'sistere' },
  { i: 'assistere', de: 'beiwohnen / helfen', base: 'sistere' },
  { i: 'valere', de: 'wert sein / gelten', notes: 'Irregular: valgo, valgono; future varrò.' },
  { i: 'godere', de: 'genießen', notes: 'Future godrò.' },
  { i: 'tacere', de: 'schweigen', notes: 'Irregular: taccio, tacciono.' },
  { i: 'coprire', de: 'bedecken', notes: 'Participle coperto.' },
  { i: 'scoprire', de: 'entdecken', base: 'coprire' },

  // ── Weitere regelmäßige Verben ─────────────────────────────────────────
  { i: 'accettare', de: 'annehmen / akzeptieren' },
  { i: 'accompagnare', de: 'begleiten' },
  { i: 'affrontare', de: 'sich stellen / angehen' },
  { i: 'agire', de: 'handeln', isc: true },
  { i: 'allenarsi', de: 'trainieren' },
  { i: 'alzare', de: 'heben / erhöhen' },
  { i: 'annunciare', de: 'ankündigen' },
  { i: 'apprezzare', de: 'schätzen' },
  { i: 'approfittare', de: 'ausnutzen / profitieren' },
  { i: 'arrestare', de: 'verhaften' },
  { i: 'assaggiare', de: 'probieren (Essen)' },
  { i: 'attaccare', de: 'angreifen / ankleben' },
  { i: 'aumentare', de: 'erhöhen / steigen' },
  { i: 'avvisare', de: 'benachrichtigen / warnen' },
  { i: 'bagnare', de: 'nass machen' },
  { i: 'bruciare', de: 'brennen / verbrennen' },
  { i: 'buttare', de: 'werfen / wegwerfen' },
  { i: 'calmarsi', de: 'sich beruhigen' },
  { i: 'causare', de: 'verursachen' },
  { i: 'celebrare', de: 'feiern' },
  { i: 'chiacchierare', de: 'plaudern' },
  { i: 'colpire', de: 'treffen / schlagen', isc: true },
  { i: 'combattere', de: 'kämpfen' },
  { i: 'confermare', de: 'bestätigen' },
  { i: 'considerare', de: 'betrachten / berücksichtigen' },
  { i: 'consigliare', de: 'raten / empfehlen' },
  { i: 'contare', de: 'zählen' },
  { i: 'controllare', de: 'kontrollieren / prüfen' },
  { i: 'copiare', de: 'kopieren / abschreiben' },
  { i: 'creare', de: 'erschaffen / erstellen' },
  { i: 'curare', de: 'pflegen / behandeln' },
  { i: 'dichiarare', de: 'erklären / aussagen' },
  { i: 'difendere', de: 'verteidigen', pp: 'difeso' },
  { i: 'dimostrare', de: 'beweisen / zeigen' },
  { i: 'disegnare', de: 'zeichnen' },
  { i: 'disturbare', de: 'stören' },
  { i: 'domandare', de: 'fragen' },
  { i: 'esagerare', de: 'übertreiben' },
  { i: 'evitare', de: 'vermeiden' },
  { i: 'festeggiare', de: 'feiern' },
  { i: 'firmare', de: 'unterschreiben' },
  { i: 'fornire', de: 'liefern / bereitstellen', isc: true },
  { i: 'gestire', de: 'verwalten / managen', isc: true },
  { i: 'gridare', de: 'schreien' },
  { i: 'immaginare', de: 'sich vorstellen' },
  { i: 'impedire', de: 'verhindern', isc: true },
  { i: 'indicare', de: 'zeigen / angeben' },
  { i: 'informare', de: 'informieren' },
  { i: 'inserire', de: 'einfügen', isc: true },
  { i: 'interessare', de: 'interessieren' },
  { i: 'inventare', de: 'erfinden' },
  { i: 'inviare', de: 'senden / schicken', notes: 'tu invii (stressed i stays).' },
  { i: 'lanciare', de: 'werfen / starten' },
  { i: 'legare', de: 'binden / verbinden' },
  { i: 'liberare', de: 'befreien' },
  { i: 'litigare', de: 'streiten' },
  { i: 'mentire', de: 'lügen' },
  { i: 'meritare', de: 'verdienen (Lob etc.)' },
  { i: 'misurare', de: 'messen' },
  { i: 'notare', de: 'bemerken' },
  { i: 'obbligare', de: 'zwingen / verpflichten' },
  { i: 'occupare', de: 'besetzen / beschäftigen' },
  { i: 'offendere', de: 'beleidigen', pp: 'offeso' },
  { i: 'organizzare', de: 'organisieren' },
  { i: 'osservare', de: 'beobachten' },
  { i: 'parcheggiare', de: 'parken' },
  { i: 'partecipare', de: 'teilnehmen' },
  { i: 'perdonare', de: 'verzeihen' },
  { i: 'pesare', de: 'wiegen' },
  { i: 'possedere', de: 'besitzen', base: 'sedere' },
  { i: 'pregare', de: 'beten / bitten' },
  { i: 'presentare', de: 'vorstellen / präsentieren' },
  { i: 'prestare', de: 'leihen' },
  { i: 'proibire', de: 'verbieten', isc: true },
  { i: 'raccontare', de: 'erzählen' },
  { i: 'rappresentare', de: 'darstellen / vertreten' },
  { i: 'realizzare', de: 'verwirklichen' },
  { i: 'regalare', de: 'schenken' },
  { i: 'rendere', de: 'zurückgeben / machen zu', pp: 'reso' },
  { i: 'respirare', de: 'atmen' },
  { i: 'restituire', de: 'zurückgeben', isc: true },
  { i: 'riconoscere', de: 'erkennen / anerkennen' },
  { i: 'ringraziare', de: 'danken' },
  { i: 'rischiare', de: 'riskieren' },
  { i: 'rispettare', de: 'respektieren' },
  { i: 'rubare', de: 'stehlen' },
  { i: 'salvare', de: 'retten / speichern' },
  { i: 'sciare', de: 'Ski fahren', notes: 'tu scii, noi sciamo (stressed i).' },
  { i: 'scusarsi', de: 'sich entschuldigen' },
  { i: 'sistemare', de: 'ordnen / regeln' },
  { i: 'soffiare', de: 'blasen / pusten' },
  { i: 'sopportare', de: 'ertragen' },
  { i: 'sorpassare', de: 'überholen' },
  { i: 'spostare', de: 'verschieben / verstellen' },
  { i: 'sostituire', de: 'ersetzen', isc: true },
  { i: 'sprecare', de: 'verschwenden' },
  { i: 'stampare', de: 'drucken' },
  { i: 'suggerire', de: 'vorschlagen', isc: true },
  { i: 'superare', de: 'überwinden / bestehen (Prüfung)' },
  { i: 'svolgere', de: 'durchführen / abwickeln', pp: 'svolto' },
  { i: 'tirare', de: 'ziehen' },
  { i: 'tradire', de: 'verraten / betrügen', isc: true },
  { i: 'trattare', de: 'behandeln' },
  { i: 'unire', de: 'vereinen / verbinden', isc: true },
  { i: 'valutare', de: 'bewerten' },
  { i: 'vietare', de: 'verbieten' },
  { i: 'votare', de: 'wählen / abstimmen' },
];

export const VERB_CATALOG: CatalogVerb[] = VERB_SPECS.map(build);

export function verbToExercise(
  verb: CatalogVerb,
  opts?: { presentOnly?: boolean }
): ConjugationExercise {
  const presentSection = {
    tense: 'presente',
    tenseName_de: 'Present (Presente)',
    pronouns: [...PRONOUNS],
    answers: [...verb.presente],
    notes: verb.notesPresente,
  };

  // Beginners (A1) drill only the present tense.
  if (opts?.presentOnly || !verb.passato || !verb.futuro) {
    return {
      type: 'conjugation',
      title: `${verb.infinitive} – Conjugation`,
      verb: verb.infinitive,
      instruction: `Conjugate "${verb.infinitive}" (${verb.de}) in the present tense.`,
      sections: [presentSection],
    };
  }

  return {
    type: 'conjugation',
    title: `${verb.infinitive} – Conjugation`,
    verb: verb.infinitive,
    instruction: `Conjugate "${verb.infinitive}" (${verb.de}) in the present, passato prossimo and future.`,
    sections: [
      presentSection,
      {
        tense: 'passato_prossimo',
        tenseName_de: 'Perfect (Passato prossimo)',
        pronouns: [...PRONOUNS],
        answers: [...verb.passato],
        notes: verb.notesPassato,
      },
      {
        tense: 'futuro_semplice',
        tenseName_de: 'Future (Futuro semplice)',
        pronouns: [...PRONOUNS],
        answers: [...verb.futuro],
      },
    ],
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
