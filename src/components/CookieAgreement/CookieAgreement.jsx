import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import styles from './CookieAgreement.module.scss';

function CookieAgreement({ loadingStage }) {
  const [isAgreed, setIsAgreed] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [shouldShow, setShouldShow] = useState(false);
  const cookieRef = useRef(null);

  useEffect(() => {
    try {
      // Проверяем, есть ли уже согласие в localStorage
      const agreement = localStorage.getItem('cookieAgreement');
      if (agreement === 'true') {
        setIsAgreed(true);
      }
    } catch (error) {
      console.error('Ошибка при доступе к localStorage:', error);
    } finally {
      setIsMounted(true);
    }
  }, []);

  useEffect(() => {
    if (loadingStage === 'complete' && !isAgreed && isMounted) {
      const timer = setTimeout(() => {
        setShouldShow(true);
      }, 10 * 1000);

      return () => clearTimeout(timer);
    }
  }, [loadingStage, isAgreed, isMounted]);

  useEffect(() => {
    if (shouldShow && cookieRef.current) {
      gsap.fromTo(
        cookieRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
        }
      );
    }
  }, [shouldShow]);

  const handleMouseMove = (e) => {
    const { currentTarget: element } = e;
    const x = e.pageX - element.offsetLeft;
    const y = e.pageY - element.offsetTop;

    element.style.setProperty('--x5', `${x}px`);
    element.style.setProperty('--y5', `${y}px`);
  };

  const handleAgreement = () => {
    try {
      // Сохраняем согласие в localStorage
      localStorage.setItem('cookieAgreement', 'true');
      gsap.to(cookieRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.in',
        onComplete: () => setIsAgreed(true),
      });
    } catch (error) {
      console.error('Ошибка при сохранении в localStorage:', error);
    }
  };

  if (!isMounted || isAgreed || !shouldShow) {
    return null;
  }

  return (
    <section ref={cookieRef} className={styles.CookieAgreement}>
      <div className={styles.CookieAgreement__container}>
        <div className={styles.CookieAgreement__text}>OOO «Media» использует файлы cookie и инструменты аналитики на сайте</div>
        <div onMouseMove={handleMouseMove} onClick={handleAgreement} className={styles.CookieAgreement__button}>
          <span>Понятно</span>
        </div>
      </div>
    </section>
  );
}

export default CookieAgreement;
