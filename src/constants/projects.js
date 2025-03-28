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

import { projectsTypes } from './projectsTypes';

const validTypes = new Set(projectsTypes.map((item) => item.type));

export const projects = [
  {
    id: 1,
    video: video_1,
    src: '/markstour',
    title: 'MARKS-TOUR',
    desc: 'Панорама 360° с WEB интерфейсом, VR',
    type: '3d',
  },
  {
    id: 2,
    video: video_2,
    src: '/markssite',
    title: 'marksgroup.ru',
    desc: 'Корпоративный сайт компании',
    type: 'web',
  },
  {
    id: 3,
    video: video_3,
    src: '/markssite-hr',
    title: 'HR портал',
    desc: 'HR портал компании',
    type: 'web',
  },
  {
    id: 4,
    video: video_4,
    src: 'canon-change',
    title: 'Канон перемен',
    desc: 'Приложение с игровой механикой',
    type: 'game',
  },
  {
    id: 5,
    video: video_5,
    src: 'tamagotchi',
    title: 'Тамагочи',
    desc: 'Гиперказуальная игра',
    type: 'game',
  },
  {
    id: 6,
    video: video_6,
    src: 'markscity',
    title: 'MARKS-CITY',
    desc: 'Десктоп игра для интерактивного стола. Зодчество 2023',
    type: '3d',
  },
];

projects.forEach((project) => {
  if (!validTypes.has(project.type)) {
    console.warn(`Недопустимый тип "${project.type}" в проекте "${project.title}". Допустимые типы: ${[...validTypes]}`);
  }
});
