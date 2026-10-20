import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  publicDir: false,
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(process.cwd(), 'index.html'),
        cafeAtelier: resolve(process.cwd(), 'demos/cafe-atelier.html'),
        cafeNoir: resolve(process.cwd(), 'demos/cafe-noir.html'),
      },
    },
  },
});
