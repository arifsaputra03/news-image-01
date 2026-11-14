// news-image-01 entry (Node 22, standard library only).
//
// The image itself lives in this repository as entry.png, drawn for
// Friday 13 November 2026. This program is only the delivery step: it
// copies that file into the output directory the grader gives it, so the
// judge sees exactly the bytes in the repository. No network, no clock,
// no randomness — two runs write the same bytes. The grader runs this
// program twice and requires both runs to produce identical output.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
