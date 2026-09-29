import type { ConjugationExercise } from './types';
import * as it from './verb-catalog';
import * as es from './es/verb-catalog';
import * as fr from './fr/verb-catalog';
import { defaultTenses, ES_TENSES, FR_TENSES, IT_TENSES, EsTenseId, FrTenseId, ItTenseId } from './tenses';
import type { Lang } from './lang';

// A conjugation drill: the given verb (or the next one not practised yet) in the
// chosen tenses. Pure — runs in the browser (works offline) and in /api/exercise.
export interface ConjugationRequest {
  lang: Lang;
  verb?: string;
  knownVerbs?: string[];
  beginner?: boolean;
  tenses?: string[];
}

export function buildConjugationExercise({ lang, verb, knownVerbs, beginner, tenses }: ConjugationRequest): ConjugationExercise {
  if (lang === 'fr') {
    const target = (verb ? fr.findVerb(verb) : null) ?? fr.pickNextVerb(knownVerbs ?? []);
    const ids = new Set<string>(FR_TENSES.map(t => t.id));
    const chosen = (tenses ?? []).filter((t): t is FrTenseId => ids.has(t));
    return fr.verbToExercise(target, chosen.length ? chosen : (defaultTenses(lang, !!beginner) as FrTenseId[]));
  }
  if (lang === 'es') {
    const target = (verb ? es.findVerb(verb) : null) ?? es.pickNextVerb(knownVerbs ?? []);
    const ids = new Set<string>(ES_TENSES.map(t => t.id));
    const chosen = (tenses ?? []).filter((t): t is EsTenseId => ids.has(t));
    return es.verbToExercise(target, chosen.length ? chosen : (defaultTenses(lang, !!beginner) as EsTenseId[]));
  }
  const target = (verb ? it.findVerb(verb) : null) ?? it.pickNextVerb(knownVerbs ?? []);
  const ids = new Set<string>(IT_TENSES.map(t => t.id));
  const chosen = (tenses ?? []).filter((t): t is ItTenseId => ids.has(t));
  return it.verbToExercise(target, chosen.length ? chosen : (defaultTenses(lang, !!beginner) as ItTenseId[]));
}
