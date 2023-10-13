$(document).ready(function () {
    $('.carousel__inner').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 700,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/prev_arrow.svg"></button>',
		    nextArrow: '<button type="button" class="slick-next"><img src="../icons/next_arrow.svg"></button>',
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
              }
            }
          ]
      });
});

$('[data-modal=marina_modal]').on('click', function(){
    $('.overlay, #marina').fadeIn('slow');
});
$('.modal__close').on('click', function(){
    $('.overlay, #marina').fadeOut('slow');
});

window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.header__info'),
  menuItem = document.querySelectorAll('.header__info-item'),
  hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('header__info_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('header__info_active');
      })
  })
})