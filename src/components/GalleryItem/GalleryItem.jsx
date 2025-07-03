import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './GalleryItem.module.scss';

const isMobile = typeof window !== 'undefined' && window.innerWidth <= 1024;

const GalleryItem = forwardRef(function GalleryItem({ video, href, title, desc, videoProps }, ref) {
  return (
    <div ref={ref} className={styles.GalleryItem__item}>
      <Link to={href}>
        <video data-preload {...videoProps}>
          {isMobile ? (
            video.mp4 && <source src={video.mp4} type="video/mp4" />
          ) : (
            <>
              {video.webm && <source src={video.webm} type="video/webm" />}
              {video.mp4 && <source src={video.mp4} type="video/mp4" />}
            </>
          )}
        </video>
        <h2>
          <span>{desc}</span>
          <span>{title}</span>
        </h2>
      </Link>
    </div>
  );
});

export default React.memo(GalleryItem);
