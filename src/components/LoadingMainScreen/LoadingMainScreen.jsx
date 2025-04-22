import { useEffect, useRef } from 'react';
import BackgroundLetters from './BackgroundLetters/BackgroundLetters';
import Balloons from './Balloons/Balloons';
import FlareComponent from './FlareComponent/FlareComponent';
import { gsap } from 'gsap';
import headerStyles from '../Header/Header.module.scss';
import styles from './LoadingMainScreen.module.scss';
import introStyles from '../Intro2/Intro2.module.scss';

export const ANIMATION_CONFIG = {
  BG_END: 1.9,
  BALOON_MOVE_DURATION: 1.5,
  TITLE_END: 2.7,
  MAGNET_MAX_DISTANCE: 400,
  MAGNET_STRENGTH: 25,
  HEADER_FADE_DURATION: 0.5,
  LOGO_ANIMATION_DURATION: 1,
  LOGO_ANIMATION_DELAY: 0,
};

function LoadingMainScreen({ headerRef, onStageChange, wrapperRef, loadingStage, onMaxBalloonSize, introRef, projectsTileRef }) {
  const containerRef = useRef(null);
  const tlRef = useRef(null);

  const blockScroll = (event) => {
    event.preventDefault();
  };

  const handleScroll = (event) => {
    event.preventDefault();
    if (loadingStage === 'initial') {
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
    enableScrollLock();

    tlRef.current = gsap.timeline({
      delay: ANIMATION_CONFIG.TITLE_END,
      onComplete: () => {
        window.removeEventListener('wheel', blockScroll);
        window.removeEventListener('touchmove', blockScroll);
        window.addEventListener('wheel', handleScroll, { passive: false });
        window.addEventListener('touchmove', handleScroll, { passive: false });
      },
    });

    // Анимация контейнера
    tlRef.current.to(containerRef.current, {
      opacity: 1,
      duration: ANIMATION_CONFIG.HEADER_FADE_DURATION,
      ease: 'power2.out',
    });
  };

  const animateScrollingStage = () => {
    enableScrollLock();
    // Ничего не делаем с header, так как анимация перенесена в Header.jsx
  };

  const animateTransitionStage = () => {
    enableScrollLock();
    // Ничего не делаем с header, так как анимация перенесена в Header.jsx
  };

  const animateCompleteStage = () => {
    tlRef.current = gsap.timeline({
      onComplete: () => {
        disableScrollLock();
      },
    });

    // Анимация других элементов (intro и projectsTile)
    const introLaba = introRef.current?.querySelector(`.${introStyles.Intro2__laba}`);
    const introDesc = introRef.current?.querySelector(`.${introStyles.Intro2__desc}`);

    if (introLaba && introDesc) {
      gsap.set(introLaba, { xPercent: -100 });
      gsap.set(introDesc, { xPercent: 100 });

      tlRef.current
        .to(
          introLaba,
          {
            xPercent: 0,
            duration: ANIMATION_CONFIG.LOGO_ANIMATION_DURATION,
            ease: 'linear',
          },
          ANIMATION_CONFIG.LOGO_ANIMATION_DELAY
        )
        .to(
          introDesc,
          {
            xPercent: 0,
            duration: ANIMATION_CONFIG.LOGO_ANIMATION_DURATION,
            ease: 'linear',
          },
          ANIMATION_CONFIG.LOGO_ANIMATION_DELAY
        );
    }

    const projectsTile = projectsTileRef.current;
    if (projectsTile && window.innerWidth >= 1440) {
      gsap.set(projectsTile, { yPercent: 100 });
      tlRef.current.to(
        projectsTile,
        {
          yPercent: 0,
          duration: ANIMATION_CONFIG.LOGO_ANIMATION_DURATION,
          ease: 'linear',
        },
        ANIMATION_CONFIG.LOGO_ANIMATION_DELAY
      );
    }
  };

  useEffect(() => {
    const header = headerRef.current;
    if (!header || !containerRef.current) {
      console.warn('Header or container ref is not available');
      return;
    }

    // Начальные установки для контейнера
    gsap.set(containerRef.current, { opacity: 0 });

    // Выполнение анимации в зависимости от стадии
    if (loadingStage === 'initial') {
      animateInitialStage();
    } else if (loadingStage === 'scrolling') {
      animateScrollingStage();
    } else if (loadingStage === 'transition') {
      animateTransitionStage();
    } else if (loadingStage === 'complete') {
      animateCompleteStage();
    }

    // Cleanup
    return () => {
      if (tlRef.current) tlRef.current.kill();
      gsap.killTweensOf([containerRef.current, introRef.current, projectsTileRef.current]);
      disableScrollLock();
    };
  }, [loadingStage, headerRef, introRef, projectsTileRef]);

  const handleBalloonsToCenterComplete = () => {
    onStageChange('transition');
  };

  const handleBalloonsShrinkComplete = () => {
    onStageChange('complete');
  };

  return (
    <section style={{ display: loadingStage === 'complete' ? 'none' : 'block' }}>
      <div ref={containerRef} className={styles.LoadingMainScreen__container}>
        {(loadingStage === 'initial' || loadingStage === 'scrolling') && (
          <>
            <BackgroundLetters containerRef={containerRef} />
            <FlareComponent />
          </>
        )}
        <Balloons
          containerRef={containerRef}
          startBalloonsToCenter={loadingStage === 'scrolling'}
          onBalloonsToCenterComplete={handleBalloonsToCenterComplete}
          onBalloonsShrinkComplete={handleBalloonsShrinkComplete}
          onMaxBalloonSize={onMaxBalloonSize}
          wrapperRef={wrapperRef}
          loadingStage={loadingStage}
        />
      </div>
    </section>
  );
}

export default LoadingMainScreen;
