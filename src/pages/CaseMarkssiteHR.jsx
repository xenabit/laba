import '../App.scss';

import CasesIntro from '../components/CasesIntro/CasesIntro';
import Text from '../components/Text/Text';
import Softwar from '../components/Softwar/Softwar';
import ReviewsSlider from '../components/ReviewsSlider/ReviewsSlider';
import CasesItems from '../components/CasesItems/CasesItems';
import CasesCompareSlider from '../components/CasesCompareSlider/CasesCompareSlider';
import CasesSliderFull from '../components/CasesSliderFull/CasesSliderFull';
import softwarLogos from '/src/constants/softwarLogos';

import case_intro_picture from '/src/assets/images/case-intro-markssite-hr.jpg';
import case_compare_slider_bg from '/src/assets/images/case-compare-slider-bg-hr-1.svg';

import case_compare_slider_picture_left_1 from '/src/assets/images/cases-compare-slider-markssite-hr-left-1.jpg';
import case_compare_slider_picture_right_1 from '/src/assets/images/cases-compare-slider-markssite-hr-right-1.jpg';
import case_compare_slider_picture_left_2 from '/src/assets/images/cases-compare-slider-markssite-hr-left-2.jpg';
import case_compare_slider_picture_right_2 from '/src/assets/images/cases-compare-slider-markssite-hr-right-2.jpg';
import case_compare_slider_picture_left_3 from '/src/assets/images/cases-compare-slider-markssite-hr-left-3.jpg';
import case_compare_slider_picture_right_3 from '/src/assets/images/cases-compare-slider-markssite-hr-right-3.jpg';
import case_compare_slider_picture_left_4 from '/src/assets/images/cases-compare-slider-markssite-hr-left-4.jpg';
import case_compare_slider_picture_right_4 from '/src/assets/images/cases-compare-slider-markssite-hr-right-4.jpg';

import reviews_slider_author_1 from '/src/assets/images/reviews-slider-1.svg';
import reviews_slider_author_2 from '/src/assets/images/reviews-slider-2.jpg';

import case_slider_full_picture_1_1 from '/src/assets/images/cases-slider-full-markssite-hr-1-1.jpg';
import case_slider_full_picture_1_2 from '/src/assets/images/cases-slider-full-markssite-hr-1-2.jpg';
import case_slider_full_picture_1_3 from '/src/assets/images/cases-slider-full-markssite-hr-1-3.jpg';
import case_slider_full_picture_1_4 from '/src/assets/images/cases-slider-full-markssite-hr-1-4.jpg';
import case_slider_full_picture_2_1 from '/src/assets/images/cases-slider-full-markssite-hr-2-1.jpg';
import case_slider_full_picture_2_2 from '/src/assets/images/cases-slider-full-markssite-hr-2-2.jpg';
import case_slider_full_picture_2_3 from '/src/assets/images/cases-slider-full-markssite-hr-2-3.jpg';

const contentCasesIntro = {
  title: 'marksgroup.ru',
  subtitle: 'Корпоративный сайт компании HR портал',
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
      desc: 'Разработчик full stack, верстальщик,<br> UX/UI дизайнер, PM, контент менеджер',
    },
    {
      topic: 'Что сделано',
      desc: 'Корпоративный сайт компании, HR портал',
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
    {
      id: '1_3',
      picture_left: case_compare_slider_picture_left_3,
      picture_right: case_compare_slider_picture_right_3,
    },
    {
      id: '1_4',
      picture_left: case_compare_slider_picture_left_4,
      picture_right: case_compare_slider_picture_right_4,
    },
  ],
};

const contentText = [
  {
    title: 'Задача',
    text: 'Создать корпоративный HR сайт компании MARKS GROUP, отразить ключевые компетенции компании. Сайт должен иметь кастомную алминистративную панель, с возможность кастомизировать отдельные публикации и проекты. Фильтрация проектов по городу и направлении деятельности. А также костамизация отдельных блоков главной странцыю?????',
  },
  {
    title: 'Результаты',
    text: 'Разработан HR портал компании ??',
  },
  {
    title: 'HR портал',
    text: 'В рамках проекта был реализован собственный HR портал. В админ-панели можно заполнять вакансии, выбирать преимущества, условия работы и предложения непосредственно под кандидата. Со стороны пользователя, по этим данным есть детальная фильтрация, для удобного отслеживания подходящих вакансии.  Подробнее о кейсе читайте здесь.',
  },
  {
    title: 'HR портал',
    text: 'В рамках проекта был реализован собственный HR портал. В админ-панели можно заполнять вакансии, выбирать преимущества, условия работы и предложения непосредственно под кандидата. Со стороны пользователя, по этим данным есть детальная фильтрация, для удобного отслеживания подходящих вакансии.  Подробнее о кейсе читайте здесь.',
  },
];

const contentSoftwar = [softwarLogos.figma, softwarLogos.react, softwarLogos.nodejs];

const contentReviews = [
  {
    title: 'Отзыв клиента MG',
    text: 'Создать HR 10 ракурсов 3D визуализации, монтаж анимационного ролика для рекламных целей, создание интерактивной модели, для офиса продаж «Панорама 360°», дизайн и верстка многостраничного сайта.',
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
    text: 'Создать HRHR  3453450 ракурсов 3D визуализации, монтаж анимационного ролика для рекламных целей, создание интерактивной модели, для офиса продаж «Панорама 360°», дизайн и верстка многостраничного сайта.',
    name: 'Виктор Поdfgdfgтугин менеджер проекта <br> MARKS GROUP',
    picture: [
      { logo: reviews_slider_author_1, title: 'Ололо' },
      { logo: reviews_slider_author_2, title: 'Алала' },
    ],
  },
  {
    title: 'Отзыв клиента 3',
    text: 'Создать HRHRHR 3453450 ракурсов 3D визуализации, монтаж анимационного ролика для рекламных целей, создание интерактивной модели, для офиса продаж «Панорама 360°», дизайн и верстка многостраничного сайта.',
    name: 'Виктор Поdfgdfgтугин менеджер проекта <br> MARKS GROUP',
    picture: [
      { logo: reviews_slider_author_1, title: 'Тырым пырым' },
      { logo: reviews_slider_author_2, title: 'Пхпхппх' },
    ],
  },
  {
    title: 'Отзыв  MGSite клиента 4',
    text: 'Создать HRHRHRHR ракурсов 3D визуализации, монтаж анимационного ролика для рекламных целей, создание интерактивной модели, для офиса продаж «Панорама 360°», дизайн и верстка многостраничного сайта.',
    name: 'Виктор Поdfgdfgтугин менеджер проекта <br> MARKS GROUP',
    picture: [
      { logo: reviews_slider_author_1, title: 'Тырым пырым' },
      { logo: reviews_slider_author_2, title: 'Пхпхппх' },
    ],
  },
  {
    title: 'Отзыв клиента 5',
    text: 'Создать HRHRHRHRHR 3453450 ракурсов 3D визуализации, монтаж анимационного ролика для рекламных целей, создание интерактивной модели, для офиса продаж «Панорама 360°», дизайн и верстка многостраничного сайта.',
    name: 'Виктор Поdfgdfgтугин менеджер проекта <br> MARKS GROUP',
    picture: [
      { logo: reviews_slider_author_1, title: 'Тырым пырым' },
      { logo: reviews_slider_author_2, title: 'Пхпхппх' },
    ],
  },
];

const case_slider_full_content_1 = {
  sizes: {
    width: '100%',
  },

  pictures: [
    {
      sizes: {
        width: '100%',
        height: '100%',
      },
      id: '1_1',
      picture: case_slider_full_picture_1_1,
    },
    {
      sizes: {
        width: '100%',
        height: '100%',
      },
      id: '1_2',
      picture: case_slider_full_picture_1_2,
    },
    {
      sizes: {
        width: '100%',
        height: '100%',
      },
      id: '1_3',
      picture: case_slider_full_picture_1_3,
    },
    {
      id: '1_4',
      picture: case_slider_full_picture_1_4,
    },
  ],
};

const case_slider_full_content_2 = {
  sizes: {
    width: '100%',
  },

  pictures: [
    {
      sizes: {
        width: '100%',
        height: '100%',
      },
      id: '2_1',
      picture: case_slider_full_picture_2_1,
    },
    {
      sizes: {
        width: '100%',
        height: '100%',
      },
      id: '2_2',
      picture: case_slider_full_picture_2_2,
    },
    {
      sizes: {
        width: '100%',
        height: '100%',
      },
      id: '2_3',
      picture: case_slider_full_picture_2_3,
    },
  ],
};

export default function CaseMarkssite() {
  return (
    <main>
      <CasesIntro contentCasesIntro={contentCasesIntro} />
      <Text title={contentText[0].title} text={contentText[0].text} />
      <Softwar items={contentSoftwar} />
      <CasesSliderFull items={case_slider_full_content_1} />
      <Text title={contentText[1].title} text={contentText[1].text} />
      <CasesCompareSlider items={case_compare_slider_pictures_1} />
      <Text title={contentText[2].title} text={contentText[2].text} />
      <CasesSliderFull items={case_slider_full_content_2} />
      <Text title={contentText[3].title} text={contentText[2].text} />
      <ReviewsSlider items={contentReviews} />
      <CasesItems type="web" />
    </main>
  );
}
