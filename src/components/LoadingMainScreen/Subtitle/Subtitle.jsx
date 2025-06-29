import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ANIMATION_CONFIG } from '../LoadingMainScreen';

function Subtitle() {
  const descRefs = useRef([]);
  const text = 'Создаем уникальные цифровые продукты';

  const addToDescRefs = (el) => {
    if (el && !descRefs.current.includes(el)) descRefs.current.push(el);
  };

  useEffect(() => {
    const descLetters = descRefs.current;
    gsap.set(descLetters, { y: '100%', opacity: 0, fontSize: '1.8vw', display: 'inline-block', color: '#27292F', whiteSpace: 'nowrap', overflow: 'hidden', marginTop: '50px' });
    gsap.to(descLetters, {
      y: 0,
      opacity: 1,
      duration: 0.2,
      ease: 'power2.out',
      stagger: 0.04,
      delay: ANIMATION_CONFIG.MAIN_ENTRY_ANIM,
    });
  }, []);

  return (
    <div>
      {text.split('').map((char, index) => (
        <span key={index} ref={addToDescRefs}>
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
}

export default Subtitle;
