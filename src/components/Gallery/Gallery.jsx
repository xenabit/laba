import React, { useState } from 'react';
import styles     from './Gallery.module.scss';
import itemStyles from '../GalleryItem/GalleryItem.module.scss';
import GalleryItem from '../GalleryItem/GalleryItem';
import { projects } from '../../constants/projects';

export default function Gallery() {
  const total = 6;
  const [loadedCount, setLoadedCount] = useState(0);

  const handleLoaded = () => setLoadedCount(c => c + 1);

  const handleMouseEnter = video => video.play();
  const handleMouseLeave = video => video.pause();

  const preloads = projects.slice(0, total).map(item => (
    <video
      key={`preload-${item.id}`}
      src={item.video}
      preload="auto"
      muted
      onLoadedData={handleLoaded}
      style={{
        position: 'absolute',
        width: 0,
        height: 0,
        overflow: 'hidden',
        opacity: 0,
      }}
    />
  ));

  const showSkeleton = loadedCount < total;

  return (
    <section className={styles.Gallery}>
      <div style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}>
        {preloads}
      </div>

      <ul className={styles.Gallery__items}>
        {showSkeleton
          ?
            Array.from({ length: total }).map((_, i) => (
              <li className={itemStyles.GalleryItem__item} key={`ske-${i}`}>
                <div className={styles.Gallery__skeletonVideo} />
              </li>
            ))
          :
            projects.slice(0, total).map((item, index) => {
              const baseVideoProps = {
                autoPlay: true,
                muted: true,
                loop: true,
                preload: 'auto',
                playsInline: true,
                webkitplaysinline: 'true',
              };

              const videoProps =
                index % 2 === 1
                  ? baseVideoProps
                  : {
                      ...baseVideoProps,
                      onLoadedMetadata: e => e.currentTarget.pause(),
                      onMouseEnter:    e => handleMouseEnter(e.currentTarget),
                      onMouseLeave:    e => handleMouseLeave(e.currentTarget),
                    };

              return (
                <GalleryItem
                  key={item.id}
                  videoSrc={item.video}
                  href={item.src}
                  title={item.title}
                  desc={item.desc}
                  videoProps={videoProps}
                />
              );
            })}
      </ul>
    </section>
  );
}
