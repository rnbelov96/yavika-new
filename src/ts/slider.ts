export {};

declare let Swiper: any;

const swiper = new Swiper('.thesis__swiper', {
  speed: 800,
  effect: 'fade',
  longSwipesRatio: 0.2,
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
    renderCustom: (swiper, current, total) => {
      return `<span>0${current}</span> из 0${total}`;
    },
    // renderFraction: (currentClass: string, totalClass: string) => `
    //   <span class='${currentClass}'>0</span> из <span class='${totalClass}'>0</span>
    //   `,
  },
});

swiper.on('activeIndexChange', () => {});
