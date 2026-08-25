import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './CasesCompareSlider.module.scss';

function CasesCompareSlider({ items }) {
  const swiperRef = useRef(null);
  const paginationRef = useRef(null);
  const dividerRefs = useRef([]);

  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const swiperInstance = swiperRef.current?.swiper;

    if (swiperInstance && paginationRef.current) {
      swiperInstance.params.pagination.el = paginationRef.current;
      swiperInstance.pagination.init();
      swiperInstance.pagination.render();
      swiperInstance.pagination.update();
    }

    dividerRefs.current.forEach((divider, index) => {
      if (!divider) return;

      const wrapper = divider.closest(`.${styles.CasesCompareSlider__wrapper}`);
      const halfLeft = wrapper.querySelector(`.${styles.CasesCompareSlider__half_left}`);
      const halfRight = wrapper.querySelector(`.${styles.CasesCompareSlider__half_right}`);

      const updatePosition = (x) => {
        const rect = wrapper.getBoundingClientRect();
        const position = ((x - rect.left) / rect.width) * 100;
        const clampedPosition = Math.max(0, Math.min(100, position));

        divider.style.left = `${clampedPosition}%`;
        halfLeft.style.clipPath = `polygon(0 0, ${clampedPosition}% 0, ${clampedPosition}% 100%, 0 100%)`;
        halfRight.style.clipPath = `polygon(${clampedPosition}% 0, 100% 0, 100% 100%, ${clampedPosition}% 100%)`;
      };

      const handleMouseMove = (e) => {
        e.preventDefault();
        updatePosition(e.clientX);
      };

      const handleTouchMove = (e) => {
        e.preventDefault();
        updatePosition(e.touches[0].clientX);
      };

      const startDragging = () => {
        setIsDragging(true);
        if (swiperInstance) swiperInstance.allowTouchMove = false;
      };

      const stopDragging = () => {
        setIsDragging(false);
        if (swiperInstance) swiperInstance.allowTouchMove = true;
      };

      divider.addEventListener('mousedown', () => {
        startDragging();
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener(
          'mouseup',
          () => {
            stopDragging();
            document.removeEventListener('mousemove', handleMouseMove);
          },
          { once: true }
        );
      });

      divider.addEventListener('touchstart', (e) => {
        e.preventDefault();
        startDragging();
        document.addEventListener('touchmove', handleTouchMove, { passive: false });
        document.addEventListener(
          'touchend',
          () => {
            stopDragging();
            document.removeEventListener('touchmove', handleTouchMove);
          },
          { once: true }
        );
      });
    });

    return () => {
      dividerRefs.current.forEach((divider) => {
        if (divider) divider.replaceWith(divider.cloneNode(true));
      });
    };
  }, [items.pictures]);

  const getImgSrc = (picture) => {
    return picture.img || picture.avif || picture.webp || '';
  };

  return (
    <section className={styles.CasesCompareSlider}>
      <div className={styles.CasesCompareSlider__container}>
        <Swiper
          ref={swiperRef}
          className={styles.CasesCompareSlider__swiper}
          modules={[Navigation, Pagination, Autoplay]}
          speed={1000}
          keyboard={{ enabled: true }}
          allowTouchMove={!isDragging}
          pagination={{
            el: paginationRef.current,
            clickable: true,
            bulletClass: `${styles.CasesCompareSlider__bullet}`,
            bulletActiveClass: `${styles.CasesCompareSlider__bullet_active}`,
            renderBullet: (index, className) => `<span class="${className}"></span>`,
          }}
          breakpoints={{
            320: { spaceBetween: 16, slidesPerView: 1, loop: true },
            1024: { spaceBetween: 32, slidesPerView: 1, loop: true },
            1920: { spaceBetween: 40, slidesPerView: 1, loop: true },
            2560: { spaceBetween: 52, slidesPerView: 1, loop: true },
          }}
        >
          {items.pictures?.map((item, index) => (
            <SwiperSlide className={styles.CasesCompareSlider__slide} key={item.id}>
              <div className={styles.CasesCompareSlider__bg}>
                <img loading="lazy" src={items.bg} alt="Background" />
              </div>
              <div className={styles.CasesCompareSlider__wrapper}>
                <div className={styles.CasesCompareSlider__border}>
                  {item.picture ? (
                    // Одиночная картинка
                    <div className={styles.CasesCompareSlider__single}>
                      <picture>
                        {item.picture.avif2x && <source type="image/avif" media="(min-width: 2500px)" srcSet={`${item.picture.avif2x} 1x, ${item.picture.avif2x} 2x`} />}

                        {item.picture.avif && <source type="image/avif" media="(max-width: 2499px)" srcSet={`${item.picture.avif} 1x, ${item.picture.avif2x || item.picture.avif} 2x`} />}

                        {item.picture.webp2x && <source type="image/webp" media="(min-width: 2500px)" srcSet={`${item.picture.webp2x} 1x, ${item.picture.webp2x} 2x`} />}

                        {item.picture.webp && <source type="image/webp" media="(max-width: 2499px)" srcSet={`${item.picture.webp} 1x, ${item.picture.webp2x || item.picture.webp} 2x`} />}

                        <img loading="lazy" src={getImgSrc(item.picture)} alt="Slide image" />
                      </picture>
                    </div>
                  ) : (
                    <div className={styles.CasesCompareSlider__pictures}>
                      <div className={`${styles.CasesCompareSlider__half} ${styles.CasesCompareSlider__half_left}`}>
                        <picture>
                          {item.picture_left.avif2x && <source type="image/avif" media="(min-width: 2500px)" srcSet={`${item.picture_left.avif2x} 1x, ${item.picture_left.avif2x} 2x`} />}

                          {item.picture_left.avif && (
                            <source type="image/avif" media="(max-width: 2499px)" srcSet={`${item.picture_left.avif} 1x, ${item.picture_left.avif2x || item.picture_left.avif} 2x`} />
                          )}

                          {item.picture_left.webp2x && <source type="image/webp" media="(min-width: 2500px)" srcSet={`${item.picture_left.webp2x} 1x, ${item.picture_left.webp2x} 2x`} />}

                          {item.picture_left.webp && (
                            <source type="image/webp" media="(max-width: 2499px)" srcSet={`${item.picture_left.webp} 1x, ${item.picture_left.webp2x || item.picture_left.webp} 2x`} />
                          )}

                          <img loading="lazy" src={getImgSrc(item.picture_left)} alt="Left image" />
                        </picture>
                      </div>
                      <div className={`${styles.CasesCompareSlider__half} ${styles.CasesCompareSlider__half_right}`}>
                        <picture>
                          {item.picture_right.avif2x && <source type="image/avif" media="(min-width: 2500px)" srcSet={`${item.picture_right.avif2x} 1x, ${item.picture_right.avif2x} 2x`} />}

                          {item.picture_right.avif && (
                            <source type="image/avif" media="(max-width: 2499px)" srcSet={`${item.picture_right.avif} 1x, ${item.picture_right.avif2x || item.picture_right.avif} 2x`} />
                          )}

                          {item.picture_right.webp2x && <source type="image/webp" media="(min-width: 2500px)" srcSet={`${item.picture_right.webp2x} 1x, ${item.picture_right.webp2x} 2x`} />}

                          {item.picture_right.webp && (
                            <source type="image/webp" media="(max-width: 2499px)" srcSet={`${item.picture_right.webp} 1x, ${item.picture_right.webp2x || item.picture_right.webp} 2x`} />
                          )}

                          <img loading="lazy" src={getImgSrc(item.picture_right)} alt="Right image" />
                        </picture>
                      </div>
                      <div className={styles.CasesCompareSlider__divider} ref={(el) => (dividerRefs.current[index] = el)}>
                        <button className={`${styles.CasesCompareSlider__toggle} ${styles.CasesCompareSlider__toggle_left}`} aria-label="Move divider left"></button>
                        <button className={`${styles.CasesCompareSlider__toggle} ${styles.CasesCompareSlider__toggle_right}`} aria-label="Move divider right"></button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div ref={paginationRef} className={styles.CasesCompareSlider__pagination}></div>
      </div>
    </section>
  );
}

export default CasesCompareSlider;
