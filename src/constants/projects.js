import { getAsset } from './assetsMap';

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
      mp4: getAsset('gallery-1.mp4'),
      webm: getAsset('gallery-1.webm'),
    },
    src: '/portfolio/markssite',
    title: 'marksgroup.ru',
    desc: 'Корпоративный сайт компании',
    type: ['web'],
  },
  {
    id: 'markssite-hr',
    video: {
      mp4: getAsset('gallery-2.mp4'),
      webm: getAsset('gallery-2.webm'),
    },
    src: '/portfolio/markssite-hr',
    title: 'HR портал',
    desc: 'HR портал компании',
    type: ['web'],
  },
  {
    id: 'markstour',
    video: {
      mp4: getAsset('gallery-3.mp4'),
      webm: getAsset('gallery-3.webm'),
    },
    src: '/portfolio/markstour',
    title: 'Шоурум-тур',
    desc: 'Панорама 360° с WEB интерфейсом, VR',
    type: ['web'],
  },
  {
    id: 'canon-change',
    video: {
      mp4: getAsset('gallery-4.mp4'),
      webm: getAsset('gallery-4.webm'),
    },
    src: '/portfolio/canon-change',
    title: 'Канон перемен',
    desc: 'Приложение с игровой механикой',
    type: ['game', 'mobile'],
  },
  {
    id: 'tamagotchi',
    video: {
      mp4: getAsset('gallery-5.mp4'),
      webm: getAsset('gallery-5.webm'),
    },
    src: '/portfolio/tamagotchi',
    title: 'Тамагочи',
    desc: 'Гиперказуальная игра',
    type: ['game', 'mobile'],
  },
  {
    id: 'markscity',
    video: {
      mp4: getAsset('gallery-6.mp4'),
      webm: getAsset('gallery-6.webm'),
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
