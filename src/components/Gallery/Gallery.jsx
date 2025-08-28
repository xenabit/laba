import { useMemo } from 'react';
import styles from './Gallery.module.scss';
import itemStyles from '../GalleryItem/GalleryItem.module.scss';
import GalleryItem from '../GalleryItem/GalleryItem';
import { projects } from '../../constants/projects';
import useIsMobile from '../../hooks/useIsMobile';
import posters from '@/assets/videos/posters.js';

export default function Gallery() {
  const total = 6;
  const isMobile = useIsMobile();
  const isIOS = typeof navigator !== 'undefined' && /iP(hone|ad|od)/.test(navigator.userAgent);

  const list = useMemo(() => projects.slice(0, total), [total]);

  return (
    <section className={styles.Gallery}>
      <ul className={styles.Gallery__items}>
        {list.map((item, idx) => {
          const hoverPlayable = idx % 2 === 0;
          const preload = isIOS ? 'auto' : isMobile ? 'metadata' : 'auto';
          const fallbackPoster = posters[idx % posters.length];

          return (
            <li key={item.id} className={itemStyles.GalleryItem__item}>
              <GalleryItem video={item.video} href={item.src} title={item.title} desc={item.desc} hoverPlayable={hoverPlayable} preload={preload} fallbackPoster={fallbackPoster} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
