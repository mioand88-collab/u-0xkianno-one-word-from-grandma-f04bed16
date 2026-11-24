// One Word From Grandma — the single word Grandma would text about AI.
//
// Grandma means "robot", but her fingers (and her autocorrect) had other
// ideas. One warm, baffled, typo'd word: Robit. No punctuation, no extra
// words — exactly what she would send, and nothing else.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const WORD = 'Robit';

function writeEntry(outDir: string, word: string): void {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'entry.txt'), word, 'utf8');
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
writeEntry(outDir, WORD);
