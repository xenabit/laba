import { useEffect, useRef } from 'react';
import throttle from 'lodash/throttle';
import styles from './Balloons.module.scss';
import { gsap } from 'gsap';

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
import Baloon_c from '../../../assets/images/loading-main-baloon-c.svg';

import { ANIMATION_CONFIG } from '../LoadingMainScreen';

const BALLOONS_CONFIG = [
  {
    key: 'c',
    src: Baloon_c,
    className: `${styles.Balloons__item} ${styles.Balloons__item_c}`,
    anim: { from: { top: '-8.89%', left: '47.94%', scale: 1 }, to: { top: '39.8%', left: '30.7%' }, change: { scale: 0.7, top: '39%', left: '30.8%' } },
  },
  { key: 'cb2', src: Baloon_cb2, className: styles.Balloons__item, anim: { from: { top: '155%', left: '42%', scale: 1 }, to: { top: '83%', left: '39%' }, change: { scale: 1.01, top: '84%' } } },
  {
    key: 'lb2',
    src: Baloon_lb2,
    className: styles.Balloons__item,
    anim: { from: { top: '164.65%', left: '20.75%', scale: 1 }, to: { top: '74%', left: '5%' }, change: { scale: 0.89, rotate: 21.79 } },
  },
  { key: 'r', src: Baloon_r, className: styles.Balloons__item, anim: { from: { top: '5.28%', left: '134.35%', scale: 1 }, to: { top: '46%', left: '92.5%' }, change: { scale: 1.09, top: '48%' } } },
  { key: 'lt1', src: Baloon_lt1, className: styles.Balloons__item, anim: { from: { top: '-56%', left: '-77%', scale: 1 }, to: { top: '7%', left: '-18%' }, change: { scale: 0.95, left: '-20%' } } },
  { key: 'rb2', src: Baloon_rb2, className: styles.Balloons__item, anim: { from: { top: '134.28%', left: '134.44%', scale: 1 }, to: { top: '63%', left: '79%' }, change: { scale: 0.9, top: '64%' } } },
  {
    key: 'rt3',
    src: Baloon_rt3,
    className: styles.Balloons__item,
    anim: { from: { top: '-96.44%', left: '120.81%', scale: 1 }, to: { top: '6%', left: '76%' }, change: { scale: 1.02, top: '8%', rotate: -21.5 } },
  },
  { key: 'ct1', src: Baloon_ct1, className: styles.Balloons__item, anim: { from: { top: '-100%', left: '33%', scale: 1 }, to: { top: '9%', left: '29.5%' }, change: { scale: 1.15, left: '29.2%' } } },
  { key: 'rt2', src: Baloon_rt2, className: styles.Balloons__item, anim: { from: { top: '-58.11%', left: '122.38%', scale: 1 }, to: { top: '26%', left: '86%' }, change: { scale: 1.1, top: '25%' } } },
  {
    key: 'rt1',
    src: Baloon_rt1,
    className: styles.Balloons__item,
    anim: { from: { top: '-39.99%', left: '107.73%', scale: 1 }, to: { top: '19.5%', left: '72%' }, change: { scale: 0.95, top: '18%' } },
  },
  {
    key: 'rb1',
    src: Baloon_rb1,
    className: styles.Balloons__item,
    anim: { from: { top: '95.42%', left: '124.5%', scale: 1 }, to: { top: '73%', left: '78.5%' }, change: { scale: 0.9, top: '70%', left: '78.8%' } },
  },
  {
    key: 'rb3',
    src: Baloon_rb3,
    className: styles.Balloons__item,
    anim: { from: { top: '92.07%', left: '137.38%', scale: 1 }, to: { top: '64.11%', left: '89.25%' }, change: { scale: 1.08, top: '64%', left: '91%' } },
  },
  {
    key: 'ct2',
    src: Baloon_ct2,
    className: styles.Balloons__item,
    anim: { from: { top: '-48.78%', left: '32.25%', scale: 1 }, to: { top: '16.5%', left: '35.5%' }, change: { scale: 0.8, top: '15.7%', left: '35.4%' } },
  },
  {
    key: 'ct3',
    src: Baloon_ct3,
    className: styles.Balloons__item,
    anim: { from: { top: '-26.67%', left: '30.31%', scale: 1 }, to: { top: '24.5%', left: '34%' }, change: { scale: 0.87, top: '25%', left: '33.8%' } },
  },
  { key: 'lb1', src: Baloon_lb1, className: styles.Balloons__item, anim: { from: { top: '226.67%', left: '-20.13%', scale: 1 }, to: { top: '67%', left: '-3%' }, change: { top: '65%' } } },
  { key: 'lt2', src: Baloon_lt2, className: styles.Balloons__item, anim: { from: { top: '29.22%', left: '-34.83%', scale: 1 }, to: { top: '21%', left: '-7%' }, change: { scale: 0.95, top: '23%' } } },
  {
    key: 'cb1',
    src: Baloon_cb1,
    className: styles.Balloons__item,
    anim: { from: { top: '128.89%', left: '49.88%', scale: 1 }, to: { top: '84%', left: '48.5%', scale: 1.2 }, change: { scale: 1.15, top: '84%', left: '47%' } },
  },
];

function Balloons({ containerRef, startBalloonsToCenter, onBalloonsToCenterComplete, onBalloonsShrinkComplete, onMaxBalloonSize, wrapperRef, loadingStage }) {
  const balloonRefs = useRef({});
  const hasScrolled = useRef(false);

  const balloonsEntryAnimate = (balloons) => {
    const tl = gsap.timeline({ delay: ANIMATION_CONFIG.TITLE_END });
    BALLOONS_CONFIG.forEach(({ key, anim: { from, to, change } }) => {
      const balloon = balloonRefs.current[key]?.current;
      if (!balloon) return;
      gsap.set(balloon, from);
      tl.to(balloon, { ...to, duration: ANIMATION_CONFIG.BALOON_MOVE_DURATION, ease: 'linear' }, 0).to(
        balloon,
        { ...change, duration: ANIMATION_CONFIG.BALOON_MOVE_DURATION, ease: 'linear', repeat: -1, yoyo: true },
        '>'
      );
    });
  };

  const balloonsToCenterAnimate = (balloons) => {
    if (hasScrolled.current) return;
    hasScrolled.current = true;

    gsap.killTweensOf(balloons);

    const tl = gsap.timeline({
      onComplete: () => {
        onBalloonsToCenterComplete();
        onMaxBalloonSize();
      },
    });
    const otherBalloons = balloons.filter((balloon) => !balloon.classList.contains(styles.Balloons__item_c));
    otherBalloons.forEach((balloon, index) => {
      tl.to(balloon, { width: '0px', height: '0px', top: '39.8%', left: '30.7%', scale: 1, rotation: 0, duration: 0.2, opacity: 0, ease: 'linear', overwrite: 'all' }, index * 0.2);
    });

    const balloonCenter = balloonRefs.current.c?.current;
    if (balloonCenter) {
      gsap.set(balloonCenter, { top: '39.8%', left: '30.7%', transformOrigin: 'center', width: '68px', height: '68px', zIndex: 1000 });
      const scaleSteps = [
        { scale: 1.2, top: '39.8%', left: '30.7%' },
        { scale: 1.5, top: '39.8%', left: '30.7%' },
        { scale: 1.7, top: '41%', left: '30.7%' },
        { scale: 3.1, top: '42%', left: '30.7%' },
        { scale: 4.2, top: '42.1%', left: '30.1%' },
        { scale: 9.4, top: '46.2%', left: '29.2%' },
        { scale: 10.6, top: '47.3%', left: '29.1%' },
        { scale: 12, top: '47.3%', left: '28%' },
        { scale: 12.5, top: '47.3%', left: '28%' },
        { scale: 14, top: '49.3%', left: '28%' },
        { scale: 14.5, top: '49.3%', left: '28%' },
        { scale: 16.5, top: '51.3%', left: '27%' },
        { scale: 20.3, top: '51.3%', left: '27%' },
        { scale: 23.8, top: '56.3%', left: '25%' },
        { scale: 27.2, top: '58.3%', left: '25%' },
      ];
      scaleSteps.forEach((step, index) => {
        tl.to(balloonCenter, { ...step, duration: 0.6, ease: 'linear', overwrite: 'all' }, index * 0.2);
      });
    }
  };

  const shrinkCentralBalloon = (balloonCenter) => {
    if (!balloonCenter) return;

    const baseHeight = 900;
    const baseTop = 41.5;

    const currentHeight = window.innerHeight;

    const heightRatio = currentHeight / baseHeight;
    const adjustedTop = baseTop / heightRatio;

    const tl = gsap.timeline({ onComplete: onBalloonsShrinkComplete });
    tl.to(balloonCenter, {
      scale: 1,
      left: '51%',
      top: `${adjustedTop}%`,
      duration: 1.5,
      ease: 'power2.inOut',
      overwrite: 'all',
    }).to(
      balloonCenter,
      {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.in',
      },
      '-=0.5'
    );
  };

  const applyMagnetEffect = (balloon, mouseX, mouseY, containerRect) => {
    const balloonRect = balloon.getBoundingClientRect();
    const balloonX = balloonRect.left - containerRect.left + balloonRect.width / 2;
    const balloonY = balloonRect.top - containerRect.top + balloonRect.height / 2;
    const distance = Math.sqrt((mouseX - balloonX) ** 2 + (mouseY - balloonY) ** 2);

    const isWithinRange = distance < ANIMATION_CONFIG.MAGNET_MAX_DISTANCE;
    const x = isWithinRange ? Math.cos(Math.atan2(mouseY - balloonY, mouseX - balloonX)) * (1 - distance / ANIMATION_CONFIG.MAGNET_MAX_DISTANCE) * ANIMATION_CONFIG.MAGNET_STRENGTH : 0;
    const y = isWithinRange ? Math.sin(Math.atan2(mouseY - balloonY, mouseX - balloonX)) * (1 - distance / ANIMATION_CONFIG.MAGNET_MAX_DISTANCE) * ANIMATION_CONFIG.MAGNET_STRENGTH : 0;

    gsap.to(balloon, {
      x,
      y,
      duration: 0.3,
      ease: 'power2.out',
      overwrite: 'auto',
      onComplete: () => !isWithinRange && gsap.to(balloon, { x: 0, y: 0, duration: 0.3, ease: 'power2.out' }),
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
      balloons.forEach((balloon) => applyMagnetEffect(balloon, mouseX, mouseY, containerRect));
    }, 16);

    if (loadingStage === 'initial') {
      balloonsEntryAnimate(balloons);
      setTimeout(
        () => {
          if (!hasScrolled.current) {
            isMagnetActive = true;
            container.addEventListener('mousemove', handleMouseMove);
          }
        },
        ANIMATION_CONFIG.TITLE_END * 1000 + ANIMATION_CONFIG.BALOON_MOVE_DURATION * 1000
      );
    }

    if (startBalloonsToCenter) {
      balloonsToCenterAnimate(balloons);
      isMagnetActive = false;
      container.removeEventListener('mousemove', handleMouseMove);
    }

    if (loadingStage === 'transition') {
      const balloonCenter = balloonRefs.current.c?.current;
      shrinkCentralBalloon(balloonCenter);
    }

    return () => {
      gsap.killTweensOf(balloons);
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, [loadingStage, startBalloonsToCenter, onBalloonsToCenterComplete, onBalloonsShrinkComplete, onMaxBalloonSize, containerRef, ANIMATION_CONFIG]);

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
