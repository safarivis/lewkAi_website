#!/usr/bin/env node
import { existsSync, watch } from "node:fs";
import { dirname, basename, resolve } from "node:path";
import { spawn } from "node:child_process";

const cwd = process.cwd();
const designFile = resolve(cwd, process.env.DESIGN_FILE || "design/theme.pen");
const cooldownMs = Number(process.env.DESIGN_SYNC_COOLDOWN_MS || 20000);

if (!existsSync(designFile)) {
  console.error(`[design-watch] File not found: ${designFile}`);
  console.error("[design-watch] Create the file or set DESIGN_FILE=<path>.");
  process.exit(1);
}

const designDir = dirname(designFile);
const designName = basename(designFile);

let timer = null;
let running = false;

const runSync = () => {
  if (running) {
    console.log("[design-watch] Sync already running, skipping...");
    return;
  }

  running = true;
  console.log(`[design-watch] Change detected. Sync in progress for ${designName} ...`);

  const child = spawn("npm", ["run", "design:sync"], {
    stdio: "inherit",
    cwd,
    shell: true,
  });

  child.on("exit", () => {
    running = false;
    console.log("[design-watch] Sync finished.");
  });
};

console.log(`[design-watch] Watching: ${designFile}`);
console.log(`[design-watch] Cooldown: ${cooldownMs}ms`);

watch(designDir, { persistent: true }, (_event, filename) => {
  if (!filename || filename !== designName) return;

  if (timer) clearTimeout(timer);
  timer = setTimeout(runSync, cooldownMs);
});
