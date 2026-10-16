// How one language spells numbers, clock times and dates out loud. Used by the
// numbers drill (/zahlen) and by nothing else — the forms are generated, so the
// drill needs no content files.

export interface NumberLocale {
  // 0 … 999,999 written out.
  number: (n: number) => string;
  // Colloquial clock time, as one would say it (12-hour, quarters and "to").
  time: (hour: number, minute: number) => string;
  // "il dodici marzo (duemilaventisei)"
  date: (day: number, month: number, year?: number) => string;
  months: readonly string[];
}
