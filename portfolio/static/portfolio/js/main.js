document.addEventListener("DOMContentLoaded", function () {

    // Initialize AOS (animations on scroll)
    AOS.init({
        duration: 1000,
        once: true
    });

    // Hero typing effect
    const typingElement = document.getElementById("typing");
    if (typingElement) {
        new Typed("#typing", {
            strings: JSON.parse(typingElement.dataset.roles),
            typeSpeed: 60,
            backSpeed: 40,
            loop: true
        });
    }

    // Smooth scrolling for navbar links
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });


});
