import { z } from 'zod';

export const CreateListSchema = z.object({
  name: z.string(),
});

export const ListDeleteSchema = z.string().uuid();
