$(function () {
  let show = true;
  $('.topNavToggle').click(function () {

    $(this).find('> i').removeClass('bx-chevron-down').addClass('bx-chevron-up');
    $('.topNavToggle').css('height', '35px');
    $('.topNav .hr').fadeIn();
    $('.topNav ul').slideDown();

    if (show) {
      $(this).find('> i').addClass('bx-chevron-down').removeClass('bx-chevron-up')
      $('.topNav ul').slideUp();
      $('.topNavToggle').css('height', '10px');
      $('.topNav .hr').fadeOut();
    }

    show = !show;
  })
})