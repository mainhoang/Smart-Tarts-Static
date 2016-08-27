
(function(){

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('body').style.opacity = '1'
  'use strict';

})
  // best place to keep finished script (closure)
  
  var burger = document.querySelector('.hamburger-menu')
  var bar = document.querySelector('.bar')

  burger.addEventListener('click', function () {
    bar.classList.toggle('animate')
  })

})();
console.log('js works')
