import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother.min';

import './App.scss';

import video from './assets/videos/vr.mp4';

import Header from './components/Header/Header.jsx';
import Intro from './components/Intro/Intro.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import Expertise from './components/Expertise/Expertise.jsx';
import Projects from './components/Projects/Projects.jsx';
import Project from './components/Project/Project.jsx';
import Ticker from './components/Ticker/Ticker.jsx';
import AboutList from './components/AboutList/AboutList.jsx';
import Footer from './components/Footer/Footer.jsx';
import FormBrief from './components/FormBrief/FormBrief.jsx';
import Partners from './components/Partners/Partners.jsx';
import TextEffect from './components/TextEffect/TextEffect.jsx';
import PageNotFound from './components/PageNotFound/PageNotFound.jsx';
import GalleryTabs from './components/GalleryTabs/GalleryTabs.jsx';
import Contacts from './components/Contacts/Contacts.jsx';

const tickerItems = [
  'Компьютерная графика',
  '3D&nbsp;анимация',
  'VR',
  '3d&nbsp;панорамы',
  '3d&nbsp;визуализация',
  'ux/ui дизайн',
  'видео продакшн',
  'разработка ios',
  'разработка android',
  'WEB разработка',
  'контекстная реклама',
  'таргетированная реклама',
  'SEO ПРОДВИЖЕНИЕ',
  'Компьютерная графика',
];

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useLayoutEffect(() => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
    });
  }, []);

  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Header />
          <main>
            <Intro />
            <Ticker items={tickerItems} />
            <Gallery />
            <Expertise />
            <Projects />
            <Project />
            <Ticker items={tickerItems} star={true} />
            <video
              autoPlay
              loop
              muted
              style={{
                display: 'block',
                width: '100%',
                height: '100vh',
                objectFit: 'cover',
              }}>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <Ticker items={tickerItems} />
            <AboutList />
            <TextEffect />
            <Partners />
            <FormBrief />
            <PageNotFound />
            <Contacts />
            <GalleryTabs />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
