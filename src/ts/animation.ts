export {};

const animationElList = [
  ...document.querySelectorAll('.animateX'),
  ...document.querySelectorAll('.animateY'),
  ...document.querySelectorAll('.animateX-reverse'),
];

const titleElList = document.querySelectorAll('.js-title');

const windowHeight = document.documentElement.clientHeight;

setTimeout(() => {
  window.addEventListener('scroll', () => {
    const winTop = window.pageYOffset;

    titleElList.forEach(elem => {
      if (elem.classList.contains('.js-title_animated')) {
        return;
      }

      const topCoords = elem.getBoundingClientRect().top + window.pageYOffset;

      if (winTop > topCoords - windowHeight * 0.75) {
        elem.classList.add('js-title_animated');
      }
    });

    animationElList.forEach(elem => {
      if (elem.classList.contains('animated')) {
        return;
      }

      const topCoords = elem.getBoundingClientRect().top + window.pageYOffset;

      if (winTop > topCoords - windowHeight * 0.75) {
        elem.classList.add('animated');
      }
    });
  });
}, 500);

let isTableOpen = false;
const brandsTableEl = (document.querySelector('.js-brands-table') as HTMLDivElement) || null;
const brandsMoreBtnEl = document.querySelector('.js-brands-more-btn');
const brandsTableElHeight = brandsTableEl.clientHeight;
brandsTableEl.style.height = '0';

brandsMoreBtnEl?.addEventListener('click', () => {
  brandsTableEl.style.height = isTableOpen ? '0' : `${brandsTableElHeight}px`;
  isTableOpen = !isTableOpen;
  brandsMoreBtnEl.textContent = isTableOpen ? 'Скрыть' : 'Смотрите еще';
  brandsMoreBtnEl.classList.toggle('more-btn_opened');
});

let isStockOpen = false;
const stockEl = (document.querySelector('.js-stock-table') as HTMLDivElement) || null;
const stockMoreBtnEl = document.querySelector('.js-stock-more-btn');
const stockElHeight = stockEl.clientHeight;
stockEl.style.height = '0';

stockMoreBtnEl?.addEventListener('click', () => {
  stockEl.style.height = isStockOpen ? '0' : `${stockElHeight}px`;
  isStockOpen = !isStockOpen;
  stockMoreBtnEl.textContent = isStockOpen ? 'Скрыть' : 'Смотрите еще';
  stockMoreBtnEl.classList.toggle('more-btn_opened');
  stockMoreBtnEl.classList.toggle('stock__btn_opened');
});

let isStepsOpen = false;
const stepsEl = (document.querySelector('.js-steps-table') as HTMLDivElement) || null;
const stepsMoreBtnEl = document.querySelector('.js-steps-more-btn');
const arrowEl = document.querySelector('.steps__item_fourth');
const stepsElHeight = stepsEl.offsetHeight;
stepsEl.style.overflow = 'hidden';
stepsEl.style.height = '0';

stepsMoreBtnEl?.addEventListener('click', () => {
  stepsEl.style.height = isStepsOpen ? '0' : `${stepsElHeight}px`;
  stepsEl.style.overflow = isStepsOpen ? 'hidden' : 'initial';
  isStepsOpen = !isStepsOpen;
  stepsMoreBtnEl.textContent = isStepsOpen ? 'Скрыть' : 'Смотрите еще';
  stepsMoreBtnEl.classList.toggle('more-btn_opened');
  stepsMoreBtnEl.classList.toggle('steps__btn_opened');
  arrowEl?.classList.toggle('steps__item_fourth_closed');
});
