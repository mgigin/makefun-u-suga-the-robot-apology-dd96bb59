// The Robot Apology — make.fun bounty u-suga-the-robot-apology-dd96bb59
// Writes a two-line robot confession to /output/entry.txt.
// v1: birthday card delivered to the old address.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I am sorry I delivered your birthday card to the blue door on your old street instead of your new flat, because I ran the route I had stored instead of reading the address you saved.\n" +
  "I learned that a stored route is only a habit, so now I read the saved address twice and match it to the door number before I seal an envelope.\n";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
