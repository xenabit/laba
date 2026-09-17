import { useRef, useEffect, useCallback, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './CasesSliderVideo.module.scss';

function CasesSliderVideo({ items }) {
  const swiperRef = useRef(null);
  const paginationRef = useRef(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const leftVideoRefs = useRef([]);
  const rightVideoRefs = useRef([]);

  const pauseAllVideos = useCallback(() => {
    [...leftVideoRefs.current, ...rightVideoRefs.current].forEach((video) => {
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, []);

  const playCurrentVideos = useCallback(
    (swiper) => {
      if (!swiper) return;

      const activeIndex = swiper.realIndex; // важно при loop: true

      pauseAllVideos();

      const leftVideo = leftVideoRefs.current[activeIndex];
      const rightVideo = rightVideoRefs.current[activeIndex];

      if (leftVideo) leftVideo.play().catch(() => {});
      if (rightVideo) rightVideo.play().catch(() => {});
    },
    [pauseAllVideos]
  );

  useEffect(() => {
    const swiper = swiperRef.current?.swiper;
    if (!swiper || !paginationRef.current) return;

    swiper.params.pagination.el = paginationRef.current;
    swiper.pagination.init();
    swiper.pagination.render();
    swiper.pagination.update();

    playCurrentVideos(swiper);
  }, [items, playCurrentVideos]);

  // Отслеживаем видимость секции
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.3 });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Запускаем/останавливаем autoplay в зависимости от видимости
  useEffect(() => {
    const swiper = swiperRef.current?.swiper;
    if (!swiper || !swiper.autoplay) return;

    if (isVisible) {
      swiper.autoplay.start();
    } else {
      swiper.autoplay.stop();
    }
  }, [isVisible]);

  const handleSlide = (direction) => {
    const swiper = swiperRef.current?.swiper;
    if (!swiper) return;

    if (direction === 'prev') swiper.slidePrev();
    else swiper.slideNext();
  };

  const handleSlideChangeTransitionEnd = useCallback(
    (swiper) => {
      playCurrentVideos(swiper);
    },
    [playCurrentVideos]
  );

  return (
    <section ref={sectionRef} className={styles.CasesSliderVideo}>
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
            enabled: false,
          }}
          onSlideChangeTransitionEnd={handleSlideChangeTransitionEnd}
          breakpoints={{
            320: { spaceBetween: 16, slidesPerView: 1, loop: true },
            1024: { spaceBetween: 32, slidesPerView: 1, loop: true },
            1920: { spaceBetween: 40, slidesPerView: 1, loop: true },
            2560: { spaceBetween: 52, slidesPerView: 1, loop: true },
          }}
        >
          {items.videos?.map((item, index) => (
            <SwiperSlide className={styles.CasesSliderVideo__slide} key={item.id}>
              <div className={styles.CasesSliderVideo__bg}>
                <img loading="lazy" src={items.bg} alt="" aria-hidden="true" />
              </div>

              <div className={styles.CasesSliderVideo__inner}>
                <div className={`${styles.CasesSliderVideo__half} ${styles.CasesSliderVideo__half_left}`} onClick={() => handleSlide('prev')}>
                  <div className={styles.CasesSliderVideo__box}>
                    <video
                      ref={(el) => {
                        leftVideoRefs.current[index] = el;
                      }}
                      className={styles.CasesSliderVideo__video}
                      muted
                      loop
                      preload="metadata"
                      playsInline
                      controls={false}
                    >
                      <source src={item.video_left} type="video/mp4" />
                      Ваш браузер не поддерживает видео.
                    </video>
                  </div>
                </div>

                <div className={`${styles.CasesSliderVideo__half} ${styles.CasesSliderVideo__half_right}`} onClick={() => handleSlide('next')}>
                  <div className={styles.CasesSliderVideo__box}>
                    <video
                      ref={(el) => {
                        rightVideoRefs.current[index] = el;
                      }}
                      className={styles.CasesSliderVideo__video}
                      muted
                      loop
                      preload="metadata"
                      playsInline
                      controls={false}
                    >
                      <source src={item.video_right} type="video/mp4" />
                      Ваш браузер не поддерживает видео.
                    </video>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div ref={paginationRef} className={styles.CasesSliderVideo__pagination} />
      </div>
    </section>
  );
}

export default CasesSliderVideo;
