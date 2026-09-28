import { NextRequest, NextResponse } from 'next/server';
import { ExerciseType } from '@/lib/types';
import * as it from '@/lib/verb-catalog';
import * as es from '@/lib/es/verb-catalog';
import * as fr from '@/lib/fr/verb-catalog';
import { defaultTenses, ES_TENSES, FR_TENSES, IT_TENSES, EsTenseId, FrTenseId, ItTenseId } from '@/lib/tenses';
import { isLang } from '@/lib/lang';

export async function POST(req: NextRequest) {
  const { type, verb, knownVerbs, beginner, tenses, lang: langParam } = (await req.json()) as {
    type: ExerciseType;
    verb?: string;
    knownVerbs?: string[];
    beginner?: boolean;
    tenses?: string[];
    lang?: string;
  };
  const lang = isLang(langParam) ? langParam : 'it';

  if (type === 'conjugation') {
    if (lang === 'fr') {
      const target = (verb ? fr.findVerb(verb) : null) ?? fr.pickNextVerb(knownVerbs ?? []);
      const ids = new Set<string>(FR_TENSES.map(t => t.id));
      const chosen = (tenses ?? []).filter((t): t is FrTenseId => ids.has(t));
      const use = chosen.length ? chosen : (defaultTenses(lang, !!beginner) as FrTenseId[]);
      return NextResponse.json(fr.verbToExercise(target, use));
    }
    if (lang === 'es') {
      const target = (verb ? es.findVerb(verb) : null) ?? es.pickNextVerb(knownVerbs ?? []);
      const ids = new Set<string>(ES_TENSES.map(t => t.id));
      const chosen = (tenses ?? []).filter((t): t is EsTenseId => ids.has(t));
      const use = chosen.length ? chosen : (defaultTenses(lang, !!beginner) as EsTenseId[]);
      return NextResponse.json(es.verbToExercise(target, use));
    }
    const target = (verb ? it.findVerb(verb) : null) ?? it.pickNextVerb(knownVerbs ?? []);
    const ids = new Set<string>(IT_TENSES.map(t => t.id));
    const chosen = (tenses ?? []).filter((t): t is ItTenseId => ids.has(t));
    const use = chosen.length ? chosen : (defaultTenses(lang, !!beginner) as ItTenseId[]);
    return NextResponse.json(it.verbToExercise(target, use));
  }

  return NextResponse.json({ error: 'Nicht unterstützt.' }, { status: 400 });
}
