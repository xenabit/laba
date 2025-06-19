import React, { Component } from 'react';

class YandexMap extends Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef(); // Создаем ref для доступа к элементу карты
    this._ymap = null; // Ссылка на объект Yandex Map
    this._once = false; // Флаг для отслеживания инициализации карты
  }

  componentDidMount() {
    // Добавляем обработчик события scroll для проверки видимости карты
    window.addEventListener('scroll', this._scroll.bind(this));
    // Вызываем метод _scroll при монтировании компонента
    this._scroll();
  }

  componentWillUnmount() {
    // Удаляем обработчик события scroll при размонтировании компонента
    window.removeEventListener('scroll', this._scroll.bind(this));
  }

  _scroll() {
    const elMap = this.mapRef.current; // Получаем элемент через ref
    if (!elMap || this._once) return; // Если элемент не существует или карта уже инициализирована, выходим из функции

    // Рассчитываем высоту окна браузера
    const winH = window.innerHeight > 0 ? window.innerHeight : screen.height;
    // Рассчитываем текущий скролл страницы
    const scrollTop = document.documentElement.scrollTop || (document.body && document.body.scrollTop) || 0;
    // Рассчитываем верхнюю и нижнюю границы области просмотра
    const viewPosY2 = scrollTop + winH; // Нижняя граница
    const viewPosY1 = scrollTop - winH; // Верхняя граница
    let top = 0;

    // Рассчитываем позицию элемента относительно документа
    if (elMap.offsetParent) {
      let obj = elMap;
      while (true) {
        top += obj.offsetTop; // Прибавляем смещение элемента
        if (!obj.offsetParent) {
          break; // Останавливаем цикл, если нет родительского элемента
        }
        obj = obj.offsetParent; // Переходим к следующему родителю
      }
    } else if (elMap.y) {
      top += elMap.y; // Если используется другая система координат
    }

    // Проверяем, находится ли элемент в области просмотра
    if (viewPosY2 >= top && viewPosY1 < top) {
      this._once = true; // Устанавливаем флаг, что карта была инициализирована
      this._initYandexMap(); // Инициализируем карту
    }
  }

  _initYandexMap() {
    // Создаем новый скрипт для подключения API Яндекс Карт
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU'; // URL API Яндекс Карт

    // Обработчик загрузки скрипта
    script.onload = () => {
      let iterations = 20; // Максимальное количество попыток загрузки
      const interval = setInterval(() => {
        // Проверяем, доступен ли объект ymaps
        if (typeof ymaps !== 'undefined' && typeof ymaps.Map == 'function') {
          ymaps.load(() => {
            // Создаем новую карту с указанным центром и zoom из props
            this._ymap = new ymaps.Map(this.mapRef.current, {
              center: this.props.center, // Координаты центра карты
              zoom: this.props.zoom, // Уровень масштабирования
            });

            // Создаем коллекцию меток
            const pointsCol = new ymaps.GeoObjectCollection();

            // Добавляем метки на карту
            this.props.points.forEach((point) => {
              // Настройка пользовательской иконки из props.icon
              const customIconOptions = {
                iconLayout: 'default#image',
                iconImageHref: this.props.icon, // Используем переданный через props путь к иконке
                iconImageSize: [48, 48], // Размер иконки (ширина, высота)
                iconImageOffset: [-24, -48], // Смещение иконки относительно координат
              };

              // Создаем Placemark с настроенными опциями
              pointsCol.add(new ymaps.Placemark(point.coords, point.options, customIconOptions));
            });

            // Добавляем коллекцию меток на карту
            this._ymap.geoObjects.add(pointsCol);

            // Явно устанавливаем переданный zoom
            this._ymap.setBounds(pointsCol.getBounds(), { checkZoomRange: false });
            this._ymap.setZoom(this.props.zoom);

            // Убираем класс "hide" после загрузки карты
            setTimeout(() => {
              this.mapRef.current.classList.remove('hide');
            }, 100);
          });
          clearInterval(interval); // Очищаем интервал после успешной загрузки
        } else if (iterations-- === 0) {
          clearInterval(interval); // Прекращаем попытки загрузки, если достигнут лимит
        }
      }, 100);
    };

    // Добавляем скрипт в DOM
    document.body.appendChild(script);
  }

  render() {
    return <div className={`hide ${this.props.additionalClass || ''}`} ref={this.mapRef}></div>;
  }
}

export default YandexMap;
