'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl">
        <div className="flex justify-between items-center px-12 py-6 max-w-[1440px] mx-auto">
          <Link href="/" className="text-xl font-bold tracking-tighter text-on-surface font-headline">
            Pasindu Oshadha
          </Link>
          <div className="hidden md:flex gap-8 font-headline font-semibold tracking-tight">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  pathname === link.href
                    ? 'text-primary border-b-2 border-primary pb-1'
                    : 'text-on-surface hover:text-primary transition-colors'
                }
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            className="bg-gradient-to-br from-primary to-primary-container text-on-primary-container px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform duration-200"
          >
            Hire Me
          </Link>
        </div>
      </nav>

    </>
  )
}
