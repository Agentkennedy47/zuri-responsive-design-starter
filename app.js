const menuSlide = () => {
  const menuBar = document.querySelector(".menu-bar");
  const navLinks = document.querySelector(".nav-links");

  menuBar.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
  });
}

menuSlide();