import '../App.scss';

import CasesIntro from '../components/CasesIntro/CasesIntro';
import Text from '../components/Text/Text';
import Softwar from '../components/Softwar/Softwar';
import Picture from '../components/Picture/Picture';
import ReviewsSlider from '../components/ReviewsSlider/ReviewsSlider';
import CasesItems from '../components/CasesItems/CasesItems';
import CaseIframe from '../components/CaseIframe/CaseIframe';
import CasesSliderFull from '../components/CasesSliderFull/CasesSliderFull';
import VideoHorizontal from '../components/VideoHorizontal/VideoHorizontal';

import softwarLogos from '../constants/softwarLogos';

// Импорты изображений для CasesIntro
import case_intro_picture_jpg from '../assets/images/case-intro-markscity.jpg';
import case_intro_picture_webp from '../assets/images/case-intro-markscity.webp';
import case_intro_picture_avif from '../assets/images/case-intro-markscity.avif';

// Импорты изображений для Picture
import picture_jpg from '../assets/images/picture-markscity.jpg';
import picture_webp from '../assets/images/picture-markscity.webp';
import picture_avif from '../assets/images/picture-markscity.avif';

// Импорты изображений для CaseIframe
import case_iframe_preview_image_jpg from '../assets/images/case-iframe-markcity.jpg';
import case_iframe_preview_image_webp from '../assets/images/case-iframe-markcity.webp';
import case_iframe_preview_image_avif from '../assets/images/case-iframe-markcity.avif';

// Импорты изображений для ReviewsSlider
import reviews_slider_author_1 from '../assets/images/reviews-slider-1.svg';
import reviews_slider_author_2_jpg from '../assets/images/reviews-slider-2.jpg';
import reviews_slider_author_2_webp from '../assets/images/reviews-slider-2.webp';
import reviews_slider_author_2_avif from '../assets/images/reviews-slider-2.avif';

// Импорты фоновых изображений
import case_slider_full_bg from '../assets/images/case-slider-full-bg-markscity-1.svg';
import case_slider_full_bg_2 from '../assets/images/case-slider-full-bg-markscity-2.svg';

// Импорты изображений для CasesSliderFull (первый набор)
import case_slider_full_picture_1_jpg from '../assets/images/cases-slider-full-markscity-1.jpg';
import case_slider_full_picture_1_webp from '../assets/images/cases-slider-full-markscity-1.webp';
import case_slider_full_picture_1_avif from '../assets/images/cases-slider-full-markscity-1.avif';
import case_slider_full_picture_2_jpg from '../assets/images/cases-slider-full-markscity-2.jpg';
import case_slider_full_picture_2_webp from '../assets/images/cases-slider-full-markscity-2.webp';
import case_slider_full_picture_2_avif from '../assets/images/cases-slider-full-markscity-2.avif';
import case_slider_full_picture_3_jpg from '../assets/images/cases-slider-full-markscity-3.jpg';
import case_slider_full_picture_3_webp from '../assets/images/cases-slider-full-markscity-3.webp';
import case_slider_full_picture_3_avif from '../assets/images/cases-slider-full-markscity-3.avif';
import case_slider_full_picture_4_jpg from '../assets/images/cases-slider-full-markscity-4.jpg';
import case_slider_full_picture_4_webp from '../assets/images/cases-slider-full-markscity-4.webp';
import case_slider_full_picture_4_avif from '../assets/images/cases-slider-full-markscity-4.avif';

// Импорты изображений для CasesSliderFull (второй набор)
import case_slider_full_picture_1_2_jpg from '../assets/images/cases-slider-full-markscity-1-2.jpg';
import case_slider_full_picture_1_2_webp from '../assets/images/cases-slider-full-markscity-1-2.webp';
import case_slider_full_picture_1_2_avif from '../assets/images/cases-slider-full-markscity-1-2.avif';
import case_slider_full_picture_2_2_jpg from '../assets/images/cases-slider-full-markscity-2-2.jpg';
import case_slider_full_picture_2_2_webp from '../assets/images/cases-slider-full-markscity-2-2.webp';
import case_slider_full_picture_2_2_avif from '../assets/images/cases-slider-full-markscity-2-2.avif';
import case_slider_full_picture_3_2_jpg from '../assets/images/cases-slider-full-markscity-3-2.jpg';
import case_slider_full_picture_3_2_webp from '../assets/images/cases-slider-full-markscity-3-2.webp';
import case_slider_full_picture_3_2_avif from '../assets/images/cases-slider-full-markscity-3-2.avif';
import case_slider_full_picture_4_2_jpg from '../assets/images/cases-slider-full-markscity-4-2.jpg';
import case_slider_full_picture_4_2_webp from '../assets/images/cases-slider-full-markscity-4-2.webp';
import case_slider_full_picture_4_2_avif from '../assets/images/cases-slider-full-markscity-4-2.avif';
import case_slider_full_picture_5_2_jpg from '../assets/images/cases-slider-full-markscity-5-2.jpg';
import case_slider_full_picture_5_2_webp from '../assets/images/cases-slider-full-markscity-5-2.webp';
import case_slider_full_picture_5_2_avif from '../assets/images/cases-slider-full-markscity-5-2.avif';
import case_slider_full_picture_7_2_jpg from '../assets/images/cases-slider-full-markscity-7-2.jpg';
import case_slider_full_picture_7_2_webp from '../assets/images/cases-slider-full-markscity-7-2.webp';
import case_slider_full_picture_7_2_avif from '../assets/images/cases-slider-full-markscity-7-2.avif';

// Импорт видео
import video from '../assets/videos/vr.mp4';

const contentCasesIntro = {
  title: 'MARKS-CITY',
  subtitle: 'Десктоп игра для интерактивного стола. Зодчество 2023',
  tags: ['Игровая разработка', '3D визуализация', '3D моделирование', 'UX/UI'],
  src: {},
  picture_intro: {
    img: case_intro_picture_jpg,
    webp: case_intro_picture_webp,
    avif: case_intro_picture_avif,
  },
  about: [
    {
      topic: 'Клиент',
      desc: 'MARKSGROUP',
    },
    {
      topic: 'Платформа',
      desc: 'Desktop',
    },
    {
      topic: 'Команда',
      desc: 'Разработчик Unreal Engine, PM, UX/UI дизайнеры',
    },
    {
      topic: 'Что сделано',
      desc: 'Десктоп игра для интерактивного стола',
    },
  ],
};

const contentText = [
  {
    title: 'Задача',
    text: 'Разработать игру для интерактивного стола на выставку "Зодчество 24". Отразить ценности и продемонстрировать успехи компании MARKSGROUP.',
  },
  {
    title: 'Поиски образа',
    text: 'Проведена большая работа по выбору и оформлению механики игры, визуализации образа города и формирования процесса игры и целей игрока',
  },
  {
    title: 'Визуальный симбиоз',
    text: 'Собрать реальные проекты компании, разработать 3D модели зданий и объединить с игровым миром под общий стиль.',
  },
  {
    title: 'Разработка',
    text: 'Продумать и реализовать логику процесса, оптимизировать код под требования оборудования, разработать таблицу игроков и создать возможность сохранения результатов игровой сессии',
  },
];

const contentSoftwar = [softwarLogos.unreal, softwarLogos.blender, softwarLogos.figma, softwarLogos.tree_d_max, softwarLogos.github];

const contentPicture = {
  img: picture_jpg,
  webp: picture_webp,
  avif: picture_avif,
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
    width: '85%',
    height: 'auto',
    objectFit: 'cover',
  },
  bg: case_slider_full_bg,
  pictures: [
    {
      sizes: {
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
      },
      id: '1_1',
      picture: {
        img: case_slider_full_picture_1_jpg,
        webp: case_slider_full_picture_1_webp,
        avif: case_slider_full_picture_1_avif,
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
  ],
};

const case_slider_full_content_2 = {
  sizes: {
    width: '85%',
    height: 'auto',
    objectFit: 'cover',
  },
  bg: case_slider_full_bg_2,
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
    {
      sizes: {
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
      },
      id: '2_4',
      picture: {
        img: case_slider_full_picture_4_2_jpg,
        webp: case_slider_full_picture_4_2_webp,
        avif: case_slider_full_picture_4_2_avif,
      },
    },
    {
      sizes: {
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
      },
      id: '2_5',
      picture: {
        img: case_slider_full_picture_5_2_jpg,
        webp: case_slider_full_picture_5_2_webp,
        avif: case_slider_full_picture_5_2_avif,
      },
    },
    {
      sizes: {
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
      },
      id: '2_7',
      picture: {
        img: case_slider_full_picture_7_2_jpg,
        webp: case_slider_full_picture_7_2_webp,
        avif: case_slider_full_picture_7_2_avif,
      },
    },
  ],
};

export default function CaseMarksCity() {
  return (
    <main>
      <CasesIntro contentCasesIntro={contentCasesIntro} />
      <Text title={contentText[0].title} text={contentText[0].text} />
      <Softwar items={contentSoftwar} />
      <Picture src={contentPicture} />
      <Text title={contentText[1].title} text={contentText[1].text} />
      <CaseIframe
        iframeProps={{
          src: 'https://embed.figma.com/board/9TbTy2tieMNVOZgKzqwa9q/%D0%9F%D0%BE%D1%80%D1%82%D1%84%D0%BE%D0%BB%D0%B8%D0%BE.-%D0%A1%D0%B0%D0%B9%D1%82-LABA.?node-id=11-8935&embed-host=share',
          sandbox: 'allow-same-origin allow-scripts',
          allowFullScreen: true,
        }}
        previewSrc={caseIframePreview}
        mobilePreviewSrc={caseIframePreview}
      />
      <CasesSliderFull items={case_slider_full_content_1} />
      <Text title={contentText[2].title} text={contentText[2].text} />
      <CasesSliderFull items={case_slider_full_content_2} />
      <ReviewsSlider items={contentReviews} />
      <VideoHorizontal videoUrl={video} />
      <CasesItems type={['game', 'desktop']} excludeId="markscity" />
    </main>
  );
}
