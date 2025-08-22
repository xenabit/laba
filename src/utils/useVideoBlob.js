import { useEffect, useRef, useState } from 'react';

let MAX = 12;

const cache = new Map();
const inflight = new Map();

function touch(src) {
  const e = cache.get(src);
  if (e) e.ts = Date.now();
}

function evictIfNeeded() {
  if (cache.size <= MAX) return;
  let oldestKey = null;
  let oldestTs = Infinity;
  for (const [k, v] of cache) {
    if (v.ts < oldestTs) {
      oldestTs = v.ts;
      oldestKey = k;
    }
  }
  if (oldestKey) {
    const old = cache.get(oldestKey);
    if (old) URL.revokeObjectURL(old.url);
    cache.delete(oldestKey);
  }
}

async function fetchBlobUrl(src) {
  if (inflight.has(src)) return inflight.get(src);

  const p = (async () => {
    const res = await fetch(src, { cache: 'force-cache', mode: 'cors' });
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);

    cache.set(src, { url, ts: Date.now() });
    evictIfNeeded();

    return url;
  })();

  inflight.set(src, p);

  try {
    const url = await p;
    return url;
  } finally {
    inflight.delete(src);
  }
}

export function setVideoBlobCacheLimit(n) {
  const next = Math.max(1, Number(n) || 1);
  if (next === MAX) return;
  MAX = next;
  evictIfNeeded();
}

export function getVideoBlobFromCache(src) {
  const e = cache.get(src);
  return e ? e.url : undefined;
}

export async function prefetchVideoBlob(src) {
  if (!src) return undefined;
  const cached = getVideoBlobFromCache(src);
  if (cached) {
    touch(src);
    return cached;
  }
  return await fetchBlobUrl(src);
}

export function clearVideoBlobCache() {
  for (const e of cache.values()) URL.revokeObjectURL(e.url);
  cache.clear();
  inflight.clear();
}

let cleanupAttached = false;
export function attachVideoBlobPagehideCleanup() {
  if (typeof window === 'undefined' || cleanupAttached) return;
  window.addEventListener('pagehide', clearVideoBlobCache);
  cleanupAttached = true;
}

export function useVideoBlob(url, enabled = true) {
  const [blobUrl, setBlobUrl] = useState(() => (url ? getVideoBlobFromCache(url) : undefined));
  const mountedRef = useRef(true);

  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    if (!url || !enabled) {
      setBlobUrl(undefined);
      return;
    }

    const cached = getVideoBlobFromCache(url);
    if (cached) {
      touch(url);
      setBlobUrl(cached);
      return;
    }

    let cancelled = false;
    (async () => {
      try {
        const obj = await fetchBlobUrl(url);
        if (!cancelled && mountedRef.current) setBlobUrl(obj);
      } catch {
        if (!cancelled && mountedRef.current) setBlobUrl(undefined);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [url, enabled]);

  return blobUrl ?? url;
}
