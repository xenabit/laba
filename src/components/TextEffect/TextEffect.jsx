import { useEffect, useRef, useState } from 'react';
import _ from 'lodash';
import styles from './TextEffect.module.scss';

import icon1 from '../../assets/images/text-effect-1.png';
import icon2 from '../../assets/images/text-effect-2.png';
import icon3 from '../../assets/images/text-effect-3.png';

const TextEffect = () => {
  const heroRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!heroRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );
    const element = heroRef.current;
    observer.observe(element);
    return () => {
      observer.unobserve(element);
    };
  }, []);

 useEffect(() => {
    if (!heroRef.current) return;
    if (isVisible) {
      heroRef.current.classList.remove(styles.animate);
      void heroRef.current.offsetWidth;
      setTimeout(() => {
        heroRef.current.classList.add(styles.animate);
      }, 150);
    } else {
      heroRef.current.classList.remove(styles.animate);
    }
  }, [isVisible]);

  const onMouseMove = (e) => {
    if (!isVisible) return;
    const { clientX, clientY } = e;
    const x = Math.round((clientX / window.innerWidth) * 100);
    const y = Math.round((clientY / window.innerHeight) * 100);
    if (heroRef.current) {
      heroRef.current.style.setProperty('--x', `${x}%`);
      heroRef.current.style.setProperty('--y', `${y}%`);
    }
  };

  useEffect(() => {
    const handleMouseMove = _.throttle(onMouseMove, 50);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section ref={heroRef} className={styles.TextEffect}>
      <div className={styles.TextEffect__wrapper}>
        <div className={`${styles.TextEffect__layer} ${styles.TextEffect__layer_first}`}>
          <div className={styles.TextEffect__text}>
            <div><span>Вдохновляющие</span></div>
            <div><span>проекты для</span></div>
            <div><span>амбициозных</span></div>
            <div><span>заказчиков</span></div>
          </div>
        </div>
        <div className={`${styles.TextEffect__layer} ${styles.TextEffect__layer_secondary}`} aria-hidden="true">
          <div className={styles.TextEffect__text}>
            <div><span>Вдохновляющие</span></div>
            <div><span>проекты для</span></div>
            <div><span>амбициозных</span></div>
            <div><span>заказчиков</span></div>
          </div>
        </div>
        <div className={styles.TextEffect__footnote}>
          Работаем по&nbsp;системе такой то&nbsp;2х&nbsp;недельными спринтами, предоставляем результаты работ и&nbsp;внимательно слушаем наших заказчиков
        </div>
        <div className={styles.TextEffect__icons}>
          <div className={styles.TextEffect__icon}>
            <img loading="lazy" src={icon1} alt="Icon 1" />
          </div>
          <div className={styles.TextEffect__icon}>
            <img loading="lazy" src={icon2} alt="Icon 2" />
          </div>
          <div className={styles.TextEffect__icon}>
            <img loading="lazy" src={icon3} alt="Icon 3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextEffect;
