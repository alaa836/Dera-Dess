const header = document.querySelector("header");
window.addEventlistener("scroll", function() {
    header.classList.toggle("sticky", window.scrolly > 80);
});
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classlist.toggle('bx-x');
    navlist.classlist.toggle('open');
};
window.onscroll = () => {
    menu.classlist.remove('bx-x');
    navlist.classlist.remove('open');

};
const sr = ScrollReveal({
    origin: 'top',
    distance: '85px',
    duration: 2500,
    reset: true
})

sr.reveal('.home-text', { delay: 300 });
sr.reveal('.home-img', { delay: 400 });
sr.reveal('.container', { delay: 400 });

sr.reveal('.about-img', {});
sr.reveal('.about-text', { delay: 300 });

sr.reveal('.middle-text', {});
sr.reveal('.row-btn,.shop-content', { delay: 300 });

sr.reveal('.review-content,.contact', { delay: 300 });