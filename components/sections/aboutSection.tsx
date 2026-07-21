'use client'

import { useInView } from '@/hooks/useInView'
import ChapterBlock from '@/components/ui/chapterBlock'
import { aboutData } from '@/lib/data/about'

const STACK_GROUPS = [
  {
    label: 'FRONTEND',
    items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    label: 'BACKEND & DB',
    items: ['Firebase', 'Firestore', 'Node.js'],
  },
  {
    label: 'TOOLS',
    items: ['Git', 'Figma', 'VS Code'],
  },
]

const MINDSET_CARDS = [
  { icon: 'ti-code',        label: 'Clean structure'  },
  { icon: 'ti-palette',     label: 'Distinctive design' },
  { icon: 'ti-users',       label: 'Real user needs'  },
  { icon: 'ti-trending-up', label: 'Built to scale'   },
]

const PERSPECTIVE_ITEMS = {
  dev: [
    { icon: 'ti-code',    text: 'Clean, readable, scalable code'          },
    { icon: 'ti-layers',  text: 'Architecture with a direction'            },
    { icon: 'ti-refresh', text: 'Reusable components, maintainable systems'},
  ],
  user: [
    { icon: 'ti-hand-click', text: "Intuitive, no explanation needed"    },
    { icon: 'ti-sparkles',   text: 'Design that has character, not generic'},
    { icon: 'ti-heart',      text: 'Feels good to use in the real world'  },
  ],
}

/* ── Inline fade helper for sub-elements ── */
function FadeItem({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const { ref, inView } = useInView({ threshold: 0.1, once: true })
  return (
    <div
      ref={ref}
      className={`fi ${inView ? 'fi--in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
      <style jsx>{`
        .fi {
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .fi--in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  )
}

export default function AboutSection() {
  const { ref: headerRef, inView: headerIn } = useInView({ threshold: 0.2, once: true })

  return (
    <section id="about" className="about" aria-labelledby="about-heading">
      <div className="about__inner">

        {/* ── Section header ── */}
        <div
          ref={headerRef}
          className={`about__header ${headerIn ? 'about__header--in' : ''}`}
        >
          <div className="about__tag" aria-hidden="true">
            <span className="about__tag-line" />
            <span className="about__tag-label">ABOUT / LEVEL 02</span>
          </div>
        </div>

        <div className="about__layout">

          {/* ── LEFT: timeline ── */}
          <div className="about__timeline" role="list">

            {/* Timeline vertical line */}
            <div className="about__line" aria-hidden="true" />

            {/* CHAPTER 01 — Origin */}
            <ChapterBlock
              num="01 / origin"
              title={<>Started with <span className="acc">"I wonder how..."</span></>}
              active
              delay={0}
            >
              <p className="chapter-body">
                Every time I opened a website or app, I couldn&apos;t help but wonder —
                <em> "how does this even work?"</em> or{' '}
                <em>"if this was built differently, it would feel so much better."</em>
              </p>
              <p className="chapter-body" style={{ marginTop: '0.6rem' }}>
                So I started building things myself. And there&apos;s a specific kind of
                satisfaction when something you made actually works, that feeling turned
                into a habit of always asking:{' '}
                <em>"could this be an app?"</em>
              </p>
            </ChapterBlock>

            {/* CHAPTER 02 — Mindset */}
            <ChapterBlock
              num="02 / mindset"
              title={<>Not <span className="acc">"as long as it works"</span></>}
              delay={80}
            >
              <p className="chapter-body">
                Coding for me isn&apos;t just about making something run,
                it&apos;s about solving problems in a way that&apos;s{' '}
                <em>efficient, scalable, and intentional.</em>
              </p>
              <p className="chapter-body" style={{ marginTop: '0.6rem', marginBottom: '1rem' }}>
                I always think from two sides at once: as a{' '}
                <em>developer</em> who cares about clean structure and architecture,
                and as a <em>user</em> who wants things to feel simple and real.
              </p>

              {/* Mindset cards */}
              <div className="mindset-grid">
                {MINDSET_CARDS.map((c, i) => (
                  <FadeItem key={c.label} delay={i * 60}>
                    <div className="mindset-card">
                      <i className={`ti ${c.icon}`} aria-hidden="true" />
                      {c.label}
                    </div>
                  </FadeItem>
                ))}
              </div>
            </ChapterBlock>

            {/* CHAPTER 03 — Perspective */}
            <ChapterBlock
              num="03 / perspective"
              title={<>Always thinking <span className="acc">both sides.</span></>}
              delay={120}
            >
              <p className="chapter-body" style={{ marginBottom: '1rem' }}>
                Every project I build, I treat like a real product,
                not just something that works, but something with{' '}
                <em>direction and a foundation to grow from.</em>
              </p>

              <div className="duality">
                {/* Dev side */}
                <div className="duality__side duality__side--dev">
                  <div className="duality__label">// as a developer</div>
                  <div className="duality__title">Think in systems.</div>
                  {PERSPECTIVE_ITEMS.dev.map((item, i) => (
                    <FadeItem key={item.text} delay={i * 60}>
                      <div className="duality__item">
                        <i className={`ti ${item.icon}`} aria-hidden="true" />
                        {item.text}
                      </div>
                    </FadeItem>
                  ))}
                </div>

                {/* Bridge */}
                <div className="duality__bridge" aria-hidden="true">
                  <div className="duality__bridge-dot" />
                  <div className="duality__bridge-line" />
                  <span className="duality__bridge-label">both</span>
                  <div className="duality__bridge-line" />
                  <div className="duality__bridge-dot" />
                </div>

                {/* User side */}
                <div className="duality__side duality__side--user">
                  <div className="duality__label">// as a user</div>
                  <div className="duality__title">Feel the product.</div>
                  {PERSPECTIVE_ITEMS.user.map((item, i) => (
                    <FadeItem key={item.text} delay={i * 60}>
                      <div className="duality__item duality__item--user">
                        <i className={`ti ${item.icon}`} aria-hidden="true" />
                        {item.text}
                      </div>
                    </FadeItem>
                  ))}
                </div>
              </div>
            </ChapterBlock>

            {/* CHAPTER 04 — Stack */}
            <ChapterBlock
              num="04 / stack"
              title={<>Tools I <span className="acc">work with.</span></>}
              delay={160}
            >
              <div className="stack-groups">
                {STACK_GROUPS.map((group, gi) => (
                  <FadeItem key={group.label} delay={gi * 80}>
                    <div className="stack-group">
                      <div className="stack-group__label">{group.label}</div>
                      <div className="stack-group__chips">
                        {group.items.map((item) => (
                          <span key={item} className="stack-chip">{item}</span>
                        ))}
                      </div>
                    </div>
                  </FadeItem>
                ))}
              </div>
            </ChapterBlock>

          </div>

          {/* ── RIGHT: sticky identity ── */}
          <aside className="about__aside" aria-label="Identity">
            <FadeItem delay={200}>
              <div className="identity-card">
                {/* Avatar */}
                <div className="identity-card__top">
                  <div className="identity-card__avatar" aria-hidden="true">AM</div>
                  <div>
                    <div className="identity-card__name">{aboutData.name}</div>
                    <div className="identity-card__role">{aboutData.role.toUpperCase()}</div>
                  </div>
                </div>

                <div className="identity-card__div" aria-hidden="true" />

                {/* Facts */}
                <div className="identity-card__facts">
                  {[
                    { key: 'base',    val: 'Malang, Indonesia'         },
                    { key: 'focus',   val: 'Frontend · UI/UX'          },
                    { key: 'shipped', val: '3 projects'                 },
                    { key: 'status',  val: 'open to work', green: true  },
                  ].map((f) => (
                    <div key={f.key} className="identity-card__fact">
                      <span className="identity-card__fact-key">{f.key}</span>
                      <span
                        className="identity-card__fact-val"
                        style={f.green ? { color: 'rgba(74,222,128,0.8)' } : {}}
                      >
                        {f.val}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="identity-card__div" aria-hidden="true" />

                {/* Socials */}
                <div className="identity-card__socials" role="list" aria-label="Social links">
                  {aboutData.socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="identity-card__soc"
                      aria-label={s.label}
                      role="listitem"
                    >
                      <i className={`ti ${s.icon}`} aria-hidden="true" />
                    </a>
                  ))}
                </div>

                <div className="identity-card__div" aria-hidden="true" />

                {/* CV */}
                <a
                  href={aboutData.cvUrl}
                  download
                  className="identity-card__cv"
                  aria-label="Download CV"
                >
                  <i className="ti ti-download" aria-hidden="true" />
                  download cv
                </a>
              </div>
            </FadeItem>
          </aside>

        </div>
      </div>

      <style jsx>{`
        /* ── SECTION ── */
        .about {
          padding: 6rem 2rem 5rem;
          border-top: 0.5px solid rgba(233, 30, 140, 0.12);
          position: relative;
        }

        .about__inner {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        /* ── HEADER ── */
        .about__header {
          margin-bottom: 3rem;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .about__header--in {
          opacity: 1;
          transform: translateY(0);
        }

        .about__tag {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .about__tag-line {
          display: block;
          height: 0.5px;
          width: 28px;
          background: #e91e8c;
        }

        .about__tag-label {
          font-size: 10px;
          font-family: var(--font-mono);
          color: #e91e8c;
          letter-spacing: 0.18em;
        }

        /* ── LAYOUT: 2-col ── */
        .about__layout {
          display: grid;
          grid-template-columns: 1fr 280px;
          gap: 4rem;
          align-items: start;
        }

        /* ── TIMELINE ── */
        .about__timeline {
          position: relative;
          padding-left: 0;
        }

        .about__line {
          position: absolute;
          left: 6px;
          top: 16px;
          bottom: 40px;
          width: 0.5px;
          background: linear-gradient(
            to bottom,
            rgba(233, 30, 140, 0.4),
            rgba(233, 30, 140, 0.1)
          );
        }

        /* ── CHAPTER CONTENT ── */
        :global(.acc) { color: #e91e8c; }

        .chapter-body {
          font-size: 12px;
          font-family: var(--font-mono);
          color: rgba(240, 232, 240, 0.38);
          line-height: 1.9;
        }

        .chapter-body :global(em) {
          color: rgba(233, 30, 140, 0.7);
          font-style: normal;
        }

        /* Mindset cards */
        .mindset-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 7px;
        }

        .mindset-card {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 8px 11px;
          border: 0.5px solid rgba(255, 255, 255, 0.07);
          border-radius: 7px;
          background: rgba(255, 255, 255, 0.02);
          font-size: 10px;
          font-family: var(--font-mono);
          color: rgba(240, 232, 240, 0.5);
          transition: border-color 0.2s, color 0.2s;
        }

        .mindset-card:hover {
          border-color: rgba(233, 30, 140, 0.25);
          color: rgba(240, 232, 240, 0.8);
        }

        .mindset-card :global(i) { color: #e91e8c; font-size: 13px; }

        /* Duality */
        .duality {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 0;
          border: 0.5px solid rgba(255, 255, 255, 0.07);
          border-radius: 10px;
          overflow: hidden;
        }

        .duality__side {
          padding: 1rem 1.1rem;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .duality__side--dev {
          background: rgba(233, 30, 140, 0.03);
          border-right: 0.5px solid rgba(255, 255, 255, 0.06);
        }

        .duality__side--user {
          background: rgba(99, 102, 241, 0.03);
        }

        .duality__label {
          font-size: 9px;
          font-family: var(--font-mono);
          letter-spacing: 0.12em;
          margin-bottom: 2px;
        }

        .duality__side--dev .duality__label { color: rgba(233, 30, 140, 0.45); }
        .duality__side--user .duality__label { color: rgba(99, 102, 241, 0.5); }

        .duality__title {
          font-size: 13px;
          font-weight: 700;
          color: #f5eef5;
          margin-bottom: 4px;
          letter-spacing: -0.015em;
        }

        .duality__item {
          display: flex;
          align-items: flex-start;
          gap: 7px;
          font-size: 10px;
          font-family: var(--font-mono);
          color: rgba(240, 232, 240, 0.4);
          line-height: 1.55;
          padding: 4px 0;
          border-bottom: 0.5px solid rgba(255, 255, 255, 0.04);
        }

        .duality__item:last-child { border-bottom: none; }
        .duality__item :global(i) { color: #e91e8c; font-size: 12px; flex-shrink: 0; margin-top: 1px; }
        .duality__item--user :global(i) { color: rgba(99, 102, 241, 0.7); }

        .duality__bridge {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 0 10px;
          background: rgba(255, 255, 255, 0.01);
        }

        .duality__bridge-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: rgba(233, 30, 140, 0.4);
          flex-shrink: 0;
        }

        .duality__bridge-line {
          width: 0.5px;
          flex: 1;
          background: rgba(233, 30, 140, 0.15);
        }

        .duality__bridge-label {
          font-size: 8px;
          font-family: var(--font-mono);
          color: rgba(240, 232, 240, 0.18);
          letter-spacing: 0.14em;
          writing-mode: vertical-rl;
        }

        /* Stack groups */
        .stack-groups {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .stack-group {}

        .stack-group__label {
          font-size: 9px;
          font-family: var(--font-mono);
          color: rgba(233, 30, 140, 0.45);
          letter-spacing: 0.13em;
          margin-bottom: 6px;
        }

        .stack-group__chips {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
        }

        .stack-chip {
          font-size: 10px;
          font-family: var(--font-mono);
          padding: 3px 9px;
          border-radius: 4px;
          background: rgba(233, 30, 140, 0.08);
          border: 0.5px solid rgba(233, 30, 140, 0.2);
          color: rgba(233, 30, 140, 0.65);
          transition: background 0.2s, border-color 0.2s, color 0.2s;
        }

        .stack-chip:hover {
          background: rgba(233, 30, 140, 0.15);
          border-color: rgba(233, 30, 140, 0.4);
          color: #e91e8c;
        }

        /* ── STICKY ASIDE ── */
        .about__aside {
          position: sticky;
          top: 90px;
        }

        .identity-card {
          padding: 1.25rem;
          border: 0.5px solid rgba(233, 30, 140, 0.18);
          border-radius: 10px;
          background: rgba(233, 30, 140, 0.03);
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .identity-card__top {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }

        .identity-card__avatar {
          width: 42px;
          height: 42px;
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

        .identity-card__name {
          font-size: 13px;
          font-weight: 600;
          color: rgba(240, 232, 240, 0.88);
        }

        .identity-card__role {
          font-size: 9px;
          font-family: var(--font-mono);
          color: rgba(240, 232, 240, 0.3);
          margin-top: 2px;
          letter-spacing: 0.05em;
        }

        .identity-card__div {
          height: 0.5px;
          background: rgba(255, 255, 255, 0.06);
          margin: 10px 0;
        }

        .identity-card__facts {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .identity-card__fact {
          display: flex;
          gap: 8px;
          font-size: 10px;
          font-family: var(--font-mono);
        }

        .identity-card__fact-key {
          color: rgba(233, 30, 140, 0.45);
          width: 52px;
          flex-shrink: 0;
        }

        .identity-card__fact-val {
          color: rgba(240, 232, 240, 0.55);
        }

        .identity-card__socials {
          display: flex;
          gap: 5px;
        }

        .identity-card__soc {
          width: 28px;
          height: 28px;
          border: 0.5px solid rgba(255, 255, 255, 0.08);
          border-radius: 5px;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          color: rgba(240, 232, 240, 0.28);
          text-decoration: none;
          transition: border-color 0.2s, color 0.2s;
        }

        .identity-card__soc:hover {
          border-color: rgba(233, 30, 140, 0.35);
          color: #e91e8c;
        }

        .identity-card__cv {
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
        }

        .identity-card__cv:hover {
          background: #c9166f;
          transform: translateY(-1px);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .about__layout {
            grid-template-columns: 1fr;
          }

          .about__aside {
            position: static;
            order: -1;
          }

          .about__line {
            display: none;
          }

          .mindset-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 560px) {
          .about {
            padding: 4rem 1.25rem;
            margin-top: 20px
          }

          .mindset-grid {
            grid-template-columns: 1fr;
          }

          .duality {
            grid-template-columns: 1fr;
          }

          .duality__bridge {
            display: none;
          }

          .duality__side--dev {
            border-right: none;
            border-bottom: 0.5px solid rgba(255, 255, 255, 0.06);
          }
        }
      `}</style>
    </section>
  )
}