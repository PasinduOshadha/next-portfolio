export interface SanitySlug {
  current?: string
}

export interface SanityImageAssetRef {
  _ref?: string
  _type?: string
}

export interface SanityImage {
  asset?: SanityImageAssetRef
  alt?: string
  caption?: string
}

export interface CaseStudyResult {
  icon?: string
  label: string
  value?: string
}

export interface Project {
  _id: string
  title: string
  slug: string
  description?: string
  mainImage?: SanityImage
  category?: string
  tags?: string[]
  projectType?: 'website' | 'repo' | string
  status?: 'completed' | 'in-progress' | 'archived' | string
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
  publishedAt?: string
}

export interface Testimonial {
  _id: string
  clientName: string
  designation?: string
  serviceProvided?: string
  testimonial: string
  avatar?: SanityImage
  featured?: boolean
}

export interface Post {
  _id: string
  title: string
  slug: string
  excerpt?: string
  mainImage?: SanityImage
  category?: string
  body?: unknown[]
  tags?: string[]
  readTime?: number | string
  featured?: boolean
  publishedAt?: string
}

export interface CaseStudy {
  _id: string
  title: string
  slug: string
  client?: string
  category?: string
  excerpt?: string
  mainImage?: SanityImage
  tags?: string[]
  challenge?: string
  solution?: unknown[]
  results?: CaseStudyResult[]
  liveUrl?: string
  featured?: boolean
  publishedAt?: string
}

export interface SlugParam {
  slug: string
}
