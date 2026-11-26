// Laugh Track: The Crypto Trading Joke (R2) — writes the entry line to /output/entry.txt
// One line: a stop-loss that triggered one cent before the pump.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const line = readFileSync(join(here, "entry.txt"), "utf8").trim();
const outFile = join(outDir, "entry.txt");
const outText = line + "\n";
writeFileSync(outFile, outText, "utf8");
console.log(`crypto joke on the record (${line.length} chars) -> ${outFile}`);
