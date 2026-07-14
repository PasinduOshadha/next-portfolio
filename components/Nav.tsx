'use client'

import { useState, useEffect } from 'react'
import { Link } from 'next-view-transitions'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Work' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // close drawer on route change and lock body scroll while open
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-outline-variant/80 bg-white/90 backdrop-blur-xl">
      <div className="flex justify-between items-center px-6 md:px-12 py-5 max-w-[1440px] mx-auto gap-6">
        <Link href="/" className="text-xl font-light text-on-surface font-headline">
          Pasindu Oshadha
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 font-headline font-semibold">
          {navLinks.map((link) => {
            const isActive = pathname === link.href

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`border-b pb-1 transition-colors ${
                  isActive
                    ? 'border-on-surface text-on-surface'
                    : 'border-transparent text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* Desktop CTA */}
        <Link href="/contact" className="mono-button-primary px-5 py-2.5 text-sm font-semibold hidden md:inline-block">
          Hire Me
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          className="md:hidden text-on-surface p-2 -mr-2"
        >
          <span className="material-symbols-outlined text-3xl leading-none">menu</span>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-0 z-50 transition-opacity duration-200 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />

        {/* Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[300px] max-w-[85vw] bg-white shadow-xl flex flex-col transition-transform duration-250 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-between items-center px-6 py-5 border-b border-outline-variant/60">
            <span className="font-headline font-semibold text-on-surface">Menu</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="text-on-surface p-2 -mr-2"
            >
              <span className="material-symbols-outlined text-2xl leading-none">close</span>
            </button>
          </div>

          <div className="flex flex-col px-6 py-6 gap-1 font-headline font-semibold text-lg">
            {navLinks.map((link) => {
              const isActive = pathname === link.href

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`py-3 transition-colors ${
                    isActive ? 'text-on-surface' : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          <div className="mt-auto px-6 pb-8">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mono-button-primary block text-center px-5 py-3.5 font-semibold"
            >
              Hire Me
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
