// script.js - simple mobile nav and form feedback
document.addEventListener('DOMContentLoaded', function () {
  // set current year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.getElementById('main-nav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      mainNav.style.display = expanded ? '' : 'block';
    });
  }

  // basic client-side form submission feedback (non-server)
  const membershipForm = document.getElementById('membership-form');
  if (membershipForm) {
    membershipForm.addEventListener('submit', function (e) {
      e.preventDefault();
      // HTML5 validation will have already run; confirm to user
      alert('Thank you for registering! (This is a demo — form data is not sent.)');
      membershipForm.reset();
    });
  }

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Message sent (demo).');
      contactForm.reset();
    });
  }
});