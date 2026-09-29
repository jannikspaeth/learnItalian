// Word-by-word comparison for dictation (listen → type the sentence). Case,
// punctuation and apostrophe style never count; a word that differs only in its
// accents is accepted but flagged, so the learner sees the proper spelling.

export type WordStatus = 'ok' | 'accent' | 'wrong' | 'missing' | 'extra';

export interface DiffWord {
  status: WordStatus;
  expected?: string; // word from the model sentence (as written there)
  typed?: string;    // what the learner typed for it
}

export interface DictationResult {
  words: DiffWord[];
  correct: number;   // expected words typed right (accent slips count as right)
  total: number;     // words in the model sentence
  perfect: boolean;  // every word right, nothing extra
}

// Split into words, keeping elisions together with their word: "l'acqua" → ["l'acqua"].
function words(s: string): string[] {
  return s
    .replace(/[’´`]/g, "'")
    .split(/[\s ]+/)
    .map(w => w.replace(/^[^\p{L}\p{N}']+|[^\p{L}\p{N}']+$/gu, ''))
    .filter(Boolean);
}

const lower = (w: string) => w.toLowerCase();
const fold = (w: string) => lower(w).normalize('NFD').replace(/[̀-ͯ]/g, '');

export function compareDictation(expected: string, typed: string): DictationResult {
  const exp = words(expected);
  const got = words(typed);
  const n = exp.length;
  const m = got.length;

  // Longest common subsequence on accent-folded words aligns the two sentences,
  // so one missing word doesn't mark everything after it as wrong.
  const L: number[][] = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  for (let i = n - 1; i >= 0; i--)
    for (let j = m - 1; j >= 0; j--)
      L[i][j] = fold(exp[i]) === fold(got[j]) ? L[i + 1][j + 1] + 1 : Math.max(L[i + 1][j], L[i][j + 1]);

  const out: DiffWord[] = [];
  let i = 0;
  let j = 0;
  while (i < n || j < m) {
    if (i < n && j < m && fold(exp[i]) === fold(got[j])) {
      out.push({ status: lower(exp[i]) === lower(got[j]) ? 'ok' : 'accent', expected: exp[i], typed: got[j] });
      i++; j++;
    } else if (i < n && j < m && L[i + 1][j + 1] === L[i][j]) {
      // Both sides skip one word here: a misspelling of the expected word.
      out.push({ status: 'wrong', expected: exp[i], typed: got[j] });
      i++; j++;
    } else if (j < m && (i >= n || L[i][j + 1] >= L[i + 1][j])) {
      out.push({ status: 'extra', typed: got[j] });
      j++;
    } else {
      out.push({ status: 'missing', expected: exp[i] });
      i++;
    }
  }

  const correct = out.filter(w => w.status === 'ok' || w.status === 'accent').length;
  return { words: out, correct, total: n, perfect: correct === n && out.every(w => w.status !== 'extra') };
}
