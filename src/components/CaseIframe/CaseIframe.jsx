import { useState } from 'react';
import styles from './CaseIframe.module.scss';

function CaseIframe() {
  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    setIsActive(true); // Устанавливаем состояние active в true
  };

  return (
    <section className={`${styles.CaseIframe} ${isActive ? styles.active : ''}`}>
      <div className={styles.CaseIframe__container}>
        <button className={styles.CaseIframe__button} onClick={handleButtonClick}>
          Начать взаимодействие
        </button>
        <iframe className={styles.CaseIframe__iframe} src="https://marks-tour.ru/" sandbox="allow-same-origin allow-scripts" frameBorder="0" allowFullScreen loading="lazy"></iframe>
      </div>
    </section>
  );
}

export default CaseIframe;
