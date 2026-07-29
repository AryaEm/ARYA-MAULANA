'use client'

import React, { useEffect, useRef, useState } from 'react'

interface ChapterBlockProps {
    num: string
    title: React.ReactNode
    children: React.ReactNode
    active?: boolean
}

export default function ChapterBlock({
    num,
    title,
    children,
    active = false,
}: ChapterBlockProps) {
    const ref = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        // Cari scroll container terdekat (LEFT COLUMN yang overflow-y-auto)
        const scrollParent = el.closest('.scroll-container')

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(el) // muncul sekali aja, gak hilang lagi pas scroll balik
                }
            },
            {
                root: scrollParent ?? null,
                threshold: 0.15,
                rootMargin: '0px 0px -10% 0px',
            }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return (
        <div
            ref={ref}
            className={`relative pl-7 mb-12 transition-all duration-700 ease-out ${isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6'
                }`}
        >
            <div
                aria-hidden="true"
                className={`absolute -left-[4.5px] top-1.5 h-2.5 w-2.5 rounded-[2px] border-2 transition-all duration-300 ${active
                        ? 'bg-[var(--color-accent)] border-[var(--color-accent)] shadow-[0_0_10px_rgba(244,63,94,0.5)]'
                        : 'bg-zinc-900 border-[var(--color-accent)]/50'
                    }`}
            />

            <div className="font-mono text-[11px] text-zinc-500 tracking-wider mb-1 uppercase">
                {num}
            </div>

            <h3 className="font-sans font-bold text-xl text-zinc-100 mb-3 tracking-tight [&_.acc]:text-[var(--color-accent)]">
                {title}
            </h3>

            <div className="font-mono text-[13px] leading-relaxed text-zinc-400 space-y-2.5 [&_em]:not-italic [&_em]:text-[var(--color-accent)] [&_em]:font-medium">
                {children}
            </div>
        </div>
    )
}