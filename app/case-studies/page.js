import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import CaseStudiesGrid from './CaseStudiesGrid'

export default function CaseStudiesPage() {
  return (
    <>
      <Nav />
      <main className="relative">

        {/* ── Page Hero ── */}
        <section className="relative py-32 px-12 max-w-[1440px] mx-auto pt-40">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary-container/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="relative z-10">
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-8 font-headline text-on-surface">
              Engineered Experiences.
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed">
              A curated record of complex problems solved with precision engineering.
            </p>
          </div>
        </section>

        {/* ── Filter + Grid (client component) ── */}
        <CaseStudiesGrid />

        {/* ── CTA ── */}
        <section className="py-32 px-12">
          <div className="max-w-[1440px] mx-auto bg-gradient-to-br from-surface-container-high to-surface rounded-3xl p-12 md:p-24 text-center border border-outline-variant/10 relative overflow-hidden">
            <div className="absolute -bottom-24 -right-24 w-[400px] h-[400px] bg-secondary-container/10 rounded-full blur-[100px] pointer-events-none" />
            <h2 className="text-5xl md:text-7xl font-extrabold font-headline tracking-tighter mb-8 leading-[1]">
              Have a technical challenge?
            </h2>
            <p className="text-xl text-on-surface-variant max-w-2xl mx-auto mb-12">
              Let&apos;s discuss your project and find the right engineering approach.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-br from-primary to-primary-container text-on-primary-container px-10 py-5 rounded-lg text-xl font-bold hover:scale-105 transition-transform duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
