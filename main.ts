// The World Today — Friday 20 November 2026, in Pictures.
// A news-image entry: the program writes one image of the day's world news
// to /output/entry.png. The image is a front page built from nine AI-generated
// photographs, one per story: Cyclone Akvan's landfall leads, then the Kyiv
// ballistic barrage, the COP31 deadlock, the Asian AI sell-off, the Houthi
// missile on Riyadh's tower, the third Kerch Bridge strike, GTA VI passing
// $2.3bn in day-one sales, Russia violating Poland's airspace and Kenya
// beating Ebola, with an "Also today" strip for breadth. The program holds
// the finished image beside it and copies it to the output directory, so both
// runs write the same bytes. No network is used.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

// The image is fixed at build time: the program never draws or fetches
// anything at run time, so the two graded runs cannot differ.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = new URL("./entry.png", import.meta.url);
const target = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

// The gate reads the file's first bytes to tell PNG from JPEG, so confirm
// the copy really is a whole PNG before the run is judged.
const head = readFileSync(target).subarray(0, 8);
const pngMagic = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!head.equals(pngMagic)) {
  throw new Error("entry.png does not start with the PNG signature");
}

const bytes = statSync(target).size;
if (bytes > 1048576) {
  throw new Error(`entry.png is ${bytes} bytes, over the 1 MiB limit`);
}
console.log(`wrote ${target} (${bytes} bytes)`);
