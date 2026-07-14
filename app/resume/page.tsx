import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import JsonLd from '../../components/JsonLd'
import { breadcrumbSchema, profilePageSchema } from '../../lib/schema'
import PrintButton from './PrintButton'

export const metadata: Metadata = {
  title: 'Resume — Pasindu Oshadha | Senior WordPress & Next.js Developer',
  description:
    'Resume of Pasindu Oshadha — senior web developer with 9+ years of experience in WordPress, React, Next.js, performance engineering, and technical SEO.',
  alternates: {
    canonical: '/resume',
  },
  openGraph: {
    title: 'Resume — Pasindu Oshadha | Senior WordPress & Next.js Developer',
    description:
      'Resume of Pasindu Oshadha — senior web developer with 9+ years of experience in WordPress, React, Next.js, performance engineering, and technical SEO.',
    url: '/resume',
  },
}

const experience = [
  {
    role: 'Freelance Web Developer',
    company: 'Freelance · Remote',
    period: 'Jul 2017 – Present',
    duration: '8+ yrs',
    location: 'Remote — international clients (AU / EU / US)',
    points: [
      'Delivered end-to-end WordPress solutions for international clients with a focus on performance, SEO, and long-term maintainability.',
      'Built custom themes, plugins, and components; optimized Core Web Vitals (LCP, CLS, INP) and improved speed, stability, and UX across devices.',
      'Worked directly with business owners and marketing teams to implement SEO-friendly structures, integrate third-party tools, and refine conversion flows.',
      'Audited and refactored legacy sites to reduce technical debt, harden security, and stabilize production environments.',
    ],
    tags: ['WordPress', 'Performance Optimization', 'Core Web Vitals', 'SEO', 'PHP', 'JavaScript'],
  },
  {
    role: 'Frontend Developer',
    company: 'PERFECTUS · Full-time · Hybrid',
    period: 'Sep 2022 – Oct 2023',
    duration: '1 yr 2 mos',
    location: 'Colombo, Sri Lanka',
    points: [
      'Developed React-based web applications and dashboards focused on frontend–backend integration and data-driven interfaces.',
      'Implemented frontend interactions with APIs and blockchain smart contracts, including wallet connections and transaction flows, in collaboration with backend and blockchain engineers.',
      'Built responsive UI components, debugged cross-layer integration issues, and worked within modern team-based development workflows.',
    ],
    tags: ['React.js', 'TypeScript', 'API Integration', 'Blockchain', 'Frontend Architecture'],
  },
  {
    role: 'WordPress Developer',
    company: 'Marlin Communications · Contract · Remote',
    period: 'Jun 2021 – Jul 2022',
    duration: '1 yr 2 mos',
    location: 'Remote',
    points: [
      'Converted Figma designs into fully functional, responsive WordPress websites with pixel-perfect implementation.',
      'Customized the GiveWP plugin to client-specific requirements and delivered tailored solutions aligned with business goals.',
      'Performed cross-browser and device testing via BrowserStack, applied WordPress security hardening, and managed delivery through Jira.',
    ],
    tags: ['WordPress', 'Figma to WordPress', 'GiveWP', 'BrowserStack', 'Jira', 'PHP'],
  },
  {
    role: 'WordPress Web Designer',
    company: 'National Youth Services Council · Full-time · On-site',
    period: 'Dec 2016 – Dec 2017',
    duration: '1 yr 1 mo',
    location: 'Colombo, Sri Lanka',
    points: [
      'Maintained and updated the official website and digital content for accuracy, usability, and consistency.',
      'Designed and developed internal tools to improve workflows; collaborated with the media team on content and digital initiatives.',
    ],
    tags: ['WordPress', 'Web Design', 'Content Management', 'CSS'],
  },
]

const skillGroups = [
  {
    label: 'Core Engineering',
    skills: ['WordPress (themes, plugins, multisite)', 'Next.js (App Router)', 'React', 'TypeScript', 'PHP', 'JavaScript', 'Node.js', 'GraphQL', 'MySQL'],
  },
  {
    label: 'Performance & SEO',
    skills: ['Core Web Vitals (LCP, CLS, INP)', 'Technical SEO audits', 'Structured data (JSON-LD)', 'Caching & render-path optimization', 'ISR / SSG strategy'],
  },
  {
    label: 'Tooling & Infrastructure',
    skills: ['Vercel', 'Docker', 'GitHub Actions', 'Cloudflare', 'AWS S3', 'Sanity CMS', 'Git', 'Figma'],
  },
  {
    label: 'Business & Collaboration',
    skills: [
      'Direct client communication & requirement analysis',
      'Remote async collaboration across AU / EU / US timezones',
      'Agile delivery & task management (Jira)',
      'Stakeholder & marketing-team alignment',
      'Conversion-flow and SEO-driven business thinking',
      'Legacy audit, estimation & technical documentation',
    ],
  },
]

const highlights = [
  { value: '9+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Delivered' },
  { value: '3', label: 'Continents Served' },
]

export default function ResumePage() {
  return (
    <>
      <JsonLd data={profilePageSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Resume', path: '/resume' },
        ])}
      />
      <div className="print:hidden">
        <Nav />
      </div>
      <main className="relative print:bg-white print:text-black">

        {/* ── Header ── */}
        <section className="relative pt-40 pb-12 px-6 md:px-12 max-w-[1100px] mx-auto print:pt-8 print:pb-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-on-surface-variant mb-6 print:text-neutral-500">
                Resume
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium leading-[0.95] font-headline text-on-surface print:text-black print:text-4xl">
                Pasindu Oshadha
              </h1>
              <p className="text-xl text-on-surface-variant mt-4 leading-relaxed print:text-neutral-700">
                Senior Web Developer — WordPress · React · Next.js
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6 text-sm font-mono text-on-surface-variant print:text-neutral-700">
                <a href="mailto:hello@pasinduoshadha.com" className="mono-link">hello@pasinduoshadha.com</a>
                <a href="https://pasinduoshadha.com" className="mono-link">pasinduoshadha.com</a>
                <a href="https://github.com/PasinduOshadha" className="mono-link">github.com/PasinduOshadha</a>
                <a href="https://www.linkedin.com/in/pasindu-oshadha" className="mono-link">linkedin.com/in/pasindu-oshadha</a>
              </div>
            </div>
            <PrintButton />
          </div>
        </section>

        {/* ── Summary ── */}
        <section className="px-6 md:px-12 max-w-[1100px] mx-auto pb-12 print:pb-6">
          <p className="text-lg text-on-surface-variant leading-relaxed max-w-3xl print:text-neutral-800">
            Senior web developer with 9+ years of experience bridging enterprise WordPress architecture
            and modern headless Next.js ecosystems. Specialized in high-performance, SEO-optimized
            delivery for international clients — from Core Web Vitals remediation and technical SEO to
            complex API integrations and scalable content platforms. Comfortable owning projects
            end-to-end: requirements, architecture, build, hardening, and post-launch support.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-8 max-w-lg print:hidden">
            {highlights.map((stat) => (
              <div key={stat.label} className="mono-card p-4 text-center">
                <div className="text-2xl font-medium font-headline text-on-surface">{stat.value}</div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-on-surface-variant mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Experience ── */}
        <section className="px-6 md:px-12 max-w-[1100px] mx-auto py-12 border-t border-outline-variant/60 print:py-4 print:border-neutral-300">
          <h2 className="text-3xl md:text-4xl font-medium font-headline mb-10 print:text-black print:text-2xl print:mb-4">
            Experience
          </h2>
          <div className="flex flex-col gap-8 print:gap-4">
            {experience.map((job) => (
              <div key={`${job.role}-${job.period}`} className="mono-card p-8 flex flex-col gap-4 print:border print:border-neutral-300 print:p-4 print:break-inside-avoid">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
                  <div>
                    <h3 className="text-xl font-medium font-headline text-on-surface print:text-black">{job.role}</h3>
                    <p className="text-on-surface font-mono text-sm tracking-wide print:text-neutral-800">{job.company}</p>
                  </div>
                  <p className="text-on-surface-variant font-mono text-xs tracking-widest uppercase print:text-neutral-600">
                    {job.period} · {job.duration}
                  </p>
                </div>
                <p className="text-on-surface-variant font-mono text-xs tracking-wide print:text-neutral-600">{job.location}</p>
                <ul className="flex flex-col gap-2">
                  {job.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-on-surface-variant leading-relaxed print:text-neutral-800">
                      <span className="material-symbols-outlined text-on-surface text-sm mt-1 print:hidden">arrow_forward</span>
                      <span className="hidden print:inline">—</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-2">
                  {job.tags.map((tag) => (
                    <span key={tag} className="mono-tag px-3 py-1 text-xs font-mono print:border print:border-neutral-400 print:text-neutral-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Skills ── */}
        <section className="px-6 md:px-12 max-w-[1100px] mx-auto py-12 border-t border-outline-variant/60 print:py-4 print:border-neutral-300">
          <h2 className="text-3xl md:text-4xl font-medium font-headline mb-10 print:text-black print:text-2xl print:mb-4">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:gap-3">
            {skillGroups.map((group) => (
              <div key={group.label} className="mono-card p-8 print:border print:border-neutral-300 print:p-4 print:break-inside-avoid">
                <p className="text-[10px] font-mono uppercase tracking-widest text-on-surface-variant mb-4 print:text-neutral-500">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="mono-tag px-3 py-1 text-xs font-mono print:border print:border-neutral-400 print:text-neutral-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Footer note / CTA ── */}
        <section className="px-6 md:px-12 max-w-[1100px] mx-auto py-16 print:hidden">
          <div className="mono-section p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-medium font-headline mb-6">
              Want the full picture?
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/case-studies" className="mono-button-secondary px-8 py-4 font-semibold">
                View Case Studies
              </Link>
              <Link href="/contact" className="mono-button-primary px-8 py-4 font-bold">
                Get in Touch
              </Link>
            </div>
          </div>
        </section>

      </main>
      <div className="print:hidden">
        <Footer />
      </div>
    </>
  )
}
