import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.Footer}>
      <a className={styles.Footer__mail} href="mailto:info@laba-laba.ru">
        info@laba-laba.ru
      </a>
      <div className={styles.Footer__container}>
        <div className={styles.Footer__contacts}>
          <div className={styles.Footer__contact}>
            Номер телефона: <a href="tel:+79161958226">+7&nbsp;(916)&nbsp;195-82-26</a>
            <a href="tel:+79690639323">+7&nbsp;(969)&nbsp;063-93-23</a>
          </div>

          <div className={styles.Footer__contact}>
            Адрес:
            <a href="https://yandex.ru/maps/-/CHcqeR7U" target="_black">
              125124, город Москва, ул 3-я Ямского Поля, д.&nbsp;2 к.&nbsp;13
            </a>
          </div>
        </div>
        <div className={styles.Footer__bottom}>
          <Link to="/information">Политика конфиденциальности</Link>
          <div>&copy; LABA</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
