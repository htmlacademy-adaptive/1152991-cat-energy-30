var t=document.querySelector(".main-header__toggle"),c=document.querySelector(".main-nav");c.classList.remove("main-nav--nojs");t.addEventListener("touchend",()=>{t.classList.toggle("main-header__toggle--close"),c.classList.toggle("main-nav--opened")});var r=window.screen.width;function s(){let o=l(r),e=new ymaps.Map("map",{center:o,zoom:16}),n=i(r),a=new ymaps.Placemark([59.93861885543524,30.322878167387177],{},{iconLayout:"default#image",iconImageHref:"images/map-pin.svg",iconImageSize:n[0],iconImageOffset:n[1]});e.controls.remove("geolocationControl"),e.controls.remove("searchControl"),e.controls.remove("trafficControl"),e.controls.remove("typeSelector"),e.controls.remove("fullscreenControl"),e.controls.remove("zoomControl"),e.controls.remove("rulerControl"),e.geoObjects.add(a)}ymaps.ready(s);function l(o){return o<768?[59.93861885543524,30.322878167387177]:o<1440?[59.938625584756636,30.322974726911703]:[59.93833891445115,30.319751092081667]}function i(o){return o<768?[[57,53],[-27,-43]]:o<1439?[[113,106],[-57,-100]]:[[113,106],[-50,-95]]}
