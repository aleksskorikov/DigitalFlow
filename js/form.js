
document.addEventListener('DOMContentLoaded', () => {

// const items = document.querySelectorAll('.carousel__item');
// let index = 0;

// function render(withEnter = false) {
//   items.forEach(el => {
//     el.classList.remove(
//       'carousel__item--top',
//       'carousel__item--main',
//       'carousel__item--bottom',
//       'carousel__item--exit',
//       'carousel__item--enter'
//     );
//   });

//   const main = index;
//   const bottom = (index + 1) % items.length;
//   const top = (index + 2) % items.length;

//   items[main].classList.add('carousel__item--main');
//   items[bottom].classList.add('carousel__item--bottom');
//   items[top].classList.add('carousel__item--top');

//   if (withEnter) {
//     items[main].classList.add('carousel__item--enter');
//   }
// }

// function nextSlide() {
//   const currentMain = items[index];

//   currentMain.classList.add('carousel__item--exit');

//   currentMain.addEventListener(
//     'animationend',
//     () => {
//       currentMain.classList.remove('carousel__item--exit');
//       index = (index + 1) % items.length;
//       render(true);
//     },
//     { once: true }
//   );
// }

// render(true);
// setInterval(nextSlide, 3000);

const swiper = new Swiper('.swiper', {
  direction: 'vertical',        // базовое направление для десктопа
  slidesPerView: 3,
  centeredSlides: true,
  loop: true,
  speed: 1500,
  spaceBetween: -240,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 50,

    },
    641: {
      slidesPerView: 3,
      spaceBetween: -240,
    }
  },

  on: {
    slideChange(swiper) {
      swiper.slides.forEach(slide =>
        slide.classList.remove('is-active')
      );
      swiper.slides[swiper.activeIndex].classList.add('is-active');
    },
  }
});

// слушаем изменение ширины окна и меняем направление
function updateSwiperDirection() {
  if (window.innerWidth <= 640) {
    swiper.changeDirection('horizontal');
  } else {
    swiper.changeDirection('vertical');
  }
}

// при загрузке и при ресайзе
updateSwiperDirection();
window.addEventListener('resize', updateSwiperDirection);








  const contactFullText = document.querySelector('[data-elem-id="1643490172735"]');
});



