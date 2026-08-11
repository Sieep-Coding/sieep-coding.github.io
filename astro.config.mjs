import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import robotsTxt from "astro-robots-txt";
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import remarkGfm from 'remark-gfm';
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeAccessibleEmojis],
  },
  site: 'https://nickstambaugh.dev/',
  integrations: [tailwind(), react(), robotsTxt(), sitemap()],
  output: "static",
  adapter: vercel(),
});