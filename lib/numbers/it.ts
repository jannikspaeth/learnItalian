import type { NumberLocale } from './types';

const UNITS = ['zero', 'uno', 'due', 'tre', 'quattro', 'cinque', 'sei', 'sette', 'otto', 'nove'];
const TEENS = ['dieci', 'undici', 'dodici', 'tredici', 'quattordici', 'quindici', 'sedici', 'diciassette', 'diciotto', 'diciannove'];
const TENS = ['', '', 'venti', 'trenta', 'quaranta', 'cinquanta', 'sessanta', 'settanta', 'ottanta', 'novanta'];

// venti + uno → ventuno, venti + otto → ventotto (the tens lose their last vowel
// before a vowel); tre keeps an accent in compounds: ventitré.
function under100(n: number): string {
  if (n < 10) return UNITS[n];
  if (n < 20) return TEENS[n - 10];
  const t = TENS[Math.floor(n / 10)];
  const u = n % 10;
  if (u === 0) return t;
  if (u === 1 || u === 8) return t.slice(0, -1) + UNITS[u];
  if (u === 3) return t + 'tré';
  return t + UNITS[u];
}

// cento loses its o before another one: centotto, centottanta.
function join(head: string, tail: string): string {
  if (!tail) return head;
  if (head.endsWith('o') && tail.startsWith('o')) return head.slice(0, -1) + tail;
  return head + tail;
}

function under1000(n: number): string {
  if (n < 100) return under100(n);
  const h = Math.floor(n / 100);
  const head = h === 1 ? 'cento' : UNITS[h] + 'cento';
  return join(head, n % 100 ? under100(n % 100) : '');
}

export function itNumber(n: number): string {
  if (n < 1000) return under1000(n);
  const k = Math.floor(n / 1000);
  const rest = n % 1000;
  // mille, duemila, ventitremila (the accent of ventitré goes away before mila)
  const head = k === 1 ? 'mille' : under1000(k).replace(/é$/, 'e') + 'mila';
  return join(head, rest ? under1000(rest) : '');
}

const MONTHS = ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'] as const;

// 15:45 → "sono le quattro meno un quarto"; noon and midnight keep their own
// words, in both directions ("è mezzogiorno meno dieci").
function itTime(hour: number, minute: number): string {
  const h12 = (h: number) => ((h % 12) === 0 ? 12 : h % 12);
  const say = (h: number) =>
    h % 24 === 12 ? 'è mezzogiorno'
    : h % 24 === 0 ? 'è mezzanotte'
    : h12(h) === 1 ? "è l'una"
    : `sono le ${under100(h12(h))}`;
  if (minute === 0) return say(hour);
  if (minute === 15) return `${say(hour)} e un quarto`;
  if (minute === 30) return `${say(hour)} e mezza`;
  if (minute === 45) return `${say(hour + 1)} meno un quarto`;
  if (minute < 30) return `${say(hour)} e ${under100(minute)}`;
  return `${say(hour + 1)} meno ${under100(60 - minute)}`;
}

function itDate(day: number, month: number, year?: number): string {
  const d = day === 1 ? 'il primo' : `il ${under100(day)}`;
  return `${d} ${MONTHS[month - 1]}${year ? ` ${itNumber(year)}` : ''}`;
}

export const IT_NUMBERS: NumberLocale = { number: itNumber, time: itTime, date: itDate, months: MONTHS };
