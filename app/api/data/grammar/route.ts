import { NextRequest, NextResponse } from 'next/server';
import { getGrammar, setGrammar } from '@/lib/db';
import { GrammarRecord } from '@/lib/types';

export async function GET(req: NextRequest) {
  const userId = req.headers.get('x-user-id') ?? 'default';
  const data = await getGrammar(userId);
  return NextResponse.json(data);
}

export async function PUT(req: NextRequest) {
  const userId = req.headers.get('x-user-id') ?? 'default';
  const data = (await req.json()) as GrammarRecord[];
  await setGrammar(userId, data);
  return NextResponse.json({ ok: true });
}
