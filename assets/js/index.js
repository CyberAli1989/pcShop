$(function () {
  $('.more').hide();
  $('.more2').hide();
  $('.bx-loader-alt').hide();
  let moreCount =0;
  $('#product h4').click(function (e) {
    $('.bx-loader-alt').show();
    setTimeout(function () {
      $('.more').slideDown(1500)
      moreCount++;
      if (moreCount >1){
        $('.more2').slideDown(1500)
      }
      $('.bx-loader-alt').hide();

    },3000)
  })
  AOS.init({
    useClassNames: true,
    initClassName: false,
    startEvent: 'DOMContentLoaded',
    disableMutationObserver: true,
    offset: 300,
  });
})