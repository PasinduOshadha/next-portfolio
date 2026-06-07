import { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'
import { POST_SLUGS_QUERY, CASE_STUDY_SLUGS_QUERY } from '@/sanity/lib/queries'

const BASE = 'https://www.pasinduoshadha.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [postSlugs, caseStudySlugs] = await Promise.all([
    client.fetch<{ slug: string }[]>(POST_SLUGS_QUERY),
    client.fetch<{ slug: string }[]>(CASE_STUDY_SLUGS_QUERY),
  ])

  const blogUrls = postSlugs.map(({ slug }) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  const caseStudyUrls = caseStudySlugs.map(({ slug }) => ({
    url: `${BASE}/case-studies/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    { url: `${BASE}`,              lastModified: new Date(), changeFrequency: 'weekly',  priority: 1   },
    { url: `${BASE}/about`,        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/services`,     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/projects`,     lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE}/case-studies`, lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE}/blog`,         lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${BASE}/contact`,      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    ...blogUrls,
    ...caseStudyUrls,
  ]
}
