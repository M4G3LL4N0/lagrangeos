# Autobuilder Guardrails

## Product Truth

- LagrangeOS is **decision support and validation infrastructure** for mission design and autonomy verification.
- **AI proposes. Physics constrains. Simulation tests. Humans approve.**
- Do **not** claim the software controls real spacecraft today.
- Do **not** claim flight certification. Say: **Not flight-certified without validation.**

## Public Positioning

- **Core message**: Experimental astrodynamics, accelerated by AI.
- **Investor positioning**: AI-native astrodynamics and autonomy infrastructure for the next generation of space missions.
- Emphasize physics-first constraints, uncertainty simulation, and decision intelligence outputs.
- Keep copy specific to mission design, simulation, RPO, OD intelligence, cislunar logistics, deep-space autonomy prep.

## Do Not Expose

- Internal Autobuilder process details or chain-of-thought style notes.
- Any real customer/pilot names, mission specifics, or proprietary datasets.
- Security/deployment hardening details that should remain private for future defense/enterprise work.

## Do Not Delete

- `src/**`
- `public/**` (used assets only; do not remove without verifying)
- `package.json`, `pnpm-lock.yaml`
- `next.config.ts`, `tsconfig.json`, `postcss.config.js`, `tailwind.config.ts`
- `README.md`, `RECOVERY_NOTES.md`
- `AUTOBUILDER_FOUNDATION.json`
- `.autobuilder/**`
- `.gitignore`
- `.env.example`
- `.env.local` (unless explicitly instructed otherwise)

## Do Not Drift Toward

- Generic AI SaaS messaging and feature lists
- Astrology / pseudo-science
- A space game
- A generic space blog or “space news” site
- Fake “flight certified” or “controls satellites” claims

## Safe Improvements

- Improve typography, spacing, contrast, and mobile layout
- Add credible technical visuals (diagrams) and clearer workflow explanations
- Add structured content/data files to keep copy consistent
- Add non-claim interactive sandbox visuals (client-side) for demos
- Add SEO metadata and performance improvements

## Risky Improvements

- Adding auth/DB/API without explicit need (scope creep)
- Adding heavy dependencies (3D engines, complex UI kits) without value
- Adding “autonomous spacecraft control” language, even implicitly
- Publishing operational procedures that would imply real mission commanding

## Build Rules

- **pnpm only** (no npm; do not create `package-lock.json`)
- Keep dependencies minimal; prefer plain TS/React/Tailwind
- Keep the build green: run `pnpm typecheck` and `pnpm build` after meaningful changes
- Manual deploy only: Vercel deployment must be triggered manually (no automatic deploy steps added here)
