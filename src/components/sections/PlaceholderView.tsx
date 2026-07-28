interface Props {
  label: string;
  index: string;
}

export default function PlaceholderView({ label, index }: Props) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)]/70 text-center">
      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-ink-faint)]">
        {index} <span className="ml-2 text-[var(--color-ink-faint)]">{label}</span>
      </span>
      <p className="mt-3 font-display text-2xl italic text-[var(--color-ink-dim)]">
        Under construction. We&apos;ll shape this view next.
      </p>
    </div>
  );
}
