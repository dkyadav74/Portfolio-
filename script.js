// Toggle mobile menu
document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("nav-links").classList.toggle("show");
});

// Close menu on link click (mobile)
document.querySelectorAll('#nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById("nav-links").classList.remove("show");
  });
});

// Contact form interaction
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks! Your message has been sent.");
  this.reset();
});

// Section reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
});
document.querySelectorAll('.section').forEach(sec => observer.observe(sec));

// Back to Top button
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
