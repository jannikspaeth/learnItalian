import type { NumberLocale } from './types';

const UNITS = ['zéro', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'];
const TEENS = ['dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf'];
const TENS = ['', '', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante'];

// 70 = soixante-dix, 80 = quatre-vingts, 90 = quatre-vingt-dix; 21/31/…/61 take
// "et un", 71 takes "et onze".
function under100(n: number): string {
  if (n < 10) return UNITS[n];
  if (n < 20) return TEENS[n - 10];
  if (n < 70) {
    const t = TENS[Math.floor(n / 10)];
    const u = n % 10;
    if (u === 0) return t;
    if (u === 1) return `${t} et un`;
    return `${t}-${UNITS[u]}`;
  }
  if (n < 80) {
    if (n === 71) return 'soixante et onze';
    return n === 70 ? 'soixante-dix' : `soixante-${TEENS[n - 70]}`;
  }
  if (n === 80) return 'quatre-vingts';
  if (n < 90) return `quatre-vingt-${UNITS[n - 80]}`;
  return `quatre-vingt-${TEENS[n - 90]}`;
}

// cent takes an s when multiplied and nothing follows: deux cents, deux cent un.
function under1000(n: number): string {
  if (n < 100) return under100(n);
  const h = Math.floor(n / 100);
  const rest = n % 100;
  const head = h === 1 ? 'cent' : `${UNITS[h]} cent${rest ? '' : 's'}`;
  return rest ? `${head} ${under100(rest)}` : head;
}

export function frNumber(n: number): string {
  if (n < 1000) return under1000(n);
  const k = Math.floor(n / 1000);
  const rest = n % 1000;
  // mille is invariable: mille, deux mille, cent mille.
  const head = k === 1 ? 'mille' : `${under1000(k)} mille`;
  return rest ? `${head} ${under1000(rest)}` : head;
}

const MONTHS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'] as const;

function frTime(hour: number, minute: number): string {
  const h12 = (h: number) => ((h % 12) === 0 ? 12 : h % 12);
  // une heure (not "un"), and midi / minuit instead of "douze heures".
  const say = (h: number) =>
    h % 24 === 12 ? 'il est midi'
    : h % 24 === 0 ? 'il est minuit'
    : h12(h) === 1 ? 'il est une heure'
    : `il est ${under100(h12(h))} heures`;
  if (minute === 0) return say(hour);
  if (minute === 15) return `${say(hour)} et quart`;
  if (minute === 30) return `${say(hour)} et demie`;
  if (minute === 45) return `${say(hour + 1)} moins le quart`;
  if (minute < 30) return `${say(hour)} ${under100(minute)}`;
  return `${say(hour + 1)} moins ${under100(60 - minute)}`;
}

function frDate(day: number, month: number, year?: number): string {
  const d = day === 1 ? 'le premier' : `le ${under100(day)}`;
  return `${d} ${MONTHS[month - 1]}${year ? ` ${frNumber(year)}` : ''}`;
}

export const FR_NUMBERS: NumberLocale = { number: frNumber, time: frTime, date: frDate, months: MONTHS };
