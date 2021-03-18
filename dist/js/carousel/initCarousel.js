"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function initCarousel(pricesData) {
  setSlideItems();
  initSwiper();

  function setSlideItems() {
    var sliderWrapper = document.getElementById('plans-swiper-wrapper');
    pricesData.data.forEach(function (data) {
      var src = data.imgUrl;
      var header = data.header;
      var price = data.content.replace(/<([\s\S]+?)>/g, '<p>$1</p>');
      var cardTemplate = "    \n                <div class=\"card swiper-slide\">\n                    <img src=\"".concat(src, "\" alt=\"\" class=\"card__img\">\n                    <div class=\"card-content\">\n                        <div class=\"card-content__header\">").concat(header, "</div>\n                        <div class=\"card-content__text\">").concat(price, "</div>\n                    </div>\n                </div>\n            ");
      sliderWrapper.innerHTML += cardTemplate;
    });
  }

  function initSwiper() {
    var autoplayInterval = pricesData.autoplayIntervalMilliSec;
    var autoplayConfig = autoplayInterval != 0 ? {
      autoplay: {
        delay: autoplayInterval,
        disableOnInteraction: true
      }
    } : {};
    var swiper = new Swiper('.swiper-container', _objectSpread({
      direction: 'horizontal',
      loop: true,
      centeredSlides: true,
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      // autoplay: {
      // delay: 1300,
      // disableOnInteraction: true,
      // },
      slidesPerView: 'auto',
      spaceBetween: 10
    }, autoplayConfig));
    return swiper;
  }
}