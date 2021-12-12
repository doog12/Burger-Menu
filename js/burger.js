// Developed by DOOG12

window.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.querySelector('.burger-menu')
  const burgerNav = document.querySelector('.burger-nav')
  const burgerNavLink = document.querySelectorAll('.burger-nav__link')

  burgerMenu.addEventListener('click', function () {
    burgerMenu.classList.toggle('active')
    burgerNav.classList.toggle('active')
  })

  for (let i = 0; i < burgerNavLink.length; i++) {
    burgerNavLink[i].addEventListener('click', () => {
      burgerMenu.classList.toggle('active')
      burgerNav.classList.toggle('active')
    })
  }
})