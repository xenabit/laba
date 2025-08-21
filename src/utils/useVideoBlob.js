import { useEffect, useState } from 'react';
import { getBlobURL } from './videoCache';

export function useVideoBlob(src) {
  const [url, setUrl] = useState();
  useEffect(() => {
    let alive = true;
    if (!src) return;
    getBlobURL(src)
      .then((u) => {
        if (alive) setUrl(u);
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, [src]);
  return url;
}
