import { useEffect, useRef, useState } from 'react';
import styles from './AboutList.module.scss';

import video from '../../assets/videos/about-list.mp4';
import num1 from '../../assets/images/about-list-num-1.svg';
import num2 from '../../assets/images/about-list-num-2.svg';
import num3 from '../../assets/images/about-list-num-3.svg';

const items = [
  {
    title: 'Всегда в&nbsp;контакте <br>с&nbsp;заказчиком',
    desc: 'Работаем по&nbsp;системе такой&nbsp;то&nbsp;2х недельными спринтами, предоставляем результаты работ и&nbsp;внимательно слушаем наших заказчиков',
    video: video,
    num: num1,
    startTime: 0,
  },
  {
    title: 'Ищем лучшие решения <br>ваших задач',
    desc: 'Работаем по&nbsp;системе такой&nbsp;то&nbsp;2х недельными спринтами, предоставляем результаты работ и&nbsp;внимательно слушаем наших заказчиков',
    video: video,
    num: num2,
    startTime: 3,
  },
  {
    title: 'Верим <br>в&nbsp;договоренности',
    desc: 'Работаем по&nbsp;системе такой&nbsp;то&nbsp;2х недельными спринтами, предоставляем результаты работ и&nbsp;внимательно слушаем наших заказчиков',
    video: video,
    num: num3,
    startTime: 6,
  },
];

function AboutList() {
  const [animateIndices, setAnimateIndices] = useState([]);
  const listRefs = useRef([]);

  const videoRefs = useRef([]);
  useEffect(() => {
    videoRefs.current.forEach((videoRef, index) => {
      if (videoRef) {
        videoRef.currentTime = items[index].startTime;
        videoRef.play();
      }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute('data-index');
            setAnimateIndices((prev) => [...prev, parseInt(index)]);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    listRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      listRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <section className={styles.AboutList}>
      <h2 className={styles.AboutList__title}>Как мы работаем?</h2>
      <hr />
      <ul className={styles.AboutList__items}>
        {items.map((el, index) => (
          <li className={`${styles.AboutList__item} ${animateIndices.includes(index) ? styles.animate : ''}`} key={index} data-index={index} ref={(el) => (listRefs.current[index] = el)}>
            <div className={styles.AboutList__text}>
              <div className={`${styles.AboutList__header} ${animateIndices.includes(index) ? styles.animate : ''}`}>
                <div className={styles.AboutList__num}>
                  <img loading="lazy" src={el.num} />
                </div>
                <div className={styles.AboutList__subtitle} dangerouslySetInnerHTML={{ __html: el.title }} />
              </div>
              <div className={`${styles.AboutList__desc} ${animateIndices.includes(index) ? styles.animate : ''}`} dangerouslySetInnerHTML={{ __html: el.desc }} />
            </div>
            <div className={styles.AboutList__video}>
              <video ref={(el) => (videoRefs.current[index] = el)} preload="auto" loop muted>
                <source src={el.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default AboutList;
