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

const sr = ScrollReveal({
	origin: 'top',
	distance: '80px',
	duration: 2000,
	reset: true,
});

/*SCROLL HOME*/
sr.reveal('.home__title', {});
sr.reveal('.button', { delay: 200 });
sr.reveal('.home__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {});
sr.reveal('.skills__text', {});
sr.reveal('.skills__data', { interval: 200 });
sr.reveal('.skills__img', { delay: 600 });

/*SCROLL WORK*/
sr.reveal('.work__img', { interval: 200 });

/*SCROLL CONTACT*/
sr.reveal('.contact__input', { interval: 200 });
