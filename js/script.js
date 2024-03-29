window.addEventListener('DOMContentLoaded', () =>{
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,
        autoplay:{
            delay: 4000,
            disableOnInteraction: false,
        },
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });

})
