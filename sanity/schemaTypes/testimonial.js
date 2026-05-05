import { defineType, defineField } from 'sanity'
import { StarIcon } from '@sanity/icons'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  icon: StarIcon,
  fields: [
    defineField({
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'designation',
      title: 'Your Designation',
      type: 'string',
      description: 'e.g. "CTO, Acme Corp" or "Marketing Director, FinCore"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'serviceProvided',
      title: 'Service Provided',
      type: 'string',
      options: {
        list: [
          { title: 'WordPress Development', value: 'WordPress Development' },
          { title: 'WooCommerce Development', value: 'WooCommerce Development' },
          { title: 'Headless / Next.js', value: 'Headless / Next.js' },
          { title: 'Performance & SEO', value: 'Performance & SEO' },
          { title: 'API Integration', value: 'API Integration' },
          { title: 'Full-Stack Development', value: 'Full-Stack Development' },
          { title: 'Consultation', value: 'Consultation' },
        ],
        layout: 'dropdown',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'testimonial',
      title: 'Testimonial',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required().max(500),
    }),
    defineField({
      name: 'avatar',
      title: 'Client Avatar',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show on homepage',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first.',
    }),
  ],
  preview: {
    select: { title: 'clientName', subtitle: 'designation', media: 'avatar' },
  },
  orderings: [
    { title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
})
