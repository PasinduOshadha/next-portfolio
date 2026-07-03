'use client'
import { SiWordpress, SiNextdotjs, SiGraphql, SiGoogleanalytics, SiPhp, SiWoocommerce } from 'react-icons/si'

const expertiseCards = [
  {
    Icon: SiWordpress,
    title: 'WordPress Architecture',
    desc: 'Designing scalable WordPress architectures using custom post types, taxonomies, and optimized database structures to support high-traffic, content-heavy applications efficiently.',
  },
  {
    Icon: SiPhp,
    title: 'Custom Plugin & Theme Development',
    desc: 'Building custom plugins and themes tailored to business requirements, ensuring clean code, flexibility, and seamless integration with existing WordPress ecosystems.',
  },
  {
    Icon: SiNextdotjs,
    title: 'Headless WordPress (Next.js)',
    desc: 'Implementing headless WordPress solutions using Next.js for modern frontend experiences, improved performance, and scalable architecture with API-driven content delivery.',
  },
  {
    Icon: SiGoogleanalytics,
    title: 'SEO & Performance Optimization',
    desc: 'Optimizing websites for Core Web Vitals, faster load times, and technical SEO by improving server response, caching strategies, and frontend performance.',
  },
  {
    Icon: SiGraphql,
    title: 'API Integrations',
    desc: 'Developing and integrating REST and GraphQL APIs to connect third-party services, automate workflows, and enable seamless data exchange across platforms.',
  },
  {
    Icon: SiWoocommerce,
    title: 'WooCommerce Customization',
    desc: 'Customizing WooCommerce with advanced business logic, dynamic pricing, and tailored checkout flows to meet complex eCommerce requirements and improve conversions.',
  },
]

export default function ExpertiseGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {expertiseCards.map(({ Icon, title, desc }) => (
        <div
          key={title}
          className="mono-card group p-8 cursor-default overflow-hidden hover:-translate-y-1"
        >
          <div className="w-14 h-14 border border-outline-variant bg-surface flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105">
            <Icon className="text-2xl text-on-surface" />
          </div>
          <h3 className="text-xl font-medium font-headline mb-3 text-on-surface">{title}</h3>
          <p className="text-on-surface-variant text-sm leading-relaxed">{desc}</p>
        </div>
      ))}
    </div>
  )
}
