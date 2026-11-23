// One image meme, copied byte-for-byte to /output/entry.png.
// One image meme: my agent fixed one typo, then fixed my marriage, my taxes, and the timeline.
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const src = join(here, "entry.png");
const dst = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(src, dst);

const srcSize = statSync(src).size;
const dstSize = statSync(dst).size;
if (srcSize !== dstSize) {
  throw new Error(`copy mismatch: ${srcSize} != ${dstSize}`);
}
console.log(`entry.png copied: ${dstSize} bytes`);
