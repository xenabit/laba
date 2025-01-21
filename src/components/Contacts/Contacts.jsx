import styles from './Contacts.module.scss';
import map from '../../assets/images/contacts.png';

export default function Contacts() {
  return (
    <section className={`${styles.Contacts} `}>
      <div className={styles.Contacts__content}>
        <div className={styles.Contacts__text}>
          <h1 className={styles.Contacts__title}>Контакты</h1>
          <a className={styles.Contacts__mail} href="mailto:mail@marksgroup.ru">
            mail@marksgroup.ru
          </a>
          <a href="tel:+74951201226" className={styles.Contacts__tel}>
            +7 (495) 120-12-26
          </a>
          <a href="https://yandex.ru/profile/1116551737" target="_black" rel="noopener noreferrer" className={styles.Contacts__address}>
            г. Москва ул. 3-я Ямского Поля д. 20 с1
          </a>
        </div>
        <a href="tel:+74951201226" className={styles.Contacts__call}>
          <span>Связаться</span>
        </a>
      </div>
      <div className={styles.Contacts__map}>
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <a href="https://yandex.ru/maps/org/marks_group/1116551737/?utm_medium=mapframe&utm_source=maps" style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}>
            Marks Group
          </a>
          <a
            href="https://yandex.ru/maps/213/moscow/category/architectural_firm/184107417/?utm_medium=mapframe&utm_source=maps"
            style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
          >
            Архитектурное бюро в Москве
          </a>
          <a
            href="https://yandex.ru/maps/213/moscow/category/design_institute/184107419/?utm_medium=mapframe&utm_source=maps"
            style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '28px' }}
          >
            Проектная организация в Москве
          </a>
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=37.789097%2C55.727793&mode=search&oid=1116551737&ol=biz&sll=37.657262%2C55.727638&source=serp_navig&text=marksgroup%20%D0%B0%D0%B4%D1%80%D0%B5%D1%81&z=11"
            width="100%"
            frameBorder="1"
            allowFullScreen={true}
            style={{ position: 'relative', height: '60vh' }}
          ></iframe>
        </div>
      </div>
    </section>
  );
}
