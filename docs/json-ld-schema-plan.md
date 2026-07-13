# JSON-LD Structured Data — Implementation Plan

Site: https://www.pasinduoshadha.com (Next.js App Router + Sanity)

## Schema types per page

| Route | Schema |
|---|---|
| Root layout (all pages) | `Person` (`@id: /#person` — name, jobTitle, url, sameAs, knowsAbout) + `WebSite` (`@id: /#website`, publisher → `#person`), emitted as single `@graph` |
| `/` | Covered by layout graph — nothing extra |
| `/about` | `ProfilePage` with `mainEntity: {@id: /#person}` |
| `/services` | `Service` with `hasOfferCatalog` built from hardcoded services array, `provider → #person`. (Not `ProfessionalService` — that targets local businesses with addresses.) No rich result; entity understanding / AI answers only |
| `/blog` | `Blog` with `blogPost: BlogPosting[]` stubs + `BreadcrumbList` |
| `/blog/[slug]` | `BlogPosting` — headline, description (excerpt), image (urlFor 1200x675), datePublished, dateModified (`_updatedAt`), author/publisher → `#person`, keywords (tags), articleSection (category), `timeRequired: PT{readTime}M` + `BreadcrumbList` |
| `/case-studies` | `CollectionPage` + `BreadcrumbList` |
| `/case-studies/[slug]` | `Article` — headline, description, image, dates, author/publisher → `#person`, `about: Organization(client)` when present + `BreadcrumbList` |
| `/projects` | `CollectionPage` + `ItemList` of projects (name, url = liveUrl/githubUrl, description) |
| `/contact` | `ContactPage` |
| `/studio` | Excluded |

## Testimonials — decision: NO Review/AggregateRating

Google explicitly disallows self-serving review markup (reviews about yourself /
your own services on your own site). Ignored at best, manual spam action at
worst. Testimonials stay visible HTML only. Do not "fix" this later.

## Implementation pattern

- `components/JsonLd.tsx` — `<script type="application/ld+json">` via
  `dangerouslySetInnerHTML`, XSS-safe: `JSON.stringify(data).replace(/</g, '\\u003c')`
- `lib/schema.ts` — shared `BASE_URL`, `PERSON_ID`/`WEBSITE_ID` constants, all
  builder functions. Sitemap imports `BASE_URL` from here too.
- Image URLs: `urlFor(image).width(1200).height(675).fit('crop').url()`, guard
  on `image?.asset` — omit `image` key entirely if missing.
- Never emit empty arrays / undefined values (conditional spreads).
- JSON-LD valid anywhere in `<body>`; layout graph wraps every route so
  `{@id: #person}` references resolve on all pages.

## Sanity query changes (only two)

- Add `_updatedAt` to `POST_QUERY` and `CASE_STUDY_QUERY` in `sanity/lib/queries.ts`
- Add `_updatedAt?: string` to `Post` and `CaseStudy` types
- No new Sanity schema fields; no author document needed (author = site owner, hardcoded Person)

## File-by-file order

1. `lib/schema.ts` (new)
2. `components/JsonLd.tsx` (new)
3. `sanity/lib/queries.ts` — `_updatedAt`
4. `types/content.ts` — `_updatedAt?`
5. `app/layout.tsx` — root Person+WebSite graph
6. `app/blog/[slug]/page.tsx` — BlogPosting + breadcrumbs (pattern for rest)
7. `app/case-studies/[slug]/page.tsx` — Article + breadcrumbs
8. `app/blog/page.tsx` — Blog + breadcrumbs
9. `app/case-studies/page.tsx` — CollectionPage + breadcrumbs
10. `app/about/page.tsx` — ProfilePage
11. `app/services/page.tsx` — Service + hasOfferCatalog
12. `app/projects/page.tsx` — CollectionPage + ItemList
13. `app/contact/page.tsx` — ContactPage
14. `app/sitemap.ts` — import shared BASE_URL

## Validation

1. Local: curl page, extract `application/ld+json` script, parse with `jq`,
   confirm `<` escaped as `<`
2. Google Rich Results Test on deployed URLs — expect Article on blog/case-study
   detail, Breadcrumbs everywhere marked. Person/WebSite/Service only show in
   validator.schema.org (expected — no rich result type)
3. Verify `@id` references resolve within rendered page graph
4. Post-deploy: Search Console > Enhancements over following weeks
