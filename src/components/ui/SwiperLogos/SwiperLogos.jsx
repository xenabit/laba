import styles from './SwiperLogos.module.scss';
import { useMobile } from '../../../contexts/MobileContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function SwiperLogos({ isVisible, items, title = false }) {
  const isMobile = useMobile();

  const repeatItems = (array, targetCount) => {
    const result = [];
    while (result.length < targetCount) {
      result.push(...array);
    }
    return result.slice(0, targetCount);
  };

  const targetLength = 40;

  const splitItems = [repeatItems(items, targetLength), repeatItems(items, targetLength)];

  return (
    <div className={`${styles.SwiperLogos} ${isVisible ? styles.animate : ''}`}>
      {isMobile ? (
        <>
          <Swiper
            className={styles.SwiperLogos__swiper}
            modules={[Pagination, Autoplay]}
            speed={1000}
            keyboard={{ enabled: true }}
            pagination={{
              el: `.${styles.SwiperLogos__pagination}`,
              clickable: true,
              bulletClass: styles.SwiperLogos__bullet,
              bulletActiveClass: styles.SwiperLogos__bullet_active,
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
              <SwiperSlide className={styles.SwiperLogos__slide} key={index}>
                <div className={styles.SwiperLogos__inner}>
                  <div className={styles.SwiperLogos__img}>
                    <img src={item.src} loading="lazy" alt={item.title} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.SwiperLogos__pagination}></div>
        </>
      ) : (
        <div className={styles.SwiperLogos__rows}>
          {splitItems.map((rowItems, rowIndex) => (
            <div className={styles.SwiperLogos__row} key={rowIndex}>
              <div className={styles.SwiperLogos__track}>
                {rowItems.map((item, index) => (
                  <div key={index} className={styles.SwiperLogos__item}>
                    <div className={styles.SwiperLogos__picture}>
                      <img src={item.src} loading="lazy" alt={item.title} />
                    </div>
                    {title && <div className={styles.SwiperLogos__title}>{item.title}</div>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SwiperLogos;
