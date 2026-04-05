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

      <div className="fixed right-0 top-1/2 -translate-y-1/2 rounded-l-xl bg-surface-container-high flex flex-col gap-4 p-3 z-40 shadow-[0px_40px_60px_rgba(226,226,226,0.08)]">
        <div className="flex flex-col items-center gap-1 mb-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-secondary">System Metrics</span>
          <span className="text-[8px] font-mono text-on-surface/60">Vitals: Stable</span>
        </div>
        <button className="flex flex-col items-center gap-1 p-2 text-primary bg-surface rounded-lg transition-all">
          <span className="material-symbols-outlined text-sm">speed</span>
          <span className="font-mono text-[10px] uppercase tracking-widest">Performance</span>
        </button>
        <button className="flex flex-col items-center gap-1 p-2 text-on-surface/60 hover:bg-surface transition-all rounded-lg">
          <span className="material-symbols-outlined text-sm">mail</span>
          <span className="font-mono text-[10px] uppercase tracking-widest">Contact</span>
        </button>
        <button className="flex flex-col items-center gap-1 p-2 text-on-surface/60 hover:bg-surface transition-all rounded-lg">
          <span className="material-symbols-outlined text-sm">bolt</span>
          <span className="font-mono text-[10px] uppercase tracking-widest">Status</span>
        </button>
      </div>
    </>
  )
}
