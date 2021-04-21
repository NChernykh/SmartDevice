import Inputmask from 'inputmask';

const feedbackForm = document.getElementById('form');
const formInput = feedbackForm.querySelector('input[type="tel"]');
const modal = document.getElementById('modal');
const modalInput = modal.querySelector('input[type="tel"]');

const initMask = () => {

  const im = new Inputmask('+7 (999) 999-99-99', {removeMaskOnSubmit: true});
  im.mask(formInput);
  im.mask(modalInput);

  const validateForm = (form, input) => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      if (input.value.length < 10) {
        const message = document.createElement('span');
        message.classList.add('message');
        form.append(message);
        message.innerHTML = 'Введите полный номер';
        setTimeout(() => {
          message.innerHTML = '';
        }, 2000);
      } else {
        form.submit();
      }
    });
  };

  validateForm(feedbackForm, formInput);
  validateForm(modal, modalInput);
};

export {initMask};
