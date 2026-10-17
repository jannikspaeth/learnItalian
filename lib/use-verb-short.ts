'use client';

import { useLocalSetting } from './use-local-setting';

// Per-device choice on /konjugation: ask compound tenses as auxiliary +
// participle instead of all six persons (see lib/verb-parts.ts).
const isOnOff = (v: string): v is 'on' | 'off' => v === 'on' || v === 'off';

export function useVerbShort(): [boolean, (on: boolean) => void] {
  const [v, set] = useLocalSetting<'on' | 'off'>('italienisch_verb_short', 'off', isOnOff);
  return [v === 'on', on => set(on ? 'on' : 'off')];
}
