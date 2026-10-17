import type { IconName } from './icon-names';
import type { MistakeItem, MistakeKind } from './types';

// "My mistakes": everything answered wrong in any exercise lands here (per user and
// language, stored in the extras row). Mistake training asks each item again; it
// leaves the list once answered right MISTAKE_CLEAR_AFTER times in a row.

export const MISTAKE_CLEAR_AFTER = 2;
const MAX_MISTAKES = 300;
export const TRAINING_SIZE = 15;

export type NewMistake = Omit<MistakeItem, 'wrong' | 'right' | 'added'>;

export const MISTAKE_KINDS: { id: MistakeKind; icon: IconName; label: string; labelDe: string }[] = [
  { id: 'vocab', icon: 'book', label: 'Words', labelDe: 'Wörter' },
  { id: 'verb', icon: 'letters', label: 'Verb forms', labelDe: 'Verbformen' },
  { id: 'grammar', icon: 'bookmark', label: 'Grammar', labelDe: 'Grammatik' },
  { id: 'sentence', icon: 'pen', label: 'Sentences', labelDe: 'Sätze' },
  { id: 'dictation', icon: 'headphones', label: 'Dictation', labelDe: 'Diktat' },
  { id: 'article', icon: 'article', label: 'Articles', labelDe: 'Artikel' },
  { id: 'number', icon: 'hash', label: 'Numbers', labelDe: 'Zahlen' },
  { id: 'phrase', icon: 'chat', label: 'Phrases', labelDe: 'Wendungen' },
  { id: 'writing', icon: 'pencil', label: 'Writing', labelDe: 'Schreiben' },
];

export function kindInfo(kind: MistakeKind) {
  return MISTAKE_KINDS.find(k => k.id === kind)!;
}

// Add (or bump) mistakes; newest first, capped so the blob stays small.
export function addMistakes(
  list: MistakeItem[],
  items: NewMistake[],
  now: string = new Date().toISOString(),
): MistakeItem[] {
  const byId = new Map(list.map(m => [m.id, m]));
  for (const it of items) {
    const prev = byId.get(it.id);
    byId.delete(it.id); // re-insert so it moves to the front
    byId.set(it.id, { ...prev, ...it, wrong: (prev?.wrong ?? 0) + 1, right: 0, added: now });
  }
  return [...byId.values()]
    .sort((a, b) => b.added.localeCompare(a.added))
    .slice(0, MAX_MISTAKES);
}

// Outcome of one mistake-training question.
export function applyTraining(
  list: MistakeItem[],
  id: string,
  correct: boolean,
  userAnswer?: string,
): MistakeItem[] {
  const out: MistakeItem[] = [];
  for (const m of list) {
    if (m.id !== id) { out.push(m); continue; }
    if (correct) {
      if (m.right + 1 >= MISTAKE_CLEAR_AFTER) continue; // learned — drop it
      out.push({ ...m, right: m.right + 1 });
    } else {
      out.push({ ...m, right: 0, wrong: m.wrong + 1, userAnswer: userAnswer ?? m.userAnswer, added: new Date().toISOString() });
    }
  }
  return out;
}

export function removeMistake(list: MistakeItem[], id: string): MistakeItem[] {
  return list.filter(m => m.id !== id);
}

// A training round: the most stubborn mistakes first (most wrong, then oldest),
// optionally of one kind, in shuffled order.
export function pickTraining(list: MistakeItem[], kind: MistakeKind | 'all' = 'all', n = TRAINING_SIZE): MistakeItem[] {
  const pool = list.filter(m => kind === 'all' || m.kind === kind);
  const chosen = [...pool]
    .sort((a, b) => b.wrong - a.wrong || a.added.localeCompare(b.added))
    .slice(0, n);
  for (let i = chosen.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [chosen[i], chosen[j]] = [chosen[j], chosen[i]];
  }
  return chosen;
}

// ─── Builders (one per exercise type, so ids stay stable) ─────────────────────────

export function vocabMistake(o: {
  key: string;        // normWord of the target word
  askTarget: boolean; // true ⇒ the target word was shown, German was asked
  question: string;
  answer: string;
  target: string;
  userAnswer?: string;
}): NewMistake {
  return {
    id: `vocab:${o.key}:${o.askTarget ? 'de' : 'target'}`,
    kind: 'vocab',
    prompt: o.question,
    answer: o.answer,
    speak: o.target,
    hint: o.askTarget ? 'toDe' : 'toTarget',
    userAnswer: o.userAnswer,
  };
}

export function verbMistake(o: {
  verb: string;
  tense: string;      // tense id
  tenseLabel: string;
  pronoun: string;
  answer: string;
  userAnswer?: string;
}): NewMistake {
  return {
    id: `verb:${o.verb}:${o.tense}:${o.pronoun}`,
    kind: 'verb',
    prompt: o.pronoun,
    answer: o.answer,
    hint: `${o.verb} · ${o.tenseLabel}`,
    speak: `${o.pronoun.replace(/[()]/g, '')} ${o.answer}`,
    userAnswer: o.userAnswer,
  };
}

export function grammarMistake(o: {
  topicId: string;
  before: string;
  answer: string;
  after: string;
  options: string[];
  alternatives?: string[];
  hint: string;
  userAnswer?: string;
}): NewMistake {
  return {
    id: `grammar:${o.topicId}:${o.before}___${o.after}`,
    kind: 'grammar',
    prompt: `${o.before}___${o.after}`,
    answer: o.answer,
    alternatives: o.alternatives,
    options: o.options,
    hint: o.hint,
    speak: `${o.before}${o.answer}${o.after}`,
    userAnswer: o.userAnswer,
  };
}

export function sentenceMistake(o: {
  key: string;
  askTarget: boolean;
  source: string;
  target: string;
  targetText: string; // the sentence in the language being learned
  userAnswer?: string;
}): NewMistake {
  return {
    id: `sentence:${o.key}:${o.askTarget ? 'de' : 'target'}`,
    kind: 'sentence',
    prompt: o.source,
    answer: o.target,
    hint: o.askTarget ? 'toDe' : 'toTarget',
    speak: o.targetText,
    userAnswer: o.userAnswer,
  };
}

export function dictationMistake(o: { key: string; text: string; de: string; userAnswer?: string }): NewMistake {
  return {
    id: `dictation:${o.key}`,
    kind: 'dictation',
    prompt: o.de,
    answer: o.text,
    speak: o.text,
    userAnswer: o.userAnswer,
  };
}

export function articleMistake(o: {
  key: string;        // normWord of the noun
  noun: string;       // noun without its article
  article: string;    // the correct article
  options: string[];  // all articles offered
  de: string;
  userAnswer?: string;
}): NewMistake {
  return {
    id: `article:${o.key}`,
    kind: 'article',
    prompt: `___ ${o.noun}`,
    answer: o.article,
    options: o.options,
    hint: o.de,
    speak: `${o.article}${o.article.endsWith("'") ? '' : ' '}${o.noun}`,
    userAnswer: o.userAnswer,
  };
}

export function numberMistake(o: {
  key: string;        // kind + value, e.g. 'time:15:45'
  prompt: string;     // what was shown ("15:45", "342", "12.03.")
  answer: string;     // the expected answer (digits or words)
  hint: string;       // the written form, for the solution line
  speak: string;      // the spoken form in the target language
  userAnswer?: string;
}): NewMistake {
  return {
    id: `number:${o.key}`,
    kind: 'number',
    prompt: o.prompt,
    answer: o.answer,
    hint: o.hint,
    speak: o.speak,
    userAnswer: o.userAnswer,
  };
}

export function phraseMistake(o: {
  id: string;         // phrase id (lib/phrases)
  de: string;         // the German phrase, asked
  target: string;     // the expected phrase
  alternatives?: string[];
  situation: string;  // shown as context
  userAnswer?: string;
}): NewMistake {
  return {
    id: `phrase:${o.id}`,
    kind: 'phrase',
    prompt: o.de,
    answer: o.target,
    alternatives: o.alternatives,
    hint: o.situation,
    speak: o.target,
    userAnswer: o.userAnswer,
  };
}


export function writingMistake(o: {
  id: string;         // item id within the language (lib/writing)
  prompt: string;     // the German sentence, or the instruction plus the sentence
  answer: string;
  alternatives?: string[];
  hint: string;       // the German rule
  options?: string[]; // a letter gap offers the word bank
  userAnswer?: string;
}): NewMistake {
  return {
    id: `writing:${o.id}`,
    kind: 'writing',
    prompt: o.prompt,
    answer: o.answer,
    alternatives: o.alternatives,
    options: o.options,
    hint: o.hint,
    speak: o.answer,
    userAnswer: o.userAnswer,
  };
}
