import { z } from 'zod';

export const CategoryCreationSchema = z.object({
  name: z.string(),
  description: z.string(),
});

export const CategorySchema = CategoryCreationSchema.extend({
  id: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type CategoryCreation = z.infer<typeof CategoryCreationSchema>;

export type Category = z.infer<typeof CategorySchema>;
