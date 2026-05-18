# Project Recovery Notes

## Startup Identity

- **Name**: LagrangeOS
- **Positioning**: AI-native astrodynamics and autonomy infrastructure for the next generation of space missions.
- **Core message**: Experimental astrodynamics, accelerated by AI.
- **Product truth**: Decision support and validation infrastructure — not spacecraft control. Not flight-certified without independent validation.

## Product Vision

LagrangeOS is a physics-first AI mission engine that helps teams:

- Define mission constraints
- Generate candidate trajectories and maneuver plans
- Simulate uncertainty
- Stress-test autonomy logic and recovery strategies
- Rank options by \(\Delta v\), time, robustness, observability, safety, and recoverability
- Export mission decision intelligence

Future direction includes an interactive mission sandbox, trajectory ranking engine, orbit determination intelligence, rendezvous/proximity planning, cislunar logistics tooling, small-body navigation support, autonomy validation cloud, and secure enterprise/defense deployments.

## Website/App Structure

- **Framework**: Next.js App Router
- **Route(s)**:
  - `/` (homepage): premium venture-grade campaign site with mission-engine narrative and technical credibility guardrails
- **Primary files**:
  - `src/app/layout.tsx`: SEO metadata + global shell
  - `src/app/page.tsx`: full homepage sections
  - `src/app/globals.css`: Tailwind v4 + global styles

## Design Direction

- Premium venture-grade space technology (dark, cinematic, technical)
- Glossy glass surfaces, subtle gradients, orbital diagram visuals
- Highlight accents: cyan, violet, yellow (used as restrained glows)
- Clean grid, mobile-first, minimal clutter
- Avoid cheap sci-fi and generic SaaS template styling

## What Was Preserved

- Next.js App Router + TypeScript + Tailwind foundation
- Minimal dependency set (no DB, no auth, no API routes)
- pnpm-only workflow with `pnpm-lock.yaml`
- Core product truth language: decision support / validation, not flight-certified without validation

## What Was Fixed

- Replaced starter template homepage with LagrangeOS-specific investor-grade narrative
- Added required SEO metadata (title/description/keywords)
- Added Autobuilder foundation artifacts + guardrails
- Enforced pnpm-only commands in `README.md`

## What Was Removed

- Default scaffold PostCSS config file (`postcss.config.mjs`) replaced with required `postcss.config.js`

## Current Build Status

See `.autobuilder/project-state.json` for the latest tracked state (install/typecheck/build and disk audit results).

## Manual Deploy Command

```bash
cd /Users/joshuadavis/startups/lagrangeos
pnpm install
pnpm build
vercel --prod
```

## Return-Later Commands

```bash
pnpm dev
pnpm typecheck
pnpm build
pnpm lint
```

## Next Best Tasks

- Add an interactive mission sandbox (client-side) with scenario presets
- Add a pilot request page and a dedicated investor page
- Add a structured content file to keep homepage copy/data modular
- Expand SEO (OpenGraph, social cards, canonical, sitemap/robots if desired)
- Add a technical benchmark section with methodology and guardrails
- Run a safe post-build disk cleanup on demand

## Autobuilder Guardrails

Authoritative guardrails live in `.autobuilder/guardrails.md`. Keep the product truth strict:

- No “we control spacecraft” claims.
- No flight-certified claims without validation.
- No drift into generic AI SaaS positioning.
