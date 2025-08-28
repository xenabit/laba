import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { HashRouter } from 'react-router-dom';
import { registerSW } from 'virtual:pwa-register';
// import { BrowserRouter } from 'react-router-dom';

if ('serviceWorker' in navigator && import.meta.env.PROD) {
  registerSW({ immediate: true });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  // <BrowserRouter// >
  <HashRouter
    future={{
    v7_relativeSplatPath: true,
    v7_startTransition: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  }}
  >
    <App />
  </HashRouter>
  // </BrowserRouter>
);
