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
