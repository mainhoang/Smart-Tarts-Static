
(function(){

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('body').style.opacity = '1'
  'use strict';

})
  // best place to keep finished script (closure)

  var burger = document.querySelector('.hamburger-menu')
  var bar = document.querySelector('.bar')
  var logo = document.querySelector('.logo')
  var dropin = document.querySelector('.drop-in')
  var cart = document.querySelector(".cart")
  var basket =document.querySelector(".cart-wrapper")


  burger.addEventListener('click', function () {
    bar.classList.toggle('animate')
    dropin.classList.toggle('animate-menu')
  })

  cart.addEventListener('click', function () {
    basket.classList.toggle('animate-menu')
  })

})();
console.log('js works')
