import styles from './AboutCols.module.scss';

function AboutCols() {
  return (
    <section className={styles.AboutCols}>
      <div className={styles.AboutCols__title}>Преимущества работы c LABA</div>
      <div className={styles.AboutCols__cols}>
        <div className={styles.AboutCols__col}>
          <div className={styles.AboutCols__subtitle}>Гибкое управление</div>
          <div className={styles.AboutCols__text}>
            <ul>
              <li>Быстро реагируем на&nbsp;изменения</li>
              <li>Адаптируемся под требования заказчика или рынка</li>
              <li>Строим кросс-функциональные команды</li>
            </ul>
          </div>
        </div>
        <div className={styles.AboutCols__col}>
          <div className={styles.AboutCols__subtitle}>Уверенность в результате</div>
          <div className={styles.AboutCols__text}>
            <ul>
              <li>Предлагаем сопровождение и&nbsp;масштабируемость проектов</li>
              <li>Доступ к&nbsp;глобальному рынку</li>
              <li>Эффективность команды</li>
              <li>Делимся результатами после каждого спринта</li>
              <li>Подбираем команду заказчику</li>
            </ul>
          </div>
        </div>
        <div className={styles.AboutCols__col}>
          <div className={styles.AboutCols__subtitle}>Полный жизненный цикл</div>
          <div className={styles.AboutCols__text}>
            <ul>
              <li>Создаем концепцию продукта</li>
              <li>Прорабатываем CJM</li>
              <li>Предоставляем прототипыи макеты в&nbsp;Figma </li>
              <li>Тестируем прототипы и&nbsp;решения на&nbsp;ЦА</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutCols;
