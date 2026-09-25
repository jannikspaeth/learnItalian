import { NextRequest, NextResponse } from 'next/server';
import { dbConfigured, getAllProfiles, getCustomProfiles, setCustomProfiles } from '@/lib/db';
import { MAX_NAME_LENGTH, Profile, mergeProfiles, profileIdFor } from '@/lib/profiles';

// All profiles (built-in + created in the app).
export async function GET() {
  return NextResponse.json(await getAllProfiles());
}

// Create a profile from just a name. New profiles start as beginners (A1).
export async function POST(req: NextRequest) {
  if (!dbConfigured()) {
    return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
  }
  const body = (await req.json().catch(() => ({}))) as { name?: unknown };
  const name = typeof body.name === 'string' ? body.name.trim().replace(/\s+/g, ' ') : '';
  if (!name || name.length > MAX_NAME_LENGTH) {
    return NextResponse.json({ error: 'Invalid name' }, { status: 400 });
  }

  // Strict read so a failed read can't overwrite the list with just the new entry.
  const custom = await getCustomProfiles();
  const all = mergeProfiles(custom);
  if (all.some(p => p.name.toLowerCase() === name.toLowerCase())) {
    return NextResponse.json({ error: 'Name already taken' }, { status: 409 });
  }

  const profile: Profile = {
    id: profileIdFor(name, new Set(all.map(p => p.id))),
    name,
    level: 'A1',
  };
  await setCustomProfiles([...custom, profile]);
  return NextResponse.json({ profile, profiles: [...all, profile] });
}
