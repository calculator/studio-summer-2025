import { defineCollection, z } from 'astro:content';

const experimentsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    status: z.string().optional(),
    startDate: z.date().optional(),
    tags: z.array(z.string()).optional(),
    description: z.string().optional(),
    communicationMedium: z.string().optional(),
    slug: z.string().optional(),
  }),
});

export const collections = {
  experiments: experimentsCollection,
};
