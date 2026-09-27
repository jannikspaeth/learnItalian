import { NextRequest, NextResponse } from 'next/server';
import { dbConfigured, getAllProfiles, getProfilesRow, setProfilesRow, setProfileLevel } from '@/lib/db';
import { MAX_NAME_LENGTH, Profile, mergeProfiles, profileIdFor } from '@/lib/profiles';
import { isLang } from '@/lib/lang';

// All profiles (built-in + created in the app), with their level per language.
export async function GET() {
  return NextResponse.json(await getAllProfiles());
}

// Create a profile from just a name. Levels are chosen per language later, on the
// language picker.
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
  const row = await getProfilesRow();
  const all = mergeProfiles(row.profiles, row.levels);
  if (all.some(p => p.name.toLowerCase() === name.toLowerCase())) {
    return NextResponse.json({ error: 'Name already taken' }, { status: 409 });
  }

  const profile: Profile = { id: profileIdFor(name, new Set(all.map(p => p.id))), name };
  row.profiles.push(profile);
  await setProfilesRow(row);
  return NextResponse.json({ profile, profiles: mergeProfiles(row.profiles, row.levels) });
}

// Set a profile's level for one language: { id, lang, level }.
export async function PUT(req: NextRequest) {
  if (!dbConfigured()) {
    return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
  }
  const { id, lang, level } = (await req.json().catch(() => ({}))) as {
    id?: unknown;
    lang?: unknown;
    level?: unknown;
  };
  const all = await getAllProfiles();
  if (typeof id !== 'string' || !all.some(p => p.id === id) || !isLang(lang) || (level !== 'A1' && level !== 'B1')) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
  await setProfileLevel(id, lang, level);
  return NextResponse.json({ profiles: await getAllProfiles() });
}
