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
  const [loadingStage, setLoadingStage] = useState('initial');
  const [shouldAnimateHome, setShouldAnimateHome] = useState(false);

  useEffect(() => {
    let smoother;
    if (loadingStage === 'complete') {
      // Инициализация ScrollSmoother
      smoother = ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1.5,
        effects: true,
      });
      ScrollTrigger.refresh();
      // Убедимся, что скролл разблокирован
      document.body.style.overflow = '';
    }
    return () => {
      if (smoother) smoother.kill();
      document.body.style.overflow = ''; // Сбрасываем при размонтировании
    };
  }, [loadingStage]);

  const handleStageChange = (stage) => {
    setLoadingStage(stage);
  };

  const handleMaxBalloonSize = () => {
    setShouldAnimateHome(true);
  };

  return (
    <div id="smooth-wrapper" ref={wrapperRef}>
      <Header ref={headerRef} shouldAnimate={shouldAnimateHome} />
      <LoadingMainScreen headerRef={headerRef} onStageChange={handleStageChange} wrapperRef={wrapperRef} loadingStage={loadingStage} onMaxBalloonSize={handleMaxBalloonSize} />
      <div
        id="smooth-content"
        style={{
          opacity: loadingStage === 'complete' ? 1 : 0,
          pointerEvents: loadingStage === 'complete' ? 'auto' : 'none',
          transition: 'opacity 0.5s ease',
        }}
      >
        <Routes>
          <Route path="/" element={<Home shouldAnimate={shouldAnimateHome} />} />
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
