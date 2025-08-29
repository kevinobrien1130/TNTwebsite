// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth"
      });
    }
  });
});

// Contact form (demo only)
document.querySelector(".contact-form")?.addEventListener("submit", e => {
  e.preventDefault();
  alert("Thank you! Your message has been sent. (Demo mode)");
});
