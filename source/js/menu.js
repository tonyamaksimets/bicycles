'use strict';

(function () {
  var pageHeader = document.querySelector('.page-header');
  var mainNav = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.main-nav__toggle');

  if (pageHeader) {
    pageHeader.classList.remove('page-header--nojs');
  }

  if (mainNav) {
    mainNav.classList.remove('main-nav--nojs');
    mainNav.classList.remove('main-nav--opened');

    navToggle.addEventListener('click', function () {
      mainNav.classList.toggle('main-nav--opened');
    });
  }

})();
