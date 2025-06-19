import video_1 from '../assets/videos/gallery-1.mp4';
import video_2 from '../assets/videos/gallery-2.mp4';
import video_3 from '../assets/videos/gallery-3.mp4';
import video_4 from '../assets/videos/gallery-4.mp4';
import video_5 from '../assets/videos/gallery-5.mp4';
import video_6 from '../assets/videos/gallery-6.mp4';
import video_7 from '../assets/videos/gallery-7.mp4';
import video_8 from '../assets/videos/gallery-8.mp4';
import video_9 from '../assets/videos/gallery-9.mp4';
import video_10 from '../assets/videos/gallery-10.mp4';
import video_11 from '../assets/videos/gallery-11.mp4';
import video_12 from '../assets/videos/gallery-12.mp4';

export const projectsTypes = [
  { id: 'all', title: 'Все', type: 'all' },
  { id: 'web', title: 'Web', type: 'web' },
  { id: 'desktop', title: 'Desktop', type: 'desktop' },
  { id: 'game', title: 'Game', type: 'game' },
  { id: 'mobile', title: 'Mobile', type: 'mobile' },
];

const validTypes = new Set(projectsTypes.map((item) => item.type));

export const projects = [
  {
    id: 'markssite',
    video: video_2,
    src: '/portfolio/markssite',
    title: 'marksgroup.ru',
    desc: 'Корпоративный сайт компании',
    type: ['web'],
  },
  {
    id: 'markssite-hr',
    video: video_3,
    src: '/portfolio/markssite-hr',
    title: 'HR портал',
    desc: 'HR портал компании',
    type: ['web'],
  },
  {
    id: 'markstour',
    video: video_1,
    src: '/portfolio/markstour',
    title: 'Шоурум-тур',
    desc: 'Панорама 360° с WEB интерфейсом, VR',
    type: ['web'],
  },
  {
    id: 'canon-change',
    video: video_4,
    src: '/portfolio/canon-change',
    title: 'Канон перемен',
    desc: 'Приложение с игровой механикой',
    type: ['game', 'mobile'],
  },
  {
    id: 'tamagotchi',
    video: video_5,
    src: '/portfolio/tamagotchi',
    title: 'Тамагочи',
    desc: 'Гиперказуальная игра',
    type: ['game', 'mobile'],
  },
  {
    id: 'markscity',
    video: video_6,
    src: '/portfolio/markscity',
    title: 'MARKS-CITY',
    desc: 'Десктоп игра для интерактивного стола. Зодчество 2023',
    type: ['desktop', 'game'],
  },
];

projects.forEach((project) => {
  const projectTypes = Array.isArray(project.type) ? project.type : [project.type];
  projectTypes.forEach((type) => {
    if (!validTypes.has(type)) {
      console.warn(`Недопустимый тип "${type}" в проекте "${project.title}". Допустимые типы: ${[...validTypes]}`);
    }
  });
});
