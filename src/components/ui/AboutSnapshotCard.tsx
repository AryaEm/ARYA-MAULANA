"use client";

import { Code2 } from "lucide-react";

const stack = ["React", "Next.js", "TypeScript", "JavaScript", "Node.js", "Tailwind CSS", "Firebase"];

export default function AboutSnapshotCard() {
  return (
    <div className="flex flex-col gap-3 overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/70 p-5 transition-colors hover:border-[var(--color-accent)]/30">
      <div className="flex items-center gap-2">
        <span className="flex h-5 w-5 items-center justify-center rounded-lg bg-[var(--color-accent-dim)]">
          <Code2 size={11} className="text-[var(--color-accent)]" />
        </span>
        <span className="font-mono text-[10px] text-[var(--color-ink-faint)]">current stack</span>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)]/50 px-2 py-0.5 font-mono text-[9px] text-[var(--color-ink-dim)]"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}