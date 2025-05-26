import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link
import styles from './ProjectsTile.module.scss';

import picture_1 from '../../assets/images/project-tile-1.jpg';
import picture_2 from '../../assets/images/project-tile-2.jpg';
import picture_3 from '../../assets/images/project-tile-3.jpg';
import picture_4 from '../../assets/images/project-tile-4.jpg';

import picture_1x2 from '../../assets/images/project-tile-1-x2.jpg';
import picture_2x2 from '../../assets/images/project-tile-2-x2.jpg';
import picture_3x2 from '../../assets/images/project-tile-3-x2.jpg';
import picture_4x2 from '../../assets/images/project-tile-4-x2.jpg';

const items = [
  {
    id: 1,
    picture: [picture_1, picture_1x2],
    src: '/portfolio?filter=web',
    filter: 'web',
    title: 'WEB приложения / <br>Сайты',
  },
  {
    id: 2,
    picture: [picture_2, picture_2x2],
    src: '/portfolio?filter=mobile',
    filter: 'mobile',
    title: 'IOS / ANDROID / <br>PC',
  },
  {
    id: 3,
    picture: [picture_3, picture_3x2],
    src: '/portfolio?filter=game',
    filter: 'game',
    title: 'VR / AR / <br>360° ПАНОРАМЫ',
  },
  {
    id: 4,
    picture: [picture_4, picture_4x2],
    src: '/portfolio?filter=desktop',
    filter: 'desktop',
    title: 'ВИЗУАЛИЗАЦИИ / <br>АНИМАЦИИ',
  },
];

function ProjectsTile({ projectsTileRef }) {
  const animationRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1440);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const updateScreenSize = () => {
    setIsDesktop(window.innerWidth > 1440);
  };

  const resetAnimation = () => {
    if (animationRef.current) {
      if (window.innerWidth <= 1280) {
        animationRef.current.classList.remove(styles.animate);
        setTimeout(() => {
          animationRef.current.classList.add(styles.animate);
        }, 50);
      } else {
        animationRef.current.classList.remove(styles.animate);
      }
    }
  };

  useEffect(() => {
    resetAnimation();
    window.addEventListener('resize', resetAnimation);

    let timer;
    if (window.innerWidth <= 1280) {
      timer = setInterval(resetAnimation, 6000);
    }

    return () => {
      window.removeEventListener('resize', resetAnimation);
      if (timer) {
        clearInterval(timer);
      }
    };
  }, []);

  useEffect(() => {
    window.addEventListener('resize', updateScreenSize);
    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);

  return (
    <section className={styles.ProjectsTile} ref={projectsTileRef}>
      <div className={styles.ProjectsTile__container}>
        <div className={`${styles.ProjectsTile__layer} ${styles.ProjectsTile__layer_bot}`}>
          <div ref={animationRef} className={`${styles.ProjectsTile__items} ${styles.animate}`}>
            {items.map(({ id, picture, src, title }) => (
              <div className={styles.ProjectsTile__item} style={{ backgroundImage: `url(${isDesktop ? picture[1] : picture[0]})` }} key={id}>
                <Link to={src} className={styles.ProjectsTile__link}>
                  <div className={styles.ProjectsTile__text}>
                    <div className={styles.ProjectsTile__num}>{String(id).padStart(2, '0')}</div>
                    <div className={styles.ProjectsTile__title} dangerouslySetInnerHTML={{ __html: title }}></div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className={`${styles.ProjectsTile__images} ${hoveredIndex !== null ? `${styles[`active${hoveredIndex + 1}`]}` : ''}`}>
          {items.map(({ id }, index) => (
            <div className={styles.ProjectsTile__image} key={id} style={{ backgroundImage: `url(${isDesktop ? items[index].picture[1] : items[index].picture[0]})` }}></div>
          ))}
        </div>

        <div className={`${styles.ProjectsTile__layer} ${styles.ProjectsTile__layer_top}`}>
          <div className={`${styles.ProjectsTile__items}`}>
            {items.map(({ id, src, title, filter }, index) => (
              <div className={styles.ProjectsTile__item} key={id} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave(index)}>
                <Link to={src} className={styles.ProjectsTile__link}>
                  <div className={styles.ProjectsTile__text}>
                    <div className={styles.ProjectsTile__num}>{String(id).padStart(2, '0')}</div>
                    <div className={styles.ProjectsTile__title} dangerouslySetInnerHTML={{ __html: title }}></div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsTile;
