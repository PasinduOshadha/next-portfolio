'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Work' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-outline-variant/80 bg-white/90 backdrop-blur-xl">
      <div className="flex justify-between items-center px-6 md:px-12 py-5 max-w-[1440px] mx-auto gap-6">
        <Link href="/" className="text-xl font-light text-on-surface font-headline">
          Pasindu Oshadha
        </Link>
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
        <Link href="/contact" className="mono-button-primary px-5 py-2.5 text-sm font-semibold">
          Hire Me
        </Link>
      </div>
    </nav>
  )
}
