const hamburguer = document.querySelector('.navBar-btn');
const navMenu = document.querySelector('.navegacao');
const navMenuList = document.querySelector('.navegacao__item');

hamburguer.addEventListener('click', function () {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
    navMenuList.classList.toggle('active');
});