import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),

    svgr({
      svgrOptions: {},
      svgo: true,
      svgoConfig: {
        multipass: true,
        plugins: [
          'preset-default',
          { name: 'removeViewBox', active: false },
          { name: 'cleanupIds', params: { minify: true } },
          { name: 'convertPathData', params: { floatPrecision: 2 } },
        ],
      },
    }),

    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/images/**/*.{jpg,jpeg,png,webp,avif,svg}',
          dest: 'assets/images',
        },
        {
          src: 'src/assets/docs/*.pdf',
          dest: 'assets/docs',
        },
        {
          src: 'src/assets/videos/*.{mp4,webm}',
          dest: 'assets/videos',
        },
      ],
    }),
  ],

  server: {
    port: 3001,
    open: true,
  },
  base: './',

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
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
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const ext = path.extname(assetInfo.name || '').slice(1).toLowerCase();
          if (/png|jpe?g|webp|avif|svg/.test(ext)) {
            return 'assets/images/[name]-[hash][extname]';
          }
          if (/mp4|webm/.test(ext)) {
            return 'assets/videos/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
});
