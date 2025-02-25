// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hamburger menu functionality
function toggleNav() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    
    navbar.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Add scroll animations
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate sections on scroll
document.querySelectorAll('.feature, .intro, .cta-image').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Image lazy loading
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.loading = 'lazy';
    });
});

// Add hover effect to navigation items
const navItems = document.querySelectorAll('.navbar a');
navItems.forEach(item => {
    item.addEventListener('mouseover', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    item.addEventListener('mouseout', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    
    if (navbar.classList.contains('active') && 
        !e.target.closest('.navbar') && 
        !e.target.closest('.hamburger')) {
        navbar.classList.remove('active');
        hamburger.classList.remove('active');
    }
});