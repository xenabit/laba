import { useRef, useEffect } from 'react';
import styles from './CircleText.module.scss';

function CircleText() {
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;

    text.innerHTML = text.textContent.replace(/./g, '<span>$&</span>');
    const elements = text.querySelectorAll('span');

    elements.forEach((element, index) => {
      element.style.transform = `rotate(${index * 6.6}deg)`;
    });
  }, []);

  return (
    <section className={styles.CircleText}>
      <span className={styles.CircleText__breaf}>
        заполнить<br></br> бриф
      </span>
      <div ref={textRef} className={styles.CircleText__text}>
        &middot;решаем сложные диджитал задачи&middot; решаем сложные задачи
      </div>
    </section>
  );
}

export default CircleText;
