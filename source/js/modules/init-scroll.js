const anchors = [].slice.call(document.querySelectorAll('[data-scroll]'));
// const animationTime = 600;
// const framesCount = 30;

const initScroll = () => {
  anchors.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();

      const blockID = item.getAttribute('href');
      document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  });
};

export {initScroll};
