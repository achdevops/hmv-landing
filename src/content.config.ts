import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const localized = z.object({ es: z.string().min(1), en: z.string().min(1) });
const projects = defineCollection({
  loader: glob({ pattern: '**/*.{yml,yaml}', base: './src/content/projects' }),
  schema: z
    .object({
      projectId: z.string().regex(/^project-\d{3}$/),
      slugs: localized,
      visibility: z.enum(['public', 'teaser', 'private']),
      stage: z.enum(['idea', 'research', 'prototype', 'pilot', 'mvp', 'active', 'completed']),
      featured: z.boolean(),
      order: z.number().int(),
      title: localized,
      summary: localized.refine(
        (v) => v.es.length <= 180 && v.en.length <= 180,
        'Summary exceeds 180 characters',
      ),
      tags: z.array(z.string()),
      capabilities: z.array(z.enum(['ai-data', 'cloud', 'iot', 'education'])),
      impactThemes: z.array(
        z.enum([
          'environmental',
          'social',
          'educational',
          'operational',
          'economic',
          'public-interest',
        ]),
      ),
      heroImage: z.string().optional(),
      heroAlt: localized.optional(),
      updatedAt: z.coerce.date(),
      contactInterest: z.enum([
        'pilot',
        'technical-collaboration',
        'research',
        'workshop',
        'funding-program',
        'community-press',
        'other',
      ]),
      needs: z.array(
        z.enum([
          'pilot-site',
          'data',
          'research',
          'cloud-credits',
          'equipment',
          'funding',
          'mentorship',
          'workshop-host',
        ]),
      ),
      noindex: z.boolean().default(false),
    })
    .superRefine((value, ctx) => {
      if (
        value.visibility === 'public' &&
        (!value.heroImage || !value.heroAlt || value.needs.length === 0)
      )
        ctx.addIssue({
          code: 'custom',
          message: 'Public projects require hero image, alt text and needs',
        });
      if (value.visibility === 'private')
        ctx.addIssue({
          code: 'custom',
          message: 'Private project data must not be stored in this public collection',
        });
    }),
});

export const collections = { projects };
