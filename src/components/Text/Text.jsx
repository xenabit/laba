import PropTypes from 'prop-types';
import styles from './Text.module.scss';

function Text({ title, text }) {
  return (
    <section className={styles.Text}>
      <div className={styles.Text__container}>
        <div className={styles.Text__title} dangerouslySetInnerHTML={{ __html: title }}></div>
        <div className={styles.Text__text} dangerouslySetInnerHTML={{ __html: text }}></div>
      </div>
    </section>
  );
}

Text.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Text;
