import type { Metadata } from 'next'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'About — Pasindu Oshadha, Senior WordPress Engineer',
  description:
    'Senior WordPress engineer who understands the business before touching the code. 10+ years with agencies in AU, UK, and US. Based in Colombo, works remotely.',
}

// ─── Data ────────────────────────────────────────────────────────────────────

const coreSkills = [
  'WordPress (custom themes, plugins, VIP)',
  'WooCommerce',
  'PHP (OOP, REST API, hooks/filters)',
  'MySQL / query optimization',
  'Next.js + React',
  'WPGraphQL / REST API',
  'Tailwind CSS',
]

const toolSkills = [
  'Git / GitHub / GitLab',
  'Docker (local dev environments)',
  'Cloudflare (CDN, workers, DNS)',
  'WP Rocket, LiteSpeed Cache, Redis',
  'Google Search Console / Analytics',
  'Figma (design handoff, not design)',
  'Sanity CMS',
  'Vercel / Kinsta / WP Engine',
]

const timeline: Array<{ years: string; company: string; description: string }> = [
  {
    years: '2022 – Present',
    company: 'CeylonDevs LLC',
    description:
      'Senior developer. Client projects across multiple industries — real estate, e-commerce, media, hospitality. Agency subcontracting and direct client work in parallel.',
  },
  {
    years: '2020 – 2022',
    company: 'Australia-based Digital Agency',
    description:
      "Full-time remote role. WordPress development and maintenance for the agency's client portfolio, primarily e-commerce and media clients.",
  },
  {
    years: '2015 – 2020',
    company: 'Freelance / Local Agencies',
    description:
      'Built the foundation — client management, project delivery, and learning what makes a site actually work in production, not just in development.',
  },
]

const values: Array<{ title: string; body: string }> = [
  {
    title: 'Technology decisions follow business decisions.',
    body: "Before I recommend a solution, I want to understand what the business needs to achieve. Whether that's headless WordPress or a standard build, custom code or a plugin, a full rebuild or a targeted optimization — the right answer depends on the business context, not a technical preference. I'll tell you what I think the right call is and why.",
  },
  {
    title: "I prefer custom code — when it's warranted.",
    body: "Not as a default, but because plugins are often the wrong tool for a specific problem. When a plugin is the right call, I'll say so. When building from scratch is the better investment for the business, I'll make the case for it.",
  },
  {
    title: 'I document what I build.',
    body: "Code I write should be readable by the next developer — or by you, 18 months from now, when I'm not on retainer. That means inline comments where logic isn't obvious, README files for custom functionality, and Loom walkthroughs for complex handoffs.",
  },
  {
    title: "I don't disappear mid-project.",
    body: "The most common complaint I hear about other developers is communication. I send weekly updates on ongoing work, I flag blockers early, and I don't ghost. That's a low bar, but apparently it matters.",
  },
]

// ─── Skill Pill ──────────────────────────────────────────────────────────────

function SkillPill({ label }: { label: string }) {
  return (
    <span className="bg-surface-high text-primary-text font-mono text-xs uppercase tracking-wide px-3 py-1.5 rounded-sm">
      {label}
    </span>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <main id="main-content">
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="bg-surface py-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-muted mb-6 inline-block">
            About me
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-text leading-tight tracking-tight mb-6">
            I understand the business.
            <br />
            Then I engineer the right solution.
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            I'm Pasindu Oshadha — a senior WordPress engineer based in Colombo, Sri Lanka. I've
            spent 10 years working with agencies in Australia, UK, and the US — not just building
            what they ask for, but understanding what their clients' businesses need to grow, then
            making the right engineering decisions to get there.
          </p>
        </div>
      </section>

      {/* ── Bio ───────────────────────────────────────────────────────── */}
      <section className="bg-surface-low py-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-primary-text tracking-tight mb-8">
            Background
          </h2>
          <div className="space-y-6 text-base text-muted leading-relaxed">
            <p>
              I got into WordPress because it was the tool clients needed. But the most valuable
              thing I learned over the past decade isn't a framework or a stack — it's how to
              understand what a business actually needs before touching a codebase. What's the
              growth constraint? What's the conversion bottleneck? What does the site need to do
              for the business six months from now? The technical decisions follow from those
              answers.
            </p>
            <p>
              On the engineering side, I've worked across the full stack: custom theme and plugin
              development, REST API and WPGraphQL integrations, server configuration, CI/CD
              pipelines, database optimization, and technical SEO. React and Next.js are a regular
              part of my work — mostly for headless WordPress builds, but also for standalone
              applications.
            </p>
            <p>
              The combination matters. An agency gets a developer who can scope a build correctly
              the first time, flag when a spec is going in the wrong direction, and deliver work
              that holds up — technically and commercially.
            </p>
            <p>
              For the past two years I've been focused on international agency work. The time-zone
              overlap with Australia and the UK works well from Colombo, and the kind of complex,
              high-stakes projects those agencies run is exactly where I do my best work.
            </p>
            <p>
              I'm planning to relocate to Australia or New Zealand in the next year or two. If
              you're an AU/NZ agency reading this — that's intentional.
            </p>
          </div>
        </div>
      </section>

      {/* ── Skills ────────────────────────────────────────────────────── */}
      <section className="bg-surface py-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-primary-text tracking-tight mb-10">
            What I work with
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted mb-4">Core</p>
              <div className="flex flex-wrap gap-2">
                {coreSkills.map((skill) => (
                  <SkillPill key={skill} label={skill} />
                ))}
              </div>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted mb-4">
                Tools &amp; Infrastructure
              </p>
              <div className="flex flex-wrap gap-2">
                {toolSkills.map((skill) => (
                  <SkillPill key={skill} label={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Timeline ──────────────────────────────────────────────────── */}
      <section className="bg-surface-low py-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-primary-text tracking-tight mb-10">
            Where I've worked
          </h2>
          <ol className="relative border-l border-outline pl-8 space-y-10">
            {timeline.map((entry) => (
              <li key={entry.company} className="relative">
                {/* dot */}
                <span
                  aria-hidden="true"
                  className="absolute -left-[2.125rem] top-1 w-2.5 h-2.5 rounded-full bg-blue border-2 border-surface-low"
                />
                <p className="font-mono text-xs uppercase tracking-widest text-muted mb-1">
                  {entry.years}
                </p>
                <h3 className="text-lg font-semibold text-primary-text mb-2">{entry.company}</h3>
                <p className="text-base text-muted leading-relaxed">{entry.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Values ────────────────────────────────────────────────────── */}
      <section className="bg-surface py-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-primary-text tracking-tight mb-10">
            How I approach work
          </h2>
          <div className="space-y-10">
            {values.map((value, index) => (
              <div key={index} className="grid md:grid-cols-[auto_1fr] gap-6">
                <span
                  aria-hidden="true"
                  className="font-mono text-xs uppercase tracking-widest text-blue pt-0.5 whitespace-nowrap"
                >
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-primary-text mb-3">{value.title}</h3>
                  <p className="text-base text-muted leading-relaxed">{value.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
