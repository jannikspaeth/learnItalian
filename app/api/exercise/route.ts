import { NextRequest, NextResponse } from 'next/server';
import { ExerciseType } from '@/lib/types';
import { isLang } from '@/lib/lang';
import { buildConjugationExercise } from '@/lib/conjugation-exercise';

// The app builds drills in the browser now (lib/conjugation-exercise.ts, works
// offline); this route stays for older clients.
export async function POST(req: NextRequest) {
  const { type, verb, knownVerbs, beginner, tenses, lang } = (await req.json()) as {
    type: ExerciseType;
    verb?: string;
    knownVerbs?: string[];
    beginner?: boolean;
    tenses?: string[];
    lang?: string;
  };
  if (type === 'conjugation') {
    return NextResponse.json(
      buildConjugationExercise({ lang: isLang(lang) ? lang : 'it', verb, knownVerbs, beginner, tenses }),
    );
  }
  return NextResponse.json({ error: 'Nicht unterstützt.' }, { status: 400 });
}
