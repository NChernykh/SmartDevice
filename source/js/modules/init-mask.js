import Inputmask from 'inputmask';

const initMask = () => {
  const inputs = document.querySelectorAll('input[type="tel"]');
  const im = new Inputmask('+7 (999) 999-99-99');
  im.mask(inputs);
};

export {initMask};
