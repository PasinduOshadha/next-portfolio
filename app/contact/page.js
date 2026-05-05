import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import ContactForm from './ContactForm'

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="relative">

        {/* ── Page Hero ── */}
        <section className="relative py-32 px-12 max-w-[1440px] mx-auto text-center pt-40">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary-container/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="relative z-10">
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-8 font-headline text-on-surface">
              Let&apos;s Build Something High-Performance.
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              Currently accepting selective freelance projects and remote engineering roles (AU/EU/US timezones).
            </p>
          </div>
        </section>

        {/* ── Two-column layout ── */}
        <section className="py-16 px-12 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

            {/* Left: Direct Channels */}
            <div className="md:col-span-5 flex flex-col gap-8">
              <h2 className="text-2xl font-bold font-headline">Direct Channels</h2>
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
                  <div key={channel.label} className="bg-surface-container-high rounded-xl p-6 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-primary">{channel.icon}</span>
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase tracking-widest text-on-surface-variant mb-1">{channel.label}</div>
                      {channel.external ? (
                        <a
                          href={channel.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-on-surface hover:text-primary transition-colors font-semibold"
                        >
                          {channel.value}
                        </a>
                      ) : (
                        <a href={channel.href} className="text-on-surface hover:text-primary transition-colors font-semibold">
                          {channel.value}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Availability badge */}
              <div className="bg-surface-container-high rounded-xl p-6 flex items-center gap-4">
                <span className="w-3 h-3 rounded-full bg-green-400 shrink-0 shadow-[0_0_8px_rgba(74,222,128,0.6)]" />
                <span className="text-sm font-semibold text-on-surface">Available for Q3 &amp; Q4 2025 Projects</span>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="md:col-span-7">
              <ContactForm />
            </div>

          </div>
        </section>

        {/* ── Footer CTA strip ── */}
        <section className="py-16 px-12 text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-on-surface-variant">
            Response time: typically within 24 hours
          </p>
        </section>

      </main>
      <Footer />
    </>
  )
}
