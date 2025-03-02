import { useEffect, useRef } from 'react';
import styles from './LoadingMainScreen.module.scss';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

// Импорты шаров
import Baloon_lt2 from '../../assets/images/loading-main-baloon-lt2.svg';
import Baloon_lt1 from '../../assets/images/loading-main-baloon-lt1.svg';
import Baloon_ct1 from '../../assets/images/loading-main-baloon-ct1.svg';
import Baloon_ct2 from '../../assets/images/loading-main-baloon-ct2.svg';
import Baloon_ct3 from '../../assets/images/loading-main-baloon-ct3.svg';
import Baloon_rt1 from '../../assets/images/loading-main-baloon-rt1.svg';
import Baloon_rt2 from '../../assets/images/loading-main-baloon-rt2.svg';
import Baloon_rt3 from '../../assets/images/loading-main-baloon-rt3.svg';
import Baloon_rb1 from '../../assets/images/loading-main-baloon-rb1.svg';
import Baloon_rb2 from '../../assets/images/loading-main-baloon-rb2.svg';
import Baloon_rb3 from '../../assets/images/loading-main-baloon-rb3.svg';
import Baloon_lb1 from '../../assets/images/loading-main-baloon-lb1.svg';
import Baloon_lb2 from '../../assets/images/loading-main-baloon-lb2.svg';
import Baloon_cb1 from '../../assets/images/loading-main-baloon-cb1.svg';
import Baloon_cb2 from '../../assets/images/loading-main-baloon-cb2.svg';
import Baloon_r from '../../assets/images/loading-main-baloon-r.svg';
import Baloon_c from '../../assets/images/loading-main-baloon-c.svg';
import Flare from '../../assets/images/loading-main-flare.svg?react';

const ANIMATION_DELAY_LETTER = 4.2;

function LoadingMainScreen() {
  const containerRef = useRef(null);
  const letterRefs = useRef([]);
  const balloonsRef = useRef(null);
  const hasScrolled = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    const letters = letterRefs.current;
    const balloons = balloonsRef.current.querySelectorAll(`.${styles.LoadingMainScreen__baloon}`);

    gsap.set(letters, { fill: '#ffffff' });

    let isMagnetActive = false; // Флаг для магнитного эффекта

    const animateSequence = () => {
      const tl = gsap.timeline();
      tl.to(container, { background: '#27292F', duration: 1.6, ease: 'elastic.out(1.3, 0.35)', delay: 0.4 })
        .to(letters, { fill: '#2f3137', duration: 1, ease: 'elastic.out(1.3, 0.35)' }, 0.4)
        .to(container, { background: '#2f3137', duration: 0.3, ease: 'elastic.out(1.3, 0.35)' })
        .to(letters, { fill: '#ffffff', duration: 0.3, ease: 'elastic.out(1.3, 0.35)' }, '-=1')
        .to(container, { background: '#ffffff', duration: 0.5, ease: 'elastic.out(1.2, 0.3)' })
        .to(letters, { fill: '#ffffff', duration: 0.3, ease: 'elastic.out(1.2, 0.3)' }, '-=1')
        .to(container, { background: '#ffffff', duration: 0.3, ease: 'elastic.out(1.2, 0.3)' })
        .to(letters, { fill: '#27292F', duration: 1, ease: 'elastic.out(1.2, 0.3)' }, '-=1');
    };

    const animateBalloonsToPosition = () => {
      if (hasScrolled.current) return;
      hasScrolled.current = true;
      isMagnetActive = false; // Отключаем магнит при скролле

      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;

      balloons.forEach((balloon) => {
        const computedStyle = getComputedStyle(balloon);
        const topPx = parseFloat(computedStyle.top);
        const leftPx = parseFloat(computedStyle.left);
        const transform = computedStyle.transform;

        const topPercent = (topPx / containerHeight) * 100;
        const leftPercent = (leftPx / containerWidth) * 100;

        let scale = 1;
        let rotate = 0;
        if (transform && transform !== 'none') {
          const matrix = transform.match(/matrix\((.+)\)/);
          if (matrix) {
            const values = matrix[1].split(',').map(parseFloat);
            scale = Math.sqrt(values[0] * values[0] + values[1] * values[1]);
            rotate = Math.round(Math.atan2(values[1], values[0]) * (180 / Math.PI));
          }
        }

        gsap.to(balloon, {
          top: `${topPercent}%`,
          left: `${leftPercent}%`,
          scale: scale,
          rotation: rotate,
          duration: 0.5,
          ease: 'power2.out',
          onStart: () => {
            balloon.style.animation = 'none';
          },
        });
      });

      const tl = gsap.timeline();
      const otherBalloons = Array.from(balloons).filter((balloon) => !balloon.classList.contains(styles.LoadingMainScreen__baloon_c));

      otherBalloons.forEach((balloon, index) => {
        tl.to(
          balloon,
          {
            width: '68px',
            height: '68px',
            top: '39.8%',
            left: '30.7%',
            scale: 1,
            rotation: 0,
            duration: 0.2,
            ease: 'linear',
          },
          index * 0.2
        );
      });

      const balloonC = balloonsRef.current.querySelector(`.${styles.LoadingMainScreen__baloon_c}`);
      if (balloonC) {
        gsap.set(balloonC, {
          top: `39.8%`,
          left: `30.7%`,
          transformOrigin: 'center',
          width: '68px',
          height: '68px',
        });

        const scaleSteps = [
          { scale: 1, top: '39.8%', left: '30.7%' },
          { scale: 1, top: '39.8%', left: '30.7%' },
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
          tl.to(
            balloonC,
            {
              scale: step.scale,
              top: step.top,
              left: step.left,
              duration: 0.6,
              ease: 'linear',
            },
            index * 0.2
          );
        });
      }
    };

    // Магнитный эффект
    const handleMouseMove = (e) => {
      if (!isMagnetActive || hasScrolled.current) return;

      const containerRect = container.getBoundingClientRect();
      const mouseX = e.clientX - containerRect.left;
      const mouseY = e.clientY - containerRect.top;

      balloons.forEach((balloon) => {
        const balloonRect = balloon.getBoundingClientRect();
        const balloonX = balloonRect.left - containerRect.left + balloonRect.width / 2;
        const balloonY = balloonRect.top - containerRect.top + balloonRect.height / 2;

        const distance = Math.sqrt((mouseX - balloonX) ** 2 + (mouseY - balloonY) ** 2);
        const maxDistance = 200; // Радиус действия магнита
        const magnetStrength = 40; // Максимальное смещение в пикселях

        if (distance < maxDistance) {
          const angle = Math.atan2(mouseY - balloonY, mouseX - balloonX);
          const force = (1 - distance / maxDistance) * magnetStrength;
          const offsetX = Math.cos(angle) * force;
          const offsetY = Math.sin(angle) * force;

          gsap.to(balloon, {
            x: offsetX,
            y: offsetY,
            duration: 0.3,
            ease: 'power2.out',
            overwrite: 'auto',
            onComplete: () => {
              if (!isMagnetActive || hasScrolled.current) {
                gsap.to(balloon, { x: 0, y: 0, duration: 0.3, ease: 'power2.out' });
              }
            },
          });
        } else {
          gsap.to(balloon, { x: 0, y: 0, duration: 0.3, ease: 'power2.out' });
        }
      });
    };

    // Активация магнитного эффекта после завершения начальной анимации
    setTimeout(() => {
      if (!hasScrolled.current) {
        isMagnetActive = true;
        container.addEventListener('mousemove', handleMouseMove);
      }
    }, 6500); // 5s (delay) + 1.5s (duration)

    const handleScrollAttempt = (event) => {
      event.preventDefault();
      animateBalloonsToPosition();
      container.removeEventListener('mousemove', handleMouseMove); // Убираем магнит при скролле
    };

    setTimeout(() => {
      window.addEventListener('wheel', handleScrollAttempt, { passive: false });
      window.addEventListener('touchmove', handleScrollAttempt, { passive: false });
    }, 6500);

    animateSequence();

    return () => {
      window.removeEventListener('wheel', handleScrollAttempt);
      window.removeEventListener('touchmove', handleScrollAttempt);
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !letterRefs.current.includes(el)) {
      letterRefs.current.push(el);
    }
  };

  const Spot = () => (
    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        ref={addToRefs}
        d="M30.1097 15.548C30.1097 23.5924 23.5885 30.1136 15.5441 30.1136C7.49977 30.1136 0.978516 23.5924 0.978516 15.548C0.978516 7.50367 7.49977 0.982422 15.5441 0.982422C23.5885 0.982422 30.1097 7.50367 30.1097 15.548Z"
      />
    </svg>
  );

  const LetterL = () => (
    <svg width="137" height="155" viewBox="0 0 137 155" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path ref={addToRefs} d="M22.5532 0V131.56H136.259V154.113H0V0H22.5532Z" />
    </svg>
  );

  const LetterA = () => (
    <svg width="186" height="155" viewBox="0 0 186 155" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        ref={addToRefs}
        d="M185.177 154.113H160.273L139.777 114.044H45.2318L24.7359 154.113H0.0527344L77.6285 0H107.601L185.177 154.113ZM92.6147 22.6767L46.3337 111.842H138.675L92.6147 22.6767Z"
      />
    </svg>
  );

  const LetterB = () => (
    <svg width="162" height="155" viewBox="0 0 162 155" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        ref={addToRefs}
        d="M122.207 75.5156C147.997 78.818 161.663 94.2294 161.663 114.484C161.663 137.601 143.368 154.113 111.185 154.113H0.97168V0H106.336C138.298 0 155.05 16.0718 155.05 38.5284C155.05 57.022 143.809 71.1124 122.207 75.5156ZM101.487 21.3557H24.4646V74.8551H101.487C123.089 74.8551 133.889 63.847 133.889 48.2155C133.889 32.3638 123.089 21.3557 101.487 21.3557ZM24.4646 132.758H105.013C127.938 132.758 139.62 121.309 139.62 104.797C139.62 88.5052 127.938 77.0567 105.013 77.0567H24.4646V132.758Z"
      />
    </svg>
  );

  const baseTransition = {
    type: 'spring',
    stiffness: 384,
    damping: 12,
    mass: 1,
  };

  return (
    <section className={styles.LoadingMainScreen}>
      <div ref={containerRef} className={styles.LoadingMainScreen__container} style={{ background: '#ffffff' }}>
        <div className={styles.LoadingMainScreen__laba}>
          <motion.div
            className={`${styles.LoadingMainScreen__letter} ${styles.LoadingMainScreen__letter_l}`}
            initial={{ x: '-17.69vw', y: '38.89vh', rotate: -38, scale: 3.11 }}
            animate={{ x: 0, y: 0, rotate: 0, scale: 1 }}
            transition={{ ...baseTransition, delay: ANIMATION_DELAY_LETTER }}
          >
            <LetterL />
          </motion.div>
          <motion.div
            className={`${styles.LoadingMainScreen__letter} ${styles.LoadingMainScreen__letter_a}`}
            initial={{ x: '-24.25vw', y: '-54.55vh', rotate: 77, scale: 1.116 }}
            animate={{ x: 0, y: 0, rotate: 0, scale: 1 }}
            transition={{ ...baseTransition, delay: ANIMATION_DELAY_LETTER }}
          >
            <LetterA />
          </motion.div>
          <motion.div
            className={`${styles.LoadingMainScreen__letter} ${styles.LoadingMainScreen__letter_b}`}
            initial={{ x: '-4vw', y: '32.2vh', rotate: 130, scale: 0.52 }}
            animate={{ x: 0, y: 0, rotate: 0, scale: 1 }}
            transition={{ ...baseTransition, delay: ANIMATION_DELAY_LETTER }}
          >
            <LetterB />
          </motion.div>
          <motion.div
            className={`${styles.LoadingMainScreen__letter} ${styles.LoadingMainScreen__letter_a}`}
            initial={{ x: '34.5vw', y: '41vh', rotate: -35, scale: 1.83 }}
            animate={{ x: 0, y: 0, rotate: 0, scale: 1 }}
            transition={{ ...baseTransition, delay: ANIMATION_DELAY_LETTER }}
          >
            <LetterA />
          </motion.div>
          <motion.div className={styles.LoadingMainScreen__spot} initial={{ scale: 17 }} animate={{ scale: 1 }} transition={{ ...baseTransition, delay: ANIMATION_DELAY_LETTER }}>
            <Spot />
          </motion.div>
        </div>
        <div className={styles.LoadingMainScreen__desc}>Создаем уникальные цифровые продукты</div>
        <div ref={balloonsRef} className={styles.LoadingMainScreen__baloons}>
          <div className={`${styles.LoadingMainScreen__baloon} ${styles.LoadingMainScreen__baloon_c}`}>
            <img src={Baloon_c} />
          </div>
          <div className={`${styles.LoadingMainScreen__baloon} ${styles.LoadingMainScreen__baloon_cb2}`}>
            <img src={Baloon_cb2} />
          </div>
          <div className={`${styles.LoadingMainScreen__baloon} ${styles.LoadingMainScreen__baloon_lb2}`}>
            <img src={Baloon_lb2} />
          </div>
          <div className={`${styles.LoadingMainScreen__baloon} ${styles.LoadingMainScreen__baloon_r}`}>
            <img src={Baloon_r} />
          </div>
          <div className={`${styles.LoadingMainScreen__baloon} ${styles.LoadingMainScreen__baloon_lt1}`}>
            <img src={Baloon_lt1} />
          </div>
          <div className={`${styles.LoadingMainScreen__baloon} ${styles.LoadingMainScreen__baloon_rb2}`}>
            <img src={Baloon_rb2} />
          </div>
          <div className={`${styles.LoadingMainScreen__baloon} ${styles.LoadingMainScreen__baloon_rt3}`}>
            <img src={Baloon_rt3} />
          </div>
          <div className={`${styles.LoadingMainScreen__baloon} ${styles.LoadingMainScreen__baloon_ct1}`}>
            <img src={Baloon_ct1} />
          </div>
          <div className={`${styles.LoadingMainScreen__baloon} ${styles.LoadingMainScreen__baloon_rt2}`}>
            <img src={Baloon_rt2} />
          </div>
          <div className={`${styles.LoadingMainScreen__baloon} ${styles.LoadingMainScreen__baloon_rt1}`}>
            <img src={Baloon_rt1} />
          </div>
          <div className={`${styles.LoadingMainScreen__baloon} ${styles.LoadingMainScreen__baloon_rb1}`}>
            <img src={Baloon_rb1} />
          </div>
          <div className={`${styles.LoadingMainScreen__baloon} ${styles.LoadingMainScreen__baloon_rb3}`}>
            <img src={Baloon_rb3} />
          </div>
          <div className={`${styles.LoadingMainScreen__baloon} ${styles.LoadingMainScreen__baloon_ct2}`}>
            <img src={Baloon_ct2} />
          </div>
          <div className={`${styles.LoadingMainScreen__baloon} ${styles.LoadingMainScreen__baloon_ct3}`}>
            <img src={Baloon_ct3} />
          </div>
          <div className={`${styles.LoadingMainScreen__baloon} ${styles.LoadingMainScreen__baloon_lb1}`}>
            <img src={Baloon_lb1} />
          </div>
          <div className={`${styles.LoadingMainScreen__baloon} ${styles.LoadingMainScreen__baloon_lt2}`}>
            <img src={Baloon_lt2} />
          </div>
          <div className={`${styles.LoadingMainScreen__baloon} ${styles.LoadingMainScreen__baloon_cb1}`}>
            <img src={Baloon_cb1} />
          </div>
        </div>
        <div className={styles.LoadingMainScreen__flare}>
          <Flare />
        </div>
      </div>
    </section>
  );
}

export default LoadingMainScreen;
