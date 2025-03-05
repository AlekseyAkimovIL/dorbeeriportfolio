const menuBtn = document.querySelector('.burger-button');
const menu = document.querySelector('.header__menu');

menuBtn.addEventListener('click', () => {
   menu.classList.toggle('menu--open');
   menuBtn.classList.toggle('active');
});
