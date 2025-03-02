import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import PageNotFound from './components/PageNotFound/PageNotFound.jsx';
import GalleryTabs from './components/GalleryTabs/GalleryTabs.jsx';
import Contacts from './components/Contacts/Contacts.jsx';
import './App.scss';
import Home from './pages/Home.jsx';
import Case from './pages/Case.jsx';
import FormBrief from './components/FormBrief/FormBrief.jsx';
import CookieAgreement from './components/CookieAgreement/CookieAgreement.jsx';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother.min';
import { useEffect, useState } from 'react';
import LoadingMainScreen from './components/LoadingMainScreen/LoadingMainScreen.jsx';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1.5,
      effects: true,
    });

    // Обновить триггеры после загрузки контента
    ScrollTrigger.refresh();

    return () => {
      smoother?.kill();
    };
  }, []);

  return (
    <>
      <div id="smooth-wrapper">
        <Header />
        <LoadingMainScreen />
        {/* <div id="smooth-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<GalleryTabs />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/form" element={<FormBrief />} />
            <Route path="/case" element={<Case />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </div>

        <CookieAgreement /> */}
      </div>
    </>
  );
};

export default App;
