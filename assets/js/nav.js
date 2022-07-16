$(function () {
  $('.subMenu').hide();
  $('.subMenu2').hide();
  $('.subMenu3').hide();

  // Hover on
  $('nav ul li').mouseenter(function (e) {
    e.preventDefault();
    $(this).find('> ul').stop().slideDown();
  })
  $('nav ul li').mouseleave(function (e) {
    e.preventDefault();
    $(this).find('> ul').stop().slideUp();
  })

})