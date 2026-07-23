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

      <style jsx>{`
        .hero {
          padding-top: 20px;
          min-height: 100dvh;
        }

        .masonry {
          columns: 4;
          column-gap: 10px;
          padding: 3rem 2rem 2.5rem;
          max-width: 1300px;
          margin: 0 auto;
        }

        /* ── BASE CARD ── */
        .mcard {
          break-inside: avoid;
          margin-bottom: 10px;
          border: 0.5px solid rgba(255, 255, 255, 0.07);
          border-radius: 10px;
          transition: border-color 0.22s ease, transform 0.22s ease;
          padding: 1rem 1.2rem;
        }

        .mcard {
          -webkit-column-break-inside: avoid;
          page-break-inside: avoid;
          display: inline-block;
          width: 100%;

          /* Pure CSS Keyframe Animation with Stagger */
          opacity: 0;
          animation: mcardEntrance 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: calc(var(--i) * 0.05s);
          will-change: opacity, transform;
        }

        @keyframes mcardEntrance {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive Breakpoints */
        @media (max-width: 1280px) {
          .masonry {
            column-count: 3;
          }
        }

        @media (max-width: 900px) {
          .masonry {
            column-count: 2;
          }

          .hero {
            padding-top: 62px;
          }
        }

        @media (max-width: 600px) {
        .masonry {
          display: flex;
          flex-direction: column;
          gap: 2px;
          padding: 1.25rem;
        }

        .mcard--intro { order: 1; }
        .mcard--id { order: 2; }   
        .mcard--stack { order: 3; }
        .mcard--available { order: 4; }
        .mcard--avail { order: 5; }
        .mcard--building { order: 7; }  
        .mcard--snake { order: 20; }
        .mcard--cv { order: 21; }
        
        .mcard--traits { 
          display: none !important
        }
        .mcard--meta { 
          display: none
        } 
        .mcard--stat { 
          display: none
        }
      }

        .mcard:hover {
          border-color: rgba(233, 30, 140, 0.28);
          transform: translateY(-2px);
        }

        .mcard--avail {
          background: rgba(74, 222, 128, 0.03);
          border-color: rgba(74, 222, 128, 0.14);
        }

        /* ── LABEL ── */
        .mcard__label {
          font-size: 9px;
          font-family: var(--font-mono);
          color: rgba(233, 30, 140, 0.45);
          letter-spacing: 0.13em;
          margin-bottom: 8px;
        }

        .mcard__label--green { color: rgba(74, 222, 128, 0.45); }

        /* ── INTRO ── */
        .mcard--intro {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .mcard__badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: rgba(233, 30, 140, 0.1);
          border: 0.5px solid rgba(233, 30, 140, 0.3);
          border-radius: 3px;
          padding: 3px 9px;
          font-size: 9px;
          font-family: var(--font-mono);
          color: #e91e8c;
          letter-spacing: 0.12em;
        }

        .mcard__headline {
          font-size: clamp(22px, 2.8vw, 28px);
          font-weight: 700;
          line-height: 1.12;
          letter-spacing: -0.025em;
          color: #f5eef5;
        }

        .mcard__headline-acc { color: #e91e8c; }

        .mcard__headline-dim {
          color: rgba(240, 232, 240, 0.16);
          text-decoration: line-through;
          text-decoration-color: rgba(233, 30, 140, 0.6);
          font-weight: 300;
        }

        .mcard__sub {
          font-size: 11px;
          font-family: var(--font-mono);
          color: rgba(240, 232, 240, 0.33);
          line-height: 1.9;
        }

        .mcard__em { color: rgba(233, 30, 140, 0.7); font-style: normal; }

        .mcard__actions {
          display: flex;
          gap: 7px;
          flex-wrap: wrap;
        }

        .mcard__btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 8px 16px;
          border-radius: 5px;
          font-size: 11px;
          font-family: var(--font-mono);
          font-weight: 700;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
          border: none;
        }

        .mcard__btn--solid { background: #e91e8c; color: #0d0d0f; }
        .mcard__btn--solid:hover { background: #c9166f; }

        .mcard__btn--ghost {
          background: transparent;
          border: 0.5px solid rgba(255, 255, 255, 0.1);
          color: rgba(240, 232, 240, 0.38);
        }

        .mcard__btn--ghost:hover {
          border-color: rgba(233, 30, 140, 0.3);
          color: #f0e8f0;
        }

        /* ── SNAKE ── */
        .mcard--snake {
          padding: 0;
          border: none;
          background: transparent;
        }

        .mcard--snake:hover { transform: none; }

        /* ── TRAITS ── */
        .mcard--traits { display: flex; flex-direction: column; gap: 0; }

        .mcard__trait {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          padding: 6px 0;
          border-bottom: 0.5px solid rgba(255, 255, 255, 0.04);
        }

        .mcard__trait:last-child { border-bottom: none; }

        .mcard__trait i {
          color: #e91e8c;
          font-size: 13px;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .mcard__trait-title {
          font-size: 11px;
          font-weight: 600;
          color: rgba(240, 232, 240, 0.82);
          margin-bottom: 1px;
        }

        .mcard__trait-sub {
          font-size: 9px;
          font-family: var(--font-mono);
          color: rgba(240, 232, 240, 0.28);
          line-height: 1.5;
        }

        /* ── STAT ── */
        .mcard__stat-num {
          font-size: 32px;
          font-weight: 700;
          font-family: var(--font-mono);
          color: #e91e8c;
          line-height: 1;
        }

        .mcard__stat-label {
          font-size: 9px;
          font-family: var(--font-mono);
          color: rgba(240, 232, 240, 0.28);
          letter-spacing: 0.1em;
          margin-top: 4px;
        }

        /* ── IDENTITY ── */
        .mcard__id-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
        }

        .mcard__avatar {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          border: 1.5px solid rgba(233, 30, 140, 0.4);
          background: rgba(233, 30, 140, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 700;
          font-family: var(--font-mono);
          color: #e91e8c;
          flex-shrink: 0;
        }

        .mcard__id-name {
          font-size: 13px;
          font-weight: 600;
          color: rgba(240, 232, 240, 0.88);
        }

        .mcard__id-role {
          font-size: 9px;
          font-family: var(--font-mono);
          color: rgba(240, 232, 240, 0.3);
          margin-top: 2px;
          letter-spacing: 0.05em;
        }

        .mcard__id-div {
          height: 0.5px;
          background: rgba(255, 255, 255, 0.06);
          margin-bottom: 8px;
        }

        .mcard__id-socials { display: flex; gap: 5px; }

        .mcard__id-soc {
          width: 26px;
          height: 26px;
          border: 0.5px solid rgba(255, 255, 255, 0.08);
          border-radius: 5px;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          color: rgba(240, 232, 240, 0.28);
          text-decoration: none;
          transition: border-color 0.2s, color 0.2s;
        }

        .mcard__id-soc:hover {
          border-color: rgba(233, 30, 140, 0.35);
          color: #e91e8c;
        }

        /* ── AVAILABILITY ── */
        .mcard__avail-val {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-family: var(--font-mono);
          color: rgba(74, 222, 128, 0.85);
          margin-top: 4px;
        }

        .mcard__avail-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #4ade80;
          flex-shrink: 0;
          animation: avail-pulse 2s ease-in-out infinite;
        }

        @keyframes avail-pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.35; }
        }

        /* ── STACK ── */
        .mcard__chips { display: flex; flex-wrap: wrap; gap: 5px; }

        .mcard__chip {
          font-size: 9px;
          font-family: var(--font-mono);
          padding: 3px 8px;
          border-radius: 3px;
          background: rgba(233, 30, 140, 0.08);
          border: 0.5px solid rgba(233, 30, 140, 0.2);
          color: rgba(233, 30, 140, 0.65);
        }

        /* ── META ── */
        .mcard__meta-val {
          font-size: 12px;
          font-family: var(--font-mono);
          color: rgba(240, 232, 240, 0.55);
          margin-top: 4px;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .mcard__meta-val i { color: #e91e8c; font-size: 13px; }
        .mcard__meta-acc  { color: #e91e8c; margin-left: 3px; }

        /* ── AVAILABLE FOR ── */
        .mcard__avfor-list {
          display: flex;
          flex-direction: column;
          gap: 7px;
          margin-top: 2px;
        }

        .mcard__avfor-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-family: var(--font-mono);
          color: rgba(240, 232, 240, 0.55);
          padding: 6px 9px;
          border-radius: 5px;
          border: 0.5px solid rgba(255, 255, 255, 0.06);
          background: rgba(255, 255, 255, 0.02);
          transition: border-color 0.2s, color 0.2s;
        }

        .mcard__avfor-item:hover {
          border-color: rgba(233, 30, 140, 0.25);
          color: rgba(240, 232, 240, 0.85);
        }

        .mcard__avfor-item i {
          color: #e91e8c;
          font-size: 13px;
          flex-shrink: 0;
        }

        /* ── DOWNLOAD CV ── */
        .mcard__cv-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          padding: 9px 16px;
          width: 100%;
          background: #e91e8c;
          color: #0d0d0f;
          border-radius: 5px;
          font-size: 11px;
          font-family: var(--font-mono);
          font-weight: 700;
          letter-spacing: 0.05em;
          text-decoration: none;
          transition: background 0.2s, transform 0.15s;
          margin-top: 2px;
        }

        .mcard__cv-btn:hover {
          background: #c9166f;
          transform: translateY(-1px);
        }

        .mcard__cv-btn i { font-size: 14px; }

        .mcard__cv-sub {
          font-size: 9px;
          font-family: var(--font-mono);
          color: rgba(240, 232, 240, 0.2);
          text-align: center;
          margin-top: 7px;
          letter-spacing: 0.06em;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .masonry { columns: 3; }
        }

        @media (max-width: 720px) {
          .masonry { columns: 2; }
        }

        @media (max-width: 480px) {
          .masonry {
            columns: 1;
            padding: 1.25rem;
          }
        }

        /* ── CURRENTLY BUILDING ── */
        .mcard__building-name {
          font-size: 16px;
          font-weight: 700;
          color: #f5eef5;
          letter-spacing: -0.02em;
          margin-bottom: 3px;
        }

        .mcard__building-desc {
          font-size: 10px;
          font-family: var(--font-mono);
          color: rgba(240, 232, 240, 0.35);
          line-height: 1.6;
          margin-bottom: 12px;
        }

        .mcard__building-bar {
          width: 100%;
          height: 3px;
          background: rgba(255, 255, 255, 0.06);
          border-radius: 2px;
          overflow: hidden;
          margin-bottom: 6px;
        }

        .mcard__building-fill {
          width: 70%;
          height: 100%;
          background: linear-gradient(90deg, rgba(233,30,140,0.5), #e91e8c);
          border-radius: 2px;
        }

        .mcard__building-foot {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .mcard__building-status {
          font-size: 9px;
          font-family: var(--font-mono);
          color: rgba(233, 30, 140, 0.5);
          letter-spacing: 0.1em;
        }

        .mcard__building-pct {
          font-size: 11px;
          font-family: var(--font-mono);
          font-weight: 700;
          color: #e91e8c;
        }
      `}</style>
    </section>
  )
}