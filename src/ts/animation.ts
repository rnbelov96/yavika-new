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
const brandsTableEl = document.querySelector('.js-brands-table') as HTMLDivElement || null;
const brandsMoreBtnEl = document.querySelector('.js-brands-more-btn');
const brandsTableElHeight = brandsTableEl.clientHeight;
brandsTableEl.style.height = '0';

brandsMoreBtnEl?.addEventListener('click', () => {
  brandsTableEl.style.height = isTableOpen ? '0' : `${brandsTableElHeight}px`;
  isTableOpen = !isTableOpen;
  brandsMoreBtnEl.textContent = isTableOpen ? 'Скрыть' : 'Смотрите еще';
  brandsMoreBtnEl.classList.toggle('more-btn_opened');
});
