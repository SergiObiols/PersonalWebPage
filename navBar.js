const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.nav-hamburger');

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('open');
  });
});