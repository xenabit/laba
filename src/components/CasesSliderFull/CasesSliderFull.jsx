import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './CasesSliderFull.module.scss';
import { getImageFormats } from '../../utils/imageImports';

function CasesSliderFull({ items }) {
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
    <section className={styles.CasesSliderFull}>
      <div className={styles.CasesSliderFull__container}>
        <Swiper
          ref={swiperRef}
          className={styles.CasesSliderFull__swiper}
          modules={[Navigation, Pagination, Autoplay]}
          speed={1000}
          keyboard={{ enabled: true }}
          pagination={{
            el: paginationRef.current,
            clickable: true,
            bulletClass: `${styles.CasesSliderFull__bullet}`,
            bulletActiveClass: `${styles.CasesSliderFull__bullet_active}`,
            renderBullet: (index, className) => `<span class="${className}" role="button" aria-label="Перейти к слайду ${index + 1}"></span>`,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: {
              spaceBetween: 32,
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
          role="region"
          aria-label="Карусель изображений"
        >
          {items.pictures?.map((item) => {
            const imageFormats = getImageFormats(item.picture);
            const fallbackFormat = imageFormats.jpg || imageFormats.png;
            return (
              <SwiperSlide className={styles.CasesSliderFull__slide} key={item.id}>
                <div className={styles.CasesSliderFull__inner}>
                  <picture>
                    <source type="image/avif" srcSet={imageFormats.avif} />
                    <source type="image/webp" srcSet={imageFormats.webp} />
                    <img
                      loading="lazy"
                      src={fallbackFormat}
                      alt={item.title || `Слайд ${item.id}`}
                      style={{
                        width: item.sizes?.width || items.sizes.width,
                        height: item.sizes?.height || 'auto',
                        objectFit: item.sizes?.objectfit || 'contain',
                      }}
                    />
                  </picture>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div ref={paginationRef} className={styles.CasesSliderFull__pagination}></div>
      </div>
    </section>
  );
}

export default CasesSliderFull;
