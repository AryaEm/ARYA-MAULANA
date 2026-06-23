'use client'

import Image from 'next/image'
import { useRef } from 'react'
import type { Project } from '@/lib/data/project'

interface FeaturedProjectProps {
  project: Project
}

export default function FeaturedProject({ project }: FeaturedProjectProps) {
  const imgRef = useRef<HTMLImageElement>(null)

  const handleMouseEnter = () => {
    if (imgRef.current) imgRef.current.style.transform = 'scale(1.04)'
  }
  const handleMouseLeave = () => {
    if (imgRef.current) imgRef.current.style.transform = 'scale(1)'
  }

  return (
    <article
      className="fp"
      aria-label={`Featured project: ${project.title}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >

      <div className="fp__preview">
        <PuzzlePreview />

        <span className="fp__preview-num" aria-hidden="true">{project.num}</span>
        <span className="fp__preview-badge" aria-hidden="true">FEATURED</span>

        {project.previewUrl ? (
          <div className="fp__screenshot-wrap">
            <Image
              ref={imgRef}
              src={project.previewUrl}
              alt={`Screenshot of ${project.title}`}
              fill
              sizes="(max-width: 640px) 100vw, 55vw"
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
                transition: 'transform 0.5s ease',
              }}
              priority
            />
            <div className="fp__screenshot-overlay" aria-hidden="true" />
          </div>
        ) : (
          <span className="fp__preview-label" aria-hidden="true">
            [ project preview ]
          </span>
        )}
      </div>

      <div className="fp__info">
        <div className="fp__icon" aria-hidden="true">
          <i className={`ti ${project.icon ?? 'ti-code'}`} />
        </div>

        <h3 className="fp__title">
          {project.title.split(' ').map((word, i) =>
            i === project.title.split(' ').length - 1
              ? <span key={i} className="fp__title-accent"> {word}</span>
              : <span key={i}>{word} </span>
          )}
        </h3>

        <p className="fp__desc">{project.description}</p>

        <div className="fp__tags" aria-label="Technologies">
          {project.tags.map((tag) => (
            <span key={tag} className="fp__tag">{tag}</span>
          ))}
        </div>

        <div className="fp__links">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="fp__btn fp__btn--solid"
              aria-label={`Live demo of ${project.title}`}
            >
              <i className="ti ti-external-link" aria-hidden="true" />
              live demo
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="fp__btn fp__btn--ghost"
              aria-label={`Source code of ${project.title}`}
            >
              <i className="ti ti-brand-github" aria-hidden="true" />
              source
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

/* ─── Puzzle grid texture inside the preview pane ─── */
function PuzzlePreview() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        gridTemplateRows: 'repeat(5, 1fr)',
        opacity: 0.1,
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    >
      {Array.from({ length: 35 }).map((_, i) => (
        <div
          key={i}
          style={{ border: '0.5px solid #e91e8c' }}
        />
      ))}
    </div>
  )
}