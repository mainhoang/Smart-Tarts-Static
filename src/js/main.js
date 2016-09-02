
(function(){

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('body').style.opacity = '1'
  'use strict';

})
  // best place to keep finished script (closure)

  var burger = document.querySelector('.hamburger-menu')
  var bar = document.querySelector('.bar')
  var logo = document.querySelector('.logo')
  var centerLinks = document.querySelector(".center-links")
  var dropin = document.querySelector('.drop-in')
  var cart = document.querySelector(".cart")
  var burgerCart = document.querySelector(".burger-cart")
  var basket = document.querySelector(".basket")
  var basketX = document.querySelector(".close-basket")
  var notMasked = document.querySelector(".no-mask")


  burger.addEventListener('click', function () {
    bar.classList.toggle('animate')
    dropin.classList.toggle('animate-menu')
    
  })

  burgerCart.addEventListener("click", function(){
    basket.classList.add("slide");
    notMasked.classList.add("mask");
  })

  cart.addEventListener('click', function () {
    basket.classList.add("slide");
    logo.style.opacity = "0";
    centerLinks.style.opacity = "0";
    notMasked.classList.add("mask");
  })

  basketX.addEventListener('click', function () {
    basket.classList.remove("slide");
    basket.classList.add("close-basket");
    logo.style.opacity = "1";
    centerLinks.style.opacity = "1";
    notMasked.classList.remove("mask");
  })

})();
console.log('js works')
