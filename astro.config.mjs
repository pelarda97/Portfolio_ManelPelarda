import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  // Update 'site' with your production URL once deployed
  site: 'https://yourportfolio.dev',
  compressHTML: true,
});
