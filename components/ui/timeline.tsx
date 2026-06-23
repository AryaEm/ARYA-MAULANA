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

      <style jsx>{`
        .tl {
          position: relative;
          padding-left: 1.4rem;
        }

        /* vertical line */
        .tl::before {
          content: '';
          position: absolute;
          left: 3px;
          top: 8px;
          bottom: 8px;
          width: 0.5px;
          background: rgba(233, 30, 140, 0.2);
        }

        .tl__item {
          position: relative;
          padding-bottom: 1.5rem;
        }

        .tl__item:last-child {
          padding-bottom: 0;
        }

        /* dot */
        .tl__dot {
          position: absolute;
          left: -1.45rem;
          top: 5px;
          width: 8px;
          height: 8px;
          border-radius: 2px;
          border: 1.5px solid #e91e8c;
          background: #0d0d0f;
          transition: background 0.2s;
        }

        .tl__dot--current {
          background: #e91e8c;
        }

        .tl__content {}

        .tl__year {
          font-size: 10px;
          font-family: var(--font-mono);
          color: #e91e8c;
          letter-spacing: 0.1em;
          margin-bottom: 3px;
        }

        .tl__role {
          font-size: 14px;
          font-weight: 600;
          color: rgba(240, 232, 240, 0.9);
          margin-bottom: 2px;
          line-height: 1.3;
        }

        .tl__place {
          font-size: 11px;
          font-family: var(--font-mono);
          color: rgba(240, 232, 240, 0.32);
          margin-bottom: 8px;
        }

        .tl__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
        }

        .tl__tag {
          font-size: 10px;
          font-family: var(--font-mono);
          padding: 2px 8px;
          border-radius: 3px;
          background: rgba(233, 30, 140, 0.1);
          border: 0.5px solid rgba(233, 30, 140, 0.25);
          color: rgba(233, 30, 140, 0.7);
          letter-spacing: 0.04em;
        }
      `}</style>
    </div>
  )
}