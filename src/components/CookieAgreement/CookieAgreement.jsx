import { useEffect, useState } from 'react';
import styles from './CookieAgreement.module.scss';

function CookieAgreement() {
  const [isAgreed, setIsAgreed] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

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
      setIsAgreed(true);
    } catch (error) {
      console.error('Ошибка при сохранении в localStorage:', error);
    }
  };

  if (!isMounted) {
    return null;
  }

  if (isAgreed) {
    return null;
  }

  return (
    <section className={styles.CookieAgreement}>
      <div className={styles.CookieAgreement__container}>
        <div className={styles.CookieAgreement__text}>
          OOO «Media» использует файлы cookie и инструменты аналитики на сайте
        </div>
        <div onMouseMove={handleMouseMove} onClick={handleAgreement} className={styles.CookieAgreement__button}>
          <span>Понятно</span>
        </div>
      </div>
    </section>
  );
}

export default CookieAgreement;
