import '../App.scss';

import CasesIntro from '../components/CasesIntro/CasesIntro';
import Text from '../components/Text/Text';
import Softwar from '../components/Softwar/Softwar';
import CasesSlider from '../components/CasesSlider/CasesSlider';
import Picture from '../components/Picture/Picture';
import ReviewsSlider from '../components/ReviewsSlider/ReviewsSlider';
import VideoHorizontal from '../components/VideoHorizontal/VideoHorizontal';
import CasesItems from '../components/CasesItems/CasesItems';
import CasesCompareSlider from '../components/CasesCompareSlider/CasesCompareSlider';
import CaseIframe from '../components/CaseIframe/CaseIframe';

import softwarLogos from '/src/constants/softwarLogos';

import picture from '/src/assets/images/picture-markssite.jpg';
import case_intro_picture from '/src/assets/images/case-intro-markssite.jpg';

import video_horizontal from '/src/assets/videos/video-horizontal-markssite.mp4';

import reviews_slider_author_1 from '/src/assets/images/reviews-slider-1.svg';
import reviews_slider_author_2 from '/src/assets/images/reviews-slider-2.jpg';

import case_slider_bg from '/src/assets/images/case-slider-bg-mg-1.svg';
import case_compare_slider_bg from '/src/assets/images/case-compare-slider-bg-mg-1.svg';

import case_slider_picture_left_1 from '/src/assets/images/cases-slider-markssite-left-1.png';
import case_slider_picture_right_1 from '/src/assets/images/cases-slider-markssite-right-1.png';
import case_slider_picture_left_2 from '/src/assets/images/cases-slider-markssite-left-2.png';
import case_slider_picture_right_2 from '/src/assets/images/cases-slider-markssite-right-2.png';
import case_slider_picture_left_3 from '/src/assets/images/cases-slider-markssite-left-3.png';
import case_slider_picture_right_3 from '/src/assets/images/cases-slider-markssite-right-3.png';
import case_slider_picture_left_4 from '/src/assets/images/cases-slider-markssite-left-4.png';
import case_slider_picture_right_4 from '/src/assets/images/cases-slider-markssite-right-4.png';
import case_slider_picture_left_5 from '/src/assets/images/cases-slider-markssite-left-5.png';
import case_slider_picture_right_5 from '/src/assets/images/cases-slider-markssite-right-5.png';
import case_slider_picture_left_6 from '/src/assets/images/cases-slider-markssite-left-6.png';
import case_slider_picture_right_6 from '/src/assets/images/cases-slider-markssite-right-6.png';

import case_slider_picture_left_1_2 from '/src/assets/images/cases-slider-markssite-left-1_2.png';
import case_slider_picture_right_1_2 from '/src/assets/images/cases-slider-markssite-right-1_2.png';
import case_slider_picture_left_2_2 from '/src/assets/images/cases-slider-markssite-left-2_2.png';
import case_slider_picture_right_2_2 from '/src/assets/images/cases-slider-markssite-right-2_2.png';
import case_slider_picture_left_3_2 from '/src/assets/images/cases-slider-markssite-left-3_2.png';
import case_slider_picture_right_3_2 from '/src/assets/images/cases-slider-markssite-right-3_2.png';

import case_compare_slider_picture_left_1 from '/src/assets/images/cases-compare-slider-markssite-left-1.jpg';
import case_compare_slider_picture_right_1 from '/src/assets/images/cases-compare-slider-markssite-right-1.jpg';
import case_compare_slider_picture_left_2 from '/src/assets/images/cases-compare-slider-markssite-left-2.jpg';
import case_compare_slider_picture_right_2 from '/src/assets/images/cases-compare-slider-markssite-right-2.jpg';

const contentCasesIntro = {
  title: 'marksgroup.ru',
  subtitle: 'Корпоративный сайт компании',
  tags: ['WEB интерфейс', 'UX/UI', '???'],
  src: {
    url: 'https://marks-tour.ru/',
    title: 'Перейти на сайт',
  },
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

const contentSoftwar = [softwarLogos.figma, softwarLogos.react, softwarLogos.nodejs];

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

const case_slider_pictures_1 = {
  sizes: {
    width_left: '69.61%',
    width_right: '79.74%',
  },
  bg: case_slider_bg,
  pictures: [
    {
      id: '1_1',
      picture_left: case_slider_picture_left_1,
      picture_right: case_slider_picture_right_1,
    },
    {
      id: '1_2',
      picture_left: case_slider_picture_left_2,
      picture_right: case_slider_picture_right_2,
    },
    {
      id: '1_3',
      picture_left: case_slider_picture_left_3,
      picture_right: case_slider_picture_right_3,
    },
    {
      id: '1_4',
      picture_left: case_slider_picture_left_4,
      picture_right: case_slider_picture_right_4,
    },
    {
      id: '1_5',
      picture_left: case_slider_picture_left_5,
      picture_right: case_slider_picture_right_5,
    },
    {
      id: '1_6',
      picture_left: case_slider_picture_left_6,
      picture_right: case_slider_picture_right_6,
    },
  ],
};

const case_slider_pictures_2 = {
  sizes: {
    width_left: '69.61%',
    width_right: '69.61%',
  },
  bg: case_slider_bg,
  pictures: [
    {
      id: '2_1',
      picture_left: case_slider_picture_left_1_2,
      picture_right: case_slider_picture_right_1_2,
    },
    {
      id: '2_2',
      picture_left: case_slider_picture_left_2_2,
      picture_right: case_slider_picture_right_2_2,
    },
    {
      id: '2_3',
      picture_left: case_slider_picture_left_3_2,
      picture_right: case_slider_picture_right_3_2,
    },
  ],
};

const case_compare_slider_pictures_1 = {
  bg: case_compare_slider_bg,
  pictures: [
    {
      id: '1_1',
      picture_left: case_compare_slider_picture_left_1,
      picture_right: case_compare_slider_picture_right_1,
    },
    {
      id: '1_2',
      picture_left: case_compare_slider_picture_left_2,
      picture_right: case_compare_slider_picture_right_2,
    },
  ],
};

export default function CaseMarkssite() {
  return (
    <main>
      <CasesIntro contentCasesIntro={contentCasesIntro} />
      <Text title={contentText[0].title} text={contentText[0].text} />
      <Softwar items={contentSoftwar} />
      <CasesSlider items={case_slider_pictures_1} />
      <Text title={contentText[1].title} text={contentText[1].text} />
      <Picture src={picture} />
      <Text title={contentText[2].title} text={contentText[2].text} />
      <CasesSlider items={case_slider_pictures_2} />
      <Text title={contentText[2].title} text={contentText[2].text} />
      <CasesCompareSlider items={case_compare_slider_pictures_1} />
      <VideoHorizontal videoUrl={video_horizontal} />
      <ReviewsSlider items={contentReviews} />
      <CasesItems type="web" />
    </main>
  );
}
