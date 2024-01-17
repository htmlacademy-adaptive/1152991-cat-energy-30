/* в этот файл добавляет скрипты*/
// menu
const navToggle = document.querySelector('.main-header__toggle');
const navMain = document.querySelector('.main-nav');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('main-header__toggle--close');
  navMain.classList.toggle('main-nav--opened');
});

// map
const mapImage = document.querySelector('.map__img');
mapImage.style.display = 'none';

const screenWidth = window.screen.width;

function initMap() {

  const centerSize = creatCenter(screenWidth);
  /* eslint-disable */
  const map = new ymaps.Map('map', {
    center: centerSize,
    zoom: 16
  });

  const icon = iconGeometry(screenWidth);

  const placemark = new ymaps.Placemark([59.93861885543524, 30.322878167387177], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'images/map-pin.svg',
    iconImageSize: icon[0],
    iconImageOffset: icon[1],
  });

  map.controls.remove('geolocationControl');
  map.controls.remove('searchControl');
  map.controls.remove('trafficControl');
  map.controls.remove('typeSelector');
  map.controls.remove('fullscreenControl');
  map.controls.remove('zoomControl');
  map.controls.remove('rulerControl');

  map.geoObjects.add(placemark);
}

ymaps.ready(initMap);
/* eslint-enable */

function creatCenter(screen) {
  if (screen < 768) {
    return [59.93861885543524, 30.322878167387177];
  } else if (screen < 1440) {
    return [59.938625584756636, 30.322974726911703];
  } else {
    return [59.93833891445115, 30.319751092081667];
  }
}

function iconGeometry(screen) {
  if (screen < 768) {
    return [[57, 53], [-27, -43]];
  } else if (screen < 1439) {
    return [[113, 106], [-57, -100]];
  } else {
    return [[113, 106], [-50, -95]];
  }
}
