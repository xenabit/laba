let MAX = 32;

const cache = new Map();
const inflight = new Map();
const preloadedLinks = new Set();

export function setImageCacheLimit(n) {
  const next = Math.max(4, Number(n) || 4);
  if (next === MAX) return;
  MAX = next;
  evictIfNeeded();
}

function touch(url) {
  const e = cache.get(url);
  if (e) e.ts = Date.now();
}

function evictIfNeeded() {
  if (cache.size <= MAX) return;
  let oldestKey = null, oldestTs = Infinity;
  for (const [k, v] of cache) if (v.ts < oldestTs) (oldestTs = v.ts, oldestKey = k);
  if (oldestKey) cache.delete(oldestKey);
}

function getNetworkHints() {
  const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection || null;
  const saveData = !!(conn && conn.saveData);
  const eff = (conn && conn.effectiveType) || '4g';
  const slow = /(^|-)2g|(^|-)3g/i.test(eff);
  return { saveData, slow };
}

export function ensurePreloadLink(url, { imagesrcset, imagesizes, importance = 'auto' } = {}) {
  if (!url || preloadedLinks.has(url)) return;
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  if (imagesrcset) link.setAttribute('imagesrcset', imagesrcset);
  if (imagesizes) link.setAttribute('imagesizes', imagesizes);
  link.href = url;
  link.setAttribute('importance', importance);
  document.head.appendChild(link);
  preloadedLinks.add(url);
}

export function hasImage(url) {
  return cache.has(url);
}

export function getImageFromCache(url) {
  return cache.get(url)?.img || null;
}

export async function preloadImage(url, { priority = 'auto', signal } = {}) {
  if (!url) return null;

  const { saveData, slow } = getNetworkHints();
  const effPriority = (saveData || slow) && priority === 'high' ? 'auto' : priority;

  const hit = cache.get(url);
  if (hit) {
    touch(url);
    return hit.img;
  }
  if (inflight.has(url)) return inflight.get(url);

  const p = new Promise((resolve, reject) => {
    const img = new Image();
    img.decoding = 'async';
    if ('fetchPriority' in img) img.fetchPriority = effPriority;
    if (signal) {
      if (signal.aborted) return reject(new DOMException('aborted', 'AbortError'));
      signal.addEventListener('abort', () => reject(new DOMException('aborted', 'AbortError')), { once: true });
    }
    img.onload = () => {
      cache.set(url, { img, ts: Date.now() });
      evictIfNeeded();
      resolve(img);
    };
    img.onerror = reject;
    img.src = url;
  });

  inflight.set(url, p);
  try {
    const img = await p;
    return img;
  } finally {
    inflight.delete(url);
  }
}

export function warmImages(urls, opts) {
  urls.filter(Boolean).forEach((u) => preloadImage(u, opts));
}

export function clearImageCache() {
  cache.clear();
  inflight.clear();
}

let cleanupAttached = false;
export function attachImageCachePagehideCleanup() {
  if (typeof window === 'undefined' || cleanupAttached) return;
  window.addEventListener('pagehide', () => {
    clearImageCache();
  });
  cleanupAttached = true;
}
