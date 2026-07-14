import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import JsonLd from '../../components/JsonLd'
import { servicesSchema, breadcrumbSchema } from '../../lib/schema'
import type { Metadata } from 'next'
import StaggerTitle from '../../components/animations/StaggerTitle'

export const metadata: Metadata = {
  title: 'Services — WordPress Architecture, Headless Next.js, Performance & SEO',
  description:
    'Web development services: enterprise WordPress architecture, headless Next.js delivery, Core Web Vitals & technical SEO engineering, custom plugins and API integrations.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Services — WordPress Architecture, Headless Next.js, Performance & SEO',
    description: 'Web development services: enterprise WordPress architecture, headless Next.js delivery, Core Web Vitals & technical SEO engineering, custom plugins and API integrations.',
    url: '/services',
  },
}

const services = [
  {
    title: 'WordPress Architecture',
    summary: 'Enterprise-grade WordPress systems for teams managing complex content models, scale constraints, and multi-stakeholder workflows.',
    deliverables: [
      'Custom post types, taxonomies, and editorial data models',
      'Multi-site planning and implementation',
      'Plugin architecture and custom Gutenberg blocks',
      'Headless-ready REST and GraphQL delivery layers',
    ],
  },
  {
    title: 'Headless Next.js Delivery',
    summary: 'Modern frontend architecture for performance-critical content platforms and marketing ecosystems.',
    deliverables: [
      'App Router implementation and rendering strategy',
      'ISR, SSG, and cache design for content-heavy pages',
      'CMS and API integration architecture',
      'Deployment hardening and production rollout support',
    ],
  },
  {
    title: 'Performance And SEO Engineering',
    summary: 'Technical audits and implementation work for sites that need measurable gains in speed, discoverability, and stability.',
    deliverables: [
      'Core Web Vitals analysis and remediation',
      'Technical SEO audits and structured-data fixes',
      'Render path, asset, and caching optimization',
      'Performance baselines and post-launch validation',
    ],
  },
  {
    title: 'Plugins, APIs, And Integrations',
    summary: 'Custom extensions and backend integrations when a platform needs capabilities beyond off-the-shelf solutions.',
    deliverables: [
      'Custom WordPress plugins and internal tooling',
      'WooCommerce extensions and business logic',
      'Third-party API bridges and webhook flows',
      'Automation and system handoff documentation',
    ],
  },
]

const steps = [
  { num: '01', title: 'Discovery', desc: 'Clarify goals, constraints, and the business logic behind the build before writing implementation code.' },
  { num: '02', title: 'Architecture', desc: 'Define the delivery model, data shape, rendering strategy, and integration boundaries.' },
  { num: '03', title: 'Execution', desc: 'Build in controlled increments with testing, review checkpoints, and production-minded decisions.' },
  { num: '04', title: 'Hardening', desc: 'Tune for performance, QA edge cases, and launch-readiness once the core solution is stable.' },
]

const engagements = [
  {
    title: 'Audit Engagements',
    description: 'Best for inherited platforms, launch-risk reviews, or performance bottlenecks that need a technical diagnosis before implementation.',
  },
  {
    title: 'Build Engagements',
    description: 'Best for end-to-end delivery where architecture, implementation, and rollout need to happen under one technical lead.',
  },
  {
    title: 'Ongoing Support',
    description: 'Best for teams that already ship regularly and need retained engineering help for improvements, integrations, and technical direction.',
  },
]

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={servicesSchema(services)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
        ])}
      />
      <Nav />
      <main className="relative">

        <section className="py-32 px-6 md:px-12 max-w-[1440px] mx-auto pt-40">
          <div className="max-w-4xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-on-surface-variant mb-8">
              Services
            </div>
            <StaggerTitle as="h1" trigger="load" className="text-6xl md:text-8xl font-medium leading-[0.92] mb-8 font-headline text-on-surface">
              Engineering services for content-heavy, performance-sensitive products.
            </StaggerTitle>
            <p className="text-xl md:text-2xl text-on-surface-variant max-w-3xl leading-relaxed mb-12">
              I work across WordPress architecture, headless Next.js delivery, performance engineering, and custom integrations for teams that need durable technical decisions instead of flashy short-term builds.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="mono-button-primary px-8 py-4 text-lg font-bold">
                Start An Inquiry
              </Link>
              <Link href="/case-studies" className="mono-button-secondary px-8 py-4 text-lg font-semibold">
                Review Case Studies
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto border-t border-outline-variant/60">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <article key={service.title} className="mono-card p-10 flex flex-col gap-8">
                <div className="flex items-start justify-between gap-6 border-b border-outline-variant/60 pb-6">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-on-surface-variant mb-3">
                      Service {String(index + 1).padStart(2, '0')}
                    </p>
                    <h2 className="text-3xl font-medium font-headline text-on-surface leading-tight">
                      {service.title}
                    </h2>
                  </div>
                  <span className="font-mono text-sm text-on-surface-variant">/0{index + 1}</span>
                </div>
                <p className="text-on-surface-variant leading-relaxed text-base">
                  {service.summary}
                </p>
                <ul className="grid grid-cols-1 gap-3">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-on-surface-variant">
                      <span className="mt-1 h-2 w-2 bg-on-surface shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-outline-variant/60">
                  <Link href="/contact" className="inline-flex items-center gap-2 text-on-surface font-semibold border-b border-on-surface">
                    Discuss This Scope
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto border-t border-outline-variant/60">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-on-surface-variant mb-6">
                Working Model
              </p>
              <h2 className="text-4xl md:text-5xl font-medium font-headline text-on-surface mb-6">
                How I approach delivery.
              </h2>
              <p className="text-lg text-on-surface-variant leading-relaxed max-w-xl">
                The process is intentionally structured. It keeps requirements honest, architecture explicit, and implementation grounded in performance and maintainability from the beginning.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {steps.map((step, index) => (
                <div key={step.num} className="mono-card p-8 flex flex-col gap-5">
                  <div className="flex items-center justify-between border-b border-outline-variant/60 pb-4">
                    <span className="font-mono text-sm text-on-surface">{step.num}</span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-on-surface-variant">
                      Phase {index + 1}
                    </span>
                  </div>
                  <h3 className="text-2xl font-medium font-headline text-on-surface">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-on-surface-variant">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto border-t border-outline-variant/60">
          <div className="mb-12">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-on-surface-variant mb-6">
              Engagement Fit
            </p>
            <h2 className="text-4xl md:text-5xl font-medium font-headline text-on-surface mb-4">
              Choose the right level of involvement.
            </h2>
            <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
              I usually work in one of three modes depending on the technical risk, delivery scope, and the maturity of the product team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {engagements.map((engagement) => (
              <div key={engagement.title} className="mono-card p-8 flex flex-col gap-5">
                <h3 className="text-2xl font-medium font-headline text-on-surface">{engagement.title}</h3>
                <p className="text-on-surface-variant leading-relaxed text-sm">{engagement.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-32 px-6 md:px-12">
          <div className="max-w-[1440px] mx-auto mono-section p-12 md:p-24 text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-on-surface-variant mb-6">
              Next Step
            </p>
            <h2 className="text-5xl md:text-7xl font-medium font-headline mb-8 leading-[1] text-on-surface">
              Ready to scope the work properly?
            </h2>
            <p className="text-xl text-on-surface-variant max-w-2xl mx-auto mb-12">
              Send the project context, constraints, and what success looks like. I&apos;ll help define the right engagement before implementation starts.
            </p>
            <Link href="/contact" className="mono-button-primary px-10 py-5 text-xl font-bold">
              Initialize Inquiry
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
