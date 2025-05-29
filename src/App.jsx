import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import PageNotFound from './components/PageNotFound/PageNotFound.jsx';
import GalleryTabs from './components/GalleryTabs/GalleryTabs.jsx';
import Contacts from './components/Contacts/Contacts.jsx';
import './App.scss';
import Home from './pages/Home.jsx';
import CaseMarksTour from './pages/CaseMarksTour.jsx';
import CaseMarkssite from './pages/CaseMarkssite.jsx';
import CaseMarkssiteHR from './pages/CaseMarkssiteHR.jsx';
import CaseCanonChange from './pages/CaseCanonChange.jsx';
import CaseTamagotchi from './pages/CaseTamagotchi.jsx';
import CaseMarksCity from './pages/CaseMarksCity.jsx';
import FormBrief from './components/FormBrief/FormBrief.jsx';
import CookieAgreement from './components/CookieAgreement/CookieAgreement.jsx';
import LoadingMainScreen from './components/LoadingMainScreen/LoadingMainScreen.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
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
  const [isFirstVisit, setIsFirstVisit] = useState(false);
  const location = useLocation();
  const smootherRef = useRef(null); // Сохраняем экземпляр ScrollSmoother

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
    if (loadingStage === 'complete') {
      smootherRef.current = ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1.5,
        effects: true,
      });
      ScrollTrigger.refresh();
    }
    return () => {
      if (smootherRef.current) {
        smootherRef.current.kill();
        smootherRef.current = null;
      }
      ScrollTrigger.refresh();
      document.body.style.overflow = '';
    };
  }, [loadingStage]);

  // Сбрасываем скролл при смене маршрута
  useEffect(() => {
    if (loadingStage === 'complete' && smootherRef.current) {
      // Прокручиваем к началу страницы с плавной анимацией
      smootherRef.current.scrollTo(0, true);
    } else {
      // Если ScrollSmoother ещё не инициализирован, используем нативный scroll
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
    // Обновляем ScrollTrigger после сброса скролла
    ScrollTrigger.refresh();
  }, [location.pathname, loadingStage]);

  const handleStageChange = (stage) => {
    setLoadingStage(stage);
    ScrollTrigger.refresh();
  };

  const handleBalloonsToCenterComplete = () => {
    console.log('App: Balloons to center complete, switching to transition');
    handleStageChange('transition');
  };

  const handleBalloonsShrinkComplete = () => {
    console.log('App: Balloons shrink complete, switching to complete');
    handleStageChange('complete');
  };

  const handleMaxBalloonSize = () => {
    console.log('App: Max balloon size reached');
  };

  return (
    <div id="smooth-wrapper" ref={wrapperRef}>
      <Header
        ref={headerRef}
        loadingStage={loadingStage}
        onBalloonsToCenterComplete={handleBalloonsToCenterComplete}
        onMaxBalloonSize={handleMaxBalloonSize}
        onBalloonsShrinkComplete={handleBalloonsShrinkComplete}
      />
      {isFirstVisit && location.pathname === '/' && (
        <LoadingMainScreen headerRef={headerRef} onStageChange={handleStageChange} wrapperRef={wrapperRef} loadingStage={loadingStage} introRef={introRef} projectsTileRef={projectsTileRef} />
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
          <Route path="/" element={<Home introRef={introRef} projectsTileRef={projectsTileRef} loadingStage={loadingStage} />} />
          <Route path="/portfolio" element={<GalleryTabs />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/form" element={<FormBrief />} />
          <Route path="/information" element={<PrivacyPolicy />} />
          <Route path="/portfolio/markstour" element={<CaseMarksTour />} />
          <Route path="/portfolio/markssite" element={<CaseMarkssite />} />
          <Route path="/portfolio/markssite-hr" element={<CaseMarkssiteHR />} />
          <Route path="/portfolio/canon-change" element={<CaseCanonChange />} />
          <Route path="/portfolio/tamagotchi" element={<CaseTamagotchi />} />
          <Route path="/portfolio/markscity" element={<CaseMarksCity />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
      <CookieAgreement loadingStage={loadingStage} />
    </div>
  );
};

export default App;
