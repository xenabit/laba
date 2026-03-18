import styles from './Partners.module.scss';
import SwiperLogos from '../ui/SwiperLogos/SwiperLogos';
import { useState, useEffect, useRef } from 'react';

import circle_1 from '../../assets/images/partners-ico-1.png';
import circle_2 from '../../assets/images/partners-ico-2.png';

function Partners() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section className={`${styles.Partners} ${isVisible ? styles.animate : ''}`} ref={ref}>
      <div className={styles.Partners__text}>
        <div>
          <span>нам</span>
        </div>
        <div>
          <span>доверяют</span>
        </div>
      </div>
      <div className={styles.Partners__icons}>
        <div className={styles.Partners__icon}>
          <img loading="lazy" src={circle_1} />
        </div>
        <div className={styles.Partners__icon}>
          <img loading="lazy" src={circle_2} />
        </div>
      </div>
      <SwiperLogos isVisible={isVisible} />
    </section>
  );
}

export default Partners;
