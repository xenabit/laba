import styles from './Partners.module.scss';
import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import logo_1 from '../../assets/images/partners-1.svg';
import logo_2 from '../../assets/images/partners-2.svg';
import logo_3 from '../../assets/images/partners-3.svg';
import logo_4 from '../../assets/images/partners-4.svg';
import logo_5 from '../../assets/images/partners-5.svg';
import logo_6 from '../../assets/images/partners-6.svg';
import logo_7 from '../../assets/images/partners-7.svg';

const items = [
  { logo: logo_1, title: 'MARKSDIGITAL' },
  { logo: logo_2, title: '+1D' },
  { logo: logo_3, title: 'ФИНМАРК' },
  { logo: logo_4, title: 'ПЕЛИСКЕР' },
  { logo: logo_5, title: 'INPY' },
  { logo: logo_6, title: 'MARKSENGINEERING' },
  { logo: logo_7, title: 'ПОДЗЕМПРОЕКТ' },
];

import circle_1 from '../../assets/images/partners-ico-1.png';
import circle_2 from '../../assets/images/partners-ico-2.png';

const repeatItems = (array, targetCount) => {
  const result = [];
  while (result.length < targetCount) {
    result.push(...array);
  }
  return result.slice(0, targetCount);
};

const targetLength = 30;

const splitItems = [repeatItems(items, targetLength), repeatItems(items, targetLength)];

function Partners() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);

    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);

    return () => {
      window.removeEventListener('resize', handleResize);
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
      {isMobile ? (
        <div>
          <Swiper
            className={styles.Partners__swiper}
            modules={[Pagination, Autoplay]}
            speed={1000}
            keyboard={{ enabled: true }}
            pagination={{
              el: `.${styles.Partners__pagination}`,
              clickable: true,
              bulletClass: styles.Partners__bullet,
              bulletActiveClass: styles.Partners__bullet_active,
              renderBullet: (index, className) => `<span class="${className}"></span>`,
            }}
            breakpoints={{
              320: { spaceBetween: 32, slidesPerView: 1, loop: true },
              768: { spaceBetween: 32, slidesPerView: 2, loop: true },
              1024: { spaceBetween: 32, slidesPerView: 4, loop: true },
            }}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
          >
            {items.map((item, index) => (
              <SwiperSlide className={styles.Partners__slide} key={index}>
                <div className={styles.Partners__inner}>
                  <div className={styles.Partners__img}>
                    <img src={item.logo} loading="lazy" alt={item.title} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.Partners__pagination}></div>
        </div>
      ) : (
        <div className={`${styles.Partners__rows}`}>
          {splitItems.map((rowItems, rowIndex) => (
            <div className={styles.Partners__row} key={rowIndex}>
              <div className={styles.Partners__track}>
                {rowItems.map((item, index) => (
                  <div key={index} className={styles.Partners__item}>
                    <div className={styles.Partners__picture}>
                      <img src={item.logo} loading="lazy" alt={item.title} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Partners;
