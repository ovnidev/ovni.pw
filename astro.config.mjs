import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  base: '/',
  site: 'https://ovni.pw',
  output: 'static',
  build: {
    inlineStylesheets: 'always'
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name][extname]'
        }
      }
    }
  },
  integrations: [
    tailwind({
      applyBaseStyles: true
    }),
    react()
  ]
});