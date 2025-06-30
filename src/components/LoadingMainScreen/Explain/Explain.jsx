import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ANIMATION_CONFIG } from '../LoadingMainScreen';
import styles from './Explain.module.scss';

function Explain({ loadingStage }) {
  const animate = useRef([]);

  useEffect(() => {
    const textAnimate = animate.current;

    if (loadingStage === 'initial') {
      gsap.set(textAnimate, { opacity: 0 });
      gsap.to(textAnimate, {
        opacity: 1,
        duration: ANIMATION_CONFIG.HEADER_FADE_DURATION,
        ease: 'power2.out',
        stagger: 0.04,
        delay: ANIMATION_CONFIG.HEADER_1_OPACITY_DELAY,
      });
    } else if (loadingStage === 'scrolling') {
      gsap.to(textAnimate, {
        opacity: 0,
        duration: ANIMATION_CONFIG.HEADER_FADE_DURATION,
        ease: 'sine.out',
        delay: 0.2,
        overwrite: 'auto',
      });
    } else if (loadingStage === 'transition' || loadingStage === 'complete') {
      gsap.set(textAnimate, { opacity: 0 });
    }

    return () => {
      gsap.killTweensOf(textAnimate);
    };
  }, [loadingStage]);

  return (
    <div ref={animate} className={styles.Explain}>
      <div>Прокрутите вниз, чтобы увидеть больше</div>
      <div></div>
    </div>
  );
}

export default Explain;
