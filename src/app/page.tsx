"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TabId } from "@/types";
import Sidebar from "@/components/layout/Sidebar";
import MobileNav from "@/components/layout/MobileNav";
import HomeView from "@/components/sections/HomeView";
import PlaceholderView from "@/components/sections/PlaceholderView";
import AboutSection from "@/components/sections/AboutSection";
import ProjectSection from "@/components/sections/ProjectSection";
import ContactSection from "@/components/sections/Contact";

const viewTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabId>("home");

  const renderView = () => {
    switch (activeTab) {
      case "home":
        return <HomeView onNavigate={setActiveTab} />;
      case "about":
        return <AboutSection />;
      case "projects":
        return <ProjectSection />;
      case "contact":
        return <ContactSection />;
    }
  };

  return (
    <main className="relative mx-auto flex w-full max-w-6xl flex-col px-3 pb-3 pt-20 sm:pb-0 sm:pl-36 sm:pr-6 sm:pt-0">
      <Sidebar activeTab={activeTab} onChange={setActiveTab} />
      <MobileNav activeTab={activeTab} onChange={setActiveTab} />

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={viewTransition.initial}
          animate={viewTransition.animate}
          exit={viewTransition.exit}
          transition={viewTransition.transition}
          className={`flex flex-1 flex-col justify-center  ${activeTab === "home" ? "min-h-dvh md:h-dvh" : "min-h-dvh"
            }`}
        >
          {renderView()}
        </motion.div>
      </AnimatePresence>
    </main>
  );
}