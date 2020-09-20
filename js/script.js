// slick
$('.card-slick').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow:false,
  nextArrow:false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$(".prevBtn").click(function(){
  $(".card-slick").slick("slickPrev");
})

$(".nextBtn").click(function(){
  $(".card-slick").slick("slickNext");
});


AOS.init();

const nav_our_menu = document.querySelector(".nav-our-menu");
nav_our_menu.addEventListener("click", function(){
  const sub_menu = document.querySelector(".menu-responsive .sub-menu");
  sub_menu.classList.toggle("active");
})

const open_menu_responsive = document.querySelector(".open-menu-responsive");
open_menu_responsive.addEventListener("click", function(){
  const menu_responsive = document.querySelector(".menu-responsive");
  menu_responsive.classList.add("active");
})

const close_menu_responsive = document.querySelector(".close-menu-responsive");
close_menu_responsive.addEventListener("click", function(){
  const menu_responsive = document.querySelector(".menu-responsive");
  menu_responsive.classList.remove("active");
})

var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true
});


$(document).ready(function(){
  $(".control-child").click(function(){
    const value = $(this).attr('data-filter');
    if(value == 'all'){
      $(".list-menu").show('5000');
    }
    else{
      $(".list-menu").not('.' + value).hide('5000');
      $(".list-menu").filter('.' + value).show('5000');
    }
  })
})

