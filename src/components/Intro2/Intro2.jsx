import styles from './Intro2.module.scss';
import labaBlack from '../../assets/images/intro-2-laba-black.svg';

function Intro2() {
  return (
    <section className={`${styles.Intro2}`}>
      <div className={styles.Intro2__container}>
        <div className={styles.Intro2__laba}>
          <img src={labaBlack}></img>
        </div>
        <div className={styles.Intro2__desc}>Создаем уникальные цифровые продукты</div>
      </div>
    </section>
  );
}

export default Intro2;
