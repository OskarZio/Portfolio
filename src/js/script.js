const navbar = document.querySelector('.nav__navbar')
const burgerBtn = document.querySelector('.hamburger')
const body = document.querySelector('body')
const elementsAnimated = document.querySelectorAll('.animation')

const openNav = () => {
	navbar.classList.toggle('nav__navbar--active')
	body.classList.toggle('sticky-body')
	burgerBtn.classList.toggle('is-active')
}

burgerBtn.addEventListener('click', openNav)

const observerFadeUp = new IntersectionObserver(
	entries => {
		entries.forEach(entry => {
			entry.target.classList.toggle('show-fade-up', entry.isIntersecting)
			if (entry.isIntersecting) observerFadeUp.unobserve(entry.target)
		})
	},
	{ threshold: 0.4 }
)

elementsAnimated.forEach(el => {
	observerFadeUp.observe(el)
})
