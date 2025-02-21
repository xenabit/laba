import { useCallback, useEffect, useRef, useState } from 'react';
import _ from 'lodash';
import styles from './TextEffect.module.scss';

import icon1 from '../../assets/images/text-effect-1.png';
import icon2 from '../../assets/images/text-effect-2.png';
import icon3 from '../../assets/images/text-effect-3.png';

const TextEffect = () => {
  const heroRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const prevScrollY = useRef(window.scrollY);
  const scrollDirection = useRef('down'); // 'up' или 'down'

  // Отслеживаем видимость элемента
  useEffect(() => {
    const currentHero = heroRef.current;
    if (!currentHero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting)
    );
    observer.observe(currentHero);
    return () => {
      if (currentHero) observer.unobserve(currentHero);
    };
  }, []);

  // Функция, устанавливающая начальное (сдвинутое) состояние для всех строк
  const setInitialState = useCallback(() => {
    if (!heroRef.current) return;
    const firstLayer = heroRef.current.querySelectorAll(
      `.${styles.TextEffect__layer_first} .${styles.TextEffect__text} > div`
    );
    const secondLayer = heroRef.current.querySelectorAll(
      `.${styles.TextEffect__layer_secondary} .${styles.TextEffect__text} > div`
    );
    const setState = (elements) => {
      elements.forEach((el, index) => {
        el.style.transition = 'none';
        el.style.opacity = '0';
        el.style.transform = `translateX(${index % 2 === 1 ? '-100%' : '100%'})`;
      });
    };
    setState(Array.from(firstLayer));
    setState(Array.from(secondLayer));
  }, []);

  // animateIn – анимация входа: элементы съезжают из сторон в центр
  const animateIn = useCallback(() => {
    if (!heroRef.current) return;
    const firstLayer = heroRef.current.querySelectorAll(
      `.${styles.TextEffect__layer_first} .${styles.TextEffect__text} > div`
    );
    const secondLayer = heroRef.current.querySelectorAll(
      `.${styles.TextEffect__layer_secondary} .${styles.TextEffect__text} > div`
    );
    const animateElements = (elements, delayMultiplier = 0.6) => {
      elements.forEach((el, index) => {
        el.style.transition = 'none';
        el.style.opacity = '0';
        el.style.transform = `translateX(${index % 2 === 1 ? '-100%' : '100%'})`;
        // Принудительный reflow
        el.getBoundingClientRect();
        // Задаём transition с задержкой (stagger)
        el.style.transition = 'all 1.5s cubic-bezier(0.25, 0.1, 0.25, 1)';
        el.style.transitionDelay = `${index * delayMultiplier}s`;
        requestAnimationFrame(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateX(0)';
        });
      });
    };
    animateElements(Array.from(firstLayer), 0.6);
    animateElements(Array.from(secondLayer), 0.6);
    // Добавляем класс animate через короткое время (настройте по необходимости)
    setTimeout(() => {
      if (heroRef.current) {
        heroRef.current.classList.add(styles.animate);
      }
    }, 100);
  }, []);

  // animateOut – анимация выхода: элементы съезжают из центра в стороны
   const animateOut = useCallback(() => {
    if (!heroRef.current) return;
    setTimeout(() => {
      const firstLayer = heroRef.current.querySelectorAll(
        `.${styles.TextEffect__layer_first} .${styles.TextEffect__text} > div`
      );
      const secondLayer = heroRef.current.querySelectorAll(
        `.${styles.TextEffect__layer_secondary} .${styles.TextEffect__text} > div`
      );
      const animateElements = (elements) => {
        elements.forEach((el, index) => {
          el.style.transition = 'all 1.5s cubic-bezier(0.25, 0.1, 0.25, 1)';
          el.style.transitionDelay = `${index * 0.4}s`;
          requestAnimationFrame(() => {
            el.style.opacity = '0';
            el.style.transform = `translateX(${index % 2 === 1 ? '-100%' : '100%'})`;
          });
        });
      };
      animateElements(Array.from(firstLayer));
      animateElements(Array.from(secondLayer));
      setTimeout(() => {
        if (heroRef.current) {
          heroRef.current.classList.remove(styles.animate);
        }
      }, 100);
    }, 2000);
  }, []);

  // При появлении элемента – если скролл вниз, запускаем вход (animateIn)
  useEffect(() => {
    if (!heroRef.current) return;
    if (isVisible && scrollDirection.current === 'down') {
      setInitialState();
      animateIn();
    }
    // Если элемент появляется при скролле вверх – оставляем его в текущем состоянии
  }, [isVisible, animateIn, setInitialState]);

  // Обработчик скролла: определяем направление и запускаем animateOut при достаточном подъёме,
  // а при движении вниз сразу запускаем animateIn
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollDirection.current =
        currentScrollY < prevScrollY.current ? 'up' : 'down';

      // Если скроллим вверх и элемент анимирован – проверяем порог, чтобы запустить animateOut
      if (
        scrollDirection.current === 'up' &&
        heroRef.current &&
        heroRef.current.classList.contains(styles.animate)
      ) {
        const delta = prevScrollY.current - currentScrollY;
        if (delta > 100) {
          animateOut();
        }
      }
      // При скролле вниз: если элемент виден – сразу сбрасываем и запускаем animateIn
      if (
        scrollDirection.current === 'down' &&
        heroRef.current &&
        isVisible
      ) {
        setInitialState();
        animateIn();
      }
      prevScrollY.current = currentScrollY;
    };

    const throttledHandleScroll = _.throttle(handleScroll, 200);
    window.addEventListener('scroll', throttledHandleScroll);
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [isVisible, animateIn, animateOut, setInitialState]);

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
