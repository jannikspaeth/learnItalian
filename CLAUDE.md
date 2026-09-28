@AGENTS.md

# Italienisch — language-learning web app

A small, personal Italian **and Spanish** learning app used by a handful of friends — all German
speakers. Plain, mobile-first UI in English with German/Italian/Spanish content.
(Converted from an earlier Spanish app, github.com/mattiss01/spanisch; its Spanish content now
lives in `lib/es/` + `public/vocab-examples-es.json`.)

## Stack & environment

- **Next.js 16.2.9 (App Router, Turbopack)**, React 19, TypeScript, **Tailwind CSS v4**.
- **Supabase** (Postgres) for all persistence, via `@supabase/supabase-js` (service-role key,
  server-side only).
- Deployed on **Vercel**. No test framework. Dev on **Windows / PowerShell**.
- Commands: `npm run dev`, `npm run build`, `npx tsc --noEmit`, `npm run lint`.

### Env vars
- `SUPABASE_URL` (or `NEXT_PUBLIC_SUPABASE_URL`) and `SUPABASE_SERVICE_ROLE_KEY` — required for
  all persistence; reads/writes throw if missing. `dbConfigured()` guards optional paths.
- Set these in Vercel project env. Local `.env.local` only carries a Vercel OIDC token (no DB keys),
  so the DB can't be queried from a local shell without `vercel env pull`.

## Profiles & multi-user model (important)

There is **no auth**. Profiles = built-ins in `lib/profiles.ts` + profiles created by name on
`/profile` (stored in the `race` table, row `id='profiles'`: `{ profiles, levels, deleted }`).
"Manage profiles" on `/profile` deletes a profile (`DELETE /api/profiles`, `deleteProfile` in
`lib/db.ts`): all its rows in every table and language plus its race highscores/stars; deleted
built-ins are hidden via `deleted`, and ids are never reused. The chosen
profile id is in `localStorage['italienisch_profile']`, the chosen language (`'it' | 'es'`,
`lib/lang.ts`) in `localStorage['italienisch_lang']`. Flow: `/profile` → `/sprache` (language +
level) → practice pages.

- **Data per language:** `x-user-id` = `dataUserId(profile, lang)` → `jannik` for Italian (legacy,
  unchanged) and `jannik:es` for Spanish. That becomes the Supabase **`user_id`**, so every table
  isolates per person *and* language with no schema change.
- **Level per language:** `profile.levels[lang]` (`'A1'` | `'B1'`), chosen on `/sprache` and saved via
  `PUT /api/profiles`. Legacy `level` = Italian level. `isBeginner(profile, lang)`.
- Practice pages use `useLearner()` (`lib/use-profile.ts`): gives `{ profile, lang, beginner }` and
  redirects to `/profile` / `/sprache` when something is missing.
- **Content per language** is loaded on demand: `usePack('vocab' | 'verbs', lang)` (`lib/content.ts`,
  packs in `lib/packs/`). Tenses per language in `lib/tenses.ts`; `normWord(s, lang)` strips that
  language's articles.
- **Spanish content** (`lib/es/`): 10k-word catalog + starter, every word with a `topic` (hand-written
  sections by theme, the frequency block classified word by word); `verb-catalog.ts` spells out
  presente/indefinido/futuro and a rule engine (`derivedForms`) derives perfecto, imperfecto,
  condicional, subjuntivo and imperativo from them; `grammar-exercises.ts` has 34 cloze sets A1–B1
  (same `GrammarTopic` type as Italian; example field is `target`).
- Which side of a card is asked is a per-device setting (`useQuizDirection`, localStorage):
  🇩🇪→🇮🇹 / 🇮🇹→🇩🇪 / Mixed (default). The SRS level stays one per word either way.
- `useProfile()` (`lib/use-profile.ts`) reads/sets the active profile and syncs across tabs.

## Data flow

Client component → `lib/storage.ts` (fetch with `x-user-id`) → `app/api/data/*` route → `lib/db.ts`
(Supabase). `storage.ts` reads are tolerant (return fallback) for display, but **strict** before any
read-modify-write so a failed read can't overwrite real data with an empty list. Per-row writes
(vocab) avoid clobbering the whole list; JSONB-blob writes (conjugation/sentences/race) are read-modify-write.

### Supabase tables
- `vocab` — one row per user+word (SRS: levels 1–7 learning, 8 known; `next_review`, `last_reviewed`, `review_count`).
- `stats` — one row per user. Cumulative totals + `streak` + **`daily` jsonb** (Berlin-date → activity count).
- `conjugation`, `sentences`, `grammar` — one JSONB row per user (arrays of records).
- `race` — one global row **per language**: `id='global'` (Italian), `id='global-es'` (Spanish), holding
  `{ dailyCounts, settledDates, highscores, stars, settledMonths }`. Also the `id='profiles'` row (see above).

### ⚠️ Manual SQL migrations (no migrations dir — tables are created by hand)
Full setup for a fresh Supabase project (column names match `lib/db.ts`):
```sql
create table if not exists vocab (
  id uuid primary key default gen_random_uuid(),
  user_id text not null,
  norm_word text not null,
  word text not null,
  translation text not null,
  example text,
  level int not null default 1,
  next_review timestamptz,
  last_reviewed timestamptz,
  review_count int not null default 0,
  added_at timestamptz not null default now(),
  unique (user_id, norm_word)
);
create table if not exists stats (
  user_id text primary key,
  exercises_completed int not null default 0,
  correct_answers int not null default 0,
  total_answers int not null default 0,
  streak int not null default 0,
  last_activity timestamptz,
  exercises_by_type jsonb not null default '{}'::jsonb,
  daily jsonb not null default '{}'::jsonb
);
create table if not exists conjugation ( user_id text primary key, data jsonb not null default '[]'::jsonb );
create table if not exists sentences   ( user_id text primary key, data jsonb not null default '[]'::jsonb );
create table if not exists race        ( id text primary key, data jsonb not null default '{}'::jsonb );
create table if not exists grammar     ( user_id text primary key, data jsonb not null default '[]'::jsonb );

-- Lock the tables against the public (anon) API; the app uses the service_role
-- key server-side, which bypasses RLS.
alter table vocab       enable row level security;
alter table stats       enable row level security;
alter table conjugation enable row level security;
alter table sentences   enable row level security;
alter table race        enable row level security;
alter table grammar     enable row level security;
```

## Features / pages

- `/vokabeln` — Vocabulary: SRS flashcards (one at a time), **Learn in rounds of 20**, Review
  (shuffled), Words list. Daily goal banner. Beginners (A1) learn an ordered starter set first
  (`lib/vocab-starter.ts`) then flow into the full `lib/vocab-catalog.ts` (~2,900 words, A1–B1:
  hand-written core + `lib/vocab-b1.ts` B1 extension + `lib/vocab-imported.ts`, **generated** by `node scripts/import-vocab.mjs` from the Grund-/Ausbau-
  wortschatz CSVs in gitignored `scripts/data/`; correct entries in `scripts/vocab-import-fixes.mjs`
  and re-run — never edit the generated file). Word keys come from
  `normWord` (`lib/norm.ts`: strips il/lo/la/l'/i/gli/le/un/uno/una/un' + German articles).
- `/saetze` — translate example sentences (`public/vocab-examples.json`, keyed by `normWord`).
- `/konjugation` — Verb conjugation from `lib/verb-catalog.ts`: short specs + a **rule engine**
  derives every tense up to B1 (presente, passato prossimo, imperfetto, futuro, imperativo,
  condizionale, congiuntivo); irregulars live in `IRREGULAR` (or via `base` for prefixed verbs).
  A per-device tense picker chooses what to drill (default: present for A1, else pres/pp/imperf). Answer checking
  (`lib/conjugation-match.ts`) is **accent-insensitive** and accepts either ending of
  essere-participles written `andato/a` / `andati/e`.
  Every catalog word has a `topic` (`lib/vocab-topics.ts`); Learn can be narrowed to one topic
  (per-device choice) and the Words list grouped by topic. Imported words get their topic from
  `scripts/vocab-import-topics.mjs` (verbs auto-detected by ending).
- `/grammar` — two tabs: **Exercises** (34 hand-written cloze sets covering A1–B1 in
  `lib/grammar-exercises.ts`, grouped by level, each with rule + examples; choose/type modes, progress
  per topic in the `grammar` table) and **Lessons** (Grundlagen, `lib/grammar-lessons.ts`, for all).
- `/race` — **THE RACE**: global competitive leaderboard (see below).
- `/help`, `/profile`. Nav in `components/Navigation.tsx` (filters items by `onlyDirection`/`onlyLevel`).

## THE RACE (scoring model)

Global standings everyone sees; **one separate race per language** (`/api/race?lang=es`, racers =
profiles with a level or activity in that language).
- **Daily activity** per user = every vocab flashcard (+1) + every conjugated form (**half credit**,
  `round(total/2)`) + every grammar item (half credit) + every translated sentence (+2), repeats included. Tracked in `stats.daily` (incremented in `recordExercise`),
  keyed by **Europe/Berlin date**.
- Each finished day awards **5/4/3/2/1** to the top daily scorers; **ties split the tiers evenly**;
  0 activity earns nothing. Logic is pure in `lib/race.ts` (`awardPoints`, `berlinDayStart`/`berlinToday`).
- `GET /api/race` is read-and-self-heal: it snapshots today's live count and **settles** finished days
  into cumulative `points` lazily (idempotent via `settledDates`) — no cron. It also keeps the top-5
  single-day records (`highscores`).

## Conventions & workflow

- **Day boundary is Europe/Berlin everywhere** (goal, daily counter, race settlement) — use
  `berlinToday()` / `berlinDayStart()` from `lib/race.ts`, not local time.
- Always `npx tsc --noEmit` and `npm run build` before committing.
- The user typically wants changes **committed and pushed to `main`** when done; **pushing to `main`
  auto-deploys to production** on Vercel. Branch off main if not told otherwise.
- Commit messages end with the Co-Authored-By trailer.
