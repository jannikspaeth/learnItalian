import type { NumberLocale } from './types';

// European and Brazilian Portuguese spell the teens differently (dezasseis vs
// dezesseis, catorze vs quatorze), so both variants are built from one engine.
const UNITS = ['zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove'];
const TENS = ['', '', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'];
const HUNDREDS = ['', 'cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos'];

const TEENS_PT = ['dez', 'onze', 'doze', 'treze', 'catorze', 'quinze', 'dezasseis', 'dezassete', 'dezoito', 'dezanove'];
const TEENS_BR = ['dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove'];

const MONTHS = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'] as const;

function build(teens: string[], brazilian: boolean): NumberLocale {
  const under100 = (n: number): string => {
    if (n < 10) return UNITS[n];
    if (n < 20) return teens[n - 10];
    const t = TENS[Math.floor(n / 10)];
    return n % 10 ? `${t} e ${UNITS[n % 10]}` : t;
  };

  const under1000 = (n: number): string => {
    if (n < 100) return under100(n);
    if (n === 100) return 'cem';
    const head = HUNDREDS[Math.floor(n / 100)];
    return n % 100 ? `${head} e ${under100(n % 100)}` : head;
  };

  // "e" joins the thousands to a remainder below 100 or a round hundred
  // (mil e dez, dois mil e cem) but not to a full one (mil duzentos e trinta).
  const number = (n: number): string => {
    if (n < 1000) return under1000(n);
    const k = Math.floor(n / 1000);
    const rest = n % 1000;
    const head = k === 1 ? 'mil' : `${under1000(k)} mil`;
    if (!rest) return head;
    const glue = rest < 100 || rest % 100 === 0 ? ' e ' : ' ';
    return head + glue + under1000(rest);
  };

  const h12 = (h: number) => ((h % 12) === 0 ? 12 : h % 12);
  // Hours are feminine: uma hora, duas horas (três and up are invariable).
  const hourWord = (h: number) => (h === 1 ? 'uma' : h === 2 ? 'duas' : under100(h));
  const time = (hour: number, minute: number): string => {
    const say = (h: number) =>
      h % 24 === 12 ? 'é meio-dia'
      : h % 24 === 0 ? 'é meia-noite'
      : h12(h) === 1 ? 'é uma hora'
      : `são ${hourWord(h12(h))} horas`;
    if (minute === 0) return say(hour);
    const past = (h: number, text: string) =>
      h % 24 === 12 ? `é meio-dia e ${text}`
      : h % 24 === 0 ? `é meia-noite e ${text}`
      : h12(h) === 1 ? `é uma e ${text}`
      : `são ${hourWord(h12(h))} e ${text}`;
    if (minute === 15) return past(hour, 'um quarto');
    if (minute === 30) return past(hour, 'meia');
    if (minute < 30) return past(hour, under100(minute));
    // "dez para as sete", "um quarto para a uma", "cinco para a meia-noite"
    const left = minute === 45 ? 'um quarto' : under100(60 - minute);
    const next = hour + 1;
    const to =
      next % 24 === 12 ? 'o meio-dia'
      : next % 24 === 0 || next % 24 === 24 ? 'a meia-noite'
      : h12(next) === 1 ? 'a uma'
      : `as ${hourWord(h12(next))}`;
    return `${left} para ${to}`;
  };

  const date = (day: number, month: number, year?: number): string => {
    const d = day === 1 ? (brazilian ? 'primeiro' : 'um') : under100(day);
    return `${d} de ${MONTHS[month - 1]}${year ? ` de ${number(year)}` : ''}`;
  };

  return { number, time, date, months: MONTHS };
}

export const PT_NUMBERS: NumberLocale = build(TEENS_PT, false);
export const BR_NUMBERS: NumberLocale = build(TEENS_BR, true);
