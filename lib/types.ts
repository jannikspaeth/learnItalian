export type ExerciseType = 'vocabulary' | 'conjugation' | 'sentence';

// SRS state for translating an example sentence, keyed by the normalized Italian
// word the sentence belongs to. Stored as one JSONB row per user (table `sentences`).
export interface SentenceProgress {
  key: string;          // normalized Italian word (normWord)
  level: number;        // 1–4 learning, 5 = known
  nextReview: string;   // ISO date; past/empty handled by isDue
  lastReviewed?: string;
  reviewCount: number;
}

export interface ConjugationSection {
  tense: string;
  tenseName_de: string;
  pronouns: string[];
  answers: string[];
  notes?: string;
}

export interface ConjugationExercise {
  type: 'conjugation';
  title: string;
  verb: string;
  instruction: string;
  sections: ConjugationSection[];
}

export type VocabStatus = 'wiederholen' | 'bekannt'; // kept for legacy migration reads

export interface VocabEntry {
  id: string;
  word: string;
  gender?: string;
  translation: string;
  example?: string;
  topic?: string;
  addedAt: string;
  reviewCount: number;
  lastReviewed?: string;
  status?: VocabStatus; // legacy — still read for migration, new writes use level/nextReview
  level?: number;       // 0 = new (unused in DB), 1–7 = learning, 8 = known (legacy: 5/6 w/o review = known)
  nextReview?: string;  // ISO date; when past (or absent) the word is due for review
}

export interface ProgressStats {
  exercisesCompleted: number;
  correctAnswers: number;
  totalAnswers: number;
  streak: number;
  lastActivity: string;
  exercisesByType: Partial<Record<ExerciseType, number>>;
  // Per-day flashcard count (Berlin date 'YYYY-MM-DD' -> actions). Every flashcard
  // counts, including repeats of the same word — drives the daily goal and the race.
  daily?: Record<string, number>;
}

export interface ConjugationMistake {
  pronoun: string;
  correct: string;
  userAnswer: string;
}

export interface ConjugationSectionRecord {
  tense: string;
  tenseName_de: string;
  pronouns: string[];
  correctAnswers: string[];
  totalAttempts: number;
  totalCorrect: number;
  totalQuestions: number;
  recentMistakes: ConjugationMistake[];
}

export interface ConjugationRecord {
  id: string;           // verb infinitive
  verb: string;
  sections: ConjugationSectionRecord[];
  totalAttempts: number;
  lastAttempted: string;
  mastered: boolean;    // true when all sections had 0 mistakes in last attempt
}

// ─── The Race (cross-user competitive vocab leaderboard) ───────────────────────

// One global row (id='global'). Past-day counts can't be reconstructed from the
// vocab table (last_reviewed is overwritten), so we snapshot each day's live count
// and settle finished days into cumulative points lazily on read.
// A single-day record: one user's activity total on one settled day.
export interface RaceHighscore {
  date: string;     // 'YYYY-MM-DD'
  userId: string;
  count: number;    // daily activity total (words + 5/verb)
}

export interface RaceState {
  dailyCounts: Record<string, Record<string, number>>;  // 'YYYY-MM-DD' -> { user_id: count }
  settledDates: string[];                               // days already folded into highscores
  highscores: RaceHighscore[];                          // top single-day scores, desc, max 5
  stars: Record<string, number>;                        // months won per user_id (accumulates)
  settledMonths?: string[];                             // finished months already counted; undefined ⇒ migrate
}

export interface RaceRacer {
  id: string;
  name: string;
  points: number;       // this calendar month's points
  todayCount: number;   // distinct words practiced today
  todayPoints: number;  // points they'd earn if the day ended now
  stars: number;        // months won (accumulated)
  streak: number;       // active learning streak; 0 when inactive
}

// Cumulative daily-activity history for the "Progress over time" chart. `dates`
// is a continuous Berlin-date range (asc); each series' `cumulative` is aligned
// to it (running sum of that user's daily counts up to and including each date).
export interface RaceHistory {
  dates: string[];
  series: { id: string; name: string; cumulative: number[] }[];
}

export interface RaceResponse {
  month: string;        // current calendar month 'YYYY-MM' (Europe/Berlin)
  today: string;
  racers: RaceRacer[];  // sorted by this month's points desc
  highscores: { date: string; name: string; count: number }[]; // top single-day scores, desc
  // Each person's own best single day (all-time), desc — shown under the top-5 so
  // everyone's record is visible even if it didn't make the leaderboard.
  personalBests: { date: string; name: string; count: number }[];
  history: RaceHistory;
  stars: Record<string, number>; // months won per user_id (for app-wide display)
}
