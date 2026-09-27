import type { Lang } from './lang';

// Everyone is a German speaker, so a profile only needs a name and a level per
// language they learn.
export type Level = 'A1' | 'B1';

export interface Profile {
  id: string;
  name: string;
  // Level per target language; a language without a level hasn't been set up yet
  // (the language picker asks for it before the learner starts).
  levels?: Partial<Record<Lang, Level>>;
  level?: Level; // legacy (profiles created before multi-language): the Italian level
}

// Built-in profiles. More can be created in the app (stored in Supabase, see
// `getProfilesRow` in lib/db.ts).
export const PROFILES: Profile[] = [
  { id: 'jannik', name: 'Jannik', levels: { it: 'A1' } },
  { id: 'socha', name: 'Socha', levels: { it: 'A1' } },
];

export const MAX_NAME_LENGTH = 30;

// Level chosen overrides per profile id (set from the language picker).
export type LevelOverrides = Record<string, Partial<Record<Lang, Level>>>;

// Built-ins first, then custom profiles (skipping any id clash with a built-in),
// with the stored level choices applied. Legacy `level` becomes `levels.it`.
export function mergeProfiles(custom: Profile[], overrides: LevelOverrides = {}): Profile[] {
  const ids = new Set(PROFILES.map(p => p.id));
  return [...PROFILES, ...custom.filter(p => !ids.has(p.id))].map(p => {
    const n = normalizeProfile(p);
    return { ...n, levels: { ...n.levels, ...overrides[p.id] } };
  });
}

// Fold the legacy single `level` into `levels.it`.
function normalizeProfile(p: Profile): Profile {
  const { level, ...rest } = p;
  return { ...rest, levels: { ...(level ? { it: level } : {}), ...p.levels } };
}

export function levelFor(p: Profile | null, lang: Lang): Level | undefined {
  return p?.levels?.[lang];
}

// True beginner (A1) in this language: gets the starter vocab path, present-tense-
// only verbs by default, and the Grundlagen lessons. Everyone else is treated as B1.
export function isBeginner(p: Profile | null, lang: Lang): boolean {
  return levelFor(p, lang) === 'A1';
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
  if (typeof window === 'undefined') return mergeProfiles([]);
  try {
    const raw = localStorage.getItem(PROFILES_CACHE_KEY);
    // The cache holds the server's already-merged list (level choices included).
    return raw ? (JSON.parse(raw) as Profile[]).map(normalizeProfile) : mergeProfiles([]);
  } catch {
    return mergeProfiles([]);
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

export const PROFILE_STORAGE_KEY = 'italienisch_profile';
