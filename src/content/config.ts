import { z, defineCollection } from "astro:content";
const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: pubDate: z.union([z.date(), z.string()]).transform((value) => new Date(value)), //z.coerce.date()
  updatedDate: z.string().optional(),
  hero_image: z.array(z.string()).optional().transform((arr) => arr?.[0]),
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
  pubDate: pubDate: z.union([z.date(), z.string()]).transform((value) => new Date(value)), //z.coerce.date()
  hero_image: z.array(z.string()).optional().transform((arr) => arr?.[0]),
  badge: z.string().optional(),
  status: z.string().optional(),
  projectUrl: z.string().optional(),
  repoUrl: z.string().optional(),
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
