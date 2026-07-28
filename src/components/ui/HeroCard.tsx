"use client";

import { Play, ArrowUpRight } from "lucide-react";
import { TabId } from "@/types";

interface Props {
  onNavigate: (tab: TabId) => void;
}

export default function HeroCard({ onNavigate }: Props) {
  return (
    <div className="group relative flex flex-col gap-4 md:gap-5 overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)]/70 p-4 md:p-6 lg:p-7 transition-colors hover:border-[var(--color-accent)]/30">
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 md:h-56 md:w-56 rounded-full opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100"
        style={{ background: "radial-gradient(circle, var(--color-accent-dim), transparent 70%)" }}
      />

      {/* Badge */}
      <div className="flex w-fit items-center gap-1.5 rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/[0.08] px-2.5 py-0.5 md:px-3 md:py-1">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
        </span>
        <span className="font-mono text-[9px] md:text-[11px] tracking-wide text-[var(--color-accent)]">
          Positioning
        </span>
      </div>

      {/* Headline Text - Clamp scaling */}
      <p className="max-w-2xl font-display text-[clamp(1.25rem,2.5vw+0.5rem,2.75rem)] font-semibold leading-none text-[var(--color-ink)]">
        I don't just write{" "}
        <span className="text-[var(--color-ink-faint)] line-through decoration-2 decoration-[var(--color-accent)]/70">
          code
        </span>,<br />I{" "}
        <span className="text-[var(--color-accent)]">
          solve{" "}
        </span>
        problems.
      </p>

      {/* Subtitle Text */}
      <p className="text-[clamp(0.75rem,0.8vw+0.2rem,1rem)] leading-relaxed text-[var(--color-ink-dim)]/70">
        Web dev who starts with the
        <span className="font-semibold text-[var(--color-accent)]/70"> why</span>,
        not the how. I build interfaces that are
        <span className="font-semibold text-[var(--color-accent)]/70"> purposeful, fast, and felt.</span>
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-2 md:gap-3 pt-1">
        <button
          onClick={() => onNavigate("projects")}
          className="flex items-center gap-1.5 rounded-full bg-[var(--color-accent)] px-3.5 py-2 md:px-4.5 md:py-2.5 font-sans text-xs md:text-sm font-semibold text-[var(--color-bg)] transition-transform hover:scale-[1.03] active:scale-[0.98]"
        >
          <Play className="h-3 w-3 md:h-3.5 md:w-3.5" fill="currentColor" />
          See my work
        </button>
        <button
          onClick={() => onNavigate("about")}
          className="flex items-center gap-1 rounded-full border border-[var(--color-border)] px-3.5 py-2 md:px-4.5 md:py-2.5 font-sans text-xs md:text-sm text-[var(--color-ink-dim)] transition-colors hover:border-[var(--color-ink-faint)] hover:text-[var(--color-ink)]"
        >
          My story
          <ArrowUpRight className="h-3 w-3 md:h-3.5 md:w-3.5" />
        </button>
      </div>
    </div>
  );
}