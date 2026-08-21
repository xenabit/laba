import { Link } from 'react-router-dom';
import './ButtonBlobCase.scss';

function ButtonBlobCase({ to, children, className = '', ...props }) {
  return (
    <Link to={to} className={`ButtonBlobCase ${className}`} {...props}>
      <div className="ButtonBlobCase__box">
        <div className="ButtonBlobCase__text">
          <div className="ButtonBlobCase__title">{children || 'Ещё кейсы'}</div>
          <div className="ButtonBlobCase__subtitle">Web / Desktop / Game / Mobile</div>
        </div>
      </div>
    </Link>
  );
}

export default ButtonBlobCase;
