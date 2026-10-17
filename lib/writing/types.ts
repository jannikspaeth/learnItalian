// ─── Writing (/schreiben) ─────────────────────────────────────────────────────
// Four ways to produce whole sentences instead of single words. The first three
// are checked by the app itself (no model, works offline); the fourth is a free
// text that the learner compares with a model answer and grades.

// Word-order puzzle: the chips are the words of `answer`, shuffled. `alt` lists
// other valid orders — each one has to use exactly the same words (checked by
// scripts/check-writing.mjs), otherwise it could never be built from the chips.
import type { IconName } from '../icon-names';
export interface OrderItem {
  id: string;
  de: string;       // the German sentence, as the cue
  answer: string;
  alt?: string[];
  hint: string;     // German rule, shown with the solution
  // The first chip is shown in lower case, so the capital letter doesn't give
  // away where the sentence starts. Set this where the first word is a name.
  keepCase?: boolean;
}

// Rewrite one sentence following an instruction ("into the passato prossimo").
export interface TransformItem {
  id: string;
  task: string;     // German instruction
  source: string;
  answer: string;
  alt?: string[];
  hint: string;     // German explanation
}

// A short letter or message with gaps. `text` marks each gap with "___" (in
// order); the words of all gaps plus `extra` make up the word bank.
export interface LetterTask {
  id: string;
  icon: IconName;
  title: string;    // German
  intro: string;    // German: who writes to whom, and why
  text: string;
  gaps: { answer: string; hint: string }[];
  extra?: string[]; // decoy words for the bank
  de: string;       // the whole letter in German
}

// The language's half of a free writing task (the German task itself is shared,
// see lib/writing/canon.ts): phrases to build with, plus a model answer.
export interface WritingModel {
  blocks: { target: string; de: string }[];
  model: string;
  modelDe: string;
}

export interface WritingPack {
  order: OrderItem[];
  transform: TransformItem[];
  letters: LetterTask[];
  free: Record<string, WritingModel>;
}
