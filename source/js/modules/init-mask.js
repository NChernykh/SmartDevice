// const inputs = document.querySelectorAll('input[type="tel"]');

// const initMask = () => {
//   'use srtrict';

//   Array.prototype.forEach.call(inputs, function (input) {
//     new inputMask ({
//       selector: input,
//       layout: input.dataset.mask
//     })
//   });

//   function inputMask (options) {
//     this.el = this.getElement(options.selector);
//     if (!this.el) return console.log('Что-то не так с селектором');
//     this.layout = options.layout || '+_ (___) ___-__-__';
//     this.maskreg = this.getRegexp();

//     this.setListeners();
//   }

//   inputMask.prototype.getRegexp = function () {
//     let str = this.layout.replace(/_/g, '\\d');
//     str = str.replace(/\(/g, '\\(');
//     str = str.replace(/\)/g, '\\)');
//     str = str.replace(/\+/g, '\\+');
//     str = str.replace(/\s/g, '\\s');

//     return str;
//   };

//   inputMask.prototype.mask = function (e) {
//     let _this = e.target;
//     const matrix = this.layout;
//     let i = 0;
//     const def = matrix.replace(/\D/g, '');
//     let val = _this.value.replace(/\D/g, '');

//     if (def.length >= val.length) {
//       val = def;
//     }

//     _this.value = matrix.replace(/./g, function (a) {
//       return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
//     });

//     if (e.type === 'blur') {
//       const regexp = new RegExp(this.maskreg);
//       if (!regexp.test(_this.value)) {
//         _this.value = '';
//       }
//     } else {
//       this.setCursorPosition(_this.value.length, _this);
//     }
//   };

//   inputMask.prototype.setCursorPosition = function (pos, elem) {
//     elem.focus();
//     if (elem.setSelectionRange) {
//       elem.setSelectionRange(pos, pos);
//     } else if (elem.createTextRange) {
//       var range = elem.createTextRange();
//       range.collapse(true);
//       range.moveEnd("character", pos);
//       range.moveStart("character", pos);
//       range.select();
//     }
//   };

//   inputMask.prototype.setListeners = function () {
//     this.el.addEventListener("input", this.mask.bind(this), false);
//     this.el.addEventListener("focus", this.mask.bind(this), false);
//     this.el.addEventListener("blur", this.mask.bind(this), false);
//   };

//   inputMask.prototype.getElement = function  (selector) {
//     if (selector === undefined) return false;
//     if (this.isElement(selector)) return selector;
//     if (typeof selector == 'string') {
//       var el = document.querySelector(selector);
//       if (this.isElement(el)) return el;
//     }
//     return false;
//   };

//   inputMask.prototype.isElement = function(element) {
//     return element instanceof Element || element instanceof HTMLDocument;
//   };
// };

// export {initMask};
