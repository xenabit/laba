import { useState } from 'react';
import styles from './Gallery.module.scss';
import itemStyles from '../GalleryItem/GalleryItem.module.scss';
import GalleryItem from '../GalleryItem/GalleryItem';
import { projects } from '../../constants/projects';

export default function Gallery() {
  const total = 6;
  const [loadedCount, setLoadedCount] = useState(0);

  const handleLoaded = () => {
    setLoadedCount((c) => {
      const newCount = c + 1;
      return newCount;
    });
  };

  const showSkeleton = loadedCount < total;

  const handleMouseEnter = (video) => {
    video.play().catch((err) => console.error('Play error:', err));
  };
  const handleMouseLeave = (video) => {
    video.pause();
  };

  const preloads = projects.slice(0, total).map((item) => (
    <video
      key={`preload-${item.id}`}
      preload="metadata"
      muted
      data-preload
      onLoadedData={handleLoaded}
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
      {item.video.webm && <source src={item.video.webm} type="video/webm" />}
      {item.video.mp4 && <source src={item.video.mp4} type="video/mp4" />}
    </video>
  ));

  return (
    <section className={styles.Gallery}>
      <div style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}>{preloads}</div>

      <ul className={styles.Gallery__items}>
        {showSkeleton
          ? Array.from({ length: total }).map((_, i) => (
              <li className={itemStyles.GalleryItem__item} key={`ske-${i}`}>
                <div className={styles.Gallery__skeletonVideo} />
              </li>
            ))
          : projects.slice(0, total).map((item, index) => {
              const baseVideoProps = {
                autoPlay: true,
                muted: true,
                loop: true,
                preload: 'metadata',
                'data-preload': true,
                playsInline: true,
                webkitplaysinline: 'true',
              };

              const videoProps =
                index % 2 === 1
                  ? baseVideoProps
                  : {
                      ...baseVideoProps,
                      onLoadedMetadata: (e) => {
                        e.currentTarget.pause();
                      },
                      onMouseEnter: (e) => handleMouseEnter(e.currentTarget),
                      onMouseLeave: (e) => handleMouseLeave(e.currentTarget),
                    };

              return <GalleryItem key={item.id} video={item.video} href={item.src} title={item.title} desc={item.desc} videoProps={videoProps} />;
            })}
      </ul>
    </section>
  );
}
