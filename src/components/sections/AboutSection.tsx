'use client'

import ChapterBlock from '@/components/ui/ChapterBlock'
import Lanyard from '@/components/ui/Lanyard' 
import { STACK_GROUPS, MINDSET_CARDS, PERSPECTIVE_ITEMS } from '@/lib/about'

export default function AboutSection() {
  return (
    <section id="about" className="w-full max-w-[1100px] mx-auto px-6 mt-16 text-zinc-200 font-sans">
      <div className="mb-6">
        <div className="flex items-center gap-3 font-mono text-[11px] text-[var(--color-accent)] tracking-widest uppercase">
          <span>About</span>
        </div>
      </div>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-8 items-start relative">

        {/* LEFT COLUMN: Timeline Chapters */}
        <div className="scroll-container relative p-4 max-h-[calc(100vh-10rem)] overflow-y-auto overscroll-contain">
          {/* Vertical Line */}
          <div
            aria-hidden="true"
            className="absolute left-4 top-2 bottom-2 w-[1px] bg-gradient-to-b from-[var(--color-accent)]/40 via-zinc-800 to-transparent"
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

            {/* Mindset Cards Grid */}
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

        {/* RIGHT COLUMN: Interactive 3D Lanyard Card */}
        <aside className="w-full lg:sticky lg:top-24 h-[550px] sm:h-[650px] flex items-center justify-center rounded-2xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-sm overflow-hidden relative">
          <Lanyard 
            position={[0, 0, 20]} 
            gravity={[0, -40, 0]} 
            fov={20}
            transparent={true}
          />
        </aside>

      </div>
    </section>
  )
}