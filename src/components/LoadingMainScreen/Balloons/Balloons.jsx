import { useEffect, useRef } from 'react';
import throttle from 'lodash/throttle';
import styles from './Balloons.module.scss';
import { gsap } from 'gsap';
import { magnetEffect } from '../../../utils/magnetEffect';
import Baloon_lt2 from '../../../assets/images/loading-main-baloon-lt2.svg';
import Baloon_lt1 from '../../../assets/images/loading-main-baloon-lt1.svg';
import Baloon_ct1 from '../../../assets/images/loading-main-baloon-ct1.svg';
import Baloon_ct2 from '../../../assets/images/loading-main-baloon-ct2.svg';
import Baloon_ct3 from '../../../assets/images/loading-main-baloon-ct3.svg';
import Baloon_rt1 from '../../../assets/images/loading-main-baloon-rt1.svg';
import Baloon_rt2 from '../../../assets/images/loading-main-baloon-rt2.svg';
import Baloon_rt3 from '../../../assets/images/loading-main-baloon-rt3.svg';
import Baloon_rb1 from '../../../assets/images/loading-main-baloon-rb1.svg';
import Baloon_rb2 from '../../../assets/images/loading-main-baloon-rb2.svg';
import Baloon_rb3 from '../../../assets/images/loading-main-baloon-rb3.svg';
import Baloon_lb1 from '../../../assets/images/loading-main-baloon-lb1.svg';
import Baloon_lb2 from '../../../assets/images/loading-main-baloon-lb2.svg';
import Baloon_cb1 from '../../../assets/images/loading-main-baloon-cb1.svg';
import Baloon_cb2 from '../../../assets/images/loading-main-baloon-cb2.svg';
import Baloon_r from '../../../assets/images/loading-main-baloon-r.svg';
import { ANIMATION_CONFIG } from '../LoadingMainScreen';

const BALLOONS_CONFIG = [
  {
    key: 'cb2',
    src: Baloon_cb2,
    className: `${styles.Balloons__item} ${styles['Balloons__item--cb2']}`,
    uniqueClass: 'Balloons__item--cb2',
    anim: {
      from: { top: '155%', left: '42%', scale: 1, transformOrigin: 'center center' },
      to: { top: '83%', left: '39%' },
      change: { scale: 1.03, yPercent: 1 },
    },
  },
  {
    key: 'lb2',
    src: Baloon_lb2,
    className: `${styles.Balloons__item} ${styles['Balloons__item--lb2']}`,
    uniqueClass: 'Balloons__item--lb2',
    anim: {
      from: { top: '164.65%', left: '20.75%', scale: 1, transformOrigin: 'center center' },
      to: { top: '74%', left: '5%' },
      change: { scale: 0.98, rotate: 10 },
    },
  },
  {
    key: 'r',
    src: Baloon_r,
    className: `${styles.Balloons__item} ${styles['Balloons__item--r']}`,
    uniqueClass: 'Balloons__item--r',
    anim: {
      from: { top: '5.28%', left: '134.35%', scale: 1, transformOrigin: 'center center' },
      to: { top: '46%', left: '92.5%' },
      change: { scale: 1.1, yPercent: 0.6 },
    },
  },
  {
    key: 'lt1',
    src: Baloon_lt1,
    className: `${styles.Balloons__item} ${styles['Balloons__item--lt1']}`,
    uniqueClass: 'Balloons__item--lt1',
    anim: {
      from: { top: '-56%', left: '-77%', scale: 1, transformOrigin: 'center center' },
      to: { top: '7%', left: '-18%' },
      change: { scale: 0.98, xPercent: -1 },
    },
  },
  {
    key: 'rb2',
    src: Baloon_rb2,
    className: `${styles.Balloons__item} ${styles['Balloons__item--rb2']}`,
    uniqueClass: 'Balloons__item--rb2',
    anim: {
      from: { top: '134.28%', left: '134.44%', scale: 1, transformOrigin: 'center center' },
      to: { top: '63%', left: '79%' },
      change: { scale: 0.95, yPercent: 1 },
    },
  },
  {
    key: 'rt3',
    src: Baloon_rt3,
    className: `${styles.Balloons__item} ${styles['Balloons__item--rt3']}`,
    uniqueClass: 'Balloons__item--rt3',
    anim: {
      from: { top: '-96.44%', left: '120.81%', scale: 1, transformOrigin: 'center center' },
      to: { top: '6%', left: '76%' },
      change: { scale: 1.02, yPercent: 1, rotate: -15 },
    },
  },
  {
    key: 'ct1',
    src: Baloon_ct1,
    className: `${styles.Balloons__item} ${styles['Balloons__item--ct1']}`,
    uniqueClass: 'Balloons__item--ct1',
    anim: {
      from: { top: '-100%', left: '33%', scale: 1, transformOrigin: 'center center' },
      to: { top: '9%', left: '29.5%' },
      change: { scale: 1.05, xPercent: -0.3 },
    },
  },
  {
    key: 'rt2',
    src: Baloon_rt2,
    className: `${styles.Balloons__item} ${styles['Balloons__item--rt2']}`,
    uniqueClass: 'Balloons__item--rt2',
    anim: {
      from: { top: '-58.11%', left: '122.38%', scale: 1, transformOrigin: 'center center' },
      to: { top: '26%', left: '86%' },
      change: { scale: 1.05, yPercent: -1 },
    },
  },
  {
    key: 'rt1',
    src: Baloon_rt1,
    className: `${styles.Balloons__item} ${styles['Balloons__item--rt1']}`,
    uniqueClass: 'Balloons__item--rt1',
    anim: {
      from: { top: '-39.99%', left: '107.73%', scale: 1, transformOrigin: 'center center' },
      to: { top: '19.5%', left: '72%' },
      change: { scale: 0.95, yPercent: -1 },
    },
  },
  {
    key: 'rb1',
    src: Baloon_rb1,
    className: `${styles.Balloons__item} ${styles['Balloons__item--rb1']}`,
    uniqueClass: 'Balloons__item--rb1',
    anim: {
      from: { top: '95.42%', left: '124.5%', scale: 1, transformOrigin: 'center center' },
      to: { top: '73%', left: '78.5%' },
      change: { scale: 1.05, yPercent: -1, xPercent: 0.3 },
    },
  },
  {
    key: 'rb3',
    src: Baloon_rb3,
    className: `${styles.Balloons__item} ${styles['Balloons__item--rb3']}`,
    uniqueClass: 'Balloons__item--rb3',
    anim: {
      from: { top: '92.07%', left: '137.38%', scale: 1, transformOrigin: 'center center' },
      to: { top: '64.11%', left: '89.25%' },
      change: { scale: 1.05, yPercent: -0.11, xPercent: 1 },
    },
  },
  {
    key: 'ct2',
    src: Baloon_ct2,
    className: `${styles.Balloons__item} ${styles['Balloons__item--ct2']}`,
    uniqueClass: 'Balloons__item--ct2',
    anim: {
      from: { top: '-48.78%', left: '32.25%', scale: 1, transformOrigin: 'center center' },
      to: { top: '16.5%', left: '35.5%' },
      change: { scale: 0.95, yPercent: -1 },
    },
  },
  {
    key: 'ct3',
    src: Baloon_ct3,
    className: `${styles.Balloons__item} ${styles['Balloons__item--ct3']}`,
    uniqueClass: 'Balloons__item--ct3',
    anim: {
      from: { top: '-26.67%', left: '30.31%', scale: 1, transformOrigin: 'center center' },
      to: { top: '24.5%', left: '34%' },
      change: { scale: 0.95, yPercent: 1, xPercent: -0.2 },
    },
  },
  {
    key: 'lb1',
    src: Baloon_lb1,
    className: `${styles.Balloons__item} ${styles['Balloons__item--lb1']}`,
    uniqueClass: 'Balloons__item--lb1',
    anim: {
      from: { top: '226.67%', left: '-20.13%', scale: 1, transformOrigin: 'center center' },
      to: { top: '67%', left: '-3%' },
      change: { scale: 1.05, yPercent: -1 },
    },
  },
  {
    key: 'lt2',
    src: Baloon_lt2,
    className: `${styles.Balloons__item} ${styles['Balloons__item--lt2']}`,
    uniqueClass: 'Balloons__item--lt2',
    anim: {
      from: { top: '29.22%', left: '-34.83%', scale: 1, transformOrigin: 'center center' },
      to: { top: '21%', left: '-7%' },
      change: { scale: 0.95, yPercent: 1 },
    },
  },
  {
    key: 'cb1',
    src: Baloon_cb1,
    className: `${styles.Balloons__item} ${styles['Balloons__item--cb1']}`,
    uniqueClass: 'Balloons__item--cb1',
    anim: {
      from: { top: '128.89%', left: '49.88%', scale: 1, transformOrigin: 'center center' },
      to: { top: '86%', left: '49%', scale: 1.2 },
      change: { scale: 1.05, yPercent: 0, xPercent: -1 },
    },
  },
];

function Balloons({ containerRef, startBalloonsToCenter, wrapperRef, loadingStage }) {
  const balloonRefs = useRef({});
  const hasScrolled = useRef(false);

  const balloonsEntryAnimate = (balloons) => {
    const tl = gsap.timeline({ delay: ANIMATION_CONFIG.MAIN_ENTRY_ANIM });

    BALLOONS_CONFIG.forEach(({ key, anim: { from } }) => {
      const balloon = balloonRefs.current[key]?.current;
      if (balloon) {
        gsap.set(balloon, from);
      }
    });

    balloons.forEach((balloon, index) => {
      const {
        anim: { to, change },
      } = BALLOONS_CONFIG[index];
      tl.to(
        balloon,
        {
          ...to,
          duration: ANIMATION_CONFIG.BALOON_MOVE_DURATION,
          ease: 'linear',
        },
        0
      ).to(
        balloon,
        {
          ...change,
          duration: ANIMATION_CONFIG.BALOON_MOVE_DURATION,
          ease: 'linear',
          repeat: -1,
          yoyo: true,
          overwrite: 'auto',
        },
        ANIMATION_CONFIG.BALOON_MOVE_DURATION
      );
    });
  };

  const balloonsToCenterAnimate = (balloons) => {
    if (hasScrolled.current) return;
    hasScrolled.current = true;

    gsap.killTweensOf(balloons);

    const tl = gsap.timeline();
    balloons.forEach((balloon, index) => {
      tl.to(
        balloon,
        {
          width: '0px',
          height: '0px',
          top: '39.8%',
          left: '30.7%',
          scale: 1,
          rotation: 0,
          duration: 0.2,
          opacity: 0,
          ease: 'linear',
          overwrite: 'all',
        },
        index * 0.1
      );
    });
  };

  useEffect(() => {
    const balloons = Object.values(balloonRefs.current)
      .map((ref) => ref.current)
      .filter(Boolean);
    const container = containerRef.current;
    let isMagnetActive = false;

    const handleMouseMove = throttle((e) => {
      if (!isMagnetActive || hasScrolled.current) return;
      const containerRect = container.getBoundingClientRect();
      const mouseX = e.clientX - containerRect.left;
      const mouseY = e.clientY - containerRect.top;
      balloons.forEach((balloon) =>
        magnetEffect(balloon, mouseX, mouseY, containerRect, {
          maxDistance: ANIMATION_CONFIG.MAGNET_MAX_DISTANCE,
          strength: ANIMATION_CONFIG.MAGNET_STRENGTH * 0.5,
          duration: 0.2,
        })
      );
    }, 32);

    if (loadingStage === 'initial') {
      balloonsEntryAnimate(balloons);
      setTimeout(
        () => {
          if (!hasScrolled.current) {
            isMagnetActive = true;
            container.addEventListener('mousemove', handleMouseMove);
          }
        },
        ANIMATION_CONFIG.MAIN_ENTRY_ANIM * 1000 + ANIMATION_CONFIG.BALOON_MOVE_DURATION * 1000
      );
    }

    if (startBalloonsToCenter) {
      balloonsToCenterAnimate(balloons);
      isMagnetActive = false;
      container.removeEventListener('mousemove', handleMouseMove);
    }

    return () => {
      gsap.killTweensOf(balloons);
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, [loadingStage, startBalloonsToCenter, containerRef]);

  return (
    <div className={styles.Balloons__container}>
      {BALLOONS_CONFIG.map(({ key, src, className }) => (
        <div key={key} ref={(el) => (balloonRefs.current[key] = { current: el })} className={className}>
          <img src={src} alt={`balloon-${key}`} />
        </div>
      ))}
    </div>
  );
}

export default Balloons;
