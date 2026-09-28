// Conjugation answers are checked accent-insensitively: a missing or wrong accent
// (e.g. "parlo" vs "parlò", "e" vs "è") still counts as correct, and apostrophes
// are ignored ("va" for "va'").
//
// Passato prossimo forms with essere agree with the subject, so the catalog
// writes them as "sono andato/a" / "siamo andati/e": each "o/a" or "i/e" suffix
// accepts either ending, and the whole "andato/a" form is also accepted.
// Imperatives with two accepted forms are written "va' / vai". French passé
// composé with être marks agreement as "allé(e)" / "allé(e)s" / "assis(es)": with or without it.
function fold(s: string): string {
  return s.trim().toLowerCase().replace(/['’´`]/g, '').replace(/\s+/g, ' ').normalize('NFD').replace(/[̀-ͯ]/g, '');
}

// "va' / vai" (spaced slash) lists whole alternative forms; any one counts.
function variants(correct: string): string[] {
  const out: string[] = [correct];
  const re = /(\S+?)([oi])\/([ae])(?=\s|$)/;
  for (const form of correct.split(' / ')) {
    out.push(form);
    if (re.test(form)) {
      out.push(form.replace(new RegExp(re, 'g'), '$1$2'));
      out.push(form.replace(new RegExp(re, 'g'), '$1$3'));
    }
    if (/\(es?\)/.test(form)) {
      out.push(form.replace(/\((es?)\)/g, ''));
      out.push(form.replace(/\((es?)\)/g, '$1'));
    }
  }
  return out;
}

export function conjugationMatches(answer: string, correct: string): boolean {
  const a = fold(answer);
  return variants(correct).some(v => fold(v) === a);
}
