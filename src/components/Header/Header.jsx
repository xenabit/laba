import { forwardRef, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Header.module.scss';
import logo from '/src/assets/images/header-logo.svg';
import { ANIMATION_CONFIG } from '../LoadingMainScreen/LoadingMainScreen';
import Baloon_c from '../../assets/images/loading-main-baloon-c.svg';

gsap.registerPlugin(ScrollTrigger);

const BALLOON_C_CONFIG = {
  key: 'c',
  src: Baloon_c,
  anim: {
    from: { top: '-8.89%', left: '47.94%', scale: 1 },
    to: { top: '40.3%', left: '31%', zIndex: '10' },
    change: { top: '40.3%', left: '30.8%', scale: 0.7 },
  },
};

const Header = forwardRef(({ loadingStage, onBalloonsToCenterComplete, onMaxBalloonSize, onBalloonsShrinkComplete }, ref) => {
  const [isActive, setIsActive] = useState(false);
  const [activeTab, setActiveTab] = useState('/');
  const location = useLocation();
  const balloonRef = useRef(null);

  const balloonsEntryAnimate = () => {
    const balloon = balloonRef.current;
    if (!balloon) return;

    const tl = gsap.timeline({ delay: ANIMATION_CONFIG.SUBTITLE_END });
    const { anim } = BALLOON_C_CONFIG;
    gsap.set(balloon, anim.from);
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
      },
      '>'
    );
  };

  const balloonsToCenterAnimate = () => {
    const balloon = balloonRef.current;
    if (!balloon) return;

    gsap.killTweensOf(balloon);

    const tl = gsap.timeline({
      onComplete: () => {
        onBalloonsToCenterComplete?.();
        onMaxBalloonSize?.();
      },
    });

    gsap.set(balloon, {
      top: '39.8%',
      left: '30.7%',
      transformOrigin: 'center',
      width: '68px',
      height: '68px',
      zIndex: 1000,
    });

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
      tl.to(balloon, { ...step, duration: 0.6, ease: 'linear', overwrite: 'all' }, index * 0.1);
    });
  };

  const shrinkCentralBalloon = () => {
    const balloon = balloonRef.current;
    if (!balloon) return;

    const baseHeight = 900;
    const baseTop = 41.5;
    const currentHeight = window.innerHeight;
    const heightRatio = currentHeight / baseHeight;
    const adjustedTop = baseTop / heightRatio;

    const logo = ref.current?.querySelector(`.${styles.Header__logo}`);
    if (!logo) return;

    const tl = gsap.timeline({
      onComplete: () => onBalloonsShrinkComplete?.(),
    });

    // Синхронизация с логотипом
    tl.to(
      balloon,
      {
        scale: 1,
        left: '51%',
        top: `${adjustedTop}%`,
        duration: 1.5,
        ease: 'power2.inOut',
        overwrite: 'all',
      },
      0
    ).to(
      balloon,
      {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.in',
      },
      '-=0.5'
    );

    // Анимация логотипа для стадии transition
    gsap.to(logo, {
      scale: 1,
      position: 'static',
      top: 'auto',
      left: 'auto',
      transform: 'none',
      duration: 1.5,
      ease: 'power2.inOut',
      overwrite: 'all',
    });
  };

  useEffect(() => {
    console.log('Header useEffect triggered', { loadingStage, isActive });

    if (!ref.current) {
      console.warn('Header ref is not ready');
      return;
    }

    const header = ref.current;
    const headerTop = header.querySelector(`.${styles.Header__top}`);
    const border = headerTop.querySelector(`.${styles.Header__border}`);
    const logo = header.querySelector(`.${styles.Header__logo}`);
    const toggle = header.querySelector(`.${styles.Header__toggle}`);
    const desc = header.querySelector(`.${styles.Header__desc}`);
    const balloon = balloonRef.current;

    if (!headerTop || !border || !logo || !toggle || !desc || !balloon) {
      console.warn('Header elements missing', {
        headerTop,
        border,
        logo,
        toggle,
        desc,
        balloon,
      });
      return;
    }

    const setHeaderVisible = () => {
      gsap.set(header, { opacity: 1, backgroundColor: 'transparent' });
      gsap.set([logo, toggle, desc, border], { opacity: 1 });
    };

    if (isActive) {
      console.log('Header: Menu is active, forcing visibility');
      gsap.set([logo, toggle, desc, border], { opacity: 1 });
      gsap.set(border, { backgroundColor: 'var(--prime-1)' });
      gsap.set(balloon, { opacity: 0 }); // Скрываем шар при активном меню
      return;
    }

    if (loadingStage === 'initial') {
      console.log('Header: Applying initial stage animations');
      balloonsEntryAnimate();
      gsap.to(header, {
        opacity: 1,
        duration: ANIMATION_CONFIG.HEADER_FADE_DURATION,
        ease: 'power2.out',
        delay: ANIMATION_CONFIG.HEADER_1_OPACITY_DELAY,
        onComplete: setHeaderVisible,
      });
      gsap.to([logo, toggle, desc, border], {
        opacity: 1,
        duration: ANIMATION_CONFIG.HEADER_FADE_DURATION,
        ease: 'power2.out',
        delay: ANIMATION_CONFIG.HEADER_1_OPACITY_DELAY,
      });
    } else if (loadingStage === 'scrolling') {
      console.log('Header: Applying scrolling stage animations');
      balloonsToCenterAnimate();
      gsap.to(header, {
        opacity: 0,
        duration: ANIMATION_CONFIG.HEADER_FADE_DURATION,
        ease: 'power2.out',
        overwrite: 'auto',
        onComplete: () => {
          const headerContainer = header.querySelector(`.${styles.Header__container}`);
          if (headerContainer) {
            headerContainer.classList.remove(styles.active);
            setIsActive(false);
          }
        },
      });
    } else if (loadingStage === 'transition') {
      console.log('Header: Applying transition stage animations');
      shrinkCentralBalloon();
      gsap.set(header, { opacity: 1 });
      gsap.set([toggle, desc, border], { opacity: 0 });
    } else if (loadingStage === 'complete') {
      console.log('Header: Applying complete stage animations');
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set(header, { backgroundColor: 'var(--prime-1)' });
          gsap.set(balloon, { opacity: 0 }); // Скрываем шар
        },
      });
      tl.to(header, {
        opacity: 1,
        duration: ANIMATION_CONFIG.HEADER_FADE_DURATION,
        ease: 'power2.out',
      }).to(
        [toggle, desc, border],
        {
          opacity: 1,
          duration: ANIMATION_CONFIG.LOGO_ANIMATION_DURATION,
          ease: 'linear',
          overwrite: 'all',
        },
        ANIMATION_CONFIG.LOGO_ANIMATION_DELAY
      );
    }

    const isDesktop = window.matchMedia('(min-width: 90rem)').matches;
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
          gsap.set(header, { yPercent: 0, opacity: 1 });
          gsap.set(border, { height: borderHeight, backgroundColor: 'var(--prime-1)' });
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
      console.log('Header: Cleaning up animations');
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf([header, border, logo, toggle, desc, balloon]);
    };
  }, [ref, isActive, loadingStage, onBalloonsToCenterComplete, onMaxBalloonSize, onBalloonsShrinkComplete]);

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
    <header className={styles.Header}>
      <div ref={balloonRef} className={styles.Header__baloon}>
        <img src={Baloon_c} alt="balloon-c" />
      </div>
      <div ref={ref} id="main-tool-bar" className={`${styles.Header__main}`}>
        <div className={`${styles.Header__container} ${isActive ? styles.active : ''}`}>
          <div className={styles.Header__top}>
            <Link to="/" className={styles.Header__desc} onClick={() => handleTabClick('/')}>
              digital agency
            </Link>
            <Link to="/" className={styles.Header__logo} onClick={() => handleTabClick('/')}>
              <picture>
                <img loading="lazy" src={logo} alt="Логотип Laba" />
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
                <a href="#">Реквизиты</a>
              </li>
              <li>
                <a href="#">Презентация</a>
              </li>
            </ul>
            <div className={styles.Header__contacts}>
              <a className={styles.Header__mail} href="mailto:mail@marksgroup.ru">
                mail@marksgroup.ru
              </a>
              <a href="tel:+74951201226" className={styles.Header__tel}>
                тел. +7 (495) 120-12-26
              </a>
              <a href="https://yandex.ru/profile/1116551737" target="_blank" rel="noopener noreferrer">
                г. Москва ул. 3-я Ямского Поля д. 20 с1
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
});

export default Header;
