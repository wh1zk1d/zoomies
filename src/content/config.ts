import { z, defineCollection } from 'astro:content'
const roomCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    roomId: z.number(),
    password: z.string(),
  }),
})

export const collections = {
  rooms: roomCollection,
}
