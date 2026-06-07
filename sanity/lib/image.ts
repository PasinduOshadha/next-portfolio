import { createImageUrlBuilder } from '@sanity/image-url'
import { client } from './client'

const imageBuilder = createImageUrlBuilder(client)

export function urlFor(source: Parameters<typeof imageBuilder.image>[0] | null | undefined) {
  if (!source) throw new Error('urlFor called with null/undefined source')
  return imageBuilder.image(source)
}
