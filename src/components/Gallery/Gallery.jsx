import { useCallback } from 'react';
import styles from './Gallery.module.scss';
import itemStyles from '../GalleryItem/GalleryItem.module.scss';
import GalleryItem from '../GalleryItem/GalleryItem';
import { projects } from '../../constants/projects';

const isMobile = typeof window !== 'undefined' && window.innerWidth <= 1024;

export default function Gallery() {
  const total = 6;

  const handleMouseEnter = useCallback(video => video.play().catch(() => {}), []);
  const handleMouseLeave = useCallback(video => video.pause(), []);

  return (
    <section className={styles.Gallery}>
      <ul className={styles.Gallery__items}>
        {projects.slice(0, total).map((item, idx) => {
          const baseVideoProps = {
            autoPlay: true,
            muted: true,
            loop: true,
            preload: 'metadata',
            playsInline: true,
            webkitPlaysInline: 'true',
            poster: item.video.poster,
          };

          const videoProps =
            idx % 2 === 1
              ? baseVideoProps
              : {
                  ...baseVideoProps,
                  onLoadedMetadata: e => e.currentTarget.pause(),
                  onMouseEnter: e => handleMouseEnter(e.currentTarget),
                  onMouseLeave: e => handleMouseLeave(e.currentTarget),
                };

          return (
            <li key={item.id} className={itemStyles.GalleryItem__item}>
              <GalleryItem
                video={item.video}
                href={item.src}
                title={item.title}
                desc={item.desc}
                videoProps={videoProps}
                isMobile={isMobile}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
