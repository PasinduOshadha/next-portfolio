import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import CaseStudiesGrid from './CaseStudiesGrid'
import { client } from '../../sanity/lib/client'
import { CASE_STUDIES_QUERY } from '../../sanity/lib/queries'
import type { CaseStudy } from '../../types/content'
import JsonLd from '../../components/JsonLd'
import { collectionPageSchema, breadcrumbSchema, BASE_URL } from '../../lib/schema'
import type { Metadata } from 'next'
import StaggerTitle from '../../components/animations/StaggerTitle'

export const metadata: Metadata = {
  title: 'Case Studies — Client Work & Measurable Results | Pasindu Oshadha',
  description:
    'In-depth case studies of client projects: the challenge, the engineering solution, and measurable results in performance, SEO, and business outcomes.',
  alternates: {
    canonical: '/case-studies',
  },
  openGraph: {
    title: 'Case Studies — Client Work & Measurable Results | Pasindu Oshadha',
    description: 'In-depth case studies of client projects: the challenge, the engineering solution, and measurable results in performance, SEO, and business outcomes.',
    url: '/case-studies',
  },
}

export const revalidate = 60

export default async function CaseStudiesPage() {
  const caseStudies = await client.fetch<CaseStudy[]>(CASE_STUDIES_QUERY)

  return (
    <>
      <JsonLd
        data={collectionPageSchema({
          name: 'Case Studies',
          path: '/case-studies',
          description: 'Client work and project case studies by Pasindu Oshadha.',
          items: caseStudies.map((cs: CaseStudy) => ({
            name: cs.title,
            url: `${BASE_URL}/case-studies/${cs.slug}`,
            description: cs.excerpt,
          })),
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Case Studies', path: '/case-studies' },
        ])}
      />
      <Nav />
      <main className="relative">

        {/* ── Page Hero ── */}
        <section className="relative py-32 px-6 md:px-12 max-w-[1440px] mx-auto pt-40">
          <div className="relative z-10">
            <span className="font-mono text-on-surface-variant text-[11px] tracking-[0.22em] uppercase mb-4 block">
              Client Work
            </span>
            <StaggerTitle as="h1" trigger="load" className="text-4xl sm:text-5xl md:text-7xl font-medium leading-[0.9] mb-8 font-headline text-on-surface">
              Engineered Experiences.
            </StaggerTitle>
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
