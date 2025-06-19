import FlareSVG from '../../../assets/images/loading-main-flare.svg?react';
import styles from './FlareComponent.module.scss';

function FlareComponent() {
  return (
    <div className={styles.FlareComponent}>
      <FlareSVG />
    </div>
  );
}

export default FlareComponent;
