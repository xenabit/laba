import { useState, useEffect, useCallback, useMemo, useRef, createRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useSearchParams } from 'react-router-dom';
import styles from './GalleryTabs.module.scss';
import itemStyles from '../GalleryItem/GalleryItem.module.scss';
import GalleryItem from '../GalleryItem/GalleryItem';
import { projects, projectsTypes } from '../../constants/projects';
import useVideoPreload from '../../constants/useVideoPreload.js';

const isMobile = typeof window !== 'undefined' && window.innerWidth <= 1024;
export default function GalleryTabs() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialFilter = searchParams.get('filter') || 'all';
  const [activeFilter, setActiveFilter] = useState(initialFilter);

  useVideoPreload();

  const [loadedIds, setLoadedIds] = useState(() => {
    try {
      return new Set(JSON.parse(sessionStorage.getItem('galleryTabsLoadedIds') || '[]'));
    } catch {
      return new Set();
    }
  });

  const markLoaded = useCallback((id) => {
    setLoadedIds((prev) => {
      if (prev.has(id)) return prev;
      const next = new Set(prev).add(id);
      sessionStorage.setItem('galleryTabsLoadedIds', JSON.stringify(Array.from(next)));
      return next;
    });
  }, []);

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

  const onVideoLoaded = useCallback(
    (id) => {
      markLoaded(id);
    },
    [markLoaded]
  );

  const preloads = projects.map((item) => (
    <video
      key={`preload-${item.id}`}
      preload="none"
      muted
      data-preload
      onLoadedData={() => onVideoLoaded(item.id)}
      style={{
        position: 'absolute',
        width: 0,
        height: 0,
        overflow: 'hidden',
        opacity: 0,
      }}
      playsInline
      webkit-playsinline="true"
    >
      {isMobile ? (
        item.video.mp4 && <source src={item.video.mp4} type="video/mp4" />
      ) : (
        <>
          {item.video.mp4 && <source src={item.video.mp4} type="video/mp4" />}
          {item.video.webm && <source src={item.video.webm} type="video/webm" />}
        </>
      )}
    </video>
  ));

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

  const nodeRefs = useRef({});

  return (
    <section className={styles.GalleryTabs}>
      <div style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}>{preloads}</div>

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
              <button onMouseMove={handleMouseMove} onClick={() => handleFilterChange(el.type)} className={`${styles.filterBtn} ${activeFilter === el.type ? styles.active : ''}`}>
                <span>{el.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <TransitionGroup component="ul" className={styles.GalleryTabs__items}>
        {filteredItems.map((item, index) => {
          const id = item.id;
          if (!nodeRefs.current[id]) {
            nodeRefs.current[id] = createRef();
          }
          const nodeRef = nodeRefs.current[id];

          const baseVideoProps = {
           autoPlay: true,
            muted: true,
            loop: true,
            preload: 'none',
            'data-preload': true,
            playsInline: true,
            webkitplaysinline: 'true',
            onLoadedData: () => onVideoLoaded(id),
          };

          const videoProps =
            index % 2 === 1
              ? baseVideoProps
              : {
                  ...baseVideoProps,
                  onLoadedMetadata: (e) => e.currentTarget.pause(),
                  onMouseEnter: (e) => handleMouseEnter(e.currentTarget),
                  onMouseLeave: (e) => handleMouseLeave(e.currentTarget),
                };

          return (
            <CSSTransition key={id} nodeRef={nodeRef} timeout={600} classNames={transitionClassNames}>
              <li ref={nodeRef} className={itemStyles.GalleryItem__item}>
                {!loadedIds.has(id) && <div className={styles.GalleryTabs__skeletonVideo} />}
                <GalleryItem video={item.video} href={item.src} title={item.title} desc={item.desc} videoProps={videoProps} />
              </li>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </section>
  );
}
