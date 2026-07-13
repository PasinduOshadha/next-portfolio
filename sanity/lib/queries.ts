// ── Case Studies ─────────────────────────────────────────────────────────────

export const CASE_STUDIES_QUERY = `
  *[_type == "caseStudy"] | order(order asc, publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    client,
    category,
    excerpt,
    mainImage,
    tags,
    results,
    liveUrl,
    featured,
    publishedAt
  }
`

export const CASE_STUDY_QUERY = `
  *[_type == "caseStudy" && slug.current == $slug][0] {
    _id,
    _updatedAt,
    title,
    "slug": slug.current,
    client,
    category,
    excerpt,
    mainImage,
    tags,
    challenge,
    solution,
    results,
    liveUrl,
    publishedAt
  }
`

export const CASE_STUDY_SLUGS_QUERY = `
  *[_type == "caseStudy" && defined(slug.current)] {
    "slug": slug.current
  }
`

// ── Projects ──────────────────────────────────────────────────────────────────

export const HOME_PROJECTS_QUERY = `
  *[_type == "project" && projectType == "website"] | order(order asc, publishedAt desc) [0...3] {
    _id,
    title,
    "slug": slug.current,
    description,
    mainImage,
    category,
    tags,
    liveUrl
  }
`

export const PROJECTS_QUERY = `
  *[_type == "project"] | order(order asc, publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    description,
    mainImage,
    category,
    tags,
    projectType,
    status,
    githubUrl,
    liveUrl,
    featured,
    publishedAt
  }
`

export const PROJECT_QUERY = `
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    description,
    mainImage,
    category,
    tags,
    status,
    githubUrl,
    liveUrl,
    publishedAt
  }
`

export const PROJECT_SLUGS_QUERY = `
  *[_type == "project" && defined(slug.current)] {
    "slug": slug.current
  }
`

// ── Testimonials ──────────────────────────────────────────────────────────────

export const TESTIMONIALS_QUERY = `
  *[_type == "testimonial"] | order(order asc) {
    _id,
    clientName,
    designation,
    serviceProvided,
    testimonial,
    avatar,
    featured
  }
`

// ── Blog ──────────────────────────────────────────────────────────────────────

export const POSTS_QUERY = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    mainImage,
    category,
    tags,
    readTime,
    featured,
    publishedAt
  }
`

export const POST_QUERY = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    _updatedAt,
    title,
    "slug": slug.current,
    excerpt,
    mainImage,
    category,
    body,
    tags,
    readTime,
    publishedAt
  }
`

export const POST_SLUGS_QUERY = `
  *[_type == "post" && defined(slug.current)] {
    "slug": slug.current
  }
`
