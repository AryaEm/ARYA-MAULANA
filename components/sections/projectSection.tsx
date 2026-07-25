'use client'

import { useState } from 'react'
import Image from 'next/image'
import { projects } from '@/lib/data/project'

export default function ProjectSection() {
  const [activeId, setActiveId] = useState(projects[0].id)
  const [previewOpen, setPreviewOpen] = useState(false)

  const active = projects.find((p) => p.id === activeId)!

  return (
    <section className="projects" aria-labelledby="projects-heading">
      <div className="projects__inner">

        {/* Header row */}
        <div className="projects__header">
          <div className="projects__tag" aria-hidden="true">
            <span className="projects__tag-line" />
            <span className="projects__tag-label">PROJECTS \ LEVEL 03</span>
          </div>
          <a
            href="https://github.com/AryaEm?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="projects__gh-link"
            aria-label="View all projects on GitHub"
          >
            <i className="ti ti-brand-github" aria-hidden="true" />
            view all on github
            <i className="ti ti-arrow-right" aria-hidden="true" />
          </a>
        </div>

        {/* Headline */}
        <div className="projects__headline-wrap">
          <h2 id="projects-heading" className="projects__headline">
            Things I&apos;ve <span className="projects__headline-accent">built.</span>
          </h2>
          <p className="projects__sub">
            Each one a puzzle that needed solving, here&apos;s how I approached it.
          </p>
        </div>

        {/* Tab row */}
        <div className="cs-tabs" role="tablist" aria-label="Projects">
          {projects.map((p) => (
            <button
              key={p.id}
              role="tab"
              aria-selected={activeId === p.id}
              aria-controls={`panel-${p.id}`}
              id={`tab-${p.id}`}
              className={`cs-tab ${activeId === p.id ? 'cs-tab--active' : ''}`}
              onClick={() => { setActiveId(p.id); setPreviewOpen(false) }}
            >
              {p.title}
            </button>
          ))}
        </div>

        {/* Case study panel */}
        <div
          id={`panel-${active.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${active.id}`}
          className="cs-panel"
        >
          {/* TOP: main card + meta */}
          <div className="cs-top">

            {/* Main card */}
            <div className="cs-main">
              <div className="cs-num">{active.num}</div>
              <h3 className="cs-title">{active.title}</h3>
              <p className="cs-tagline">{active.tagline}</p>

              <div className="cs-links">
                {active.liveUrl && (
                  <a
                    href={active.id === 'portfolio' ? '#' : active.liveUrl}
                    target={active.id === 'portfolio' ? undefined : '_blank'}
                    rel={active.id === 'portfolio' ? undefined : 'noopener noreferrer'}
                    className="cs-btn cs-btn--solid"
                    onClick={active.id === 'portfolio' ? (e) => e.preventDefault() : undefined}
                    aria-label={active.id === 'portfolio' ? 'You are here' : `Live demo of ${active.title}`}
                  >
                    <i className={`ti ${active.id === 'portfolio' ? 'ti-external-link' : 'ti-external-link'}`} aria-hidden="true" />
                    {active.id === 'portfolio' ? 'you\'re here' : active.id === 'margin' ? 'in progress' : 'live demo'}
                  </a>
                )}
                {active.repoUrl && (
                  <a
                    href={active.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cs-btn cs-btn--ghost"
                    aria-label={`Source code of ${active.title}`}
                  >
                    <i className="ti ti-brand-github" aria-hidden="true" />
                    source
                  </a>
                )}

                {/* Preview toggle button */}
                {active.previewUrl && (
                  <button
                    className={`cs-btn cs-btn--preview ${previewOpen ? 'cs-btn--preview-active' : ''}`}
                    onClick={() => setPreviewOpen((v) => !v)}
                    aria-label={previewOpen ? 'Hide preview' : 'Show preview'}
                  >
                    <i className={`ti ${previewOpen ? 'ti-eye-off' : 'ti-eye'}`} aria-hidden="true" />
                    {previewOpen ? 'hide preview' : 'preview'}
                  </button>
                )}
              </div>
            </div>

            {/* Meta cards */}
            <div className="cs-meta">
              <div className="cs-meta-card">
                <div className="cs-meta-label">// stack</div>
                <div className="cs-tags">
                  {active.tags.map((t) => (
                    <span key={t} className="cs-tag">{t}</span>
                  ))}
                </div>
              </div>
              <div className="cs-meta-card">
                <div className="cs-meta-label">// my role</div>
                <div className="cs-meta-val">{active.role}</div>
              </div>
              <div className="cs-meta-card">
                <div
                  className="cs-meta-val"
                  style={{
                    color: active.impactColor === 'green'
                      ? 'rgba(74,222,128,0.85)'
                      : 'rgba(233,30,140,0.8)',
                  }}
                >
                  {active.impact}
                </div>
              </div>
            </div>
          </div>

          {/* PREVIEW — expandable screenshot */}
          {active.previewUrl && previewOpen && (
            <div className="cs-preview" aria-label={`Preview of ${active.title}`}>
              <div className="cs-preview__inner">
                <Image
                  src={active.previewUrl}
                  alt={`Screenshot of ${active.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 80vw"
                  style={{ objectFit: 'cover', objectPosition: 'top center' }}
                  priority
                />
                {/* Overlay */}
                <div className="cs-preview__overlay" aria-hidden="true" />
                {/* Labels */}
                <span className="cs-preview__num" aria-hidden="true">{active.num}</span>
                <button
                  className="cs-preview__close"
                  onClick={() => setPreviewOpen(false)}
                  aria-label="Close preview"
                >
                  <i className="ti ti-x" aria-hidden="true" />
                </button>
              </div>
            </div>
          )}

          {/* BLOCKS — case study */}
          <div className="cs-blocks">
            {active.blocks.map((block) => (
              <div key={block.num} className="cs-block">
                <div className="cs-block__num">{block.num}</div>
                <div className="cs-block__title">{block.title}</div>
                <div className="cs-block__body">{block.body}</div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style jsx>{`
        /* ── TABS ── */
        .cs-tabs {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }

        .cs-tab {
          padding: 7px 14px;
          border-radius: 6px;
          border: 0.5px solid rgba(255, 255, 255, 0.08);
          background: transparent;
          font-size: 11px;
          font-family: var(--font-mono);
          color: rgba(240, 232, 240, 0.38);
          cursor: pointer;
          transition: all 0.2s;
          letter-spacing: 0.05em;
        }

        .cs-tab:hover {
          border-color: rgba(233, 30, 140, 0.3);
          color: rgba(240, 232, 240, 0.7);
        }

        .cs-tab--active {
          background: rgba(233, 30, 140, 0.1);
          border-color: rgba(233, 30, 140, 0.4);
          color: #e91e8c;
        }

        /* ── PANEL ── */
        .cs-panel {
          display: flex;
          flex-direction: column;
          gap: 10px;
          animation: panelIn 0.3s cubic-bezier(0.4, 0, 0.2, 1) both;
        }

        @keyframes panelIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── TOP ── */
        .cs-top {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 10px;
          align-items: start;
        }

        .cs-main {
          padding: 1.5rem;
          background: rgba(233, 30, 140, 0.04);
          border: 0.5px solid rgba(233, 30, 140, 0.18);
          border-radius: 10px;
        }

        .cs-num {
          font-size: 9px;
          font-family: var(--font-mono);
          color: rgba(233, 30, 140, 0.45);
          letter-spacing: 0.14em;
          margin-bottom: 6px;
        }

        .cs-title {
          font-size: clamp(20px, 2.5vw, 26px);
          font-weight: 700;
          letter-spacing: -0.025em;
          color: #f5eef5;
          margin-bottom: 6px;
          line-height: 1.15;
        }

        .cs-tagline {
          font-size: 11px;
          font-family: var(--font-mono);
          color: rgba(240, 232, 240, 0.38);
          line-height: 1.85;
          margin-bottom: 1.1rem;
        }

        .cs-links {
          display: flex;
          gap: 7px;
          flex-wrap: wrap;
          align-items: center;
        }

        .cs-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 7px 14px;
          border-radius: 5px;
          font-size: 10px;
          font-family: var(--font-mono);
          font-weight: 700;
          letter-spacing: 0.05em;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.2s;
          border: none;
        }

        .cs-btn--solid {
          background: #e91e8c;
          color: #0d0d0f;
        }

        .cs-btn--solid:hover { background: #c9166f; }

        .cs-btn--ghost {
          background: transparent;
          border: 0.5px solid rgba(255, 255, 255, 0.12);
          color: rgba(240, 232, 240, 0.42);
        }

        .cs-btn--ghost:hover {
          border-color: rgba(233, 30, 140, 0.35);
          color: #e91e8c;
        }

        .cs-btn--preview {
          background: transparent;
          border: 0.5px solid rgba(233, 30, 140, 0.25);
          color: rgba(233, 30, 140, 0.6);
        }

        .cs-btn--preview:hover {
          background: rgba(233, 30, 140, 0.08);
          color: #e91e8c;
          border-color: rgba(233, 30, 140, 0.45);
        }

        .cs-btn--preview-active {
          background: rgba(233, 30, 140, 0.1);
          color: #e91e8c;
          border-color: rgba(233, 30, 140, 0.4);
        }

        /* ── META ── */
        .cs-meta {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .cs-meta-card {
          padding: 0.9rem 1rem;
          border: 0.5px solid rgba(255, 255, 255, 0.07);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.015);
        }

        .cs-meta-label {
          font-size: 9px;
          font-family: var(--font-mono);
          color: rgba(233, 30, 140, 0.45);
          letter-spacing: 0.13em;
          margin-bottom: 6px;
        }

        .cs-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
        }

        .cs-tag {
          font-size: 9px;
          font-family: var(--font-mono);
          padding: 2px 7px;
          border-radius: 3px;
          background: rgba(233, 30, 140, 0.08);
          border: 0.5px solid rgba(233, 30, 140, 0.2);
          color: rgba(233, 30, 140, 0.65);
        }

        .cs-meta-val {
          font-size: 11px;
          font-family: var(--font-mono);
          color: rgba(240, 232, 240, 0.55);
        }

        /* ── PREVIEW ── */
        .cs-preview {
          border-radius: 10px;
          overflow: hidden;
          border: 0.5px solid rgba(233, 30, 140, 0.25);
          animation: previewIn 0.35s cubic-bezier(0.4, 0, 0.2, 1) both;
          height: 100dvh;
        }

        @keyframes previewIn {
          from { opacity: 0; transform: translateY(-8px); max-height: 0; }
          to   { opacity: 1; transform: translateY(0);    max-height: 400px; }
        }

        .cs-preview__inner {
          position: relative;
          width: 100%;
          height: 100dvh;
        }

        .cs-preview__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(13, 13, 15, 0.3) 0%,
            rgba(13, 13, 15, 0.05) 40%,
            rgba(13, 13, 15, 0.4) 100%
          );
          z-index: 2;
          pointer-events: none;
        }

        .cs-preview__num {
          position: absolute;
          top: 14px;
          left: 16px;
          font-size: 10px;
          font-family: var(--font-mono);
          color: rgba(233, 30, 140, 0.7);
          letter-spacing: 0.12em;
          z-index: 3;
        }

        .cs-preview__close {
          position: absolute;
          top: 10px;
          right: 12px;
          z-index: 4;
          width: 28px;
          height: 28px;
          border-radius: 5px;
          background: rgba(13, 13, 15, 0.8);
          border: 0.5px solid rgba(233, 30, 140, 0.3);
          color: rgba(233, 30, 140, 0.7);
          font-size: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
          backdrop-filter: blur(4px);
        }

        .cs-preview__close:hover {
          background: rgba(233, 30, 140, 0.15);
          color: #e91e8c;
        }

        /* ── BLOCKS ── */
        .cs-blocks {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 8px;
        }

        .cs-block {
          padding: 1rem 1.1rem;
          border: 0.5px solid rgba(255, 255, 255, 0.07);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.015);
          transition: border-color 0.2s;
        }

        .cs-block:hover {
          border-color: rgba(233, 30, 140, 0.22);
        }

        .cs-block__num {
          font-size: 9px;
          font-family: var(--font-mono);
          color: rgba(233, 30, 140, 0.35);
          letter-spacing: 0.12em;
          margin-bottom: 5px;
        }

        .cs-block__title {
          font-size: 13px;
          font-weight: 600;
          color: rgba(240, 232, 240, 0.85);
          margin-bottom: 7px;
          letter-spacing: -0.01em;
          line-height: 1.3;
        }

        .cs-block__body {
          font-size: 10px;
          font-family: var(--font-mono);
          color: rgba(240, 232, 240, 0.35);
          line-height: 1.8;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 768px) {
          .cs-top {
            grid-template-columns: 1fr;
          }

          .cs-blocks {
            grid-template-columns: 1fr;
          }

          .cs-preview__inner {
            height: 200px;
          }
        }

        @media (max-width: 540px) {
          .cs-blocks {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}