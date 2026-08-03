import '../App.scss';
import { Link } from 'react-router-dom';

import CasesIntro from '../components/CasesIntro/CasesIntro';
import Text from '../components/Text/Text';
import Softwar from '../components/Softwar/Softwar';
import Picture from '../components/Picture/Picture';
import CaseIframe from '../components/CaseIframe/CaseIframe';
import CasesCompareSlider from '../components/CasesCompareSlider/CasesCompareSlider';
import CasesSliderFull from '../components/CasesSliderFull/CasesSliderFull';
import softwarLogos from '../constants/softwarLogos';
import CasesItems from '../components/CasesItems/CasesItems';

// Импорты изображений для CasesIntro
import case_intro_picture_jpg from '../assets/images/case-suburban-residence.jpg';
import case_intro_picture_webp from '../assets/images/case-suburban-residence.webp';
import case_intro_picture_avif from '../assets/images/case-suburban-residence.avif';

// Импорты изображений для Picture
import picture_jpg from '../assets/images/picture-suburban-residence.jpg';
import picture_webp from '../assets/images/picture-suburban-residence.webp';
import picture_avif from '../assets/images/picture-suburban-residence.avif';
import picture_jpg_2 from '../assets/images/picture-suburban-residence-2.jpg';
import picture_webp_2 from '../assets/images/picture-suburban-residence-2.webp';
import picture_avif_2 from '../assets/images/picture-suburban-residence-2.avif';

// Импорты изображений для CaseIframe
import case_iframe_preview_image_jpg from '../assets/images/case-iframe-suburban.jpg';
import case_iframe_preview_image_webp from '../assets/images/case-iframe-suburban.webp';
import case_iframe_preview_image_avif from '../assets/images/case-iframe-suburban.avif';

// Импорты изображений для CasesCompareSlider
import case_compare_slider_bg from '../assets/images/case-compare-slider-bg-suburban-1.svg';
import case_compare_slider_picture_left_1_jpg from '../assets/images/cases-compare-slider-suburban-left-1.jpg';
import case_compare_slider_picture_left_1_webp from '../assets/images/cases-compare-slider-suburban-left-1.webp';
import case_compare_slider_picture_left_1_avif from '../assets/images/cases-compare-slider-suburban-left-1.avif';
import case_compare_slider_picture_right_1_jpg from '../assets/images/cases-compare-slider-suburban-right-1.jpg';
import case_compare_slider_picture_right_1_webp from '../assets/images/cases-compare-slider-suburban-right-1.webp';
import case_compare_slider_picture_right_1_avif from '../assets/images/cases-compare-slider-suburban-right-1.avif';
import case_compare_slider_picture_left_2_jpg from '../assets/images/cases-compare-slider-suburban-left-2.jpg';
import case_compare_slider_picture_left_2_webp from '../assets/images/cases-compare-slider-suburban-left-2.webp';
import case_compare_slider_picture_left_2_avif from '../assets/images/cases-compare-slider-suburban-left-2.avif';
import case_compare_slider_picture_right_2_jpg from '../assets/images/cases-compare-slider-suburban-right-2.jpg';
import case_compare_slider_picture_right_2_webp from '../assets/images/cases-compare-slider-suburban-right-2.webp';
import case_compare_slider_picture_right_2_avif from '../assets/images/cases-compare-slider-suburban-right-2.avif';
import case_compare_slider_picture_left_3_jpg from '../assets/images/cases-compare-slider-suburban-left-3.jpg';
import case_compare_slider_picture_left_3_webp from '../assets/images/cases-compare-slider-suburban-left-3.webp';
import case_compare_slider_picture_left_3_avif from '../assets/images/cases-compare-slider-suburban-left-3.avif';
import case_compare_slider_picture_right_3_jpg from '../assets/images/cases-compare-slider-suburban-right-3.jpg';
import case_compare_slider_picture_right_3_webp from '../assets/images/cases-compare-slider-suburban-right-3.webp';
import case_compare_slider_picture_right_3_avif from '../assets/images/cases-compare-slider-suburban-right-3.avif';

import case_compare_slider_picture_jpg_1 from '../assets/images/cases-compare-slider-suburban-1.jpg';
import case_compare_slider_picture_webp_1 from '../assets/images/cases-compare-slider-suburban-1.webp';
import case_compare_slider_picture_avif_1 from '../assets/images/cases-compare-slider-suburban-1.avif';

import case_compare_slider_picture_jpg_2 from '../assets/images/cases-compare-slider-suburban-2.jpg';
import case_compare_slider_picture_webp_2 from '../assets/images/cases-compare-slider-suburban-2.webp';
import case_compare_slider_picture_avif_2 from '../assets/images/cases-compare-slider-suburban-2.avif';

import case_compare_slider_picture_jpg_3 from '../assets/images/cases-compare-slider-suburban-3.jpg';
import case_compare_slider_picture_webp_3 from '../assets/images/cases-compare-slider-suburban-3.webp';
import case_compare_slider_picture_avif_3 from '../assets/images/cases-compare-slider-suburban-3.avif';

import case_compare_slider_picture_jpg_4 from '../assets/images/cases-compare-slider-suburban-4.jpg';
import case_compare_slider_picture_webp_4 from '../assets/images/cases-compare-slider-suburban-4.webp';
import case_compare_slider_picture_avif_4 from '../assets/images/cases-compare-slider-suburban-4.avif';

// Импорты изображений для CasesSliderFull
import case_slider_full_picture_1_0_jpg from '../assets/images/cases-slider-full-residence-1-0.jpg';
import case_slider_full_picture_1_0_webp from '../assets/images/cases-slider-full-residence-1-0.webp';
import case_slider_full_picture_1_0_avif from '../assets/images/cases-slider-full-residence-1-0.avif';
import case_slider_full_picture_1_1_jpg from '../assets/images/cases-slider-full-residence-1-1.jpg';
import case_slider_full_picture_1_1_webp from '../assets/images/cases-slider-full-residence-1-1.webp';
import case_slider_full_picture_1_1_avif from '../assets/images/cases-slider-full-residence-1-1.avif';
import case_slider_full_picture_1_2_jpg from '../assets/images/cases-slider-full-residence-1-2.jpg';
import case_slider_full_picture_1_2_webp from '../assets/images/cases-slider-full-residence-1-2.webp';
import case_slider_full_picture_1_2_avif from '../assets/images/cases-slider-full-residence-1-2.avif';
import case_slider_full_picture_1_3_jpg from '../assets/images/cases-slider-full-residence-1-3.jpg';
import case_slider_full_picture_1_3_webp from '../assets/images/cases-slider-full-residence-1-3.webp';
import case_slider_full_picture_1_3_avif from '../assets/images/cases-slider-full-residence-1-3.avif';
import case_slider_full_picture_1_4_jpg from '../assets/images/cases-slider-full-residence-1-4.jpg';
import case_slider_full_picture_1_4_webp from '../assets/images/cases-slider-full-residence-1-4.webp';
import case_slider_full_picture_1_4_avif from '../assets/images/cases-slider-full-residence-1-4.avif';

import case_slider_full_picture_1_5_jpg from '../assets/images/cases-slider-full-residence-1-5.jpg';
import case_slider_full_picture_1_5_webp from '../assets/images/cases-slider-full-residence-1-5.webp';
import case_slider_full_picture_1_5_avif from '../assets/images/cases-slider-full-residence-1-5.avif';

import case_slider_full_picture_1_6_jpg from '../assets/images/cases-slider-full-residence-1-6.jpg';
import case_slider_full_picture_1_6_webp from '../assets/images/cases-slider-full-residence-1-6.webp';
import case_slider_full_picture_1_6_avif from '../assets/images/cases-slider-full-residence-1-6.avif';

import case_slider_full_picture_1_7_jpg from '../assets/images/cases-slider-full-residence-1-7.jpg';
import case_slider_full_picture_1_7_webp from '../assets/images/cases-slider-full-residence-1-7.webp';
import case_slider_full_picture_1_7_avif from '../assets/images/cases-slider-full-residence-1-7.avif';

import case_slider_full_picture_1_8_jpg from '../assets/images/cases-slider-full-residence-1-8.jpg';
import case_slider_full_picture_1_8_webp from '../assets/images/cases-slider-full-residence-1-8.webp';
import case_slider_full_picture_1_8_avif from '../assets/images/cases-slider-full-residence-1-8.avif';

import case_slider_full_picture_1_9_svg from '../assets/images/cases-slider-full-residence-1-9.svg';
import case_slider_full_picture_1_9_webp from '../assets/images/cases-slider-full-residence-1-9.webp';
import case_slider_full_picture_1_9_avif from '../assets/images/cases-slider-full-residence-1-9.avif';

import case_slider_full_picture_2_1_jpg from '../assets/images/cases-slider-full-residence-2-1.jpg';
import case_slider_full_picture_2_1_webp from '../assets/images/cases-slider-full-residence-2-1.webp';
import case_slider_full_picture_2_1_avif from '../assets/images/cases-slider-full-residence-2-1.avif';
import case_slider_full_picture_2_2_jpg from '../assets/images/cases-slider-full-residence-2-2.jpg';
import case_slider_full_picture_2_2_webp from '../assets/images/cases-slider-full-residence-2-2.webp';
import case_slider_full_picture_2_2_avif from '../assets/images/cases-slider-full-residence-2-2.avif';
import case_slider_full_picture_2_3_jpg from '../assets/images/cases-slider-full-residence-2-3.jpg';
import case_slider_full_picture_2_3_webp from '../assets/images/cases-slider-full-residence-2-3.webp';
import case_slider_full_picture_2_3_avif from '../assets/images/cases-slider-full-residence-2-3.avif';

import case_slider_full_picture_2_4_jpg from '../assets/images/cases-slider-full-residence-2-4.jpg';
import case_slider_full_picture_2_4_webp from '../assets/images/cases-slider-full-residence-2-4.webp';
import case_slider_full_picture_2_4_avif from '../assets/images/cases-slider-full-residence-2-4.avif';

import case_slider_full_picture_2_5_jpg from '../assets/images/cases-slider-full-residence-2-5.jpg';
import case_slider_full_picture_2_5_webp from '../assets/images/cases-slider-full-residence-2-5.webp';
import case_slider_full_picture_2_5_avif from '../assets/images/cases-slider-full-residence-2-5.avif';

import case_slider_full_picture_2_6_jpg from '../assets/images/cases-slider-full-residence-2-6.jpg';
import case_slider_full_picture_2_6_webp from '../assets/images/cases-slider-full-residence-2-6.webp';
import case_slider_full_picture_2_6_avif from '../assets/images/cases-slider-full-residence-2-6.avif';

import case_slider_full_picture_2_7_jpg from '../assets/images/cases-slider-full-residence-2-7.jpg';
import case_slider_full_picture_2_7_webp from '../assets/images/cases-slider-full-residence-2-7.webp';
import case_slider_full_picture_2_7_avif from '../assets/images/cases-slider-full-residence-2-7.avif';

import case_slider_full_picture_2_8_jpg from '../assets/images/cases-slider-full-residence-2-8.jpg';
import case_slider_full_picture_2_8_webp from '../assets/images/cases-slider-full-residence-2-8.webp';
import case_slider_full_picture_2_8_avif from '../assets/images/cases-slider-full-residence-2-8.avif';

import case_slider_full_picture_2_9_jpg from '../assets/images/cases-slider-full-residence-2-9.jpg';
import case_slider_full_picture_2_9_webp from '../assets/images/cases-slider-full-residence-2-9.webp';
import case_slider_full_picture_2_9_avif from '../assets/images/cases-slider-full-residence-2-9.avif';

import case_slider_full_picture_2_10_svg from '../assets/images/cases-slider-full-residence-2-10.svg';
import case_slider_full_picture_2_10_webp from '../assets/images/cases-slider-full-residence-2-10.webp';
import case_slider_full_picture_2_10_avif from '../assets/images/cases-slider-full-residence-2-10.avif';

// Импорты для ReviewsSlider
// import reviews_slider_author_1 from '../assets/images/reviews-slider-1.svg';
// import reviews_slider_author_2_jpg from '../assets/images/reviews-slider-3.jpg';
// import reviews_slider_author_2_webp from '../assets/images/reviews-slider-3.webp';
// import reviews_slider_author_2_avif from '../assets/images/reviews-slider-3.avif';

const contentCasesIntro = {
  title: 'Suburban Residence',
  subtitle: 'Дизайн-концепция',
  tags: ['UX/UI', '3D визуализация'],
  // src: {
  //   url: 'https://marksgroup.ru/portal/vacanciesMain',
  //   title: 'Смотреть видео',
  // },
  picture_intro: {
    img: case_intro_picture_jpg,
    webp: case_intro_picture_webp,
    avif: case_intro_picture_avif,
  },
  about: [
    {
      topic: 'Клиент',
      desc: 'SUBURBAN RESIDENCE',
    },
    {
      topic: 'Платформа',
      desc: 'WEB',
    },
    {
      topic: 'Команда',
      desc: 'UX/UI дизайнер, PM, контент менеджер',
    },
    {
      topic: 'Что сделано',
      desc: 'Дизайн-концепты рекламного сайта с&nbsp;выбором квартир и&nbsp;интерактивами',
    },
  ],
};

const case_compare_slider_pictures_1 = {
  bg: case_compare_slider_bg,
  pictures: [
    {
      id: '1_1',
      picture_left: {
        img: case_compare_slider_picture_left_1_jpg,
        webp: case_compare_slider_picture_left_1_webp,
        avif: case_compare_slider_picture_left_1_avif,
      },
      picture_right: {
        img: case_compare_slider_picture_right_1_jpg,
        webp: case_compare_slider_picture_right_1_webp,
        avif: case_compare_slider_picture_right_1_avif,
      },
    },
    {
      id: '1_2',
      picture_left: {
        img: case_compare_slider_picture_left_2_jpg,
        webp: case_compare_slider_picture_left_2_webp,
        avif: case_compare_slider_picture_left_2_avif,
      },
      picture_right: {
        img: case_compare_slider_picture_right_2_jpg,
        webp: case_compare_slider_picture_right_2_webp,
        avif: case_compare_slider_picture_right_2_avif,
      },
    },
    {
      id: '1_3',
      picture: {
        img: case_compare_slider_picture_jpg_1,
        webp: case_compare_slider_picture_webp_1,
        avif: case_compare_slider_picture_avif_1,
      },
    },

    {
      id: '1_4',
      picture: {
        img: case_compare_slider_picture_jpg_2,
        webp: case_compare_slider_picture_webp_2,
        avif: case_compare_slider_picture_avif_2,
      },
    },

    {
      id: '1_5',
      picture: {
        img: case_compare_slider_picture_jpg_3,
        webp: case_compare_slider_picture_webp_3,
        avif: case_compare_slider_picture_avif_3,
      },
    },

    {
      id: '1_6',
      picture: {
        img: case_compare_slider_picture_jpg_4,
        webp: case_compare_slider_picture_webp_4,
        avif: case_compare_slider_picture_avif_4,
      },
    },

    {
      id: '1_8',
      picture_left: {
        img: case_compare_slider_picture_left_3_jpg,
        webp: case_compare_slider_picture_left_3_webp,
        avif: case_compare_slider_picture_left_3_avif,
      },
      picture_right: {
        img: case_compare_slider_picture_right_3_jpg,
        webp: case_compare_slider_picture_right_3_webp,
        avif: case_compare_slider_picture_right_3_avif,
      },
    },
  ],
};

const contentText = [
  {
    title: 'Задача',
    text: 'Создать дизайн-концепцию с&nbsp;несколькими стилистическими вариантами решений, включающую анализ прямых конкурентов, разработку карты сайта, прототипа главной страницы и&nbsp;сценария бронирования апартаментов.',
  },
  {
    title: 'Подход',
    text: 'Провели исследование, изучили объект заказчика, предложили варианты реализации исходя из&nbsp;возможностей &laquo;на&nbsp;месте&raquo;. Ознакомиться с&nbsp;творческими поисками <a href="#caseiframe">можно ниже.</a>',
  },

  {
    title: 'Дизайн-подход 1',
    text: '<p>Дизайн концепта выполнен в&nbsp;минималистичном и&nbsp;элегантном стиле, который сочетается с&nbsp;премиальностью объекта недвижимости. Основной акцент сделан на&nbsp;контрасте темного фона с&nbsp;золотыми и&nbsp;белыми элементами.</p></br> <p>Использование качественных рендеров интерьеров и&nbsp;экстерьеров помогает передать атмосферу объекта. Контент структурирован по&nbsp;запросам пользователей, разбавлен 3D&nbsp;интерактивами с&nbsp;простой и&nbsp;понятной навигацией, что помогает сохранить фокус на&nbsp;ключевых аспектах объекта.</p>',
  },
  {
    title: 'Дизайн-подход 2',
    text: 'Минималистичное оформление в&nbsp;сочных тонах, вдохновлённое эстетикой города Абу-Даби, с&nbsp;продуманной пользовательской ориентацией. </p></br> <p>На&nbsp;платформе реализованы современные интерактивные элементы: трёхмерная прогулка по&nbsp;территории объекта и&nbsp;панорама с&nbsp;возможностью вращения, позволяющие детально изучить недвижимость.',
  },
  {
    title: 'Поиск квартир',
    text: 'В&nbsp;двух подходах особое внимание уделено функционалу&nbsp;&mdash; удобный агрегатор быстро подбирает квартиры, исходя из&nbsp;заданных пользователем параметров.',
  },
  {
    title: 'Поиск квартир',
    text: '<p>Сценарии поиска квартир реализованы через две точки входа.</p><br><p>Первая начинается с&nbsp;интерактивной 3D-модели объекта, размещённой на&nbsp;главной странице. Пользователь визуально выбирает этаж, ориентируясь на&nbsp;генеральный план или вид из&nbsp;окон, после чего на&nbsp;плане этажа выбирает конкретную квартиру.</p><br><p>Второй осуществляется через функциональный агрегатор, где доступны ручные настройки всех ключевых параметров: площади помещения, ценовой категории, корпуса и&nbsp;т.д.</p>',
  },
];

const contentSoftwar = [softwarLogos.figma, softwarLogos.adobe_photoshop, softwarLogos.tree_d_max];

const contentPicture = [
  {
    img: picture_jpg,
    webp: picture_webp,
    avif: picture_avif,
  },
  {
    img: picture_jpg_2,
    webp: picture_webp_2,
    avif: picture_avif_2,
  },
];

const contentReviews = [
  {
    title: 'Отзыв клиента',
    text: 'Работа с HR-порталом на сайте стала для меня и для HR-команды ещё одним способом привлечения кандидатов. Платформа интуитивно понятна и удобна в использовании, опубликовать вакансии на портале не занимает большого количества времени. Лично мне нравится функция размещения горящих вакансий на главной странице портала на сайте. Сайт MARKS GROUP посещает множество специалистов из сферы проектирования и цифровых технологий, поэтому классно, что они сразу могут ознакомиться с нашими вакансиями через сайт, откликнуться и их резюме или контакты сразу попадают к нам на hr-почту, это очень удобно!',
    name: 'Полина Журавлева  Ведущий специалист по подбору персонала',
    picture: [
      {
        logo: {
          img: reviews_slider_author_1,
        },
      },
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
      id: '1_0',
      picture: {
        img: case_slider_full_picture_1_0_jpg,
        webp: case_slider_full_picture_1_0_webp,
        avif: case_slider_full_picture_1_0_avif,
      },
    },
    {
      sizes: {
        width: '100%',
        height: '100%',
      },
      id: '1_1',
      picture: {
        img: case_slider_full_picture_1_1_jpg,
        webp: case_slider_full_picture_1_1_webp,
        avif: case_slider_full_picture_1_1_avif,
      },
    },
    {
      sizes: {
        width: '100%',
        height: '100%',
      },
      id: '1_2',
      picture: {
        img: case_slider_full_picture_1_2_jpg,
        webp: case_slider_full_picture_1_2_webp,
        avif: case_slider_full_picture_1_2_avif,
      },
    },
    {
      sizes: {
        width: '100%',
        height: '100%',
      },
      id: '1_3',
      picture: {
        img: case_slider_full_picture_1_3_jpg,
        webp: case_slider_full_picture_1_3_webp,
        avif: case_slider_full_picture_1_3_avif,
      },
    },
    {
      sizes: {
        width: '100%',
        height: '100%',
      },
      id: '1_4',
      picture: {
        img: case_slider_full_picture_1_4_jpg,
        webp: case_slider_full_picture_1_4_webp,
        avif: case_slider_full_picture_1_4_avif,
      },
    },
    {
      sizes: {
        width: '100%',
        height: '100%',
      },
      id: '1_5',
      picture: {
        img: case_slider_full_picture_1_5_jpg,
        webp: case_slider_full_picture_1_5_webp,
        avif: case_slider_full_picture_1_5_avif,
      },
    },
    {
      sizes: {
        width: '100%',
        height: '100%',
      },
      id: '1_6',
      picture: {
        img: case_slider_full_picture_1_6_jpg,
        webp: case_slider_full_picture_1_6_webp,
        avif: case_slider_full_picture_1_6_avif,
      },
    },
    {
      sizes: {
        width: '100%',
        height: '100%',
      },
      id: '1_7',
      picture: {
        img: case_slider_full_picture_1_7_jpg,
        webp: case_slider_full_picture_1_7_webp,
        avif: case_slider_full_picture_1_7_avif,
      },
    },
    {
      sizes: {
        width: '100%',
        height: '100%',
      },
      id: '1_8',
      picture: {
        img: case_slider_full_picture_1_8_jpg,
        webp: case_slider_full_picture_1_8_webp,
        avif: case_slider_full_picture_1_8_avif,
      },
    },
    {
      sizes: {
        width: '100%',
        height: '100%',
      },
      id: '1_9',
      picture: {
        img: case_slider_full_picture_1_9_svg,
        webp: case_slider_full_picture_1_9_webp,
        avif: case_slider_full_picture_1_9_avif,
      },
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
      picture: {
        img: case_slider_full_picture_2_1_jpg,
        webp: case_slider_full_picture_2_1_webp,
        avif: case_slider_full_picture_2_1_avif,
      },
    },
    {
      sizes: {
        width: '100%',
        height: '100%',
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
        height: '100%',
      },
      id: '2_3',
      picture: {
        img: case_slider_full_picture_2_3_jpg,
        webp: case_slider_full_picture_2_3_webp,
        avif: case_slider_full_picture_2_3_avif,
      },
    },
    {
      sizes: {
        width: '100%',
        height: '100%',
      },
      id: '2_4',
      picture: {
        img: case_slider_full_picture_2_4_jpg,
        webp: case_slider_full_picture_2_4_webp,
        avif: case_slider_full_picture_2_4_avif,
      },
    },
    {
      sizes: {
        width: '100%',
        height: '100%',
      },
      id: '2_5',
      picture: {
        img: case_slider_full_picture_2_5_jpg,
        webp: case_slider_full_picture_2_5_webp,
        avif: case_slider_full_picture_2_5_avif,
      },
    },
    {
      sizes: {
        width: '100%',
        height: '100%',
      },
      id: '2_6',
      picture: {
        img: case_slider_full_picture_2_6_jpg,
        webp: case_slider_full_picture_2_6_webp,
        avif: case_slider_full_picture_2_6_avif,
      },
    },
    {
      sizes: {
        width: '100%',
        height: '100%',
      },
      id: '2_7',
      picture: {
        img: case_slider_full_picture_2_7_jpg,
        webp: case_slider_full_picture_2_7_webp,
        avif: case_slider_full_picture_2_7_avif,
      },
    },
    {
      sizes: {
        width: '100%',
        height: '100%',
      },
      id: '2_8',
      picture: {
        img: case_slider_full_picture_2_8_jpg,
        webp: case_slider_full_picture_2_8_webp,
        avif: case_slider_full_picture_2_8_avif,
      },
    },
    {
      sizes: {
        width: '100%',
        height: '100%',
      },
      id: '2_9',
      picture: {
        img: case_slider_full_picture_2_9_jpg,
        webp: case_slider_full_picture_2_9_webp,
        avif: case_slider_full_picture_2_9_avif,
      },
    },
    {
      sizes: {
        width: '100%',
        height: '100%',
      },
      id: '2_10',
      picture: {
        img: case_slider_full_picture_2_10_svg,
        webp: case_slider_full_picture_2_10_webp,
        avif: case_slider_full_picture_2_10_avif,
      },
    },
  ],
};

const caseIframePreview = {
  img: case_iframe_preview_image_jpg,
  webp: case_iframe_preview_image_webp,
  avif: case_iframe_preview_image_avif,
};

export default function CaseSuburbanResidence() {
  return (
    <main>
      <CasesIntro contentCasesIntro={contentCasesIntro} />
      <Text title={contentText[0].title} text={contentText[0].text} />
      <Softwar items={contentSoftwar} />
      <Picture src={contentPicture[0]} />
      <Text title={contentText[1].title} text={contentText[1].text} />
      <CaseIframe
        iframeProps={{
          src: 'https://embed.figma.com/board/9TbTy2tieMNVOZgKzqwa9q/%D0%9F%D0%BE%D1%80%D1%82%D1%84%D0%BE%D0%BB%D0%B8%D0%BE.-%D0%A1%D0%B0%D0%B9%D1%82-LABA.?node-id=947-2107&embed-host=share',
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
      <Picture src={contentPicture[1]} />
      <Text title={contentText[5].title} text={contentText[5].text} />
      <CasesCompareSlider items={case_compare_slider_pictures_1} />
      <CasesItems type={['desktop', 'web']} excludeId="suburban-residence" />
    </main>
  );
}
