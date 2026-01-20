// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://al-burtsev.github.io',
  base: '/room-homepage',
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: 'League Spartan',
        cssVariable: '--font-main',
      },
    ],
  },
});
