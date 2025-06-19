import '../App.scss';
import { Link } from 'react-router-dom';

import CasesIntro from '../components/CasesIntro/CasesIntro';
import Text from '../components/Text/Text';
import Softwar from '../components/Softwar/Softwar';
import CasesSliderFull from '../components/CasesSliderFull/CasesSliderFull';
import Picture from '../components/Picture/Picture';
import ReviewsSlider from '../components/ReviewsSlider/ReviewsSlider';
import VideoHorizontal from '../components/VideoHorizontal/VideoHorizontal';
import CasesItems from '../components/CasesItems/CasesItems';
import CasesCompareSlider from '../components/CasesCompareSlider/CasesCompareSlider';
import softwarLogos from '../constants/softwarLogos';

import picture from '../assets/images/picture-markssite.jpg';
import case_intro_picture from '../assets/images/case-intro-markssite.jpg';
import video_horizontal from '../assets/videos/video-horizontal-markssite.mp4';
import reviews_slider_author_1 from '../assets/images/reviews-slider-1.svg';
import reviews_slider_author_2 from '../assets/images/reviews-slider-2.jpg';
import case_compare_slider_bg from '../assets/images/case-compare-slider-bg-mg-1.svg';
import case_slider_full_picture_1_1 from '../assets/images/cases-slider-full-markssite-1-1.jpg';
import case_slider_full_picture_1_2 from '../assets/images/cases-slider-full-markssite-1-2.jpg';
import case_slider_full_picture_1_3 from '../assets/images/cases-slider-full-markssite-1-3.jpg';
import case_slider_full_picture_1_4 from '../assets/images/cases-slider-full-markssite-1-4.jpg';
import case_slider_full_picture_1_5 from '../assets/images/cases-slider-full-markssite-1-5.jpg';
import case_slider_full_picture_1_6 from '../assets/images/cases-slider-full-markssite-1-6.jpg';
import case_slider_full_picture_2_1 from '../assets/images/cases-slider-full-markssite-2-1.jpg';
import case_slider_full_picture_2_2 from '../assets/images/cases-slider-full-markssite-2-2.jpg';
import case_slider_full_picture_2_3 from '../assets/images/cases-slider-full-markssite-2-3.jpg';

import case_compare_slider_picture_left_1 from '../assets/images/cases-compare-slider-markssite-left-1.jpg';
import case_compare_slider_picture_right_1 from '../assets/images/cases-compare-slider-markssite-right-1.jpg';
import case_compare_slider_picture_left_2 from '../assets/images/cases-compare-slider-markssite-left-2.jpg';
import case_compare_slider_picture_right_2 from '../assets/images/cases-compare-slider-markssite-right-2.jpg';

const contentCasesIntro = {
  title: 'marksgroup.ru',
  subtitle: 'Корпоративный сайт компании',
  tags: ['WEB интерфейс', 'UX/UI', 'Custom CMS', 'Fastify'],
  src: {
    url: 'https://marksgroup.ru/',
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
    text: 'Создать корпоративный сайт компании MARKS GROUP, отразить ключевые компетенции компании. Сайт должен иметь кастомную административную панель, с возможность кастомизировать отдельные публикации и проекты. Фильтрация проектов по городу и направлении деятельности. А также кастомизировать отдельные публикации и проекты',
  },
  {
    title: 'Результаты',
    text: 'Готовый корпоративный сайт, главная страница, отдельные страницы под новостные материалы и под портфолио. Реализована система фильтрации материала - поиск по городам, направлениям и временным интервалам.',
  },
  {
    title: 'Административная панель',
    text: 'Разработан кастомный WEB конструктор для редактирования, добавления или удаления материалов (проектов, новостей) сайта, не требующий глубокого познания технических нюансов от специалистов.',
  },
  {
    title: 'HR портал',
    text: (
      <>
        В ходе аналитики предложена реализация собственного HR портала. Реализованы кастомная администраторская панель для специалистов (HR), поиск и фильтрация вакансий для пользователей. Подробнее о
        кейсе <Link to="/portfolio/markssite-hr">читайте здесь.</Link>
      </>
    ),
  },
  {
    title: 'Поиск соискателей',
    text: '30% анкет от общего числа поступает через HR портал',
  },
  {
    title: 'Поиск соискателей',
    text: 'При работе над HR порталом разработан дизайн брендирования для hh.ru, проведено обучение HR-специалистов по сборке вакансий.',
  },
];

const contentSoftwar = [softwarLogos.react, softwarLogos.nodejs, softwarLogos.figma];

const contentReviews = [
  {
    title: 'Отзыв клиента',
    text: 'Отдельная благодарность за то, что делаете работу как для себя. Всё просто и понятно, без лишних терминов и с реальным вниманием к нашим словам',
    name: 'Виктор Потугин<br> менеджер проекта MARKS GROUP',
    picture: [{ logo: reviews_slider_author_1, title: 'Манагер' }],
  },
];

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
  ],
};

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
    {
      sizes: {
        width: '100%',
        height: '100%',
      },
      id: '1_5',
      picture: case_slider_full_picture_1_5,
    },
    {
      sizes: {
        width: '100%',
        height: '100%',
      },
      id: '1_6',
      picture: case_slider_full_picture_1_6,
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
      <Picture src={picture} />
      <Text title={contentText[2].title} text={contentText[2].text} />
      <CasesSliderFull items={case_slider_full_content_2} />
      <Text title={contentText[3].title} text={contentText[3].text} />
      <CasesCompareSlider items={case_compare_slider_pictures_1} />
      <Text title={contentText[4].title} text={contentText[4].text} />
      <VideoHorizontal videoUrl={video_horizontal} />
      <Text title={contentText[5].title} text={contentText[5].text} />
      <ReviewsSlider items={contentReviews} />
      <CasesItems type="web" excludeId="markssite" />
    </main>
  );
}
