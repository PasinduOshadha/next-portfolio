import type { MetadataRoute } from 'next'
import { client } from '../sanity/lib/client'
import { BASE_URL } from '../lib/schema'

const POST_SITEMAP_QUERY = `
  *[_type == "post" && defined(slug.current)] {
    "slug": slug.current,
    _updatedAt
  }
`

const CASE_STUDY_SITEMAP_QUERY = `
  *[_type == "caseStudy" && defined(slug.current)] {
    "slug": slug.current,
    _updatedAt
  }
`

type SitemapEntry = {
  slug: string
  _updatedAt: string
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, caseStudies] = await Promise.all([
    client.fetch<SitemapEntry[]>(POST_SITEMAP_QUERY),
    client.fetch<SitemapEntry[]>(CASE_STUDY_SITEMAP_QUERY),
  ])

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/about`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/resume`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/services`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/projects`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/case-studies`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/blog`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/contact`, changeFrequency: 'yearly', priority: 0.5 },
  ]

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post._updatedAt,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((cs) => ({
    url: `${BASE_URL}/case-studies/${cs.slug}`,
    lastModified: cs._updatedAt,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...postRoutes, ...caseStudyRoutes]
}
