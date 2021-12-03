const elHamburgerBtn = document.querySelector(".hamburger-menu");
const elHeader = document.querySelector(".header");

elHamburgerBtn.addEventListener('click', ()=> {
  elHeader.classList.toggle('header--open');
})