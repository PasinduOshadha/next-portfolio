'use client'

import { useState } from 'react'

const filters = ['All Projects', 'WordPress', 'WooCommerce', 'Headless / Next.js', 'Performance & SEO']

const projects = [
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrCTfu03BSPo9OfHFQvTvQYbyVIhG9dYA-euQG4GvRzuo2RT4AFfx_Sc3vqPtaBBbMciSnm-wmHQUomCMvQHgPrlC72YSNaja61KDFbzo4W2srYhU78EgI-BIa4Vr6gpSP3oIABeEthctZLDcqPo1PpOlsPMIE0hkyA68gNfq7MOqqNEkhuB8DaX7h66mYvBjejptirjvDTZ0_fI0h8fYmlrwbuXsD8-uUxi-E_hGvpI356_YyZ8peQxqyHfISWuNZBvA0u9tglw',
    alt: 'Enterprise Nexus Architecture dashboard',
    tag: 'Headless / Next.js',
    title: 'Enterprise Nexus Architecture',
    desc: 'Scalable headless commerce for a multi-national retail chain. Decoupled legacy backend for extreme front-end speed.',
    stack: ['Next.js 14', 'GraphQL', 'Vercel'],
    metrics: [
      { icon: 'bolt', label: '98 Lighthouse' },
      { icon: 'speed', label: '-60% Load Time' },
    ],
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0MLLHuZfXl0F5v08-DDoHrI_OyTa4vYfxnDr3wvqO1eZb9Ia-F8Jglf2wCaZgp0Mitpn3-vO5RYhHWFm40bpgef_m3P4GaHK4u-ZPhmbnLzXefWoT7bqaXoiMjskyHCWqSaiP2xGo_bmvpgtYSQ4vfwxSEmxh4pRUtqNJD0N-nTPkUBSsbHrqNnkHwvVFGDnO1xJ_BoFjMDlMcK3855BW7r5rtMp35mlIr1boBEXTSy8GQc478WUMMCgIT3FppEXc7HxdMt58xA',
    alt: 'Titan Gear Commerce store',
    tag: 'WooCommerce',
    title: 'Titan Gear Commerce',
    desc: 'High-performance custom theme for a global apparel brand processing 5,000+ orders daily.',
    stack: ['WooCommerce', 'PHP', 'MySQL'],
    metrics: [
      { icon: 'bolt', label: '+145% ROI' },
      { icon: 'speed', label: '-DB Latency' },
    ],
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxwH9DwQnmJ-VDEkd2c4CxOsoYsLtSHeG8ObztLQ01uVJZCBqqIT5O_NYem3iUs2yDcgqDWwiFHg2WJvCOYR_Td0zawnPISM4HUB9qiRAhNMgVLxSV2ogcNygOfKYKSjHHuu73l-G4iTsCIk1J5tutAGvFsZsV8AYNtQpfQ_8eFotfDKkYEXYE_wvk6JAWENi3NumAV9kJVPC2ID2FxVfgqjGgLgH4cTFRmiHQq3FE0bVOwvoQVY1dN6TFIUy3qOU1cFg2h05Q-A',
    alt: 'Core Web Vitals audit dashboard',
    tag: 'Performance & SEO',
    title: 'Core Web Vitals Audit',
    desc: 'Complete technical overhaul for a news conglomerate. LCP and CLS stabilization across 12 sub-domains.',
    stack: ['WordPress', 'SQL', 'Infrastructure'],
    metrics: [
      { icon: 'bolt', label: '0.8s LCP' },
      { icon: 'speed', label: '0.01 CLS' },
    ],
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDucZ20rOd1QphdTqb7VNeGkcXrRAQRSvCV8ubCOaiQkGWJbNd5WIYmYrbs0GYUcGFvGyO-evh1W3tFr0JqzURQAWfftp8H-_Ft6byVs-Fi3BUrAyZ9OM-a2XGKQqsGjRdyPRjmfL2tjLM72HbMSZfEIoJyPR264RAjJxUR4PnGK6lgBpkH3RhWIdY_iYVxwi5X89Gl11d45iai4ojqPk91g0EexJ4K66fxKZ9wan5miUFynywOJpVwul7wWge6p0cWrCuNR5b-qQ',
    alt: 'Semantic Search Optimization project',
    tag: 'WordPress',
    title: 'Semantic Search Optimization',
    desc: 'Custom JSON-LD schema generators and automated sitemap routing for 1M+ dynamic pages.',
    stack: ['WordPress', 'PHP', 'JSON-LD'],
    metrics: [
      { icon: 'bolt', label: '+42% Organic' },
      { icon: 'speed', label: '1M+ Pages' },
    ],
  },
]

export default function CaseStudiesGrid() {
  const [activeFilter, setActiveFilter] = useState('All Projects')

  const filtered = activeFilter === 'All Projects'
    ? projects
    : projects.filter((p) => p.tag === activeFilter)

  return (
    <section className="py-16 px-12 max-w-[1440px] mx-auto">

      {/* Filter bar */}
      <div className="flex flex-wrap gap-3 mb-16">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-5 py-2 rounded-full text-sm font-mono transition-all ${
              activeFilter === f
                ? 'bg-primary/20 text-primary border border-primary/30'
                : 'bg-surface-container text-on-surface-variant border border-transparent hover:border-outline-variant/30'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filtered.map((project) => (
          <div key={project.title} className="bg-surface-container-high rounded-xl overflow-hidden flex flex-col group">
            <div className="aspect-video overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={project.img}
                alt={project.alt}
              />
            </div>
            <div className="p-8 flex flex-col flex-1">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-[10px] font-mono font-bold uppercase tracking-widest">
                  {project.tag}
                </span>
                <span className="material-symbols-outlined text-on-surface/40 group-hover:text-primary transition-colors">north_east</span>
              </div>
              <h3 className="text-2xl font-bold font-headline mb-3">{project.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech) => (
                  <span key={tech} className="bg-surface-container text-on-surface-variant px-3 py-1 rounded-full text-xs font-mono">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto pt-6 border-t border-outline-variant/10 flex items-center justify-between">
                {project.metrics.map((m) => (
                  <div key={m.label} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-lg">{m.icon}</span>
                    <span className="font-mono text-[10px] uppercase tracking-wider">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
