document.addEventListener('DOMContentLoaded', () => {

  const items = document.querySelectorAll('.carousel__item');

  let index = 0;
  let timer;
  let isAnimating = false;

  function isMobile() {
    return window.innerWidth <= 640;
  }

  function render(prevIndex = null) {
    const mobile = isMobile();

    // Сначала убираем все классы у всех элементов
    items.forEach(el => {
      el.className = 'carousel__item';
      el.style.transition = 'none';
      el.style.opacity = '';
      el.style.transform = '';
    });

    if (mobile) {
      // На мобильной версии показываем только один активный слайд
      items[index].classList.add('carousel__item--main');
      items[index].style.transition = 'transform 1.5s cubic-bezier(.22,.61,.36,1), opacity 0.8s ease';
    } else {
      // На десктопе показываем три слайда
      const prev = (index - 1 + items.length) % items.length;
      const next = (index + 1) % items.length;

      // Добавляем классы для всех слайдов
      items[prev].classList.add('carousel__item--top');
      items[index].classList.add('carousel__item--main');
      items[next].classList.add('carousel__item--bottom');

      // Транзишн только для активного слайда
      items[index].style.transition = 'transform 2s cubic-bezier(.22,.61,.36,1), opacity 1.5s ease';
    }
  }

  function nextSlide() {
    if (isAnimating) return;
    isAnimating = true;

    const prevIndex = index;
    index = (index + 1) % items.length;
    
    const mobile = isMobile();
    
    if (mobile) {
      // На мобильной версии просто меняем слайд
      render(prevIndex);
      
      setTimeout(() => {
        isAnimating = false;
      }, 1500); // Ждем окончания анимации
    } else {
      // На десктопе используем анимацию ухода
      items[prevIndex].classList.add('carousel__item--exit');

      items[prevIndex].addEventListener('animationend', () => {
        items[prevIndex].classList.remove('carousel__item--exit');
        render();
        isAnimating = false;
      }, { once: true });

      render();
    }
  }

  // Обработчик ресайза для переключения между мобильной и десктопной версией
  window.addEventListener('resize', () => {
    // Сбрасываем все классы и анимации
    items.forEach(el => {
      el.className = 'carousel__item';
      el.style.transition = 'none';
      el.classList.remove('carousel__item--exit');
    });
    
    render();
    
    // Перезапускаем таймер
    if (timer) {
      clearInterval(timer);
    }
    timer = setInterval(nextSlide, isMobile() ? 4000 : 3000);
  });

  // Запуск
  render();
  timer = setInterval(nextSlide, isMobile() ? 4000 : 3000);

  const contactFullText = document.querySelector('[data-elem-id="1643490172735"]');
});

// document.addEventListener('DOMContentLoaded', () => {

//   const items = document.querySelectorAll('.carousel__item');

//   let index = 0;
//   let timer;

//   function isMobile() {
//     return window.innerWidth <= 640;
//   }

//   function render(prevIndex = null) {
//     const mobile = isMobile();

//     items.forEach(el => {
//       if (!el.classList.contains('carousel__item--exit')) {
//         el.className = 'carousel__item';
//       }
//       el.style.transition = 'none';
//       el.classList.add('carousel__item--top');
//     });

//     if (mobile) {
//       items[index].classList.add('carousel__item--main');
//     } else {
//       const prev = (index - 1 + items.length) % items.length;
//       const next = (index + 1) % items.length;

//       items[index].classList.add('carousel__item--main');
//       items[index].style.transition = 'transform 2s cubic-bezier(.22,.61,.36,1), opacity 1.5s ease';

//       items[prev].classList.add('carousel__item--top');
//       items[next].classList.add('carousel__item--bottom');
//     }
//   }

//   function nextSlide() {
//     const prevIndex = index;
//     index = (index + 1) % items.length;
//     items[prevIndex].classList.add('carousel__item--exit');

//     items[prevIndex].addEventListener('animationend', () => {
//       items[prevIndex].classList.remove('carousel__item--exit');
//       render(); 
//     }, { once: true });

//     render();
//   }

//   window.addEventListener('resize', () => render());

//   render();
//   timer = setInterval(nextSlide, 3000);

//   const contactFullText = document.querySelector('[data-elem-id="1643490172735"]');
// });

// const swiper = new Swiper('.swiper', {
//   direction: 'vertical',        // базовое направление для десктопа
//   slidesPerView: 3,
//   centeredSlides: true,
//   loop: true,
//   speed: 1500,
//   spaceBetween: -240,

//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },

//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//       spaceBetween: 50,

//     },
//     641: {
//       slidesPerView: 3,
//       spaceBetween: -240,
//     }
//   },

//   on: {
//     slideChange(swiper) {
//       swiper.slides.forEach(slide =>
//         slide.classList.remove('is-active')
//       );
//       swiper.slides[swiper.activeIndex].classList.add('is-active');
//     },
//   }
// });

// // слушаем изменение ширины окна и меняем направление
// function updateSwiperDirection() {
//   if (window.innerWidth <= 640) {
//     swiper.changeDirection('horizontal');
//   } else {
//     swiper.changeDirection('vertical');
//   }
// }

// // при загрузке и при ресайзе
// updateSwiperDirection();
// window.addEventListener('resize', updateSwiperDirection);








//   const contactFullText = document.querySelector('[data-elem-id="1643490172735"]');
// });



