import { forwardRef, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Header.module.scss';
import logo from '/src/assets/images/header-logo.svg';

gsap.registerPlugin(ScrollTrigger);

const Header = forwardRef(({ shouldAnimate }, ref) => {
  const [isActive, setIsActive] = useState(false);
  const [activeTab, setActiveTab] = useState('/');
  const location = useLocation();

  useEffect(() => {
    const savedTab = localStorage.getItem('activeTab') || location.pathname;
    setActiveTab(savedTab);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isActive ? 'hidden' : '';
    return () => (document.body.style.overflow = '');
  }, [isActive]);

  useEffect(() => {
    if (!ref || !ref.current) {
      console.warn('Header ref is not ready');
      return;
    }

    const header = ref.current;
    const headerTop = header.querySelector(`.${styles.Header__top}`);
    const border = headerTop.querySelector(`.${styles.Header__border}`);

    if (!headerTop || !border) return;

    const isDesktop = window.matchMedia('(min-width: 90rem)').matches;
    const borderHeight = isDesktop ? 3 : 2;

    gsap.set(border, {
      height: borderHeight,
      backgroundColor: isActive ? 'var(--prime-1)' : 'var(--prime-2)',
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

    const borderAnim = gsap.to(border, {
      height: 0,
      duration: 0.2,
      ease: 'power1.out',
      paused: true,
    });

    if (shouldAnimate) {
      header.classList.add(styles.animate);
    }

    ScrollTrigger.create({
      trigger: '#smooth-content',
      start: 'top top+=50',
      end: 'bottom top',
      onUpdate: (self) => {
        const scrollPos = self.scroll();

        if (isActive) {
          showAnim.pause();
          gsap.set(header, { yPercent: 0 });
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

    if (window.scrollY > 50) {
      borderAnim.play();
    } else {
      borderAnim.reverse();
    }

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf([header, border]);
    };
  }, [ref, isActive, shouldAnimate]);

  const toggleActiveClass = () => setIsActive((prev) => !prev);

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
          <button className={styles.Header__toggle} onClick={toggleActiveClass}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className={styles.Header__border}></div>
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
              <li>
                <Link className={activeTab === '/case' ? styles.active : ''} to="/case" onClick={() => handleTabClick('/case')}>
                  Кейс
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
