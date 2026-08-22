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

      manifest: {
        name: 'LABA',
        short_name: 'LABA',
        description: 'Создаем уникальные цифровые продукты',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        version: '1.0.1',
        start_url: '/',
        icons: [
          {
            src: '/icon/icon-dark.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icon/icon-dark.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },

      workbox: {
        globPatterns: ['**/*.{js,css,html,ico}'],
        globIgnores: ['**/sw.js', '**/assets/videos/**', '**/assets/images/**/*.png', '**/assets/images/**/*.jpg'],
        skipWaiting: true,
        clientsClaim: true,
        cleanupOutdatedCaches: true,
        navigateFallback: '/index.html',
        cacheId: 'laba-v1',
      },

      devOptions: {
        enabled: true,
        type: 'module',
      },
    }),
  ],

  server: {
    port: 3001,
    open: true,
  },
  base: './',

  // base: '/laba-prod-test/',

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
