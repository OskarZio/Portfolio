const navbar = document.querySelector('.nav__navbar')
const burgerBtn = document.querySelector('.hamburger')
const body = document.querySelector('body')

const openNav = () => {
	navbar.classList.toggle('nav__navbar--active')
    body.classList.toggle('sticky-body')
}

burgerBtn.addEventListener('click', openNav)
