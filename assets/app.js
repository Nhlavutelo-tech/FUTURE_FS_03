// Loader
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) loader.classList.add('hidden');
    }, 800);
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    if (window.scrollY > 50) {
        navbar.style.padding = '1rem 5%';
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
    } else {
        navbar.style.padding = '1.5rem 5%';
        navbar.style.background = 'rgba(10, 10, 10, 0.8)';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Mobile menu toggle
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (!navLinks) return;

    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '100%';
    navLinks.style.left = '0';
    navLinks.style.right = '0';
    navLinks.style.flexDirection = 'column';
    navLinks.style.background = 'rgba(10, 10, 10, 0.98)';
    navLinks.style.padding = '2rem';
    navLinks.style.gap = '1.5rem';
    navLinks.style.borderBottom = '1px solid rgba(204, 255, 0, 0.2)';
}

const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMenu);
}

// Booking form handler
function handleBooking(e) {
    e.preventDefault();

    const form = e.target;
    const btn = form.querySelector('button[type="submit"]');
    if (!btn) return;

    const originalText = btn.textContent;

    btn.textContent = '✓ Booking Confirmed!';
    btn.style.background = '#25d366';

    setTimeout(() => {
        alert('🎉 Booking Confirmed!\n\nThank you for choosing Volley & Vibes.\nA confirmation email has been sent to your inbox.\n\nSee you on the court!');
        btn.textContent = originalText;
        btn.style.background = '';
        form.reset();
    }, 500);
}

const bookingForm = document.querySelector('form.booking-form');
if (bookingForm) {
    bookingForm.addEventListener('submit', handleBooking);
}

// Smooth scroll for anchor links
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

// Set minimum date to today
const dateInput = document.querySelector('input[type="date"]');
if (dateInput) {
    dateInput.min = new Date().toISOString().split('T')[0];
}

