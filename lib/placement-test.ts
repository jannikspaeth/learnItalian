import type { Level } from './profiles';
import type { GrammarTopic } from './grammar-exercises';

// One multiple-choice question for the placement test (replaces manual A1/B1
// self-assessment on /sprache): a mix of vocab, grammar and verb questions at
// A1 and B1 difficulty. `level` is the difficulty this question probes, used
// to score the test afterwards (see scoreLevel).
export interface TestQuestion {
  level: Level;
  domain: 'vocab' | 'grammar' | 'verb';
  label: [string, string];
  before: string;
  after: string;
  answer: string;
  options: string[];
  hint?: string;
}

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function grammarQuestions(topics: GrammarTopic[], level: Level, n: number): TestQuestion[] {
  const pool = topics.filter(t => t.level === level);
  const items = shuffle(pool.flatMap(t => t.items)).slice(0, n);
  return items.map(item => ({
    level,
    domain: 'grammar',
    label: ['Grammar', 'Grammatik'],
    before: item.before,
    after: item.after,
    answer: item.answer,
    options: item.options,
    hint: item.hint,
  }));
}

export function vocabQuestions(
  pool: { de: string; target: string }[],
  distractorPool: { de: string; target: string }[],
  level: Level,
  n: number,
): TestQuestion[] {
  const picked = shuffle(pool.filter(w => w.de && w.target)).slice(0, n);
  return picked.map(w => {
    const others = shuffle(distractorPool.filter(d => d.target !== w.target))
      .slice(0, 3)
      .map(d => d.target);
    return {
      level,
      domain: 'vocab',
      label: ['Vocabulary', 'Vokabeln'],
      before: `${w.de} = `,
      after: '',
      answer: w.target,
      options: shuffle([w.target, ...others]),
    };
  });
}

// Scored on B1-level accuracy only: A1 questions are a warm-up (almost
// everyone gets those right regardless of level), so whether the learner can
// handle the harder questions is the actual signal.
export function scoreLevel(answers: { level: Level; correct: boolean }[]): Level {
  const b1 = answers.filter(a => a.level === 'B1');
  if (b1.length === 0) return 'A1';
  const correct = b1.filter(a => a.correct).length;
  return correct / b1.length >= 0.5 ? 'B1' : 'A1';
}
