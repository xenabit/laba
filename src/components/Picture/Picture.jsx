import PropTypes from 'prop-types';
import styles from './Picture.module.scss';

function Picture({ src }) {
  return (
    <section className={styles.Picture}>
      <div className={styles.Picture__picture}>
        <picture>
          <img src={src} alt="Описание изображения" />
        </picture>
      </div>
    </section>
  );
}

Picture.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Picture;
