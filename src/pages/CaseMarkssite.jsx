import '../App.scss';

import CasesIntro from '../components/CasesIntro/CasesIntro';
import Text from '../components/Text/Text';
import Softwar from '../components/Softwar/Softwar';
import CasesSlider from '../components/CasesSlider/CasesSlider';
import Picture from '../components/Picture/Picture';
import MarksTour from '../components/MarksTour/MarksTour';
import ReviewsSlider from '../components/ReviewsSlider/ReviewsSlider';
import VideoHorizontal from '../components/VideoHorizontal/VideoHorizontal';
import CasesItems from '../components/CasesItems/CasesItems';

import picture from '/src/assets/images/picture-markssite.jpg';
import case_intro_picture from '/src/assets/images/case-intro-markssite.jpg';
import softwar_logo_figma from '/src/assets/images/softwar-figma.svg';
import softwar_logo_react from '/src/assets/images/softwar-react.svg';
import softwar_logo_nodejs from '/src/assets/images/softwar-nodejs.svg';
import video_horizontal from '/src/assets/videos/video-horizontal-markssite.mp4';

import reviews_slider_author_1 from '/src/assets/images/reviews-slider-1.svg';
import reviews_slider_author_2 from '/src/assets/images/reviews-slider-2.jpg';

const contentCasesIntro = {
  title: 'marksgroup.ru',
  subtitle: 'Корпоративный сайт компании',
  tags: ['WEB интерфейс', 'UX/UI', '???'],
  picture_intro: case_intro_picture,
  about: [
    {
      topic: 'Клиент',
      desc: 'MARKS GROUP',
    },
    {
      topic: 'Платформа',
      desc: 'WEB',
    },
    {
      topic: 'Команда',
      desc: 'Разработчик full stack, верстальщик, UX/UI дизайнер, PM, контент менеджер',
    },
    {
      topic: 'Что сделано',
      desc: 'Корпоративный сайт компании, HR портал',
    },
  ],
};

const contentText = [
  {
    title: 'Задача',
    text: 'Создать корпоративный сайт компании MARKS GROUP, отразить ключевые компетенции компании. Сайт должен иметь кастомную алминистративную панель, с возможность кастомизировать отдельные публикации и проекты. Фильтрация проектов по городу и направлении деятельности. А также костамизация отдельных блоков главной странцыю?????',
  },
  {
    title: 'Результаты',
    text: 'Разработан сайт компании ??',
  },
  {
    title: 'Административная панель',
    text: 'Админка?????',
  },
  {
    title: 'Административная панель',
    text: 'В рамках проекта был реализован собственный HR портал. В админ-панели можно заполнять вакансии, выбирать преимущества, условия работы и предложения непосредственно под кандидата. Со стороны пользователя, по этим данным есть детальная фильтрация, для удобного отслеживания подходящих вакансии.  Подробнее о кейсе <a href="#">читайте здесь.</a>',
  },
];

const contentSoftwar = [
  { logo: softwar_logo_figma, title: 'Figma' },
  { logo: softwar_logo_react, title: 'React' },
  { logo: softwar_logo_nodejs, title: 'Node.js' },
];

const contentReviews = [
  {
    title: 'Отзыв клиента MG',
    text: 'Создать MGSite 10 ракурсов 3D визуализации, монтаж анимационного ролика для рекламных целей, создание интерактивной модели, для офиса продаж «Панорама 360°», дизайн и верстка многостраничного сайта.',
    name: 'Виктор Потугин<br> менеджер проекта MARKS GROUP',
    picture: [
      { logo: reviews_slider_author_1, title: 'Манагер' },
      { logo: reviews_slider_author_2, title: 'Клиент' },
      { logo: reviews_slider_author_1, title: 'Манагер' },
      { logo: reviews_slider_author_2, title: 'Клиент' },
      { logo: reviews_slider_author_1, title: 'Манагер' },
    ],
  },
  {
    title: 'Отзыв клиента 2',
    text: 'Создать MGSite  3453450 ракурсов 3D визуализации, монтаж анимационного ролика для рекламных целей, создание интерактивной модели, для офиса продаж «Панорама 360°», дизайн и верстка многостраничного сайта.',
    name: 'Виктор Поdfgdfgтугин менеджер проекта <br> MARKS GROUP',
    picture: [
      { logo: reviews_slider_author_1, title: 'Ололо' },
      { logo: reviews_slider_author_2, title: 'Алала' },
    ],
  },
  {
    title: 'Отзыв клиента 3',
    text: 'Создать MGSite 3453450 ракурсов 3D визуализации, монтаж анимационного ролика для рекламных целей, создание интерактивной модели, для офиса продаж «Панорама 360°», дизайн и верстка многостраничного сайта.',
    name: 'Виктор Поdfgdfgтугин менеджер проекта <br> MARKS GROUP',
    picture: [
      { logo: reviews_slider_author_1, title: 'Тырым пырым' },
      { logo: reviews_slider_author_2, title: 'Пхпхппх' },
    ],
  },
  {
    title: 'Отзыв  MGSite клиента 4',
    text: 'Создать 3453450 ракурсов 3D визуализации, монтаж анимационного ролика для рекламных целей, создание интерактивной модели, для офиса продаж «Панорама 360°», дизайн и верстка многостраничного сайта.',
    name: 'Виктор Поdfgdfgтугин менеджер проекта <br> MARKS GROUP',
    picture: [
      { logo: reviews_slider_author_1, title: 'Тырым пырым' },
      { logo: reviews_slider_author_2, title: 'Пхпхппх' },
    ],
  },
  {
    title: 'Отзыв клиента 5',
    text: 'Создать MGSite 3453450 ракурсов 3D визуализации, монтаж анимационного ролика для рекламных целей, создание интерактивной модели, для офиса продаж «Панорама 360°», дизайн и верстка многостраничного сайта.',
    name: 'Виктор Поdfgdfgтугин менеджер проекта <br> MARKS GROUP',
    picture: [
      { logo: reviews_slider_author_1, title: 'Тырым пырым' },
      { logo: reviews_slider_author_2, title: 'Пхпхппх' },
    ],
  },
];

export default function CaseMarkssite() {
  return (
    <main>
      <CasesIntro contentCasesIntro={contentCasesIntro} />
      <Text title={contentText[0].title} text={contentText[0].text} />
      <Softwar items={contentSoftwar} />
      <Text title={contentText[1].title} text={contentText[1].text} />
      <Text title={contentText[2].title} text={contentText[2].text} />
      <Picture src={picture} />
      <VideoHorizontal videoUrl={video_horizontal} />
      <ReviewsSlider items={contentReviews} />
      <CasesItems type="web" />
    </main>
  );
}
