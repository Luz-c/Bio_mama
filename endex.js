// Initialize Swiper with auto-slide functionality
document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        loop: true,
        effect: "fade",
        fadeEffect: {
            crossFade: true
        }
    });
    
    // Initialize Products Swiper
    var productsSwiper = new Swiper(".products-swiper", {
        spaceBetween: 40,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".products-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".products-next",
            prevEl: ".products-prev",
        },
        loop: true,
        speed: 800,
        effect: "slide",
        slidesPerView: 1,
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
            }
        }
    });
});

// Mobile menu toggle
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('bx-x');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.padding = '10px 5%';
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.padding = '15px 5%';
        header.style.background = 'var(--bg-color)';
        header.style.backdropFilter = 'none';
    }
});

// Active navigation based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('home-active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('home-active');
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.box, .heading, .about-text, .about img').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Form submission handler
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const email = form.querySelector('input[type="email"]').value;
        const message = form.querySelector('textarea').value;
        
        // Simple validation
        if (!email || !message) {
            alert('Veuillez remplir tous les champs.');
            return;
        }
        
        // Simulate form submission
        const button = form.querySelector('button');
        const originalText = button.textContent;
        
        button.textContent = 'Envoi en cours...';
        button.disabled = true;
        
        setTimeout(() => {
            button.textContent = 'Message envoyé !';
            button.style.background = 'var(--green-color)';
            
            // Reset form
            form.reset();
            
            setTimeout(() => {
                button.textContent = originalText;
                button.disabled = false;
                button.style.background = '';
            }, 3000);
        }, 2000);
    });
});

// Product hover effects
document.querySelectorAll('.product-image').forEach(image => {
    image.addEventListener('mouseenter', () => {
        image.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    image.addEventListener('mouseleave', () => {
        image.style.transform = 'translateY(0) scale(1)';
    });
});

// Category hover effects
document.querySelectorAll('.categories-container .box').forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.style.transform = 'translateY(-15px) scale(1.05)';
    });
    
    box.addEventListener('mouseleave', () => {
        box.style.transform = 'translateY(0) scale(1)';
    });
});



// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.container img');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add click animation to buttons
document.querySelectorAll('.btn, .btn-1').forEach(button => {
    button.addEventListener('click', function(e) {
        let ripple = document.createElement('span');
        let rect = this.getBoundingClientRect();
        let size = Math.max(rect.width, rect.height);
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
        ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
        ripple.style.position = 'absolute';
        ripple.style.background = 'rgba(255, 255, 255, 0.4)';
        ripple.style.borderRadius = '50%';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.pointerEvents = 'none';
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add staggered animation delays for boxes
document.querySelectorAll('.product-image').forEach((image, index) => {
    image.style.animationDelay = `${index * 0.1}s`;
});

document.querySelectorAll('.categories-container .box').forEach((box, index) => {
    box.style.animationDelay = `${index * 0.2}s`;
});

document.querySelectorAll('.customers-container .box').forEach((box, index) => {
    box.style.animationDelay = `${index * 0.15}s`;
});

// Add text typing animation
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Apply typing animation to main headings
document.addEventListener('DOMContentLoaded', function() {
    const mainHeading = document.querySelector('.home-text h1');
    if (mainHeading) {
        const originalText = mainHeading.textContent;
        setTimeout(() => {
            typeWriter(mainHeading, originalText, 40);
        }, 1000);
    }
});

// Add floating animation to social icons
document.querySelectorAll('.social .bx').forEach((icon, index) => {
    icon.style.animation = `float 3s ease-in-out ${index * 0.2}s infinite`;
});

// Add pulse animation to price elements
document.querySelectorAll('.price').forEach(price => {
    price.addEventListener('mouseenter', function() {
        this.style.animation = 'pulse 0.5s ease-in-out';
    });
    
    price.addEventListener('animationend', function() {
        this.style.animation = '';
    });
});

// Gallery filtering functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (filterButtons.length > 0 && galleryItems.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                button.classList.add('active');

                const filterValue = button.getAttribute('data-filter');

                galleryItems.forEach(item => {
                    const itemCategory = item.getAttribute('data-category');
                    
                    if (filterValue === 'all' || itemCategory === filterValue) {
                        item.classList.remove('hide');
                        item.classList.add('show');
                    } else {
                        item.classList.remove('show');
                        item.classList.add('hide');
                    }
                });
            });
        });
    }
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes float {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
    }
    
    @keyframes pulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
        100% {
            transform: scale(1);
        }
    }
`;
document.head.appendChild(style);
