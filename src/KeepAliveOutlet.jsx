import { useLocation, Outlet } from 'react-router-dom';
import { useEffect, useMemo, useRef } from 'react';

export default function KeepAliveOutlet({ max = 4 }) {
  const { pathname } = useLocation();
  const cacheRef = useRef(new Map());

  const isIOS = useMemo(() => typeof navigator !== 'undefined' && /iP(hone|ad|od)/.test(navigator.userAgent), []);

  const hiddenStyle = isIOS
    ? {
        visibility: 'hidden',
        pointerEvents: 'none',
        position: 'absolute',
        inset: 0,
        height: 0,
        overflow: 'hidden',
      }
    : { display: 'none' };

  if (!cacheRef.current.has(pathname)) {
    cacheRef.current.set(pathname, <Outlet key={pathname} />);
    if (cacheRef.current.size > max) {
      const firstKey = cacheRef.current.keys().next().value;
      cacheRef.current.delete(firstKey);
    }
  }

  useEffect(() => {
    const root = document.getElementById('smooth-content') || document;
    root.querySelectorAll('[data-keepalive]').forEach((wrapper) => {
      const active = wrapper.dataset.keepalive === pathname;
      if (active) return;
      wrapper.querySelectorAll('video').forEach((v) => {
        try {
          v.pause();
        } catch {}
      });
    });
  }, [pathname]);

  return (
    <>
      {[...cacheRef.current.entries()].map(([path, node]) => {
        const active = path === pathname;
        return (
          <div key={path} data-keepalive={path} style={active ? undefined : hiddenStyle} aria-hidden={!active}>
            {node}
          </div>
        );
      })}
    </>
  );
}
