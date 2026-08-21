import './AboutIntro.scss';
import ButtonBlob from '../../ui/ButtonBlob/ButtonBlob';
import img from '../../../assets/images/about-intro-img.jpg';
import imgWebp from '../../../assets/images/about-intro-img.webp';
import imgAvif from '../../../assets/images/about-intro-img.avif';
import imgMobWebp from '../../../assets/images/about-intro-img-mob.webp';
import imgMobAvif from '../../../assets/images/about-intro-img-mob.avif';

const ITEMS = [
  { n: 12, text: 'Направлений разработки' },
  { n: 32, text: 'Завершённых проектов' },
  { n: 4000, text: 'Часов командной работы' },
];

function AboutIntro() {
  return (
    <section className="AboutIntro">
      <div className="AboutIntro__top">
        <div className="AboutIntro__box">
          <div className="AboutIntro__content">
            <h1>О&nbsp;компании</h1>
            <p>
              Компания специализируется на&nbsp;разработке цифровых продуктов,<br></br> охватывающих различные направления&nbsp;&mdash; от&nbsp;веб-сайтов<br></br> до&nbsp;программного обеспечения
              на&nbsp;заказ
            </p>
          </div>
        </div>
        <div className="AboutIntro__wrap">
          <div className="AboutIntro__picture">
            <picture>
              <source type="image/avif" srcSet={imgAvif} media="(min-width: 768px)" />
              <source type="image/webp" srcSet={imgWebp} media="(min-width: 768px)" />
              <source type="image/avif" srcSet={imgMobAvif} />
              <source type="image/webp" srcSet={imgMobWebp} />
              <img src={img} alt="AboutIntro background" loading="eager" decoding="async" fetchpriority="high" className="AboutIntro__img" />
            </picture>
          </div>
          <div className="AboutIntro__button">
            <ButtonBlob />
          </div>
        </div>
      </div>

      <div className="AboutIntro__items">
        {ITEMS.map(({ n, text }, index) => (
          <div key={index} className="AboutIntro__item">
            <div>+{n}</div>
            <p dangerouslySetInnerHTML={{ __html: text }} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutIntro;
