import { useEffect, useRef, useState } from 'react';
import BackgroundLetters from './BackgroundLetters/BackgroundLetters';
import Balloons from './Balloons/Balloons';
import FlareComponent from './FlareComponent/FlareComponent';
import { gsap } from 'gsap';
import styles from './LoadingMainScreen.module.scss';

export const ANIMATION_CONFIG = {
  MAIN_ENTRY_ANIM: 3.2,
  BG_DURATION: 2.5,
  BALOON_MOVE_DURATION: 1.5,
  HEADER_1_OPACITY_DELAY: 5,
  HEADER_FADE_DURATION: 0.5,
  MAGNET_MAX_DISTANCE: 400,
  MAGNET_STRENGTH: 25,
  LOGO_ANIMATION_DURATION: 1,
  LOGO_ANIMATION_DELAY: 0,
};

function LoadingMainScreen({ headerRef, onStageChange, wrapperRef, loadingStage, introRef, projectsTileRef }) {
  const containerRef = useRef(null);
  const tlRef = useRef(null);
  const [isTabletOrLarger, setIsTabletOrLarger] = useState(typeof window !== 'undefined' ? window.matchMedia('(min-width: 1024px)').matches : false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    const handleResize = () => {
      setIsTabletOrLarger(mediaQuery.matches);
    };

    setIsTabletOrLarger(mediaQuery.matches);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const blockScroll = (event) => {
    event.preventDefault();
  };

  const handleScroll = (event) => {
    event.preventDefault();
    if (loadingStage === 'initial' && isTabletOrLarger) {
      onStageChange('scrolling');
    }
  };

  const enableScrollLock = () => {
    window.addEventListener('wheel', blockScroll, { passive: false });
    window.addEventListener('touchmove', blockScroll, { passive: false });
    document.body.style.overflow = 'hidden';
  };

  const disableScrollLock = () => {
    window.removeEventListener('wheel', blockScroll);
    window.removeEventListener('touchmove', blockScroll);
    window.removeEventListener('wheel', handleScroll);
    window.removeEventListener('touchmove', handleScroll);
    document.body.style.overflow = '';
  };

  const animateInitialStage = () => {
    if (!isTabletOrLarger) {
      onStageChange('complete');
      return;
    }

    enableScrollLock();

    tlRef.current = gsap.timeline({
      delay: ANIMATION_CONFIG.MAIN_ENTRY_ANIM,
      onComplete: () => {
        window.removeEventListener('wheel', blockScroll);
        window.removeEventListener('touchmove', blockScroll);
        window.addEventListener('wheel', handleScroll, { passive: false });
        window.addEventListener('touchmove', handleScroll, { passive: false });
      },
    });
  };

  const animateScrollingStage = () => {
    if (!isTabletOrLarger) {
      onStageChange('transition');
      return;
    }

    enableScrollLock();
  };

  const animateTransitionStage = () => {
    if (!isTabletOrLarger) {
      onStageChange('complete');
      return;
    }

    enableScrollLock();
  };

  const animateCompleteStage = () => {
    tlRef.current = gsap.timeline({
      onComplete: () => {
        disableScrollLock();
      },
    });

    if (!isTabletOrLarger) {
      return;
    }
  };

  useEffect(() => {
    const header = headerRef.current;
    if (!header || !containerRef.current) {
      console.warn('Header or container ref is not available');
      return;
    }

    if (loadingStage === 'initial') {
      animateInitialStage();
    } else if (loadingStage === 'scrolling') {
      animateScrollingStage();
    } else if (loadingStage === 'transition') {
      animateTransitionStage();
    } else if (loadingStage === 'complete') {
      animateCompleteStage();
    }

    return () => {
      if (tlRef.current) tlRef.current.kill();
      gsap.killTweensOf([containerRef.current, introRef.current, projectsTileRef.current]);
      disableScrollLock();
    };
  }, [loadingStage, headerRef, introRef, projectsTileRef, isTabletOrLarger]);

  const handleBalloonsToCenterComplete = () => {
    if (!isTabletOrLarger) {
      onStageChange('transition');
      return;
    }
    onStageChange('transition');
  };

  const handleBalloonsShrinkComplete = () => {
    if (!isTabletOrLarger) {
      onStageChange('complete');
      return;
    }

    onStageChange('complete');
  };

  return (
    <section style={{ display: loadingStage === 'complete' ? 'none' : 'block' }}>
      <div ref={containerRef} className={styles.LoadingMainScreen__container}>
        {isTabletOrLarger && (
          <Balloons
            containerRef={containerRef}
            startBalloonsToCenter={loadingStage === 'scrolling'}
            wrapperRef={wrapperRef}
            loadingStage={loadingStage}
            onBalloonsToCenterComplete={handleBalloonsToCenterComplete}
            onBalloonsShrinkComplete={handleBalloonsShrinkComplete}
          />
        )}
        {(loadingStage === 'initial' || loadingStage === 'scrolling') && isTabletOrLarger && (
          <>
            <BackgroundLetters containerRef={containerRef} />
            <FlareComponent />
          </>
        )}
      </div>
    </section>
  );
}

export default LoadingMainScreen;
