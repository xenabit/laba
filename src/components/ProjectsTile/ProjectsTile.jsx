import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectsTile.module.scss';

import p1_1x from '../../assets/images/project-tile-1.jpg';
import p2_1x from '../../assets/images/project-tile-2.jpg';
import p3_1x from '../../assets/images/project-tile-3.jpg';
import p4_1x from '../../assets/images/project-tile-4.jpg';

import p1_2x from '../../assets/images/project-tile-1-x2.jpg';
import p2_2x from '../../assets/images/project-tile-2-x2.jpg';
import p3_2x from '../../assets/images/project-tile-3-x2.jpg';
import p4_2x from '../../assets/images/project-tile-4-x2.jpg';

import { preloadImage, ensurePreloadLink, attachImageCachePagehideCleanup, warmImages } from '../../utils/imageCache';

const items = [
  { id: 1, picture: [p1_1x, p1_2x], src: '/portfolio?filter=web', title: 'WEB приложения / <br>Сайты' },
  { id: 2, picture: [p2_1x, p2_2x], src: '/portfolio?filter=mobile', title: 'IOS / ANDROID / <br>PC' },
  { id: 3, picture: [p3_1x, p3_2x], src: '/portfolio?filter=game', title: 'VR / AR / <br>360° ПАНОРАМЫ' },
  { id: 4, picture: [p4_1x, p4_2x], src: '/portfolio?filter=desktop', title: 'ВИЗУАЛИЗАЦИИ / <br>АНИМАЦИИ' },
];

function pick2xAllowed() {
  const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
  const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection || null;
  const saveData = !!(conn && conn.saveData);
  const eff = (conn && conn.effectiveType) || '4g';
  const slow = /(^|-)2g|(^|-)3g/i.test(eff);
  return dpr >= 1.5 && !saveData && !slow;
}

export default function ProjectsTile({ projectsTileRef }) {
  const animationRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    attachImageCachePagehideCleanup();

    const use2x = pick2xAllowed();
    const urls = items.map(({ picture }) => (use2x ? picture[1] : picture[0]));
    const aboveFold = urls.slice(0, 2);

    aboveFold.forEach((url) => {
      ensurePreloadLink(url, { importance: 'high' });
      preloadImage(url, { priority: 'high' }).catch(() => {});
    });

    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => warmImages(urls.slice(2), { priority: 'auto' }));
    } else {
      setTimeout(() => warmImages(urls.slice(2), { priority: 'auto' }), 0);
    }
  }, []);

  useEffect(() => {
    const use2x = pick2xAllowed();

    const applyBg = (el) => {
      if (!el || el.dataset.bgApplied === '1') return;
      const url1x = el.dataset.bg1x;
      const url2x = el.dataset.bg2x;
      const url = use2x ? url2x : url1x;
      if (!url) return;

      el.style.backgroundImage = `image-set(url(${url1x}) 1x, url(${url2x}) 2x)`;
      el.dataset.bgApplied = '1';
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            applyBg(e.target);
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: '600px', threshold: 0.01 }
    );

    const root = projectsTileRef?.current || document;
    const candidates = root.querySelectorAll(`.${styles.ProjectsTile__item}[data-bg1x], .${styles.ProjectsTile__image}[data-bg1x]`);
    candidates.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, [projectsTileRef]);

  const resetAnimation = () => {
    if (!animationRef.current) return;
    if (window.innerWidth <= 1280) {
      animationRef.current.classList.remove(styles.animate);
      setTimeout(() => animationRef.current.classList.add(styles.animate), 50);
    } else {
      animationRef.current.classList.remove(styles.animate);
    }
  };

  useEffect(() => {
    resetAnimation();
    window.addEventListener('resize', resetAnimation);
    let timer;
    if (window.innerWidth <= 1280) {
      timer = setInterval(resetAnimation, 10000);
    }
    return () => {
      window.removeEventListener('resize', resetAnimation);
      if (timer) clearInterval(timer);
    };
  }, []);

  const itemAttrs = (p1x, p2x) => ({
    'data-bg1x': p1x,
    'data-bg2x': p2x,
  });

  return (
    <section className={styles.ProjectsTile} ref={projectsTileRef}>
      <div className={styles.ProjectsTile__container}>
        <div className={`${styles.ProjectsTile__layer} ${styles.ProjectsTile__layer_bot}`}>
          <div ref={animationRef} className={`${styles.ProjectsTile__items} ${styles.animate}`}>
            {items.map(({ id, picture, src }) => (
              <div key={id} className={styles.ProjectsTile__item} {...itemAttrs(picture[0], picture[1])}>
                <Link to={src} className={styles.ProjectsTile__link}>
                  <div className={styles.ProjectsTile__text}>
                    <div className={styles.ProjectsTile__num}>{String(id).padStart(2, '0')}</div>
                    <div className={styles.ProjectsTile__title} dangerouslySetInnerHTML={{ __html: items[id - 1].title }} />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className={`${styles.ProjectsTile__images} ${hoveredIndex !== null ? styles[`active${hoveredIndex + 1}`] : ''}`}>
          {items.map(({ id, picture }) => (
            <div key={id} className={styles.ProjectsTile__image} {...itemAttrs(picture[0], picture[1])} />
          ))}
        </div>

        <div className={`${styles.ProjectsTile__layer} ${styles.ProjectsTile__layer_top}`}>
          <div className={styles.ProjectsTile__items}>
            {items.map(({ id, src }, idx) => (
              <div key={id} className={styles.ProjectsTile__item} onMouseEnter={() => setHoveredIndex(idx)} onMouseLeave={() => setHoveredIndex(null)}>
                <Link to={src} className={styles.ProjectsTile__link}>
                  <div className={styles.ProjectsTile__text}>
                    <div className={styles.ProjectsTile__num}>{String(id).padStart(2, '0')}</div>
                    <div className={styles.ProjectsTile__title} dangerouslySetInnerHTML={{ __html: items[id - 1].title }} />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
