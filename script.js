
    const hamburger = document.querySelector('.nav__hamburger');
    const menu = document.querySelector('.menu');
    const x = document.querySelector('.menu__x');
    const isMenuVisible = false;
    const toggleMenu = () => {
         menu.classList.toggle('menu--show');
         hamburger.classList.toggle('nav__hamburger--hide')
    }

    hamburger.addEventListener('click', toggleMenu);
    x.addEventListener('click', toggleMenu);
