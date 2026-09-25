'use client';

import { useState, useEffect } from 'react';

// A per-device UI preference kept in localStorage (e.g. the chosen vocab topic).
// Falls back to `initial` when storage is unavailable or holds an invalid value.
export function useLocalSetting<T extends string>(
  key: string,
  initial: T,
  isValid: (v: string) => v is T,
): [T, (v: T) => void] {
  const [value, setValue] = useState<T>(initial);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(key);
      if (stored !== null && isValid(stored)) setValue(stored);
    } catch {}
  }, [key, isValid]);

  function update(v: T) {
    setValue(v);
    try { localStorage.setItem(key, v); } catch {}
  }

  return [value, update];
}
