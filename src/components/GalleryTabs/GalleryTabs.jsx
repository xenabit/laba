import { useState, useCallback, useMemo, useRef, createRef, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useSearchParams } from 'react-router-dom';
import styles from './GalleryTabs.module.scss';
import itemStyles from '../GalleryItem/GalleryItem.module.scss';
import GalleryItem from '../GalleryItem/GalleryItem';
import { projects, projectsTypes } from '../../constants/projects';

const isMobile = typeof window !== 'undefined' && window.innerWidth <= 1024;

export default function GalleryTabs({ loadingStage }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialFilter = searchParams.get('filter') || 'all';
  const [activeFilter, setActiveFilter] = useState(initialFilter);

  useEffect(() => {
    const f = searchParams.get('filter') || 'all';
    if (f !== activeFilter) setActiveFilter(f);
  }, [searchParams, activeFilter]);

  const handleFilterChange = useCallback(
    (type) => {
      setActiveFilter(type);
      setSearchParams({ filter: type });
    },
    [setSearchParams]
  );

  const handleMouseEnter = useCallback((v) => v.play().catch(() => {}), []);
  const handleMouseLeave = useCallback((v) => v.pause(), []);

  const filtered = useMemo(() => (activeFilter === 'all' ? projects : projects.filter((it) => (Array.isArray(it.type) ? it.type : [it.type]).includes(activeFilter))), [activeFilter]);

  const nodeRefs = useRef({});
  const transitionClassNames = {
    enter: styles.itemEnter,
    enterActive: styles.itemEnterActive,
    exit: styles.itemExit,
    exitActive: styles.itemExitActive,
    exitDone: styles.itemExitDone,
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
                onMouseMove={(e) => {
                  const { left, top } = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty('--x4', `${e.clientX - left}px`);
                  e.currentTarget.style.setProperty('--y4', `${e.clientY - top}px`);
                }}
                onClick={() => handleFilterChange(el.type)}
                className={`${styles.filterBtn} ${activeFilter === el.type ? styles.active : ''}`}
              >
                <span>{el.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {loadingStage !== 'complete' ? (
        <ul className={styles.GalleryTabs__items}>
          {filtered.map((_, i) => (
            <li key={i} className={itemStyles.GalleryItem__item}>
              <div className={styles.GalleryTabs__skeletonVideo} />
            </li>
          ))}
        </ul>
      ) : (
        <TransitionGroup component="ul" className={styles.GalleryTabs__items}>
          {filtered.map((item, idx) => {
            if (!nodeRefs.current[item.id]) nodeRefs.current[item.id] = createRef();
            const nodeRef = nodeRefs.current[item.id];

            const baseVideoProps = {
              autoPlay: true,
              muted: true,
              loop: true,
              preload: 'metadata',
              playsInline: true,
              webkitPlaysInline: 'true',
              poster: item.video.poster,
            };
            const videoProps =
              idx % 2 === 1
                ? baseVideoProps
                : {
                    ...baseVideoProps,
                    onLoadedMetadata: (e) => e.currentTarget.pause(),
                    onMouseEnter: (e) => handleMouseEnter(e.currentTarget),
                    onMouseLeave: (e) => handleMouseLeave(e.currentTarget),
                  };

            return (
              <CSSTransition key={item.id} nodeRef={nodeRef} timeout={600} classNames={transitionClassNames}>
                <li ref={nodeRef} className={itemStyles.GalleryItem__item}>
                  <GalleryItem video={item.video} href={item.src} title={item.title} desc={item.desc} videoProps={videoProps} isMobile={isMobile} />
                </li>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      )}
    </section>
  );
}
