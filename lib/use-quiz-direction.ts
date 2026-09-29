'use client';

import { useState, useEffect } from 'react';

// Which side of a card is asked. 'mixed' picks per card, so both recognition
// (target → German) and production (German → target) get practiced. The SRS
// level stays one per word regardless of the side asked. The ids say "it" for
// historical reasons; they mean the target language, whichever it is.
export type QuizDirection = 'de_it' | 'it_de' | 'mixed';

// Toggle options, labelled with the target language's flag.
export function quizDirections(flag: string, mixed = 'Mixed'): [QuizDirection, string][] {
  return [
    ['de_it', `🇩🇪 → ${flag}`],
    ['it_de', `${flag} → 🇩🇪`],
    ['mixed', mixed],
  ];
}

const KEY = 'italienisch_quiz_direction';

function isQuizDirection(v: unknown): v is QuizDirection {
  return v === 'de_it' || v === 'it_de' || v === 'mixed';
}

// Resolve the side for one card: true ⇒ the target language is shown and German
// is the answer.
export function askTarget(dir: QuizDirection): boolean {
  if (dir === 'it_de') return true;
  if (dir === 'de_it') return false;
  return Math.random() < 0.5;
}

// Per-device preference (localStorage), defaulting to 'mixed'.
export function useQuizDirection(): [QuizDirection, (d: QuizDirection) => void] {
  const [dir, setDir] = useState<QuizDirection>('mixed');

  useEffect(() => {
    try {
      const stored = localStorage.getItem(KEY);
      if (isQuizDirection(stored)) setDir(stored);
    } catch {}
  }, []);

  function update(d: QuizDirection) {
    setDir(d);
    try { localStorage.setItem(KEY, d); } catch {}
  }

  return [dir, update];
}
