import { defineCollection, defineContentConfig, z } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: {
        include: 'pages/**/*.md',
        prefix: '/'
      },
      schema: z.object({
        title: z.string().optional(),
        description: z.string().optional(),
        order: z.number().optional()
      }),
    })
  },
});
