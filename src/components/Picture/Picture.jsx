import PropTypes from 'prop-types';
import styles from './Picture.module.scss';
function Picture({ src }) {
  return (
    <section className={styles.Picture}>
      <div className={styles.Picture__picture}>
        <picture>
          {src?.avif && <source type="image/avif" srcSet={src.avif} />}
          {src?.webp && <source type="image/webp" srcSet={src.webp} />}
          <img src={src?.img} loading="lazy" />
        </picture>
      </div>
    </section>
  );
}

Picture.propTypes = {
  src: PropTypes.shape({
    img: PropTypes.string.isRequired,
    webp: PropTypes.string,
    avif: PropTypes.string,
  }).isRequired,
};

export default Picture;
