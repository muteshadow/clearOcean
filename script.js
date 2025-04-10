AOS.init();

$(document).ready(function () {
    // NAV-TOGGLE
    $('.burger-menu').click(function () {
        $(this).toggleClass('active');
        $('.nav').toggleClass('active');
    });

    // Stat
    function animateCountUp(element, target) {
        let count = 0;
        const duration = 2000;
        const increment = target / (duration / 16);
        function update() {
            count += increment;
            if (count >= target) {
                element.textContent = target;
            } else {
                element.textContent = Math.floor(count);
                requestAnimationFrame(update);
            }
        }
        update();
    }

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const number = entry.target;
                const target = +number.getAttribute('data-target');
                animateCountUp(number, target);
                observer.unobserve(number); // анімація тільки раз
            }
        });
    }

    const options = { threshold: 0.6 };
    const observer = new IntersectionObserver(handleIntersection, options);
    document.querySelectorAll('.number').forEach(el => observer.observe(el));
});
