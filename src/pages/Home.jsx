import { useEffect, useState } from 'react';
import '../App.scss';

import Intro2 from '../components/Intro2/Intro2';
import ProjectsTile from '../components/ProjectsTile/ProjectsTile';
import Ticker from '../components/Ticker/Ticker';
import Counter from '../components/Counter/Counter';
import TextEffect from '../components/TextEffect/TextEffect';
import Gallery from '../components/Gallery/Gallery';
import AboutList from '../components/AboutList/AboutList';
import Partners from '../components/Partners/Partners';

export default function Home({ introRef, projectsTileRef, shouldAnimate }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main>
      <Intro2 introRef={introRef} />
      <ProjectsTile projectsTileRef={projectsTileRef} /> {/* Передаем реф */}
      {/* <Ticker /> */}
      {/* <Counter />
      {isMobile && <TextEffect />} */}
      <Gallery />
      {/* <Ticker />
      <AboutList />
      <Partners /> */}
    </main>
  );
}
