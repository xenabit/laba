import { useState, useEffect } from 'react';
import styles from './CaseIframe.module.scss';

function CaseIframe({ iframeProps = {}, previewSrc, mobilePreviewSrc }) {
  const [isActive, setIsActive] = useState(false);
  const [isPreviewVisible, setIsPreviewVisible] = useState(true);

  const handleButtonClick = () => {
    setIsActive(true);
  };

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        setIsPreviewVisible(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isActive]);

  const defaultIframeProps = {
    src: '',
    allowFullScreen: true,
  };

  const mergedIframeProps = { ...defaultIframeProps, ...iframeProps };

  return (
    <section className={`${styles.CaseIframe} ${isActive ? styles.active : ''}`}>
      <div className={styles.CaseIframe__container} onClick={handleButtonClick}>
        {!isActive && <button className={styles.CaseIframe__button}>Начать взаимодействие</button>}

        {previewSrc && isPreviewVisible && (
          <picture>
            {mobilePreviewSrc && <source media="(max-width: 768px)" srcSet={mobilePreviewSrc} />}
            <source type="image/avif" srcSet={previewSrc.avif} />
            <source type="image/webp" srcSet={previewSrc.webp} />
            <img
              src={previewSrc.img}
              alt="Превью"
              className={styles.CaseIframe__preview}
              loading="lazy"
              style={{
                opacity: isActive ? 0 : 1,
                transition: 'opacity 0.5s ease',
              }}
            />
          </picture>
        )}

        <iframe className={styles.CaseIframe__iframe} {...mergedIframeProps}></iframe>
      </div>
    </section>
  );
}

export default CaseIframe;
