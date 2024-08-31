document.addEventListener('DOMContentLoaded', function() {
    const profileImage = document.querySelector('.profile-image');

    const img = new Image();

    img.src = profileImage.getAttribute('data-src');

    img.onload = function() {
        profileImage.src = img.src; 
        profileImage.classList.add('loaded'); 
    };
});
