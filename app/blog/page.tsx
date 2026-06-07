import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import type { Metadata } from 'next'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Blog — WordPress Dev Notes | Pasindu Oshadha',
  description:
    'Notes on WordPress development, performance optimization, and headless builds — from someone doing this work every day.',
}

const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id, title, "slug": slug.current, excerpt, mainImage, publishedAt, category,
  "readTime": round(length(pt::text(body)) / 5 / 180)
}`

interface Post {
  _id: string
  title: string
  slug: string
  excerpt?: string
  mainImage?: { asset?: { _ref: string }; alt?: string }
  publishedAt?: string
  category?: string
  readTime?: number
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-AU', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

function PostCardSkeleton() {
  return (
    <div className="bg-surface-mid rounded-lg overflow-hidden animate-pulse">
      <div className="h-[180px] bg-surface-high" />
      <div className="p-6 flex flex-col gap-3">
        <div className="h-3 w-16 bg-surface-highest rounded-sm" />
        <div className="h-5 w-3/4 bg-surface-highest rounded-sm" />
        <div className="h-4 w-full bg-surface-highest rounded-sm" />
        <div className="h-4 w-2/3 bg-surface-highest rounded-sm" />
        <div className="h-3 w-24 bg-surface-highest rounded-sm mt-2" />
      </div>
    </div>
  )
}

function GridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: 6 }).map((_, i) => (
        <PostCardSkeleton key={i} />
      ))}
    </div>
  )
}

function CategoryBadge({ category }: { category?: string }) {
  if (!category) return null
  return (
    <span className="bg-purple/15 text-purple font-mono text-[11px] uppercase tracking-wider px-2 py-0.5 rounded-sm">
      {category}
    </span>
  )
}

function FeaturedCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-surface-mid rounded-lg overflow-hidden hover:bg-surface-high transition-colors duration-200 mb-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-[280px] md:h-auto overflow-hidden">
          {post.mainImage?.asset ? (
            <Image
              src={urlFor(post.mainImage).width(800).height(500).url()}
              alt={post.mainImage.alt || post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div className="w-full h-full bg-surface-high" />
          )}
        </div>
        <div className="p-8 md:p-10 flex flex-col justify-center gap-4">
          <div className="flex items-center gap-3">
            <CategoryBadge category={post.category} />
            <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
              Featured
            </span>
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-text leading-tight tracking-tight">
            {post.title}
          </h2>
          {post.excerpt && (
            <p className="text-muted text-sm leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>
          )}
          <div className="flex items-center gap-4 font-mono text-xs text-muted mt-2">
            {post.publishedAt && <span>{formatDate(post.publishedAt)}</span>}
            {post.readTime != null && post.readTime > 0 && (
              <span>{post.readTime} min read</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}

function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group bg-surface-mid rounded-lg overflow-hidden flex flex-col hover:bg-surface-high transition-colors duration-200"
    >
      <div className="relative h-[180px] overflow-hidden">
        {post.mainImage?.asset ? (
          <Image
            src={urlFor(post.mainImage).width(600).height(340).url()}
            alt={post.mainImage.alt || post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-surface-high" />
        )}
      </div>
      <div className="p-6 flex flex-col flex-1 gap-3">
        <CategoryBadge category={post.category} />
        <h3 className="font-display text-[18px] font-semibold text-primary-text leading-snug">
          {post.title}
        </h3>
        {post.excerpt && (
          <p className="text-muted text-sm leading-relaxed line-clamp-2 flex-1">
            {post.excerpt}
          </p>
        )}
        <div className="flex items-center gap-4 font-mono text-xs text-muted mt-auto pt-2">
          {post.publishedAt && <span>{formatDate(post.publishedAt)}</span>}
          {post.readTime != null && post.readTime > 0 && (
            <span>{post.readTime} min read</span>
          )}
        </div>
      </div>
    </Link>
  )
}

async function PostGrid() {
  const posts: Post[] = await client.fetch(POSTS_QUERY)

  if (posts.length === 0) {
    return (
      <p className="font-mono text-sm text-muted text-center py-24">
        No posts yet — check back soon.
      </p>
    )
  }

  const [featured, ...rest] = posts

  return (
    <>
      <FeaturedCard post={featured} />
      {rest.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      )}
    </>
  )
}

export default function BlogPage() {
  return (
    <main id="main-content" className="bg-surface min-h-screen">
      {/* Hero */}
      <section className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto pt-40">
        <span className="font-mono text-xs uppercase tracking-widest text-muted block mb-6">
          Writing
        </span>
        <h1 className="font-display text-[32px] md:text-5xl font-bold text-primary-text leading-tight tracking-tight mb-6">
          Notes from 10 years
          <br />
          of WordPress work.
        </h1>
        <p className="text-muted text-base md:text-lg max-w-2xl leading-relaxed">
          I write when I have something specific to say — not on a schedule. Most posts come from
          things I&apos;ve had to figure out the hard way, or from questions clients keep asking me.
        </p>
      </section>

      {/* Post Grid */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto pb-24">
        <Suspense fallback={<GridSkeleton />}>
          <PostGrid />
        </Suspense>
      </section>
    </main>
  )
}
