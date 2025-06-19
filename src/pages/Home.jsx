import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../App.scss';
import Intro2 from '../components/Intro2/Intro2';
import introStyles from '../components/Intro2/Intro2.module.scss';
import ProjectsTile from '../components/ProjectsTile/ProjectsTile';
import Ticker from '../components/Ticker/Ticker';
import Counter from '../components/Counter/Counter';
import TextEffect from '../components/TextEffect/TextEffect';
import Gallery from '../components/Gallery/Gallery';
import AboutList from '../components/AboutList/AboutList';
import Partners from '../components/Partners/Partners';
import { ANIMATION_CONFIG } from '../components/LoadingMainScreen/LoadingMainScreen';

export default function Home({ introRef, projectsTileRef, loadingStage }) {
  const hasPlayedIntro = useRef(false);

  useEffect(() => {
    if (loadingStage === 'complete' && introRef.current && projectsTileRef.current && !hasPlayedIntro.current) {
      const introEl = introRef.current;
      const laba = introEl.querySelector(`.${introStyles.Intro2__laba}`);
      const desc = introEl.querySelector(`.${introStyles.Intro2__desc}`);
      const projectsTile = projectsTileRef.current;

      const tl = gsap.timeline({
        onComplete: () => console.log('All intro animations completed'),
      });

      // Начальные состояния
      if (laba && desc) {
        tl.set([laba, desc], { opacity: 0 });
        tl.set(laba, { xPercent: -100 });
        tl.set(desc, { xPercent: 100 });
      }
      if (projectsTile && window.innerWidth >= 1440) {
        tl.set(projectsTile, { yPercent: 100 });
      }

      // Анимации одновременно
      if (laba && desc) {
        tl.to(
          laba,
          {
            xPercent: 0,
            opacity: 1,
            duration: ANIMATION_CONFIG.LOGO_ANIMATION_DURATION,
            ease: 'linear',
          },
          0
        ).to(
          desc,
          {
            xPercent: 0,
            opacity: 1,
            duration: ANIMATION_CONFIG.LOGO_ANIMATION_DURATION,
            ease: 'linear',
          },
          0
        );
      }

      if (projectsTile && window.innerWidth >= 1440) {
        tl.to(
          projectsTile,
          {
            yPercent: 0,
            duration: ANIMATION_CONFIG.LOGO_ANIMATION_DURATION,
            ease: 'linear',
          },
          0
        );
      }

      hasPlayedIntro.current = true;
    }
  }, [loadingStage, introRef, projectsTileRef]);

  return (
    <main>
      <Intro2 introRef={introRef} />
      <ProjectsTile projectsTileRef={projectsTileRef} />
      <Ticker />
      <Counter loadingStage={loadingStage} />
      <TextEffect />
      <Gallery />
      <Ticker />
      <AboutList />
      <Partners />
    </main>
  );
}
