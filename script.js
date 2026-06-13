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

// Form submission handler - posts silently to Google Form via hidden iframe
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('Form submitted - Guzo Digital inquiry');

    // Submit the form to Google Forms via the hidden iframe
    // The form has target="hidden_iframe" so it won't redirect the page
    this.submit();

    // Show success message
    alert('Thank you for reaching out! Guzo Digital will get back to you within 24 hours.');

    // Reset the form after a short delay to allow submission to complete
    setTimeout(() => {
      this.reset();
    }, 500);
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

// TikTok video modal
const tiktokModal = document.getElementById('tiktokModal');
const tiktokModalEmbed = document.getElementById('tiktokModalEmbed');
const tiktokModalOverlay = document.getElementById('tiktokModalOverlay');
const tiktokModalClose = document.getElementById('tiktokModalClose');

// Open modal when clicking a portfolio item with data-tiktok attribute
document.querySelectorAll('.pitem-clickable').forEach(item => {
  item.addEventListener('click', function() {
    const tiktokUrl = this.getAttribute('data-tiktok');
    if (tiktokUrl) {
      // Create TikTok embed iframe
      tiktokModalEmbed.innerHTML = `
        <iframe src="https://www.tiktok.com/embed/v2/${tiktokUrl.split('/video/')[1]}" 
                allowfullscreen
                allow="autoplay; encrypted-media">
        </iframe>
      `;
      tiktokModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  });
});

// Close modal functions
function closeTikTokModal() {
  tiktokModal.classList.remove('active');
  tiktokModalEmbed.innerHTML = '<!-- TikTok embed will be loaded here -->';
  document.body.style.overflow = '';
}

tiktokModalClose.addEventListener('click', closeTikTokModal);
tiktokModalOverlay.addEventListener('click', closeTikTokModal);

// Close on Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && tiktokModal.classList.contains('active')) {
    closeTikTokModal();
  }
});

console.log('Guzo Digital — Website loaded successfully');
