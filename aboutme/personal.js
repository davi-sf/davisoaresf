document.addEventListener('DOMContentLoaded', function() {
    let menuIcon = document.querySelector('#menu-icon');
    let navBar = document.querySelector('.navbar');
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('bx-x');
        navBar.classList.toggle('active');
    });
});
