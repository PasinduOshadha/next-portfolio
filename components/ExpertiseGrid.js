'use client'
import { SiWordpress, SiNextdotjs, SiGraphql, SiGoogleanalytics, SiPhp, SiWoocommerce } from 'react-icons/si'

const expertiseCards = [
  {
    Icon: SiWordpress,
    iconColor: '#21759B',
    iconBg: 'rgba(33,117,155,0.12)',
    borderColor: 'rgba(33,117,155,0.4)',
    glowColor: 'rgba(33,117,155,0.15)',
    title: 'WordPress Architecture',
    desc: 'Designing scalable WordPress architectures using custom post types, taxonomies, and optimized database structures to support high-traffic, content-heavy applications efficiently.',
  },
  {
    Icon: SiPhp,
    iconColor: '#777BB4',
    iconBg: 'rgba(119,123,180,0.12)',
    borderColor: 'rgba(119,123,180,0.4)',
    glowColor: 'rgba(119,123,180,0.15)',
    title: 'Custom Plugin & Theme Development',
    desc: 'Building custom plugins and themes tailored to business requirements, ensuring clean code, flexibility, and seamless integration with existing WordPress ecosystems.',
  },
  {
    Icon: SiNextdotjs,
    iconColor: '#e2e2e2',
    iconBg: 'rgba(226,226,226,0.08)',
    borderColor: 'rgba(226,226,226,0.25)',
    glowColor: 'rgba(226,226,226,0.08)',
    title: 'Headless WordPress (Next.js)',
    desc: 'Implementing headless WordPress solutions using Next.js for modern frontend experiences, improved performance, and scalable architecture with API-driven content delivery.',
  },
  {
    Icon: SiGoogleanalytics,
    iconColor: '#F9AB00',
    iconBg: 'rgba(249,171,0,0.12)',
    borderColor: 'rgba(249,171,0,0.4)',
    glowColor: 'rgba(249,171,0,0.15)',
    title: 'SEO & Performance Optimization',
    desc: 'Optimizing websites for Core Web Vitals, faster load times, and technical SEO by improving server response, caching strategies, and frontend performance.',
  },
  {
    Icon: SiGraphql,
    iconColor: '#E10098',
    iconBg: 'rgba(225,0,152,0.12)',
    borderColor: 'rgba(225,0,152,0.4)',
    glowColor: 'rgba(225,0,152,0.15)',
    title: 'API Integrations',
    desc: 'Developing and integrating REST and GraphQL APIs to connect third-party services, automate workflows, and enable seamless data exchange across platforms.',
  },
  {
    Icon: SiWoocommerce,
    iconColor: '#96588A',
    iconBg: 'rgba(150,88,138,0.12)',
    borderColor: 'rgba(150,88,138,0.4)',
    glowColor: 'rgba(150,88,138,0.15)',
    title: 'WooCommerce Customization',
    desc: 'Customizing WooCommerce with advanced business logic, dynamic pricing, and tailored checkout flows to meet complex eCommerce requirements and improve conversions.',
  },
]

export default function ExpertiseGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {expertiseCards.map(({ Icon, iconColor, iconBg, borderColor, glowColor, title, desc }) => (
        <div
          key={title}
          className="group relative bg-[#f5f5f5] p-8 rounded-xl transition-all duration-300 hover:-translate-y-2 cursor-default overflow-hidden"
          style={{ border: '1px solid transparent' }}
          onMouseEnter={e => {
            e.currentTarget.style.border = `1px solid ${borderColor}`
            e.currentTarget.style.boxShadow = `0 20px 40px ${glowColor}`
            e.currentTarget.style.background = '#ffffff'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.border = '1px solid transparent'
            e.currentTarget.style.boxShadow = 'none'
            e.currentTarget.style.background = '#f5f5f5'
          }}
        >
          <div
            className="absolute -top-6 -left-6 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{ background: glowColor }}
          />
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
            style={{ background: iconBg }}
          >
            <Icon style={{ color: iconColor }} className="text-2xl" />
          </div>
          <h3 className="text-xl font-bold font-headline mb-3 text-[#131313]">{title}</h3>
          <p className="text-[#555] text-sm leading-relaxed">{desc}</p>
        </div>
      ))}
    </div>
  )
}
