import { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

import PropTypes from 'prop-types';
import video from '../../assets/videos/intro-cover.mp4';
import img from '../../assets/images/counter-img.jpg';
import styles from './Counter.module.scss';

// Анимация числа
const Number = ({ n }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Запуск анимации, когда элемент становится видимым
    threshold: 0.1, // Условие видимости
  });

  const { number, opacity } = useSpring({
    from: { number: 0, opacity: 0 }, // начальные значения
    to: {
      number: inView ? n : 0, // Если элемент в области видимости (inView), значение анимируется до n. Если элемент не виден, возвращается к 0.
      opacity: inView ? 1 : 0, // Прозрачность меняется от 0 до 1
    },
    config: {
      mass: 1, // mass (масса): влияет на инерцию объекта. Чем выше масса, тем медленнее движение.
      tension: 30, // tension (натяжение): определяет, насколько сильна "пружина". Чем выше значение, тем быстрее объект достигает конечной точки
      friction: 10, // friction (трение): контролирует сопротивление движению. Чем выше значение, тем плавнее и медленнее движение.
    },
  });

  // Установка шага
  const getStep = (n) => {
    if (n <= 9) return 1;
    if (n <= 99) return 4;
    if (n <= 999) return 10;
    if (n <= 4999) return 50;
    return 100;
  };

  return (
    <animated.div ref={ref} style={{ opacity, display: 'flex', alignItems: 'baseline' }}>
      <animated.span style={{ opacity, marginRight: '4px' }}>+</animated.span>
      <animated.div style={{ opacity }}>
        {number.to((n) => {
          const step = getStep(n);
          return Math.round(n / step) * step;
        })}
      </animated.div>
    </animated.div>
  );
};

// Проверка, что n должен быть числом
Number.propTypes = {
  n: PropTypes.number.isRequired,
};

const Counter = () => {
  const NumbersBoxRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    // Обработчик изменения размера окна
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Добавляем обработчик события resize
    window.addEventListener('resize', handleResize);

    // Удаляем обработчик события resize при размонтировании компонента
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!NumbersBoxRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(NumbersBoxRef.current);
  }, []);

  return (
    <section className={styles.Counter}>
      <div>
        <div ref={NumbersBoxRef} className={styles.Counter__items}>
          <div className={`${styles.Counter__item} ${isVisible && isMobile ? styles.active : ''}`}>
            <div>
              <Number n={130} />
            </div>
            <p>Создано рилсов и&nbsp;видео роликов</p>
          </div>
          <div className={`${styles.Counter__item} ${isVisible && isMobile ? styles.active : ''}`}>
            <div>
              <Number n={85} />
            </div>
            <p>
              Серверов в&nbsp;собственном дата-центре<br></br> для&nbsp;просчета компьютерной графики
            </p>
          </div>
          <div className={`${styles.Counter__item} ${isVisible && isMobile ? styles.active : ''}`}>
            <div>
              <Number n={1000} />
            </div>
            <p>3д&nbsp;моделей</p>
          </div>
          <div className={`${styles.Counter__item} ${isVisible && isMobile ? styles.active : ''}`}>
            <div>
              <Number n={7} />
            </div>
            <p>Лет на&nbsp;рынке 3D&nbsp;графики</p>
          </div>
        </div>
        <div className={styles.Counter__picture}>
          <picture>
            <img src={img}></img>
          </picture>
        </div>
        {/* <div className={styles.Counter__video}>
          <video preload="auto" autoPlay loop muted>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div> */}
      </div>
    </section>
  );
};

export default Counter;
