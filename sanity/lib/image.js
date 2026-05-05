import { createImageUrlBuilder } from '@sanity/image-url'
import { client } from './client'

const imageBuilder = createImageUrlBuilder(client)

export function urlFor(source) {
  return imageBuilder.image(source)
}
