  // header
  
  const swiper1 = new Swiper('.swiper1', {
    loop: true,
    speed: 1000,

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },

    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },

    pagination: {
      el: '.swiper-pagination',
  },
  });
  
  // header

    // movies
  
  const swiper2 = new Swiper('.swiper2', {
    
    loop: true,

    slidesPerView: 1,
    spaceBetween: 20,
    
    breakpoints: {
      560: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      860: {
        slidesPerView: 3,
        spaceBetween: 60,
      },
      1220: {
        slidesPerView: 4,
        spaceBetween: 80,
      },
      1600: {
        slidesPerView: 5,
        spaceBetween: 100,
      },
    },
    
    navigation: {
      nextEl: '.about__slider-next',
      prevEl: '.about__slider-prev',
  },
  });
  
  // movies
  
  // menu
  
  let headerMenu = document.querySelector(".header__menu")
  let headerMenuLine = document.querySelector(".header__menu-line")
  let headerBurger = document.querySelector(".header__burger")
  let body = document.querySelector("body")
  let headerContent = document.querySelectorAll(".header__content")
  
  headerMenu.addEventListener("click", function () {
      headerMenuLine.classList.toggle("active")
      headerBurger.classList.toggle("active")
      body.classList.toggle("active")

      for (let i = 0; i < headerContent.length; i++) {
        headerContent[i].classList.toggle("active")
      }
  })
  
  // menu