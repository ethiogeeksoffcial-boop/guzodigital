// Guzo Digital - Interactive Features

// Smooth scroll for all anchor links (already handled by CSS scroll-behavior, but here for any dynamic needs)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Form submission handler (console log - replace with actual API call)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('Form submitted - Guzo Digital inquiry');
    alert('Thank you for reaching out! Guzo Digital will get back to you within 24 hours.');
    this.reset();
  });
}

// Navbar background change on scroll (optional enhancement)
window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.style.background = 'rgba(13, 13, 11, 0.98)';
    nav.style.backdropFilter = 'blur(16px)';
  } else {
    nav.style.background = 'rgba(13, 13, 11, 0.92)';
    nav.style.backdropFilter = 'blur(12px)';
  }
});

// Add a subtle animation on service cards (optional)
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.service-card, .portfolio-item, .pricing-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

console.log('Guzo Digital — Website loaded successfully');
