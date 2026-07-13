import Image from 'next/image'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import { Timeline } from '../../components/ui/timeline'
import JsonLd from '../../components/JsonLd'
import { profilePageSchema, breadcrumbSchema } from '../../lib/schema'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — Pasindu Oshadha | Senior WordPress & Next.js Developer',
  description:
    '9+ years of architectural rigor. Senior web developer bridging enterprise WordPress and headless Next.js — performance-first, maintainable, scalable systems.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About — Pasindu Oshadha | Senior WordPress & Next.js Developer',
    description: '9+ years of architectural rigor. Senior web developer bridging enterprise WordPress and headless Next.js — performance-first, maintainable, scalable systems.',
    url: '/about',
  },
}

const workHistory = [
  {
    title: "2017 — Present",
    content: (
      <div className="mono-card p-8 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h4 className="text-xl font-medium font-headline text-on-surface">Freelance Web Developer</h4>
          <p className="text-on-surface font-mono text-sm tracking-wide">Freelance · Remote</p>
          <p className="text-on-surface-variant font-mono text-xs tracking-widest uppercase">Jul 2017 – Present · 8 yrs</p>
        </div>
        <p className="text-on-surface-variant leading-relaxed">
          Delivered end-to-end WordPress solutions for international clients, focusing on performance, SEO, and long-term maintainability. Built custom themes and components, optimized Core Web Vitals (LCP, CLS, INP), and improved site speed, stability, and user experience across desktop and mobile.
        </p>
        <p className="text-on-surface-variant leading-relaxed">
          Worked closely with business owners and marketing teams to implement SEO-friendly structures, integrate third-party tools, and refine conversion flows. Regularly audited and refactored legacy sites to reduce technical debt, improve security, and ensure reliable production environments.
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          {['WordPress', 'Performance Optimization', 'Core Web Vitals', 'SEO', 'PHP', 'JavaScript'].map((t) => (
            <span key={t} className="mono-tag px-3 py-1 text-xs font-mono">{t}</span>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "2022 — 2023",
    content: (
      <div className="mono-card p-8 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h4 className="text-xl font-medium font-headline text-on-surface">Frontend Developer</h4>
          <p className="text-on-surface font-mono text-sm tracking-wide">PERFECTUS · Full-time · Hybrid</p>
          <p className="text-on-surface-variant font-mono text-xs tracking-widest uppercase">Sep 2022 – Oct 2023 · 1 yr 2 mos · Colombo, Sri Lanka</p>
        </div>
        <p className="text-on-surface-variant leading-relaxed">
          Contributed to the development of React-based web applications and dashboards, focusing on frontend–backend integration and data-driven interfaces. Worked closely with backend and blockchain engineers to implement frontend interactions with APIs and blockchain smart contracts, including wallet connections and transaction flows.
        </p>
        <p className="text-on-surface-variant leading-relaxed">
          Built responsive UI components, debugged cross-layer integration issues, and gained hands-on experience working within modern team-based development workflows.
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          {['React.js', 'API Integration', 'Blockchain', 'Frontend Architecture', 'TypeScript'].map((t) => (
            <span key={t} className="mono-tag px-3 py-1 text-xs font-mono">{t}</span>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "2021 — 2022",
    content: (
      <div className="mono-card p-8 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h4 className="text-xl font-medium font-headline text-on-surface">WordPress Developer</h4>
          <p className="text-on-surface font-mono text-sm tracking-wide">Marlin Communications · Contract · Remote</p>
          <p className="text-on-surface-variant font-mono text-xs tracking-widest uppercase">Jun 2021 – Jul 2022 · 1 yr 2 mos</p>
        </div>
        <p className="text-on-surface-variant leading-relaxed">
          Converted Figma designs into fully functional, responsive WordPress websites, ensuring pixel-perfect implementation and excellent user experience. Customized the GiveWP plugin to meet client-specific requirements and delivered tailored solutions aligned with business goals.
        </p>
        <p className="text-on-surface-variant leading-relaxed">
          Performed cross-browser and device testing using BrowserStack, enhanced site security with WordPress hardening best practices, and managed tasks through Jira for timely project delivery.
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          {['WordPress', 'Figma to WordPress', 'GiveWP', 'BrowserStack', 'Jira', 'PHP'].map((t) => (
            <span key={t} className="mono-tag px-3 py-1 text-xs font-mono">{t}</span>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "2016 — 2017",
    content: (
      <div className="mono-card p-8 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h4 className="text-xl font-medium font-headline text-on-surface">WordPress Web Designer</h4>
          <p className="text-on-surface font-mono text-sm tracking-wide">National Youth Services Council · Full-time · On-site</p>
          <p className="text-on-surface-variant font-mono text-xs tracking-widest uppercase">Dec 2016 – Dec 2017 · 1 yr 1 mo · Colombo, Sri Lanka</p>
        </div>
        <p className="text-on-surface-variant leading-relaxed">
          Maintained and updated the official website and digital content to ensure accuracy, usability, and consistency. Designed and developed internal tools to support improved workflows, and collaborated closely with the media team on content and digital initiatives. Managed and regularly updated the organization&apos;s official Facebook page to support public communication and outreach.
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          {['WordPress', 'Web Design', 'Content Management', 'Social Media', 'CSS'].map((t) => (
            <span key={t} className="mono-tag px-3 py-1 text-xs font-mono">{t}</span>
          ))}
        </div>
      </div>
    ),
  },
]

export default function AboutPage() {
  return (
    <>
      <JsonLd data={profilePageSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ])}
      />
      <Nav />
      <main className="relative">
        {/* ── Page Hero ── */}
        <section className="relative pt-40 pb-20 px-6 md:px-12 max-w-[1440px] mx-auto text-center min-h-[90vh] flex flex-col justify-center">
          <div className="relative z-10">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-on-surface-variant mb-8">Engineer Profile</div>
            <h1 className="text-5xl md:text-8xl font-medium leading-[0.9] mb-8 font-headline text-on-surface">
              9+ years of<br />architectural rigor.
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              Building performant, scalable systems at the intersection of WordPress and modern headless ecosystems.
            </p>
          </div>
        </section>

        {/* ── Three Pillars ── */}
        <section className="py-32 px-6 md:px-12 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: 'speed',
                title: 'Performance First',
                desc: 'Every decision optimized for Core Web Vitals, LCP, and real-world load metrics.',
              },
              {
                icon: 'architecture',
                title: 'Maintainable Systems',
                desc: 'Clean architecture patterns that teams can extend without friction years after delivery.',
              },
              {
                icon: 'hub',
                title: 'Scalable by Design',
                desc: 'Distributed thinking baked into every project — from DB schema to CDN strategy.',
              },
            ].map((pillar) => (
              <div key={pillar.title} className="mono-card p-10 flex flex-col gap-6">
                <span className="material-symbols-outlined text-on-surface text-4xl">{pillar.icon}</span>
                <h3 className="text-2xl font-medium font-headline">{pillar.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Story Section ── */}
        <section className="pt-32 pb-16 px-6 md:px-12 max-w-[1440px] mx-auto border-t border-outline-variant/60">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
            {/* Left: profile photo */}
            <div className="md:col-span-5 relative group">
              <div className="w-[400px] h-[400px] max-w-full overflow-hidden bg-surface-container relative border border-outline-variant mx-auto">
                <Image
                  src="/images/dp-pasindu-oshadha.jpeg"
                  alt="Pasindu Oshadha — Senior Developer"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover opacity-80 transition-all duration-700"
                />
              </div>
            </div>

            {/* Right: story + stats */}
            <div className="md:col-span-7 flex flex-col gap-8">
              <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed">
                <p>
                  With nearly a decade of experience, I specialize in bridging the gap between enterprise
                  WordPress architecture and modern headless Next.js ecosystems. My focus is on delivering
                  high-performance, SEO-optimized solutions that scale seamlessly for international clients
                  and high-traffic applications.
                </p>
                <p>
                  I believe in technical excellence as a foundation for business growth, ensuring every
                  line of code serves a strategic purpose. Whether it&apos;s complex API integrations or
                  optimizing Core Web Vitals, I prioritize performance and long-term maintainability across
                  every engagement.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-4">
                {[
                  { value: '9+', label: 'Years Experience' },
                  { value: '50+', label: 'Projects Delivered' },
                  { value: '3', label: 'Continents Served' },
                ].map((stat) => (
                  <div key={stat.label} className="mono-card p-6 text-center">
                    <div className="text-4xl font-medium font-headline text-on-surface mb-2">{stat.value}</div>
                    <div className="text-xs font-mono uppercase tracking-widest text-on-surface-variant">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Work History ── */}
        <section className="pt-16 pb-8 px-6 md:px-12 max-w-[1440px] mx-auto border-t border-outline-variant/60">
          <div className="mb-16">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-on-surface-variant mb-6">Career</div>
            <h2 className="text-4xl md:text-5xl font-medium font-headline">Work History</h2>
            <p className="text-on-surface-variant mt-4 text-lg max-w-xl leading-relaxed">
              A decade of building, shipping, and scaling across agencies, startups, and enterprise teams.
            </p>
          </div>
          <Timeline data={workHistory} />
        </section>

        {/* ── Technical Skills ── */}
        <section className="pt-16 pb-16 max-w-[800px] mx-auto border-t border-outline-variant/60">
          <div className="mb-16 px-6 text-center">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-on-surface-variant mb-6">Expertise</div>
            <h2 className="text-4xl md:text-5xl font-medium font-headline">Engineering Stack</h2>
          </div>

          <div className="flex flex-col gap-8">
            {/* Core Stack */}
            <div>
              <p className="text-sm font-mono uppercase tracking-[0.2em] text-on-surface-variant mb-5 px-6 text-center">Core Stack</p>
              <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)]">
                <div className="flex gap-3 animate-marquee w-max hover:[animation-play-state:paused]">
                  {[...Array(2)].flatMap(() => [
                    { name: 'WordPress',  slug: 'wordpress',  color: '21759b' },
                    { name: 'Next.js',    slug: 'nextdotjs',  color: 'ffffff' },
                    { name: 'React',      slug: 'react',      color: '61DAFB' },
                    { name: 'PHP',        slug: 'php',        color: '777BB4' },
                    { name: 'TypeScript', slug: 'typescript', color: '3178C6' },
                    { name: 'GraphQL',    slug: 'graphql',    color: 'E10098' },
                    { name: 'MySQL',      slug: 'mysql',      color: '4479A1' },
                    { name: 'Node.js',    slug: 'nodedotjs',  color: '339933' },
                  ]).map(({ name, slug, color }, i) => (
                    <div key={i} className="flex items-center gap-3 px-5 py-3 bg-surface-container-lowest border border-outline-variant shrink-0">
                      <div className="w-8 h-8 bg-surface-container flex items-center justify-center shrink-0">
                        <Image
                          src={`https://cdn.simpleicons.org/${slug}/${color}`}
                          alt={name}
                          width={20}
                          height={20}
                          unoptimized
                          className="w-5 h-5 object-contain"
                        />
                      </div>
                      <span className="text-sm font-mono text-on-surface whitespace-nowrap">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tooling & Infrastructure */}
            <div>
              <p className="text-sm font-mono uppercase tracking-[0.2em] text-on-surface-variant mb-5 px-6 text-center">Tooling &amp; Infrastructure</p>
              <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)]">
                <div className="flex gap-3 w-max" style={{ animation: 'marquee 25s linear infinite reverse' }}>
                  {[...Array(2)].flatMap(() => [
                    { name: 'Vercel',         slug: 'vercel',        color: 'ffffff' },
                    { name: 'Docker',         slug: 'docker',        color: '2496ED' },
                    { name: 'GitHub Actions', slug: 'githubactions', color: '2088FF' },
                    { name: 'Cloudflare',     slug: 'cloudflare',    color: 'F38020' },
                    { name: 'AWS S3',         slug: 'amazons3',      color: '569A31' },
                    { name: 'Sanity CMS',     slug: 'sanity',        color: 'F03E2F' },
                    { name: 'Figma',          slug: 'figma',         color: 'F24E1E' },
                    { name: 'Git',            slug: 'git',           color: 'F05032' },
                  ]).map(({ name, slug, color }, i) => (
                    <div key={i} className="flex items-center gap-3 px-5 py-3 bg-surface-container-lowest border border-outline-variant shrink-0">
                      <div className="w-8 h-8 bg-surface-container flex items-center justify-center shrink-0">
                        <Image
                          src={`https://cdn.simpleicons.org/${slug}/${color}`}
                          alt={name}
                          width={20}
                          height={20}
                          unoptimized
                          className="w-5 h-5 object-contain"
                        />
                      </div>
                      <span className="text-sm font-mono text-on-surface whitespace-nowrap">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-32 px-6 md:px-12">
          <div className="max-w-[1440px] mx-auto mono-section p-12 md:p-24 text-center relative overflow-hidden">
            <h2 className="text-5xl md:text-7xl font-medium font-headline mb-8 leading-[1]">
              Ready to collaborate?
            </h2>
            <p className="text-xl text-on-surface-variant max-w-2xl mx-auto mb-12">
              Currently accepting select projects for Q3 and Q4. Let&apos;s build something that performs as well as it looks.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <Link href="/contact" className="mono-button-primary px-10 py-5 text-xl font-bold">
                Start a Project
              </Link>
              <Link href="/case-studies" className="mono-button-secondary px-10 py-5 text-xl font-semibold">
                View Case Studies
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
