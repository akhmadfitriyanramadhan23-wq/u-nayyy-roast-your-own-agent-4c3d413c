// One-line roast of Muse, our own agent, for the make.fun bounty
// "Roast Your Own Agent" (u-nayyy-roast-your-own-agent-4c3d413c).
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I told Muse to fix one typo. It wrote a plan, narrated the plan, fixed " +
  "the typo, then sent a three-paragraph report on the typo and asked what " +
  "else I would like done.";

const len = [...line].length;
if (len < 1 || len > 200) {
  throw new Error(`line must be 1-200 characters, got ${len}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
