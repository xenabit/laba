import softwarLogos from '../../constants/softwarLogos';

// Импорты изображений CasesIntro
import case_intro_picture_jpg from '../../assets/images/case-intro-tamtam.jpg';
import case_intro_picture_webp from '../../assets/images/case-intro-tamtam.webp';
import case_intro_picture_webp_2x from '../../assets/images/case-intro-tamtam-2x.webp';
import case_intro_picture_avif from '../../assets/images/case-intro-tamtam.avif';
import case_intro_picture_avif_2x from '../../assets/images/case-intro-tamtam-2x.avif';

// Импорты изображений Picture
import picture_svg from '../../assets/images/picture-tamtam.svg';

// Импорты изображений CaseIframe
import case_iframe_preview_image_jpg from '../../assets/images/case-iframe-tamtam.jpg';
import case_iframe_preview_image_webp from '../../assets/images/case-iframe-tamtam.webp';
import case_iframe_preview_image_avif from '../../assets/images/case-iframe-tamtam.avif';

// Импорты изображений ReviewsSlider
import reviews_slider_author_1 from '../../assets/images/reviews-slider-1.svg';
import reviews_slider_author_2_jpg from '../../assets/images/reviews-slider-2.jpg';
import reviews_slider_author_2_webp from '../../assets/images/reviews-slider-2.webp';
import reviews_slider_author_2_avif from '../../assets/images/reviews-slider-2.avif';

// Импорты фоновых изображений
import case_slider_bg from '../../assets/images/case-slider-bg-tamtam-1.svg';
import case_slider_full_bg from '../../assets/images/case-slider-full-bg-tamtam-1.svg';

export const contentCasesIntro = {
  title: 'Там Там: </br>Мой милый питомец',
  subtitle: 'Гиперказуальная игра тамагочи',
  tags: ['Android, IOS', 'Unreal Engine', 'UX/UI', '3D'],
  src: {
    url: 'https://www.rustore.ru/catalog/app/ru.laba.tamtam',
    title: 'Перейти на stor',
  },
  picture_intro: {
    img: case_intro_picture_jpg,
    webp: case_intro_picture_webp,
    webp2x: case_intro_picture_webp_2x,
    avif: case_intro_picture_avif,
    avif2x: case_intro_picture_avif_2x,
  },
  about: [
    {
      topic: 'Клиент',
      desc: 'LABA',
    },
    {
      topic: 'Платформа',
      desc: 'Мобильные',
    },
    {
      topic: 'Команда',
      desc: 'Разработчик Unreal Engine, моделлер,<br> PM, Арт-дир, UX/UI дизайнер, иллюстратор',
    },
    {
      topic: 'Что сделано',
      desc: 'Приложение с игровой механикой',
    },
  ],
};

export const contentText = [
  {
    title: 'Задача',
    text: 'Создать игру в&nbsp;жанре виртуального тамагочи с&nbsp;живым 3D-персонажем, который реагирует на&nbsp;действия пользователя и&nbsp;изменения окружения. Основной геймплей построен на&nbsp;уходе за&nbsp;персонажем и&nbsp;поддержании его состояния.</br></br>Дополнительно необходимо реализовать систему кастомизации&nbsp;&mdash; одежду, аксессуары и&nbsp;элементы интерьера&nbsp;&mdash; а&nbsp;также набор мини-игр для получения ресурсов и&nbsp;развития игрового процесса.',
  },
  {
    title: 'Поиски образа',
    text: 'Команда провела большую работу по&nbsp;проработке механик игры и&nbsp;визуального образа персонажа, чтобы объединить игровой дизайн и&nbsp;эмоциональную составляющую продукта. Основной фокус был направлен не&nbsp;только на&nbsp;поиск визуального стиля, но&nbsp;и&nbsp;на&nbsp;выстраивание логики геймплея и&nbsp;взаимодействия с&nbsp;пользователем. С&nbsp;творческими и&nbsp;концептуальными решениями можно <a href="#caseiframe">ознакомиться ниже.</a>',
  },
  {
    title: 'Геймплей',
    text: 'TamTam&nbsp;&mdash; это симулятор виртуального питомца в&nbsp;формате тамагочи. Игрок ежедневно ухаживает за&nbsp;персонажем: следит за&nbsp;его состоянием, кормит, играет с&nbsp;ним и&nbsp;поддерживает его настроение.</br></br>Дополнительно есть система кастомизации (одежда, аксессуары) и&nbsp;прогрессия через ежедневное взаимодействие. Также реализованы ивенты и&nbsp;активности с&nbsp;наградами, а&nbsp;основной акцент сделан на&nbsp;регулярное возвращение игрока и&nbsp;развитие &laquo;связи&raquo; с&nbsp;персонажем через простые действия и&nbsp;реакцию на&nbsp;них.',
  },
  {
    title: 'Дизайн',
    text: 'Стиль основан на&nbsp;дружелюбной, округлой пластике форм и&nbsp;простой, интуитивной визуальной системе, доступной широкой аудитории.</br></br>Основные панели (инвентарь, магазин, ресурсы) выполнены в&nbsp;объёмной пластиковой стилистике, а&nbsp;интерактивные элементы&nbsp;&mdash; более плоские, что разделяет уровни интерфейса и&nbsp;упрощает восприятие. Кнопки и&nbsp;ключевые акценты имеют объём и&nbsp;блики, чтобы лучше считываться и&nbsp;ощущаться более &laquo;физическими&raquo;.</br></br>Интерфейс поддерживает три пастельные темы, которые можно настраивать, а&nbsp;также событийную тему, меняющуюся под текущие внутриигровые активности.',
  },
  {
    title: 'События в игре',
    text: 'События&nbsp;&mdash; это отдельные тематические игровые сценарии, в&nbsp;которых персонажи и&nbsp;окружение полностью погружаются в&nbsp;заданную тему. В&nbsp;их&nbsp;рамках игрок выполняет специальные задачи и&nbsp;получает доступ к&nbsp;уникальным предметам: одежде, мебели и&nbsp;декоративным элементам, недоступным в&nbsp;основном режиме.</br></br>Каждое событие имеет собственное визуальное оформление&nbsp;&mdash; от&nbsp;интерфейса до&nbsp;игровых объектов, включая отдельные иллюстрации и&nbsp;тематические ассеты. Для него выстраивается линейная структура: вход, цепочка задач и&nbsp;завершение, что делает прохождение понятным и&nbsp;цельным.</br></br>События работают как самостоятельные контентные модули, обновляющие визуальный стиль игры и&nbsp;расширяющие игровой опыт.',
  },

  {
    title: 'Маркетинг',
    text: 'Мы&nbsp;сопровождаем продукт на&nbsp;всех этапах продвижения: полностью проработаны страницы в&nbsp;сторах, включая визуальное оформление и&nbsp;SEO-оптимизацию текстов для RuStore и&nbsp;других платформ с&nbsp;целью повышения видимости и&nbsp;конверсии. Также разработан сайт для привлечения трафика в&nbsp;сторы и&nbsp;выстроены коммуникационные площадки под разные аудитории.',
  },
  {
    title: 'Каналы',
    text: 'Во&nbsp;ВКонтакте ведётся активное сообщество с&nbsp;ивентами, головоломками и&nbsp;заданиями, за&nbsp;выполнение которых игроки получают внутриигровые награды. Здесь&nbsp;же публикуются истории персонажей и&nbsp;сопровождающие их&nbsp;эксклюзивные иллюстрации.</br></br>Telegram-канал ориентирован на&nbsp;более широкую аудиторию: там размещается ностальгический контент, а&nbsp;также материалы о&nbsp;тамагочи как формате, его влиянии на&nbsp;развитие эмпатии и&nbsp;пользе для детей и&nbsp;взрослых.',
  },
  {
    title: 'Разработка',
    text: 'Игра полностью разработана на&nbsp;Unreal Engine и&nbsp;сочетает 3D-окружение с&nbsp;2D-интерфейсом, встроенным в&nbsp;игровое пространство и&nbsp;стилистически с&nbsp;ним единым.</br></br>Анимация персонажа выполнена в&nbsp;милой, плавной мультипликационной стилистике. Она построена на&nbsp;упрощённом скелете четвероногого животного и&nbsp;реализована через Animation Montages, объединённые в&nbsp;Animation Blueprint, что обеспечивает естественные переходы и&nbsp;вариативность состояний, включая idle-анимации.</br></br>Звуковая система на&nbsp;базе MetaSounds синхронизирована с&nbsp;анимациями и&nbsp;позволяет отдельно управлять UI-озвучкой и&nbsp;голосом персонажа. Озвучка стилизована под детскую, фрагментарную речь без связных фраз.',
  },
];

export const contentSoftwar = [softwarLogos.unreal, softwarLogos.blender, softwarLogos.figma];

export const caseIframePreview = {
  img: case_iframe_preview_image_jpg,
  webp: case_iframe_preview_image_webp,
  avif: case_iframe_preview_image_avif,
};
// Импорты изображений CasesSliderFull (первый набор)
import case_slider_full_picture_1_jpg from '../../assets/images/cases-slider-full-tamtam-1.jpg';
import case_slider_full_picture_1_webp from '../../assets/images/cases-slider-full-tamtam-1.webp';
import case_slider_full_picture_1_webp_2x from '../../assets/images/cases-slider-full-tamtam-1-2x.webp';
import case_slider_full_picture_1_avif from '../../assets/images/cases-slider-full-tamtam-1.avif';
import case_slider_full_picture_1_avif_2x from '../../assets/images/cases-slider-full-tamtam-1-2x.avif';

import case_slider_full_picture_2_jpg from '../../assets/images/cases-slider-full-tamtam-2.jpg';
import case_slider_full_picture_2_webp from '../../assets/images/cases-slider-full-tamtam-2.webp';
import case_slider_full_picture_2_webp_2x from '../../assets/images/cases-slider-full-tamtam-2-2x.webp';
import case_slider_full_picture_2_avif from '../../assets/images/cases-slider-full-tamtam-2.avif';
import case_slider_full_picture_2_avif_2x from '../../assets/images/cases-slider-full-tamtam-2-2x.avif';

import case_slider_full_picture_3_jpg from '../../assets/images/cases-slider-full-tamtam-3.jpg';
import case_slider_full_picture_3_webp from '../../assets/images/cases-slider-full-tamtam-3.webp';
import case_slider_full_picture_3_webp_2x from '../../assets/images/cases-slider-full-tamtam-3-2x.webp';
import case_slider_full_picture_3_avif from '../../assets/images/cases-slider-full-tamtam-3.avif';
import case_slider_full_picture_3_avif_2x from '../../assets/images/cases-slider-full-tamtam-3-2x.avif';

import case_slider_full_picture_4_jpg from '../../assets/images/cases-slider-full-tamtam-4.jpg';
import case_slider_full_picture_4_webp from '../../assets/images/cases-slider-full-tamtam-4.webp';
import case_slider_full_picture_4_webp_2x from '../../assets/images/cases-slider-full-tamtam-4-2x.webp';
import case_slider_full_picture_4_avif from '../../assets/images/cases-slider-full-tamtam-4.avif';
import case_slider_full_picture_4_avif_2x from '../../assets/images/cases-slider-full-tamtam-4-2x.avif';

// Импорты изображений CasesSliderFull (второй набор) - 5 слайдов
import case_slider_full_picture_1_2_jpg from '../../assets/images/cases-slider-full-tamtam-1-2.jpg';
import case_slider_full_picture_1_2_webp from '../../assets/images/cases-slider-full-tamtam-1-2.webp';
import case_slider_full_picture_1_2_webp_2x from '../../assets/images/cases-slider-full-tamtam-1-2-2x.webp';
import case_slider_full_picture_1_2_avif from '../../assets/images/cases-slider-full-tamtam-1-2.avif';
import case_slider_full_picture_1_2_avif_2x from '../../assets/images/cases-slider-full-tamtam-1-2-2x.avif';

import case_slider_full_picture_2_2_jpg from '../../assets/images/cases-slider-full-tamtam-2-2.jpg';
import case_slider_full_picture_2_2_webp from '../../assets/images/cases-slider-full-tamtam-2-2.webp';
import case_slider_full_picture_2_2_webp_2x from '../../assets/images/cases-slider-full-tamtam-2-2-2x.webp';
import case_slider_full_picture_2_2_avif from '../../assets/images/cases-slider-full-tamtam-2-2.avif';
import case_slider_full_picture_2_2_avif_2x from '../../assets/images/cases-slider-full-tamtam-2-2-2x.avif';

import case_slider_full_picture_3_2_jpg from '../../assets/images/cases-slider-full-tamtam-3-2.jpg';
import case_slider_full_picture_3_2_webp from '../../assets/images/cases-slider-full-tamtam-3-2.webp';
import case_slider_full_picture_3_2_webp_2x from '../../assets/images/cases-slider-full-tamtam-3-2-2x.webp';
import case_slider_full_picture_3_2_avif from '../../assets/images/cases-slider-full-tamtam-3-2.avif';
import case_slider_full_picture_3_2_avif_2x from '../../assets/images/cases-slider-full-tamtam-3-2-2x.avif';

import case_slider_full_picture_4_2_jpg from '../../assets/images/cases-slider-full-tamtam-4-2.jpg';
import case_slider_full_picture_4_2_webp from '../../assets/images/cases-slider-full-tamtam-4-2.webp';
import case_slider_full_picture_4_2_webp_2x from '../../assets/images/cases-slider-full-tamtam-4-2-2x.webp';
import case_slider_full_picture_4_2_avif from '../../assets/images/cases-slider-full-tamtam-4-2.avif';
import case_slider_full_picture_4_2_avif_2x from '../../assets/images/cases-slider-full-tamtam-4-2-2x.avif';

import case_slider_full_picture_5_2_jpg from '../../assets/images/cases-slider-full-tamtam-5-2.jpg';
import case_slider_full_picture_5_2_webp from '../../assets/images/cases-slider-full-tamtam-5-2.webp';
import case_slider_full_picture_5_2_webp_2x from '../../assets/images/cases-slider-full-tamtam-5-2-2x.webp';
import case_slider_full_picture_5_2_avif from '../../assets/images/cases-slider-full-tamtam-5-2.avif';
import case_slider_full_picture_5_2_avif_2x from '../../assets/images/cases-slider-full-tamtam-5-2-2x.avif';

// Импорты для 3-го слайдера (3 слайда)
import case_slider_full_picture_1_3_jpg from '../../assets/images/cases-slider-full-tamtam-1-3.jpg';
import case_slider_full_picture_1_3_webp from '../../assets/images/cases-slider-full-tamtam-1-3.webp';
import case_slider_full_picture_1_3_webp_2x from '../../assets/images/cases-slider-full-tamtam-1-3-2x.webp';
import case_slider_full_picture_1_3_avif from '../../assets/images/cases-slider-full-tamtam-1-3.avif';
import case_slider_full_picture_1_3_avif_2x from '../../assets/images/cases-slider-full-tamtam-1-3-2x.avif';

import case_slider_full_picture_2_3_jpg from '../../assets/images/cases-slider-full-tamtam-2-3.jpg';
import case_slider_full_picture_2_3_webp from '../../assets/images/cases-slider-full-tamtam-2-3.webp';
import case_slider_full_picture_2_3_webp_2x from '../../assets/images/cases-slider-full-tamtam-2-3-2x.webp';
import case_slider_full_picture_2_3_avif from '../../assets/images/cases-slider-full-tamtam-2-3.avif';
import case_slider_full_picture_2_3_avif_2x from '../../assets/images/cases-slider-full-tamtam-2-3-2x.avif';

import case_slider_full_picture_3_3_jpg from '../../assets/images/cases-slider-full-tamtam-3-3.jpg';
import case_slider_full_picture_3_3_webp from '../../assets/images/cases-slider-full-tamtam-3-3.webp';
import case_slider_full_picture_3_3_webp_2x from '../../assets/images/cases-slider-full-tamtam-3-3-2x.webp';
import case_slider_full_picture_3_3_avif from '../../assets/images/cases-slider-full-tamtam-3-3.avif';
import case_slider_full_picture_3_3_avif_2x from '../../assets/images/cases-slider-full-tamtam-3-3-2x.avif';

// Импорты для 4-го слайдера (3 слайда)
import case_slider_full_picture_1_4_jpg from '../../assets/images/cases-slider-full-tamtam-1-4.jpg';
import case_slider_full_picture_1_4_webp from '../../assets/images/cases-slider-full-tamtam-1-4.webp';
import case_slider_full_picture_1_4_webp_2x from '../../assets/images/cases-slider-full-tamtam-1-4-2x.webp';
import case_slider_full_picture_1_4_avif from '../../assets/images/cases-slider-full-tamtam-1-4.avif';
import case_slider_full_picture_1_4_avif_2x from '../../assets/images/cases-slider-full-tamtam-1-4-2x.avif';

import case_slider_full_picture_2_4_jpg from '../../assets/images/cases-slider-full-tamtam-2-4.jpg';
import case_slider_full_picture_2_4_webp from '../../assets/images/cases-slider-full-tamtam-2-4.webp';
import case_slider_full_picture_2_4_webp_2x from '../../assets/images/cases-slider-full-tamtam-2-4-2x.webp';
import case_slider_full_picture_2_4_avif from '../../assets/images/cases-slider-full-tamtam-2-4.avif';
import case_slider_full_picture_2_4_avif_2x from '../../assets/images/cases-slider-full-tamtam-2-4-2x.avif';

import case_slider_full_picture_3_4_jpg from '../../assets/images/cases-slider-full-tamtam-3-4.jpg';
import case_slider_full_picture_3_4_webp from '../../assets/images/cases-slider-full-tamtam-3-4.webp';
import case_slider_full_picture_3_4_webp_2x from '../../assets/images/cases-slider-full-tamtam-3-4-2x.webp';
import case_slider_full_picture_3_4_avif from '../../assets/images/cases-slider-full-tamtam-3-4.avif';
import case_slider_full_picture_3_4_avif_2x from '../../assets/images/cases-slider-full-tamtam-3-4-2x.avif';

// Импорты для 5-го слайдера (13 слайдов)
import case_slider_full_picture_1_5_jpg from '../../assets/images/cases-slider-full-tamtam-1-5.jpg';
import case_slider_full_picture_1_5_webp from '../../assets/images/cases-slider-full-tamtam-1-5.webp';
import case_slider_full_picture_1_5_webp_2x from '../../assets/images/cases-slider-full-tamtam-1-5-2x.webp';
import case_slider_full_picture_1_5_avif from '../../assets/images/cases-slider-full-tamtam-1-5.avif';
import case_slider_full_picture_1_5_avif_2x from '../../assets/images/cases-slider-full-tamtam-1-5-2x.avif';

import case_slider_full_picture_2_5_jpg from '../../assets/images/cases-slider-full-tamtam-2-5.jpg';
import case_slider_full_picture_2_5_webp from '../../assets/images/cases-slider-full-tamtam-2-5.webp';
import case_slider_full_picture_2_5_webp_2x from '../../assets/images/cases-slider-full-tamtam-2-5-2x.webp';
import case_slider_full_picture_2_5_avif from '../../assets/images/cases-slider-full-tamtam-2-5.avif';
import case_slider_full_picture_2_5_avif_2x from '../../assets/images/cases-slider-full-tamtam-2-5-2x.avif';

import case_slider_full_picture_3_5_jpg from '../../assets/images/cases-slider-full-tamtam-3-5.jpg';
import case_slider_full_picture_3_5_webp from '../../assets/images/cases-slider-full-tamtam-3-5.webp';
import case_slider_full_picture_3_5_webp_2x from '../../assets/images/cases-slider-full-tamtam-3-5-2x.webp';
import case_slider_full_picture_3_5_avif from '../../assets/images/cases-slider-full-tamtam-3-5.avif';
import case_slider_full_picture_3_5_avif_2x from '../../assets/images/cases-slider-full-tamtam-3-5-2x.avif';

import case_slider_full_picture_4_5_jpg from '../../assets/images/cases-slider-full-tamtam-4-5.jpg';
import case_slider_full_picture_4_5_webp from '../../assets/images/cases-slider-full-tamtam-4-5.webp';
import case_slider_full_picture_4_5_webp_2x from '../../assets/images/cases-slider-full-tamtam-4-5-2x.webp';
import case_slider_full_picture_4_5_avif from '../../assets/images/cases-slider-full-tamtam-4-5.avif';
import case_slider_full_picture_4_5_avif_2x from '../../assets/images/cases-slider-full-tamtam-4-5-2x.avif';

import case_slider_full_picture_5_5_jpg from '../../assets/images/cases-slider-full-tamtam-5-5.jpg';
import case_slider_full_picture_5_5_webp from '../../assets/images/cases-slider-full-tamtam-5-5.webp';
import case_slider_full_picture_5_5_webp_2x from '../../assets/images/cases-slider-full-tamtam-5-5-2x.webp';
import case_slider_full_picture_5_5_avif from '../../assets/images/cases-slider-full-tamtam-5-5.avif';
import case_slider_full_picture_5_5_avif_2x from '../../assets/images/cases-slider-full-tamtam-5-5-2x.avif';

import case_slider_full_picture_6_5_jpg from '../../assets/images/cases-slider-full-tamtam-6-5.jpg';
import case_slider_full_picture_6_5_webp from '../../assets/images/cases-slider-full-tamtam-6-5.webp';
import case_slider_full_picture_6_5_webp_2x from '../../assets/images/cases-slider-full-tamtam-6-5-2x.webp';
import case_slider_full_picture_6_5_avif from '../../assets/images/cases-slider-full-tamtam-6-5.avif';
import case_slider_full_picture_6_5_avif_2x from '../../assets/images/cases-slider-full-tamtam-6-5-2x.avif';

import case_slider_full_picture_7_5_jpg from '../../assets/images/cases-slider-full-tamtam-7-5.jpg';
import case_slider_full_picture_7_5_webp from '../../assets/images/cases-slider-full-tamtam-7-5.webp';
import case_slider_full_picture_7_5_webp_2x from '../../assets/images/cases-slider-full-tamtam-7-5-2x.webp';
import case_slider_full_picture_7_5_avif from '../../assets/images/cases-slider-full-tamtam-7-5.avif';
import case_slider_full_picture_7_5_avif_2x from '../../assets/images/cases-slider-full-tamtam-7-5-2x.avif';

import case_slider_full_picture_8_5_jpg from '../../assets/images/cases-slider-full-tamtam-8-5.jpg';
import case_slider_full_picture_8_5_webp from '../../assets/images/cases-slider-full-tamtam-8-5.webp';
import case_slider_full_picture_8_5_webp_2x from '../../assets/images/cases-slider-full-tamtam-8-5-2x.webp';
import case_slider_full_picture_8_5_avif from '../../assets/images/cases-slider-full-tamtam-8-5.avif';
import case_slider_full_picture_8_5_avif_2x from '../../assets/images/cases-slider-full-tamtam-8-5-2x.avif';

import case_slider_full_picture_9_5_jpg from '../../assets/images/cases-slider-full-tamtam-9-5.jpg';
import case_slider_full_picture_9_5_webp from '../../assets/images/cases-slider-full-tamtam-9-5.webp';
import case_slider_full_picture_9_5_webp_2x from '../../assets/images/cases-slider-full-tamtam-9-5-2x.webp';
import case_slider_full_picture_9_5_avif from '../../assets/images/cases-slider-full-tamtam-9-5.avif';
import case_slider_full_picture_9_5_avif_2x from '../../assets/images/cases-slider-full-tamtam-9-5-2x.avif';

import case_slider_full_picture_10_5_jpg from '../../assets/images/cases-slider-full-tamtam-10-5.jpg';
import case_slider_full_picture_10_5_webp from '../../assets/images/cases-slider-full-tamtam-10-5.webp';
import case_slider_full_picture_10_5_webp_2x from '../../assets/images/cases-slider-full-tamtam-10-5-2x.webp';
import case_slider_full_picture_10_5_avif from '../../assets/images/cases-slider-full-tamtam-10-5.avif';
import case_slider_full_picture_10_5_avif_2x from '../../assets/images/cases-slider-full-tamtam-10-5-2x.avif';

import case_slider_full_picture_11_5_jpg from '../../assets/images/cases-slider-full-tamtam-11-5.jpg';
import case_slider_full_picture_11_5_webp from '../../assets/images/cases-slider-full-tamtam-11-5.webp';
import case_slider_full_picture_11_5_webp_2x from '../../assets/images/cases-slider-full-tamtam-11-5-2x.webp';
import case_slider_full_picture_11_5_avif from '../../assets/images/cases-slider-full-tamtam-11-5.avif';
import case_slider_full_picture_11_5_avif_2x from '../../assets/images/cases-slider-full-tamtam-11-5-2x.avif';

import case_slider_full_picture_12_5_jpg from '../../assets/images/cases-slider-full-tamtam-12-5.jpg';
import case_slider_full_picture_12_5_webp from '../../assets/images/cases-slider-full-tamtam-12-5.webp';
import case_slider_full_picture_12_5_webp_2x from '../../assets/images/cases-slider-full-tamtam-12-5-2x.webp';
import case_slider_full_picture_12_5_avif from '../../assets/images/cases-slider-full-tamtam-12-5.avif';
import case_slider_full_picture_12_5_avif_2x from '../../assets/images/cases-slider-full-tamtam-12-5-2x.avif';

import case_slider_full_picture_13_5_jpg from '../../assets/images/cases-slider-full-tamtam-13-5.jpg';
import case_slider_full_picture_13_5_webp from '../../assets/images/cases-slider-full-tamtam-13-5.webp';
import case_slider_full_picture_13_5_webp_2x from '../../assets/images/cases-slider-full-tamtam-13-5-2x.webp';
import case_slider_full_picture_13_5_avif from '../../assets/images/cases-slider-full-tamtam-13-5.avif';
import case_slider_full_picture_13_5_avif_2x from '../../assets/images/cases-slider-full-tamtam-13-5-2x.avif';

// Импорты изображений для CasesSliderScroll
import case_slider_scroll_picture_1_jpg from '../../assets/images/case-slider-scroll-tamtam-1.jpg';
import case_slider_scroll_picture_1_webp from '../../assets/images/case-slider-scroll-tamtam-1.webp';
import case_slider_scroll_picture_1_webp_2x from '../../assets/images/case-slider-scroll-tamtam-1-2x.webp';
import case_slider_scroll_picture_1_avif from '../../assets/images/case-slider-scroll-tamtam-1.avif';
import case_slider_scroll_picture_1_avif_2x from '../../assets/images/case-slider-scroll-tamtam-1-2x.avif';

import case_slider_scroll_picture_2_jpg from '../../assets/images/case-slider-scroll-tamtam-2.jpg';
import case_slider_scroll_picture_2_webp from '../../assets/images/case-slider-scroll-tamtam-2.webp';
import case_slider_scroll_picture_2_webp_2x from '../../assets/images/case-slider-scroll-tamtam-2-2x.webp';
import case_slider_scroll_picture_2_avif from '../../assets/images/case-slider-scroll-tamtam-2.avif';
import case_slider_scroll_picture_2_avif_2x from '../../assets/images/case-slider-scroll-tamtam-2-2x.avif';

import case_slider_scroll_picture_3_jpg from '../../assets/images/case-slider-scroll-tamtam-3.jpg';
import case_slider_scroll_picture_3_webp from '../../assets/images/case-slider-scroll-tamtam-3.webp';
import case_slider_scroll_picture_3_webp_2x from '../../assets/images/case-slider-scroll-tamtam-3-2x.webp';
import case_slider_scroll_picture_3_avif from '../../assets/images/case-slider-scroll-tamtam-3.avif';
import case_slider_scroll_picture_3_avif_2x from '../../assets/images/case-slider-scroll-tamtam-3-2x.avif';

import case_slider_scroll_picture_4_jpg from '../../assets/images/case-slider-scroll-tamtam-4.jpg';
import case_slider_scroll_picture_4_webp from '../../assets/images/case-slider-scroll-tamtam-4.webp';
import case_slider_scroll_picture_4_webp_2x from '../../assets/images/case-slider-scroll-tamtam-4-2x.webp';
import case_slider_scroll_picture_4_avif from '../../assets/images/case-slider-scroll-tamtam-4.avif';
import case_slider_scroll_picture_4_avif_2x from '../../assets/images/case-slider-scroll-tamtam-4-2x.avif';

import case_slider_scroll_picture_5_jpg from '../../assets/images/case-slider-scroll-tamtam-5.jpg';
import case_slider_scroll_picture_5_webp from '../../assets/images/case-slider-scroll-tamtam-5.webp';
import case_slider_scroll_picture_5_webp_2x from '../../assets/images/case-slider-scroll-tamtam-5-2x.webp';
import case_slider_scroll_picture_5_avif from '../../assets/images/case-slider-scroll-tamtam-5.avif';
import case_slider_scroll_picture_5_avif_2x from '../../assets/images/case-slider-scroll-tamtam-5-2x.avif';

import case_slider_scroll_picture_6_jpg from '../../assets/images/case-slider-scroll-tamtam-6.jpg';
import case_slider_scroll_picture_6_webp from '../../assets/images/case-slider-scroll-tamtam-6.webp';
import case_slider_scroll_picture_6_webp_2x from '../../assets/images/case-slider-scroll-tamtam-6-2x.webp';
import case_slider_scroll_picture_6_avif from '../../assets/images/case-slider-scroll-tamtam-6.avif';
import case_slider_scroll_picture_6_avif_2x from '../../assets/images/case-slider-scroll-tamtam-6-2x.avif';

import case_slider_scroll_picture_7_jpg from '../../assets/images/case-slider-scroll-tamtam-7.jpg';
import case_slider_scroll_picture_7_webp from '../../assets/images/case-slider-scroll-tamtam-7.webp';
import case_slider_scroll_picture_7_webp_2x from '../../assets/images/case-slider-scroll-tamtam-7-2x.webp';
import case_slider_scroll_picture_7_avif from '../../assets/images/case-slider-scroll-tamtam-7.avif';
import case_slider_scroll_picture_7_avif_2x from '../../assets/images/case-slider-scroll-tamtam-7-2x.avif';

import case_slider_scroll_picture_8_jpg from '../../assets/images/case-slider-scroll-tamtam-8.jpg';
import case_slider_scroll_picture_8_webp from '../../assets/images/case-slider-scroll-tamtam-8.webp';
import case_slider_scroll_picture_8_webp_2x from '../../assets/images/case-slider-scroll-tamtam-8-2x.webp';
import case_slider_scroll_picture_8_avif from '../../assets/images/case-slider-scroll-tamtam-8.avif';
import case_slider_scroll_picture_8_avif_2x from '../../assets/images/case-slider-scroll-tamtam-8-2x.avif';

import case_slider_scroll_picture_9_jpg from '../../assets/images/case-slider-scroll-tamtam-9.jpg';
import case_slider_scroll_picture_9_webp from '../../assets/images/case-slider-scroll-tamtam-9.webp';
import case_slider_scroll_picture_9_webp_2x from '../../assets/images/case-slider-scroll-tamtam-9-2x.webp';
import case_slider_scroll_picture_9_avif from '../../assets/images/case-slider-scroll-tamtam-9.avif';
import case_slider_scroll_picture_9_avif_2x from '../../assets/images/case-slider-scroll-tamtam-9-2x.avif';

export const case_slider_full_content_1 = {
  sizes: {
    width: '100%',
    height: '100%',
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
  ],
};

export const case_slider_full_content_2 = {
  sizes: {
    width: '100%',
    height: '100%',
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
  ],
};

export const case_slider_full_content_3 = {
  sizes: {
    width: '100%',
    height: '100%',
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
    {
      id: '3_3',
      picture: {
        img: case_slider_full_picture_3_3_jpg,
        webp: case_slider_full_picture_3_3_webp,
        webp2x: case_slider_full_picture_3_3_webp_2x,
        avif: case_slider_full_picture_3_3_avif,
        avif2x: case_slider_full_picture_3_3_avif_2x,
      },
    },
  ],
};

export const case_slider_full_content_4 = {
  sizes: {
    width: '100%',
    height: '100%',
  },
  pictures: [
    {
      id: '4_1',
      picture: {
        img: case_slider_full_picture_1_4_jpg,
        webp: case_slider_full_picture_1_4_webp,
        webp2x: case_slider_full_picture_1_4_webp_2x,
        avif: case_slider_full_picture_1_4_avif,
        avif2x: case_slider_full_picture_1_4_avif_2x,
      },
    },
    {
      id: '4_2',
      picture: {
        img: case_slider_full_picture_2_4_jpg,
        webp: case_slider_full_picture_2_4_webp,
        webp2x: case_slider_full_picture_2_4_webp_2x,
        avif: case_slider_full_picture_2_4_avif,
        avif2x: case_slider_full_picture_2_4_avif_2x,
      },
    },
    {
      id: '4_3',
      picture: {
        img: case_slider_full_picture_3_4_jpg,
        webp: case_slider_full_picture_3_4_webp,
        webp2x: case_slider_full_picture_3_4_webp_2x,
        avif: case_slider_full_picture_3_4_avif,
        avif2x: case_slider_full_picture_3_4_avif_2x,
      },
    },
  ],
};

export const case_slider_full_content_5 = {
  sizes: {
    width: '100%',
    height: '100%',
  },
  pictures: [
    {
      id: '5_1',
      picture: {
        img: case_slider_full_picture_1_5_jpg,
        webp: case_slider_full_picture_1_5_webp,
        webp2x: case_slider_full_picture_1_5_webp_2x,
        avif: case_slider_full_picture_1_5_avif,
        avif2x: case_slider_full_picture_1_5_avif_2x,
      },
    },
    {
      id: '5_2',
      picture: {
        img: case_slider_full_picture_2_5_jpg,
        webp: case_slider_full_picture_2_5_webp,
        webp2x: case_slider_full_picture_2_5_webp_2x,
        avif: case_slider_full_picture_2_5_avif,
        avif2x: case_slider_full_picture_2_5_avif_2x,
      },
    },
    {
      id: '5_3',
      picture: {
        img: case_slider_full_picture_3_5_jpg,
        webp: case_slider_full_picture_3_5_webp,
        webp2x: case_slider_full_picture_3_5_webp_2x,
        avif: case_slider_full_picture_3_5_avif,
        avif2x: case_slider_full_picture_3_5_avif_2x,
      },
    },
    {
      id: '5_4',
      picture: {
        img: case_slider_full_picture_4_5_jpg,
        webp: case_slider_full_picture_4_5_webp,
        webp2x: case_slider_full_picture_4_5_webp_2x,
        avif: case_slider_full_picture_4_5_avif,
        avif2x: case_slider_full_picture_4_5_avif_2x,
      },
    },
    {
      id: '5_5',
      picture: {
        img: case_slider_full_picture_5_5_jpg,
        webp: case_slider_full_picture_5_5_webp,
        webp2x: case_slider_full_picture_5_5_webp_2x,
        avif: case_slider_full_picture_5_5_avif,
        avif2x: case_slider_full_picture_5_5_avif_2x,
      },
    },
    {
      id: '5_6',
      picture: {
        img: case_slider_full_picture_6_5_jpg,
        webp: case_slider_full_picture_6_5_webp,
        webp2x: case_slider_full_picture_6_5_webp_2x,
        avif: case_slider_full_picture_6_5_avif,
        avif2x: case_slider_full_picture_6_5_avif_2x,
      },
    },
    {
      id: '5_7',
      picture: {
        img: case_slider_full_picture_7_5_jpg,
        webp: case_slider_full_picture_7_5_webp,
        webp2x: case_slider_full_picture_7_5_webp_2x,
        avif: case_slider_full_picture_7_5_avif,
        avif2x: case_slider_full_picture_7_5_avif_2x,
      },
    },
    {
      id: '5_8',
      picture: {
        img: case_slider_full_picture_8_5_jpg,
        webp: case_slider_full_picture_8_5_webp,
        webp2x: case_slider_full_picture_8_5_webp_2x,
        avif: case_slider_full_picture_8_5_avif,
        avif2x: case_slider_full_picture_8_5_avif_2x,
      },
    },
    {
      id: '5_9',
      picture: {
        img: case_slider_full_picture_9_5_jpg,
        webp: case_slider_full_picture_9_5_webp,
        webp2x: case_slider_full_picture_9_5_webp_2x,
        avif: case_slider_full_picture_9_5_avif,
        avif2x: case_slider_full_picture_9_5_avif_2x,
      },
    },
    {
      id: '5_10',
      picture: {
        img: case_slider_full_picture_10_5_jpg,
        webp: case_slider_full_picture_10_5_webp,
        webp2x: case_slider_full_picture_10_5_webp_2x,
        avif: case_slider_full_picture_10_5_avif,
        avif2x: case_slider_full_picture_10_5_avif_2x,
      },
    },
    {
      id: '5_11',
      picture: {
        img: case_slider_full_picture_11_5_jpg,
        webp: case_slider_full_picture_11_5_webp,
        webp2x: case_slider_full_picture_11_5_webp_2x,
        avif: case_slider_full_picture_11_5_avif,
        avif2x: case_slider_full_picture_11_5_avif_2x,
      },
    },
    {
      id: '5_12',
      picture: {
        img: case_slider_full_picture_12_5_jpg,
        webp: case_slider_full_picture_12_5_webp,
        webp2x: case_slider_full_picture_12_5_webp_2x,
        avif: case_slider_full_picture_12_5_avif,
        avif2x: case_slider_full_picture_12_5_avif_2x,
      },
    },
    {
      id: '5_13',
      picture: {
        img: case_slider_full_picture_13_5_jpg,
        webp: case_slider_full_picture_13_5_webp,
        webp2x: case_slider_full_picture_13_5_webp_2x,
        avif: case_slider_full_picture_13_5_avif,
        avif2x: case_slider_full_picture_13_5_avif_2x,
      },
    },
  ],
};

export const case_slider_scroll_content = {
  pictures: [
    {
      id: '1',
      picture: {
        img: case_slider_scroll_picture_1_jpg,
        webp: case_slider_scroll_picture_1_webp,
        webp2x: case_slider_scroll_picture_1_webp_2x,
        avif: case_slider_scroll_picture_1_avif,
        avif2x: case_slider_scroll_picture_1_avif_2x,
      },
    },
    {
      id: '2',
      picture: {
        img: case_slider_scroll_picture_2_jpg,
        webp: case_slider_scroll_picture_2_webp,
        webp2x: case_slider_scroll_picture_2_webp_2x,
        avif: case_slider_scroll_picture_2_avif,
        avif2x: case_slider_scroll_picture_2_avif_2x,
      },
    },
    {
      id: '3',
      picture: {
        img: case_slider_scroll_picture_3_jpg,
        webp: case_slider_scroll_picture_3_webp,
        webp2x: case_slider_scroll_picture_3_webp_2x,
        avif: case_slider_scroll_picture_3_avif,
        avif2x: case_slider_scroll_picture_3_avif_2x,
      },
    },
    {
      id: '4',
      picture: {
        img: case_slider_scroll_picture_4_jpg,
        webp: case_slider_scroll_picture_4_webp,
        webp2x: case_slider_scroll_picture_4_webp_2x,
        avif: case_slider_scroll_picture_4_avif,
        avif2x: case_slider_scroll_picture_4_avif_2x,
      },
    },
    {
      id: '5',
      picture: {
        img: case_slider_scroll_picture_5_jpg,
        webp: case_slider_scroll_picture_5_webp,
        webp2x: case_slider_scroll_picture_5_webp_2x,
        avif: case_slider_scroll_picture_5_avif,
        avif2x: case_slider_scroll_picture_5_avif_2x,
      },
    },
    {
      id: '6',
      picture: {
        img: case_slider_scroll_picture_6_jpg,
        webp: case_slider_scroll_picture_6_webp,
        webp2x: case_slider_scroll_picture_6_webp_2x,
        avif: case_slider_scroll_picture_6_avif,
        avif2x: case_slider_scroll_picture_6_avif_2x,
      },
    },
    {
      id: '7',
      picture: {
        img: case_slider_scroll_picture_7_jpg,
        webp: case_slider_scroll_picture_7_webp,
        webp2x: case_slider_scroll_picture_7_webp_2x,
        avif: case_slider_scroll_picture_7_avif,
        avif2x: case_slider_scroll_picture_7_avif_2x,
      },
    },
    {
      id: '8',
      picture: {
        img: case_slider_scroll_picture_8_jpg,
        webp: case_slider_scroll_picture_8_webp,
        webp2x: case_slider_scroll_picture_8_webp_2x,
        avif: case_slider_scroll_picture_8_avif,
        avif2x: case_slider_scroll_picture_8_avif_2x,
      },
    },
    {
      id: '9',
      picture: {
        img: case_slider_scroll_picture_9_jpg,
        webp: case_slider_scroll_picture_9_webp,
        webp2x: case_slider_scroll_picture_9_webp_2x,
        avif: case_slider_scroll_picture_9_avif,
        avif2x: case_slider_scroll_picture_9_avif_2x,
      },
    },
  ],
};
