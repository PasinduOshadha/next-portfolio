import { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs: { slug: { current: string } }[] = await client.fetch(
    `*[_type == "post" && defined(slug.current)]{ slug }`
  )

  const blogUrls = slugs.map(({ slug }) => ({
    url: `https://www.pasinduoshadha.com/blog/${slug.current}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: 'https://www.pasinduoshadha.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://www.pasinduoshadha.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.pasinduoshadha.com/services',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.pasinduoshadha.com/projects',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://www.pasinduoshadha.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://www.pasinduoshadha.com/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    ...blogUrls,
  ]
}
