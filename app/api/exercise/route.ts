import { NextRequest, NextResponse } from 'next/server';
import { ExerciseType } from '@/lib/types';
import { verbToExercise, pickNextVerb, findVerb } from '@/lib/verb-catalog';

export async function POST(req: NextRequest) {
  const { type, verb, knownVerbs, beginner } = (await req.json()) as {
    type: ExerciseType;
    verb?: string;
    knownVerbs?: string[];
    beginner?: boolean;
  };

  if (type === 'conjugation') {
    const catalogVerb = verb ? findVerb(verb) : null;
    const target = catalogVerb ?? pickNextVerb(knownVerbs ?? []);
    return NextResponse.json(verbToExercise(target, { presentOnly: beginner }));
  }

  return NextResponse.json({ error: 'Nicht unterstützt.' }, { status: 400 });
}
