import type { Lang } from '../lang';
import type { VocabPack, FormsPack } from '../content';
import type { Gloss } from './types';
import { normWord } from '../norm';
import { COMMON_WORDS } from './common-words';

// Tap-to-translate: what does this word in a reading text mean? Looks in the
// text's own glossary, a list of common little words, the vocabulary catalog and
// every conjugated verb form, then tries undoing plural/feminine endings.

export interface WordInfo {
  word: string;     // as tapped
  de: string;       // German meaning
  lemma?: string;   // dictionary form to add to the word list (catalog word or infinitive)
  lemmaDe?: string; // German for the lemma, when it differs from `de`
  note?: string;    // e.g. "Form von andare"
  also?: string;    // a second reading, e.g. "costa" = die Küste / kostet
}

export interface WordIndex {
  lang: Lang;
  words: Map<string, { target: string; de: string }>;       // catalog, by normWord
  verbs: Map<string, { infinitive: string; de: string }>;   // every form → verb
}

// Pronouns and auxiliaries that appear inside conjugated forms but aren't the verb.
const FORM_STOPWORDS: Record<Lang, Set<string>> = {
  it: new Set(['mi', 'ti', 'si', 'ci', 'vi', 'che', 'io', 'tu', 'lui', 'lei', 'noi', 'voi', 'loro']),
  es: new Set(['me', 'te', 'se', 'nos', 'os', 'que', 'yo', 'tú', 'él', 'ella', 'usted']),
  fr: new Set(['me', 'te', 'se', 'nous', 'vous', 'que', 'je', 'tu', 'il', 'elle', 'ils', 'elles', 'qu', 'm', 't', 's', 'j']),
};

export function key(word: string): string {
  return word.toLowerCase().replace(/[’´`]/g, "'").trim();
}

// "andato/a" → andato, andata; "andati/e" → andati, andate; "allé(e)s" → allé, allée, allés, allées.
function expandForm(word: string): string[] {
  const out = new Set<string>();
  const slash = word.match(/^(\p{L}+?)(\p{L})\/(\p{L})$/u);
  if (slash) {
    out.add(slash[1] + slash[2]);
    out.add(slash[1] + slash[3]);
    return [...out];
  }
  const paren = word.match(/^(\p{L}+)\((\p{L}+)\)(\p{L}*)$/u);
  if (paren) {
    const [, base, opt, tail] = paren;
    out.add(base + tail);
    out.add(base + opt + tail);
    if (tail) { out.add(base); out.add(base + opt); }
    return [...out];
  }
  return [word];
}

// A past participle also appears feminine/plural: visitato → visitata, visitati …
function participleVariants(w: string, lang: Lang): string[] {
  if (lang === 'it') {
    const m = w.match(/^(\p{L}{2,}[aiu]t|\p{L}{2,}(?:ss|st|tt|rs|nt|rt|ls|lt|at|et|ut|ot|ld))o$/u);
    return m ? [m[1] + 'a', m[1] + 'i', m[1] + 'e'] : [];
  }
  if (lang === 'es') {
    const m = w.match(/^(\p{L}{2,}[ai]d)o$/u);
    return m ? [m[1] + 'a', m[1] + 'os', m[1] + 'as'] : [];
  }
  const m = w.match(/^(\p{L}{2,}(?:é|i|u|is|it|ert|ort))$/u);
  return m ? [m[1] + 'e', m[1] + 's', m[1] + 'es'] : [];
}

export function buildIndex(lang: Lang, vocab: VocabPack, forms: FormsPack): WordIndex {
  const words = new Map<string, { target: string; de: string }>();
  for (const w of [...vocab.starter, ...vocab.catalog]) {
    for (const variant of w.target.split(' / ')) {
      const k = normWord(variant, lang);
      if (k && !words.has(k)) words.set(k, { target: w.target, de: w.de });
    }
  }
  const verbs = new Map<string, { infinitive: string; de: string }>();
  const stop = FORM_STOPWORDS[lang];
  for (const v of forms.verbs) {
    const entry = { infinitive: v.infinitive, de: v.de };
    const inf = key(v.infinitive);
    if (!verbs.has(inf)) verbs.set(inf, entry);
    for (const form of v.forms) {
      for (const variant of form.split(' / ')) {
        for (const raw of variant.split(/\s+/)) {
          // Elided pronoun/article: "m'appelle" → "appelle"
          const w = key(raw).replace(/^\p{L}{1,3}'/u, '');
          for (const f of expandForm(w)) {
            for (const g of [f, ...participleVariants(f, lang)]) {
              if (!g || stop.has(g) || verbs.has(g)) continue;
              verbs.set(g, entry);
            }
          }
        }
      }
    }
  }
  return { lang, words, verbs };
}

function fromGloss(word: string, g: Gloss): WordInfo {
  return typeof g === 'string' ? { word, de: g } : { word, de: g[0], lemma: g[1] };
}

// Plural/feminine → base form candidates, most likely first.
function baseCandidates(w: string, lang: Lang): string[] {
  const c: string[] = [];
  const stem = (n: number) => w.slice(0, w.length - n);
  if (lang === 'it') {
    const sup = w.match(/^(\p{L}{2,}?)issim[oaie]$/u); // bellissima → bello, facilissimo → facile
    if (sup) c.push(sup[1] + 'o', sup[1] + 'e', sup[1]);
    if (w.endsWith('ghi')) c.push(stem(3) + 'ga');
    if (w.endsWith('che')) c.push(stem(3) + 'co');
    if (w.endsWith('chi')) c.push(stem(3) + 'co');
    if (w.endsWith('ghi')) c.push(stem(3) + 'go');
    if (w.endsWith('che')) c.push(stem(3) + 'ca');
    if (w.endsWith('ghe')) c.push(stem(3) + 'ga');
    if (w.endsWith('i')) c.push(stem(1) + 'o', stem(1) + 'e', stem(1) + 'a', stem(1) + 'io');
    if (w.endsWith('e')) c.push(stem(1) + 'a', stem(1) + 'o');
    if (w.endsWith('a')) c.push(stem(1) + 'o');
  } else if (lang === 'es') {
    if (w.endsWith('ces')) c.push(stem(3) + 'z');
    if (w.endsWith('es')) c.push(stem(2));
    if (w.endsWith('s')) c.push(stem(1));
    if (w.endsWith('as')) c.push(stem(2) + 'o');
    if (w.endsWith('a')) c.push(stem(1) + 'o');
  } else {
    if (w.endsWith('aux')) c.push(stem(3) + 'al', stem(3) + 'ail');
    if (w.endsWith('eaux')) c.push(stem(1));
    if (w.endsWith('euses')) c.push(stem(5) + 'eux');
    if (w.endsWith('euse')) c.push(stem(4) + 'eux');
    if (w.endsWith('ves')) c.push(stem(3) + 'f');
    if (w.endsWith('ve')) c.push(stem(2) + 'f');
    if (w.endsWith('nnes')) c.push(stem(3));
    if (w.endsWith('nne')) c.push(stem(2));
    if (w.endsWith('es')) c.push(stem(2), stem(1));
    if (w.endsWith('s') || w.endsWith('x')) c.push(stem(1));
    if (w.endsWith('e')) c.push(stem(1));
  }
  return c.filter(x => x.length > 1);
}

// Elision in front of a word: l'acqua, dell'anno, un'amica, c'è, j'ai, qu'il, d'accord.
function splitElision(w: string): [string, string] | null {
  const m = w.match(/^(\p{L}{1,6}')(\p{L}.*)$/u);
  return m ? [m[1], m[2]] : null;
}

export function lookup(
  raw: string,
  index: WordIndex,
  glossary: Record<string, Gloss> = {},
): WordInfo | null {
  const w = key(raw);
  if (!w) return null;
  const lang = index.lang;
  const common = COMMON_WORDS[lang];

  if (glossary[w]) return fromGloss(raw, glossary[w]);
  if (common[w]) return fromGloss(raw, common[w]);

  const word = index.words.get(normWord(w, lang));
  const verb = index.verbs.get(w);
  if (word) {
    // Same spelling as a verb form ("costa", "legge", "letto")? Mention both.
    const also =
      verb && normWord(verb.infinitive, lang) !== normWord(word.target, lang)
        ? `${verb.de} (${key(verb.infinitive) === w ? 'Verb' : `Form von ${verb.infinitive}`})`
        : undefined;
    return { word: raw, de: word.de, lemma: word.target, also };
  }

  if (verb) {
    const isInf = key(verb.infinitive) === w;
    return {
      word: raw,
      de: verb.de,
      lemma: verb.infinitive,
      note: isInf ? undefined : `Form von ${verb.infinitive}`,
    };
  }

  // l'acqua → article + noun: explain the noun, mention the little word.
  const el = splitElision(w);
  if (el) {
    const rest = lookup(el[1], index, glossary);
    if (rest) {
      const art = glossary[el[0]] ?? common[el[0]];
      const artDe = art ? (typeof art === 'string' ? art : art[0]) : '';
      const artNote = artDe ? `${el[0]} = ${artDe}` : undefined;
      return { ...rest, word: raw, note: [rest.note, artNote].filter(Boolean).join(' · ') || undefined };
    }
  }

  for (const b of baseCandidates(w, lang)) {
    const hit = index.words.get(normWord(b, lang));
    if (hit) return { word: raw, de: hit.de, lemma: hit.target, note: `Form von ${hit.target}` };
  }

  // Gerund: andando → andar/andare, jugando → jugar, siendo → ser.
  const ger = gerundBase(w, lang);
  for (const cand of ger) {
    const v = index.verbs.get(cand);
    if (v) return { word: raw, de: v.de, lemma: v.infinitive, note: `Gerundium von ${v.infinitive}` };
  }

  // Pronouns attached to an infinitive, gerund or imperative: cambiarlo, dimmelo, dándole.
  const clitic = stripClitics(w, lang);
  if (clitic) {
    for (const cand of clitic) {
      const v = index.verbs.get(cand);
      if (v) return { word: raw, de: v.de, lemma: v.infinitive, note: `${v.infinitive} + Pronomen` };
    }
  }
  return null;
}

function gerundBase(w: string, lang: Lang): string[] {
  if (lang === 'it') {
    const m = w.match(/^(\p{L}{2,})(ando|endo)$/u);
    if (!m) return [];
    return m[2] === 'ando' ? [m[1] + 'are'] : [m[1] + 'ere', m[1] + 'ire', m[1] + 're'];
  }
  if (lang === 'es') {
    const m = w.match(/^(\p{L}{1,})(ando|iendo|yendo)$/u);
    if (!m) return [];
    if (m[1] === 's' && m[2] === 'iendo') return ['ser'];
    return m[2] === 'ando' ? [m[1] + 'ar'] : [m[1] + 'er', m[1] + 'ir'];
  }
  const m = w.match(/^(\p{L}{2,})ant$/u); // participe présent: parlant → parler
  return m ? [m[1] + 'er', m[1] + 'ir', m[1] + 're'] : [];
}

const CLITICS: Partial<Record<Lang, RegExp>> = {
  it: /^(\p{L}{3,}?)((?:glie|me|te|ce|ve|se|mi|ti|ci|vi|si|gli)?(?:lo|la|li|le|ne)|mi|ti|ci|vi|si|gli|ne)$/u,
  es: /^(\p{L}{3,}?)((?:me|te|se|nos|os|le|les)?(?:lo|la|los|las|le|les)|me|te|se|nos|os)$/u,
};

function stripClitics(w: string, lang: Lang): string[] | null {
  const re = CLITICS[lang];
  const m = re && w.match(re);
  if (!m) return null;
  const base = m[1];
  const plain = base.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // dándole → dandole
  // Italian infinitives lose their final -e (cambiar-lo); the double consonant of
  // short imperatives (dim-mi → di') is undone.
  return lang === 'it'
    ? [base + 'e', base, base.replace(/(\p{L})\1$/u, '$1'), base + 're']
    : [base, plain];
}

// Split a paragraph into tappable words and the text between them. Elisions stay
// with their word (l'acqua, c'è, j'ai); "po'" keeps its apostrophe.
export function tokenize(text: string): { text: string; word: boolean }[] {
  const out: { text: string; word: boolean }[] = [];
  const re = /(\p{L}+(?:['’]\p{L}+)*['’]?)/gu;
  let last = 0;
  for (const m of text.matchAll(re)) {
    const i = m.index ?? 0;
    if (i > last) out.push({ text: text.slice(last, i), word: false });
    const t = m[0];
    // A trailing apostrophe is only part of the word for "po'" / "va'" style forms.
    if (/['’]$/.test(t) && !/^(po|va|fa|da|sta|di|mo|be|ca|pie)['’]$/i.test(t)) {
      out.push({ text: t.slice(0, -1), word: true });
      out.push({ text: t.slice(-1), word: false });
    } else {
      out.push({ text: t, word: true });
    }
    last = i + m[0].length;
  }
  if (last < text.length) out.push({ text: text.slice(last), word: false });
  return out;
}
