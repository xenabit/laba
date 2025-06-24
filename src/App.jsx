import { lazy, Suspense, useState, useEffect, useRef } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger, ScrollSmoother } from 'gsap/all';
import './App.scss';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Header = lazy(() => import('./components/Header/Header.jsx'));
const Footer = lazy(() => import('./components/Footer/Footer.jsx'));
const LoadingMainScreen = lazy(() => import('./components/LoadingMainScreen/LoadingMainScreen.jsx'));
const CookieAgreement = lazy(() => import('./components/CookieAgreement/CookieAgreement.jsx'));

const Home = lazy(() => import('./pages/Home.jsx'));
const GalleryTabs = lazy(() => import('./components/GalleryTabs/GalleryTabs.jsx'));
const Contacts = lazy(() => import('./components/Contacts/Contacts.jsx'));
const FormBrief = lazy(() => import('./components/FormBrief/FormBrief.jsx'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy.jsx'));
const CaseMarksTour = lazy(() => import('./pages/CaseMarksTour.jsx'));
const CaseMarkssite = lazy(() => import('./pages/CaseMarkssite.jsx'));
const CaseMarkssiteHR = lazy(() => import('./pages/CaseMarkssiteHR.jsx'));
const CaseCanonChange = lazy(() => import('./pages/CaseCanonChange.jsx'));
const CaseTamagotchi = lazy(() => import('./pages/CaseTamagotchi.jsx'));
const CaseMarksCity = lazy(() => import('./pages/CaseMarksCity.jsx'));
const PageNotFound = lazy(() => import('./components/PageNotFound/PageNotFound.jsx'));

export default function App() {
  const location = useLocation();
  const wrapperRef = useRef(null);
  const introRef = useRef(null);
  const projectsTileRef = useRef(null);
  const headerRef = useRef(null);

  const [isFirstVisit] = useState(() => {
    if (typeof window === 'undefined') return false;
    return !sessionStorage.getItem('hasVisitedHome') && location.pathname === '/';
  });
  const [loadingStage, setLoadingStage] = useState(isFirstVisit ? 'initial' : 'complete');
  useEffect(() => {
    if (isFirstVisit) {
      sessionStorage.setItem('hasVisitedHome', 'true');
    }
  }, [isFirstVisit]);

  const connection = navigator.connection || {};
  const slowNetwork = connection.saveData === true || ['slow-2g', '2g', '3g'].includes(connection.effectiveType);
  const lowPowerCPU = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
  const isIOS = /iP(hone|ad|od)/.test(navigator.userAgent);

  const smootherRef = useRef(null);
  useEffect(() => {
    if (loadingStage !== 'complete' || isIOS || slowNetwork || lowPowerCPU) return;

    const createSmooth = () => {
      smootherRef.current = ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1.5,
        effects: true,
      });
      ScrollTrigger.refresh();
    };

    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(createSmooth);
    } else {
      setTimeout(createSmooth, 0);
    }

    return () => {
      if (smootherRef.current) {
        smootherRef.current.kill();
        smootherRef.current = null;
        ScrollTrigger.refresh();
        document.body.style.overflow = '';
      }
    };
  }, [loadingStage, isIOS, slowNetwork, lowPowerCPU]);

  useEffect(() => {
    if (loadingStage === 'complete' && smootherRef.current) {
      smootherRef.current.scrollTo(0, true);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
    ScrollTrigger.refresh();
  }, [location.pathname, loadingStage]);

  useEffect(() => {
    const root = document.getElementById('smooth-content');
    if (!root) return;

    const rootMargin = slowNetwork ? '100px' : '300px';
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(({ isIntersecting, target }) => {
          if (!isIntersecting) return;
          const v = target;
          v.preload = 'auto';
          v.load();
          obs.unobserve(v);
        });
      },
      { rootMargin }
    );

    root.querySelectorAll('video[data-preload]').forEach((v) => observer.observe(v));

    return () => observer.disconnect();
  }, [slowNetwork]);

  const handleStageChange = (stage) => {
    setLoadingStage(stage);
    ScrollTrigger.refresh();
  };
  const handleBalloonsToCenterComplete = () => handleStageChange('transition');
  const handleBalloonsShrinkComplete = () => handleStageChange('complete');
  const handleMaxBalloonSize = () => {};

  return (
    <div id="smooth-wrapper" ref={wrapperRef}>
      <Suspense fallback={null}>
        <Header
          ref={headerRef}
          loadingStage={loadingStage}
          onBalloonsToCenterComplete={handleBalloonsToCenterComplete}
          onMaxBalloonSize={handleMaxBalloonSize}
          onBalloonsShrinkComplete={handleBalloonsShrinkComplete}
        />
      </Suspense>

      {isFirstVisit && location.pathname === '/' && loadingStage !== 'complete' && (
        <Suspense fallback={null}>
          <LoadingMainScreen headerRef={headerRef} onStageChange={handleStageChange} wrapperRef={wrapperRef} loadingStage={loadingStage} introRef={introRef} projectsTileRef={projectsTileRef} />
        </Suspense>
      )}

      <div
        id="smooth-content"
        style={{
          opacity: isFirstVisit && location.pathname === '/' && loadingStage !== 'complete' ? 0 : 1,
          pointerEvents: isFirstVisit && location.pathname === '/' && loadingStage !== 'complete' ? 'none' : 'auto',
          transition: 'opacity 0.3s ease',
        }}
      >
        <Suspense fallback={<div></div>}>
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
        </Suspense>
      </div>
      <Suspense fallback={null}>
        <CookieAgreement loadingStage={loadingStage} />
      </Suspense>
    </div>
  );
}
