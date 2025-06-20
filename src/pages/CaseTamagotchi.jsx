import '../App.scss';

import CasesIntro from '../components/CasesIntro/CasesIntro';
import Text from '../components/Text/Text';
import Softwar from '../components/Softwar/Softwar';
import Picture from '../components/Picture/Picture';
import ReviewsSlider from '../components/ReviewsSlider/ReviewsSlider';
import CasesItems from '../components/CasesItems/CasesItems';
import CaseIframe from '../components/CaseIframe/CaseIframe';
import CasesSliderFull from '../components/CasesSliderFull/CasesSliderFull';

import softwarLogos from '../constants/softwarLogos';

// Импорты изображений для CasesIntro
import case_intro_picture_jpg from '../assets/images/case-intro-tamtam.jpg';
import case_intro_picture_webp from '../assets/images/case-intro-tamtam.webp';
import case_intro_picture_avif from '../assets/images/case-intro-tamtam.avif';

// Импорты изображений для Picture
import picture_svg from '../assets/images/picture-tamtam.svg';

// Импорты изображений для CaseIframe
import case_iframe_preview_image_jpg from '../assets/images/case-iframe-canon.jpg';
import case_iframe_preview_image_webp from '../assets/images/case-iframe-canon.webp';
import case_iframe_preview_image_avif from '../assets/images/case-iframe-canon.avif';

// Импорты изображений для ReviewsSlider
import reviews_slider_author_1 from '../assets/images/reviews-slider-1.svg';
import reviews_slider_author_2_jpg from '../assets/images/reviews-slider-2.jpg';
import reviews_slider_author_2_webp from '../assets/images/reviews-slider-2.webp';
import reviews_slider_author_2_avif from '../assets/images/reviews-slider-2.avif';

// Импорты фоновых изображений
import case_slider_bg from '../assets/images/case-slider-bg-tamtam-1.svg';
import case_slider_full_bg from '../assets/images/case-slider-full-bg-tamtam-1.svg';

// Импорты изображений для CasesSliderFull (первый набор)
import case_slider_full_picture_1 from '../assets/images/cases-slider-full-tamtam-1.svg';
import case_slider_full_picture_2_jpg from '../assets/images/cases-slider-full-tamtam-2.jpg';
import case_slider_full_picture_2_webp from '../assets/images/cases-slider-full-tamtam-2.webp';
import case_slider_full_picture_2_avif from '../assets/images/cases-slider-full-tamtam-2.avif';
import case_slider_full_picture_3_jpg from '../assets/images/cases-slider-full-tamtam-3.jpg';
import case_slider_full_picture_3_webp from '../assets/images/cases-slider-full-tamtam-3.webp';
import case_slider_full_picture_3_avif from '../assets/images/cases-slider-full-tamtam-3.avif';
import case_slider_full_picture_4_jpg from '../assets/images/cases-slider-full-tamtam-4.jpg';
import case_slider_full_picture_4_webp from '../assets/images/cases-slider-full-tamtam-4.webp';
import case_slider_full_picture_4_avif from '../assets/images/cases-slider-full-tamtam-4.avif';
import case_slider_full_picture_5_jpg from '../assets/images/cases-slider-full-tamtam-5.jpg';
import case_slider_full_picture_5_webp from '../assets/images/cases-slider-full-tamtam-5.webp';
import case_slider_full_picture_5_avif from '../assets/images/cases-slider-full-tamtam-5.avif';

// Импорты изображений для CasesSliderFull (второй набор)
import case_slider_full_picture_1_2_jpg from '../assets/images/cases-slider-full-tamtam-1-2.jpg';
import case_slider_full_picture_1_2_webp from '../assets/images/cases-slider-full-tamtam-1-2.webp';
import case_slider_full_picture_1_2_avif from '../assets/images/cases-slider-full-tamtam-1-2.avif';
import case_slider_full_picture_2_2_jpg from '../assets/images/cases-slider-full-tamtam-2-2.jpg';
import case_slider_full_picture_2_2_webp from '../assets/images/cases-slider-full-tamtam-2-2.webp';
import case_slider_full_picture_2_2_avif from '../assets/images/cases-slider-full-tamtam-2-2.avif';
import case_slider_full_picture_3_2_jpg from '../assets/images/cases-slider-full-tamtam-3-2.jpg';
import case_slider_full_picture_3_2_webp from '../assets/images/cases-slider-full-tamtam-3-2.webp';
import case_slider_full_picture_3_2_avif from '../assets/images/cases-slider-full-tamtam-3-2.avif';

// Импорты изображений для CasesSliderFull (третий набор)
import case_slider_full_picture_1_3_jpg from '../assets/images/cases-slider-full-tamtam-1-3.jpg';
import case_slider_full_picture_1_3_webp from '../assets/images/cases-slider-full-tamtam-1-3.webp';
import case_slider_full_picture_1_3_avif from '../assets/images/cases-slider-full-tamtam-1-3.avif';
import case_slider_full_picture_2_3_jpg from '../assets/images/cases-slider-full-tamtam-2-3.jpg';
import case_slider_full_picture_2_3_webp from '../assets/images/cases-slider-full-tamtam-2-3.webp';
import case_slider_full_picture_2_3_avif from '../assets/images/cases-slider-full-tamtam-2-3.avif';
import case_slider_full_picture_3_3_jpg from '../assets/images/cases-slider-full-tamtam-3-3.jpg';
import case_slider_full_picture_3_3_webp from '../assets/images/cases-slider-full-tamtam-3-3.webp';
import case_slider_full_picture_3_3_avif from '../assets/images/cases-slider-full-tamtam-3-3.avif';

const contentCasesIntro = {
  title: 'Тамагочи',
  subtitle: 'Гиперказуальная игра',
  tags: ['WEB интерфейс', 'UX/UI', 'Административная панель'],
  src: {},
  picture_intro: {
    img: case_intro_picture_jpg,
    webp: case_intro_picture_webp,
    avif: case_intro_picture_avif,
  },
  about: [
    {
      topic: 'Клиент',
      desc: 'LABA',
    },
    {
      topic: 'Платформа',
      desc: 'Кроссплатформенное',
    },
    {
      topic: 'Команда',
      desc: 'Разработчик Unreal Engine, PM, UX/UI дизайнеры',
    },
    {
      topic: 'Что сделано',
      desc: 'Приложение с игровой механикой',
    },
  ],
};

const contentText = [
  { title: 'Задача', text: 'Создать гиперказуальную игру Тамагочи.???? ' },
  {
    title: 'Поиски оьраза',
    text: 'Команда провела большую работу, что бы подобрать и оформить механику игры, найти образ персонажа который призван умилять и забавлять пользователей, ознакомится с творческими поисками можно ниже. ',
  },
  {
    title: 'Дизайн',
    text: 'Мы за гибкость, поэтому для игры разработано 4 цветовые темы, 3 рассчитаны на любителей пастельных тонов, а четверная тема сезонная приуроченная к игровым событиям, ивентам. Пользователь сам может этим управлять.????',
  },
  { title: 'Разработка', text: 'О кроссплатформе анриле и тд.' },
  { title: 'Результаты', text: '??????' },
];

const contentSoftwar = [softwarLogos.unreal, softwarLogos.blender, softwarLogos.figma];

const contentPicture = {
  img: picture_svg,
};

const caseIframePreview = {
  img: case_iframe_preview_image_jpg,
  webp: case_iframe_preview_image_webp,
  avif: case_iframe_preview_image_avif,
};

const contentReviews = [
  {
    title: 'Отзыв клиента MG',
    text: 'Создать MGSite 10 ракурсов 3D визуализации, монтаж анимационного ролика для рекламных целей, создание интерактивной модели, для офиса продаж «Панорама 360°», дизайн и верстка многостраничного сайта.',
    name: 'Виктор Потугин<br> менеджер проекта MARKS GROUP',
    picture: [
      { logo: { img: reviews_slider_author_1 }, title: 'Манагер' },
      { logo: { img: reviews_slider_author_2_jpg, webp: reviews_slider_author_2_webp, avif: reviews_slider_author_2_avif }, title: 'Клиент' },
      { logo: { img: reviews_slider_author_1 }, title: 'Манагер' },
      { logo: { img: reviews_slider_author_2_jpg, webp: reviews_slider_author_2_webp, avif: reviews_slider_author_2_avif }, title: 'Клиент' },
      { logo: { img: reviews_slider_author_1 }, title: 'Манагер' },
    ],
  },
  {
    title: 'Отзыв клиента 2',
    text: 'Создать MGSite  3453450 ракурсов 3D визуализации, монтаж анимационного ролика для рекламных целей, создание интерактивной модели, для офиса продаж «Панорама 360°», дизайн и верстка многостраничного сайта.',
    name: 'Виктор Поdfgdfgтугин менеджер проекта <br> MARKS GROUP',
    picture: [
      { logo: { img: reviews_slider_author_1 }, title: 'Ололо' },
      { logo: { img: reviews_slider_author_2_jpg, webp: reviews_slider_author_2_webp, avif: reviews_slider_author_2_avif }, title: 'Алала' },
    ],
  },
  {
    title: 'Отзыв клиента 3',
    text: 'Создать MGSite 3453450 ракурсов 3D визуализации, монтаж анимационного ролика для рекламных целей, создание интерактивной модели, для офиса продаж «Панорама 360°», дизайн и верстка многостраничного сайта.',
    name: 'Виктор Поdfgdfgтугин менеджер проекта <br> MARKS GROUP',
    picture: [
      { logo: { img: reviews_slider_author_1 }, title: 'Тырым пырым' },
      { logo: { img: reviews_slider_author_2_jpg, webp: reviews_slider_author_2_webp, avif: reviews_slider_author_2_avif }, title: 'Пхпхппх' },
    ],
  },
  {
    title: 'Отзыв  MGSite клиента 4',
    text: 'Создать 3453450 ракурсов 3D визуализации, монтаж анимационного ролика для рекламных целей, создание интерактивной модели, для офиса продаж «Панорама 360°», дизайн и верстка многостраничного сайта.',
    name: 'Виктор Поdfgdfgтугин менеджер проекта <br> MARKS GROUP',
    picture: [
      { logo: { img: reviews_slider_author_1 }, title: 'Тырым пырым' },
      { logo: { img: reviews_slider_author_2_jpg, webp: reviews_slider_author_2_webp, avif: reviews_slider_author_2_avif }, title: 'Пхпхппх' },
    ],
  },
  {
    title: 'Отзыв клиента 5',
    text: 'Создать MGSite 3453450 ракурсов 3D визуализации, монтаж анимационного ролика для рекламных целей, создание интерактивной модели, для офиса продаж «Панорама 360°», дизайн и верстка многостраничного сайта.',
    name: 'Виктор Поdfgdfgтугин менеджер проекта <br> MARKS GROUP',
    picture: [
      { logo: { img: reviews_slider_author_1 }, title: 'Тырым пырым' },
      { logo: { img: reviews_slider_author_2_jpg, webp: reviews_slider_author_2_webp, avif: reviews_slider_author_2_avif }, title: 'Пхпхппх' },
    ],
  },
];

const case_slider_full_content_1 = {
  sizes: {
    width: '100%',
    height: '100%',
  },
  pictures: [
    {
      sizes: {
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
      },
      id: '1_1',
      picture: {
        img: case_slider_full_picture_1,
      },
    },
    {
      sizes: {
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
      },
      id: '1_2',
      picture: {
        img: case_slider_full_picture_2_jpg,
        webp: case_slider_full_picture_2_webp,
        avif: case_slider_full_picture_2_avif,
      },
    },
    {
      sizes: {
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
      },
      id: '1_3',
      picture: {
        img: case_slider_full_picture_3_jpg,
        webp: case_slider_full_picture_3_webp,
        avif: case_slider_full_picture_3_avif,
      },
    },
    {
      sizes: {
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
      },
      id: '1_4',
      picture: {
        img: case_slider_full_picture_4_jpg,
        webp: case_slider_full_picture_4_webp,
        avif: case_slider_full_picture_4_avif,
      },
    },
    {
      sizes: {
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
      },
      id: '1_5',
      picture: {
        img: case_slider_full_picture_5_jpg,
        webp: case_slider_full_picture_5_webp,
        avif: case_slider_full_picture_5_avif,
      },
    },
  ],
};

const case_slider_full_content_2 = {
  sizes: {
    width: '100%',
    height: '100%',
  },
  pictures: [
    {
      sizes: {
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
      },
      id: '2_1',
      picture: {
        img: case_slider_full_picture_1_2_jpg,
        webp: case_slider_full_picture_1_2_webp,
        avif: case_slider_full_picture_1_2_avif,
      },
    },
    {
      sizes: {
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
      },
      id: '2_2',
      picture: {
        img: case_slider_full_picture_2_2_jpg,
        webp: case_slider_full_picture_2_2_webp,
        avif: case_slider_full_picture_2_2_avif,
      },
    },
    {
      sizes: {
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
      },
      id: '2_3',
      picture: {
        img: case_slider_full_picture_3_2_jpg,
        webp: case_slider_full_picture_3_2_webp,
        avif: case_slider_full_picture_3_2_avif,
      },
    },
  ],
};

const case_slider_full_content_3 = {
  sizes: {
    width: '100%',
    height: '100%',
  },
  pictures: [
    {
      sizes: {
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
      },
      id: '3_1',
      picture: {
        img: case_slider_full_picture_1_3_jpg,
        webp: case_slider_full_picture_1_3_webp,
        avif: case_slider_full_picture_1_3_avif,
      },
    },
    {
      sizes: {
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
      },
      id: '3_2',
      picture: {
        img: case_slider_full_picture_2_3_jpg,
        webp: case_slider_full_picture_2_3_webp,
        avif: case_slider_full_picture_2_3_avif,
      },
    },
    {
      sizes: {
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
      },
      id: '3_3',
      picture: {
        img: case_slider_full_picture_3_3_jpg,
        webp: case_slider_full_picture_3_3_webp,
        avif: case_slider_full_picture_3_3_avif,
      },
    },
  ],
};

export default function CaseTamagotchi() {
  return (
    <main>
      <CasesIntro contentCasesIntro={contentCasesIntro} />
      <Text title={contentText[0].title} text={contentText[0].text} />
      <Softwar items={contentSoftwar} />
      <CasesSliderFull items={case_slider_full_content_3} />
      <Text title={contentText[1].title} text={contentText[1].text} />
      <CaseIframe
        iframeProps={{
          src: 'https://embed.figma.com/board/9TbTy2tieMNVOZgKzqwa9q/%D0%9F%D0%BE%D1%80%D1%82%D1%84%D0%BE%D0%BB%D0%B8%D0%BE.-%D0%A1%D0%B0%D0%B9%D1%82-LABA.?node-id=7-2107&embed-host=share',
          sandbox: 'allow-same-origin allow-scripts',
          allowFullScreen: true,
        }}
        previewSrc={caseIframePreview}
        mobilePreviewSrc={caseIframePreview}
      />
      <CasesSliderFull items={case_slider_full_content_1} />
      <Text title={contentText[2].title} text={contentText[2].text} />
      <CasesSliderFull items={case_slider_full_content_2} />
      <Text title={contentText[3].title} text={contentText[3].text} />
      <Picture src={contentPicture} />
      <Text title={contentText[4].title} text={contentText[4].text} />
      <ReviewsSlider items={contentReviews} />
      <CasesItems type={['game', 'mobile']} excludeId="tamagotchi" />
    </main>
  );
}
