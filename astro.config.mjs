import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import robotsTxt from 'astro-robots-txt';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  site: 'https://lumalux.com.ar',
  integrations: [tailwind(), robotsTxt()],
  output: 'server',
  adapter: vercel()
});