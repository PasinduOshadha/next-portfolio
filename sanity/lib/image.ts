import { createImageUrlBuilder } from '@sanity/image-url'
import { client } from './client'
import type { SanityImage } from '../../types/content'

const imageBuilder = createImageUrlBuilder(client)

export function urlFor(source: SanityImage | Record<string, unknown>) {
  return imageBuilder.image(source)
}
