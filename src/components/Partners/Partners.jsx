import styles from './Partners.module.scss';
import SwiperLogos from '../ui/SwiperLogos/SwiperLogos';
import { useState, useEffect, useRef } from 'react';

import circle_1 from '../../assets/images/partners-ico-1.png';
import circle_2 from '../../assets/images/partners-ico-2.png';

import logo_1 from '../../assets/images/partners-1.svg';
import logo_2 from '../../assets/images/partners-2.svg';
import logo_3 from '../../assets/images/partners-3.svg';
import logo_4 from '../../assets/images/partners-4.svg';
import logo_5 from '../../assets/images/partners-5.svg';
import logo_6 from '../../assets/images/partners-6.svg';
import logo_7 from '../../assets/images/partners-7.svg';

const items = [
  { src: logo_1, title: 'MARKSDIGITAL' },
  { src: logo_2, title: '+1D' },
  { src: logo_3, title: 'ФИНМАРК' },
  { src: logo_4, title: 'ПЕЛИСКЕР' },
  { src: logo_5, title: 'INPY' },
  { src: logo_6, title: 'MARKSENGINEERING' },
  { src: logo_7, title: 'ПОДЗЕМПРОЕКТ' },
];

function Partners() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.1 });
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
      <SwiperLogos isVisible={isVisible} items={items} />
    </section>
  );
}

export default Partners;
