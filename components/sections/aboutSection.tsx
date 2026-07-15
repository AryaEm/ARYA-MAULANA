'use client'

import { useState } from 'react'
import AboutPuzzleVisual from '@/components/ui/aboutPuzzleVisual'
import Timeline from '@/components/ui/timeline'
import { aboutData, experience, education } from '@/lib/data/about'

type Tab = 'experience' | 'education'

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<Tab>('experience')

  return (
    <section id="about" className="about" aria-labelledby="about-heading">
      <div className="about__inner">

        {/* Section tag */}
        <div className="about__tag" aria-hidden="true">
          <span className="about__tag-line" />
          <span className="about__tag-label">ABOUT / LEVEL 02</span>
        </div>

        <div className="about__grid">

          {/* ── LEFT COLUMN ── */}
          <div className="about__left">

            {/* Puzzle visual */}
            <div className="about__visual-wrap">
              <AboutPuzzleVisual />
            </div>

            {/* Headline */}
            <h2 id="about-heading" className="about__headline">
              The dev behind<br />
              the <span className="about__headline-pink">puzzle.</span>
            </h2>

            {/* Bio */}
            <p className="about__bio">
              {aboutData.bio.map((chunk, i) =>
                chunk.em
                  ? <span key={i} className="about__bio-em">{chunk.text}</span>
                  : <span key={i}>{chunk.text}</span>
              )}
            </p>

            {/* Trait cards */}
            <div className="about__traits" role="list">
              {aboutData.traits.map((trait) => (
                <div key={trait.title} className="about__trait" role="listitem">
                  <i className={`ti ${trait.icon} about__trait-icon`} aria-hidden="true" />
                  <div>
                    <span className="about__trait-title">{trait.title}</span>
                    <span className="about__trait-sub">{trait.sub}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="about__actions">
              <a
                href={aboutData.cvUrl}
                download
                className="about__cv-btn"
                aria-label="Download CV"
              >
                <i className="ti ti-download" aria-hidden="true" />
                download cv
              </a>

              <div className="about__socials" role="list">
                {aboutData.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="about__social-btn"
                    aria-label={s.label}
                    role="listitem"
                  >
                    <i className={`ti ${s.icon}`} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="about__right">

            <div className="about__tabs" role="tablist">
              {(['experience', 'education'] as Tab[]).map((tab) => (
                <button
                  key={tab}
                  role="tab"
                  aria-selected={activeTab === tab}
                  aria-controls={`panel-${tab}`}
                  id={`tab-${tab}`}
                  className={`about__tab ${activeTab === tab ? 'about__tab--active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div
              id="panel-experience"
              role="tabpanel"
              aria-labelledby="tab-experience"
              hidden={activeTab !== 'experience'}
            >
              <Timeline items={experience} />
            </div>

            <div
              id="panel-education"
              role="tabpanel"
              aria-labelledby="tab-education"
              hidden={activeTab !== 'education'}
            >
              <Timeline items={education} />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about {
          position: relative;
          padding: 6rem 2rem 5rem;
          border-top: 0.5px solid rgba(233, 30, 140, 0.12);
        }

        .about__inner {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        /* Section tag */
        .about__tag {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 3rem;
        }

        .about__tag-line {
          display: block;
          height: 0.5px;
          width: 32px;
          background: #e91e8c;
        }

        .about__tag-label {
          font-size: 10px;
          font-family: var(--font-mono);
          color: #e91e8c;
          letter-spacing: 0.18em;
        }

        /* Two-column grid */
        .about__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14rem;
          align-items: start;
        }

        /* ── LEFT ── */
        .about__left {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        .about__visual-wrap {
          display: flex;
          justify-content: flex-start;
        }

        .about__headline {
          font-size: clamp(28px, 3.5vw, 38px);
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.025em;
          color: #f5eef5;
        }

        .about__headline-pink {
          color: #e91e8c;
        }

        .about__bio {
          font-size: 13px;
          font-family: var(--font-mono);
          color: rgba(240, 232, 240, 0.42);
          line-height: 1.85;
          max-width: 340px;
        }

        .about__bio-em {
          color: rgba(233, 30, 140, 0.8);
        }

        /* Traits */
        .about__traits {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }

        .about__trait {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 10px 12px;
          border: 0.5px solid rgba(255, 255, 255, 0.07);
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.02);
          transition: border-color 0.2s, background 0.2s;
        }

        .about__trait:hover {
          border-color: rgba(233, 30, 140, 0.3);
          background: rgba(233, 30, 140, 0.05);
        }

        .about__trait-icon {
          font-size: 15px;
          color: #e91e8c;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .about__trait-title {
          display: block;
          font-size: 12px;
          font-weight: 600;
          color: rgba(240, 232, 240, 0.85);
          margin-bottom: 2px;
        }

        .about__trait-sub {
          display: block;
          font-size: 10px;
          font-family: var(--font-mono);
          color: rgba(240, 232, 240, 0.28);
          line-height: 1.5;
        }

        /* Actions row */
        .about__actions {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .about__cv-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 8px 16px;
          border: 0.5px solid rgba(233, 30, 140, 0.35);
          border-radius: 5px;
          background: transparent;
          color: #e91e8c;
          font-size: 12px;
          font-family: var(--font-mono);
          letter-spacing: 0.05em;
          text-decoration: none;
          transition: background 0.2s;
        }

        .about__cv-btn:hover {
          background: rgba(233, 30, 140, 0.1);
        }

        .about__cv-btn i {
          font-size: 14px;
        }

        .about__socials {
          display: flex;
          gap: 6px;
        }

        .about__social-btn {
          width: 34px;
          height: 34px;
          border: 0.5px solid rgba(255, 255, 255, 0.08);
          border-radius: 6px;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(240, 232, 240, 0.32);
          font-size: 16px;
          text-decoration: none;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
        }

        .about__social-btn:hover {
          border-color: rgba(233, 30, 140, 0.35);
          background: rgba(233, 30, 140, 0.08);
          color: #e91e8c;
        }

        /* ── RIGHT ── */
        .about__right {
          padding-top: 0.25rem;
        }

        /* Tabs */
        .about__tabs {
          display: flex;
          gap: 0;
          margin-bottom: 1.75rem;
          border-bottom: 0.5px solid rgba(255, 255, 255, 0.07);
        }

        .about__tab {
          padding: 8px 16px;
          font-size: 11px;
          font-family: var(--font-mono);
          color: rgba(240, 232, 240, 0.32);
          background: transparent;
          border: none;
          border-bottom: 2px solid transparent;
          margin-bottom: -0.5px;
          letter-spacing: 0.08em;
          cursor: pointer;
          transition: color 0.2s, border-color 0.2s;
        }

        .about__tab:hover {
          color: rgba(240, 232, 240, 0.6);
        }

        .about__tab--active {
          color: #e91e8c;
          border-bottom-color: #e91e8c;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .about {
            padding: 4rem 1.25rem;
          }

          .about__grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }

          .about__visual-wrap {
            justify-content: center;
          }

          .about__headline {
            text-align: center;
          }

          .about__bio {
            max-width: 100%;
            text-align: center;
          }

          .about__actions {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  )
}