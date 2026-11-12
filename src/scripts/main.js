const revealElements = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < window.innerHeight) {
      element.classList.add("reveal--visible");
    }
  });
});

const contactForm = document.querySelector(".contacts__form");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  contactForm.reset();
});
