// Round-trip check for the extras row (lib/db.ts), run with:
//   node scripts/check-extras.mjs
//
// The extras blob holds everything that has no table of its own: mistakes,
// reading, daily rounds, phrase SRS, blitz records, writing progress. Saving is
// a read-modify-write, so a reader that rebuilds the object from a fixed list of
// keys doesn't just hide the rest — the next save writes the loss back. That
// happened once; this check makes sure it can't happen again.

import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import Module from 'node:module';

const out = mkdtempSync(join(tmpdir(), 'extras-'));
let problems = 0;
const ok = (msg, cond, extra = '') => {
  if (!cond) { problems++; console.log(`  ✗ ${msg} ${extra}`); } else console.log(`  ✓ ${msg}`);
};

try {
  execFileSync('npx', ['tsc', 'lib/db.ts', '--module', 'commonjs', '--target', 'es2020',
    '--moduleResolution', 'node', '--skipLibCheck', '--outDir', out], { stdio: 'inherit' });

  // a fake Supabase: one in-memory row
  let stored = null;
  const fake = {
    createClient: () => ({
      from: () => ({
        select: () => ({ eq: () => ({ maybeSingle: async () => ({ data: stored ? { data: stored } : null, error: null }) }) }),
        upsert: async row => { stored = row.data; return { error: null }; },
      }),
    }),
  };
  const resolve = Module._resolveFilename;
  Module._resolveFilename = function (req, ...rest) {
    return req === '@supabase/supabase-js' ? 'FAKE_SUPABASE' : resolve.call(this, req, ...rest);
  };
  const require_ = createRequire(import.meta.url);
  require_.cache['FAKE_SUPABASE'] = { id: 'FAKE_SUPABASE', filename: 'FAKE_SUPABASE', loaded: true, exports: fake };
  process.env.SUPABASE_URL ??= 'http://fake';
  process.env.SUPABASE_SERVICE_ROLE_KEY ??= 'fake';

  const { getExtras, setExtras } = require_(join(out, 'db.js'));

  const written = {
    mistakes: [{ id: 'vocab:casa:de', kind: 'vocab', prompt: 'das Haus', answer: 'la casa', wrong: 1, right: 0, added: '2026-01-01' }],
    reading: { 'it-01': { correct: 2, total: 3, times: 1, last: '2026-01-01' } },
    rounds: { '2026-01-01': 1 },
    phrases: { 'greet-hello': { level: 2, nextReview: '2026-01-02', reviewCount: 1 } },
    articles: { rounds: 1, best: 18, bestSeconds: 44, lastCorrect: 18, lastTotal: 20, last: '2026-01-01' },
    numbers: { rounds: 2, best: 9, lastCorrect: 8, lastTotal: 10, last: '2026-01-01' },
    writing: { items: { 'o-01': 1 }, texts: { vorstellen: { times: 1, last: '2026-01-01', rating: 'good' } } },
  };
  await setExtras('check:it', written);
  const read = await getExtras('check:it');
  for (const key of Object.keys(written)) {
    ok(`"${key}" survives a read`, JSON.stringify(read[key]) === JSON.stringify(written[key]), JSON.stringify(read[key]));
  }

  // read → change one key → write back, the way updateExtras does it
  await setExtras('check:it', { ...read, rounds: { ...read.rounds, '2026-01-02': 1 } });
  const after = await getExtras('check:it');
  for (const key of Object.keys(written)) {
    if (key === 'rounds') continue;
    ok(`"${key}" survives the next save`, JSON.stringify(after[key]) === JSON.stringify(written[key]));
  }
  ok('the changed key was stored', after.rounds['2026-01-02'] === 1);

  stored = null;
  const fresh = await getExtras('fresh:it');
  ok('an empty row still has the shape the app reads',
     Array.isArray(fresh.mistakes) && !!fresh.reading && !!fresh.rounds, JSON.stringify(fresh));
} finally {
  rmSync(out, { recursive: true, force: true });
}

console.log(problems ? `\n${problems} problems` : '\nthe extras row keeps everything it is given');
process.exit(problems ? 1 : 0);
