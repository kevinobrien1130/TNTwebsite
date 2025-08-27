// Handle Navbar Background on Scroll
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Toggle Mobile Menu
function toggleMenu() {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("showing");
}

// Animate Elements on Scroll
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("appear");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Pulse Animation for Get Started Button
const heroButton = document.querySelector("#hero button");
if (heroButton) {
  heroButton.addEventListener("mouseenter", () => {
    heroButton.classList.add("pulse-once");
  });
  heroButton.addEventListener("animationend", () => {
    heroButton.classList.remove("pulse-once");
  });
}
