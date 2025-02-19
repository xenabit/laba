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

  // Отслеживаем видимость с помощью IntersectionObserver
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

  // Объединённая анимация для первого и второго слоев одновременно
  const animateText = useCallback(() => {
    if (!heroRef.current) return;
    // Выбираем текстовые блоки первого слоя
    const firstLayerLines = heroRef.current.querySelectorAll(
      `.${styles.TextEffect__layer_first} .${styles.TextEffect__text} > div`
    );
    // Выбираем текстовые блоки второго слоя (оверлея)
    const secondLayerLines = heroRef.current.querySelectorAll(
      `.${styles.TextEffect__layer_secondary} .${styles.TextEffect__text} > div`
    );

    // Создаем таймлайн, чтобы запустить обе анимации одновременно
    const tl = gsap.timeline({
      onComplete: () => {
        // После завершения анимаций добавляем класс, который может активировать дополнительные эффекты
        setTimeout(() => {
          if (heroRef.current) {
            heroRef.current.classList.add(styles.animate);
          }
        }, 100);
      },
    });

    // Устанавливаем начальные состояния для обоих наборов элементов
    tl.set([...firstLayerLines, ...secondLayerLines], {
      opacity: 0,
      x: (index) => (index % 2 === 0 ? '-100%' : '100%'),
    });

    // Запускаем анимацию для первого слоя
    tl.to(firstLayerLines, {
      x: 0,
      opacity: 1,
      duration: 1.5,
      ease: 'power2.out',
      stagger: 0.2,
    }, 0); // запуск с временной меткой 0

    // Одновременно запускаем анимацию для второго слоя (без изменения transform, если он не нужен, можно убрать x)
    tl.to(secondLayerLines, {
      x: 0, // если не нужно сдвига, можно опустить или установить 0
      opacity: 1,
      duration: 1.5,
      ease: 'power2.out',
      stagger: 0.2,
    }, 0); // старт с той же временной меткой
  }, []);

  // Запуск анимации при изменении видимости
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
      // Если скроллим вниз (текущая позиция > предыдущей)
      if (currentScrollY > prevScrollY.current) {
        // Перезапускаем анимацию
        heroRef.current.classList.remove(styles.animate);
        void heroRef.current.offsetWidth;
        animateText();
      }
      // Обновляем предыдущую позицию
      prevScrollY.current = currentScrollY;
    };

    // Можно использовать throttle для оптимизации
    const throttledHandleScroll = _.throttle(handleScroll, 200);
    window.addEventListener('scroll', throttledHandleScroll);
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [isVisible, animateText]);


  // Обработка движения мыши (с throttle)
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
        {/* Первый слой */}
        <div className={`${styles.TextEffect__layer} ${styles.TextEffect__layer_first}`}>
          <div className={styles.TextEffect__text}>
            <div><span>Вдохновляющие</span></div>
            <div><span>проекты для</span></div>
            <div><span>амбициозных</span></div>
            <div><span>заказчиков</span></div>
          </div>
        </div>
        {/* Второй слой (оверлей) */}
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
