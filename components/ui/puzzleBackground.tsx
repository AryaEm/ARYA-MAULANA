'use client'

import { useEffect, useRef } from 'react'

interface PuzzleBackgroundProps {
    cols?: number
    rows?: number
    className?: string
}

export default function PuzzleBackground({
    cols = 10,
    rows = 7,
    className = '',
}: PuzzleBackgroundProps) {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const cells = container.querySelectorAll<HTMLDivElement>('.puzzle-bg__cell')

        const lightUp = () => {
            cells.forEach((cell) => cell.classList.remove('puzzle-bg__cell--lit'))
            const count = Math.floor(cells.length * 0.08)
            const indices = new Set<number>()
            while (indices.size < count) {
                indices.add(Math.floor(Math.random() * cells.length))
            }
            indices.forEach((i) => cells[i].classList.add('puzzle-bg__cell--lit'))
        }

        lightUp()
        const interval = setInterval(lightUp, 2800)
        return () => clearInterval(interval)
    }, [])

    const total = cols * rows

    return (
        <div
            ref={containerRef}
            className={`puzzle-bg ${className}`}
            aria-hidden="true"
            style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${cols}, 1fr)`,
                gridTemplateRows: `repeat(${rows}, 1fr)`,
            }}
        >
            {Array.from({ length: total }).map((_, i) => (
                <div key={i} className="puzzle-bg__cell" />
            ))}
        </div>
    )
}