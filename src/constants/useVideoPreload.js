import { useEffect } from 'react';
export default function useVideoPreload(selector = 'video[data-preload]') {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const root = document.getElementById('smooth-content') || document;
    if (!root) return;

    const observer = new window.IntersectionObserver(
      (entries, obs) => {
        entries.forEach(({ isIntersecting, target }) => {
          if (isIntersecting) {
            target.preload = 'metadata';
            target.load();
            obs.unobserve(target);
          }
        });
      },
      { rootMargin: '200px' }
    );

    root.querySelectorAll(selector).forEach((video) => observer.observe(video));
    return () => observer.disconnect();
  }, [selector]);
}
