/**
 * MA INSTITUTO PROFISSIONAL - Main JavaScript
 * Dynamic behavior, animations, cookie banner & WhatsApp integration.
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- MOBILE MENU TOGGLE ---
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-link, .nav-btn');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // --- HEADER SCROLL EFFECT ---
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // --- REVEAL ON SCROLL ANIMATION ---
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // Stop observing once revealed
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(element => {
    revealObserver.observe(element);
  });

  // --- COOKIE CONSENT BANNER ---
  const cookieBanner = document.getElementById('cookieBanner');
  const acceptCookies = document.getElementById('acceptCookies');
  const declineCookies = document.getElementById('declineCookies');

  // Helper: hide banner robustly regardless of CSS cache state
  function hideCookieBanner() {
    // 1. Immediately block interaction
    cookieBanner.style.pointerEvents = 'none';
    // 2. Animate out via CSS transition
    cookieBanner.classList.remove('show');
    // 3. Force opacity and slide via inline style (overrides any cached CSS)
    cookieBanner.style.opacity = '0';
    cookieBanner.style.transform = 'translateX(-50%) translateY(200%)';
    // 4. After animation, fully remove from layout
    setTimeout(() => {
      cookieBanner.style.display = 'none';
    }, 650);
  }

  if (cookieBanner && acceptCookies && declineCookies) {
    // Check if user already consented
    const cookieConsent = localStorage.getItem('cookie_consent_ma');
    if (!cookieConsent) {
      // Small delay to make it feel smooth on load
      setTimeout(() => {
        cookieBanner.classList.add('show');
        // Ensure inline styles don't block display
        cookieBanner.style.display = '';
        cookieBanner.style.opacity = '';
        cookieBanner.style.transform = '';
        cookieBanner.style.pointerEvents = '';
      }, 1500);
    } else {
      // Already consented: keep hidden from the start
      cookieBanner.style.display = 'none';
    }

    acceptCookies.addEventListener('click', () => {
      localStorage.setItem('cookie_consent_ma', 'accepted');
      hideCookieBanner();
    });

    declineCookies.addEventListener('click', () => {
      localStorage.setItem('cookie_consent_ma', 'declined');
      hideCookieBanner();
    });
  }

  // --- COMPLIANT WHATSAPP FORM HANDLING ---
  const contactForm = document.getElementById('whatsappForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('formName');
      const messageInput = document.getElementById('formMessage');

      if (!nameInput || !messageInput) return;

      const name = nameInput.value.trim();
      const message = messageInput.value.trim();

      if (!name || !message) {
        alert('Por favor, preencha todos os campos do formulário.');
        return;
      }

      // WhatsApp Configuration
      const phoneNumber = '5511913124813'; // Official number
      const introText = `Olá, MA Instituto Profissional! Meu nome é ${name}.\n\n`;
      const fullText = `${introText}${message}`;
      const encodedText = encodeURIComponent(fullText);

      // Construct API URL
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedText}`;

      // Open in a new tab
      window.open(whatsappUrl, '_blank');

      // Optional: clear form
      contactForm.reset();
    });
  }
});
