'use strict';

(function () {
  var headerMain = document.querySelector('.page-header__nav');
  var menuToggle = document.querySelector('.page-header__menu-toggle');
  headerMain.classList.remove('page-header__nav--nojs');


  menuToggle.addEventListener('click', function () {
    if (headerMain.classList.contains('page-header__nav--closed')) {
      headerMain.classList.remove('page-header__nav--closed');
      headerMain.classList.add('page-header__nav--opened');
    } else {
      headerMain.classList.add('page-header__nav--closed');
      headerMain.classList.remove('page-header__nav--opened');

    }
  });
})();
