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
    const header = ref.current;
    const headerTop = header.querySelector(`.${styles.Header__top}`);

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

    const isDesktop = window.matchMedia('(min-width: 90rem)').matches;
    const borderWidth = isDesktop ? 3 : 2;

    gsap.set(headerTop, { borderBottomWidth: borderWidth, borderBottomStyle: 'solid', borderBottomColor: 'var(--prime-2)' });

    const borderAnim = gsap.to(headerTop, {
      borderBottomWidth: 0,
      duration: 0.2,
      ease: 'power1.out',
      paused: true,
      onUpdate: () => {
        if (isActive) {
          gsap.set(headerTop, { borderBottomWidth: borderWidth, borderBottomColor: 'var(--prime-1)' });
        }
      },
    });

    if (shouldAnimate) {
      header.classList.add(styles.animate); // Добавляем класс animate
    }

    ScrollTrigger.create({
      trigger: '#smooth-content',
      start: 'top top+=50',
      end: 'bottom top',
      onUpdate: (self) => {
        if (isActive) {
          showAnim.pause();
          gsap.set(header, { yPercent: 0 });
          gsap.set(headerTop, { borderBottomWidth: borderWidth, borderBottomColor: 'var(--prime-1)' });
        } else if (self.scroll() <= 50) {
          showAnim.pause();
          gsap.set(header, { yPercent: 0 });
          borderAnim.reverse();
          gsap.set(headerTop, { borderBottomColor: 'var(--prime-2)' });
        } else {
          if (self.direction === -1) {
            showAnim.reverse();
            if (self.progress < 0.02) {
              borderAnim.reverse();
              gsap.set(headerTop, { borderBottomColor: 'var(--prime-2)' });
            } else {
              borderAnim.play();
            }
          } else {
            showAnim.play();
            borderAnim.play();
          }
        }
      },
      scrub: true,
    });

    ScrollTrigger.refresh();
  }, [ref, isActive, shouldAnimate]); // Добавляем shouldAnimate как зависимость

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
              <img loading="lazy" src={logo} alt="Логотип Laba" /> {/* Логотип */}
            </picture>
          </Link>
          <button className={styles.Header__toggle} onClick={toggleActiveClass}>
            <span></span>
            <span></span>
            <span></span>
          </button>
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
            <a href="https://yandex.ru/profile/1116551737" target="_blank">
              г. Москва ул. 3-я Ямского Поля д. 20 с1
            </a>
          </div>
        </div>
      </div>
    </header>
  );
});

export default Header;
