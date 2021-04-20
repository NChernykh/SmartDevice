import Inputmask from 'inputmask';

const initMask = () => {
  const inputs = document.querySelectorAll('input[type="tel"]');
  const forms = document.querySelectorAll('form');
  const reg = /^\d[\d\(\)\ -]{10}\d$/;
  const im = new Inputmask('+7 (999) 999-99-99');
  im.mask(inputs);

  const validity = (regEx, input) => {
    return regEx.test(input.value);
  };

  forms.forEach((form) => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const phone = form.querySelector('input[type="tel"]');

      if (validity(reg, phone)) {
        document.getElementById('message').innerHTML = 'Заполните корректно';
      } else {
        form.submit();
      }
    });
  });
};

export {initMask};
