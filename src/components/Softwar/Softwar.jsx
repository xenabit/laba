import styles from './Softwar.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function Softwar({ items }) {
  return (
    <section className={styles.Softwar}>
      <div className={styles.Softwar__container}>
        <Swiper
          className={styles.Softwar__swiper}
          modules={[Pagination, Autoplay]}
          speed={1000}
          keyboard={{ enabled: true }}
          pagination={{
            el: `.${styles.Softwar__pagination}`,
            clickable: true,
            bulletClass: styles.Softwar__bullet,
            bulletActiveClass: styles.Softwar__bullet_active,
            renderBullet: (index, className) => `<span class="${className}"></span>`,
          }}
          breakpoints={{
            280: { spaceBetween: 16, slidesPerView: 1, loop: false },
            700: { spaceBetween: 16, slidesPerView: 2, loop: false },
            1024: { spaceBetween: 32, slidesPerView: 3, loop: false },
            1920: { spaceBetween: 40, slidesPerView: 3, loop: false },
            2560: { spaceBetween: 52, slidesPerView: 3, loop: false },
          }}
        >
          {items.map((item, index) => (
            <SwiperSlide className={styles.Softwar__slide} key={index}>
              <div className={styles.Softwar__img}>
                <img src={item.logo} loading="lazy" alt={item.title} />
              </div>
              <div className={styles.Softwar__title}>{item.title} </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={styles.Softwar__pagination}></div>
      </div>
    </section>
  );
}

export default Softwar;
