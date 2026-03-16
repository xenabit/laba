import { CONTACTS } from '../../../constants/contacts';
import './ButtonCall.scss';

function ButtonCall() {
  return (
    <a href={`"tel:+${CONTACTS}"`} className="ButtonCall">
      <span>Связаться</span>
    </a>
  );
}
export default ButtonCall;
