import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'
import type { PortableTextReactComponents } from '@portabletext/react'
import type { ReactNode } from 'react'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
import { client } from '../../../sanity/lib/client'
import { POST_QUERY, POST_SLUGS_QUERY } from '../../../sanity/lib/queries'
import { urlFor } from '../../../sanity/lib/image'
import type { Post, SanityImage, SlugParam } from '../../../types/content'

interface BlogPostPageProps {
  params: Promise<SlugParam>
}

export const revalidate = 60

export async function generateStaticParams() {
  const slugs = await client.fetch<SlugParam[]>(POST_SLUGS_QUERY)
  return slugs.map((s: SlugParam) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await client.fetch<Post | null>(POST_QUERY, { slug })
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
  }
}

const ptComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }: { value: SanityImage }) => value?.asset ? (
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
    ) : null,
    code: ({ value }: { value: { code?: string; language?: string } }) => (
      <div className="my-8 bg-surface-container-lowest border border-outline-variant overflow-hidden">
        <div className="flex items-center gap-2 px-6 py-3 border-b border-outline-variant/60">
          <div className="w-3 h-3 bg-surface-container-highest" />
          <div className="w-3 h-3 bg-surface-container-high" />
          <div className="w-3 h-3 bg-on-surface" />
          {value.language && (
            <span className="ml-auto text-[10px] font-mono uppercase tracking-widest text-on-surface-variant">
              {value.language}
            </span>
          )}
        </div>
        <pre className="p-6 overflow-x-auto">
          <code className="text-sm font-mono text-on-surface-variant leading-relaxed">{value.code}</code>
        </pre>
      </div>
    ),
  },
  block: {
    h2: ({ children }: { children?: ReactNode }) => (
      <h2 className="text-3xl font-medium font-headline mt-12 mb-4 text-on-surface">{children}</h2>
    ),
    h3: ({ children }: { children?: ReactNode }) => (
      <h3 className="text-2xl font-medium font-headline mt-8 mb-3 text-on-surface">{children}</h3>
    ),
    normal: ({ children }: { children?: ReactNode }) => (
      <p className="text-on-surface-variant leading-relaxed mb-6 text-[1.0625rem]">{children}</p>
    ),
    blockquote: ({ children }: { children?: ReactNode }) => (
      <blockquote className="border-l-2 border-on-surface pl-6 my-8 text-on-surface-variant italic text-lg">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: { children?: ReactNode }) => <ul className="list-none space-y-2 mb-6">{children}</ul>,
    number: ({ children }: { children?: ReactNode }) => (
      <ol className="list-decimal list-inside space-y-2 mb-6 text-on-surface-variant">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: ReactNode }) => (
      <li className="flex items-start gap-2 text-on-surface-variant">
        <span className="material-symbols-outlined text-on-surface text-sm mt-1">arrow_forward</span>
        <span>{children}</span>
      </li>
    ),
  },
  marks: {
    strong: ({ children }: { children?: ReactNode }) => <strong className="text-on-surface font-semibold">{children}</strong>,
    code: ({ children }: { children?: ReactNode }) => (
      <code className="bg-surface-container-lowest text-on-surface font-mono text-sm px-1.5 py-0.5">
        {children}
      </code>
    ),
    link: ({ value, children }: { value?: { href?: string }; children?: ReactNode }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-on-surface underline underline-offset-2 hover:text-on-surface-variant transition-colors"
      >
        {children}
      </a>
    ),
  },
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await client.fetch<Post | null>(POST_QUERY, { slug })

  if (!post) notFound()

  return (
    <>
      <Nav />
      <main className="relative">

        {/* ── Hero ── */}
        <section className="relative pt-40 pb-16 px-6 md:px-12 max-w-[1440px] mx-auto">
          <div className="relative z-10 max-w-3xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-on-surface-variant hover:text-on-surface text-sm font-mono mb-8 transition-colors"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              All Articles
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              {post.category && (
                <span className="mono-tag px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest">
                  {post.category}
                </span>
              )}
              {post.readTime && (
                <span className="text-[10px] font-mono uppercase tracking-widest text-on-surface-variant">
                  {post.readTime} min read
                </span>
              )}
              {post.publishedAt && (
                <span className="text-[10px] font-mono uppercase tracking-widest text-on-surface-variant">
                  {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-6xl font-medium leading-[1.05] mb-6 font-headline text-on-surface">
              {post.title}
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed">{post.excerpt}</p>
          </div>
        </section>

        {/* ── Cover Image ── */}
        {post.mainImage?.asset && (
          <section className="px-6 md:px-12 max-w-[1440px] mx-auto mb-16">
            <div className="overflow-hidden aspect-video relative border border-outline-variant">
              <Image
                src={urlFor(post.mainImage).width(1400).height(787).url()}
                alt={post.mainImage.alt || post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </section>
        )}

        {/* ── Body ── */}
        <section className="px-6 md:px-12 max-w-[1440px] mx-auto pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">

            {/* Article */}
            <article className="lg:col-span-3">
              {post.body && post.body.length > 0 && (
                <PortableText value={post.body as never} components={ptComponents} />
              )}
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mono-card p-6 sticky top-24">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-on-surface-variant mb-4">
                    Tags
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag: string) => (
                      <span key={tag} className="mono-tag px-3 py-1 text-xs font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </aside>

          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-32 px-6 md:px-12">
          <div className="max-w-[1440px] mx-auto mono-section p-12 md:p-24 text-center relative overflow-hidden">
            <h2 className="text-4xl md:text-6xl font-medium font-headline mb-6 leading-[1]">
              Want to work with me?
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/blog" className="mono-button-secondary px-8 py-4 font-semibold">
                More Articles
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
