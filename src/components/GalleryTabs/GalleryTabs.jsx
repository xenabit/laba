import { useState, useEffect, useCallback, useMemo, useRef, createRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useSearchParams } from 'react-router-dom';
import styles from './GalleryTabs.module.scss';
import itemStyles from '../GalleryItem/GalleryItem.module.scss';
import GalleryItem from '../GalleryItem/GalleryItem';
import { projects, projectsTypes } from '../../constants/projects';

export default function GalleryTabs() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialFilter = searchParams.get('filter') || 'all';
  const [activeFilter, setActiveFilter] = useState(initialFilter);

  const [loadedIds, setLoadedIds] = useState(new Set());

  const nodeRefs = useRef({});

  useEffect(() => {
    const f = searchParams.get('filter') || 'all';
    if (f !== activeFilter) {
      setActiveFilter(f);
    }
  }, [searchParams]);

  const handleFilterChange = useCallback(
    (type) => {
      setActiveFilter(type);
      setSearchParams({ filter: type });
    },
    [setSearchParams]
  );

  const handleMouseMove = useCallback((e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--x4', `${e.clientX - left}px`);
    e.currentTarget.style.setProperty('--y4', `${e.clientY - top}px`);
  }, []);

  const handleMouseEnter = useCallback((video) => {
    video.play().catch(() => {});
  }, []);
  const handleMouseLeave = useCallback((video) => {
    video.pause();
  }, []);

  const onVideoLoaded = useCallback((id) => {
    setLoadedIds((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  }, []);

  const filteredItems = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter((it) => {
      const types = Array.isArray(it.type) ? it.type : [it.type];
      return types.includes(activeFilter);
    });
  }, [activeFilter]);

  const transitionClassNames = {
    enter: styles.itemEnter,
    enterActive: styles.itemEnterActive,
    exit: styles.itemExit,
    exitActive: styles.itemExitActive,
  };

  return (
    <section className={styles.GalleryTabs}>
      <div className={styles.GalleryTabs__header}>
        <h1 className={styles.GalleryTabs__title}>ПОРТФОЛИО</h1>
        <div className={styles.GalleryTabs__links}>
          <a href="mailto:info@laba-laba.ru">info@laba-laba.ru</a>
          <a href="tel:+79161958226">+7 (916) 195-82-26</a>
          <a href="tel:+79690639323">+7 (969) 063-93-23</a>
        </div>
      </div>

      <nav className={styles.GalleryTabs__filters}>
        <ul>
          {projectsTypes.map((el) => (
            <li key={el.id}>
              <button
                onMouseMove={handleMouseMove}
                onClick={() => handleFilterChange(el.type)}
                className={`${styles.filterBtn} ${activeFilter === el.type ? styles.active : ''}`}
              >
                <span>{el.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <TransitionGroup component="ul" className={styles.GalleryTabs__items}>
        {filteredItems.map((item) => {
          const key = item.id;
          if (!nodeRefs.current[key]) {
            nodeRefs.current[key] = createRef();
          }
          const nodeRef = nodeRefs.current[key];

          const videoProps = {
            autoPlay: true,
            muted: true,
            loop: true,
            preload: "metadata",
            "data-preload": true,
            playsInline: true,
            onLoadedData: () => onVideoLoaded(item.id),
            onMouseEnter: (e) => handleMouseEnter(e.currentTarget),
            onMouseLeave: (e) => handleMouseLeave(e.currentTarget),
          };

          return (
            <CSSTransition key={key} nodeRef={nodeRef} timeout={600} classNames={transitionClassNames}>
              <li ref={nodeRef} className={itemStyles.GalleryItem__item}>
                {!loadedIds.has(item.id) && <div className={styles.GalleryTabs__skeletonVideo} />}
                <GalleryItem videoSrc={item.video} href={item.src} title={item.title} desc={item.desc} videoProps={videoProps} />
              </li>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </section>
  );
}
