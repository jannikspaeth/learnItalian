import type { NumberLocale } from './types';

const UNITS = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
const TEENS = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];
const TWENTIES = ['veinte', 'veintiuno', 'veintidós', 'veintitrés', 'veinticuatro', 'veinticinco', 'veintiséis', 'veintisiete', 'veintiocho', 'veintinueve'];
const TENS = ['', '', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
const HUNDREDS = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];

function under100(n: number): string {
  if (n < 10) return UNITS[n];
  if (n < 20) return TEENS[n - 10];
  if (n < 30) return TWENTIES[n - 20];
  const t = TENS[Math.floor(n / 10)];
  return n % 10 ? `${t} y ${UNITS[n % 10]}` : t;
}

function under1000(n: number): string {
  if (n < 100) return under100(n);
  if (n === 100) return 'cien';
  const head = HUNDREDS[Math.floor(n / 100)];
  return n % 100 ? `${head} ${under100(n % 100)}` : head;
}

export function esNumber(n: number): string {
  if (n < 1000) return under1000(n);
  const k = Math.floor(n / 1000);
  const rest = n % 1000;
  // mil, dos mil, cien mil — and "un" instead of "uno": veintiún mil.
  const head = k === 1 ? 'mil' : `${under1000(k).replace(/uno$/, 'ún')} mil`;
  return rest ? `${head} ${under1000(rest)}` : head;
}

const MONTHS = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'] as const;

function esTime(hour: number, minute: number): string {
  const h12 = (h: number) => ((h % 12) === 0 ? 12 : h % 12);
  const say = (h: number) =>
    h % 24 === 12 ? 'es mediodía'
    : h % 24 === 0 ? 'es medianoche'
    : h12(h) === 1 ? 'es la una'
    : `son las ${under100(h12(h))}`;
  if (minute === 0) return say(hour);
  if (minute === 15) return `${say(hour)} y cuarto`;
  if (minute === 30) return `${say(hour)} y media`;
  if (minute === 45) return `${say(hour + 1)} menos cuarto`;
  if (minute < 30) return `${say(hour)} y ${under100(minute)}`;
  return `${say(hour + 1)} menos ${under100(60 - minute)}`;
}

function esDate(day: number, month: number, year?: number): string {
  return `el ${under100(day)} de ${MONTHS[month - 1]}${year ? ` de ${esNumber(year)}` : ''}`;
}

export const ES_NUMBERS: NumberLocale = { number: esNumber, time: esTime, date: esDate, months: MONTHS };
