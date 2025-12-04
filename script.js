// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

// Close nav on link click (mobile)
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
  });
});

// Contact form (front-end only)
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you! Your message is recorded (demo form).");
  contactForm.reset();
});

// Dynamic year in footer
const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();
