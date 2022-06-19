const burger = document?.querySelector('[data-burger]');
const nav = document?.querySelector('[data-nav]');
const navHeader_a = nav?.querySelectorAll ('a');
const close = document?.querySelector('[data-close]');
const body = document.body;

burger?.addEventListener('click', () => {
    body.classList.add('stop-scroll');
    nav.classList.add('nav--visible')
});

navHeader_a.forEach(el => {
    el.addEventListener('click', () => {
        body.classList.remove('stop-scroll');
        nav.classList.remove('nav--visible');
        menu_header.classList.remove('menu_header--click');
    });
});

close?.addEventListener('click', () => {
    body.classList.toggle('stop-scroll');
    nav.classList.toggle('nav--visible')
});

const menu_header = document?.querySelector('.menu_header');

burger?.addEventListener('click', () => {
    menu_header.classList.add('menu_header--click')
});

close?.addEventListener('click', () => {
    menu_header.classList.toggle('menu_header--click')
});
