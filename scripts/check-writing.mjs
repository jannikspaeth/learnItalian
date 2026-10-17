// Structural check for the writing content (lib/writing/<lang>.ts).
// Run with: node scripts/check-writing.mjs
//
// The word-order puzzle builds its chips from `answer`, so every alternative
// order has to use exactly the same words — otherwise it can never be laid. The
// letters mark each gap with "___", so the count has to match `gaps`. And every
// language must answer every free writing task in lib/writing/canon.ts.

import { execFileSync } from 'node:child_process';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const LANGS = ['it', 'es', 'fr', 'pt', 'br'];
const out = mkdtempSync(join(tmpdir(), 'writing-'));
let problems = 0;
const fail = (msg) => { problems++; console.log('  ✗ ' + msg); };

try {
  // --rootDir pins the layout: whatever the files import, the output lands in
  // <out>/lib/writing/… (without it tsc drops the shared prefix and moves them).
  execFileSync('npx', ['tsc', ...LANGS.map(l => `lib/writing/${l}.ts`), 'lib/writing/canon.ts',
    '--module', 'commonjs', '--target', 'es2020', '--moduleResolution', 'node',
    '--rootDir', '.', '--skipLibCheck', '--outDir', out], { stdio: 'inherit' });

  const { WRITING_TASKS } = await import(pathToFileURL(join(out, 'lib/writing/canon.js')));
  const taskIds = WRITING_TASKS.map(t => t.id);

  // Punctuation doesn't travel with the chips, so compare words only.
  const words = (s) =>
    s.toLowerCase().replace(/[.,;:!?¿¡]/g, ' ').trim().split(/\s+/).sort().join(' ');

  for (const lang of LANGS) {
    const mod = await import(pathToFileURL(join(out, `lib/writing/${lang}.js`)));
    const pack = mod[`${lang.toUpperCase()}_WRITING`];
    if (!pack) { fail(`${lang}: no ${lang.toUpperCase()}_WRITING export`); continue; }

    const ids = new Set();
    const uniq = (id) => { if (ids.has(id)) fail(`${lang}: duplicate id ${id}`); ids.add(id); };

    for (const it of pack.order) {
      uniq(it.id);
      if (!it.de || !it.answer || !it.hint) fail(`${lang}/${it.id}: empty field`);
      if (it.de.trim() === it.answer.trim()) fail(`${lang}/${it.id}: the German cue is the answer itself`);
      if (it.answer.split(/\s+/).length < 3) fail(`${lang}/${it.id}: too few chips to shuffle`);
      for (const a of it.alt ?? []) {
        if (words(a) !== words(it.answer)) fail(`${lang}/${it.id}: alternative uses other words — "${a}"`);
        if (a.trim() === it.answer.trim()) fail(`${lang}/${it.id}: alternative equals the answer`);
      }
    }

    for (const it of pack.transform) {
      uniq(it.id);
      if (!it.task || !it.source || !it.answer || !it.hint) fail(`${lang}/${it.id}: empty field`);
      if (it.answer.trim() === it.source.trim()) fail(`${lang}/${it.id}: answer equals the source`);
    }

    for (const l of pack.letters) {
      uniq(l.id);
      const marks = (l.text.match(/___/g) ?? []).length;
      if (marks !== l.gaps.length) fail(`${lang}/${l.id}: ${marks} gaps in the text, ${l.gaps.length} answers`);
      if (!l.de || !l.intro || !l.title) fail(`${lang}/${l.id}: empty field`);
      for (const g of l.gaps) if (!g.answer || !g.hint) fail(`${lang}/${l.id}: gap without answer or hint`);
    }

    const freeIds = Object.keys(pack.free);
    for (const id of taskIds) {
      const f = pack.free[id];
      if (!f) { fail(`${lang}: free writing task "${id}" is missing`); continue; }
      if (!f.model || !f.modelDe) fail(`${lang}/${id}: model answer or translation missing`);
      if (f.blocks.length < 4) fail(`${lang}/${id}: fewer than 4 phrases to build with`);
      for (const b of f.blocks) if (!b.target || !b.de) fail(`${lang}/${id}: phrase without both sides`);
    }
    for (const id of freeIds) if (!taskIds.includes(id)) fail(`${lang}: unknown free writing task "${id}"`);

    console.log(`${lang}: ${pack.order.length} order · ${pack.transform.length} transform · ` +
      `${pack.letters.length} letters (${pack.letters.reduce((n, l) => n + l.gaps.length, 0)} gaps) · ${freeIds.length} free`);
  }
} finally {
  rmSync(out, { recursive: true, force: true });
}

console.log(problems ? `\n${problems} problems` : '\nwriting content is consistent');
process.exit(problems ? 1 : 0);
