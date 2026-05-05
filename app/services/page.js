import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

const services = [
  {
    icon: 'architecture',
    title: 'WordPress Architecture',
    desc: 'Enterprise-grade multi-site and headless WordPress systems.',
    deliverables: [
      'Custom post types & taxonomies',
      'Multi-site network setup',
      'Headless REST/GraphQL APIs',
      'Plugin architecture & custom blocks',
    ],
  },
  {
    icon: 'layers',
    title: 'Headless Next.js Development',
    desc: 'Decoupled front-ends powered by Next.js 14+ App Router.',
    deliverables: [
      'App Router architecture',
      'ISR & SSG strategies',
      'Apollo + GraphQL integration',
      'Vercel deployment pipelines',
    ],
  },
  {
    icon: 'speed',
    title: 'Performance & SEO Engineering',
    desc: 'Audit-to-implementation performance optimization.',
    deliverables: [
      'Core Web Vitals optimization',
      'Technical SEO audits',
      'Lighthouse score maximization',
      'Schema markup & structured data',
    ],
  },
  {
    icon: 'settings_input_component',
    title: 'Plugin & API Development',
    desc: 'Custom WordPress plugins and backend API integrations.',
    deliverables: [
      'Custom plugin development',
      'WooCommerce extensions',
      'Third-party API bridges',
      'Webhook & automation systems',
    ],
  },
]

const steps = [
  { num: '01', title: 'Discovery', desc: 'Deep-dive into requirements, constraints, and technical goals.' },
  { num: '02', title: 'Architecture', desc: 'Design system blueprint, data models, and API contracts.' },
  { num: '03', title: 'Build', desc: 'Iterative delivery with continuous integration and code review.' },
  { num: '04', title: 'Optimize', desc: 'Performance audits, Core Web Vitals tuning, and launch hardening.' },
]

const tiers = [
  {
    name: 'Audit',
    price: '$2,500',
    period: '',
    featured: false,
    includes: [
      'Full performance audit',
      'Core Web Vitals report',
      'Technical SEO review',
      'Actionable recommendations',
    ],
  },
  {
    name: 'Project',
    price: '$8,000',
    period: '',
    featured: true,
    includes: [
      'End-to-end delivery',
      'Architecture & build',
      'QA & performance tuning',
      '60-day post-launch support',
    ],
  },
  {
    name: 'Retainer',
    price: '$4,500',
    period: '/mo',
    featured: false,
    includes: [
      'Ongoing development',
      'Priority response',
      'Monthly performance reports',
      'Dedicated Slack channel',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main className="relative">

        {/* ── Page Hero ── */}
        <section className="relative py-32 px-12 max-w-[1440px] mx-auto text-center pt-40">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary-container/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/20 border border-secondary/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-secondary inline-block" />
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-secondary">What I Do</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-8 font-headline text-on-surface">
              Senior Engineering Services.
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              Precision-built solutions for teams that demand performance at scale.
            </p>
          </div>
        </section>

        {/* ── Services Grid ── */}
        <section className="py-32 px-12 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-surface-container-high rounded-xl p-10 flex flex-col gap-6">
                <span className="material-symbols-outlined text-primary text-4xl">{service.icon}</span>
                <div>
                  <h3 className="text-2xl font-bold font-headline mb-3">{service.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed">{service.desc}</p>
                </div>
                <ul className="flex flex-col gap-2">
                  {service.deliverables.map((d) => (
                    <li key={d} className="flex items-center gap-3 text-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                      {d}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Link href="/contact" className="text-primary font-semibold flex items-center gap-2 hover:gap-4 transition-all">
                    Learn More <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Process Section ── */}
        <section className="py-32 px-12 max-w-[1440px] mx-auto border-t border-outline-variant/10">
          <h2 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight mb-16 text-center">
            How I Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={step.num} className="flex flex-col gap-4 relative">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-full w-full h-px bg-outline-variant/20 -translate-x-1/2 z-0" />
                )}
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center relative z-10">
                  <span className="text-primary font-mono font-bold text-sm">{step.num}</span>
                </div>
                <h3 className="text-xl font-bold font-headline">{step.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Pricing Tiers ── */}
        {false && <section className="py-32 px-12 max-w-[1440px] mx-auto border-t border-outline-variant/10">
          <h2 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight mb-4 text-center">
            Engagement Models
          </h2>
          <p className="text-on-surface-variant text-center text-lg mb-16 max-w-xl mx-auto">
            Flexible structures to match project scope, team size, and timeline.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-xl p-10 flex flex-col gap-6 ${
                  tier.featured
                    ? 'bg-gradient-to-br from-primary/10 to-primary-container/10 ring-2 ring-primary/30 relative'
                    : 'bg-surface-container-high'
                }`}
              >
                {tier.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary rounded-full text-on-primary text-xs font-mono font-bold uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-on-surface-variant mb-2">{tier.name}</div>
                  <div className="flex items-end gap-1">
                    <span className="text-sm text-on-surface-variant">from</span>
                    <span className="text-4xl font-extrabold font-headline text-on-surface">{tier.price}</span>
                    {tier.period && <span className="text-on-surface-variant">{tier.period}</span>}
                  </div>
                </div>
                <ul className="flex flex-col gap-3">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4">
                  <Link
                    href="/contact"
                    className={`block text-center py-3 rounded-lg font-semibold transition-all ${
                      tier.featured
                        ? 'bg-gradient-to-br from-primary to-primary-container text-on-primary-container hover:scale-105 transition-transform duration-200'
                        : 'bg-surface-container-high/40 border border-outline-variant/20 backdrop-blur-md text-on-surface hover:bg-surface-container-high'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>}

        {/* ── CTA ── */}
        <section className="py-32 px-12">
          <div className="max-w-[1440px] mx-auto bg-gradient-to-br from-surface-container-high to-surface rounded-3xl p-12 md:p-24 text-center border border-outline-variant/10 relative overflow-hidden">
            <div className="absolute -bottom-24 -right-24 w-[400px] h-[400px] bg-secondary-container/10 rounded-full blur-[100px] pointer-events-none" />
            <h2 className="text-5xl md:text-7xl font-extrabold font-headline tracking-tighter mb-8 leading-[1]">
              Ready to start your project?
            </h2>
            <p className="text-xl text-on-surface-variant max-w-2xl mx-auto mb-12">
              Let&apos;s scope out your requirements and find the right engagement model for your team.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-br from-primary to-primary-container text-on-primary-container px-10 py-5 rounded-lg text-xl font-bold hover:scale-105 transition-transform duration-200"
            >
              Initialize Inquiry
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
