'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/projects', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  // Trap focus / close on Escape
  useEffect(() => {
    if (!mobileOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [mobileOpen])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface/80 backdrop-blur-[12px] border-b border-outline'
          : 'bg-transparent'
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-12 py-4 max-w-[1440px] mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-primary-text"
          style={{ fontFamily: 'var(--font-manrope), Manrope, sans-serif' }}
        >
          Pasindu Oshadha
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors duration-200 ${
                pathname === link.href
                  ? 'text-blue'
                  : 'text-muted hover:text-primary-text'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center border border-outline text-primary-text text-sm px-5 py-2 rounded-md font-semibold hover:bg-surface-mid transition-colors duration-200"
        >
          Start a Project
        </Link>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden text-muted hover:text-primary-text transition-colors duration-200 p-1"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile slide-down menu */}
      <div
        id="mobile-nav"
        role="navigation"
        aria-label="Mobile navigation"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-surface-low border-b border-outline ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col px-6 py-4 gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`py-3 text-sm font-medium border-b border-outline last:border-b-0 transition-colors duration-200 ${
                pathname === link.href
                  ? 'text-blue'
                  : 'text-muted hover:text-primary-text'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center justify-center border border-outline text-primary-text text-sm px-5 py-2.5 rounded-md font-semibold hover:bg-surface-mid transition-colors duration-200"
          >
            Start a Project
          </Link>
        </nav>
      </div>
    </header>
  )
}
