import { z } from 'zod';
import { insertContactSchema, brands, branches, contactMessages } from './schema';

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  notFound: z.object({
    message: z.string(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  brands: {
    list: {
      method: 'GET' as const,
      path: '/api/brands',
      responses: {
        200: z.array(z.custom<typeof brands.$inferSelect>()),
      },
    },
  },
  branches: {
    list: {
      method: 'GET' as const,
      path: '/api/branches',
      responses: {
        200: z.array(z.custom<typeof branches.$inferSelect>()),
      },
    },
  },
  contact: {
    create: {
      method: 'POST' as const,
      path: '/api/contact',
      input: insertContactSchema,
      responses: {
        201: z.custom<typeof contactMessages.$inferSelect>(),
        400: errorSchemas.validation,
      },
    },
  }
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}

export type BrandResponse = z.infer<typeof api.brands.list.responses[200]>;
export type BranchResponse = z.infer<typeof api.branches.list.responses[200]>;
