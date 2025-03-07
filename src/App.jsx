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
import LoadingMainScreen from './components/LoadingMainScreen/LoadingMainScreen.jsx';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother.min';
import { useEffect, useRef, useState } from 'react';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  const headerRef = useRef(null);
  const wrapperRef = useRef(null);
  const [loadingStage, setLoadingStage] = useState('initial'); // 'initial', 'scrolling', 'transition', 'complete'

  useEffect(() => {
    let smoother;
    if (loadingStage === 'complete') {
      smoother = ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1.5,
        effects: true,
      });
      ScrollTrigger.refresh();
    }
    return () => smoother?.kill();
  }, [loadingStage]);

  const handleStageChange = (stage) => {
    setLoadingStage(stage);
  };

  return (
    <div id="smooth-wrapper" ref={wrapperRef}>
      <Header ref={headerRef} />
      <LoadingMainScreen headerRef={headerRef} onStageChange={handleStageChange} wrapperRef={wrapperRef} loadingStage={loadingStage} />
      <div id="smooth-content" style={{ opacity: loadingStage === 'complete' ? 1 : 0, pointerEvents: loadingStage === 'complete' ? 'auto' : 'none' }}>
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
      <CookieAgreement />
    </div>
  );
};

export default App;
