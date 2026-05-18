"use client";

import { useEffect, useState } from "react";

const anchorLinks = [
  { href: "#platform", label: "Platform" },
  { href: "#use-cases", label: "Use cases" },
  { href: "#workflow", label: "Workflow" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#demo", label: "Demo" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-5 py-4 md:px-8">
        <a href="#top" className="group flex min-w-0 items-center gap-2" onClick={close}>
          <span className="relative inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
            <span className="absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_30%_30%,rgba(48,213,255,0.25),rgba(0,0,0,0)_58%)]" />
            <span className="relative h-3.5 w-3.5 rounded-full bg-gradient-to-br from-cyan-300/90 via-violet-400/70 to-yellow-200/70 shadow-[0_0_24px_rgba(48,213,255,0.35)]" />
          </span>
          <span className="truncate text-sm font-semibold tracking-wide text-zinc-50">LagrangeOS</span>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
          {anchorLinks.map((l) => (
            <a key={l.href} className="hover:text-zinc-50" href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#cta"
            className="hidden rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-50 hover:bg-white/10 md:inline-flex"
            onClick={close}
          >
            Request pilot
          </a>
          <a
            href="#demo"
            className="hidden rounded-full bg-gradient-to-r from-cyan-300/90 via-violet-400/80 to-yellow-200/80 px-4 py-2 text-sm font-semibold text-black shadow-[0_0_40px_rgba(48,213,255,0.18)] hover:brightness-110 sm:inline-flex"
            onClick={close}
          >
            Mission engine
          </a>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-zinc-100 md:hidden"
            aria-expanded={open}
            aria-controls="lagrangeos-mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden>{open ? "×" : "☰"}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="lagrangeos-mobile-nav"
          className="mx-auto flex w-full max-w-6xl flex-col gap-1 border-t border-white/10 px-5 py-3 md:hidden md:px-8"
        >
          {anchorLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2.5 text-sm text-zinc-200 hover:bg-white/5"
              onClick={close}
            >
              {l.label}
            </a>
          ))}
          <p className="px-3 pt-1 text-[11px] leading-relaxed text-zinc-400">
            Decision support only — not flight-certified without independent validation.
          </p>
        </nav>
      )}
    </header>
  );
}
