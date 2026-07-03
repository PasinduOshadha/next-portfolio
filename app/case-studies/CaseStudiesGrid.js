'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '../../sanity/lib/image'

const filters = ['All', 'WordPress', 'WooCommerce', 'Headless / Next.js', 'Performance & SEO', 'API Integration']

export default function CaseStudiesGrid({ caseStudies }) {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? caseStudies
    : caseStudies.filter((c) => c.category === activeFilter)

  return (
    <section className="py-16 px-6 md:px-12 max-w-[1440px] mx-auto">

      {/* Filter bar */}
      <div className="flex flex-wrap gap-3 mb-16">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-5 py-2 text-sm font-mono border transition-all duration-200 ${
              activeFilter === f
                ? 'bg-surface text-on-surface border-on-surface'
                : 'bg-surface-container-lowest text-on-surface-variant border-outline-variant hover:text-on-surface'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="text-center py-24 text-on-surface-variant font-mono text-sm">
          No case studies in this category yet.
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filtered.map((item) => (
          <Link
            key={item._id}
            href={`/case-studies/${item.slug}`}
            className="mono-card overflow-hidden flex flex-col group"
          >
            {/* Cover image */}
            <div className="aspect-video overflow-hidden bg-surface-container-lowest relative">
              {item.mainImage ? (
                <Image
                  src={urlFor(item.mainImage).width(800).height(450).url()}
                  alt={item.mainImage.alt || item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-on-surface/20">
                  <span className="material-symbols-outlined text-6xl">image</span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-1">
              <div className="flex items-center justify-between mb-4">
                <span className="mono-tag px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest">
                  {item.category}
                </span>
                <span className="material-symbols-outlined text-on-surface/40 group-hover:text-on-surface transition-colors">
                  north_east
                </span>
              </div>

              {item.client && (
                <p className="text-[10px] font-mono uppercase tracking-widest text-on-surface-variant mb-2">
                  {item.client}
                </p>
              )}

              <h3 className="text-2xl font-bold font-headline mb-3 text-on-surface">{item.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">{item.excerpt}</p>

              {/* Tech stack */}
              {item.tags?.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.map((tech) => (
                    <span key={tech} className="mono-tag px-3 py-1 text-xs font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* Metrics */}
              {item.results?.length > 0 && (
                <div className="mt-auto pt-6 border-t border-outline-variant/60 flex flex-wrap gap-6">
                  {item.results.slice(0, 3).map((r, i) => (
                    <div key={i} className="flex items-center gap-2">
                      {r.icon && (
                        <span className="material-symbols-outlined text-on-surface text-lg">{r.icon}</span>
                      )}
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-wider text-on-surface-variant">{r.label}</p>
                        {r.value && <p className="font-mono text-xs text-on-surface font-bold">{r.value}</p>}
                      </div>
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
