import { useState, useEffect, useRef } from 'react';
import styles from './CaseVideo.module.scss';
import VideoHorizontal from '../VideoHorizontal/VideoHorizontal';

function CaseVideo({ videoContent }) {
  const [isActive, setIsActive] = useState(false);
  const [isPreviewVisible, setIsPreviewVisible] = useState(true);
  const videoRef = useRef(null);

  const handleButtonClick = () => {
    setIsActive(true);
    if (videoRef.current && videoContent.file?.mp4) {
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

  const getSrcSet = (pictureData) => {
    if (!pictureData) return '';
    if (pictureData.webp2x) {
      return `${pictureData.webp} 1x, ${pictureData.webp2x} 2x`;
    }
    return pictureData.webp || '';
  };

  const getSrcSetAvif = (pictureData) => {
    if (!pictureData) return '';
    if (pictureData.avif2x) {
      return `${pictureData.avif} 1x, ${pictureData.avif2x} 2x`;
    }
    return pictureData.avif || '';
  };

  return (
    <section className={`${styles.CaseVideo} ${isActive ? styles.active : ''}`}>
      <div className={styles.CaseVideo__container} onClick={handleButtonClick}>
        {!isActive && <button className={styles.CaseVideo__button}>Запустить видео</button>}

        {videoContent.preview && isPreviewVisible && (
          <picture>
            {videoContent.preview.avif && <source type="image/avif" srcSet={getSrcSetAvif(videoContent.preview)} />}
            {videoContent.preview.webp && <source type="image/webp" srcSet={getSrcSet(videoContent.preview)} />}
            <img
              src={videoContent.preview.img}
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

        <VideoHorizontal videoUrl={videoContent.file} ref={videoRef} />
      </div>
    </section>
  );
}

export default CaseVideo;
