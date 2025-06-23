import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectsTile.module.scss';

import picture1_1x from '../../assets/images/project-tile-1.jpg';
import picture2_1x from '../../assets/images/project-tile-2.jpg';
import picture3_1x from '../../assets/images/project-tile-3.jpg';
import picture4_1x from '../../assets/images/project-tile-4.jpg';

import picture1_2x from '../../assets/images/project-tile-1-x2.jpg';
import picture2_2x from '../../assets/images/project-tile-2-x2.jpg';
import picture3_2x from '../../assets/images/project-tile-3-x2.jpg';
import picture4_2x from '../../assets/images/project-tile-4-x2.jpg';

const items = [
  {
    id: 1,
    picture: [picture1_1x, picture1_2x],
    src: '/portfolio?filter=web',
    title: 'WEB приложения / <br>Сайты',
  },
  {
    id: 2,
    picture: [picture2_1x, picture2_2x],
    src: '/portfolio?filter=mobile',
    title: 'IOS / ANDROID / <br>PC',
  },
  {
    id: 3,
    picture: [picture3_1x, picture3_2x],
    src: '/portfolio?filter=game',
    title: 'VR / AR / <br>360° ПАНОРАМЫ',
  },
  {
    id: 4,
    picture: [picture4_1x, picture4_2x],
    src: '/portfolio?filter=desktop',
    title: 'ВИЗУАЛИЗАЦИИ / <br>АНИМАЦИИ',
  },
];

export default function ProjectsTile({ projectsTileRef }) {
  const animationRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1440);

  useEffect(() => {
    items.forEach(({ picture }) => {
      const low = new Image();
      low.src = picture[0];
      const hi = new Image();
      hi.src = picture[1];
    });
  }, []);

  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth > 1440);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const resetAnimation = () => {
    if (!animationRef.current) return;
    if (window.innerWidth <= 1280) {
      animationRef.current.classList.remove(styles.animate);
      setTimeout(() => {
        animationRef.current.classList.add(styles.animate);
      }, 50);
    } else {
      animationRef.current.classList.remove(styles.animate);
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
      timer && clearInterval(timer);
    };
  }, []);

  return (
    <section className={styles.ProjectsTile} ref={projectsTileRef}>
      <div className={styles.ProjectsTile__container}>
        <div className={`${styles.ProjectsTile__layer} ${styles.ProjectsTile__layer_bot}`}>
          <div ref={animationRef} className={`${styles.ProjectsTile__items} ${styles.animate}`}>
            {items.map(({ id, picture, src }) => {
              const bg = `url(${isDesktop ? picture[1] : picture[0]})`;
              return (
                <div key={id} className={styles.ProjectsTile__item} style={{ backgroundImage: bg }}>
                  <Link to={src} className={styles.ProjectsTile__link}>
                    <div className={styles.ProjectsTile__text}>
                      <div className={styles.ProjectsTile__num}>{String(id).padStart(2, '0')}</div>
                      <div className={styles.ProjectsTile__title} dangerouslySetInnerHTML={{ __html: items[id - 1].title }} />
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className={`${styles.ProjectsTile__images} ${hoveredIndex !== null ? styles[`active${hoveredIndex + 1}`] : ''}`}>
          {items.map(({ id, picture }, idx) => {
            const bg = `url(${isDesktop ? picture[1] : picture[0]})`;
            return <div key={id} className={styles.ProjectsTile__image} style={{ backgroundImage: bg }} />;
          })}
        </div>
        <div className={`${styles.ProjectsTile__layer} ${styles.ProjectsTile__layer_top}`}>
          <div className={styles.ProjectsTile__items}>
            {items.map(({ id, src }, idx) => (
              <div key={id} className={styles.ProjectsTile__item} onMouseEnter={() => setHoveredIndex(idx)} onMouseLeave={() => setHoveredIndex(null)}>
                <Link to={src} className={styles.ProjectsTile__link}>
                  <div className={styles.ProjectsTile__text}>
                    <div className={styles.ProjectsTile__num}>{String(id).padStart(2, '0')}</div>
                    <div className={styles.ProjectsTile__title} dangerouslySetInnerHTML={{ __html: items[id - 1].title }} />
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
