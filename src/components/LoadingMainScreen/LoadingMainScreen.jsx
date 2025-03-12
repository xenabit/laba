import { useEffect, useRef } from 'react';
import BackgroundLetters from './BackgroundLetters/BackgroundLetters';
import Balloons from './Balloons/Balloons';
import FlareComponent from './FlareComponent/FlareComponent';
import { gsap } from 'gsap';
import headerStyles from '../Header/Header.module.scss';

const ANIMATION_CONFIG = {
  BALOON_MOVE_DURATION: 1.5,
  BALOON_TRANSITION_DELAY: 5,
  MAGNET_MAX_DISTANCE: 400,
  MAGNET_STRENGTH: 25,
  HEADER_FADE_DURATION: 0.5,
  LOGO_ANIMATION_DURATION: 2,
  LOGO_ANIMATION_DELAY: 1,
};

function LoadingMainScreen({ headerRef, onStageChange, wrapperRef, loadingStage, onMaxBalloonSize }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    // Инициализация: шапка скрыта, прозрачный фон
    gsap.set(header, { opacity: 0, backgroundColor: 'transparent' });

    const logo = header.querySelector(`.${headerStyles.Header__logo}`);
    const toggle = header.querySelector(`.${headerStyles.Header__toggle}`);
    const desc = header.querySelector(`.${headerStyles.Header__desc}`);
    const border = header.querySelector(`.${headerStyles.Header__border}`);

    if (!logo || !toggle || !desc || !border) {
      console.warn('Один из элементов шапки не найден:', { logo, toggle, desc, border });
      return;
    }

    let tl;
    const blockScroll = (event) => {
      event.preventDefault();
    };

    window.addEventListener('wheel', blockScroll, { passive: false });
    window.addEventListener('touchmove', blockScroll, { passive: false });

    const handleScroll = (event) => {
      event.preventDefault();
      if (loadingStage === 'initial') {
        onStageChange('scrolling');
      }
    };

    if (loadingStage === 'initial') {
      tl = gsap.timeline({
        delay: ANIMATION_CONFIG.BALOON_TRANSITION_DELAY,
        onComplete: () => {
          window.removeEventListener('wheel', blockScroll);
          window.removeEventListener('touchmove', blockScroll);
          window.addEventListener('wheel', handleScroll, { passive: false });
          window.addEventListener('touchmove', handleScroll, { passive: false });
        },
      });
      tl.to(header, {
        opacity: 1,
        duration: ANIMATION_CONFIG.HEADER_FADE_DURATION,
        ease: 'power2.out',
        delay: ANIMATION_CONFIG.BALOON_MOVE_DURATION,
      });
    } else if (loadingStage === 'scrolling') {
      gsap.to(header, {
        opacity: 0,
        duration: ANIMATION_CONFIG.HEADER_FADE_DURATION,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    } else if (loadingStage === 'transition') {
      gsap.set(logo, {
        scale: 6.66,
        position: 'absolute',
        left: '50.5%',
        top: '41.5%',
        transform: 'translate(-31%, 1700%)',
        zIndex: 10,
        opacity: 1,
      });
      gsap.set(header, { opacity: 1 });
      gsap.set([toggle, desc, border], { opacity: 0 });
    } else if (loadingStage === 'complete') {
      tl = gsap.timeline({
        onComplete: () => {
          window.removeEventListener('wheel', blockScroll);
          window.removeEventListener('touchmove', blockScroll);
          window.removeEventListener('wheel', handleScroll);
          window.removeEventListener('touchmove', handleScroll);
          document.body.style.overflow = '';
          // Устанавливаем цвет фона шапки после анимации
          gsap.set(header, { backgroundColor: 'var(--prime-1)' });
        },
      });
      tl.to(header, {
        opacity: 1,
        duration: ANIMATION_CONFIG.HEADER_FADE_DURATION,
        ease: 'power2.out',
      })
        .to(
          logo,
          {
            scale: 1,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            duration: ANIMATION_CONFIG.LOGO_ANIMATION_DURATION,
            ease: 'linear',
            overwrite: 'auto',
          },
          ANIMATION_CONFIG.LOGO_ANIMATION_DELAY
        )
        .to(
          [toggle, desc, border],
          {
            opacity: 1,
            duration: ANIMATION_CONFIG.LOGO_ANIMATION_DURATION,
            ease: 'linear',
            overwrite: 'auto',
          },
          ANIMATION_CONFIG.LOGO_ANIMATION_DELAY
        );
    }

    return () => {
      window.removeEventListener('wheel', blockScroll);
      window.removeEventListener('touchmove', blockScroll);
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
      if (tl) tl.kill();
      gsap.killTweensOf(header);
      gsap.killTweensOf([logo, toggle, desc, border]);
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
