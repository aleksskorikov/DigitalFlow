
document.addEventListener('DOMContentLoaded', () => {

const items = document.querySelectorAll('.carousel__item');
const pagination = document.querySelector('.careers-pagination');

let index = 0; 
let timer;

function isMobile() {
  return window.innerWidth <= 640;
}

pagination.innerHTML = ''; 
items.forEach((_, i) => {
  const dot = document.createElement('div');
  dot.classList.add('careers-pagination__dot');

  dot.addEventListener('click', () => {
    index = i;
    render();
    restartAutoplay();
  });

  pagination.appendChild(dot);
});

const dots = document.querySelectorAll('.careers-pagination__dot');

function render() {
  const mobile = isMobile();

  items.forEach(el => el.className = 'carousel__item'); 
  dots.forEach(dot => dot.classList.remove('active'));

  if (mobile) {

    items[index].classList.add('carousel__item--main');
  } else {
    const prev = (index - 1 + items.length) % items.length;
    const next = (index + 1) % items.length;

    items[index].classList.add('carousel__item--main');
    items[prev].classList.add('carousel__item--top');
    items[next].classList.add('carousel__item--bottom');
  }

  dots[index].classList.add('active');
}

function nextSlide() {
  index = (index + 1) % items.length;
  render();
}

function restartAutoplay() {
  clearInterval(timer);
  timer = setInterval(nextSlide, 2500);
}

window.addEventListener('resize', () => {
  render();
});

render();
timer = setInterval(nextSlide, 2500);



  const contactFullText= document.querySelector('[data-elem-id="1643490172735"]');

});









