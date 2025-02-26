import { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import TextEffect from '../TextEffect/TextEffect';
// import TextEffect1 from '../TextEffect/TextEffect1';

// import video from '../../assets/videos/intro-cover.mp4';
import img from '../../assets/images/counter-img1.png';
import styles from './Counter.module.scss';

const Number = ({ n }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { number, opacity } = useSpring({
    from: { number: 0, opacity: 0 },
    to: {
      number: inView ? n : 0,
      opacity: inView ? 1 : 0,
    },
    config: { mass: 1, tension: 20, friction: 10 },
  });

  const getStep = (val) => {
    if (val <= 9) return 1;
    if (val <= 99) return 4;
    if (val <= 999) return 10;
    if (val <= 4999) return 50;
    return 100;
  };

  return (
    <animated.div ref={ref} style={{ opacity, display: 'flex', alignItems: 'baseline' }}>
      <animated.span style={{ opacity, marginRight: '4px' }}>+</animated.span>
      <animated.div style={{ opacity }}>
        {number.to((val) => {
          const step = getStep(val);
          return Math.round(val / step) * step;
        })}
      </animated.div>
    </animated.div>
  );
};

Number.propTypes = {
  n: PropTypes.number.isRequired,
};

const Counter = () => {
  const NumbersBoxRef = useRef(null);
  const sectionRef = useRef(null);
  const modelsRef = useRef(null);
  const switcherRef = useRef(null);
  const pictureRef = useRef(null);
  const textRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1025);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsDesktop(window.innerWidth >= 1025);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!NumbersBoxRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    observer.observe(NumbersBoxRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const ctxModels = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: modelsRef.current,
          start: 'top top',
          end: '+=120',
          pin: sectionRef.current,
          scrub: true,
        },
      }).to(modelsRef.current, { y: -100, duration: 0.2 }, 0);
    }, sectionRef);

    return () => ctxModels.revert();
  }, [isDesktop]);

  useEffect(() => {
    if (!isDesktop) return;
    const ctxSwitcher = gsap.context(() => {
       gsap.timeline({
          scrollTrigger: {
            trigger: modelsRef.current,
            start: 'bottom top',
            toggleActions: 'play none reverse none',
          },
        })
        .fromTo(
          pictureRef.current,
          { scale: 1 },
          { scale: 2, duration: 0.2, ease: 'none' },
          0
        )
        .fromTo(
          pictureRef.current,
          { opacity: 1 },
          { opacity: 0, duration: 0.1, ease: 'none' },
          0.4
        )
        .fromTo(
          textRef.current,
          { opacity: 0, marginTop: '100px' },
          { opacity: 1, marginTop: '100px', duration: 0.6, ease: 'linear' },
          0.3
        );
    }, sectionRef);
    return () => ctxSwitcher.revert();
  }, [isDesktop]);


  useEffect(() => {
  if (!isDesktop || !switcherRef.current) return;

  const stSwitcher = ScrollTrigger.create({
    trigger: switcherRef.current,
    start: "center center",
    end: "center center",
    pin: textRef.current,
    pinSpacing: false,
    scrub: false,
    pinReparent: true,
    snap: {
      snapTo: "center",
      duration: 0.5,
      delay: 0.1,
      ease: "power1.inOut",
    },
    toggleActions: "play none reverse none",
    fastScrollEnd: false,
    onEnter: () => {
      document.body.style.overflow = "hidden";

      setTimeout(() => {
        document.body.style.overflow = "";
      }, 2000);
    },
    onLeaveBack: () => {
      gsap.to(switcherRef.current, { y: 0, duration: 0.2, ease: "power1.out" });
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        document.body.style.overflow = "";
      }, 0);
    },
    // markers: true,
  });

  return () => stSwitcher.kill();
}, [isDesktop]);


  return (
    <section ref={sectionRef} className={styles.Counter}>
      <div>
        <div ref={NumbersBoxRef} className={styles.Counter__items}>
          <div className={`${styles.Counter__item} ${isVisible && isMobile ? styles.active : ''}`}>
            <div>
              <Number n={130} />
            </div>
            <p>Создано рилсов и&nbsp;видео роликов</p>
          </div>

          <div className={`${styles.Counter__item} ${isVisible && isMobile ? styles.active : ''}`}>
            <div>
              <Number n={85} />
            </div>
            <p>
              Серверов в&nbsp;собственном дата-центре
              <br />
              для&nbsp;просчета компьютерной графики
            </p>
          </div>
          <div ref={modelsRef} className={`${styles.Counter__item} ${isVisible && isMobile ? styles.active : ''}`}>
            <div>
              <Number n={1000} />
            </div>
            <p>3д&nbsp;моделей</p>
          </div>

          <div className={`${styles.Counter__item} ${isVisible && isMobile ? styles.active : ''}`}>
            <div>
              <Number n={7} />
            </div>
            <p>Лет на&nbsp;рынке 3D&nbsp;графики</p>
          </div>
        </div>
        {isDesktop ? (
          <div ref={switcherRef} className={styles.switcherWrapper}>
            <img
              ref={pictureRef}
              src={img}
              alt="3D"
              className={styles.switcherWrapper__picture}
            />
            <div ref={textRef} className={styles.switcherWrapper__textEffectContainer}>
              <TextEffect />
              {/* <TextEffect1 /> */}
            </div>
          </div>
        ) : (
          <div ref={pictureRef} className={styles.Counter__picture}>
            <picture>
              <img src={img} alt="3D" />
            </picture>
          </div>
        )}

        {/*
        <div className={styles.Counter__video}>
          <video preload="auto" autoPlay loop muted>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        */}
      </div>
    </section>
  );
}

export default Counter;
