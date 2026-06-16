import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://hivy.co.in',
  output: 'static',
  integrations: [
    react(),
    tailwind(),
  ],
  vite: {
    build: {
      rollupOptions: {
        // Allow named exports to be resolved properly
        treeshake: { moduleSideEffects: false },
      },
    },
    ssr: {
      noExternal: ['lucide-react'],
    },
  },
  build: { inlineStylesheets: 'auto' },
  compressHTML: true,
});
