'use client'

import { useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import {
  Mail,
  MessageCircle,
  Linkedin,
  Github,
  Copy,
  Check,
  ArrowUpRight,
  MapPin,
  Clock,
} from 'lucide-react'
import { DIRECT_LINKS } from '@/lib/social'

const LaserFlow = dynamic(() => import('@/components/ui/LaserFlow'), { ssr: false })

const ICON_MAP: Record<string, React.ReactNode> = {
  'ti-mail': <Mail size={18} />,
  'ti-brand-whatsapp': <MessageCircle size={18} />,
  'ti-brand-linkedin': <Linkedin size={18} />,
  'ti-brand-github': <Github size={18} />,
}

export default function ContactSection() {
  const [copied, setCopied] = useState(false)
  const [timeString, setTimeString] = useState('')
  const [, setMousePos] = useState({ x: -9999, y: -9999 })
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tick = () =>
      setTimeString(
        new Date().toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZone: 'Asia/Jakarta',
        })
      )
    tick()
    const t = setInterval(tick, 1000)
    return () => clearInterval(t)
  }, [])

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative min-h-dvh flex flex-col justify-center border-t border-[#e91e8c]/15 overflow-hidden"
      aria-labelledby="contact-heading"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePos({ x: -9999, y: -9999 })}
    >
      <div className="absolute inset-0 z-0 opacity-65 pointer-events-none" aria-hidden="true">
        <LaserFlow
          color="#e91e8c"
          horizontalBeamOffset={0.10}
          verticalBeamOffset={0.0}
          wispDensity={0.8}
          wispIntensity={4}
          fogIntensity={0.35}
          fogScale={0.28}
          flowSpeed={0.3}
          decay={1.2}
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto w-full px-5 py-18 md:px-8 md:py-12 flex flex-col gap-10">
        <div className="flex items-center gap-2.5" aria-hidden="true">
          <span className="text-[10px] font-mono text-[#e91e8c] tracking-[0.18em]">
            CONTACT
          </span>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="flex flex-col gap-6">
            <h2
              id="contact-heading"
              className="text-[clamp(32px,8vw,48px)] md:text-[clamp(38px,5.5vw,64px)] font-bold leading-[1.05] tracking-[-0.035em] text-[#f5eef5]"
            >
              Let&apos;s solve<br />
              something<br />
              <span className="text-[#e91e8c]">together.</span>
            </h2>

            <p className="text-xs font-mono text-[#f0e8f0]/40 leading-[1.9] max-w-[320px]">
              Have a project in mind, a puzzle that needs solving,
              or just want to talk about tech, I&apos;m always open.
            </p>

            {/* Status + Clock */}
            <div className="flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.08] font-mono text-xs gap-4">
              <div className="flex items-center gap-1.75">
                <span className="w-1.75 h-1.75 rounded-full bg-green-400 shrink-0 animate-pulse" aria-hidden="true" />
                <span className="text-green-400/85 text-[11px]">Open to work &amp; collaboration</span>
              </div>
              <div
                className="flex items-center gap-1.25 text-[#f0e8f0]/30 text-[10px] shrink-0"
                aria-label={`Current time in Malang: ${timeString} WIB`}
              >
                <Clock size={11} />
                <span>{timeString || '00:00:00'}</span>
                <span className="text-[#f0e8f0]/20">WIB</span>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#f0e8f0]/35">
              <MapPin size={13} className="text-[#e91e8c] shrink-0" />
              <span>Malang, Indonesia</span>
            </div>
          </div>

          {/* RIGHT — Channel Cards */}
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2" role="list">
              {DIRECT_LINKS.map((item) => (
                <div
                  key={item.label}
                  className="group flex items-center gap-3 p-3.5 sm:px-4 rounded-xl border border-white/[0.07] bg-white/[0.03] backdrop-blur-md transition-all duration-200 hover:border-[#e91e8c]/35 hover:bg-[#e91e8c]/[0.05] hover:-translate-y-0.5"
                  role="listitem"
                >
                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-lg bg-[#e91e8c]/10 border border-[#e91e8c]/25 flex items-center justify-center text-[#e91e8c] shrink-0 transition-colors duration-200 group-hover:bg-[#e91e8c]/20"
                    aria-hidden="true"
                  >
                    {ICON_MAP[item.icon] ?? <Mail size={18} />}
                  </div>

                  {/* Body Info */}
                  <div className="flex flex-col gap-0.75 flex-1 min-w-0">
                    <div className="flex items-center gap-1.75">
                      <span className="text-[9px] font-mono text-[#e91e8c]/50 tracking-[0.12em] uppercase">
                        {item.label}
                      </span>
                      {item.badge && (
                        <span className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-[#e91e8c]/10 border border-[#e91e8c]/25 text-[#e91e8c] tracking-[0.06em]">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-mono text-[#f0e8f0]/65 truncate transition-colors duration-200 group-hover:text-[#f0e8f0]/90">
                      {item.value}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-1.25 shrink-0">
                    {item.label === 'Email' && (
                      <button
                        type="button"
                        className="w-7.5 h-7.5 rounded-md border border-white/[0.08] bg-transparent flex items-center justify-center text-[#f0e8f0]/30 cursor-pointer transition-all duration-200 hover:border-[#e91e8c]/35 hover:text-[#e91e8c] hover:bg-[#e91e8c]/10"
                        onClick={() => handleCopy(item.value)}
                        aria-label="Copy email address"
                        title="Copy"
                      >
                        {copied ? (
                          <Check size={13} className="text-green-400" />
                        ) : (
                          <Copy size={13} />
                        )}
                      </button>
                    )}
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7.5 h-7.5 rounded-md border border-white/[0.08] bg-transparent flex items-center justify-center text-[#f0e8f0]/30 transition-all duration-200 hover:border-[#e91e8c]/35 hover:text-[#e91e8c] hover:bg-[#e91e8c]/10"
                      aria-label={`Open ${item.label}`}
                    >
                      <ArrowUpRight size={13} />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Copy Toast */}
            <div
              className={`flex items-center justify-center gap-1.5 py-2 px-4 rounded-md text-[11px] font-mono text-green-400 bg-green-400/10 border border-green-400/20 transition-all duration-250 pointer-events-none ${
                copied
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 -translate-y-1.5'
              }`}
              role="status"
              aria-live="polite"
            >
              <Check size={12} />
              Email copied to clipboard
            </div>
          </div>
        </div>

        {/* Footer Meta */}
        <div className="flex items-center justify-between pt-6 border-t border-white/[0.06] flex-wrap gap-3">
          <span className="text-[11px] font-mono text-[#f0e8f0]/25">
            response time: <span className="text-[#e91e8c]">under 24h</span>
          </span>
          <span className="text-[10px] font-mono text-[#f0e8f0]/20">
            © 2025 Arya Maulana
          </span>
        </div>
      </div>
    </section>
  )
}