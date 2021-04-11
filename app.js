const menuSlide = () => {
  const menuBar = document.querySelector('.menu-bar');
  const nav = document.querySelector('.nav-links');

  menuBar.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  });
}

menuSlide();