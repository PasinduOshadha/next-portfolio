import { urlFor } from '../sanity/lib/image'
import type { CaseStudy, Post, Project, SanityImage } from '../types/content'

export const BASE_URL = 'https://pasinduoshadha.com'

const PERSON_ID = `${BASE_URL}/#person`
const WEBSITE_ID = `${BASE_URL}/#website`

type SchemaObject = Record<string, unknown>

function imageUrl(image?: SanityImage): string | undefined {
  if (!image?.asset) return undefined
  return urlFor(image).width(1200).height(675).fit('crop').url()
}

// NOTE: Testimonials must never be marked up as Review/AggregateRating.
// Google treats review markup controlled by the entity being reviewed as
// self-serving and may issue a manual spam action. Keep testimonials HTML-only.

export function personSchema(): SchemaObject {
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: 'Pasindu Oshadha',
    jobTitle: 'Senior Web Developer',
    url: BASE_URL,
    image: `${BASE_URL}/opengraph-image.jpeg`,
    sameAs: [
      'https://github.com/PasinduOshadha',
      'https://www.linkedin.com/in/pasindu-oshadha',
      'https://x.com/pasinduoshadha',
    ],
    knowsAbout: [
      'WordPress',
      'Next.js',
      'React',
      'TypeScript',
      'WooCommerce',
      'Headless CMS',
      'Core Web Vitals',
      'Technical SEO',
    ],
  }
}

export function rootGraph(): SchemaObject {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      personSchema(),
      {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        name: 'Pasindu Oshadha',
        url: BASE_URL,
        publisher: { '@id': PERSON_ID },
      },
    ],
  }
}

export function breadcrumbSchema(items: { name: string; path: string }[]): SchemaObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.path}`,
    })),
  }
}

export function blogPostingSchema(post: Post): SchemaObject {
  const image = imageUrl(post.mainImage)
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${BASE_URL}/blog/${post.slug}#article`,
    headline: post.title,
    url: `${BASE_URL}/blog/${post.slug}`,
    mainEntityOfPage: `${BASE_URL}/blog/${post.slug}`,
    author: { '@id': PERSON_ID },
    publisher: { '@id': PERSON_ID },
    ...(post.excerpt && { description: post.excerpt }),
    ...(image && { image }),
    ...(post.publishedAt && { datePublished: post.publishedAt }),
    ...(post._updatedAt && { dateModified: post._updatedAt }),
    ...(post.category && { articleSection: post.category }),
    ...(post.tags?.length && { keywords: post.tags.join(', ') }),
    ...(post.readTime && { timeRequired: `PT${post.readTime}M` }),
  }
}

export function blogSchema(posts: Post[]): SchemaObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${BASE_URL}/blog#blog`,
    name: 'Pasindu Oshadha — Blog',
    url: `${BASE_URL}/blog`,
    publisher: { '@id': PERSON_ID },
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: `${BASE_URL}/blog/${post.slug}`,
      ...(post.publishedAt && { datePublished: post.publishedAt }),
    })),
  }
}

export function caseStudyArticleSchema(study: CaseStudy): SchemaObject {
  const image = imageUrl(study.mainImage)
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${BASE_URL}/case-studies/${study.slug}#article`,
    headline: study.title,
    url: `${BASE_URL}/case-studies/${study.slug}`,
    mainEntityOfPage: `${BASE_URL}/case-studies/${study.slug}`,
    author: { '@id': PERSON_ID },
    publisher: { '@id': PERSON_ID },
    ...(study.excerpt && { description: study.excerpt }),
    ...(image && { image }),
    ...(study.publishedAt && { datePublished: study.publishedAt }),
    ...(study._updatedAt && { dateModified: study._updatedAt }),
    ...(study.tags?.length && { keywords: study.tags.join(', ') }),
    ...(study.client && {
      about: { '@type': 'Organization', name: study.client },
    }),
  }
}

export function collectionPageSchema(opts: {
  name: string
  path: string
  description?: string
  items?: { name: string; url: string; description?: string }[]
}): SchemaObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${BASE_URL}${opts.path}#page`,
    name: opts.name,
    url: `${BASE_URL}${opts.path}`,
    ...(opts.description && { description: opts.description }),
    ...(opts.items?.length && {
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: opts.items.map((item, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: item.name,
          url: item.url,
          ...(item.description && { description: item.description }),
        })),
      },
    }),
  }
}

export function projectItems(projects: Project[]) {
  return projects
    .map((p) => ({
      name: p.title,
      url: p.liveUrl || p.githubUrl || `${BASE_URL}/projects`,
      description: p.description,
    }))
    .filter((p) => p.url)
}

export function profilePageSchema(): SchemaObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${BASE_URL}/about#page`,
    url: `${BASE_URL}/about`,
    name: 'About Pasindu Oshadha',
    mainEntity: { '@id': PERSON_ID },
  }
}

export function servicesSchema(services: { title: string; summary: string }[]): SchemaObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${BASE_URL}/services#service`,
    name: 'Web Development Services',
    url: `${BASE_URL}/services`,
    serviceType: 'Web Development',
    provider: { '@id': PERSON_ID },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.title,
          description: s.summary,
        },
      })),
    },
  }
}

export function contactPageSchema(): SchemaObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${BASE_URL}/contact#page`,
    url: `${BASE_URL}/contact`,
    name: 'Contact Pasindu Oshadha',
    mainEntity: { '@id': PERSON_ID },
  }
}
