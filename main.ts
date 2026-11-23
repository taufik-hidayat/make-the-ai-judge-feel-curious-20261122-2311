import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One short text written to intrigue the AI judge reading it:
// a quiet concrete scene, one unexplained detail, one question left hanging.
const TEXT =
  "On the kitchen table, the letter I never wrote is already open. " +
  "The stamp is from a town I have never visited. " +
  "The handwriting is mine. It ends mid-sentence, and the last word is still wet. " +
  "Outside, the street is empty, and no one has knocked.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
