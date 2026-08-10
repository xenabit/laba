import '../App.scss';

import CasesIntro from '../components/CasesIntro/CasesIntro';
import Text from '../components/Text/Text';
import Softwar from '../components/Softwar/Softwar';
import CasesSliderVideo from '../components/CasesSliderVideo/CasesSliderVideo';
import CasesItems from '../components/CasesItems/CasesItems';
import CaseIframe from '../components/CaseIframe/CaseIframe';
import CasesSliderFull from '../components/CasesSliderFull/CasesSliderFull';
import VideoHorizontal from '../components/VideoHorizontal/VideoHorizontal';

import softwarLogos from '../constants/softwarLogos';

// Импорты изображений CasesIntro
import case_intro_picture_jpg from '../assets/images/case-intro-colorpath.jpg';
import case_intro_picture_webp from '../assets/images/case-intro-colorpath.webp';
import case_intro_picture_webp_2x from '../assets/images/case-intro-colorpath-2x.webp';
import case_intro_picture_avif from '../assets/images/case-intro-colorpath.avif';
import case_intro_picture_avif_2x from '../assets/images/case-intro-colorpath-2x.avif';

// Импорты изображений CaseIframe
import case_iframe_preview_image_jpg from '../assets/images/case-iframe-colorpath.jpg';
import case_iframe_preview_image_webp from '../assets/images/case-iframe-colorpath.webp';
import case_iframe_preview_image_avif from '../assets/images/case-iframe-colorpath.avif';

// Импорты изображений ReviewsSlider
import reviews_slider_author_1 from '../assets/images/reviews-slider-1.svg';
import reviews_slider_author_2_jpg from '../assets/images/reviews-slider-2.jpg';
import reviews_slider_author_2_webp from '../assets/images/reviews-slider-2.webp';
import reviews_slider_author_2_avif from '../assets/images/reviews-slider-2.avif';

// Импорты фоновых изображений

// Импорты изображений CasesSliderFull (первый набор)
import case_slider_full_picture_1_jpg from '../assets/images/cases-slider-full-colorpath-1.jpg';
import case_slider_full_picture_1_webp from '../assets/images/cases-slider-full-colorpath-1.webp';
import case_slider_full_picture_1_webp_2x from '../assets/images/cases-slider-full-colorpath-1-2x.webp';
import case_slider_full_picture_1_avif from '../assets/images/cases-slider-full-colorpath-1.avif';
import case_slider_full_picture_1_avif_2x from '../assets/images/cases-slider-full-colorpath-1-2x.avif';

import case_slider_full_picture_2_jpg from '../assets/images/cases-slider-full-colorpath-2.jpg';
import case_slider_full_picture_2_webp from '../assets/images/cases-slider-full-colorpath-2.webp';
import case_slider_full_picture_2_webp_2x from '../assets/images/cases-slider-full-colorpath-2-2x.webp';
import case_slider_full_picture_2_avif from '../assets/images/cases-slider-full-colorpath-2.avif';
import case_slider_full_picture_2_avif_2x from '../assets/images/cases-slider-full-colorpath-2-2x.avif';

import case_slider_full_picture_3_jpg from '../assets/images/cases-slider-full-colorpath-3.jpg';
import case_slider_full_picture_3_webp from '../assets/images/cases-slider-full-colorpath-3.webp';
import case_slider_full_picture_3_webp_2x from '../assets/images/cases-slider-full-colorpath-3-2x.webp';
import case_slider_full_picture_3_avif from '../assets/images/cases-slider-full-colorpath-3.avif';
import case_slider_full_picture_3_avif_2x from '../assets/images/cases-slider-full-colorpath-3-2x.avif';

import case_slider_full_picture_4_jpg from '../assets/images/cases-slider-full-colorpath-4.jpg';
import case_slider_full_picture_4_webp from '../assets/images/cases-slider-full-colorpath-4.webp';
import case_slider_full_picture_4_webp_2x from '../assets/images/cases-slider-full-colorpath-4-2x.webp';
import case_slider_full_picture_4_avif from '../assets/images/cases-slider-full-colorpath-4.avif';
import case_slider_full_picture_4_avif_2x from '../assets/images/cases-slider-full-colorpath-4-2x.avif';

import case_slider_full_picture_5_jpg from '../assets/images/cases-slider-full-colorpath-5.jpg';
import case_slider_full_picture_5_webp from '../assets/images/cases-slider-full-colorpath-5.webp';
import case_slider_full_picture_5_webp_2x from '../assets/images/cases-slider-full-colorpath-5-2x.webp';
import case_slider_full_picture_5_avif from '../assets/images/cases-slider-full-colorpath-5.avif';
import case_slider_full_picture_5_avif_2x from '../assets/images/cases-slider-full-colorpath-5-2x.avif';

import case_slider_full_picture_6_jpg from '../assets/images/cases-slider-full-colorpath-6.jpg';
import case_slider_full_picture_6_webp from '../assets/images/cases-slider-full-colorpath-6.webp';
import case_slider_full_picture_6_webp_2x from '../assets/images/cases-slider-full-colorpath-6-2x.webp';
import case_slider_full_picture_6_avif from '../assets/images/cases-slider-full-colorpath-6.avif';
import case_slider_full_picture_6_avif_2x from '../assets/images/cases-slider-full-colorpath-6-2x.avif';

import case_slider_full_picture_7_jpg from '../assets/images/cases-slider-full-colorpath-7.jpg';
import case_slider_full_picture_7_webp from '../assets/images/cases-slider-full-colorpath-7.webp';
import case_slider_full_picture_7_webp_2x from '../assets/images/cases-slider-full-colorpath-7-2x.webp';
import case_slider_full_picture_7_avif from '../assets/images/cases-slider-full-colorpath-7.avif';
import case_slider_full_picture_7_avif_2x from '../assets/images/cases-slider-full-colorpath-7-2x.avif';

import case_slider_full_picture_8_jpg from '../assets/images/cases-slider-full-colorpath-8.jpg';
import case_slider_full_picture_8_webp from '../assets/images/cases-slider-full-colorpath-8.webp';
import case_slider_full_picture_8_webp_2x from '../assets/images/cases-slider-full-colorpath-8-2x.webp';
import case_slider_full_picture_8_avif from '../assets/images/cases-slider-full-colorpath-8.avif';
import case_slider_full_picture_8_avif_2x from '../assets/images/cases-slider-full-colorpath-8-2x.avif';

// ИМПОРТЫ ДЛЯ ВТОРОГО НАБОРА (с суффиксом -2)
import case_slider_full_picture_1_2_jpg from '../assets/images/cases-slider-full-colorpath-1-2.jpg';
import case_slider_full_picture_1_2_webp from '../assets/images/cases-slider-full-colorpath-1-2.webp';
import case_slider_full_picture_1_2_webp_2x from '../assets/images/cases-slider-full-colorpath-1-2-2x.webp';
import case_slider_full_picture_1_2_avif from '../assets/images/cases-slider-full-colorpath-1-2.avif';
import case_slider_full_picture_1_2_avif_2x from '../assets/images/cases-slider-full-colorpath-1-2-2x.avif';

import case_slider_full_picture_2_2_jpg from '../assets/images/cases-slider-full-colorpath-2-2.jpg';
import case_slider_full_picture_2_2_webp from '../assets/images/cases-slider-full-colorpath-2-2.webp';
import case_slider_full_picture_2_2_webp_2x from '../assets/images/cases-slider-full-colorpath-2-2-2x.webp';
import case_slider_full_picture_2_2_avif from '../assets/images/cases-slider-full-colorpath-2-2.avif';
import case_slider_full_picture_2_2_avif_2x from '../assets/images/cases-slider-full-colorpath-2-2-2x.avif';

import case_slider_full_picture_3_2_jpg from '../assets/images/cases-slider-full-colorpath-3-2.jpg';
import case_slider_full_picture_3_2_webp from '../assets/images/cases-slider-full-colorpath-3-2.webp';
import case_slider_full_picture_3_2_webp_2x from '../assets/images/cases-slider-full-colorpath-3-2-2x.webp';
import case_slider_full_picture_3_2_avif from '../assets/images/cases-slider-full-colorpath-3-2.avif';
import case_slider_full_picture_3_2_avif_2x from '../assets/images/cases-slider-full-colorpath-3-2-2x.avif';

import case_slider_full_picture_4_2_jpg from '../assets/images/cases-slider-full-colorpath-4-2.jpg';
import case_slider_full_picture_4_2_webp from '../assets/images/cases-slider-full-colorpath-4-2.webp';
import case_slider_full_picture_4_2_webp_2x from '../assets/images/cases-slider-full-colorpath-4-2-2x.webp';
import case_slider_full_picture_4_2_avif from '../assets/images/cases-slider-full-colorpath-4-2.avif';
import case_slider_full_picture_4_2_avif_2x from '../assets/images/cases-slider-full-colorpath-4-2-2x.avif';

import case_slider_full_picture_5_2_jpg from '../assets/images/cases-slider-full-colorpath-5-2.jpg';
import case_slider_full_picture_5_2_webp from '../assets/images/cases-slider-full-colorpath-5-2.webp';
import case_slider_full_picture_5_2_webp_2x from '../assets/images/cases-slider-full-colorpath-5-2-2x.webp';
import case_slider_full_picture_5_2_avif from '../assets/images/cases-slider-full-colorpath-5-2.avif';
import case_slider_full_picture_5_2_avif_2x from '../assets/images/cases-slider-full-colorpath-5-2-2x.avif';

import case_slider_full_picture_6_2_jpg from '../assets/images/cases-slider-full-colorpath-6-2.jpg';
import case_slider_full_picture_6_2_webp from '../assets/images/cases-slider-full-colorpath-6-2.webp';
import case_slider_full_picture_6_2_webp_2x from '../assets/images/cases-slider-full-colorpath-6-2-2x.webp';
import case_slider_full_picture_6_2_avif from '../assets/images/cases-slider-full-colorpath-6-2.avif';
import case_slider_full_picture_6_2_avif_2x from '../assets/images/cases-slider-full-colorpath-6-2-2x.avif';

import case_slider_full_picture_7_2_jpg from '../assets/images/cases-slider-full-colorpath-7-2.jpg';
import case_slider_full_picture_7_2_webp from '../assets/images/cases-slider-full-colorpath-7-2.webp';
import case_slider_full_picture_7_2_webp_2x from '../assets/images/cases-slider-full-colorpath-7-2-2x.webp';
import case_slider_full_picture_7_2_avif from '../assets/images/cases-slider-full-colorpath-7-2.avif';
import case_slider_full_picture_7_2_avif_2x from '../assets/images/cases-slider-full-colorpath-7-2-2x.avif';

// НОВЫЕ ИМПОРТЫ ДЛЯ ТРЕТЬЕГО НАБОРА (с суффиксом -3)
import case_slider_full_picture_1_3_jpg from '../assets/images/cases-slider-full-colorpath-1-3.jpg';
import case_slider_full_picture_1_3_webp from '../assets/images/cases-slider-full-colorpath-1-3.webp';
import case_slider_full_picture_1_3_webp_2x from '../assets/images/cases-slider-full-colorpath-1-3-2x.webp';
import case_slider_full_picture_1_3_avif from '../assets/images/cases-slider-full-colorpath-1-3.avif';
import case_slider_full_picture_1_3_avif_2x from '../assets/images/cases-slider-full-colorpath-1-3-2x.avif';

import case_slider_full_picture_2_3_jpg from '../assets/images/cases-slider-full-colorpath-2-3.jpg';
import case_slider_full_picture_2_3_webp from '../assets/images/cases-slider-full-colorpath-2-3.webp';
import case_slider_full_picture_2_3_webp_2x from '../assets/images/cases-slider-full-colorpath-2-3-2x.webp';
import case_slider_full_picture_2_3_avif from '../assets/images/cases-slider-full-colorpath-2-3.avif';
import case_slider_full_picture_2_3_avif_2x from '../assets/images/cases-slider-full-colorpath-2-3-2x.avif';

import video from '../assets/videos/vr.mp4';

const contentCasesIntro = {
  title: 'Путь цвета',
  subtitle: 'Аркадный раннер (Color Path)',
  tags: ['Android, IOS', 'Unreal Engine', 'UX/UI', '3D'],
  src: {},
  picture_intro: {
    img: case_intro_picture_jpg,
    webp: case_intro_picture_webp,
    webp2x: case_intro_picture_webp_2x,
    avif: case_intro_picture_avif,
    avif2x: case_intro_picture_avif_2x,
    position: '92% 0',
  },
  about: [
    {
      topic: 'Клиент',
      desc: 'LABA',
    },
    {
      topic: 'Платформа',
      desc: 'Мобильное',
    },
    {
      topic: 'Команда',
      desc: 'Разработчик Unreal Engine/PM,<br>Арт-дир, UX/UI дизайнеры',
    },
    {
      topic: 'Что сделано',
      desc: 'Аркадный раннер, игра на реакцию',
    },
  ],
};

const contentText = [
  {
    title: 'Задача',
    text: 'Разработать динамичный аркадный раннер с&nbsp;интуитивным управлением, основанный на&nbsp;механике проверки и&nbsp;тренировки реакции пользователя, с&nbsp;множеством локаций и&nbsp;разнообразных миров (разные широты и&nbsp;окружения), уровнями сложности, дополнительными целями, препятствиями и&nbsp;целями.',
  },
  {
    title: 'Геймплей',
    text: 'Игрок управляет мячом, проходящим уровни из&nbsp;цветных платформ. Задача&nbsp;&mdash; вовремя менять цвет мяча по&nbsp;заданной последовательности, чтобы совпадать с&nbsp;платформами.</br></br>Дополнительные цели усложняют прохождение: взаимодействие с&nbsp;объектами также меняет цвет и&nbsp;требует учитывать это в&nbsp;моменте.</br></br>За&nbsp;прохождение игрок получает краску&nbsp;&mdash; основную валюту для&nbsp;покупки скинов и&nbsp;бустеров. Премиум-контент открывается за&nbsp;кристаллы.</br></br>Прогресс фиксируется на&nbsp;карте уровней со&nbsp;звёздами и&nbsp;короной за&nbsp;идеальное прохождение, а&nbsp;также показывает переход к&nbsp;следующим мирам.',
  },
  {
    title: 'Образ и&nbsp;стилистика',
    text: 'Игра выполнена в&nbsp;яркой, дружелюбной казуальной стилистике с&nbsp;акцентом на&nbsp;визуальную простоту и&nbsp;считываемость. Основу составляет сочная цветовая палитра с&nbsp;крупными контрастными элементами, которые легко различимы в&nbsp;динамике и&nbsp;поддерживают быстрый темп геймплея.</br></br>Общий образ&nbsp;&mdash; это лёгкая, позитивная аркада с&nbsp;ощущением &laquo;живого&raquo; мира и&nbsp;быстрым, вовлекающим геймплеем.',
  },
  {
    title: 'Интерфейс',
    text: 'Интерфейс крупный и&nbsp;интуитивный, с&nbsp;акцентом на&nbsp;мобильное восприятие: большие кнопки, понятные иконки, минимальное количество текста. Анимации плавные и&nbsp;&laquo;игрушечные&raquo;, усиливают ощущение лёгкости и&nbsp;динамики.</br></br>Элементы интерфейса выполнены в&nbsp;пластиковой, объёмной стилистике с&nbsp;акцентными бликами и&nbsp;мягкими отражениями. Они визуально отсылают к&nbsp;3D-среде игры, но&nbsp;намеренно остаются условными, за&nbsp;счёт чего чётко отделяются от&nbsp;основного окружения. Такой подход повышает читаемость интерфейса и&nbsp;позволяет ему не&nbsp;теряться в&nbsp;динамичном геймплее.',
  },
  {
    title: 'Миры',
    text: 'Окружение построено на&nbsp;системе разнообразных миров&nbsp;&mdash; как природных (зелёные луга, снежные и&nbsp;пустынные локации), так и&nbsp;фантазийных и&nbsp;условных. Каждый мир отличается своей цветовой гаммой и&nbsp;декоративными деталями, но&nbsp;сохраняет единый визуальный язык: мягкие формы, округлые объекты и&nbsp;отсутствие резких углов.',
  },
];

const contentSoftwar = [softwarLogos.unreal, softwarLogos.blender, softwarLogos.figma, softwarLogos.adobe_photoshop];

import case_slider_bg from '../assets/images/case-slider-bg-colorpath-1.svg';
// Импорты видео для CasesSliderVideo
import case_slider_video_left_1 from '../assets/videos/cases-slider-video-canon-change-left-1.mp4';
import case_slider_video_right_1 from '../assets/videos/cases-slider-video-canon-change-right-1.mp4';
import case_slider_video_left_2 from '../assets/videos/cases-slider-video-canon-change-left-2.mp4';
import case_slider_video_right_2 from '../assets/videos/cases-slider-video-canon-change-right-2.mp4';
import case_slider_video_left_3 from '../assets/videos/cases-slider-video-canon-change-left-3.mp4';
import case_slider_video_right_3 from '../assets/videos/cases-slider-video-canon-change-right-3.mp4';

const cases_slider_video_content = {
  bg: case_slider_bg,
  videos: [
    {
      id: '1_1',
      video_left: case_slider_video_left_2,
      video_right: case_slider_video_right_2,
    },
    {
      id: '1_2',
      video_left: case_slider_video_left_1,
      video_right: case_slider_video_right_1,
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
    objectFit: 'cover',
  },
  pictures: [
    {
      id: '1_1',
      picture: {
        img: case_slider_full_picture_1_jpg,
        webp: case_slider_full_picture_1_webp,
        webp2x: case_slider_full_picture_1_webp_2x,
        avif: case_slider_full_picture_1_avif,
        avif2x: case_slider_full_picture_1_avif_2x,
      },
    },
    {
      id: '1_2',
      picture: {
        img: case_slider_full_picture_2_jpg,
        webp: case_slider_full_picture_2_webp,
        webp2x: case_slider_full_picture_2_webp_2x,
        avif: case_slider_full_picture_2_avif,
        avif2x: case_slider_full_picture_2_avif_2x,
      },
    },
    {
      id: '1_3',
      picture: {
        img: case_slider_full_picture_3_jpg,
        webp: case_slider_full_picture_3_webp,
        webp2x: case_slider_full_picture_3_webp_2x,
        avif: case_slider_full_picture_3_avif,
        avif2x: case_slider_full_picture_3_avif_2x,
      },
    },
    {
      id: '1_4',
      picture: {
        img: case_slider_full_picture_4_jpg,
        webp: case_slider_full_picture_4_webp,
        webp2x: case_slider_full_picture_4_webp_2x,
        avif: case_slider_full_picture_4_avif,
        avif2x: case_slider_full_picture_4_avif_2x,
      },
    },
    {
      id: '1_5',
      picture: {
        img: case_slider_full_picture_5_jpg,
        webp: case_slider_full_picture_5_webp,
        webp2x: case_slider_full_picture_5_webp_2x,
        avif: case_slider_full_picture_5_avif,
        avif2x: case_slider_full_picture_5_avif_2x,
      },
    },
    {
      id: '1_6',
      picture: {
        img: case_slider_full_picture_6_jpg,
        webp: case_slider_full_picture_6_webp,
        webp2x: case_slider_full_picture_6_webp_2x,
        avif: case_slider_full_picture_6_avif,
        avif2x: case_slider_full_picture_6_avif_2x,
      },
    },
    {
      id: '1_7',
      picture: {
        img: case_slider_full_picture_7_jpg,
        webp: case_slider_full_picture_7_webp,
        webp2x: case_slider_full_picture_7_webp_2x,
        avif: case_slider_full_picture_7_avif,
        avif2x: case_slider_full_picture_7_avif_2x,
      },
    },
    {
      id: '1_8',
      picture: {
        img: case_slider_full_picture_8_jpg,
        webp: case_slider_full_picture_8_webp,
        webp2x: case_slider_full_picture_8_webp_2x,
        avif: case_slider_full_picture_8_avif,
        avif2x: case_slider_full_picture_8_avif_2x,
      },
    },
  ],
};

// ВТОРОЙ НАБОР (с суффиксом -2)
const case_slider_full_content_2 = {
  sizes: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  pictures: [
    {
      id: '2_1',
      picture: {
        img: case_slider_full_picture_1_2_jpg,
        webp: case_slider_full_picture_1_2_webp,
        webp2x: case_slider_full_picture_1_2_webp_2x,
        avif: case_slider_full_picture_1_2_avif,
        avif2x: case_slider_full_picture_1_2_avif_2x,
      },
    },
    {
      id: '2_2',
      picture: {
        img: case_slider_full_picture_2_2_jpg,
        webp: case_slider_full_picture_2_2_webp,
        webp2x: case_slider_full_picture_2_2_webp_2x,
        avif: case_slider_full_picture_2_2_avif,
        avif2x: case_slider_full_picture_2_2_avif_2x,
      },
    },
    {
      id: '2_3',
      picture: {
        img: case_slider_full_picture_3_2_jpg,
        webp: case_slider_full_picture_3_2_webp,
        webp2x: case_slider_full_picture_3_2_webp_2x,
        avif: case_slider_full_picture_3_2_avif,
        avif2x: case_slider_full_picture_3_2_avif_2x,
      },
    },
    {
      id: '2_4',
      picture: {
        img: case_slider_full_picture_4_2_jpg,
        webp: case_slider_full_picture_4_2_webp,
        webp2x: case_slider_full_picture_4_2_webp_2x,
        avif: case_slider_full_picture_4_2_avif,
        avif2x: case_slider_full_picture_4_2_avif_2x,
      },
    },
    {
      id: '2_5',
      picture: {
        img: case_slider_full_picture_5_2_jpg,
        webp: case_slider_full_picture_5_2_webp,
        webp2x: case_slider_full_picture_5_2_webp_2x,
        avif: case_slider_full_picture_5_2_avif,
        avif2x: case_slider_full_picture_5_2_avif_2x,
      },
    },
    {
      id: '2_6',
      picture: {
        img: case_slider_full_picture_6_2_jpg,
        webp: case_slider_full_picture_6_2_webp,
        webp2x: case_slider_full_picture_6_2_webp_2x,
        avif: case_slider_full_picture_6_2_avif,
        avif2x: case_slider_full_picture_6_2_avif_2x,
      },
    },
    {
      id: '2_7',
      picture: {
        img: case_slider_full_picture_7_2_jpg,
        webp: case_slider_full_picture_7_2_webp,
        webp2x: case_slider_full_picture_7_2_webp_2x,
        avif: case_slider_full_picture_7_2_avif,
        avif2x: case_slider_full_picture_7_2_avif_2x,
      },
    },
  ],
};

// НОВЫЙ ТРЕТИЙ НАБОР (с суффиксом -3)
const case_slider_full_content_3 = {
  sizes: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  pictures: [
    {
      id: '3_1',
      picture: {
        img: case_slider_full_picture_1_3_jpg,
        webp: case_slider_full_picture_1_3_webp,
        webp2x: case_slider_full_picture_1_3_webp_2x,
        avif: case_slider_full_picture_1_3_avif,
        avif2x: case_slider_full_picture_1_3_avif_2x,
      },
    },
    {
      id: '3_2',
      picture: {
        img: case_slider_full_picture_2_3_jpg,
        webp: case_slider_full_picture_2_3_webp,
        webp2x: case_slider_full_picture_2_3_webp_2x,
        avif: case_slider_full_picture_2_3_avif,
        avif2x: case_slider_full_picture_2_3_avif_2x,
      },
    },
  ],
};

export default function CaseColorPath() {
  return (
    <main>
      <CasesIntro contentCasesIntro={contentCasesIntro} />
      <Text title={contentText[0].title} text={contentText[0].text} />
      <Softwar items={contentSoftwar} />
      <CasesSliderVideo items={cases_slider_video_content} />
      <Text title={contentText[1].title} text={contentText[1].text} />
      <CaseIframe
        iframeProps={{
          src: 'https://embed.figma.com/board/9TbTy2tieMNVOZgKzqwa9q/%D0%9F%D0%BE%D1%80%D1%82%D1%84%D0%BE%D0%BB%D0%B8%D0%BE.-%D0%A1%D0%B0%D0%B9%D1%82-LABA.?node-id=2669-2107&embed-host=share',
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
      <CasesSliderFull items={case_slider_full_content_3} />
      <Text title={contentText[4].title} text={contentText[4].text} />
      <CasesItems type={['game', 'mobile']} excludeId="case-colorpath" />
    </main>
  );
}
