import { useState, useRef } from 'react';
import styles from './FormBrief.module.scss';
import { OPTIONS } from '../../constants/options';

const INPUT_NAMES = {
  name: 'name',
  email: 'email',
};

const ERROR_TEXT = {
  empty: 'Заполните поле',
  email: 'Некорректный Email',
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function FormBrief() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const formRef = useRef(null);

  const handleMouseMove = (e) => {
    const { currentTarget: element } = e;
    const x = e.pageX - element.offsetLeft;
    const y = e.pageY - element.offsetTop;

    element.style.setProperty('--x2', `${x}px`);
    element.style.setProperty('--y2', `${y}px`);
  };

  const handleAgreementChange = (e) => {
    setIsAgreed(e.target.checked);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionChange = (e) => {
    const { value, checked } = e.target;
    setSelectedOptions((prevSelected) => (checked ? [...prevSelected, value] : prevSelected.filter((option) => option !== value)));
  };

  const handleRemoveOption = (value) => {
    setSelectedOptions((prevSelected) => prevSelected.filter((option) => option !== value));
  };

  const validateInputStringEmail = (string) => {
    return !EMAIL_REGEX.test(string.trim());
  };

  const validateInput = (e) => {
    const value = e.currentTarget.value;
    const name = e.currentTarget.name;
    const parent = e.currentTarget.parentNode;

    const setError = (element, errorMessage) => {
      element.classList.add(styles.FormBrief__input_error);
      const errorElement = element.querySelector(`.${styles.FormBrief__textError}`);

      if (errorElement) {
        errorElement.textContent = errorMessage;
      }
    };

    const clearError = (element) => {
      element.classList.remove(styles.FormBrief__input_error);
      const errorElement = element.querySelector(`.${styles.FormBrief__textError}`);

      if (errorElement) {
        errorElement.textContent = '';
      }
    };

    if (name === INPUT_NAMES.name) {
      if (!value.trim()) {
        setError(parent, ERROR_TEXT.empty);
      } else {
        clearError(parent);
      }
    }

    if (name === INPUT_NAMES.email) {
      if (!value.trim()) {
        setError(parent, ERROR_TEXT.empty);
      } else if (validateInputStringEmail(value)) {
        setError(parent, ERROR_TEXT.email);
      } else {
        setIsFormValid(true);
        clearError(parent);
      }
    }
  };

  const handleBlur = (e) => {
    validateInput(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      formRef.current.submit();
      setIsFormSubmitted(true);
    }
  };

  return (
    <section className={styles.FormBrief}>
      <div className={styles.FormBrief__header}>
        <h2>Заполните бриф</h2>
      </div>
      <form noValidate ref={formRef} action="https://echo.htmlacademy.ru/" method="post" className={isFormSubmitted ? styles.success : ''} onSubmit={handleSubmit}>
        <p>
          Выберете подходящие вам услуги, либо звоните, мы&nbsp;пообщаемся <br></br>и&nbsp;подберем лучшее решение для вашей компании
        </p>
        <div className={styles.FormBrief__services}>
          <div className={styles.FormBrief__dropdown}>
            <div className={`${styles.FormBrief__dropclick} ${isDropdownOpen ? styles.active : ''} ${selectedOptions.length > 0 ? styles.contain : ''}`} aria-expanded={isDropdownOpen}>
              <span onClick={handleDropdownToggle}>Выбрать услуги</span>
              <div className={styles.FormBrief__selectedItems}>
                {selectedOptions.map((option) => (
                  <div key={option.value} onClick={() => handleRemoveOption(option)}>
                    {OPTIONS?.find((o) => o.value === option).label}
                  </div>
                ))}
              </div>
            </div>
            <div className={`${styles.FormBrief__select} ${isDropdownOpen ? styles.active : ''}`}>
              {OPTIONS?.map((option) => (
                <label key={option.value} onMouseMove={handleMouseMove} className={`${styles.FormBrief__option} ${selectedOptions.includes(option.value) ? styles.active : ''}`}>
                  <input type="checkbox" name="services" value={option.value} checked={selectedOptions.includes(option.value)} onChange={handleOptionChange} />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.FormBrief__contacts}>
          <h3 className={styles.FormBrief__subtitle}>Контактные данные</h3>
          <div className={styles.FormBrief__inputs}>
            <div className={`${styles.FormBrief__input} ${styles.FormBrief__input_name}`}>
              <input type="text" id="name" name={INPUT_NAMES.name} onChange={validateInput} onBlur={handleBlur} placeholder=" " autoComplete="name" />
              <span className={styles.FormBrief__placeholder}>Ваше имя</span>
              <span className={styles.FormBrief__textError}>Заполните поле</span>
            </div>
            <div className={`${styles.FormBrief__input} ${styles.FormBrief__input_email}`}>
              <input type="text" id="email" name={INPUT_NAMES.email} onChange={validateInput} onBlur={handleBlur} placeholder=" " autoComplete="email" />
              <span className={styles.FormBrief__placeholder}>Email</span>
              <span className={styles.FormBrief__textError}>Заполните поле</span>
            </div>
          </div>
          <div className={`${styles.FormBrief__checkbox}`}>
            <input id="agreement" name="agreement" type="checkbox" onChange={handleAgreementChange} required />
            <label htmlFor="agreement">Подтвердите согласие на обработку персональных данных</label>
          </div>
          <button disabled={!isAgreed} onMouseMove={handleMouseMove} className={styles.FormBrief__submit} type="submit">
            <span>Отправить заявку</span>
          </button>
        </div>
      </form>
      <div className={`${styles.FormBrief__success} ${isFormSubmitted ? styles.active : ''}`}>
        <p>Наш менеджер свяжется с&nbsp;вами в&nbsp;ближайшее время</p>
        <a href="#">Перейти на главную</a>
      </div>
    </section>
  );
}

export default FormBrief;
