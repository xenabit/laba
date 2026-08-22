import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { HashRouter } from 'react-router-dom';
import { registerSW } from 'virtual:pwa-register';

async function cleanOutdatedCache() {
  if (!('caches' in window)) return;

  try {
    const cacheNames = await caches.keys();
    const currentVersion = 'v1';

    const outdatedCaches = cacheNames.filter((name) => {
      return !name.includes(currentVersion);
    });

    if (outdatedCaches.length > 0) {
      await Promise.all(outdatedCaches.map((name) => caches.delete(name)));
    }
  } catch (e) {
    console.warn('⚠️ Ошибка очистки кеша:', e);
  }
}

function cleanLocalStorage() {
  try {
    const currentVersion = 'v1';
    const savedVersion = localStorage.getItem('appVersion');

    if (savedVersion !== currentVersion) {
      const keysToRemove = ['hasVisitedHome', 'scroll_'];
      keysToRemove.forEach((key) => {
        if (localStorage.getItem(key) !== null) {
          localStorage.removeItem(key);
        }
      });
      localStorage.setItem('appVersion', currentVersion);
    }
  } catch (e) {
    console.warn('⚠️ Ошибка очистки localStorage:', e);
  }
}

async function initializeApp() {
  await cleanOutdatedCache();

  cleanLocalStorage();
}

if (import.meta.env.PROD) {
  await initializeApp();
}

// ✅ Регистрация SW с обработкой обновлений
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  const updateSW = registerSW({
    immediate: true,
    onNeedRefresh() {
      updateSW(true);
    },
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(
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
);
