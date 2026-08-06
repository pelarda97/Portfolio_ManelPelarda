import { defineCollection, z } from 'astro:content';

// ─── Projects ──────────────────────────────────────────────────────────────
const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title:           z.string(),
    description:     z.string(),
    longDescription: z.string().optional(),
    category:        z.enum(['web', 'games', 'fullstack']),
    stack:           z.array(z.string()),
    github:          z.string().url().optional(),
    demo:            z.string().url().optional(),
    demoLabel:       z.string().optional(),
    image:           z.string().optional(),
    featured:        z.boolean().default(false),
    status:          z.enum(['completed', 'in-progress', 'archived']).default('completed'),
    date:            z.coerce.date(),
    order:           z.number().optional(),
  }),
});

// ─── Education / Training ──────────────────────────────────────────────────
const education = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    institution: z.string(),
    location:    z.string().optional(),
    startDate:   z.string(),
    endDate:     z.string().optional(),
    current:     z.boolean().default(false),
    type:        z.enum(['degree', 'course', 'certification', 'bootcamp', 'self-taught']),
    description: z.string(),
    skills:      z.array(z.string()).optional(),
    link:        z.string().url().optional(),
    credential:  z.string().optional(),
    order:       z.number(),
  }),
});

export const collections = { projects, education };
