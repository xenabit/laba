import { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Text.module.scss';

function Text({ title, text }) {
  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    } else {
      console.warn(`Element with id "${id}" not found`);
    }
  };

  useEffect(() => {
    window.handleLinkClick = (e, id) => handleLinkClick(e, id);
    return () => {
      delete window.handleLinkClick;
    };
  }, []);

  // Проверяем, является ли text строкой, и применяем replace только в этом случае
  const modifiedText = typeof text === 'string' ? text.replace(/<a href="#([^"]+)">([^<]+)<\/a>/g, `<a href="#" onClick="window.handleLinkClick(event, '$1')">$2</a>`) : text;

  return (
    <section className={styles.Text}>
      <div className={styles.Text__container}>
        <div className={styles.Text__title} dangerouslySetInnerHTML={{ __html: title }}></div>
        <div className={styles.Text__text}>{typeof text === 'string' ? <div dangerouslySetInnerHTML={{ __html: modifiedText }} /> : modifiedText}</div>
      </div>
    </section>
  );
}

Text.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

export default Text;
