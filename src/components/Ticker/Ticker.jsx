import styles from './Ticker.module.scss';
import { tickerItems } from '../../constants/tickerItems';

const Ticker = () => {
  return (
    <div className={styles.Ticker}>
      <ul className={styles.Ticker__items}>
        {tickerItems.map((item, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
        ))}
      </ul>
      <ul className={styles.Ticker__items}>
        {tickerItems.map((item, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
        ))}
      </ul>
    </div>
  );
};

export default Ticker;
