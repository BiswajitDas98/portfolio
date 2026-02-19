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
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
