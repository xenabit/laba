import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother.min';

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import PageNotFound from './components/PageNotFound/PageNotFound.jsx';
import GalleryTabs from './components/GalleryTabs/GalleryTabs.jsx';
import Contacts from './components/Contacts/Contacts.jsx';
import FormBrief from './components/FormBrief/FormBrief.jsx';
import CookieAgreement from './components/CookieAgreement/CookieAgreement.jsx';
import LoadingMainScreen from './components/LoadingMainScreen/LoadingMainScreen.jsx';

import Home from './pages/Home.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import CaseMarksTour from './pages/CaseMarksTour.jsx';
import CaseMarkssite from './pages/CaseMarkssite.jsx';
import CaseMarkssiteHR from './pages/CaseMarkssiteHR.jsx';
import CaseCanonChange from './pages/CaseCanonChange.jsx';
import CaseTamagotchi from './pages/CaseTamagotchi.jsx';
import CaseMarksCity from './pages/CaseMarksCity.jsx';

import './App.scss';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function App() {
  const headerRef = useRef(null);
  const wrapperRef = useRef(null);
  const introRef = useRef(null);
  const projectsTileRef = useRef(null);
  const location = useLocation();

  const [isFirstVisit] = useState(() => {
    if (typeof window === 'undefined') return false;
    const hasVisited = sessionStorage.getItem('hasVisitedHome');
    return !hasVisited && location.pathname === '/';
  });

  const [loadingStage, setLoadingStage] = useState(
    isFirstVisit ? 'initial' : 'complete'
  );

  useEffect(() => {
    if (isFirstVisit) sessionStorage.setItem('hasVisitedHome', 'true');
  }, [isFirstVisit]);

  const smootherRef = useRef(null);

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
      if (smootherRef.current) smootherRef.current.kill();
      smootherRef.current = null;
      ScrollTrigger.refresh();
      document.body.style.overflow = '';
    };
  }, [loadingStage]);

  useEffect(() => {
    if (loadingStage === 'complete' && smootherRef.current) {
      smootherRef.current.scrollTo(0, true);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
    ScrollTrigger.refresh();
  }, [location.pathname, loadingStage]);

  const handleStageChange = (stage) => {
    setLoadingStage(stage);
    ScrollTrigger.refresh();
  };
  const handleBalloonsToCenterComplete = () =>
    handleStageChange('transition');
  const handleBalloonsShrinkComplete = () =>
    handleStageChange('complete');
  const handleMaxBalloonSize = () => {};

  return (
    <div id="smooth-wrapper" ref={wrapperRef}>
      <Header
        ref={headerRef}
        loadingStage={loadingStage}
        onBalloonsToCenterComplete={handleBalloonsToCenterComplete}
        onMaxBalloonSize={handleMaxBalloonSize}
        onBalloonsShrinkComplete={handleBalloonsShrinkComplete}
      />

      {isFirstVisit &&
        location.pathname === '/' &&
        loadingStage !== 'complete' && (
          <LoadingMainScreen
            headerRef={headerRef}
            onStageChange={handleStageChange}
            wrapperRef={wrapperRef}
            loadingStage={loadingStage}
            introRef={introRef}
            projectsTileRef={projectsTileRef}
          />
        )}

      <div
        id="smooth-content"
        style={{
          opacity:
            isFirstVisit &&
            location.pathname === '/' &&
            loadingStage !== 'complete'
              ? 0
              : 1,
          pointerEvents:
            isFirstVisit &&
            location.pathname === '/' &&
            loadingStage !== 'complete'
              ? 'none'
              : 'auto',
          transition: 'opacity 0.3s ease',
        }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <Home
                introRef={introRef}
                projectsTileRef={projectsTileRef}
                loadingStage={loadingStage}
              />
            }
          />
          <Route path="/portfolio" element={<GalleryTabs />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/form" element={<FormBrief />} />
          <Route path="/information" element={<PrivacyPolicy />} />
          <Route path="/portfolio/markstour" element={<CaseMarksTour />} />
          <Route path="/portfolio/markssite" element={<CaseMarkssite />} />
          <Route
            path="/portfolio/markssite-hr"
            element={<CaseMarkssiteHR />}
          />
          <Route
            path="/portfolio/canon-change"
            element={<CaseCanonChange />}
          />
          <Route
            path="/portfolio/tamagotchi"
            element={<CaseTamagotchi />}
          />
          <Route
            path="/portfolio/markscity"
            element={<CaseMarksCity />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>

      <CookieAgreement loadingStage={loadingStage} />
    </div>
  );
}
