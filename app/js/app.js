document.querySelector(".burger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".menu").classList.toggle("open");
});

const swiper = new Swiper(document.getElementById("slider"), {
  //! Основные настройки
  direction: 'horizontal', // 'vertical', 'horizontal'
  speed: 500, // скорость переключения слайдов
  effect: 'slider', // cards, coverflow, flip, fade, cube
  initialSlide: 1, // Начинаем со 2 слайдера
  freeMode: true, // можно перетаскивать как ленту
  slidesPerView: 1, // кол-во активных слайдов
  spaceBetween: 20,
  breakpoints: {
    455: {
      slidesPerView: 2, // кол-во активных слайдов
    },
  },
});