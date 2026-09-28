import type { ReactNode } from "react";
import { PremiumHeroVisual } from "@/components/premium/PremiumHeroVisual";
import { ProductHonestyNote } from "@/components/ProductHonestyNote";
import { MarketingGraphicsStack } from "@/components/MarketingGraphicsStack";
import { ProcessFlowSection } from "@/components/ProcessFlowSection";
import { HeroProductPanel } from "@/components/HeroProductPanel";
import { SiteHeader } from "@/components/site-header";
import { KissHero } from "@/components/KissHero";
import { ExpertCouncilUpgrade } from "@/components/ExpertCouncilUpgrade";
import { FounderControlStrip } from "@/components/FounderControlStrip";
import { ExpansionOSPanel } from "@/components/ExpansionOSPanel";
import { TrillionXV3ReadinessStrip } from "@/components/TrillionXV3ReadinessStrip";
import { DistinctVentureHero } from "@/components/visual/DistinctVentureHero";
import { DomainCommandGraphic } from "@/components/visual/DomainCommandGraphic";
import { HeroGraphicPanel } from "@/components/visual/HeroGraphicPanel";

export default function Home() {
  return (
    <div className="venture-shell venture-shell--arctic-data px-4 sm:px-6 lg:px-8">
      <DistinctVentureHero
        ventureId="lagrangeos"
        displayName="Lagrangeos"
        worldId="arctic-data"
        heroLayout="observatory"
        headline={undefined}
        subheadline={undefined}
        
        graphic={<HeroGraphicPanel worldId="arctic-data" labels={["Lagrangeos Signal","User Wedge","Launch Plan"]} />}
      />
      <DomainCommandGraphic ventureId="lagrangeos" worldId="arctic-data" labels={["Lagrangeos Signal","User Wedge","Launch Plan","Approval Gate","Build Status","Next Action"]} />
      <FounderControlStrip />
      <TrillionXV3ReadinessStrip buildStatus="PASS" />
      <ExpertCouncilUpgrade />
      <ExpansionOSPanel />

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-[520px] w-[880px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(48,213,255,0.18),rgba(0,0,0,0)_60%)] blur-2xl" />
        <div className="absolute top-[20vh] -left-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.16),rgba(0,0,0,0)_62%)] blur-2xl" />
        <div className="absolute bottom-[-240px] right-[-180px] h-[620px] w-[780px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,213,74,0.12),rgba(0,0,0,0)_62%)] blur-2xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.08),rgba(0,0,0,0)_40%),radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.06),rgba(0,0,0,0)_46%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0.55)_55%,rgba(0,0,0,0.88)_100%)]" />
      </div>

      <SiteHeader />

      <main id="top" className="relative z-10 flex-1">
<section className="mx-auto w-full max-w-6xl px-5 pt-16 pb-10 md:px-8 md:pt-24 px-4 sm:px-6 lg:px-8" data-reveal>
          <div data-stagger className="grid items-start gap-10 md:grid-cols-[1.15fr_0.85fr] md:gap-12">
            <div>
              <div data-stagger className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(48,213,255,0.45)]" />
                AI-native astrodynamics and autonomy infrastructure
              </div>

              <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-zinc-50 md:text-6xl">
                Experimental astrodynamics, accelerated by AI.
              </h1>
              <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-zinc-300 md:text-lg md:leading-8">
                AI-native mission design, simulation, and autonomy validation for
                the next generation of orbital operations.
              </p>

              <div data-stagger className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#cta"
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-zinc-100"
                >
                  Request a pilot
                </a>
                <a
                  href="#platform"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-zinc-50 hover:bg-white/10"
                >
                  Explore platform
                </a>
              </div>

              <div data-stagger className="mt-7 grid gap-3 text-sm text-zinc-300 md:grid-cols-2">
                <div className="motion-card motion-hover-lift rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs uppercase tracking-wider text-zinc-400">
                    Physics-first AI
                  </div>
                  <div className="mt-1 text-zinc-200">
                    Trajectory generation, maneuver optimization, and orbit
                    determination intelligence.
                  </div>
                </div>
                <div className="motion-card motion-hover-lift rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs uppercase tracking-wider text-zinc-400">
                    Decision intelligence
                  </div>
                  <div className="mt-1 text-zinc-200">
                    Human-approved rankings across \(\Delta v\), time,
                    robustness, safety, and recoverability.
                  </div>
                </div>
              </div>

              <p className="mt-4 text-xs leading-6 text-zinc-400">
                LagrangeOS is decision support and validation infrastructure.
                Not flight-certified without validation.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_0_60px_rgba(0,0,0,0.35)]">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-zinc-100">
                  Mission sandbox (visual)
                </div>
                <div className="rounded-full border border-white/10 bg-black/20 px-2 py-1 text-[11px] text-zinc-300">
                  demo-ready UI
                </div>
              </div>

              <div className="motion-card motion-hover-lift mt-4 rounded-2xl border border-white/10 bg-black/30 p-4">
                <OrbitalDiagram />
              </div>

              <div className="mt-4 grid gap-3">
                <div className="motion-card motion-hover-lift flex items-start justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-zinc-400">
                      Candidate transfers
                    </div>
                    <div className="mt-1 text-sm text-zinc-200">
                      Lambert + low-thrust envelopes with constraints.
                    </div>
                  </div>
                  <span className="mt-1 inline-flex rounded-full bg-cyan-300/10 px-2 py-1 text-xs text-cyan-200">
                    ranked
                  </span>
                </div>
                <div className="motion-card motion-hover-lift flex items-start justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-zinc-400">
                      Uncertainty simulation
                    </div>
                    <div className="mt-1 text-sm text-zinc-200">
                      Monte Carlo dispersions + observability checks.
                    </div>
                  </div>
                  <span className="mt-1 inline-flex rounded-full bg-violet-400/10 px-2 py-1 text-xs text-violet-200">
                    stress-test
                  </span>
                </div>
                <div className="motion-card motion-hover-lift flex items-start justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-zinc-400">
                      Autonomy validation
                    </div>
                    <div className="mt-1 text-sm text-zinc-200">
                      Logic checks: safety, recovery, and contingencies.
                    </div>
                  </div>
                  <span className="mt-1 inline-flex rounded-full bg-yellow-200/10 px-2 py-1 text-xs text-yellow-100">
                    verify
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 py-6 md:px-8 px-4 sm:px-6 lg:px-8" data-reveal>
          <div className="grid gap-3 md:grid-cols-4">
            <Stat
              label="Trajectory candidates"
              value="families"
              detail="Design target: constraint-bounded transfer sets — not a published throughput metric"
            />
            <Stat
              label="Trade study time"
              value="shorter loops"
              detail="Goal: ranked maneuvers + uncertainty tests in one sitting, not a claimed SLA"
            />
            <Stat
              label="Outputs"
              value="decision intel"
              detail="\(\Delta v\), time, robustness, observability, safety"
            />
            <Stat
              label="Scope"
              value="LEO → cislunar"
              detail="rendezvous, logistics, deep-space autonomy prep"
            />
          </div>
        </section>

        <section
          id="problem"
          className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 px-4 sm:px-6 lg:px-8"
         data-reveal>
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 md:text-3xl">
                The problem: mission analysis is slow, bespoke, and fragile.
              </h2>
              <p className="mt-4 text-sm leading-7 text-zinc-300 md:text-base">
                Astrodynamics workflows are still built from scattered scripts,
                brittle pipelines, and specialist time. Trade studies take too
                long, uncertainty is hard to quantify, and autonomy logic is
                difficult to validate before a mission becomes irreversible.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-zinc-300">
                <li className="flex gap-3">
                  <Dot /> Fragmented trajectory design and maneuver planning
                </li>
                <li className="flex gap-3">
                  <Dot /> Unclear robustness under dispersions and measurement
                  error
                </li>
                <li className="flex gap-3">
                  <Dot /> Autonomy logic lacks repeatable validation harnesses
                </li>
                <li className="flex gap-3">
                  <Dot /> Outputs don’t translate to decision-ready rankings
                </li>
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-xs uppercase tracking-wider text-zinc-400">
                What teams end up doing
              </div>
              <div className="mt-4 space-y-4">
                <CardLine
                  title="Custom scripts"
                  body="One-off solvers and plotting pipelines that drift from reality."
                />
                <CardLine
                  title="Manual trade studies"
                  body="Endless parameter sweeps with inconsistent assumptions."
                />
                <CardLine
                  title="Late validation"
                  body="Autonomy and safety checks happen too late to iterate."
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 pb-4 md:px-8 px-4 sm:px-6 lg:px-8" data-reveal>
          <div className="rounded-3xl border border-white/10 bg-[linear-gradient(135deg,rgba(48,213,255,0.10),rgba(139,92,246,0.08),rgba(255,213,74,0.06))] p-6 md:p-8">
            <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-center">
              <div>
                <div className="text-xs uppercase tracking-wider text-zinc-300">
                  The solution
                </div>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-50 md:text-3xl">
                  A physics-first AI mission engine for decision intelligence.
                </h2>
                <p className="mt-4 text-sm leading-7 text-zinc-200/90 md:text-base">
                  LagrangeOS helps teams define constraints, generate candidate
                  trajectories, simulate uncertainty, validate autonomy logic,
                  and rank maneuver strategies with traceable reasoning.
                </p>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                <Mini
                  title="Trajectory generation"
                  body="Transfers, burns, and windows under constraints."
                />
                <Mini
                  title="Maneuver optimization"
                  body="Rank \(\Delta v\), time, risk, and controllability."
                />
                <Mini
                  title="Orbit determination intelligence"
                  body="Observability + sensor fusion readiness checks."
                />
                <Mini
                  title="Simulation under uncertainty"
                  body="Dispersions, measurement noise, and contingency paths."
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="platform"
          className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 px-4 sm:px-6 lg:px-8"
         data-reveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="text-xs uppercase tracking-wider text-zinc-400">
                Platform features
              </div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-50 md:text-3xl">
                Modules that grow with your mission profile.
              </h2>
            </div>
            <div className="hidden text-sm text-zinc-300 md:block">
              Minimal surface area today. Durable foundation for later.
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Feature
              title="AI mission reasoning"
              body="Constraint-aware suggestions with physics-backed traces."
              tag="human-approved"
            />
            <Feature
              title="Rendezvous & proximity operations"
              body="Approach corridors, safety constraints, and maneuver sequencing."
              tag="RPO"
            />
            <Feature
              title="Autonomy validation"
              body="Stress-test logic against dispersions, faults, and timing uncertainty."
              tag="validate"
            />
            <Feature
              title="Mission memory"
              body="A structured record of assumptions, decisions, and scenario outcomes."
              tag="future"
            />
            <Feature
              title="Cislunar planning"
              body="Transfers, staging, and logistics decision intelligence."
              tag="future"
            />
            <Feature
              title="Small-body navigation"
              body="Uncertainty-driven planning for asteroid/comet operations."
              tag="future"
            />
            <Feature
              title="Uncertainty simulation"
              body="Monte Carlo runs, dispersion envelopes, and robustness scoring."
              tag="core"
            />
            <Feature
              title="Orbit determination module"
              body="Sensor fusion readiness and observability-informed maneuvers."
              tag="core"
            />
            <Feature
              title="Secure enterprise deployment"
              body="Hardened deployments for defense/enterprise environments (later)."
              tag="later"
            />
          </div>
        </section>

        <section
          id="use-cases"
          className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 px-4 sm:px-6 lg:px-8"
         data-reveal>
          <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-start">
            <div>
              <div className="text-xs uppercase tracking-wider text-zinc-400">
                Use cases
              </div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-50 md:text-3xl">
                Built for the teams pushing the frontier.
              </h2>
              <p className="mt-4 text-sm leading-7 text-zinc-300 md:text-base">
                Commercial operators, in-space servicing teams, cislunar
                logistics, deep-space mission teams, aerospace labs, universities,
                and defense contractors need faster iteration with credible,
                physics-grounded outputs.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <Pill> Cislunar transfers and logistics</Pill>
              <Pill>In-space servicing and docking</Pill>
              <Pill>Small-body asteroid and comet operations</Pill>
              <Pill>Formation flying</Pill>
              <Pill>Orbit determination and sensor fusion</Pill>
              <Pill>Deep-space autonomy and contingency planning</Pill>
              <Pill>Defense and national security space operations</Pill>
              <Pill>University and lab research workflows</Pill>
            </div>
          </div>
        </section>

        <section
          id="workflow"
          className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 px-4 sm:px-6 lg:px-8"
         data-reveal>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
            <div className="grid gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-start">
              <div>
                <div className="text-xs uppercase tracking-wider text-zinc-400">
                  Mission engine workflow
                </div>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-50 md:text-3xl">
                  From constraints → candidates → decision intelligence.
                </h2>
                <p className="mt-4 text-sm leading-7 text-zinc-300 md:text-base">
                  LagrangeOS is designed to be a repeatable decision engine: you
                  define constraints, it proposes candidates, physics constrains
                  them, simulations test robustness, and humans approve the
                  chosen strategy.
                </p>
              </div>

              <div className="grid gap-4">
                <Step
                  n="01"
                  title="Define constraints"
                  body="Orbits, timelines, safety corridors, thrust limits, sensing, comms."
                />
                <Step
                  n="02"
                  title="Generate candidates"
                  body="Trajectory families, maneuver sequences, windows, and contingencies."
                />
                <Step
                  n="03"
                  title="Simulate uncertainty"
                  body="Dispersions, measurement noise, control errors, and failure modes."
                />
                <Step
                  n="04"
                  title="Rank and export"
                  body="Decision intelligence with traceable scoring and assumptions."
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="demo"
          className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 px-4 sm:px-6 lg:px-8"
         data-reveal>
          <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-start">
            <div className="rounded-3xl border border-white/10 bg-black/25 p-6">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-zinc-100">
                  Product demo (concept)
                </div>
                <div className="text-[11px] text-zinc-400">
                  sample ranking · not flight control
                </div>
              </div>
              <div className="motion-card motion-hover-lift mt-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-xs uppercase tracking-wider text-zinc-400">
                  Output: maneuver strategy ranking
                </div>
                <div className="mt-4 space-y-3">
                  <RankingRow
                    name="Strategy A — robust Lambert transfer"
                    score="0.86"
                    meta="low risk • good observability • moderate Δv"
                  />
                  <RankingRow
                    name="Strategy B — aggressive time-optimal"
                    score="0.73"
                    meta="fast • higher sensitivity • tighter sensing"
                  />
                  <RankingRow
                    name="Strategy C — contingency-heavy"
                    score="0.79"
                    meta="recoverable • more burns • higher operations burden"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="text-xs uppercase tracking-wider text-zinc-400">
                Technical credibility
              </div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-50 md:text-3xl">
                Decision support, validation infrastructure — not spacecraft
                control.
              </h2>
              <p className="mt-4 text-sm leading-7 text-zinc-300 md:text-base">
                LagrangeOS is built for mission design and autonomy validation:
                simulation-driven evidence and traceable reasoning so teams can
                approve decisions with confidence.
              </p>

              <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-sm font-semibold text-zinc-100">
                  AI proposes. Physics constrains. Simulation tests. Humans
                  approve.
                </div>
                <p className="mt-3 text-sm leading-7 text-zinc-300">
                  We do not claim to control real spacecraft today. Outputs are
                  designed for mission teams to validate and approve — and must
                  be independently verified before operational use.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 px-4 sm:px-6 lg:px-8" data-reveal>
          <div className="grid gap-10 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
              <div className="text-xs uppercase tracking-wider text-zinc-400">
                Buyers
              </div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-50 md:text-3xl">
                Built for teams shipping missions, not slide decks.
              </h2>
              <ul className="mt-6 space-y-3 text-sm text-zinc-300">
                <li className="flex gap-3">
                  <Dot /> Commercial operators optimizing station-keeping and
                  maneuvers
                </li>
                <li className="flex gap-3">
                  <Dot /> In-space servicing teams designing safe RPO sequences
                </li>
                <li className="flex gap-3">
                  <Dot /> Cislunar logistics planning for transfers and staging
                </li>
                <li className="flex gap-3">
                  <Dot /> Labs and universities building repeatable benchmarks
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
              <div className="text-xs uppercase tracking-wider text-zinc-400">
                Business model
              </div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-50 md:text-3xl">
                Mission engine platform, delivered as software infrastructure.
              </h2>
              <div className="mt-6 space-y-4 text-sm text-zinc-300">
                <CardLine
                  title="Pilot engagements"
                  body="Focused mission scenario + deliverable decision intelligence outputs."
                />
                <CardLine
                  title="Platform subscription"
                  body="Team access to the mission engine modules as they mature."
                />
                <CardLine
                  title="Enterprise / defense"
                  body="Secure deployment and governance (later), aligned to requirements."
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="roadmap"
          className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 px-4 sm:px-6 lg:px-8"
         data-reveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="text-xs uppercase tracking-wider text-zinc-400">
                Roadmap
              </div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-50 md:text-3xl">
                From demo-ready decision engine → full autonomy validation cloud.
              </h2>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <RoadmapCard
              title="Now (MVP)"
              bullets={[
                "Premium technical website",
                "Mission engine narrative + demo artifacts",
                "Autobuilder foundation system for durable iteration",
              ]}
            />
            <RoadmapCard
              title="Next"
              bullets={[
                "Interactive mission sandbox",
                "Trajectory ranking engine",
                "RPO planner + OD intelligence module",
              ]}
            />
            <RoadmapCard
              title="Later"
              bullets={[
                "Cislunar transfer planner",
                "Small-body navigation toolkit",
                "Secure enterprise/defense deployments",
              ]}
            />
          </div>
        </section>

        <section
          id="cta"
          className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 px-4 sm:px-6 lg:px-8"
         data-reveal>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10">
            <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 md:text-3xl">
                  Bring your mission constraints. We’ll return decision
                  intelligence.
                </h2>
                <p className="mt-4 text-sm leading-7 text-zinc-300 md:text-base">
                  If you’re designing maneuvers, validating autonomy logic, or
                  running trade studies under uncertainty, LagrangeOS is built
                  for you.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/25 p-6">
                <div className="text-sm font-semibold text-zinc-100">
                  Pilot request (email)
                </div>
                <p className="mt-2 text-sm text-zinc-300">
                  For now, contact{" "}
                  <span className="font-semibold text-zinc-100">
                    pilots@lagrangeos.ai
                  </span>{" "}
                  (placeholder).
                </p>
                <div className="mt-5 flex flex-col gap-3">
                  <a
                    href="mailto:pilots@lagrangeos.ai?subject=LagrangeOS%20pilot%20request"
                    className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-zinc-100"
                  >
                    Email pilot request
                  </a>
                  <div className="text-xs text-zinc-400">
                    Not flight-certified without validation. Decision support
                    and verification infrastructure.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6" data-reveal>
        <HeroProductPanel />
      </section>
      <ProcessFlowSection />
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <PremiumHeroVisual />
      </div>
        {/* replaced by DomainCommandGraphic */}
    
      <ProductHonestyNote status="demo" />
    </main>

      <footer className="relative z-10 border-t border-white/10 bg-black/20">
        <div className="mx-auto w-full max-w-6xl px-5 py-10 md:px-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="text-sm font-semibold text-zinc-50">
                LagrangeOS
              </div>
              <div className="mt-2 text-sm text-zinc-400">
                AI-native astrodynamics and autonomy infrastructure.
              </div>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-zinc-300">
              <a className="hover:text-zinc-50" href="#platform">
                Platform
              </a>
              <a className="hover:text-zinc-50" href="#use-cases">
                Use cases
              </a>
              <a className="hover:text-zinc-50" href="#workflow">
                Workflow
              </a>
              <a className="hover:text-zinc-50" href="#cta">
                Pilot
              </a>
            </div>
          </div>
          <div className="mt-8 text-xs text-zinc-500">
            © {new Date().getFullYear()} LagrangeOS. Decision support and
            validation infrastructure — not spacecraft control software.
          </div>
        </div>
      </footer>
    </div>
  );
}

function Dot() {
  return (
    <span className="mt-2 inline-flex h-2 w-2 shrink-0 rounded-full bg-cyan-300/70 shadow-[0_0_18px_rgba(48,213,255,0.35)]" />
  );
}

function Stat({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
      <div className="text-xs uppercase tracking-wider text-zinc-400">
        {label}
      </div>
      <div className="mt-2 text-xl font-semibold tracking-tight text-zinc-50">
        {value}
      </div>
      <div className="mt-2 text-sm text-zinc-300">{detail}</div>
    </div>
  );
}

function CardLine({ title, body }: { title: string; body: string }) {
  return (
    <div className="motion-card motion-hover-lift rounded-2xl border border-white/10 bg-black/20 p-4">
      <div className="text-sm font-semibold text-zinc-100">{title}</div>
      <div className="mt-1 text-sm leading-6 text-zinc-300">{body}</div>
    </div>
  );
}

function Mini({ title, body }: { title: string; body: string }) {
  return (
    <div className="motion-card motion-hover-lift rounded-2xl border border-white/10 bg-black/20 p-4">
      <div className="text-sm font-semibold text-zinc-100">{title}</div>
      <div className="mt-1 text-sm leading-6 text-zinc-300">{body}</div>
    </div>
  );
}

function Feature({
  title,
  body,
  tag,
}: {
  title: string;
  body: string;
  tag: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="text-sm font-semibold text-zinc-100">{title}</div>
        <span className="rounded-full border border-white/10 bg-black/25 px-2 py-1 text-[11px] text-zinc-300">
          {tag}
        </span>
      </div>
      <div className="mt-2 text-sm leading-7 text-zinc-300">{body}</div>
    </div>
  );
}

function Pill({ children }: { children: ReactNode }) {
  return (
    <div className="motion-card motion-hover-lift rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200">
      {children}
    </div>
  );
}

function Step({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-full bg-white/5 px-2 py-1 text-xs font-semibold text-zinc-200">
          {n}
        </div>
        <div>
          <div className="text-sm font-semibold text-zinc-100">{title}</div>
          <div className="mt-1 text-sm leading-7 text-zinc-300">{body}</div>
        </div>
      </div>
    </div>
  );
}

function RankingRow({
  name,
  score,
  meta,
}: {
  name: string;
  score: string;
  meta: string;
}) {
  return (
    <div className="motion-card motion-hover-lift rounded-2xl border border-white/10 bg-black/20 p-4">
      <div className="flex items-start justify-between gap-4">
        <div className="text-sm font-semibold text-zinc-100">{name}</div>
        <div className="rounded-full bg-white/5 px-2 py-1 text-xs text-zinc-200">
          {score}
        </div>
      </div>
      <div className="mt-1 text-sm text-zinc-300">{meta}</div>
    </div>
  );
}

function RoadmapCard({ title, bullets }: { title: string; bullets: string[] }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="text-sm font-semibold text-zinc-100">{title}</div>
      <ul className="mt-4 space-y-2 text-sm text-zinc-300">
        {bullets.map((b) => (
          <li key={b} className="flex gap-3">
            <Dot />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function OrbitalDiagram() {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_35%,rgba(48,213,255,0.14),rgba(0,0,0,0)_55%),radial-gradient(circle_at_70%_55%,rgba(139,92,246,0.12),rgba(0,0,0,0)_60%)]" />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="orbitA" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="rgba(48,213,255,0.85)" />
            <stop offset="1" stopColor="rgba(139,92,246,0.65)" />
          </linearGradient>
          <linearGradient id="orbitB" x1="1" y1="0" x2="0" y2="1">
            <stop stopColor="rgba(255,213,74,0.70)" />
            <stop offset="1" stopColor="rgba(48,213,255,0.60)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <circle
          cx="350"
          cy="300"
          r="18"
          fill="rgba(255,255,255,0.85)"
          filter="url(#glow)"
        />

        <ellipse
          cx="380"
          cy="300"
          rx="260"
          ry="160"
          stroke="url(#orbitA)"
          strokeWidth="2.2"
          opacity="0.9"
        />
        <ellipse
          cx="380"
          cy="300"
          rx="210"
          ry="125"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1.4"
          strokeDasharray="6 7"
        />
        <ellipse
          cx="380"
          cy="300"
          rx="300"
          ry="190"
          stroke="url(#orbitB)"
          strokeWidth="2.0"
          opacity="0.55"
        />

        <circle cx="612" cy="265" r="7" fill="rgba(48,213,255,0.9)" filter="url(#glow)" />
        <circle cx="260" cy="420" r="6" fill="rgba(139,92,246,0.85)" filter="url(#glow)" />
        <circle cx="510" cy="455" r="5" fill="rgba(255,213,74,0.8)" filter="url(#glow)" />

        <path
          d="M610 265 C560 240 510 230 470 235 C415 240 380 265 340 290"
          stroke="rgba(48,213,255,0.6)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M340 290 L350 285 L346 296 Z"
          fill="rgba(48,213,255,0.75)"
        />
      </svg>

      <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[11px] text-zinc-200">
        transfer families • constraints • dispersions
      </div>
      <div className="absolute bottom-4 right-4 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[11px] text-zinc-200">
        decision intelligence preview
      </div>
    </div>
  );
}
