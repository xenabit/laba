import CONTACTS from '../../../constants/contacts';
import { Link } from 'react-router-dom';
import './ButtonBlob.scss';

function ButtonBlob({ href, to, children, className = '', ...props }) {
  const content = children || 'Связаться';

  if (to) {
    return (
      <Link to={to} className={`ButtonBlob ${className}`} {...props}>
        <span>{content}</span>
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={`ButtonBlob ${className}`} {...props}>
        <span>{content}</span>
      </a>
    );
  }

  return (
    <a href={`tel:+${CONTACTS.tel.work}`} className={`ButtonBlob ${className}`} {...props}>
      <span>{content}</span>
    </a>
  );
}

export default ButtonBlob;
