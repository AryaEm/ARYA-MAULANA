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
    </div>
  )
}