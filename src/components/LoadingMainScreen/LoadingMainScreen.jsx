import { useEffect, useRef } from 'react';
import throttle from 'lodash/throttle';
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

const ANIMATION_CONFIG = {
  LETTER_DELAY: 4.2, // Задержка перед началом анимации букв (в секундах)
  BALOON_MOVE_DURATION: 1.5, // Длительность движения шаров до их позиций (в секундах)
  BALOON_TRANSITION_DELAY: 5, // Задержка перед стартом анимации шаров (в секундах)
  MAGNET_MAX_DISTANCE: 400, // Максимальное расстояние для активации магнитного эффекта (в пикселях)
  MAGNET_STRENGTH: 25, // Сила притяжения шаров к курсору (в пикселях)
  DEFAULT_DURATION: 0.3, // Стандартная длительность анимаций (в секундах)
  DEFAULT_EASE: 'power2.out', // Стандартная функция плавности (плавное завершение)
  HEADER_FADE_DURATION: 0.5, // Длительность появления/исчезновения шапки (в секундах)
};

const BALLOONS_DATA = [
  { key: 'c', src: Baloon_c, className: styles.LoadingMainScreen__baloon_c },
  { key: 'cb2', src: Baloon_cb2, className: styles.LoadingMainScreen__baloon_cb2 },
  { key: 'lb2', src: Baloon_lb2, className: styles.LoadingMainScreen__baloon_lb2 },
  { key: 'r', src: Baloon_r, className: styles.LoadingMainScreen__baloon_r },
  { key: 'lt1', src: Baloon_lt1, className: styles.LoadingMainScreen__baloon_lt1 },
  { key: 'rb2', src: Baloon_rb2, className: styles.LoadingMainScreen__baloon_rb2 },
  { key: 'rt3', src: Baloon_rt3, className: styles.LoadingMainScreen__baloon_rt3 },
  { key: 'ct1', src: Baloon_ct1, className: styles.LoadingMainScreen__baloon_ct1 },
  { key: 'rt2', src: Baloon_rt2, className: styles.LoadingMainScreen__baloon_rt2 },
  { key: 'rt1', src: Baloon_rt1, className: styles.LoadingMainScreen__baloon_rt1 },
  { key: 'rb1', src: Baloon_rb1, className: styles.LoadingMainScreen__baloon_rb1 },
  { key: 'rb3', src: Baloon_rb3, className: styles.LoadingMainScreen__baloon_rb3 },
  { key: 'ct2', src: Baloon_ct2, className: styles.LoadingMainScreen__baloon_ct2 },
  { key: 'ct3', src: Baloon_ct3, className: styles.LoadingMainScreen__baloon_ct3 },
  { key: 'lb1', src: Baloon_lb1, className: styles.LoadingMainScreen__baloon_lb1 },
  { key: 'lt2', src: Baloon_lt2, className: styles.LoadingMainScreen__baloon_lt2 },
  { key: 'cb1', src: Baloon_cb1, className: styles.LoadingMainScreen__baloon_cb1 },
];

// Объект с параметрами анимации шаров: начальная позиция (from), конечная позиция (to), параметры колебания (change)
const BALLOON_ANIMATIONS = {
  c: { from: { top: '-8.89%', left: '47.94%', scale: 1 }, to: { top: '39.8%', left: '30.7%' }, change: { scale: 0.7, top: '39%', left: '30.8%' } },
  cb2: { from: { top: '155%', left: '42%', scale: 1 }, to: { top: '83%', left: '39%' }, change: { scale: 1.01, top: '84%' } },
  lb2: { from: { top: '164.65%', left: '20.75%', scale: 1 }, to: { top: '74%', left: '5%' }, change: { scale: 0.89, rotate: 21.79 } },
  r: { from: { top: '5.28%', left: '134.35%', scale: 1 }, to: { top: '46%', left: '92.5%' }, change: { scale: 1.09, top: '48%' } },
  lt1: { from: { top: '-56%', left: '-77%', scale: 1 }, to: { top: '7%', left: '-18%' }, change: { scale: 0.95, left: '-20%' } },
  rb2: { from: { top: '134.28%', left: '134.44%', scale: 1 }, to: { top: '63%', left: '79%' }, change: { scale: 0.9, top: '64%' } },
  rt3: { from: { top: '-96.44%', left: '120.81%', scale: 1 }, to: { top: '6%', left: '76%' }, change: { scale: 1.02, top: '8%', rotate: -21.5 } },
  ct1: { from: { top: '-100%', left: '33%', scale: 1 }, to: { top: '9%', left: '29.5%' }, change: { scale: 1.15, left: '29.2%' } },
  rt2: { from: { top: '-58.11%', left: '122.38%', scale: 1 }, to: { top: '26%', left: '86%' }, change: { scale: 1.1, top: '25%' } },
  rt1: { from: { top: '-39.99%', left: '107.73%', scale: 1 }, to: { top: '19.5%', left: '72%' }, change: { scale: 0.95, top: '18%' } },
  rb1: { from: { top: '95.42%', left: '124.5%', scale: 1 }, to: { top: '73%', left: '78.5%' }, change: { scale: 0.9, top: '70%', left: '78.8%' } },
  rb3: { from: { top: '92.07%', left: '137.38%', scale: 1 }, to: { top: '64.11%', left: '89.25%' }, change: { scale: 1.08, top: '64%', left: '91%' } },
  ct2: { from: { top: '-48.78%', left: '32.25%', scale: 1 }, to: { top: '16.5%', left: '35.5%' }, change: { scale: 0.8, top: '15.7%', left: '35.4%' } },
  ct3: { from: { top: '-26.67%', left: '30.31%', scale: 1 }, to: { top: '24.5%', left: '34%' }, change: { scale: 0.87, top: '25%', left: '33.8%' } },
  lb1: { from: { top: '226.67%', left: '-20.13%', scale: 1 }, to: { top: '67%', left: '-3%' }, change: { top: '65%' } },
  lt2: { from: { top: '29.22%', left: '-34.83%', scale: 1 }, to: { top: '21%', left: '-7%' }, change: { scale: 0.95, top: '23%' } },
  cb1: { from: { top: '128.89%', left: '49.88%', scale: 1 }, to: { top: '84%', left: '48.5%', scale: 1.2 }, change: { scale: 1.15, top: '84%', left: '47%' } },
};

function LoadingMainScreen({ headerRef }) {
  const containerRef = useRef(null);
  const letterRefs = useRef([]);
  const hasScrolled = useRef(false);
  const descRefs = useRef([]);
  const balloonRefs = useRef({});

  // Функция для анимации фона и цвета букв
  const animateSequence = (container, letters) => {
    const tl = gsap.timeline();

    tl.to(container, { background: '#27292F', duration: 1.6, ease: 'elastic.out(1.3, 0.35)', delay: 0.4 })
      .to(letters, { fill: '#2f3137', duration: 1, ease: 'elastic.out(1.3, 0.35)' }, 0.4)
      .to(container, { background: '#2f3137', duration: 0.1, ease: 'elastic.out(1.3, 0.35)' })
      .to(letters, { fill: '#F0F2F5', duration: 0.1, ease: 'elastic.out(1.3, 0.35)' }, '-=1')
      .to(container, { background: '#F0F2F5', duration: 0.5, ease: 'elastic.out(1.2, 0.3)' })
      .to(letters, { fill: '#F0F2F5', duration: 0.3, ease: 'elastic.out(1.2, 0.3)' }, '-=1')
      .to(container, { background: '#F0F2F5', duration: 0.3, ease: 'elastic.out(1.2, 0.3)' })
      .to(letters, { fill: '#27292F', duration: 1, ease: 'elastic.out(1.2, 0.3)' }, '-=1');
  };

  // Функция для анимации появления и колебания шаров
  const animateBalloons = (balloons) => {
    const tl = gsap.timeline({ delay: ANIMATION_CONFIG.BALOON_TRANSITION_DELAY });
    Object.entries(BALLOON_ANIMATIONS).forEach(([key, { from, to, change }]) => {
      const balloon = balloonRefs.current[key].current;
      if (!balloon) return;
      gsap.set(balloon, from);
      tl.to(balloon, { ...to, duration: ANIMATION_CONFIG.BALOON_MOVE_DURATION, ease: 'linear' }, 0) // Все шары одновременно движутся к своим позициям за 1.5 сек
        .to(
          balloon,
          {
            ...change, // Параметры колебания (масштаб, позиция, вращение)
            duration: ANIMATION_CONFIG.BALOON_MOVE_DURATION, // Длительность колебания
            ease: 'linear',
            repeat: -1,
            yoyo: true,
          },
          '>'
        );
    });
    tl.to(
      headerRef.current,
      {
        // Появление шапки после движения шаров
        opacity: 1,
        duration: ANIMATION_CONFIG.HEADER_FADE_DURATION,
        ease: ANIMATION_CONFIG.DEFAULT_EASE,
      },
      '<'
    );
  };

  // Функция для анимации текста описания
  const animateDescription = (descLetters) => {
    gsap.to(descLetters, {
      y: 0,
      opacity: 1,
      duration: 0.2, // Длительность анимации каждой буквы (0.2 сек)
      ease: ANIMATION_CONFIG.DEFAULT_EASE,
      stagger: 0.04, // Задержка между анимацией каждой буквы (эффект печати)
      delay: ANIMATION_CONFIG.BALOON_TRANSITION_DELAY, // Задержка перед началом (синхронно с шарами)
    });
  };

  // Функция для анимации перемещения шаров в центр после скролла
  const animateBalloonsToPosition = (balloons) => {
    if (hasScrolled.current) return;
    hasScrolled.current = true;

    gsap.killTweensOf(balloons);
    gsap.to(headerRef.current, {
      // Скрываем шапку при начале скролла
      opacity: 0,
      backgroundColor: 'initial',
      duration: ANIMATION_CONFIG.HEADER_FADE_DURATION, // Длительность исчезновения
      ease: ANIMATION_CONFIG.DEFAULT_EASE,
    });

    const tl = gsap.timeline();
    const otherBalloons = balloons.filter((balloon) => !balloon.classList.contains(styles.LoadingMainScreen__baloon_c));

    otherBalloons.forEach((balloon, index) => {
      // Перемещаем все шары (кроме центрального) в центр
      tl.to(
        balloon,
        {
          width: '68px',
          height: '68px',
          top: '39.8%',
          left: '30.7%',
          scale: 1,
          rotation: 0,
          duration: 0.2, // Длительность движения каждого шара (0.2 сек)
          ease: 'linear',
          overwrite: 'all',
        },
        index * 0.2
      ); // Смещение по времени для каждого шара (0.2 сек между ними)
    });

    // Анимация центрального шара
    const balloonC = balloonRefs.current.c.current;
    if (balloonC) {
      gsap.set(balloonC, {
        top: '39.8%',
        left: '30.7%',
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
            duration: 0.6, // Длительность каждого шага (0.6 сек)
            ease: 'linear',
            overwrite: 'all',
          },
          index * 0.2
        ); // Смещение по времени для каждого шага (0.2 сек между шагами)
      });
    }
  };

  // Хук для управления всеми анимациями и взаимодействиями
  const useLoadingAnimations = () => {
    useEffect(() => {
      const container = containerRef.current;
      const letters = letterRefs.current;
      const descLetters = descRefs.current;
      const balloons = Object.values(balloonRefs.current)
        .map((ref) => ref.current)
        .filter(Boolean);

      let isMagnetActive = false;

      // Устанавливаем начальные состояния элементов через GSAP
      gsap.set(headerRef.current, { opacity: 0, backgroundColor: 'inherit' }); // Шапка изначально прозрачна с исходным фоном
      gsap.set(letters, { fill: '#F0F2F5' }); // Буквы изначально светлые
      gsap.set(descLetters, { y: '100%', opacity: 0 }); // Текст описания изначально скрыт внизу

      // Функция для инициализации взаимодействий (магнитный эффект и скролл) с задержкой
      const initInteractions = async () => {
        await new Promise((resolve) => setTimeout(resolve, 6500)); // Ждем 6.5 сек (5 сек задержки шаров + 1.5 сек движения)
        if (!hasScrolled.current) {
          // Если пользователь еще не скроллил
          isMagnetActive = true; // Включаем магнитный эффект
          container.addEventListener('mousemove', handleMouseMove); // Добавляем слушатель движения мыши
          window.addEventListener('wheel', handleScrollAttempt, { passive: false }); // Слушатель скролла колесом (без пассивного режима)
          window.addEventListener('touchmove', handleScrollAttempt, { passive: false }); // Слушатель сенсорного скролла
        }
      };

      animateSequence(container, letters);
      animateBalloons(balloons);
      animateDescription(descLetters);
      initInteractions();

      // Обработчик попытки скролла (колесо или сенсор)
      const handleScrollAttempt = (event) => {
        event.preventDefault();
        animateBalloonsToPosition(balloons);
        container.removeEventListener('mousemove', handleMouseMove);
      };

      // Обработчик магнитного эффекта (срабатывает при движении мыши)
      const handleMouseMove = throttle((e) => {
        if (!isMagnetActive || hasScrolled.current) return;
        const containerRect = container.getBoundingClientRect();
        const mouseX = e.clientX - containerRect.left;
        const mouseY = e.clientY - containerRect.top;

        balloons.forEach((balloon) => {
          const balloonRect = balloon.getBoundingClientRect();
          const balloonX = balloonRect.left - containerRect.left + balloonRect.width / 2;
          const balloonY = balloonRect.top - containerRect.top + balloonRect.height / 2;
          const distance = Math.sqrt((mouseX - balloonX) ** 2 + (mouseY - balloonY) ** 2);

          if (distance < ANIMATION_CONFIG.MAGNET_MAX_DISTANCE) {
            const angle = Math.atan2(mouseY - balloonY, mouseX - balloonX);
            const force = (1 - distance / ANIMATION_CONFIG.MAGNET_MAX_DISTANCE) * ANIMATION_CONFIG.MAGNET_STRENGTH;
            const offsetX = Math.cos(angle) * force;
            const offsetY = Math.sin(angle) * force;
            gsap.to(balloon, {
              // Анимация смещения шара к мыши
              x: offsetX,
              y: offsetY,
              duration: ANIMATION_CONFIG.DEFAULT_DURATION, // Длительность (0.3 сек)
              ease: ANIMATION_CONFIG.DEFAULT_EASE, // Плавность (power2.out)
              overwrite: 'auto', // Перезаписываем текущую анимацию
              onComplete: () => {
                // После завершения анимации возвращаем шар в исходное положение
                if (!isMagnetActive || hasScrolled.current) {
                  gsap.to(balloon, {
                    x: 0,
                    y: 0,
                    duration: ANIMATION_CONFIG.DEFAULT_DURATION,
                    ease: ANIMATION_CONFIG.DEFAULT_EASE,
                  });
                }
              },
            });
          } else {
            // Если мышь слишком далеко
            gsap.to(balloon, {
              // Возвращаем шар в исходное положение
              x: 0,
              y: 0,
              duration: ANIMATION_CONFIG.DEFAULT_DURATION,
              ease: ANIMATION_CONFIG.DEFAULT_EASE,
            });
          }
        });
      }, 16);

      return () => {
        window.removeEventListener('wheel', handleScrollAttempt);
        window.removeEventListener('touchmove', handleScrollAttempt);
        container.removeEventListener('mousemove', handleMouseMove);
        gsap.killTweensOf(balloons);
        gsap.set(headerRef.current, { opacity: 1, backgroundColor: 'inherit' });
      };
    }, []);
  };

  useLoadingAnimations();

  const addToRefs = (el) => {
    if (el && !letterRefs.current.includes(el)) letterRefs.current.push(el);
  };

  const addToDescRefs = (el) => {
    if (el && !descRefs.current.includes(el)) descRefs.current.push(el);
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

  const baseTransition = { type: 'spring', stiffness: 384, damping: 12, mass: 1 }; // Параметры пружины: тип, жесткость, затухание, масса

  // Компонент текста описания
  const Description = () => {
    const text = 'Создаем уникальные цифровые продукты';
    return (
      <div className={styles.LoadingMainScreen__desc}>
        {text.split('').map((char, index) => (
          <span key={index} ref={addToDescRefs} style={{ display: 'inline-block' }}>
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>
    );
  };

  // Функция для рендеринга шаров
  const renderBalloons = () => (
    <div className={styles.LoadingMainScreen__baloons}>
      {BALLOONS_DATA.map(({ key, src, className }) => (
        <div key={key} ref={(el) => (balloonRefs.current[key] = { current: el })} className={`${styles.LoadingMainScreen__baloon} ${className}`}>
          <img src={src} alt={`balloon-${key}`} />
        </div>
      ))}
    </div>
  );

  return (
    <section className={styles.LoadingMainScreen}>
      <div ref={containerRef} className={styles.LoadingMainScreen__container} style={{ background: '#F0F2F5' }}>
        <div className={styles.LoadingMainScreen__laba}>
          <motion.div
            className={`${styles.LoadingMainScreen__letter} ${styles.LoadingMainScreen__letter_l}`}
            initial={{ x: '-17.69vw', y: '38.89vh', rotate: -38, scale: 3.11 }}
            animate={{ x: 0, y: 0, rotate: 0, scale: 1 }}
            transition={{ ...baseTransition, delay: ANIMATION_CONFIG.LETTER_DELAY }} // Пружинная анимация с задержкой (4.2 сек)
          >
            <LetterL />
          </motion.div>
          <motion.div
            className={`${styles.LoadingMainScreen__letter} ${styles.LoadingMainScreen__letter_a}`}
            initial={{ x: '-24.25vw', y: '-54.55vh', rotate: 77, scale: 1.116 }}
            animate={{ x: 0, y: 0, rotate: 0, scale: 1 }}
            transition={{ ...baseTransition, delay: ANIMATION_CONFIG.LETTER_DELAY }}
          >
            <LetterA />
          </motion.div>
          <motion.div
            className={`${styles.LoadingMainScreen__letter} ${styles.LoadingMainScreen__letter_b}`}
            initial={{ x: '-4vw', y: '32.2vh', rotate: 130, scale: 0.52 }}
            animate={{ x: 0, y: 0, rotate: 0, scale: 1 }}
            transition={{ ...baseTransition, delay: ANIMATION_CONFIG.LETTER_DELAY }}
          >
            <LetterB />
          </motion.div>
          <motion.div
            className={`${styles.LoadingMainScreen__letter} ${styles.LoadingMainScreen__letter_a}`}
            initial={{ x: '34.5vw', y: '41vh', rotate: -35, scale: 1.83 }}
            animate={{ x: 0, y: 0, rotate: 0, scale: 1 }}
            transition={{ ...baseTransition, delay: ANIMATION_CONFIG.LETTER_DELAY }}
          >
            <LetterA />
          </motion.div>
          <motion.div className={styles.LoadingMainScreen__spot} initial={{ scale: 17 }} animate={{ scale: 1 }} transition={{ ...baseTransition, delay: ANIMATION_CONFIG.LETTER_DELAY }}>
            <Spot />
          </motion.div>
        </div>
        <Description />
        {renderBalloons()}
        <div className={styles.LoadingMainScreen__flare}>
          <Flare />
        </div>
      </div>
    </section>
  );
}

export default LoadingMainScreen;
