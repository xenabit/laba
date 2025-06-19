import { useState, useEffect, useRef } from 'react';
import styles from './ProjectsGrid.module.scss';
import { motion } from 'framer-motion';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import video_1 from '../../assets/videos/gallery-1.mp4';
import video_2 from '../../assets/videos/gallery-2.mp4';
import video_3 from '../../assets/videos/gallery-3.mp4';
import video_4 from '../../assets/videos/gallery-4.mp4';
import video_5 from '../../assets/videos/gallery-5.mp4';

const items = [
  {
    video: video_1,
    src: '#',
    title: '3D ВИЗУАЛИЗАЦ&shy;ИИ',
    id: 1,
  },
  {
    video: video_2,
    src: '#',
    title: 'WEB',
    id: 2,
  },
  {
    video: video_3,
    src: '#',
    title: 'MOBILE/ desktop',
    id: 3,
  },
  {
    video: video_4,
    src: '#',
    title: 'ВИДЕО',
    id: 4,
  },
  {
    video: video_5,
    src: '#',
    title: 'VR / AR',
    id: 5,
  },
];

function ProjectsGrid() {
  const [isTablet] = useState(window.innerWidth < 1024);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [maskSize, setMaskSize] = useState(0);
  const videoRefs = useRef([]);
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  // Отслеживание позиции курсора
  const handleMouseMove = (e) => {
    const containerRect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - containerRect.left;
    const y = e.clientY - containerRect.top;

    setMousePosition({ x, y });

    // Остлеживание близости к границам элементов
    let nearBorder = false;

    itemsRef.current.forEach((item) => {
      if (item) {
        const rect = item.getBoundingClientRect();
        const offset = 50;

        if (
          (e.clientX > rect.left - offset && e.clientX < rect.left + offset) ||
          (e.clientX > rect.right - offset && e.clientX < rect.right + offset) ||
          (e.clientY > rect.top - offset && e.clientY < rect.top + offset) ||
          (e.clientY > rect.bottom - offset && e.clientY < rect.bottom + offset)
        ) {
          nearBorder = true;
        }
      }
    });

    // Устанавливаем размер маски в зависимоти от близости к границам элементов, а так же увеличение размера при появлении курсора
    setMaskSize(isHovered ? (nearBorder ? 150 : screenWidth < 1600 ? 80 : 200) : 0);
  };

  useEffect(() => {
    // Отслеживание видимости блока
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setIsMobile(window.innerWidth < 900);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, [isHovered, screenWidth]);

  const handlePlayClick = (index) => {
    const video = videoRefs.current[index];
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <section className={styles.ProjectsGrid}>
      {isMobile && (
        <div className={styles.ProjectsGrid__container}>
          <div className={styles.ProjectsGrid__swiper}>
            <Swiper
              modules={[Pagination]}
              speed={1000}
              keyboard={{ enabled: true }}
              pagination={{
                el: `.${styles.ProjectsGrid__pagination}`,
                clickable: true,
                bulletClass: styles.ProjectsGrid__bullet,
                bulletActiveClass: styles.ProjectsGrid__bullet_active,
                renderBullet: (index, className) => `<span class="${className}"></span>`,
              }}
              breakpoints={{
                320: {
                  spaceBetween: 0,
                  slidesPerView: 1,
                  loop: true,
                },
              }}>
              {items.map((item, index) => (
                <SwiperSlide className={styles.ProjectsGrid__slide} key={item.id + '-slide'}>
                  <a href={item.src}>
                    <div className={styles.ProjectsGrid__header} dangerouslySetInnerHTML={{ __html: item.title }} />
                    <div className={styles.ProjectsGrid__video}>
                      <button
                        className={styles.ProjectsGrid__play}
                        onClick={(e) => {
                          e.preventDefault();
                          handlePlayClick(index);
                        }}></button>
                      <video preload="auto" ref={(el) => (videoRefs.current[index] = el)} loop muted>
                        <source src={item.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={styles.ProjectsGrid__pagination}></div>
        </div>
      )}
      {!isMobile && (
        <div className={`${styles.ProjectsGrid__container} ${isVisible ? styles.animate : ''}`} ref={containerRef} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <motion.div
            className={styles.ProjectsGrid__mask}
            animate={{
              maskSize: `${maskSize}px`,
            }}
            transition={{
              maskSize: { duration: 0.01, ease: 'easeInOut' },
            }}
            style={{
              maskPosition: `${mousePosition.x - maskSize / 2}px ${mousePosition.y - maskSize / 2}px`,
              WebkitMaskPosition: `${mousePosition.x - maskSize / 2}px ${mousePosition.y - maskSize / 2}px`,
              WebkitMaskSize: `${maskSize}px`,
            }}>
            <div className={`${styles.ProjectsGrid__items} `}>
              {items.map((item, index) => (
                <div className={styles.ProjectsGrid__item} key={item.id + '-mask'} ref={(el) => (itemsRef.current[index] = el)}>
                  <div className={styles.ProjectsGrid__title} dangerouslySetInnerHTML={{ __html: item.title }} />
                  <div className={styles.ProjectsGrid__preview}></div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className={`${styles.ProjectsGrid__items} `}>
            {items.map((item, index) => (
              <div className={styles.ProjectsGrid__item} key={item.id} ref={(el) => (itemsRef.current[index] = el)}>
                <div className={styles.ProjectsGrid__title} dangerouslySetInnerHTML={{ __html: item.title }} />
                <div className={styles.ProjectsGrid__preview}>
                  <button
                    className={styles.ProjectsGrid__play}
                    onClick={(e) => {
                      e.preventDefault();
                      handlePlayClick(index);
                    }}></button>
                  <video preload="auto" ref={(el) => (videoRefs.current[index] = el)} autoPlay={!isTablet} loop muted>
                    <source src={item.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default ProjectsGrid;
