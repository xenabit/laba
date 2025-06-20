import '../App.scss';
import { Link } from 'react-router-dom';

import CasesIntro from '../components/CasesIntro/CasesIntro';
import Text from '../components/Text/Text';
import Softwar from '../components/Softwar/Softwar';
import ReviewsSlider from '../components/ReviewsSlider/ReviewsSlider';
import CasesItems from '../components/CasesItems/CasesItems';
import CasesCompareSlider from '../components/CasesCompareSlider/CasesCompareSlider';
import CasesSliderFull from '../components/CasesSliderFull/CasesSliderFull';
import softwarLogos from '../constants/softwarLogos';

// Импорты изображений для CasesIntro
import case_intro_picture_jpg from '../assets/images/case-intro-markssite-hr.jpg';
import case_intro_picture_webp from '../assets/images/case-intro-markssite-hr.webp';
import case_intro_picture_avif from '../assets/images/case-intro-markssite-hr.avif';

// Импорты изображений для CasesCompareSlider
import case_compare_slider_bg from '../assets/images/case-compare-slider-bg-hr-1.svg';
import case_compare_slider_picture_left_1_jpg from '../assets/images/cases-compare-slider-markssite-hr-left-1.jpg';
import case_compare_slider_picture_left_1_webp from '../assets/images/cases-compare-slider-markssite-hr-left-1.webp';
import case_compare_slider_picture_left_1_avif from '../assets/images/cases-compare-slider-markssite-hr-left-1.avif';
import case_compare_slider_picture_right_1_jpg from '../assets/images/cases-compare-slider-markssite-hr-right-1.jpg';
import case_compare_slider_picture_right_1_webp from '../assets/images/cases-compare-slider-markssite-hr-right-1.webp';
import case_compare_slider_picture_right_1_avif from '../assets/images/cases-compare-slider-markssite-hr-right-1.avif';
import case_compare_slider_picture_left_2_jpg from '../assets/images/cases-compare-slider-markssite-hr-left-2.jpg';
import case_compare_slider_picture_left_2_webp from '../assets/images/cases-compare-slider-markssite-hr-left-2.webp';
import case_compare_slider_picture_left_2_avif from '../assets/images/cases-compare-slider-markssite-hr-left-2.avif';
import case_compare_slider_picture_right_2_jpg from '../assets/images/cases-compare-slider-markssite-hr-right-2.jpg';
import case_compare_slider_picture_right_2_webp from '../assets/images/cases-compare-slider-markssite-hr-right-2.webp';
import case_compare_slider_picture_right_2_avif from '../assets/images/cases-compare-slider-markssite-hr-right-2.avif';
import case_compare_slider_picture_left_3_jpg from '../assets/images/cases-compare-slider-markssite-hr-left-3.jpg';
import case_compare_slider_picture_left_3_webp from '../assets/images/cases-compare-slider-markssite-hr-left-3.webp';
import case_compare_slider_picture_left_3_avif from '../assets/images/cases-compare-slider-markssite-hr-left-3.avif';
import case_compare_slider_picture_right_3_jpg from '../assets/images/cases-compare-slider-markssite-hr-right-3.jpg';
import case_compare_slider_picture_right_3_webp from '../assets/images/cases-compare-slider-markssite-hr-right-3.webp';
import case_compare_slider_picture_right_3_avif from '../assets/images/cases-compare-slider-markssite-hr-right-3.avif';
import case_compare_slider_picture_left_4_jpg from '../assets/images/cases-compare-slider-markssite-hr-left-4.jpg';
import case_compare_slider_picture_left_4_webp from '../assets/images/cases-compare-slider-markssite-hr-left-4.webp';
import case_compare_slider_picture_left_4_avif from '../assets/images/cases-compare-slider-markssite-hr-left-4.avif';
import case_compare_slider_picture_right_4_jpg from '../assets/images/cases-compare-slider-markssite-hr-right-4.jpg';
import case_compare_slider_picture_right_4_webp from '../assets/images/cases-compare-slider-markssite-hr-right-4.webp';
import case_compare_slider_picture_right_4_avif from '../assets/images/cases-compare-slider-markssite-hr-right-4.avif';

// Импорты изображений для CasesSliderFull
import case_slider_full_picture_1_0_jpg from '../assets/images/cases-slider-full-markssite-hr-1-0.jpg';
import case_slider_full_picture_1_0_webp from '../assets/images/cases-slider-full-markssite-hr-1-0.webp';
import case_slider_full_picture_1_0_avif from '../assets/images/cases-slider-full-markssite-hr-1-0.avif';
import case_slider_full_picture_1_1_jpg from '../assets/images/cases-slider-full-markssite-hr-1-1.jpg';
import case_slider_full_picture_1_1_webp from '../assets/images/cases-slider-full-markssite-hr-1-1.webp';
import case_slider_full_picture_1_1_avif from '../assets/images/cases-slider-full-markssite-hr-1-1.avif';
import case_slider_full_picture_1_2_jpg from '../assets/images/cases-slider-full-markssite-hr-1-2.jpg';
import case_slider_full_picture_1_2_webp from '../assets/images/cases-slider-full-markssite-hr-1-2.webp';
import case_slider_full_picture_1_2_avif from '../assets/images/cases-slider-full-markssite-hr-1-2.avif';
import case_slider_full_picture_1_3_jpg from '../assets/images/cases-slider-full-markssite-hr-1-3.jpg';
import case_slider_full_picture_1_3_webp from '../assets/images/cases-slider-full-markssite-hr-1-3.webp';
import case_slider_full_picture_1_3_avif from '../assets/images/cases-slider-full-markssite-hr-1-3.avif';
import case_slider_full_picture_1_4_jpg from '../assets/images/cases-slider-full-markssite-hr-1-4.jpg';
import case_slider_full_picture_1_4_webp from '../assets/images/cases-slider-full-markssite-hr-1-4.webp';
import case_slider_full_picture_1_4_avif from '../assets/images/cases-slider-full-markssite-hr-1-4.avif';
import case_slider_full_picture_2_1_jpg from '../assets/images/cases-slider-full-markssite-hr-2-1.jpg';
import case_slider_full_picture_2_1_webp from '../assets/images/cases-slider-full-markssite-hr-2-1.webp';
import case_slider_full_picture_2_1_avif from '../assets/images/cases-slider-full-markssite-hr-2-1.avif';
import case_slider_full_picture_2_2_jpg from '../assets/images/cases-slider-full-markssite-hr-2-2.jpg';
import case_slider_full_picture_2_2_webp from '../assets/images/cases-slider-full-markssite-hr-2-2.webp';
import case_slider_full_picture_2_2_avif from '../assets/images/cases-slider-full-markssite-hr-2-2.avif';
import case_slider_full_picture_2_3_jpg from '../assets/images/cases-slider-full-markssite-hr-2-3.jpg';
import case_slider_full_picture_2_3_webp from '../assets/images/cases-slider-full-markssite-hr-2-3.webp';
import case_slider_full_picture_2_3_avif from '../assets/images/cases-slider-full-markssite-hr-2-3.avif';

// Импорты для ReviewsSlider
import reviews_slider_author_1 from '../assets/images/reviews-slider-1.svg';
import reviews_slider_author_2_jpg from '../assets/images/reviews-slider-3.jpg';
import reviews_slider_author_2_webp from '../assets/images/reviews-slider-3.webp';
import reviews_slider_author_2_avif from '../assets/images/reviews-slider-3.avif';

const contentCasesIntro = {
  title: 'marksgroup.ru',
  subtitle: 'HR портал компании',
  tags: ['WEB интерфейс', 'UX/UI', 'Custom CMS'],
  src: {
    url: 'https://marksgroup.ru/portal/vacanciesMain',
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
      desc: 'Разработчик full stack, верстальщик, UX/UI дизайнер, PM, контент менеджер',
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
  ],
};

const contentText = [
  {
    title: 'Задача',
    text: (
      <>
        Разработать HR портал для компании MARKSGROUP с функционалом формирования и просмотра вакансий, отправки анкет, представления общей информации о карьере в компании, информации о преимуществах.
        Портал интегрирован в корпоративный сайт компании. <Link to="/portfolio/markssite">Подробнее о кейсе</Link>
      </>
    ),
  },
  {
    title: 'Главная страница',
    text: 'Знакомство с компанией, ценности, достижения, направления деятельности, география, актуальные вакансии и контакты',
  },
  {
    title: 'Размещение вакансий',
    text: 'Реализована кастомная система управления вакансиями, конструктор для HR-специалистов. Конструктор позволяет гибко подбирать условия для каждой конкретной вакансии. География, бонусы, направление. В дальнейшем кандидат может отфильтровать список основываясь на своих предпочтениях.',
  },
  {
    title: 'Панель администратора',
    text: 'Реализован конструктор для управления вакансиями (скрытие, добавление, приоритетность), добавления достижений (премии, конкурсы), отдельной информации (стажировки, конкурсы) без необходимости вмешательства разработчиков, автономно и оперативно только специалистами компании (HR, PR и т.д.)',
  },
];

const contentSoftwar = [softwarLogos.react, softwarLogos.nodejs, softwarLogos.figma];

const contentReviews = [
  {
    title: 'Отзыв клиента',
    text: 'Работа с HR-порталом на сайте стала для меня и для HR-команды ещё одним способом привлечения кандидатов. Платформа интуитивно понятна и удобна в использовании, опубликовать вакансии на портале не занимает большого количества времени. Лично мне нравится функция размещения горящих вакансий на главной странице портала на сайте. Сайт MARKS GROUP посещает множество специалистов из сферы проектирования и цифровых технологий, поэтому классно, что они сразу могут ознакомиться с нашими вакансиями через сайт, откликнуться и их резюме или контакты сразу попадают к нам на hr-почту, это очень удобно!',
    name: 'Полина Журавлева <br> Ведущий специалист по подбору персонала',
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
  ],
};

export default function CaseMarkssiteHr() {
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
      <Text title={contentText[3].title} text={contentText[3].text} />
      <ReviewsSlider items={contentReviews} />
      <CasesItems type="web" excludeId="markssite-hr" />
    </main>
  );
}
