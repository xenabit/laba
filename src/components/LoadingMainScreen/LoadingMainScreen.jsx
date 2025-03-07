import { useEffect, useRef } from 'react';
import BackgroundLetters from './BackgroundLetters/BackgroundLetters';
import Balloons from './Balloons/Balloons';
import FlareComponent from './FlareComponent/FlareComponent';
import { gsap } from 'gsap';

function LoadingMainScreen({ headerRef, onStageChange, wrapperRef, loadingStage }) {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.set(headerRef.current, { opacity: 0 });

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
    };
  }, [headerRef, loadingStage, onStageChange]);

  const handleBalloonsToCenterComplete = () => {
    onStageChange('transition');
    setTimeout(() => onStageChange('complete'), 1000);
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
        {(loadingStage === 'initial' || loadingStage === 'scrolling') && <BackgroundLetters containerRef={containerRef} />}
        {(loadingStage === 'initial' || loadingStage === 'scrolling') && <FlareComponent />}
        <Balloons
          headerRef={headerRef}
          containerRef={containerRef}
          startBalloonsToCenter={loadingStage === 'scrolling'}
          onBalloonsToCenterComplete={handleBalloonsToCenterComplete}
          wrapperRef={wrapperRef}
          loadingStage={loadingStage}
        />
      </div>
    </section>
  );
}

export default LoadingMainScreen;
