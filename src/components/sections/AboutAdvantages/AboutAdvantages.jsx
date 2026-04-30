import './AboutAdvantages.scss';
import { useMobile } from '../../../contexts/MobileContext';
import { useState, useEffect, useRef } from 'react';

import img_1 from '../../../assets/images/about-advantages-1-img.png';
import img_1_webp from '../../../assets/images/about-advantages-1-img.webp';
import img_1_avif from '../../../assets/images/about-advantages-1-img.avif';

import img_2 from '../../../assets/images/about-advantages-2-img.png';
import img_2_webp from '../../../assets/images/about-advantages-2-img.webp';
import img_2_avif from '../../../assets/images/about-advantages-2-img.avif';

function AboutAdvantages() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const isMobile = useMobile();

  const toggleSpoiler = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const spoilersData = [
    {
      count: '01',
      subtitle: 'Гибкое управление',
      items: ['Быстро реагируем на&nbsp;изменения', 'Адаптируемся под&nbsp;требования заказчика или&nbsp;рынка', 'Строим кросс-функциональные команды'],
    },
    {
      count: '02',
      subtitle: 'Уверенность в&nbsp;результате',
      items: [
        'Предлагаем сопровождение и&nbsp;масштабируемость проектов',
        'Доступ к&nbsp;глобальному рынку',
        'Эффективность команды',
        'Делимся результатами после&nbsp;каждого спринта',
        'Подбираем команду заказчику',
      ],
    },
    {
      count: '03',
      subtitle: 'Полный жизненный цикл',
      items: ['Создаем концепцию продукта', 'Прорабатываем CJM', 'Предоставляем прототипы и&nbsp;макеты в&nbsp;Figma', 'Тестируем прототипы и&nbsp;решения на&nbsp;ЦА'],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section className={`AboutAdvantages ${isVisible ? 'animate' : ''}`} ref={ref}>
      <div className="AboutAdvantages__container">
        <div className="AboutAdvantages__balls">
          <div className="AboutAdvantages__ball">
            <picture>
              <source type="image/avif" srcSet={img_1_avif} />
              <source type="image/webp" srcSet={img_1_webp} />
              <img src={img_1} alt="AboutIntro background" loading="eager" decoding="async" fetchpriority="high" className="AboutIntro__img" />
            </picture>
          </div>
          <div className="AboutAdvantages__ball">
            <picture>
              <source type="image/avif" srcSet={img_2_avif} />
              <source type="image/webp" srcSet={img_2_webp} />
              <img src={img_2} alt="AboutIntro background" loading="eager" decoding="async" fetchpriority="high" className="AboutIntro__img" />
            </picture>
          </div>
        </div>

        <div className="AboutAdvantages__title">
          <h2>
            <span>Преимущества </span>
            <span>работы c&nbsp;LABA </span>
          </h2>
          <p>
            Работаем от&nbsp;идеи до&nbsp;реализации, предоставляя полный спектр услуг&nbsp;&mdash; от&nbsp;консультаций на&nbsp;стадии планирования до&nbsp;прототипирования и&nbsp;тестирования
            продуктов
          </p>
        </div>
        <div className="AboutAdvantages__spoilers">
          {spoilersData.map((spoiler, index) => (
            <button key={index} className={`AboutAdvantages__spoiler ${!isMobile && activeIndex === index ? 'active' : ''}`} onClick={() => toggleSpoiler(index)}>
              <div className="AboutAdvantages__header">
                <div className="AboutAdvantages__count" dangerouslySetInnerHTML={{ __html: spoiler.count }}></div>
                <div className="AboutAdvantages__subtitle" dangerouslySetInnerHTML={{ __html: spoiler.subtitle }}></div>
              </div>
              <div className="AboutAdvantages__body">
                <ul>
                  {spoiler.items.map((item, itemIndex) => (
                    <li key={itemIndex} dangerouslySetInnerHTML={{ __html: item }}></li>
                  ))}
                </ul>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutAdvantages;
