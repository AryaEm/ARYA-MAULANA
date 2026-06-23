'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const NAV_ITEMS = [
  { href: '#hero',    icon: 'ti-home',        label: 'home'    },
  { href: '#about',   icon: 'ti-user',         label: 'about'   },
  { href: '#projects', icon: 'ti-layout-grid', label: 'projects' },
  { href: '#skills',  icon: 'ti-puzzle',       label: 'skills'  },
  { href: '#contact', icon: 'ti-mail',         label: 'contact' },
]

export default function Header() {
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`header ${scrolled ? 'header--scrolled' : ''}`}
      role="banner"
    >
      <nav className="nav" aria-label="Main navigation">
        <Link href="/" className="nav__logo" aria-label="Home">
          <span className="nav__logo-box" aria-hidden="true">
            <span className="nav__logo-inner" />
          </span>
          <span className="nav__logo-name">
            Arya<span className="nav__logo-dot">.</span>Maulana
          </span>
        </Link>

        <div className="nav__dock" role="list">
          {NAV_ITEMS.map((item) => (
            <div key={item.href} className="nav__dock-item" role="listitem">
              <Link
                href={item.href}
                className={`nav__icon-btn ${active === item.label ? 'nav__icon-btn--active' : ''}`}
                aria-label={item.label}
                aria-current={active === item.label ? 'page' : undefined}
                onClick={() => setActive(item.label)}
              >
                <i className={`ti ${item.icon}`} aria-hidden="true" />
                <span className="nav__tooltip">{item.label}</span>
              </Link>
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