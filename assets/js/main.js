const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
	navMenu.classList.toggle('show');
});

const header = document.getElementById('header');
const home = document.getElementById('home');
const sectionOneOptions = {
	rootMargin: '-650px 0px 0px 0px',
};

// Smooth scroll
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach((link) => {
	link.addEventListener('click', (e) => {
		e.preventDefault();
		const id = e.currentTarget.getAttribute('href').slice(1);
		const element = document.getElementById(id);
		const navHeight = header.getBoundingClientRect().height;
		const fixedNav = header.classList.contains('fixed');
		let position = element.offsetTop - navHeight;
		if (!fixedNav) {
			position = position - navHeight;
		}
		window.scrollTo({
			left: 0,
			top: position,
		});

		console.log(position);
		navMenu.classList.remove('show');
	});
});

// Change Nav style On scroll
const sectionObserverOne = new IntersectionObserver(
	(entries, sectionObserverOne) => {
		entries.forEach((entry) => {
			if (!entry.isIntersecting) {
				header.classList.add('fixed');
			} else {
				header.classList.remove('fixed');
			}
		});
	},
	sectionOneOptions
);

sectionObserverOne.observe(home);

// Smooth scroll

// const scrollLinks = document.querySelectorAll('.scroll__link');

// scrollLinks.forEach((link)=>{
// 	link.addEventListener
// })
