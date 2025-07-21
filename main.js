const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const menu = document.getElementById('menu');
const menuLinks = menu.querySelectorAll('a');

menuToggle.addEventListener('click', () => {
  menu.classList.remove('translate-x-full');
});

menuClose.addEventListener('click', () => {
  menu.classList.add('translate-x-full');
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.add('translate-x-full');
  });
});

document.addEventListener('click', (event) => {
  if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
    menu.classList.add('translate-x-full');
  }
}); 