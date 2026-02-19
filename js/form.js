

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



// document.addEventListener('DOMContentLoaded', () => {

//   const items = document.querySelectorAll('.carousel__item');
//   const select = document.querySelector('.carousel-select');

//   let index = 0;
//   let timer = null;

//   function isMobile() {
//     return window.innerWidth <= 640;
//   }

//   /* ================= DESKTOP ================= */

//   function renderDesktop() {
//     items.forEach(el => {
//       if (!el.classList.contains('carousel__item--exit')) {
//         el.className = 'carousel__item';
//       }
//       el.style.transition = 'none';
//     });

//     const prev = (index - 1 + items.length) % items.length;
//     const next = (index + 1) % items.length;

//     items[index].classList.add('carousel__item--main');
//     items[index].style.transition =
//       'transform 2s cubic-bezier(.22,.61,.36,1), opacity 1.5s ease';

//     items[prev].classList.add('carousel__item--top');
//     items[next].classList.add('carousel__item--bottom');
//   }

//   function nextSlide() {
//     if (isMobile()) return;

//     const prevIndex = index;
//     index = (index + 1) % items.length;

//     items[prevIndex].classList.add('carousel__item--exit');

//     items[prevIndex].addEventListener('animationend', () => {
//       items[prevIndex].classList.remove('carousel__item--exit');
//       renderDesktop();
//     }, { once: true });

//     renderDesktop();
//   }

//   /* ================= MOBILE ================= */

//   function renderMobile(activeIndex = index) {
//     items.forEach(el => el.classList.remove('is-active'));
//     items[activeIndex].classList.add('is-active');
//   }

//   /* ================= INIT ================= */

//   function init() {
//     if (isMobile()) {
//       // mobile
//       clearInterval(timer);
//       timer = null;
//       renderMobile(index);
//     } else {
//       // desktop
//       renderDesktop();
//       if (!timer) {
//         timer = setInterval(nextSlide, 3000);
//       }
//     }
//   }

//   /* ================= EVENTS ================= */

//   if (select) {
//     select.addEventListener('change', e => {
//       index = Number(e.target.value);
//       renderMobile(index);
//     });
//   }

//   window.addEventListener('resize', init);

//   init();
// });



// document.addEventListener('DOMContentLoaded', () => {
//   const items = Array.from(document.querySelectorAll('.carousel__item'));
//   const selects = document.querySelectorAll('.carousel-select');

//   let index = items.findIndex(el =>
//     el.classList.contains('carousel__item--main')
//   );

//   if (index === -1) index = 0;

//   function isMobile() {
//     return window.innerWidth <= 640;
//   }

//   /* ---------- sync selects ---------- */

//   function syncSelects() {
//     selects.forEach(select => {
//       select.value = index % 3;
//     });
//   }

//   /* ---------- render ---------- */

//   function render() {
//     items.forEach(el => {
//       el.classList.remove(
//         'carousel__item--top',
//         'carousel__item--main',
//         'carousel__item--bottom'
//       );
//     });

//     const prev = (index - 1 + items.length) % items.length;
//     const next = (index + 1) % items.length;

//     items[prev].classList.add('carousel__item--top');
//     items[index].classList.add('carousel__item--main');
//     items[next].classList.add('carousel__item--bottom');

//     syncSelects();
//   }

//   /* ---------- select change ---------- */

//   selects.forEach(select => {
//     select.addEventListener('change', e => {
//       const value = Number(e.target.value);
//       const base = Math.floor(index / 3) * 3;
//       index = base + value;

//       if (index >= items.length) {
//         index = value;
//       }

//       render();
//     });
//   });

//   /* ---------- init ---------- */

//   render();
// });




document.addEventListener('DOMContentLoaded', () => {
  // Общие элементы
  const items = document.querySelectorAll('.carousel__item');
  const selects = document.querySelectorAll('.carousel-select');
  
  let index = 0;
  let timer;
  let isMobileView = window.innerWidth <= 640;

  // Определяем начальный индекс для мобильной версии
  if (isMobileView) {
    const activeIndex = Array.from(items).findIndex(el => el.classList.contains('carousel__item--main'));
    index = activeIndex !== -1 ? activeIndex : 0;
  }

  // Функция определения мобильной версии
  function isMobile() {
    return window.innerWidth <= 640;
  }

  // Синхронизация селектов (только для мобильной версии)
  function syncSelects() {
    selects.forEach(select => {
      select.value = index % 3;
    });
  }

  // Основная функция рендера
  function render(prevIndex = null) {
    const mobile = isMobile();
    
    if (mobile) {
      // МОБИЛЬНАЯ ВЕРСИЯ - один слайд с селектами
      items.forEach(el => {
        el.classList.remove(
          'carousel__item--top',
          'carousel__item--main',
          'carousel__item--bottom',
          'carousel__item--exit'
        );
      });

      const prev = (index - 1 + items.length) % items.length;
      const next = (index + 1) % items.length;

      items[prev].classList.add('carousel__item--top');
      items[index].classList.add('carousel__item--main');
      items[next].classList.add('carousel__item--bottom');
      
      syncSelects();
    } else {
      // ДЕСКТОПНАЯ ВЕРСИЯ - три слайда с анимацией
      items.forEach(el => {
        if (!el.classList.contains('carousel__item--exit')) {
          el.className = 'carousel__item';
        }
        el.style.transition = 'none';
        el.classList.add('carousel__item--top');
      });

      const prev = (index - 1 + items.length) % items.length;
      const next = (index + 1) % items.length;

      items[index].classList.add('carousel__item--main');
      items[index].style.transition = 'transform 2s cubic-bezier(.22,.61,.36,1), opacity 1.5s ease';
      items[prev].classList.add('carousel__item--top');
      items[next].classList.add('carousel__item--bottom');
    }
  }

  // Функция для десктопного переключения
  function nextSlide() {
    if (isMobile()) return; // Не работает на мобилках
    
    const prevIndex = index;
    index = (index + 1) % items.length;
    
    items[prevIndex].classList.add('carousel__item--exit');

    items[prevIndex].addEventListener('animationend', () => {
      items[prevIndex].classList.remove('carousel__item--exit');
      render();
    }, { once: true });

    render(prevIndex);
  }

  // Обработчики для селектов (только для мобильной версии)
  selects.forEach(select => {
    select.addEventListener('change', e => {
      if (!isMobile()) return; // Только на мобилках
      
      const value = Number(e.target.value);
      const base = Math.floor(index / 3) * 3;
      index = base + value;
      
      if (index >= items.length) {
        index = value;
      }
      
      render();
    });
  });

  // Обработчик ресайза окна
  window.addEventListener('resize', () => {
    const wasMobile = isMobileView;
    isMobileView = isMobile();
    
    // Сбрасываем все классы и анимации при смене режима
    items.forEach(el => {
      el.className = 'carousel__item';
      el.style.transition = 'none';
      el.classList.remove('carousel__item--exit');
    });
    
    // Останавливаем десктопный таймер если он есть
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
    
    // Рендерим для нового режима
    render();
    
    // Запускаем десктопный таймер если нужно
    if (!isMobile()) {
      timer = setInterval(nextSlide, 3000);
    }
  });

  // Инициализация
  render();
  
  // Запускаем десктопный таймер если не мобилка
  if (!isMobile()) {
    timer = setInterval(nextSlide, 3000);
  }

  const contactFullText = document.querySelector('[data-elem-id="1643490172735"]');
});