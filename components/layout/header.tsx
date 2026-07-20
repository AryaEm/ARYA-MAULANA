'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import type { Page } from '@/app/page'

const NAV_ITEMS: { label: Page; icon: string; title: string }[] = [
  { label: 'home',     icon: 'ti-home',        title: 'Home'     },
  { label: 'about',    icon: 'ti-user',         title: 'About'    },
  { label: 'projects', icon: 'ti-layout-grid',  title: 'Projects' },
  { label: 'contact',  icon: 'ti-mail',         title: 'Contact'  },
]

interface HeaderProps {
  activePage: Page
  onNavigate: (page: Page) => void
}

export default function Header({ activePage, onNavigate }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // scroll to top on every page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [activePage])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`} role="banner">
      <nav className="nav" aria-label="Main navigation">

        {/* Logo */}
        <button
          className="nav__logo"
          onClick={() => onNavigate('home')}
          aria-label="Go to home"
        >
          <span className="nav__logo-box" aria-hidden="true">
            <Image
              src="/puzzle-code.png"
              alt="Logo"
              width={22}
              height={22}
              className="nav__logo-inner"
            />
          </span>
          <span className="nav__logo-name">
            Aryaem<span className="nav__logo-dot">.</span>
          </span>
        </button>

        {/* Icon dock */}
        <div className="nav__dock" role="list">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="nav__dock-item" role="listitem">
              <button
                className={`nav__icon-btn ${activePage === item.label ? 'nav__icon-btn--active' : ''}`}
                onClick={() => onNavigate(item.label)}
                aria-label={item.title}
                aria-current={activePage === item.label ? 'page' : undefined}
                title={item.title}
              >
                <i className={`ti ${item.icon}`} aria-hidden="true" />
                <span className="nav__tooltip">{item.title.toLowerCase()}</span>
              </button>
            </div>
          ))}

          <div className="nav__divider" aria-hidden="true" />

          <div className="nav__status" aria-label="Status: open to work">
            <span className="nav__status-dot" aria-hidden="true" />
            <span className="nav__status-text">open to work</span>
          </div>
        </div>
      </nav>
    </header>
  )
}