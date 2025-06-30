import '../App.scss';

import CasesIntro from '../components/CasesIntro/CasesIntro';
import Text from '../components/Text/Text';
import Softwar from '../components/Softwar/Softwar';
import CasesSliderVideo from '../components/CasesSliderVideo/CasesSliderVideo';
import CaseIframe from '../components/CaseIframe/CaseIframe';
import CasesSliderFull from '../components/CasesSliderFull/CasesSliderFull';
import CasesSliderScroll from '../components/CasesSliderScroll/CasesSliderScroll';
import ReviewsSlider from '../components/ReviewsSlider/ReviewsSlider';
import CasesItems from '../components/CasesItems/CasesItems';

import softwarLogos from '../constants/softwarLogos';

// Импорты изображений для CasesIntro
import case_intro_picture_jpg from '../assets/images/case-intro-canon-change.jpg';
import case_intro_picture_webp from '../assets/images/case-intro-canon-change.webp';
import case_intro_picture_avif from '../assets/images/case-intro-canon-change.avif';

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
import case_slider_bg from '../assets/images/case-slider-bg-canon-change-1.svg';
import case_slider_full_bg from '../assets/images/case-slider-full-bg-canon-change-1.svg';
import case_compare_slider_bg from '../assets/images/case-compare-slider-bg-mg-1.svg';

// Импорты видео для CasesSliderVideo
import case_slider_video_left_1 from '../assets/videos/cases-slider-video-canon-change-left-1.mp4';
import case_slider_video_right_1 from '../assets/videos/cases-slider-video-canon-change-right-1.mp4';
import case_slider_video_left_2 from '../assets/videos/cases-slider-video-canon-change-left-2.mp4';
import case_slider_video_right_2 from '../assets/videos/cases-slider-video-canon-change-right-2.mp4';
import case_slider_video_left_3 from '../assets/videos/cases-slider-video-canon-change-left-3.mp4';
import case_slider_video_right_3 from '../assets/videos/cases-slider-video-canon-change-right-3.mp4';

// Импорты изображений для CasesSliderFull (первый набор)
import case_slider_full_picture_1_jpg from '../assets/images/cases-slider-full-1.jpg';
import case_slider_full_picture_1_webp from '../assets/images/cases-slider-full-1.webp';
import case_slider_full_picture_1_avif from '../assets/images/cases-slider-full-1.avif';
import case_slider_full_picture_2_jpg from '../assets/images/cases-slider-full-2.jpg';
import case_slider_full_picture_2_webp from '../assets/images/cases-slider-full-2.webp';
import case_slider_full_picture_2_avif from '../assets/images/cases-slider-full-2.avif';
import case_slider_full_picture_3_jpg from '../assets/images/cases-slider-full-3.jpg';
import case_slider_full_picture_3_webp from '../assets/images/cases-slider-full-3.webp';
import case_slider_full_picture_3_avif from '../assets/images/cases-slider-full-3.avif';
import case_slider_full_picture_4_jpg from '../assets/images/cases-slider-full-4.jpg';
import case_slider_full_picture_4_webp from '../assets/images/cases-slider-full-4.webp';
import case_slider_full_picture_4_avif from '../assets/images/cases-slider-full-4.avif';
import case_slider_full_picture_5_jpg from '../assets/images/cases-slider-full-5.jpg';
import case_slider_full_picture_5_webp from '../assets/images/cases-slider-full-5.webp';
import case_slider_full_picture_5_avif from '../assets/images/cases-slider-full-5.avif';

// Импорты изображений для CasesSliderFull (второй набор)
import case_slider_full_picture_1_2_png from '../assets/images/cases-slider-full-1-2.png';
import case_slider_full_picture_1_2_webp from '../assets/images/cases-slider-full-1-2.webp';
import case_slider_full_picture_1_2_avif from '../assets/images/cases-slider-full-1-2.avif';
import case_slider_full_picture_2_2_png from '../assets/images/cases-slider-full-2-2.png';
import case_slider_full_picture_2_2_webp from '../assets/images/cases-slider-full-2-2.webp';
import case_slider_full_picture_2_2_avif from '../assets/images/cases-slider-full-2-2.avif';
import case_slider_full_picture_3_2_png from '../assets/images/cases-slider-full-3-2.png';
import case_slider_full_picture_3_2_webp from '../assets/images/cases-slider-full-3-2.webp';
import case_slider_full_picture_3_2_avif from '../assets/images/cases-slider-full-3-2.avif';
import case_slider_full_picture_4_2_png from '../assets/images/cases-slider-full-4-2.png';
import case_slider_full_picture_4_2_webp from '../assets/images/cases-slider-full-4-2.webp';
import case_slider_full_picture_4_2_avif from '../assets/images/cases-slider-full-4-2.avif';

// Импорты изображений для CasesSliderScroll
import case_slider_scroll_picture_1_2_png from '../assets/images/case-slider-scroll-1.png';
import case_slider_scroll_picture_1_2_webp from '../assets/images/case-slider-scroll-1.webp';
import case_slider_scroll_picture_1_2_avif from '../assets/images/case-slider-scroll-1.avif';
import case_slider_scroll_picture_2_2_png from '../assets/images/case-slider-scroll-2.png';
import case_slider_scroll_picture_2_2_webp from '../assets/images/case-slider-scroll-2.webp';
import case_slider_scroll_picture_2_2_avif from '../assets/images/case-slider-scroll-2.avif';
import case_slider_scroll_picture_3_2_png from '../assets/images/case-slider-scroll-3.png';
import case_slider_scroll_picture_3_2_webp from '../assets/images/case-slider-scroll-3.webp';
import case_slider_scroll_picture_3_2_avif from '../assets/images/case-slider-scroll-3.avif';

const contentCasesIntro = {
  title: 'Канон перемен',
  subtitle: 'Приложение с игровой механикой',

  src: {
    url: 'https://www.rustore.ru/catalog/app/ru.laba.iching',
    title: 'Скачать из RuStore',
  },
  tags: ['Android, IOS', 'Unreal Engine', 'UX/UI'],
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
    text: 'Создать приложение с игровой механикой на основе традиционного китайского текста «Книга перемен» датируемого 700 г до н.э. и предназначенного для «гадания», текст состоит из 64 гексаграмм. Стиль приложения должен соответствовать заявленной тематики. Иллюстративная, живая подача с анимациями.',
  },
  {
    title: 'Анализ рынка',
    text: 'Был проведен анализ приложений на платформах Android и IOS, приложения с большим скачиванием проанализировали детально, выявляя основные пользовательские пути, фитчи. Особое внимание уделили комментариям пользователей от релиза к релизу конкурентов. Подробнее с анализом можно ознакомится ниже. ',
  },
  {
    title: 'Дизайн',
    text: 'Для согласования было проработано 7 разноплановых концептов, команда искала золотую середину между каноном и чем-то еще? Посмотреть презентацию дизайн-концептов можно тут. В результате получилось живое приложение с решением в 4х цветовых темах утро/день/вечер/ночь. Зд взаимодействием и плавной умиротворяющей анимацией??????',
  },
  {
    title: 'Административная панель',
    text: 'В рамках разработки дизайна приложения были отрисованы тематические иллюстрации, которые стали символическим тандемом китайской акварельной подачи и абстрактной бумажной аппликации.  Иллюстрации легко разбираются для создания пространственной анимации и благодаря монохромному решению легко подстраиваются под цветовые темы приложения.',
  },
  {
    title: 'Разработка',
    text: 'О кроссплатформе анриле и тд.',
  },
  {
    title: 'Результаты',
    text: 'Функционал монетизации: приложение имеет возможность локального сохранения гексаграмм на устройство пользователя, результат сопровождается описанием/комментарием пользователя с визуальными маркерами и возможностью удаления, редактирования. Возможность «поделится» результата доступна пользователю в любом сценарии ведущем к результату — «гексаграмме».',
  },
];

const contentSoftwar = [softwarLogos.unreal, softwarLogos.adobe_illustrator, softwarLogos.figma];

const cases_slider_video_content = {
  bg: case_slider_bg,
  videos: [
    {
      id: '1_1',
      video_left: case_slider_video_left_1,
      video_right: case_slider_video_right_1,
    },
    {
      id: '1_2',
      video_left: case_slider_video_left_2,
      video_right: case_slider_video_right_2,
    },
    {
      id: '1_3',
      video_left: case_slider_video_left_3,
      video_right: case_slider_video_right_3,
    },
  ],
};

const caseIframePreview = {
  img: case_iframe_preview_image_jpg,
  webp: case_iframe_preview_image_webp,
  avif: case_iframe_preview_image_avif,
};

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
    {
      sizes: {
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
      },
      id: '1_6',
      picture: {
        img: case_slider_full_picture_1_jpg,
        webp: case_slider_full_picture_1_webp,
        avif: case_slider_full_picture_1_avif,
      },
    },
  ],
};

const case_slider_full_content_2 = {
  pictures: [
    {
      sizes: {
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
      },
      id: '2_1',
      picture: {
        img: case_slider_full_picture_1_2_png,
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
        img: case_slider_full_picture_2_2_png,
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
        img: case_slider_full_picture_3_2_png,
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
        img: case_slider_full_picture_4_2_png,
        webp: case_slider_full_picture_4_2_webp,
        avif: case_slider_full_picture_4_2_avif,
      },
    },
  ],
};

const case_slider_scroll_content = {
  bg: case_slider_full_bg,
  pictures: [
    {
      id: '1',
      picture: {
        img: case_slider_scroll_picture_1_2_png,
        webp: case_slider_scroll_picture_1_2_webp,
        avif: case_slider_scroll_picture_1_2_avif,
      },
    },
    {
      id: '2',
      picture: {
        img: case_slider_scroll_picture_2_2_png,
        webp: case_slider_scroll_picture_2_2_webp,
        avif: case_slider_scroll_picture_2_2_avif,
      },
    },
    {
      id: '3',
      picture: {
        img: case_slider_scroll_picture_3_2_png,
        webp: case_slider_scroll_picture_3_2_webp,
        avif: case_slider_scroll_picture_3_2_avif,
      },
    },
  ],
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

export default function CaseMarkssite() {
  return (
    <main>
      <CasesIntro contentCasesIntro={contentCasesIntro} />
      <Text title={contentText[0].title} text={contentText[0].text} />
      <Softwar items={contentSoftwar} />
      <CasesSliderVideo items={cases_slider_video_content} />
      <Text title={contentText[1].title} text={contentText[1].text} />
      <CaseIframe
        iframeProps={{
          src: 'https://embed.figma.com/board/9TbTy2tieMNVOZgKzqwa9q/%D0%9F%D0%BE%D1%80%D1%82%D1%84%D0%BE%D0%BB%D0%B8%D0%BE.-%D0%A1%D0%B0%D0%B9%D1%82-LABA.?node-id=0-1&embed-host=share',
          sandbox: 'allow-same-origin allow-scripts',
          allowFullScreen: true,
        }}
        previewSrc={caseIframePreview}
        mobilePreviewSrc={caseIframePreview}
      />
      <Text title={contentText[2].title} text={contentText[2].text} />
      <CasesSliderFull items={case_slider_full_content_1} />
      <Text title={contentText[3].title} text={contentText[3].text} />
      <CasesSliderFull items={case_slider_full_content_2} />
      <Text title={contentText[4].title} text={contentText[4].text} />
      <CasesSliderScroll items={case_slider_scroll_content} />
      <Text title={contentText[5].title} text={contentText[5].text} />
      <ReviewsSlider items={contentReviews} />
      <CasesItems type={['game', 'mobile']} excludeId="canon-change" />
    </main>
  );
}
