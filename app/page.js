import Link from 'next/link'
import Image from 'next/image'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ExpertiseGrid from '../components/ExpertiseGrid'
import { client } from '../sanity/lib/client'
import { HOME_PROJECTS_QUERY, TESTIMONIALS_QUERY } from '../sanity/lib/queries'
import { urlFor } from '../sanity/lib/image'

const LOGO_DEV_TOKEN = 'pk_QKUwWgUrRJaFB1Xp1hUjJg'

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

export const revalidate = 60

export default async function Home() {
  const [projects, testimonials] = await Promise.all([
    client.fetch(HOME_PROJECTS_QUERY),
    client.fetch(TESTIMONIALS_QUERY),
  ])

  return (
    <>
      <Nav />

      <main className="relative">

        {/* ── Hero ── */}
        <section className="relative min-h-screen flex flex-col justify-center px-12 pt-24 max-w-[1440px] mx-auto overflow-hidden">
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
            <ExpertiseGrid />
          </div>
        </section>

        {/* ── About Me ── */}
        <section className="py-32 px-12 bg-white">
          <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col gap-12">
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
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-on-surface">Engineer Profile</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-extrabold font-headline tracking-tighter leading-tight text-[#131313]">
                  9+ Years of <br />
                  <span className="bg-[linear-gradient(to_left,#29EAC4,#4284DB)] bg-clip-text text-transparent">Engineering Rigor.</span>
                </h2>
              </div>
            </div>

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

        {/* ── Selected Projects ── */}
        <section className="py-32 bg-surface-container-low/30 px-12">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex justify-between items-end mb-20">
              <div>
                <h2 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight mb-4 text-on-surface">
                  Selected Projects
                </h2>
                <p className="text-on-surface-variant text-lg">Real work. Real results.</p>
              </div>
              <Link href="/projects" className="text-primary font-semibold flex items-center gap-2 hover:gap-4 transition-all">
                View All Projects <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project) => (
                <a
                  key={project._id}
                  href={project.liveUrl || '#'}
                  target={project.liveUrl ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="bg-surface-container-high rounded-xl overflow-hidden flex flex-col group hover:bg-surface-container-highest transition-colors cursor-pointer"
                >
                  <div className="aspect-video overflow-hidden bg-surface-container-lowest">
                    {project.mainImage ? (
                      <Image
                        src={urlFor(project.mainImage).width(600).height(338).url()}
                        alt={project.mainImage.alt || project.title}
                        width={600}
                        height={338}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-on-surface/20">
                        <span className="material-symbols-outlined text-5xl">web</span>
                      </div>
                    )}
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-6">
                      {project.category && (
                        <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-[10px] font-mono font-bold uppercase tracking-widest">
                          {project.category}
                        </span>
                      )}
                      <span className="material-symbols-outlined text-on-surface/40 group-hover:text-primary transition-colors">north_east</span>
                    </div>
                    <h3 className="text-2xl font-bold font-headline mb-4">{project.title}</h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed mb-8">{project.description}</p>
                    {project.tags?.length > 0 && (
                      <div className="mt-auto pt-6 border-t border-outline-variant/10 flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="bg-surface-container text-on-surface-variant px-2 py-1 rounded-full text-[10px] font-mono">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        {testimonials.length > 0 && (
          <section className="py-32 px-12 max-w-[1440px] mx-auto overflow-hidden">
            <div className="flex flex-col md:flex-row gap-24 items-start">
              <div className="w-full md:w-1/3">
                <h2 className="text-4xl font-extrabold font-headline tracking-tight mb-8 text-on-surface">What Partners Say</h2>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  Collaborating with global agencies and engineering teams to deliver world-class digital experiences.
                </p>
              </div>
              <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
                {testimonials.map((t) => (
                  <div key={t._id} className="relative">
                    <span className="material-symbols-outlined text-primary/20 text-8xl absolute -top-10 -left-6 -z-10 select-none">format_quote</span>
                    <p className="text-xl italic text-on-surface leading-relaxed mb-8">&ldquo;{t.testimonial}&rdquo;</p>
                    <div className="flex items-center gap-4">
                      {t.avatar ? (
                        <div className="w-12 h-12 rounded-full bg-surface-container-high overflow-hidden shrink-0">
                          <img
                            className="w-full h-full object-cover"
                            src={urlFor(t.avatar).width(96).height(96).url()}
                            alt={t.clientName}
                          />
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-on-surface/40">person</span>
                        </div>
                      )}
                      <div>
                        <p className="font-bold font-headline">{t.clientName}</p>
                        <p className="text-xs font-mono uppercase tracking-widest text-on-surface-variant">{t.designation}</p>
                        {t.serviceProvided && (
                          <p className="text-[10px] font-mono text-secondary mt-0.5">{t.serviceProvided}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

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
