new Swiper('.testimonials__carousel-wrapper', {
    // Optional parameters
    loop: true,
    // slidesPerView: 'auto', // Автоматично підлаштовує ширину під слайд
    // centeredSlides: true, // Центрує активний слайд
    // spaceBetween: 500, // Без проміжків між слайдами
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    breakpoints: {
        0: {
            slidesPerView: 1
        }
    },

  });

