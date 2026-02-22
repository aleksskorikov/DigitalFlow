document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.carousel__item');
  const selects = document.querySelectorAll('.carousel-select');
  
  let index = 0;
  let timer;
  let isMobileView = window.innerWidth <= 640;

  if (isMobileView) {
    const activeIndex = Array.from(items).findIndex(el => el.classList.contains('carousel__item--main'));
    index = activeIndex !== -1 ? activeIndex : 0;
  }

  function isMobile() {
    return window.innerWidth <= 640;
  }

  function syncSelects() {
    selects.forEach(select => {
      select.value = index % 5;
    });
  }

  function render(prevIndex = null) {
    const mobile = isMobile();
    
    if (mobile) {
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

  function nextSlide() {
    if (isMobile()) return; 
    
    const prevIndex = index;
    index = (index + 1) % items.length;
    
    items[prevIndex].classList.add('carousel__item--exit');

    items[prevIndex].addEventListener('animationend', () => {
      items[prevIndex].classList.remove('carousel__item--exit');
      render();
    }, { once: true });

    render(prevIndex);
  }

  selects.forEach(select => {
    select.addEventListener('change', e => {
      if (!isMobile()) return;
      
      const value = Number(e.target.value);
      const base = Math.floor(index / 3) * 3;
      index = base + value;
      
      if (index >= items.length) {
        index = value;
      }
      
      render();
    });
  });

  window.addEventListener('resize', () => {
    const wasMobile = isMobileView;
    isMobileView = isMobile();
    
    items.forEach(el => {
      el.className = 'carousel__item';
      el.style.transition = 'none';
      el.classList.remove('carousel__item--exit');
    });
    
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
    
    render();
    
    if (!isMobile()) {
      timer = setInterval(nextSlide, 3000);
    }
  });

  render();
  
  if (!isMobile()) {
    timer = setInterval(nextSlide, 3000);
  }

  const contactFullText = document.querySelector('[data-elem-id="1643490172735"]');
});

