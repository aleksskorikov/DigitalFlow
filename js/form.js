
document.addEventListener('DOMContentLoaded', () => {

  const items = document.querySelectorAll('.carousel__item');

  let index = 0;
  let timer;

  function isMobile() {
    return window.innerWidth <= 640;
  }

  function render(prevIndex = null) {
    const mobile = isMobile();

    items.forEach(el => {
      if (!el.classList.contains('carousel__item--exit')) {
        el.className = 'carousel__item';
      }
      el.style.transition = 'none';
      el.classList.add('carousel__item--top');
    });

    if (mobile) {
      items[index].classList.add('carousel__item--main');
    } else {
      const prev = (index - 1 + items.length) % items.length;
      const next = (index + 1) % items.length;

      items[index].classList.add('carousel__item--main');
      items[index].style.transition = 'transform 2s cubic-bezier(.22,.61,.36,1), opacity 1.5s ease';

      items[prev].classList.add('carousel__item--top');
      items[next].classList.add('carousel__item--bottom');
    }
  }

  function nextSlide() {
    const prevIndex = index;
    index = (index + 1) % items.length;
    items[prevIndex].classList.add('carousel__item--exit');

    items[prevIndex].addEventListener('animationend', () => {
      items[prevIndex].classList.remove('carousel__item--exit');
      render(); 
    }, { once: true });

    render();
  }

  window.addEventListener('resize', () => render());

  render();
  timer = setInterval(nextSlide, 3000);

  const contactFullText = document.querySelector('[data-elem-id="1643490172735"]');
});



