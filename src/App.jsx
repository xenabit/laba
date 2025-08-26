import { useEffect, useRef, useState, Suspense, lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger, ScrollSmoother } from 'gsap/all';

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import CookieAgreement from './components/CookieAgreement/CookieAgreement.jsx';
import LoadingMainScreen from './components/LoadingMainScreen/LoadingMainScreen.jsx';
import { attachVideoBlobPagehideCleanup, setVideoBlobCacheLimit } from './utils/useVideoBlob';

const PageNotFound = lazy(() => import('./components/PageNotFound/PageNotFound.jsx'));
const GalleryTabs = lazy(() => import('./components/GalleryTabs/GalleryTabs.jsx'));
const Contacts = lazy(() => import('./components/Contacts/Contacts.jsx'));
const FormBrief = lazy(() => import('./components/FormBrief/FormBrief.jsx'));

const Home = lazy(() => import('./pages/Home.jsx'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy.jsx'));
const CaseMarksTour = lazy(() => import('./pages/CaseMarksTour.jsx'));
const CaseMarkssite = lazy(() => import('./pages/CaseMarkssite.jsx'));
const CaseMarkssiteHR = lazy(() => import('./pages/CaseMarkssiteHR.jsx'));
const CaseCanonChange = lazy(() => import('./pages/CaseCanonChange.jsx'));
const CaseTamagotchi = lazy(() => import('./pages/CaseTamagotchi.jsx'));
const CaseMarksCity = lazy(() => import('./pages/CaseMarksCity.jsx'));
const About = lazy(() => import('./pages/About.jsx'));

import './App.scss';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function App() {
  const headerRef = useRef(null);
  const wrapperRef = useRef(null);
  const introRef = useRef(null);
  const projectsTileRef = useRef(null);
  const smootherRef = useRef(null);
  const location = useLocation();

  const [isFirstVisit] = useState(() => {
    if (typeof window === 'undefined') return false;
    return !sessionStorage.getItem('hasVisitedHome') && location.pathname === '/';
  });
  const [loadingStage, setLoadingStage] = useState(isFirstVisit ? 'initial' : 'complete');

  useEffect(() => {
    attachVideoBlobPagehideCleanup();
    setVideoBlobCacheLimit(14);
  }, []);

  useEffect(() => {
    if (isFirstVisit) sessionStorage.setItem('hasVisitedHome', 'true');
  }, [isFirstVisit]);

  useEffect(() => {
    const preload = () => {
      import('./components/GalleryTabs/GalleryTabs.jsx');
      import('./pages/About.jsx');
    };
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      window.requestIdleCallback(preload);
    } else {
      setTimeout(preload, 0);
    }
  }, []);

useEffect(() => {
  if (loadingStage !== 'complete') return;
  const isIOS = /iP(hone|ad|od)/.test(navigator.userAgent);
  if (isIOS) return;

  let rafId;

  const createWhenReady = () => {
    const wrapper = document.getElementById('smooth-wrapper');
    const content = document.getElementById('smooth-content');
    if (!wrapper || !content) {
      rafId = requestAnimationFrame(createWhenReady);
      return;
    }
    try {
      smootherRef.current = ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1.5,
        effects: true,
      });
      ScrollTrigger.refresh();
    } catch {}
  };

  rafId = requestAnimationFrame(createWhenReady);

  return () => {
    cancelAnimationFrame(rafId);
    if (smootherRef.current) {
      smootherRef.current.kill();
      smootherRef.current = null;
    }
  };
}, [loadingStage]);


  useEffect(() => {
    if (location.pathname !== '/' && loadingStage !== 'complete') {
      setLoadingStage('complete');
      ScrollTrigger.refresh();
    }
  }, [location.pathname, loadingStage]);

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

    const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection || null;

    const saveData = !!(conn && conn.saveData);
    const eff = (conn && conn.effectiveType) || '4g';
    const isMobile = window.matchMedia('(max-width: 1024px)').matches;

    const rootMargin = saveData ? '120px' : isMobile ? (/(^|-)2g/.test(eff) ? '150px' : '220px') : /(^|-)3g/.test(eff) ? '300px' : '800px';

    const observer = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;

          const v = entry.target;
          if (!(v && v.tagName === 'VIDEO')) {
            obs.unobserve(v);
            continue;
          }

          if (v.dataset.preloaded === '1' || v.readyState >= 2) {
            obs.unobserve(v);
            continue;
          }

          v.preload = 'auto';
          try {
            v.load();
          } catch (e) {}
          v.dataset.preloaded = '1';
          obs.unobserve(v);
        }
      },
      { rootMargin, threshold: 0.01 }
    );

    const startObserve = () => {
      root.querySelectorAll('video[data-preload]:not([data-preloaded="1"]):not([data-blob-managed="1"])').forEach((el) => observer.observe(el));
    };

    if ('requestAnimationFrame' in window) {
      requestAnimationFrame(startObserve);
    } else {
      setTimeout(startObserve, 0);
    }

    return () => observer.disconnect();
  }, [location.pathname]);

  const handleStageChange = (stage) => {
    setLoadingStage(stage);
    ScrollTrigger.refresh();
  };
  const handleBalloonsToCenterComplete = () => handleStageChange('transition');
  const handleBalloonsShrinkComplete = () => handleStageChange('complete');
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

      <Suspense fallback={null}>
        {isFirstVisit && location.pathname === '/' && loadingStage !== 'complete' && (
          <LoadingMainScreen headerRef={headerRef} onStageChange={handleStageChange} wrapperRef={wrapperRef} loadingStage={loadingStage} introRef={introRef} projectsTileRef={projectsTileRef} />
        )}

        <div
          id="smooth-content"
          style={{
            opacity: isFirstVisit && location.pathname === '/' && loadingStage !== 'complete' ? 0 : 1,
            pointerEvents: isFirstVisit && location.pathname === '/' && loadingStage !== 'complete' ? 'none' : 'auto',
            transition: 'opacity 0.3s ease',
          }}
        >
          <Routes>
            <Route path="/" element={<Home introRef={introRef} projectsTileRef={projectsTileRef} loadingStage={loadingStage} />} />
            <Route path="/portfolio" element={<GalleryTabs loadingStage={loadingStage} />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/form" element={<FormBrief />} />
            <Route path="/information" element={<PrivacyPolicy />} />
            <Route path="/about" element={<About />} />
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
      </Suspense>

      <CookieAgreement loadingStage={loadingStage} />
    </div>
  );
}
