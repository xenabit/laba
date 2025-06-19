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
import picture from '../assets/images/picture-markscity.jpg';
import video from '../assets/videos/vr.mp4';

import case_intro_picture from '../assets/images/case-intro-markscity.jpg';
import reviews_slider_author_1 from '../assets/images/reviews-slider-1.svg';
import reviews_slider_author_2 from '../assets/images/reviews-slider-2.jpg';
import case_slider_full_bg from '../assets/images/case-slider-full-bg-markscity-1.svg';
import case_slider_full_bg_2 from '../assets/images/case-slider-full-bg-markscity-2.svg';
import case_slider_full_picture_1 from '../assets/images/cases-slider-full-markscity-1.png';
import case_slider_full_picture_2 from '../assets/images/cases-slider-full-markscity-2.png';
import case_slider_full_picture_3 from '../assets/images/cases-slider-full-markscity-3.png';
import case_slider_full_picture_4 from '../assets/images/cases-slider-full-markscity-4.png';
import case_slider_full_picture_1_2 from '../assets/images/cases-slider-full-markscity-1-2.png';
import case_slider_full_picture_2_2 from '../assets/images/cases-slider-full-markscity-2-2.png';
import case_slider_full_picture_3_2 from '../assets/images/cases-slider-full-markscity-3-2.png';
import case_slider_full_picture_4_2 from '../assets/images/cases-slider-full-markscity-4-2.png';
import case_slider_full_picture_5_2 from '../assets/images/cases-slider-full-markscity-5-2.png';
import case_slider_full_picture_7_2 from '../assets/images/cases-slider-full-markscity-7-2.png';
import case_iframe_preview_image from '../assets/images/case-iframe-markcity.jpg';

const contentCasesIntro = {
  title: 'MARKS-CITY',
  subtitle: 'Десктоп игра для интерактивного стола. Зодчество 2023',
  tags: ['Игровая разработка', '3D визуализация', '3D моделировани', 'UX/UI'],
  src: {},
  picture_intro: case_intro_picture,
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
    text: 'Создать игру.????  Текст текст текстТекст текст текст текстТекст текст текст текстТекст текст текст текстТекст текст текст текстТекст текст текст текстТекст текст текст текстТекст текст текст текстТекст текст текст текстТекст текст текст текстТекст текст текст текстТекст текст текст текстТекст текст текст текстТекст текст текст текстТекст текст текст текстТекст текст текст текстТекст текст текст текстТекст текст текст текст?',
  },
  {
    title: 'Поиски оьраза',
    text: 'Команда провела большую работу, что бы подобрать и оформить механику игры, найти образ города который ......................................................................................................................................................................., ознакомится с творческими поисками можно ниже. ',
  },
  {
    title: 'Дизайн',
    text: 'Текст текст текстТекст текст текст текстТекст текст текст текстТекст текст текст текстТекст текст текст текстТекст текст текст текстТекст текст текст текстТекст текст текст текстТекст текст текст текстТекст текст текст текстТекст текст текст текстТекст текст текст текстТекст текст текст текстТекст текст текст текстТекст текст текст текстТекст текст текст текстТекст текст текст текстТекст текст текст текст??',
  },
];

const contentSoftwar = [softwarLogos.unreal, softwarLogos.blender, softwarLogos.figma, softwarLogos.tree_d_max, softwarLogos.github];

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
    width: '85%',
  },
  bg: case_slider_full_bg,
  pictures: [
    {
      id: '1_1',
      picture: case_slider_full_picture_1,
    },
    {
      id: '1_2',
      picture: case_slider_full_picture_2,
    },
    {
      id: '1_3',
      picture: case_slider_full_picture_3,
    },
    {
      id: '1_4',
      picture: case_slider_full_picture_4,
    },
  ],
};

const case_slider_full_content_2 = {
  sizes: {
    width: '85%',
  },
  bg: case_slider_full_bg_2,
  pictures: [
    {
      id: '2_1',
      picture: case_slider_full_picture_1_2,
    },
    {
      id: '2_2',
      picture: case_slider_full_picture_2_2,
    },
    {
      id: '2_3',
      picture: case_slider_full_picture_3_2,
    },
    {
      id: '2_4',
      picture: case_slider_full_picture_4_2,
    },
    {
      id: '2_5',
      picture: case_slider_full_picture_5_2,
    },
    {
      id: '2_7',
      picture: case_slider_full_picture_7_2,
    },
  ],
};

export default function CaseMarksCity() {
  return (
    <main>
      <CasesIntro contentCasesIntro={contentCasesIntro} />
      <Text title={contentText[0].title} text={contentText[0].text} />
      <Softwar items={contentSoftwar} />
      <Picture src={picture} />
      <Text title={contentText[1].title} text={contentText[1].text} />

      <CaseIframe
        iframeProps={{
          src: 'https://embed.figma.com/board/9TbTy2tieMNVOZgKzqwa9q/%D0%9F%D0%BE%D1%80%D1%82%D1%84%D0%BE%D0%BB%D0%B8%D0%BE.-%D0%A1%D0%B0%D0%B9%D1%82-LABA.?node-id=11-8935&embed-host=share',
          allowFullScreen: true,
        }}
        previewSrc={case_iframe_preview_image}
        mobilePreviewSrc={case_iframe_preview_image}
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
