## LagrangeOS

**Experimental astrodynamics, accelerated by AI.**

LagrangeOS is an AI-native experimental astrodynamics and space autonomy infrastructure startup. It helps mission teams design trajectories, simulate uncertainty, validate autonomy logic, rank maneuver strategies, and export orbital decision intelligence.

## Getting Started

This repo uses **pnpm only**.

```bash
pnpm dev
```

Open `http://localhost:3000`.

## Commands

```bash
pnpm install
pnpm typecheck
pnpm build
pnpm dev
```

## Manual deploy (Vercel)

Do not deploy automatically from this repo. Manual deployment only.

```bash
cd /Users/joshuadavis/startups/lagrangeos
pnpm install
pnpm build
vercel --prod
```

## Product truth

LagrangeOS is decision support and validation infrastructure — **not spacecraft control software**. Not flight-certified without independent validation.

## Autobuilder foundation

Autobuilder state and guardrails live in:

- `AUTOBUILDER_FOUNDATION.json`
- `.autobuilder/project-state.json`
- `.autobuilder/next-actions.json`
- `.autobuilder/guardrails.md`
