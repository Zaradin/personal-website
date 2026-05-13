import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://astrofy-template.netlify.app",
  integrations: [mdx(), sitemap(), tailwind()],
  integrations: [tailwind(), icon()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
