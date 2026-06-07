import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PortableText, type PortableTextComponents } from '@portabletext/react'
import type { Metadata } from 'next'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { client } from '@/sanity/lib/client'
import { POST_QUERY, POST_SLUGS_QUERY } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'

export const revalidate = 60

interface Params { slug: string }

export async function generateStaticParams(): Promise<Params[]> {
  const slugs: { slug: string }[] = await client.fetch(POST_SLUGS_QUERY)
  return slugs.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params
  const post = await client.fetch(POST_QUERY, { slug })
  if (!post) return {}
  return { title: post.title, description: post.excerpt }
}

const ptComponents: PortableTextComponents = {
  types: {
    image: ({ value }: { value: { asset?: object; alt?: string; caption?: string } }) =>
      value?.asset ? (
        <figure className="my-10 rounded-lg overflow-hidden">
          <Image
            src={urlFor(value).width(1200).url()}
            alt={value.alt || ''}
            width={1200}
            height={675}
            className="w-full object-cover"
          />
          {value.caption && (
            <figcaption className="text-center text-xs font-mono text-muted mt-3 tracking-wider">
              {value.caption}
            </figcaption>
          )}
        </figure>
      ) : null,
    code: ({ value }: { value: { language?: string; code?: string } }) => (
      <div className="my-8 bg-surface-low rounded-lg overflow-hidden border border-outline">
        <div className="flex items-center gap-2 px-5 py-3 border-b border-outline">
          <span className="w-2.5 h-2.5 rounded-full bg-surface-highest" />
          <span className="w-2.5 h-2.5 rounded-full bg-surface-highest" />
          <span className="w-2.5 h-2.5 rounded-full bg-surface-highest" />
          {value.language && (
            <span className="ml-auto text-[10px] font-mono uppercase tracking-widest text-muted">
              {value.language}
            </span>
          )}
        </div>
        <pre className="p-6 overflow-x-auto">
          <code className="text-sm font-mono text-muted leading-relaxed">{value.code}</code>
        </pre>
      </div>
    ),
  },
  block: {
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold mt-12 mb-4 text-primary-text tracking-tight"
        style={{ fontFamily: 'var(--font-manrope)' }}>{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold mt-8 mb-3 text-primary-text"
        style={{ fontFamily: 'var(--font-manrope)' }}>{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="text-muted leading-relaxed mb-6 text-[1.0625rem]">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-blue pl-6 my-8 text-muted italic text-lg">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-none space-y-2 mb-6">{children}</ul>,
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 mb-6 text-muted">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex items-start gap-2 text-muted">
        <span className="text-blue mt-1.5 shrink-0">›</span>
        <span>{children}</span>
      </li>
    ),
    number: ({ children }) => <li className="text-muted">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="text-primary-text font-semibold">{children}</strong>,
    code: ({ children }) => (
      <code className="bg-surface-low text-purple font-mono text-sm px-1.5 py-0.5 rounded border border-outline">
        {children}
      </code>
    ),
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue underline underline-offset-2 hover:text-blue-dark transition-colors"
      >
        {children}
      </a>
    ),
  },
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const post = await client.fetch(POST_QUERY, { slug })

  if (!post) notFound()

  return (
    <main id="main-content" className="bg-surface min-h-screen">

      {/* Hero */}
      <section className="pt-40 pb-12 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-muted hover:text-primary-text text-sm font-mono mb-8 transition-colors"
          >
            <ArrowLeft size={14} />
            All Articles
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            {post.category && (
              <span className="bg-purple/15 text-purple font-mono text-[11px] uppercase tracking-wider px-2 py-0.5 rounded-sm">
                {post.category}
              </span>
            )}
            {post.readTime && (
              <span className="text-[11px] font-mono uppercase tracking-widest text-muted">
                {post.readTime} min read
              </span>
            )}
            {post.publishedAt && (
              <span className="text-[11px] font-mono uppercase tracking-widest text-muted">
                {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </span>
            )}
          </div>

          <h1 className="text-[2rem] md:text-5xl font-bold tracking-tight leading-tight mb-6 text-primary-text"
            style={{ fontFamily: 'var(--font-manrope)' }}>
            {post.title}
          </h1>
          <p className="text-lg text-muted leading-relaxed">{post.excerpt}</p>
        </div>
      </section>

      {/* Cover image */}
      {post.mainImage?.asset && (
        <section className="px-6 md:px-12 max-w-[1440px] mx-auto mb-12">
          <div className="rounded-lg overflow-hidden aspect-video relative">
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

      {/* Body */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">

          <article className="lg:col-span-3">
            {post.body?.length > 0 && (
              <PortableText value={post.body} components={ptComponents} />
            )}
          </article>

          <aside>
            {post.tags?.length > 0 && (
              <div className="bg-surface-mid rounded-lg p-6 sticky top-24">
                <p className="text-[10px] font-mono uppercase tracking-widest text-muted mb-4">Tags</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag: string) => (
                    <span key={tag} className="bg-surface-highest text-muted font-mono text-[11px] uppercase tracking-wide px-2 py-0.5 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </aside>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto bg-surface-low rounded-lg p-12 md:p-16 text-center border border-outline">
          <h2 className="text-2xl md:text-4xl font-bold text-primary-text mb-4 tracking-tight"
            style={{ fontFamily: 'var(--font-manrope)' }}>
            Want to work together?
          </h2>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Link
              href="/blog"
              className="border border-outline text-primary-text px-5 py-2.5 rounded-md font-semibold hover:bg-surface-mid transition-colors duration-200"
            >
              More Articles
            </Link>
            <Link
              href="/contact"
              className="bg-blue text-white px-5 py-2.5 rounded-md font-semibold hover:bg-blue-dark transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
