const cache = new Map();            // url -> { img, promise }
const addedPreloadLinks = new Set();

export function preloadImage(url, priority = 'auto') {
  if (!url) return Promise.resolve(false);
  const hit = cache.get(url);
  if (hit) return hit.promise;

  let resolveFn;
  const promise = new Promise((r) => (resolveFn = r));

  const img = new Image();
  img.decoding = 'async';
  if ('fetchPriority' in img) img.fetchPriority = priority;
  img.onload = () => resolveFn(true);
  img.onerror = () => resolveFn(false);
  img.src = url;

  cache.set(url, { img, promise });
  return promise;
}

export function ensurePreloadLink(url) {
  if (!url || addedPreloadLinks.has(url)) return;
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = url;
  document.head.appendChild(link);
  addedPreloadLinks.add(url);
}
