// Smooth Scroll
// Listening for click events
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Handling
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);

    // Perform AJAX request or form submission logic here
});

// Menu Animations
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
menuToggle.addEventListener('click', function() {
    nav.classList.toggle('active');
});
