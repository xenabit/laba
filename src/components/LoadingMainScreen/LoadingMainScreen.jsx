import { useEffect, useRef } from 'react';
import BackgroundLetters from './BackgroundLetters/BackgroundLetters';
import Balloons from './Balloons/Balloons';
import FlareComponent from './FlareComponent/FlareComponent';
import { gsap } from 'gsap';
import headerStyles from '../Header/Header.module.scss';

// Централизованные конфиги анимации
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
    // Инициализация: шапка скрыта
    gsap.set(headerRef.current, { opacity: 0, backgroundColor: 'transparent' });

    const logo = headerRef.current.querySelector(`.${headerStyles.Header__logo}`);
    const toggle = headerRef.current.querySelector(`.${headerStyles.Header__toggle}`);
    const desc = headerRef.current.querySelector(`.${headerStyles.Header__desc}`);
    const headerTop = headerRef.current.querySelector(`.${headerStyles.Header__top}`);

    // Устанавливаем начальные стили для border-bottom
    const isDesktop = window.matchMedia('(min-width: 90rem)').matches;
    const borderWidth = isDesktop ? 3 : 2;
    gsap.set(headerTop, {
      borderBottomWidth: borderWidth,
      borderBottomStyle: 'solid',
      borderBottomColor: 'var(--prime-2)', // Исходный цвет
    });

    let tl;
    if (loadingStage === 'initial') {
      tl = gsap.timeline({ delay: ANIMATION_CONFIG.BALOON_TRANSITION_DELAY });
      tl.to(headerRef.current, {
        opacity: 1,
        duration: ANIMATION_CONFIG.HEADER_FADE_DURATION,
        ease: 'power2.out',
        delay: ANIMATION_CONFIG.BALOON_MOVE_DURATION,
      });
    } else if (loadingStage === 'scrolling') {
      gsap.to(headerRef.current, {
        opacity: 0,
        duration: ANIMATION_CONFIG.HEADER_FADE_DURATION,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    } else if (loadingStage === 'transition') {
      // Шар стал большим: логотип виден, остальные элементы прозрачны
      gsap.set(logo, {
        scale: 6.66,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1000,
        opacity: 1,
      });
      gsap.set(headerRef.current, { opacity: 1 });
      gsap.set([toggle, desc], { opacity: 0 });
      gsap.set(headerTop, { borderBottomColor: 'rgba(34, 34, 34, 0)' }); // Прозрачный (предполагаем var(--prime-2) как #222222)
    } else if (loadingStage === 'complete') {
      // Шар исчез, логотип возвращается, остальные элементы появляются
      gsap.to(headerRef.current, {
        opacity: 1,
        duration: ANIMATION_CONFIG.HEADER_FADE_DURATION,
        ease: 'power2.out',
        overwrite: 'auto',
      });
      gsap.to(logo, {
        scale: 1,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        duration: ANIMATION_CONFIG.LOGO_ANIMATION_DURATION,
        delay: ANIMATION_CONFIG.LOGO_ANIMATION_DELAY,
        ease: 'linear',
        overwrite: 'auto',
        onComplete: () => {
          gsap.set(logo, { clearProps: 'all' });
        },
      });
      // Восстановление прозрачности toggle и desc
      gsap.to([toggle, desc], {
        opacity: 1,
        duration: ANIMATION_CONFIG.LOGO_ANIMATION_DURATION,
        delay: ANIMATION_CONFIG.LOGO_ANIMATION_DELAY,
        ease: 'linear',
        overwrite: 'auto',
      });
      // Плавное восстановление border-bottom через rgba
      gsap.to(headerTop, {
        borderBottomColor: 'rgba(34, 34, 34, 1)', // Полная непрозрачность (var(--prime-2))
        duration: ANIMATION_CONFIG.LOGO_ANIMATION_DURATION,
        delay: ANIMATION_CONFIG.LOGO_ANIMATION_DELAY,
        ease: 'linear',
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
      gsap.killTweensOf([logo, toggle, desc, headerTop]);
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
