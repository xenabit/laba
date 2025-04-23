import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.Footer}>
      <a className={styles.Footer__mail} href="mailto:mail@marksgroup.ru">
        mail@marksgroup.ru
      </a>
      <div className={styles.Footer__container}>
        <div className={styles.Footer__contacts}>
          <div className={styles.Footer__contact}>
            Номер телефона: <a href="tel:+74951201226">+7 (495) 120-12-26</a>
          </div>
          <div className={styles.Footer__contact}>
            Адрес:
            <a href="https://yandex.ru/profile/1116551737" target="_black">
              125124, г. Москва, 3-я улица Ямского поля, д.&nbsp;20, стр.&nbsp;1
            </a>
          </div>
        </div>
        <div className={styles.Footer__bottom}>
          <a href="#">Политика конфиденциальности</a>
          <div>&copy; LABA</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
