const btnOpenMenu = document.getElementById('js_btn-open-menu');
const btnCloseMenu = document.getElementById('js_btn-close-menu');
const navbar = document.getElementById('js_navbar');

function openMenu() {
     navbar.classList.add('active');     
}
function closeMenu() {
     navbar.classList.remove('active');
}
btnOpenMenu.addEventListener('click', openMenu);
btnCloseMenu.addEventListener('click', closeMenu);