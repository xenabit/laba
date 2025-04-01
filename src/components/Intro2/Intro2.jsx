import styles from './Intro2.module.scss';
import labaBlack from '../../assets/images/intro-2-laba-black.svg';

function Intro2({ introRef }) {
  return (
    <section className={styles.Intro2} ref={introRef}>
      <div className={styles.Intro2__container}>
        <div className={styles.Intro2__laba}>
          <img loading="lazy" src={labaBlack} />
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
