(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-button]'),
    mobileMenu: document.querySelector('[data-menu]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.mobileMenu.classList.toggle('is-open');
  }
})();
