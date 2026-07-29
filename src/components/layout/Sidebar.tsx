"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import LineSidebar from "@/components/ui/LineSidebar";
import { TabId } from "@/types";
import { navItems } from "@/lib/social";

interface SidebarProps {
  activeTab: TabId;
  onChange: (tab: TabId) => void;
}

export default function Sidebar({ activeTab, onChange }: SidebarProps) {
  const [isHovered, setIsHovered] = useState(false);

  const itemsLabels = navItems.map((item) => item.label);
  const activeIndex = navItems.findIndex((item) => item.id === activeTab);

  const handleItemClick = (index: number) => {
    const selectedItem = navItems[index];
    if (selectedItem) {
      onChange(selectedItem.id as TabId);
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-6 top-1/2 z-50 -translate-y-1/2 hidden md:block"
      aria-label="Primary navigation"
    >
      {/* Wrapper Utama yang menangani animasi mekar & kuncup saat hover */}
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{
          width: isHovered ? 260 : 48, // 64px saat kuncup (hanya tampil garis), 260px saat mekar
        }}
        transition={{ type: "spring", stiffness: 350, damping: 28 }}
        className="relative flex flex-col justify-center rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)]/80 p-4 shadow-2xl backdrop-blur-xl overflow-hidden"
      >
        {/* Layer pembungkus LineSidebar dengan masking kuncup/mekar */}
        <div
          className={`transition-all duration-300 ease-out ${
            isHovered ? "opacity-100 scale-100" : "opacity-70 scale-95"
          }`}
        >
          <LineSidebar
            items={itemsLabels}
            defaultActive={activeIndex >= 0 ? activeIndex : 0}
            onItemClick={handleItemClick}
            accentColor="#ff2f8f"
            textColor="#ada6b9"
            markerColor="#35303f"
            showIndex={true}
            showMarker={true}
            proximityRadius={100}
            maxShift={24}
            markerLength={32}
            itemGap={20}
            fontSize={0.95}
            smoothing={80}
          />
        </div>
      </motion.div>
    </motion.nav>
  );
}