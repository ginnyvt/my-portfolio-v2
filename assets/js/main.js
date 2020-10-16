const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
	navMenu.classList.toggle('show');
});

const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach((link) => {
	link.addEventListener('click', (e) => {
		// e.preventDefault();
		navMenu.classList.remove('show');
	});
});

// Change Nav style On scroll
const header = document.getElementById('header');
const home = document.getElementById('home');
const sectionOneOptions = {
	rootMargin: '-650px 0px 0px 0px',
};

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
