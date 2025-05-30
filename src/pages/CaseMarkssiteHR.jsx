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

import case_intro_picture from '../assets/images/case-intro-markssite-hr.jpg';
import case_compare_slider_bg from '../assets/images/case-compare-slider-bg-hr-1.svg';

import case_compare_slider_picture_left_1 from '../assets/images/cases-compare-slider-markssite-hr-left-1.jpg';
import case_compare_slider_picture_right_1 from '../assets/images/cases-compare-slider-markssite-hr-right-1.jpg';
import case_compare_slider_picture_left_2 from '../assets/images/cases-compare-slider-markssite-hr-left-2.jpg';
import case_compare_slider_picture_right_2 from '../assets/images/cases-compare-slider-markssite-hr-right-2.jpg';
import case_compare_slider_picture_left_3 from '../assets/images/cases-compare-slider-markssite-hr-left-3.jpg';
import case_compare_slider_picture_right_3 from '../assets/images/cases-compare-slider-markssite-hr-right-3.jpg';
import case_compare_slider_picture_left_4 from '../assets/images/cases-compare-slider-markssite-hr-left-4.jpg';
import case_compare_slider_picture_right_4 from '../assets/images/cases-compare-slider-markssite-hr-right-4.jpg';

import reviews_slider_author_1 from '../assets/images/reviews-slider-1.svg';
import reviews_slider_author_2 from '../assets/images/reviews-slider-3.jpg';

import case_slider_full_picture_1_0 from '../assets/images/cases-slider-full-markssite-hr-1-0.jpg';
import case_slider_full_picture_1_1 from '../assets/images/cases-slider-full-markssite-hr-1-1.jpg';
import case_slider_full_picture_1_2 from '../assets/images/cases-slider-full-markssite-hr-1-2.jpg';
import case_slider_full_picture_1_3 from '../assets/images/cases-slider-full-markssite-hr-1-3.jpg';
import case_slider_full_picture_1_4 from '../assets/images/cases-slider-full-markssite-hr-1-4.jpg';
import case_slider_full_picture_2_1 from '../assets/images/cases-slider-full-markssite-hr-2-1.jpg';
import case_slider_full_picture_2_2 from '../assets/images/cases-slider-full-markssite-hr-2-2.jpg';
import case_slider_full_picture_2_3 from '../assets/images/cases-slider-full-markssite-hr-2-3.jpg';

const contentCasesIntro = {
  title: 'marksgroup.ru',
  subtitle: 'HR портал компании',
  tags: ['WEB интерфейс', 'UX/UI', 'Custom CMS'],
  src: {
    url: 'https://marksgroup.ru/portal/vacanciesMain',
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
      desc: 'Разработчик full stack, верстальщик,<br> UX/UI дизайнер, PM, контент менеджер',
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
      picture_left: case_compare_slider_picture_left_1,
      picture_right: case_compare_slider_picture_right_1,
    },
    {
      id: '1_2',
      picture_left: case_compare_slider_picture_left_2,
      picture_right: case_compare_slider_picture_right_2,
    },
    {
      id: '1_3',
      picture_left: case_compare_slider_picture_left_3,
      picture_right: case_compare_slider_picture_right_3,
    },
    {
      id: '1_4',
      picture_left: case_compare_slider_picture_left_4,
      picture_right: case_compare_slider_picture_right_4,
    },
  ],
};

const contentText = [
  {
    title: 'Задача',
    text: (
      <>
        В ходе работ над корпоративным сайтом MARKSGROUP было предложено разработать свой HR портал с функционалом формирования и просмотра вакансий, отправки анкет, представления общей информации о
        карьере в компании, информации о преимуществах. Подробнее о кейсе <Link to="/portfolio/markssite">MARKSGROUP.</Link>
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
    text: 'Реализован конструктор для управления вакансиями(скрытие, добавление, приоритетность), добавления достижений (премии, конкурсы), отдельной информации (стажировки, конкурсы) без необходимости вмешательства разработчиков, автономно и оперативно только специалистами компании (HR, PR и т.д.)',
  },
];

const contentSoftwar = [softwarLogos.react, softwarLogos.nodejs, softwarLogos.figma];

const contentReviews = [
  {
    title: 'Отзыв клиента',
    text: 'Работа с&nbsp;HR-порталом на&nbsp;сайте стала для меня и&nbsp;для HR-команды ещё одним способом привлечения кандидатов. Платформа интуитивно понятна и&nbsp;удобна в&nbsp;использовании, опубликовать вакансии на&nbsp;портале не&nbsp;занимает большого количества времени. Лично мне нравится функция размещения горящих вакансий на&nbsp;главной странице портала на&nbsp;сайте. Сайт MARKS GROUP посещает множество специалистов из&nbsp;сферы проектирования и&nbsp;цифровых технологий, поэтому классно, что они сразу могут ознакомиться с&nbsp;нашими вакансиями через сайт, откликнуться и&nbsp;их&nbsp;резюме или контакты сразу попадают к&nbsp;нам на&nbsp;hr-почту, это очень удобно!',
    name: 'Полина Журавлева <br> Ведущий специалист по подбору персонала',
    picture: [
      { logo: reviews_slider_author_1, title: 'Манагер' },
      { logo: reviews_slider_author_2, title: 'Клиент' },
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
      picture: case_slider_full_picture_1_0,
    },
    {
      sizes: {
        width: '100%',
        height: '100%',
      },
      id: '1_1',
      picture: case_slider_full_picture_1_1,
    },
    {
      sizes: {
        width: '100%',
        height: '100%',
      },
      id: '1_1',
      picture: case_slider_full_picture_1_1,
    },
    {
      sizes: {
        width: '100%',
        height: '100%',
      },
      id: '1_2',
      picture: case_slider_full_picture_1_2,
    },
    {
      sizes: {
        width: '100%',
        height: '100%',
      },
      id: '1_3',
      picture: case_slider_full_picture_1_3,
    },
    {
      id: '1_4',
      picture: case_slider_full_picture_1_4,
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
      picture: case_slider_full_picture_2_1,
    },
    {
      sizes: {
        width: '100%',
        height: '100%',
      },
      id: '2_2',
      picture: case_slider_full_picture_2_2,
    },
    {
      sizes: {
        width: '100%',
        height: '100%',
      },
      id: '2_3',
      picture: case_slider_full_picture_2_3,
    },
  ],
};

export default function CaseMarkssite() {
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
      <Text title={contentText[3].title} text={contentText[2].text} />
      <ReviewsSlider items={contentReviews} />
      <CasesItems type="web" excludeId="markssite-hr" />
    </main>
  );
}
