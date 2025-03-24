import '../App.scss';

import CasesIntro from '../components/CasesIntro/CasesIntro';
import Text from '../components/Text/Text';
import Softwar from '../components/Softwar/Softwar';
import CasesSliderVideo from '../components/CasesSliderVideo/CasesSliderVideo';
import CaseIframe from '../components/CaseIframe/CaseIframe';
import CasesSliderFull from '../components/CasesSliderFull/CasesSliderFull';
import CasesSliderScroll from '../components/CasesSliderScroll/CasesSliderScroll';

import softwarLogos from '/src/constants/softwarLogos';

import case_intro_picture from '/src/assets/images/case-intro-canon-change.jpg';

import reviews_slider_author_1 from '/src/assets/images/reviews-slider-1.svg';
import reviews_slider_author_2 from '/src/assets/images/reviews-slider-2.jpg';

import case_slider_bg from '/src/assets/images/case-slider-bg-canon-change-1.svg';
import case_slider_full_bg from '/src/assets/images/case-slider-full-bg-canon-change-1.svg';
import case_compare_slider_bg from '/src/assets/images/case-compare-slider-bg-mg-1.svg';

import case_slider_video_left_1 from '/src/assets/videos/cases-slider-video-canon-change-left-1.mp4';
import case_slider_video_right_1 from '/src/assets/videos/cases-slider-video-canon-change-right-1.mp4';
import case_slider_video_left_2 from '/src/assets/videos/cases-slider-video-canon-change-left-2.mp4';
import case_slider_video_right_2 from '/src/assets/videos/cases-slider-video-canon-change-right-2.mp4';
import case_slider_video_left_3 from '/src/assets/videos/cases-slider-video-canon-change-left-3.mp4';
import case_slider_video_right_3 from '/src/assets/videos/cases-slider-video-canon-change-right-3.mp4';

import case_slider_full_picture_1 from '/src/assets/images/cases-slider-full-1.png';
import case_slider_full_picture_2 from '/src/assets/images/cases-slider-full-2.png';
import case_slider_full_picture_3 from '/src/assets/images/cases-slider-full-3.png';
import case_slider_full_picture_4 from '/src/assets/images/cases-slider-full-4.png';
import case_slider_full_picture_5 from '/src/assets/images/cases-slider-full-5.png';

import case_slider_full_picture_1_2 from '/src/assets/images/cases-slider-full-1-2.png';
import case_slider_full_picture_2_2 from '/src/assets/images/cases-slider-full-2-2.png';
import case_slider_full_picture_3_2 from '/src/assets/images/cases-slider-full-3-2.png';
import case_slider_full_picture_4_2 from '/src/assets/images/cases-slider-full-4-2.png';

import case_slider_scroll_picture_1_2 from '/src/assets/images/case-slider-scroll-1.png';
import case_slider_scroll_picture_2_2 from '/src/assets/images/case-slider-scroll-2.png';
import case_slider_scroll_picture_3_2 from '/src/assets/images/case-slider-scroll-3.png';

const contentCasesIntro = {
  title: 'Канон перемен',
  subtitle: 'Приложение с игровой механикой',
  tags: ['Android, IOS', 'Unreal Engine', 'UX/UI'],
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
    text: 'О кроссплатворме анриле и тд.',
  },
  {
    title: 'Результаты',
    text: 'Функционал монетизации: приложение имеет возможность локального сохранения гексаграмм на устройство пользователя, результат сопровождается описанием/комментарием пользователя с визуальными маркерами и возможностью удаления, редактирования. Возможность «поделится» результата  доступна пользователю в любом сценарии ведущем к результату  — «гексаграмме».',
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

const case_slider_full_content_1 = {
  sizes: {
    width_left: '84.4%',
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
    {
      id: '1_5',
      picture: case_slider_full_picture_5,
    },
    {
      id: '1_6',
      picture: case_slider_full_picture_1,
    },
  ],
};

const case_slider_full_content_2 = {
  sizes: {
    width_left: '100%',
  },
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
  ],
};

const case_slider_scroll_content = {
  bg: case_slider_full_bg,
  pictures: [
    {
      id: '1',
      picture: case_slider_scroll_picture_1_2,
    },
    {
      id: '2',
      picture: case_slider_scroll_picture_2_2,
    },
    {
      id: '3',
      picture: case_slider_scroll_picture_3_2,
    },
  ],
};

export default function CaseMarkssite() {
  return (
    <main>
      <CasesIntro contentCasesIntro={contentCasesIntro} />
      <Text title={contentText[0].title} text={contentText[0].text} />
      <Softwar items={contentSoftwar} />
      <CasesSliderVideo items={cases_slider_video_content} />
      <Text title={contentText[1].title} text={contentText[1].text} />
      <CaseIframe />

      <Text title={contentText[2].title} text={contentText[1].text} />
      <CasesSliderFull items={case_slider_full_content_1} />

      <Text title={contentText[3].title} text={contentText[1].text} />
      <CasesSliderFull items={case_slider_full_content_2} />
      <Text title={contentText[4].title} text={contentText[1].text} />
      <CasesSliderScroll items={case_slider_scroll_content} />
      <Text title={contentText[5].title} text={contentText[1].text} />
    </main>
  );
}
