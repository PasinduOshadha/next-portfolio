import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ExternalLink } from 'lucide-react'
import { client } from '@/sanity/lib/client'
import { PROJECTS_QUERY } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Projects — WordPress Work | Pasindu Oshadha',
  description:
    'Selected WordPress projects — performance builds, headless setups, WooCommerce stores, and custom plugins. All live, all shipped.',
}

interface Project {
  _id: string
  title: string
  slug?: string
  description?: string
  mainImage?: { asset?: { _ref: string }; alt?: string }
  category?: string
  tags?: string[]
  projectType?: string
  status?: string
  liveUrl?: string
  githubUrl?: string
}

export default async function ProjectsPage() {
  const projects: Project[] = await client.fetch(PROJECTS_QUERY)

  return (
    <main id="main-content" className="bg-surface min-h-screen">

      {/* Hero */}
      <section className="pt-40 pb-16 px-6 md:px-12 max-w-[1440px] mx-auto">
        <span className="font-mono text-xs text-muted uppercase tracking-widest mb-4 block">Portfolio</span>
        <h1 className="text-[2rem] md:text-5xl font-bold text-primary-text leading-tight tracking-tight mb-6"
          style={{ fontFamily: 'var(--font-manrope)' }}>
          Work that&apos;s live
          <br />
          and doing its job.
        </h1>
        <p className="text-muted text-base md:text-lg max-w-2xl leading-relaxed">
          Selected projects I&apos;ve shipped — most pulled from ongoing client work over the past few years.
          Descriptions focus on what the problem was and what changed after the build.
        </p>
      </section>

      {/* Projects grid */}
      <section className="py-8 px-6 md:px-12 max-w-[1440px] mx-auto">
        {projects.length === 0 ? (
          <p className="text-muted font-mono text-sm py-24 text-center">Projects coming soon.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project._id}
                className="bg-surface-mid rounded-lg overflow-hidden flex flex-col group hover:bg-surface-high transition-colors duration-200 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              >
                {/* Image strip */}
                <div className="h-[180px] overflow-hidden bg-surface-highest relative">
                  {project.mainImage?.asset ? (
                    <>
                      <Image
                        src={urlFor(project.mainImage).width(600).height(180).url()}
                        alt={project.mainImage.alt || project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute inset-0 flex items-center justify-center bg-surface/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                          aria-label={`Visit ${project.title}`}
                        >
                          <span className="flex items-center gap-2 bg-blue text-white px-4 py-2 rounded-md text-sm font-semibold">
                            <ExternalLink size={14} />
                            Visit Site
                          </span>
                        </a>
                      )}
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted/30">
                      <span className="text-4xl font-mono">{project.title?.charAt(0)}</span>
                    </div>
                  )}
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    {project.category && (
                      <span className="bg-purple/15 text-purple font-mono text-[11px] uppercase tracking-wider px-2 py-0.5 rounded-sm">
                        {project.category}
                      </span>
                    )}
                    {project.status && project.status !== 'completed' && (
                      <span className="bg-surface-highest text-muted font-mono text-[11px] uppercase tracking-wider px-2 py-0.5 rounded-sm">
                        {project.status}
                      </span>
                    )}
                  </div>

                  <h2 className="text-base font-semibold text-primary-text mb-2 leading-snug"
                    style={{ fontFamily: 'var(--font-manrope)' }}>
                    {project.title}
                  </h2>
                  <p className="text-muted text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="bg-surface-highest text-muted font-mono text-[11px] uppercase tracking-wide px-2 py-0.5 rounded-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center gap-4 pt-4 border-t border-outline/50">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-blue text-xs font-mono hover:underline"
                      >
                        <ExternalLink size={12} />
                        Live Site
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-muted text-xs font-mono hover:text-primary-text transition-colors"
                      >
                        <ExternalLink size={12} />
                        Source
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto bg-surface-low rounded-lg p-12 md:p-16 text-center border border-outline">
          <h2 className="text-2xl md:text-4xl font-bold text-primary-text mb-4 tracking-tight"
            style={{ fontFamily: 'var(--font-manrope)' }}>
            Got a project that needs the same treatment?
          </h2>
          <p className="text-muted text-base mb-8 max-w-xl mx-auto leading-relaxed">
            Tell me what you&apos;re working on. I&apos;ll give you a straight answer on whether I&apos;m the right fit.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-blue text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-dark transition-colors duration-200"
            >
              Start a Project
            </Link>
            <Link
              href="/services"
              className="border border-outline text-primary-text px-6 py-3 rounded-md font-semibold hover:bg-surface-mid transition-colors duration-200"
            >
              See Services
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
