"use client";

import { projects } from "@/lib/project";
import ProjectCard from "../ui/ProjectCard";

export default function ProjectSection() {
    return (
        <section className="w-full max-w-6xl mx-auto px-4 md:px-0 py-20 md:py-28">
            {/* Header */}
            <div className="relative mb-12 md:mb-16">
                <div className="flex items-center gap-2.5 mb-4">
                    <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
                    <span className="text-xs font-mono tracking-widest text-[var(--color-ink-dim)] uppercase">
                        Featured Work
                    </span>
                </div>

                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <h2 className="font-display font-black uppercase leading-[0.85] tracking-tight text-[var(--color-ink)] text-[clamp(2.75rem,9vw,5.5rem)]">
                        Projects
                    </h2>
                    <p className="max-w-xs text-sm text-[var(--color-ink-dim)] leading-relaxed md:text-right md:pb-2">
                        Here are some of the projects I&apos;ve worked on, {projects.length} builds and counting.
                    </p>
                </div>

                <div className="mt-6 h-px w-full bg-[var(--color-border-soft)]" />
            </div>

            {/* Masonry grid */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
                {projects.map((project, idx) => (
                    <div key={project.id} className="mb-5 break-inside-avoid">
                        <ProjectCard project={project} index={idx} />
                    </div>
                ))}
            </div>
        </section>
    );
}