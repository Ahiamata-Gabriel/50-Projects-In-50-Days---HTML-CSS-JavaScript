const button = document.getElementById('toggle');
const nav = document.getElementById('nav');

const toggleActive = () => {
  nav.classList.toggle('active');
};

button.addEventListener('click', toggleActive);
