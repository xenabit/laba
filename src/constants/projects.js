import video_1_mp4 from '../assets/videos/gallery-1.mp4';
import video_1_webm from '../assets/videos/gallery-1.webm';
import video_2_mp4 from '../assets/videos/gallery-2.mp4';
import video_2_webm from '../assets/videos/gallery-2.webm';
import video_3_mp4 from '../assets/videos/gallery-3.mp4';
import video_3_webm from '../assets/videos/gallery-3.webm';
import video_4_mp4 from '../assets/videos/gallery-4.mp4';
import video_4_webm from '../assets/videos/gallery-4.webm';
import video_5_mp4 from '../assets/videos/gallery-5.mp4';
import video_5_webm from '../assets/videos/gallery-5.webm';
import video_6_mp4 from '../assets/videos/gallery-6.mp4';
import video_6_webm from '../assets/videos/gallery-6.webm';

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
    video: {
      mp4: video_2_mp4,
      webm: video_2_webm,
    },
    src: '/portfolio/markssite',
    title: 'marksgroup.ru',
    desc: 'Корпоративный сайт компании',
    type: ['web'],
  },
  {
    id: 'markssite-hr',
    video: {
      mp4: video_3_mp4,
      webm: video_3_webm,
    },
    src: '/portfolio/markssite-hr',
    title: 'HR портал',
    desc: 'HR портал компании',
    type: ['web'],
  },
  {
    id: 'markstour',
    video: {
      mp4: video_3_mp4,
      webm: video_3_webm,
    },
    src: '/portfolio/markstour',
    title: 'Шоурум-тур',
    desc: 'Панорама 360° с WEB интерфейсом, VR',
    type: ['web'],
  },
  {
    id: 'canon-change',
    video: {
      mp4: video_4_mp4,
      webm: video_4_webm,
    },
    src: '/portfolio/canon-change',
    title: 'Канон перемен',
    desc: 'Приложение с игровой механикой',
    type: ['game', 'mobile'],
  },
  {
    id: 'tamagotchi',
    video: {
      mp4: video_5_mp4,
      webm: video_5_webm,
    },
    src: '/portfolio/tamagotchi',
    title: 'Тамагочи',
    desc: 'Гиперказуальная игра',
    type: ['game', 'mobile'],
  },
  {
    id: 'markscity',
    video: {
      mp4: video_6_mp4,
      webm: video_6_webm,
    },
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
