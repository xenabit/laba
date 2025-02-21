import { useCallback, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import _ from 'lodash';
import styles from './TextEffect.module.scss';

import icon1 from '../../assets/images/text-effect-1.png';
import icon2 from '../../assets/images/text-effect-2.png';
import icon3 from '../../assets/images/text-effect-3.png';

const TextEffect = () => {
  const heroRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const prevScrollY = useRef(window.scrollY);

  useEffect(() => {
    const currentHero = heroRef.current;
    if (!currentHero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: '0px 0px -40% 0px', threshold: 0 }
    );
    observer.observe(currentHero);
    return () => {
      if (currentHero) observer.unobserve(currentHero);
    };
  }, []);

  const animateText = useCallback(() => {
    if (!heroRef.current) return;
    const firstLayerLines = heroRef.current.querySelectorAll(
      `.${styles.TextEffect__layer_first} .${styles.TextEffect__text} > div`
    );
    const secondLayerLines = heroRef.current.querySelectorAll(
      `.${styles.TextEffect__layer_secondary} .${styles.TextEffect__text} > div`
    );
    const thirdLayerLines = heroRef.current.querySelectorAll(
      `.${styles.TextEffect__icons} > div`
    );

    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(() => {
          if (heroRef.current) {
            heroRef.current.classList.add(styles.animate);
          }
        }, 100);
      },
    });

   tl.set([...firstLayerLines, ...secondLayerLines, ...thirdLayerLines], {
      opacity: 0,
      x: (index) => (index % 2 === 1 ? '-100%' : '100%'),
    });

    tl.to(firstLayerLines, {
      x: 0,
      opacity: 1,
      duration: 1.5,
      ease: 'linear',
      stagger: 0.1,
    }, 0);

    tl.to(secondLayerLines, {
      x: 0,
      opacity: 1,
      duration: 1.5,
      ease: 'linear',
      stagger: 0.1,
    }, 0);
  }, []);

 useEffect(() => {
    if (!heroRef.current) return;
    if (isVisible) {
      heroRef.current.classList.remove(styles.animate);
      void heroRef.current.offsetWidth;
      animateText();
    } else {
      heroRef.current.classList.remove(styles.animate);
    }
  }, [isVisible, animateText]);

  useEffect(() => {
    if (!isVisible || !heroRef.current) return;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < prevScrollY.current) {
        heroRef.current.classList.remove(styles.animate);
        void heroRef.current.offsetWidth;
        animateText();
      }
      prevScrollY.current = currentScrollY;
    };

    const throttledHandleScroll = _.throttle(handleScroll, 200);
    window.addEventListener('scroll', throttledHandleScroll);
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [isVisible, animateText]);


  const onMouseMove = useCallback((e) => {
    if (!heroRef.current || !isVisible) return;
    const { clientX, clientY } = e;
    const x = Math.round((clientX / window.innerWidth) * 100);
    const y = Math.round((clientY / window.innerHeight) * 100);
    heroRef.current.style.setProperty('--x', `${x}%`);
    heroRef.current.style.setProperty('--y', `${y}%`);
  }, [isVisible]);

  useEffect(() => {
    const throttledMouseMove = _.throttle(onMouseMove, 10);
    window.addEventListener('mousemove', throttledMouseMove);
    return () => window.removeEventListener('mousemove', throttledMouseMove);
  }, [onMouseMove]);

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
          Работаем по системе такой то 2х недельными спринтами, предоставляем результаты работ и внимательно слушаем наших заказчиков
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
