import PropTypes from 'prop-types';
import styles from './Picture.module.scss';

function Picture({ src }) {
  return (
    <section className={styles.Picture}>
      <div className={styles.Picture__picture}>
        <picture>
          <picture>
            <source type="image/avif" srcSet={src.picture.avif} />
            <source type="image/webp" srcSet={src.picture.webp} />
            <img src={src.picture.jpg} loading="lazy" />
          </picture>
        </picture>
      </div>
    </section>
  );
}

Picture.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Picture;
