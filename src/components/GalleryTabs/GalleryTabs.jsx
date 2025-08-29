import { useState, useEffect, useCallback, useMemo, useRef, createRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useSearchParams } from 'react-router-dom';
import styles from './GalleryTabs.module.scss';
import itemStyles from '../GalleryItem/GalleryItem.module.scss';
import GalleryItem from '../GalleryItem/GalleryItem';
import { projects, projectsTypes } from '../../constants/projects';
import useIsMobile from '../../hooks/useIsMobile';

export default function GalleryTabs() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialFilter = searchParams.get('filter') || 'all';
  const [activeFilter, setActiveFilter] = useState(initialFilter);
  const isMobile = useIsMobile();

  const supportsHover = typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  const rafRef = useRef(0);

  const handleFilterBtnMove = useCallback((e) => {
    const el = e.currentTarget;
    const { clientX, clientY } = e;
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const { left, top } = el.getBoundingClientRect();
      el.style.setProperty('--x4', `${clientX - left}px`);
      el.style.setProperty('--y4', `${clientY - top}px`);
    });
  }, []);

  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

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

  const filtered = useMemo(() => (activeFilter === 'all' ? projects : projects.filter((it) => (Array.isArray(it.type) ? it.type : [it.type]).includes(activeFilter))), [activeFilter]);
  const visibleCount = filtered.length;
  
  const isHoverPlayable = useCallback(
    (idx) => (visibleCount === 1 ? false : idx % 2 === 0),
    [visibleCount]
  );

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
                onPointerMove={supportsHover ? handleFilterBtnMove : undefined}
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
        {filtered.map((item, idx) => {
          if (!nodeRefs.current[item.id]) nodeRefs.current[item.id] = createRef();
          const nodeRef = nodeRefs.current[item.id];

          const hoverPlayable = isHoverPlayable(idx);
          const preload = isMobile ? 'metadata' : 'auto';
          const fallbackPoster = item.video?.poster;

          return (
            <CSSTransition key={item.id} nodeRef={nodeRef} timeout={600} classNames={transitionClassNames}>
              <li ref={nodeRef} className={itemStyles.GalleryItem__item}>
                <GalleryItem video={item.video} href={item.src} title={item.title} desc={item.desc} hoverPlayable={hoverPlayable} preload={preload} fallbackPoster={fallbackPoster} />
              </li>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </section>
  );
}
