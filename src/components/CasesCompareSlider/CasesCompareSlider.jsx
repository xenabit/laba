import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './CasesCompareSlider.module.scss';

function CasesCompareSlider({ items }) {
  const swiperRef = useRef(null);
  const paginationRef = useRef(null); // Добавляем ref для пагинации
  const dividerRefs = useRef([]);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const swiperInstance = swiperRef.current?.swiper;

    if (swiperInstance && paginationRef.current) {
      // Привязываем пагинацию к уникальному элементу через ref
      swiperInstance.params.pagination.el = paginationRef.current;
      swiperInstance.pagination.init();
      swiperInstance.pagination.render();
      swiperInstance.pagination.update();
    }

    dividerRefs.current.forEach((divider, index) => {
      if (!divider) return; // Пропускаем, если divider не существует

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
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: true,
          //   pauseOnMouseEnter: true,
          // }}
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
                <img loading="lazy" src={items.bg} alt="Before"></img>
              </div>
              <div className={styles.CasesCompareSlider__wrapper}>
                <div className={styles.CasesCompareSlider__pictures}>
                  <div className={`${styles.CasesCompareSlider__half} ${styles.CasesCompareSlider__half_left}`}>
                    <img loading="lazy" src={item.picture_left} alt="Before" />
                  </div>
                  <div className={`${styles.CasesCompareSlider__half} ${styles.CasesCompareSlider__half_right}`}>
                    <img loading="lazy" src={item.picture_right} alt="After" />
                  </div>
                </div>
                <div className={styles.CasesCompareSlider__divider} ref={(el) => (dividerRefs.current[index] = el)}>
                  <button className={`${styles.CasesCompareSlider__toggle} ${styles.CasesCompareSlider__toggle_left}`}></button>
                  <button className={`${styles.CasesCompareSlider__toggle} ${styles.CasesCompareSlider__toggle_right}`}></button>
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
