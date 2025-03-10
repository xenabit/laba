import { useEffect, useRef } from 'react';
import BackgroundLetters from './BackgroundLetters/BackgroundLetters';
import Balloons from './Balloons/Balloons';
import FlareComponent from './FlareComponent/FlareComponent';
import { gsap } from 'gsap';

// Централизованные конфиги анимации
const ANIMATION_CONFIG = {
  BALOON_MOVE_DURATION: 1.5,
  BALOON_TRANSITION_DELAY: 5,
  MAGNET_MAX_DISTANCE: 400,
  MAGNET_STRENGTH: 25,
  HEADER_FADE_DURATION: 0.5,
};

function LoadingMainScreen({ headerRef, onStageChange, wrapperRef, loadingStage, onMaxBalloonSize }) {
  const containerRef = useRef(null);

  useEffect(() => {
    // Инициализация: шапка скрыта
    gsap.set(headerRef.current, { opacity: 0 });

    let tl;
    if (loadingStage === 'initial') {
      // Появление шапки после шаров
      tl = gsap.timeline({ delay: ANIMATION_CONFIG.BALOON_TRANSITION_DELAY });
      tl.to(headerRef.current, {
        opacity: 1,
        duration: ANIMATION_CONFIG.HEADER_FADE_DURATION,
        ease: 'power2.out',
        delay: ANIMATION_CONFIG.BALOON_MOVE_DURATION,
      });
    } else if (loadingStage === 'scrolling') {
      // Скрытие шапки при скролле
      gsap.to(headerRef.current, {
        opacity: 0,
        duration: ANIMATION_CONFIG.HEADER_FADE_DURATION,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    } else if (loadingStage === 'complete') {
      // Шапка становится видимой после уменьшения шарика
      gsap.to(headerRef.current, {
        opacity: 1,
        duration: ANIMATION_CONFIG.HEADER_FADE_DURATION,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    }

    const handleScroll = (event) => {
      event.preventDefault();
      if (loadingStage === 'initial') {
        onStageChange('scrolling');
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('touchmove', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
      if (tl) tl.kill();
      gsap.killTweensOf(headerRef.current);
    };
  }, [headerRef, loadingStage, onStageChange]);

  const handleBalloonsToCenterComplete = () => {
    onStageChange('transition');
  };

  const handleBalloonsShrinkComplete = () => {
    onStageChange('complete');
  };

  const styles = {
    LoadingMainScreen: {
      display: loadingStage === 'complete' ? 'none' : 'block',
    },
    LoadingMainScreen__container: {
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      backgroundColor: 'white',
      overflow: 'hidden',
    },
  };

  return (
    <section style={styles.LoadingMainScreen}>
      <div ref={containerRef} style={styles.LoadingMainScreen__container}>
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
          animationConfig={ANIMATION_CONFIG}
        />
      </div>
    </section>
  );
}

export default LoadingMainScreen;
