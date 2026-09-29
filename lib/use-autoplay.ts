'use client';

import { useLocalSetting } from './use-local-setting';

// Per-device choice: read vocabulary out loud automatically on the flashcards.
const isOnOff = (v: string): v is 'on' | 'off' => v === 'on' || v === 'off';

export function useAutoplay(): [boolean, (on: boolean) => void] {
  const [v, set] = useLocalSetting<'on' | 'off'>('italienisch_autoplay', 'off', isOnOff);
  return [v === 'on', on => set(on ? 'on' : 'off')];
}
