import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import PageNotFound from './components/PageNotFound/PageNotFound.jsx';
import GalleryTabs from './components/GalleryTabs/GalleryTabs.jsx';
import Contacts from './components/Contacts/Contacts.jsx';
import './App.scss';
import Home from './pages/Home.jsx';
import Case from './pages/Case.jsx';
import CaseMarkssite from './pages/CaseMarkssite.jsx';
import CaseMarkssiteHR from './pages/CaseMarkssiteHR.jsx';
import FormBrief from './components/FormBrief/FormBrief.jsx';
import CookieAgreement from './components/CookieAgreement/CookieAgreement.jsx';
import LoadingMainScreen from './components/LoadingMainScreen/LoadingMainScreen.jsx';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother.min';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  const headerRef = useRef(null);
  const wrapperRef = useRef(null);
  const introRef = useRef(null);
  const projectsTileRef = useRef(null);
  const [loadingStage, setLoadingStage] = useState('initial');
  const [shouldAnimateHome, setShouldAnimateHome] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisitedHome');
    if (!hasVisited && location.pathname === '/') {
      setIsFirstVisit(true);
      sessionStorage.setItem('hasVisitedHome', 'true');
    } else {
      setIsFirstVisit(false);
      setLoadingStage('complete');
    }
  }, [location.pathname]);

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
      document.body.style.overflow = '';
    }
    return () => {
      if (smoother) smoother.kill();
      document.body.style.overflow = '';
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
      {isFirstVisit && location.pathname === '/' && (
        <LoadingMainScreen
          headerRef={headerRef}
          onStageChange={handleStageChange}
          wrapperRef={wrapperRef}
          loadingStage={loadingStage}
          onMaxBalloonSize={handleMaxBalloonSize}
          introRef={introRef}
          projectsTileRef={projectsTileRef}
        />
      )}
      <div
        id="smooth-content"
        style={{
          opacity: isFirstVisit && location.pathname === '/' && loadingStage !== 'complete' ? 0 : 1,
          pointerEvents: isFirstVisit && location.pathname === '/' && loadingStage !== 'complete' ? 'none' : 'auto',
          transition: isFirstVisit && location.pathname === '/' ? 'opacity 1s ease' : 'none',
        }}
      >
        <Routes>
          <Route path="/" element={<Home introRef={introRef} projectsTileRef={projectsTileRef} shouldAnimate={shouldAnimateHome} />} />
          <Route path="/portfolio" element={<GalleryTabs />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/form" element={<FormBrief />} />
          <Route path="/case" element={<Case />} />
          <Route path="/markssite" element={<CaseMarkssite />} />
          <Route path="/markssite-hr" element={<CaseMarkssiteHR />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
      <CookieAgreement loadingStage={loadingStage} />
    </div>
  );
};

export default App;
