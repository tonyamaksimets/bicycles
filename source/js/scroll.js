'use strict';

(function () {
  var body = document.querySelector('.page-body');
  var mainNav = body.querySelector('.main-nav');
  var anchors = body.querySelectorAll('a[href*="#"]');

  if (anchors) {
    anchors.forEach(function (anchor) {
      anchor.addEventListener('click', function (evt) {
        evt.preventDefault();

        var target = anchor.getAttribute('href').slice(1);

        if (mainNav) {
          mainNav.classList.remove('main-nav--opened');
        }

        body.classList.remove('page-body--main-nav-opened');

        document.getElementById(target).scrollIntoView({behavior: 'smooth', block: 'start'});
      });
    });
  }
})();
