
(function(){

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('body').style.opacity = '1'
  'use strict';

})
  // best place to keep finished script (closure)

  var burger = document.querySelector('.hamburger-menu')
  var bar = document.querySelector('.bar')
  var logo = document.querySelector('.logo')
  var dropin = document.querySelector('.dropin')

  burger.addEventListener('click', function () {
    bar.classList.toggle('animate')
    dropin.classList.toggle('animate-menu')
    logo.classList.toggle('hide-menu-item')
  })

})();
console.log('js works')
