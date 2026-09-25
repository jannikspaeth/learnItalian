// Everyone is a German speaker learning Italian, so a profile only needs a name
// and an optional level.
export type Level = 'A1' | 'B1';

export interface Profile {
  id: string;
  name: string;
  level?: Level; // absent ⇒ treat as 'B1'
}

// Built-in profiles. More can be created in the app (stored in Supabase, see
// `getCustomProfiles` in lib/db.ts); those start as beginners (A1).
export const PROFILES: Profile[] = [
  { id: 'jannik', name: 'Jannik', level: 'A1' },
  { id: 'socha', name: 'Socha', level: 'A1' },
];

export const MAX_NAME_LENGTH = 30;

// Built-ins first, then custom profiles (skipping any id clash with a built-in).
export function mergeProfiles(custom: Profile[]): Profile[] {
  const ids = new Set(PROFILES.map(p => p.id));
  return [...PROFILES, ...custom.filter(p => !ids.has(p.id))];
}

// Stable, readable user id from a display name ("Maria Rossi" → "maria-rossi"),
// suffixed with -2, -3, … if taken. The id becomes the Supabase user_id.
export function profileIdFor(name: string, taken: Set<string>): string {
  const base =
    name
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .toLowerCase()
      .replace(/ß/g, 'ss')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'user';
  let id = base;
  for (let n = 2; taken.has(id) || id === 'default'; n++) id = `${base}-${n}`;
  return id;
}

// Client-side cache of all known profiles, so the active profile resolves
// synchronously on load (custom profiles otherwise need a network round-trip).
export const PROFILES_CACHE_KEY = 'italienisch_profiles_cache';

function cachedProfiles(): Profile[] {
  if (typeof window === 'undefined') return PROFILES;
  try {
    const raw = localStorage.getItem(PROFILES_CACHE_KEY);
    return raw ? mergeProfiles(JSON.parse(raw) as Profile[]) : PROFILES;
  } catch {
    return PROFILES;
  }
}

export function cacheProfiles(all: Profile[]): void {
  try {
    localStorage.setItem(PROFILES_CACHE_KEY, JSON.stringify(all));
  } catch {
    // ignore (private mode etc.)
  }
}

export function getProfile(id: string): Profile | null {
  return cachedProfiles().find(p => p.id === id) ?? null;
}

// True beginner (A1): gets the starter vocab path, present-tense-only verbs,
// and the Grundlagen lessons. Everyone else is treated as B1.
export function isBeginner(p: Profile | null): boolean {
  return p?.level === 'A1';
}

export const PROFILE_STORAGE_KEY = 'italienisch_profile';
