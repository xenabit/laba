import { forwardRef, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import throttle from 'lodash/throttle';
import styles from './Header.module.scss';
import { ANIMATION_CONFIG } from '../LoadingMainScreen/LoadingMainScreen';
import { magnetEffect } from '../../utils/magnetEffect';
import Baloon_c from '../../assets/images/loading-main-baloon-c.svg';
import logoImg from '/src/assets/images/header-logo.svg';
import headerMenuImg from '/src/assets/images/header-menu.svg';
import presentationPdf from '/src/assets/docs/presentation.pdf';

gsap.registerPlugin(ScrollTrigger);

const BALLOON_C_CONFIG = {
  key: 'c',
  src: Baloon_c,
  anim: {
    from: { top: '-20%', left: '47.94%', scale: 1, transformOrigin: 'center center' },
    to: { top: '39%', left: '25.6%', zIndex: '60' },
    change: { scale: 0.9, yPercent: 0.3, xPercent: -0.2 },
  },
};

const Header = forwardRef(({ loadingStage, onBalloonsToCenterComplete, onMaxBalloonSize, onBalloonsShrinkComplete }, ref) => {
  const [isActive, setIsActive] = useState(false);
  const [activeTab, setActiveTab] = useState('/');
  const [isDesktop, setIsDesktop] = useState(typeof window !== 'undefined' ? window.matchMedia('(min-width: 1440px)').matches : false);
  const location = useLocation();
  const balloonRef = useRef(null);
  const logoRef = useRef(null);
  const containerRef = useRef(null);
  const isInitialRender = useRef(true);
  const hasScrolled = useRef(false);

  // Синхронизация activeTab с текущим маршрутом
  useEffect(() => {
    const currentPath = location.pathname;
    setActiveTab(currentPath);
    localStorage.setItem('activeTab', currentPath); // Сохраняем текущий путь в localStorage
  }, [location.pathname]);

  // Анимация шара с эффектом примагничивания
  const balloonsEntryAnimate = () => {
    const balloon = balloonRef.current;
    const container = containerRef.current;
    if (!balloon || !container) return;

    const tl = gsap.timeline({ delay: ANIMATION_CONFIG.MAIN_ENTRY_ANIM });
    const { anim } = BALLOON_C_CONFIG;
    gsap.set(balloon, { ...anim.from, opacity: 1 });

    tl.to(balloon, {
      ...anim.to,
      duration: ANIMATION_CONFIG.BALOON_MOVE_DURATION,
      ease: 'linear',
    }).to(
      balloon,
      {
        ...anim.change,
        duration: ANIMATION_CONFIG.BALOON_MOVE_DURATION,
        ease: 'linear',
        repeat: -1,
        yoyo: true,
        overwrite: 'auto',
      },
      ANIMATION_CONFIG.BALOON_MOVE_DURATION
    );

    // Эффект примагничивания
    let isMagnetActive = loadingStage === 'initial';
    const handleMouseMove = throttle((e) => {
      if (!isMagnetActive || hasScrolled.current || loadingStage !== 'initial') return;
      const containerRect = container.getBoundingClientRect();
      const mouseX = e.clientX - containerRect.left;
      const mouseY = e.clientY - containerRect.top;
      magnetEffect(balloon, mouseX, mouseY, containerRect, {
        maxDistance: ANIMATION_CONFIG.MAGNET_MAX_DISTANCE,
        strength: ANIMATION_CONFIG.MAGNET_STRENGTH * 0.5,
        duration: 0.2,
      });
    }, 32);

    // Сброс эффекта примагничивания при скроллинге
    const handleScroll = () => {
      if (loadingStage !== 'initial' || hasScrolled.current) return;
      hasScrolled.current = true;
      isMagnetActive = false;
      gsap.to(balloon, {
        x: 0,
        y: 0,
        duration: 0.2,
        ease: 'power2.out',
        overwrite: 'auto',
      });
      container.removeEventListener('mousemove', handleMouseMove);
    };

    // Активируем эффект примагничивания после начальной анимации
    const magnetTimeout = setTimeout(
      () => {
        if (!hasScrolled.current && loadingStage === 'initial') {
          isMagnetActive = true;
          container.addEventListener('mousemove', handleMouseMove);
        }
      },
      (ANIMATION_CONFIG.MAIN_ENTRY_ANIM + ANIMATION_CONFIG.BALOON_MOVE_DURATION) * 1000
    );

    window.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('touchmove', handleScroll, { passive: false });

    return () => {
      clearTimeout(magnetTimeout);
      container.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
    };
  };

  const balloonsToCenterAnimate = () => {
    const balloon = balloonRef.current;
    const logo = logoRef.current;
    if (!balloon || !logo) return;

    hasScrolled.current = true;
    gsap.killTweensOf([balloon, logo]);

    const tl = gsap.timeline({
      onComplete: () => {
        onBalloonsToCenterComplete?.();
        onMaxBalloonSize?.();
      },
    });

    gsap.set(balloon, {
      top: '39%',
      left: '25.6%',
      transformOrigin: 'center center',
      zIndex: 60,
      opacity: 1,
    });

    const scaleSteps = [
      { scale: 1, top: '39%', left: '25.6%' },
      { scale: 1.2, top: '39%', left: '25.6%' },
      { scale: 1.3, top: '40%', left: '25%' },
      { scale: 1.7, top: '42%', left: '23%' },
      { scale: 3, top: '48%', left: '20%' },
      { scale: 4, top: '52%', left: '18%' },
      { scale: 6, top: '61%', left: '13%' },
      { scale: 8, top: '70%', left: '8%' },
      { scale: 9, top: '75%', left: '5%' },
      { scale: 10, top: '80%', left: '3%' },
      { scale: 11, top: '84%', left: '0%' },
      { scale: 11.5, top: '86%', left: '-1%' },
      { scale: 13.5, top: '95%', left: '-6%' },
      { scale: 15.5, top: '104%', left: '-11%' },
      { scale: 22, top: '133%', left: '-27%' },
      { scale: 25, top: '146%', left: '-35%' },
      { scale: 28.1, top: '152%', left: '-38%' },
    ];

    scaleSteps.forEach((step, index) => {
      tl.to(balloon, { ...step, duration: 0.6, ease: 'linear', overwrite: 'all' }, index * 0.1);
    });

    tl.to(
      logo,
      {
        top: '50%',
        height: '10vw',
        width: '10vw',
        duration: 0.6,
        ease: 'power2.inOut',
      },
      scaleSteps.length * 0.1
    );
  };

  const shrinkCentralBalloon = () => {
    const balloon = balloonRef.current;
    const logo = logoRef.current;
    if (!balloon || !logo) return;

    const tl = gsap.timeline({
      onComplete: () => {
        onBalloonsShrinkComplete?.();
      },
    });

    gsap.set(logo, { opacity: 1 });

    tl.to(
      balloon,
      {
        scale: 1,
        left: ' calc(50% - 12px)',
        top: '50%',
        duration: 1.5,
        ease: 'power2.inOut',
        overwrite: 'all',
        opacity: 1,
      },
      0
    );
  };

  // useEffect для анимации шара
  useEffect(() => {
    if (!balloonRef.current || !logoRef.current || !containerRef.current) {
      console.warn('Balloon, logo, or container ref is not ready');
      return;
    }

    if (loadingStage === 'initial') {
      balloonsEntryAnimate();
    } else if (loadingStage === 'scrolling') {
      balloonsToCenterAnimate();
    } else if (loadingStage === 'transition') {
      shrinkCentralBalloon();
    } else if (loadingStage === 'complete') {
      const balloon = balloonRef.current;
      gsap.to(balloon, {
        opacity: 0,
        duration: ANIMATION_CONFIG.LOGO_ANIMATION_DURATION,
        top: '15px',
        width: '24px',
        height: '24px',
        scale: 1,
        ease: 'linear',
        overwrite: 'all',
        onStart: () => console.log('Starting balloon fade-out animation'),
      });
    }

    return () => {
      gsap.killTweensOf([balloonRef.current, logoRef.current]);
    };
  }, [loadingStage, onBalloonsToCenterComplete, onMaxBalloonSize, onBalloonsShrinkComplete]);

  // useEffect для обработки изменений размера окна
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1440px)');
    const handleResize = () => {
      setIsDesktop(mediaQuery.matches);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!ref.current) {
      console.warn('Header ref is not ready');
      return;
    }

    const header = ref.current;
    const headerTop = header.querySelector(`.${styles.Header__top}`);
    const border = headerTop.querySelector(`.${styles.Header__border}`);
    const toggle = header.querySelector(`.${styles.Header__toggle}`);
    const desc = header.querySelector(`.${styles.Header__desc}`);
    const logo = logoRef.current;
    const loading = header.querySelector(`.${styles.Header__loading}`);

    if (!headerTop || !border || !logo || !toggle || !desc || !loading) {
      console.warn('Header elements missing', {
        headerTop,
        border,
        logo,
        toggle,
        desc,
        loading,
      });
      return;
    }

    if (loadingStage === 'initial' && isInitialRender.current) {
      gsap.set([headerTop, border, toggle, desc, logo], { opacity: 0 });
      gsap.set(loading, { height: '100vh' });
      isInitialRender.current = false;
    }

    const setHeaderVisible = () => {
      gsap.set([headerTop, border, toggle, desc, logo], { opacity: 1 });
    };

    if (isActive) {
      gsap.set([logo, toggle, desc, border, headerTop], { opacity: 1 });
      gsap.set(border, { backgroundColor: 'var(--prime-1)' });
      gsap.set(loading, { height: '100%' });
      return;
    }

    if (loadingStage === 'initial') {
      gsap.set(loading, { height: '100vh' });
      gsap.to([headerTop, toggle, desc, border, logo], {
        opacity: 1,
        duration: ANIMATION_CONFIG.HEADER_FADE_DURATION,
        ease: 'power2.out',
        delay: ANIMATION_CONFIG.HEADER_1_OPACITY_DELAY,
        onComplete: setHeaderVisible,
      });
    } else if (loadingStage === 'scrolling') {
      gsap.set(loading, { height: '100vh' });
      gsap.to([headerTop, toggle, desc, border, logo], {
        opacity: 0,
        duration: ANIMATION_CONFIG.HEADER_FADE_DURATION,
        ease: 'sine.out',
        delay: 0.2,
        overwrite: false,
        onStart: () => console.log('Scrolling animation started'),
        onComplete: () => {
          const headerContainer = header.querySelector(`.${styles.Header__container}`);
          if (headerContainer) {
            headerContainer.classList.remove(styles.active);
            setIsActive(false);
          }
        },
      });
    } else if (loadingStage === 'transition') {
      gsap.set(loading, { height: '100vh' });
      gsap.set([headerTop, toggle, desc, border], { opacity: 0, y: 0 });
    } else if (loadingStage === 'complete') {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set(header, { backgroundColor: 'var(--prime-1)' });
        },
      });
      tl.to([headerTop, toggle, desc, border, logo], {
        opacity: 1,
        duration: ANIMATION_CONFIG.LOGO_ANIMATION_DURATION,
        ease: 'linear',
        overwrite: 'all',
      }).to(
        logo,
        {
          top: '15px',
          width: '24px',
          height: '24px',
          scale: 1,
          duration: ANIMATION_CONFIG.LOGO_ANIMATION_DURATION,
          ease: 'linear',
          overwrite: 'all',
          onComplete: () => {
            gsap.set(loading, { height: '100%' });
          },
        },
        ANIMATION_CONFIG.LOGO_ANIMATION_DELAY
      );
    }

    const borderHeight = isDesktop ? 3 : 2;

    gsap.set(border, {
      height: borderHeight,
      backgroundColor: 'var(--prime-2)',
    });

    const showAnim = gsap.fromTo(
      header,
      { yPercent: 0 },
      {
        yPercent: -100,
        paused: true,
        duration: 0.2,
        ease: 'power1.out',
      }
    );

    const borderAnim = gsap.fromTo(
      border,
      { height: borderHeight },
      {
        height: 0,
        duration: 0.2,
        ease: 'power1.out',
        paused: true,
      }
    );

    ScrollTrigger.create({
      trigger: '#smooth-content',
      start: 'top top+=50',
      end: 'bottom top',
      onUpdate: (self) => {
        const scrollPos = self.scroll();
        if (loadingStage !== 'complete') return;
        if (isActive) {
          showAnim.pause();
          borderAnim.pause();
          gsap.set(header, { yPercent: 0 });
          gsap.set([headerTop, toggle, border, logo], { opacity: 1 });
          gsap.set(border, { height: borderHeight, backgroundColor: 'var(--prime-1)' });
          gsap.set(loading, { height: '100%' });
        } else if (scrollPos <= 50) {
          showAnim.reverse();
          borderAnim.reverse();
          gsap.set(border, { backgroundColor: 'var(--prime-2)' });
        } else {
          if (self.direction === -1) {
            showAnim.reverse();
            borderAnim.play();
          } else {
            showAnim.play();
            borderAnim.play();
          }
        }
      },
      scrub: true,
    });

    if (loadingStage === 'complete' && window.scrollY > 50) {
      showAnim.play();
      borderAnim.play();
    } else {
      showAnim.reverse();
      borderAnim.reverse();
    }

    ScrollTrigger.refresh();

    return () => {
      // console.log('Header: Cleaning up header animations');
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf([header, border, logo, toggle, desc, headerTop, loading]);
    };
  }, [ref, isActive, loadingStage, isDesktop]);

  useEffect(() => {
    const savedTab = localStorage.getItem('activeTab') || location.pathname;
    setActiveTab(savedTab);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isActive ? 'hidden' : '';
    return () => (document.body.style.overflow = '');
  }, [isActive]);

  const handleTabClick = (path) => {
    if (path !== activeTab) {
      setActiveTab(path);
      localStorage.setItem('activeTab', path);
    }
    setIsActive(false);
  };

  return (
    <header className={styles.Header} ref={containerRef}>
      <div ref={ref} id="main-tool-bar" className={`${styles.Header__main}`}>
        <div className={`${styles.Header__container} ${isActive ? styles.active : ''}`}>
          <div className={styles.Header__loading}>
            <div ref={balloonRef} className={styles.Header__baloon}>
              <img src={Baloon_c} alt="balloon-c" aria-hidden="true" />
            </div>
            <div ref={logoRef} className={styles.Header__logo}>
              <picture>
                <img src={logoImg} alt="Логотип Laba" />
              </picture>
            </div>
          </div>
          <div className={styles.Header__top}>
            <Link to="/" className={styles.Header__desc} onClick={() => handleTabClick('/')}>
              digital agency
            </Link>
            <Link to="/" className={styles.Header__logomob} onClick={() => handleTabClick('/')}>
              <picture>
                <img src={logoImg} alt="Логотип Laba" />
              </picture>
            </Link>
            <button className={styles.Header__toggle} onClick={() => setIsActive((prev) => !prev)} aria-label={isActive ? 'Закрыть меню' : 'Открыть меню'} aria-expanded={isActive}>
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div className={styles.Header__border} aria-hidden="true"></div>
          </div>
          <div className={styles.Header__inner}>
            <div className={styles.Header__bg}>
              <picture>
                <img src={headerMenuImg} />
              </picture>
            </div>
            <nav>
              <ul>
                <li>
                  <Link className={activeTab === '/' ? styles.active : ''} to="/" onClick={() => handleTabClick('/')}>
                    Главная
                  </Link>
                </li>
                <li>
                  <Link className={activeTab === '/portfolio' ? styles.active : ''} to="/portfolio" onClick={() => handleTabClick('/portfolio')}>
                    Портфолио
                  </Link>
                </li>
                <li>
                  <Link className={activeTab === '/contact' ? styles.active : ''} to="/contact" onClick={() => handleTabClick('/contact')}>
                    Контакты
                  </Link>
                </li>
              </ul>
            </nav>
            <ul className={styles.Header__links}>
              <li>
                <a href={presentationPdf} target="_blank" rel="noopener noreferrer">
                  Презентация
                </a>
              </li>
            </ul>
            <div className={styles.Header__contacts}>
              <a className={styles.Header__mail} href="mailto:info@laba-laba.ru">
                info@laba-laba.ru
              </a>
              <a href="tel:+74951201226" className={styles.Header__tel}>
                тел. +7 (916) 195-82-26
              </a>
              <a href="tel:+79690639323" className={styles.Header__tel}>
                тел. +7 (969) 063-93-23
              </a>
              <a className={styles.Header__address} href="https://yandex.ru/profile/1116551737" target="_blank" rel="noopener noreferrer">
                Москва, ул 3-я Ямского Поля, д. 2 к. 13
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
});

export default Header;
