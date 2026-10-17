import type { WritingProgress } from '../types';
import { checkPhraseAnswer } from '../answer-check';
import type { OrderItem, TransformItem, LetterTask, WritingPack } from './types';
import { WRITING_TASKS } from './canon';

export * from './types';
export { WRITING_TASKS } from './canon';
export type { WritingTaskSpec } from './canon';

export const ROUND_SIZE = 8;

// ─── Word-order puzzle ────────────────────────────────────────────────────────

export interface Chips {
  chips: string[];  // the words to lay out, in catalog order (shuffle before use)
  open: string;     // "¿" / "¡" — stays in front of the line
  close: string;    // "." / "?" / "!" — stays at the end
}

// The chips are the words of the answer. The opening and closing punctuation is
// kept out of them (it would say where the sentence starts and ends), and the
// first word is lower-cased for the same reason — unless it is a name.
export function chipsOf(item: OrderItem): Chips {
  let text = item.answer.trim();
  let open = '';
  const first = text[0];
  if (first === '¿' || first === '¡') { open = first; text = text.slice(1); }
  const closing = text.match(/\s*([.?!…]+)$/);
  const close = closing ? closing[1] : '';
  if (closing) text = text.slice(0, closing.index).trim();

  const chips = text.split(/\s+/);
  if (!item.keepCase && chips[0]) chips[0] = chips[0][0].toLowerCase() + chips[0].slice(1);
  return { chips, open, close };
}

// Punctuation, case and spacing don't matter — the order does.
export function checkOrder(laid: string[], item: OrderItem): boolean {
  return checkPhraseAnswer(laid.join(' '), item.answer, item.alt);
}

export function checkTransform(value: string, item: TransformItem): boolean {
  return checkPhraseAnswer(value, item.answer, item.alt);
}

// ─── Letters ──────────────────────────────────────────────────────────────────

// The letter split into the text around its gaps: `parts[i]` is the text before
// gap i, and the last entry is the text after the final gap.
export function letterParts(letter: LetterTask): string[] {
  return letter.text.split('___');
}

// Every gap's answer plus the decoys, shuffled — the bank the learner taps from.
export function letterBank(letter: LetterTask): string[] {
  return shuffle([...letter.gaps.map(g => g.answer), ...(letter.extra ?? [])]);
}

// ─── Picking a round ──────────────────────────────────────────────────────────

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Sentences that have been got right least often come first, so a round works
// through the set instead of repeating the easy ones.
export function pickRound<T extends { id: string }>(
  items: T[],
  progress: WritingProgress | undefined,
  n = ROUND_SIZE,
): T[] {
  const done = (id: string) => progress?.items[id] ?? 0;
  const byNeed = shuffle(items).sort((a, b) => done(a.id) - done(b.id));
  return shuffle(byNeed.slice(0, n));
}

export function writingCounts(pack: WritingPack, progress: WritingProgress | undefined) {
  const items = [...pack.order, ...pack.transform];
  const solved = items.filter(i => (progress?.items[i.id] ?? 0) > 0).length;
  const written = WRITING_TASKS.filter(t => progress?.texts[t.id]).length;
  return { items: items.length, solved, tasks: WRITING_TASKS.length, written };
}
