import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, FreeMode, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './CasesSliderScroll2.module.scss';

function CasesSliderScroll2({ items }) {
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
    <section className={styles.CasesSliderScroll2}>
      <div className={styles.CasesSliderScroll2__container}>
        <Swiper
          ref={swiperRef}
          className={styles.CasesSliderScroll2__swiper}
          style={{ background: `linear-gradient(294deg, #B8D45F -25.2%, #658305 105.29%)` }}
          modules={[Navigation, Pagination, FreeMode, Autoplay]}
          freeMode={{
            enabled: true,
            momentum: true,
            momentumRatio: 0.5,
            momentumVelocityRatio: 0.5,
            stopOnLastSlide: true,
          }}
          speed={1500}
          keyboard={{ enabled: true }}
          pagination={{
            el: paginationRef.current,
            clickable: true,
            bulletClass: `${styles.CasesSliderScroll2__bullet}`,
            bulletActiveClass: `${styles.CasesSliderScroll2__bullet_active}`,
            renderBullet: (index, className) => `<span class="${className}"></span>`,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          slidesPerGroup={6}
          breakpoints={{
            320: {
              slidesPerView: '3.8',
              spaceBetween: 40,
              loop: false,
            },
            1024: {
              slidesPerView: '3.8',
              spaceBetween: 40,
              loop: false,
            },
            1920: {
              slidesPerView: '3.8',
              spaceBetween: 40,
              loop: false,
            },
            2560: {
              slidesPerView: '3.8',
              spaceBetween: 40,
              loop: false,
            },
          }}
        >
          {items.pictures?.map((item) => (
            <SwiperSlide className={styles.CasesSliderScroll2__slide} key={item.id}>
              <div className={styles.CasesSliderScroll2__inner}>
                <picture>
                  <source type="image/avif" srcSet={item.picture.avif} />
                  <source type="image/webp" srcSet={item.picture.webp} />
                  <img src={item.picture.img} loading="lazy" />
                </picture>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div ref={paginationRef} className={styles.CasesSliderScroll2__pagination}></div>
      </div>
    </section>
  );
}

export default CasesSliderScroll2;
