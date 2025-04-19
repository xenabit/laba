import styles from './CasesItems.module.scss';
import GalleryItem from '../GalleryItem/GalleryItem';
import { projects } from '../../constants/projects';

function CasesItems({ type, excludeId }) {
  const handleMouseEnter = (video) => {
    video.play();
  };

  const handleMouseLeave = (video) => {
    video.pause();
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

  return (
    <section className={styles.CasesItems}>
      <ul className={styles.CasesItems__items}>
        {displayProjects.map((item, index) => {
          const videoProps =
            index % 2 === 1
              ? { autoPlay: true }
              : {
                  onMouseEnter: (e) => handleMouseEnter(e.currentTarget),
                  onMouseLeave: (e) => handleMouseLeave(e.currentTarget),
                };

          return <GalleryItem videoSrc={item.video} href={item.src} title={item.title} desc={item.desc} videoProps={videoProps} key={item.id} />;
        })}
      </ul>
    </section>
  );
}

export default CasesItems;
