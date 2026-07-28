"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { DIRECT_LINKS } from "@/lib/social";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [timeString, setTimeString] = useState("");

  // Live Clock (WIB)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Jakarta",
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="w-full max-w-[800px] mx-auto px-6 py-16 text-zinc-200 font-sans">
      
      {/* HEADER SIMPLE */}
      <div className="space-y-3 mb-12">
        <div className="flex items-center gap-2 font-mono text-[11px] text-[var(--color-accent)] tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
          <span>03 / Contact</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-display text-[var(--color-ink)] tracking-tight">
          Let's talk about the <span className="text-[var(--color-accent)]">next big thing.</span>
        </h2>
        <p className="text-sm text-[var(--color-ink-dim)] leading-relaxed max-w-lg">
          Whether you have a project in mind, a question, or just want to connect, feel free to reach out directly.
        </p>
      </div>

      {/* STATUS & TIME WIDGET */}
      <div className="flex items-center justify-between p-4 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border-soft)] mb-8 font-mono text-xs">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-[var(--color-ink-dim)]">Status:</span>
          <span className="text-emerald-400 font-medium">Open to work & collaboration</span>
        </div>
        <div className="hidden sm:block text-[var(--color-ink-faint)]">
          {timeString || "12:00"} WIB
        </div>
      </div>

      {/* DIRECT CHANNELS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
        {DIRECT_LINKS.map((item) => (
          <div
            key={item.label}
            className="group flex items-center justify-between p-4 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/50 transition-all duration-200"
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-surface-raised)] border border-[var(--color-border-soft)] flex items-center justify-center text-[var(--color-accent)] shrink-0">
                <i className={`ti ${item.icon} text-lg`} />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] uppercase text-[var(--color-ink-faint)]">{item.label}</span>
                  {item.badge && (
                    <span className="font-mono text-[9px] px-1.5 py-0.2 rounded bg-[var(--color-accent-dim)] text-[var(--color-accent)] font-medium">
                      {item.badge}
                    </span>
                  )}
                </div>
                <div className="text-xs font-mono text-[var(--color-ink)] truncate mt-0.5">
                  {item.value}
                </div>
              </div>
            </div>

            {/* Action Icon */}
            <div className="flex items-center gap-1.5 shrink-0 pl-2">
              {item.label === "Email" && (
                <button
                  type="button"
                  onClick={() => handleCopy(item.value)}
                  className="p-2 rounded-lg bg-[var(--color-surface-raised)] text-[var(--color-ink-dim)] hover:text-[var(--color-ink)] hover:border-[var(--color-accent)]/50 transition-colors text-xs"
                  title="Copy to clipboard"
                >
                  <i className={`ti ${copied ? "ti-check text-emerald-400" : "ti-copy"}`} />
                </button>
              )}
              <Link
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[var(--color-surface-raised)] text-[var(--color-ink-dim)] hover:text-[var(--color-ink)] transition-colors text-xs"
              >
                <i className="ti ti-arrow-up-right" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* TOAST FEEDBACK */}
      {copied && (
        <div className="text-center font-mono text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 py-2 rounded-lg transition-all">
          ✓ Email address copied to clipboard
        </div>
      )}

    </section>
  );
}