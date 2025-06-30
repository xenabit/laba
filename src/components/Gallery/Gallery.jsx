import { useState, useCallback } from 'react';
import styles from './Gallery.module.scss';
import itemStyles from '../GalleryItem/GalleryItem.module.scss';
import GalleryItem from '../GalleryItem/GalleryItem';
import { projects } from '../../constants/projects';
import useVideoPreload from '../../constants/useVideoPreload.js';

const isMobile = typeof window !== 'undefined' && window.innerWidth <= 1024;

export default function Gallery() {

  useVideoPreload();

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

  const handleMouseEnter = useCallback((video) => {
    video.play().catch(() => {});
  }, []);
  const handleMouseLeave = useCallback((video) => {
    video.pause();
  }, []);

  const preloads = projects.slice(0, total).map((item) => (
    <video
      key={`preload-${item.id}`}
      preload="none"
      muted
      data-preload
      onLoadedData={() => handleLoaded(item.id)}
      style={{
        position: 'absolute',
        width: 0,
        height: 0,
        overflow: 'hidden',
        opacity: 0,
      }}
      playsInline
      webkit-playsinline="true"
    >
      {isMobile ? (
        item.video.mp4 && <source src={item.video.mp4} type="video/mp4" />
      ) : (
        <>
          {item.video.mp4 && <source src={item.video.mp4} type="video/mp4" />}
          {item.video.webm && <source src={item.video.webm} type="video/webm" />}
        </>
      )}
    </video>
  ));

  return (
    <section className={styles.Gallery}>
      <div style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}>{preloads}</div>

      <ul className={styles.Gallery__items}>
        {projects.slice(0, total).map((item, index) => {
          const isLoaded = loadedIds.has(item.id);

          const baseVideoProps = {
            autoPlay: true,
            muted: true,
            loop: true,
            preload: 'none',
            'data-preload': true,
            playsInline: true,
            webkitplaysinline: 'true',
            onLoadedData: () => handleLoaded(item.id),
          };

          const videoProps =
            index % 2 === 1
              ? baseVideoProps
              : {
                  ...baseVideoProps,
                  onLoadedMetadata: (e) => e.currentTarget.pause(),
                  onMouseEnter: (e) => handleMouseEnter(e.currentTarget),
                  onMouseLeave: (e) => handleMouseLeave(e.currentTarget),
                };

          return (
            <li className={itemStyles.GalleryItem__item} key={item.id}>
              {isLoaded ? <GalleryItem video={item.video} href={item.src} title={item.title} desc={item.desc} videoProps={videoProps} /> : <div className={styles.Gallery__skeletonVideo} />}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
