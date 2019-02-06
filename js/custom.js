(function ($) {

  $(document).ready(function() {
      $('body').niceScroll();
  });

  $('.header-menu__btn').on('click', function() {
    $(this).toggleClass('active');
    $('.menu').toggleClass('active');
  });

})(jQuery);