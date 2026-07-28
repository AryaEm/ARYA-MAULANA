import { FolderGit2 } from "lucide-react";
import { featuredCaseStudy } from "@/lib/project";

interface Props {
  onOpen?: () => void;
}

export default function CaseStudyHighlightCard({ onOpen }: Props) {
  const cs = featuredCaseStudy;
  return (
    <button
      onClick={onOpen}
      className="flex w-full flex-col gap-3.5 overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/70 p-5 text-left transition-colors hover:border-[var(--color-accent)]/30"
    >
      <div className="flex items-start justify-between">
        <span className="flex items-center gap-1.5 font-mono text-[10px] text-[var(--color-ink-faint)]">
          <FolderGit2 size={12} className="text-[var(--color-accent)]/70" />
          case_study.tsx
        </span>
        <span className="font-mono text-[10px] text-[var(--color-ink-faint)]">{cs.year}</span>
      </div>

      <div>
        <h3 className="font-display text-lg italic text-[var(--color-ink)]">{cs.title}</h3>
        <p className="mt-1.5 text-xs leading-relaxed text-[var(--color-ink-dim)]">{cs.summary}</p>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {cs.stack.map((s) => (
          <span
            key={s}
            className="rounded-full border border-[var(--color-accent)]/20 bg-[var(--color-accent-dim)] px-2 py-0.5 font-mono text-[9px] text-[var(--color-accent)]"
          >
            {s}
          </span>
        ))}
      </div>
    </button>
  );
}