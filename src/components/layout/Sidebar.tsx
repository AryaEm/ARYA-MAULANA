"use client";

import { motion } from "framer-motion";
import { Compass, BookOpen, LayoutGrid, Mail } from "lucide-react";
import { TabId } from "@/types";
import { navItems } from "@/lib/social";

const ICONS: Record<TabId, typeof Compass> = {
  home: Compass,
  about: BookOpen,
  projects: LayoutGrid,
  contact: Mail,
};

interface SidebarProps {
  activeTab: TabId;
  onChange: (tab: TabId) => void;
}

export default function Sidebar({ activeTab, onChange }: SidebarProps) {
  return (
    <motion.nav
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-6 top-1/2 z-50 -translate-y-1/2 md:block! hidden"
      aria-label="Primary navigation"
    >
      <div className="flex flex-col gap-1 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/60 p-2 shadow-[0_0_50px_-15px_rgba(255,47,143,0.25)] backdrop-blur-xl">
        {navItems.map((item) => {
          const isActive = item.id === activeTab;
          const Icon = ICONS[item.id];
          return (
            <button
              key={item.id}
              onClick={() => onChange(item.id)}
              className="group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors"
              aria-current={isActive ? "page" : undefined}
            >
              {isActive && (
                <motion.div
                  layoutId="sidebar-active"
                  className="absolute inset-0 rounded-xl border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <Icon
                size={15}
                strokeWidth={2}
                className={`relative z-10 shrink-0 ${isActive ? "text-[var(--color-accent)]" : "text-[var(--color-ink-faint)] group-hover:text-[var(--color-ink-dim)]"
                  }`}
              />
              <span
                className={`relative z-10 whitespace-nowrap font-sans text-sm ${isActive ? "text-[var(--color-ink)]" : "text-[var(--color-ink-dim)] group-hover:text-[var(--color-ink)]"
                  }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </motion.nav>
  );
}
