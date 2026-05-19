import { z, defineCollection } from "astro:content";

const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  pub_date: z.union([z.date(), z.string()]).transform((value) => new Date(value)),
  draft: z.boolean().optional(),
  updatedDate: z.string().optional(),
  hero_image: z
    .union([z.string(), z.array(z.string())])
    .transform((value) => Array.isArray(value) ? value[0] : value)
    .optional(),
  badge: z.string().optional(),
  tags: z
    .array(z.string())
    .refine((items) => new Set(items).size === items.length, {
      message: "tags must be unique",
    })
    .optional(),
});

const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  pub_date: z.union([z.date(), z.string()]).transform((value) => new Date(value)),
  draft: z.boolean().optional(),
  hero_image: z
  .union([z.string(), z.array(z.string())])
  .transform((value) => Array.isArray(value) ? value[0] : value)
  .optional(),
  badge: z.string().optional(),
  status: z.string().optional(),
  project_url: z.string().optional(),
  repo_url: z.string().optional(),
  tags: z.array(z.string()).optional(),
  stack: z.array(z.string()).optional(),
});

export type BlogSchema = z.infer<typeof blogSchema>;
export type ProjectSchema = z.infer<typeof projectSchema>;

const blogCollection = defineCollection({ schema: blogSchema });
const projectCollection = defineCollection({ schema: projectSchema });

export const collections = {
  blog: blogCollection,
  projects: projectCollection,
};