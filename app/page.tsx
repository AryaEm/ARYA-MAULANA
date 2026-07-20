'use client'

import { useState } from 'react'
import HeroSection    from '@/components/sections/heroSection'
import AboutSection   from '@/components/sections/aboutSection'
import ProjectSection from '@/components/sections/projectSection'
import ContactSection from '@/components/sections/contactSection'
import Header         from '@/components/layout/header'

export type Page = 'home' | 'about' | 'projects' | 'contact'

export default function Home() {
  const [activePage, setActivePage] = useState<Page>('home')

  const renderPage = () => {
    switch (activePage) {
      case 'home':     return <HeroSection onNavigate={setActivePage} />
      case 'about':    return <AboutSection />
      case 'projects': return <ProjectSection />
      case 'contact':  return <ContactSection />
    }
  }

  return (
    <>
      <Header activePage={activePage} onNavigate={setActivePage} />
      <main>{renderPage()}</main>
    </>
  )
}