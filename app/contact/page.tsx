import { Mail, ExternalLink } from 'lucide-react'
import type { Metadata } from 'next'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact — Pasindu Oshadha, WordPress Developer',
  description:
    'Get in touch about a WordPress project, performance audit, or ongoing retainer. I respond within 24 hours on business days.',
}

export default function ContactPage() {
  return (
    <main id="main-content" className="bg-surface min-h-screen">
      <section className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto pt-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">

          {/* Left — Contact info */}
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="font-display text-[32px] md:text-5xl font-bold text-primary-text leading-tight tracking-tight mb-6">
                Let&apos;s talk
                <br />
                about your project.
              </h1>
              <p className="text-muted text-base leading-relaxed mb-4">
                Tell me what you&apos;re working on — what the site needs to do, what&apos;s
                currently broken, or what the timeline looks like. I&apos;ll give you a straight
                response, not a sales pitch.
              </p>
              <p className="text-muted text-base leading-relaxed">
                I respond within 24 hours on business days. If your inquiry is time-sensitive,
                mention it in the message.
              </p>
            </div>

            {/* Direct channels */}
            <div className="flex flex-col gap-4">
              <a
                href="mailto:mailbox.pasindu@gmail.com"
                className="flex items-center gap-4 text-primary-text hover:text-blue transition-colors duration-150"
              >
                <Mail size={18} className="text-muted shrink-0" />
                <span className="text-sm">mailbox.pasindu@gmail.com</span>
              </a>
              <a
                href="https://linkedin.com/in/pasinduoshadha"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-primary-text hover:text-blue transition-colors duration-150"
              >
                <ExternalLink size={18} className="text-muted shrink-0" />
                <span className="text-sm">linkedin.com/in/pasinduoshadha</span>
              </a>
              <a
                href="https://github.com/PasinduOshadha"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-primary-text hover:text-blue transition-colors duration-150"
              >
                <ExternalLink size={18} className="text-muted shrink-0" />
                <span className="text-sm">github.com/PasinduOshadha</span>
              </a>
            </div>

            {/* Availability badge */}
            <span className="flex items-center gap-1.5 text-success font-mono text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-success inline-block" />
              Currently available — taking projects from June 2026
            </span>
          </div>

          {/* Right — Contact form */}
          <div>
            <ContactForm />
          </div>

        </div>
      </section>
    </main>
  )
}
