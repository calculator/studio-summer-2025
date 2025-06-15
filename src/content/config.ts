import { defineCollection, z } from 'astro:content';

const experimentsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    status: z.enum(['seedling', 'growing', 'mature', 'harvested', 'dormant']),
    startDate: z.date(),
    tags: z.array(z.string()).optional(),
    description: z.string().optional(),
    communicationMedium: z.string().optional(), // 'writing', 'visual', 'interactive', etc.
  }),
});

export const collections = {
  experiments: experimentsCollection,
};
