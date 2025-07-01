import { useState, useCallback, useEffect } from 'react';
import styles from './Gallery.module.scss';
import itemStyles from '../GalleryItem/GalleryItem.module.scss';
import GalleryItem from '../GalleryItem/GalleryItem';
import { projects } from '../../constants/projects';

const isMobile =
  typeof window !== 'undefined' && window.innerWidth <= 1024;

export default function Gallery() {
  const total = 6;

  const [loadedIds, setLoadedIds] = useState(() => {
    try {
      return new Set(
        JSON.parse(sessionStorage.getItem('galleryLoadedIds') || '[]')
      );
    } catch {
      return new Set();
    }
  });

  const handleLoaded = useCallback((id) => {
    setLoadedIds((prev) => {
      if (prev.has(id)) return prev;
      const next = new Set(prev).add(id);
      sessionStorage.setItem(
        'galleryLoadedIds',
        JSON.stringify(Array.from(next))
      );
      return next;
    });
  }, []);

  const handleMouseEnter = useCallback((video) => {
    video.play().catch(() => {});
  }, []);
  const handleMouseLeave = useCallback((video) => {
    video.pause();
  }, []);

  useEffect(() => {
    const container = document.createElement('div');
    container.style.cssText = 'position:absolute; width:0; height:0; overflow:hidden;';
    document.body.appendChild(container);

    projects.slice(0, total).forEach((item) => {
      const vid = document.createElement('video');
      vid.preload = 'auto';
      vid.muted = true;
      vid.playsInline = true;
      vid.webkitPlaysInline = true;
      vid.style.cssText = 'width:0; height:0; opacity:0; pointer-events:none;';
      vid.onloadeddata = () => handleLoaded(item.id);
      if (!isMobile && item.video.webm) {
        const src = document.createElement('source');
        src.src = item.video.webm;
        src.type = 'video/webm';
        vid.appendChild(src);
      }
      if (item.video.mp4) {
        const src2 = document.createElement('source');
        src2.src = item.video.mp4;
        src2.type = 'video/mp4';
        vid.appendChild(src2);
      }
      container.appendChild(vid);
    });

    return () => document.body.removeChild(container);
  }, [handleLoaded]);

  return (
    <section className={styles.Gallery}>
      <ul className={styles.Gallery__items}>
        {projects.slice(0, total).map((item, idx) => {
          const isLoaded = loadedIds.has(item.id);
          const baseVideoProps = {
            autoPlay: true,
            muted: true,
            loop: true,
            preload: 'metadata',
            playsInline: true,
            webkitPlaysInline: 'true',
            poster: item.video.poster,
            onLoadedData: () => handleLoaded(item.id),
          };
          const videoProps =
            idx % 2 === 1
              ? baseVideoProps
              : {
                  ...baseVideoProps,
                  onLoadedMetadata: (e) => e.currentTarget.pause(),
                  onMouseEnter: (e) =>
                    handleMouseEnter(e.currentTarget),
                  onMouseLeave: (e) =>
                    handleMouseLeave(e.currentTarget),
                };

          return (
            <li
              key={item.id}
              className={itemStyles.GalleryItem__item}
            >
              {isLoaded ? (
                <GalleryItem
                  video={item.video}
                  href={item.src}
                  title={item.title}
                  desc={item.desc}
                  videoProps={videoProps}
                  isMobile={isMobile}
                />
              ) : (
                <div className={styles.Gallery__skeletonVideo} />
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
