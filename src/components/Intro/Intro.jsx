import styles from './Intro.module.scss';
import video from '../../assets/videos/intro-cover.mp4';
import labaBlack from '../../assets/images/intro-laba-black.svg';
import labaWhite from '../../assets/images/intro-laba-white.svg';

import CircleText from './CircleText/CircleText';

function Intro() {
  return (
    <section className={`${styles.Intro}   `}>
      <div className={styles.Intro__company}>
        <div className={styles.Intro__laba}>
          <img loading="lazy" src={labaBlack}></img>
          <img loading="lazy" src={labaWhite}></img>
        </div>
        <span>digital agency&nbsp;.</span>
      </div>
      <div className={styles.Intro__cover}>
        <video preload="auto" autoPlay loop muted>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.Intro__circle}>
          <CircleText />
        </div>
      </div>
    </section>
  );
}

export default Intro;
