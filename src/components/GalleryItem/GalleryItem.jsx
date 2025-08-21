import React, { forwardRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './GalleryItem.module.scss';
import { useVideoBlob } from '../../utils/useVideoBlob';
import useIsMobile from '../../hooks/useIsMobile';

const isIOS = typeof navigator !== 'undefined' && /iP(hone|ad|od)/.test(navigator.userAgent);

const GalleryItem = forwardRef(function GalleryItem({ video, href, title, desc, videoProps }, ref) {
  const location = useLocation();
  const isMobile = useIsMobile();

  const mp4Blob = useVideoBlob(video?.mp4 && (isMobile || isIOS) ? video.mp4 : undefined);
  const webmBlob = useVideoBlob(video?.webm && !isIOS && !isMobile ? video.webm : undefined);

  return (
    <div ref={ref} className={styles.GalleryItem__item}>
      <Link to={href} state={{ from: location }}>
        <video data-preload {...videoProps}>
          {video.webm && <source src={webmBlob ?? video.webm} type="video/webm" />}
          {video.mp4 && <source src={mp4Blob ?? video.mp4} type="video/mp4" />}
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
