export {};

declare let Swiper: any;

let isSliderStarted = false;
let currentIndex = 0;

const swiper = new Swiper('.thesis__swiper', {
  speed: 800,
  effect: 'fade',
  longSwipesRatio: 0.2,
  autoHeight: true,
  fadeEffect: {
    crossFade: true,
  },
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'custom',
    renderCustom: (swiper, current: string, total: string) =>
      `<span>0${current}</span> из 0${total}`,
  },
  breakpoints: {
    650: {
      autoHeight: false,
    },
  },
});

const swiper2 = new Swiper('.thesis__swiper-images', {
  speed: 800,
  allowTouchMove: false,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperBrands = new Swiper('.swiper_brands', {
  slidesPerView: 1,
  speed: 800,
  autoHeight: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination_brands',
    clickable: true,
  },
});

swiper.on('activeIndexChange', () => {
  if (isSliderStarted) {
    if (currentIndex === 0 || currentIndex === 6) {
      currentIndex = swiper.activeIndex;
      return;
    }
  } else {
    isSliderStarted = true;
  }

  if (currentIndex < swiper.activeIndex) {
    swiper2.slideNext(800);
  } else {
    swiper2.slidePrev(800);
  }
  currentIndex = swiper.activeIndex;
});
