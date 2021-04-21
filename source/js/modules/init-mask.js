import Inputmask from 'inputmask';

const initMask = () => {
  const inputs = document.querySelectorAll('input[type="tel"]');
  const forms = document.querySelectorAll('form');
  const reg = /^[\d]{1}\ \([\d]{2,3}\)\ [\d]{2,3}-[\d]{2,3}-[\d]{2,3}$/;
  const im = new Inputmask('+7 (999) 999-99-99');
  im.mask(inputs);

  const validity = (regEx, value) => {
    return regEx.test(value);
  };

  forms.forEach((form) => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const phone = document.getElementById('tel').value;

      if (validity(reg, phone)) {
        document.getElementById('message').innerHTML = 'Заполните корректно';
      } else {
        form.submit();
      }
    });
  });
};

export {initMask};
