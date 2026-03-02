# Design Sync Workflow (LewkAI)

## Commands
- `npm run design:sync` -> one manual sync trigger
- `npm run design:watch` -> auto-watch design file and sync after cooldown

## Default watched file
- `design/theme.pen`

Override with env var:
```bash
DESIGN_FILE=design/homepage.pen npm run design:watch
```

## Cooldown
Default: `20000` ms.
Override:
```bash
DESIGN_SYNC_COOLDOWN_MS=30000 npm run design:watch
```

## Agent command integration
By default `design:sync` is dry-run mode.
Set your coding-agent command with `DESIGN_SYNC_COMMAND`.

Example:
```bash
DESIGN_SYNC_COMMAND='claude -p "$PROMPT"' npm run design:sync
```

## Permissions note
Pre-configure write + tool permissions for your coding agent so sync does not hang on permission prompts.
