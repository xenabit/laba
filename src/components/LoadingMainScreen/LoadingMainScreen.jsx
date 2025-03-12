import { useEffect, useRef } from 'react';
import BackgroundLetters from './BackgroundLetters/BackgroundLetters';
import Balloons from './Balloons/Balloons';
import FlareComponent from './FlareComponent/FlareComponent';
import { gsap } from 'gsap';
import headerStyles from '../Header/Header.module.scss';
import styles from './LoadingMainScreen.module.scss';
import introStyles from '../Intro2/Intro2.module.scss';
import projectsTileStyles from '../ProjectsTile/ProjectsTile.module.scss';

const ANIMATION_CONFIG = {
  BALOON_MOVE_DURATION: 1.5,
  BALOON_TRANSITION_DELAY: 5,
  MAGNET_MAX_DISTANCE: 400,
  MAGNET_STRENGTH: 25,
  HEADER_FADE_DURATION: 0.5,
  LOGO_ANIMATION_DURATION: 2,
  LOGO_ANIMATION_DELAY: 0,
};

function LoadingMainScreen({ headerRef, onStageChange, wrapperRef, loadingStage, onMaxBalloonSize, introRef, projectsTileRef }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    gsap.set(header, { backgroundColor: 'transparent' });

    if (containerRef.current) {
      gsap.set(containerRef.current, { opacity: 1 });
    } else {
      console.warn('containerRef.current is not yet available');
      return;
    }

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
    } else if (loadingStage === 'complete' && introRef.current && projectsTileRef.current) {
      tl = gsap.timeline({
        onComplete: () => {
          window.removeEventListener('wheel', blockScroll);
          window.removeEventListener('touchmove', blockScroll);
          window.removeEventListener('wheel', handleScroll);
          window.removeEventListener('touchmove', handleScroll);
          document.body.style.overflow = '';
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

      // Анимация Intro2
      const introLaba = introRef.current.querySelector(`.${introStyles.Intro2__laba}`);
      const introDesc = introRef.current.querySelector(`.${introStyles.Intro2__desc}`);

      if (introLaba && introDesc) {
        gsap.set(introLaba, { xPercent: -100 });
        gsap.set(introDesc, { xPercent: 100 });

        tl.to(
          introLaba,
          {
            xPercent: 0,
            duration: ANIMATION_CONFIG.LOGO_ANIMATION_DURATION,
            ease: 'linear',
          },
          ANIMATION_CONFIG.LOGO_ANIMATION_DELAY
        ).to(
          introDesc,
          {
            xPercent: 0,
            duration: ANIMATION_CONFIG.LOGO_ANIMATION_DURATION,
            ease: 'linear',
          },
          ANIMATION_CONFIG.LOGO_ANIMATION_DELAY
        );
      }

      // Анимация ProjectsTile
      const projectsTile = projectsTileRef.current;
      if (projectsTile && window.innerWidth >= 1440) {
        gsap.set(projectsTile, { yPercent: 100 });
        tl.to(
          projectsTile,
          {
            yPercent: 0,
            duration: ANIMATION_CONFIG.LOGO_ANIMATION_DURATION,
            ease: 'linear',
          },
          ANIMATION_CONFIG.LOGO_ANIMATION_DELAY
        );
      }
    }

    return () => {
      window.removeEventListener('wheel', blockScroll);
      window.removeEventListener('touchmove', blockScroll);
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
      if (tl) tl.kill();
      gsap.killTweensOf(header);
      gsap.killTweensOf([logo, toggle, desc, border]);
      if (introRef.current) {
        const introLaba = introRef.current.querySelector(`.${introStyles.Intro2__laba}`);
        const introDesc = introRef.current.querySelector(`.${introStyles.Intro2__desc}`);
        gsap.killTweensOf([introLaba, introDesc]);
      }
      if (projectsTileRef.current) {
        gsap.killTweensOf(projectsTileRef.current);
      }
    };
  }, [headerRef, loadingStage, onStageChange, introRef, projectsTileRef]);

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
          animationConfig={ANIMATION_CONFIG}
        />
      </div>
    </section>
  );
}

export default LoadingMainScreen;
