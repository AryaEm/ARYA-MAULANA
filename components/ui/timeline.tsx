import type { TimelineItem } from '@/lib/data/about'

interface TimelineProps {
  items: TimelineItem[]
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="tl" role="list">
      {items.map((item, i) => (
        <div key={i} className="tl__item" role="listitem">
          <div
            className={`tl__dot ${item.current ? 'tl__dot--current' : ''}`}
            aria-hidden="true"
          />

          <div className="tl__content">
            <div className="tl__year">{item.year}</div>
            <div className="tl__role">{item.role}</div>
            <div className="tl__place">{item.place}</div>

            <div className="tl__tags" aria-label="Technologies">
              {item.tags.map((tag) => (
                <span key={tag} className="tl__tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      ))}

    </div>
  )
}