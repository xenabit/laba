import React from 'react';
import styles from '../GalleryItem/GalleryItem.module.scss';
import './GallerySkeletonItem.scss';

export default function GallerySkeletonItem() {
  return (
    <li className={styles.GalleryItem__item}>
      <div className="skeletonVideo" />
      <h2>
        <span className="skeletonTextShort" />
        <span className="skeletonTextLong" />
      </h2>
    </li>
  );
}
