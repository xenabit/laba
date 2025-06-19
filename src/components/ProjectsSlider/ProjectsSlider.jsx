import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './ProjectsSlider.module.scss';

import picture_1 from '../../assets/images/project-1.jpg';
import picture_2 from '../../assets/images/project-2.jpg';
import picture_3 from '../../assets/images/project-3.jpg';
import picture_4 from '../../assets/images/project-4.jpg';
import picture_5 from '../../assets/images/project-5.jpg';

const items = [
  {
    id: 1,
    picture: picture_1,
    src: '#',
    title: 'Проект такой то',
    desc: 'Выполненные работы Выполненные работы Выполненные работы Выполненные работы Выполненные работы',
  },
  {
    id: 2,
    picture: picture_2,
    src: '#',
    title: 'Проект такой то',
    desc: 'Выполненные работы Выполненные работы Выполненные работы Выполненные работы Выполненные работы',
  },
  {
    id: 3,
    picture: picture_3,
    src: '#',
    title: 'Проект такой то',
    desc: 'Выполненные работы Выполненные работы Выполненные работы Выполненные работы Выполненные работы',
  },
  {
    id: 4,
    picture: picture_4,
    src: '#',
    title: 'Проект такой то',
    desc: 'Выполненные работы Выполненные работы Выполненные работы Выполненные работы Выполненные работы',
  },
  {
    id: 5,
    picture: picture_5,
    src: '#',
    title: 'Проект такой то',
    desc: 'Выполненные работы Выполненные работы Выполненные работы Выполненные работы Выполненные работы',
  },
];

function ProjectsSlider() {
  const swiperRef = useRef(null);
  const cursorRef = useRef(null);
  const projectRef = useRef(null);

  const handleSlide = (direction) => {
    if (direction === 'prev') {
      swiperRef.current.swiper.slidePrev();
    } else if (direction === 'next') {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handleMouseMove = (e) => {
    const projectRect = projectRef.current.getBoundingClientRect();

    const x = e.clientX - projectRect.left;
    const y = e.clientY - projectRect.top;

    cursorRef.current.style.left = `${x}px`;
    cursorRef.current.style.top = `${y}px`;
  };

  return (
    <section ref={projectRef} className={styles.ProjectsSlider} onMouseMove={handleMouseMove}>
      <div ref={cursorRef} className={styles.ProjectsSlider__cursor}></div>
      <div className={styles.ProjectsSlider__swiper}>
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          speed={1000}
          keyboard={{ enabled: true }}
          breakpoints={{
            320: {
              spaceBetween: 0,
              slidesPerView: 1,
              loop: true,
            },
          }}
        >
          {items.map((item) => (
            <SwiperSlide className={styles.ProjectsSlider__slide} key={item.id}>
              <div className={styles.ProjectsSlider__container}>
                <div className={styles.ProjectsSlider__background}>
                  <img loading="lazy" src={item.picture} alt={item.title} />
                </div>
                <div className={`${styles.ProjectsSlider__half} ${styles.ProjectsSlider__half_left}`} onClick={() => handleSlide('prev')}></div>
                <div className={`${styles.ProjectsSlider__half} ${styles.ProjectsSlider__half_right}`} onClick={() => handleSlide('next')}></div>
                <div className={styles.ProjectsSlider__text}>
                  <div className={styles.ProjectsSlider__title}>{item.title}</div>
                  <div className={styles.ProjectsSlider__desc}>{item.desc}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default ProjectsSlider;
