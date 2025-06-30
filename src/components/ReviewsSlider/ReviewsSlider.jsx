import './ReviewsSlider.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function ReviewsSlider({ items }) {
  // Отключаем loop и centeredSlides, если слайдов 2 или меньше
  const isLoopEnabled = items.length > 2;
  // Отключаем пагинацию, если слайд 1
  const isPaginationEnabled = items.length > 1;

  return (
    <section className="ReviewsSlider">
      <div className="ReviewsSlider__container">
        <Swiper
          className={'ReviewsSlider__swiper'}
          modules={[Pagination, Autoplay]}
          speed={1000}
          keyboard={{ enabled: true }}
          slideActiveClass={'ReviewsSlider__slide_active'}
          pagination={
            isPaginationEnabled
              ? {
                  el: `.ReviewsSlider__pagination`,
                  clickable: true,
                  bulletClass: 'ReviewsSlider__bullet',
                  bulletActiveClass: 'ReviewsSlider__bullet_active',
                  renderBullet: (index, className) => `<span class="${className}"></span>`,
                }
              : false
          }
          loop={isLoopEnabled}
          breakpoints={{
            280: {
              spaceBetween: 32,
              slidesPerView: isLoopEnabled ? 1.2 : 1, // Для 1-2 слайдов показываем ровно 1
              loop: isLoopEnabled,
              centeredSlides: isLoopEnabled,
            },
            1024: {
              spaceBetween: 32,
              slidesPerView: 1,
              loop: isLoopEnabled,
              centeredSlides: isLoopEnabled,
            },
            1280: {
              spaceBetween: 100,
              slidesPerView: 1,
              loop: isLoopEnabled,
              centeredSlides: isLoopEnabled,
            },
            2560: {
              spaceBetween: 52,
              slidesPerView: 1,
              loop: isLoopEnabled,
              centeredSlides: isLoopEnabled,
            },
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
                        <picture>
                          <source type="image/avif" srcSet={pic.logo.avif} />
                          <source type="image/webp" srcSet={pic.logo.webp} />
                          <img src={pic.logo.img} loading="lazy" />
                        </picture>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {isPaginationEnabled && <div className="ReviewsSlider__pagination"></div>}
      </div>
    </section>
  );
}

export default ReviewsSlider;
