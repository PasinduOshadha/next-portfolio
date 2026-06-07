'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/sanity/lib/image'

const filters = ['All', 'WordPress', 'WooCommerce', 'Headless / Next.js', 'Performance & SEO', 'API Integration']

interface Result { label?: string; value?: string; icon?: string }
interface CaseStudy {
  _id: string
  title: string
  slug: string
  client?: string
  category?: string
  excerpt?: string
  mainImage?: { asset?: object; alt?: string }
  tags?: string[]
  results?: Result[]
}

export default function CaseStudiesGrid({ caseStudies }: { caseStudies: CaseStudy[] }) {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? caseStudies
    : caseStudies.filter((c) => c.category === activeFilter)

  return (
    <section className="py-16 px-12 max-w-[1440px] mx-auto">
      <div className="flex flex-wrap gap-3 mb-16">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-5 py-2 rounded-md text-sm font-mono transition-colors duration-200 ${
              activeFilter === f
                ? 'bg-blue/20 text-blue border border-blue/30'
                : 'bg-surface-mid text-muted border border-outline hover:text-primary-text'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-24 text-muted font-mono text-sm">
          No case studies in this category yet.
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filtered.map((item) => (
          <Link
            key={item._id}
            href={`/case-studies/${item.slug}`}
            className="bg-surface-mid rounded-lg overflow-hidden flex flex-col group hover:bg-surface-high transition-colors duration-200"
          >
            <div className="aspect-video overflow-hidden bg-surface-highest relative">
              {item.mainImage?.asset ? (
                <Image
                  src={urlFor(item.mainImage).width(800).height(450).url()}
                  alt={item.mainImage.alt || item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted/30">
                  <span className="text-4xl font-mono">{item.title?.charAt(0)}</span>
                </div>
              )}
            </div>

            <div className="p-8 flex flex-col flex-1">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-purple/15 text-purple font-mono text-[11px] uppercase tracking-wider px-2 py-0.5 rounded-sm">
                  {item.category}
                </span>
              </div>
              {item.client && (
                <p className="text-[10px] font-mono uppercase tracking-widest text-muted mb-2">{item.client}</p>
              )}
              <h3 className="text-xl font-bold mb-3 text-primary-text" style={{ fontFamily: 'var(--font-manrope)' }}>
                {item.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-6">{item.excerpt}</p>
              {item.tags && item.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.map((tech) => (
                    <span key={tech} className="bg-surface-highest text-muted font-mono text-[11px] uppercase tracking-wide px-2 py-0.5 rounded-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              {item.results && item.results.length > 0 && (
                <div className="mt-auto pt-6 border-t border-outline flex flex-wrap gap-6">
                  {item.results.slice(0, 3).map((r, i) => (
                    <div key={i}>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-muted">{r.label}</p>
                      {r.value && <p className="font-mono text-xs text-blue font-bold">{r.value}</p>}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
