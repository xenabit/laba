import { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useSearchParams } from 'react-router-dom';
import styles from './GalleryTabs.module.scss';
import GalleryItem from '../GalleryItem/GalleryItem';
import { projects, projectsTypes } from '../../constants/projects';

export default function GalleryTabs() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialFilter = searchParams.get('filter') || 'all';
  const [activeFilter, setActiveFilter] = useState(initialFilter);

  useEffect(() => {
    const filterFromUrl = searchParams.get('filter') || 'all';
    if (filterFromUrl !== activeFilter) {
      setActiveFilter(filterFromUrl);
    }
  }, [searchParams]);

  const handleMouseEnter = (video) => {
    video.play();
  };

  const handleMouseLeave = (video) => {
    video.pause();
  };

  const handleFilterChange = (type) => {
    setActiveFilter(type);
    setSearchParams({ filter: type });
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    e.currentTarget.style.setProperty('--x4', `${x}px`);
    e.currentTarget.style.setProperty('--y4', `${y}px`);
  };

  const filteredItems =
    activeFilter === 'all'
      ? projects
      : projects.filter((item) => {
          const itemTypes = Array.isArray(item.type) ? item.type : [item.type];
          return itemTypes.includes(activeFilter);
        });

  return (
    <section className={styles.GalleryTabs}>
      <div className={styles.GalleryTabs__header}>
        <h1 className={styles.GalleryTabs__title}>ПОРТФОЛИО</h1>
        <div className={styles.GalleryTabs__links}>
          <a className={styles.GalleryTabs__mail} href="mailto:info@laba-laba.ru">
            info@laba-laba.ru
          </a>
          <a href="tel:+79161958226" className={styles.GalleryTabs__tel}>
            тел. +7&nbsp;(916)&nbsp;195-82-26
          </a>
          <a href="tel:+79690639323" className={styles.GalleryTabs__tel}>
            тел. +7&nbsp;(969)&nbsp;063-93-23
          </a>
        </div>
      </div>
      <nav className={styles.GalleryTabs__filters}>
        <ul>
          {projectsTypes.map((element) => (
            <li key={element.id}>
              <button onMouseMove={handleMouseMove} className={activeFilter === element.type ? styles.active : ''} onClick={() => handleFilterChange(element.type)}>
                <span>{element.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <TransitionGroup component="ul" className={styles.GalleryTabs__items}>
        {filteredItems.map((element, index) => {
          const uniqueKey = `${element.id}-${activeFilter}`;
          const videoProps =
            index % 2 === 0
              ? { autoPlay: true }
              : {
                  onMouseEnter: (e) => handleMouseEnter(e.currentTarget),
                  onMouseLeave: (e) => handleMouseLeave(e.currentTarget),
                };

          return (
            <CSSTransition
              key={uniqueKey}
              timeout={1000}
              classNames={{
                enter: styles.itemEnter,
                enterActive: styles.itemEnterActive,
                exit: styles.itemExit,
                exitActive: styles.itemExitActive,
              }}
            >
              <GalleryItem videoSrc={element.video} href={element.src} title={element.title} desc={element.desc} videoProps={videoProps} />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </section>
  );
}
