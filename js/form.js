
document.addEventListener('DOMContentLoaded', () => {

const items = document.querySelectorAll('.carousel__item');
let index = 0;

function render(withEnter = false) {
  items.forEach(el => {
    el.classList.remove(
      'carousel__item--top',
      'carousel__item--main',
      'carousel__item--bottom',
      'carousel__item--exit',
      'carousel__item--enter'
    );
  });

  const main = index;
  const bottom = (index + 1) % items.length;
  const top = (index + 2) % items.length;

  items[main].classList.add('carousel__item--main');
  items[bottom].classList.add('carousel__item--bottom');
  items[top].classList.add('carousel__item--top');

  if (withEnter) {
    items[main].classList.add('carousel__item--enter');
  }
}

function nextSlide() {
  const currentMain = items[index];

  currentMain.classList.add('carousel__item--exit');

  currentMain.addEventListener(
    'animationend',
    () => {
      currentMain.classList.remove('carousel__item--exit');
      index = (index + 1) % items.length;
      render(true);
    },
    { once: true }
  );
}

render(true);
setInterval(nextSlide, 3000);





  const contactFullText = document.querySelector('[data-elem-id="1643490172735"]');
});



