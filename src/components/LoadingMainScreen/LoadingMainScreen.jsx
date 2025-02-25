import { useEffect } from 'react';
import styles from './LoadingMainScreen.module.scss';
import { motion, useAnimation } from 'framer-motion';

import Baloon_lt2 from '../../assets/images/loading-main-baloon-lt2.svg?react';
import Baloon_lt1 from '../../assets/images/loading-main-baloon-lt1.svg?react';
import Baloon_ct1 from '../../assets/images/loading-main-baloon-ct1.svg?react';
import Baloon_ct2 from '../../assets/images/loading-main-baloon-ct2.svg?react';
import Baloon_ct3 from '../../assets/images/loading-main-baloon-ct3.svg?react';
import Baloon_rt1 from '../../assets/images/loading-main-baloon-rt1.svg?react';
import Baloon_rt2 from '../../assets/images/loading-main-baloon-rt2.svg?react';
import Baloon_rt3 from '../../assets/images/loading-main-baloon-rt3.svg?react';
import Baloon_rb1 from '../../assets/images/loading-main-baloon-rb1.svg?react';
import Baloon_rb2 from '../../assets/images/loading-main-baloon-rb2.svg?react';
import Baloon_rb3 from '../../assets/images/loading-main-baloon-rb3.svg?react';
import Baloon_lb1 from '../../assets/images/loading-main-baloon-lb1.svg?react';
import Baloon_lb2 from '../../assets/images/loading-main-baloon-lb2.svg?react';
import Baloon_cb1 from '../../assets/images/loading-main-baloon-cb1.svg?react';
import Baloon_cb2 from '../../assets/images/loading-main-baloon-cb2.svg?react';
import Baloon_r from '../../assets/images/loading-main-baloon-r.svg?react';
import Baloon_c from '../../assets/images/loading-main-baloon-c.svg?react';
import Flare from '../../assets/images/loading-main-flare.svg?react';

function LoadingMainScreen() {
  const sectionControls = useAnimation();
  const letterControls = useAnimation();

  useEffect(() => {
    const animateSequence = async () => {
      await new Promise((resolve) => setTimeout(resolve, 300));

      await Promise.all([
        sectionControls.start({
          background: '#27292F',
          transition: { type: 'spring', stiffness: 384, damping: 12, mass: 1 },
        }),
        letterControls.start({
          fill: '#2f3137',
          transition: { type: 'spring', stiffness: 384, damping: 12, mass: 1 },
        }),
      ]);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      await Promise.all([
        sectionControls.start({
          background: '#2f3137',
          transition: { type: 'spring', stiffness: 600, damping: 15, mass: 1 },
        }),
        letterControls.start({
          fill: '#ffffff',
          transition: { type: 'spring', stiffness: 600, damping: 15, mass: 1 },
        }),
      ]);

      await new Promise((resolve) => setTimeout(resolve, 300));

      await Promise.all([
        sectionControls.start({
          background: '#ffffff',
          transition: { type: 'spring', stiffness: 600, damping: 15, mass: 1 },
        }),
        letterControls.start({
          fill: '#27292F',
          transition: { type: 'spring', stiffness: 600, damping: 15, mass: 1 },
        }),
      ]);
    };

    animateSequence();
  }, [sectionControls, letterControls]);

  const Spot = () => (
    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        animate={letterControls}
        initial={{ fill: '#ffffff' }}
        d="M30.1097 15.548C30.1097 23.5924 23.5885 30.1136 15.5441 30.1136C7.49977 30.1136 0.978516 23.5924 0.978516 15.548C0.978516 7.50367 7.49977 0.982422 15.5441 0.982422C23.5885 0.982422 30.1097 7.50367 30.1097 15.548Z"
      />
    </svg>
  );

  const LetterL = () => (
    <svg width="137" height="155" viewBox="0 0 137 155" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path animate={letterControls} initial={{ fill: '#ffffff' }} d="M22.5532 0V131.56H136.259V154.113H0V0H22.5532Z" />
    </svg>
  );

  const LetterA = () => (
    <svg width="186" height="155" viewBox="0 0 186 155" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        animate={letterControls}
        initial={{ fill: '#ffffff' }}
        d="M185.177 154.113H160.273L139.777 114.044H45.2318L24.7359 154.113H0.0527344L77.6285 0H107.601L185.177 154.113ZM92.6147 22.6767L46.3337 111.842H138.675L92.6147 22.6767Z"
      />
    </svg>
  );

  const LetterB = () => (
    <svg width="162" height="155" viewBox="0 0 162 155" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        animate={letterControls}
        initial={{ fill: '#ffffff' }}
        d="M122.207 75.5156C147.997 78.818 161.663 94.2294 161.663 114.484C161.663 137.601 143.368 154.113 111.185 154.113H0.97168V0H106.336C138.298 0 155.05 16.0718 155.05 38.5284C155.05 57.022 143.809 71.1124 122.207 75.5156ZM101.487 21.3557H24.4646V74.8551H101.487C123.089 74.8551 133.889 63.847 133.889 48.2155C133.889 32.3638 123.089 21.3557 101.487 21.3557ZM24.4646 132.758H105.013C127.938 132.758 139.62 121.309 139.62 104.797C139.62 88.5052 127.938 77.0567 105.013 77.0567H24.4646V132.758Z"
      />
    </svg>
  );

  // Общий transition для шаров
  const balloonTransition = {
    type: 'tween',
    ease: 'easeOut',
    duration: 1.5, // 1500ms
    delay: 5.401, // 5 секунд (буквы) + 0.4s (предыдущие этапы) + 1ms
  };

  return (
    <section className={styles.LoadingMainScreen}>
      <motion.div className={styles.LoadingMainScreen__container} initial={{ background: '#ffffff' }} animate={sectionControls}>
        <div className={styles.LoadingMainScreen__laba}>
          <motion.div
            className={`${styles.LoadingMainScreen__letter} ${styles.LoadingMainScreen__letter_l}`}
            initial={{ x: '-17.69vw', y: '38.89vh', rotate: -38, scale: 3.11 }}
            animate={{ x: 0, y: 0, rotate: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 384, damping: 12, mass: 1, delay: 5 }}
          >
            <LetterL />
          </motion.div>

          <motion.div
            className={`${styles.LoadingMainScreen__letter} ${styles.LoadingMainScreen__letter_a}`}
            initial={{ x: '-24.25vw', y: '-54.55vh', rotate: 77, scale: 1.116 }}
            animate={{ x: 0, y: 0, rotate: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 384, damping: 12, mass: 1, delay: 5 }}
          >
            <LetterA />
          </motion.div>

          <motion.div
            className={`${styles.LoadingMainScreen__letter} ${styles.LoadingMainScreen__letter_b}`}
            initial={{ x: '-4vw', y: '32.2vh', rotate: 130, scale: 0.52 }}
            animate={{ x: 0, y: 0, rotate: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 384, damping: 12, mass: 1, delay: 5 }}
          >
            <LetterB />
          </motion.div>

          <motion.div
            className={`${styles.LoadingMainScreen__letter} ${styles.LoadingMainScreen__letter_a}`}
            initial={{ x: '34.5vw', y: '41vh', rotate: -35, scale: 1.83 }}
            animate={{ x: 0, y: 0, rotate: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 384, damping: 12, mass: 1, delay: 5 }}
          >
            <LetterA />
          </motion.div>

          <motion.div className={styles.LoadingMainScreen__spot} initial={{ scale: 17 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 384, damping: 12, mass: 1, delay: 5 }}>
            <Spot />
          </motion.div>
        </div>

        <div className={styles.LoadingMainScreen__desc}>Создаем уникальные цифровые продукты</div>
        <div className={styles.LoadingMainScreen__baloons}>
          <div className={`${styles.LoadingMainScreen__baloon} ${styles.LoadingMainScreen__baloon_c}`}>
            <Baloon_c />
          </div>
          <div className={`${styles.LoadingMainScreen__baloon} ${styles.LoadingMainScreen__baloon_cb2}`}>
            <Baloon_cb2 />
          </div>
          <div className={`${styles.LoadingMainScreen__baloon} ${styles.LoadingMainScreen__baloon_lb2}`}>
            <Baloon_lb2 />
          </div>
          <div className={`${styles.LoadingMainScreen__baloon} ${styles.LoadingMainScreen__baloon_r}`}>
            <Baloon_r />
          </div>
          <div className={`${styles.LoadingMainScreen__baloon} ${styles.LoadingMainScreen__baloon_lt1}`}>
            <Baloon_lt1 />
          </div>
          <div className={`${styles.LoadingMainScreen__baloon} ${styles.LoadingMainScreen__baloon_rb2}`}>
            <Baloon_rb2 />
          </div>
          <div className={`${styles.LoadingMainScreen__baloon} ${styles.LoadingMainScreen__baloon_rt3}`}>
            <Baloon_rt3 />
          </div>
          <div className={`${styles.LoadingMainScreen__baloon} ${styles.LoadingMainScreen__baloon_ct1}`}>
            <Baloon_ct1 />
          </div>
          <div className={`${styles.LoadingMainScreen__baloon} ${styles.LoadingMainScreen__baloon_rt2}`}>
            <Baloon_rt2 />
          </div>
          <div className={`${styles.LoadingMainScreen__baloon} ${styles.LoadingMainScreen__baloon_rt1}`}>
            <Baloon_rt1 />
          </div>
          <div className={`${styles.LoadingMainScreen__baloon} ${styles.LoadingMainScreen__baloon_rb1}`}>
            <Baloon_rb1 />
          </div>
          <div className={`${styles.LoadingMainScreen__baloon} ${styles.LoadingMainScreen__baloon_rb3}`}>
            <Baloon_rb3 />
          </div>
          <div className={`${styles.LoadingMainScreen__baloon} ${styles.LoadingMainScreen__baloon_ct2}`}>
            <Baloon_ct2 />
          </div>
          <div className={`${styles.LoadingMainScreen__baloon} ${styles.LoadingMainScreen__baloon_ct3}`}>
            <Baloon_ct3 />
          </div>
          <div className={`${styles.LoadingMainScreen__baloon} ${styles.LoadingMainScreen__baloon_lb1}`}>
            <Baloon_lb1 />
          </div>
          <div className={`${styles.LoadingMainScreen__baloon} ${styles.LoadingMainScreen__baloon_lt2}`}>
            <Baloon_lt2 />
          </div>
          <div className={`${styles.LoadingMainScreen__baloon} ${styles.LoadingMainScreen__baloon_cb1}`}>
            <Baloon_cb1 />
          </div>
        </div>
        <div className={styles.LoadingMainScreen__flare}>
          <Flare />
        </div>
      </motion.div>
    </section>
  );
}

export default LoadingMainScreen;
