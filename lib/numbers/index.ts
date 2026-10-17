import type { Lang } from '../lang';
import type { NumberLocale } from './types';
import { IT_NUMBERS } from './it';
import { ES_NUMBERS } from './es';
import { FR_NUMBERS } from './fr';
import { PT_NUMBERS, BR_NUMBERS } from './pt';

// ─── Numbers, clock times and dates ───────────────────────────────────────────
// All items are generated, so nothing has to be written by hand and no two rounds
// are the same. Two ways of asking:
//   listen — hear the spoken form, type the digits (the way it happens at a
//            counter, on the phone, at the station)
//   read   — see the digits, pick the written form out of four
// Typing digits keeps the drill fast on a phone; typing out "quattrocentotrentadue"
// would be the slowest exercise in the app.

export const NUMBERS_BY_LANG: Record<Lang, NumberLocale> = {
  it: IT_NUMBERS,
  es: ES_NUMBERS,
  fr: FR_NUMBERS,
  pt: PT_NUMBERS,
  br: BR_NUMBERS,
};

export type NumberKind = 'number' | 'time' | 'date';
export type NumberMode = 'listen' | 'read';

export const ROUND_SIZE = 10;

export interface NumberItem {
  key: string;        // `${kind}:${digits}` — stable id for "My mistakes"
  kind: NumberKind;
  mode: NumberMode;
  digits: string;     // "342", "15:45", "12.3.2026" — typed in, or shown
  words: string;      // the spoken/written form in the target language
  options?: string[]; // four written forms (read mode)
}

const MINUTES_EASY = [0, 15, 30, 45];
const MINUTES = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

function rnd(n: number): number {
  return Math.floor(Math.random() * n);
}
function pick<T>(arr: readonly T[]): T {
  return arr[rnd(arr.length)];
}
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = rnd(i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Beginners stay under 100 (and on the quarter hour); above A1 the big numbers,
// any five minutes and years come in.
function randomNumber(beginner: boolean): number {
  if (beginner) return rnd(101);
  const r = Math.random();
  if (r < 0.5) return rnd(101);
  if (r < 0.8) return 100 + rnd(900);
  if (r < 0.95) return 1000 + rnd(9000);
  return 10000 + rnd(90000);
}

function pad(n: number): string {
  return String(n).padStart(2, '0');
}

// ─── Wrong-but-plausible options for the read mode ────────────────────────────

function numberDistractors(n: number): number[] {
  const out = [n + 1, n - 1, n + 10, n - 10];
  const s = String(n);
  if (s.length >= 2) {
    // 42 vs 24, and the classic 16 vs 60
    out.push(Number(s.slice(0, -2) + s.slice(-1) + s.slice(-2, -1)));
  }
  if (n >= 100) out.push(n + 100, n - 100);
  return out.filter(v => v >= 0 && v !== n);
}

function timeDistractors(h: number, m: number): [number, number][] {
  return [
    [(h + 1) % 24, m],
    [(h + 23) % 24, m],
    [h, (m + 15) % 60],
    [h, (m + 45) % 60],
    [h, (60 - m) % 60], // "ten past" vs "ten to"
  ];
}

function dateDistractors(d: number, mo: number): [number, number][] {
  return [
    [d + 1 > 28 ? 1 : d + 1, mo],
    [d - 1 < 1 ? 28 : d - 1, mo],
    [d, (mo % 12) + 1],
    [d, ((mo + 10) % 12) + 1],
    ...(d <= 12 && d !== mo ? ([[mo, d]] as [number, number][]) : []), // day/month swapped
  ];
}

function withOptions(answer: string, others: string[]): string[] {
  const seen = new Set([answer]);
  const options = [answer];
  for (const o of shuffle(others)) {
    if (options.length === 4) break;
    if (!seen.has(o)) { seen.add(o); options.push(o); }
  }
  return shuffle(options);
}

// ─── Item building ────────────────────────────────────────────────────────────

export function numberItem(lang: Lang, kind: NumberKind, mode: NumberMode, beginner: boolean): NumberItem {
  const loc = NUMBERS_BY_LANG[lang];

  if (kind === 'number') {
    const n = randomNumber(beginner);
    const words = loc.number(n);
    return {
      key: `number:${n}`,
      kind,
      mode,
      digits: String(n),
      words,
      options: mode === 'read' ? withOptions(words, numberDistractors(n).map(loc.number)) : undefined,
    };
  }

  if (kind === 'time') {
    const h = rnd(24);
    const m = pick(beginner ? MINUTES_EASY : MINUTES);
    const words = loc.time(h, m);
    return {
      key: `time:${h}:${pad(m)}`,
      kind,
      mode,
      digits: `${pad(h)}:${pad(m)}`,
      words,
      options: mode === 'read'
        ? withOptions(words, timeDistractors(h, m).map(([dh, dm]) => loc.time(dh, dm)))
        : undefined,
    };
  }

  const d = 1 + rnd(28);
  const mo = 1 + rnd(12);
  const year = !beginner && Math.random() < 0.4 ? 1990 + rnd(41) : undefined;
  const words = loc.date(d, mo, year);
  return {
    key: `date:${d}.${mo}.${year ?? ''}`,
    kind,
    mode,
    digits: `${d}.${mo}.${year ?? ''}`,
    words,
    options: mode === 'read'
      ? withOptions(words, dateDistractors(d, mo).map(([dd, dm]) => loc.date(dd, dm, year)))
      : undefined,
  };
}

// A round alternates the two ways of asking, starting with listening.
export function numberRound(lang: Lang, kind: NumberKind, beginner: boolean, n = ROUND_SIZE): NumberItem[] {
  const items: NumberItem[] = [];
  const seen = new Set<string>();
  let guard = 0;
  while (items.length < n && guard++ < n * 20) {
    const item = numberItem(lang, kind, items.length % 2 === 0 ? 'listen' : 'read', beginner);
    if (seen.has(item.key)) continue;
    seen.add(item.key);
    items.push(item);
  }
  return items;
}

// ─── Checking typed digits ────────────────────────────────────────────────────
// Forgiving about how the digits are written: "15:45", "15.45" and "1545" are the
// same time, "12.3", "12.03." and "12/3" the same date, and a clock time may be
// given in 12- or 24-hour form (the spoken form doesn't say which).

function parseTime(s: string): { h: number; m: number } | null {
  const m = s.match(/^(\d{1,2})\s*[:.,hu ]\s*(\d{1,2})$/) ?? s.match(/^(\d{1,2})(\d{2})$/);
  if (m) return { h: Number(m[1]), m: Number(m[2]) };
  const bare = s.match(/^(\d{1,2})$/);
  return bare ? { h: Number(bare[1]), m: 0 } : null;
}

function parseDate(s: string): { d: number; m: number; y?: number } | null {
  const m = s.match(/^(\d{1,2})\s*[./\- ]\s*(\d{1,2})(?:\s*[./\- ]\s*(\d{2,4}))?\s*\.?$/);
  if (!m) return null;
  const y = m[3] === undefined ? undefined : Number(m[3].length === 2 ? `20${m[3]}` : m[3]);
  return { d: Number(m[1]), m: Number(m[2]), y };
}

export function checkNumberAnswer(
  input: string,
  item: Pick<NumberItem, 'kind' | 'digits' | 'words'>,
): boolean {
  const v = input.trim().replace(/\s+/g, ' ');
  if (!v) return false;

  if (item.kind === 'number') {
    const digits = v.replace(/[^\d]/g, '');
    return digits !== '' && Number(digits) === Number(item.digits);
  }

  if (item.kind === 'time') {
    const got = parseTime(v);
    if (!got) return false;
    const [h, m] = item.digits.split(':').map(Number);
    if (got.m !== m) return false;
    // The spoken form is 12-hour, so 15:45 and 3:45 are both right — except when
    // it says noon or midnight, which name the half of the day.
    const named = /mezzogiorno|mezzanotte|midi|minuit|mediodía|medianoche|meio-dia|meia-noite/.test(item.words);
    return named ? got.h % 24 === h % 24 : got.h % 12 === h % 12;
  }

  const got = parseDate(v);
  if (!got) return false;
  const [d, mo, y] = item.digits.split('.');
  if (got.d !== Number(d) || got.m !== Number(mo)) return false;
  return y === '' || got.y === undefined || got.y === Number(y);
}

// Mistake training asks a number again from its stored id ("number:time:7:05"),
// so the kind and the digits have to be readable back out of it.
export function parseNumberMistake(id: string, words: string): Pick<NumberItem, 'kind' | 'digits' | 'words'> | null {
  const m = id.match(/^number:(number|time|date):(.+)$/);
  return m ? { kind: m[1] as NumberKind, digits: m[2], words } : null;
}
