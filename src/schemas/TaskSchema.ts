import { z } from 'zod';

export const TaskCreateSchema = z.object({
  title: z.string(),
  description: z.string().nullable().optional(),
});

export const TaskFindSchema = z.object({
  id: z.string().optional(),
  title: z.string().optional(),
  description: z.string().optional(),
  updatedBy: z.string().optional(),
  deletedBy: z.string().optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  sortBy: z.string().optional(),
  orderBy: z.string().optional(),
});

export const TaskUpdateSchema = z.object({
  id: z.string(),
  title: z.string().optional(),
  description: z.string().optional(),
});

export const TaskDeleteSchema = z.string().uuid();
