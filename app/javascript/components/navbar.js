const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('.navbar-replai');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight) {
        navbar.classList.add('navbar-replai-white');
      } else {
        navbar.classList.remove('navbar-replai-white');
      }
    });
  }
}

export { initUpdateNavbarOnScroll };
