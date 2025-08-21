const MAX_ENTRIES = 12;
const cache = new Map();

export async function getBlobURL(src) {
  if (!src) return undefined;

  const hit = cache.get(src);
  if (hit) {
    hit.ts = Date.now();
    return hit.url;
  }

  const res = await fetch(src, { cache: 'force-cache' });
  const blob = await res.blob();
  const url = URL.createObjectURL(blob);

  cache.set(src, { url, ts: Date.now() });

  if (cache.size > MAX_ENTRIES) {
    let oldestKey = null;
    let oldestTs = Infinity;
    for (const [k, v] of cache.entries()) {
      if (v.ts < oldestTs) {
        oldestTs = v.ts;
        oldestKey = k;
      }
    }
    const old = cache.get(oldestKey);
    if (old) URL.revokeObjectURL(old.url);
    cache.delete(oldestKey);
  }

  return url;
}

export function revokeAll() {
  for (const v of cache.values()) URL.revokeObjectURL(v.url);
  cache.clear();
}

if (typeof window !== 'undefined') {
  window.addEventListener('pagehide', revokeAll);
}
