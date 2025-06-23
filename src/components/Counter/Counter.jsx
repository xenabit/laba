import { useState, useEffect, useRef, useCallback, memo } from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PropTypes from 'prop-types';
import img from '../../assets/images/counter-img.jpg';
import styles from './Counter.module.scss';

gsap.registerPlugin(ScrollTrigger);

const ITEMS = [
  { n: 10, text: 'Направлений разработки' },
  { n: 30, text: 'Завершённых проектов' },
  { n: 4000, text: 'Часов командной работы' },
  { n: 20, text: 'Специалистов с реальным опытом разработки' },
];

const Number = memo(function Number({ n }) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const getStep = useCallback((num) => {
    if (num <= 9) return 1;
    if (num <= 99) return 4;
    if (num <= 999) return 10;
    if (num <= 4999) return 50;
    return 100;
  }, []);

  const { number, opacity } = useSpring({
    from: { number: 0, opacity: 0 },
    to: {
      number: inView ? n : 0,
      opacity: inView ? 1 : 0,
    },
    config: { mass: 1, tension: 30, friction: 10 },
  });

  return (
    <animated.div ref={ref} style={{ display: 'flex', alignItems: 'baseline', opacity }}>
      <animated.span style={{ marginRight: 4, opacity }}>+</animated.span>
      <animated.div style={{ opacity }}>
        {number.to((val) => {
          const step = getStep(val);
          return Math.round(val / step) * step;
        })}
      </animated.div>
    </animated.div>
  );
});
Number.propTypes = { n: PropTypes.number.isRequired };

export default function Counter({ loadingStage }) {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const p = new Image();
    p.src = img;
  }, []);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    if (isMobile || loadingStage !== 'complete') return;
    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        y: 150,
        scale: 1.4,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [isMobile, loadingStage]);

  return (
    <section className={styles.Counter} ref={sectionRef}>
      <div className={styles.Counter__items}>
        {ITEMS.map(({ n, text }, idx) => (
          <div key={idx} className={`${styles.Counter__item} ${isMobile ? styles.active : ''}`}>
            <Number n={n} />
            <p dangerouslySetInnerHTML={{ __html: text }} />
          </div>
        ))}
      </div>
      <div className={styles.Counter__picture}>
        <img ref={imageRef} src={img} alt="Counter background" loading="eager" decoding="async" fetchpriority="high" className={styles.Counter__img} />
      </div>
    </section>
  );
}

Counter.propTypes = {
  loadingStage: PropTypes.string.isRequired,
};
