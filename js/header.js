const burger = document.querySelector('.header__burger'),
      nav1 = document.querySelector('.header__nav.header__nav--left'),
      nav2 = document.querySelector('.header__nav.header__nav--right'),
      background = document.querySelector('.background');

burger.addEventListener('click', () => {
    nav1.classList.toggle('header__nav--visible');
    nav2.classList.toggle('header__nav--visible');
    background.style.background = "url('/img/main-cover.jpg') 32% 96% / cover no-repeat, #2a2824;";
})