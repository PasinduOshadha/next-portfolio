'use client'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { SiWordpress, SiNextdotjs, SiGraphql, SiGoogleanalytics, SiPhp, SiWoocommerce } from 'react-icons/si'

const LOGO_DEV_TOKEN = 'pk_QKUwWgUrRJaFB1Xp1hUjJg'

const expertiseCards = [
  {
    Icon: SiWordpress,
    iconColor: '#21759B',
    iconBg: 'rgba(33,117,155,0.12)',
    borderColor: 'rgba(33,117,155,0.4)',
    glowColor: 'rgba(33,117,155,0.15)',
    title: 'WordPress Architecture',
    desc: 'Designing scalable WordPress architectures using custom post types, taxonomies, and optimized database structures to support high-traffic, content-heavy applications efficiently.',
  },
  {
    Icon: SiPhp,
    iconColor: '#777BB4',
    iconBg: 'rgba(119,123,180,0.12)',
    borderColor: 'rgba(119,123,180,0.4)',
    glowColor: 'rgba(119,123,180,0.15)',
    title: 'Custom Plugin & Theme Development',
    desc: 'Building custom plugins and themes tailored to business requirements, ensuring clean code, flexibility, and seamless integration with existing WordPress ecosystems.',
  },
  {
    Icon: SiNextdotjs,
    iconColor: '#e2e2e2',
    iconBg: 'rgba(226,226,226,0.08)',
    borderColor: 'rgba(226,226,226,0.25)',
    glowColor: 'rgba(226,226,226,0.08)',
    title: 'Headless WordPress (Next.js)',
    desc: 'Implementing headless WordPress solutions using Next.js for modern frontend experiences, improved performance, and scalable architecture with API-driven content delivery.',
  },
  {
    Icon: SiGoogleanalytics,
    iconColor: '#F9AB00',
    iconBg: 'rgba(249,171,0,0.12)',
    borderColor: 'rgba(249,171,0,0.4)',
    glowColor: 'rgba(249,171,0,0.15)',
    title: 'SEO & Performance Optimization',
    desc: 'Optimizing websites for Core Web Vitals, faster load times, and technical SEO by improving server response, caching strategies, and frontend performance.',
  },
  {
    Icon: SiGraphql,
    iconColor: '#E10098',
    iconBg: 'rgba(225,0,152,0.12)',
    borderColor: 'rgba(225,0,152,0.4)',
    glowColor: 'rgba(225,0,152,0.15)',
    title: 'API Integrations',
    desc: 'Developing and integrating REST and GraphQL APIs to connect third-party services, automate workflows, and enable seamless data exchange across platforms.',
  },
  {
    Icon: SiWoocommerce,
    iconColor: '#96588A',
    iconBg: 'rgba(150,88,138,0.12)',
    borderColor: 'rgba(150,88,138,0.4)',
    glowColor: 'rgba(150,88,138,0.15)',
    title: 'WooCommerce Customization',
    desc: 'Customizing WooCommerce with advanced business logic, dynamic pricing, and tailored checkout flows to meet complex eCommerce requirements and improve conversions.',
  },
]

const techs = [
  { domain: 'wordpress.org',        label: 'WordPress' },
  { domain: 'nextjs.org',           label: 'Next.js' },
  { domain: 'react.dev',            label: 'React' },
  { domain: 'mysql.com',            label: 'MySQL' },
  { domain: 'graphql.org',          label: 'GraphQL' },
  { domain: 'nodejs.org',           label: 'Node.js' },
  { domain: 'postgresql.org',       label: 'PostgreSQL' },
  { domain: 'analytics.google.com', label: 'Analytics' },
  { domain: 'cloudflare.com',       label: 'Cloudflare' },
  { domain: 'docker.com',           label: 'Docker' },
]

export default function Home() {
  return (
    <>
      <Nav />

      <main className="relative">

        {/* ── Hero ── */}
        <section className="relative min-h-screen flex flex-col justify-center px-12 pt-24 max-w-[1440px] mx-auto overflow-hidden">
          {/* Blur orb */}
          <div className="absolute -top-24 w-[600px] h-[600px] bg-primary-container/10 rounded-full blur-[120px] pointer-events-none left-1/2 -translate-x-1/2" />

          <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
            <span className="font-mono text-secondary text-sm tracking-widest uppercase mb-4 block">
              Senior WordPress &amp; Next.js Developer
            </span>
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-8 font-headline text-on-surface">
              <span className="bg-[linear-gradient(to_left,#29EAC4,#4284DB)] bg-clip-text text-transparent">Performance</span>-focused.<br />
              <span className="bg-[linear-gradient(to_left,#29EAC4,#4284DB)] bg-clip-text text-transparent">SEO</span>-driven.<br />
              <span className="bg-[linear-gradient(to_left,#29EAC4,#4284DB)] bg-clip-text text-transparent">Scalable</span> solutions.
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl mb-12 leading-relaxed text-center">
              9+ years of engineering experience, specializing in high-end WordPress architecture
              and headless Next.js solutions for international clients.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link
                href="/case-studies"
                className="bg-[linear-gradient(to_left,#ff6a00,#ee0979)] text-white px-8 py-4 rounded-lg text-lg font-bold hover:scale-105 transition-transform duration-200"
              >
                View Case Studies
              </Link>
              <Link
                href="/contact"
                className="bg-surface-container-high/40 border border-outline-variant/20 backdrop-blur-md text-on-surface px-8 py-4 rounded-lg text-lg font-semibold hover:bg-surface-container-high transition-colors"
              >
                Hire Me
              </Link>
            </div>
          </div>
        </section>

        {/* ── Tech Stack Strip ── */}
        <section className="bg-surface-container-lowest py-12 border-y border-outline-variant/10 overflow-hidden">
          <div className="animate-marquee flex items-center gap-16 w-max opacity-40 hover:opacity-100 transition-opacity duration-700">
            {[...techs, ...techs].map(({ domain, label }, i) => (
              <div key={i} className="flex items-center gap-3 text-on-surface shrink-0">
                <img
                  src={`https://img.logo.dev/${domain}?token=${LOGO_DEV_TOKEN}&size=40&format=png`}
                  alt={label}
                  width={32}
                  height={32}
                  className="w-8 h-8 shrink-0 object-contain rounded-lg grayscale"
                />
                <span className="font-headline font-normal text-xl">{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Expertise Grid ── */}
        <section className="py-32 px-12 bg-white" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 65%, rgba(255,255,255,1) 100%), url(/dot-pattern.svg)', backgroundSize: 'auto, 60px 60px', backgroundRepeat: 'no-repeat, repeat' }}>
          <div className="max-w-[1440px] mx-auto relative z-10">
            <div className="mb-20">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#4284DB] mb-4 block">Core Capabilities</span>
              <h2 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight mb-4 text-[#131313]">
                Architectural <span className="bg-[linear-gradient(to_left,#29EAC4,#4284DB)] bg-clip-text text-transparent">Expertise</span>
              </h2>
              <p className="text-[#414754] text-lg max-w-xl">
                Engineering high-throughput applications with a focus on modern web standards.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {expertiseCards.map(({ Icon, iconColor, iconBg, borderColor, glowColor, title, desc }) => (
                <div
                  key={title}
                  className="group relative bg-[#f5f5f5] p-8 rounded-xl transition-all duration-300 hover:-translate-y-2 cursor-default overflow-hidden"
                  style={{ border: '1px solid transparent' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.border = `1px solid ${borderColor}`
                    e.currentTarget.style.boxShadow = `0 20px 40px ${glowColor}`
                    e.currentTarget.style.background = '#ffffff'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.border = '1px solid transparent'
                    e.currentTarget.style.boxShadow = 'none'
                    e.currentTarget.style.background = '#f5f5f5'
                  }}
                >
                  {/* Glow orb behind icon */}
                  <div
                    className="absolute -top-6 -left-6 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ background: glowColor }}
                  />
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: iconBg }}
                  >
                    <Icon style={{ color: iconColor }} className="text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold font-headline mb-3 text-[#131313]">{title}</h3>
                  <p className="text-[#555] text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── About Me ── */}
        <section className="py-32 px-12 bg-white">
          <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col gap-12">
            {/* Top row: image + title */}
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="flex items-center justify-start shrink-0">
                <div className="relative group w-40 h-40 md:w-48 md:h-48 shrink-0">
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#e5e7eb] shadow-2xl ring-1 ring-[#d1d5db]">
                    <img
                      className="w-full h-full object-cover transition-all duration-700"
                      src="/images/dp-pasindu-oshadha.jpeg"
                      alt="Pasindu Oshadha — Senior Developer"
                    />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary/10 rounded-full blur-2xl -z-10 group-hover:bg-primary/20 transition-colors" />
                </div>
              </div>

              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/20 border border-secondary/20 mb-8">
                  <span className="w-2 h-2 rounded-full bg-secondary inline-block" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-secondary">Engineer Profile</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-extrabold font-headline tracking-tighter leading-tight text-[#131313]">
                  9+ Years of <br />
                  <span className="bg-[linear-gradient(to_left,#29EAC4,#4284DB)] bg-clip-text text-transparent">Engineering Rigor.</span>
                </h2>
              </div>
            </div>

            {/* Bottom: full-width body text + link */}
            <div>
              <div className="space-y-6 text-lg text-[#555] leading-relaxed mb-10">
                <p>
                  With nearly a decade of experience, I specialize in bridging the gap between enterprise
                  WordPress architecture and modern headless Next.js ecosystems. My focus is on delivering
                  high-performance, SEO-optimized solutions that scale seamlessly for international clients
                  and high-traffic applications.
                </p>
                <p>
                  I believe in technical excellence as a foundation for business growth, ensuring every
                  line of code serves a strategic purpose. Whether it&apos;s complex API integrations or
                  optimizing Core Web Vitals, I prioritize performance and long-term maintainability.
                </p>
              </div>
              <Link href="/about" className="inline-flex items-center gap-3 text-[#4284DB] font-bold text-lg group">
                Read My Story
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>
          </div>
        </section>


        {/* ── Case Studies ── */}
        <section className="py-32 bg-surface-container-low/30 px-12">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex justify-between items-end mb-20">
              <div>
                <h2 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight mb-4 text-on-surface">
                  Selected Case Studies
                </h2>
                <p className="text-on-surface-variant text-lg">Proven results across Fintech, E-commerce, and Media.</p>
              </div>
              <Link href="/case-studies" className="text-primary font-semibold flex items-center gap-2 hover:gap-4 transition-all">
                View All Projects <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrCTfu03BSPo9OfHFQvTvQYbyVIhG9dYA-euQG4GvRzuo2RT4AFfx_Sc3vqPtaBBbMciSnm-wmHQUomCMvQHgPrlC72YSNaja61KDFbzo4W2srYhU78EgI-BIa4Vr6gpSP3oIABeEthctZLDcqPo1PpOlsPMIE0hkyA68gNfq7MOqqNEkhuB8DaX7h66mYvBjejptirjvDTZ0_fI0h8fYmlrwbuXsD8-uUxi-E_hGvpI356_YyZ8peQxqyHfISWuNZBvA0u9tglw',
                  alt: 'Global Trade Platform dashboard',
                  tag: 'Fintech', tagClass: 'bg-primary/20 text-primary',
                  title: 'Global Trade Platform',
                  desc: 'Migrated 40k+ articles to a headless architecture, resulting in a 400% increase in mobile page speeds.',
                  metric1: '99 Lighthouse', metric2: '0.8s LCP',
                },
                {
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0MLLHuZfXl0F5v08-DDoHrI_OyTa4vYfxnDr3wvqO1eZb9Ia-F8Jglf2wCaZgp0Mitpn3-vO5RYhHWFm40bpgef_m3P4GaHK4u-ZPhmbnLzXefWoT7bqaXoiMjskyHCWqSaiP2xGo_bmvpgtYSQ4vfwxSEmxh4pRUtqNJD0N-nTPkUBSsbHrqNnkHwvVFGDnO1xJ_BoFjMDlMcK3855BW7r5rtMp35mlIr1boBEXTSy8GQc478WUMMCgIT3FppEXc7HxdMt58xA',
                  alt: 'Luxe Interiors e-commerce',
                  tag: 'E-commerce', tagClass: 'bg-outline-variant/20 text-on-surface-variant',
                  title: 'Luxe Interiors',
                  desc: 'High-end WooCommerce integration with custom inventory management via Node.js microservices.',
                  metric1: '98 Lighthouse', metric2: '1.2s LCP',
                },
                {
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxwH9DwQnmJ-VDEkd2c4CxOsoYsLtSHeG8ObztLQ01uVJZCBqqIT5O_NYem3iUs2yDcgqDWwiFHg2WJvCOYR_Td0zawnPISM4HUB9qiRAhNMgVLxSV2ogcNygOfKYKSjHHuu73l-G4iTsCIk1J5tutAGvFsZsV8AYNtQpfQ_8eFotfDKkYEXYE_wvk6JAWENi3NumAV9kJVPC2ID2FxVfgqjGgLgH4cTFRmiHQq3FE0bVOwvoQVY1dN6TFIUy3qOU1cFg2h05Q-A',
                  alt: 'Streamline AI analytics dashboard',
                  tag: 'SaaS', tagClass: 'bg-outline-variant/20 text-on-surface-variant',
                  title: 'Streamline AI',
                  desc: 'Next.js dashboard with complex data visualization for an AI-driven logistics provider.',
                  metric1: '100 Lighthouse', metric2: '0.6s LCP',
                },
              ].map((project) => (
                <div key={project.title} className="bg-surface-container-high rounded-xl overflow-hidden flex flex-col group hover:bg-surface-container-highest transition-colors cursor-pointer">
                  <div className="aspect-video overflow-hidden">
                    <img
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      src={project.img}
                      alt={project.alt}
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-6">
                      <span className={`px-3 py-1 rounded-full ${project.tagClass} text-[10px] font-mono font-bold uppercase tracking-widest`}>
                        {project.tag}
                      </span>
                      <span className="material-symbols-outlined text-on-surface/40 group-hover:text-primary transition-colors">north_east</span>
                    </div>
                    <h3 className="text-2xl font-bold font-headline mb-4">{project.title}</h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed mb-8">{project.desc}</p>
                    <div className="mt-auto pt-6 border-t border-outline-variant/10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-tertiary text-lg">bolt</span>
                        <span className="font-mono text-[10px] uppercase tracking-wider">{project.metric1}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-lg">speed</span>
                        <span className="font-mono text-[10px] uppercase tracking-wider">{project.metric2}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="py-32 px-12 max-w-[1440px] mx-auto overflow-hidden">
          <div className="flex flex-col md:flex-row gap-24 items-start">
            <div className="w-full md:w-1/3">
              <h2 className="text-4xl font-extrabold font-headline tracking-tight mb-8 text-on-surface">What Partners Say</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                Collaborating with global agencies and engineering teams to deliver world-class digital experiences.
              </p>
            </div>
            <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                {
                  quote: '"One of the few developers who truly understands the bridge between WordPress\'s content flexibility and Next.js\'s performance. A rare asset for any enterprise team."',
                  name: 'Marcus Chen',
                  role: 'CTO, PixelStream Digital',
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDucZ20rOd1QphdTqb7VNeGkcXrRAQRSvCV8ubCOaiQkGWJbNd5WIYmYrbs0GYUcGFvGyO-evh1W3tFr0JqzURQAWfftp8H-_Ft6byVs-Fi3BUrAyZ9OM-a2XGKQqsGjRdyPRjmfL2tjLM72HbMSZfEIoJyPR264RAjJxUR4PnGK6lgBpkH3RhWIdY_iYVxwi5X89Gl11d45iai4ojqPk91g0EexJ4K66fxKZ9wan5miUFynywOJpVwul7wWge6p0cWrCuNR5b-qQ',
                },
                {
                  quote: '"The technical SEO audit alone was worth the engagement. Our organic traffic increased by 65% within three months of the migration."',
                  name: 'Sarah Jenkins',
                  role: 'Marketing Director, FinCore',
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJ9ArlJ2h7LDTsq2lWKEWG2OAEbkdvsMwbY82hKkbkvtbG3JnC7ZiuUtquCot4uqeW9tSurQccOM8O9wpLuapNeDcBLkieXfmHyZ_0CK3_rZxqEknW63zRaglcFkmocQ42Ljw_xqbylO9n14DvMkMEAOLZtaRbTF7TRcRL2ljl0dOiw9jpWKZ-Gp_XrHAB0TBmemsszdnPXUGM11T17c-zXVtMGqW0A64K6WdDHKFomgWmLGktGc9XaFKirjBmfv1GH033daFeZg',
                },
              ].map((t) => (
                <div key={t.name} className="relative">
                  <span className="material-symbols-outlined text-primary/20 text-8xl absolute -top-10 -left-6 -z-10 select-none">format_quote</span>
                  <p className="text-xl italic text-on-surface leading-relaxed mb-8">{t.quote}</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-surface-container-high overflow-hidden shrink-0">
                      <img className="w-full h-full object-cover" src={t.img} alt={t.name} />
                    </div>
                    <div>
                      <p className="font-bold font-headline">{t.name}</p>
                      <p className="text-xs font-mono uppercase tracking-widest text-on-surface-variant">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="py-32 px-12">
          <div className="max-w-[1440px] mx-auto bg-gradient-to-br from-surface-container-high to-surface rounded-3xl p-12 md:p-24 text-center border border-outline-variant/10 relative overflow-hidden">
            <div className="absolute -bottom-24 -right-24 w-[400px] h-[400px] bg-secondary-container/10 rounded-full blur-[100px] pointer-events-none" />
            <h2 className="text-5xl md:text-7xl font-extrabold font-headline tracking-tighter mb-8 leading-[1] text-on-surface">
              Ready to scale your<br /><span className="bg-[linear-gradient(to_left,#29EAC4,#4284DB)] bg-clip-text text-transparent">digital architecture?</span>
            </h2>
            <p className="text-xl text-on-surface-variant max-w-2xl mx-auto mb-12">
              Currently accepting select projects for Q3 and Q4. Let&apos;s build something that performs as well as it looks.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <Link
                href="/contact"
                className="bg-[linear-gradient(to_left,#ff6a00,#ee0979)] text-white px-10 py-5 rounded-lg text-xl font-bold hover:scale-105 transition-transform duration-200"
              >
                Start a Project
              </Link>
              <Link
                href="/resume"
                className="bg-surface text-on-surface border border-outline-variant/30 px-10 py-5 rounded-lg text-xl font-bold hover:bg-surface-container-highest transition-colors"
              >
                Download Resume
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
