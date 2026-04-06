import React, { useEffect, useMemo, useState, useCallback, useRef } from 'react';
import styles from './AboutList.module.scss';

import videoMp4 from '../../assets/videos/about-list.mp4';
import videoWebM from '../../assets/videos/about-list.webm';
import num1 from '../../assets/images/about-list-num-1.svg';
import num2 from '../../assets/images/about-list-num-2.svg';
import num3 from '../../assets/images/about-list-num-3.svg';

// Функция для получения правильных путей в production
const getVideoPath = (path) => {
  if (import.meta.env.PROD) {
    // В production берем имя файла из пути
    const fileName = path.split('/').pop();
    return `/assets/videos/${fileName}`;
  }
  return path;
};

// Определяем устройства
const isIOS = typeof navigator !== 'undefined' && /iP(hone|ad|od)/.test(navigator.userAgent);
const isMobile = typeof navigator !== 'undefined' && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

const ITEMS = [
  {
    title: 'Всегда в&nbsp;контакте <br>с&nbsp;заказчиком',
    desc: 'Работаем двухнедельными спринтами, визуализируем прогресс и&nbsp;всегда готовы поделиться статусом проекта',
    video: {
      mp4: videoMp4,
      webm: videoWebM,
    },
    num: num1,
    startTime: 0,
  },
  {
    title: 'Ищем лучшие решения <br>ваших задач',
    desc: 'Работаем от&nbsp;идеи&nbsp;&mdash; проводим глубокий анализ задачи и&nbsp;предлагаем несколько вариантов развития',
    video: {
      mp4: videoMp4,
      webm: videoWebM,
    },
    num: num2,
    startTime: 3,
  },
  {
    title: 'Верим <br>в&nbsp;договоренности',
    desc: 'Пользуемся гибкой методологией Agile, стремимся быть не&nbsp;просто исполнителями, а&nbsp;партнёрами',
    video: {
      mp4: videoMp4,
      webm: videoWebM,
    },
    num: num3,
    startTime: 6,
  },
];

export default function AboutList() {
  const [animated, setAnimated] = useState(() => ITEMS.map(() => false));
  const [blobEnabled, setBlobEnabled] = useState(() => ITEMS.map(() => false));

  const listRefs = useMemo(() => ITEMS.map(() => React.createRef()), []);
  const videoRefs = useMemo(() => ITEMS.map(() => React.createRef()), []);

  // Определяем, какой формат видео использовать
  const useMp4 = isIOS || isMobile;

  // Настройка Blob URL для лучшей производительности
  const allowBlob = !isIOS && !isMobile;

  // Включаем Blob URL когда видео попадает в viewport
  useEffect(() => {
    if (!allowBlob) {
      // Если не поддерживаем Blob, включаем сразу
      setBlobEnabled(ITEMS.map(() => true));
      return;
    }

    const observers = videoRefs.map((ref, idx) => {
      const el = ref.current;
      if (!el || typeof IntersectionObserver === 'undefined') {
        setBlobEnabled((prev) => {
          const copy = [...prev];
          copy[idx] = true;
          return copy;
        });
        return null;
      }

      const io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            setBlobEnabled((prev) => {
              if (prev[idx]) return prev;
              const copy = [...prev];
              copy[idx] = true;
              return copy;
            });
            io.disconnect();
          }
        },
        { rootMargin: '200px', threshold: 0.01 }
      );

      io.observe(el);
      return io;
    });

    return () => {
      observers.forEach((io) => io && io.disconnect());
    };
  }, [allowBlob, videoRefs]);

  // Получаем Blob URL для видео
  const getVideoBlob = useCallback(async (src) => {
    if (!src) return null;
    try {
      const response = await fetch(src);
      const blob = await response.blob();
      return URL.createObjectURL(blob);
    } catch (error) {
      console.error('Error creating blob URL:', error);
      return src;
    }
  }, []);

  // Состояния для Blob URL
  const [videoBlobs, setVideoBlobs] = useState(() => ITEMS.map(() => ({ mp4: null, webm: null })));

  // Создаем Blob URL для видео
  useEffect(() => {
    if (!allowBlob) return;

    ITEMS.forEach(async (item, idx) => {
      if (blobEnabled[idx] && !videoBlobs[idx].mp4 && item.video.mp4) {
        const mp4Blob = await getVideoBlob(getVideoPath(item.video.mp4));
        const webmBlob = await getVideoBlob(getVideoPath(item.video.webm));

        setVideoBlobs((prev) => {
          const copy = [...prev];
          copy[idx] = { mp4: mp4Blob, webm: webmBlob };
          return copy;
        });
      }
    });

    // Cleanup Blob URLs
    return () => {
      videoBlobs.forEach((blob) => {
        if (blob.mp4 && typeof blob.mp4 === 'string' && blob.mp4.startsWith('blob:')) {
          URL.revokeObjectURL(blob.mp4);
        }
        if (blob.webm && typeof blob.webm === 'string' && blob.webm.startsWith('blob:')) {
          URL.revokeObjectURL(blob.webm);
        }
      });
    };
  }, [allowBlob, blobEnabled, getVideoBlob, videoBlobs]);

  // Функция для получения правильного источника видео
  const getVideoSource = useCallback(
    (item, idx) => {
      if (allowBlob && videoBlobs[idx]) {
        return {
          mp4: videoBlobs[idx].mp4 || getVideoPath(item.video.mp4),
          webm: videoBlobs[idx].webm || getVideoPath(item.video.webm),
        };
      }
      return {
        mp4: getVideoPath(item.video.mp4),
        webm: getVideoPath(item.video.webm),
      };
    },
    [allowBlob, videoBlobs]
  );

  // Управление воспроизведением
  useEffect(() => {
    videoRefs.forEach((ref, idx) => {
      const vid = ref.current;
      if (vid && vid.readyState >= 2) {
        vid.currentTime = ITEMS[idx].startTime;

        // Не автовоспроизводим на мобильных устройствах
        if (!isMobile && !isIOS) {
          vid.play().catch(() => {});
        }
      }
    });
  }, [videoRefs]);

  // Intersection Observer для анимаций
  const handleIntersect = useCallback(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = Number(entry.target.getAttribute('data-index'));
          setAnimated((prev) => {
            if (prev[idx]) return prev;
            const copy = [...prev];
            copy[idx] = true;
            return copy;
          });
          observer.unobserve(entry.target);

          // Запускаем видео когда элемент становится видимым
          const video = videoRefs[idx]?.current;
          if (video && !isMobile && !isIOS) {
            video.currentTime = ITEMS[idx].startTime;
            video.play().catch(() => {});
          }
        }
      });
    },
    [videoRefs]
  );

  useEffect(() => {
    const obs = new IntersectionObserver(handleIntersect, {
      threshold: 0.2,
    });
    listRefs.forEach((ref) => {
      if (ref.current) obs.observe(ref.current);
    });
    return () => obs.disconnect();
  }, [handleIntersect, listRefs]);

  // Функция для обработки ошибок загрузки видео
  const handleVideoError = useCallback((e, idx) => {
    console.error(`Video error for item ${idx}:`, e);
    const video = e.target;
    const src = video.querySelector('source');
    if (src && src.src) {
      console.log(`Failed to load: ${src.src}`);
    }
  }, []);

  return (
    <section className={styles.AboutList}>
      <h2 className={styles.AboutList__title}>Как мы работаем?</h2>
      <hr />
      <ul className={styles.AboutList__items}>
        {ITEMS.map((el, idx) => {
          const isAnimated = animated[idx];
          const videoSrc = getVideoSource(el, idx);
          const shouldUseMp4 = useMp4 || (allowBlob && videoSrc.mp4);

          return (
            <li key={idx} data-index={idx} ref={listRefs[idx]} className={[styles.AboutList__item, isAnimated && styles.animate].filter(Boolean).join(' ')}>
              <div className={styles.AboutList__text}>
                <div className={[styles.AboutList__header, isAnimated && styles.animate].filter(Boolean).join(' ')}>
                  <div className={styles.AboutList__num}>
                    <img loading="lazy" src={el.num} alt="Номер этапа" />
                  </div>
                  <div className={styles.AboutList__subtitle} dangerouslySetInnerHTML={{ __html: el.title }} />
                </div>
                <div className={[styles.AboutList__desc, isAnimated && styles.animate].filter(Boolean).join(' ')} dangerouslySetInnerHTML={{ __html: el.desc }} />
              </div>
              <div className={styles.AboutList__video}>
                <video ref={videoRefs[idx]} preload="metadata" loop muted playsInline webkit-playsinline="true" onError={(e) => handleVideoError(e, idx)}>
                  {videoSrc.webm && !shouldUseMp4 && <source src={videoSrc.webm} type="video/webm" />}
                  {videoSrc.mp4 && <source src={videoSrc.mp4} type="video/mp4" />}
                </video>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
