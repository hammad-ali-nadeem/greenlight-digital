$(document).ready(function(){
  $('.website-slider').slick({
     infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  $('.text-slider').slick({
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows:false,
    autoplay:true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  $('.testimonial-slider').slick({
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  $('.website-slider1').slick({
    infinite: true,
   speed: 500,
   slidesToShow: 3,
   slidesToScroll: 1,
   responsive: [
     {
       breakpoint: 768,
       settings: {
         slidesToShow: 1
       }
     }
   ]
 });
 $(".open-menu").click(function(){
    $("nav.mobile-hidden").toggleClass("show");
 })
 $(".close").click(function(){
  $("nav.mobile-hidden").toggleClass("show");
})
});
