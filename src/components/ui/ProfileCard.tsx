"use client";

import { Github, Linkedin, Instagram, Code2 } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/social";

const getSocialIcon = (iconName: string) => {
    const iconProps = { className: "h-3.5 w-3.5 md:h-4 md:w-4 text-[var(--color-ink-dim)] transition-colors group-hover:text-[var(--color-ink)]" };
    switch (iconName) {
        case "Github":
            return <Github {...iconProps} />;
        case "Linkedin":
            return <Linkedin {...iconProps} />;
        case "Instagram":
            return <Instagram {...iconProps} />;
        default:
            return <Code2 {...iconProps} />;
    }
};

export default function ProfileCard() {
    return (
        <div className="group/card relative flex flex-col gap-2.5 md:gap-3.5 overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/70 p-5 transition-all duration-300 hover:border-[var(--color-accent)]/30">
            {/* Background Glow */}
            <div
                className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 md:h-52 md:w-52 rounded-full opacity-0 blur-2xl transition-opacity duration-700 group-hover/card:opacity-100"
                style={{ background: "radial-gradient(circle, var(--color-accent-dim), transparent 70%)" }}
            />

            {/* Header Info */}
            <div className="flex items-center gap-4">
                <div className="flex flex-col gap-0.5 md:gap-1">
                    <h2 className="font-display text-xl md:text-2xl font-bold text-[var(--color-ink)]">
                        Arya Maulana
                    </h2>
                    <div className="flex items-center gap-1.5 opacity-80">
                        <span className="font-mono text-[0.6rem] md:text-[0.7rem] tracking-widest text-[var(--color-ink-dim)] uppercase">
                            WEB DEVELOPER
                        </span>
                    </div>
                </div>
            </div>

            {/* Garis Pemisah (Divider) */}
            <div className="h-px w-full bg-[var(--color-border)] mt-0.5 md:mt-0" />

            {/* Bagian Bawah: Ikon Sosial Media */}
            <div className="flex flex-wrap items-center gap-2 md:gap-2.5 pt-0.5 md:pt-0">
                {SOCIAL_LINKS.map((social) => (
                    <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={social.name}
                        className="group/icon flex h-8 w-8 md:h-8 md:w-8 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)]/50 transition-all hover:border-[var(--color-border-hover)] hover:bg-[var(--color-accent)]/[0.05]"
                    >
                        {getSocialIcon(social.iconName)}
                    </a>
                ))}
            </div>
        </div>
    );
}