$(document).ready(function () {
    $('.carousel__inner').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 700,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/prev_arrow.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="../icons/next_arrow.svg"></button>',
      });
});

$('[data-modal=marina_modal]').on('click', function(){
    $('.overlay, #marina').fadeIn('slow');
});
$('.modal__close').on('click', function(){
    $('.overlay, #marina').fadeOut('slow');
});