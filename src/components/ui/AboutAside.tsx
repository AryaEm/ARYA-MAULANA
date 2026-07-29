'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
    MapPin,
    Briefcase,
    FolderGit2,
    CircleDot,
    Puzzle,
    Terminal,
    Palette,
    Rocket,
    Github,
    Linkedin,
    Instagram,
    Download,
    ArrowUpRight,
} from 'lucide-react'
import { aboutData } from '@/lib/about'

// Map string icon key -> lucide component
const TRAIT_ICONS: Record<string, React.ElementType> = {
    'ti-puzzle': Puzzle,
    'ti-terminal': Terminal,
    'ti-palette': Palette,
    'ti-rocket': Rocket,
}

const SOCIAL_ICONS: Record<string, React.ElementType> = {
    'ti-brand-github': Github,
    'ti-brand-linkedin': Linkedin,
    'ti-brand-instagram': Instagram,
}

export default function AboutAside() {
    return (
        <motion.aside
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-full lg:sticky lg:top-24"
        >
            <div className="relative rounded-2xl bg-zinc-900/90 border border-zinc-800/80 backdrop-blur-md overflow-hidden">
                {/* Top accent glow */}
                <div
                    aria-hidden="true"
                    className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-[var(--color-accent)]/10 blur-3xl pointer-events-none"
                />

                <div className="relative p-5 space-y-5">
                    {/* Profile Header */}
                    <div className="flex items-center gap-3.5">
                        <div className="relative shrink-0">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-accent)]/25 to-[var(--color-accent)]/5 border border-[var(--color-accent)]/30 text-[var(--color-accent)] font-mono font-bold text-sm flex items-center justify-center">
                                {aboutData.initials}
                            </div>
                            {/* status dot */}
                            <span className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400 border-2 border-zinc-900" />
                            </span>
                        </div>
                        <div className="min-w-0">
                            <div className="font-sans font-bold text-sm text-zinc-100 truncate">
                                {aboutData.name}
                            </div>
                            <div className="font-mono text-[10px] text-zinc-500 tracking-wider uppercase mt-0.5">
                                {aboutData.role}
                            </div>
                        </div>
                    </div>

                    <div className="h-[1px] bg-zinc-800/80" aria-hidden="true" />

                    {/* Quick Facts with icons */}
                    <div className="space-y-2.5">
                        <div className="flex items-center gap-2.5">
                            <MapPin className="w-3.5 h-3.5 text-zinc-500 shrink-0" strokeWidth={2} />
                            <span className="font-mono text-[11px] text-zinc-300">{aboutData.location}</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                            <Briefcase className="w-3.5 h-3.5 text-zinc-500 shrink-0" strokeWidth={2} />
                            <span className="font-mono text-[11px] text-zinc-300">Web Developer · UI/UX</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                            <FolderGit2 className="w-3.5 h-3.5 text-zinc-500 shrink-0" strokeWidth={2} />
                            <span className="font-mono text-[11px] text-zinc-300">6 projects shipped</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                            <CircleDot className="w-3.5 h-3.5 text-emerald-400 shrink-0" strokeWidth={2} />
                            <span className="font-mono text-[11px] text-emerald-400">open to work</span>
                        </div>
                    </div>

                    <div className="h-[1px] bg-zinc-800/80" aria-hidden="true" />

                    {/* Socials */}
                    <div className="flex gap-2">
                        {aboutData.socials.map((s) => {
                            const Icon = SOCIAL_ICONS[s.icon] ?? ArrowUpRight
                            return (
                                <Link
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={s.label}
                                    className="flex-1 h-9 flex items-center justify-center rounded-lg bg-zinc-800/40 border border-zinc-700/50 text-zinc-400 hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/40 hover:bg-zinc-800 transition-colors"
                                >
                                    <Icon className="w-4 h-4" strokeWidth={2} />
                                </Link>
                            )
                        })}
                    </div>

                    {/* CV Button */}
                    <Link
                        href={aboutData.cvUrl}
                        download
                        className="group w-full py-2.5 px-3 rounded-lg bg-[var(--color-accent)] hover:opacity-90 active:scale-[0.98] text-white font-mono text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-md shadow-rose-600/20"
                    >
                        <Download className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" strokeWidth={2} />
                        <span>download cv</span>
                    </Link>
                </div>
            </div>
        </motion.aside>
    )
}