import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    // Убираем ViteImageOptimizer, так как изображения уже оптимизированы
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/images/**/*.{jpg,png,jpeg,webp,avif,svg}', // Копируем все изображения
          dest: 'assets/images', // В dist/assets/images
        },
        {
          src: 'src/assets/docs/*.pdf',
          dest: 'assets/docs', // Копируем PDF
        },
        {
          src: 'src/assets/videos/*.{mp4,webm}',
          dest: 'assets/videos', // Копируем видео
        },
      ],
    }),
  ],
  server: {
    historyApiFallback: true,
    port: 3001,
    open: true,
  },
  base: './', // Относительные пути для билда
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Алиас для src
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use '/src/variables.scss' as *;`,
      },
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets', // Папка для статических ресурсов
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Сохраняем структуру папок для изображений, видео и других активов
          const extType = assetInfo.name.split('.').pop();
          if (/png|jpg|jpeg|webp|avif|svg/i.test(extType)) {
            return 'assets/images/[name].[ext]';
          }
          if (/mp4/i.test(extType)) {
            return 'assets/videos/[name].[ext]';
          }
          return 'assets/[name].[ext]';
        },
      },
    },
  },
});
