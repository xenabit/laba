import styles from './Main.module.scss';

function Main() {
  return (
    <section className={`${styles.Main}`}>
      <div className={styles.Main__container}>
        <div className={styles.Main__laba}>
          <img loading="lazy" src={labaBlack}></img>
        </div>
        <div className={styles.Main__desc}>
          Создаем&nbsp;уникальные<br></br>цифровые продукты
        </div>
      </div>
    </section>
  );
}

export default Main;
