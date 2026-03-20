import './AboutStack.scss';
import { useState, useEffect, useRef } from 'react';
import softwarLogos from '../../../constants/softwarLogos';

const items = [
  softwarLogos.unreal,
  softwarLogos.blender,
  softwarLogos.tree_d_max,
  softwarLogos.figma,
  softwarLogos.python,
  softwarLogos.nodejs,
  softwarLogos.flutter,
  softwarLogos.react,
  softwarLogos.redux,
  softwarLogos.after_effect,
  softwarLogos.adobe_illustrator,
  softwarLogos.adobe_photoshop,
];

function AboutStack() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const repeatItems = (array, targetCount) => {
    const result = [];
    while (result.length < targetCount) {
      result.push(...array);
    }
    return result.slice(0, targetCount);
  };

  const targetLength = 60;
  const splitItems = [repeatItems(items, targetLength).reverse(), repeatItems(items, targetLength)];

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section className={`AboutStack ${isVisible ? 'animate' : ''}`} ref={ref}>
      <div className="AboutStack__container">
        <div className="AboutStack__header">
          <h2>Наш стек</h2>
          <p>Unreal Engine, Blender, 3Ds Max, Figma, Python, Node.js, Flutter, React, Adobe After Effect, Adobe Illustrator, Adobe Photoshop</p>
        </div>
        <div className="AboutStack__rows">
          {splitItems.map((array, index) => (
            <div className="AboutStack__row" key={index}>
              <div className="AboutStack__track">
                {array.map((item, index) => (
                  <div key={index} className="AboutStack__item">
                    <div className="AboutStack__picture">
                      <img src={item.src} loading="lazy" alt={item.title} />
                    </div>
                    <div className="AboutStack__title">{item.title}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutStack;
