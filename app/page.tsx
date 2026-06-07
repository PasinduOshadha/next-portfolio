import { Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Zap, Layers, ShoppingCart, Code2, Building2, Search } from 'lucide-react'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { HOME_PROJECTS_QUERY, TESTIMONIALS_QUERY } from '@/sanity/lib/queries'
import HeroFallback from '@/components/HeroFallback'
import { cn } from '@/lib/utils'

export const revalidate = 60

export const metadata = {
  title: 'Pasindu Oshadha — WordPress Developer for International Agencies',
  description:
    'Senior WordPress developer with 10+ years experience. I work with international agencies on performance, headless builds, and complex WooCommerce projects.',
}

// ── Types ────────────────────────────────────────────────────────────────────

interface SanityImage {
  _type: 'image'
  asset: { _ref: string; _type: 'reference' }
}

interface Project {
  _id: string
  title: string
  slug: string
  description: string
  mainImage: SanityImage
  category: string
  tags: string[]
  liveUrl?: string
}

interface Testimonial {
  _id: string
  clientName: string
  designation: string
  serviceProvided: string
  testimonial: string
  avatar: SanityImage
  featured: boolean
}

// ── Skeleton loaders ─────────────────────────────────────────────────────────

function ProjectsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[1, 2, 3].map((i) => (
        <div key={i} className="bg-surface-mid rounded-lg overflow-hidden animate-pulse">
          <div className="h-[180px] bg-surface-high" />
          <div className="p-6 space-y-3">
            <div className="h-3 bg-surface-high rounded w-1/4" />
            <div className="h-5 bg-surface-high rounded w-3/4" />
            <div className="h-3 bg-surface-high rounded w-full" />
            <div className="h-3 bg-surface-high rounded w-2/3" />
          </div>
        </div>
      ))}
    </div>
  )
}

function TestimonialsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[1, 2, 3].map((i) => (
        <div key={i} className="bg-surface-mid rounded-lg p-6 animate-pulse space-y-3">
          <div className="h-3 bg-surface-high rounded w-full" />
          <div className="h-3 bg-surface-high rounded w-5/6" />
          <div className="h-3 bg-surface-high rounded w-4/6" />
          <div className="flex items-center gap-3 mt-4">
            <div className="w-10 h-10 rounded-full bg-surface-high" />
            <div className="space-y-1">
              <div className="h-3 bg-surface-high rounded w-24" />
              <div className="h-2 bg-surface-high rounded w-16" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

// ── Async data sections ───────────────────────────────────────────────────────

async function ProjectsGrid() {
  const projects: Project[] = await client.fetch(HOME_PROJECTS_QUERY)

  if (!projects || projects.length === 0) {
    return (
      <p className="text-muted text-sm">No projects to show yet.</p>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {projects.map((project, idx) => (
        <div
          key={project._id}
          className="bg-surface-mid rounded-lg overflow-hidden hover:bg-surface-high transition-colors duration-200 group"
        >
          {project.mainImage ? (
            <div className="relative h-[180px] bg-surface-high">
              <Image
                src={urlFor(project.mainImage).width(600).height(360).url()}
                alt={project.title}
                fill
                className="object-cover"
                priority={idx === 0}
              />
            </div>
          ) : (
            <div className="h-[180px] bg-surface-high" />
          )}
          <div className="p-6 space-y-3">
            {project.category && (
              <span className="bg-purple/15 text-purple font-mono text-[11px] uppercase tracking-wider px-2 py-0.5 rounded-sm">
                {project.category}
              </span>
            )}
            <h3 className="text-primary-text font-headline font-semibold text-lg leading-snug">
              {project.title}
            </h3>
            {project.description && (
              <p className="text-muted text-sm leading-relaxed line-clamp-2">
                {project.description}
              </p>
            )}
            {project.tags && project.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="bg-surface-highest text-muted font-mono text-[11px] uppercase tracking-wider px-2 py-0.5 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

async function TestimonialsGrid() {
  const testimonials: Testimonial[] = await client.fetch(TESTIMONIALS_QUERY)

  if (!testimonials || testimonials.length === 0) {
    return (
      <p className="text-muted text-sm">No testimonials yet.</p>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.slice(0, 3).map((t) => (
        <div
          key={t._id}
          className="bg-surface-mid rounded-lg p-6 hover:bg-surface-high transition-colors duration-200 flex flex-col gap-4"
        >
          <p className="text-primary-text text-sm leading-relaxed">
            &ldquo;{t.testimonial}&rdquo;
          </p>
          <div className="flex items-center gap-3 mt-auto">
            {t.avatar ? (
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-surface-high flex-shrink-0">
                <Image
                  src={urlFor(t.avatar).width(80).height(80).url()}
                  alt={t.clientName}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="w-10 h-10 rounded-full bg-surface-high flex-shrink-0" />
            )}
            <div>
              <p className="text-primary-text text-sm font-semibold leading-tight">
                {t.clientName}
              </p>
              {t.designation && (
                <p className="text-muted font-mono text-[11px] uppercase tracking-wider">
                  {t.designation}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────

const expertise = [
  {
    icon: Zap,
    title: 'WordPress Performance',
    description:
      "Core Web Vitals, server-level caching, image pipelines, database optimization. I've taken sites from 6-second loads to sub-2s without touching the design.",
  },
  {
    icon: Layers,
    title: 'Headless WordPress + Next.js',
    description:
      'WP as a backend, Next.js as the frontend. Full REST API and WPGraphQL setups — no cookie-cutter starters.',
  },
  {
    icon: ShoppingCart,
    title: 'WooCommerce Development',
    description:
      'Custom product types, checkout flows, payment gateway integrations, and B2B pricing logic. Complex stores that go well beyond the defaults.',
  },
  {
    icon: Code2,
    title: 'Theme & Plugin Development',
    description:
      'Custom themes from scratch (no page builders), custom plugins built to a specification, and maintenance on existing codebases that other developers left behind.',
  },
  {
    icon: Building2,
    title: 'WordPress VIP & Enterprise',
    description:
      'Experience with the WordPress VIP platform, enterprise-grade code standards, and high-traffic configurations.',
  },
  {
    icon: Search,
    title: 'Technical SEO Integration',
    description:
      'Schema markup, Core Web Vitals, XML sitemaps, crawl optimization — built into the development process, not bolted on after.',
  },
]

const stats = [
  { stat: '10+', label: 'Years in WordPress' },
  { stat: '40+', label: 'Agencies & Clients' },
  { stat: '80+', label: 'Sites Shipped' },
  { stat: '2.1s', label: 'Avg LCP after audit' },
]

const steps = [
  {
    number: '01',
    title: 'Business goal first, scope second',
    description:
      "Before I scope anything, I want to understand what the business needs to achieve — not just what the brief says to build. A technically correct solution that misses the business goal isn't a solution. Once I understand the outcome, the scope writes itself.",
  },
  {
    number: '02',
    title: 'Build, report, iterate',
    description:
      "I document what I'm building and why. Weekly updates for ongoing work, Loom walkthroughs for complex deliverables. You shouldn't have to chase me.",
  },
  {
    number: '03',
    title: 'Ship and hand off clean',
    description:
      "I write inline documentation for anything non-obvious. I don't leave things in a state that requires me to stay involved indefinitely — though I'm happy to.",
  },
]

export default function HomePage() {
  return (
    <main id="main-content" className="bg-surface min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-surface py-32 px-6 md:px-12 overflow-hidden">
        <HeroFallback />
        <div className="relative z-10 max-w-[1440px] mx-auto">
          {/* Availability badge */}
          <span className="inline-flex items-center gap-1.5 text-success font-mono text-xs uppercase tracking-widest mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-success inline-block" />
            Available for new projects
          </span>

          {/* H1 */}
          <h1 className="font-headline font-extrabold text-primary-text leading-tight tracking-tight text-4xl md:text-5xl lg:text-[3.5rem] max-w-3xl mb-8">
            WordPress Developer
            <br />
            for Agencies That
            <br />
            Can&rsquo;t Afford Slow Sites.
          </h1>

          {/* Subheadline */}
          <p className="text-muted text-base md:text-lg leading-relaxed max-w-2xl mb-10">
            I&rsquo;ve spent 10 years building WordPress sites for agencies in Australia, UK, and
            the US. What keeps them coming back isn&rsquo;t just the technical execution — it&rsquo;s
            that I understand what the business needs to achieve before I decide how to build it.
            Performance, headless builds, WooCommerce complexity — every decision is made with the
            business outcome in mind, not just the technical checklist.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <Link
              href="/contact"
              className="bg-blue text-white px-5 py-2.5 rounded-md font-semibold hover:bg-blue-dark transition-colors duration-200"
            >
              Start a Project
            </Link>
            <Link
              href="/projects"
              className="border border-outline text-primary-text px-5 py-2.5 rounded-md font-semibold hover:bg-surface-mid transition-colors duration-200"
            >
              See My Work
            </Link>
          </div>

          {/* Social proof */}
          <p className="text-muted font-mono text-xs uppercase tracking-widest">
            Worked with agencies across AU · UK · US · SG
          </p>
        </div>
      </section>

      {/* ── Stats Strip ──────────────────────────────────────────────────── */}
      <section className="bg-surface-low py-16 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ stat, label }) => (
              <div key={label} className="flex flex-col gap-1">
                <span className="font-headline font-extrabold text-primary-text text-4xl md:text-5xl tracking-tight">
                  {stat}
                </span>
                <span className="text-muted font-mono text-xs uppercase tracking-widest">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Expertise ────────────────────────────────────────────────────── */}
      <section className="bg-surface py-24 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto">
          <p className="text-muted font-mono text-xs uppercase tracking-widest mb-4">
            WHAT I DO
          </p>
          <h2 className="font-headline font-semibold text-primary-text text-2xl md:text-3xl tracking-tight mb-4">
            The short version.
          </h2>
          <p className="text-muted text-base leading-relaxed max-w-xl mb-16">
            I don&rsquo;t do everything. I do WordPress — deep, fast, and done right. Here&rsquo;s
            where most of my client work lands.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-surface-mid rounded-lg p-6 hover:bg-surface-high transition-colors duration-200"
              >
                <Icon
                  className="text-blue mb-4"
                  size={22}
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <h3 className="font-headline font-semibold text-primary-text text-lg mb-2">
                  {title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How I Work ───────────────────────────────────────────────────── */}
      <section className="bg-surface-low py-24 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto">
          <p className="text-muted font-mono text-xs uppercase tracking-widest mb-4">
            PROCESS
          </p>
          <h2 className="font-headline font-semibold text-primary-text text-2xl md:text-3xl tracking-tight mb-16">
            How a project typically goes.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map(({ number, title, description }) => (
              <div key={number} className="flex flex-col gap-4">
                <span className="font-mono text-blue text-xs uppercase tracking-widest">
                  {number}
                </span>
                <h3 className="font-headline font-semibold text-primary-text text-lg leading-snug">
                  {title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Selected Projects ─────────────────────────────────────────────── */}
      <section className="bg-surface py-24 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto">
          <p className="text-muted font-mono text-xs uppercase tracking-widest mb-4">
            WORK
          </p>
          <h2 className="font-headline font-semibold text-primary-text text-2xl md:text-3xl tracking-tight mb-16">
            Some of what I&rsquo;ve shipped.
          </h2>

          <Suspense fallback={<ProjectsSkeleton />}>
            <ProjectsGrid />
          </Suspense>

          <div className="mt-10">
            <Link
              href="/projects"
              className="text-blue hover:underline transition-colors duration-150 font-mono text-sm"
            >
              See all projects →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────────── */}
      <section className="bg-surface-low py-24 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto">
          <p className="text-muted font-mono text-xs uppercase tracking-widest mb-4">
            WHAT CLIENTS SAY
          </p>
          <h2 className="font-headline font-semibold text-primary-text text-2xl md:text-3xl tracking-tight mb-16">
            Straight from the people I work with.
          </h2>

          <Suspense fallback={<TestimonialsSkeleton />}>
            <TestimonialsGrid />
          </Suspense>
        </div>
      </section>

      {/* ── Pre-Footer CTA Banner ─────────────────────────────────────────── */}
      <section className="bg-surface py-24 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto">
          <span className="inline-flex items-center gap-1.5 text-success font-mono text-xs uppercase tracking-widest mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-success inline-block" />
            Available for new projects — June 2026
          </span>

          <h2 className="font-headline font-semibold text-primary-text text-2xl md:text-4xl tracking-tight mb-6 max-w-2xl">
            Let&rsquo;s talk about your project.
          </h2>

          <p className="text-muted text-base leading-relaxed max-w-xl mb-10">
            I work best with agencies that have ongoing WordPress needs — retainers, project-based,
            or both. If you need someone to embed as a development partner rather than a one-off
            contractor, that&rsquo;s the kind of work I&rsquo;m set up for.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="bg-blue text-white px-5 py-2.5 rounded-md font-semibold hover:bg-blue-dark transition-colors duration-200"
            >
              Get in Touch
            </Link>
            <Link
              href="/services"
              className="border border-outline text-primary-text px-5 py-2.5 rounded-md font-semibold hover:bg-surface-mid transition-colors duration-200"
            >
              See Services →
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
