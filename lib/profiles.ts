// Everyone is a German speaker learning Italian, so a profile only needs a name
// and an optional level.
export type Level = 'A1' | 'B1';

export interface Profile {
  id: string;
  name: string;
  level?: Level; // absent ⇒ treat as 'B1'
}

export const PROFILES: Profile[] = [
  { id: 'jannik', name: 'Jannik' },
  { id: 'socha', name: 'Socha' },
];

export function getProfile(id: string): Profile | null {
  return PROFILES.find(p => p.id === id) ?? null;
}

// True beginner (A1): gets the starter vocab path, present-tense-only verbs,
// and the Grundlagen lessons. Everyone else is treated as B1.
export function isBeginner(p: Profile | null): boolean {
  return p?.level === 'A1';
}

export const PROFILE_STORAGE_KEY = 'italienisch_profile';
