import type { Lang } from './lang';
import type { VocabPack } from './content';
import type { VocabEntry, ConjugationRecord, GrammarRecord, SentenceProgress, MistakeItem } from './types';
import type { GrammarItem, GrammarTopic } from './grammar-exercises';
import type { VocabExample } from './vocab-examples';
import { normWord } from './norm';
import { VOCAB_KNOWN_LEVEL, effectiveVocabLevel, isDue } from './srs';
import { dueVerbs } from './verb-review';

// "Today": one mixed round (words, verb forms, grammar, sentences, dictation) so
// nobody has to decide what to practise. Builders are pure; the page fetches data.

export const ROUND_PLAN = { vocab: 10, verbs: 5, grammar: 5, sentences: 2, dictation: 1 };

export type RoundStep =
  | {
      kind: 'vocab';
      key: string;          // normWord of the target word
      de: string;
      target: string;
      askTarget: boolean;   // true ⇒ target word shown, German asked
      vocabId?: string;     // existing entry (review); absent ⇒ new word
      currentLevel: number;
      example?: string;
    }
  | { kind: 'verb'; verb: string; tense: string; tenseLabel: string; pronoun: string; answer: string }
  | { kind: 'grammar'; topicId: string; topicTitle: string; item: GrammarItem }
  | { kind: 'sentence'; key: string; de: string; text: string }
  | { kind: 'dictation'; key: string; de: string; text: string }
  | { kind: 'mistake'; mistake: MistakeItem };

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function vocabLevel(v: VocabEntry): number {
  const raw = v.level !== undefined ? v.level : v.status === 'bekannt' ? VOCAB_KNOWN_LEVEL : 1;
  return effectiveVocabLevel(raw, v.nextReview);
}

// Due reviews first, then new words in learning order (beginners: starter set first).
export function vocabSteps(
  vocab: VocabEntry[],
  pack: VocabPack,
  beginner: boolean,
  lang: Lang,
  examples: Map<string, VocabExample>,
  askTarget: () => boolean,
  n: number = ROUND_PLAN.vocab,
): RoundStep[] {
  const norm = (s: string) => normWord(s, lang);
  const due = shuffle(
    vocab.filter(v => {
      const l = vocabLevel(v);
      return l > 0 && l < VOCAB_KNOWN_LEVEL && isDue(v.nextReview);
    }),
  ).slice(0, n);
  const steps: RoundStep[] = due.map(v => ({
    kind: 'vocab',
    key: norm(v.word),
    de: v.translation,
    target: v.word,
    askTarget: askTarget(),
    vocabId: v.id,
    currentLevel: vocabLevel(v),
    example: examples.get(norm(v.word))?.text || v.example,
  }));

  const seen = new Set(vocab.map(v => norm(v.word)));
  const source = beginner ? [...pack.starter, ...pack.catalog] : pack.catalog;
  for (const w of source) {
    if (steps.length >= n) break;
    const key = norm(w.target);
    if (seen.has(key)) continue;
    seen.add(key);
    steps.push({
      kind: 'vocab',
      key,
      de: w.de,
      target: w.target,
      askTarget: askTarget(),
      currentLevel: 1,
      example: examples.get(key)?.text,
    });
  }
  return steps;
}

// Which verbs to ask: due for review first, then ones with recent mistakes, then
// other practised verbs, then the next new verbs of the catalog.
export function pickRoundVerbs(
  records: ConjugationRecord[],
  catalog: { infinitive: string }[],
  n: number = ROUND_PLAN.verbs,
): string[] {
  const out: string[] = [];
  const add = (v: string) => { if (out.length < n && !out.includes(v)) out.push(v); };
  for (const r of dueVerbs(records)) add(r.verb);
  for (const r of shuffle(records.filter(r => r.sections.some(s => s.recentMistakes.length > 0)))) add(r.verb);
  for (const r of shuffle(records)) add(r.verb);
  const known = new Set(records.map(r => r.verb.toLowerCase()));
  for (const v of catalog) if (!known.has(v.infinitive.toLowerCase())) add(v.infinitive);
  return out;
}

// Grammar: topics you've started but not mastered, then the next new ones.
export function grammarSteps(
  topics: GrammarTopic[],
  records: GrammarRecord[],
  beginner: boolean,
  n: number = ROUND_PLAN.grammar,
): RoundStep[] {
  const rec = new Map(records.map(r => [r.id, r]));
  const available = topics.filter(t => !beginner || t.level === 'A1');
  const started = available.filter(t => rec.has(t.id) && !rec.get(t.id)!.mastered);
  const fresh = available.filter(t => !rec.has(t.id));
  const mastered = shuffle(available.filter(t => rec.get(t.id)?.mastered));
  const chosen = [...shuffle(started), ...fresh, ...mastered].slice(0, 3);
  const items = shuffle(chosen.flatMap(t => t.items.map(item => ({ t, item })))).slice(0, n);
  return items.map(({ t, item }) => ({ kind: 'grammar', topicId: t.id, topicTitle: t.title, item }));
}

// Sentences of your own words: due ones first, then new ones. Plus one dictation.
export function sentenceSteps(
  vocab: VocabEntry[],
  examples: Map<string, VocabExample>,
  progress: SentenceProgress[],
  lang: Lang,
): RoundStep[] {
  const pool: { key: string; text: string; de: string }[] = [];
  const seen = new Set<string>();
  for (const v of vocab) {
    const key = normWord(v.word, lang);
    const ex = examples.get(key);
    if (seen.has(key) || !ex?.text || !ex.de) continue;
    seen.add(key);
    pool.push({ key, text: ex.text, de: ex.de });
  }
  const prog = new Map(progress.map(p => [p.key, p]));
  const due = shuffle(pool.filter(p => { const r = prog.get(p.key); return r && r.level < 5 && isDue(r.nextReview); }));
  const fresh = pool.filter(p => !prog.has(p.key));
  const sentences = [...due, ...fresh].slice(0, ROUND_PLAN.sentences);

  // Dictation: a short sentence not already used above (catalog sentences if needed).
  const used = new Set(sentences.map(s => s.key));
  const short = (t: string) => t.split(/\s+/).length <= 10;
  let dict = shuffle(pool.filter(p => !used.has(p.key) && short(p.text)))[0];
  if (!dict) {
    // Early on: one of the first (easiest) catalog sentences, at random.
    const early: { key: string; text: string; de: string }[] = [];
    for (const [key, ex] of examples) {
      if (early.length >= 150) break;
      if (!used.has(key) && ex.text && ex.de && short(ex.text)) early.push({ key, text: ex.text, de: ex.de });
    }
    dict = shuffle(early)[0];
  }

  return [
    ...sentences.map(s => ({ kind: 'sentence' as const, ...s })),
    ...(dict ? [{ kind: 'dictation' as const, ...dict }] : []),
  ];
}
