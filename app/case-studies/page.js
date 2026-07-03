import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import CaseStudiesGrid from './CaseStudiesGrid'
import { client } from '../../sanity/lib/client'
import { CASE_STUDIES_QUERY } from '../../sanity/lib/queries'

export const revalidate = 60

export default async function CaseStudiesPage() {
  const caseStudies = await client.fetch(CASE_STUDIES_QUERY)

  return (
    <>
      <Nav />
      <main className="relative">

        {/* ── Page Hero ── */}
        <section className="relative py-32 px-6 md:px-12 max-w-[1440px] mx-auto pt-40">
          <div className="relative z-10">
            <span className="font-mono text-on-surface-variant text-[11px] tracking-[0.22em] uppercase mb-4 block">
              Client Work
            </span>
            <h1 className="text-6xl md:text-8xl font-medium leading-[0.9] mb-8 font-headline text-on-surface">
              Engineered Experiences.
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed">
              A curated record of complex problems solved with precision engineering.
            </p>
          </div>
        </section>

        {/* ── Filter + Grid (client component) ── */}
        <CaseStudiesGrid caseStudies={caseStudies} />

        {/* ── CTA ── */}
        <section className="py-32 px-6 md:px-12">
          <div className="max-w-[1440px] mx-auto mono-section p-12 md:p-24 text-center relative overflow-hidden">
            <h2 className="text-5xl md:text-7xl font-medium font-headline mb-8 leading-[1]">
              Have a technical challenge?
            </h2>
            <p className="text-xl text-on-surface-variant max-w-2xl mx-auto mb-12">
              Let&apos;s discuss your project and find the right engineering approach.
            </p>
            <Link href="/contact" className="mono-button-primary px-10 py-5 text-xl font-bold">
              Get in Touch
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
