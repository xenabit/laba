import '../App.scss';

import CasesIntro from '../components/CasesIntro/CasesIntro';
import Text from '../components/Text/Text';
import Softwar from '../components/Softwar/Softwar';
import CasesSliderFull from '../components/CasesSliderFull/CasesSliderFull';
import Picture from '../components/Picture/Picture';
import CaseIframe from '../components/CaseIframe/CaseIframe';
import ReviewsSlider from '../components/ReviewsSlider/ReviewsSlider';
import VideoHorizontal from '../components/VideoHorizontal/VideoHorizontal';
import CasesItems from '../components/CasesItems/CasesItems';

import { projects } from '../constants/projects';

import picture from '../assets/images/picture-markstour.jpg';
import case_intro_picture from '../assets/images/case-intro-markstour.jpg';
import softwarLogos from '../constants/softwarLogos';

import case_iframe_preview_image from '../assets/images/case-iframe-markstour.jpg';
import reviews_slider_author_1 from '../assets/images/reviews-slider-1.svg';
import reviews_slider_author_2 from '../assets/images/reviews-slider-2.jpg';
import case_slider_full_picture_1 from '../assets/images/cases-slider-full-markstour-1.jpg';
import case_slider_full_picture_2 from '../assets/images/cases-slider-full-markstour-2.jpg';
import case_slider_full_picture_3 from '../assets/images/cases-slider-full-markstour-3.jpg';
import case_slider_full_picture_4 from '../assets/images/cases-slider-full-markstour-4.jpg';
import case_slider_full_picture_5 from '../assets/images/cases-slider-full-markstour-5.jpg';
import { object } from 'framer-motion/client';

const text = [
  {
    title: 'VR',
    text: 'Создать 10 ракурсов 3D визуализации, монтаж анимационного ролика для рекламных целей, создание интерактивной модели, для офиса продаж «Панорама 360°», дизайн и верстка многостраничного сайта.',
  },
  {
    title: '3D визуализация',
    text: 'Создать 10 ракурсов 3D визуализации, монтаж анимационного ролика для рекламных целей, создание интерактивной модели, для офиса продаж «Панорама 360°», дизайн и верстка многостраничного сайта.',
  },
  {
    title: 'Интерфейс',
    text: 'Создать 10 ракурсов 3D визуализации, монтаж анимационного ролика для рекламных целей, создание интерактивной модели, для офиса продаж «Панорама 360°», дизайн и верстка многостраничного сайта.',
  },
  {
    title: 'vr',
    text: 'Создать 10 ракурсов 3D визуализации, монтаж анимационного ролика для рекламных целей, создание интерактивной модели, для офиса продаж «Панорама 360°», дизайн и верстка многостраничного сайта.',
  },
];

const contentSoftwar = [softwarLogos.tree_d_max, softwarLogos.figma, softwarLogos.blender, softwarLogos.unreal];

const contentCasesIntro = {
  title: 'MARKS-TOUR',
  subtitle: 'Панорама 360° с WEB интерфейсом, VR',
  tags: ['Панорама 360°', 'VR', 'WEB интерфейс', 'UX/UI'],
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

const case_slider_full_content_1 = {
  sizes: {
    width: '100%',
  },

  pictures: [
    {
      sizes: {
        width: '100%',
        height: '100%',
        objectfit: 'cover',
      },
      id: '1_1',
      picture: case_slider_full_picture_1,
    },
    {
      sizes: {
        width: '100%',
        height: '100%',
        objectfit: 'cover',
      },
      id: '1_2',
      picture: case_slider_full_picture_2,
    },
    {
      sizes: {
        width: '100%',
        height: '100%',
        objectfit: 'cover',
      },
      id: '1_3',
      picture: case_slider_full_picture_3,
    },
    {
      sizes: {
        width: '100%',
        height: '100%',
        objectfit: 'cover',
      },
      id: '1_4',
      picture: case_slider_full_picture_4,
    },
    {
      sizes: {
        width: '100%',
        height: '100%',
      },
      id: '1_5',
      picture: case_slider_full_picture_5,
    },
  ],
};

export default function CaseMarksTour() {
  return (
    <main>
      <CasesIntro contentCasesIntro={contentCasesIntro} />
      <Text title={text[0].title} text={text[0].text} />
      <Softwar items={contentSoftwar} />
      <Text title={text[1].title} text={text[1].text} />
      <CasesSliderFull items={case_slider_full_content_1} />
      <Text title={text[2].title} text={text[2].text} />
      <Picture src={picture} />
      <CaseIframe
        iframeProps={{
          src: 'https://marks-tour.ru/',
          sandbox: 'allow-same-origin allow-scripts',
          frameBorder: '0',
          allowFullScreen: true,
        }}
        previewSrc={case_iframe_preview_image}
        mobilePreviewSrc={case_iframe_preview_image}
      />

      <Text title={text[3].title} text={text[3].text} />
      <VideoHorizontal videoUrl="https://rutube.ru/video/1c6a32ff34498a5cff63eecc7f257d74/?r=wd" />
      <ReviewsSlider items={contentReviews} />
      <CasesItems type="web" excludeId="markstour" />
    </main>
  );
}
