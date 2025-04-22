import { forwardRef, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Header.module.scss';
import logo from '/src/assets/images/header-logo.svg';
import { ANIMATION_CONFIG } from '../LoadingMainScreen/LoadingMainScreen';

gsap.registerPlugin(ScrollTrigger);

const Header = forwardRef(({ loadingStage }, ref) => {
  const [isActive, setIsActive] = useState(false);
  const [activeTab, setActiveTab] = useState('/');
  const location = useLocation();

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

    if (!headerTop || !border || !logo || !toggle || !desc) {
      console.warn('Header elements missing', { headerTop, border, logo, toggle, desc });
      return;
    }

    // Функция для установки шапки в видимое состояние
    const setHeaderVisible = () => {
      gsap.set(header, { opacity: 1, backgroundColor: 'transparent' });
      gsap.set([logo, toggle, desc, border], { opacity: 1 });
    };

    // Если меню активно, шапка видима с цветами для active
    if (isActive) {
      console.log('Header: Menu is active, forcing visibility');
      gsap.set([logo, toggle, desc, border], { opacity: 1 });
      gsap.set(border, { backgroundColor: 'var(--prime-1)' });
      return;
    }

    // Анимации в зависимости от стадии загрузки
    if (loadingStage === 'initial') {
      console.log('Header: Applying initial stage animations');
      // Шапка появляется после завершения анимации букв и шаров
      gsap.to(header, {
        opacity: 1,
        duration: ANIMATION_CONFIG.HEADER_FADE_DURATION,
        ease: 'power2.out',
        delay: ANIMATION_CONFIG.HEADER_1_OPACITY_DELAY,
        onComplete: () => {
          // Сохраняем видимость шапки после анимации
          setHeaderVisible();
        },
      });
      gsap.to([logo, toggle, desc, border], {
        opacity: 1,
        duration: ANIMATION_CONFIG.HEADER_FADE_DURATION,
        ease: 'power2.out',
        delay: ANIMATION_CONFIG.HEADER_1_OPACITY_DELAY,
      });
    } else if (loadingStage === 'scrolling') {
      console.log('Header: Applying scrolling stage animations');
      gsap.to(header, {
        opacity: 0,
        duration: ANIMATION_CONFIG.HEADER_FADE_DURATION,
        ease: 'power2.out',
        overwrite: 'auto',
        onComplete: () => {
          const headerContainer = header.querySelector(`.${styles.Header__container}`);
          if (headerContainer) {
            headerContainer.classList.remove(styles.active);
            setIsActive(false); // Закрываем меню
          }
        },
      });
    } else if (loadingStage === 'transition') {
      console.log('Header: Applying transition stage animations');
      gsap.set(logo, {
        opacity: 1,
        scale: 6.66,
        position: 'absolute',
        left: '50.5%',
        top: '41.5%',
        transform: 'translate(-31%, 1700%)',
        zIndex: 10,
      });
      gsap.set(header, { opacity: 1 });
      gsap.set([toggle, desc, border], { opacity: 0 });
    } else if (loadingStage === 'complete') {
      console.log('Header: Applying complete stage animations');
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set(header, { backgroundColor: 'var(--prime-1)' });
        },
      });
      tl.to(header, {
        opacity: 1,
        duration: ANIMATION_CONFIG.HEADER_FADE_DURATION,
        ease: 'power2.out',
      })
        .to(
          logo,
          {
            scale: 1,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            duration: ANIMATION_CONFIG.LOGO_ANIMATION_DURATION,
            ease: 'linear',
            overwrite: 'auto',
          },
          ANIMATION_CONFIG.LOGO_ANIMATION_DELAY
        )
        .to(
          [toggle, desc, border],
          {
            opacity: 1,
            duration: ANIMATION_CONFIG.LOGO_ANIMATION_DURATION,
            ease: 'linear',
            overwrite: 'auto',
          },
          ANIMATION_CONFIG.LOGO_ANIMATION_DELAY
        );
    }

    // Настройка ScrollTrigger для стадии complete
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
        if (loadingStage !== 'complete') {
          // Пропускаем ScrollTrigger на стадиях initial, scrolling, transition
          return;
        }
        if (isActive) {
          // Если меню активно, шапка видима
          showAnim.pause();
          borderAnim.pause();
          gsap.set(header, { yPercent: 0, opacity: 1 });
          gsap.set(border, { height: borderHeight, backgroundColor: 'var(--prime-1)' });
        } else if (scrollPos <= 50) {
          // Прокрутка вверху: шапка видима
          showAnim.reverse();
          borderAnim.reverse();
          gsap.set(border, { backgroundColor: 'var(--prime-2)' });
        } else {
          // Прокрутка вниз/вверх
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
      gsap.killTweensOf([header, border, logo, toggle, desc]);
    };
  }, [ref, isActive, loadingStage]);

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
    <header ref={ref} id="main-tool-bar" className={`${styles.Header}`}>
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
    </header>
  );
});

export default Header;
