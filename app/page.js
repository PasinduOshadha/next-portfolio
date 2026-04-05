import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

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
              Performance-focused.<br />
              <span className="text-primary">SEO-driven.</span><br />
              Scalable solutions.
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl mb-12 leading-relaxed text-center">
              9+ years of engineering experience, specializing in high-end WordPress architecture
              and headless Next.js solutions for international clients.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link
                href="/case-studies"
                className="bg-gradient-to-br from-primary to-primary-container text-on-primary-container px-8 py-4 rounded-lg text-lg font-bold hover:scale-105 transition-transform duration-200"
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
        <section className="bg-surface-container-lowest py-12 border-y border-outline-variant/10">
          <div className="max-w-[1440px] mx-auto px-12 flex flex-wrap justify-between items-center gap-8 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            {['WordPress', 'Next.js', 'React', 'MySQL', 'GraphQL', 'Node.js'].map((tech) => (
              <span key={tech} className="font-headline font-bold text-2xl">{tech}</span>
            ))}
          </div>
        </section>

        {/* ── Expertise Grid ── */}
        <section className="py-32 px-12 max-w-[1440px] mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight mb-4">
              Architectural Expertise
            </h2>
            <p className="text-on-surface-variant text-lg max-w-xl">
              Engineering high-throughput applications with a focus on modern web standards.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: 'architecture', title: 'WordPress Architecture', desc: 'Scaling multi-site environments and complex data schemas for enterprise-grade performance.' },
              { icon: 'layers', title: 'Headless CMS', desc: 'Decoupling content management from presentation using Next.js, Apollo, and GraphQL APIs.' },
              { icon: 'speed', title: 'Performance & SEO', desc: 'Optimizing Core Web Vitals to achieve perfect 100/100 Lighthouse scores and technical visibility.' },
              { icon: 'settings_input_component', title: 'Plugin & API Dev', desc: 'Custom middleware and backend extensions to integrate WordPress into modern microservices.' },
            ].map((item) => (
              <div key={item.title} className="bg-surface-container-low p-8 rounded-xl hover:bg-surface-container-high transition-colors">
                <span className="material-symbols-outlined text-primary text-4xl mb-6 block">{item.icon}</span>
                <h3 className="text-xl font-bold font-headline mb-3">{item.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── About Me ── */}
        <section className="py-32 px-12 max-w-[1440px] mx-auto border-t border-outline-variant/10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-5 relative group">
              <div className="aspect-[4/5] rounded-xl overflow-hidden bg-surface-container-high relative shadow-2xl">
                <img
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  src="/images/dp-pasindu-oshadha.jpeg"
                  alt="Pasindu Oshadha — Senior Developer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-10 group-hover:bg-primary/20 transition-colors" />
            </div>

            <div className="md:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/20 border border-secondary/20 mb-8">
                <span className="w-2 h-2 rounded-full bg-secondary inline-block" />
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-secondary">Engineer Profile</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-extrabold font-headline tracking-tighter text-on-surface mb-8 leading-tight">
                9+ Years of <br />
                <span className="text-primary">Engineering Rigor.</span>
              </h2>
              <div className="space-y-6 text-lg text-on-surface-variant max-w-xl leading-relaxed mb-10">
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
              <Link href="/about" className="inline-flex items-center gap-3 text-primary font-bold text-lg group">
                Read My Story
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── Case Studies ── */}
        <section className="py-32 bg-surface-container-low/30 px-12">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex justify-between items-end mb-20">
              <div>
                <h2 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight mb-4">
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
              <h2 className="text-4xl font-extrabold font-headline tracking-tight mb-8">What Partners Say</h2>
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
            <h2 className="text-5xl md:text-7xl font-extrabold font-headline tracking-tighter mb-8 leading-[1]">
              Ready to scale your<br />digital architecture?
            </h2>
            <p className="text-xl text-on-surface-variant max-w-2xl mx-auto mb-12">
              Currently accepting select projects for Q3 and Q4. Let&apos;s build something that performs as well as it looks.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <Link
                href="/contact"
                className="bg-primary text-on-primary-fixed px-10 py-5 rounded-lg text-xl font-bold hover:bg-primary-fixed-dim transition-colors"
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
