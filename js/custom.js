$('#touch-menu').click(function () {
    $(this).stop(0).addClass('opened');
    $('#sticker').addClass('opened');
});
$('#sticker .close-menu,#sticker-overlay').click(function () {
    $('#touch-menu').stop(0).removeClass('opened');
    $('#sticker').removeClass('opened');
});
$(document).ready(function(){
    if ($('.sticker-menu').length) {
        fixmenu = function () {
          var scrollTop = $(window).scrollTop();
            if (scrollTop > 0){
              $('.sticker-menu').addClass('fixed');
            } else {
              $('.sticker-menu').removeClass('fixed');
            }            
        };
        fixmenu();
        $(window).on('scroll', function () {
          fixmenu();
        });
      }
    });
$(document).ready(function() {
    $('.icon-sr').click(function(){
        $('.search').toggleClass('active')
    });
    $('.menu-icon-toggle').on('click', function(e) {
        $('#header').toggleClass('open');
        $('.sticker').toggleClass('opend');
        $('.sub_menu').slideUp();
        e.preventDefault();
      });
      if ($(window).width() < 991) {
        $('.sticker-body>ul>li .icon-chevron ').click(function() {
            $(this).nextAll('.tbl').fadeToggle();
            $(this).nextAll('.sub_menu').slideToggle();
            $(this).children('i').toggleClass('fa-angle-down').toggleClass('fa-angle-up');
        });
    };
    $(document).ready(function() {
      if ($("#back-top").length) { var scrollTrigger = 0, backToTop = function () { var o = $(window).scrollTop(); scrollTrigger < o ? $("#back-top").addClass("show") : $("#back-top").removeClass("show") }; backToTop(), $(window).on("scroll", function () { backToTop() }), $("#back-top").on("click", function (o) { o.preventDefault(), $("html,body").animate({ scrollTop: 0 }, 700) }) }
    });
  });