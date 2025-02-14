import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 2000,
    open: true,
  },
  base: './',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use '/src/variables.scss' as *;`,
      },
    },
  },
});
