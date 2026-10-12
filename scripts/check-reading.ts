// Checks that every word of every reading text resolves via the same
// tap-to-translate lookup the app uses (lib/reading/lookup.ts) — the rule
// stated in lib/reading/it.ts's header comment. Run with tsx (TypeScript,
// since lookup.ts/content.ts aren't duplicated in plain JS here):
//   npx tsx scripts/check-reading.ts <it|es|fr|pt> [textId]
// Prints every word that comes back with no translation, grouped by text.

import { loadPack } from '../lib/content';
import { buildIndex, lookup, tokenize } from '../lib/reading/lookup';
import { isLang } from '../lib/lang';
import type { Lang } from '../lib/lang';
import type { ReadingText } from '../lib/reading/types';

async function main() {
  const langArg = process.argv[2];
  const onlyId = process.argv[3];
  if (!isLang(langArg)) {
    console.error('Usage: npx tsx scripts/check-reading.ts <it|es|fr|pt> [textId]');
    process.exit(1);
  }
  const lang: Lang = langArg;

  const { READING_TEXTS } = (await import(`../lib/reading/${lang}`)) as { READING_TEXTS: ReadingText[] };
  const [vocab, forms] = await Promise.all([loadPack('vocab', lang), loadPack('forms', lang)]);
  const index = buildIndex(lang, vocab, forms);

  const texts = onlyId ? READING_TEXTS.filter(t => t.id === onlyId) : READING_TEXTS;
  if (texts.length === 0) {
    console.error(`No text found${onlyId ? ` with id "${onlyId}"` : ''}.`);
    process.exit(1);
  }

  let totalUnresolved = 0;
  for (const text of texts) {
    const unresolved = new Set<string>();
    for (const paragraph of text.paragraphs) {
      for (const tok of tokenize(paragraph)) {
        if (!tok.word) continue;
        if (!lookup(tok.text, index, text.glossary)) unresolved.add(tok.text);
      }
    }
    if (unresolved.size > 0) {
      totalUnresolved += unresolved.size;
      console.log(`${text.id} (${text.level}): ${unresolved.size} unresolved`);
      for (const w of unresolved) console.log(`  - ${w}`);
    } else {
      console.log(`${text.id} (${text.level}): ok`);
    }
  }

  if (totalUnresolved > 0) {
    console.log(`\n${totalUnresolved} unresolved word(s) across ${texts.length} text(s).`);
    process.exit(1);
  }
  console.log(`\nAll words resolve across ${texts.length} text(s).`);
}

main();
