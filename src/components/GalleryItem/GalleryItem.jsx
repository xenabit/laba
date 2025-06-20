import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './GalleryItem.module.scss';

const GalleryItem = forwardRef(function GalleryItem({ videoSrc, href, title, desc, videoProps }, ref) {
  return (
    <div ref={ref} className={styles.GalleryItem__item}>
      <Link to={href}>
        <video {...videoProps} preload="metadata" loop muted data-preload playsInline webkit-playsinline="true">
          <source src={videoSrc} type="video/mp4" />
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
