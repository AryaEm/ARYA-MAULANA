"use client";

import { useEffect, useState } from "react";
import { Clock, CheckCircle2 } from "lucide-react";

export default function StatusCard() {
    const [time, setTime] = useState<string | null>(null);

    useEffect(() => {
        const update = () =>
            setTime(
                new Intl.DateTimeFormat("en-GB", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                }).format(new Date())
            );
        update();
        const id = setInterval(update, 1000 * 15);
        return () => clearInterval(id);
    }, []);

    return (
        <div className="flex flex-col gap-3 overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/70 p-5 transition-colors hover:border-[var(--color-accent)]/30">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    <span className="font-sans text-xs text-[var(--color-ink)]">Available for work</span>
                </div>

                <div className="flex items-center gap-1.5 text-right">
                    <Clock size={12} className="text-[var(--color-ink-faint)]" />
                    <span className="font-mono text-base tabular-nums text-[var(--color-ink-dim)]">
                        {time ?? "--:--"}
                        <span className="ml-1 text-[10px] text-[var(--color-ink-faint)]">WIB</span>
                    </span>
                </div>
            </div>

            <div className="flex items-center gap-1.5 border-t border-[var(--color-border-soft)] pt-2.5">
                <CheckCircle2 size={12} className="text-[var(--color-accent)]" />
                <span className="font-mono text-[10px] text-[var(--color-ink-dim)]">5 projects done</span>
            </div>
        </div>
    );
}