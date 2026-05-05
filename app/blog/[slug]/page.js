import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
import { client } from '../../../sanity/lib/client'
import { POST_QUERY, POST_SLUGS_QUERY } from '../../../sanity/lib/queries'
import { urlFor } from '../../../sanity/lib/image'

export const revalidate = 60

export async function generateStaticParams() {
  const slugs = await client.fetch(POST_SLUGS_QUERY)
  return slugs.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = await client.fetch(POST_QUERY, { slug })
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
  }
}

const ptComponents = {
  types: {
    image: ({ value }) => value?.asset ? (
      <figure className="my-10 rounded-xl overflow-hidden">
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
    code: ({ value }) => (
      <div className="my-8 bg-surface-container-lowest rounded-xl overflow-hidden">
        <div className="flex items-center gap-2 px-6 py-3 border-b border-outline-variant/10">
          <div className="w-3 h-3 rounded-full bg-error/20" />
          <div className="w-3 h-3 rounded-full bg-tertiary/20" />
          <div className="w-3 h-3 rounded-full bg-primary/20" />
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
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold font-headline mt-12 mb-4 text-on-surface tracking-tight">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold font-headline mt-8 mb-3 text-on-surface">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="text-on-surface-variant leading-relaxed mb-6 text-[1.0625rem]">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-primary pl-6 my-8 text-on-surface-variant italic text-lg">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-none space-y-2 mb-6">{children}</ul>,
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 mb-6 text-on-surface-variant">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex items-start gap-2 text-on-surface-variant">
        <span className="material-symbols-outlined text-primary text-sm mt-1">arrow_forward</span>
        <span>{children}</span>
      </li>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="text-on-surface font-semibold">{children}</strong>,
    code: ({ children }) => (
      <code className="bg-surface-container-lowest text-secondary font-mono text-sm px-1.5 py-0.5 rounded">
        {children}
      </code>
    ),
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
      >
        {children}
      </a>
    ),
  },
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const post = await client.fetch(POST_QUERY, { slug })

  if (!post) notFound()

  return (
    <>
      <Nav />
      <main className="relative">

        {/* ── Hero ── */}
        <section className="relative pt-40 pb-16 px-12 max-w-[1440px] mx-auto">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary-container/10 rounded-full blur-[120px] pointer-events-none" />
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
                <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-[10px] font-mono font-bold uppercase tracking-widest">
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

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-[1.05] mb-6 font-headline text-on-surface">
              {post.title}
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed">{post.excerpt}</p>
          </div>
        </section>

        {/* ── Cover Image ── */}
        {post.mainImage?.asset && (
          <section className="px-12 max-w-[1440px] mx-auto mb-16">
            <div className="rounded-2xl overflow-hidden aspect-video relative">
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
        <section className="px-12 max-w-[1440px] mx-auto pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">

            {/* Article */}
            <article className="lg:col-span-3">
              {post.body?.length > 0 && (
                <PortableText value={post.body} components={ptComponents} />
              )}
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Tags */}
              {post.tags?.length > 0 && (
                <div className="bg-surface-container-high rounded-xl p-6 sticky top-24">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-on-surface-variant mb-4">
                    Tags
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="bg-surface-container text-on-surface-variant px-3 py-1 rounded-full text-xs font-mono">
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
        <section className="py-32 px-12">
          <div className="max-w-[1440px] mx-auto bg-gradient-to-br from-surface-container-high to-surface rounded-3xl p-12 md:p-24 text-center border border-outline-variant/10 relative overflow-hidden">
            <div className="absolute -bottom-24 -right-24 w-[400px] h-[400px] bg-primary-container/10 rounded-full blur-[100px] pointer-events-none" />
            <h2 className="text-4xl md:text-6xl font-extrabold font-headline tracking-tighter mb-6 leading-[1]">
              Want to work with me?
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/blog"
                className="inline-block bg-surface-container-high/40 border border-outline-variant/20 backdrop-blur-md text-on-surface px-8 py-4 rounded-lg font-semibold hover:bg-surface-container-high transition-colors"
              >
                More Articles
              </Link>
              <Link
                href="/contact"
                className="inline-block bg-gradient-to-br from-primary to-primary-container text-on-primary-container px-8 py-4 rounded-lg font-bold hover:scale-105 transition-transform duration-200"
              >
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
