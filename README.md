
<p align="center">
  <picture>
    <source media="(prefers-reduced-motion: reduce)" srcset="assets/hero/hero-reduced.svg">
    <source media="(prefers-color-scheme: light)" srcset="assets/hero/hero-light.svg">
    <img src="assets/hero/hero-motion.svg" alt="LagrangeOS — animated project plate showing policy &rarr; control &rarr; evidence. Motion depicts this project's real state transition." width="100%">
  </picture>
</p>

<p align="center">
  <picture>
    <source media="(prefers-reduced-motion: reduce)" srcset="assets/hero/computational-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="assets/hero/computational-light.svg">
    <img src="assets/hero/computational-motion.svg" alt="State machine: policy &rarr; control &rarr; evidence." width="100%">
  </picture>
</p>

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

<!-- TRILLIONX:presentation:begin -->

### Animated surfaces

Generated from this repository's own source tree: every count, route and module below was measured, not written by hand.

#### Identity

<picture>
  <source media="(prefers-reduced-motion: reduce)" srcset="https://raw.githubusercontent.com/M4G3LL4N0/lagrangeos/main/.github-art/surfaces/hero-reduced.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/M4G3LL4N0/lagrangeos/main/.github-art/surfaces/hero-light.svg">
  <img alt="Identity diagram for lagrangeos" src="https://raw.githubusercontent.com/M4G3LL4N0/lagrangeos/main/.github-art/surfaces/hero.svg">
</picture>

#### Entry points

<picture>
  <source media="(prefers-reduced-motion: reduce)" srcset="https://raw.githubusercontent.com/M4G3LL4N0/lagrangeos/main/.github-art/surfaces/terminal-reduced.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/M4G3LL4N0/lagrangeos/main/.github-art/surfaces/terminal-light.svg">
  <img alt="Entry points diagram for lagrangeos" src="https://raw.githubusercontent.com/M4G3LL4N0/lagrangeos/main/.github-art/surfaces/terminal.svg">
</picture>

#### Modules

<picture>
  <source media="(prefers-reduced-motion: reduce)" srcset="https://raw.githubusercontent.com/M4G3LL4N0/lagrangeos/main/.github-art/surfaces/architecture-reduced.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/M4G3LL4N0/lagrangeos/main/.github-art/surfaces/architecture-light.svg">
  <img alt="Modules diagram for lagrangeos" src="https://raw.githubusercontent.com/M4G3LL4N0/lagrangeos/main/.github-art/surfaces/architecture.svg">
</picture>

#### Routes

<picture>
  <source media="(prefers-reduced-motion: reduce)" srcset="https://raw.githubusercontent.com/M4G3LL4N0/lagrangeos/main/.github-art/surfaces/data_flow-reduced.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/M4G3LL4N0/lagrangeos/main/.github-art/surfaces/data_flow-light.svg">
  <img alt="Routes diagram for lagrangeos" src="https://raw.githubusercontent.com/M4G3LL4N0/lagrangeos/main/.github-art/surfaces/data_flow.svg">
</picture>

#### Primitives

<picture>
  <source media="(prefers-reduced-motion: reduce)" srcset="https://raw.githubusercontent.com/M4G3LL4N0/lagrangeos/main/.github-art/surfaces/state_machine-reduced.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/M4G3LL4N0/lagrangeos/main/.github-art/surfaces/state_machine-light.svg">
  <img alt="Primitives diagram for lagrangeos" src="https://raw.githubusercontent.com/M4G3LL4N0/lagrangeos/main/.github-art/surfaces/state_machine.svg">
</picture>

#### Composition

<picture>
  <source media="(prefers-reduced-motion: reduce)" srcset="https://raw.githubusercontent.com/M4G3LL4N0/lagrangeos/main/.github-art/surfaces/component_map-reduced.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/M4G3LL4N0/lagrangeos/main/.github-art/surfaces/component_map-light.svg">
  <img alt="Composition diagram for lagrangeos" src="https://raw.githubusercontent.com/M4G3LL4N0/lagrangeos/main/.github-art/surfaces/component_map.svg">
</picture>

#### Build and tests

<picture>
  <source media="(prefers-reduced-motion: reduce)" srcset="https://raw.githubusercontent.com/M4G3LL4N0/lagrangeos/main/.github-art/surfaces/build-reduced.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/M4G3LL4N0/lagrangeos/main/.github-art/surfaces/build-light.svg">
  <img alt="Build and tests diagram for lagrangeos" src="https://raw.githubusercontent.com/M4G3LL4N0/lagrangeos/main/.github-art/surfaces/build.svg">
</picture>

#### Workflow

<picture>
  <source media="(prefers-reduced-motion: reduce)" srcset="https://raw.githubusercontent.com/M4G3LL4N0/lagrangeos/main/.github-art/surfaces/workflow-reduced.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/M4G3LL4N0/lagrangeos/main/.github-art/surfaces/workflow-light.svg">
  <img alt="Workflow diagram for lagrangeos" src="https://raw.githubusercontent.com/M4G3LL4N0/lagrangeos/main/.github-art/surfaces/workflow.svg">
</picture>

#### Domain

<picture>
  <source media="(prefers-reduced-motion: reduce)" srcset="https://raw.githubusercontent.com/M4G3LL4N0/lagrangeos/main/.github-art/surfaces/domain-reduced.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/M4G3LL4N0/lagrangeos/main/.github-art/surfaces/domain-light.svg">
  <img alt="Domain diagram for lagrangeos" src="https://raw.githubusercontent.com/M4G3LL4N0/lagrangeos/main/.github-art/surfaces/domain.svg">
</picture>

#### Identity object

<picture>
  <source media="(prefers-reduced-motion: reduce)" srcset="https://raw.githubusercontent.com/M4G3LL4N0/lagrangeos/main/.github-art/surfaces/footer-reduced.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/M4G3LL4N0/lagrangeos/main/.github-art/surfaces/footer-light.svg">
  <img alt="Identity object diagram for lagrangeos" src="https://raw.githubusercontent.com/M4G3LL4N0/lagrangeos/main/.github-art/surfaces/footer.svg">
</picture>

<!-- TRILLIONX:presentation:end -->

<!-- TRILLIONX:evidence:begin -->

## What is measurable here

Generated by `.github-art` from the source tree at publish time.

| Signal | Value |
| --- | --- |
| HTTP routes | 15 |
| Entry points | 1 |
| Module roots | 3 |
| Test files | 0 |
| CI workflows | 0 |
| Distinctive stack | scaffold only |
| Status | PROTOTYPE |
| Evidence confidence | E3 |
| Animated surfaces | 10 |

<!-- TRILLIONX:evidence:end -->
