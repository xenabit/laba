import { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PropTypes from 'prop-types';
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
    config: {
      mass: 1,
      tension: 30,
      friction: 10,
    },
  });

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

Number.propTypes = {
  n: PropTypes.number.isRequired,
};

const Counter = ({ loadingStage }) => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);
  const imageRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile || loadingStage !== 'complete') return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { scale: 1 },
        {
          y: 350,
          scale: 1.4,
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

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile, loadingStage]);

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
            <div key={index} className={`${styles.Counter__item} ${isMobile ? styles.active : ''}`} ref={(el) => (itemsRef.current[index] = el)}>
              <div>
                <Number n={item.n} />
              </div>
              <p dangerouslySetInnerHTML={{ __html: item.text }} />
            </div>
          ))}
        </div>
        <div className={styles.Counter__picture}>
          <picture>
            <img ref={imageRef} src={img} alt="Counter background" loading="lazy" />
          </picture>
        </div>
      </div>
    </section>
  );
};

Counter.propTypes = {
  loadingStage: PropTypes.string.isRequired,
};

export default Counter;
