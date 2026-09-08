import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import svelte from '@astrojs/svelte';
import sitemap from '@astrojs/sitemap';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: 'https://douglaslassance.me',
  integrations: [svelte(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        $lib: path.resolve(__dirname, 'src/lib'),
      },
    },
  },
});
