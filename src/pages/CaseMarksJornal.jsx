import '../App.scss';
import { Link } from 'react-router-dom';

import CasesIntro from '../components/CasesIntro/CasesIntro';
import ReviewsSlider from '../components/ReviewsSlider/ReviewsSlider';
import Text from '../components/Text/Text';
import Softwar from '../components/Softwar/Softwar';
import Picture from '../components/Picture/Picture';
import CasesCompareSlider from '../components/CasesCompareSlider/CasesCompareSlider';
import CasesSliderFull from '../components/CasesSliderFull/CasesSliderFull';
import softwarLogos from '../constants/softwarLogos';
import CasesItems from '../components/CasesItems/CasesItems';

// Импорты изображений CasesIntro
import case_intro_picture_jpg from '../assets/images/case-jornal.jpg';
import case_intro_picture_webp from '../assets/images/case-jornal.webp';
import case_intro_picture_avif from '../assets/images/case-jornal.avif';

// Импорты изображений Picture
import picture_jpg from '../assets/images/picture-jornal.jpg';
import picture_webp from '../assets/images/picture-jornal.webp';
import picture_avif from '../assets/images/picture-jornal.avif';

// Импорты изображений CasesCompareSlider
import case_compare_slider_bg from '../assets/images/case-compare-slider-bg-hr-1.svg';
import case_compare_slider_picture_left_1_jpg from '../assets/images/cases-compare-slider-jornal-left-1.jpg';
import case_compare_slider_picture_left_1_webp from '../assets/images/cases-compare-slider-jornal-left-1.webp';
import case_compare_slider_picture_left_1_avif from '../assets/images/cases-compare-slider-jornal-left-1.avif';
import case_compare_slider_picture_right_1_jpg from '../assets/images/cases-compare-slider-jornal-right-1.jpg';
import case_compare_slider_picture_right_1_webp from '../assets/images/cases-compare-slider-jornal-right-1.webp';
import case_compare_slider_picture_right_1_avif from '../assets/images/cases-compare-slider-jornal-right-1.avif';

import case_compare_slider_picture_left_2_jpg from '../assets/images/cases-compare-slider-jornal-left-2.jpg';
import case_compare_slider_picture_left_2_webp from '../assets/images/cases-compare-slider-jornal-left-2.webp';
import case_compare_slider_picture_left_2_avif from '../assets/images/cases-compare-slider-jornal-left-2.avif';
import case_compare_slider_picture_right_2_jpg from '../assets/images/cases-compare-slider-jornal-right-2.jpg';
import case_compare_slider_picture_right_2_webp from '../assets/images/cases-compare-slider-jornal-right-2.webp';
import case_compare_slider_picture_right_2_avif from '../assets/images/cases-compare-slider-jornal-right-2.avif';

import case_compare_slider_picture_left_3_jpg from '../assets/images/cases-compare-slider-jornal-left-3.jpg';
import case_compare_slider_picture_left_3_webp from '../assets/images/cases-compare-slider-jornal-left-3.webp';
import case_compare_slider_picture_left_3_avif from '../assets/images/cases-compare-slider-jornal-left-3.avif';
import case_compare_slider_picture_right_3_jpg from '../assets/images/cases-compare-slider-jornal-right-3.jpg';
import case_compare_slider_picture_right_3_webp from '../assets/images/cases-compare-slider-jornal-right-3.webp';
import case_compare_slider_picture_right_3_avif from '../assets/images/cases-compare-slider-jornal-right-3.avif';

import case_compare_slider_picture_left_4_jpg from '../assets/images/cases-compare-slider-jornal-left-4.jpg';
import case_compare_slider_picture_left_4_webp from '../assets/images/cases-compare-slider-jornal-left-4.webp';
import case_compare_slider_picture_left_4_avif from '../assets/images/cases-compare-slider-jornal-left-4.avif';
import case_compare_slider_picture_right_4_jpg from '../assets/images/cases-compare-slider-jornal-right-4.jpg';
import case_compare_slider_picture_right_4_webp from '../assets/images/cases-compare-slider-jornal-right-4.webp';
import case_compare_slider_picture_right_4_avif from '../assets/images/cases-compare-slider-jornal-right-4.avif';

import case_compare_slider_picture_left_5_jpg from '../assets/images/cases-compare-slider-jornal-left-5.jpg';
import case_compare_slider_picture_left_5_webp from '../assets/images/cases-compare-slider-jornal-left-5.webp';
import case_compare_slider_picture_left_5_avif from '../assets/images/cases-compare-slider-jornal-left-5.avif';
import case_compare_slider_picture_right_5_jpg from '../assets/images/cases-compare-slider-jornal-right-5.jpg';
import case_compare_slider_picture_right_5_webp from '../assets/images/cases-compare-slider-jornal-right-5.webp';
import case_compare_slider_picture_right_5_avif from '../assets/images/cases-compare-slider-jornal-right-5.avif';

// Импорты изображений CasesSliderFull
import case_slider_full_picture_1_1_jpg from '../assets/images/cases-slider-full-jornal-1-1.jpg';
import case_slider_full_picture_1_1_webp from '../assets/images/cases-slider-full-jornal-1-1.webp';
import case_slider_full_picture_1_1_avif from '../assets/images/cases-slider-full-jornal-1-1.avif';
import case_slider_full_picture_1_2_jpg from '../assets/images/cases-slider-full-jornal-1-2.jpg';
import case_slider_full_picture_1_2_webp from '../assets/images/cases-slider-full-jornal-1-2.webp';
import case_slider_full_picture_1_2_avif from '../assets/images/cases-slider-full-jornal-1-2.avif';
import case_slider_full_picture_1_3_jpg from '../assets/images/cases-slider-full-jornal-1-3.jpg';
import case_slider_full_picture_1_3_webp from '../assets/images/cases-slider-full-jornal-1-3.webp';
import case_slider_full_picture_1_3_avif from '../assets/images/cases-slider-full-jornal-1-3.avif';
import case_slider_full_picture_1_4_jpg from '../assets/images/cases-slider-full-jornal-1-4.jpg';
import case_slider_full_picture_1_4_webp from '../assets/images/cases-slider-full-jornal-1-4.webp';
import case_slider_full_picture_1_4_avif from '../assets/images/cases-slider-full-jornal-1-4.avif';
import case_slider_full_picture_1_5_jpg from '../assets/images/cases-slider-full-jornal-1-5.jpg';
import case_slider_full_picture_1_5_webp from '../assets/images/cases-slider-full-jornal-1-5.webp';
import case_slider_full_picture_1_5_avif from '../assets/images/cases-slider-full-jornal-1-5.avif';
import case_slider_full_picture_1_6_jpg from '../assets/images/cases-slider-full-jornal-1-6.jpg';
import case_slider_full_picture_1_6_webp from '../assets/images/cases-slider-full-jornal-1-6.webp';
import case_slider_full_picture_1_6_avif from '../assets/images/cases-slider-full-jornal-1-6.avif';

import case_slider_full_picture_2_1_jpg from '../assets/images/cases-slider-full-jornal-2-1.jpg';
import case_slider_full_picture_2_1_webp from '../assets/images/cases-slider-full-jornal-2-1.webp';
import case_slider_full_picture_2_1_avif from '../assets/images/cases-slider-full-jornal-2-1.avif';

import case_slider_full_picture_2_2_jpg from '../assets/images/cases-slider-full-jornal-2-2.jpg';
import case_slider_full_picture_2_2_webp from '../assets/images/cases-slider-full-jornal-2-2.webp';
import case_slider_full_picture_2_2_avif from '../assets/images/cases-slider-full-jornal-2-2.avif';

import case_slider_full_picture_2_3_jpg from '../assets/images/cases-slider-full-jornal-2-3.jpg';
import case_slider_full_picture_2_3_webp from '../assets/images/cases-slider-full-jornal-2-3.webp';
import case_slider_full_picture_2_3_avif from '../assets/images/cases-slider-full-jornal-2-3.avif';

import case_slider_full_picture_2_4_jpg from '../assets/images/cases-slider-full-jornal-2-4.jpg';
import case_slider_full_picture_2_4_webp from '../assets/images/cases-slider-full-jornal-2-4.webp';
import case_slider_full_picture_2_4_avif from '../assets/images/cases-slider-full-jornal-2-4.avif';

import case_slider_full_picture_2_5_jpg from '../assets/images/cases-slider-full-jornal-2-5.jpg';
import case_slider_full_picture_2_5_webp from '../assets/images/cases-slider-full-jornal-2-5.webp';
import case_slider_full_picture_2_5_avif from '../assets/images/cases-slider-full-jornal-2-5.avif';

import case_slider_full_picture_3_1_jpg from '../assets/images/cases-slider-full-jornal-3-1.jpg';
import case_slider_full_picture_3_1_webp from '../assets/images/cases-slider-full-jornal-3-1.webp';
import case_slider_full_picture_3_1_avif from '../assets/images/cases-slider-full-jornal-3-1.avif';
import case_slider_full_picture_3_2_jpg from '../assets/images/cases-slider-full-jornal-3-2.jpg';
import case_slider_full_picture_3_2_webp from '../assets/images/cases-slider-full-jornal-3-2.webp';
import case_slider_full_picture_3_2_avif from '../assets/images/cases-slider-full-jornal-3-2.avif';
import case_slider_full_picture_3_3_jpg from '../assets/images/cases-slider-full-jornal-3-3.jpg';
import case_slider_full_picture_3_3_webp from '../assets/images/cases-slider-full-jornal-3-3.webp';
import case_slider_full_picture_3_3_avif from '../assets/images/cases-slider-full-jornal-3-3.avif';
import case_slider_full_picture_3_4_jpg from '../assets/images/cases-slider-full-jornal-3-4.jpg';
import case_slider_full_picture_3_4_webp from '../assets/images/cases-slider-full-jornal-3-4.webp';
import case_slider_full_picture_3_4_avif from '../assets/images/cases-slider-full-jornal-3-4.avif';
import case_slider_full_picture_3_5_jpg from '../assets/images/cases-slider-full-jornal-3-5.jpg';
import case_slider_full_picture_3_5_webp from '../assets/images/cases-slider-full-jornal-3-5.webp';
import case_slider_full_picture_3_5_avif from '../assets/images/cases-slider-full-jornal-3-5.avif';

// Импорты ReviewsSlider
import reviews_slider_author_1 from '../assets/images/reviews-slider-1.svg';
import reviews_slider_author_2_jpg from '../assets/images/reviews-slider-3.jpg';
import reviews_slider_author_2_webp from '../assets/images/reviews-slider-3.webp';
import reviews_slider_author_2_avif from '../assets/images/reviews-slider-3.avif';

const contentCasesIntro = {
  title: 'Marks jornal',
  subtitle: 'Научный журнал',
  tags: ['WEB интерфейс', 'UX/UI', 'Custom CMS'],
  src: {
    url: 'https://marksgroup.ru/journalPage',
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
      desc: 'WEB',
    },
    {
      topic: 'Команда',
      desc: 'Разработчик full stack, верстальщик,<br> UX/UI дизайнер, PM, контент менеджер',
    },
    {
      topic: 'Что сделано',
      desc: 'Cервис для&nbsp;публикации научных статей',
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
    {
      id: '1_4',
      picture_left: {
        img: case_compare_slider_picture_left_4_jpg,
        webp: case_compare_slider_picture_left_4_webp,
        avif: case_compare_slider_picture_left_4_avif,
      },
      picture_right: {
        img: case_compare_slider_picture_right_4_jpg,
        webp: case_compare_slider_picture_right_4_webp,
        avif: case_compare_slider_picture_right_4_avif,
      },
    },
    {
      id: '1_5',
      picture_left: {
        img: case_compare_slider_picture_left_5_jpg,
        webp: case_compare_slider_picture_left_5_webp,
        avif: case_compare_slider_picture_left_5_avif,
      },
      picture_right: {
        img: case_compare_slider_picture_right_5_jpg,
        webp: case_compare_slider_picture_right_5_webp,
        avif: case_compare_slider_picture_right_5_avif,
      },
    },
  ],
};

const contentText = [
  {
    title: 'Задача',
    text: 'Разработать онлайн-сервис для&nbsp;публикации научных статей, который будет включать функционал для&nbsp;работы со&nbsp;сложными математическими формулами и&nbsp;таблицами.<br><br>Необходимо внедрить возможность предварительного просмотра аннотаций прямо с&nbsp;главной страницы портала. Система редактирования статей должна обладать интуитивно понятным интерфейсом, обеспечивающим комфортное взаимодействие с&nbsp;контентом для&nbsp;авторов любого уровня технической подготовки.',
  },
  {
    title: 'Поиск и фильтрация',
    text: 'Создан инновационный онлайн-сервис, предлагающий пользователям расширенные возможности фильтрации контента: материалы можно сортировать как по&nbsp;номерам журнальных выпусков, так и&nbsp;по&nbsp;тематическим категориям.<br><br>Механизм поиска построен на&nbsp;алгоритме сопоставления данных, благодаря чему система выдаёт максимально релевантные результаты, соответствующие запросу пользователя.',
  },

  {
    title: 'Информация о статье',
    text: 'Главная страница платформы предоставляет пользователям компактный обзор каждой публикации, включающий данные об&nbsp;авторах и&nbsp;участвующих учебных заведениях.<br><br>Пользователи могут просматривать аннотации и&nbsp;содержание статей прямо в&nbsp;карточке статьи, не&nbsp;переходя к&nbsp;полному тексту материала. Удобная система якорей в&nbsp;содержании позволяет мгновенно переходить к&nbsp;конкретным разделам публикации, существенно экономя время при работе с&nbsp;контентом.',
  },
  {
    title: 'Тело статьи',
    text: 'Административная панель, оснащённая технологией Markdown, предоставляет широкие возможности для&nbsp;работы с&nbsp;контентом: авторы могут легко вставлять и&nbsp;редактировать формулы, таблицы любой степени сложности.<br><br>Благодаря встроенным стилям оформления, материалы автоматически выводятся в&nbsp;едином, профессионально оформленном виде, что обеспечивает их&nbsp;презентабельный внешний вид.',
  },
  {
    title: 'Административная панель',
    text: 'Особую функциональность системе придаёт автоматическое создание содержания: технология считывает смысловые блоки, заданные специальными тегами, и&nbsp;формирует в&nbsp;левой части страницы закреплённое навигационное меню с&nbsp;якорными ссылками, позволяющее быстро перемещаться между разделами документа. <br><br>Дополнительно реализована возможность публикации статей в&nbsp;социальных сетях, что расширяет потенциал распространения научного контента.',
  },
];

const contentSoftwar = [softwarLogos.react, softwarLogos.nodejs, softwarLogos.figma];

const contentPicture = [
  {
    img: picture_jpg,
    webp: picture_webp,
    avif: picture_avif,
  },
];

const contentReviews = [
  {
    title: 'Отзыв клиента',
    text: 'Работа с HR-порталом на сайте стала для&nbsp;меня и для&nbsp;HR-команды ещё одним способом привлечения кандидатов. Платформа интуитивно понятна и удобна в использовании, опубликовать вакансии на портале не занимает большого количества времени. Лично мне нравится функция размещения горящих вакансий на главной странице портала на сайте. Сайт MARKS GROUP посещает множество специалистов из сферы проектирования и цифровых технологий, поэтому классно, что они сразу могут ознакомиться с нашими вакансиями через сайт, откликнуться и их резюме или контакты сразу попадают к нам на hr-почту, это очень удобно!',
    name: 'Мария<br> Ведущий специалист',
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
  ],
};

const case_slider_full_content_3 = {
  sizes: {
    width: '100%',
  },
  pictures: [
    {
      sizes: {
        width: '100%',
        height: '100%',
      },
      id: '3_1',
      picture: {
        img: case_slider_full_picture_3_1_jpg,
        webp: case_slider_full_picture_3_1_webp,
        avif: case_slider_full_picture_3_1_avif,
      },
    },
    {
      sizes: {
        width: '100%',
        height: '100%',
      },
      id: '3_2',
      picture: {
        img: case_slider_full_picture_3_2_jpg,
        webp: case_slider_full_picture_3_2_webp,
        avif: case_slider_full_picture_3_2_avif,
      },
    },
    {
      sizes: {
        width: '100%',
        height: '100%',
      },
      id: '3_3',
      picture: {
        img: case_slider_full_picture_3_3_jpg,
        webp: case_slider_full_picture_3_3_webp,
        avif: case_slider_full_picture_3_3_avif,
      },
    },
    {
      sizes: {
        width: '100%',
        height: '100%',
      },
      id: '3_4',
      picture: {
        img: case_slider_full_picture_3_4_jpg,
        webp: case_slider_full_picture_3_4_webp,
        avif: case_slider_full_picture_3_4_avif,
      },
    },
    {
      sizes: {
        width: '100%',
        height: '100%',
      },
      id: '3_5',
      picture: {
        img: case_slider_full_picture_3_5_jpg,
        webp: case_slider_full_picture_3_5_webp,
        avif: case_slider_full_picture_3_5_avif,
      },
    },
  ],
};

export default function CaseMarksJornal() {
  return (
    <main>
      <CasesIntro contentCasesIntro={contentCasesIntro} />
      <Text title={contentText[0].title} text={contentText[0].text} />
      <Softwar items={contentSoftwar} />
      <Picture src={contentPicture[0]} />
      <Text title={contentText[1].title} text={contentText[1].text} />
      <CasesSliderFull items={case_slider_full_content_1} />
      <Text title={contentText[2].title} text={contentText[2].text} />
      <CasesSliderFull items={case_slider_full_content_2} />
      <Text title={contentText[3].title} text={contentText[3].text} />
      <CasesSliderFull items={case_slider_full_content_3} />
      <Text title={contentText[4].title} text={contentText[4].text} />
      <CasesCompareSlider items={case_compare_slider_pictures_1} />
      {/* <ReviewsSlider items={contentReviews} /> */}
      <CasesItems type={['desktop', 'web']} excludeId="case-marksjornal" />
    </main>
  );
}
