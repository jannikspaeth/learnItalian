// Conjugation answers are checked accent-insensitively: a missing or wrong accent
// (e.g. "parlo" vs "parlò", "e" vs "è") still counts as correct.
//
// Passato prossimo forms with essere agree with the subject, so the catalog
// writes them as "sono andato/a" / "siamo andati/e": each "o/a" or "i/e" suffix
// accepts either ending, and the whole "andato/a" form is also accepted.
function fold(s: string): string {
  return s.trim().toLowerCase().replace(/\s+/g, ' ').normalize('NFD').replace(/[̀-ͯ]/g, '');
}

function variants(correct: string): string[] {
  const out = [correct];
  const re = /(\S+?)([oi])\/([ae])(?=\s|$)/;
  if (re.test(correct)) {
    out.push(correct.replace(new RegExp(re, 'g'), '$1$2'));
    out.push(correct.replace(new RegExp(re, 'g'), '$1$3'));
  }
  return out;
}

export function conjugationMatches(answer: string, correct: string): boolean {
  const a = fold(answer);
  return variants(correct).some(v => fold(v) === a);
}
