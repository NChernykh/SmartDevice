const trigger = document.querySelectorAll('.footer__subtitle');
const parentElem = document.querySelector('.footer__top');

const initAccordion = () => {
  const getItem = (elements, className) => {
    let element;
    elements.forEach(function (item) {
      if (item.classList.contains(className)) {
        element = item;
      }
    });
    return element;
  };

  const hideContent = () => {
    trigger.forEach((item) => {
      item.classList.remove('footer__subtitle--show');
    });
  };

  const showContent = (i = 0) => {
    trigger[i].classList.add('footer__subtitle--show');
  };

  hideContent();
  showContent();

  parentElem.addEventListener('click', (event) => {
    const target = event.target;
    if (target && target.classList.contains('footer__subtitle')) {
      trigger.forEach((item, i) => {
        const itemShow = getItem(trigger, 'footer__subtitle--show');
        if (target === item) {
          if (!itemShow) {
            showContent(i);
          } else {
            hideContent();
            if (itemShow !== item) {
              showContent(i);
            }
          }
        }
      });
    }
  });
};

export {initAccordion};
