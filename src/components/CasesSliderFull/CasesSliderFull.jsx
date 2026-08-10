import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './CasesSliderFull.module.scss';

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

  /**
   * Получает путь к изображению
   */
  const getImgSrc = (picture) => {
    return picture.img || picture.avif || picture.webp || '';
  };

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
            320: { spaceBetween: 32, slidesPerView: 1, loop: true },
            1024: { spaceBetween: 32, slidesPerView: 1, loop: true },
            1920: { spaceBetween: 40, slidesPerView: 1, loop: true },
            2560: { spaceBetween: 52, slidesPerView: 1, loop: true },
          }}
          role="region"
          aria-label="Карусель изображений"
        >
          {items.pictures?.map((item) => {
            if (!item.picture) {
              return null;
            }

            const picture = item.picture;

            return (
              <SwiperSlide className={styles.CasesSliderFull__slide} key={item.id}>
                <div className={styles.CasesSliderFull__inner}>
                  <picture>
                    {/* AVIF для десктопа (>=2500px) */}
                    {picture.avif2x && <source type="image/avif" media="(min-width: 2500px)" srcSet={`${picture.avif2x} 1x, ${picture.avif2x} 2x`} />}

                    {/* AVIF для мобильных (<2500px) */}
                    {picture.avif && <source type="image/avif" media="(max-width: 2449px)" srcSet={`${picture.avif} 1x, ${picture.avif2x || picture.avif} 2x`} />}

                    {/* WEBP для десктопа (>=2500px) */}
                    {picture.webp2x && <source type="image/webp" media="(min-width: 2500px)" srcSet={`${picture.webp2x} 1x, ${picture.webp2x} 2x`} />}

                    {/* WEBP для мобильных (<2500px) */}
                    {picture.webp && <source type="image/webp" media="(max-width: 2449px)" srcSet={`${picture.webp} 1x, ${picture.webp2x || picture.webp} 2x`} />}

                    {/* Fallback img */}
                    <img
                      src={getImgSrc(picture)}
                      loading="lazy"
                      style={{
                        width: item.sizes?.width || items.sizes?.width || '100%',
                        height: item.sizes?.height || items.sizes?.height || 'auto',
                        objectFit: item.sizes?.objectFit || items.sizes?.objectFit || 'contain',
                      }}
                      alt={item.alt || `Слайд ${item.id}`}
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
