import styles from './Intro2.module.scss';
import labaBlack from '../../assets/images/intro-2-laba-black.svg';

function Intro2({ shouldAnimate }) {
  return (
    <section className={`${styles.Intro2} ${shouldAnimate ? styles.animate : ''}`}>
      <div className={styles.Intro2__container}>
        <div className={styles.Intro2__laba}>
          <img loading="lazy" src={labaBlack} alt="Laba logo" />
        </div>
        <div className={styles.Intro2__desc}>
          Создаем уникальные
          <br />
          цифровые продукты
        </div>
      </div>
    </section>
  );
}

export default Intro2;
