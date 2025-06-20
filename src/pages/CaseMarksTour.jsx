import '../App.scss';
import { Link } from 'react-router-dom';

import CasesIntro from '../components/CasesIntro/CasesIntro';
import Text from '../components/Text/Text';
import Softwar from '../components/Softwar/Softwar';
import CasesSliderFull from '../components/CasesSliderFull/CasesSliderFull';
import Picture from '../components/Picture/Picture';
import CaseIframe from '../components/CaseIframe/CaseIframe';
import ReviewsSlider from '../components/ReviewsSlider/ReviewsSlider';
import CasesItems from '../components/CasesItems/CasesItems';
import softwarLogos from '../constants/softwarLogos';

// Импорты изображений для CasesIntro
import case_intro_picture_jpg from '../assets/images/case-intro-markstour.jpg';
import case_intro_picture_webp from '../assets/images/case-intro-markstour.webp';
import case_intro_picture_avif from '../assets/images/case-intro-markstour.avif';

// Импорты изображений для Picture
import picture_jpg from '../assets/images/picture-markstour.jpg';
import picture_webp from '../assets/images/picture-markstour.webp';
import picture_avif from '../assets/images/picture-markstour.avif';

// Импорты изображений для CaseIframe
import case_iframe_preview_image_jpg from '../assets/images/case-iframe-markstour.jpg';
import case_iframe_preview_image_webp from '../assets/images/case-iframe-markstour.webp';
import case_iframe_preview_image_avif from '../assets/images/case-iframe-markstour.avif';

// Импорты изображений для ReviewsSlider
import reviews_slider_author_1 from '../assets/images/reviews-slider-1.svg';
import reviews_slider_author_2_jpg from '../assets/images/reviews-slider-4.jpg';
import reviews_slider_author_2_webp from '../assets/images/reviews-slider-4.webp';
import reviews_slider_author_2_avif from '../assets/images/reviews-slider-4.avif';
import reviews_slider_author_3_jpg from '../assets/images/reviews-slider-5.jpg';
import reviews_slider_author_3_webp from '../assets/images/reviews-slider-5.webp';
import reviews_slider_author_3_avif from '../assets/images/reviews-slider-5.avif';

// Импорты изображений для CasesSliderFull
import case_slider_full_picture_1_jpg from '../assets/images/cases-slider-full-markstour-1.jpg';
import case_slider_full_picture_1_webp from '../assets/images/cases-slider-full-markstour-1.webp';
import case_slider_full_picture_1_avif from '../assets/images/cases-slider-full-markstour-1.avif';
import case_slider_full_picture_2_jpg from '../assets/images/cases-slider-full-markstour-2.jpg';
import case_slider_full_picture_2_webp from '../assets/images/cases-slider-full-markstour-2.webp';
import case_slider_full_picture_2_avif from '../assets/images/cases-slider-full-markstour-2.avif';
import case_slider_full_picture_3_jpg from '../assets/images/cases-slider-full-markstour-3.jpg';
import case_slider_full_picture_3_webp from '../assets/images/cases-slider-full-markstour-3.webp';
import case_slider_full_picture_3_avif from '../assets/images/cases-slider-full-markstour-3.avif';
import case_slider_full_picture_4_jpg from '../assets/images/cases-slider-full-markstour-4.jpg';
import case_slider_full_picture_4_webp from '../assets/images/cases-slider-full-markstour-4.webp';
import case_slider_full_picture_4_avif from '../assets/images/cases-slider-full-markstour-4.avif';
import case_slider_full_picture_5_jpg from '../assets/images/cases-slider-full-markstour-5.jpg';
import case_slider_full_picture_5_webp from '../assets/images/cases-slider-full-markstour-5.webp';
import case_slider_full_picture_5_avif from '../assets/images/cases-slider-full-markstour-5.avif';

const text = [
  {
    title: 'Задача',
    text: (
      <>
        Разработать тур по объекту в рекламных целях в виде интерактивной 3D визуализации для офиса продаж <Link to="https://marks-tour.ru/">"Панорама 360".</Link>
      </>
    ),
  },
  {
    title: '3D визуализация',
    text: 'Создано 10 ракурсов 3D визуализаций, смонтирован анимационный ролик, создана интерактивная модель, разработан дизайн и сделана верстка многостраничного сайта.',
  },
  {
    title: 'Интерфейс',
    text: 'Спроектирован интерфейс с адаптивами для мобильных устройств и планшета. Переключение между темной и светлой темами. Перемещение по плану объекта, просмотр визуализаций и информации о мебели. Функционал перехода на сайты производителей.',
  },
  {
    title: 'VR',
    text: 'Реализована система VR тура, с возможностью "передвигаться" по объекту и оценивать предлагаемые услуги и товары с компьютера или мобильных устройств, без дополнительного технического обеспечения.',
  },
];

const contentSoftwar = [softwarLogos.tree_d_max, softwarLogos.figma, softwarLogos.blender, softwarLogos.unreal];

const contentCasesIntro = {
  title: 'Шоурум-тур',
  subtitle: 'Панорама 360° с WEB интерфейсом, VR',
  tags: ['Панорама 360°', 'VR', 'WEB интерфейс', 'UX/UI'],
  src: {
    url: 'https://marks-tour.ru/',
    title: 'Перейти на сайт',
  },
  picture_intro: {
    img: case_intro_picture_jpg,
    webp: case_intro_picture_webp,
    avif: case_intro_picture_avif,
  },
  about: [
    {
      topic: 'Клиент',
      desc: 'MARKS GROUP',
    },
    {
      topic: 'Платформа',
      desc: 'WEB / DESKTOP',
    },
    {
      topic: 'Команда',
      desc: 'Разработчик VR, UX/UI дизайнер, Frontend Разработчик',
    },
    {
      topic: 'Что сделано',
      desc: 'Панорама 360, VR приложение',
    },
  ],
};

const contentReviews = [
  {
    title: 'Отзыв клиента',
    text: 'Грамотно выстроенная коммуникация в проекте, всегда делятся статусом, оперативное решение возникающих проблем. Спасибо.',
    name: 'Никита Коньков<br> менеджер проекта MARKS GROUP',
    picture: [
      { logo: { img: reviews_slider_author_1 }, title: 'Манагер' },
      {
        logo: {
          img: reviews_slider_author_2_jpg,
          webp: reviews_slider_author_2_webp,
          avif: reviews_slider_author_2_avif,
        },
        title: 'Клиент',
      },
    ],
  },
  {
    title: 'Отзыв клиента',
    text: 'Коллеги слушают и слышат. Результат именно тот, который я ожидал',
    name: 'Роман Богданов<br> Заместитель генерального директора MARKS GROUP',
    picture: [
      { logo: { img: reviews_slider_author_1 }, title: 'Манагер' },
      {
        logo: {
          img: reviews_slider_author_3_jpg,
          webp: reviews_slider_author_3_webp,
          avif: reviews_slider_author_3_avif,
        },
        title: 'Клиент',
      },
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
        objectFit: 'cover', // Исправлено: objectfit -> objectFit
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
        height: '100%',
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
        height: '100%',
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
        height: '100%',
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
        height: '100%',
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

export default function CaseMarksTour() {
  return (
    <main>
      <CasesIntro contentCasesIntro={contentCasesIntro} />
      <Text title={text[0].title} text={text[0].text} />
      <Softwar items={contentSoftwar} />
      <Text title={text[1].title} text={text[1].text} />
      <CasesSliderFull items={case_slider_full_content_1} />
      <Text title={text[2].title} text={text[2].text} />
      <Picture src={contentPicture} />
      <CaseIframe
        iframeProps={{
          src: 'https://marks-tour.ru/',
          sandbox: 'allow-same-origin allow-scripts',
          frameBorder: '0',
          allowFullScreen: true,
        }}
        previewSrc={caseIframePreview}
        mobilePreviewSrc={caseIframePreview}
      />
      <Text title={text[3].title} text={text[3].text} />
      <ReviewsSlider items={contentReviews} />
      <CasesItems type="web" excludeId="markstour" />
    </main>
  );
}
