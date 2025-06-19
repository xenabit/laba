import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './BackgroundLetters.module.scss';
import { gsap } from 'gsap';
import Subtitle from '../Subtitle/Subtitle';
import { ANIMATION_CONFIG } from '../LoadingMainScreen';

function BackgroundLetters({ containerRef }) {
  const letterRefs = useRef([]);

  const animateSequence = (container, letters) => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set(letters, { fill: '#27292F' });
      },
    });

    // Начальное состояние: белый фон и буквы на 1 секунду
    tl.set([container, letters], { background: '#F0F2F5', fill: '#F0F2F5' }, 0)
      .to([container, letters], { duration: 1, background: '#F0F2F5', fill: '#F0F2F5', ease: 'none' }, 0)

      .to(container, { background: '#27292F', duration: 1, ease: 'elastic.out(1.3, 0.35)' }, 1)
      .to(letters, { fill: '#2f3137', duration: 1, ease: 'elastic.out(1.3, 0.35)' }, 1)

      .to(container, { background: '#F0F2F5', duration: 0.5, ease: 'elastic.out(1.3, 0.35)' }, 2)
      .to(letters, { fill: '#27292f', duration: 0.5, ease: 'elastic.out(1.3, 0.35)' }, 2);

    // // Начальное состояние: белый фон и буквы на 1 секунду
    // tl.set([container, letters], { background: '#F0F2F5', fill: '#F0F2F5' }, 0)
    //   .to([container, letters], { duration: 1, background: '#F0F2F5', fill: '#F0F2F5', ease: 'none' }, 0)

    //   // Первая группа: начинается с задержкой 1 + 0.4 = 1.4 секунды
    //   .to(container, { background: '#27292F', duration: 0.5, ease: 'elastic.out(1.3, 0.35)' }, 1.4)
    //   .to(letters, { fill: '#2f3137', duration: 0.5, ease: 'elastic.out(1.3, 0.35)' }, 1.4)

    //   // Вторая группа
    //   .to(container, { background: '#27292F', duration: 0.3, ease: 'elastic.out(1.3, 0.35)' }, 1.9)
    //   .to(letters, { fill: '#F0F2F5', duration: 0.3, ease: 'elastic.out(1.3, 0.35)' }, 1.9)

    //   // Третья группа
    //   .to(container, { background: '#F0F2F5', duration: 0.5, ease: 'elastic.out(1.3, 0.35)' }, 2.2)
    //   .to(letters, { fill: '#F0F2F5', duration: 0.5, ease: 'elastic.out(1.3, 0.35)' }, 2.2)

    //   // Четвёртая группа
    //   .to(container, { background: '#F0F2F5', duration: 0.2, ease: 'none' }, 2.7)
    //   .to(letters, { fill: '#27292F', duration: 0.2, ease: 'none' }, 2.7);
  };

  useEffect(() => {
    const container = containerRef.current;
    const letters = letterRefs.current;

    console.log('BackgroundLetters: Initializing with white background and letters');
    gsap.set(container, { background: '#F0F2F5' });
    gsap.set(letters, { fill: '#F0F2F5' });

    // Запускаем анимацию с учётом начальной задержки
    animateSequence(container, letters);

    // Очистка анимации при размонтировании
    return () => {
      console.log('BackgroundLetters: Cleaning up animations');
      gsap.killTweensOf([container, letters]);
    };
  }, [containerRef]);

  const baseTransition = { type: 'spring', stiffness: 384, damping: 12, mass: 1 };

  const addToRefs = (el) => {
    if (el && !letterRefs.current.includes(el)) letterRefs.current.push(el);
  };

  const Spot = () => (
    <svg width="100%" height="100%" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        ref={addToRefs}
        d="M30.1097 15.548C30.1097 23.5924 23.5885 30.1136 15.5441 30.1136C7.49977 30.1136 0.978516 23.5924 0.978516 15.548C0.978516 7.50367 7.49977 0.982422 15.5441 0.982422C23.5885 0.982422 30.1097 7.50367 30.1097 15.548Z"
        fill="#27292F"
      />
    </svg>
  );

  const LetterL = () => (
    <svg width="8.5vw" viewBox="0 0 137 155" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path ref={addToRefs} d="M22.5532 0V131.56H136.259V154.113H0V0H22.5532Z" fill="#27292F" />
    </svg>
  );

  const LetterA = () => (
    <svg width="11.6vw" viewBox="0 0 186 155" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        ref={addToRefs}
        d="M185.177 154.113H160.273L139.777 114.044H45.2318L24.7359 154.113H0.0527344L77.6285 0H107.601L185.177 154.113ZM92.6147 22.6767L46.3337 111.842H138.675L92.6147 22.6767Z"
        fill="#27292F"
      />
    </svg>
  );

  const LetterB = () => (
    <svg width="10.1vw" viewBox="0 0 162 155" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        ref={addToRefs}
        d="M122.207 75.5156C147.997 78.818 161.663 94.2294 161.663 114.484C161.663 137.601 143.368 154.113 111.185 154.113H0.97168V0H106.336C138.298 0 155.05 16.0718 155.05 38.5284C155.05 57.022 143.809 71.1124 122.207 75.5156ZM101.487 21.3557H24.4646V74.8551H101.487C123.089 74.8551 133.889 63.847 133.889 48.2155C133.889 32.3638 123.089 21.3557 101.487 21.3557ZM24.4646 132.758H105.013C127.938 132.758 139.62 121.309 139.62 104.797C139.62 88.5052 127.938 77.0567 105.013 77.0567H24.4646V132.758Z"
        fill="#27292F"
      />
    </svg>
  );

  return (
    <div className={styles.BackgroundLetters}>
      <div className={styles.BackgroundLetters__laba}>
        <motion.div
          className={`${styles.BackgroundLetters__letter} ${styles.BackgroundLetters__letter_l}`}
          initial={{ x: '-17.69vw', y: '38.89vh', rotate: -38, scale: 3.11 }}
          animate={{ x: 0, y: 0, rotate: 0, scale: 1 }}
          transition={{ ...baseTransition, delay: ANIMATION_CONFIG.BG_DURATION }}
        >
          <LetterL />
        </motion.div>
        <motion.div
          className={`${styles.BackgroundLetters__letter} ${styles.BackgroundLetters__letter_a}`}
          initial={{ x: '-24.25vw', y: '-54.55vh', rotate: 77, scale: 1.116 }}
          animate={{ x: 0, y: 0, rotate: 0, scale: 1 }}
          transition={{ ...baseTransition, delay: ANIMATION_CONFIG.BG_DURATION }}
        >
          <LetterA />
        </motion.div>
        <motion.div
          className={`${styles.BackgroundLetters__letter} ${styles.BackgroundLetters__letter_b}`}
          initial={{ x: '-4vw', y: '32.2vh', rotate: 130, scale: 0.52 }}
          animate={{ x: 0, y: 0, rotate: 0, scale: 1 }}
          transition={{ ...baseTransition, delay: ANIMATION_CONFIG.BG_DURATION }}
        >
          <LetterB />
        </motion.div>
        <motion.div
          className={`${styles.BackgroundLetters__letter} ${styles.BackgroundLetters__letter_a}`}
          initial={{ x: '34.5vw', y: '41vh', rotate: -35, scale: 1.83 }}
          animate={{ x: 0, y: 0, rotate: 0, scale: 1 }}
          transition={{ ...baseTransition, delay: ANIMATION_CONFIG.BG_DURATION }}
        >
          <LetterA />
        </motion.div>
        <motion.div className={styles.BackgroundLetters__spot} initial={{ scale: 17 }} animate={{ scale: 1 }} transition={{ ...baseTransition, delay: ANIMATION_CONFIG.BG_DURATION }}>
          <Spot />
        </motion.div>
      </div>
      <Subtitle />
    </div>
  );
}

export default BackgroundLetters;
