$(document).ready(function(){
  $('.carousel').slick({
    adaptiveHeight:true,
    slidesToShow: 1 ,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<button type="button" class="slick-prev"><img src="../images/chevron left solid.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../images/chevron right solid.png"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false,
          dots: true
        }
      }
  ]});
});
$('[data-modal=consultation]').on('click', function(){
  $('.overlay, #consultation').fadeIn('slow');
});
$('.modal__close').on('click', function(){
  $('.overlay, #consutation, #thanks, #order').fadeOut('slow');
});

