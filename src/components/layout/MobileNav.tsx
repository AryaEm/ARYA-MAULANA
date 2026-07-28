"use client";

import { Compass, BookOpen, LayoutGrid, Mail } from "lucide-react";
import { TabId } from "@/types";
import { navItems } from "@/lib/social";

const ICONS: Record<TabId, typeof Compass> = {
  home: Compass,
  about: BookOpen,
  projects: LayoutGrid,
  contact: Mail,
};

interface MobileNavProps {
  activeTab: TabId;
  onChange: (tab: TabId) => void;
}

export default function MobileNav({ activeTab, onChange }: MobileNavProps) {
  return (
    <nav
      className="fixed inset-x-4 top-4 z-50 flex justify-between rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/80 px-2 py-2 backdrop-blur-xl md:hidden"
      aria-label="Primary navigation"
    >
      {navItems.map((item) => {
        const isActive = item.id === activeTab;
        const Icon = ICONS[item.id];
        return (
          <button
            key={item.id}
            onClick={() => onChange(item.id)}
            className={`flex flex-1 items-center justify-center gap-1.5 rounded-xl px-2 py-1.5 font-mono text-[11px] tracking-wide transition-colors ${
              isActive ? "bg-[var(--color-accent-dim)] text-[var(--color-accent)]" : "text-[var(--color-ink-faint)]"
            }`}
            aria-current={isActive ? "page" : undefined}
          >
            <Icon size={13} strokeWidth={2} />
            {item.label}
          </button>
        );
      })}
    </nav>
  );
}
