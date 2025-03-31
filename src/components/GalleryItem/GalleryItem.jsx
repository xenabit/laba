import { Link } from 'react-router-dom';
import styles from './GalleryItem.module.scss';

function GalleryItem({ videoSrc, href, title, desc, videoProps }) {
  return (
    <li className={styles.GalleryItem__item}>
      <Link to={href}>
        <video {...videoProps} preload="auto" loop muted>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h2>
          <span>{title}</span>
          <span>{desc}</span>
        </h2>
      </Link>
    </li>
  );
}

export default GalleryItem;
