import { NextRequest, NextResponse } from 'next/server';
import { getExtras, setExtras } from '@/lib/db';
import { UserExtras } from '@/lib/types';

export async function GET(req: NextRequest) {
  const userId = req.headers.get('x-user-id') ?? 'default';
  const data = await getExtras(userId);
  return NextResponse.json(data);
}

export async function PUT(req: NextRequest) {
  const userId = req.headers.get('x-user-id') ?? 'default';
  const data = (await req.json()) as UserExtras;
  await setExtras(userId, data);
  return NextResponse.json({ ok: true });
}
