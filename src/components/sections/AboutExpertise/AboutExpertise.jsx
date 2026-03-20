import './AboutExpertise.scss';
import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';

import img_1 from '../../../assets/images/about-expertise-1-img.jpg';
import img_1_webp from '../../../assets/images/about-expertise-1-img.webp';
import img_1_avif from '../../../assets/images/about-expertise-1-img.avif';
import img_1_mobWebp from '../../../assets/images/about-expertise-1-img-mob.webp';
import img_1_mobAvif from '../../../assets/images/about-expertise-1-img-mob.avif';

import img_2 from '../../../assets/images/about-expertise-2-img.jpg';
import img_2_webp from '../../../assets/images/about-expertise-2-img.webp';
import img_2_avif from '../../../assets/images/about-expertise-2-img.avif';
import img_2_mobWebp from '../../../assets/images/about-expertise-2-img-mob.webp';
import img_2_mobAvif from '../../../assets/images/about-expertise-2-img-mob.avif';

import img_3 from '../../../assets/images/about-expertise-3-img.jpg';
import img_3_webp from '../../../assets/images/about-expertise-3-img.webp';
import img_3_avif from '../../../assets/images/about-expertise-3-img.avif';
import img_3_mobWebp from '../../../assets/images/about-expertise-3-img-mob.webp';
import img_3_mobAvif from '../../../assets/images/about-expertise-3-img-mob.avif';

import img_4 from '../../../assets/images/about-expertise-4-img.jpg';
import img_4_webp from '../../../assets/images/about-expertise-4-img.webp';
import img_4_avif from '../../../assets/images/about-expertise-4-img.avif';
import img_4_mobWebp from '../../../assets/images/about-expertise-4-img-mob.webp';
import img_4_mobAvif from '../../../assets/images/about-expertise-4-img-mob.avif';

function AboutExpertise() {
  const slidesRef = useRef([]);
  const picturesRef = useRef([]);
  const contentsRef = useRef([]);
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const items = [
    {
      id: 1,
      title: 'WEB приложения\nСайты',
      alt: '',
      stack: ['React', 'Node.js', 'Figma', 'Three.js', 'Django', 'Redux', 'Markdown'],
      img: {
        img: img_1,
        imgWebp: img_1_webp,
        imgAvif: img_1_avif,
        imgMobWebp: img_1_mobWebp,
        imgMobAvif: img_1_mobAvif,
      },
    },
    {
      id: 2,
      title: 'IOS\nANDROID\nPC',
      alt: '',
      stack: ['Unreal Engine', 'Figma', 'Blender', 'Adobe Illustrator'],
      img: {
        img: img_2,
        imgWebp: img_2_webp,
        imgAvif: img_2_avif,
        imgMobWebp: img_2_mobWebp,
        imgMobAvif: img_2_mobAvif,
      },
    },
    {
      id: 3,
      title: 'VR / AR\n360° ПАНОРАМЫ',
      alt: '',
      stack: ['3Ds Max', 'Unreal Engine', 'Figma', 'GitHub', 'Blender', 'Adobe Illustrator'],
      img: {
        img: img_3,
        imgWebp: img_3_webp,
        imgAvif: img_3_avif,
        imgMobWebp: img_3_mobWebp,
        imgMobAvif: img_3_mobAvif,
      },
    },
    {
      id: 4,
      title: 'ВИЗУАЛИЗАЦИИ\nАНИМАЦИИ',
      alt: '',
      stack: ['3Ds Max', 'Unreal Engine', 'Figma', 'GitHub', 'Blender', 'Adobe Illustrator'],
      img: {
        img: img_4,
        imgWebp: img_4_webp,
        imgAvif: img_4_avif,
        imgMobWebp: img_4_mobWebp,
        imgMobAvif: img_4_mobAvif,
      },
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          startAnimation();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const startAnimation = () => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1 });

      const dur = 1.5;
      const delay = 0.8;

      gsap.set(slidesRef.current[0], { y: 0 });
      gsap.set(picturesRef.current[0], { scale: 1 });
      gsap.set(contentsRef.current[0], { y: 0 });

      gsap.set(slidesRef.current.slice(1), { y: '100%' });
      gsap.set(picturesRef.current.slice(1), { scale: 1 });
      gsap.set(contentsRef.current.slice(1), { y: 0 });

      // Слайд 1
      tl.to(contentsRef.current[0], { y: 200, duration: dur, ease: 'power2.inOut', delay: delay }, 0);
      tl.to(picturesRef.current[0], { scale: 0.9, duration: dur, ease: 'power2.inOut', delay: delay }, 0);
      tl.to(slidesRef.current[1], { y: 0, duration: dur, ease: 'power2.inOut', delay: delay }, 0);

      // Слайд 2
      tl.to(contentsRef.current[1], { y: 200, duration: dur, ease: 'power2.inOut' }, '+=' + dur);
      tl.to(picturesRef.current[1], { scale: 0.9, duration: dur, ease: 'power2.inOut' }, '<');
      tl.to(slidesRef.current[2], { y: 0, duration: dur, ease: 'power2.inOut' }, '<');

      // Слайд 3
      tl.to(contentsRef.current[2], { y: 200, duration: dur, ease: 'power2.inOut' }, '+=' + dur);
      tl.to(picturesRef.current[2], { scale: 0.9, duration: dur, ease: 'power2.inOut' }, '<');
      tl.to(slidesRef.current[3], { y: 0, duration: dur, ease: 'power2.inOut' }, '<');

      // Пауза на слайде 4
      tl.to({}, { duration: dur }, '+=');

      // Уход 4-го + возврат 3-го
      tl.to(slidesRef.current[3], { y: '100%', duration: dur, ease: 'power2.inOut' }, `+=${delay}`);
      tl.to(contentsRef.current[2], { y: 0, duration: dur, ease: 'power2.inOut' }, '<');
      tl.to(picturesRef.current[2], { scale: 1, duration: dur, ease: 'power2.inOut' }, '<');

      // Уход 3-го + возврат 2-го
      tl.to(slidesRef.current[2], { y: '100%', duration: dur, ease: 'power2.inOut' }, '+=' + dur);
      tl.to(contentsRef.current[1], { y: 0, duration: dur, ease: 'power2.inOut' }, '<');
      tl.to(picturesRef.current[1], { scale: 1, duration: dur, ease: 'power2.inOut' }, '<');

      // Уход 2-го + возврат 1-го
      tl.to(slidesRef.current[1], { y: '100%', duration: dur, ease: 'power2.inOut' }, '+=' + dur);
      tl.to(contentsRef.current[0], { y: 0, duration: dur, ease: 'power2.inOut' }, '<');
      tl.to(picturesRef.current[0], { scale: 1, duration: dur, ease: 'power2.inOut' }, '<');

      // Пауза перед новым циклом
      tl.to({}, { duration: delay });
    }, sectionRef);

    return () => ctx.revert();
  };

  return (
    <section className="AboutExpertise" ref={sectionRef}>
      <div className="AboutExpertise__header">
        <div>Области</div>
        <div>экспертизы</div>
        <div>В разработке программного обеспечения мы предлагаем создание индивидуальных решений, включая ERP-системы, CRM-системы и другие внутренние инструменты для бизнеса </div>
      </div>
      <div className="AboutExpertise__container">
        {items.map(({ id, title, alt, stack, img }, index) => {
          return (
            <div ref={(el) => (slidesRef.current[index] = el)} key={id} className="AboutExpertise__slide">
              <div ref={(el) => (contentsRef.current[index] = el)} className="AboutExpertise__box">
                <div className="AboutExpertise__text">
                  <div className="AboutExpertise__num">0{id}</div>
                  <div className="AboutExpertise__title">{title}</div>
                </div>
                <ul className="AboutExpertise__stack">
                  {stack.map((el) => {
                    return <li key={el}>{el}</li>;
                  })}
                </ul>
              </div>
              <div ref={(el) => (picturesRef.current[index] = el)} className="AboutExpertise__picture">
                <picture>
                  <source type="image/avif" srcSet={img.imgWebp} media="(min-width: 768px)" />
                  <source type="image/webp" srcSet={img.imgAvif} media="(min-width: 768px)" />
                  <source type="image/avif" srcSet={img.imgMobAvif} />
                  <source type="image/webp" srcSet={img.imgMobWebp} />
                  <img src={img.img} alt={alt} loading="eager" decoding="async" fetchpriority="high" />
                </picture>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default AboutExpertise;
