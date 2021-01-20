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
