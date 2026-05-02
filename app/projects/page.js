import Image from 'next/image'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import { client } from '../../sanity/lib/client'
import { PROJECTS_QUERY } from '../../sanity/lib/queries'
import { urlFor } from '../../sanity/lib/image'

const STATUS_STYLES = {
  completed: 'bg-primary/20 text-primary',
  'in-progress': 'bg-tertiary/20 text-tertiary',
  archived: 'bg-surface-container-highest text-on-surface-variant',
}

const CATEGORY_ICONS = {
  'WordPress': 'web',
  'WooCommerce': 'shopping_cart',
  'Headless / Next.js': 'bolt',
  'Performance & SEO': 'speed',
  'API Integration': 'api',
  'Open Source': 'hub',
  'Side Project': 'science',
}

export const revalidate = 60

export default async function ProjectsPage() {
  const projects = await client.fetch(PROJECTS_QUERY)
  const websites = projects.filter(p => p.projectType === 'website' || !p.projectType)
  const repos = projects.filter(p => p.projectType === 'repo')

  return (
    <>
      <Nav />
      <main className="relative">

        {/* ── Page Hero ── */}
        <section className="relative py-32 px-12 max-w-[1440px] mx-auto pt-40">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-secondary-container/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="relative z-10">
            <span className="font-mono text-secondary text-sm tracking-widest uppercase mb-4 block">
              Open Source &amp; Side Projects
            </span>
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-8 font-headline text-on-surface">
              Things I&apos;ve Built.
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed">
              Personal projects, experiments, and open-source contributions from my engineering lab.
            </p>
          </div>
        </section>

        {/* ── Websites & Apps ── */}
        {websites.length > 0 && (
          <section className="py-16 px-12 max-w-[1440px] mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <span className="material-symbols-outlined text-primary text-2xl">monitor</span>
              <div>
                <h2 className="text-2xl font-bold font-headline text-on-surface">Websites &amp; Apps</h2>
                <p className="text-on-surface-variant text-sm font-mono">Public-facing products with live UI</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {websites.map((project) => (
                <div
                  key={project._id}
                  className="bg-surface-container-high rounded-xl overflow-hidden flex flex-col group hover:bg-surface-container-highest transition-colors duration-200"
                >
                  {/* Screenshot */}
                  <div className="aspect-video overflow-hidden bg-surface-container-lowest relative">
                    {project.mainImage ? (
                      <>
                        <Image
                          src={urlFor(project.mainImage).width(600).height(338).url()}
                          alt={project.mainImage.alt || project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute inset-0 flex items-center justify-center bg-surface/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                          >
                            <span className="flex items-center gap-2 bg-primary text-on-primary px-5 py-2.5 rounded-lg font-bold text-sm">
                              <span className="material-symbols-outlined text-base">open_in_new</span>
                              Visit Site
                            </span>
                          </a>
                        )}
                      </>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-on-surface/20">
                        <span className="material-symbols-outlined text-5xl">web</span>
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-4 flex-wrap">
                      {project.category && (
                        <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-[10px] font-mono font-bold uppercase tracking-widest">
                          {project.category}
                        </span>
                      )}
                      {project.status && (
                        <span className={`px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest ${STATUS_STYLES[project.status] || ''}`}>
                          {project.status}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold font-headline mb-2 text-on-surface">{project.title}</h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

                    {project.tags?.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tech) => (
                          <span key={tech} className="bg-surface-container text-on-surface-variant px-3 py-1 rounded-full text-xs font-mono">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="mt-auto pt-4 border-t border-outline-variant/10 flex items-center gap-4">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-primary text-xs font-mono hover:underline"
                        >
                          <span className="material-symbols-outlined text-sm">open_in_new</span>
                          Live Site
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-on-surface-variant text-xs font-mono hover:text-on-surface transition-colors"
                        >
                          <span className="material-symbols-outlined text-sm">code</span>
                          Source
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── Repositories ── */}
        {repos.length > 0 && (
          <section className="py-16 px-12 max-w-[1440px] mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <span className="material-symbols-outlined text-secondary text-2xl">terminal</span>
              <div>
                <h2 className="text-2xl font-bold font-headline text-on-surface">Repositories</h2>
                <p className="text-on-surface-variant text-sm font-mono">Plugins, tools &amp; backend projects</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {repos.map((project) => (
                <div
                  key={project._id}
                  className="bg-surface-container-high rounded-xl p-6 flex flex-col md:flex-row gap-6 group hover:bg-surface-container-highest transition-colors duration-200"
                >
                  {/* Icon block */}
                  <div className="shrink-0 w-14 h-14 rounded-xl bg-surface-container-lowest flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl text-secondary">
                      {CATEGORY_ICONS[project.category] || 'code'}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-lg font-bold font-headline text-on-surface">{project.title}</h3>
                      {project.status && (
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-widest ${STATUS_STYLES[project.status] || ''}`}>
                          {project.status}
                        </span>
                      )}
                      {project.category && (
                        <span className="px-2 py-0.5 rounded-full bg-secondary/20 text-secondary text-[10px] font-mono uppercase tracking-widest">
                          {project.category}
                        </span>
                      )}
                    </div>
                    <p className="text-on-surface-variant text-sm leading-relaxed mb-4">{project.description}</p>
                    {project.tags?.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tech) => (
                          <span key={tech} className="bg-surface-container text-on-surface-variant px-3 py-1 rounded-full text-xs font-mono">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Links */}
                  <div className="shrink-0 flex md:flex-col gap-3 items-start md:items-end justify-start md:justify-center">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-surface-container text-on-surface px-4 py-2 rounded-lg text-xs font-mono font-bold hover:bg-surface-container-highest transition-colors"
                      >
                        <span className="material-symbols-outlined text-sm">hub</span>
                        View on GitHub
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-primary text-xs font-mono hover:underline"
                      >
                        <span className="material-symbols-outlined text-sm">open_in_new</span>
                        Live
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Empty state */}
        {projects.length === 0 && (
          <section className="py-24 px-12 max-w-[1440px] mx-auto text-center text-on-surface-variant font-mono text-sm">
            Projects coming soon.
          </section>
        )}

        {/* ── CTA ── */}
        <section className="py-32 px-12">
          <div className="max-w-[1440px] mx-auto bg-gradient-to-br from-surface-container-high to-surface rounded-3xl p-12 md:p-24 text-center border border-outline-variant/10 relative overflow-hidden">
            <div className="absolute -bottom-24 -right-24 w-[400px] h-[400px] bg-primary-container/10 rounded-full blur-[100px] pointer-events-none" />
            <h2 className="text-5xl md:text-7xl font-extrabold font-headline tracking-tighter mb-8 leading-[1]">
              Let&apos;s build something together.
            </h2>
            <p className="text-xl text-on-surface-variant max-w-2xl mx-auto mb-12">
              Have an idea or a technical challenge? I&apos;d love to hear about it.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-br from-primary to-primary-container text-on-primary-container px-10 py-5 rounded-lg text-xl font-bold hover:scale-105 transition-transform duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
