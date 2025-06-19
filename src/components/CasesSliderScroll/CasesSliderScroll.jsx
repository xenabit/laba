import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, FreeMode, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './CasesSliderScroll.module.scss';

function CasesSliderScroll({ items }) {
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

  return (
    <section className={styles.CasesSliderScroll}>
      <div className={styles.CasesSliderScroll__container}>
        <Swiper
          ref={swiperRef}
          className={styles.CasesSliderScroll__swiper}
          style={{ backgroundImage: `url(${items.bg})` }}
          modules={[Navigation, Pagination, FreeMode, Autoplay]}
          freeMode={{ enabled: true, momentum: true }}
          speed={800}
          keyboard={{ enabled: true }}
          pagination={{
            el: paginationRef.current,
            clickable: true,
            bulletClass: `${styles.CasesSliderScroll__bullet}`,
            bulletActiveClass: `${styles.CasesSliderScroll__bullet_active}`,
            renderBullet: (index, className) => `<span class="${className}"></span>`,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 'auto',
              spaceBetween: 12,
              loop: false,
            },
            1024: {
              slidesPerView: 'auto',
              spaceBetween: 12,
              loop: false,
            },
            1920: {
              slidesPerView: 'auto',
              spaceBetween: 12,
              loop: false,
            },
            2560: {
              slidesPerView: 'auto',
              spaceBetween: 12,
              loop: false,
            },
          }}
        >
          {items.pictures?.map((item) => (
            <SwiperSlide className={styles.CasesSliderScroll__slide} key={item.id}>
              <div className={styles.CasesSliderScroll__inner}>
                <img loading="lazy" src={item.picture} alt={item.title} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div ref={paginationRef} className={styles.CasesSliderScroll__pagination}></div>
      </div>
    </section>
  );
}

export default CasesSliderScroll;
