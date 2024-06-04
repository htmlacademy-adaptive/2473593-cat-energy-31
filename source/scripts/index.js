/* в этот файл добавляет скрипты*/
const nav = document.querySelector('.nav');
const navToggle = document.querySelector ('.nav__toggle');
const mainHeader = document.querySelector ('.main-header');
const mapNojs = document.querySelector ('.address__map-nojs');

mainHeader.classList.remove('main-header--nojs');
nav.classList.remove('nav--nojs');
mapNojs.classList.remove('address__map-nojs');

navToggle.addEventListener('click', () => {
  if (nav.classList.contains('nav--close')) {
    nav.classList.remove('nav--close');
    nav.classList.add('nav--open');
  } else {
    nav.classList.add('nav--close');
    nav.classList.remove('nav--open');
  }
});
