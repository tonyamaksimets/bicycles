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

'use strict';

(function () {
  var inputs = document.querySelectorAll('input');

  var regExp = /[0-9]/;

  var onInputInput = function (input) {
    return function () {
      if (!input.value && input.matches('[required]')) {
        input.setCustomValidity('Обязательное поле');
        input.parentNode.classList.add('request-form__field--invalid');
      } else if (input.value && input.matches('[type = "tel"]') && !regExp.test(input.value)) {
        input.setCustomValidity('Телефон должен содержать только цифры');
        input.parentNode.classList.add('request-form__field--invalid');
      } else {
        input.setCustomValidity('');
        input.parentNode.classList.remove('request-form__field--invalid');
      }

      input.reportValidity();
    };
  };

  if (inputs) {
    inputs.forEach(function (input) {
      input.addEventListener('input', onInputInput(input));
    });
  }
})();

'use strict';

(function () {
  var video = document.querySelector('video');
  var controlButton = document.querySelector('.video__control');

  var onControlButtonClick = function () {
    video.setAttribute('controls', true);
    video.play();
    controlButton.classList.add('hidden');
    video.addEventListener('pause', onVideoPause);
  };

  var onVideoPause = function () {
    video.removeAttribute('controls');
    controlButton.classList.remove('hidden');
    video.removeEventListener('click', onVideoPause);
  };

  if (video && controlButton) {
    video.removeAttribute('controls');

    controlButton.addEventListener('click', onControlButtonClick);
  }
})();
