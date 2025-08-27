function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("showing");
}

function sendMessage(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  alert("Thank you, " + name + "! Your message has been sent successfully.");
  document.querySelector(".contact-form").reset();
}

// Animate Services on scroll
const services = document.querySelectorAll(".service");
const serviceIcons = document.querySelectorAll(".service i");

const servicesObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      services.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add("fade-in");
          serviceIcons[index].classList.add("pulse-once");
        }, index * 250);
      });
      obs.disconnect();
    }
  });
}, { threshold: 0.4 });

servicesObserver.observe(document.querySelector("#services"));

// Animate Reviews on scroll
const reviews = document.querySelectorAll(".review");

const reviewsObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      reviews.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add("fade-in");
        }, index * 250);
      });
      obs.disconnect();
    }
  });
}, { threshold: 0.4 });

reviewsObserver.observe(document.querySelector("#reviews"));

// Animate Contact Form on scroll
const contactForm = document.querySelector(".contact-form");

const contactObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      contactForm.classList.add("fade-in");
      obs.disconnect();
    }
  });
}, { threshold: 0.4 });

contactObserver.observe(document.querySelector("#contact"));

// Animate Hero + Navbar on page load
window.addEventListener("load", () => {
  // Navbar slide down
  document.querySelector("header").classList.add("nav-fade");

  // Hero fade in sequence
  const heroElements = document.querySelectorAll(".hero-content > *");
  heroElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("hero-fade");
    }, (index + 1) * 300);
  });
});
