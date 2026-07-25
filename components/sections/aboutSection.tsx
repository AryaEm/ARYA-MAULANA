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
                Every time I opened a website or app, I couldn&apos;t help but wonder,
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
        
      `}</style>
    </section>
  )
}