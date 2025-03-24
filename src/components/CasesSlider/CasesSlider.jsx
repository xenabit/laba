import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './CasesSlider.module.scss';

function CasesSlider({ items }) {
  const swiperRef = useRef(null);
  const paginationRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper && paginationRef.current) {
      const swiper = swiperRef.current.swiper;
      swiper.params.pagination.el = paginationRef.current;
      swiper.pagination.init();
      swiper.pagination.render();
      swiper.pagination.update();
    }
  }, [items]);

  const handleSlide = (direction) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      if (direction === 'prev') {
        swiperRef.current.swiper.slidePrev();
      } else if (direction === 'next') {
        swiperRef.current.swiper.slideNext();
      }
    }
  };

  return (
    <section className={styles.CasesSlider}>
      <div className={styles.CasesSlider__container}>
        <Swiper
          ref={swiperRef}
          className={styles.CasesSlider__swiper}
          style={{ backgroundImage: `url(${items.bg})` }}
          modules={[Navigation, Pagination]}
          speed={1000}
          keyboard={{ enabled: true }}
          pagination={{
            el: paginationRef.current,
            clickable: true,
            bulletClass: `${styles.CasesSlider__bullet}`,
            bulletActiveClass: `${styles.CasesSlider__bullet_active}`,
            renderBullet: (index, className) => `<span class="${className}"></span>`,
          }}
          breakpoints={{
            320: {
              spaceBetween: 16,
              slidesPerView: 1,
              loop: true,
            },
            1024: {
              spaceBetween: 32,
              slidesPerView: 1,
              loop: true,
            },
            1920: {
              spaceBetween: 40,
              slidesPerView: 1,
              loop: true,
            },
            2560: {
              spaceBetween: 52,
              slidesPerView: 1,
              loop: true,
            },
          }}
        >
          {items.pictures?.map((item) => (
            <SwiperSlide className={styles.CasesSlider__slide} key={item.id}>
              <div className={styles.CasesSlider__inner}>
                <div className={`${styles.CasesSlider__half} ${styles.CasesSlider__half_left}`} onClick={() => handleSlide('prev')}>
                  <img loading="lazy" src={item.picture_left} alt={item.title} style={{ width: `${items.sizes.width_left}` }} />
                </div>
                <div className={`${styles.CasesSlider__half} ${styles.CasesSlider__half_right}`} onClick={() => handleSlide('next')}>
                  <img loading="lazy" src={item.picture_right} alt={item.title} style={{ width: `${items.sizes.width_right}` }} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div ref={paginationRef} className={styles.CasesSlider__pagination}></div>
      </div>
    </section>
  );
}

export default CasesSlider;
