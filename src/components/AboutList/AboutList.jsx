import React, { useEffect, useRef, useState } from 'react';
import styles from './AboutList.module.scss';

import videoSrc from '../../assets/videos/about-list.mp4';
import num1 from '../../assets/images/about-list-num-1.svg';
import num2 from '../../assets/images/about-list-num-2.svg';
import num3 from '../../assets/images/about-list-num-3.svg';

const items = [
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
  const [animatedSet, setAnimatedSet] = useState(new Set());
  const listRefs = useRef(items.map(() => React.createRef()));
  const videoRefs = useRef(items.map(() => React.createRef()));

  useEffect(() => {
    videoRefs.current.forEach((ref, idx) => {
      const videoEl = ref.current;
      if (videoEl) {
        videoEl.currentTime = items[idx].startTime;
        videoEl.play();
      }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-index'));
            setAnimatedSet((prev) => new Set([...prev, idx]));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    listRefs.current.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className={styles.AboutList}>
      <h2 className={styles.AboutList__title}>Как мы работаем?</h2>
      <hr />
      <ul className={styles.AboutList__items}>
        {items.map((el, index) => {
          const isAnimated = animatedSet.has(index);
          return (
            <li
              key={index}
              data-index={index}
              ref={listRefs.current[index]}
              className={`${styles.AboutList__item} ${isAnimated ? styles.animate : ''}`}
            >
              <div className={styles.AboutList__text}>
                <div className={`${styles.AboutList__header} ${isAnimated ? styles.animate : ''}`}>
                  <div className={styles.AboutList__num}>
                    <img loading="lazy" src={el.num} alt="Номер этапа" />
                  </div>
                  <div
                    className={styles.AboutList__subtitle}
                    dangerouslySetInnerHTML={{ __html: el.title }}
                  />
                </div>
                <div
                  className={`${styles.AboutList__desc} ${isAnimated ? styles.animate : ''}`}
                  dangerouslySetInnerHTML={{ __html: el.desc }}
                />
              </div>
              <div className={styles.AboutList__video}>
                <video
                  ref={videoRefs.current[index]}
                  preload="auto"
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
