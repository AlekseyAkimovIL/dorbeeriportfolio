document.addEventListener('DOMContentLoaded', function() {
   const slider = document.querySelector('.swiper');

   let mySwiper = new Swiper(slider, {
      slidesPerView: 1,
      loop: true,
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },
   });
});