import { defineType, defineField, defineArrayMember } from 'sanity'
import { CodeIcon } from '@sanity/icons'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: CodeIcon,
  fields: [
    defineField({
      name: 'projectType',
      title: 'Project Type',
      type: 'string',
      options: {
        list: [
          { title: 'Website / Web App', value: 'website' },
          { title: 'GitHub Repository', value: 'repo' },
        ],
        layout: 'radio',
      },
      initialValue: 'website',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required().max(300),
    }),
    defineField({
      name: 'mainImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'WordPress', value: 'WordPress' },
          { title: 'WooCommerce', value: 'WooCommerce' },
          { title: 'Headless / Next.js', value: 'Headless / Next.js' },
          { title: 'Performance & SEO', value: 'Performance & SEO' },
          { title: 'API Integration', value: 'API Integration' },
          { title: 'Open Source', value: 'Open Source' },
          { title: 'Side Project', value: 'Side Project' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'tags',
      title: 'Tech Stack',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Completed', value: 'completed' },
          { title: 'In Progress', value: 'in-progress' },
          { title: 'Archived', value: 'archived' },
        ],
        layout: 'radio',
      },
      initialValue: 'completed',
    }),
    defineField({
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url',
    }),
    defineField({
      name: 'liveUrl',
      title: 'Live URL',
      type: 'url',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first.',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'category', media: 'mainImage' },
  },
  orderings: [
    { title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
    { title: 'Newest', name: 'publishedAtDesc', by: [{ field: 'publishedAt', direction: 'desc' }] },
  ],
})
