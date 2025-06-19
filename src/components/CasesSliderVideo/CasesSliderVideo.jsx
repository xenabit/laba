import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './CasesSliderVideo.module.scss';

function CasesSliderVideo({ items }) {
  const swiperRef = useRef(null);
  const paginationRef = useRef(null); // Добавляем ref для пагинации

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
    <section className={styles.CasesSliderVideo}>
      <div className={styles.CasesSliderVideo__container}>
        <Swiper
          ref={swiperRef}
          className={styles.CasesSliderVideo__swiper}
          modules={[Navigation, Pagination, Autoplay]}
          speed={1000}
          keyboard={{ enabled: true }}
          pagination={{
            el: paginationRef.current,
            clickable: true,
            bulletClass: `${styles.CasesSliderVideo__bullet}`,
            bulletActiveClass: `${styles.CasesSliderVideo__bullet_active}`,
            renderBullet: (index, className) => `<span class="${className}"></span>`,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
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
          {items.videos?.map((item) => (
            <SwiperSlide className={styles.CasesSliderVideo__slide} key={item.id}>
              <div className={styles.CasesSliderVideo__bg}>
                <img loading="lazy" src={items.bg} alt="Before"></img>
              </div>
              <div className={styles.CasesSliderVideo__inner}>
                <div className={`${styles.CasesSliderVideo__half} ${styles.CasesSliderVideo__half_left}`} onClick={() => handleSlide('prev')}>
                  <div className={styles.CasesSliderVideo__box}>
                    <video className={styles.CasesSliderVideo__video} autoPlay muted loop preload="metadata" playsInline controls={false} loading="lazy">
                      <source src={item.video_left} type="video/mp4" />
                      Ваш браузер не поддерживает видео.
                    </video>
                  </div>
                </div>
                <div className={`${styles.CasesSliderVideo__half} ${styles.CasesSliderVideo__half_right}`} onClick={() => handleSlide('next')}>
                  <div className={styles.CasesSliderVideo__box}>
                    <video className={styles.CasesSliderVideo__video} autoPlay muted loop  preload="auto" data-preload controls={false} loading="lazy">
                      <source src={item.video_right} type="video/mp4" />
                      Ваш браузер не поддерживает видео.
                    </video>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div ref={paginationRef} className={styles.CasesSliderVideo__pagination}></div>
      </div>
    </section>
  );
}

export default CasesSliderVideo;
