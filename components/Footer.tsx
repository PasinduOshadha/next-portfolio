import Link from 'next/link'
import { ExternalLink, Mail } from 'lucide-react'

const navLinks = [
  { href: '/projects', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-surface-low border-t border-outline">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16">
        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Left — Brand */}
          <div className="flex flex-col gap-3">
            <span
              className="text-base font-semibold text-primary-text"
              style={{ fontFamily: 'var(--font-manrope), Manrope, sans-serif' }}
            >
              Pasindu Oshadha
            </span>
            <p className="text-sm text-muted leading-relaxed">
              Senior WordPress Engineer — Business-First
            </p>
            <p className="text-sm text-muted">
              Available globally · Based in Colombo, Sri Lanka
            </p>
          </div>

          {/* Center — Navigation */}
          <div className="flex flex-col gap-4">
            <span
              className="text-xs uppercase tracking-widest text-muted"
              style={{ fontFamily: 'var(--font-jetbrains), JetBrains Mono, monospace' }}
            >
              Navigation
            </span>
            <nav aria-label="Footer navigation" className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted hover:text-primary-text transition-colors duration-200 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right — Get in touch */}
          <div className="flex flex-col gap-4">
            <span
              className="text-xs uppercase tracking-widest text-muted"
              style={{ fontFamily: 'var(--font-jetbrains), JetBrains Mono, monospace' }}
            >
              Get in touch
            </span>
            <a
              href="mailto:mailbox.pasindu@gmail.com"
              className="text-sm text-muted hover:text-primary-text transition-colors duration-200 w-fit"
            >
              mailbox.pasindu@gmail.com
            </a>
            <div className="flex items-center gap-4 mt-1">
              <a
                href="https://github.com/PasinduOshadha"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted hover:text-primary-text transition-colors duration-200"
              >
                <ExternalLink size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/pasindu-oshadha"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted hover:text-primary-text transition-colors duration-200"
              >
                <ExternalLink size={18} />
              </a>
              <a
                href="mailto:mailbox.pasindu@gmail.com"
                aria-label="Email"
                className="text-muted hover:text-primary-text transition-colors duration-200"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-outline flex items-center justify-center">
          <p
            className="text-xs text-muted"
            style={{ fontFamily: 'var(--font-jetbrains), JetBrains Mono, monospace' }}
          >
            © 2026 Pasindu Oshadha · Built with Next.js &amp; Sanity
          </p>
        </div>
      </div>
    </footer>
  )
}
