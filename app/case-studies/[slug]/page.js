import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
import { client } from '../../../sanity/lib/client'
import { CASE_STUDY_QUERY, CASE_STUDY_SLUGS_QUERY } from '../../../sanity/lib/queries'
import { urlFor } from '../../../sanity/lib/image'

export const revalidate = 60

export async function generateStaticParams() {
  const slugs = await client.fetch(CASE_STUDY_SLUGS_QUERY)
  return slugs.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const study = await client.fetch(CASE_STUDY_QUERY, { slug })
  if (!study) return {}
  return {
    title: `${study.title} — Case Study`,
    description: study.excerpt,
  }
}

const ptComponents = {
  types: {
    image: ({ value }) => (
      <figure className="my-10 overflow-hidden border border-outline-variant">
        <Image
          src={urlFor(value).width(1200).url()}
          alt={value.alt || ''}
          width={1200}
          height={675}
          className="w-full object-cover"
        />
        {value.caption && (
          <figcaption className="text-center text-xs font-mono text-on-surface-variant mt-3 tracking-wider">
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),
  },
  block: {
    h2: ({ children }) => <h2 className="text-3xl font-medium font-headline mt-12 mb-4 text-on-surface">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-medium font-headline mt-8 mb-3 text-on-surface">{children}</h3>,
    normal: ({ children }) => <p className="text-on-surface-variant leading-relaxed mb-6">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-on-surface pl-6 my-8 text-on-surface-variant italic">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-none space-y-2 mb-6">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal list-inside space-y-2 mb-6 text-on-surface-variant">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex items-start gap-2 text-on-surface-variant">
        <span className="material-symbols-outlined text-on-surface text-sm mt-0.5">arrow_forward</span>
        <span>{children}</span>
      </li>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="text-on-surface font-semibold">{children}</strong>,
    code: ({ children }) => (
      <code className="bg-surface-container-lowest text-on-surface font-mono text-sm px-1.5 py-0.5">
        {children}
      </code>
    ),
    link: ({ value, children }) => (
      <a href={value?.href} target="_blank" rel="noopener noreferrer" className="text-on-surface underline underline-offset-2">
        {children}
      </a>
    ),
  },
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params
  const study = await client.fetch(CASE_STUDY_QUERY, { slug })

  if (!study) notFound()

  return (
    <>
      <Nav />
      <main className="relative">

        {/* ── Hero ── */}
        <section className="relative pt-40 pb-16 px-6 md:px-12 max-w-[1440px] mx-auto">
          <div className="relative z-10 max-w-4xl">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-on-surface-variant hover:text-on-surface text-sm font-mono mb-8 transition-colors"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              All Case Studies
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="mono-tag px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest">
                {study.category}
              </span>
              {study.client && (
                <span className="text-[10px] font-mono uppercase tracking-widest text-on-surface-variant">
                  {study.client}
                </span>
              )}
            </div>

            <h1 className="text-5xl md:text-7xl font-medium leading-[0.9] mb-6 font-headline text-on-surface">
              {study.title}
            </h1>
            <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">{study.excerpt}</p>
          </div>
        </section>

        {/* ── Cover Image ── */}
        {study.mainImage && (
          <section className="px-6 md:px-12 max-w-[1440px] mx-auto mb-16">
            <div className="overflow-hidden aspect-video relative border border-outline-variant">
              <Image
                src={urlFor(study.mainImage).width(1400).height(787).url()}
                alt={study.mainImage.alt || study.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </section>
        )}

        {/* ── Metrics bar ── */}
        {study.results?.length > 0 && (
          <section className="px-6 md:px-12 max-w-[1440px] mx-auto mb-16">
            <div className="mono-section p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
              {study.results.map((r, i) => (
                <div key={i} className="flex flex-col items-start gap-2">
                  {r.icon && <span className="material-symbols-outlined text-on-surface text-2xl">{r.icon}</span>}
                  {r.value && <p className="text-3xl font-medium font-headline text-on-surface">{r.value}</p>}
                  <p className="font-mono text-[10px] uppercase tracking-widest text-on-surface-variant">{r.label}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── Body ── */}
        <section className="px-6 md:px-12 max-w-[1440px] mx-auto pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

            {/* Main content */}
            <div className="lg:col-span-2 space-y-16">
              {study.challenge && (
                <div>
                  <h2 className="text-[10px] font-mono uppercase tracking-widest text-on-surface-variant mb-4">
                    The Challenge
                  </h2>
                  <p className="text-lg text-on-surface-variant leading-relaxed">{study.challenge}</p>
                </div>
              )}

              {study.solution?.length > 0 && (
                <div>
                  <h2 className="text-[10px] font-mono uppercase tracking-widest text-on-surface-variant mb-4">
                    The Solution
                  </h2>
                  <div className="prose-custom">
                    <PortableText value={study.solution} components={ptComponents} />
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Tech Stack */}
              {study.tags?.length > 0 && (
                <div className="mono-card p-6">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-on-surface-variant mb-4">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span key={tag} className="mono-tag px-3 py-1 text-xs font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Links */}
              {study.liveUrl && (
                <div className="mono-card p-6">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-on-surface-variant mb-4">
                    Links
                  </p>
                  <a
                    href={study.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-on-surface text-sm font-mono hover:underline"
                  >
                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                    View Live Site
                  </a>
                </div>
              )}

              {/* Date */}
              {study.publishedAt && (
                <div className="mono-card p-6">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-on-surface-variant mb-2">
                    Published
                  </p>
                  <p className="text-sm font-mono text-on-surface">
                    {new Date(study.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                  </p>
                </div>
              )}
            </aside>

          </div>
        </section>

        {/* ── Next CTA ── */}
        <section className="py-32 px-6 md:px-12">
          <div className="max-w-[1440px] mx-auto mono-section p-12 md:p-24 text-center relative overflow-hidden">
            <h2 className="text-5xl md:text-7xl font-medium font-headline mb-8 leading-[1]">
              Ready to work together?
            </h2>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link href="/case-studies" className="mono-button-secondary px-8 py-4 font-semibold">
                More Case Studies
              </Link>
              <Link href="/contact" className="mono-button-primary px-8 py-4 font-bold">
                Get in Touch
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
