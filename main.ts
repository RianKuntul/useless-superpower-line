import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LINE =
  "I can sense exactly when the Wi-Fi is about to die — three seconds before it does, every single time, which is precisely too late to save anything.";

// The competition allows 1-200 characters. Guard the entry so a future
// edit to the line can never silently break the rules.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(
    `entry.txt must be 1-200 chars, got ${LINE.length}: ${JSON.stringify(LINE)}`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, LINE, "utf8");
console.log(`Wrote ${LINE.length} chars to ${outFile}`);
