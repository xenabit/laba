import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),

    svgr({
      svgrOptions: {},
      svgo: true,
      svgoConfig: {
        multipass: true,
        plugins: ['preset-default', { name: 'removeViewBox', active: false }, { name: 'cleanupIds', params: { minify: true } }, { name: 'convertPathData', params: { floatPrecision: 2 } }],
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

    VitePWA({
      registerType: 'autoUpdate',
      strategies: 'injectManifest',
      srcDir: 'src',
      filename: 'sw.js',

      injectManifest: {
        globPatterns: [
          '**/*.{js,css,html,ico}',
          'assets/images/*.{svg,ico}',
          // 'assets/fonts/*.{woff2,woff}',
        ],
        globIgnores: [
          'sw.js',
          '**/sw.js',
          '**/assets/videos/**',
          '**/assets/images/**/*.png',
          '**/assets/images/**/*.jpg',
          '**/assets/images/**/*.jpeg',
          '**/assets/images/**/*.webp',
          '**/assets/images/**/*.avif',
          '**/assets/images/header-menu*.svg',
          '**/assets/images/case-slider-*.svg',
          '**/assets/images/case-iframe-*.{jpg,png}',
          '**/assets/images/cases-slider-full-*.*',
        ],
      },
      devOptions: { enabled: true, type: 'module' },
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
          const ext = path
            .extname(assetInfo.name || '')
            .slice(1)
            .toLowerCase();
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
