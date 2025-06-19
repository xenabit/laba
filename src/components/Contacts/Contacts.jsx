import styles from './Contacts.module.scss';
import geoPoint from '../../assets/images/geo-point.svg';
import YandexMap from './YandexMap';

// // Пример использования компонента
const mapPoints = [
  {
    coords: [55.781789, 37.581613],
    options: {
      hintContent: 'LABA',
      balloonContent: ' ул 3-я Ямского Поля, д. 2 к. 13',
    },
  },
];

export default function Contacts() {
  return (
    <section className={`${styles.Contacts} `}>
      <div className={styles.Contacts__content}>
        <div className={styles.Contacts__text}>
          <h1 className={styles.Contacts__title}>Контакты</h1>
          <a className={styles.Contacts__mail} href="mailto:info@laba-laba.ru">
            info@laba-laba.ru
          </a>
          <a href="tel:+79161958226" className={styles.Contacts__tel}>
            тел. +7&nbsp;(916)&nbsp;195-82-26
          </a>
          <a href="tel:+79690639323" className={styles.Contacts__tel}>
            тел. +7&nbsp;(969)&nbsp;063-93-23
          </a>
          {/* <a href="https://yandex.ru/profile/1116551737" target="_black" rel="noopener noreferrer" className={styles.Contacts__address}>
            125124, город Москва, ул 3-я Ямского Поля, д. 2 к. 13
          </a> */}
          <span className={styles.Contacts__address}>125124, город Москва, ул 3-я Ямского Поля, д. 2 к. 13</span>
        </div>
        <a href="tel:+79161958226" className={styles.Contacts__call}>
          <span>Связаться</span>
        </a>
      </div>
      <div className={styles.Contacts__render}>
        <div>
          <YandexMap center={[55.753544, 37.621211]} zoom={11} points={mapPoints} additionalClass={styles.Contacts__map} icon={geoPoint} />
        </div>
      </div>
    </section>
  );
}
