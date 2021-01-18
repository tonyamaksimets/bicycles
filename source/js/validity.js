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
