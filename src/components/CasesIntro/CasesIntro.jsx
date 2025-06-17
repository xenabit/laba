import styles from './CasesIntro.module.scss';
import { Link } from 'react-router-dom';
import { getImageFormats } from '../../utils/imageImports';

function CasesIntro({ contentCasesIntro }) {
  const { title, subtitle, tags, src, picture_intro, about } = contentCasesIntro;
  const imageFormats = getImageFormats(picture_intro);
  const fallbackFormat = imageFormats.jpg || imageFormats.png;

  return (
    <section className={`${styles.CasesIntro}`}>
      <div className={styles.CasesIntro__header}>
        <Link to="/portfolio" className={styles.CasesIntro__return}>
          Смотреть все кейсы
        </Link>
        <div className={styles.CasesIntro__info}>
          <div className={styles.CasesIntro__name}>
            <div className={styles.CasesIntro__title} dangerouslySetInnerHTML={{ __html: title }}></div>
            <div className={styles.CasesIntro__subtitle} dangerouslySetInnerHTML={{ __html: subtitle }}></div>
          </div>
          <ul className={styles.CasesIntro__tags}>
            {tags.map((tag, index) => {
              return <li key={index} dangerouslySetInnerHTML={{ __html: tag }}></li>;
            })}
          </ul>
        </div>
      </div>
      <div className={styles.CasesIntro__body}>
        <div className={styles.CasesIntro__picture}>
          <picture>
            <source type="image/avif" srcSet={imageFormats.avif} />
            <source type="image/webp" srcSet={imageFormats.webp} />
            <img src={fallbackFormat} loading="lazy" />
          </picture>
        </div>
        {src?.url && (
          <a href={src.url} className={styles.CasesIntro__button}>
            {src.title || 'Перейти на сайт'}
          </a>
        )}
      </div>
      <div className={styles.CasesIntro__footer}>
        <div className={styles.CasesIntro__cols}>
          {about.map((item, index) => {
            return (
              <div key={index} className={styles.CasesIntro__col}>
                <div className={styles.CasesIntro__topic} dangerouslySetInnerHTML={{ __html: item.topic }}></div>
                <div className={styles.CasesIntro__desc} dangerouslySetInnerHTML={{ __html: item.desc }}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CasesIntro;
