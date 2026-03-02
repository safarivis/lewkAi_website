#!/usr/bin/env node
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { spawn } from "node:child_process";

const cwd = process.cwd();
const promptFile = resolve(cwd, "scripts/design-sync/sync-prompt.md");
const designFile = resolve(cwd, process.env.DESIGN_FILE || "design/theme.pen");

if (!existsSync(promptFile)) {
  console.error(`[design-sync] Missing prompt file: ${promptFile}`);
  process.exit(1);
}

const promptBody = readFileSync(promptFile, "utf8")
  .replaceAll("{{DESIGN_FILE}}", designFile)
  .replaceAll("{{PROJECT_ROOT}}", cwd);

const configuredCommand = process.env.DESIGN_SYNC_COMMAND;

if (!configuredCommand) {
  console.log("[design-sync] Dry run only.");
  console.log("[design-sync] Set DESIGN_SYNC_COMMAND to execute your coding agent.");
  console.log("[design-sync] Example:");
  console.log("  DESIGN_SYNC_COMMAND='claude -p \"$PROMPT\"' npm run design:sync");
  process.exit(0);
}

const command = configuredCommand.replaceAll("$PROMPT", promptBody);

console.log("[design-sync] Running sync command...");
const child = spawn(command, {
  stdio: "inherit",
  shell: true,
  cwd,
});

child.on("exit", (code) => process.exit(code ?? 0));
