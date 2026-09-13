const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#main-nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
});
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#quote-form').addEventListener('submit', (event) => {
  event.preventDefault();
  document.querySelector('#form-note').textContent = 'Thanks — the enquiry connection will be switched on before launch.';
});
