import { NextRequest, NextResponse } from 'next/server';
import { ExerciseType } from '@/lib/types';
import {
  verbToExercise,
  pickNextVerb,
  findVerb,
  defaultTenses,
  TENSE_IDS,
  TenseId,
} from '@/lib/verb-catalog';

export async function POST(req: NextRequest) {
  const { type, verb, knownVerbs, beginner, tenses } = (await req.json()) as {
    type: ExerciseType;
    verb?: string;
    knownVerbs?: string[];
    beginner?: boolean;
    tenses?: string[];
  };

  if (type === 'conjugation') {
    const catalogVerb = verb ? findVerb(verb) : null;
    const target = catalogVerb ?? pickNextVerb(knownVerbs ?? []);
    const chosen = (tenses ?? []).filter((t): t is TenseId => TENSE_IDS.has(t));
    return NextResponse.json(verbToExercise(target, chosen.length ? chosen : defaultTenses(!!beginner)));
  }

  return NextResponse.json({ error: 'Nicht unterstützt.' }, { status: 400 });
}
