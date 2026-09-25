import {
  VocabEntry,
  ProgressStats,
  ExerciseType,
  ConjugationRecord,
  ConjugationSectionRecord,
  RaceResponse,
  SentenceProgress,
  GrammarRecord,
} from './types';
import { PROFILE_STORAGE_KEY, Profile, cacheProfiles, mergeProfiles } from './profiles';
import { berlinToday } from './race';
import { conjugationMatches } from './conjugation-match';

// ─── helpers ─────────────────────────────────────────────────────────────────

function getUserId(): string {
  if (typeof window === 'undefined') return 'default';
  return localStorage.getItem(PROFILE_STORAGE_KEY) ?? 'default';
}

// Tolerant read — returns fallback on any error. Use only for display.
async function getJson<T>(path: string, fallback: T): Promise<T> {
  try {
    const res = await fetch(path, {
      cache: 'no-store',
      headers: { 'x-user-id': getUserId() },
    });
    if (!res.ok) return fallback;
    return res.json() as Promise<T>;
  } catch {
    return fallback;
  }
}

// Strict read — THROWS on failure. Use before any read-modify-write so that a
// transient read error aborts the write instead of overwriting the file with
// empty/partial data (which would wipe real progress).
async function getJsonStrict<T>(path: string): Promise<T> {
  const res = await fetch(path, {
    cache: 'no-store',
    headers: { 'x-user-id': getUserId() },
  });
  if (!res.ok) throw new Error(`Read failed for ${path}: HTTP ${res.status}`);
  return res.json() as Promise<T>;
}

async function putJson(path: string, data: unknown): Promise<void> {
  const res = await fetch(path, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', 'x-user-id': getUserId() },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error(`Write failed for ${path}: HTTP ${res.status}`);
}

async function postJson(path: string, data: unknown): Promise<void> {
  const res = await fetch(path, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-user-id': getUserId() },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error(`Write failed for ${path}: HTTP ${res.status}`);
}

// ─── vocab ───────────────────────────────────────────────────────────────────

export async function getVocab(): Promise<VocabEntry[]> {
  return getJson('/api/data/vocab', []);
}

// Strict load — throws on failure so the caller never treats a failed read as
// "no words". Backed by Postgres (Supabase), so reads are strongly consistent.
export async function loadVocabStrict(): Promise<VocabEntry[]> {
  return getJsonStrict<VocabEntry[]>('/api/data/vocab');
}

// Upsert a single word (per-row in the DB, keyed by user + normalized word).
// One word in flight per call, so nothing can clobber the rest of the list.
export async function upsertVocabWord(entry: VocabEntry): Promise<void> {
  await postJson('/api/data/vocab', entry);
}

// ─── stats ───────────────────────────────────────────────────────────────────

const defaultStats: ProgressStats = {
  exercisesCompleted: 0,
  correctAnswers: 0,
  totalAnswers: 0,
  streak: 0,
  lastActivity: '',
  exercisesByType: {},
  daily: {},
};

// Keep the per-day counter from growing without bound. ~1 year so the race's
// "Progress over time" chart can show long-term cumulative history.
const KEEP_DAILY_DAYS = 365;
function pruneDaily(daily: Record<string, number>): Record<string, number> {
  const cutoff = new Date(Date.now() - KEEP_DAILY_DAYS * 86400000).toISOString().slice(0, 10);
  const out: Record<string, number> = {};
  for (const [d, n] of Object.entries(daily)) if (d >= cutoff) out[d] = n;
  return out;
}

export async function getStats(): Promise<ProgressStats> {
  const data = await getJson<ProgressStats | null>('/api/data/stats', null);
  return data ? { ...defaultStats, ...data } : defaultStats;
}

export async function recordExercise(
  type: ExerciseType,
  correct: number,
  total: number
): Promise<void> {
  const raw = await getJsonStrict<ProgressStats | null>('/api/data/stats');
  const stats = raw ? { ...defaultStats, ...raw } : defaultStats;
  const today = new Date().toDateString();
  const lastDay = stats.lastActivity ? new Date(stats.lastActivity).toDateString() : '';
  const yesterday = new Date(Date.now() - 86400000).toDateString();

  // Per-day activity tally: every vocabulary flashcard (+1); every conjugated form
  // or grammar item counts for half credit, repeats included.
  // Drives the daily goal and the race.
  const dayKey = berlinToday();
  const daily = pruneDaily({ ...(stats.daily ?? {}) });
  if (type === 'vocabulary') {
    daily[dayKey] = (daily[dayKey] ?? 0) + total;
  } else if (type === 'conjugation' || type === 'grammar') {
    daily[dayKey] = (daily[dayKey] ?? 0) + Math.round(total / 2); // half credit per item
  } else if (type === 'sentence') {
    daily[dayKey] = (daily[dayKey] ?? 0) + total * 2; // 2 points per translated sentence
  }

  const newStats: ProgressStats = {
    ...stats,
    exercisesCompleted: stats.exercisesCompleted + 1,
    correctAnswers: stats.correctAnswers + correct,
    totalAnswers: stats.totalAnswers + total,
    streak:
      lastDay === yesterday ? stats.streak + 1 : lastDay === today ? stats.streak : 1,
    lastActivity: new Date().toISOString(),
    exercisesByType: {
      ...stats.exercisesByType,
      [type]: (stats.exercisesByType[type] ?? 0) + 1,
    },
    daily,
  };

  await putJson('/api/data/stats', newStats);
}

// ─── sentence translation SRS ──────────────────────────────────────────────────

// Tolerant read for display.
export async function getSentenceProgress(): Promise<SentenceProgress[]> {
  const data = await getJson<unknown[]>('/api/data/sentences', []);
  return data.filter(
    (r): r is SentenceProgress =>
      typeof r === 'object' && r !== null && typeof (r as SentenceProgress).key === 'string'
  );
}

export async function setSentenceProgress(rows: SentenceProgress[]): Promise<void> {
  await putJson('/api/data/sentences', rows);
}

// ─── conjugation ─────────────────────────────────────────────────────────────

export async function getConjugationRecords(): Promise<ConjugationRecord[]> {
  const data = await getJson<unknown[]>('/api/data/conjugation', []);
  return data.filter(
    (r): r is ConjugationRecord =>
      typeof r === 'object' && r !== null && Array.isArray((r as ConjugationRecord).sections)
  );
}

export interface SectionAttempt {
  tense: string;
  tenseName_de: string;
  pronouns: string[];
  correctAnswers: string[];
  userAnswers: string[];
}

export async function upsertConjugationAttempt(
  verb: string,
  sections: SectionAttempt[]
): Promise<void> {
  const raw = await getJsonStrict<unknown[]>('/api/data/conjugation');
  const records = raw.filter(
    (r): r is ConjugationRecord =>
      typeof r === 'object' && r !== null && Array.isArray((r as ConjugationRecord).sections)
  );

  // Same check as the Conjugation component (accent-insensitive, o/a endings).
  const computed: ConjugationSectionRecord[] = sections.map(s => {
    const correct = s.userAnswers.map((a, i) => conjugationMatches(a, s.correctAnswers[i]));
    return {
      tense: s.tense,
      tenseName_de: s.tenseName_de,
      pronouns: s.pronouns,
      correctAnswers: s.correctAnswers,
      totalAttempts: 1,
      totalCorrect: correct.filter(Boolean).length,
      totalQuestions: s.pronouns.length,
      recentMistakes: s.pronouns
        .map((p, i) =>
          !correct[i]
            ? { pronoun: p, correct: s.correctAnswers[i], userAnswer: s.userAnswers[i] }
            : null
        )
        .filter((x): x is NonNullable<typeof x> => x !== null),
    };
  });

  const mastered = computed.every(s => s.recentMistakes.length === 0);
  const existing = records.find(r => r.id === verb);

  if (existing) {
    existing.totalAttempts += 1;
    existing.lastAttempted = new Date().toISOString();
    existing.mastered = mastered;
    for (const cs of computed) {
      const es = existing.sections.find(s => s.tense === cs.tense);
      if (es) {
        es.totalAttempts += 1;
        es.totalCorrect += cs.totalCorrect;
        es.totalQuestions += cs.totalQuestions;
        es.recentMistakes = cs.recentMistakes;
        es.correctAnswers = cs.correctAnswers;
      } else {
        existing.sections.push(cs);
      }
    }
  } else {
    records.unshift({
      id: verb,
      verb,
      sections: computed,
      totalAttempts: 1,
      lastAttempted: new Date().toISOString(),
      mastered,
    });
  }

  await putJson('/api/data/conjugation', records);
}

// ─── grammar exercises ─────────────────────────────────────────────────────────

function isGrammarRecord(r: unknown): r is GrammarRecord {
  return typeof r === 'object' && r !== null && typeof (r as GrammarRecord).id === 'string';
}

export async function getGrammarRecords(): Promise<GrammarRecord[]> {
  const data = await getJson<unknown[]>('/api/data/grammar', []);
  return data.filter(isGrammarRecord);
}

// Records one attempt at a topic (read-modify-write of the per-user JSONB row).
export async function upsertGrammarAttempt(
  topicId: string,
  correct: number,
  total: number,
  mistakes: GrammarRecord['recentMistakes'],
): Promise<void> {
  const records = (await getJsonStrict<unknown[]>('/api/data/grammar')).filter(isGrammarRecord);
  const now = new Date().toISOString();
  const existing = records.find(r => r.id === topicId);
  const attempt = {
    lastCorrect: correct,
    lastTotal: total,
    recentMistakes: mistakes,
    lastAttempted: now,
    mastered: mistakes.length === 0,
  };
  if (existing) {
    Object.assign(existing, attempt, {
      totalAttempts: existing.totalAttempts + 1,
      totalCorrect: existing.totalCorrect + correct,
      totalQuestions: existing.totalQuestions + total,
    });
  } else {
    records.unshift({ id: topicId, totalAttempts: 1, totalCorrect: correct, totalQuestions: total, ...attempt });
  }
  await putJson('/api/data/grammar', records);
}

// ─── the race (global standings) ───────────────────────────────────────────────

const emptyRace: RaceResponse = {
  month: '',
  today: '',
  racers: [],
  highscores: [],
  personalBests: [],
  history: { dates: [], series: [] },
  stars: {},
};

// Global leaderboard — no user header needed. Tolerant read for display only.
export async function getRace(): Promise<RaceResponse> {
  return getJson<RaceResponse>('/api/race', emptyRace);
}

// Accumulated months-won (⭐) per user, for app-wide display. Tolerant read.
export async function getStars(): Promise<{ stars: Record<string, number>; month: string }> {
  return getJson<{ stars: Record<string, number>; month: string }>('/api/race/stars', {
    stars: {},
    month: '',
  });
}

// ─── profiles ─────────────────────────────────────────────────────────────────

// All profiles (built-in + created in the app); refreshes the local cache.
export async function getProfiles(): Promise<Profile[]> {
  const all = await getJson<Profile[] | null>('/api/profiles', null);
  if (!all) return mergeProfiles([]);
  cacheProfiles(all);
  return all;
}

// Create a profile with just a name. Throws with a user-facing message on failure.
export async function createProfile(name: string): Promise<Profile> {
  const res = await fetch('/api/profiles', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name }),
  });
  if (res.status === 409) throw new Error('This name is already taken.');
  if (!res.ok) throw new Error('Could not create profile. Please try again.');
  const { profile, profiles } = (await res.json()) as { profile: Profile; profiles: Profile[] };
  cacheProfiles(profiles);
  return profile;
}
