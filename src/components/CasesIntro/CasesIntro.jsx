import styles from './CasesIntro.module.scss';
import { Link } from 'react-router-dom';

function CasesIntro({ contentCasesIntro }) {
  const { title, subtitle, tags, src, picture_intro, about } = contentCasesIntro;

  const getSrcSet = (pictureData) => {
    if (!pictureData) return '';

    // Если есть 2x версии - используем их
    if (pictureData.webp2x) {
      return `${pictureData.webp} 1x, ${pictureData.webp2x} 2x`;
    }
    return pictureData.webp || '';
  };

  const getSrcSetAvif = (pictureData) => {
    if (!pictureData) return '';
    if (pictureData.avif2x) {
      return `${pictureData.avif} 1x, ${pictureData.avif2x} 2x`;
    }
    return pictureData.avif || '';
  };

  return (
    <section className={styles.CasesIntro}>
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
            {tags.map((tag, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: tag }}></li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.CasesIntro__body}>
        <div className={styles.CasesIntro__picture}>
          <picture>
            {picture_intro.avif && <source type="image/avif" srcSet={getSrcSetAvif(picture_intro)} />}
            {picture_intro.webp && <source type="image/webp" srcSet={getSrcSet(picture_intro)} />}
            <img
              style={{
                objectPosition: picture_intro.position || 'center',
              }}
              src={picture_intro.img}
              loading="lazy"
              alt={title || 'Intro image'}
            />
          </picture>
        </div>
        {src?.url && (
          <a target="_blank" rel="noopener noreferrer" href={src.url} className={styles.CasesIntro__button}>
            {src.title || 'Перейти на сайт'}
          </a>
        )}
      </div>
      <div className={styles.CasesIntro__footer}>
        <div className={styles.CasesIntro__cols}>
          {about.map((item, index) => (
            <div key={index} className={styles.CasesIntro__col}>
              <div className={styles.CasesIntro__topic} dangerouslySetInnerHTML={{ __html: item.topic }}></div>
              <div className={styles.CasesIntro__desc} dangerouslySetInnerHTML={{ __html: item.desc }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CasesIntro;
