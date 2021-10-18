// Developed by DOOG12

let burgerMenu = document.querySelector('.burger-menu')
let burgerNav = document.querySelector('.burger-nav')

burgerMenu.addEventListener('click', function() {
   burgerMenu.classList.toggle('active')
   burgerNav.classList.toggle('active')
})