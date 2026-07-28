import Link from 'next/link'
import ChapterBlock from '@/components/ui/ChapterBlock'
import { aboutData } from '@/lib/about'

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
  { icon: 'ti-code', label: 'Clean structure' },
  { icon: 'ti-palette', label: 'Distinctive design' },
  { icon: 'ti-users', label: 'Real user needs' },
  { icon: 'ti-trending-up', label: 'Built to scale' },
]

const PERSPECTIVE_ITEMS = {
  dev: [
    { icon: 'ti-code', text: 'Clean, readable, scalable code' },
    { icon: 'ti-layers', text: 'Architecture with a direction' },
    { icon: 'ti-refresh', text: 'Reusable components, maintainable systems' },
  ],
  user: [
    { icon: 'ti-hand-click', text: 'Intuitive, no explanation needed' },
    { icon: 'ti-sparkles', text: 'Design that has character, not generic' },
    { icon: 'ti-heart', text: 'Feels good to use in the real world' },
  ],
}

export default function AboutSection() {
  return (
    <section id="about" className="w-full max-w-[1100px] mx-auto px-6 py-16 text-zinc-200 font-sans">
      
      <div className="mb-10">
        <div className="flex items-center gap-3 font-mono text-[11px] text-[var(--color-accent)] tracking-widest uppercase">
          <span>About</span>
        </div>
      </div>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_310px] gap-12 lg:gap-16 items-start relative">
        
        {/* LEFT COLUMN: Timeline Chapters */}
        <div className="relative">
          {/* Vertical Line */}
          <div
            aria-hidden="true"
            className="absolute left-0 top-2 bottom-2 w-[1px] bg-gradient-to-b from-[var(--color-accent)]/40 via-zinc-800 to-transparent"
          />

          {/* CHAPTER 01 */}
          <ChapterBlock
            num="01 / origin"
            title={<>Started with <span className="acc">"I wonder how..."</span></>}
            active
          >
            <p>
              Every time I opened a website or app, I couldn&apos;t help but wonder,{' '}
              <em>"how does this even work?"</em> or{' '}
              <em>"if this was built differently, it would feel so much better."</em>
            </p>
            <p>
              So I started building things myself. And there&apos;s a specific kind of satisfaction when something you made actually works, that feeling turned into a habit of always asking:{' '}
              <em>"could this be an app?"</em>
            </p>
          </ChapterBlock>

          {/* CHAPTER 02 */}
          <ChapterBlock
            num="02 / mindset"
            title={<>Not <span className="acc">"as long as it works"</span></>}
          >
            <p>
              Coding for me isn&apos;t just about making something run, it&apos;s about solving problems in a way that&apos;s{' '}
              <em>efficient, scalable, and intentional.</em>
            </p>
            <p className="mb-4">
              I always think from two sides at once: as a <em>developer</em> who cares about clean structure and architecture, and as a <em>user</em> who wants things to feel simple and real.
            </p>

            {/* Mindset Cards Grid - Perbaikan Typo bg-zinc-/80 -> bg-zinc-900/80 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
              {MINDSET_CARDS.map((c) => (
                <div
                  key={c.label}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-md bg-zinc-900/80 border border-zinc-800/80 font-mono text-[11px] text-zinc-300 hover:border-[var(--color-accent)]/50 transition-colors"
                >
                  <i className={`ti ${c.icon} text-xs text-zinc-500`} aria-hidden="true" />
                  <span>{c.label}</span>
                </div>
              ))}
            </div>
          </ChapterBlock>

          {/* CHAPTER 03 */}
          <ChapterBlock
            num="03 / perspective"
            title={<>Always thinking <span className="acc">both sides.</span></>}
          >
            <p className="mb-4">
              Every project I build, I treat like a real product, not just something that works, but something with{' '}
              <em>direction and a foundation to grow from.</em>
            </p>

            {/* Duality Box */}
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] bg-zinc-900 border border-zinc-800/80 rounded-lg overflow-hidden mt-4">
              
              {/* Developer Side */}
              <div className="p-4 space-y-3">
                <div className="font-mono text-[10px] text-[var(--color-accent)] tracking-wider">// as a developer</div>
                <div className="font-sans font-semibold text-xs text-zinc-100">Think in systems.</div>
                <div className="space-y-2">
                  {PERSPECTIVE_ITEMS.dev.map((item) => (
                    <div key={item.text} className="flex items-center gap-2 font-mono text-[11px] text-zinc-400">
                      <i className={`ti ${item.icon} text-xs text-[var(--color-accent)] shrink-0`} aria-hidden="true" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bridge Divider */}
              <div aria-hidden="true" className="hidden sm:flex flex-col items-center justify-between py-3 px-1">
                <div className="w-1 h-1 rounded-full bg-[var(--color-accent)]/50" />
                <div className="w-[1px] flex-1 bg-zinc-800" />
                <span className="font-mono text-[9px] text-zinc-600 [writing-mode:vertical-rl] rotate-180 my-2 tracking-widest uppercase">both</span>
                <div className="w-[1px] flex-1 bg-zinc-800" />
                <div className="w-1 h-1 rounded-full bg-[var(--color-accent)]/50" />
              </div>

              {/* User Side */}
              <div className="p-4 space-y-3 border-t sm:border-t-0 border-zinc-800">
                <div className="font-mono text-[10px] text-indigo-400 tracking-wider">// as a user</div>
                <div className="font-sans font-semibold text-xs text-zinc-100">Feel the product.</div>
                <div className="space-y-2">
                  {PERSPECTIVE_ITEMS.user.map((item) => (
                    <div key={item.text} className="flex items-center gap-2 font-mono text-[11px] text-zinc-400">
                      <i className={`ti ${item.icon} text-xs text-indigo-400 shrink-0`} aria-hidden="true" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ChapterBlock>

          {/* CHAPTER 04 */}
          <ChapterBlock
            num="04 / stack"
            title={<>Tools I <span className="acc">work with.</span></>}
          >
            <div className="space-y-4 pt-1">
              {STACK_GROUPS.map((group) => (
                <div key={group.label} className="space-y-1.5">
                  <div className="font-mono text-[10px] text-zinc-500 tracking-wider uppercase">{group.label}</div>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="font-mono text-[11px] px-2.5 py-1 rounded bg-[var(--color-accent)]/10 border border-rose-500/20 text-[var(--color-accent)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ChapterBlock>
        </div>

        {/* RIGHT COLUMN: Sticky Identity Card (Selesai Diperbaiki) */}
        <aside className="w-full lg:sticky lg:top-24">
          <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800/80 backdrop-blur-md space-y-4">
            
            {/* Profile Header */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-rose-500/10 border border-rose-500/30 text-[var(--color-accent)] font-mono font-bold text-xs flex items-center justify-center shrink-0">
                {aboutData.initials}
              </div>
              <div>
                <div className="font-sans font-bold text-xs text-zinc-100">{aboutData.name}</div>
                <div className="font-mono text-[10px] text-zinc-500 tracking-wider uppercase mt-0.5">{aboutData.role}</div>
              </div>
            </div>

            <div className="h-[1px] bg-zinc-800/80" aria-hidden="true" />

            {/* Quick Facts */}
            <div className="space-y-2 font-mono text-[11px]">
              {[
                { key: 'base', val: aboutData.location },
                { key: 'focus', val: 'Web Developer · UI/UX' },
                { key: 'shipped', val: '6 projects' },
                { key: 'status', val: 'open to work', green: true },
              ].map((f) => (
                <div key={f.key} className="flex justify-between items-center">
                  <span className="text-zinc-500">{f.key}</span>
                  <span className={f.green ? 'text-emerald-400' : 'text-zinc-300'}>
                    {f.val}
                  </span>
                </div>
              ))}
            </div>

            <div className="h-[1px] bg-zinc-800/80" aria-hidden="true" />

            <div className="flex gap-2">
              {aboutData.socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex-1 h-8 flex items-center justify-center rounded bg-zinc-800/40 border border-zinc-700/50 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors text-sm"
                >
                  <i className={`ti ${s.icon}`} aria-hidden="true" />
                </Link>
              ))}
            </div>

            <div className="h-[1px] bg-zinc-800/80" aria-hidden="true" />

            <Link
              href={aboutData.cvUrl}
              download
              className="w-full py-2 px-3 rounded bg-[var(--color-accent)] hover:opacity-90 active:scale-[0.98] text-white font-mono text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-md shadow-rose-600/20"
            >
              <i className="ti ti-download" aria-hidden="true" />
              <span>download cv</span>
            </Link>
          </div>
        </aside>

      </div>
    </section>
  )
}