const hamburgerMenu = document.querySelector('.hamburger-menu')
const menu = document.querySelector('.menu')

const toggleMenu = () => {
  menu.classList.toggle('menu-toggle')
}


hamburgerMenu.addEventListener('click', toggleMenu)