'use client';

import { useState, useEffect } from 'react';

// Which side of a card is asked. 'mixed' picks per card, so both recognition
// (Italian → German) and production (German → Italian) get practiced. The SRS
// level stays one per word regardless of the side asked.
export type QuizDirection = 'de_it' | 'it_de' | 'mixed';

export const QUIZ_DIRECTIONS: [QuizDirection, string][] = [
  ['de_it', '🇩🇪 → 🇮🇹'],
  ['it_de', '🇮🇹 → 🇩🇪'],
  ['mixed', 'Mixed'],
];

const KEY = 'italienisch_quiz_direction';

function isQuizDirection(v: unknown): v is QuizDirection {
  return v === 'de_it' || v === 'it_de' || v === 'mixed';
}

// Resolve the side for one card: true ⇒ Italian is shown and German is the answer.
export function askItalian(dir: QuizDirection): boolean {
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
