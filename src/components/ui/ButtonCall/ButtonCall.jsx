import CONTACTS from '../../../constants/contacts';
import './ButtonCall.scss';

function ButtonCall() {
  console.log(CONTACTS);
  console.log(CONTACTS);
  console.log(CONTACTS);
  return (
    <a href={`"tel:+${CONTACTS.tel.work}"`} className="ButtonCall">
      <span>Связаться</span>
    </a>
  );
}
export default ButtonCall;
