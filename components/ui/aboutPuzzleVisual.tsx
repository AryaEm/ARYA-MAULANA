'use client'

import { useState } from 'react'

const PIECES = [
  { icon: 'ti-code', label: 'Code' },
  { icon: 'ti-brand-react', label: 'React' },
  { icon: 'ti-database', label: 'Database' },
  { icon: 'ti-puzzle', label: 'Puzzle', accent: true },
  { icon: 'ti-server', label: 'Backend' },
  { icon: 'ti-git-branch', label: 'Git' },
  { icon: 'ti-palette', label: 'Design' },
  { icon: 'ti-brand-typescript', label: 'TypeScript' },
  { icon: 'ti-terminal', label: 'Terminal' },
]

export default function AboutPuzzleVisual() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div className="apv" aria-hidden="true">
      <div className="apv__board">
        {PIECES.map((piece, i) => (
          <div
            key={i}
            className={`apv__piece ${piece.accent ? 'apv__piece--accent' : 'apv__piece--filled'}`}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <i className={`ti ${piece.icon}`} />
            {hovered === i && (
              <span className="apv__piece-label">{piece.label}</span>
            )}
          </div>
        ))}
      </div>

      {/* Corner decoration lines */}
      <div className="apv__corner apv__corner--tl" aria-hidden="true" />
      <div className="apv__corner apv__corner--br" aria-hidden="true" />

    </div>
  )
}