"use strict";

var _$$slick, _$$slick2, _$$slick3;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$('.sliderHero').slick({
  slidesToShow: 1,
  centerMode: false,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: 'ease',
  dots: true,
  infinite: true,
  arrows: false
});
$('#carousel-marcas').slick({
  slidesToShow: 5,
  centerMode: true,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 1500,
  cssEase: 'ease',
  dots: false,
  infinite: true,
  arrows: false,
  responsive: [{
    breakpoint: 480,
    settings: {
      slidesToShow: 5,
      variableWidth: true
    }
  }, {
    breakpoint: 640,
    settings: {
      slidesToShow: 5,
      variableWidth: true
    }
  }, {
    breakpoint: 768,
    settings: {
      slidesToShow: 5,
      variableWidth: true
    }
  }]
});
$('#carousel-Square').slick({
  slidesToShow: 3,
  centerMode: false,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  cssEase: 'ease',
  dots: true,
  infinite: true,
  arrows: false,
  responsive: [{
    breakpoint: 480,
    settings: {
      slidesToShow: 1
    }
  }, {
    breakpoint: 640,
    settings: {
      slidesToShow: 3
    }
  }, {
    breakpoint: 768,
    settings: {
      slidesToShow: 3
    }
  }]
});
$('#carousel-Square2').slick({
  slidesToShow: 3,
  centerMode: false,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  cssEase: 'ease',
  dots: true,
  infinite: true,
  arrows: false
});
$('.carousel-comentarios1').slick((_$$slick = {
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
}, _defineProperty(_$$slick, "dots", true), _defineProperty(_$$slick, "arrows", false), _$$slick));
$('.carousel-comentarios2').slick((_$$slick2 = {
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
}, _defineProperty(_$$slick2, "dots", true), _defineProperty(_$$slick2, "arrows", false), _$$slick2));
$('.carousel-comentarios3').slick((_$$slick3 = {
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
}, _defineProperty(_$$slick3, "dots", true), _defineProperty(_$$slick3, "arrows", false), _$$slick3));
$('#carousel-marcasMobile').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 1500,
  cssEase: 'ease',
  dots: false,
  infinite: true,
  arrows: false
});
var items = document.querySelectorAll(".modal");
items.forEach(function (element) {
  element.addEventListener('click', function () {
    var modal = element.getAttribute('data-target');
    var a = document.querySelector('.' + modal);
    $(a).fadeIn('fast');

    window.onclick = function (event) {
      if (event.target == a) {
        $(a).fadeOut('fast');
      }
    };
  });
});
var menu = document.querySelector('.menuHamburguer');
menu.addEventListener('click', function () {
  if ($('.menu').is(':hidden')) {
    $('.menu').fadeIn("fast");
    $('.menuHamburguer').find("a").find("img").fadeToggle("fast");
    $('.menuHamburguer').find("a").find("img").attr('src', './img/svg/menu-close.svg');
    $('.menuHamburguer').find("a").find("img").fadeToggle("fast");
  } else {
    $('.menu').fadeOut("fast");
    $('.menuHamburguer').find("a").find("img").fadeToggle("fast");
    $('.menuHamburguer').find("a").find("img").attr('src', './img/svg/menu.svg');
    $('.menuHamburguer').find("a").find("img").fadeToggle("fast");
  }
});
var drops = document.querySelectorAll('.dropdown');
drops.forEach(function (element) {
  element.addEventListener('click', function () {
    $(element.nextSibling.nextSibling).toggleClass('rotate');
    var dropdown = element.nextSibling.nextSibling.nextSibling.nextSibling;
    $(dropdown).slideToggle("slow");
  });
});
$('.dropdownUbicacion').click(function () {
  // $(this.nextSibling).slideToggle();
  $(this).next().slideToggle();
  $(this).toggleClass('rotate');
});