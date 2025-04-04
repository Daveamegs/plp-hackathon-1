

document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-icon');
    const navLink = document.querySelector('.nav-links');
    
    menuBtn.addEventListener('click', function() {
        navLink.classList.toggle('active');
        
        // Animate hamburger icon
        this.classList.toggle('change');
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLink.classList.remove('active');
            menuBtn.classList.remove('change');
        });
    });
});