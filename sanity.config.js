import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { codeInput } from '@sanity/code-input'
import { schemaTypes } from './sanity/schemaTypes'
import { visionTool } from '@sanity/vision'

export default defineConfig({
  name: 'portfolio',
  title: 'Portfolio CMS',
  projectId: '4tuomjdr',
  dataset: 'production',
  basePath: '/studio',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Case Studies')
              .child(S.documentTypeList('caseStudy').title('Case Studies')),
            S.listItem()
              .title('Projects')
              .child(S.documentTypeList('project').title('Projects')),
            S.listItem()
              .title('Blog Posts')
              .child(S.documentTypeList('post').title('Blog Posts')),
            S.listItem()
              .title('Testimonials')
              .child(S.documentTypeList('testimonial').title('Testimonials')),
          ]),
    }),
    visionTool(),
    codeInput(),
  ],
  schema: {
    types: schemaTypes,
  },
})
