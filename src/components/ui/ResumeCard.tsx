import { FileText, Download } from "lucide-react";

export default function ResumeCard() {
  return (

    <a href="/CV-AryaMaulana.pdf"
      download
      className="group flex items-center justify-between gap-3 overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/70 p-4 transition-colors hover:border-[var(--color-accent)]/30"
    >
      <div className="flex items-center gap-2.5">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent-dim)]">
          <FileText size={14} className="text-[var(--color-accent)]" />
        </span>
        <div>
          <p className="font-sans text-xs font-medium text-[var(--color-ink)]">Resume</p>
          <p className="font-mono text-[9px] text-[var(--color-ink-faint)]">Last update 2025</p>
        </div>
      </div>

      <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-[var(--color-accent)] px-3.5 py-2 font-sans text-[11px] font-medium text-[var(--color-bg)] transition-transform group-hover:scale-[1.02]">
        <Download size={12} />
        Download
      </span>
    </a >
  );
}