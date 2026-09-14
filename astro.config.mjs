import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import svelte from '@astrojs/svelte';
import sitemap from '@astrojs/sitemap';
import sentry from '@sentry/astro';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: 'https://douglaslassance.me',
  integrations: [
    svelte(),
    sitemap(),
    sentry({
      org: 'douglaslassance',
      project: 'douglaslassance',
      // Only needed at build time, to upload source maps. Absent locally, which
      // makes the plugin skip the upload and carry on.
      authToken: process.env.SENTRY_AUTH_TOKEN,
      // This is a static build on Pages, so there is no server runtime to
      // instrument and no server SDK to ship.
      enabled: { client: true, server: false },
      sourcemaps: {
        // Send the maps to Sentry, then drop them from the build so the
        // unminified source is not downloadable from the live site.
        filesToDeleteAfterUpload: ['./dist/**/*.js.map'],
      },
      // Strip the parts of the SDK this site does not use.
      bundleSizeOptimizations: {
        excludeTracing: true,
        excludeReplayIframe: true,
        excludeReplayShadowDom: true,
        excludeReplayWorker: true,
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        $lib: path.resolve(__dirname, 'src/lib'),
      },
    },
  },
});
