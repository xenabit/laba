import { useEffect, useState } from 'react';

export default function useIsMobile(query = '(max-width: 1024px)') {
  const getMatch = () =>
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia(query).matches;

  const [isMobile, setIsMobile] = useState(getMatch);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;

    const mql = window.matchMedia(query);
    const onChange = (e) => setIsMobile(e.matches);

    if (typeof mql.addEventListener === 'function') {
      mql.addEventListener('change', onChange);
    }

    setIsMobile(mql.matches);

    return () => {
      if (typeof mql.removeEventListener === 'function') {
        mql.removeEventListener('change', onChange);
      }
    };
  }, [query]);

  return isMobile;
}
