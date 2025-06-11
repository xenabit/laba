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

export default function Home({ introRef, projectsTileRef, loadingStage }) {
  const hasPlayedIntro = useRef(false);

  useEffect(() => {
    if (loadingStage === 'complete' && introRef.current && !hasPlayedIntro.current) {
      const introEl = introRef.current;
      const laba = introEl.querySelector(`.${introStyles.Intro2__laba}`);
      const desc = introEl.querySelector(`.${introStyles.Intro2__desc}`);

      const tl = gsap.timeline();
      tl.set([laba, desc], { opacity: 0 });
      tl.set(laba, { xPercent: -100 });
      tl.set(desc, { xPercent: 100 });

      tl.to(laba, {
        xPercent: 0,
        opacity: 1,
        duration: 1.6,
        ease: 'power2.out',
      }, 0)
      .to(desc, {
        xPercent: 0,
        opacity: 1,
        duration: 1.6,
        ease: 'power2.out',
      }, 0);

      hasPlayedIntro.current = true;
    }
  }, [loadingStage, introRef]);

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
