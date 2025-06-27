import styles from './CasesItems.module.scss';
import GalleryItem from '../GalleryItem/GalleryItem';
import { projects } from '../../constants/projects';
import { useState, useEffect } from 'react';

function CasesItems({ type, excludeId }) {
  const [loadedIds, setLoadedIds] = useState(new Set());
  const handleMouseEnter = (video) => {
    if (video) {
      video.play().catch((error) => console.error('Ошибка воспроизведения видео:', error));
    }
  };

  const handleMouseLeave = (video) => {
    if (video) video.pause();
  };
  const types = Array.isArray(type) ? type : type ? [type] : [];

  const filteredProjects = projects.filter((item) => {
    const itemTypes = Array.isArray(item.type) ? item.type : [item.type];
    return (types.length === 0 || types.some((t) => itemTypes.includes(t))) && item.id !== excludeId;
  });

  const getRandomProject = (excludeIds) => {
    const availableProjects = projects.filter((item) => !excludeIds.includes(item.id) && item.id !== excludeId);
    if (availableProjects.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * availableProjects.length);
    return availableProjects[randomIndex];
  };

  const displayProjects = [...filteredProjects.slice(0, 3)];
  while (displayProjects.length < 3) {
    const randomProject = getRandomProject(displayProjects.map((p) => p.id));
    if (!randomProject) break;
    displayProjects.push(randomProject);
  }

  const preloads = displayProjects.map((item) => (
    <video
      key={`preload-${item.id}`}
      preload="metadata"
      muted
      data-preload
      onLoadedData={() => {
        setLoadedIds((prev) => new Set(prev).add(item.id));
      }}
      style={{
        position: 'absolute',
        width: 0,
        height: 0,
        overflow: 'hidden',
        opacity: 0,
      }}
      playsInline
      webkit-playsinline="true"
    >
      {item.video.webm && <source src={item.video.webm} type="video/webm" />}
      {item.video.mp4 && <source src={item.video.mp4} type="video/mp4" />}
    </video>
  ));

  return (
    <section className={styles.CasesItems}>
      <div style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}>{preloads}</div>
      <ul className={styles.CasesItems__items}>
        {displayProjects.length === 0 ? (
          <li>Нет доступных проектов для отображения</li>
        ) : (
          displayProjects.map((item, index) => {
            const videoProps =
              index % 2 === 1
                ? { autoPlay: true, muted: true, loop: true, playsInline: true }
                : {
                    muted: true,
                    loop: true,
                    playsInline: true,
                    onMouseEnter: (e) => handleMouseEnter(e.currentTarget.querySelector('video')),
                    onMouseLeave: (e) => handleMouseLeave(e.currentTarget.querySelector('video')),
                  };

            return <GalleryItem key={item.id} video={item.video} href={item.src} title={item.title} desc={item.desc} videoProps={videoProps} />;
          })
        )}
      </ul>
    </section>
  );
}

export default CasesItems;
