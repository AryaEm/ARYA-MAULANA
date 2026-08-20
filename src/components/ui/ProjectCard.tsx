"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Code2, Globe } from "lucide-react";
import type { Project } from "@/lib/project";
import Link from "next/link";

interface ProjectCardProps {
    project: Project;
    index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="group relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/70 backdrop-blur-xl overflow-hidden shadow-xl hover:border-[var(--color-accent)]/40 transition-colors duration-300"
        >
            <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--color-border-soft)] bg-[var(--color-surface-raised)]/60">
                <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-accent)]/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-ink-faint)]/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-border)]" />
                </div>
                <div className="px-2.5 py-0.5 rounded-md bg-[var(--color-bg)] border border-[var(--color-border-soft)] text-[10px] font-mono text-[var(--color-ink-faint)] flex items-center gap-1.5">
                    <Globe className="w-3 h-3 text-[var(--color-accent)]" />
                    <span>{project.id}.app</span>
                </div>
                <div className="w-8" />
            </div>

            <div className="relative aspect-[16/10] bg-[var(--color-bg)]/80 overflow-hidden">
                {project.image ? (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 p-2 rounded-2xl"
                    />
                ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-[var(--color-surface-raised)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-accent)]">
                            <Code2 className="w-5 h-5" />
                        </div>
                        <p className="text-[11px] font-mono text-[var(--color-ink-faint)]">Preview</p>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col gap-3">
                <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-bold tracking-tight text-[var(--color-ink)] font-display">
                        {project.title}
                    </h3>
                    <span className="font-mono text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[var(--color-accent-dim)] text-[var(--color-accent)] border border-[var(--color-accent)]/20 shrink-0">
                        {project.year}
                    </span>
                </div>

                <p className="text-sm text-[var(--color-ink-dim)] leading-relaxed">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tech.map((t) => (
                        <span
                            key={t}
                            className="text-[10px] px-2.5 py-1 font-mono font-medium bg-[var(--color-surface-raised)] text-[var(--color-ink-dim)] border border-[var(--color-border-soft)] rounded-full"
                        >
                            {t}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-2.5 pt-2">
                    <Link
                        href={project.demoUrl || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-[var(--color-accent)] text-white font-semibold text-xs hover:opacity-90 transition"
                    >
                        Live Demo
                        <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>

                    {project.githubUrl && (
                        <Link
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-raised)] text-[var(--color-ink-dim)] hover:text-[var(--color-ink)] hover:border-[var(--color-accent)]/50 text-xs transition"
                        >
                            <Code2 className="w-3.5 h-3.5" /> Source
                        </Link>
                    )}
                </div>
            </div>
        </motion.div>
    );
}