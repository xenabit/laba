import styles from './AboutDirection.module.scss';

import ball_1 from '../../assets/images/about-direction-1.png';
import ball_2 from '../../assets/images/about-direction-2.png';
import ball_3 from '../../assets/images/about-direction-3.png';

const activities = [
  { code: '62.01', description: 'Разработка компьютерного программного обеспечения' },
  { code: '58.21', description: 'Издание компьютерных игр' },
  { code: '58.29', description: 'Издание прочих программных продуктов игр' },
  { code: '62.02', description: 'Деятельность консультативная и работы в области компьютерных технологий' },
  { code: '62.02.1', description: 'Деятельность по планированию, проектированию компьютерных систем' },
  { code: '62.02.2', description: 'Деятельность по обследованию и экспертизе компьютерных систем' },
  { code: '62.02.9', description: 'Деятельность консультативная в области компьютерных технологий прочая' },
  { code: '63.12', description: 'Деятельность web-порталов' },
  { code: '63.99.1', description: 'Деятельность по оказанию консультационных и информационных услуг' },
  {
    code: '71.12',
    description:
      'Деятельность в области инженерных изысканий, инженерно-технического проектирования, управления проектами строительства, выполнения строительного контроля и авторского надзора, предоставление технических консультаций в этих областях',
  },
  { code: '74.10', description: 'Деятельность специализированная в области дизайна' },
];

function AboutDirection() {
  return (
    <section className={styles.AboutDirection}>
      <div className={styles.AboutDirection__ball}>
        <img src={ball_1} loading="lazy"></img>
      </div>
      <div className={styles.AboutDirection__ball}>
        <img src={ball_2} loading="lazy"></img>
      </div>
      <div className={styles.AboutDirection__ball}>
        <img src={ball_3} loading="lazy"></img>
      </div>

      <div className={styles.AboutDirection__title}>
        <span>Сведения</span> <span>о направлениях</span> <span>деятельности</span>
      </div>
      <div className={styles.AboutDirection__list}>
        <div className={`${styles.AboutDirection__row} ${styles.AboutDirection__row_header}`}>
          <div className={styles.AboutDirection__code}>Код</div>
          <div className={styles.AboutDirection__desc}>Виды деятельности в области информационных технологий</div>
        </div>
        {activities.map((activity) => (
          <div key={activity.code} className={styles.AboutDirection__row}>
            <div className={styles.AboutDirection__code}>{activity.code}</div>
            <div className={styles.AboutDirection__desc}>{activity.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutDirection;
