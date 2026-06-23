'use client'

import { useState } from 'react'

interface Piece {
    id: number
    type: 'filled' | 'accent' | 'empty'
    icon?: string
    label?: string
}

const INITIAL_PIECES: Piece[] = [
    { id: 0, type: 'filled', icon: 'ti-brand-react', label: 'React' },
    { id: 1, type: 'filled', icon: 'ti-brand-typescript', label: 'TypeScript' },
    { id: 2, type: 'accent', icon: 'ti-code', label: 'Next.js' },
    { id: 3, type: 'filled', icon: 'ti-database', label: 'Database' },
    { id: 4, type: 'empty' },
    { id: 5, type: 'filled', icon: 'ti-server', label: 'Node.js' },
    { id: 6, type: 'filled', icon: 'ti-api', label: 'REST API' },
    { id: 7, type: 'empty' },
    { id: 8, type: 'filled', icon: 'ti-palette', label: 'UI Design' },
    { id: 9, type: 'empty' },
    { id: 10, type: 'filled', icon: 'ti-git-branch', label: 'Git' },
    { id: 11, type: 'filled', icon: 'ti-terminal', label: 'CLI' },
    { id: 12, type: 'empty' },
    { id: 13, type: 'filled', icon: 'ti-cloud', label: 'Cloud' },
    { id: 14, type: 'empty' },
    { id: 15, type: 'filled', icon: 'ti-device-mobile', label: 'Mobile' },
]

const COMPLETION = Math.round(
    (INITIAL_PIECES.filter((p) => p.type !== 'empty').length / INITIAL_PIECES.length) * 100
)

export default function PuzzleBoard() {
    const [pieces, setPieces] = useState<Piece[]>(INITIAL_PIECES)
    const [hovered, setHovered] = useState<number | null>(null)

    const toggle = (id: number) => {
        setPieces((prev) =>
            prev.map((p) =>
                p.id === id
                    ? { ...p, type: p.type === 'empty' ? 'filled' : 'empty' }
                    : p
            )
        )
    }

    const filled = pieces.filter((p) => p.type !== 'empty').length
    const pct = Math.round((filled / pieces.length) * 100)

    const circumference = 2 * Math.PI * 22
    const offset = circumference - (pct / 100) * circumference

    return (
        <div className="pb">
            <div className="pb__tag">// skills_map.exe</div>

            <div className="pb__float pb__float--tl">
                stack: <span className="pb__float-val">Next.js</span>
            </div>
            <div className="pb__float pb__float--br">
                {hovered !== null && pieces[hovered].label
                    ? <><span className="pb__float-val">{pieces[hovered].label}</span></>
                    : <>status: <span className="pb__float-val">click pieces</span></>
                }
            </div>

            <div className="pb__board" role="grid" aria-label="Skill puzzle board">
                {pieces.map((piece) => (
                    <button
                        key={piece.id}
                        className={`pb__piece pb__piece--${piece.type}`}
                        onClick={() => toggle(piece.id)}
                        onMouseEnter={() => setHovered(piece.id)}
                        onMouseLeave={() => setHovered(null)}
                        aria-label={piece.label ?? 'empty slot'}
                        aria-pressed={piece.type !== 'empty'}
                        role="gridcell"
                    >
                        {piece.icon && (
                            <i className={`ti ${piece.icon}`} aria-hidden="true" />
                        )}
                    </button>
                ))}
            </div>

            <div className="pb__hint">[ click pieces to toggle ]</div>

            <div className="pb__ring" aria-label={`${pct}% skills filled`}>
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                    <circle
                        cx="26" cy="26" r="22"
                        stroke="rgba(233,30,140,0.12)"
                        strokeWidth="2"
                    />
                    <circle
                        cx="26" cy="26" r="22"
                        stroke="#e91e8c"
                        strokeWidth="2"
                        strokeDasharray={`${circumference} ${circumference}`}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                        transform="rotate(-90 26 26)"
                        style={{ transition: 'stroke-dashoffset 0.4s ease' }}
                    />
                    <text
                        x="26" y="30"
                        textAnchor="middle"
                        fill="#e91e8c"
                        fontSize="10"
                        fontFamily="'Space Mono', monospace"
                        fontWeight="700"
                    >
                        {pct}%
                    </text>
                </svg>
            </div>
                
        </div>
    )
}