'use client'

import type { Page } from '@/app/page'
import SnakeGame from '@/components/ui/snakeGame'
import { aboutData } from '@/lib/data/about'

interface HeroSectionProps {
  onNavigate: (page: Page) => void
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="hero" aria-label="Introduction">
      <div className="masonry">

        <article className="mcard mcard--pink mcard--intro" style={{ '--i': 0 } as React.CSSProperties}>
          <div className="mcard__badge" aria-label="Level 1 unlocked">
            <i className="ti ti-puzzle" aria-hidden="true" />
            LEVEL 01 / UNLOCKED
          </div>
          <h1 className="mcard__headline">
            I don&apos;t just<br />
            write <span className="mcard__headline-dim">code</span>,<br />
            I <span className="mcard__headline-acc">solve</span><br />
            problems.
          </h1>
          <p className="mcard__sub">
            Web dev who starts with the{' '}
            <em className="mcard__em">why</em>, not the how.
            I build interfaces that are{' '}
            <em className="mcard__em">purposeful, fast, and felt.</em>
          </p>
          <div className="mcard__actions">
            <button
              className="mcard__btn mcard__btn--solid"
              onClick={() => onNavigate('projects')}
            >
              <i className="ti ti-player-play" aria-hidden="true" />
              See my work
            </button>
            <button
              className="mcard__btn mcard__btn--ghost"
              onClick={() => onNavigate('about')}
            >
              My story →
            </button>
          </div>
        </article>

        <article className="mcard mcard--avail" style={{ '--i': 1 } as React.CSSProperties}>
          <div className="mcard__label mcard__label--green">// status</div>
          <div className="mcard__avail-val">
            <span className="mcard__avail-dot" aria-hidden="true" />
            open to work
          </div>
        </article>

        <article className="mcard mcard--traits" style={{ '--i': 3 } as React.CSSProperties}>
          <div className="mcard__label">// approach</div>
          {[
            { icon: 'ti-puzzle', title: 'Problem-first', sub: 'understand before building' },
            { icon: 'ti-eye', title: 'Design-aware', sub: 'pixel precision matters' },
            { icon: 'ti-rocket', title: 'Ship fast', sub: 'done beats perfect' },
          ].map((t) => (
            <div key={t.title} className="mcard__trait">
              <i className={`ti ${t.icon}`} aria-hidden="true" />
              <div>
                <div className="mcard__trait-title">{t.title}</div>
                <div className="mcard__trait-sub">{t.sub}</div>
              </div>
            </div>
          ))}
        </article>

        <article className="mcard mcard--meta" style={{ '--i': 2 } as React.CSSProperties}>
          <div className="mcard__label">// location</div>
          <div className="mcard__meta-val">
            <i className="ti ti-map-pin" aria-hidden="true" />
            Malang, Indonesia
          </div>
        </article>

        <article className="mcard mcard--stat" style={{ '--i': 4 } as React.CSSProperties}>
          <div className="mcard__label">// shipped</div>
          <div className="mcard__stat-num">3</div>
          <div className="mcard__stat-label">PROJECTS DONE</div>
        </article>

        <article className="mcard mcard--stat" style={{ '--i': 5 } as React.CSSProperties}>
          <div className="mcard__label">// solved</div>
          <div className="mcard__stat-num">∞</div>
          <div className="mcard__stat-label">PUZZLES</div>
        </article>

        <article className="mcard mcard--snake" style={{ '--i': 6 } as React.CSSProperties}>
          <SnakeGame />
        </article>

        <article className="mcard mcard--building" style={{ '--i': 7 } as React.CSSProperties}>
          <div className="mcard__label">// currently building</div>
          <div className="mcard__building-name">Margin</div>
          <div className="mcard__building-desc">Reading tracker + book club platform</div>
          <div className="mcard__building-bar" aria-label="Progress 70%">
            <div className="mcard__building-fill" />
          </div>
          <div className="mcard__building-foot">
            <span className="mcard__building-status">in progress</span>
            <span className="mcard__building-pct">70%</span>
          </div>
        </article>

        <article className="mcard mcard--meta" style={{ '--i': 8 } as React.CSSProperties}>
          <div className="mcard__label">// response time</div>
          <div className="mcard__meta-val">
            under <span className="mcard__meta-acc">24h</span>
          </div>
        </article>

        <article className="mcard mcard--id" style={{ '--i': 9 } as React.CSSProperties}>
          <div className="mcard__id-row">
            <div className="mcard__avatar" aria-hidden="true">AM</div>
            <div>
              <div className="mcard__id-name">{aboutData.name}</div>
              <div className="mcard__id-role">{aboutData.role.toUpperCase()}</div>
            </div>
          </div>
          <div className="mcard__id-div" aria-hidden="true" />
          <div className="mcard__id-socials" role="list" aria-label="Social links">
            {aboutData.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mcard__id-soc"
                aria-label={s.label}
                role="listitem"
              >
                <i className={`ti ${s.icon}`} aria-hidden="true" />
              </a>
            ))}
          </div>
        </article>

        <article className="mcard mcard--stack" style={{ '--i': 10 } as React.CSSProperties}>
          <div className="mcard__label">// current stack</div>
          <div className="mcard__chips">
            {['Next.js', 'TypeScript', 'Tailwind', 'Firebase', 'React', 'Node.js'].map((t) => (
              <span key={t} className="mcard__chip">{t}</span>
            ))}
          </div>
        </article>

        <article className="mcard mcard--available" style={{ '--i': 11 } as React.CSSProperties}>
          <div className="mcard__label">// available for</div>
          <div className="mcard__avfor-list">
            <div className="mcard__avfor-item">
              <i className="ti ti-briefcase" aria-hidden="true" />
              Freelance Project
            </div>
            <div className="mcard__avfor-item">
              <i className="ti ti-clock" aria-hidden="true" />
              Part-time
            </div>
            <div className="mcard__avfor-item">
              <i className="ti ti-world" aria-hidden="true" />
              Remote
            </div>
          </div>
        </article>

        <article className="mcard mcard--cv" style={{ '--i': 12 } as React.CSSProperties}>
          <div className="mcard__label">// resume</div>
          <a
            href="/CV-AryaMaulana.pdf"
            download
            className="mcard__cv-btn"
            aria-label="Download CV Arya Maulana"
          >
            <i className="ti ti-download" aria-hidden="true" />
            download cv
          </a>
          <p className="mcard__cv-sub">last updated 2025</p>
        </article>
      </div>
    </section>
  )
}