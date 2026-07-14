import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import ContactForm from './ContactForm'
import JsonLd from '../../components/JsonLd'
import { contactPageSchema, breadcrumbSchema } from '../../lib/schema'
import type { Metadata } from 'next'
import StaggerTitle from '../../components/animations/StaggerTitle'

export const metadata: Metadata = {
  title: 'Contact — Hire a Senior WordPress & Next.js Developer | Pasindu Oshadha',
  description:
    'Start a project or discuss a role. Accepting selective freelance projects and remote engineering roles across AU, EU, and US timezones.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact — Hire a Senior WordPress & Next.js Developer | Pasindu Oshadha',
    description: 'Start a project or discuss a role. Accepting selective freelance projects and remote engineering roles across AU, EU, and US timezones.',
    url: '/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactPageSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ])}
      />
      <Nav />
      <main className="relative">

        {/* ── Page Hero ── */}
        <section className="relative py-32 px-6 md:px-12 max-w-[1440px] mx-auto text-center pt-40">
          <div className="relative z-10">
            <StaggerTitle as="h1" trigger="load" className="text-4xl sm:text-5xl md:text-7xl font-medium leading-[0.9] mb-8 font-headline text-on-surface">
              Let&apos;s Build Something High-Performance.
            </StaggerTitle>
            <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              Currently accepting selective freelance projects and remote engineering roles (AU/EU/US timezones).
            </p>
          </div>
        </section>

        {/* ── Two-column layout ── */}
        <section className="py-16 px-6 md:px-12 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

            {/* Left: Direct Channels */}
            <div className="md:col-span-5 flex flex-col gap-8">
              <h2 className="text-2xl font-medium font-headline">Direct Channels</h2>
              <div className="flex flex-col gap-4">
                {[
                  {
                    icon: 'mail',
                    label: 'Email',
                    value: 'hello@pasinduoshadha.com',
                    href: 'mailto:hello@pasinduoshadha.com',
                    external: false,
                  },
                  {
                    icon: 'code',
                    label: 'GitHub',
                    value: 'github.com/PasinduOshadha',
                    href: 'https://github.com/PasinduOshadha',
                    external: true,
                  },
                  {
                    icon: 'work',
                    label: 'LinkedIn',
                    value: 'linkedin.com/in/pasindu-oshadha',
                    href: 'https://www.linkedin.com/in/pasindu-oshadha',
                    external: true,
                  },
                ].map((channel) => (
                  <div key={channel.label} className="mono-card p-6 flex items-center gap-4">
                    <div className="w-12 h-12 border border-outline-variant bg-surface-container-lowest flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-on-surface">{channel.icon}</span>
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase tracking-widest text-on-surface-variant mb-1">{channel.label}</div>
                      {channel.external ? (
                        <a
                          href={channel.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-on-surface hover:text-on-surface-variant transition-colors font-semibold"
                        >
                          {channel.value}
                        </a>
                      ) : (
                        <a href={channel.href} className="text-on-surface hover:text-on-surface-variant transition-colors font-semibold">
                          {channel.value}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Availability badge */}
              <div className="mono-card p-6 flex items-center gap-4">
                <span className="w-3 h-3 bg-on-surface shrink-0" />
                <span className="text-sm font-semibold text-on-surface">Available for Q3 &amp; Q4 2025 projects</span>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="md:col-span-7">
              <ContactForm />
            </div>

          </div>
        </section>

        {/* ── Footer CTA strip ── */}
        <section className="py-16 px-6 md:px-12 text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-on-surface-variant">
            Response time: typically within 24 hours
          </p>
        </section>

      </main>
      <Footer />
    </>
  )
}
