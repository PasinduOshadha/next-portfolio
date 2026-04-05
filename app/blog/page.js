import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

const posts = [
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrCTfu03BSPo9OfHFQvTvQYbyVIhG9dYA-euQG4GvRzuo2RT4AFfx_Sc3vqPtaBBbMciSnm-wmHQUomCMvQHgPrlC72YSNaja61KDFbzo4W2srYhU78EgI-BIa4Vr6gpSP3oIABeEthctZLDcqPo1PpOlsPMIE0hkyA68gNfq7MOqqNEkhuB8DaX7h66mYvBjejptirjvDTZ0_fI0h8fYmlrwbuXsD8-uUxi-E_hGvpI356_YyZ8peQxqyHfISWuNZBvA0u9tglw',
    alt: 'Achieving a 99 Lighthouse Score article',
    category: 'Performance & SEO',
    title: 'Achieving a 99 Lighthouse Score: A Case Study',
    excerpt: 'The step-by-step process behind optimizing Core Web Vitals on a high-traffic news site.',
    readTime: '8 min read',
    date: 'Mar 2025',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0MLLHuZfXl0F5v08-DDoHrI_OyTa4vYfxnDr3wvqO1eZb9Ia-F8Jglf2wCaZgp0Mitpn3-vO5RYhHWFm40bpgef_m3P4GaHK4u-ZPhmbnLzXefWoT7bqaXoiMjskyHCWqSaiP2xGo_bmvpgtYSQ4vfwxSEmxh4pRUtqNJD0N-nTPkUBSsbHrqNnkHwvVFGDnO1xJ_BoFjMDlMcK3855BW7r5rtMp35mlIr1boBEXTSy8GQc478WUMMCgIT3FppEXc7HxdMt58xA',
    alt: 'GraphQL vs REST article',
    category: 'Architecture',
    title: 'GraphQL vs REST in Headless WordPress: The Definitive Guide',
    excerpt: 'When to use WPGraphQL, when to use the REST API, and how to design your data layer.',
    readTime: '12 min read',
    date: 'Feb 2025',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxwH9DwQnmJ-VDEkd2c4CxOsoYsLtSHeG8ObztLQ01uVJZCBqqIT5O_NYem3iUs2yDcgqDWwiFHg2WJvCOYR_Td0zawnPISM4HUB9qiRAhNMgVLxSV2ogcNygOfKYKSjHHuu73l-G4iTsCIk1J5tutAGvFsZsV8AYNtQpfQ_8eFotfDKkYEXYE_wvk6JAWENi3NumAV9kJVPC2ID2FxVfgqjGgLgH4cTFRmiHQq3FE0bVOwvoQVY1dN6TFIUy3qOU1cFg2h05Q-A',
    alt: 'WooCommerce at Scale article',
    category: 'WooCommerce',
    title: 'WooCommerce at Scale: Lessons from 5,000 Daily Orders',
    excerpt: 'Database optimizations, caching strategies, and custom order flows for high-volume stores.',
    readTime: '10 min read',
    date: 'Jan 2025',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDucZ20rOd1QphdTqb7VNeGkcXrRAQRSvCV8ubCOaiQkGWJbNd5WIYmYrbs0GYUcGFvGyO-evh1W3tFr0JqzURQAWfftp8H-_Ft6byVs-Fi3BUrAyZ9OM-a2XGKQqsGjRdyPRjmfL2tjLM72HbMSZfEIoJyPR264RAjJxUR4PnGK6lgBpkH3RhWIdY_iYVxwi5X89Gl11d45iai4ojqPk91g0EexJ4K66fxKZ9wan5miUFynywOJpVwul7wWge6p0cWrCuNR5b-qQ',
    alt: 'Next.js App Router migration guide',
    category: 'Next.js',
    title: 'Next.js App Router: A Migration Guide for WordPress Developers',
    excerpt: 'Everything you need to know to move your headless front-end to the Next.js 14 App Router.',
    readTime: '15 min read',
    date: 'Dec 2024',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrCTfu03BSPo9OfHFQvTvQYbyVIhG9dYA-euQG4GvRzuo2RT4AFfx_Sc3vqPtaBBbMciSnm-wmHQUomCMvQHgPrlC72YSNaja61KDFbzo4W2srYhU78EgI-BIa4Vr6gpSP3oIABeEthctZLDcqPo1PpOlsPMIE0hkyA68gNfq7MOqqNEkhuB8DaX7h66mYvBjejptirjvDTZ0_fI0h8fYmlrwbuXsD8-uUxi-E_hGvpI356_YyZ8peQxqyHfISWuNZBvA0u9tglw',
    alt: 'Structured Data JSON-LD guide',
    category: 'SEO',
    title: 'Structured Data & JSON-LD: The Complete SEO Engineering Guide',
    excerpt: 'How to implement schema markup at scale across thousands of dynamic WordPress pages.',
    readTime: '9 min read',
    date: 'Nov 2024',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0MLLHuZfXl0F5v08-DDoHrI_OyTa4vYfxnDr3wvqO1eZb9Ia-F8Jglf2wCaZgp0Mitpn3-vO5RYhHWFm40bpgef_m3P4GaHK4u-ZPhmbnLzXefWoT7bqaXoiMjskyHCWqSaiP2xGo_bmvpgtYSQ4vfwxSEmxh4pRUtqNJD0N-nTPkUBSsbHrqNnkHwvVFGDnO1xJ_BoFjMDlMcK3855BW7r5rtMp35mlIr1boBEXTSy8GQc478WUMMCgIT3FppEXc7HxdMt58xA',
    alt: 'Building a Custom WordPress Plugin article',
    category: 'WordPress',
    title: 'Building a Custom WordPress Plugin: Architecture Patterns That Scale',
    excerpt: 'Plugin development patterns that prevent the spaghetti code trap on large-scale projects.',
    readTime: '11 min read',
    date: 'Oct 2024',
  },
]

export default function BlogPage() {
  return (
    <>
      <Nav />
      <main className="relative">

        {/* ── Page Hero ── */}
        <section className="relative py-32 px-12 max-w-[1440px] mx-auto text-center pt-40">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary-container/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="relative z-10">
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-8 font-headline text-on-surface">
              Engineering Journal.
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              Technical deep-dives, architecture decisions, and lessons from the field.
            </p>
          </div>
        </section>

        {/* ── Featured Post ── */}
        <section className="py-16 px-12 max-w-[1440px] mx-auto">
          <div className="bg-surface-container-high rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 group">
            <div className="aspect-video md:aspect-auto overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxwH9DwQnmJ-VDEkd2c4CxOsoYsLtSHeG8ObztLQ01uVJZCBqqIT5O_NYem3iUs2yDcgqDWwiFHg2WJvCOYR_Td0zawnPISM4HUB9qiRAhNMgVLxSV2ogcNygOfKYKSjHHuu73l-G4iTsCIk1J5tutAGvFsZsV8AYNtQpfQ_8eFotfDKkYEXYE_wvk6JAWENi3NumAV9kJVPC2ID2FxVfgqjGgLgH4cTFRmiHQq3FE0bVOwvoQVY1dN6TFIUy3qOU1cFg2h05Q-A"
                alt="Why Headless WordPress is the Future of Enterprise CMS"
              />
            </div>
            <div className="p-10 flex flex-col gap-6 justify-center">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-[10px] font-mono font-bold uppercase tracking-widest">Featured</span>
                <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant text-[10px] font-mono uppercase tracking-widest">Architecture</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold font-headline tracking-tight text-on-surface leading-tight">
                Why Headless WordPress is the Future of Enterprise CMS
              </h2>
              <p className="text-on-surface-variant leading-relaxed">
                A deep dive into the architectural advantages of decoupling WordPress from its front-end, and why enterprise teams are making the switch to headless architectures powered by Next.js.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-on-surface-variant">14 min read</span>
                <a href="#" className="text-primary font-semibold flex items-center gap-2 hover:gap-4 transition-all">
                  Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Posts Grid ── */}
        <section className="py-16 px-12 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div key={post.title} className="bg-surface-container-high rounded-xl overflow-hidden flex flex-col group hover:bg-surface-container-highest transition-colors cursor-pointer">
                <div className="aspect-video overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={post.img}
                    alt={post.alt}
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="inline-block px-3 py-1 rounded-full bg-surface-container text-on-surface-variant text-[10px] font-mono uppercase tracking-widest mb-4 self-start">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-bold font-headline mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed line-clamp-2 mb-6">{post.excerpt}</p>
                  <div className="mt-auto pt-4 border-t border-outline-variant/10 flex items-center justify-between">
                    <span className="text-xs font-mono text-on-surface-variant">{post.readTime}</span>
                    <span className="text-xs font-mono text-on-surface/40">{post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Newsletter CTA ── */}
        <section className="py-32 px-12 max-w-[1440px] mx-auto">
          <div className="bg-surface-container-high rounded-3xl p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tighter mb-4 text-on-surface">
              Stay in the loop.
            </h2>
            <p className="text-on-surface-variant text-lg mb-10 max-w-lg mx-auto">
              Get notified when new technical articles and case studies drop. No spam, unsubscribe any time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-5 py-3 rounded-lg bg-surface-container text-on-surface placeholder:text-on-surface/40 border border-outline-variant/20 focus:outline-none focus:ring-2 focus:ring-primary/40 font-mono text-sm"
              />
              <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary-container px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-200 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
