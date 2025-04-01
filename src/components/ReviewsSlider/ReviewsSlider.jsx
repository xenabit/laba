import './ReviewsSlider.scss'; // Подключаем обычный SCSS
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function ReviewsSlider({ items }) {
  return (
    <section className="ReviewsSlider">
      <div className="ReviewsSlider__container">
        <Swiper
          className={'ReviewsSlider__swiper'}
          modules={[Pagination, Autoplay]}
          speed={1000}
          keyboard={{ enabled: true }}
          slideActiveClass={'ReviewsSlider__slide_active'}
          pagination={{
            el: `.ReviewsSlider__pagination`,
            clickable: true,
            bulletClass: 'ReviewsSlider__bullet',
            bulletActiveClass: 'ReviewsSlider__bullet_active',
            renderBullet: (index, className) => `<span class="${className}"></span>`,
          }}
          breakpoints={{
            280: { spaceBetween: 32, slidesPerView: 1.2, loop: true },
            1024: { spaceBetween: 32, slidesPerView: 1, loop: true, centeredSlides: true },
            1280: { spaceBetween: 100, slidesPerView: 1, loop: true, centeredSlides: true },
            2560: { spaceBetween: 52, slidesPerView: 1, loop: true, centeredSlides: true },
          }}
        >
          {items.map((item, index) => (
            <SwiperSlide className="ReviewsSlider__slide" key={index}>
              <div className="ReviewsSlider__box">
                <div className="ReviewsSlider__title" dangerouslySetInnerHTML={{ __html: item.title }}></div>
                <div className="ReviewsSlider__text" dangerouslySetInnerHTML={{ __html: item.text }}></div>
                <div className="ReviewsSlider__footer">
                  <div className="ReviewsSlider__name" dangerouslySetInnerHTML={{ __html: item.name }}></div>
                  <div className="ReviewsSlider__pictures">
                    {item.picture.map((pic, picIndex) => (
                      <div className="ReviewsSlider__picture" key={picIndex}>
                        <img src={pic.logo} alt={pic.title} loading="lazy" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="ReviewsSlider__pagination"></div>
      </div>
    </section>
  );
}

export default ReviewsSlider;
