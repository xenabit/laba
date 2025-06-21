import React, { useEffect, useMemo, useState, useCallback } from 'react';
import styles from './AboutList.module.scss';

import videoSrc from '../../assets/videos/about-list.mp4';
import num1 from '../../assets/images/about-list-num-1.svg';
import num2 from '../../assets/images/about-list-num-2.svg';
import num3 from '../../assets/images/about-list-num-3.svg';

const ITEMS = [
  {
    title: 'Всегда в&nbsp;контакте <br>с&nbsp;заказчиком',
    desc: 'Работаем двухнедельными спринтами, визуализируем прогресс и&nbsp;всегда готовы поделиться статусом проекта',
    video: videoSrc,
    num: num1,
    startTime: 0,
  },
  {
    title: 'Ищем лучшие решения <br>ваших задач',
    desc: 'Работаем от&nbsp;идеи&nbsp;&mdash; проводим глубокий анализ задачи и&nbsp;предлагаем несколько вариантов развития',
    video: videoSrc,
    num: num2,
    startTime: 3,
  },
  {
    title: 'Верим <br>в&nbsp;договоренности',
    desc: 'Пользуемся гибкой методологией Agile, стремимся быть не&nbsp;просто исполнителями, а&nbsp;партнёрами',
    video: videoSrc,
    num: num3,
    startTime: 6,
  },
];

export default function AboutList() {
  const [animated, setAnimated] = useState(() => ITEMS.map(() => false));

  const listRefs = useMemo(
    () => ITEMS.map(() => React.createRef()),
    []
  );
  const videoRefs = useMemo(
    () => ITEMS.map(() => React.createRef()),
    []
  );

  useEffect(() => {
    videoRefs.forEach((ref, idx) => {
      const vid = ref.current;
      if (vid) {
        vid.currentTime = ITEMS[idx].startTime;
        vid.play();
      }
    });
  }, [videoRefs]);

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

  return (
    <section className={styles.AboutList}>
      <h2 className={styles.AboutList__title}>Как мы работаем?</h2>
      <hr />
      <ul className={styles.AboutList__items}>
        {ITEMS.map((el, idx) => {
          const isAnimated = animated[idx];
          return (
            <li
              key={idx}
              data-index={idx}
              ref={listRefs[idx]}
              className={[
                styles.AboutList__item,
                isAnimated && styles.animate,
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <div className={styles.AboutList__text}>
                <div
                  className={[
                    styles.AboutList__header,
                    isAnimated && styles.animate,
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  <div className={styles.AboutList__num}>
                    <img loading="lazy" src={el.num} alt="Номер этапа" />
                  </div>
                  <div
                    className={styles.AboutList__subtitle}
                    dangerouslySetInnerHTML={{ __html: el.title }}
                  />
                </div>
                <div
                  className={[
                    styles.AboutList__desc,
                    isAnimated && styles.animate,
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  dangerouslySetInnerHTML={{ __html: el.desc }}
                />
              </div>
              <div className={styles.AboutList__video}>
                <video
                  ref={videoRefs[idx]}
                  preload="metadata"
                  loop
                  muted
                  playsInline
                  webkit-playsinline="true"
                >
                  <source src={el.video} type="video/mp4" />
                </video>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
