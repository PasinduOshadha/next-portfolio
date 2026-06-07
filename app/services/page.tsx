import type { Metadata } from 'next'
import { Code2, Zap, Layers, ShoppingCart } from 'lucide-react'
import FaqAccordion from './FaqAccordion'

export const metadata: Metadata = {
  title: 'Services — WordPress Development & Performance | Pasindu Oshadha',
  description:
    'WordPress development, performance optimization, headless Next.js, and WooCommerce — for agencies. Based in Sri Lanka, works globally.',
}

// ─── Types ───────────────────────────────────────────────────────────────────

interface ServiceCard {
  icon: React.ReactNode
  name: string
  description: string
  includes: string[]
  footer: { label: string; text: string }
}

// ─── Data ────────────────────────────────────────────────────────────────────

const services: ServiceCard[] = [
  {
    icon: <Code2 className="w-6 h-6 text-blue" aria-hidden="true" />,
    name: 'WordPress Development',
    description:
      'Custom themes, custom plugins, and complex builds that go beyond what a starter theme can handle. I build from a blank canvas when the project calls for it — no reliance on page builders or heavy frameworks.',
    includes: [
      'Custom theme development (PHP + Tailwind / vanilla CSS)',
      'Plugin development to specification',
      'ACF and custom post type architecture',
      'WordPress Multisite setup and management',
      'Third-party API integrations (payment gateways, CRMs, ERPs)',
      'Code review and refactoring on existing codebases',
    ],
    footer: {
      label: 'Good fit for',
      text: 'Agencies with a client that needs something WordPress can\'t do out of the box. Or clients who\'ve outgrown their current setup and need a rebuild done properly.',
    },
  },
  {
    icon: <Zap className="w-6 h-6 text-blue" aria-hidden="true" />,
    name: 'WordPress Performance Optimization',
    description:
      'I run a structured audit of your site\'s performance, identify what\'s actually causing the problem (not just what a PageSpeed report says), and fix it. Most sites I audit have the same 4–5 issues. Some have edge cases that take longer.',
    includes: [
      'Server configuration review (PHP version, OPcache, MySQL query cache)',
      'Caching layer setup (WP Rocket, LiteSpeed, or Redis — whatever fits your host)',
      'Image optimization pipeline (WebP/AVIF conversion, lazy loading, sizing)',
      'Database optimization (query analysis, table cleanup, index review)',
      'Third-party script audit (Google Tag Manager, chat widgets, etc.)',
      'CDN setup and Cloudflare configuration',
      'Core Web Vitals tracking setup in Search Console',
    ],
    footer: {
      label: 'Recent example',
      text: "Taylor's Farm (taylorsfarmshop.co.uk) — 3-week optimization engagement. WP Rocket, Cloudflare CDN, Redis caching. Significant Core Web Vitals improvements on a WooCommerce store with 1,000+ SKUs.",
    },
  },
  {
    icon: <Layers className="w-6 h-6 text-blue" aria-hidden="true" />,
    name: 'Headless WordPress + Next.js',
    description:
      'WordPress as a content backend, Next.js as the frontend. Better performance, better developer experience, and more flexibility for complex UI requirements — without losing the CMS your client already knows.',
    includes: [
      'WPGraphQL setup and schema design',
      'Next.js App Router frontend build',
      'Static generation (SSG) with ISR for frequently-updated content',
      'Custom post type and ACF data surfacing via GraphQL',
      'Authentication flows (JWT / WordPress cookie-based)',
      'Image handling via Next.js Image and Cloudinary or similar',
    ],
    footer: {
      label: 'When this makes sense',
      text: "Your client's current WordPress install is a performance ceiling, or the design requirements exceed what a WordPress theme can reasonably handle. This isn't the right choice for every project — I'll tell you if I think a traditional WordPress build is the better call.",
    },
  },
  {
    icon: <ShoppingCart className="w-6 h-6 text-blue" aria-hidden="true" />,
    name: 'WooCommerce Development',
    description:
      "WooCommerce's defaults handle simple stores fine. What I work on is everything beyond that — custom product types, complex checkout logic, B2B pricing, multi-warehouse inventory, custom integrations.",
    includes: [
      'Custom product types and variation logic',
      'Checkout flow customization (steps, fields, conditional logic)',
      'Payment gateway integration (Stripe, PayPal, regional gateways)',
      'B2B pricing and customer group logic',
      'Subscription and recurring billing',
      'Third-party integrations (ERP, CRM, 3PL, fulfilment)',
      'WooCommerce REST API integration for headless setups',
      'Postal code / delivery zone checkers and custom shipping rules',
    ],
    footer: {
      label: 'Recent example',
      text: 'DKI portal — a dealer portal with tier-based pricing, live order tracking, and M1 ERP integration via a custom API layer.',
    },
  },
]

const faqItems = [
  {
    q: 'Do you take on projects directly, or only through agencies?',
    a: 'Both. I work with agencies who need a reliable development partner, and I also take direct client work — usually businesses with an ongoing WordPress need that want someone dedicated rather than a generalist freelancer.',
  },
  {
    q: 'What does your availability look like?',
    a: "I keep 2–3 client slots open at a time. Right now I'm taking on new projects starting [MONTH]. The best way to find out is to reach out — I'll give you a straight answer.",
  },
  {
    q: "Can you work within our existing team's Git/Jira/Slack workflow?",
    a: "Yes. I adapt to your workflow, not the other way around. I've worked within agency environments using GitHub, GitLab, Jira, Asana, Basecamp, Slack, and Teams. Whatever you're using is fine.",
  },
  {
    q: 'Do you sign NDAs?',
    a: "Yes, standard NDA terms are no issue. Some of my clients require it and it's a normal part of agency work.",
  },
  {
    q: 'What time zone are you in?',
    a: "IST (UTC+5:30) — Colombo, Sri Lanka. This gives good overlap with AEST morning sessions and reasonable overlap with UK business hours. I've been working with AU/UK clients for years and it works well.",
  },
  {
    q: 'Do you do fixed-price or hourly?',
    a: "Both, depending on the project. Fixed-price for well-defined scopes. Hourly or retainer for ongoing work, audits, and projects where scope is likely to shift. I'll tell you which I think fits better once I know the project.",
  },
]

// ─── Service Card ─────────────────────────────────────────────────────────────

function ServiceCardComponent({ service }: { service: ServiceCard }) {
  return (
    <article className="bg-surface-mid rounded-lg p-8 hover:bg-surface-high transition-colors duration-200 flex flex-col gap-6">
      <div className="flex items-center gap-3">
        {service.icon}
        <h2 className="text-xl font-semibold text-primary-text tracking-tight">{service.name}</h2>
      </div>

      <p className="text-base text-muted leading-relaxed">{service.description}</p>

      <div>
        <p className="font-mono text-xs uppercase tracking-widest text-muted mb-3">
          What this typically includes:
        </p>
        <ul className="space-y-2">
          {service.includes.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-muted leading-relaxed">
              <span aria-hidden="true" className="text-blue mt-1 shrink-0">
                —
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-4 border-t border-outline">
        <p className="font-mono text-xs uppercase tracking-widest text-muted mb-1">
          {service.footer.label}
        </p>
        <p className="text-sm text-muted leading-relaxed">{service.footer.text}</p>
      </div>
    </article>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <main id="main-content">
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="bg-surface py-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-muted mb-6 inline-block">
            What I offer
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-text leading-tight tracking-tight mb-6">
            Services built around
            <br />
            how agencies actually work.
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            I'm not a generalist. These are the things I've done enough times that I can do them
            well, fast, and without hand-holding. If your project doesn't fit cleanly into one of
            these, tell me anyway — I'll say honestly if I'm the right fit.
          </p>
        </div>
      </section>

      {/* ── Services Grid ─────────────────────────────────────────────── */}
      <section className="bg-surface-low py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <ServiceCardComponent key={service.name} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="bg-surface py-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-primary-text tracking-tight mb-10">
            Questions I get asked
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>
    </main>
  )
}
