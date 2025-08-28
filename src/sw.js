self.__WB_DISABLE_DEV_LOGS = true;

import { clientsClaim } from 'workbox-core';
import { precacheAndRoute, createHandlerBoundToURL, cleanupOutdatedCaches } from 'workbox-precaching';
import { registerRoute, NavigationRoute } from 'workbox-routing';
import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { ExpirationPlugin } from 'workbox-expiration';
import { RangeRequestsPlugin } from 'workbox-range-requests';

self.skipWaiting();
clientsClaim();
precacheAndRoute(self.__WB_MANIFEST ?? []);
cleanupOutdatedCaches();

registerRoute(
  ({ request, url }) =>
    url.origin === self.location.origin &&
    (request.destination === 'video' || /\/assets\/videos\/.*\.(mp4|webm)(?:\?.*)?$/i.test(url.pathname)),
  new CacheFirst({
    cacheName: 'videos-cache-v3',
    plugins: [
      new CacheableResponsePlugin({ statuses: [200] }),
      new ExpirationPlugin({ maxEntries: 30, maxAgeSeconds: 60 * 60 * 24 * 30, purgeOnQuotaError: true }),
      new RangeRequestsPlugin(),
    ],
  })
);

registerRoute(
  ({ request, url }) =>
    url.origin === self.location.origin && request.destination === 'image',
  new StaleWhileRevalidate({
    cacheName: 'images-cache-v2',
    plugins: [new ExpirationPlugin({ maxEntries: 100, maxAgeSeconds: 60 * 60 * 24 * 30 })],
  })
);

// registerRoute(
//   ({ request, url }) =>
//     request.destination === 'font' ||
//     /\/assets\/fonts\/.*\.(?:woff2?|ttf|otf)(?:\?.*)?$/i.test(url.pathname),
//   new CacheFirst({
//     cacheName: 'fonts-cache',
//     plugins: [
//       new CacheableResponsePlugin({ statuses: [0, 200] }),
//       new ExpirationPlugin({ maxEntries: 20, maxAgeSeconds: 60 * 60 * 24 * 365 }),
//     ],
//   })
// );

const isYandexMetrika = ({ url }) => /(^|\.)mc\.yandex\.(ru|com)$/i.test(url.hostname);
registerRoute(
  isYandexMetrika,
  async ({ event }) => {
    try {
      return await fetch(event.request);
    } catch {
      return new Response('', { status: 204 });
    }
  },
  'GET'
);

const spaHandler = createHandlerBoundToURL('index.html');
registerRoute(new NavigationRoute(spaHandler));
