// Target languages. Everyone is a German speaker; after choosing a profile they
// pick which language to learn (per device, see useProfile). Each language has its
// own content, progress, level and race.
export type Lang = 'it' | 'es' | 'fr';

export interface LanguageInfo {
  id: Lang;
  flag: string;
  name: string;   // English UI label
  nameDe: string; // German name, for German-language copy (lessons)
}

export const LANGUAGES: LanguageInfo[] = [
  { id: 'it', flag: '🇮🇹', name: 'Italian', nameDe: 'Italienisch' },
  { id: 'es', flag: '🇪🇸', name: 'Spanish', nameDe: 'Spanisch' },
  { id: 'fr', flag: '🇫🇷', name: 'French', nameDe: 'Französisch' },
];

export function isLang(v: unknown): v is Lang {
  return v === 'it' || v === 'es' || v === 'fr';
}

export function langInfo(lang: Lang): LanguageInfo {
  return LANGUAGES.find(l => l.id === lang)!;
}

export const LANG_STORAGE_KEY = 'italienisch_lang';

// Supabase user_id for a profile's data in one language. Italian keeps the bare
// profile id (the app started Italian-only, so existing data stays where it is);
// other languages get a suffix, e.g. "jannik:es".
export function dataUserId(profileId: string, lang: Lang): string {
  return lang === 'it' ? profileId : `${profileId}:${lang}`;
}

// Inverse of dataUserId: which profile and language a user_id belongs to.
export function parseDataUserId(userId: string): { profileId: string; lang: Lang } {
  const i = userId.lastIndexOf(':');
  if (i > 0) {
    const lang = userId.slice(i + 1);
    if (isLang(lang)) return { profileId: userId.slice(0, i), lang };
  }
  return { profileId: userId, lang: 'it' };
}
