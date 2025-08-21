import { useCallback, useMemo } from 'react';
import styles from './Gallery.module.scss';
import itemStyles from '../GalleryItem/GalleryItem.module.scss';
import GalleryItem from '../GalleryItem/GalleryItem';
import { projects } from '../../constants/projects';
import useIsMobile from '../../hooks/useIsMobile';

export default function Gallery() {
  const total = 6;
  const isMobile = useIsMobile();

  const handleMouseEnter = useCallback((video) => video.play().catch(() => {}), []);
  const handleMouseLeave = useCallback((video) => video.pause(), []);

  const videoPropsList = useMemo(() => {
    return projects.slice(0, total).map((item, idx) => {
      const preloadValue = isMobile ? 'metadata' : 'auto';
      const base = {
        autoPlay: true,
        muted: true,
        loop: true,
        preload: preloadValue,
        playsInline: true,
        poster: item.video.poster,
      };
      if (idx % 2 === 1) return base;
      return {
        ...base,
        onLoadedMetadata: (e) => e.currentTarget.pause(),
        onMouseEnter: (e) => handleMouseEnter(e.currentTarget),
        onMouseLeave: (e) => handleMouseLeave(e.currentTarget),
      };
    });
  }, [isMobile, handleMouseEnter, handleMouseLeave]);

  return (
    <section className={styles.Gallery}>
      <ul className={styles.Gallery__items}>
        {projects.slice(0, total).map((item, idx) => {
          const videoProps = videoPropsList[idx];
          return (
            <li key={item.id} className={itemStyles.GalleryItem__item}>
              <GalleryItem video={item.video} href={item.src} title={item.title} desc={item.desc} videoProps={videoProps} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
