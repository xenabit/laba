import { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img from '../../assets/images/counter-img.jpg';
import styles from './Counter.module.scss';

gsap.registerPlugin(ScrollTrigger);

const Number = ({ n }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { number, opacity } = useSpring({
    from: { number: 0, opacity: 0 },
    to: {
      number: inView ? n : 0,
      opacity: inView ? 1 : 0,
    },
    config: { mass: 1, tension: 20, friction: 10 },
  });

  const getStep = (val) => {
    if (val <= 9) return 1;
    if (val <= 99) return 4;
    if (val <= 999) return 10;
    if (val <= 4999) return 50;
    return 100;
  };

  return (
    <animated.div ref={ref} style={{ opacity, display: 'flex', alignItems: 'baseline' }}>
      <animated.span style={{ opacity, marginRight: '4px' }}>+</animated.span>
      <animated.div style={{ opacity }}>
        {number.to((val) => {
          const step = getStep(val);
          return Math.round(val / step) * step;
        })}
      </animated.div>
    </animated.div>
  );
};

Number.propTypes = {
  n: PropTypes.number.isRequired,
};

const Counter = () => {
  const sectionRef = useRef(null); // Реф для всей секции
  const itemsRef = useRef([]); // Реф для элементов Counter__item
  const imageRef = useRef(null); // Реф для изображения
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return; // Отключаем анимацию на мобильных, если не требуется

    // Создаём контекст GSAP для очистки
    const ctx = gsap.context(() => {
      // Анимация для каждого элемента Counter__item
      itemsRef.current.forEach((item, index) => {
        gsap.fromTo(
          item,
          {
            y: 0,
            opacity: 1,
          },
          {
            y: -450, // Смещение вверх
            opacity: 0, // Затухание
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top', // Когда верх секции достигает верха окна
              end: 'bottom top', // Когда низ секции достигает верха окна
              scrub: true,
              id: `counter-item-${index}`,
            },
          }
        );
      });

      // Анимация для изображения (зум на 140%)
      gsap.fromTo(
        imageRef.current,
        {
          scale: 1, // Начальный масштаб (100%)
        },
        {
          scale: 1.4, // Конечный масштаб (140%)
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
            id: 'counter-image',
          },
        }
      );
    }, sectionRef);

    // Очистка анимаций при размонтировании
    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section className={styles.Counter} ref={sectionRef}>
      <div>
        <div className={styles.Counter__items}>
          {[
            { n: 130, text: 'Создано рилсов и видео роликов' },
            {
              n: 85,
              text: 'Серверов в собственном дата-центре<br> для просчета компьютерной графики',
            },
            { n: 1000, text: '3д моделей' },
            { n: 7, text: 'Лет на рынке 3D графики' },
          ].map((item, index) => (
            <div
              key={index}
              className={`${styles.Counter__item} ${isMobile ? styles.active : ''}`}
              ref={(el) => (itemsRef.current[index] = el)}
            >
              <div>
                <Number n={item.n} />
              </div>
              <p dangerouslySetInnerHTML={{ __html: item.text }} />
            </div>
          ))}
        </div>
        <div className={styles.Counter__picture}>
          <picture>
            <img ref={imageRef} src={img} alt="Counter background" />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Counter;