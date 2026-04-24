document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar");
  const burger = document.querySelectorAll(".burger");
  const sidebarBurger = document.querySelector(".sidebar-burger");

  burger.forEach((item) => {
    item.addEventListener("click", () => {
      sidebar.classList.toggle("active");
      sidebarBurger.classList.toggle("active");
      document.body.classList.toggle("overflow");
    });
  });

  const introSlider = new Swiper(".intro-slider", {
    loop: true,
    autoplay: {
      delay: 3500,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const bestsSlider = new Swiper(".bests-slider", {
    slidesPerView: 4,
    slidesPerGroup: 4,
    loop: true,
    autoplay: {
      delay: 3500,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 20,
  });

  const promoSlider = new Swiper(".promo-slider", {
    loop: true,
    autoplay: {
      delay: 3500,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const worksSlider = new Swiper(".works-slider", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    loop: true,
    // autoplay: {
    //   delay: 3500,
    // },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
