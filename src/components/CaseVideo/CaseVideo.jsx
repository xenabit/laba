import { useState, useEffect, useRef } from 'react';
import styles from './CaseVideo.module.scss';
import VideoHorizontal from '../VideoHorizontal/VideoHorizontal';

function CaseVideo({ videoUrl, previewSrc, mobilePreviewSrc }) {
  const [isActive, setIsActive] = useState(false);
  const [isPreviewVisible, setIsPreviewVisible] = useState(true);
  const videoRef = useRef(null);

  const handleButtonClick = () => {
    setIsActive(true);
    // Запускаем воспроизведение видео, если это HTML5-видео
    if (videoRef.current && videoUrl.mp4) {
      videoRef.current.play().catch((e) => console.error('Error playing video:', e));
    }
  };

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        setIsPreviewVisible(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isActive]);

  return (
    <section className={`${styles.CaseVideo} ${isActive ? styles.active : ''}`}>
      <div className={styles.CaseVideo__container} onClick={handleButtonClick}>
        {!isActive && <button className={styles.CaseVideo__button}>Начать взаимодействие</button>}

        {previewSrc && isPreviewVisible && (
          <picture>
            {mobilePreviewSrc && <source media="(max-width: 768px)" srcSet={mobilePreviewSrc} />}
            <source type="image/avif" srcSet={previewSrc.avif} />
            <source type="image/webp" srcSet={previewSrc.webp} />
            <img
              src={previewSrc.img}
              alt="Превью"
              className={styles.CaseVideo__preview}
              loading="lazy"
              style={{
                opacity: isActive ? 0 : 1,
                transition: 'opacity 0.5s ease',
              }}
            />
          </picture>
        )}

        <VideoHorizontal videoUrl={videoUrl} ref={videoRef} />
      </div>
    </section>
  );
}

export default CaseVideo;
