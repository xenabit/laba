import { useState, useCallback } from 'react';
import styles from './Gallery.module.scss';
import itemStyles from '../GalleryItem/GalleryItem.module.scss';
import GalleryItem from '../GalleryItem/GalleryItem';
import { projects } from '../../constants/projects';

const isMobile = typeof window !== 'undefined' && window.innerWidth <= 1024;

export default function Gallery({ loadingStage }) {
  const total = 6;

  const [loadedIds, setLoadedIds] = useState(() => {
    try {
      return new Set(JSON.parse(sessionStorage.getItem('galleryLoadedIds') || '[]'));
    } catch {
      return new Set();
    }
  });

  const handleLoaded = useCallback((id) => {
    setLoadedIds((prev) => {
      if (prev.has(id)) return prev;
      const next = new Set(prev).add(id);
      sessionStorage.setItem('galleryLoadedIds', JSON.stringify(Array.from(next)));
      return next;
    });
  }, []);

  const handleMouseEnter = useCallback((v) => v.play().catch(() => {}), []);
  const handleMouseLeave = useCallback((v) => v.pause(), []);

  if (loadingStage !== 'complete') {
    return (
      <section className={styles.Gallery}>
        <ul className={styles.Gallery__items}>
          {projects.slice(0, total).map((_, i) => (
            <li className={itemStyles.GalleryItem__item} key={i}>
              <div className={styles.Gallery__skeletonVideo} />
            </li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <section className={styles.Gallery}>
      <ul className={styles.Gallery__items}>
        {projects.slice(0, total).map((item, idx) => {
          const isLoaded = loadedIds.has(item.id);
          const baseProps = {
            autoPlay: true,
            muted: true,
            loop: true,
            preload: 'metadata',
            playsInline: true,
            webkitplaysinline: 'true',
            poster: item.video.poster,
            onLoadedData: () => handleLoaded(item.id),
          };
          const videoProps =
            idx % 2 === 1
              ? baseProps
              : {
                  ...baseProps,
                  onLoadedMetadata: (e) => e.currentTarget.pause(),
                  onMouseEnter: (e) => handleMouseEnter(e.currentTarget),
                  onMouseLeave: (e) => handleMouseLeave(e.currentTarget),
                };

          return (
            <li className={itemStyles.GalleryItem__item} key={item.id}>
              <GalleryItem video={item.video} href={item.src} title={item.title} desc={item.desc} videoProps={videoProps} isMobile={isMobile} />
              {!isLoaded && <div className={styles.Gallery__skeletonVideo} />}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
