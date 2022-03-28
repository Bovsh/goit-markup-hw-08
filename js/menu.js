(() => {
    const refs = {
      openMenuBtn: document.querySelector(".btn-header-open"),
      closeMenuBtn: document.querySelector(".btn-header-cross"),
      Menu: document.querySelector(".mob-menu"),
    };
  
    refs.openMenuBtn.addEventListener('click', togglemenu);
    refs.closeMenuBtn.addEventListener('click', togglemenu);
  
    function toggleMenu() {
      refs.menu.classList.toggle('is-hidden');
    }
  })();