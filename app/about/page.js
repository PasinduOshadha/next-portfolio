import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="relative">

        {/* ── Page Hero ── */}
        <section className="relative pt-40 pb-20 px-12 max-w-[1440px] mx-auto text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary-container/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/20 border border-secondary/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-secondary inline-block" />
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-secondary">Engineer Profile</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-8 font-headline text-on-surface">
              9+ Years of Architectural Rigor.
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              Building performant, scalable systems at the intersection of WordPress and modern headless ecosystems.
            </p>
          </div>
        </section>

        {/* ── Three Pillars ── */}
        <section className="py-32 px-12 max-w-[1440px] mx-auto">
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
              <div key={pillar.title} className="bg-surface-container-high rounded-xl p-10 flex flex-col gap-6">
                <span className="material-symbols-outlined text-primary text-4xl">{pillar.icon}</span>
                <h3 className="text-2xl font-bold font-headline">{pillar.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Story Section ── */}
        <section className="py-32 px-12 max-w-[1440px] mx-auto border-t border-outline-variant/10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
            {/* Left: profile photo */}
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
                  <div key={stat.label} className="bg-surface-container-high rounded-xl p-6 text-center">
                    <div className="text-4xl font-extrabold font-headline text-primary mb-2">{stat.value}</div>
                    <div className="text-xs font-mono uppercase tracking-widest text-on-surface-variant">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Skills Grid ── */}
        <section className="py-32 px-12 max-w-[1440px] mx-auto border-t border-outline-variant/10">
          <h2 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight mb-16">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold font-headline mb-6 text-on-surface-variant">Core Stack</h3>
              <div className="flex flex-wrap gap-3">
                {['WordPress', 'Next.js', 'React', 'PHP', 'TypeScript', 'GraphQL', 'MySQL', 'Node.js'].map((skill) => (
                  <span key={skill} className="bg-surface-container text-on-surface-variant px-3 py-1 rounded-full text-xs font-mono">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold font-headline mb-6 text-on-surface-variant">Tooling &amp; Infrastructure</h3>
              <div className="flex flex-wrap gap-3">
                {['Vercel', 'Docker', 'GitHub Actions', 'WP Engine', 'Cloudflare', 'AWS S3', 'Sanity CMS', 'REST APIs'].map((skill) => (
                  <span key={skill} className="bg-surface-container text-on-surface-variant px-3 py-1 rounded-full text-xs font-mono">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-32 px-12">
          <div className="max-w-[1440px] mx-auto bg-gradient-to-br from-surface-container-high to-surface rounded-3xl p-12 md:p-24 text-center border border-outline-variant/10 relative overflow-hidden">
            <div className="absolute -bottom-24 -right-24 w-[400px] h-[400px] bg-secondary-container/10 rounded-full blur-[100px] pointer-events-none" />
            <h2 className="text-5xl md:text-7xl font-extrabold font-headline tracking-tighter mb-8 leading-[1]">
              Ready to collaborate?
            </h2>
            <p className="text-xl text-on-surface-variant max-w-2xl mx-auto mb-12">
              Currently accepting select projects for Q3 and Q4. Let&apos;s build something that performs as well as it looks.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <Link
                href="/contact"
                className="bg-gradient-to-br from-primary to-primary-container text-on-primary-container px-10 py-5 rounded-lg text-xl font-bold hover:scale-105 transition-transform duration-200"
              >
                Start a Project
              </Link>
              <Link
                href="/case-studies"
                className="bg-surface-container-high/40 border border-outline-variant/20 backdrop-blur-md text-on-surface px-10 py-5 rounded-lg text-xl font-semibold hover:bg-surface-container-high transition-colors"
              >
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
