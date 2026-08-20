"use client";

import { useRef, useEffect, useState } from "react";
import ProjectScene from "../ui/ProjectScene";
import { projects } from "@/lib/project";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const onWheel = (e: WheelEvent) => {
            if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
                e.preventDefault();
                el.scrollLeft += e.deltaY;
            }
        };

        el.addEventListener("wheel", onWheel, { passive: false });
        return () => el.removeEventListener("wheel", onWheel);
    }, []);

    const handleScroll = () => {
        const el = containerRef.current;
        if (!el) return;
        const index = Math.round(el.scrollLeft / el.clientWidth);
        setActiveIndex(index);
    };

    const scrollToSlide = (index: number) => {
        const el = containerRef.current;
        if (!el) return;
        el.scrollTo({
            left: index * el.clientWidth,
            behavior: "smooth",
        });
    };

    return (
        <div className="relative w-full max-w-6xl mx-auto flex min-h-[85vh] mt-20 md:mt-0 flex-col justify-between rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)]/70 backdrop-blur-xl overflow-hidden shadow-2xl lg:my-10">
            {/* Header Bar */}
            <div className="px-8 flex items-center justify-between border-b border-[var(--color-border-soft)]">
                <div className="flex py-6 items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
                    <h3 className="text-xs font-mono tracking-widest text-[var(--color-ink-dim)] uppercase">
                        Featured Projects
                    </h3>
                </div>

                {/* Navigation Arrows */}
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => scrollToSlide(Math.max(0, activeIndex - 1))}
                        disabled={activeIndex === 0}
                        className="p-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-raised)] text-[var(--color-ink-dim)] hover:text-[var(--color-ink)] hover:border-[var(--color-accent)]/50 disabled:opacity-30 disabled:cursor-not-allowed transition"
                        aria-label="Previous project"
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                        onClick={() => scrollToSlide(Math.min(projects.length - 1, activeIndex + 1))}
                        disabled={activeIndex === projects.length - 1}
                        className="p-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-raised)] text-[var(--color-ink-dim)] hover:text-[var(--color-ink)] hover:border-[var(--color-accent)]/50 disabled:opacity-30 disabled:cursor-not-allowed transition"
                        aria-label="Next project"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* HORIZONTAL SCROLL AREA */}
            <div
                ref={containerRef}
                onScroll={handleScroll}
                className="flex w-full overflow-x-auto snap-x snap-mandatory scroll-smooth"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                {projects.map((project, idx) => (
                    <div
                        key={project.id}
                        className="min-w-full snap-center flex items-center justify-center px-4 md:px-12"
                    >
                        <ProjectScene project={project} index={idx} total={projects.length} />
                    </div>
                ))}
            </div>

            {/* Footer / Pagination Bar */}
            <div className="py-4 px-8 flex items-center justify-between border-t border-[var(--color-border-soft)] bg-[var(--color-surface-raised)]/40">
                {/* Pagination Dots */}
                <div className="flex items-center gap-2">
                    {projects.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => scrollToSlide(i)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === i
                                    ? "w-8 bg-[var(--color-accent)]"
                                    : "w-2 bg-[var(--color-border)] hover:bg-[var(--color-ink-faint)]"
                                }`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>

                <p className="text-xs font-mono text-[var(--color-ink-faint)]">
                    Scroll / Drag horizontally
                </p>
            </div>
        </div>
    );
}