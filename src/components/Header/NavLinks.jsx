import { memo } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const NAV_ITEMS = [
  { path: '/',         label: 'Главная'    },
  { path: '/portfolio',label: 'Портфолио'  },
  { path: '/contact',  label: 'Контакты'   },
];

export default memo(function NavLinks({ activeTab, onTabClick }) {
  return (
    <nav className={styles.Header__innerNav}>
      <ul>
        {NAV_ITEMS.map(({ path, label }) => (
          <li key={path}>
            <Link
              className={activeTab === path ? styles.active : ''}
              to={path}
              onClick={() => onTabClick(path)}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
});
