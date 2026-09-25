// Lists the next catalog/starter words that still have NO example sentence in
// public/vocab-examples.json, in catalog order (common/curated words first), so
// authoring is resumable. Usage: node scripts/examples-todo.mjs [count]
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const N = Number(process.argv[2] || 50);

function normWord(s) {
  // Keep in sync with lib/norm.ts.
  return s
    .toLowerCase()
    .trim()
    .replace(/^(?:(?:il|lo|la|i|gli|le|un|uno|una|der|die|das|ein|eine|einen|einem|einer)\s+|(?:l|un)['’]\s*)/i, '')
    .replace(/\s*\(.*?\)\s*/g, '')
    .trim();
}

// Matches { de: '…', it: '…' } entries; either side may use '…' or "…" quotes
// (Italian elisions like "l'acqua" are written with double quotes).
const STR = `'((?:[^'\\\\]|\\\\.)*)'|"((?:[^"\\\\]|\\\\.)*)"`;
const PAIR = new RegExp(`de:\\s*(?:${STR}),\\s*it:\\s*(?:${STR})`, 'g');

function pairs(file) {
  const txt = fs.readFileSync(path.join(root, 'lib', file), 'utf8');
  const unq = s => s.replace(/\\(['"])/g, '$1');
  return [...txt.matchAll(PAIR)].map(m => ({
    de: unq(m[1] ?? m[2]),
    it: unq(m[3] ?? m[4]),
  }));
}

// Starter first (beginners), then the catalog; dedupe by normalized Italian.
const all = [...pairs('vocab-starter.ts'), ...pairs('vocab-catalog.ts'), ...pairs('vocab-imported.ts'), ...pairs('vocab-b1.ts')];
const seen = new Set();
const unique = [];
for (const p of all) {
  const k = normWord(p.it);
  if (seen.has(k)) continue;
  seen.add(k);
  unique.push({ ...p, key: k });
}

const obj = JSON.parse(fs.readFileSync(path.join(root, 'public', 'vocab-examples.json'), 'utf8'));
const hasExample = k => obj[k] && obj[k].it;
const todo = unique.filter(u => !hasExample(u.key));

console.log(`Unique words: ${unique.length} | with example: ${unique.length - todo.length} | remaining: ${todo.length}\n`);
console.log(`Next ${Math.min(N, todo.length)} to author:\n`);
for (const u of todo.slice(0, N)) {
  console.log(`${u.key}\t${u.it}\t${u.de}`);
}
