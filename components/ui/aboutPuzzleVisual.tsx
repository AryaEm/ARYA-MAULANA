'use client'

import { useState } from 'react'

const PIECES = [
  { icon: 'ti-code',            label: 'Code'      },
  { icon: 'ti-brand-react',     label: 'React'     },
  { icon: 'ti-database',        label: 'Database'  },
  { icon: 'ti-puzzle',          label: 'Puzzle',    accent: true },
  { icon: 'ti-server',          label: 'Backend'   },
  { icon: 'ti-git-branch',      label: 'Git'       },
  { icon: 'ti-palette',         label: 'Design'    },
  { icon: 'ti-brand-typescript',label: 'TypeScript'},
  { icon: 'ti-terminal',        label: 'Terminal'  },
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

      <style jsx>{`
        .apv {
          position: relative;
          width: 100%;
          aspect-ratio: 1;
          max-width: 260px;
        }

        .apv__board {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(3, 1fr);
          gap: 7px;
          width: 100%;
          height: 100%;
        }

        .apv__piece {
          border-radius: 6px;
          border: 0.5px solid rgba(233, 30, 140, 0.18);
          background: rgba(233, 30, 140, 0.07);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          color: rgba(233, 30, 140, 0.55);
          cursor: default;
          transition: background 0.22s, border-color 0.22s, color 0.22s, transform 0.22s;
          position: relative;
          aspect-ratio: 1;
        }

        .apv__piece:hover {
          background: rgba(233, 30, 140, 0.18);
          border-color: rgba(233, 30, 140, 0.5);
          color: #e91e8c;
          transform: scale(1.06);
          z-index: 2;
        }

        .apv__piece--accent {
          background: #e91e8c;
          border-color: #e91e8c;
          color: #0d0d0f;
        }

        .apv__piece--accent:hover {
          background: #c9166f;
          border-color: #c9166f;
          color: #0d0d0f;
        }

        .apv__piece-label {
          position: absolute;
          bottom: -26px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 9px;
          font-family: var(--font-mono);
          color: rgba(233, 30, 140, 0.7);
          white-space: nowrap;
          letter-spacing: 0.06em;
          pointer-events: none;
        }

        /* Corner L-shaped accent lines */
        .apv__corner {
          position: absolute;
          width: 20px;
          height: 20px;
          pointer-events: none;
        }

        .apv__corner--tl {
          top: -8px;
          left: -8px;
          border-top: 1.5px solid rgba(233, 30, 140, 0.4);
          border-left: 1.5px solid rgba(233, 30, 140, 0.4);
          border-radius: 2px 0 0 0;
        }

        .apv__corner--br {
          bottom: -8px;
          right: -8px;
          border-bottom: 1.5px solid rgba(233, 30, 140, 0.4);
          border-right: 1.5px solid rgba(233, 30, 140, 0.4);
          border-radius: 0 0 2px 0;
        }
      `}</style>
    </div>
  )
}