'use strict';

(function () {
  var body = document.querySelector('.page-body');
  var pageHeader = body.querySelector('.page-header');
  var mainNav = body.querySelector('.main-nav');
  var navToggle = body.querySelector('.main-nav__toggle');

  if (pageHeader) {
    pageHeader.classList.remove('page-header--nojs');
  }

  if (mainNav) {
    mainNav.classList.remove('main-nav--nojs');
    mainNav.classList.remove('main-nav--opened');

    navToggle.addEventListener('click', function () {
      mainNav.classList.toggle('main-nav--opened');
      body.classList.toggle('page-body--main-nav-opened');
    });
  }
})();
