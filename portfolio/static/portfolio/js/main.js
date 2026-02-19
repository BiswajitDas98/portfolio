document.addEventListener("DOMContentLoaded", function () {

    // Initialize AOS animations
    AOS.init({
        duration: 1000,
        once: true
    });

    // Typed.js for Hero section
    const typingElement = document.getElementById("typing");
    if (typingElement) {
        new Typed("#typing", {
            strings: JSON.parse(typingElement.dataset.roles),
            typeSpeed: 60,
            backSpeed: 40,
            loop: true
        });
    }

    // Smooth scrolling for nav links
    const navLinks = document.querySelectorAll('a.nav-link');
    const sections = document.querySelectorAll('section');

    function focusSection(targetId) {
        sections.forEach(sec => {
            if (sec.id === targetId) {
                sec.classList.remove("section-blur"); // active section clear
            } else {
                sec.classList.add("section-blur");    // others blurred
            }
        });
    }

    // Initial focus on hero
    focusSection("hero");

    // Optional: on scroll, highlight the section in viewport
    window.addEventListener("scroll", function () {
        let scrollPos = window.scrollY + 100; // offset for navbar
        sections.forEach(sec => {
            if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
                focusSection(sec.id);
            }
        });
    });

    // Circular Skill Charts
    document.querySelectorAll(".skill-circle").forEach(function(el){
        const skillPercentage = parseFloat(el.dataset.percentage)/100;

        var bar = new ProgressBar.Circle(el, {
            color: '#3b82f6',
            trailColor: '#1e293b',
            strokeWidth: 8,
            trailWidth: 5,
            duration: 1500,
            easing: 'easeInOut',
            text: {
                value: '0%',
                style: {
                    color: '#fff',
                    fontSize: '18px'
                }
            },
            from: { color: '#3b82f6', width: 8 },
            to: { color: '#3b82f6', width: 8 },
            step: function(state, circle) {
                circle.setText(Math.round(circle.value() * 100) + '%');
            }
        });

        bar.animate(skillPercentage);
    });

});
