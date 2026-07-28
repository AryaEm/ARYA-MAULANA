"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Code2, Globe } from "lucide-react";
import type { Project } from "@/lib/project";
import Link from "next/link";

interface ProjectSceneProps {
    project: Project;
    index: number;
    total: number;
}

export default function ProjectScene({ project, index, total }: ProjectSceneProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { margin: "-30% 0px -30% 0px" });

    return (
        <section
            ref={ref}
            className="w-full max-w-5xl mx-auto flex items-center justify-center py-6 px-4 md:px-8"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                animate={
                    isInView
                        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
                        : { opacity: 0.35, scale: 0.94, filter: "blur(4px)" }
                }
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 w-full items-center"
            >
                <div className="lg:col-span-5 flex flex-col justify-center text-left space-y-4 font-sans">
                    <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-semibold tracking-wider px-2.5 py-1 rounded-full bg-[var(--color-accent-dim)] text-[var(--color-accent)] border border-[var(--color-accent)]/20">
                            {String(project.year)}
                        </span>
                        <span className="font-mono text-xs text-[var(--color-ink-faint)] tracking-widest uppercase">
                            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                        </span>
                    </div>

                    <div className="flex flex-col gap-1.5 items-start ">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-ink)] font-display h-fit">
                            {project.title}
                        </h2>

                        <p className="text-sm font-medium leading-relaxed text-[var(--color-ink)]/50 h-fit leading-tight py-2 px-4 bg-zinc-700/20 rounded-lg">
                            {project.hook}
                        </p>
                    </div>

                    <p className="text-sm text-[var(--color-ink-dim)] leading-relaxed">
                        {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="pt-2">
                        <p className="text-xs font-mono uppercase tracking-widest text-[var(--color-ink-faint)] mb-2.5">
                            Technologies
                        </p>
                        <div className="flex flex-wrap gap-2 cursor-pointer">
                            {project.tech.map((t) => (
                                <span
                                    key={t}
                                    className="text-xs px-3 py-1 font-mono font-medium bg-[var(--color-surface-raised)] text-[var(--color-ink-dim)] border border-[var(--color-border-soft)] rounded-full hover:border-[var(--color-accent)]/50 hover:text-[var(--color-ink)] transition-colors"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* KANAN: Visual Window Mockup */}
                <div className="lg:col-span-7 flex justify-center items-start flex-col">
                    <div className="relative w-full group">
                        {/* Ambient Accent Glow */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-accent)]/20 to-[var(--color-accent)]/5 rounded-2xl blur-xl opacity-40 group-hover:opacity-70 transition duration-500" />

                        {/* Window Container */}
                        <div className="relative w-full aspect-[16/10] bg-[var(--color-surface)]/90 rounded-2xl border border-[var(--color-border)] overflow-hidden shadow-2xl backdrop-blur-md flex flex-col">
                            {/* Window Header */}
                            <div className="flex items-center justify-between px-4 py-3 bg-[var(--color-surface-raised)]/80 border-b border-[var(--color-border-soft)]">
                                <div className="flex items-center gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-[var(--color-accent)]/80" />
                                    <div className="w-3 h-3 rounded-full bg-[var(--color-ink-faint)]/50" />
                                    <div className="w-3 h-3 rounded-full bg-[var(--color-border)]" />
                                </div>
                                <div className="px-3 py-0.5 rounded-md bg-[var(--color-bg)] border border-[var(--color-border-soft)] text-[11px] font-mono text-[var(--color-ink-faint)] flex items-center gap-1.5">
                                    <Globe className="w-3 h-3 text-[var(--color-accent)]" />
                                    <span>{project.id}.app</span>
                                </div>
                                <div className="w-12" />
                            </div>

                            {/* Preview Body */}
                            <div className="relative flex-1 flex items-center  justify-center p-2 bg-[var(--color-bg)]/80 group-hover:scale-[1.01] transition duration-500">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover rounded-lg border border-[var(--color-border-soft)]"
                                    />
                                ) : (
                                    <div className="flex flex-col items-center justify-center space-y-2 text-center">
                                        <div className="w-12 h-12 rounded-2xl bg-[var(--color-surface-raised)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-accent)] group-hover:scale-110 transition duration-300">
                                            <Code2 className="w-6 h-6" />
                                        </div>
                                        <p className="text-xs font-mono text-[var(--color-ink-faint)] pt-1">
                                            Interactive Preview
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Action Links */}
                    <div className="pt-4 flex items-center gap-4">
                        <Link
                            href={project.demoUrl || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-[var(--color-accent)] text-white font-semibold text-sm hover:opacity-90 transition-all duration-200 group shadow-lg shadow-[var(--color-accent)]/20"
                        >
                            <span>View Live Demo</span>
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>

                        {project.githubUrl && (
                            <Link
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="py-2 px-4 rounded-xl border flex gap-2 justify-center text-xs items-center border-[var(--color-border)] bg-[var(--color-surface-raised)] text-[var(--color-ink-dim)] hover:text-[var(--color-ink)] hover:border-[var(--color-accent)]/50 transition"
                                aria-label="Source Code"
                            >
                                <Code2 className="w-4 h-4" /> Source
                            </Link>
                        )}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}