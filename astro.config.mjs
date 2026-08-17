import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.SITE_URL ?? 'https://dev.holamundoverde.com',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/404/') && !page.includes('/iniciativa-deportiva/'),
      i18n: { defaultLocale: 'es', locales: { es: 'es-UY', en: 'en' } },
    }),
  ],
  vite: {
    build: { cssMinify: 'lightningcss' },
  },
});
