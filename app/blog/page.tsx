import Image from 'next/image'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import { client } from '../../sanity/lib/client'
import { POSTS_QUERY } from '../../sanity/lib/queries'
import { urlFor } from '../../sanity/lib/image'
import type { Post } from '../../types/content'

export const revalidate = 60

export default async function BlogPage() {
  const posts = await client.fetch<Post[]>(POSTS_QUERY)

  const featured = posts.find((p: Post) => p.featured)
  const rest = posts.filter((p: Post) => !p.featured || p._id !== featured?._id)

  return (
    <>
      <Nav />
      <main className="relative">

        {/* ── Page Hero ── */}
        <section className="relative py-32 px-6 md:px-12 max-w-[1440px] mx-auto pt-40">
          <div className="relative z-10">
            <span className="font-mono text-on-surface-variant text-[11px] tracking-[0.22em] uppercase mb-4 block">
              Writing
            </span>
            <h1 className="text-6xl md:text-8xl font-medium leading-[0.9] mb-8 font-headline text-on-surface">
              The Engineering<br />Journal.
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed">
              Deep dives on WordPress architecture, Next.js performance, and the craft of building for scale.
            </p>
          </div>
        </section>

        <section className="px-6 md:px-12 max-w-[1440px] mx-auto pb-32">

          {posts.length === 0 ? (
            <div className="text-center py-24 text-on-surface-variant font-mono text-sm">
              Articles coming soon.
            </div>
          ) : (
            <>
              {/* ── Featured post ── */}
              {featured && (
                <Link
                  href={`/blog/${featured.slug}`}
                  className="group block mono-card overflow-hidden mb-16"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="aspect-video md:aspect-auto overflow-hidden relative min-h-[300px]">
                      {featured.mainImage?.asset ? (
                        <Image
                          src={urlFor(featured.mainImage).width(800).height(600).url()}
                          alt={featured.mainImage.alt || featured.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          priority
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-surface-container-lowest text-on-surface/20">
                          <span className="material-symbols-outlined text-6xl">article</span>
                        </div>
                      )}
                    </div>
                    <div className="p-10 md:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="mono-tag px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest">
                          {featured.category}
                        </span>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-on-surface-variant">
                          Featured
                        </span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-medium font-headline mb-4 text-on-surface">
                        {featured.title}
                      </h2>
                      <p className="text-on-surface-variant leading-relaxed mb-6">{featured.excerpt}</p>
                      <div className="flex items-center gap-4 text-xs font-mono text-on-surface-variant">
                        {featured.readTime && <span>{featured.readTime} min read</span>}
                        {featured.publishedAt && (
                          <span>
                            {new Date(featured.publishedAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                          </span>
                        )}
                        <span className="ml-auto flex items-center gap-1 text-on-surface group-hover:gap-2 transition-all">
                          Read Article
                          <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              )}

              {/* ── Posts grid ── */}
              {rest.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {rest.map((post) => (
                    <Link
                      key={post._id}
                      href={`/blog/${post.slug}`}
                      className="group mono-card overflow-hidden flex flex-col"
                    >
                      <div className="aspect-video overflow-hidden bg-surface-container-lowest relative">
                        {post.mainImage?.asset ? (
                          <Image
                            src={urlFor(post.mainImage).width(600).height(338).url()}
                            alt={post.mainImage.alt || post.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-on-surface/20">
                            <span className="material-symbols-outlined text-5xl">article</span>
                          </div>
                        )}
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <span className="mono-tag self-start px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest mb-4">
                          {post.category}
                        </span>
                        <h3 className="text-xl font-medium font-headline mb-2 text-on-surface flex-1">
                          {post.title}
                        </h3>
                        <p className="text-on-surface-variant text-sm leading-relaxed mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="mt-auto pt-4 border-t border-outline-variant/60 flex items-center justify-between text-xs font-mono text-on-surface-variant">
                          <div className="flex items-center gap-3">
                            {post.readTime && <span>{post.readTime} min read</span>}
                            {post.publishedAt && (
                              <span>
                                {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                              </span>
                            )}
                          </div>
                          <span className="material-symbols-outlined text-on-surface text-sm group-hover:translate-x-1 transition-transform">
                            arrow_forward
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}
        </section>

      </main>
      <Footer />
    </>
  )
}
