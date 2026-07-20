'use client'

import { ReactNode } from 'react'
import { useInView } from '@/hooks/useInView'

interface ChapterBlockProps {
  num: string
  title: ReactNode
  children: ReactNode
  active?: boolean
  delay?: number
}

export default function ChapterBlock({
  num,
  title,
  children,
  active = false,
  delay = 0,
}: ChapterBlockProps) {
  const { ref, inView } = useInView({ threshold: 0.12, once: true })

  return (
    <div
      ref={ref}
      className={`cb ${inView ? 'cb--visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Timeline dot + line */}
      <div className="cb__aside" aria-hidden="true">
        <div className={`cb__dot ${active ? 'cb__dot--active' : ''}`} />
      </div>

      {/* Content */}
      <div className="cb__body">
        <div className="cb__num">{num}</div>
        <h2 className="cb__title">{title}</h2>
        <div className="cb__content">{children}</div>
      </div>

      <style jsx>{`
        .cb {
          display: flex;
          gap: 1.5rem;
          padding-bottom: 3rem;
          opacity: 0;
          transform: translateY(28px);
          transition:
            opacity 0.65s cubic-bezier(0.4, 0, 0.2, 1),
            transform 0.65s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .cb:last-child {
          padding-bottom: 0;
        }

        .cb--visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Aside — dot + connecting line */
        .cb__aside {
          flex-shrink: 0;
          width: 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 4px;
        }

        .cb__dot {
          width: 12px;
          height: 12px;
          border-radius: 3px;
          border: 1.5px solid #e91e8c;
          background: #0d0d0f;
          flex-shrink: 0;
          position: relative;
          z-index: 1;
          transition: background 0.3s ease;
        }

        .cb__dot--active {
          background: #e91e8c;
          box-shadow: 0 0 10px rgba(233, 30, 140, 0.4);
        }

        /* Body */
        .cb__body {
          flex: 1;
          min-width: 0;
        }

        .cb__num {
          font-size: 9px;
          font-family: var(--font-mono);
          color: rgba(233, 30, 140, 0.45);
          letter-spacing: 0.14em;
          margin-bottom: 6px;
        }

        .cb__title {
          font-size: clamp(18px, 2.5vw, 22px);
          font-weight: 700;
          letter-spacing: -0.022em;
          color: #f5eef5;
          line-height: 1.2;
          margin-bottom: 10px;
        }

        .cb__content {}
      `}</style>
    </div>
  )
}