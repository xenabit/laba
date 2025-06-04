import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    ViteImageOptimizer({
      jpg: {
        quality: 80, // Качество JPEG (0–100)
      },
      png: {
        quality: 80, // Качество PNG
        compressionLevel: 9, // Максимальная компрессия (0–9)
      },
      webp: false, // Отключаем WebP
      avif: false, // Отключаем AVIF
      include: ['**/*.png', '**/*.jpg', '**/*.jpeg'], // Только PNG/JPEG
      includePublic: true, // Оптимизируем изображения в public
      logStats: true, // Статистика сжатия
    }),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/docs/*.pdf',
          dest: 'assets/docs', // Копируем PDF в dist/assets/docs
        },
      ],
    }),
  ],
  server: {
    historyApiFallback: true,
    port: 3001,
    open: true,
  },
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Алиас для путей
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use '/src/variables.scss' as *;`,
      },
    },
  },
});
