import styles from './PageNotFound.module.scss';
// import picture from '../../assets/images/page-not-found.jpg';
import error404 from '../../assets/images/page-not-found-404.svg';
import { Link } from 'react-router-dom';

function PageNotFound() {

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    e.currentTarget.style.setProperty('--x3', `${x}px`);
    e.currentTarget.style.setProperty('--y3', `${y}px`);
  };

  return (
    <section className={styles.PageNotFound}>
      <div className={styles.PageNotFound__text}>
        <div className={styles.PageNotFound__num}>
          <img src={error404} alt="Page not found" />
        </div>
        <p className={styles.PageNotFound__explain}>К&nbsp;сожалению, страница не&nbsp;найдена</p>
        <p className={styles.PageNotFound__desc}>Возможно вы&nbsp;неправильно набрали URL&#8209;адрес или страница была&nbsp;удалена</p>
        <Link to="/" onClick={localStorage.setItem('activeTab', '/')} onMouseMove={handleMouseMove} href="#" className={styles.PageNotFound__button}>
          <span>Перейти на главную</span>
        </Link>
      </div>
    </section>
  );
}

export default PageNotFound;
