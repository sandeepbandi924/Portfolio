// Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetSection.offsetTop - 70, // Adjust for fixed navbar height
            behavior: 'smooth'
        });
    });
});

// Fade-in Animation for Cards on Scroll
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));

// Add fade-in class in CSS (via style.css)
document.styleSheets[0].insertRule(`
    .fade-in {
        animation: fadeIn 0.5s ease-in forwards;
    }
`, document.styleSheets[0].cssRules.length);

document.styleSheets[0].insertRule(`
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`, document.styleSheets[0].cssRules.length);


document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        },
    });
});


