import React, { forwardRef, useCallback, useRef, useState, useEffect, memo, useMemo } from 'react';
import styles from './AboutList.module.scss';

import videoMp4 from '../../assets/videos/about-list.mp4';
import videoWebM from '../../assets/videos/about-list.webm';
import num1 from '../../assets/images/about-list-num-1.svg';
import num2 from '../../assets/images/about-list-num-2.svg';
import num3 from '../../assets/images/about-list-num-3.svg';
import { useVideoBlob } from '../../utils/useVideoBlob';
import useIsMobile from '../../hooks/useIsMobile';

const isIOS = typeof navigator !== 'undefined' && /iP(hone|ad|od)/.test(navigator.userAgent);

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

const AboutListItem = forwardRef(function AboutListItem({ item, index, isAnimated, onVideoReady }, ref) {
  const isMobile = useIsMobile();
  const videoEl = useRef(null);

  const useMp4 = isIOS || isMobile;
  const mp4Src = useMp4 ? item.video.mp4 : undefined;
  const webmSrc = !useMp4 ? item.video.webm : undefined;

  const allowBlob = !isIOS && !isMobile;

  const [blobEnabled, setBlobEnabled] = useState(false);

  useEffect(() => {
    if (!allowBlob) return;
    const el = videoEl.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setBlobEnabled(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setBlobEnabled(true);
          io.disconnect();
        }
      },
      { rootMargin: '400px', threshold: 0.01 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [allowBlob]);

  const mp4Blob = useVideoBlob(mp4Src, allowBlob && blobEnabled);
  const webmBlob = useVideoBlob(webmSrc, allowBlob && blobEnabled);

  const mp4 = allowBlob ? mp4Blob : mp4Src;
  const webm = allowBlob ? webmBlob : webmSrc;

  const onLoadedMetadata = useCallback(() => {
    if (videoEl.current && videoEl.current.readyState >= 2) {
      videoEl.current.currentTime = item.startTime;
      if (!isMobile && !isIOS) {
        videoEl.current.play().catch(() => {});
      }
      onVideoReady?.(index);
    }
  }, [item.startTime, isMobile, onVideoReady, index]);

  useEffect(() => {
    const v = videoEl.current;
    if (!v) return;

    const tryPlay = () => {
      if (v.readyState >= 2) {
        v.currentTime = item.startTime;
        if (!isMobile && !isIOS) {
          v.play().catch(() => {});
        }
      }
    };

    if (v.readyState >= 2) {
      tryPlay();
    } else {
      v.addEventListener('loadedmetadata', tryPlay, { once: true });
      return () => v.removeEventListener('loadedmetadata', tryPlay);
    }
  }, [item.startTime, isMobile]);

  return (
    <li ref={ref} data-index={index} className={[styles.AboutList__item, isAnimated && styles.animate].filter(Boolean).join(' ')}>
      <div className={styles.AboutList__text}>
        <div className={[styles.AboutList__header, isAnimated && styles.animate].filter(Boolean).join(' ')}>
          <div className={styles.AboutList__num}>
            <img loading="lazy" src={item.num} alt="Номер этапа" />
          </div>
          <div className={styles.AboutList__subtitle} dangerouslySetInnerHTML={{ __html: item.title }} />
        </div>
        <div className={[styles.AboutList__desc, isAnimated && styles.animate].filter(Boolean).join(' ')} dangerouslySetInnerHTML={{ __html: item.desc }} />
      </div>
      <div className={styles.AboutList__video}>
        <video
          ref={videoEl}
          data-preload
          {...(allowBlob ? { 'data-blob-managed': '1' } : {})}
          muted
          loop
          playsInline
          webkit-playsinline="true"
          preload="metadata"
          controls={false}
          disablePictureInPicture
          onLoadedMetadata={onLoadedMetadata}
        >
          {webm && !useMp4 && <source src={webm} type="video/webm" />}
          {mp4 && <source src={mp4} type="video/mp4" />}
        </video>
      </div>
    </li>
  );
});

function AboutListItemAreEqual(prev, next) {
  return (
    prev.index === next.index &&
    prev.isAnimated === next.isAnimated &&
    prev.item?.title === next.item?.title &&
    prev.item?.desc === next.item?.desc &&
    prev.item?.num === next.item?.num &&
    prev.item?.startTime === next.item?.startTime &&
    prev.item?.video?.mp4 === next.item?.video?.mp4 &&
    prev.item?.video?.webm === next.item?.video?.webm
  );
}

const MemoizedAboutListItem = memo(AboutListItem, AboutListItemAreEqual);

export default function AboutList() {
  const [animated, setAnimated] = useState(() => ITEMS.map(() => false));
  const listRefs = useMemo(() => ITEMS.map(() => React.createRef()), []);
  const videoReadyCount = useRef(0);

  const handleIntersect = useCallback((entries, observer) => {
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
      }
    });
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(handleIntersect, {
      threshold: 0.2,
    });
    listRefs.forEach((ref) => {
      if (ref.current) obs.observe(ref.current);
    });
    return () => obs.disconnect();
  }, [handleIntersect, listRefs]);

  const handleVideoReady = useCallback((index) => {
    videoReadyCount.current += 1;
  }, []);

  return (
    <section className={styles.AboutList}>
      <h2 className={styles.AboutList__title}>Как мы работаем?</h2>
      <hr />
      <ul className={styles.AboutList__items}>
        {ITEMS.map((el, idx) => (
          <MemoizedAboutListItem key={idx} ref={listRefs[idx]} item={el} index={idx} isAnimated={animated[idx]} onVideoReady={handleVideoReady} />
        ))}
      </ul>
    </section>
  );
}
